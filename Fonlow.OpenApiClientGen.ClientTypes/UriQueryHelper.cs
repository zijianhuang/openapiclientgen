using Fonlow.OpenApiClientGen.ClientTypes;
using System;
using System.Diagnostics;
using System.Linq;
using Tavis.UriTemplates;

namespace Fonlow.CodeDom.Web
{
	/// <summary>
	/// Generate a client function upon ApiDescription
	/// </summary>
	public static class UriQueryHelper
	{
		public static string CreateUriQuery(string uriText, ParameterDescription[] parameterDescriptions)
		{
			UriTemplate template = new(uriText);
			string[] parameterNames;
			try
			{
				parameterNames = template.GetParameterNames().ToArray();

			}
			catch (ArgumentException ex)
			{
				throw new CodeGenException($"When CreateuriQuery, path {uriText} triggers error: {ex.Message}");
			}
			catch (IndexOutOfRangeException ex)
			{
				throw new CodeGenException($"Something wrong with {uriText}, no parameters?");
			}

			if (parameterNames.Length == 0 && parameterDescriptions.Length == 0)
				return null;

			string newUriText = uriText;

			foreach (ParameterDescription d in parameterDescriptions)
			{
				if (d.ParameterDescriptor.ParameterBinder == ParameterBinder.FromBody || d.ParameterDescriptor.ParameterBinder == ParameterBinder.FromForm)
				{
					continue;
				}

				newUriText = UriTemplateTransform.Transform(newUriText, d);
			}

			return newUriText;
		}

		public static string CreateUriQueryForTs(string uriText, ParameterDescription[] parameterDescriptions)
		{
#if DEBUG
			if (uriText== "mimic/agent/{agentNum}/store/get/{var}")
			{
				Debug.WriteLine("hehe");
			}
#endif
			UriTemplate template = new(uriText);
			string[] parameterNames;
			try
			{
				parameterNames = template.GetParameterNames().ToArray();

			}
			catch (ArgumentException ex)
			{
				throw new CodeGenException($"When CreateuriQuery, path {uriText} triggers error: {ex.Message}");
			}
			catch (FormatException ex)
			{
				throw new CodeGenException($"When CreateuriQuery, path {uriText} triggers error: {ex.Message}");
			}

			if (parameterNames.Length == 0 && parameterDescriptions.Length == 0)
				return null;

			string newUriText = uriText;

			foreach (ParameterDescription d in parameterDescriptions)
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
