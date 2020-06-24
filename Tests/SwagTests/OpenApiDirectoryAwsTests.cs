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
	public class OpenapiDirectoryAwsTests
	{

		readonly ITestOutputHelper output;
		public OpenapiDirectoryAwsTests(ITestOutputHelper output)
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
		public void Test_accessanalyzer()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\accessanalyzer\2019-11-01");
		}

		[Fact]
		public void Test_acm()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\acm\2015-12-08");
		}

		[Fact]
		public void Test_acmpca()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\acm-pca\2017-08-22");
		}

		[Fact]
		public void Test_alexaforbusiness()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\alexaforbusiness\2017-11-09");
		}

		[Fact]
		public void Test_amplify()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\amplify\2017-07-25");
		}

		[Fact]
		public void Test_apigatewayv2()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\apigatewayv2\2018-11-29");
		}

		[Fact]
		public void Test_apigatewaymanagementapi()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\apigatewaymanagementapi\2018-11-29");
		}

		[Fact]
		public void Test_appconfig()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\appconfig\2019-10-09");
		}

		[Fact]
		public void Test_applicationautoscaling()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\application-autoscaling\2016-02-06");
		}

		[Fact]
		public void Test_applicationinsights()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\application-insights\2018-11-25");
		}

		[Fact]
		public void Test_appmesh()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\appmesh\2019-01-25");
		}

		[Fact]
		public void Test_appstream()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\appstream\2016-12-01");
		}

		[Fact]
		public void Test_appsync()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\appsync\2017-07-25");
		}

		[Fact]
		public void Test_athena()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\athena\2017-05-18");
		}

		[Fact]
		public void Test_autoscaling()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\autoscaling\2011-01-01");
		}

		[Fact]
		public void Test_autoscalingplans()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\autoscaling-plans\2018-01-06");
		}

		[Fact]
		public void Test_AWSMigrationHub()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\AWSMigrationHub\2017-05-31");
		}

		[Fact]
		public void Test_backup()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\backup\2018-11-15");
		}

		[Fact]
		public void Test_batch()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\batch\2016-08-10");
		}

		[Fact]
		public void Test_budgets()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\budgets\2016-10-20");
		}

		[Fact]
		public void Test_ce()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\ce\2017-10-25");
		}

		[Fact]
		public void Test_chime()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\chime\2018-05-01");
		}

		[Fact]
		public void Test_cloud9()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\cloud9\2017-09-23");
		}

		[Fact]
		public void Test_clouddirectory()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\clouddirectory\2017-01-11");
		}

		[Fact]
		public void Test_cloudformation()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\cloudformation\2010-05-15");
		}

		[Fact]
		public void Test_cloudfront()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\cloudfront\2019-03-26");
		}

		[Fact]
		public void Test_cloudhsmv2()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\cloudhsmv2\2017-04-28");
		}

		[Fact]
		public void Test_cloudsearch()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\cloudsearch\2013-01-01");
		}

		[Fact]
		public void Test_cloudsearchdomain()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\cloudsearchdomain\2013-01-01");
		}

		[Fact]
		public void Test_cloudtrail()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\cloudtrail\2013-11-01");
		}

		[Fact]
		public void Test_codebuild()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\codebuild\2016-10-06");
		}

		[Fact]
		public void Test_codecommit()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\codecommit\2015-04-13");
		}

		[Fact]
		public void Test_codedeploy()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\codedeploy\2014-10-06");
		}

		[Fact]
		public void Test_codegurureviewer()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\codeguru-reviewer\2019-09-19");
		}

		[Fact]
		public void Test_codeguruprofiler()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\codeguruprofiler\2019-07-18");
		}

		[Fact]
		public void Test_codepipeline()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\codepipeline\2015-07-09");
		}

		[Fact]
		public void Test_codestar()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\codestar\2017-04-19");
		}

		[Fact]
		public void Test_codestarconnections()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\codestar-connections\2019-12-01");
		}

		[Fact]
		public void Test_codestarnotifications()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\codestar-notifications\2019-10-15");
		}

		[Fact]
		public void Test_cognitoidentity()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\cognito-identity\2014-06-30");
		}

		[Fact]
		public void Test_cognitosync()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\cognito-sync\2014-06-30");
		}

		[Fact]
		public void Test_cognitoidp()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\cognito-idp\2016-04-18");
		}

		[Fact]
		public void Test_comprehend()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\comprehend\2017-11-27");
		}

		[Fact]
		public void Test_comprehendmedical()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\comprehendmedical\2018-10-30");
		}

		[Fact]
		public void Test_computeoptimizer()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\compute-optimizer\2019-11-01");
		}

		[Fact]
		public void Test_config()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\config\2014-11-12");
		}

		[Fact]
		public void Test_connect()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\connect\2017-08-08");
		}

		[Fact]
		public void Test_connectparticipant()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\connectparticipant\2018-09-07");
		}

		[Fact]
		public void Test_cur()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\cur\2017-01-06");
		}

		[Fact]
		public void Test_dataexchange()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\dataexchange\2017-07-25");
		}

		[Fact]
		public void Test_datapipeline()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\datapipeline\2012-10-29");
		}


	}
}