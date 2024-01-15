using Fonlow.OpenApiClientGen.ClientTypes;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Fonlow.CodeDom.Web
{
	internal static class UriTemplateTransform
	{
		static readonly HashSet<string> simpleListTypeNames = new(
		new string[] {
			typeof(IEnumerable<>).Name,
			typeof(IList<>).Name,
			typeof(ICollection<>).Name,
			typeof(IQueryable<>).Name,
			typeof(IReadOnlyList<>).Name,
			typeof(List<>).Name,
			typeof(System.Collections.ObjectModel.Collection<>).Name,
			typeof(IReadOnlyCollection<>).Name,
			"System.Collections.Generic.IAsyncEnumerable`1",
		   typeof(System.Collections.ObjectModel.ObservableCollection<>).Name,
		}
		);

		static readonly Type typeofString = typeof(string);
		static readonly Type typeofDateTime = typeof(DateTime);
		static readonly Type typeofDateOnly = typeof(DateOnly);
		static readonly Type typeofDateTimeNullable = typeof(DateTime?);
		static readonly Type typeofDateTimeOffset = typeof(DateTimeOffset);
		static readonly Type typeofDateTimeOffsetNullable = typeof(DateTimeOffset?);
		static readonly Type typeofDateOnlyNullable = typeof(DateOnly?);
		static readonly Type typeOfNullableDefinition = typeof(Nullable<>);

		public static string Transform(string newUriText, ParameterDescription d)
		{
			if (d.ParameterDescriptor.ParameterBinder == ParameterBinder.FromQuery)
			{
				bool queryExists = newUriText.Contains("?");
				newUriText += queryExists ? "&" : "?";

				if (d.ParameterDescriptor.ParameterType == typeofString && d.ParameterTypeReference.ArrayRank == 0)
				{
					if (d.ParameterTypeReference.BaseType == "System.String")
					{
						return newUriText += $"{d.QName}=\" + ({d.Name}==null? \"\" : Uri.EscapeDataString({d.Name}))+\"";
					}
					else
					{
						return newUriText += $"{d.QName}=\" + {d.Name}+\"";
					}
				}
				else if (d.ParameterDescriptor.ParameterType == typeofDateTime || d.ParameterDescriptor.ParameterType == typeofDateTimeOffset)
				{
					return newUriText += $"{d.QName}=\" + {d.Name}.ToUniversalTime().ToString(\"yyyy-MM-ddTHH:mm:ss.fffffffZ\")+\"";
				}
				else if (d.ParameterDescriptor.ParameterType == typeofDateTimeNullable || d.ParameterDescriptor.ParameterType == typeofDateTimeOffsetNullable)
				{
					string replaced = newUriText.Replace($"\"&{d.QName}={{{d.Name}}}", $"({d.Name}.HasValue?\"&{d.QName}=\"+{d.Name}.Value.ToUniversalTime().ToString(\"yyyy-MM-ddTHH:mm:ss.fffffffZ\"):String.Empty)+\"");
					if (replaced == newUriText)
					{
						replaced = newUriText.Replace($"{d.Name}={{{d.Name}}}", $"\"+({d.Name}.HasValue?\"{d.QName}=\"+{d.Name}.Value.ToUniversalTime().ToString(\"yyyy-MM-ddTHH:mm:ss.fffffffZ\"):String.Empty)+\"");
					}

					return replaced;
				}
				else if (IsNullablePrimitive(d.ParameterDescriptor.ParameterType))
				{
					string replaced = newUriText.Replace($"\"&{d.QName}={{{d.Name}}}", $"({d.Name}.HasValue?\"&{d.QName}=\"+{d.Name}.Value.ToString():String.Empty)+\"");
					if (replaced == newUriText)
					{
						replaced = newUriText.Replace($"{d.Name}={{{d.Name}}}", $"\"+({d.Name}.HasValue?\"{d.QName}=\"+{d.Name}.Value.ToString():String.Empty)+\"");
					}

					return replaced;
				}
				else if (d.ParameterTypeReference.ArrayRank > 0)
				{
					if (d.ParameterTypeReference.BaseType == "System.String")
					{
						string arrayQuery = $"string.Join(\"&\", {d.Name}.Select(z => $\"{d.ParameterDescriptor.ParameterName}={{Uri.EscapeDataString(z.ToString())}}\"))+\"";
						return newUriText + "\"+" + arrayQuery;
					}
					else
					{
						string arrayQuery = $"string.Join(\"&\", {d.Name}.Select(z => $\"{d.ParameterDescriptor.ParameterName}={{z}}\"))+\"";
						return newUriText + "\"+" + arrayQuery;
					}
				}
				else
				{
					return newUriText += $"{d.QName}=\"+{d.Name}+\"";
				}
			}
			else
			{
				if (d.ParameterDescriptor.ParameterType == typeofString && d.ParameterTypeReference != null && d.ParameterTypeReference.ArrayRank == 0)
				{
					if (d.ParameterTypeReference.BaseType == "System.String")
					{
						return newUriText.Replace($"{{{d.Name}}}", $"\"+ ({d.Name}==null? \"\" : Uri.EscapeDataString({d.Name}))+\"");
					}
					else
					{
						return newUriText.Replace($"{{{d.Name}}}", $"\"+{d.Name}+\"");
					}
				}
				else if (d.ParameterDescriptor.ParameterType == typeofDateTime || d.ParameterDescriptor.ParameterType == typeofDateTimeOffset)
				{
					return newUriText.Replace($"{{{d.Name}}}", $"\"+{d.Name}.ToUniversalTime().ToString(\"yyyy-MM-ddTHH:mm:ss.fffffffZ\")+\"");
				}
				else if (d.ParameterDescriptor.ParameterType == typeofDateTimeNullable || d.ParameterDescriptor.ParameterType == typeofDateTimeOffsetNullable)
				{
					string replaced = newUriText.Replace($"\"&{d.QName}={{{d.Name}}}", $"({d.Name}.HasValue?\"&{d.QName}=\"+{d.Name}.Value.ToUniversalTime().ToString(\"yyyy-MM-ddTHH:mm:ss.fffffffZ\"):String.Empty)+\"");
					if (replaced == newUriText)
					{
						replaced = newUriText.Replace($"{d.Name}={{{d.Name}}}", $"\"+({d.Name}.HasValue?\"{d.QName}=\"+{d.Name}.Value.ToUniversalTime().ToString(\"yyyy-MM-ddTHH:mm:ss.fffffffZ\"):String.Empty)+\"");
					}

					return replaced;
				}
				else if (IsNullablePrimitive(d.ParameterDescriptor.ParameterType))
				{
					string replaced = newUriText.Replace($"\"&{d.QName}={{{d.Name}}}", $"({d.Name}.HasValue?\"&{d.QName}=\"+{d.Name}.Value.ToString():String.Empty)+\"");
					if (replaced == newUriText)
					{
						replaced = newUriText.Replace($"{d.Name}={{{d.Name}}}", $"\"+({d.Name}.HasValue?\"{d.QName}=\"+{d.Name}.Value.ToString():String.Empty)+\"");
					}

					return replaced;
				}
				else if (d.ParameterTypeReference != null && d.ParameterTypeReference.ArrayRank > 0)
				{
					if (d.ParameterTypeReference.BaseType == "System.String")
					{
						string arrayQuery = $"string.Join(\"&\", {d.Name}.Select(z => $\"{d.ParameterDescriptor.ParameterName}={{Uri.EscapeDataString(z.ToString())}}\"))+\"";
						return newUriText + "\"+" + arrayQuery;
					}
					else
					{
						string arrayQuery = $"string.Join(\"&\", {d.Name}.Select(z => $\"{d.ParameterDescriptor.ParameterName}={{z}}\"))+\"";
						return newUriText + "\"+" + arrayQuery;
					}
				}
				else
				{
					return newUriText.Replace($"{{{d.Name}}}", $"\"+{d.Name}+\"");
				}
			}
		}

		public static string TransformForTs(string newUriText, ParameterDescription d)
		{
			var questionMarkForSafeTransform = d.ParameterDescriptor.IsRequired ? string.Empty : "?";
			if (d.ParameterDescriptor.ParameterBinder == ParameterBinder.FromQuery)
			{
				bool queryExists = newUriText.Contains("?");
				newUriText += queryExists ? "&" : "?";

				if (d.ParameterDescriptor.ParameterType == typeofString && d.ParameterTypeReference.ArrayRank == 0)
				{
					if (d.ParameterTypeReference.BaseType == "System.String")
					{
						return newUriText += $"{d.Name}=' + ({d.Name} == null ? '' : encodeURIComponent({d.Name})) + '";
					}
					else
					{
						return newUriText += $"{d.Name}=' + {d.Name} + '";
					}
				}
				else if (d.ParameterDescriptor.ParameterType == typeofDateTime || d.ParameterDescriptor.ParameterType == typeofDateTimeOffset || d.ParameterDescriptor.ParameterType == typeofDateOnly)
				{
					return newUriText += $"{d.Name}=' + {d.Name}{questionMarkForSafeTransform}.toISOString() + '";
				}
				else if (d.ParameterTypeReference.ArrayRank > 0)
				{
					if (d.ParameterTypeReference.BaseType == "System.String")
					{
						string arrayQuery = $"{d.Name}{questionMarkForSafeTransform}.map(z => `{d.ParameterDescriptor.ParameterName}=${{encodeURIComponent(z)}}`).join('&')";
						return newUriText + "' + " + arrayQuery + " + '";
					}
					else
					{
						string arrayQuery = $"{d.Name}{questionMarkForSafeTransform}.map(z => `{d.ParameterDescriptor.ParameterName}=${{z}}`).join('&')";
						return newUriText + "' + " + arrayQuery + " + '";
					}
				}
				else
				{
					return newUriText += $"{d.Name}=' + {d.Name} + '";
				}
			}
			else
			{
				if (d.ParameterDescriptor.ParameterType == typeofString && d.ParameterTypeReference.ArrayRank == 0)
				{
					if (d.ParameterTypeReference.BaseType == "System.String")
					{
						return newUriText.Replace($"{{{d.Name}}}", $"' + ({d.Name} == null ? '' : encodeURIComponent({d.Name})) + '");
					}
					else
					{
						return newUriText.Replace($"{{{d.Name}}}", $"' + {d.Name} + '");
					}
				}
				else if (d.ParameterDescriptor.ParameterType == typeofDateTime || d.ParameterDescriptor.ParameterType == typeofDateTimeOffset || d.ParameterDescriptor.ParameterType == typeofDateOnly)
				{
					return newUriText.Replace($"{{{d.Name}}}", $"' + {d.Name}{questionMarkForSafeTransform}.toISOString() + '");
				}
				else if (d.ParameterDescriptor.ParameterType == typeofDateTimeNullable || d.ParameterDescriptor.ParameterType == typeofDateTimeOffsetNullable || d.ParameterDescriptor.ParameterType == typeofDateOnlyNullable)
				{
					string replaced = newUriText.Replace($"'&{d.QName}={{{d.Name}}}", $"({d.Name} ? '&{d.QName}=' + {d.Name}{questionMarkForSafeTransform}.toISOString() : '') + '");
					if (replaced == newUriText)
					{
						replaced = newUriText.Replace($"{d.Name}={{{d.Name}}}", $"' + ({d.Name} ? '{d.Name}=' + {d.Name}{questionMarkForSafeTransform}.toISOString() : '') + '");
					}

					return replaced;
				}
				else if (IsNullablePrimitive(d.ParameterDescriptor.ParameterType))
				{
					string replaced = newUriText.Replace($"'&{d.QName}={{{d.Name}}}", $"({d.Name} ? '&{d.QName}=' + {d.Name}{questionMarkForSafeTransform}.toString() : '') + '");
					if (replaced == newUriText)
					{
						replaced = newUriText.Replace($"{d.Name}={{{d.Name}}}", $"' + ({d.Name} ? '{d.Name}=' + {d.Name}{questionMarkForSafeTransform}.toString() : '') + '");
					}

					return replaced;
				}
				else if (d.ParameterTypeReference.ArrayRank > 0)
				{
					if (d.ParameterTypeReference.BaseType == "System.String")
					{
						string arrayQuery = $"{d.Name}{questionMarkForSafeTransform}.map(z => `{d.ParameterDescriptor.ParameterName}=${{encodeURIComponent(z)}}`).join('&')";
						string placeHolder = $"{d.ParameterDescriptor.ParameterName}={{{d.ParameterDescriptor.ParameterName}}}";
						return newUriText.Replace(placeHolder, "' + " + arrayQuery);
					}
					else
					{
						string arrayQuery = $"{d.Name}{questionMarkForSafeTransform}.map(z => `{d.ParameterDescriptor.ParameterName}=${{z}}`).join('&')";
						string placeHolder = $"{d.ParameterDescriptor.ParameterName}={{{d.ParameterDescriptor.ParameterName}}}";
						return newUriText.Replace(placeHolder, "' + " + arrayQuery);
					}
				}
				else
				{
					return newUriText.Replace($"{{{d.Name}}}", $"' + {d.Name} + '");
				}
			}

		}
		/// <summary>
		/// DateTime is not primitive type. Decimal is primitive VB.net but not in C#.NET
		/// https://stackoverflow.com/questions/13471941/why-is-decimal-not-a-primitive-type
		/// </summary>
		/// <param name="t"></param>
		/// <returns></returns>
		static bool IsNullablePrimitive(Type t)
		{
			return (t.IsGenericType && typeOfNullableDefinition.Equals(t.GetGenericTypeDefinition()) && (t.GetGenericArguments()[0].IsPrimitive || t.GetGenericArguments()[0].IsValueType));
		}

		public static bool IsSimpleListType(Type type)
		{
			return simpleListTypeNames.Contains(type.Name) && IsSimpleType(type.GenericTypeArguments[0]);
		}

		static readonly Type typeOfString = typeof(string);

		public static bool IsSimpleType(Type type)
		{
			return type.IsPrimitive || type.Equals(typeOfString) || type.BaseType?.FullName == "System.Enum";
		}


	}
}
