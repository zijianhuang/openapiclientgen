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

		[Fact]
		public void Test_youtubeAnalytics()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\youtubeAnalytics\v2");
		}

		[Fact]
		public void Test_youtubereporting()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\youtubereporting\v1");
		}

		[Fact]
		public void Test_youtube()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\youtube\v3");
		}

		[Fact]
		public void Test_websecurityscanner()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\websecurityscanner\v1");
		}

		[Fact]
		public void Test_webmasters()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\webmasters\v3");
		}

		[Fact]
		public void Test_webfonts()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\webfonts\v1");
		}

		[Fact]
		public void Test_vision()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\vision\v1");
		}

		[Fact]
		public void Test_videointelligence()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\videointelligence\v1");
		}

		[Fact]
		public void Test_verifiedaccess()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\verifiedaccess\v1");
		}

		[Fact]
		public void Test_vault()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\vault\v1");
		}

		[Fact]
		public void Test_translate()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\translate\v2");
		}

		[Fact]
		public void Test_tpu()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\tpu\v1");
		}

		[Fact]
		public void Test_texttospeech()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\texttospeech\v1");
		}

		[Fact]
		public void Test_testing()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\testing\v1");
		}

		[Fact]
		public void Test_tasks()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\tasks\v1");
		}

		[Fact]
		public void Test_tagmanager()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\tagmanager\v1");
		}

		[Fact]
		public void Test_streetviewpublish()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\streetviewpublish\v1");
		}

		[Fact]
		public void Test_storagetransfer()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\storagetransfer\v1");
		}

		[Fact]
		public void Test_storage()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\storage\v1");
		}

		[Fact]
		public void Test_sqladmin()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\sqladmin\v1beta4");
		}

		[Fact]
		public void Test_speech()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\speech\v1");
		}

		[Fact]
		public void Test_spanner()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\spanner\v1");
		}

		[Fact]
		public void Test_sourcerepo()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\sourcerepo\v1");
		}

		[Fact]
		public void Test_slides()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\slides\v1");
		}

		[Fact]
		public void Test_siteVerification()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\siteVerification\v1");
		}

		[Fact]
		public void Test_sheets()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\sheets\v4");
		}

		[Fact]
		public void Test_serviceusage()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\serviceusage\v1");
		}

		[Fact]
		public void Test_servicenetworking()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\servicenetworking\v1");
		}

		[Fact]
		public void Test_servicemanagement()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\servicemanagement\v1");
		}

		[Fact]
		public void Test_servicecontrol()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\servicecontrol\v1");
		}

		[Fact]
		public void Test_serviceconsumermanagement()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\serviceconsumermanagement\v1");
		}

		[Fact]
		public void Test_servicebroker()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\servicebroker\v1");
		}

		[Fact]
		public void Test_securitycenter()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\securitycenter\v1");
		}

		[Fact]
		public void Test_searchconsole()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\searchconsole\v1");
		}

		[Fact]
		public void Test_script()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\script\v1");
		}

		[Fact]
		public void Test_safebrowsing()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\safebrowsing\v4");
		}

		[Fact]
		public void Test_runtimeconfig()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\runtimeconfig\v1");
		}

		[Fact]
		public void Test_run()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\run\v1");
		}

		[Fact]
		public void Test_reseller()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\reseller\v1");
		}

		[Fact]
		public void Test_replicapool()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\replicapool\v1beta1");
		}

		[Fact]
		public void Test_remotebuildexecution()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\remotebuildexecution\v1");
		}

		[Fact]
		public void Test_redis()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\redis\v1");
		}

		[Fact]
		public void Test_recommender()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\recommender\v1beta1");
		}

		[Fact]
		public void Test_pubsub()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\pubsub\v1");
		}

		[Fact]
		public void Test_proximitybeacon()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\proximitybeacon\v1beta1");
		}

		[Fact]
		public void Test_poly()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\poly\v1");
		}

		[Fact]
		public void Test_policytroubleshooter()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\policytroubleshooter\v1beta");
		}

		[Fact]
		public void Test_playcustomapp()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\playcustomapp\v1");
		}

		[Fact]
		public void Test_people()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\people\v1");
		}

		[Fact]
		public void Test_pagespeedonline()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\pagespeedonline\v5");
		}

		[Fact]
		public void Test_oslogin()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\oslogin\v1");
		}

		[Fact]
		public void Test_oauth2()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\oauth2\v2");
		}

		[Fact]
		public void Test_monitoring()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\monitoring\v3");
		}

		[Fact]
		public void Test_mirror()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\mirror\v1");
		}

		[Fact]
		public void Test_manufacturers()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\manufacturers\v1");
		}

		[Fact]
		public void Test_logging()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\logging\v2");
		}

		[Fact]
		public void Test_licensing()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\licensing\v1");
		}

		[Fact]
		public void Test_libraryagent()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\libraryagent\v1");
		}

		[Fact]
		public void Test_language()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\language\v1");
		}

		//[Fact]
		//public void Test_kgsearch() very short. And SearchResponse is having @context
		//{
		//	helper.GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\kgsearch\v1");
		//}

		[Fact]
		public void Test_jobs()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\jobs\v3");
		}

		[Fact]
		public void Test_indexing()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\indexing\v3");
		}

		[Fact]
		public void Test_identitytoolkit()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\identitytoolkit\v3");
		}

		[Fact]
		public void Test_iap()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\iap\v1");
		}

		[Fact]
		public void Test_iamcredentials()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\iamcredentials\v1");
		}

		[Fact]
		public void Test_iam()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\iam\v1");
		}

		[Fact]
		public void Test_homegraph()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\homegraph\v1");
		}

		[Fact]
		public void Test_healthcare()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\healthcare\v1beta1");
		}

		[Fact]
		public void Test_groupssettings()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\groupssettings\v1");
		}

		[Fact]
		public void Test_groupsmigration()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\groupsmigration\v1");
		}

		[Fact]
		public void Test_gmail()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\gmail\v1");
		}

		[Fact]
		public void Test_genomics()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\genomics\v1");
		}

		[Fact]
		public void Test_gamesManagement()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\gamesManagement\v1management");
		}

		[Fact]
		public void Test_gamesConfiguration()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\gamesConfiguration\v1configuration");
		}

		[Fact]
		public void Test_games()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\games\v1");
		}

		[Fact]
		public void Test_fitness()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\fitness\v1");
		}

		[Fact]
		public void Test_firestore()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\firestore\v1");
		}

		[Fact]
		public void Test_firebaserules()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\firebaserules\v1");
		}

		[Fact]
		public void Test_firebasehosting()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\firebasehosting\v1beta1");
		}

		[Fact]
		public void Test_firebasedynamiclinks()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\firebasedynamiclinks\v1");
		}

		[Fact]
		public void Test_file()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\file\v1");
		}

		[Fact]
		public void Test_fcm()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\fcm\v1");
		}

		[Fact]
		public void Test_factchecktools()
		{
			helper.CreateClientApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\googleapis.com\factchecktools\v1alpha1");
		}


	}
}