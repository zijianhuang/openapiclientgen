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
						ParameterType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(p.Schema.Type, p.Schema.Format),
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
						var arrayCodeTypeReference = TypeRefBuilder.CreateArrayOfCustomTypeReference(arrayTypeName, 1);
						return arrayCodeTypeReference;
					}
					else
					{
						var arrayType = arrayItemsSchema.Type;
						if (arrayItemsSchema.Enum != null && arrayItemsSchema.Enum.Count > 0)
						{
							var enumMemberNames = arrayItemsSchema.Enum.Cast<OpenApiString>().Select(m => m.Value).ToArray();
							var existingDeclaration = clientNamespace.LocateEnumDeclaration(enumMemberNames);
							if (existingDeclaration != null)
							{
								var existingTypeName = existingDeclaration.Name;
								var enumArrayReference = TypeRefBuilder.CreateArrayOfCustomTypeReference(existingTypeName, 1);
								return enumArrayReference;
							}

							//warning about bad yaml design.
							Trace.TraceWarning($"Parameter {content.Name} has referenced some enum members {String.Join(", ", enumMemberNames)} which are not of any declared components.");
						}

						var clrType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(arrayType, null);
						var arrayCodeTypeReference = TypeRefBuilder.CreateArrayTypeReference(clrType, 1);
						return arrayCodeTypeReference;
					}
				}
				else if (content.Schema.Enum.Count > 0) // for enum
				{
					var enumMemberNames = content.Schema.Enum.Cast<OpenApiString>().Select(m => m.Value).ToArray();
					var existingDeclaration = clientNamespace.LocateEnumDeclaration(enumMemberNames);
					if (existingDeclaration != null)
					{
						var existingTypeName = existingDeclaration.Name;
						var enumReference = TypeRefBuilder.TranslateToClientTypeReference(existingTypeName);
						return enumReference;
					}
				}

				var simpleType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(content.Schema.Type, content.Schema.Format);
				var codeTypeReference = new CodeTypeReference(simpleType);
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
	}

}
