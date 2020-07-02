using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.CodeDom;
using System.Text.RegularExpressions;
using System.Numerics;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public class ReturnRefHelper
	{
		public ReturnRefHelper(IComponentToCodeDom com2CodeDom)
		{
			this.pRefBuilder = new ParametersRefBuilder(com2CodeDom);
		}

		readonly ParametersRefBuilder pRefBuilder;

		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns>Item3 indicate whether to be complex type.</returns>
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
						codeTypeReference = pRefBuilder.OpenApiParameterSchemaToCodeTypeReference(content.Schema, "Return");

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
