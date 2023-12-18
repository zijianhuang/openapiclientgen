using Fonlow.OpenApiClientGen.ClientTypes;
using Fonlow.Poco2Client;
using Fonlow.TypeScriptCodeDom;
using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;

namespace Fonlow.CodeDom.Web.Ts
{
	/// <summary>
	/// Generate TypeScript codes of the client API of the controllers
	/// </summary>
	public abstract class ControllersTsClientApiGenBase
	{
		protected CodeCompileUnit CodeCompileUnit { get; private set; }

		CodeNamespace clientNamespace;
		protected Settings settings;
		readonly JSOutput jsOutput;

		readonly NameComposer nameComposer;
		readonly Func<ClientApiTsFunctionGenAbstract> apiFunctionGenFactory; //to be injected in ctor of derived class.

		/// <summary>
		/// 
		/// </summary>
		/// <param name="jsOutput"></param>
		/// <param name="apiFunctionGen"></param>
		/// <remarks>The client data types should better be generated through SvcUtil.exe with the DC option. The client namespace will then be the original namespace plus suffix ".client". </remarks>
		protected ControllersTsClientApiGenBase(Settings settings, JSOutput jsOutput, Func<ClientApiTsFunctionGenAbstract> apiFunctionGenFactory)
		{
			this.settings = settings;
			this.jsOutput = jsOutput;
			this.apiFunctionGenFactory = apiFunctionGenFactory;
			CodeCompileUnit = new CodeCompileUnit();
			nameComposer = new NameComposer(settings);

			TsCodeGenerationOptions options = TsCodeGenerationOptions.Instance;
			options.BracingStyle = "JS";
			options.IndentString = "\t";
			options.CamelCase = true;


			var versionInfo = System.Diagnostics.FileVersionInfo.GetVersionInfo(Assembly.GetEntryAssembly().Location);
			ProductName = versionInfo.ProductName;
		}

		public string ProductName { get; private set; }

		protected virtual CodeObjectHelper CreateCodeObjectHelper(bool asModule)
		{
			return new CodeObjectHelper(asModule);
		}

		/// <summary>
		/// Save C# codes into a file.
		/// </summary>
		public void Save()
		{
			using FileStream fs = new(jsOutput.JSPath, FileMode.Create, FileAccess.Write);
			using StreamWriter writer = new(fs);
			WriteCode(writer);
		}

		/// <summary>
		/// Write CodeDOM into TS codes to TextWriter
		/// </summary>
		/// <param name="writer"></param>
		void WriteCode(TextWriter writer)
		{
			if (writer == null)
				throw new ArgumentNullException(nameof(writer), "No TextWriter instance is defined.");

			var provider = new TypeScriptCodeProvider(new Fonlow.TypeScriptCodeDom.TsCodeGenerator(CreateCodeObjectHelper(jsOutput.AsModule)));
			provider.GenerateCodeFromCompileUnit(CodeCompileUnit, writer, TsCodeGenerationOptions.Instance);
		}

		/// <summary>
		/// Write CodeDOM into C# codes to text
		/// </summary>
		/// <returns></returns>
		public string WriteToText()
		{
			using StringWriter writer = new();
			WriteCode(writer);
			return writer.ToString();
		}

		/// <summary>
		/// Generate CodeDom of the client API for ApiDescriptions.
		/// </summary>
		/// <param name="descriptions">Web Api descriptions exposed by Configuration.Services.GetApiExplorer().ApiDescriptions</param>
		public void CreateCodeDom(OpenApiPaths paths, OpenApiComponents components)
		{
			if (paths == null && components == null)
			{
				return;
			}

			clientNamespace = new CodeNamespace(settings.ClientNamespace);
			CodeCompileUnit.Namespaces.Add(clientNamespace);//namespace added to Dom

			ComponentsToTsTypes componentsToTsTypes = new(settings, jsOutput, CodeCompileUnit, clientNamespace);
			componentsToTsTypes.CreateCodeDomForComponents(components);

			if (paths == null)
				return;

			AddBasicReferences();

			string[] containerClassNames = GetContainerClassNames(paths);

			CodeTypeDeclaration[] newClassesCreated = containerClassNames.Select(d => CreateControllerClientClass(clientNamespace, d)).ToArray();

			foreach (KeyValuePair<string, OpenApiPathItem> p in paths)
			{
				string relativePath = p.Key;
				foreach (KeyValuePair<OperationType, OpenApiOperation> op in p.Value.Operations)
				{
					ClientApiTsFunctionGenAbstract apiFunctionGen = apiFunctionGenFactory();
					CodeMemberMethod apiFunction = apiFunctionGen.CreateApiFunction(settings, relativePath, op.Key, op.Value, componentsToTsTypes);
					if (apiFunction == null)
					{
						System.Diagnostics.Trace.TraceWarning($"Not to generate TS for {p.Key} {op.Key}.");
						continue;
					}

					string containerClassName = nameComposer.GetContainerName(op.Value, p.Key);
					CodeTypeDeclaration existingClass = LookupExistingClass(containerClassName);
					existingClass.Members.Add(apiFunction);
				}
			}

			foreach (CodeTypeDeclaration c in newClassesCreated)
			{
				AddHelperFunctionsInClass(c);
			}
		}

		/// <summary>
		/// Lookup existing CodeTypeDeclaration created.
		/// </summary>
		/// <param name="controllerName"></param>
		/// <returns></returns>
		CodeTypeDeclaration LookupExistingClass(string controllerName)
		{
			for (int i = 0; i < CodeCompileUnit.Namespaces.Count; i++)
			{
				CodeNamespace ns = CodeCompileUnit.Namespaces[i];
				if (ns.Name == settings.ClientNamespace)
				{
					for (int k = 0; k < ns.Types.Count; k++)
					{
						CodeTypeDeclaration c = ns.Types[k];
						if (c.Name == controllerName)
							return c;
					}
				}
			}

			return null;
		}


		string[] GetContainerClassNames(OpenApiPaths paths)
		{
			if (settings.ContainerNameStrategy == ContainerNameStrategy.None)
			{
				return new string[] { settings.ContainerClassName };
			}

			List<string> names = new();

			foreach (KeyValuePair<string, OpenApiPathItem> p in paths)
			{
				foreach (KeyValuePair<OperationType, OpenApiOperation> op in p.Value.Operations)
				{
					string name = nameComposer.GetContainerName(op.Value, p.Key);
					names.Add(name);
				}
			}

			return names.Distinct().ToArray();
		}

		CodeTypeDeclaration CreateControllerClientClass(CodeNamespace ns, string className)
		{
			CodeTypeDeclaration targetClass = new(className)
			{
				IsClass = true,
				IsPartial = true,
				TypeAttributes = TypeAttributes.Public,
				CustomAttributes = CreateClassCustomAttributes(),
			};

			ns.Types.Add(targetClass);
			AddConstructor(targetClass);

			return targetClass;
		}


		abstract protected void AddBasicReferences();

		abstract protected void AddConstructor(CodeTypeDeclaration targetClass);

		protected virtual CodeAttributeDeclarationCollection CreateClassCustomAttributes()
		{
			return null;
		}

		protected virtual void AddHelperFunctionsInClass(CodeTypeDeclaration c)
		{
			//do nothing.
		}
	}


}
