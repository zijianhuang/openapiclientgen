using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	/// <summary>
	/// Test with Swagger 2 definitions at https://github.com/MicrosoftDocs/vsts-rest-api-specs
	/// </summary>
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
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\accounts.json", "Results\\Vsts\\accounts.txt");
		}

		[Fact]
		public void Test_audit()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\audit.json", "Results\\Vsts\\audit.txt");
		}

		[Fact]
		public void Test_build()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\build.json", "Results\\Vsts\\build.txt");
		}

		[Fact]
		public void Test_cloudLoadTest()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\cloudLoadTest.json", "Results\\Vsts\\cloudLoadTest.txt");
		}

		[Fact]
		public void Test_core()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\core.json", "Results\\Vsts\\core.txt");
		}

		[Fact]
		public void Test_dashboard()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\dashboard.json", "Results\\Vsts\\dashboard.txt");
		}

		[Fact]
		public void Test_extensionManagement()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\extensionManagement.json", "Results\\Vsts\\extensionManagement.txt");
		}

		[Fact]
		public void Test_feed()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\feed.json", "Results\\Vsts\\feed.txt");
		}

		[Fact]
		public void Test_git()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\git.json", "Results\\Vsts\\git.txt");
		}

		[Fact]
		public void Test_graph()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\graph.json", "Results\\Vsts\\graph.txt");
		}

		[Fact]
		public void Test_memberEntitlementManagement()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\memberEntitlementManagement.json", "Results\\Vsts\\memberEntitlementManagement.txt");
		}

		[Fact]
		public void Test_notification()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\notification.json", "Results\\Vsts\\notification.txt");
		}

		[Fact]
		public void Test_operations()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\operations.json", "Results\\Vsts\\operations.txt");
		}

		[Fact]
		public void Test_permissionsReport()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\permissionsReport.json", "Results\\Vsts\\permissionsReport.txt");
		}

		[Fact]
		public void Test_policy()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\policy.json", "Results\\Vsts\\policy.txt");
		}

		[Fact]
		public void Test_profile()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\profile.json", "Results\\Vsts\\profile.txt");
		}

		[Fact]
		public void Test_provenance()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\provenance.json", "Results\\Vsts\\provenance.txt");
		}

		[Fact]
		public void Test_release()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\release.json", "Results\\Vsts\\release.txt");
		}

		[Fact]
		public void Test_search()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\search.json", "Results\\Vsts\\search.txt");
		}

		[Fact]
		public void Test_security()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\security.json", "Results\\Vsts\\security.txt");
		}

		[Fact]
		public void Test_serviceEndpoint()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\serviceEndpoint.json", "Results\\Vsts\\serviceEndpoint.txt");
		}

		[Fact]
		public void Test_serviceHooks()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\serviceHooks.json", "Results\\Vsts\\serviceHooks.txt");
		}

		[Fact]
		public void Test_status()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\status.json", "Results\\Vsts\\status.txt");
		}

		[Fact]
		public void Test_symbol()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\symbol.json", "Results\\Vsts\\symbol.txt");
		}

		[Fact]
		public void Test_taskAgent()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\taskAgent.json", "Results\\Vsts\\taskAgent.txt");
		}

		[Fact]
		public void Test_test()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\test.json", "Results\\Vsts\\test.txt");
		}

		[Fact]
		public void Test_testPlan()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\testPlan.json", "Results\\Vsts\\testPlan.txt");
		}

		[Fact]
		public void Test_testResults()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\testResults.json", "Results\\Vsts\\testResults.txt");
		}

		[Fact]
		public void Test_tfvc()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\tfvc.json", "Results\\Vsts\\tfvc.txt");
		}

		[Fact]
		public void Test_tokenAdmin()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\tokenAdmin.json", "Results\\Vsts\\tokenAdmin.txt");
		}

		[Fact]
		public void Test_tokenAdministration()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\tokenAdministration.json", "Results\\Vsts\\tokenAdministration.txt");
		}

		[Fact]
		public void Test_wiki()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\wiki.json", "Results\\Vsts\\wiki.txt");
		}

		[Fact]
		public void Test_work()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\work.json", "Results\\Vsts\\work.txt");
		}

		[Fact]
		public void Test_workItemTracking()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\workItemTracking.json", "Results\\Vsts\\workItemTracking.txt");
		}

		[Fact]
		public void Test_workItemTrackingProcess()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\workItemTrackingProcess.json", "Results\\Vsts\\workItemTrackingProcess.txt");
		}

		[Fact]
		public void Test_workItemTrackingProcessTemplate()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\Vsts\\workItemTrackingProcessTemplate.json", "Results\\Vsts\\workItemTrackingProcessTemplate.txt");
		}

	}
}
