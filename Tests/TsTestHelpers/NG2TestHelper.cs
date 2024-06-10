using Fonlow.OpenApiClientGen.ClientTypes;
using System;
using System.Diagnostics;
using System.IO;
using Xunit;
using Xunit.Abstractions;

namespace Fonlow.OpenApiClientGen.TestHelpers
{
	/// <summary>
	/// For Angular 2+. Generate codes, ng build and assert the build result.
	/// The ng build is done in folder NG2TestBed.
	/// </summary>
	public class NG2TestHelper : TsTestHelper, ITestHelper
	{
		readonly ITestOutputHelper output;
		readonly bool buildToValidate;
		readonly Action<int, int> assertEqualInt;

		public NG2TestHelper(Type genType, ITestOutputHelper output, ITestingSettings testingSettings, Action<string, string> assertEqual, Action<int, int> assertEqualInt) 
		: base(genType, testingSettings, assertEqual)
		{
			this.output = output;
			this.buildToValidate = testingSettings.Build;
			this.assertEqualInt = assertEqualInt;
		}

		public void GenerateAndAssertAndBuild(string openApiFile, string expectedFile, ISettings settings = null)
		{
			string s = TranslateDefToCode(openApiFile, settings ?? new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "MyClient", //the TestBed requires this containerClassName
				ContainerNameStrategy = ContainerNameStrategy.None,
				ActionNameStrategy = ActionNameStrategy.Default,
				DataAnnotationsToComments = true,
				//EnumToString = true for baseline tests, expect false
			});

			if (testingSettings.UpdateGenerated)
			{
				File.WriteAllText(expectedFile, s); //To update Results after some feature changes. Copy what in the bin folder back to the source content.
			}
			else
			{
				string expected = ReadFromResults(expectedFile);
				assertEqual(expected, s);
			}

			if (buildToValidate)
			{
				assertEqualInt(0, CheckNGBuild(s));
			}
		}

		//public void GenerateAndAssertBuild(string openApiFile, string expectedFile, ISettings settings = null)
		//{
		//	GenerateAndAssert(openApiFile, expectedFile, settings);

		//	if (buildToValidate)
		//	{
		//		string s = TranslateDefToCode(openApiFile, settings ?? new Settings()
		//		{
		//			ClientNamespace = "MyNS",
		//			ContainerClassName = "MyClient", //the TestBed requires this containerClassName
		//			ContainerNameStrategy = ContainerNameStrategy.None,
		//			ActionNameStrategy = ActionNameStrategy.Default,
		//			DataAnnotationsToComments = true,
		//			EnumToString = true
		//		});

		//		Assert.Equal(0, CheckNGBuild(s));
		//	}
		//}

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
			ProcessStartInfo info = new(ngCmd, "build --source-map=false --build-optimizer=false")
			{
				UseShellExecute = false,
				RedirectStandardError = true,
			};

			var warningCode = 0;
			try
			{
				var process = Process.Start(info);
				var errorMsg = process.StandardError.ReadToEnd(); //before WaitForExit() https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.process.standarderror?view=netcore-3.1#System_Diagnostics_Process_StandardError
				if (!String.IsNullOrEmpty(errorMsg))
				{
					//If the first line is "- Generating browser application bundles (phase: setup)", things should be OK, no warning.
					if (!errorMsg.StartsWith("- Generating browser application bundles (phase: setup)"))
					{
						output.WriteLine("Code generated but with ng build errors:");
						output.WriteLine(errorMsg);
						warningCode = 999;
					}
					else
					{
						output.WriteLine("NG build OK");
					}
				}

				process.WaitForExit();

				var buildProcessCode = process.ExitCode;
				if (buildProcessCode != 0)
				{
					return buildProcessCode;
				}
				else if (warningCode != 0)
				{
					return warningCode;
				}

				return 0;
			}
			finally
			{
				Directory.SetCurrentDirectory(currentDir);
			}
		}
	}
}
