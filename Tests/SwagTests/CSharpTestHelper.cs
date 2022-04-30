using Fonlow.OpenApiClientGen.ClientTypes;
using Fonlow.OpenApiClientGen.CS;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Readers;
using System.IO;
using Xunit;
using Xunit.Abstractions;

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

		public static string TranslateDefToCode(string filePath, Settings mySettings = null)
		{
			OpenApiDocument doc = ReadDef(filePath);

			Settings settings = mySettings ?? CodeGenSettings.Default;
			ControllersClientApiGen gen = new(settings);
			gen.CreateCodeDom(doc.Paths, doc.Components);
			return gen.WriteToText();
		}

		static string ReadFromResults(string filePath)
		{
			return File.ReadAllText(filePath);
		}

		public void GenerateAndAssertAndBuild(string filePath, string expectedFile, Settings mySettings = null)
		{
			string s = TranslateDefToCode(filePath, mySettings);
			//File.WriteAllText(expectedFile, s); //To update Results after some feature changes. Copy what in the bin folder back to the source content.
			string expected = ReadFromResults(expectedFile);
			Assert.Equal(expected, s);
			var r = CSharpValidation.CompileThenSave(s, null, mySettings != null && mySettings.UseSystemTextJson);

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
