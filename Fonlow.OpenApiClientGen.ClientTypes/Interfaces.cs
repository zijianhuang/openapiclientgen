using Microsoft.OpenApi.Models;
using System.CodeDom;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	/// <summary>
	/// OpenApi Components to CodeDOM.
	/// </summary>
	public interface IComponentToCodeDom
	{
		CodeTypeReference PropertySchemaToCodeTypeReference(OpenApiSchema propertySchema, string containerName, string propertyName);
	}
}
