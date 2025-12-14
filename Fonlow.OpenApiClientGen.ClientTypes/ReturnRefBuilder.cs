using Microsoft.OpenApi;
using Microsoft.OpenApi.YamlReader;
using Microsoft.OpenApi.Reader;
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
			if (op.Responses.TryGetValue("200", out var goodResponse))
			{
				CodeTypeReference codeTypeReference;

				if (goodResponse.Content.TryGetValue("application/json", out var content)) // application/json has better to be first.
				{
					if (content == null || content.Schema == null)
					{
						return Tuple.Create<CodeTypeReference, bool>(null, false);
					}

					try
					{
						codeTypeReference = com2CodeDom.PropertySchemaToCodeTypeReference(content.Schema, actionName, "Return");
						Type simpleType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(content.Schema.Type.Value, content.Schema.Format);
						codeTypeReference.UserData[Fonlow.TypeScriptCodeDom.UserDataKeys.FieldTypeInfo] = new Fonlow.TypeScriptCodeDom.FieldTypeInfo
						{
							ClrType = simpleType, // client codes won't care about the other properties
						};

					}
					catch (ArgumentException ex)
					{
						throw new CodeGenOperationException(ex.Message) { Pending = true };
					}

					return Tuple.Create(codeTypeReference, false);
				}

				if (goodResponse.Content.TryGetValue("text/plain", out content))
				{
					if (content.Schema != null)
					{
						var schemaType = content.Schema.Type;
						if (schemaType != null)
						{
							string schemaFormat = content.Schema.Format;
							Type type = TypeRefHelper.PrimitiveSwaggerTypeToClrType(schemaType.Value, schemaFormat);
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
