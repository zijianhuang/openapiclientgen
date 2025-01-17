﻿using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public static class ComponentsHelper
	{
		/// <summary>
		/// 
		/// </summary>
		/// <param name="fieldSchema"></param>
		/// <param name="key"></param>
		/// <param name="modelSchema"></param>
		/// <param name="excludePattern">JsDoc does not support regex yet.</param>
		/// <returns></returns>
		public static List<string> GetCommentsFromAnnotations(OpenApiSchema fieldSchema, string key, OpenApiSchema modelSchema, bool excludePattern = false)
		{
			List<string> ss = new();
			if (modelSchema.Required.Count > 0)
			{
				bool isRequired = modelSchema.Required.Contains(key);
				if (isRequired)
				{
					ss.Add("Required");
				}
			}

			ValidationsToComments(ss, fieldSchema, excludePattern);
			return ss;
		}

		public static List<string> GetParamCommentsFromAnnotations(OpenApiSchema fieldSchema, bool excludePattern = false)
		{
			List<string> ss = new();
			ValidationsToComments(ss, fieldSchema, excludePattern);
			return ss;
		}

		static void ValidationsToComments(List<string> ss, OpenApiSchema fieldSchema, bool excludePattern = false)
		{
			if (fieldSchema.MinLength.HasValue)
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Min length: {0}", fieldSchema.MinLength.Value));
			}

			if (fieldSchema.MaxLength.HasValue)
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Max length: {0}", fieldSchema.MaxLength.Value));
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

			if (!String.IsNullOrEmpty(fieldSchema.Pattern) && !excludePattern)
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Pattern: {0}", fieldSchema.Pattern));
			}
		}

		public static bool FieldSchemaContainsValueConstraints(OpenApiSchema fieldSchema)
		{
			return fieldSchema.MaxLength.HasValue || fieldSchema.MinLength.HasValue || fieldSchema.Minimum.HasValue || fieldSchema.Maximum.HasValue || fieldSchema.MinItems.HasValue || fieldSchema.MaxItems.HasValue;
		}

		/// <summary>
		/// Find if a type had been declared in specific namespace
		/// </summary>
		/// <param name="typeName"></param>
		/// <param name="ns"></param>
		/// <returns></returns>
		public static CodeTypeDeclaration FindTypeDeclarationInNamespace(string typeName, CodeNamespace ns)//common
		{
			return ns.FindTypeDeclaration(typeName);
		}

		public static CodeTypeDeclaration FindTypeDeclarationInNamespaces(CodeNamespaceCollection namespaces, string typeName, string nsName)
		{
			foreach (CodeNamespace ns in namespaces)
			{
				if (ns.Name == nsName)
				{
					foreach (CodeTypeDeclaration t in ns.Types)
					{
						if (t.Name == typeName)
						{
							return t;
						}
					}
				}
			}

			return null;
		}

		public static CodeNamespace FindNamespace(CodeNamespaceCollection namespaces, string namespaceText)
		{
			foreach (CodeNamespace ns in namespaces)
			{
				if (ns.Name == namespaceText)
				{
					return ns;
				}
			}

			return null;
		}


		/// <summary>
		/// According to settings.ArrayAs
		/// </summary>
		/// <param name="typeName"></param>
		/// <param name="arrayRank"></param>
		/// <param name="settings"></param>
		/// <returns></returns>
		public static CodeTypeReference CreateArrayOfCustomTypeReference(string typeName, int arrayRank, ISettings settings = null)
		{
			if (settings != null)
			{
				if (arrayRank > 1)
				{
					var type = TypeRefHelper.ArrayAsIEnumerableDerivedToType(typeName, settings.ArrayAs);
					CodeTypeReference typeReference =
						new(type, new[] { new CodeTypeReference(typeName) });
					return typeReference;
				}
				else
				{
					var type = TypeRefHelper.ArrayAsIEnumerableDerivedToType(typeName, settings.ArrayAs);
					CodeTypeReference typeReference = new(type);
					return typeReference;
				}
			}
			else
			{
				CodeTypeReference elementTypeReference = new(typeName);
				CodeTypeReference typeReference = new(new CodeTypeReference(), arrayRank)
				{
					ArrayElementType = elementTypeReference,
				};
				return typeReference;
			}

		}

		public static CodeTypeReference TranslateTypeNameToClientTypeReference(string typeName)
		{
			if (typeName == null)
			{
				return null;// new CodeTypeReference("void");
			}

			return new CodeTypeReference(typeName);

		}

	}
}