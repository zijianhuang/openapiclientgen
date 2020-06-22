using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.CodeDom;
using System.Text.RegularExpressions;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public class BodyContentRefBuilder
	{
		public BodyContentRefBuilder(IComponentToCodeDom componentsToCodeDom, NameComposer nameComposer)
		{
			this.componentsToCodeDom = componentsToCodeDom;
			this.nameComposer = nameComposer;
		}

		readonly IComponentToCodeDom componentsToCodeDom;
		readonly NameComposer nameComposer;

		/// <summary>
		/// Get CodeTypeReference and description of requestBody of operation.
		/// </summary>
		/// <param name="op"></param>
		/// <returns>bool is whether to support generating codes for this.</returns>
		public Tuple<CodeTypeReference, string, bool> GetBodyContent(OpenApiOperation op, string httpMethod, string path)
		{
			if (op.RequestBody != null && op.RequestBody.Content != null)
			{
				OpenApiMediaType content;
				string description = op.RequestBody.Description;

				if (op.RequestBody.Reference != null)
				{
					if (op.RequestBody.Content.TryGetValue("application/json", out content) && (content.Schema.Type != null && content.Schema.Type != "object"))
					{
						try
						{
							return Tuple.Create(TypeRefBuilder.OpenApiMediaTypeToCodeTypeReference(content), description, true);

						}
						catch (ArgumentException ex)
						{
							throw new CodeGenException($"Definition {path}=>{httpMethod} for op.RequestBody.Reference triggers error: {ex.Message}");
						}
					}

					var ns = NameFunc.GetNamespaceOfClassName(op.RequestBody.Reference.Id);
					string typeName = NameFunc.RefineTypeName(op.RequestBody.Reference.Id, ns);
					CodeTypeReference codeTypeReference = new CodeTypeReference(CombineNamespaceWithClassName(ns, typeName));
					return Tuple.Create(codeTypeReference, description, true);
				}
				else if (op.RequestBody.Content.TryGetValue("application/json", out content))
				{
					if (content.Schema != null && content.Schema.Reference != null)
					{
						var ns = NameFunc.GetNamespaceOfClassName(content.Schema.Reference.Id);
						string typeName = NameFunc.RefineTypeName(content.Schema.Reference.Id, ns);
						CodeTypeReference codeTypeReference = new CodeTypeReference(CombineNamespaceWithClassName(ns, typeName));
						return Tuple.Create(codeTypeReference, description, true);
					}
					else if (content.Schema.Type == "object") // Casual type like what defined in /store/subscribe
					{
						string newTypeName = nameComposer.GetActionName(op, httpMethod, path) + "Body";
						CodeTypeDeclaration existingType = componentsToCodeDom.FindTypeDeclaration(newTypeName);
						if (existingType == null && !componentsToCodeDom.RegisteredTypeExists(newTypeName))
						{
							componentsToCodeDom.AddTypeToCodeDom(new KeyValuePair<string, OpenApiSchema>(newTypeName, content.Schema));//todo: handle namespace of return type
							System.Diagnostics.Trace.TraceInformation($"Casual type {newTypeName} created.");
						}

						CodeTypeReference codeTypeReference = new CodeTypeReference(newTypeName);
						return Tuple.Create(codeTypeReference, description, true);
					}

					try
					{
						return Tuple.Create(TypeRefBuilder.OpenApiMediaTypeToCodeTypeReference(content), description, true);

					}
					catch (ArgumentException ex)
					{
						throw new CodeGenException($"Definition {path}=>{httpMethod} for op.RequestBody.Content triggers error: {ex.Message}");
					}

				}
				else if (op.RequestBody.Content.Count > 0) // with content but not supported
				{
					return Tuple.Create<CodeTypeReference, string, bool>(null, null, false);
				}
			}

			return null; //empty post
		}

		static string CombineNamespaceWithClassName(string ns, string typeName)
		{
			return String.IsNullOrEmpty(ns) ? typeName : (ns + "." + typeName);
		}

		//static string ToTitleCase(string s)
		//{
		//	return String.IsNullOrEmpty(s) ? s : (char.ToUpper(s[0]) + (s.Length > 1 ? s.Substring(1) : String.Empty));
		//}

	}
}
