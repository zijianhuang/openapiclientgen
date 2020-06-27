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
		readonly CSharpTestHelper helper;
		public OpenapiDirectoryTests(ITestOutputHelper output)
		{
			helper = new CSharpTestHelper(output);
		}

		[Fact]
		public void Test_wheretocredit()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\wheretocredit.com\1.0");
		}

		[Fact]
		public void Test_vonagevgis()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\vonage.com\vgis\1.0.1");
		}

		[Fact]
		public void Test_vonageuser()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\vonage.com\user\1.11.8");
		}

		[Fact]
		public void Test_vonageaccount()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\vonage.com\account\1.11.8");
		}


		[Fact]
		public void Test_vimeo()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\vimeo.com\3.4");
		}

		//[Fact]System.ArgumentException : Not yet supported enumMember of Microsoft.OpenApi.Any.OpenApiBoolean with HideReplyByIdBodyHidden
		//Enum with boolean in operation HideReplyById. Nswag could not either.
		//public void Test_twitter()
		//{
		//	helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\twitter.com\labs\2.7");
		//}

		[Fact]
		public void Test_tomtomsearch()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\tomtom.com\search\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_tomtomrouting()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\tomtom.com\routing\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_tomtommaps()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\tomtom.com\maps\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_tisane()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\tisane.ai\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_stackexchange() has a array type member property: 'the id of the object (answer, comment, question, or user) the event describes'
		//{
		//	helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\stackexchange.com\2.0", CodeGenSettings.SettingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		//[Fact]
		//public void Test_shutterstock()//has duplicate definitions of api calls.
		//{
		//	helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\shutterstock.com\1.0.16", CodeGenSettings.SettingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		[Fact]
		public void Test_ritekit()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\ritekit.com\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_football()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\rapidapi.com\football-prediction\2", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_rebilly()
		//{
		//	helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\rebilly.com\2.1");wrong definitions with duplicated enum member voided in billingStatus.
		//}

		[Fact]
		public void Test_randommer()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\randommer.io\v1", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_patientview()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\patientview.org\1.0");
		}

		[Fact]
		public void Test_parliament()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\parliament.uk\search\Live");
		}

		[Fact]
		public void Test_openlinksw()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\openlinksw.com\osdb\1.0.0");
		}

		[Fact]
		public void Test_opendatanetwork()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\opendatanetwork.com\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_oceandrivers()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\oceandrivers.com\1.0");
		}

		[Fact]
		public void Test_nsidc()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\nsidc.org\1.0.0");
		}

		[Fact]
		public void Test_domainfinder()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\nic.at\domainfinder\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_neowsapp()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\neowsapp.com\1.0");
		}

		[Fact]
		public void Test_namsor()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\namsor.com\2.0.5");
		}

		[Fact]
		public void Test_math()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\math.tools\1.5", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_listennotes() //it has funky casual enum in operation, with type double and default value. Code generated won't pass compilation. Better not to tolerate such definitiohn.
		//{
		//	helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\listennotes.com\2.0", CodeGenSettings.SettingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		//[Fact]
		//public void Test_linode()// The Grant type has a casual enum definition with member null. OpenApi lib could not intepret it well
		//{
		//	helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\linode.com\4.5.0", CodeGenSettings.SettingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		[Fact]
		public void Test_iptwist()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\iptwist.com\1.0.0");
		}

		[Fact]
		public void Test_ipinfodb()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\ipinfodb.com\1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_mycru()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\mycru.io\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_mercure()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\mercure.local\0.3.2", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_microsoftgraph()
		//{
		//	//ms graph yaml has some funky paths like /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id}, duplicate parameters.
		//	helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\microsoft.com\graph\1.0.1", new Settings()
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
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\ip2whois.com\1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_ip2proxy()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\ip2proxy.com\1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_geolocation()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\ip2location.com\geolocation\1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_convertcurrency()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\interzoid.com\convertcurrency\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_getaddressmatch()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\interzoid.com\getaddressmatch\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_getareacodefromnumber()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\interzoid.com\getareacodefromnumber\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_getcitymatch()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\interzoid.com\getcitymatch\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_hackathonwatch()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\hackathonwatch.com\0.1", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_bcdc()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\gov.bc.ca\bcdc\3.0.1", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_bcgnws()
		{
			helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\gov.bc.ca\bcgnws\3.x.x", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_geocoder()has invalid url sites/{siteID}/subsites.{outputFormat} and sites/{siteID}.{outputFormat},  https://stackoverflow.com/questions/3856693/a-url-resource-that-is-a-dot-2e
		//{
		//	helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\gov.bc.ca\geocoder\2.0.0", CodeGenSettings.SettingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}


	}
}