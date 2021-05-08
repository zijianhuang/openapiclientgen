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
	public static class TypeRefHelper
	{
		/// <summary>
		/// Translate OpenApiMediaType content to CodeTypeReference
		/// </summary>
		/// <param name="content"></param>
		/// <returns></returns>
		public static CodeTypeReference OpenApiMediaTypeToCodeTypeReference(OpenApiMediaType content)
		{
			if (content.Schema == null)
			{
				throw new ArgumentException("Content has no Schema", nameof(content));
			}

			string schemaType = content.Schema.Type;
			if (schemaType != null)
			{
				if (schemaType == "array") // for array
				{
					OpenApiSchema arrayItemsSchema = content.Schema.Items;
					if (arrayItemsSchema.Reference != null) //array of custom type
					{
						string ns = NameFunc.GetNamespaceOfClassName(arrayItemsSchema.Reference.Id);
						string arrayTypeName = NameFunc.RefineTypeName(arrayItemsSchema.Reference.Id, ns);
						CodeTypeReference arrayCodeTypeReference = CreateArrayOfCustomTypeReference(CombineNamespaceWithClassName(ns, arrayTypeName), 1);
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
				else if (content.Schema.Enum.Count > 0)
				{
					var refinedTypeName = NameFunc.RefineTypeName(content.Schema.Type, content.Schema.Format);
					schemaType = refinedTypeName;
				}

				string schemaFormat = content.Schema.Format;
				return new CodeTypeReference(PrimitiveSwaggerTypeToClrType(schemaType, schemaFormat));
			}

			return null;
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

			return typeof(string);
		}

		public static bool IsSwaggerPrimitive(string type)
		{
			return basicClrTypeDic.TryGetValue(type, out _);
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

		public static string CombineNamespaceWithClassName(string ns, string typeName)
		{
			return String.IsNullOrEmpty(ns) ? typeName : (ns + "." + typeName);
		}

		/// <summary>
		/// Mapping between openapi types and primitive CLR types
		/// </summary>
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
//			{"object", typeof(object) },
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
//			{"object", "any" },
		};

		static readonly string[] oafTypes = new string[] { "integer", "number", "string", "boolean" };

		/// <summary>
		/// Is it integer, number, string or boolean of openapi?
		/// </summary>
		/// <param name="typeName"></param>
		/// <returns></returns>
		public static bool IsPrimitiveTypeOfOA(string typeName)
		{
			return oafTypes.Contains(typeName);
		}

		public static bool IsPrimitiveStructure(string typeName)
		{
			string[] ts = new string[] { "System.Int32", "System.Int64", "System.Float", "System.Double", "System.DateTime", "System.Boolean", "System.Enum" };
			return ts.Contains(typeName);
		}



	}
}
