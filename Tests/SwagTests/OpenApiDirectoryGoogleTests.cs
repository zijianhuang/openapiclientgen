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
	public class OpenapiDirectoryGoogleTests
	{

		readonly ITestOutputHelper output;
		public OpenapiDirectoryGoogleTests(ITestOutputHelper output)
		{
			this.output = output;
		}

		static OpenApiDocument ReadJson(string filePath)
		{
			using FileStream stream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
			return new OpenApiStreamReader().Read(stream, out OpenApiDiagnostic diagnostic);
		}

		static string TranslateJsonToCode(string fileDir, Settings mySettings = null)
		{
			OpenApiDocument doc = ReadJson(Path.Combine(fileDir, "openapi.yaml"));

			Settings settings = mySettings ?? CodeGenSettings.Default;
			ControllersClientApiGen gen = new ControllersClientApiGen(settings);
			gen.CreateCodeDom(doc.Paths, doc.Components);
			return gen.WriteToText();
		}

		void GenerateAndAssert(string openApiFile, Settings mySettings = null)
		{
			string s = TranslateJsonToCode(openApiFile, mySettings);
			//File.WriteAllText(@"c:\temp\openapi\ccc.cs", s);
			var r = CSharpValidation.CompileThenSave(s, null);
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

		[Fact]
		public void Test_youtubeAnalytics()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\youtubeAnalytics\v2");
		}

		[Fact]
		public void Test_youtubereporting()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\youtubereporting\v1");
		}

		[Fact]
		public void Test_youtube()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\youtube\v3");
		}

		[Fact]
		public void Test_websecurityscanner()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\websecurityscanner\v1");
		}

		[Fact]
		public void Test_webmasters()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\webmasters\v3");
		}

		[Fact]
		public void Test_webfonts()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\webfonts\v1");
		}

		[Fact]
		public void Test_vision()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\vision\v1");
		}

		[Fact]
		public void Test_videointelligence()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\videointelligence\v1");
		}

		[Fact]
		public void Test_verifiedaccess()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\verifiedaccess\v1");
		}

		[Fact]
		public void Test_vault()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\vault\v1");
		}

		[Fact]
		public void Test_translate()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\translate\v2");
		}

		[Fact]
		public void Test_tpu()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\tpu\v1");
		}

		[Fact]
		public void Test_texttospeech()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\texttospeech\v1");
		}

		[Fact]
		public void Test_testing()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\testing\v1");
		}

		[Fact]
		public void Test_tasks()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\tasks\v1");
		}

		[Fact]
		public void Test_tagmanager()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\tagmanager\v1");
		}

		[Fact]
		public void Test_streetviewpublish()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\streetviewpublish\v1");
		}

		[Fact]
		public void Test_storagetransfer()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\storagetransfer\v1");
		}

		[Fact]
		public void Test_storage()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\storage\v1");
		}

		[Fact]
		public void Test_sqladmin()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\sqladmin\v1beta4");
		}

		[Fact]
		public void Test_speech()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\speech\v1");
		}

		[Fact]
		public void Test_spanner()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\spanner\v1");
		}

		[Fact]
		public void Test_sourcerepo()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\sourcerepo\v1");
		}

		[Fact]
		public void Test_slides()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\slides\v1");
		}

		[Fact]
		public void Test_siteVerification()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\siteVerification\v1");
		}

		[Fact]
		public void Test_sheets()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\sheets\v4");
		}

		[Fact]
		public void Test_serviceusage()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\serviceusage\v1");
		}

		[Fact]
		public void Test_servicenetworking()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\servicenetworking\v1");
		}

		[Fact]
		public void Test_servicemanagement()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\servicemanagement\v1");
		}

		[Fact]
		public void Test_servicecontrol()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\servicecontrol\v1");
		}



	}
}