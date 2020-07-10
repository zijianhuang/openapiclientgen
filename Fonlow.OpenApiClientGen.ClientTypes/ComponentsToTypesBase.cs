using Fonlow.Poco2Client;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.IO;
using System.Linq;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	/// <summary>
	/// Create CS Types CodeDOM from OpenApiComponents
	/// </summary>
	public abstract class ComponentsToTypesBase
	{
		public ComponentsToTypesBase(Settings settings, CodeCompileUnit codeCompileUnit, CodeNamespace clientNamespace)
		{
			this.codeCompileUnit = codeCompileUnit;
			this.settings = settings;
			this.ClientNamespace = clientNamespace;
			TypeAliasDic = new TypeAliasDic();
		}

		public CodeNamespace ClientNamespace { get; private set; }

		protected readonly CodeCompileUnit codeCompileUnit;

		protected readonly Settings settings;

		protected IDictionary<string, OpenApiSchema> ComponentsSchemas { get; private set; }

		readonly List<string> registeredSchemaRefIds = new List<string>();

		public List<CodeNamespace> ClassNamespaces { get; private set; } = new List<CodeNamespace>();

		public TypeAliasDic TypeAliasDic { get; private set; }

		protected void RegisterSchemaRefIdToBeAdded(string t)
		{
			registeredSchemaRefIds.Add(t);
		}

		protected void RemoveRegisteredSchemaRefId(string t)
		{
			registeredSchemaRefIds.Remove(t);
		}

		public bool RegisteredSchemaRefIdExists(string t)
		{
			return registeredSchemaRefIds.Exists(d => d == t);
		}

		/// <summary>
		/// Save CS codes generated into a file.
		/// </summary>
		/// <param name="fileName"></param>
		public abstract void SaveCodeToFile(string fileName);

		/// <summary>
		/// Write code with C# CodeDOM
		/// </summary>
		/// <param name="writer"></param>
		protected abstract void WriteCode(TextWriter writer);

		public string WriteToText()
		{
			using StringWriter writer = new StringWriter();
			WriteCode(writer);
			return writer.ToString();
		}

		public void CreateCodeDom(OpenApiComponents components)
		{
			if (components == null)
			{
				return;
			}

			ComponentsSchemas = components.Schemas;//.OrderBy(d => d.Value.Reference != null).OrderBy(k => k.Value.Properties.Count > 0).OrderBy(g => g.Value.AllOf.Count > 0).OrderBy(d => d.Value.Type != "array"); //so simple complex types will be handled first to be referenced by more complex ones.
			var classNamespaceNames = NameFunc.FindNamespacesInClassNames(ComponentsSchemas.Keys);

			if (classNamespaceNames.Length > 0)
			{
				var groupedComponentsSchemas = ComponentsSchemas
					.GroupBy(d => NameFunc.GetNamespaceOfClassName(d.Key))
					.OrderBy(k => k.Key);
				var namespacesOfTypes = groupedComponentsSchemas.Select(d => d.Key).ToArray();
				foreach (var groupedTypes in groupedComponentsSchemas)
				{
					var classNamespaceText = groupedTypes.Key;
					var classNamespace = new CodeNamespace(classNamespaceText);
					codeCompileUnit.Namespaces.Add(classNamespace);
					ClassNamespaces.Add(classNamespace);
					foreach (var kv in groupedTypes.OrderBy(t => t.Key))
					{
						var existingType = ComponentsHelper.FindTypeDeclarationInNamespace(NameFunc.RefineTypeName(kv.Key, classNamespaceText), classNamespace);
						if (existingType == null)
						{
							AddTypeToCodeDom(kv);
						}
					}
				}
			}
			else
			{
				foreach (KeyValuePair<string, OpenApiSchema> item in ComponentsSchemas)
				{
					var existingType = FindTypeDeclarationInNamespaces(NameFunc.RefineTypeName(item.Key, null), null);
					if (existingType == null)
					{
						AddTypeToCodeDom(item);
					}
				}
			}

		}

		/// <summary>
		/// Check if schema key exists in ComponentsSchemas
		/// </summary>
		/// <param name="key"></param>
		/// <returns></returns>
		public OpenApiSchema FindSchema(string key)
		{
			if (ComponentsSchemas.TryGetValue(key, out OpenApiSchema v))
			{
				return v;
			}

			return null;
		}

		public abstract CodeTypeDeclaration AddTypeToClassNamespace(string typeName, string ns);

		/// <summary>
		/// The Id will be translated to proper C# type name and namespace if the YAML does support namespace in components.
		/// </summary>
		/// <param name="item">Reference Id and its schema</param>
		public abstract void AddTypeToCodeDom(KeyValuePair<string, OpenApiSchema> item);

		public abstract void AddEnumMembers(CodeTypeDeclaration typeDeclaration, IList<IOpenApiAny> enumTypeList);

		public void AddProperties(CodeTypeDeclaration typeDeclaration, OpenApiSchema schema, string currentTypeName, string ns)
		{
			foreach (KeyValuePair<string, OpenApiSchema> p in schema.Properties)
			{
				AddProperty(p, typeDeclaration, schema, currentTypeName, ns);
			}
		}

		protected abstract void AddProperty(KeyValuePair<string, OpenApiSchema> p, CodeTypeDeclaration typeDeclaration, OpenApiSchema schema, string currentTypeName, string ns);

		public Tuple<CodeTypeReference, CodeTypeDeclaration> GenerateCasualEnum(OpenApiSchema propertySchema, string typeDeclarationName, string propertyName, string ns)
		{
			string casualEnumName = typeDeclarationName + NameFunc.RefinePropertyName(propertyName);
			CodeTypeDeclaration existingType = FindTypeDeclarationInNamespaces(casualEnumName, ns);
			CodeTypeDeclaration casualEnumTypeDeclaration = null;
			if (existingType == null)
			{
				casualEnumTypeDeclaration = PodGenHelper.CreatePodClientEnum(ClientNamespace, casualEnumName);
				AddEnumMembers(casualEnumTypeDeclaration, propertySchema.Enum);
				Trace.TraceInformation($"Casual enum {casualEnumName} added for {typeDeclarationName}/{propertyName}.");
			}

			CodeTypeReference codeTypeReference = ComponentsHelper.TranslateTypeNameToClientTypeReference(casualEnumName);
			return Tuple.Create(codeTypeReference, casualEnumTypeDeclaration);
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="propertySchema"></param>
		/// <param name="currentTypeName"></param>
		/// <param name="propertyKey"></param>
		/// <returns>CodeTypeReference and IsClass</returns>
		protected static Tuple<CodeTypeReference, bool> CreateCodeTypeReferenceSchemaOf(OpenApiSchema propertySchema, string currentTypeName, string propertyKey)
		{
			OpenApiSchema refToType = null;
			if (propertySchema.AllOf.Count > 0)
			{
				refToType = propertySchema.AllOf[0];
			}
			else if (propertySchema.OneOf.Count > 0)
			{
				refToType = propertySchema.OneOf[0];
			}
			else if (propertySchema.AnyOf.Count > 0)
			{
				refToType = propertySchema.AnyOf[0];
			}
			else if (refToType == null)
			{
				Trace.TraceWarning($"Property '{propertyKey}' of {currentTypeName} may be of type object.");
			}

			string customPropertyType = refToType == null ? "System.Object" : refToType.Type;
			string customPropertyFormat = refToType?.Format;
			Type customType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(customPropertyType, customPropertyFormat);
			return Tuple.Create(new CodeTypeReference(customType), customType.IsClass);
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="propertySchema"></param>
		/// <param name="typeDeclarationName"></param>
		/// <param name="propertyName"></param>
		/// <param name="currentTypeName"></param>
		/// <param name="ns"></param>
		/// <returns>CodeTypeReference and CasualTypeName. Empty if no casualTypeName.</returns>
		public Tuple<CodeTypeReference, string> CreateArrayCodeTypeReference(OpenApiSchema propertySchema, string typeDeclarationName, string propertyName, string currentTypeName, string ns)
		{
			OpenApiSchema arrayItemsSchema = propertySchema.Items;
			if (arrayItemsSchema == null)//ritekit.com has parameter as array but without items type. Presumbly it may be string.
			{
				Type clrType = TypeRefHelper.PrimitiveSwaggerTypeToClrType("string", null);
				CodeTypeReference arrayCodeTypeReference = TypeRefHelper.CreateArrayTypeReference(clrType, 1);
				return Tuple.Create(arrayCodeTypeReference, String.Empty);
			}
			else if (arrayItemsSchema.Reference != null) //array of custom type
			{
				string arrayTypeSchemaRefId = arrayItemsSchema.Reference.Id;
				var arrayTypeNs = NameFunc.GetNamespaceOfClassName(arrayTypeSchemaRefId);
				var arrayTypeName = NameFunc.RefineTypeName(arrayTypeSchemaRefId, arrayTypeNs);
				var arrayTypeWithNs = NameFunc.CombineNamespaceWithClassName(arrayTypeNs, arrayTypeName);
				var existingType = FindTypeDeclarationInNamespaces(arrayTypeName, arrayTypeNs);
				if (existingType == null) // Referencing to a type not yet added to namespace
				{
					var existingSchema = FindSchema(arrayTypeSchemaRefId);
					if (existingSchema != null && !RegisteredSchemaRefIdExists(arrayTypeSchemaRefId))
					{
						AddTypeToCodeDom(new KeyValuePair<string, OpenApiSchema>(arrayTypeSchemaRefId, existingSchema));
					}
				}

				if (TypeAliasDic.TryGet(arrayTypeSchemaRefId, out string arrayTypeNameAlias))
				{
					if (!TypeRefHelper.IsSwaggerPrimitive(arrayTypeNameAlias))
					{
						return Tuple.Create(ComponentsHelper.CreateArrayOfCustomTypeReference(arrayTypeNameAlias, 1), String.Empty);
					}
					else
					{
						var clrType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(arrayTypeNameAlias, null);
						return Tuple.Create(ComponentsHelper.CreateArrayOfCustomTypeReference(clrType.FullName, 1), String.Empty);
					}
				}
				else
				{
					return Tuple.Create(ComponentsHelper.CreateArrayOfCustomTypeReference(arrayTypeWithNs, 1), String.Empty);
				}
			}
			else
			{
				string arrayType = arrayItemsSchema.Type;
				if (arrayItemsSchema.Enum != null && arrayItemsSchema.Enum.Count > 0)
				{
					string[] enumMemberNames;
					try
					{
						enumMemberNames = (String.IsNullOrEmpty(arrayItemsSchema.Type) || arrayItemsSchema.Type == "string")
							? arrayItemsSchema.Enum.Cast<OpenApiString>().Select(m => m.Value).ToArray()
							: arrayItemsSchema.Enum.Cast<OpenApiInteger>().Select(m => "_" + m.Value.ToString()).ToArray();
					}
					catch (InvalidCastException ex)
					{
						throw new CodeGenException($"When dealing with {propertyName} of {arrayType}, error: {ex.Message}");
					}

					CodeTypeDeclaration existingDeclaration = FindEnumDeclaration(enumMemberNames);
					if (existingDeclaration != null)
					{
						string existingTypeName = existingDeclaration.Name;
						CodeTypeReference enumArrayReference = TypeRefHelper.CreateArrayOfCustomTypeReference(existingTypeName, 1);
						return Tuple.Create(enumArrayReference, String.Empty);
					}

					//warning about bad yaml design.
					Trace.TraceWarning($"Property {NameFunc.RefineParameterName(propertyName)} has referenced some enum members {String.Join(", ", enumMemberNames)} which are not of any declared components.");
				}
				else if (arrayItemsSchema.Properties != null && arrayItemsSchema.Properties.Count > 0) // for casual type
				{
					string casualTypeName = typeDeclarationName + NameFunc.RefinePropertyName(propertyName);
					CodeTypeDeclaration casualTypeDeclaration = AddTypeToClassNamespace(casualTypeName, ns);//stay with the namespace of the host class
					AddProperties(casualTypeDeclaration, arrayItemsSchema, currentTypeName, ns);
					return Tuple.Create(ComponentsHelper.CreateArrayOfCustomTypeReference(casualTypeName, 1), casualTypeName);
				}

				Type clrType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(arrayType, null);
				return Tuple.Create(TypeRefHelper.CreateArrayTypeReference(clrType, 1), String.Empty);
			}
		}

		public CodeTypeReference CreateComplexCodeTypeReference(OpenApiSchema propertySchema)
		{
			string propertyTypeNs = NameFunc.GetNamespaceOfClassName(propertySchema.Reference.Id);
			string complexType = NameFunc.RefineTypeName(propertySchema.Reference.Id, propertyTypeNs);
			var existingType = FindTypeDeclarationInNamespaces(complexType, propertyTypeNs);
			if (existingType == null && !RegisteredSchemaRefIdExists(propertySchema.Reference.Id)) // Referencing to a type not yet added to namespace
			{
				AddTypeToCodeDom(new KeyValuePair<string, OpenApiSchema>(complexType, propertySchema));
			}

			var typeWithNs = NameFunc.CombineNamespaceWithClassName(propertyTypeNs, complexType);
			return TypeRefHelper.TranslateToClientTypeReference(typeWithNs);
		}

		protected static string EscapeString(string s)
		{
			if (String.IsNullOrWhiteSpace(s))
			{
				return s;
			}

			return s.Replace("\"", "\\\"");
		}

		protected abstract void CreateTypeDocComment(KeyValuePair<string, OpenApiSchema> item, CodeTypeMember typeDeclaration);

		protected abstract void CreateMemberDocComment(KeyValuePair<string, OpenApiSchema> item, CodeMemberField propertyField);

		/// <summary>
		/// Find in ClientNamespace if ns is not defined, or in ClassNamespaces and ClientNamespace.
		/// </summary>
		/// <param name="typeNameNoNs"></param>
		/// <param name="ns"></param>
		/// <returns></returns>
		public CodeTypeDeclaration FindTypeDeclarationInNamespaces(string typeNameNoNs, string ns)
		{
			if (String.IsNullOrEmpty(ns))
			{
				var cd = ClientNamespace.FindTypeDeclaration(typeNameNoNs);
				if (cd != null)
				{
					return cd;
				}

				return null;
			}

			foreach (var cs in ClassNamespaces)
			{
				if (cs.Name == ns)
				{
					var ctd = cs.FindTypeDeclaration(typeNameNoNs);
					if (ctd != null)
					{
						return ctd;
					}
				}
			}

			var cg = ClientNamespace.FindTypeDeclaration(typeNameNoNs);
			if (cg != null)
			{
				return cg;
			}

			return null;
		}

		/// <summary>
		/// Find existing CodeTypeDeclaration in clientNamespace and classNamespaces.
		/// </summary>
		/// <param name="enumMemberNames"></param>
		/// <returns></returns>
		CodeTypeDeclaration FindEnumDeclaration(string[] enumMemberNames)
		{
			var t = ClientNamespace.FindEnumDeclaration(enumMemberNames);
			if (t != null)
			{
				return t;
			}

			foreach (var cs in ClassNamespaces)
			{
				var cd = cs.FindEnumDeclaration(enumMemberNames);
				if (cd != null)
				{
					return cd;
				}
			}

			return null;
		}


	}

}
