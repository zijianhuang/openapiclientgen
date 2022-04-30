using Fonlow.OpenApiClientGen.ClientTypes;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Readers;
using System.IO;
using Xunit;
using Fonlow.OpenApiClientGen.CS;
using Xunit.Abstractions;
using System;

namespace SwagTests
{
	public class CSharpTestHelper
	{
		readonly ITestOutputHelper output;
		public CSharpTestHelper(ITestOutputHelper output)
		{
			this.output = output;
		}

		static OpenApiDocument ReadDef(string filePath)
		{
			using FileStream stream = new(filePath, FileMode.Open, FileAccess.Read);
			return new OpenApiStreamReader().Read(stream, out OpenApiDiagnostic diagnostic);
		}

		public static string TranslateDefToCode(string openapiDir, Settings mySettings = null)
		{
			OpenApiDocument doc = ReadDef(Path.Combine(openapiDir, "swagger.yaml"));

			Settings settings = mySettings ?? CodeGenSettings.Default;
			ControllersClientApiGen gen = new(settings);
			gen.CreateCodeDom(doc.Paths, doc.Components);
			return gen.WriteToText();
		}

		public void GenerateFromOpenApiAndBuild(string openapiDir, Settings mySettings = null)
		{
			string s = TranslateDefToCode(openapiDir, mySettings);
			var r = CSharpValidation.CompileThenSave(s, null, mySettings != null ? mySettings.UseSystemTextJson : false);
			if (!r.Success)
			{
				output.WriteLine("CSharp Compilation Errors:");
				foreach (var ms in r.Diagnostics)
				{
					output.WriteLine(ms.ToString());
				}
			}

			Assert.True(r.Success);
		}
	}
}
