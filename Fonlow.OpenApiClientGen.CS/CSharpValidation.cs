using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.Emit;
using System;
using System.CodeDom.Compiler;
using System.Diagnostics;
using System.IO;
using System.Reflection;

namespace Fonlow.OpenApiClientGen.CS
{
	public static class CSharpValidation
	{
		public static EmitResult CompileThenSave(string csharpCodes, string assemblyPath)//https://docs.microsoft.com/en-us/archive/msdn-magazine/2017/may/net-core-cross-platform-code-generation-with-roslyn-and-net-core
		{
			using CodeDomProvider provider = CodeDomProvider.CreateProvider("CSharp");
			CodeGeneratorOptions options = new CodeGeneratorOptions() { BracingStyle = "C", IndentString = "\t" };
			var tree = SyntaxFactory.ParseSyntaxTree(csharpCodes);
			var assemblyFileName = Path.GetFileName(assemblyPath);

			static MetadataReference CreateFromName(string n)
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
		}


	}
}
