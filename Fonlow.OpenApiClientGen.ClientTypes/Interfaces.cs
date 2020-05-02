using Microsoft.OpenApi.Models;
using System.Collections.Generic;

namespace Fonlow.OpenApiClientGen
{
	public interface IComponentToCodeDom
	{
		void AddTypeToClientNamespace(KeyValuePair<string, OpenApiSchema> item);
	}
}
