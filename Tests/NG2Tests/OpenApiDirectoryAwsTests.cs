using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	/// <summary>
	/// Generated test cases for AWS APIs
	/// </summary>
	[Collection("NGBuildInSequence")]
	public class OpenapiDirectoryAwsTests
	{
		readonly NG2OpenApiDirTestHelper helper;
		public OpenapiDirectoryAwsTests(ITestOutputHelper output)
		{
			helper = new NG2OpenApiDirTestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsNG2FormGroupClientApiGen), output);
		}

		[Fact]
		public void Test_accessanalyzer()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\accessanalyzer\2019-11-01");
		}

		[Fact]
		public void Test_acm()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\acm\2015-12-08");
		}

		[Fact]
		public void Test_acmpca()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\acm-pca\2017-08-22");
		}

		//[Fact]
		//public void Test_alexaforbusiness()PhoneNumberType enum is password. Looking bad definition.
		//{
		//	helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\alexaforbusiness\2017-11-09");
		//}

		[Fact]
		public void Test_amplify()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\amplify\2017-07-25");
		}

		[Fact]
		public void Test_apigatewayv2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\apigatewayv2\2018-11-29");
		}

		[Fact]
		public void Test_apigatewaymanagementapi()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\apigatewaymanagementapi\2018-11-29");
		}

		[Fact]
		public void Test_appconfig()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\appconfig\2019-10-09");
		}

		[Fact]
		public void Test_applicationautoscaling()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\application-autoscaling\2016-02-06");
		}

		[Fact]
		public void Test_applicationinsights()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\application-insights\2018-11-25");
		}

		[Fact]
		public void Test_appmesh()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\appmesh\2019-01-25");
		}

		[Fact]
		public void Test_appstream()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\appstream\2016-12-01");
		}

		[Fact]
		public void Test_appsync()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\appsync\2017-07-25");
		}

		[Fact]
		public void Test_athena()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\athena\2017-05-18");
		}

		[Fact]
		public void Test_autoscaling()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\autoscaling\2011-01-01");
		}

		[Fact]
		public void Test_autoscalingplans()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\autoscaling-plans\2018-01-06");
		}

		[Fact]
		public void Test_AWSMigrationHub()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\AWSMigrationHub\2017-05-31");
		}

		[Fact]
		public void Test_backup()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\backup\2018-11-15");
		}

		[Fact]
		public void Test_batch()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\batch\2016-08-10");
		}

		[Fact]
		public void Test_budgets()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\budgets\2016-10-20");
		}

		[Fact]
		public void Test_ce()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\ce\2017-10-25");
		}

		[Fact]
		public void Test_chime()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\chime\2018-05-01");
		}

		[Fact]
		public void Test_cloud9()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\cloud9\2017-09-23");
		}

		[Fact]
		public void Test_clouddirectory()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\clouddirectory\2017-01-11");
		}

		[Fact]
		public void Test_cloudformation()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\cloudformation\2010-05-15");
		}

		[Fact]
		public void Test_cloudfront()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\cloudfront\2019-03-26");
		}

		[Fact]
		public void Test_cloudhsmv2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\cloudhsmv2\2017-04-28");
		}

		[Fact]
		public void Test_cloudsearch()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\cloudsearch\2013-01-01");
		}

		[Fact]
		public void Test_cloudsearchdomain()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\cloudsearchdomain\2013-01-01");
		}

		[Fact]
		public void Test_cloudtrail()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\cloudtrail\2013-11-01");
		}

		[Fact]
		public void Test_codebuild()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\codebuild\2016-10-06");
		}

		[Fact]
		public void Test_codecommit()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\codecommit\2015-04-13");
		}

		[Fact]
		public void Test_codedeploy()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\codedeploy\2014-10-06");
		}

		[Fact]
		public void Test_codegurureviewer()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\codeguru-reviewer\2019-09-19");
		}

		[Fact]
		public void Test_codeguruprofiler()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\codeguruprofiler\2019-07-18");
		}

		[Fact]
		public void Test_codepipeline()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\codepipeline\2015-07-09");
		}

		[Fact]
		public void Test_codestar()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\codestar\2017-04-19");
		}

		[Fact]
		public void Test_codestarconnections()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\codestar-connections\2019-12-01");
		}

		[Fact]
		public void Test_codestarnotifications()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\codestar-notifications\2019-10-15");
		}

		[Fact]
		public void Test_cognitoidentity()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\cognito-identity\2014-06-30");
		}

		[Fact]
		public void Test_cognitosync()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\cognito-sync\2014-06-30");
		}

		[Fact]
		public void Test_cognitoidp()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\cognito-idp\2016-04-18");
		}

		[Fact]
		public void Test_comprehend()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\comprehend\2017-11-27");
		}

		[Fact]
		public void Test_comprehendmedical()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\comprehendmedical\2018-10-30");
		}

		[Fact]
		public void Test_computeoptimizer()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\compute-optimizer\2019-11-01");
		}

		[Fact]
		public void Test_config()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\config\2014-11-12");
		}

		[Fact]
		public void Test_connect()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\connect\2017-08-08");
		}

		[Fact]
		public void Test_connectparticipant()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\connectparticipant\2018-09-07");
		}

		[Fact]
		public void Test_cur()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\cur\2017-01-06");
		}

		[Fact]
		public void Test_dataexchange()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\dataexchange\2017-07-25");
		}

		[Fact]
		public void Test_datapipeline()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\datapipeline\2012-10-29");
		}

		[Fact]
		public void Test_datasync()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\datasync\2018-11-09");
		}

		[Fact]
		public void Test_dax()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\dax\2017-04-19");
		}

		[Fact]
		public void Test_detective()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\detective\2018-10-26");
		}

		[Fact]
		public void Test_devicefarm()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\devicefarm\2015-06-23");
		}

		[Fact]
		public void Test_directconnect()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\directconnect\2012-10-25");
		}

		[Fact]
		public void Test_discovery()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\discovery\2015-11-01");
		}

		[Fact]
		public void Test_dlm()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\dlm\2018-01-12");
		}

		[Fact]
		public void Test_dms()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\dms\2016-01-01");
		}

		[Fact]
		public void Test_docdb()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\docdb\2014-10-31");
		}

		[Fact]
		public void Test_ds()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\ds\2015-04-16");
		}

		[Fact]
		public void Test_dynamodb()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\dynamodb\2012-08-10");
		}

		[Fact]
		public void Test_ebs()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\ebs\2019-11-02");
		}

		//[Fact]
		//public void Test_ec2() I already have other test suites testing this, and compare source code.
		//{
		//	helper.GenerateAndAssert(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\ec2\2016-11-15");
		//}

		[Fact]
		public void Test_ec2instanceconnect()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\ec2-instance-connect\2018-04-02");
		}

		[Fact]
		public void Test_ecr()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\ecr\2015-09-21");
		}

		[Fact]
		public void Test_ecs()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\ecs\2014-11-13");
		}

		[Fact]
		public void Test_eks()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\eks\2017-11-01");
		}

		[Fact]
		public void Test_elasticinference()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\elastic-inference\2017-07-25");
		}

		[Fact]
		public void Test_elasticache()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\elasticache\2015-02-02");
		}

		[Fact]
		public void Test_elasticbeanstalk()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\elasticbeanstalk\2010-12-01");
		}

		[Fact]
		public void Test_elasticfilesystem()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\elasticfilesystem\2015-02-01");
		}

		[Fact]
		public void Test_elasticloadbalancing()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\elasticloadbalancing\2012-06-01");
		}

		[Fact]
		public void Test_elasticloadbalancingv2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\elasticloadbalancingv2\2015-12-01");
		}

		[Fact]
		public void Test_elasticmapreduce()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\elasticmapreduce\2009-03-31");
		}

		[Fact]
		public void Test_elastictranscoder()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\elastictranscoder\2012-09-25");
		}

		[Fact]
		public void Test_email()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\email\2010-12-01");
		}

		[Fact]
		public void Test_entitlementmarketplace()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\entitlement.marketplace\2017-01-11");
		}

		[Fact]
		public void Test_es()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\es\2015-01-01");
		}

		[Fact]
		public void Test_eventbridge()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\eventbridge\2015-10-07");
		}

		[Fact]
		public void Test_events()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\events\2015-10-07");
		}

		[Fact]
		public void Test_firehose()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\firehose\2015-08-04");
		}

		[Fact]
		public void Test_fms()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\fms\2018-01-01");
		}

		[Fact]
		public void Test_forecast()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\forecast\2018-06-26");
		}

		[Fact]
		public void Test_forecastquery()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\forecastquery\2018-06-26");
		}

		[Fact]
		public void Test_frauddetector()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\frauddetector\2019-11-15");
		}

		[Fact]
		public void Test_fsx()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\fsx\2018-03-01");
		}

		[Fact]
		public void Test_gamelift()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\gamelift\2015-10-01");
		}

		[Fact]
		public void Test_glacier()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\glacier\2012-06-01");
		}

		[Fact]
		public void Test_globalaccelerator()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\globalaccelerator\2018-08-08");
		}

		[Fact]
		public void Test_glue()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\glue\2017-03-31");
		}

		[Fact]
		public void Test_greengrass()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\greengrass\2017-06-07");
		}

		[Fact]
		public void Test_groundstation()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\groundstation\2019-05-23");
		}

		[Fact]
		public void Test_guardduty()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\guardduty\2017-11-28");
		}

		[Fact]
		public void Test_health()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\health\2016-08-04");
		}

		[Fact]
		public void Test_iam()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\iam\2010-05-08");
		}

		[Fact]
		public void Test_imagebuilder()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\imagebuilder\2019-12-02");
		}

		[Fact]
		public void Test_importexport()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\importexport\2010-06-01");
		}

		[Fact]
		public void Test_inspector()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\inspector\2016-02-16");
		}

		[Fact]
		public void Test_iot()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\iot\2015-05-28");
		}

		[Fact]
		public void Test_iotdata()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\iot-data\2015-05-28");
		}

		[Fact]
		public void Test_iotjobsdata()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\iot-jobs-data\2017-09-29");
		}

		[Fact]
		public void Test_iot1clickdevices()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\iot1click-devices\2018-05-14");
		}

		[Fact]
		public void Test_iot1clickprojects()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\iot1click-projects\2018-05-14");
		}

		[Fact]
		public void Test_iotanalytics()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\iotanalytics\2017-11-27");
		}

		[Fact]
		public void Test_iotevents()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\iotevents\2018-07-27");
		}

		[Fact]
		public void Test_ioteventsdata()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\iotevents-data\2018-10-23");
		}

		[Fact]
		public void Test_iotsecuretunneling()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\iotsecuretunneling\2018-10-05");
		}

		[Fact]
		public void Test_iotsitewise()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\iotsitewise\2019-12-02");
		}

		[Fact]
		public void Test_iotthingsgraph()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\iotthingsgraph\2018-09-06");
		}


	}
}