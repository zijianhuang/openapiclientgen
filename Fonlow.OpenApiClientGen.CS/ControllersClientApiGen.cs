using Fonlow.OpenApiClientGen.ClientTypes;

using Microsoft.CodeAnalysis;
using Microsoft.OpenApi.Models;

using System;
using System.CodeDom;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.IO;
using System.Linq;
using System.Reflection;

namespace Fonlow.OpenApiClientGen.CS
{
	/// <summary>
	/// Store CodeDom references shared by all functions of the client API class.
	/// </summary>
	internal class SharedContext
	{
		internal CodeFieldReferenceExpression ClientReference { get; set; }
		internal CodeFieldReferenceExpression BaseUriReference { get; set; }
		internal CodeFieldReferenceExpression JsonSettingsReference { get; set; }
	}


	/// <summary>
	/// Generate .NET codes of the client API of the controllers
	/// </summary>
	public class ControllersClientApiGen
	{
		readonly CodeCompileUnit codeCompileUnit;
		readonly SharedContext sharedContext;
		CodeNamespace clientNamespace;
		/// <summary>
		/// 
		/// </summary>
		/// <param name="codeGenParameters"></param>
		/// <remarks>The client data types should better be generated through SvcUtil.exe with the DC option. The client namespace will then be the original namespace plus suffix ".client". </remarks>
		public ControllersClientApiGen(Settings settings)
		{
			this.settings = settings;
			codeCompileUnit = new CodeCompileUnit();
			sharedContext = new SharedContext();
			nameComposer = new NameComposer(settings);
		}

		readonly Settings settings;

		readonly NameComposer nameComposer;

		/// <summary>
		/// Write CodeDOM into C# codes to TextWriter. And the C# codes is a bit hacky.
		/// </summary>
		/// <param name="writer"></param>
		void GenerateHackyCodesToWriter(TextWriter writer)
		{
			if (writer == null)
				throw new ArgumentNullException(nameof(writer), "No TextWriter instance is defined.");

			using CodeDomProvider provider = CodeDomProvider.CreateProvider("CSharp");
			CodeGeneratorOptions options = new() { BracingStyle = "C", IndentString = "\t" };
			provider.GenerateCodeFromCompileUnit(codeCompileUnit, writer, options);
		}

		/// <summary>
		/// Save C# codes to a file.
		/// </summary>
		/// <param name="fileName"></param>
		// hack inspired by https://csharpcodewhisperer.blogspot.com/2014/10/create-c-class-code-from-datatable.html
		public void Save(string fileName)
		{
			using StreamWriter streamWriter = new(fileName);
			GenerateCodesToWriter(streamWriter);
		}

		/// <summary>
		/// Write CodeDOM into C# codes to text
		/// </summary>
		/// <returns>C# codes</returns>
		public string WriteToText()
		{
			using StringWriter stringWriter = new();
			GenerateCodesToWriter(stringWriter);
			return stringWriter.ToString();
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="textWriter">To receive refined codes</param>
		void GenerateCodesToWriter(TextWriter textWriter)
		{
			using MemoryStream stream = new();
			using StreamWriter writer = new(stream);
			GenerateHackyCodesToWriter(writer);

			writer.Flush();
			stream.Position = 0;
			using StreamReader streamReader = new(stream);
			string s = streamReader.ReadToEnd();
			if (settings.UseEnsureSuccessStatusCodeEx && settings.IncludeEnsureSuccessStatusCodeExBlock)
			{
				textWriter.Write(s.Replace("//;", "").Replace(dummyBlock, blockOfEnsureSuccessStatusCodeEx));
			}
			else
			{
				textWriter.Write(s.Replace("//;", ""));
			}
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
			codeCompileUnit.Namespaces.Add(clientNamespace);//namespace added to Dom

			ComponentsToCsTypes componentsToCsTypes = new(settings, codeCompileUnit, clientNamespace);
			componentsToCsTypes.CreateCodeDom(components);

			if (settings.GenerateModelsOnly)
				return;

			if (paths == null)
				return;

			clientNamespace.Imports.AddRange(new CodeNamespaceImport[]{
				new CodeNamespaceImport("System"),
				new CodeNamespaceImport("System.Linq"),
				new CodeNamespaceImport("System.Collections.Generic"),
				new CodeNamespaceImport("System.Threading.Tasks"),
				new CodeNamespaceImport("System.Net.Http"),
			});

			if (settings.UseSystemTextJson)
			{
				clientNamespace.Imports.Add(new CodeNamespaceImport("System.Text.Json"));
				clientNamespace.Imports.Add(new CodeNamespaceImport("System.Text.Json.Serialization"));
			}
			else
			{
				clientNamespace.Imports.Add(new CodeNamespaceImport("Newtonsoft.Json"));
			}

			if (settings.UseEnsureSuccessStatusCodeEx)
			{
				clientNamespace.Imports.Add(new CodeNamespaceImport("Fonlow.Net.Http"));
			}

			string[] containerClassNames = GetContainerClassNames(paths);

			CodeTypeDeclaration[] newClassesCreated = containerClassNames.Select(d => CreateControllerClientClass(clientNamespace, d)).ToArray();

			foreach (KeyValuePair<string, OpenApiPathItem> p in paths)
			{
				foreach (KeyValuePair<OperationType, OpenApiOperation> op in p.Value.Operations)
				{
					ClientApiFunctionGen apiFunctionGen = new();
					CodeMemberMethod apiFunction = apiFunctionGen.CreateApiFunction(settings, p.Key, op.Key, op.Value, componentsToCsTypes, true, settings.UseEnsureSuccessStatusCodeEx);
					if (apiFunction == null)
					{
						System.Diagnostics.Trace.TraceWarning($"Not to generate C# for {p.Key} {op.Key}.");
						continue;
					}

					string containerClassName = nameComposer.GetContainerName(op.Value, p.Key);
					CodeTypeDeclaration existingClass = LookupExistingClass(containerClassName);

					existingClass.Members.Add(apiFunction);
					if (settings.GenerateBothAsyncAndSync)
					{
						ClientApiFunctionGen functionGen2 = new();
						existingClass.Members.Add(functionGen2.CreateApiFunction(settings, p.Key, op.Key, op.Value, componentsToCsTypes, false, settings.UseEnsureSuccessStatusCodeEx));
					}
				}
			}

			if (settings.UseEnsureSuccessStatusCodeEx && settings.IncludeEnsureSuccessStatusCodeExBlock)
			{
				CreateDummyOfEnsureSuccessStatusCodeEx();
			}
		}

		//public CompilerResults CompileThenSave(string fileName)//not working in .net core
		//{
		//	using CodeDomProvider provider = CodeDomProvider.CreateProvider("CSharp");
		//	CodeGeneratorOptions options = new CodeGeneratorOptions() { BracingStyle = "C", IndentString = "\t" };
		//	var s = WriteToText();
		//	var results = provider.CompileAssemblyFromSource(  //https://docs.microsoft.com/en-us/dotnet/core/compatibility/unsupported-apis
		//		new CompilerParameters(new string[] { "System.Net.Http", "Newtonsoft.Json" })
		//		{
		//			GenerateInMemory = true,
		//		}, s
		//		);

		//	File.WriteAllText(fileName, s); //save the file anyway

		//	return results;
		//}

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

		/// <summary>
		/// Lookup existing CodeTypeDeclaration created.
		/// </summary>
		/// <param name="controllerName"></param>
		/// <returns></returns>
		CodeTypeDeclaration LookupExistingClass(string controllerName)
		{
			for (int i = 0; i < codeCompileUnit.Namespaces.Count; i++)
			{
				CodeNamespace ns = codeCompileUnit.Namespaces[i];
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

		CodeTypeDeclaration CreateControllerClientClass(CodeNamespace ns, string className)
		{
			CodeTypeDeclaration targetClass = new(className)
			{
				IsClass = true,
				IsPartial = true,
				TypeAttributes = TypeAttributes.Public,
			};

			ns.Types.Add(targetClass);
			AddLocalFields(targetClass);
			AddConstructorWithHttpClient(targetClass);

			return targetClass;
		}


		void AddLocalFields(CodeTypeDeclaration targetClass)
		{
			CodeMemberField clientField = new()
			{
				Attributes = MemberAttributes.Private,
				Name = "client",
				Type = new CodeTypeReference("System.Net.Http.HttpClient")
			};
			targetClass.Members.Add(clientField);

			CodeMemberField jsonSettingsField = new()
			{
				Attributes = MemberAttributes.Private,
				Name = "jsonSerializerSettings",
				Type = settings.UseSystemTextJson ? new CodeTypeReference("JsonSerializerOptions") : new CodeTypeReference("JsonSerializerSettings")
			};
			targetClass.Members.Add(jsonSettingsField);
		}

		void AddConstructorWithHttpClient(CodeTypeDeclaration targetClass)
		{
			CodeConstructor constructor = new()
			{
				Attributes =
				MemberAttributes.Public | MemberAttributes.Final
			};

			// Add parameters.
			constructor.Parameters.Add(new CodeParameterDeclarationExpression(
				"System.Net.Http.HttpClient", "client"));

			constructor.Parameters.Add(new CodeParameterDeclarationExpression(
				settings.UseSystemTextJson ? "JsonSerializerOptions" : "JsonSerializerSettings", "jsonSerializerSettings=null"));

			constructor.Statements.Add(new CodeSnippetStatement("\t\t\t" + @"if (client == null)
				throw new ArgumentNullException(""Null HttpClient."", ""client"");
"));
			constructor.Statements.Add(new CodeSnippetStatement("\t\t\t" + @"if (client.BaseAddress == null)
				throw new ArgumentNullException(""HttpClient has no BaseAddress"", ""client"");
"));
			// Add field initialization logic
			sharedContext.ClientReference = new CodeFieldReferenceExpression(new CodeThisReferenceExpression(), "client");
			constructor.Statements.Add(new CodeAssignStatement(sharedContext.ClientReference, new CodeArgumentReferenceExpression("client")));

			sharedContext.JsonSettingsReference = new CodeFieldReferenceExpression(new CodeThisReferenceExpression(), "jsonSerializerSettings");
			constructor.Statements.Add(new CodeAssignStatement(sharedContext.JsonSettingsReference, new CodeArgumentReferenceExpression("jsonSerializerSettings")));

			targetClass.Members.Add(constructor);
		}

		void CreateDummyOfEnsureSuccessStatusCodeEx()
		{
			codeCompileUnit.Namespaces.Add(new CodeNamespace("EnsureSuccessStatusCodeExDummy"));
		}

		const string blockOfEnsureSuccessStatusCodeEx =
		@"

namespace Fonlow.Net.Http
{
	using System.Net.Http;

	public class WebApiRequestException : HttpRequestException
	{
		public System.Net.HttpStatusCode StatusCode { get; private set; }

		public string Response { get; private set; }

		public System.Net.Http.Headers.HttpResponseHeaders Headers { get; private set; }

		public System.Net.Http.Headers.MediaTypeHeaderValue ContentType { get; private set; }

		public WebApiRequestException(string message, System.Net.HttpStatusCode statusCode, string response, System.Net.Http.Headers.HttpResponseHeaders headers, System.Net.Http.Headers.MediaTypeHeaderValue contentType) : base(message)
		{
			StatusCode = statusCode;
			Response = response;
			Headers = headers;
			ContentType = contentType;
		}
	}

	public static class ResponseMessageExtensions
	{
		public static void EnsureSuccessStatusCodeEx(this HttpResponseMessage responseMessage)
		{
			if (!responseMessage.IsSuccessStatusCode)
			{
				var responseText = responseMessage.Content.ReadAsStringAsync().Result;
				var contentType = responseMessage.Content.Headers.ContentType;
				throw new WebApiRequestException(responseMessage.ReasonPhrase, responseMessage.StatusCode, responseText, responseMessage.Headers, contentType);
			}
		}
	}
}";
		const string dummyBlock =
			@"
namespace EnsureSuccessStatusCodeExDummy
{
	
}";
	}


}
