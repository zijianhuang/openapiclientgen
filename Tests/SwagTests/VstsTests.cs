using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;
using Fonlow.OpenApiClientGen.TestHelpers;

namespace SwagTests
{
	/// <summary>
	/// Test with Swagger 2 definitions at https://github.com/MicrosoftDocs/vsts-rest-api-specs
	/// </summary>
	public class VstsCsTests
	{
		public VstsCsTests(ITestOutputHelper output)
		{
			helper = new CSharpTestHelper(output, CodeGenSettings.Default);
		}

		readonly CSharpTestHelper helper;

		void GenerateAndAssertAndBuild(string filePath, string expectedFile, ISettings mySettings = null)
		{
			helper.GenerateAndAssertAndBuild(filePath, expectedFile, mySettings);
		}

		[Fact]
		public void TestAccount()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/accounts.json", "Results/Vsts/accounts.txt");
		}

		[Fact]
		public void Test_audit()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/audit.json", "Results/Vsts/audit.txt");
		}

		[Fact]
		public void Test_build()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/build.json", "Results/Vsts/build.txt");
		}

		[Fact]
		public void Test_cloudLoadTest()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/cloudLoadTest.json", "Results/Vsts/cloudLoadTest.txt");
		}

		[Fact]
		public void Test_core()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/core.json", "Results/Vsts/core.txt");
		}

		[Fact]
		public void Test_dashboard()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/dashboard.json", "Results/Vsts/dashboard.txt");
		}

		[Fact]
		public void Test_extensionManagement()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/extensionManagement.json", "Results/Vsts/extensionManagement.txt");
		}

		[Fact]
		public void Test_feed()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/feed.json", "Results/Vsts/feed.txt");
		}

		[Fact]
		public void Test_git()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/git.json", "Results/Vsts/git.txt");
		}

		[Fact]
		public void Test_graph()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/graph.json", "Results/Vsts/graph.txt");
		}

		[Fact]
		public void Test_memberEntitlementManagement()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/memberEntitlementManagement.json", "Results/Vsts/memberEntitlementManagement.txt");
		}

		[Fact]
		public void Test_notification()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/notification.json", "Results/Vsts/notification.txt");
		}

		[Fact]
		public void Test_operations()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/operations.json", "Results/Vsts/operations.txt");
		}

		[Fact]
		public void Test_permissionsReport()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/permissionsReport.json", "Results/Vsts/permissionsReport.txt");
		}

		[Fact]
		public void Test_policy()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/policy.json", "Results/Vsts/policy.txt");
		}

		[Fact]
		public void Test_profile()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/profile.json", "Results/Vsts/profile.txt");
		}

		[Fact]
		public void Test_provenance()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/provenance.json", "Results/Vsts/provenance.txt");
		}

		[Fact]
		public void Test_release()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/release.json", "Results/Vsts/release.txt");
		}

		[Fact]
		public void Test_search()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/search.json", "Results/Vsts/search.txt");
		}

		[Fact]
		public void Test_security()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/security.json", "Results/Vsts/security.txt");
		}

		[Fact]
		public void Test_serviceEndpoint()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/serviceEndpoint.json", "Results/Vsts/serviceEndpoint.txt");
		}

		[Fact]
		public void Test_serviceHooks()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/serviceHooks.json", "Results/Vsts/serviceHooks.txt");
		}

		[Fact]
		public void Test_status()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/status.json", "Results/Vsts/status.txt");
		}

		[Fact]
		public void Test_symbol()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/symbol.json", "Results/Vsts/symbol.txt");
		}

		[Fact]
		public void Test_taskAgent()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/taskAgent.json", "Results/Vsts/taskAgent.txt");
		}

		[Fact]
		public void Test_test()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/test.json", "Results/Vsts/test.txt");
		}

		[Fact]
		public void Test_testPlan()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/testPlan.json", "Results/Vsts/testPlan.txt");
		}

		[Fact]
		public void Test_testResults()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/testResults.json", "Results/Vsts/testResults.txt");
		}

		[Fact]
		public void Test_tfvc()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/tfvc.json", "Results/Vsts/tfvc.txt");
		}

		[Fact]
		public void Test_tokenAdmin()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/tokenAdmin.json", "Results/Vsts/tokenAdmin.txt");
		}

		[Fact]
		public void Test_tokenAdministration()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/tokenAdministration.json", "Results/Vsts/tokenAdministration.txt");
		}

		[Fact]
		public void Test_wiki()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/wiki.json", "Results/Vsts/wiki.txt");
		}

		[Fact]
		public void Test_work()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/work.json", "Results/Vsts/work.txt");
		}

		[Fact]
		public void Test_workItemTracking()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/workItemTracking.json", "Results/Vsts/workItemTracking.txt");
		}

		[Fact]
		public void Test_workItemTrackingProcess()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/workItemTrackingProcess.json", "Results/Vsts/workItemTrackingProcess.txt");
		}

		[Fact]
		public void Test_workItemTrackingProcessTemplate()
		{
			GenerateAndAssertAndBuild("SwagMock/Vsts/workItemTrackingProcessTemplate.json", "Results/Vsts/workItemTrackingProcessTemplate.txt");
		}

	}
}
