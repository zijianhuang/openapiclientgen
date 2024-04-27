using Fonlow.OpenApiClientGen.ClientTypes;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Readers;
using System.IO;
using Xunit;
using Fonlow.OpenApiClientGen.CS;
using Xunit.Abstractions;
using System;
using System.Text;
using TestHelpers;

namespace SwagTests
{
	public class CSharpTestHelperForOpenApiDir: CSharpTestHelper, IOpenApiDirTestHelper
	{
		public CSharpTestHelperForOpenApiDir(ITestOutputHelper output, string defaultDefName, ISettings defaultSettings) : base(output, defaultSettings)
		{
			this.defaultDefName = defaultDefName;
		}

		readonly string defaultDefName;

		static OpenApiDocument ReadDef(string filePath)
		{
			using FileStream stream = new(filePath, FileMode.Open, FileAccess.Read);
			return new OpenApiStreamReader().Read(stream, out OpenApiDiagnostic diagnostic);
		}

	    string TranslateDefToCodeUponOpenApiDirWith1Def(string openapiDir, ISettings settings)
		{
			var defFilePath = Path.Combine(openapiDir, defaultDefName);
			return TranslateDefToCode(defFilePath, settings);
		}

		const string resultsDir = "Results";

		/// <summary>
		/// 
		/// </summary>
		/// <param name="openapiDir">Like ..\..\..\..\openapi-directory20240114\APIs\github.com\api.github.com\1.1.4\</param>
		/// <param name="mySettings"></param>
		public void GenerateFromOpenApiAndBuild(string openapiDir, ISettings mySettings= null)
		{
			var settings = mySettings ?? defaultSettings;
			string s = TranslateDefToCodeUponOpenApiDirWith1Def(openapiDir, settings);
			var csFilePath = CreateUniqueFileName(openapiDir);
			if (!Directory.Exists(resultsDir))
			{
				Directory.CreateDirectory(resultsDir);
			}

			if (TestingSettings.Instance.UpdateGenerated)
			{
				File.WriteAllText(csFilePath, s);
			}
			else
			{
				string expected = File.ReadAllText(csFilePath);
				Assert.Equal(expected, s);
			}

			if (TestingSettings.Instance.Build)
			{
				var r = CSharpValidation.CompileThenSaveAssembly(s, null, settings.UseSystemTextJson);
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

		public string GenerateFromOpenApiAndBuildWithError(string openapiDir, ISettings mySettings)
		{
			var settings = mySettings ?? defaultSettings;
			string s = TranslateDefToCodeUponOpenApiDirWith1Def(openapiDir, settings);
			var r = CSharpValidation.CompileThenSaveAssembly(s, null, settings.UseSystemTextJson);
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

		static string CreateUniqueFileName(string defDirName)
		{
			var idx = defDirName.IndexOf("\\APIs\\");
			var whatAfter = defDirName.Substring(idx + 6);
			return $"{resultsDir}\\{RefinePropertyName(whatAfter)}.txt";
		}

		static string RefinePropertyName(string s)
		{
			if (String.IsNullOrEmpty(s))
			{
				return s;
			}

			return s.Replace("\\", "_").Replace("$", "").Replace(':', '_').Replace('-', '_').Replace('.', '_')
				.Replace('[', '_').Replace(']', '_').Replace('(', '_').Replace(')', '_').Replace('/', '_').Replace('#', '_')
				.Replace(' ', '_').Replace('+', '_').Replace('~', '_');
		}
	}
}
