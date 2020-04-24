using System;
using System.CodeDom;
using System.Linq;
using System.Collections.Generic;
using System.Diagnostics;
using Fonlow.Reflection;
using Microsoft.OpenApi.Models;
using Fonlow.CodeDom.Web;
using Fonlow.OpenApiClientGen.ClientTypes;
using Microsoft.OpenApi.Extensions;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public class ParametersHelper
	{
		public ParametersHelper(NameComposer nameComposer, CodeNamespace clientNamespace)
		{
			this.nameComposer = nameComposer;
			this.clientNamespace = clientNamespace;
		}

		NameComposer nameComposer;
		CodeNamespace clientNamespace;

		public ParameterDescriptionEx[] OpenApiParametersToParameterDescriptions(IList<OpenApiParameter> ps)
		{
			return ps.Select(p =>
				new ParameterDescriptionEx()
				{
					Name = p.Name,
					Documentation = p.Description,
					ParameterDescriptor = new ParameterDescriptor()
					{
						IsOptional = !p.Required,
						ParameterName = p.Name,
						ParameterType = nameComposer.PrimitiveSwaggerTypeToClrType(p.Schema.Type, p.Schema.Format),
						ParameterBinder = ParameterLocationToParameterBinder(p.In),
					},

					ParameterTypeReference = OpenApiParameterToCodeTypeReference(p)
				}
			).Where(k => k.ParameterDescriptor.ParameterBinder != ParameterBinder.None).ToArray();
		}

		public CodeTypeReference OpenApiParameterToCodeTypeReference(OpenApiParameter content)
		{
			var schemaType = content.Schema.Type;
			if (schemaType != null)
			{
				if (schemaType == "array") // for array
				{
					var arrayItemsSchema = content.Schema.Items;
					if (arrayItemsSchema.Reference != null) //array of custom type
					{
						var arrayTypeName = arrayItemsSchema.Reference.Id;
						var arrayCodeTypeReference = nameComposer.CreateArrayOfCustomTypeReference(arrayTypeName, 1);
						return arrayCodeTypeReference;
					}
					else
					{
						var arrayType = arrayItemsSchema.Type;
						//if (arrayItemsSchema.Enum != null && arrayItemsSchema.Enum.Count > 0)
						//{
						//	var enumMemberNames = arrayItemsSchema.Enum.Select(m => m.AnyType.GetDisplayName());
						//}
						//else
						{
							var clrType = nameComposer.PrimitiveSwaggerTypeToClrType(arrayType, null);
							var arrayCodeTypeReference = nameComposer.CreateArrayTypeReference(clrType, 1);
							return arrayCodeTypeReference;
						}
					}
				}
				else if (content.Schema.Enum.Count == 0) // for primitive type
				{
					var simpleType = nameComposer.PrimitiveSwaggerTypeToClrType(content.Schema.Type, content.Schema.Format);
					var codeTypeReference = new CodeTypeReference(simpleType);
					return codeTypeReference;
				}

				var schemaFormat = content.Schema.Format;
				return new CodeTypeReference(nameComposer.PrimitiveSwaggerTypeToClrType(schemaType, schemaFormat));
			}

			return null;
		}

		ParameterBinder ParameterLocationToParameterBinder(ParameterLocation? lo)
		{
			if (!lo.HasValue)
			{
				throw new System.IO.InvalidDataException("ParameterLocation is REQUIRED");
			}

			switch (lo)
			{
				case ParameterLocation.Query:
					return ParameterBinder.FromQuery;
				case ParameterLocation.Path:
					return ParameterBinder.FromUri;
				default:
					return ParameterBinder.None; //so to be skiped/ignored
			}
		}

		public CodeTypeDeclaration LocateEnumDeclaration(string[] ms)
		{
			for (int i = 0; i < clientNamespace.Types.Count; i++)
			{
				var tc = clientNamespace.Types[i];
				if (tc.IsEnum)
				{
					var memberCount = tc.Members.Count;
					if (memberCount != ms.Length)
					{
						continue;
					}

					for (int k = 0; k < memberCount; k++)
					{
						var tem = tc.Members[k];
						if (tem.Name != ms[k])
						{
							break;
						}

						if (k == memberCount - 1)// last one pass
						{
							return tc;
						}
					}
				}
			}

			return null;
		}
	}

}
