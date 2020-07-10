using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using System.CodeDom;
using System.Collections.Generic;
using System;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public interface IComponentToCodeDom
	{
		void AddTypeToCodeDom(KeyValuePair<string, OpenApiSchema> item);

		public CodeTypeDeclaration FindTypeDeclarationInNamespaces(string typeName, string ns);

		bool RegisteredSchemaRefIdExists(string t);

		void AddEnumMembers(CodeTypeDeclaration typeDeclaration, IList<IOpenApiAny> enumTypeList);

		void AddProperties(CodeTypeDeclaration typeDeclaration, OpenApiSchema schema, string currentTypeName, string ns);

		Tuple<CodeTypeReference, string> CreateArrayCodeTypeReference(OpenApiSchema propertySchema, string typeDeclarationName, string propertyName, string currentTypeName, string ns);

		CodeTypeReference CreateComplexCodeTypeReference(OpenApiSchema propertySchema);

		Tuple<CodeTypeReference, CodeTypeDeclaration> GenerateCasualEnum(OpenApiSchema propertySchema, string typeDeclarationName, string propertyName, string ns);

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
