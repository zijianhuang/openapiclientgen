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
		public void Test_driveactivity()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\driveactivity\v2");
		}

		[Fact]
		public void Test_drive()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\drive\v3");
		}

		[Fact]
		public void Test_doubleclicksearch()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\doubleclicksearch\v2");
		}

		[Fact]
		public void Test_doubleclickbidmanager()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\doubleclickbidmanager\v1");
		}

		[Fact]
		public void Test_domainsrdap()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\domainsrdap\v1");
		}

		[Fact]
		public void Test_docs()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\docs\v1");
		}

		[Fact]
		public void Test_dns()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\dns\v2beta1");
		}

		[Fact]
		public void Test_dlp()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\dlp\v2");
		}

		[Fact]
		public void Test_discovery()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\discovery\v1");
		}

		[Fact]
		public void Test_digitalassetlinks()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\digitalassetlinks\v1");
		}

		[Fact]
		public void Test_dfareporting()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\dfareporting\v3.3");
		}

		[Fact]
		public void Test_deploymentmanager()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\deploymentmanager\v2");
		}

		[Fact]
		public void Test_datastore()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\datastore\v1");
		}

		[Fact]
		public void Test_dataproc()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\dataproc\v1");
		}

		[Fact]
		public void Test_datafusion()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\datafusion\v1beta1");
		}

		[Fact]
		public void Test_dataflow()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\dataflow\v1b3");
		}

		[Fact]
		public void Test_customsearch()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\customsearch\v1");
		}

		[Fact]
		public void Test_content()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\content\v2");
		}

		[Fact]
		public void Test_containeranalysis()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\containeranalysis\v1beta1");
		}

		[Fact]
		public void Test_container()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\container\v1");
		}

		[Fact]
		public void Test_compute()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\compute\v1");
		}

		[Fact]
		public void Test_composer()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\composer\v1");
		}

		[Fact]
		public void Test_commentanalyzer()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\commentanalyzer\v1alpha1");
		}

		[Fact]
		public void Test_cloudtrace()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\cloudtrace\v2");
		}

		[Fact]
		public void Test_cloudtasks()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\cloudtasks\v2");
		}

		[Fact]
		public void Test_cloudshell()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\cloudshell\v1");
		}

		[Fact]
		public void Test_cloudsearch()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\cloudsearch\v1");
		}

		[Fact]
		public void Test_cloudscheduler()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\cloudscheduler\v1");
		}

		[Fact]
		public void Test_cloudresourcemanager()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\cloudresourcemanager\v2");
		}

		[Fact]
		public void Test_cloudprofiler()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\cloudprofiler\v2");
		}

		[Fact]
		public void Test_cloudprivatecatalogproducer()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\cloudprivatecatalogproducer\v1beta1");
		}

		[Fact]
		public void Test_cloudprivatecatalog()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\cloudprivatecatalog\v1beta1");
		}

		[Fact]
		public void Test_cloudkms()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\cloudkms\v1");
		}

		[Fact]
		public void Test_cloudiot()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\cloudiot\v1");
		}

		[Fact]
		public void Test_cloudidentity()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\cloudidentity\v1");
		}

		[Fact]
		public void Test_cloudfunctions()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\cloudfunctions\v1");
		}

		[Fact]
		public void Test_clouderrorreporting()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\clouderrorreporting\v1beta1");
		}

		[Fact]
		public void Test_clouddebugger()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\clouddebugger\v2");
		}

		[Fact]
		public void Test_cloudbuild()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\cloudbuild\v1");
		}

		[Fact]
		public void Test_cloudbilling()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\cloudbilling\v1");
		}

		[Fact]
		public void Test_cloudasset()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\cloudasset\v1");
		}

		[Fact]
		public void Test_classroom()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\classroom\v1");
		}

		[Fact]
		public void Test_civicinfo()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\civicinfo\v2");
		}

		[Fact]
		public void Test_chat()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\chat\v1");
		}

		[Fact]
		public void Test_calendar()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\calendar\v3");
		}

		[Fact]
		public void Test_books()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\books\v1");
		}

		[Fact]
		public void Test_blogger()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\blogger\v3");
		}

		[Fact]
		public void Test_binaryauthorization()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\binaryauthorization\v1");
		}

		[Fact]
		public void Test_bigtableadmin()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\bigtableadmin\v2");
		}

		[Fact]
		public void Test_bigqueryreservation()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\bigqueryreservation\v1");
		}

		[Fact]
		public void Test_bigquerydatatransfer()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\bigquerydatatransfer\v1");
		}

		[Fact]
		public void Test_bigqueryconnection()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\bigqueryconnection\v1beta1");
		}

		[Fact]
		public void Test_bigquery()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\bigquery\v2");
		}

		[Fact]
		public void Test_automl()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\automl\v1beta1");
		}

		[Fact]
		public void Test_appsactivity()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\appsactivity\v1");
		}

		[Fact]
		public void Test_appengine()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\appengine\v1");
		}

		[Fact]
		public void Test_androidpublisher()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\androidpublisher\v3");
		}

		[Fact]
		public void Test_androidmanagement()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\androidmanagement\v1");
		}

		[Fact]
		public void Test_androidenterprise()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\androidenterprise\v1");
		}

		[Fact]
		public void Test_androiddeviceprovisioning()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\androiddeviceprovisioning\v1");
		}

		[Fact]
		public void Test_analyticsreporting()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\analyticsreporting\v4");
		}

		[Fact]
		public void Test_analytics()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\analytics\v3");
		}

		[Fact]
		public void Test_alertcenter()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\alertcenter\v1beta1");
		}

		[Fact]
		public void Test_adsensehost()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\adsensehost\v4.1");
		}

		[Fact]
		public void Test_adsense()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\adsense\v1.4");
		}

		[Fact]
		public void Test_adminreports_v1()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\admin\reports_v1");
		}

		[Fact]
		public void Test_admindatatransfer_v1()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\admin\datatransfer_v1");
		}

		[Fact]
		public void Test_adexperiencereport()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\adexperiencereport\v1");
		}

		[Fact]
		public void Test_adexchangebuyer()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\adexchangebuyer\v1.4");
		}

		[Fact]
		public void Test_accesscontextmanager()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\accesscontextmanager\v1");
		}

		[Fact]
		public void Test_accessapproval()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\accessapproval\v1beta1");
		}

		[Fact]
		public void Test_acceleratedmobilepageurl()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\acceleratedmobilepageurl\v1");
		}

		[Fact]
		public void Test_abusiveexperiencereport()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\abusiveexperiencereport\v1");
		}

	}
}