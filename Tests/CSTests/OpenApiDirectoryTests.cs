using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;

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
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\wheretocredit.com\1.0");
		}

		[Fact]
		public void Test_vonagevgis()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\vonage.com\vgis\1.0.1");
		}

		[Fact]
		public void Test_vonageuser()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\vonage.com\user\1.11.8");
		}

		[Fact]
		public void Test_vonageaccount()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\vonage.com\account\1.11.8");
		}


		[Fact]
		public void Test_vimeo()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\vimeo.com\3.4");
		}

		//[Fact]System.ArgumentException : Not yet supported enumMember of Microsoft.OpenApi.Any.OpenApiBoolean with HideReplyByIdBodyHidden
		//Enum with boolean in operation HideReplyById. Nswag could not either.
		//public void Test_twitter()
		//{
		//	helper.GenerateAndAssert(@"..\..\..\..\openapi-directory\APIs\twitter.com\labs\2.7");
		//}

		[Fact]
		public void Test_tomtomsearch()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\tomtom.com\search\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_tomtomrouting()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\tomtom.com\routing\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_tomtommaps()//empty property 
		//{
		//	helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\tomtom.com\maps\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		[Fact]
		public void Test_tisane()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\tisane.ai\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_stackexchange() has a array type member property: 'the id of the object (answer, comment, question, or user) the event describes'
		//{
		//	helper.GenerateAndAssert(@"..\..\..\..\openapi-directory\APIs\stackexchange.com\2.0", CodeGenSettings.SettingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		//[Fact]
		//public void Test_shutterstock()//has duplicate definitions of api calls.
		//{
		//	helper.GenerateAndAssert(@"..\..\..\..\openapi-directory\APIs\shutterstock.com\1.0.16", CodeGenSettings.SettingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		[Fact]
		public void Test_ritekit()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\ritekit.com\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_football()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\rapidapi.com\football-prediction\2", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_rebilly()
		//{
		//	helper.GenerateAndAssert(@"..\..\..\..\openapi-directory\APIs\rebilly.com\2.1");wrong definitions with duplicated enum member voided in billingStatus.
		//}

		[Fact]
		public void Test_randommer()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\randommer.io\v1", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_patientview()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\patientview.org\1.0");
		}

		[Fact]
		public void Test_parliament()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\parliament.uk\search\Live");
		}

		[Fact]
		public void Test_openlinksw()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\openlinksw.com\osdb\1.0.0");
		}

		[Fact]
		public void Test_opendatanetwork()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\opendatanetwork.com\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_oceandrivers()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\oceandrivers.com\1.0");
		}

		[Fact]
		public void Test_nsidc()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\nsidc.org\1.0.0");
		}

		//[Fact]
		//public void Test_domainfinder() //empty property?
		//{
		//	helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\nic.at\domainfinder\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		[Fact]
		public void Test_neowsapp()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\neowsapp.com\1.0");
		}

		[Fact]
		public void Test_namsor()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\namsor.com\2.0.5");
		}

		[Fact]
		public void Test_math()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\math.tools\1.5", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_listennotes() //it has funky casual enum in operation, with type double and default value. Code generated won't pass compilation. Better not to tolerate such definitiohn.
		//{
		//	helper.GenerateAndAssert(@"..\..\..\..\openapi-directory\APIs\listennotes.com\2.0", CodeGenSettings.SettingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		//[Fact]
		//public void Test_linode()// The Grant type has a casual enum definition with member null. OpenApi lib could not intepret it well
		//{
		//	helper.GenerateAndAssert(@"..\..\..\..\openapi-directory\APIs\linode.com\4.5.0", CodeGenSettings.SettingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		[Fact]
		public void Test_iptwist()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\iptwist.com\1.0.0");
		}

		[Fact]
		public void Test_ipinfodb()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\ipinfodb.com\1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_mycru()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\mycru.io\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_mercure()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\mercure.local\0.3.2", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_microsoftgraph()
		//{
		//	//ms graph yaml has some funky paths like /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id}, duplicate parameters.
		//	helper.GenerateAndAssert(@"..\..\..\..\openapi-directory\APIs\microsoft.com\graph\1.0.1", new Settings()
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
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\ip2whois.com\1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_ip2proxy()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\ip2proxy.com\1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_geolocation()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\ip2location.com\geolocation\1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_convertcurrency()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\interzoid.com\convertcurrency\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_getaddressmatch()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\interzoid.com\getaddressmatch\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_getareacodefromnumber()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\interzoid.com\getareacodefromnumber\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_getcitymatch()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\interzoid.com\getcitymatch\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_hackathonwatch()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\hackathonwatch.com\0.1", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_bcdc()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\gov.bc.ca\bcdc\3.0.1", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_bcgnws()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\gov.bc.ca\bcgnws\3.x.x", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_geocoder()has invalid url sites/{siteID}/subsites.{outputFormat} and sites/{siteID}.{outputFormat},  https://stackoverflow.com/questions/3856693/a-url-resource-that-is-a-dot-2e
		//{
		//	helper.GenerateAndAssert(@"..\..\..\..\openapi-directory\APIs\gov.bc.ca\geocoder\2.0.0", CodeGenSettings.SettingsWithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}


	}
}