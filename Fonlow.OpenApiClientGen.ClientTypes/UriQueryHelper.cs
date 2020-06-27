using Fonlow.OpenApiClientGen.ClientTypes;
using System;
using System.Linq;
using Tavis.UriTemplates;

namespace Fonlow.CodeDom.Web
{
	/// <summary>
	/// Generate a client function upon ApiDescription
	/// </summary>
	public static class UriQueryHelper
	{
		public static string CreateUriQuery(string uriText, ParameterDescriptionEx[] parameterDescriptions)
		{
			UriTemplate template = new UriTemplate(uriText);
			string[] parameterNames;
			try
			{
				parameterNames = template.GetParameterNames().ToArray();

			}
			catch (ArgumentException ex)
			{
				throw new CodeGenException($"When CreateuriQuery, path {uriText} triggers error: {ex.Message}");
			}

			if (parameterNames.Length == 0 && parameterDescriptions.Length == 0)
				return null;

			string newUriText = uriText;

			foreach (ParameterDescriptionEx d in parameterDescriptions)
			{
				if (d.ParameterDescriptor.ParameterBinder == ParameterBinder.FromBody || d.ParameterDescriptor.ParameterBinder == ParameterBinder.FromForm)
				{
					continue;
				}

				newUriText = UriTemplateTransform.Transform(newUriText, d);
			}

			return newUriText;
		}

		public static string CreateUriQueryForTs(string uriText, ParameterDescriptionEx[] parameterDescriptions)
		{
			UriTemplate template = new UriTemplate(uriText);
			string[] parameterNames;
			try
			{
				parameterNames = template.GetParameterNames().ToArray();

			}
			catch (ArgumentException ex)
			{
				throw new CodeGenException($"When CreateuriQuery, path {uriText} triggers error: {ex.Message}");
			}

			if (parameterNames.Length == 0 && parameterDescriptions.Length == 0)
				return null;

			string newUriText = uriText;

			foreach (ParameterDescriptionEx d in parameterDescriptions)
			{
				if (d.ParameterDescriptor.ParameterBinder == ParameterBinder.FromBody || d.ParameterDescriptor.ParameterBinder == ParameterBinder.FromForm)
				{
					continue;
				}

				newUriText = UriTemplateTransform.TransformForTs(newUriText, d);
			}

			return newUriText;
		}

	}

}
