using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.CodeDom;
using System.Text.RegularExpressions;
using System.Numerics;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public static class TypeRefBuilder
	{
		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns>Item3 indicate whether to be complex type.</returns>
		public static Tuple<CodeTypeReference, bool, bool> GetOperationReturnTypeReference(OpenApiOperation op)
		{
			string complexTypeName = GetOperationReturnComplexTypeReference(op);
			bool stringAsString = false;
			if (complexTypeName == null)
			{
				Tuple<CodeTypeReference, bool> r = GetOperationReturnSimpleTypeReference(op);
				CodeTypeReference primitiveTypeReference = r.Item1;
				stringAsString = r.Item2;
				return Tuple.Create(primitiveTypeReference ?? null, stringAsString, false);
			}

			if (TypeAliasDic.Instance.TryGet(complexTypeName, out string typeAlias))
			{
				return Tuple.Create(new CodeTypeReference(typeAlias), stringAsString, true);
			}
			else if (Char.IsLower(complexTypeName[0])) //uspto.yaml has component names in camelCase.
			{
				string adjustedTypeName = ToTitleCase(complexTypeName);
				return Tuple.Create(new CodeTypeReference(adjustedTypeName), stringAsString, true);
			}

			return Tuple.Create(new CodeTypeReference(complexTypeName), stringAsString, true);
		}

		static string ToTitleCase(string s)
		{
			return String.IsNullOrEmpty(s) ? s : (char.ToUpper(s[0]) + (s.Length > 1 ? s.Substring(1) : String.Empty));
		}


		/// <summary>
		/// Translate OpenApiMediaType content to CodeTypeReference
		/// </summary>
		/// <param name="content"></param>
		/// <returns></returns>
		public static CodeTypeReference OpenApiMediaTypeToCodeTypeReference(OpenApiMediaType content)
		{
			string schemaType = content.Schema.Type;
			if (schemaType != null)
			{
				if (schemaType == "array") // for array
				{
					OpenApiSchema arrayItemsSchema = content.Schema.Items;
					if (arrayItemsSchema.Reference != null) //array of custom type
					{
						string arrayTypeName = arrayItemsSchema.Reference.Id;
						CodeTypeReference arrayCodeTypeReference = CreateArrayOfCustomTypeReference(arrayTypeName, 1);
						return arrayCodeTypeReference;
					}
					else
					{
						string arrayType = arrayItemsSchema.Type;
						Type clrType = PrimitiveSwaggerTypeToClrType(arrayType, null);
						CodeTypeReference arrayCodeTypeReference = CreateArrayTypeReference(clrType, 1);
						return arrayCodeTypeReference;
					}
				}
				else if (content.Schema.Enum.Count == 0) // for primitive type
				{
					Type simpleType = PrimitiveSwaggerTypeToClrType(content.Schema.Type, content.Schema.Format);
					CodeTypeReference codeTypeReference = new CodeTypeReference(simpleType);
					return codeTypeReference;
				}

				string schemaFormat = content.Schema.Format;
				return new CodeTypeReference(PrimitiveSwaggerTypeToClrType(schemaType, schemaFormat));
			}

			return null;
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns>CodeTypeReference of the return type, and StringAsString generally with text/plain</returns>
		public static Tuple<CodeTypeReference, bool> GetOperationReturnSimpleTypeReference(OpenApiOperation op)
		{
			if (op.Responses.TryGetValue("200", out OpenApiResponse goodResponse))
			{
				CodeTypeReference codeTypeReference;

				if (goodResponse.Content.TryGetValue("application/json", out OpenApiMediaType content)) // application/json has better to be first.
				{
					codeTypeReference = OpenApiMediaTypeToCodeTypeReference(content);
					return Tuple.Create(codeTypeReference, false);
				}

				if (goodResponse.Content.TryGetValue("text/plain", out content))
				{
					if (content.Schema != null)
					{
						string schemaType = content.Schema.Type;
						if (schemaType != null)
						{
							string schemaFormat = content.Schema.Format;
							Type type = PrimitiveSwaggerTypeToClrType(schemaType, schemaFormat);
							return Tuple.Create(new CodeTypeReference(type), type == typeOfString);
						}
					}
				}

			}

			return Tuple.Create<CodeTypeReference, bool>(null, false);
		}

		/// <summary>
		/// https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md
		/// https://swagger.io/specification/
		/// </summary>
		/// <param name="type"></param>
		/// <param name="format"></param>
		/// <returns></returns>
		public static Type PrimitiveSwaggerTypeToClrType(string type, string format)
		{
			string key = type + (String.IsNullOrEmpty(format) ? String.Empty : ("_" + format));
			if (basicClrTypeDic.TryGetValue(key, out Type t))
			{
				return t;
			}
			else
			{
				return typeof(string);
			}
		}

		public static string PrimitiveSwaggerTypeToTsType(string type, string format)
		{
			string key = type + (String.IsNullOrEmpty(format) ? String.Empty : ("_" + format));
			if (basicTsTypeDic.TryGetValue(key, out string t))
			{
				return t;
			}
			else
			{
				return "string";
			}
		}

		public static CodeTypeReference TranslateToClientTypeReference(Type type)
		{
			if (type == null)
				return null;// new CodeTypeReference("void");
			if (type.IsArray)
			{
				Type elementType = type.GetElementType();
				int arrayRank = type.GetArrayRank();
				return CreateArrayTypeReference(elementType, arrayRank);
			}

			return new CodeTypeReference(type);

		}

		public static CodeTypeReference TranslateToClientTypeReference(string typeName)
		{
			if (typeName == null)
				return null;// new CodeTypeReference("void");

			return new CodeTypeReference(typeName);

		}

		public static CodeTypeReference CreateArrayTypeReference(Type elementType, int arrayRank)
		{
			CodeTypeReference otherArrayType = new CodeTypeReference(new CodeTypeReference(), arrayRank)//CodeDom does not care. The baseType is always overwritten by ArrayElementType.
			{
				ArrayElementType = TranslateToClientTypeReference(elementType),
			};
			return otherArrayType;
		}

		public static CodeTypeReference CreateArrayOfCustomTypeReference(string typeName, int arrayRank)
		{
			CodeTypeReference elementTypeReference = new CodeTypeReference(typeName);
			CodeTypeReference typeReference = new CodeTypeReference(new CodeTypeReference(), arrayRank)
			{
				ArrayElementType = elementTypeReference,
			};
			return typeReference;
		}

		static readonly Dictionary<string, Type> basicClrTypeDic = new Dictionary<string, Type>()
		{
			{"integer_int32", typeof(int) },
			{"integer_int64", typeof(long) },
			{"integer", typeof(int) },
			{"number_float", typeof(float) },
			{"number_double", typeof(double) },
			{"number", typeof(float) },
			{"string", typeof(string) },
			{"boolean", typeof(bool) },
			{"string_date", typeof(DateTimeOffset) },
			{"string_date-time", typeof(DateTimeOffset) },
		};

		static readonly Dictionary<string, string> basicTsTypeDic = new Dictionary<string, string>()
		{
			{"integer_int32", "number" },
			{"integer_int64", "number" },
			{"integer", "number" },
			{"number_float", "number" },
			{"number_double", "number" },
			{"number", "number" },
			{"string", "string" },
			{"boolean", "boolean" },
			{"string_date", "Date" },
			{"string_date-time", "Date" },
		};

		static readonly string[] oafTypes = new string[] { "integer", "number", "string", "boolean" };

		static readonly Type typeOfString = typeof(string);

		public static bool IsPrimitiveType(string typeName)
		{
			return oafTypes.Contains(typeName);
		}

		public static string GetOperationReturnComplexTypeReference(OpenApiOperation op)
		{
			if (op.Responses.TryGetValue("200", out OpenApiResponse goodResponse))
			{
				if (goodResponse.Content.TryGetValue("application/json", out OpenApiMediaType content) && content.Schema != null && content.Schema.Reference != null)
				{
					return content.Schema.Reference.Id;
				}
			}

			return null;
		}

	}
}
