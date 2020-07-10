using Microsoft.OpenApi.Models;
using System.CodeDom;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public interface IComponentToCodeDom
	{
		CodeTypeReference PropertySchemaToCodeTypeReference(OpenApiSchema propertySchema, string containerName, string propertyName);
	}
}
