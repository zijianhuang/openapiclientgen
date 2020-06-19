using Fonlow.OpenApiClientGen.ClientTypes;
using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Tavis.UriTemplates;
using System.Runtime.Loader;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.Emit;
using System.Diagnostics;
using System.Net;

namespace Fonlow.OpenApiClientGen.Cs
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
		/// Save C# codes to a file, after CreateDom().
		/// </summary>
		/// <param name="fileName"></param>
		// hack inspired by https://csharpcodewhisperer.blogspot.com/2014/10/create-c-class-code-from-datatable.html
		public void Save(string fileName)
		{
			using MemoryStream stream = new MemoryStream();
			using StreamWriter writer = new StreamWriter(stream);
			WriteCode(writer);
			writer.Flush();
			stream.Position = 0;
			using StreamReader stringReader = new StreamReader(stream);
			using StreamWriter fileWriter = new StreamWriter(fileName);
			string s = stringReader.ReadToEnd();
			if (settings.UseEnsureSuccessStatusCodeEx)
			{
				fileWriter.Write(s.Replace("//;", "").Replace(dummyBlock, blockOfEnsureSuccessStatusCodeEx));
			}
			else
			{
				fileWriter.Write(s.Replace("//;", ""));
			}
		}

		/// <summary>
		/// Write CodeDOM into C# codes to TextWriter
		/// </summary>
		/// <param name="writer"></param>
		void WriteCode(TextWriter writer)
		{
			if (writer == null)
				throw new ArgumentNullException(nameof(writer), "No TextWriter instance is defined.");

			using CodeDomProvider provider = CodeDomProvider.CreateProvider("CSharp");
			CodeGeneratorOptions options = new CodeGeneratorOptions() { BracingStyle = "C", IndentString = "\t" };
			provider.GenerateCodeFromCompileUnit(codeCompileUnit, writer, options);
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

		public EmitResult CompileThenSave(string fileName, string assemblyPath)//https://docs.microsoft.com/en-us/archive/msdn-magazine/2017/may/net-core-cross-platform-code-generation-with-roslyn-and-net-core
		{
			using CodeDomProvider provider = CodeDomProvider.CreateProvider("CSharp");
			CodeGeneratorOptions options = new CodeGeneratorOptions() { BracingStyle = "C", IndentString = "\t" };
			var s = WriteToText();
			File.WriteAllText(fileName, s); //save the file anyway
			Trace.TraceInformation($"Generated C# codes written to {fileName}");

			var tree = SyntaxFactory.ParseSyntaxTree(s);
			var assemblyFileName = Path.GetFileName(assemblyPath);
			MetadataReference CreateFromName(string n)
			{
				return MetadataReference.CreateFromFile(Assembly.Load(n).Location);
			};

			var compilation = CSharpCompilation.Create(assemblyFileName, null, null, new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary, true))
				.AddReferences(
				CreateFromName("System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e"),
				CreateFromName("System.Runtime, Version=4.2.2.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"),
				CreateFromName("netstandard, Version=2.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51"),
				CreateFromName("System.Net.Http, Version=4.2.2.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"),
				CreateFromName("System.Private.Uri, Version=4.0.6.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"),
				CreateFromName("System.Runtime.Extensions, Version=4.2.2.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"),
				CreateFromName("System.Runtime.Serialization.Primitives, Version=4.2.2.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"),
				CreateFromName("System.Net.Primitives, Version=4.1.2.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"),
				CreateFromName("System.ComponentModel.Annotations, Version=4.3.1.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"),
				CreateFromName("System.Linq, Version=4.2.2.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"),
				MetadataReference.CreateFromFile("Newtonsoft.Json.dll"))
				.AddSyntaxTrees(tree);

			Trace.TraceInformation(String.IsNullOrEmpty(assemblyPath)? "Compiling generated codes ..." : $"Compiling generated codes to {assemblyPath} ...");
			if (String.IsNullOrEmpty(assemblyPath))
			{
				using var ms = new MemoryStream();
				return compilation.Emit(ms);
			}
			else
			{
				return compilation.Emit(assemblyPath);
			}
		}

		/// <summary>
		/// Write CodeDOM into C# codes to text
		/// </summary>
		/// <returns></returns>
		public string WriteToText()
		{
			using MemoryStream stream = new MemoryStream();
			using StreamWriter writer = new StreamWriter(stream);
			WriteCode(writer);
			writer.Flush();
			stream.Position = 0;
			using StreamReader stringReader = new StreamReader(stream);
			using StringWriter stringWriter = new StringWriter();
			string s = stringReader.ReadToEnd();
			if (settings.UseEnsureSuccessStatusCodeEx)
			{
				stringWriter.Write(s.Replace("//;", "").Replace(dummyBlock, blockOfEnsureSuccessStatusCodeEx));
			}
			else
			{
				stringWriter.Write(s.Replace("//;", ""));
			}

			return stringWriter.ToString();
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

			ComponentsToCsTypes componentsToCsTypes = new ComponentsToCsTypes(settings, codeCompileUnit, clientNamespace);
			componentsToCsTypes.CreateCodeDom(components);

			if (paths == null)
				return;

			clientNamespace.Imports.AddRange(new CodeNamespaceImport[]{
				new CodeNamespaceImport("System"),
				new CodeNamespaceImport("System.Linq"),
				new CodeNamespaceImport("System.Collections.Generic"),
				new CodeNamespaceImport("System.Threading.Tasks"),
				new CodeNamespaceImport("System.Net.Http"),
				new CodeNamespaceImport("Newtonsoft.Json"),
				});

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
					ClientApiFunctionGen functionGen = new ClientApiFunctionGen();
					CodeMemberMethod apiFunction = functionGen.CreateApiFunction(settings, p.Key, op.Key, op.Value, componentsToCsTypes, true, settings.UseEnsureSuccessStatusCodeEx);
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
						ClientApiFunctionGen functionGen2 = new ClientApiFunctionGen();
						existingClass.Members.Add(functionGen2.CreateApiFunction(settings, p.Key, op.Key, op.Value, componentsToCsTypes, false, settings.UseEnsureSuccessStatusCodeEx));
					}
				}
			}

			if (settings.UseEnsureSuccessStatusCodeEx)
			{
				CreateDummyOfEnsureSuccessStatusCodeEx();
			}
		}

		string[] GetContainerClassNames(OpenApiPaths paths)
		{
			if (settings.ContainerNameStrategy == ContainerNameStrategy.None)
			{
				return new string[] { settings.ContainerClassName };
			}

			List<string> names = new List<string>();

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
			CodeTypeDeclaration targetClass = new CodeTypeDeclaration(className)
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


		static void AddLocalFields(CodeTypeDeclaration targetClass)
		{
			CodeMemberField clientField = new CodeMemberField
			{
				Attributes = MemberAttributes.Private,
				Name = "client",
				Type = new CodeTypeReference("System.Net.Http.HttpClient")
			};
			targetClass.Members.Add(clientField);

			CodeMemberField jsonSettingsField = new CodeMemberField
			{
				Attributes = MemberAttributes.Private,
				Name = "jsonSerializerSettings",
				Type = new CodeTypeReference("JsonSerializerSettings")
			};
			targetClass.Members.Add(jsonSettingsField);

			//CodeMemberField baseUriField = new CodeMemberField();
			//baseUriField.Attributes = MemberAttributes.Private;
			//baseUriField.Name = "baseUri";
			//baseUriField.Type = new CodeTypeReference("System.Uri");
			//targetClass.Members.Add(baseUriField);

		}

		void AddConstructorWithHttpClient(CodeTypeDeclaration targetClass)
		{
			CodeConstructor constructor = new CodeConstructor
			{
				Attributes =
				MemberAttributes.Public | MemberAttributes.Final
			};

			// Add parameters.
			constructor.Parameters.Add(new CodeParameterDeclarationExpression(
				"System.Net.Http.HttpClient", "client"));

			constructor.Parameters.Add(new CodeParameterDeclarationExpression(
				"JsonSerializerSettings", "jsonSerializerSettings=null"));

			constructor.Statements.Add(new CodeSnippetStatement(@"			if (client == null)
				throw new ArgumentNullException(""Null HttpClient."", ""client"");
"));
			constructor.Statements.Add(new CodeSnippetStatement(@"			if (client.BaseAddress == null)
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
