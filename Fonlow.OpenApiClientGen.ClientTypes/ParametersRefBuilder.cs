using Microsoft.OpenApi.Models;
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
		public ParametersRefBuilder(IComponentToCodeDom com2CodeDom, string actionName)
		{
			this.com2CodeDom = com2CodeDom;
			this.actionName = actionName;
		}

		readonly IComponentToCodeDom com2CodeDom;
		readonly string actionName;

		public ParameterDescriptionEx[] OpenApiParametersToParameterDescriptions(IList<OpenApiParameter> ps)
		{
			return ps.Select(p =>
			{
				var refinedName = NameFunc.RefineParameterName(p.Name);
				var r = new ParameterDescriptionEx()
				{
					Name = refinedName, //azure.com\apimanagement-apimapis has $ in query parameter
					QName = p.Name,
					Documentation = p.Description,
					ParameterDescriptor = new ParameterDescriptor()
					{
						IsOptional = !p.Required,
						ParameterName = refinedName,
						ParameterType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(p.Schema.Type, p.Schema.Format),
						ParameterBinder = ParameterLocationToParameterBinder(p.In),
					},

					ParameterTypeReference = OpenApiParameterToCodeTypeReference(p)
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
