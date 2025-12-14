using Microsoft.OpenApi;
using Microsoft.OpenApi.YamlReader;
using Microsoft.OpenApi.Reader;
using System.CodeDom;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	/// <summary>
	/// OpenApi Components to CodeDOM.
	/// </summary>
	public interface IComponentToCodeDom
	{
		CodeTypeReference PropertySchemaToCodeTypeReference(IOpenApiSchema propertySchema, string containerName, string propertyName);
	}
}
