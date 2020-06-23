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
	public class OpenapiDirectoryTests
	{

		readonly ITestOutputHelper output;
		public OpenapiDirectoryTests(ITestOutputHelper output)
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

			Settings settings = mySettings ?? defaultSettings;
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

		static readonly Settings defaultSettings = new Settings()
		{
			ClientNamespace = "MyNS",
			PathPrefixToRemove = "/api",
			ContainerClassName = "Misc",
			ContainerNameStrategy = ContainerNameStrategy.None,
			ActionNameStrategy = ActionNameStrategy.Default,
			GenerateBothAsyncAndSync = true,
			UseEnsureSuccessStatusCodeEx = true,
			DataAnnotationsEnabled = true,
			DataAnnotationsToComments = true,
		};

		static Settings settingsWithActionNameStrategy(ActionNameStrategy ans)
		{
			return new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "Misc",
				ContainerNameStrategy = ContainerNameStrategy.None,
				ActionNameStrategy = ans,
				GenerateBothAsyncAndSync = true,
				DecorateDataModelWithSerializable = true,
				UseEnsureSuccessStatusCodeEx = true,
				DataAnnotationsEnabled = true,
				DataAnnotationsToComments = true,
				HandleHttpRequestHeaders = true,
			};
		}

		[Fact]
		public void Test_wheretocredit()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\wheretocredit.com\1.0");
		}

		[Fact]
		public void Test_vonagevgis()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\vonage.com\vgis\1.0.1");
		}

		[Fact]
		public void Test_vonageuser()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\vonage.com\user\1.11.8");
		}

		[Fact]
		public void Test_vonageaccount()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\vonage.com\account\1.11.8");
		}


		[Fact]
		public void Test_vimeo()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\vimeo.com\3.4");
		}

		//[Fact]System.ArgumentException : Not yet supported enumMember of Microsoft.OpenApi.Any.OpenApiBoolean with HideReplyByIdBodyHidden
		//Enum with boolean in operation HideReplyById. Nswag could not either.
		//public void Test_twitter()
		//{
		//	GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\twitter.com\labs\2.7");
		//}

		[Fact]
		public void Test_tomtomsearch()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\tomtom.com\search\1.0.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_tomtomrouting()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\tomtom.com\routing\1.0.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_tomtommaps()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\tomtom.com\maps\1.0.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_tisane()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\tisane.ai\1.0.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_stackexchange()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\stackexchange.com\2.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_shutterstock()//has duplicate definitions of api calls.
		//{
		//	GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\shutterstock.com\1.0.16", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		[Fact]
		public void Test_ritekit()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\ritekit.com\1.0.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_football()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\rapidapi.com\football-prediction\2", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_rebilly()
		//{
		//	GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\rebilly.com\2.1");wrong definitions with duplicated enum member voided in billingStatus.
		//}

		[Fact]
		public void Test_randommer()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\randommer.io\v1", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_patientview()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\patientview.org\1.0");
		}

		[Fact]
		public void Test_parliament()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\parliament.uk\search\Live");
		}

		[Fact]
		public void Test_openlinksw()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\openlinksw.com\osdb\1.0.0");
		}

		[Fact]
		public void Test_opendatanetwork()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\opendatanetwork.com\1.0.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_oceandrivers()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\oceandrivers.com\1.0");
		}

		[Fact]
		public void Test_nsidc()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\nsidc.org\1.0.0");
		}

		[Fact]
		public void Test_domainfinder()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\nic.at\domainfinder\1.0.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_neowsapp()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\neowsapp.com\1.0");
		}

		[Fact]
		public void Test_namsor()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\namsor.com\2.0.5");
		}

		[Fact]
		public void Test_math()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\math.tools\1.5", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_listennotes() //it has funky casual enum in operation, with type double and default value. Code generated won't pass compilation. Better not to tolerate such definitiohn.
		//{
		//	GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\listennotes.com\2.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		//[Fact]
		//public void Test_linode()// The Grant type has a casual enum definition with member null. OpenApi lib could not intepret it well
		//{
		//	GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\linode.com\4.5.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		[Fact]
		public void Test_iptwist()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\iptwist.com\1.0.0");
		}

		[Fact]
		public void Test_ipinfodb()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\ipinfodb.com\1.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_mycru()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\mycru.io\1.0.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_mercure()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\mercure.local\0.3.2", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_microsoftgraph()
		//{
		//	//ms graph yaml has some funky paths like /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id}, duplicate parameters.
		//	GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\microsoft.com\graph\1.0.1", new Settings()
		//	{
		//		ClientNamespace = "MyNS",
		//		//NamespaceInClassName = "microsoft.graph.",
		//		ContainerClassName = "Misc",
		//		ContainerNameStrategy = ContainerNameStrategy.None,
		//		ActionNameStrategy = ActionNameStrategy.Default,
		//		GenerateBothAsyncAndSync = true,
		//		UseEnsureSuccessStatusCodeEx = true,
		//		DataAnnotationsEnabled = true,
		//		DataAnnotationsToComments = true,
		//		DecorateDataModelWithDataContract = true,
		//		DataContractNamespace = "http://demo.domain/2020/03",
		//		HandleHttpRequestHeaders = true,
		//	});
		//}

		[Fact]
		public void Test_ip2whois()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\ip2whois.com\1.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_ip2proxy()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\ip2proxy.com\1.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_geolocation()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\ip2location.com\geolocation\1.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_convertcurrency()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\interzoid.com\convertcurrency\1.0.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_getaddressmatch()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\interzoid.com\getaddressmatch\1.0.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_getareacodefromnumber()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\interzoid.com\getareacodefromnumber\1.0.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_getcitymatch()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\interzoid.com\getcitymatch\1.0.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_hackathonwatch()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\hackathonwatch.com\0.1", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_bcdc()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\gov.bc.ca\bcdc\3.0.1", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_bcgnws()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\gov.bc.ca\bcgnws\3.x.x", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_geocoder()has invalid url sites/{siteID}/subsites.{outputFormat} and sites/{siteID}.{outputFormat},  https://stackoverflow.com/questions/3856693/a-url-resource-that-is-a-dot-2e
		//{
		//	GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\gov.bc.ca\geocoder\2.0.0", settingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

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



	}
}