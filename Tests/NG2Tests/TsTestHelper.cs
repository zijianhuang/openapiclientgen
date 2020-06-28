using Fonlow.OpenApiClientGen.ClientTypes;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Readers;
using System;
using System.IO;
using Xunit;
using System.Diagnostics;

namespace SwagTests
{
	public class TsTestHelper
	{
		public TsTestHelper()
		{
		}

		public static OpenApiDocument ReadDef(string filePath)
		{
			using FileStream stream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
			return new OpenApiStreamReader().Read(stream, out OpenApiDiagnostic diagnostic);
		}

		public void CreateClientApiAndBuild(string filePath, Settings mySettings = null)
		{
			OpenApiDocument doc = ReadDef(filePath);

			Settings settings = mySettings ?? new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "MyClient",
				ContainerNameStrategy = ContainerNameStrategy.None,
				ActionNameStrategy = ActionNameStrategy.Default,
				DataAnnotationsToComments = true,
			};

			System.CodeDom.CodeCompileUnit codeCompileUnit = new System.CodeDom.CodeCompileUnit();
			System.CodeDom.CodeNamespace clientNamespace = new System.CodeDom.CodeNamespace(settings.ClientNamespace);
			codeCompileUnit.Namespaces.Add(clientNamespace);
			JSOutput jsOutput = new JSOutput
			{
				JSPath = @"..\..\..\..\NG2TestBed\src\clientapi\ClientApiAuto.ts",
				AsModule = true,
				ContentType = "application/json;charset=UTF-8",
			};

			var gen = new Fonlow.CodeDom.Web.Ts.ControllersTsNG2ClientApiGen(settings, jsOutput);
			gen.CreateCodeDom(doc.Paths, doc.Components);
			gen.Save();

			Assert.Equal(0, Build());
		}

		int Build()
		{
			var currentDir = Directory.GetCurrentDirectory();
			Directory.SetCurrentDirectory(@"..\..\..\..\NG2TestBed\"); // setting ProcessStartInfo.WorkingDirectory is not always working. Working in this demo, but not working in other heavier .net core Web app.
			ProcessStartInfo info = new ProcessStartInfo("ng", "build")
			{
				UseShellExecute = true,
			};

			try
			{
				var process = Process.Start(info);
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
