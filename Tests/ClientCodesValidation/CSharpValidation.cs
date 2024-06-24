using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.Emit;
using Microsoft.CodeAnalysis.Text;
using System;
using System.CodeDom.Compiler;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Text.Json;

namespace Fonlow.OpenApiClientGen.CS
{
	public static class CSharpValidation
	{
		/// <summary>
		/// Compile and optional save to an assembly file if assemblyPath is defined.
		/// </summary>
		/// <param name="csharpCodes"></param>
		/// <param name="assemblyPath"></param>
		/// <returns></returns>
		public static EmitResult CompileThenSaveAssembly(string csharpCodes, string assemblyPath, bool useSystemTextJson = false)
		{
			var tree = SyntaxFactory.ParseSyntaxTree(csharpCodes);
			return CompileThenSaveAssembly(tree, assemblyPath, useSystemTextJson);
		}

		/// <summary>
		/// Compile and optional save to an assembly file if assemblyPath is defined.
		/// </summary>
		/// <param name="stream">Containing C# codes</param>
		/// <param name="assemblyPath"></param>
		/// <returns></returns>
		public static EmitResult CompileThenSave(Stream stream, string assemblyPath, bool useSystemTextJson = false)
		{
			var tree = SyntaxFactory.ParseSyntaxTree(SourceText.From(stream));
			return CompileThenSaveAssembly(tree, assemblyPath, useSystemTextJson);
		}

		/// <summary>
		/// Compile and optional save to an assembly file if assemblyPath is defined.
		/// </summary>
		/// <param name="tree"></param>
		/// <param name="assemblyPath"></param>
		/// <returns></returns>
		public static EmitResult CompileThenSaveAssembly(SyntaxTree tree, string assemblyPath, bool useSystemTextJson)
		{
			using CodeDomProvider provider = CodeDomProvider.CreateProvider("CSharp");
			CodeGeneratorOptions options = new() { BracingStyle = "C", IndentString = "\t" };
			var assemblyFileName = Path.GetFileName(assemblyPath);

			static MetadataReference CreateFromName(string n)
			{
				return MetadataReference.CreateFromFile(Assembly.Load(n).Location);
			};

			var compilation = CSharpCompilation.Create(assemblyFileName, null, null, new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary, true))
				.AddReferences(
					CreateFromName("System.Private.CoreLib"),
					CreateFromName("System.Runtime"),
					CreateFromName("netstandard"),
					CreateFromName("System.Net.Http"),
					CreateFromName("System.Net.Http.Json"), //.NET 5 feature
					CreateFromName("System.Private.Uri"),
					CreateFromName("System.Runtime.Extensions"),
					CreateFromName("System.Runtime.Serialization.Primitives"),
					CreateFromName("System.Net.Primitives"),
					CreateFromName("System.ComponentModel.Annotations"),
					CreateFromName("System.Linq"),
					useSystemTextJson ? CreateFromName("System.Text.Json") : MetadataReference.CreateFromFile("Newtonsoft.Json.dll")
				)
				.AddSyntaxTrees(tree);

			Trace.TraceInformation(String.IsNullOrEmpty(assemblyPath) ? "Compiling generated codes ..." : $"Compiling generated codes to {assemblyPath} ...");
			if (String.IsNullOrEmpty(assemblyPath))
			{
				using var ms = new MemoryStream();
				return compilation.Emit(ms);
			}
			else
			{
				return compilation.Emit(assemblyPath);
			}
			//https://docs.microsoft.com/en-us/archive/msdn-magazine/2017/may/net-core-cross-platform-code-generation-with-roslyn-and-net-core
		}


	}
}
