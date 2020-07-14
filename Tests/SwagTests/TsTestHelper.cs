using Fonlow.OpenApiClientGen.ClientTypes;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Readers;
using System;
using System.IO;
using Xunit;
using System.Diagnostics;
using Xunit.Abstractions;

namespace SwagTests
{
	public class TsTestHelper
	{
		public TsTestHelper(string pluginAliasName, ITestOutputHelper output)
		{
			this.pluginAliasName = pluginAliasName;
			this.output = output;
		}

		readonly ITestOutputHelper output;

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
						theFolder = Path.IsPathRooted(folder) ?
							folder : Path.Combine(Directory.GetCurrentDirectory(), folder);

					}
					catch (ArgumentException e)
					{
						Trace.TraceWarning(e.Message);
						throw;
					}

					if (!Directory.Exists(theFolder))
					{
						throw new ArgumentException("TypeScript Folder Not Exist");
					}
					return Path.Combine(theFolder, fileName);
				};

				return null;
			}

			OpenApiDocument doc = ReadJson(filePath);

			Settings settings = mySettings ?? new Settings()
			{
				ClientNamespace = "MyNS",
				PathPrefixToRemove = "/api",
				ContainerClassName = "MyClient",
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
			//File.WriteAllText(expectedFile, s); //To update Results after some feature changes. Copy what in the bin folder back to the source content.
			string expected = ReadFromResults(expectedFile);
			Assert.Equal(expected, s);
		}

		public void GenerateAndBuildAndAssert(string openApiFile, string expectedFile)
		{
			string s = TranslateJsonToCode(openApiFile, new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "MyClient", //the TestBed requires this containerClassName
				ContainerNameStrategy = ContainerNameStrategy.None,
				ActionNameStrategy = ActionNameStrategy.Default,
				DataAnnotationsToComments = true,
			});
			//Assert.Equal(0, CheckNGBuild(s)); //Assert this only after updating the generated codes.
			//File.WriteAllText(expectedFile, s); //To update Results after some feature changes. Copy what in the bin folder back to the source content.
			string expected = ReadFromResults(expectedFile);
			Assert.Equal(expected, s);
		}

		int CheckNGBuild(string codes)
		{
			File.WriteAllText(@"..\..\..\..\NG2TestBed\src\clientapi\ClientApiAuto.ts", codes);
			return Build(@"..\..\..\..\NG2TestBed\");
		}

		int Build(string ng2Dir)
		{
			var currentDir = Directory.GetCurrentDirectory();
			Directory.SetCurrentDirectory(ng2Dir); // setting ProcessStartInfo.WorkingDirectory is not always working. Working in this demo, but not working in other heavier .net core Web app.
			var ngCmd = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), "npm\\ng.cmd");
			ProcessStartInfo info = new ProcessStartInfo(ngCmd, "build")
			{
				UseShellExecute = false,
				RedirectStandardError = true,
			};

			try
			{
				var process = Process.Start(info);
				var errorMsg = process.StandardError.ReadToEnd(); //before WaitForExit() https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.process.standarderror?view=netcore-3.1#System_Diagnostics_Process_StandardError
				if (!String.IsNullOrEmpty(errorMsg))
				{
					output.WriteLine("Code generated but with ng build errors:");
					output.WriteLine(errorMsg);
				}

				process.WaitForExit();

				return process.ExitCode;
			}
			finally
			{
				Directory.SetCurrentDirectory(currentDir);
			}
		}


	}
}
