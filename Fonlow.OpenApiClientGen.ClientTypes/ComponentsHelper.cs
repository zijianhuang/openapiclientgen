using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Globalization;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public static class ComponentsHelper
	{
		public static List<string> GetCommentsFromAnnotations(OpenApiSchema fieldSchema)
		{
			List<string> ss = new List<string>();
			if (fieldSchema.MaxLength.HasValue)
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Max length: {0}", fieldSchema.MaxLength.Value));
			}

			if (fieldSchema.MinLength.HasValue)
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Min length: {0}", fieldSchema.MinLength.Value));
			}

			if (fieldSchema.Minimum.HasValue)
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Minimum: {0}", fieldSchema.Minimum.Value));
			}

			if (fieldSchema.Maximum.HasValue)
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Maximum: {0}", fieldSchema.Maximum.Value));
			}

			if (fieldSchema.MinItems.HasValue)
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Minimum items: {0}", fieldSchema.MinItems.Value));
			}

			if (fieldSchema.MaxItems.HasValue)
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Maximum items: {0}", fieldSchema.MaxItems.Value));
			}

			if (!String.IsNullOrEmpty(fieldSchema.Pattern))
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Pattern: {0}", fieldSchema.Pattern));
			}

			return ss;
		}

		/// <summary>
		/// Find in specific namespace
		/// </summary>
		/// <param name="typeName"></param>
		/// <param name="ns"></param>
		/// <returns></returns>
		public static CodeTypeDeclaration FindTypeDeclarationInNamespace(string typeName, CodeNamespace ns)//common
		{
			return ns.FindTypeDeclaration(typeName);
		}

		public static CodeTypeReference CreateArrayOfCustomTypeReference(string typeName, int arrayRank, Settings settings = null)
		{
			if (settings != null)
			{
				if (arrayRank > 1)
				{
					var type = TypeRefHelper.ArrayAsIEnumerableDerivedToType(typeName, settings.ArrayAs);
					CodeTypeReference typeReference =
						new CodeTypeReference(type, new[] { new CodeTypeReference(typeName) });
					return typeReference;
				}
				else
				{
					var type = TypeRefHelper.ArrayAsIEnumerableDerivedToType(typeName, settings.ArrayAs);
					CodeTypeReference typeReference = new CodeTypeReference(type);
					return typeReference;
				}
			}
			else
			{
				CodeTypeReference elementTypeReference = new CodeTypeReference(typeName);
				CodeTypeReference typeReference = new CodeTypeReference(new CodeTypeReference(), arrayRank)
				{
					ArrayElementType = elementTypeReference,
				};
				return typeReference;
			}

		}

		public static CodeTypeReference TranslateTypeNameToClientTypeReference(string typeName)
		{
			if (typeName == null)
				return null;// new CodeTypeReference("void");

			return new CodeTypeReference(typeName);

		}

	}
}
