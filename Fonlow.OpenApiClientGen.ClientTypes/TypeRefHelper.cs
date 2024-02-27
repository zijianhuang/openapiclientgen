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

		/// <summary>
		/// Primitive Swagger Type To Ts Type. Used only for array.
		/// </summary>
		/// <param name="type"></param>
		/// <param name="format"></param>
		/// <returns></returns>
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
			CodeTypeReference otherArrayType = new(new CodeTypeReference(), arrayRank)//CodeDom does not care. The baseType is always overwritten by ArrayElementType.
			{
				ArrayElementType = TranslateToClientTypeReference(elementType),
			};
			return otherArrayType;
		}

		public static CodeTypeReference CreateArrayOfCustomTypeReference(string typeName, int arrayRank)
		{
			CodeTypeReference elementTypeReference = new(typeName);
			CodeTypeReference typeReference = new(new CodeTypeReference(), arrayRank)
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
		static readonly Dictionary<string, Type> basicClrTypeDic = new()
		{
			{"integer_int32", typeof(int) },
			{"integer_int64", typeof(long) },
			{"integer", typeof(int) },
			{"integer_uint32", typeof(uint) },
			{"number_float", typeof(float) },
			{"number_double", typeof(double) },
			{"number_decimal", typeof(decimal) },
			{"number", typeof(double) }, //C# by default use double for number literal
			{"string", typeof(string) },
			{"boolean", typeof(bool) },
			{"string_date", typeof(DateOnly) },
			{"string_date-time", typeof(DateTimeOffset) },
//			{"object", typeof(object) },
		};

		static readonly Dictionary<string, string> basicTsTypeDic = new()
		{
			{"integer_int32", "number" },
			{"integer_int64", "number" },
			{"integer", "number" },
			{"integer_uint32", "number" },
			{"number_float", "number" },
			{"number_double", "number" },
			{"number_decimal", "number" },
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

		public static string ArrayAsIEnumerableDerivedToType(string newTypeName, ArrayAsIEnumerableDerived a)
		{
			switch (a)
			{
				case ArrayAsIEnumerableDerived.Array:
					return $"{newTypeName}[]";
				case ArrayAsIEnumerableDerived.IEnumerable:
					return $"System.Collections.Generic.IEnumerable<{newTypeName}>";
				case ArrayAsIEnumerableDerived.IList:
					return $"System.Collections.Generic.IList<{newTypeName}>";
				case ArrayAsIEnumerableDerived.ICollection:
					return $"System.Collections.Generic.ICollection<{newTypeName}>";
				case ArrayAsIEnumerableDerived.IReadOnlyList:
					return $"System.Collections.Generic.IReadOnlyList<{newTypeName}>";
				case ArrayAsIEnumerableDerived.IReadOnlyCollection:
					return $"System.Collections.Generic.IReadOnlyCollection<{newTypeName}>";
				case ArrayAsIEnumerableDerived.List:
					return $"System.Collections.Generic.List<{newTypeName}>";
				case ArrayAsIEnumerableDerived.Collection:
					return $"System.Collections.ObjectModel.Collection<{newTypeName}>";
				case ArrayAsIEnumerableDerived.ReadOnlyCollection:
					return $"System.Collections.ObjectModel.ReadOnlyCollection<{newTypeName}>";
				default:
					throw new ArgumentOutOfRangeException(nameof(a), "Fix ArrayAsIEnumerableDerivedToType!");
			}
		}



	}
}
