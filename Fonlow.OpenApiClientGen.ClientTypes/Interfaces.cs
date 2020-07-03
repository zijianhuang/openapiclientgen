using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using System.CodeDom;
using System.Collections.Generic;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public interface IComponentToCodeDom
	{
		void AddTypeToCodeDom(KeyValuePair<string, OpenApiSchema> item);

		public CodeTypeDeclaration FindTypeDeclarationInNamespaces(string typeName, string ns);

		bool RegisteredSchemaRefIdExists(string t);

		void AddEnumMembers(CodeTypeDeclaration typeDeclaration, IList<IOpenApiAny> enumTypeList);

		CodeTypeDeclaration AddTypeToClassNamespace(string typeName, string ns);

		OpenApiSchema FindSchema(string key);

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
