using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	public class VstsCsTests
	{
		public VstsCsTests(ITestOutputHelper output)
		{
			helper = new CSharpTestHelper(output);
		}

		readonly CSharpTestHelper helper;

		[Fact]
		public void TestAccount()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\accounts.json", "Results\\Vsts\\accounts.txt");
		}

		[Fact]
		public void Test_audit()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\audit.json", "Results\\Vsts\\audit.txt");
		}

		[Fact]
		public void Test_build()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\build.json", "Results\\Vsts\\build.txt");
		}

		[Fact]
		public void Test_cloudLoadTest()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\cloudLoadTest.json", "Results\\Vsts\\cloudLoadTest.txt");
		}

		[Fact]
		public void Test_core()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\core.json", "Results\\Vsts\\core.txt");
		}

		[Fact]
		public void Test_dashboard()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\dashboard.json", "Results\\Vsts\\dashboard.txt");
		}

		[Fact]
		public void Test_extensionManagement()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\extensionManagement.json", "Results\\Vsts\\extensionManagement.txt");
		}

		[Fact]
		public void Test_feed()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\feed.json", "Results\\Vsts\\feed.txt");
		}

		[Fact]
		public void Test_git()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\git.json", "Results\\Vsts\\git.txt");
		}

		[Fact]
		public void Test_graph()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\graph.json", "Results\\Vsts\\graph.txt");
		}

		[Fact]
		public void Test_memberEntitlementManagement()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\memberEntitlementManagement.json", "Results\\Vsts\\memberEntitlementManagement.txt");
		}

		[Fact]
		public void Test_notification()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\notification.json", "Results\\Vsts\\notification.txt");
		}

		[Fact]
		public void Test_operations()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\operations.json", "Results\\Vsts\\operations.txt");
		}

		[Fact]
		public void Test_permissionsReport()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\permissionsReport.json", "Results\\Vsts\\permissionsReport.txt");
		}

		[Fact]
		public void Test_policy()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\policy.json", "Results\\Vsts\\policy.txt");
		}

		[Fact]
		public void Test_profile()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\profile.json", "Results\\Vsts\\profile.txt");
		}

		[Fact]
		public void Test_provenance()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\provenance.json", "Results\\Vsts\\provenance.txt");
		}

		[Fact]
		public void Test_release()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\release.json", "Results\\Vsts\\release.txt");
		}

		[Fact]
		public void Test_search()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\search.json", "Results\\Vsts\\search.txt");
		}

		[Fact]
		public void Test_security()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\security.json", "Results\\Vsts\\security.txt");
		}

		[Fact]
		public void Test_serviceEndpoint()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\serviceEndpoint.json", "Results\\Vsts\\serviceEndpoint.txt");
		}

		[Fact]
		public void Test_serviceHooks()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\serviceHooks.json", "Results\\Vsts\\serviceHooks.txt");
		}

		[Fact]
		public void Test_status()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\status.json", "Results\\Vsts\\status.txt");
		}

		[Fact]
		public void Test_symbol()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\symbol.json", "Results\\Vsts\\symbol.txt");
		}

		[Fact]
		public void Test_taskAgent()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\taskAgent.json", "Results\\Vsts\\taskAgent.txt");
		}

		[Fact]
		public void Test_test()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\test.json", "Results\\Vsts\\test.txt");
		}

		[Fact]
		public void Test_testPlan()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\testPlan.json", "Results\\Vsts\\testPlan.txt");
		}

		[Fact]
		public void Test_testResults()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\testResults.json", "Results\\Vsts\\testResults.txt");
		}

		[Fact]
		public void Test_tfvc()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\tfvc.json", "Results\\Vsts\\tfvc.txt");
		}

		[Fact]
		public void Test_tokenAdmin()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\tokenAdmin.json", "Results\\Vsts\\tokenAdmin.txt");
		}

		[Fact]
		public void Test_tokenAdministration()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\tokenAdministration.json", "Results\\Vsts\\tokenAdministration.txt");
		}

		[Fact]
		public void Test_wiki()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\wiki.json", "Results\\Vsts\\wiki.txt");
		}

		[Fact]
		public void Test_work()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\work.json", "Results\\Vsts\\work.txt");
		}

		[Fact]
		public void Test_workItemTracking()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\workItemTracking.json", "Results\\Vsts\\workItemTracking.txt");
		}

		[Fact]
		public void Test_workItemTrackingProcess()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\workItemTrackingProcess.json", "Results\\Vsts\\workItemTrackingProcess.txt");
		}

		[Fact]
		public void Test_workItemTrackingProcessTemplate()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\Vsts\\workItemTrackingProcessTemplate.json", "Results\\Vsts\\workItemTrackingProcessTemplate.txt");
		}

	}
}
