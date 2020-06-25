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
	public class OpenapiDirectoryAwsTests2
	{

		readonly ITestOutputHelper output;
		public OpenapiDirectoryAwsTests2(ITestOutputHelper output)
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
		public void Test_kafka()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kafka\2018-11-14");
		}

		[Fact]
		public void Test_kendra()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kendra\2019-02-03");
		}

		[Fact]
		public void Test_kinesis()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kinesis\2013-12-02");
		}

		[Fact]
		public void Test_kinesisvideoarchivedmedia()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kinesis-video-archived-media\2017-09-30");
		}

		[Fact]
		public void Test_kinesisvideomedia()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kinesis-video-media\2017-09-30");
		}

		[Fact]
		public void Test_kinesisvideosignaling()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kinesis-video-signaling\2019-12-04");
		}

		[Fact]
		public void Test_kinesisanalytics()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kinesisanalytics\2015-08-14");
		}

		[Fact]
		public void Test_kinesisanalyticsv2()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kinesisanalyticsv2\2018-05-23");
		}

		[Fact]
		public void Test_kinesisvideo()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kinesisvideo\2017-09-30");
		}

		[Fact]
		public void Test_kms()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\kms\2014-11-01");
		}

		[Fact]
		public void Test_lakeformation()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\lakeformation\2017-03-31");
		}

		[Fact]
		public void Test_lambda()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\lambda\2015-03-31");
		}

		[Fact]
		public void Test_lexmodels()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\lex-models\2017-04-19");
		}

		[Fact]
		public void Test_licensemanager()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\license-manager\2018-08-01");
		}

		[Fact]
		public void Test_lightsail()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\lightsail\2016-11-28");
		}

		[Fact]
		public void Test_logs()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\logs\2014-03-28");
		}

		[Fact]
		public void Test_machinelearning()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\machinelearning\2014-12-12");
		}

		[Fact]
		public void Test_macie2()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\macie2\2020-01-01");
		}

		[Fact]
		public void Test_managedblockchain()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\managedblockchain\2018-09-24");
		}

		[Fact]
		public void Test_marketplacecatalog()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\marketplace-catalog\2018-09-17");
		}

		[Fact]
		public void Test_marketplacecommerceanalytics()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\marketplacecommerceanalytics\2015-07-01");
		}

		[Fact]
		public void Test_mediaconnect()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mediaconnect\2018-11-14");
		}

		[Fact]
		public void Test_mediaconvert()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mediaconvert\2017-08-29");
		}

		[Fact]
		public void Test_medialive()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\medialive\2017-10-14");
		}

		[Fact]
		public void Test_mediapackage()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mediapackage\2017-10-12");
		}

		[Fact]
		public void Test_mediapackagevod()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mediapackage-vod\2018-11-07");
		}

		[Fact]
		public void Test_mediastore()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mediastore\2017-09-01");
		}

		[Fact]
		public void Test_mediastoredata()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mediastore-data\2017-09-01");
		}

		[Fact]
		public void Test_mediatailor()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mediatailor\2018-04-23");
		}

		[Fact]
		public void Test_meteringmarketplace()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\meteringmarketplace\2016-01-14");
		}

		[Fact]
		public void Test_migrationhubconfig()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\migrationhub-config\2019-06-30");
		}

		[Fact]
		public void Test_mobile()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mobile\2017-07-01");
		}

		[Fact]
		public void Test_mobileanalytics()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mobileanalytics\2014-06-05");
		}

		[Fact]
		public void Test_monitoring()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\monitoring\2010-08-01");
		}

		[Fact]
		public void Test_mq()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mq\2017-11-27");
		}

		[Fact]
		public void Test_mturkrequester()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\mturk-requester\2017-01-17");
		}

		[Fact]
		public void Test_neptune()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\neptune\2014-10-31");
		}

		[Fact]
		public void Test_networkmanager()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\networkmanager\2019-07-05");
		}

		[Fact]
		public void Test_opsworkscm()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\opsworkscm\2016-11-01");
		}

		[Fact]
		public void Test_organizations()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\organizations\2016-11-28");
		}

		[Fact]
		public void Test_outposts()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\outposts\2019-12-03");
		}

		[Fact]
		public void Test_personalize()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\personalize\2018-05-22");
		}

		[Fact]
		public void Test_personalizeevents()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\personalize-events\2018-03-22");
		}

		[Fact]
		public void Test_personalizeruntime()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\personalize-runtime\2018-05-22");
		}

		[Fact]
		public void Test_pi()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\pi\2018-02-27");
		}

		[Fact]
		public void Test_pinpoint()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\pinpoint\2016-12-01");
		}

		[Fact]
		public void Test_pinpointemail()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\pinpoint-email\2018-07-26");
		}

		[Fact]
		public void Test_polly()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\polly\2016-06-10");
		}

		[Fact]
		public void Test_pricing()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\pricing\2017-10-15");
		}

		[Fact]
		public void Test_qldb()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\qldb\2019-01-02");
		}

		[Fact]
		public void Test_qldbsession()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\qldb-session\2019-07-11");
		}

		[Fact]
		public void Test_quicksight()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\quicksight\2018-04-01");
		}

		[Fact]
		public void Test_ram()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\ram\2018-01-04");
		}

		[Fact]
		public void Test_rds()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\rds\2014-10-31");
		}

		[Fact]
		public void Test_rdsdata()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\rds-data\2018-08-01");
		}

		[Fact]
		public void Test_redshift()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\redshift\2012-12-01");
		}

		[Fact]
		public void Test_rekognition()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\rekognition\2016-06-27");
		}

		[Fact]
		public void Test_resourcegroups()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\resource-groups\2017-11-27");
		}

		[Fact]
		public void Test_resourcegroupstaggingapi()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\resourcegroupstaggingapi\2017-01-26");
		}

		[Fact]
		public void Test_robomaker()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\robomaker\2018-06-29");
		}

		[Fact]
		public void Test_route53()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\route53\2013-04-01");
		}

		[Fact]
		public void Test_route53domains()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\route53domains\2014-05-15");
		}

		[Fact]
		public void Test_route53resolver()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\route53resolver\2018-04-01");
		}

		[Fact]
		public void Test_runtimelex()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\runtime.lex\2016-11-28");
		}

		[Fact]
		public void Test_runtimesagemaker()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\runtime.sagemaker\2017-05-13");
		}

		[Fact]
		public void Test_s3()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\s3\2006-03-01");
		}

		[Fact]
		public void Test_s3control()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\s3control\2018-08-20");
		}

		[Fact]
		public void Test_sagemaker()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sagemaker\2017-07-24");
		}

		[Fact]
		public void Test_sagemakera2iruntime()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sagemaker-a2i-runtime\2019-11-07");
		}

		[Fact]
		public void Test_savingsplans()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\savingsplans\2019-06-28");
		}

		[Fact]
		public void Test_schemas()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\schemas\2019-12-02");
		}

		[Fact]
		public void Test_sdb()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sdb\2009-04-15");
		}

		[Fact]
		public void Test_secretsmanager()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\secretsmanager\2017-10-17");
		}

		[Fact]
		public void Test_securityhub()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\securityhub\2018-10-26");
		}

		[Fact]
		public void Test_serverlessrepo()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\serverlessrepo\2017-09-08");
		}

		[Fact]
		public void Test_servicequotas()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\service-quotas\2019-06-24");
		}

		[Fact]
		public void Test_servicecatalog()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\servicecatalog\2015-12-10");
		}

		[Fact]
		public void Test_servicediscovery()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\servicediscovery\2017-03-14");
		}

		[Fact]
		public void Test_sesv2()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sesv2\2019-09-27");
		}

		[Fact]
		public void Test_shield()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\shield\2016-06-02");
		}

		[Fact]
		public void Test_signer()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\signer\2017-08-25");
		}

		[Fact]
		public void Test_sms()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sms\2016-10-24");
		}

		[Fact]
		public void Test_smsvoice()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sms-voice\2018-09-05");
		}

		[Fact]
		public void Test_snowball()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\snowball\2016-06-30");
		}

		[Fact]
		public void Test_sns()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sns\2010-03-31");
		}

		[Fact]
		public void Test_sqs()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sqs\2012-11-05");
		}

		[Fact]
		public void Test_ssm()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\ssm\2014-11-06");
		}

		[Fact]
		public void Test_sso()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sso\2019-06-10");
		}

		[Fact]
		public void Test_ssooidc()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sso-oidc\2019-06-10");
		}

		[Fact]
		public void Test_states()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\states\2016-11-23");
		}

		[Fact]
		public void Test_storagegateway()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\storagegateway\2013-06-30");
		}

		[Fact]
		public void Test_streamsdynamodb()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\streams.dynamodb\2012-08-10");
		}

		[Fact]
		public void Test_sts()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\sts\2011-06-15");
		}

		[Fact]
		public void Test_support()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\support\2013-04-15");
		}

		[Fact]
		public void Test_swf()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\swf\2012-01-25");
		}

		[Fact]
		public void Test_synthetics()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\synthetics\2017-10-11");
		}

		[Fact]
		public void Test_textract()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\textract\2018-06-27");
		}

		[Fact]
		public void Test_transcribe()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\transcribe\2017-10-26");
		}

		[Fact]
		public void Test_transfer()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\transfer\2018-11-05");
		}

		[Fact]
		public void Test_translate()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\translate\2017-07-01");
		}

		[Fact]
		public void Test_waf()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\waf\2015-08-24");
		}

		[Fact]
		public void Test_wafregional()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\waf-regional\2016-11-28");
		}

		[Fact]
		public void Test_wafv2()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\wafv2\2019-07-29");
		}

		[Fact]
		public void Test_workdocs()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\workdocs\2016-05-01");
		}

		[Fact]
		public void Test_worklink()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\worklink\2018-09-25");
		}

		[Fact]
		public void Test_workmail()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\workmail\2017-10-01");
		}

		[Fact]
		public void Test_workmailmessageflow()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\workmailmessageflow\2019-05-01");
		}

		[Fact]
		public void Test_workspaces()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\workspaces\2015-04-08");
		}

		[Fact]
		public void Test_xray()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\xray\2016-04-12");
		}

	}
}