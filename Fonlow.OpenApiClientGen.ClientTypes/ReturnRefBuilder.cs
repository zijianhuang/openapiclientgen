using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public class ReturnRefBuilder
	{
		public ReturnRefBuilder(IComponentToCodeDom com2CodeDom, string actionName)
		{
			this.com2CodeDom = com2CodeDom;
			this.actionName = actionName;
		}

		readonly IComponentToCodeDom com2CodeDom;
		readonly string actionName;

		/// <summary>
		/// OpenAPI responses to the return type reference, according to the 200 response.
		/// </summary>
		/// <param name="op"></param>
		/// <returns>item2 indicates whether return is a string.</returns>
		public Tuple<CodeTypeReference, bool> GetOperationReturnTypeReference(OpenApiOperation op)
		{
			if (op.Responses.TryGetValue("200", out OpenApiResponse goodResponse))
			{
				CodeTypeReference codeTypeReference;

				if (goodResponse.Content.TryGetValue("application/json", out OpenApiMediaType content)) // application/json has better to be first.
				{
					if (content == null || content.Schema == null)
					{
						return Tuple.Create<CodeTypeReference, bool>(null, false);
					}

					try
					{
						codeTypeReference = com2CodeDom.PropertySchemaToCodeTypeReference(content.Schema, actionName, "Return");
					}
					catch (ArgumentException ex)
					{
						throw new CodeGenException(ex.Message) { Pending = true };
					}

					return Tuple.Create(codeTypeReference, false);
				}

				if (goodResponse.Content.TryGetValue("text/plain", out content))
				{
					if (content.Schema != null)
					{
						string schemaType = content.Schema.Type;
						if (schemaType != null)
						{
							string schemaFormat = content.Schema.Format;
							Type type = TypeRefHelper.PrimitiveSwaggerTypeToClrType(schemaType, schemaFormat);
							return Tuple.Create(new CodeTypeReference(type), type == typeOfString);
						}
					}
				}

			}

			return Tuple.Create<CodeTypeReference, bool>(null, false);
		}

		static readonly Type typeOfString = typeof(string);
	}
}
