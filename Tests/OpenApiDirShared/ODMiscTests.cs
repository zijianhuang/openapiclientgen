using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	public partial class ODMiscTests
	{
		[Fact]
		public void Test_bandsintown_com_3_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\bandsintown.com\3.0.0");
		}

		[Fact]
		public void Test_bbc_co_uk_1_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\bbc.co.uk\1.0.0");
		}

		[Fact]
		public void Test_etmdb_com_1_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\etmdb.com\1.0.0");
		}

		[Fact]
		public void Test_europeana_eu_2_3_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\europeana.eu\2.3.0");
		}

		[Fact]
		public void Test_evemarketer_com_1_0_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\evemarketer.com\1.0.1");
		}

		//[Fact]
		//public void Test_github_com_v3() it has multiple parameters sharing the same name though in path and query, however, the url template defines one.
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\github.com\v3", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		//[Fact]
		//public void Test_gitlab_com_v3() it has properties with question mask as suffix
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\gitlab.com\v3");
		//}

		[Fact]
		public void Test_globalwinescore_com_8234aab51481d37a30757d925b7f4221a659427e()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\globalwinescore.com\8234aab51481d37a30757d925b7f4221a659427e");
		}

		[Fact]
		public void Test_graphhopper_com_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\graphhopper.com\1.0");
		}

		[Fact]
		public void Test_greenpeace_org_1_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\greenpeace.org\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_gsa_gov_0_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\gsa.gov\0.1");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_AutoSuggest_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\microsoft.com\cognitiveservices-AutoSuggest\1.0");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_ComputerVision_2_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\microsoft.com\cognitiveservices-ComputerVision\2.1");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_CustomImageSearch_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\microsoft.com\cognitiveservices-CustomImageSearch\1.0");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_CustomSearch_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\microsoft.com\cognitiveservices-CustomSearch\1.0");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_EntitySearch_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\microsoft.com\cognitiveservices-EntitySearch\1.0");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_ImageSearch_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\microsoft.com\cognitiveservices-ImageSearch\1.0");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_LocalSearch_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\microsoft.com\cognitiveservices-LocalSearch\1.0");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_NewsSearch_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\microsoft.com\cognitiveservices-NewsSearch\1.0");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_Ocr_2_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\microsoft.com\cognitiveservices-Ocr\2.1");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_Prediction_1_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\microsoft.com\cognitiveservices-Prediction\1.1");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_Prediction_3_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\microsoft.com\cognitiveservices-Prediction\3.0");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_SpellCheck_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\microsoft.com\cognitiveservices-SpellCheck\1.0");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_Training_3_2()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\microsoft.com\cognitiveservices-Training\3.2");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_VideoSearch_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\microsoft.com\cognitiveservices-VideoSearch\1.0");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_VisualSearch_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\microsoft.com\cognitiveservices-VisualSearch\1.0");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_WebSearch_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\microsoft.com\cognitiveservices-WebSearch\1.0");
		}


		[Fact]
		public void Test_sportsdata_io_cbb_v3_scores_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\cbb-v3-scores\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_cbb_v3_stats_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\cbb-v3-stats\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_cfb_v3_scores_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\cfb-v3-scores\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_csgo_v3_scores_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\csgo-v3-scores\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_csgo_v3_stats_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\csgo-v3-stats\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_golf_v2_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\golf-v2\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_lol_v3_projections_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\lol-v3-projections\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_lol_v3_scores_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\lol-v3-scores\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_lol_v3_stats_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\lol-v3-stats\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_mlb_v3_play_by_play_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\mlb-v3-play-by-play\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_mlb_v3_projections_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\mlb-v3-projections\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_mlb_v3_rotoballer_articles_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\mlb-v3-rotoballer-articles\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_mlb_v3_rotoballer_premium_news_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\mlb-v3-rotoballer-premium-news\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_mlb_v3_scores_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\mlb-v3-scores\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_mlb_v3_stats_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\mlb-v3-stats\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nascar_v2_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nascar-v2\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nba_v3_play_by_play_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nba-v3-play-by-play\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nba_v3_projections_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nba-v3-projections\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nba_v3_rotoballer_articles_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nba-v3-rotoballer-articles\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nba_v3_rotoballer_premium_news_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nba-v3-rotoballer-premium-news\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nba_v3_scores_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nba-v3-scores\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nba_v3_stats_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nba-v3-stats\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nfl_v3_play_by_play_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nfl-v3-play-by-play\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nfl_v3_projections_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nfl-v3-projections\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nfl_v3_rotoballer_articles_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nfl-v3-rotoballer-articles\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nfl_v3_rotoballer_premium_news_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nfl-v3-rotoballer-premium-news\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nfl_v3_scores_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nfl-v3-scores\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nfl_v3_stats_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nfl-v3-stats\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nhl_v3_play_by_play_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nhl-v3-play-by-play\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nhl_v3_projections_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nhl-v3-projections\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nhl_v3_scores_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nhl-v3-scores\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_nhl_v3_stats_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\nhl-v3-stats\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_soccer_v3_projections_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\soccer-v3-projections\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_soccer_v3_scores_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\soccer-v3-scores\1.0");
		}

		[Fact]
		public void Test_sportsdata_io_soccer_v3_stats_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\sportsdata.io\soccer-v3-stats\1.0");
		}



		[Fact]
		public void Test_spotify_com_v1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\spotify.com\v1", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_squareup_com_2_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\squareup.com\2.0");
		}

		[Fact]
		public void Test_staging_ecotaco_com_1_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\staging-ecotaco.com\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_statsocial_com_1_0_0() very strange design overall
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\statsocial.com\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		//[Fact]
		//public void Test_stoplight_io_api_v1() strange design with empty property name
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\stoplight.io\api-v1");
		//}

		//[Fact]
		//public void Test_storecove_com_2_0_1() strange casual enum design in paymentMeansCode with empty enum member anem. NSwag translate it to 'Empty". I am not sure if I should support such design?
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\storecove.com\2.0.1");
		//}

		[Fact]
		public void Test_stormglass_io_1_0_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\stormglass.io\1.0.1");
		}

		//[Fact]
		//public void Test_stripe_com_2019_12_03()
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\stripe.com\2019-12-03");
		//}

		[Fact]
		public void Test_surrey_ca_open511_0_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\surrey.ca\open511\0.1", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_surrey_ca_trafficloops_0_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\surrey.ca\trafficloops\0.1");
		}

		[Fact]
		public void Test_swagger_io_generator_2_4_11()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\swagger.io\generator\2.4.11");
		}

		[Fact]
		public void Test_swaggerhub_com_1_0_47()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\swaggerhub.com\1.0.47");
		}

		[Fact]
		public void Test_synq_fm_1_9_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\synq.fm\1.9.1");
		}

		//[Fact]
		//public void Test_taggun_io_1_2_221() strange Model%203
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\taggun.io\1.2.221");
		//}

		[Fact]
		public void Test_taxamo_com_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\taxamo.com\1");
		}

		[Fact]
		public void Test_taxrates_io_3_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\taxrates.io\3.0");
		}

		[Fact]
		public void Test_text2data_org_v3_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\text2data.org\v3.1");
		}

		//[Fact]
		//public void Test_tfl_gov_uk_v1() it seems /StopPoint/Search has a duplicate : /StopPoint/Search/{query}
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\tfl.gov.uk\v1", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		[Fact]
		public void Test_thenounproject_com_1_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\thenounproject.com\1.0.0");
		}

		[Fact]
		public void Test_thesmsworks_co_uk_1_3_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\thesmsworks.co.uk\1.3.0");
		}

		[Fact]
		public void Test_thetvdb_com_2_2_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\thetvdb.com\2.2.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_tinyuid_com_1_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\tinyuid.com\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_traccar_org_4_6()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\traccar.org\4.6", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_tradematic_com_1_0_2()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\tradematic.com\1.0.2", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_transavia_com_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\transavia.com\1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_transitfeeds_com_1_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\transitfeeds.com\1.0.0");
		}

		[Fact]
		public void Test_trashnothing_com_1_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\trashnothing.com\1.1");
		}

		//[Fact]
		//public void Test_trello_com_1_0() prefs_background and prefs/background in Boards, not looking good
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\trello.com\1.0");
		//}

		//[Fact]
		//public void Test_turbinelabs_io_1_0() poor inheritence design -- Domain : DomainCreate
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\turbinelabs.io\1.0");
		//}

		[Fact]
		public void Test_tvmaze_com_1_0()//to be resolved
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\tvmaze.com\1.0", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "Misc",
				ContainerNameStrategy = ContainerNameStrategy.Path,
				ActionNameStrategy = ActionNameStrategy.MethodQueryParameters,
				GenerateBothAsyncAndSync = false,
				DecorateDataModelWithSerializable = true,
				UseEnsureSuccessStatusCodeEx = true,
				DataAnnotationsEnabled = true,
				DataAnnotationsToComments = true,
				HandleHttpRequestHeaders = true,
			});
		}

		[Fact]
		public void Test_twilio_com_2010_04_01() //pretty complex path and query
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\twilio.com\2010-04-01", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_twinehealth_com_v7_78_1() [] reserved characters as part of the parameter names in http query?  https://tools.ietf.org/html/rfc3986
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\twinehealth.com\v7.78.1");
		//}

		[Fact]
		public void Test_twitter_com_legacy_1_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\twitter.com\legacy\1.1");
		}

		//[Fact]
		//public void Test_tyk_com_1_9() casual enum contains empty member
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\tyk.com\1.9", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		[Fact]
		public void Test_uebermaps_com_2_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\uebermaps.com\2.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_vatapi_com_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\vatapi.com\1");
		}

		[Fact]
		public void Test_versioneye_com_2_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\versioneye.com\2.0");
		}

		[Fact]
		public void Test_vestorly_com_1_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\vestorly.com\1.0.0");
		}

		//[Fact]
		//public void Test_victorops_com_0_0_3() using what older than Swagger 2.0?
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\victorops.com\0.0.3", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		[Fact]
		public void Test_visagecloud_com_1_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\visagecloud.com\1.1");
		}

		[Fact]
		public void Test_visiblethread_com_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\visiblethread.com\1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_vocadb_net_v1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\vocadb.net\v1", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_voodoomfg_com_2_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\voodoomfg.com\2.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_waag_org_v1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\waag.org\v1");
		}

		[Fact]
		public void Test_walmart_com_inventory_3_0_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\walmart.com\inventory\3.0.1");
		}

		[Fact]
		public void Test_walmart_com_item_3_0_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\walmart.com\item\3.0.1");
		}

		[Fact]
		public void Test_walmart_com_order_3_0_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\walmart.com\order\3.0.1");
		}

		[Fact]
		public void Test_walmart_com_price_3_0_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\walmart.com\price\3.0.1");
		}

		//[Fact]
		//public void Test_warwick_ac_uk_enterobase_v2_0()// having parameter schema in path and query of api/v2.0/{database}/{scheme}/loci looks ood. NSwag renames them to schemaQuery and schemaPath. I am not sure if I should tolerate such bad design of Swagger definition.
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\warwick.ac.uk\enterobase\v2.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		//[Fact]
		//public void Test_watchful_li_1_0_0() // casual enum contains empty member
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\watchful.li\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		[Fact]
		public void Test_waterlinked_com_1_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\waterlinked.com\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_wavecell_com_v1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\wavecell.com\v1");
		}

		[Fact]
		public void Test_wealthport_com_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\wealthport.com\1.0");
		}

		//[Fact]
		//public void Test_weatherbit_io_2_0_0() the definitions for parameters mess up path and query. bulk/history/daily ...
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\weatherbit.io\2.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		//}

		[Fact]
		public void Test_weber_gesamtausgabe_de_1_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\weber-gesamtausgabe.de\1.0.0");
		}

		[Fact]
		public void Test_wedpax_com_v1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\wedpax.com\v1", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_whapi_com_accounts_2_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\whapi.com\accounts\2.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_whapi_com_bets_2_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\whapi.com\bets\2.0.0");
		}

		[Fact]
		public void Test_whapi_com_locations_2_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\whapi.com\locations\2.0");
		}

		[Fact]
		public void Test_whapi_com_numbers_2_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\whapi.com\numbers\2.0");
		}

		[Fact]
		public void Test_whapi_com_sessions_2_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\whapi.com\sessions\2.0.0");
		}

		[Fact]
		public void Test_whapi_com_sportsdata_2()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\whapi.com\sportsdata\2");
		}

		[Fact]
		public void Test_who_hosts_this_com_0_0_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\who-hosts-this.com\0.0.1", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_wikimedia_org_1_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\wikimedia.org\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_windows_net_batch_BatchService_2015_12_01_2_2()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\windows.net\batch-BatchService\2015-12-01.2.2");
		}

		[Fact]
		public void Test_windows_net_batch_BatchService_2016_02_01_3_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\windows.net\batch-BatchService\2016-02-01.3.0");
		}

		[Fact]
		public void Test_windows_net_batch_BatchService_2016_07_01_3_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\windows.net\batch-BatchService\2016-07-01.3.1");
		}

		[Fact]
		public void Test_windows_net_batch_BatchService_2017_01_01_4_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\windows.net\batch-BatchService\2017-01-01.4.0");
		}

		[Fact]
		public void Test_windows_net_batch_BatchService_2017_05_01_5_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\windows.net\batch-BatchService\2017-05-01.5.0");
		}

		[Fact]
		public void Test_windows_net_batch_BatchService_2017_06_01_5_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\windows.net\batch-BatchService\2017-06-01.5.1");
		}

		[Fact]
		public void Test_windows_net_batch_BatchService_2017_09_01_6_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\windows.net\batch-BatchService\2017-09-01.6.0");
		}

		[Fact]
		public void Test_windows_net_batch_BatchService_2018_03_01_6_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\windows.net\batch-BatchService\2018-03-01.6.1");
		}

		[Fact]
		public void Test_windows_net_batch_BatchService_2018_08_01_7_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\windows.net\batch-BatchService\2018-08-01.7.0");
		}

		//[Fact]
		//public void Test_windows_net_graphrbac_1_6() bool as enum
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\windows.net\graphrbac\1.6");
		//}

		[Fact]
		public void Test_winsms_co_za_1_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\winsms.co.za\1.0.0");
		}

		[Fact]
		public void Test_wmata_com_bus_realtime_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\wmata.com\bus-realtime\1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_wmata_com_bus_route_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\wmata.com\bus-route\1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_wmata_com_incidents_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\wmata.com\incidents\1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_wmata_com_rail_realtime_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\wmata.com\rail-realtime\1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_wmata_com_rail_station_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\wmata.com\rail-station\1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_wordassociations_net_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\wordassociations.net\1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_wordnik_com_4_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\wordnik.com\4.0");
		}

		[Fact]
		public void Test_wowza_com_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\wowza.com\1");
		}

		[Fact]
		public void Test_wso2apistore_com_transform_1_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\wso2apistore.com\transform\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_xero_com_2_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\xero.com\2.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_youneedabudget_com_1_0_0() nswag crash too
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\youneedabudget.com\1.0.0");
		//}

		[Fact]
		public void Test_yunbi_com_v2()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\yunbi.com\v2");
		}

		[Fact]
		public void Test_zalando_com_v1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\zalando.com\v1.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_zappiti_com_4_15_174()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\zappiti.com\4.15.174");
		}

		[Fact]
		public void Test_zenoti_com_1_0_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\zenoti.com\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]
		//public void Test_zoom_us_2_0_0() // RegistrantStatus should have maxLength rather than maximum for the  array
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\zoom.us\2.0.0");
		//}

		[Fact]
		public void Test_zoomconnect_com_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\zoomconnect.com\1", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}




	}
}
