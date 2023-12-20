using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	public class OpenapiDirectoryGoogleTests
	{
		readonly CSharpTestHelperForOpenApiDir helper;
		public OpenapiDirectoryGoogleTests(ITestOutputHelper output)
		{
			helper = new CSharpTestHelperForOpenApiDir(output, "openapi.yaml");
		}

		void GenerateFromOpenApiAndBuild(string filePath, Settings mySettings = null)
		{
			Settings settings = mySettings ?? CodeGenSettings.Default;
			helper.GenerateFromOpenApiAndBuild(filePath, settings);
		}

		[Fact]
		public void Test_driveactivity()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\driveactivity\v2");
		}

		[Fact]
		public void Test_drive()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\drive\v3");
		}

		[Fact]
		public void Test_doubleclicksearch()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\doubleclicksearch\v2");
		}

		[Fact]
		public void Test_doubleclickbidmanager()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\doubleclickbidmanager\v1");
		}

		[Fact]
		public void Test_domainsrdap()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\domainsrdap\v1");
		}

		[Fact]
		public void Test_docs()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\docs\v1");
		}

		[Fact]
		public void Test_dns()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\dns\v2beta1");
		}

		[Fact]
		public void Test_dlp()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\dlp\v2");
		}

		[Fact]
		public void Test_discovery()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\discovery\v1");
		}

		[Fact]
		public void Test_digitalassetlinks()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\digitalassetlinks\v1");
		}

		[Fact]
		public void Test_dfareporting()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\dfareporting\v3.3");
		}

		[Fact]
		public void Test_deploymentmanager()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\deploymentmanager\v2");
		}

		[Fact]
		public void Test_datastore()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\datastore\v1");
		}

		[Fact]
		public void Test_dataproc()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\dataproc\v1");
		}

		[Fact]
		public void Test_datafusion()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\datafusion\v1beta1");
		}

		[Fact]
		public void Test_dataflow()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\dataflow\v1b3");
		}

		[Fact]
		public void Test_customsearch()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\customsearch\v1");
		}

		[Fact]
		public void Test_content()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\content\v2");
		}

		[Fact]
		public void Test_containeranalysis()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\containeranalysis\v1beta1");
		}

		[Fact]
		public void Test_container()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\container\v1");
		}

		[Fact]
		public void Test_compute()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\compute\v1");
		}

		[Fact]
		public void Test_composer()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\composer\v1");
		}

		[Fact]
		public void Test_commentanalyzer()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\commentanalyzer\v1alpha1");
		}

		[Fact]
		public void Test_cloudtrace()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\cloudtrace\v2");
		}

		[Fact]
		public void Test_cloudtasks()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\cloudtasks\v2");
		}

		[Fact]
		public void Test_cloudshell()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\cloudshell\v1");
		}

		[Fact]
		public void Test_cloudsearch()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\cloudsearch\v1");
		}

		[Fact]
		public void Test_cloudscheduler()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\cloudscheduler\v1");
		}

		[Fact]
		public void Test_cloudresourcemanager()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\cloudresourcemanager\v2");
		}

		[Fact]
		public void Test_cloudprofiler()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\cloudprofiler\v2");
		}

		[Fact]
		public void Test_cloudprivatecatalogproducer()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\cloudprivatecatalogproducer\v1beta1");
		}

		[Fact]
		public void Test_cloudprivatecatalog()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\cloudprivatecatalog\v1beta1");
		}

		[Fact]
		public void Test_cloudkms()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\cloudkms\v1");
		}

		[Fact]
		public void Test_cloudiot()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\cloudiot\v1");
		}

		[Fact]
		public void Test_cloudidentity()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\cloudidentity\v1");
		}

		[Fact]
		public void Test_cloudfunctions()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\cloudfunctions\v1");
		}

		[Fact]
		public void Test_clouderrorreporting()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\clouderrorreporting\v1beta1");
		}

		[Fact]
		public void Test_clouddebugger()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\clouddebugger\v2");
		}

		[Fact]
		public void Test_cloudbuild()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\cloudbuild\v1");
		}

		[Fact]
		public void Test_cloudbilling()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\cloudbilling\v1");
		}

		[Fact]
		public void Test_cloudasset()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\cloudasset\v1");
		}

		[Fact]
		public void Test_classroom()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\classroom\v1");
		}

		[Fact]
		public void Test_civicinfo()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\civicinfo\v2");
		}

		[Fact]
		public void Test_chat()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\chat\v1");
		}

		[Fact]
		public void Test_calendar()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\calendar\v3");
		}

		[Fact]
		public void Test_books()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\books\v1");
		}

		[Fact]
		public void Test_blogger()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\blogger\v3");
		}

		[Fact]
		public void Test_binaryauthorization()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\binaryauthorization\v1");
		}

		[Fact]
		public void Test_bigtableadmin()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\bigtableadmin\v2");
		}

		[Fact]
		public void Test_bigqueryreservation()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\bigqueryreservation\v1");
		}

		[Fact]
		public void Test_bigquerydatatransfer()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\bigquerydatatransfer\v1");
		}

		[Fact]
		public void Test_bigqueryconnection()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\bigqueryconnection\v1beta1");
		}

		[Fact]
		public void Test_bigquery()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\bigquery\v2");
		}

		[Fact]
		public void Test_automl()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\automl\v1beta1");
		}

		[Fact]
		public void Test_appsactivity()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\appsactivity\v1");
		}

		[Fact]
		public void Test_appengine()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\appengine\v1");
		}

		[Fact]
		public void Test_androidpublisher()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\androidpublisher\v3");
		}

		[Fact]
		public void Test_androidmanagement()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\androidmanagement\v1");
		}

		[Fact]
		public void Test_androidenterprise()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\androidenterprise\v1");
		}

		[Fact]
		public void Test_androiddeviceprovisioning()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\androiddeviceprovisioning\v1");
		}

		[Fact]
		public void Test_analyticsreporting()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\analyticsreporting\v4");
		}

		[Fact]
		public void Test_analytics()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\analytics\v3");
		}

		[Fact]
		public void Test_alertcenter()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\alertcenter\v1beta1");
		}

		[Fact]
		public void Test_adsensehost()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\adsensehost\v4.1");
		}

		[Fact]
		public void Test_adsense()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\adsense\v1.4");
		}

		[Fact]
		public void Test_adminreports_v1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\admin\reports_v1");
		}

		[Fact]
		public void Test_admindatatransfer_v1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\admin\datatransfer_v1");
		}

		[Fact]
		public void Test_adexperiencereport()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\adexperiencereport\v1");
		}

		[Fact]
		public void Test_adexchangebuyer()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\adexchangebuyer\v1.4");
		}

		[Fact]
		public void Test_accesscontextmanager()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\accesscontextmanager\v1");
		}

		[Fact]
		public void Test_accessapproval()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\accessapproval\v1beta1");
		}

		[Fact]
		public void Test_acceleratedmobilepageurl()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\acceleratedmobilepageurl\v1");
		}

		[Fact]
		public void Test_abusiveexperiencereport()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\abusiveexperiencereport\v1");
		}

	}
}