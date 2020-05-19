using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.CodeDom;
using System.Text.RegularExpressions;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	/// <summary>
	/// Helper functions to compose names from Open API meta data
	/// </summary>
	public class NameComposer
	{
		public NameComposer(Settings settings)
		{
			this.settings = settings;
			if (settings.ActionNameStrategy == ActionNameStrategy.NormalizedOperationId)
			{
				if (String.IsNullOrEmpty(settings.RegexForNormalizedOperationId))
				{
					throw new ArgumentException("When having ActionNameStrategy.NormalizedOperationId you should define RegexForNormalizedOperationId", nameof(settings));
				}

				regex = new Regex(settings.RegexForNormalizedOperationId);
			}
		}

		Settings settings;

		/// <summary>
		/// Construct action name according to OpenApiOperaton, httpMethod and ActionNameStrategy.
		/// </summary>
		/// <param name="op"></param>
		/// <param name="httpMethod"></param>
		/// <returns></returns>
		public string GetActionName(OpenApiOperation op, string httpMethod, string path)
		{
			switch (settings.ActionNameStrategy)
			{
				case ActionNameStrategy.Default:
					return String.IsNullOrEmpty(op.OperationId) ? ComposeActionName(op, httpMethod) : ToTitleCase(op.OperationId);
				case ActionNameStrategy.OperationId:
					return ToTitleCase(op.OperationId);
				case ActionNameStrategy.MethodQueryParameters:
					return ComposeActionNameForPathAsContainer(op, httpMethod);
				case ActionNameStrategy.PathMethodQueryParameters:
					return ComposeActionNameWithPath(op, httpMethod, path);
				case ActionNameStrategy.NormalizedOperationId:
					return NormalizeOperationId(op.OperationId);
				default:
					throw new InvalidDataException("Impossible");
			}
		}

		public string NormalizeOperationId(string s)
		{
			var matches = regex.Matches(s);
			var r = String.Join(String.Empty, matches.Select(m => ToTitleCase(m.Value)));
			return r;
		}

		Regex regex;

		/// <summary>
		/// Compose action name according to tags, httpMethod and Parameters.
		/// </summary>
		/// <param name="op"></param>
		/// <param name="httpMethod"></param>
		/// <returns></returns>
		public string ComposeActionName(OpenApiOperation op, string httpMethod)
		{
			if (op.Tags == null || op.Tags.Count == 0)
			{
				throw new ArgumentException("OpenApiOperation does not contain tags for composing action name.");
			}

			var byWhat = String.Join("And", op.Parameters.Where(p => p.In == ParameterLocation.Path || p.In == ParameterLocation.Query).Select(p => ToTitleCase(p.Name)));
			return ToTitleCase(op.Tags[0].Name) + httpMethod + (String.IsNullOrEmpty(byWhat) ? String.Empty : "By" + byWhat);
		}

		/// <summary>
		/// Generate action name with httpMethod and parameters, for actions under a container class named after a path.
		/// </summary>
		/// <param name="op"></param>
		/// <param name="httpMethod"></param>
		/// <returns></returns>
		string ComposeActionNameForPathAsContainer(OpenApiOperation op, string httpMethod)
		{
			var byWhat = String.Join("And", op.Parameters.Where(p => p.In == ParameterLocation.Path || p.In == ParameterLocation.Query).Select(p => ToTitleCase(p.Name)));
			return httpMethod + (String.IsNullOrEmpty(byWhat) ? String.Empty : "By" + byWhat);
		}

		/// <summary>
		/// Generate action name hopefully unique across all paths and operations, under a god container class. Consisting of path, httpMethod and parameters.
		/// </summary>
		/// <param name="op"></param>
		/// <param name="httpMethod"></param>
		/// <param name="path"></param>
		/// <returns></returns>
		string ComposeActionNameWithPath(OpenApiOperation op, string httpMethod, string path)
		{
			var byWhat = String.Join("And", op.Parameters.Where(p => p.In == ParameterLocation.Path || p.In == ParameterLocation.Query).Select(p => ToTitleCase(p.Name)));
			return PathToActionOrContainerName(path) + httpMethod + (String.IsNullOrEmpty(byWhat) ? String.Empty : "By" + byWhat);
		}

		/// <summary>
		/// Container class name for containing client functions, according OpenApiOperation and operation path.
		/// </summary>
		/// <param name="op"></param>
		/// <param name="path"></param>
		/// <returns></returns>
		public string GetContainerName(OpenApiOperation op, string path)
		{
			switch (settings.ContainerNameStrategy)
			{
				case ContainerNameStrategy.Path:
					return PathToActionOrContainerName(path) + settings.ContainerNameSuffix;
				case ContainerNameStrategy.Tags:
					if (op.Tags != null && op.Tags.Count > 0)
					{
						return ToTitleCase(op.Tags[0].Name) + settings.ContainerNameSuffix;//todo: concanate multiple ones?
					}
					else
					{
						return settings.ContainerClassName;
					}
				default:
					return settings.ContainerClassName;
			}
		}

		static string ToTitleCase(string s)
		{
			return String.IsNullOrEmpty(s) ? s : (char.ToUpper(s[0]) + (s.Length > 1 ? s.Substring(1) : String.Empty));
		}

		/// <summary>
		/// Construct the base action name or container name
		/// </summary>
		/// <param name="path"></param>
		/// <returns></returns>
		public string PathToActionOrContainerName(string path)
		{
			var uri = new Uri("http://dummy.net" + path);
			var pathSegments = uri.Segments.Where(s => !s.Contains("%7B"));
			var localPath = String.Join(String.Empty, pathSegments);

			if (!String.IsNullOrEmpty(settings.PathPrefixToRemove))
			{
				localPath = localPath.Remove(0, settings.PathPrefixToRemove.Length);

			}

			if (!localPath.StartsWith("/"))
			{
				localPath = "/" + localPath;
			}

			var uriWithPaths = new Uri("http://dummy.net" + localPath);
			return String.Join(String.Empty, uriWithPaths.Segments.Select(p => ToTitleCase(p.Replace("/", String.Empty))));
		}

		public string GetOperationReturnComment(OpenApiOperation op)
		{
			OpenApiResponse goodResponse;
			if (op.Responses.TryGetValue("200", out goodResponse))
			{
				return goodResponse.Description;
			}

			return null;
		}

	}

	public class ParameterDescriptionEx : Fonlow.OpenApiClientGen.ClientTypes.ParameterDescription
	{
		public CodeTypeReference ParameterTypeReference { get; set; }
	}
}
