using Microsoft.OpenApi.Models;
using System.Collections.Generic;
using System.CodeDom;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public interface IComponentToCodeDom
	{
		void AddTypeToCodeDom(KeyValuePair<string, OpenApiSchema> item);

		public CodeTypeDeclaration FindTypeDeclarationInNamespaces(string typeName, string ns);

		bool RegisteredSchemaRefIdExists(string t);

		CodeNamespace ClientNamespace
		{
			get;
		}

		List<CodeNamespace> ClassNamespaces
		{
			get;
		}

		TypeAliasDic TypeAliasDic
		{
			get;
		}
		}
}
