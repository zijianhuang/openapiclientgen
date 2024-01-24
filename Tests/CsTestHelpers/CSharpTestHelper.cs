using Fonlow.OpenApiClientGen.ClientTypes;
using Fonlow.OpenApiClientGen.CS;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Readers;
using System.IO;
using TestHelpers;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	/// <summary>
	/// For integration testing: generate, assert against existing copy optionaly and build optionally
	/// </summary>
	public class CSharpTestHelper: ITestHelper
	{
		readonly protected ITestOutputHelper output;
		public CSharpTestHelper(ITestOutputHelper output)
		{
			this.output = output;
		}

		static OpenApiDocument ReadDef(string filePath)
		{
			using FileStream stream = new(filePath, FileMode.Open, FileAccess.Read);
			return new OpenApiStreamReader().Read(stream, out OpenApiDiagnostic diagnostic);
		}

		static protected string TranslateDefToCode(string filePath, ISettings settings)
		{
			OpenApiDocument doc = ReadDef(filePath);
			if (doc.Components==null && doc.Paths == null)
			{
				throw new CodeGenException("Cannot read def correctly. This may be due to the bug in the parser or the def is doggy.");
				//somehow ms openapi parser can not recognize openapi: 3.1.0 in \APIs\adyen.com\CheckoutService\37\ however, throw proper exception for the other 3.1 def files.
			}

			ControllersClientApiGen gen = new(settings);
			gen.CreateCodeDom(doc.Paths, doc.Components);
			return gen.WriteToText();
		}

		static string ReadFromResults(string filePath)
		{
			return File.ReadAllText(filePath);
		}

		/// <summary>
		/// Generate, Assert, optionally update generated and optionally build.
		/// </summary>
		/// <param name="filePath"></param>
		/// <param name="expectedFile"></param>
		/// <param name="mySettings"></param>
		public void GenerateAndAssertAndBuild(string filePath, string expectedFile, ISettings mySettings)
		{
			string s = TranslateDefToCode(filePath, mySettings);
			if (TestingSettings.Instance.UpdateGenerated)
			{
				File.WriteAllText(expectedFile, s); //To update Results after some feature changes. Copy what in the bin folder back to the source content.
			}
			else
			{
				string expected = ReadFromResults(expectedFile);
				Assert.Equal(expected, s);
			}

			if (TestingSettings.Instance.Build)
			{
				var r = CSharpValidation.CompileThenSaveAssembly(s, null, mySettings != null && mySettings.UseSystemTextJson);

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
}
