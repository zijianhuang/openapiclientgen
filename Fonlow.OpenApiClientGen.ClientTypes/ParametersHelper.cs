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
using Microsoft.OpenApi.Any;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public class ParametersHelper
	{
		public ParametersHelper(CodeNamespace clientNamespace)
		{
			this.clientNamespace = clientNamespace;
		}

		readonly CodeNamespace clientNamespace;

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
						ParameterType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(p.Schema.Type, p.Schema.Format),
						ParameterBinder = ParameterLocationToParameterBinder(p.In),
					},

					ParameterTypeReference = OpenApiParameterToCodeTypeReference(p)
				}
			).Where(k => k.ParameterDescriptor.ParameterBinder != ParameterBinder.None).ToArray();
		}

		public CodeTypeReference OpenApiParameterToCodeTypeReference(OpenApiParameter content)
		{
			string schemaType = content.Schema.Type;
			if (schemaType != null)
			{
				if (schemaType == "array") // for array
				{
					OpenApiSchema arrayItemsSchema = content.Schema.Items;
					if (arrayItemsSchema.Reference != null) //array of custom type
					{
						string arrayTypeName = arrayItemsSchema.Reference.Id;
						CodeTypeReference arrayCodeTypeReference = TypeRefBuilder.CreateArrayOfCustomTypeReference(arrayTypeName, 1);
						return arrayCodeTypeReference;
					}
					else
					{
						string arrayType = arrayItemsSchema.Type;
						if (arrayItemsSchema.Enum != null && arrayItemsSchema.Enum.Count > 0)
						{
							string[] enumMemberNames = arrayItemsSchema.Enum.Cast<OpenApiString>().Select(m => m.Value).ToArray();
							CodeTypeDeclaration existingDeclaration = clientNamespace.FindEnumDeclaration(enumMemberNames);
							if (existingDeclaration != null)
							{
								string existingTypeName = existingDeclaration.Name;
								CodeTypeReference enumArrayReference = TypeRefBuilder.CreateArrayOfCustomTypeReference(existingTypeName, 1);
								return enumArrayReference;
							}

							//warning about bad yaml design.
							Trace.TraceWarning($"Parameter {content.Name} has referenced some enum members {String.Join(", ", enumMemberNames)} which are not of any declared components.");
						}

						Type clrType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(arrayType, null);
						CodeTypeReference arrayCodeTypeReference = TypeRefBuilder.CreateArrayTypeReference(clrType, 1);
						return arrayCodeTypeReference;
					}
				}
				else if (content.Schema.Enum.Count > 0) // for enum
				{
					string[] enumMemberNames = content.Schema.Enum.Cast<OpenApiString>().Select(m => m.Value).ToArray();
					CodeTypeDeclaration existingDeclaration = clientNamespace.FindEnumDeclaration(enumMemberNames);
					if (existingDeclaration != null)
					{
						string existingTypeName = existingDeclaration.Name;
						CodeTypeReference enumReference = TypeRefBuilder.TranslateToClientTypeReference(existingTypeName);
						return enumReference;
					}
				}

				Type simpleType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(content.Schema.Type, content.Schema.Format);
				CodeTypeReference codeTypeReference = new CodeTypeReference(simpleType);
				return codeTypeReference;

				//var schemaFormat = content.Schema.Format;
				//return new CodeTypeReference(nameComposer.PrimitiveSwaggerTypeToClrType(schemaType, schemaFormat));
			}

			return null;
		}

		ParameterBinder ParameterLocationToParameterBinder(ParameterLocation? lo)
		{
			if (!lo.HasValue)
			{
				throw new System.IO.InvalidDataException("ParameterLocation is REQUIRED");
			}

			return lo switch
			{
				ParameterLocation.Query => ParameterBinder.FromQuery,
				ParameterLocation.Path => ParameterBinder.FromUri,
				_ => ParameterBinder.None,//so to be skiped/ignored
			};
		}
	}

}
