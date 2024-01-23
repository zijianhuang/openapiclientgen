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
	/// Create Types CodeDOM from OpenApiComponents. This is the major entry point to interact with OpenApiComponents.
	/// </summary>
	public abstract class ComponentsToTypesBase : IComponentToCodeDom
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

		readonly List<string> registeredSchemaRefIds = new();

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
			using StringWriter writer = new();
			WriteCode(writer);
			return writer.ToString();
		}

		public void CreateCodeDomForComponents(OpenApiComponents components)
		{
			if (components == null)
			{
				return;
			}

			ComponentsSchemas = components.Schemas;//.OrderBy(d => d.Value.Reference != null).OrderBy(k => k.Value.Properties.Count > 0).OrderBy(g => g.Value.AllOf.Count > 0).OrderBy(d => d.Value.Type != "array"); //so simple complex types will be handled first to be referenced by more complex ones.
			if (components.RequestBodies != null)
			{
				var stronglyTypedRequestBodies = ExtractRequestBodiesOfApplicationJson(components.RequestBodies);
				foreach (var t in stronglyTypedRequestBodies)
				{
					if (!ComponentsSchemas.TryAdd(t.Key, t.Value))
					{
						Console.Error.WriteLine($"duplicated: {t.Key}");
					}
				}

			}

			var classNamespaceNames = NameFunc.FindNamespacesInClassNames(ComponentsSchemas.Keys);

			if (settings.DotsToNamespaces && classNamespaceNames.Length > 0)
			{
				var groupedComponentsSchemas = ComponentsSchemas
					.GroupBy(d => NameFunc.GetNamespaceOfClassName(d.Key))
					.OrderBy(k => k.Key);
				//var namespacesOfTypes = groupedComponentsSchemas.Select(d => d.Key).ToArray();
				foreach (var groupedTypes in groupedComponentsSchemas)
				{
					var classNamespaceText = groupedTypes.Key;
					if (string.IsNullOrEmpty(classNamespaceText))
					{
						classNamespaceText = settings.ClientNamespace;
					}

					AddNamespaceDeclarationIfNotExist(classNamespaceText);

					foreach (var kv in groupedTypes.OrderBy(t => t.Key))
					{
						AddTypeToCodeDom(kv.Key, kv.Value);
					}
				}
			}
			else
			{
				foreach (KeyValuePair<string, OpenApiSchema> item in ComponentsSchemas)
				{
					var existingType = FindCodeTypeDeclarationInNamespaces(NameFunc.RefineTypeName(item.Key, null), null);
					if (existingType == null)
					{
						AddTypeToCodeDom(item.Key, item.Value);
					}
				}
			}
		}

		/// <summary>
		/// Add Type for RefId if not existing in the entire codeCompileUnit.Namespaces.
		/// If RefId is separated by dots and DotsToNamespsaces is true, this is also addressed.
		/// </summary>
		/// <param name="refId"></param>
		void AddTypeForRefIdIfNotExist(string refId)
		{
			var schema = ComponentsSchemas[refId];
			if (schema != null)
			{
				AddTypeToCodeDom(refId, schema);
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
		public abstract void AddTypeToCodeDom(string refId, OpenApiSchema schema);

		public abstract void AddEnumMembers(CodeTypeDeclaration typeDeclaration, IList<IOpenApiAny> enumTypeList);

		public void AddProperties(CodeTypeDeclaration typeDeclaration, OpenApiSchema schema, string currentTypeName, string ns)
		{
			foreach (KeyValuePair<string, OpenApiSchema> p in schema.Properties)
			{
				AddProperty(p.Key, p.Value, typeDeclaration, schema, currentTypeName, ns);
			}
		}

		protected abstract void AddProperty(string refId, OpenApiSchema propertySchema, CodeTypeDeclaration typeDeclaration, OpenApiSchema schema, string currentTypeName, string ns);

		public Tuple<CodeTypeReference, CodeTypeDeclaration> GenerateCasualEnum(OpenApiSchema propertySchema, string typeDeclarationName, string propertyName, string ns)
		{
			string casualEnumName = typeDeclarationName + NameFunc.RefinePropertyName(propertyName);
			CodeTypeDeclaration existingType = FindCodeTypeDeclarationInNamespaces(casualEnumName, ns);
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
		protected Tuple<CodeTypeReference, bool> CreateCodeTypeReferenceSchemaOf(OpenApiSchema propertySchema, string currentTypeName, string propertyKey)
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

			if (refToType == null)
			{
				Trace.TraceWarning($"Property '{propertyKey}' of {currentTypeName} may be of type object.");
				return Tuple.Create(new CodeTypeReference(typeof(object)), true);
			}

			CodeTypeReference ctr = PropertySchemaToCodeTypeReference(refToType, currentTypeName, NameFunc.RefinePropertyName(propertyKey));
			bool isClass = !TypeRefHelper.IsPrimitiveStructure(ctr.BaseType);
			return Tuple.Create(ctr, isClass);
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
				if (settings.ArrayAs == ArrayAsIEnumerableDerived.Array)
				{
					Type clrType = TypeRefHelper.PrimitiveSwaggerTypeToClrType("string", null);
					CodeTypeReference arrayCodeTypeReference = TypeRefHelper.CreateArrayTypeReference(clrType, 1);
					return Tuple.Create(arrayCodeTypeReference, String.Empty);
				}
				else
				{
					var typeRef = TypeRefHelper.ArrayAsIEnumerableDerivedToType("string", settings.ArrayAs);
					return Tuple.Create(new CodeTypeReference(typeRef), string.Empty);
				}
			}
			else if (arrayItemsSchema.Reference != null) //array of custom type
			{
				string arrayTypeSchemaRefId = arrayItemsSchema.Reference.Id;
				var arrayTypeNs = settings.DotsToNamespaces ? NameFunc.GetNamespaceOfClassName(arrayTypeSchemaRefId) : string.Empty;
				var arrayTypeName = NameFunc.RefineTypeName(arrayTypeSchemaRefId, arrayTypeNs, settings.DotsToNamespaces);
				var arrayTypeWithNs = NameFunc.CombineNamespaceWithClassName(arrayTypeNs, arrayTypeName);
				var existingType = FindCodeTypeDeclarationInNamespaces(arrayTypeName, arrayTypeNs);
				if (existingType == null) // Referencing to a type not yet added to namespace
				{
					var existingSchema = FindSchema(arrayTypeSchemaRefId);
					if (existingSchema != null && !RegisteredSchemaRefIdExists(arrayTypeSchemaRefId))
					{
						AddTypeToCodeDom(arrayTypeSchemaRefId, existingSchema);
					}
				}

				if (TypeAliasDic.TryGet(arrayTypeSchemaRefId, out string arrayTypeNameAlias))
				{
					if (!TypeRefHelper.IsSwaggerPrimitive(arrayTypeNameAlias))
					{
						return Tuple.Create(ComponentsHelper.CreateArrayOfCustomTypeReference(arrayTypeNameAlias, 1, settings), String.Empty);
					}
					else
					{
						var clrType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(arrayTypeNameAlias, null);
						return Tuple.Create(ComponentsHelper.CreateArrayOfCustomTypeReference(clrType.FullName, 1, settings), String.Empty);
					}
				}
				else
				{
					return Tuple.Create(ComponentsHelper.CreateArrayOfCustomTypeReference(arrayTypeWithNs, 1, settings), String.Empty);
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
							? GetStringsFromEnumList(arrayItemsSchema.Enum)
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
						CodeTypeReference enumArrayReference = settings.ArrayAs == ArrayAsIEnumerableDerived.Array ? TypeRefHelper.CreateArrayOfCustomTypeReference(existingTypeName, 1) : new CodeTypeReference(TypeRefHelper.ArrayAsIEnumerableDerivedToType(existingTypeName, settings.ArrayAs));
						return Tuple.Create(enumArrayReference, String.Empty);
					}

					//warning about bad yaml design.
					Trace.TraceWarning($"Property {NameFunc.RefineParameterName(propertyName)} has referenced some enum members {String.Join(", ", enumMemberNames)} which are not of any declared components.");
				}
				else if (arrayItemsSchema.Properties != null && arrayItemsSchema.Properties.Count > 0) // for casual type
				{
					var casualTypeName = settings.PrefixWithTypeName ? typeDeclarationName + NameFunc.RefinePropertyName(propertyName) : NameFunc.RefinePropertyName(propertyName);
					CodeTypeDeclaration casualTypeDeclaration = AddTypeToClassNamespace(casualTypeName, ns);//stay with the namespace of the host class
					AddProperties(casualTypeDeclaration, arrayItemsSchema, casualTypeName, ns);
					if (settings.ArrayAs == ArrayAsIEnumerableDerived.Array)
					{
						return Tuple.Create(ComponentsHelper.CreateArrayOfCustomTypeReference(casualTypeName, 1), casualTypeName);
					}
					else
					{
						var typeRef = TypeRefHelper.ArrayAsIEnumerableDerivedToType(casualTypeName, settings.ArrayAs);
						return Tuple.Create(new CodeTypeReference(typeRef), string.Empty);
					}
				}

				Type clrType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(arrayType, null);
				if (settings.ArrayAs == ArrayAsIEnumerableDerived.Array)
				{
					return Tuple.Create(TypeRefHelper.CreateArrayTypeReference(clrType, 1), String.Empty);
				}
				else
				{
					var typeRef = TypeRefHelper.ArrayAsIEnumerableDerivedToType(clrType.Name, settings.ArrayAs);
					return Tuple.Create(new CodeTypeReference(typeRef), string.Empty);
				}
			}
		}

		public CodeTypeReference CreateComplexCodeTypeReference(OpenApiSchema propertySchema)
		{
			string propertyTypeNs = settings.DotsToNamespaces ? NameFunc.GetNamespaceOfClassName(propertySchema.Reference.Id) : string.Empty;
			string complexType = NameFunc.RefineTypeName(propertySchema.Reference.Id, propertyTypeNs, settings.DotsToNamespaces);
			var existingType = FindCodeTypeDeclarationInNamespaces(complexType, propertyTypeNs);
			if (existingType == null && !RegisteredSchemaRefIdExists(propertySchema.Reference.Id)) // Referencing to a type not yet added to namespace
			{
				AddTypeForRefIdIfNotExist(propertySchema.Reference.Id);
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

		protected abstract void CreateTypeDocComment(string refId, OpenApiSchema typeSchema, CodeTypeMember typeDeclaration);

		protected abstract void CreateMemberDocComment(string refId, OpenApiSchema memberSchema, CodeMemberField propertyField, OpenApiSchema modelSchema);

		/// <summary>
		/// Find in ClientNamespace if ns is not defined, or in ClassNamespaces and ClientNamespace.
		/// </summary>
		/// <param name="typeNameNoNs"></param>
		/// <param name="ns"></param>
		/// <returns></returns>
		public CodeTypeDeclaration FindCodeTypeDeclarationInNamespaces(string typeNameNoNs, string ns)
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
		protected CodeTypeDeclaration FindEnumDeclaration(string[] enumMemberNames)
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

		/// <summary>
		/// Mostly used in ParametersRefBuilder.
		/// </summary>
		/// <param name="propertySchema"></param>
		/// <param name="actionName"></param>
		/// <param name="propertyName"></param>
		/// <returns></returns>
		/// <remarks>This shares similar navigation of schema like those in AddProperty().</remarks>
		public CodeTypeReference PropertySchemaToCodeTypeReference(OpenApiSchema propertySchema, string actionName, string propertyName)
		{
			if (propertySchema == null)
			{
				//throw new ArgumentNullException(nameof(propertySchema));
				Console.Error.WriteLine($"actionName: {actionName} and property: {propertyName} not having propertySchema");
				return null;
			}

			string schemaType = propertySchema.Type;
			bool isPrimitiveType = TypeRefHelper.IsPrimitiveTypeOfOA(schemaType);
			if (String.IsNullOrEmpty(schemaType))
			{
				if (propertySchema.Reference != null)
				{
					string propertyTypeNs = settings.DotsToNamespaces ? NameFunc.GetNamespaceOfClassName(propertySchema.Reference.Id) : string.Empty;
					string propertyTypeName = NameFunc.RefineTypeName(propertySchema.Reference.Id, propertyTypeNs, settings.DotsToNamespaces);
					string propertyTypeWithNs = NameFunc.CombineNamespaceWithClassName(propertyTypeNs, propertyTypeName);
					return ComponentsHelper.TranslateTypeNameToClientTypeReference(propertyTypeWithNs);
				}
				else
				{
					if (propertySchema.Enum.Count > 0) //for casual enum
					{
						var r = GenerateCasualEnum(propertySchema, actionName, propertyName, settings.ClientNamespace);
						return r.Item1;
					}
					else
					{
						Tuple<CodeTypeReference, bool> r = CreateCodeTypeReferenceSchemaOf(propertySchema, actionName, propertyName);
						return r.Item1;
					}
				}
			}
			else
			{
				if (schemaType == "array") // for array
				{
					var r = CreateArrayCodeTypeReference(propertySchema, actionName, propertyName, null, null);
					return r.Item1;
				}
				else if (propertySchema.Enum.Count == 0 && propertySchema.Reference != null && !isPrimitiveType) // for complex type
				{
					CodeTypeReference complexCodeTypeReference = CreateComplexCodeTypeReference(propertySchema);
					return complexCodeTypeReference;
				}
				else if (propertySchema.Reference == null && propertySchema.Properties != null && propertySchema.Properties.Count > 0) // for casual type
				{
					string casualTypeName = actionName + NameFunc.RefinePropertyName(propertyName);
					var found = FindCodeTypeDeclarationInNamespaces(casualTypeName, null); //It could happenen when generating sync and async functions in C#
					if (found == null)
					{
						CodeTypeDeclaration casualTypeDeclaration = AddTypeToClassNamespace(casualTypeName, null);//stay with the namespace of the host class
						AddProperties(casualTypeDeclaration, propertySchema, casualTypeName, null);
					}

					return TypeRefHelper.TranslateToClientTypeReference(casualTypeName);
				}
				else if (schemaType == "object" && propertySchema.AdditionalProperties != null) // for dictionary
				{
					CodeTypeReference dicKeyTypeRef = TypeRefHelper.TranslateToClientTypeReference(typeof(string));
					CodeTypeReference dicValueTypeRef = PropertySchemaToCodeTypeReference(propertySchema.AdditionalProperties, actionName, propertyName);
					return new CodeTypeReference(typeof(Dictionary<,>).FullName, dicKeyTypeRef, dicValueTypeRef); //for client codes, Dictionary is better than IDictionary, no worry of different implementation of IDictionary
				}
				else if (propertySchema.Enum.Count == 0) // for primitive type
				{
					Type t = TypeRefHelper.PrimitiveSwaggerTypeToClrType(schemaType, propertySchema.Format);
					return new CodeTypeReference(t);
				}
				else if (propertySchema.Enum.Count > 0 && schemaType == "string") // for enum
				{
					string[] enumMemberNames;
					try
					{
						enumMemberNames = (String.IsNullOrEmpty(propertySchema.Type) || propertySchema.Type == "string")
							? GetStringsFromEnumList(propertySchema.Enum)
							: propertySchema.Enum.Cast<OpenApiInteger>().Select(m => "_" + m.Value.ToString()).ToArray();

					}
					catch (InvalidCastException ex)
					{
						throw new CodeGenException($"When dealing with {propertyName} of {schemaType}, error: {ex.Message}");
					}

					CodeTypeDeclaration existingDeclaration = FindEnumDeclaration(enumMemberNames);
					if (existingDeclaration != null)
					{
						string existingTypeName = existingDeclaration.Name;
						CodeTypeReference enumReference = TypeRefHelper.TranslateToClientTypeReference(existingTypeName);
						return enumReference;
					}
					else
					{
						if (propertySchema.Reference != null)
						{
							AddTypeForRefIdIfNotExist(propertySchema.Reference.Id);
							CodeTypeReference codeTypeReference = ComponentsHelper.TranslateTypeNameToClientTypeReference(NameFunc.RefineTypeName(propertySchema.Reference.Id, ""));
							return codeTypeReference;
						}
						else
						{
							var r = GenerateCasualEnum(propertySchema, actionName, propertyName, settings.ClientNamespace);
							return r.Item1;
						}
					}
				}
				else if (schemaType != "string" && TypeAliasDic.TryGet(schemaType, out string aliasTypeName)) //check TypeAliasDic
				{
					return new CodeTypeReference(aliasTypeName);
				}
				else if (propertySchema.Reference != null)
				{
					CodeTypeReference complexCodeTypeReference = CreateComplexCodeTypeReference(propertySchema);
					return complexCodeTypeReference;
				}
				else // for casual enum
				{
					if (propertySchema.Reference != null)
					{
						AddTypeForRefIdIfNotExist(propertySchema.Reference.Id);
						CodeTypeReference codeTypeReference = ComponentsHelper.TranslateTypeNameToClientTypeReference(NameFunc.RefineTypeName(propertySchema.Reference.Id, ""));
						return codeTypeReference;
					}
					else
					{
						var r = GenerateCasualEnum(propertySchema, actionName, propertyName, settings.ClientNamespace);
						return r.Item1;
					}
				}
			}
		}

		protected virtual void AddValidationAttributes(OpenApiSchema fieldSchema, CodeMemberField memberField)
		{
			if (fieldSchema.MinLength.HasValue)
			{
				CodeSnippetExpression len = new(fieldSchema.MinLength.Value.ToString());
				CodeAttributeArgument[] attributeParams = new CodeAttributeArgument[] { new CodeAttributeArgument(len) };
				CodeAttributeDeclaration cad = new("System.ComponentModel.DataAnnotations.MinLength", attributeParams);
				memberField.CustomAttributes.Add(cad);
			}

			if (fieldSchema.MaxLength.HasValue)
			{
				CodeSnippetExpression len = new(fieldSchema.MaxLength.Value.ToString());
				CodeAttributeArgument[] attributeParams = new CodeAttributeArgument[] { new CodeAttributeArgument(len) };
				CodeAttributeDeclaration cad = new("System.ComponentModel.DataAnnotations.MaxLength", attributeParams);
				memberField.CustomAttributes.Add(cad);
			}

			if (fieldSchema.Maximum.HasValue || fieldSchema.Minimum.HasValue)
			{
				Type type = TypeRefHelper.PrimitiveSwaggerTypeToClrType(fieldSchema.Type, fieldSchema.Format);
				List<CodeAttributeArgument> attributeParams = new();
				if (fieldSchema.Type == "string")
				{
					Trace.TraceWarning("A string type property shouldn't be decorated by Maximum or Minimum but MaxLength or MinLength.");//Xero_bankfeeds.yaml has such problem.
					return;
				}

				if (fieldSchema.Minimum.HasValue)
				{
					CodeSnippetExpression min = new($"{fieldSchema.Minimum.Value}");
					attributeParams.Add(new CodeAttributeArgument(min));
				}
				else
				{
					CodeSnippetExpression min = new($"{type.FullName}.MinValue");
					attributeParams.Add(new CodeAttributeArgument(min));
				}

				if (fieldSchema.Maximum.HasValue)
				{
					CodeSnippetExpression max = new($"{fieldSchema.Maximum.Value}");
					attributeParams.Add(new CodeAttributeArgument(max));
				}
				else
				{
					CodeSnippetExpression max = new($"{type.FullName}.MaxValue");
					attributeParams.Add(new CodeAttributeArgument(max));
				}

				// RangeAttribute(Double, Double), RangeAttribute(Int32, Int32), RangeAttribute(Type, String, String)
				CodeAttributeDeclaration cad = new("System.ComponentModel.DataAnnotations.Range", attributeParams.ToArray());
				memberField.CustomAttributes.Add(cad);
			}

			if (fieldSchema.MinItems.HasValue)
			{
				CodeSnippetExpression len = new(fieldSchema.MinItems.Value.ToString());
				CodeAttributeArgument[] attributeParams = new CodeAttributeArgument[] { new CodeAttributeArgument(len) };
				CodeAttributeDeclaration cad = new("System.ComponentModel.DataAnnotations.MinLength", attributeParams);
				memberField.CustomAttributes.Add(cad);
			}

			if (fieldSchema.MaxItems.HasValue)
			{
				CodeSnippetExpression len = new(fieldSchema.MaxItems.Value.ToString());
				CodeAttributeArgument[] attributeParams = new CodeAttributeArgument[] { new CodeAttributeArgument(len) };
				CodeAttributeDeclaration cad = new("System.ComponentModel.DataAnnotations.MaxLength", attributeParams);
				memberField.CustomAttributes.Add(cad);
			}
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="classNamespaceText"></param>
		/// <returns></returns>
		protected CodeNamespace AddNamespaceDeclarationIfNotExist(string classNamespaceText)
		{
			var existingNamespace = ComponentsHelper.FindNamespace(codeCompileUnit.Namespaces, classNamespaceText);
			if (existingNamespace == null)
			{
				var classNamespace = new CodeNamespace(classNamespaceText);
				codeCompileUnit.Namespaces.Add(classNamespace);
				ClassNamespaces.Add(classNamespace);
				return classNamespace;
			}

			return existingNamespace;
		}

		/// <summary>
		/// Sometimes the reader return one member as OpenApiNull, so a wholesale typecast is not working.
		/// </summary>
		/// <param name="enumList"></param>
		/// <returns></returns>
		protected string[] GetStringsFromEnumList(IList<IOpenApiAny> enumList)
		{
			return enumList.Select(d =>
			{
				if (d is OpenApiPrimitive<string> dString)
				{
					return dString.Value;
				}
				else if (d is OpenApiNull dNull)
				{
					return "null";
				}
				else
				{
					throw new CodeGenException("Mixed up enum.");
				}
			}).ToArray();
		}

		/// <summary>
		/// Extract those with content type application/json, and the properties.count is greater than 0.
		/// </summary>
		/// <param name="requestBodies"></param>
		/// <returns></returns>
		KeyValuePair<string, OpenApiSchema>[] ExtractRequestBodiesOfApplicationJson(IDictionary<string, OpenApiRequestBody> requestBodies)
		{
			var stronglyTypedBodies = requestBodies.Where(d =>
			{
				if (d.Value.Content.TryGetValue("application/json", out OpenApiMediaType mediaTypeObject))
				{
					if (mediaTypeObject.Schema.Reference == null && (mediaTypeObject.Schema.Properties==null || mediaTypeObject.Schema.Properties.Count == 0))
					{
						return false;
					}

					return true;
				}
				else
				{
					return false;
				}
			});

			IEnumerable<KeyValuePair<string, OpenApiSchema>> r = stronglyTypedBodies.Select(d =>
			{
				return new KeyValuePair<string, OpenApiSchema>(d.Key, d.Value.Content["application/json"].Schema);
			});

			return r.ToArray();
		}

	}

}
