using Microsoft.OpenApi.Models;
using System.Collections.Generic;
using System.CodeDom;

namespace Fonlow.OpenApiClientGen
{
	public interface IComponentToCodeDom
	{
		void AddTypeToCodeDom(KeyValuePair<string, OpenApiSchema> item);

		public CodeTypeDeclaration FindTypeDeclarationInNamespaces(string typeName, string ns);

		bool RegisteredSchemaRefIdExists(string t);
	}
}
