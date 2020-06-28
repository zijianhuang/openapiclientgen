using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	public class OpenapiDirectoryAwsTests2
	{
		readonly CSharpTestHelper helper;
		public OpenapiDirectoryAwsTests2(ITestOutputHelper output)
		{
			helper = new CSharpTestHelper(output);
		}

		[Fact]
		public void Test_kafka()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kafka\2018-11-14");
		}

		[Fact]
		public void Test_kendra()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kendra\2019-02-03");
		}

		[Fact]
		public void Test_kinesis()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kinesis\2013-12-02");
		}

		[Fact]
		public void Test_kinesisvideoarchivedmedia()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kinesis-video-archived-media\2017-09-30");
		}

		[Fact]
		public void Test_kinesisvideomedia()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kinesis-video-media\2017-09-30");
		}

		[Fact]
		public void Test_kinesisvideosignaling()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kinesis-video-signaling\2019-12-04");
		}

		[Fact]
		public void Test_kinesisanalytics()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kinesisanalytics\2015-08-14");
		}

		[Fact]
		public void Test_kinesisanalyticsv2()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kinesisanalyticsv2\2018-05-23");
		}

		[Fact]
		public void Test_kinesisvideo()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kinesisvideo\2017-09-30");
		}

		[Fact]
		public void Test_kms()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kms\2014-11-01");
		}

		[Fact]
		public void Test_lakeformation()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\lakeformation\2017-03-31");
		}

		[Fact]
		public void Test_lambda()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\lambda\2015-03-31");
		}

		[Fact]
		public void Test_lexmodels()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\lex-models\2017-04-19");
		}

		[Fact]
		public void Test_licensemanager()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\license-manager\2018-08-01");
		}

		[Fact]
		public void Test_lightsail()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\lightsail\2016-11-28");
		}

		[Fact]
		public void Test_logs()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\logs\2014-03-28");
		}

		[Fact]
		public void Test_machinelearning()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\machinelearning\2014-12-12");
		}

		[Fact]
		public void Test_macie2()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\macie2\2020-01-01");
		}

		[Fact]
		public void Test_managedblockchain()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\managedblockchain\2018-09-24");
		}

		[Fact]
		public void Test_marketplacecatalog()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\marketplace-catalog\2018-09-17");
		}

		[Fact]
		public void Test_marketplacecommerceanalytics()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\marketplacecommerceanalytics\2015-07-01");
		}

		[Fact]
		public void Test_mediaconnect()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mediaconnect\2018-11-14");
		}

		[Fact]
		public void Test_mediaconvert()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mediaconvert\2017-08-29");
		}

		[Fact]
		public void Test_medialive()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\medialive\2017-10-14");
		}

		[Fact]
		public void Test_mediapackage()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mediapackage\2017-10-12");
		}

		[Fact]
		public void Test_mediapackagevod()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mediapackage-vod\2018-11-07");
		}

		[Fact]
		public void Test_mediastore()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mediastore\2017-09-01");
		}

		[Fact]
		public void Test_mediastoredata()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mediastore-data\2017-09-01");
		}

		[Fact]
		public void Test_mediatailor()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mediatailor\2018-04-23");
		}

		[Fact]
		public void Test_meteringmarketplace()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\meteringmarketplace\2016-01-14");
		}

		[Fact]
		public void Test_migrationhubconfig()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\migrationhub-config\2019-06-30");
		}

		[Fact]
		public void Test_mobile()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mobile\2017-07-01");
		}

		[Fact]
		public void Test_mobileanalytics()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mobileanalytics\2014-06-05");
		}

		[Fact]
		public void Test_monitoring()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\monitoring\2010-08-01");
		}

		[Fact]
		public void Test_mq()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mq\2017-11-27");
		}

		[Fact]
		public void Test_mturkrequester()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mturk-requester\2017-01-17");
		}

		[Fact]
		public void Test_neptune()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\neptune\2014-10-31");
		}

		[Fact]
		public void Test_networkmanager()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\networkmanager\2019-07-05");
		}

		[Fact]
		public void Test_opsworkscm()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\opsworkscm\2016-11-01");
		}

		[Fact]
		public void Test_organizations()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\organizations\2016-11-28");
		}

		[Fact]
		public void Test_outposts()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\outposts\2019-12-03");
		}

		[Fact]
		public void Test_personalize()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\personalize\2018-05-22");
		}

		[Fact]
		public void Test_personalizeevents()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\personalize-events\2018-03-22");
		}

		[Fact]
		public void Test_personalizeruntime()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\personalize-runtime\2018-05-22");
		}

		[Fact]
		public void Test_pi()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\pi\2018-02-27");
		}

		[Fact]
		public void Test_pinpoint()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\pinpoint\2016-12-01");
		}

		[Fact]
		public void Test_pinpointemail()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\pinpoint-email\2018-07-26");
		}

		[Fact]
		public void Test_polly()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\polly\2016-06-10");
		}

		[Fact]
		public void Test_pricing()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\pricing\2017-10-15");
		}

		[Fact]
		public void Test_qldb()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\qldb\2019-01-02");
		}

		[Fact]
		public void Test_qldbsession()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\qldb-session\2019-07-11");
		}

		[Fact]
		public void Test_quicksight()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\quicksight\2018-04-01");
		}

		[Fact]
		public void Test_ram()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\ram\2018-01-04");
		}

		[Fact]
		public void Test_rds()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\rds\2014-10-31");
		}

		[Fact]
		public void Test_rdsdata()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\rds-data\2018-08-01");
		}

		[Fact]
		public void Test_redshift()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\redshift\2012-12-01");
		}

		[Fact]
		public void Test_rekognition()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\rekognition\2016-06-27");
		}

		[Fact]
		public void Test_resourcegroups()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\resource-groups\2017-11-27");
		}

		[Fact]
		public void Test_resourcegroupstaggingapi()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\resourcegroupstaggingapi\2017-01-26");
		}

		[Fact]
		public void Test_robomaker()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\robomaker\2018-06-29");
		}

		[Fact]
		public void Test_route53()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\route53\2013-04-01");
		}

		[Fact]
		public void Test_route53domains()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\route53domains\2014-05-15");
		}

		[Fact]
		public void Test_route53resolver()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\route53resolver\2018-04-01");
		}

		[Fact]
		public void Test_runtimelex()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\runtime.lex\2016-11-28");
		}

		[Fact]
		public void Test_runtimesagemaker()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\runtime.sagemaker\2017-05-13");
		}

		[Fact]
		public void Test_s3()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\s3\2006-03-01");
		}

		[Fact]
		public void Test_s3control()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\s3control\2018-08-20");
		}

		[Fact]
		public void Test_sagemaker()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sagemaker\2017-07-24");
		}

		[Fact]
		public void Test_sagemakera2iruntime()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sagemaker-a2i-runtime\2019-11-07");
		}

		[Fact]
		public void Test_savingsplans()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\savingsplans\2019-06-28");
		}

		[Fact]
		public void Test_schemas()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\schemas\2019-12-02");
		}

		[Fact]
		public void Test_sdb()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sdb\2009-04-15");
		}

		[Fact]
		public void Test_secretsmanager()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\secretsmanager\2017-10-17");
		}

		[Fact]
		public void Test_securityhub()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\securityhub\2018-10-26");
		}

		[Fact]
		public void Test_serverlessrepo()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\serverlessrepo\2017-09-08");
		}

		[Fact]
		public void Test_servicequotas()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\service-quotas\2019-06-24");
		}

		[Fact]
		public void Test_servicecatalog()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\servicecatalog\2015-12-10");
		}

		[Fact]
		public void Test_servicediscovery()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\servicediscovery\2017-03-14");
		}

		[Fact]
		public void Test_sesv2()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sesv2\2019-09-27");
		}

		[Fact]
		public void Test_shield()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\shield\2016-06-02");
		}

		[Fact]
		public void Test_signer()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\signer\2017-08-25");
		}

		[Fact]
		public void Test_sms()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sms\2016-10-24");
		}

		[Fact]
		public void Test_smsvoice()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sms-voice\2018-09-05");
		}

		[Fact]
		public void Test_snowball()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\snowball\2016-06-30");
		}

		[Fact]
		public void Test_sns()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sns\2010-03-31");
		}

		[Fact]
		public void Test_sqs()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sqs\2012-11-05");
		}

		[Fact]
		public void Test_ssm()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\ssm\2014-11-06");
		}

		[Fact]
		public void Test_sso()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sso\2019-06-10");
		}

		[Fact]
		public void Test_ssooidc()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sso-oidc\2019-06-10");
		}

		[Fact]
		public void Test_states()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\states\2016-11-23");
		}

		[Fact]
		public void Test_storagegateway()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\storagegateway\2013-06-30");
		}

		[Fact]
		public void Test_streamsdynamodb()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\streams.dynamodb\2012-08-10");
		}

		[Fact]
		public void Test_sts()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sts\2011-06-15");
		}

		[Fact]
		public void Test_support()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\support\2013-04-15");
		}

		[Fact]
		public void Test_swf()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\swf\2012-01-25");
		}

		[Fact]
		public void Test_synthetics()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\synthetics\2017-10-11");
		}

		[Fact]
		public void Test_textract()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\textract\2018-06-27");
		}

		[Fact]
		public void Test_transcribe()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\transcribe\2017-10-26");
		}

		[Fact]
		public void Test_transfer()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\transfer\2018-11-05");
		}

		[Fact]
		public void Test_translate()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\translate\2017-07-01");
		}

		[Fact]
		public void Test_waf()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\waf\2015-08-24");
		}

		[Fact]
		public void Test_wafregional()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\waf-regional\2016-11-28");
		}

		[Fact]
		public void Test_wafv2()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\wafv2\2019-07-29");
		}

		[Fact]
		public void Test_workdocs()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\workdocs\2016-05-01");
		}

		[Fact]
		public void Test_worklink()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\worklink\2018-09-25");
		}

		[Fact]
		public void Test_workmail()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\workmail\2017-10-01");
		}

		[Fact]
		public void Test_workmailmessageflow()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\workmailmessageflow\2019-05-01");
		}

		[Fact]
		public void Test_workspaces()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\workspaces\2015-04-08");
		}

		[Fact]
		public void Test_xray()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\xray\2016-04-12");
		}

	}
}