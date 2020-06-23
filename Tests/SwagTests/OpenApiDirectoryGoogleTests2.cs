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
	public class OpenapiDirectoryGoogleTests2
	{

		readonly ITestOutputHelper output;
		public OpenapiDirectoryGoogleTests2(ITestOutputHelper output)
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

		[Fact]
		public void Test_serviceconsumermanagement()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\serviceconsumermanagement\v1");
		}

		[Fact]
		public void Test_servicebroker()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\servicebroker\v1");
		}

		[Fact]
		public void Test_securitycenter()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\securitycenter\v1");
		}

		[Fact]
		public void Test_searchconsole()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\searchconsole\v1");
		}

		[Fact]
		public void Test_script()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\script\v1");
		}

		[Fact]
		public void Test_safebrowsing()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\safebrowsing\v4");
		}

		[Fact]
		public void Test_runtimeconfig()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\runtimeconfig\v1");
		}

		[Fact]
		public void Test_run()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\run\v1");
		}

		[Fact]
		public void Test_reseller()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\reseller\v1");
		}

		[Fact]
		public void Test_replicapool()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\replicapool\v1beta1");
		}

		[Fact]
		public void Test_remotebuildexecution()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\remotebuildexecution\v1");
		}

		[Fact]
		public void Test_redis()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\redis\v1");
		}

		[Fact]
		public void Test_recommender()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\recommender\v1beta1");
		}

		[Fact]
		public void Test_pubsub()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\pubsub\v1");
		}

		[Fact]
		public void Test_proximitybeacon()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\proximitybeacon\v1beta1");
		}

		[Fact]
		public void Test_poly()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\poly\v1");
		}

		[Fact]
		public void Test_policytroubleshooter()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\policytroubleshooter\v1beta");
		}

		[Fact]
		public void Test_playcustomapp()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\playcustomapp\v1");
		}

		[Fact]
		public void Test_people()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\people\v1");
		}

		[Fact]
		public void Test_pagespeedonline()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\pagespeedonline\v5");
		}

		[Fact]
		public void Test_oslogin()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\oslogin\v1");
		}

		[Fact]
		public void Test_oauth2()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\oauth2\v2");
		}

		[Fact]
		public void Test_monitoring()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\monitoring\v3");
		}

		[Fact]
		public void Test_mirror()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\mirror\v1");
		}

		[Fact]
		public void Test_manufacturers()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\manufacturers\v1");
		}

		[Fact]
		public void Test_logging()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\logging\v2");
		}

		[Fact]
		public void Test_licensing()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\licensing\v1");
		}

		[Fact]
		public void Test_libraryagent()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\libraryagent\v1");
		}

		[Fact]
		public void Test_language()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\language\v1");
		}

		//[Fact]
		//public void Test_kgsearch() very short. And SearchResponse is having @context
		//{
		//	GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\kgsearch\v1");
		//}

		[Fact]
		public void Test_jobs()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\jobs\v3");
		}

		[Fact]
		public void Test_indexing()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\indexing\v3");
		}

		[Fact]
		public void Test_identitytoolkit()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\identitytoolkit\v3");
		}

		[Fact]
		public void Test_iap()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\iap\v1");
		}

		[Fact]
		public void Test_iamcredentials()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\iamcredentials\v1");
		}

		[Fact]
		public void Test_iam()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\iam\v1");
		}

		[Fact]
		public void Test_homegraph()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\homegraph\v1");
		}

		[Fact]
		public void Test_healthcare()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\healthcare\v1beta1");
		}

		[Fact]
		public void Test_groupssettings()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\groupssettings\v1");
		}

		[Fact]
		public void Test_groupsmigration()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\groupsmigration\v1");
		}

		[Fact]
		public void Test_gmail()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\gmail\v1");
		}

		[Fact]
		public void Test_genomics()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\genomics\v1");
		}

		[Fact]
		public void Test_gamesManagement()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\gamesManagement\v1management");
		}

		[Fact]
		public void Test_gamesConfiguration()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\gamesConfiguration\v1configuration");
		}

		[Fact]
		public void Test_games()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\games\v1");
		}

		[Fact]
		public void Test_fitness()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\fitness\v1");
		}

		[Fact]
		public void Test_firestore()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\firestore\v1");
		}

		[Fact]
		public void Test_firebaserules()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\firebaserules\v1");
		}

		[Fact]
		public void Test_firebasehosting()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\firebasehosting\v1beta1");
		}

		[Fact]
		public void Test_firebasedynamiclinks()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\firebasedynamiclinks\v1");
		}

		[Fact]
		public void Test_file()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\file\v1");
		}

		[Fact]
		public void Test_fcm()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\fcm\v1");
		}

		[Fact]
		public void Test_factchecktools()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\factchecktools\v1alpha1");
		}


	}
}