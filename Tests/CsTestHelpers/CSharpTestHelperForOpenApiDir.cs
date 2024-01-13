using Fonlow.OpenApiClientGen.ClientTypes;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Readers;
using System.IO;
using Xunit;
using Fonlow.OpenApiClientGen.CS;
using Xunit.Abstractions;
using System;
using System.Text;

namespace SwagTests
{
	public class CSharpTestHelperForOpenApiDir: CSharpTestHelper
	{
		public CSharpTestHelperForOpenApiDir(ITestOutputHelper output, string defaultDefName): base(output)
		{
			this.defaultDefName = defaultDefName;
		}

		readonly string defaultDefName;

		static OpenApiDocument ReadDef(string filePath)
		{
			using FileStream stream = new(filePath, FileMode.Open, FileAccess.Read);
			return new OpenApiStreamReader().Read(stream, out OpenApiDiagnostic diagnostic);
		}

	    string TranslateDefToCodeUponOpenApiDirWith1Def(string openapiDir, Settings settings)
		{
			var defFilePath = Path.Combine(openapiDir, defaultDefName);
			return TranslateDefToCode(defFilePath, settings);
		}

		public void GenerateFromOpenApiAndBuild(string openapiDir, Settings mySettings= null)
		{ 
			string s = TranslateDefToCodeUponOpenApiDirWith1Def(openapiDir, mySettings ?? CodeGenSettings.Default);
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

		public string GenerateFromOpenApiAndBuildWithError(string openapiDir, Settings mySettings)
		{
			string s = TranslateDefToCodeUponOpenApiDirWith1Def(openapiDir, mySettings);
			var r = CSharpValidation.CompileThenSave(s, null, mySettings != null ? mySettings.UseSystemTextJson : false);
			if (!r.Success)
			{
				StringBuilder sb = new();
				output.WriteLine("CSharp Compilation Errors:");
				foreach (var ms in r.Diagnostics)
				{
					sb.AppendLine(ms.ToString());
				}

				return sb.ToString();
			}

			return null;
		}
	}
}
