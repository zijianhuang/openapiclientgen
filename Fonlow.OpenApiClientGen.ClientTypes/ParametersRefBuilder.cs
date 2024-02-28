using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Linq;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	/// <summary>
	/// Helper functions for openapi operation parameters
	/// </summary>
	public class ParametersRefBuilder
	{
		/// <summary>
		/// 
		/// </summary>
		/// <param name="com2CodeDom">Provide some CodeCOM lookup functions for registered components.</param>
		/// <param name="actionName">for prefix of casual types.</param>
		public ParametersRefBuilder(IComponentToCodeDom com2CodeDom, string actionName, IRenamer renamer)
		{
			this.com2CodeDom = com2CodeDom;
			this.actionName = actionName;
			this.renamer = renamer;	
		}

		readonly IComponentToCodeDom com2CodeDom;
		readonly string actionName;
		readonly IRenamer renamer;

		public ParameterDescription[] OpenApiParametersToParameterDescriptions(IList<OpenApiParameter> ps)
		{
			return ps.Select(p =>
			{
				var refinedName = renamer.RefineParameterName(p.Name);
				var r = new ParameterDescription()
				{
					Name = refinedName, //azure.com\apimanagement-apimapis has $ in query parameter
					QName = p.Name,
					Documentation=p.Description,
					ParameterDescriptor = new ParameterDescriptor()
					{
						IsRequired = p.Required,
						ParameterName = p.Name, // what appear in the HTTP query name, for example: "?api-version=" + api_version
						ParameterType = p.Schema == null ? typeof(string) : TypeRefHelper.PrimitiveSwaggerTypeToClrType(p.Schema.Type, p.Schema.Format),
						Schema=p.Schema, //p.Schema.Description is always null
						ParameterBinder = ParameterLocationToParameterBinder(p.In),
					},

					ParameterTypeReference = OpenApiParameterToCodeTypeReference(p) //if parameter is not simple type
				};

				return r;
			}
			).Where(k => k.ParameterDescriptor.ParameterBinder != ParameterBinder.None).ToArray();
		}

		public CodeTypeReference OpenApiParameterToCodeTypeReference(OpenApiParameter apiParameter)
		{
			return OpenApiParameterSchemaToCodeTypeReference(apiParameter.Schema, apiParameter.Name);
		}

		public CodeTypeReference OpenApiParameterSchemaToCodeTypeReference(OpenApiSchema apiParameterSchema, string apiParameterName)
		{
			return com2CodeDom.PropertySchemaToCodeTypeReference(apiParameterSchema, actionName, apiParameterName);
		}

		static ParameterBinder ParameterLocationToParameterBinder(ParameterLocation? lo)
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
