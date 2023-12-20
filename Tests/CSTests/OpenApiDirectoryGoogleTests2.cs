using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	public class OpenapiDirectoryGoogleTests2
	{
		readonly CSharpTestHelper helper;
		public OpenapiDirectoryGoogleTests2(ITestOutputHelper output)
		{
			helper = new CSharpTestHelper(output);
		}

		void GenerateFromOpenApiAndBuild(string filePath, Settings mySettings = null)
		{
			Settings settings = mySettings ?? CodeGenSettings.Default;
			helper.GenerateFromOpenApiAndBuild(filePath, settings);
		}

		[Fact]
		public void Test_youtubeAnalytics()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\youtubeAnalytics\v2");
		}

		[Fact]
		public void Test_youtubereporting()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\youtubereporting\v1");
		}

		[Fact]
		public void Test_youtube()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\youtube\v3");
		}

		[Fact]
		public void Test_websecurityscanner()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\websecurityscanner\v1");
		}

		[Fact]
		public void Test_webmasters()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\webmasters\v3");
		}

		[Fact]
		public void Test_webfonts()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\webfonts\v1");
		}

		[Fact]
		public void Test_vision()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\vision\v1");
		}

		[Fact]
		public void Test_videointelligence()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\videointelligence\v1");
		}

		[Fact]
		public void Test_verifiedaccess()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\verifiedaccess\v1");
		}

		[Fact]
		public void Test_vault()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\vault\v1");
		}

		[Fact]
		public void Test_translate()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\translate\v2");
		}

		[Fact]
		public void Test_tpu()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\tpu\v1");
		}

		[Fact]
		public void Test_texttospeech()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\texttospeech\v1");
		}

		[Fact]
		public void Test_testing()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\testing\v1");
		}

		[Fact]
		public void Test_tasks()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\tasks\v1");
		}

		[Fact]
		public void Test_tagmanager()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\tagmanager\v1");
		}

		[Fact]
		public void Test_streetviewpublish()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\streetviewpublish\v1");
		}

		[Fact]
		public void Test_storagetransfer()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\storagetransfer\v1");
		}

		[Fact]
		public void Test_storage()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\storage\v1");
		}

		[Fact]
		public void Test_sqladmin()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\sqladmin\v1beta4");
		}

		[Fact]
		public void Test_speech()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\speech\v1");
		}

		[Fact]
		public void Test_spanner()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\spanner\v1");
		}

		[Fact]
		public void Test_sourcerepo()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\sourcerepo\v1");
		}

		[Fact]
		public void Test_slides()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\slides\v1");
		}

		[Fact]
		public void Test_siteVerification()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\siteVerification\v1");
		}

		[Fact]
		public void Test_sheets()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\sheets\v4");
		}

		[Fact]
		public void Test_serviceusage()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\serviceusage\v1");
		}

		[Fact]
		public void Test_servicenetworking()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\servicenetworking\v1");
		}

		[Fact]
		public void Test_servicemanagement()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\servicemanagement\v1");
		}

		[Fact]
		public void Test_servicecontrol()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\servicecontrol\v1");
		}

		[Fact]
		public void Test_serviceconsumermanagement()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\serviceconsumermanagement\v1");
		}

		[Fact]
		public void Test_servicebroker()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\servicebroker\v1");
		}

		[Fact]
		public void Test_securitycenter()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\securitycenter\v1");
		}

		[Fact]
		public void Test_searchconsole()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\searchconsole\v1");
		}

		[Fact]
		public void Test_script()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\script\v1");
		}

		[Fact]
		public void Test_safebrowsing()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\safebrowsing\v4");
		}

		[Fact]
		public void Test_runtimeconfig()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\runtimeconfig\v1");
		}

		[Fact]
		public void Test_run()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\run\v1");
		}

		[Fact]
		public void Test_reseller()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\reseller\v1");
		}

		[Fact]
		public void Test_replicapool()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\replicapool\v1beta1");
		}

		[Fact]
		public void Test_remotebuildexecution()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\remotebuildexecution\v1");
		}

		[Fact]
		public void Test_redis()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\redis\v1");
		}

		[Fact]
		public void Test_recommender()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\recommender\v1beta1");
		}

		[Fact]
		public void Test_pubsub()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\pubsub\v1");
		}

		[Fact]
		public void Test_proximitybeacon()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\proximitybeacon\v1beta1");
		}

		[Fact]
		public void Test_poly()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\poly\v1");
		}

		[Fact]
		public void Test_policytroubleshooter()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\policytroubleshooter\v1beta");
		}

		[Fact]
		public void Test_playcustomapp()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\playcustomapp\v1");
		}

		[Fact]
		public void Test_people()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\people\v1");
		}

		[Fact]
		public void Test_pagespeedonline()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\pagespeedonline\v5");
		}

		[Fact]
		public void Test_oslogin()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\oslogin\v1");
		}

		[Fact]
		public void Test_oauth2()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\oauth2\v2");
		}

		[Fact]
		public void Test_monitoring()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\monitoring\v3");
		}

		[Fact]
		public void Test_mirror()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\mirror\v1");
		}

		[Fact]
		public void Test_manufacturers()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\manufacturers\v1");
		}

		[Fact]
		public void Test_logging()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\logging\v2");
		}

		[Fact]
		public void Test_licensing()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\licensing\v1");
		}

		[Fact]
		public void Test_libraryagent()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\libraryagent\v1");
		}

		[Fact]
		public void Test_language()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\language\v1");
		}

		//[Fact]
		//public void Test_kgsearch() very short. And SearchResponse is having @context
		//{
		//	helper.GenerateAndAssert(@"..\..\..\..\openapi-directory\APIs\googleapis.com\kgsearch\v1");
		//}

		[Fact]
		public void Test_jobs()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\jobs\v3");
		}

		[Fact]
		public void Test_indexing()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\indexing\v3");
		}

		[Fact]
		public void Test_identitytoolkit()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\identitytoolkit\v3");
		}

		[Fact]
		public void Test_iap()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\iap\v1");
		}

		[Fact]
		public void Test_iamcredentials()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\iamcredentials\v1");
		}

		[Fact]
		public void Test_iam()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\iam\v1");
		}

		[Fact]
		public void Test_homegraph()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\homegraph\v1");
		}

		[Fact]
		public void Test_healthcare()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\healthcare\v1beta1");
		}

		[Fact]
		public void Test_groupssettings()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\groupssettings\v1");
		}

		[Fact]
		public void Test_groupsmigration()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\groupsmigration\v1");
		}

		[Fact]
		public void Test_gmail()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\gmail\v1");
		}

		[Fact]
		public void Test_genomics()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\genomics\v1");
		}

		[Fact]
		public void Test_gamesManagement()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\gamesManagement\v1management");
		}

		[Fact]
		public void Test_gamesConfiguration()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\gamesConfiguration\v1configuration");
		}

		[Fact]
		public void Test_games()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\games\v1");
		}

		[Fact]
		public void Test_fitness()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\fitness\v1");
		}

		[Fact]
		public void Test_firestore()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\firestore\v1");
		}

		[Fact]
		public void Test_firebaserules()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\firebaserules\v1");
		}

		[Fact]
		public void Test_firebasehosting()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\firebasehosting\v1beta1");
		}

		[Fact]
		public void Test_firebasedynamiclinks()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\firebasedynamiclinks\v1");
		}

		[Fact]
		public void Test_file()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\file\v1");
		}

		[Fact]
		public void Test_fcm()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\fcm\v1");
		}

		[Fact]
		public void Test_factchecktools()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\googleapis.com\factchecktools\v1alpha1");
		}


	}
}