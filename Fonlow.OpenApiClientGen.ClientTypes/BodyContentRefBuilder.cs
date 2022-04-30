using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public class BodyContentRefBuilder
	{
		public BodyContentRefBuilder(IComponentToCodeDom com2CodeDom, string actionName)
		{
			this.com2CodeDom = com2CodeDom;
			this.actionName = actionName;
		}

		readonly IComponentToCodeDom com2CodeDom;
		readonly string actionName;
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
							return Tuple.Create(com2CodeDom.PropertySchemaToCodeTypeReference(content.Schema, actionName, httpMethod + "Body"), description, true);
						}
						catch (ArgumentException ex)
						{
							throw new CodeGenException($"Definition {path}=>{httpMethod} for op.RequestBody.Reference triggers error: {ex.Message}");
						}
					}

					var ns = NameFunc.GetNamespaceOfClassName(op.RequestBody.Reference.Id);
					string typeName = NameFunc.RefineTypeName(op.RequestBody.Reference.Id, ns);
					CodeTypeReference codeTypeReference = new(NameFunc.CombineNamespaceWithClassName(ns, typeName));
					return Tuple.Create(codeTypeReference, description, true);
				}
				else if (op.RequestBody.Content.TryGetValue("application/json", out content))
				{
					if (content.Schema != null)
					{
						return Tuple.Create(com2CodeDom.PropertySchemaToCodeTypeReference(content.Schema, actionName, httpMethod + "Body"), description, true);
					}
				}
				else if (op.RequestBody.Content.Count > 0) // with content but not supported
				{
					return Tuple.Create<CodeTypeReference, string, bool>(null, null, false);
				}
			}

			return null; //empty post
		}
	}
}
