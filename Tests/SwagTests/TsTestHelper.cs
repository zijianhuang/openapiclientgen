using Fonlow.OpenApiClientGen.ClientTypes;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Readers;
using System;
using System.IO;
using Xunit;

namespace SwagTests
{
	public class TsTestHelper
	{
		public TsTestHelper(string pluginAliasName)
		{
			this.pluginAliasName = pluginAliasName;
		}

		readonly string pluginAliasName;

		public static OpenApiDocument ReadJson(string filePath)
		{
			using FileStream stream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
			return new OpenApiStreamReader().Read(stream, out OpenApiDiagnostic diagnostic);
		}

		public string TranslateJsonToCode(string filePath, Settings mySettings = null)
		{
			static string CreateTsPath(string folder, string fileName)
			{
				if (!string.IsNullOrEmpty(folder))
				{
					string theFolder;
					try
					{
						theFolder = System.IO.Path.IsPathRooted(folder) ?
							folder : System.IO.Path.Combine(Directory.GetCurrentDirectory(), folder);

					}
					catch (ArgumentException e)
					{
						System.Diagnostics.Trace.TraceWarning(e.Message);
						throw;
					}

					if (!System.IO.Directory.Exists(theFolder))
					{
						throw new ArgumentException("TypeScript Folder Not Exist");
					}
					return System.IO.Path.Combine(theFolder, fileName);
				};

				return null;
			}

			OpenApiDocument doc = ReadJson(filePath);

			Settings settings = mySettings ?? new Settings()
			{
				ClientNamespace = "MyNS",
				PathPrefixToRemove = "/api",
				ContainerClassName = "Misc",
				ContainerNameStrategy = ContainerNameStrategy.Tags,
				DataAnnotationsToComments = true,
			};

			System.CodeDom.CodeCompileUnit codeCompileUnit = new System.CodeDom.CodeCompileUnit();
			System.CodeDom.CodeNamespace clientNamespace = new System.CodeDom.CodeNamespace(settings.ClientNamespace);
			codeCompileUnit.Namespaces.Add(clientNamespace);//namespace added to Dom
			JSOutput jsOutput = new JSOutput
			{
				JSPath = CreateTsPath("Results", filePath),
				AsModule = true,
				ContentType = "application/json;charset=UTF-8",
			};

			Fonlow.CodeDom.Web.Ts.ControllersTsClientApiGenBase gen = new Fonlow.CodeDom.Web.Ts.ControllersTsNG2ClientApiGen(settings, jsOutput);
			switch (pluginAliasName)
			{
				case "ng2": gen = new Fonlow.CodeDom.Web.Ts.ControllersTsNG2ClientApiGen(settings, jsOutput); break;
				case "aurelia": gen = new Fonlow.CodeDom.Web.Ts.ControllersTsAureliaClientApiGen(settings, jsOutput); break;
				case "axios": gen = new Fonlow.CodeDom.Web.Ts.ControllersTsAxiosClientApiGen(settings, jsOutput); break;
				case "fetch": gen = new Fonlow.CodeDom.Web.Ts.ControllersTsFetchClientApiGen(settings, jsOutput); break;
				case "jq": gen = new Fonlow.CodeDom.Web.Ts.ControllersTsJqClientApiGen(settings, jsOutput); break;
				default:
					break;
			}

			gen.CreateCodeDom(doc.Paths, doc.Components);
			return gen.WriteToText();
		}

		public static string ReadFromResults(string filePath)
		{
			return File.ReadAllText(filePath);
		}

		public void GenerateAndAssert(string openApiFile, string expectedFile, Settings mySettings = null)
		{
			string s = TranslateJsonToCode(openApiFile, mySettings);
			File.WriteAllText(expectedFile, s); //To update Results after some feature changes. Copy what in the bin folder back to the source content.
			string expected = ReadFromResults(expectedFile);
			Assert.Equal(expected, s);
		}


	}
}
