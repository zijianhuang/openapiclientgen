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
		public void Test_Addons()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\addons-Addons\2017-05-15");
		}

		[Fact]
		public void Test_advisor()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\advisor\2020-01-01");
		}

		[Fact]
		public void Test_alertsmanagementAlertsManagement()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\alertsmanagement-AlertsManagement\2019-03-01");
		}

		[Fact]
		public void Test_alertsmanagementSmartDetectorAlertRulesApi()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\alertsmanagement-SmartDetectorAlertRulesApi\2019-06-01");
		}

		[Fact]
		public void Test_analysisservices()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\analysisservices\2017-08-01");
		}

		[Fact]
		public void Test_apimanagement()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\apimanagement\2019-01-01");
		}

		[Fact]
		public void Test_appconfiguration()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\appconfiguration\2019-10-01");
		}

		[Fact]
		public void Test_applicationinsightscomponentAnnotations_API()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\applicationinsights-componentAnnotations_API\2015-05-01");
		}

		[Fact]
		public void Test_applicationinsightscomponentFeaturesAndPricing_API()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\applicationinsights-componentFeaturesAndPricing_API\2017-10-01");
		}

		[Fact]
		public void Test_applicationinsightscomponentProactiveDetection_API()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\applicationinsights-componentProactiveDetection_API\2015-05-01");
		}

		[Fact]
		public void Test_applicationinsightscomponents_API()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\applicationinsights-components_API\2015-05-01");
		}

		//[Fact]
		//public void Test_()
		//{
		//	helper.GenerateFromOpenApiAndBuild(@"");
		//}

	}
}