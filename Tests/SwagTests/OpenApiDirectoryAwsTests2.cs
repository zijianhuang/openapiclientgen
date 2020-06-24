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
		public void Test_datasync()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\datasync\2018-11-09");
		}

		[Fact]
		public void Test_dax()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\dax\2017-04-19");
		}

		[Fact]
		public void Test_detective()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\detective\2018-10-26");
		}

		[Fact]
		public void Test_devicefarm()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\devicefarm\2015-06-23");
		}

		[Fact]
		public void Test_directconnect()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\directconnect\2012-10-25");
		}

		[Fact]
		public void Test_discovery()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\discovery\2015-11-01");
		}

		[Fact]
		public void Test_dlm()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\dlm\2018-01-12");
		}

		[Fact]
		public void Test_dms()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\dms\2016-01-01");
		}

		[Fact]
		public void Test_docdb()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\docdb\2014-10-31");
		}

		[Fact]
		public void Test_ds()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\ds\2015-04-16");
		}

		[Fact]
		public void Test_dynamodb()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\dynamodb\2012-08-10");
		}

		[Fact]
		public void Test_ebs()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\ebs\2019-11-02");
		}

		//[Fact]
		//public void Test_ec2() I already have other test suites testing this, and compare source code.
		//{
		//	GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\ec2\2016-11-15");
		//}

		[Fact]
		public void Test_ec2instanceconnect()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\ec2-instance-connect\2018-04-02");
		}

		[Fact]
		public void Test_ecr()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\ecr\2015-09-21");
		}

		[Fact]
		public void Test_ecs()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\ecs\2014-11-13");
		}

		[Fact]
		public void Test_eks()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\eks\2017-11-01");
		}

		[Fact]
		public void Test_elasticinference()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\elastic-inference\2017-07-25");
		}

		[Fact]
		public void Test_elasticache()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\elasticache\2015-02-02");
		}

		[Fact]
		public void Test_elasticbeanstalk()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\elasticbeanstalk\2010-12-01");
		}

		[Fact]
		public void Test_elasticfilesystem()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\elasticfilesystem\2015-02-01");
		}

		[Fact]
		public void Test_elasticloadbalancing()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\elasticloadbalancing\2012-06-01");
		}

		[Fact]
		public void Test_elasticloadbalancingv2()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\elasticloadbalancingv2\2015-12-01");
		}

		[Fact]
		public void Test_elasticmapreduce()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\elasticmapreduce\2009-03-31");
		}

		[Fact]
		public void Test_elastictranscoder()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\elastictranscoder\2012-09-25");
		}

		[Fact]
		public void Test_email()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\email\2010-12-01");
		}

		[Fact]
		public void Test_entitlementmarketplace()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\entitlement.marketplace\2017-01-11");
		}

		[Fact]
		public void Test_es()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\es\2015-01-01");
		}

		[Fact]
		public void Test_eventbridge()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\eventbridge\2015-10-07");
		}

		[Fact]
		public void Test_events()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\events\2015-10-07");
		}

		[Fact]
		public void Test_firehose()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\firehose\2015-08-04");
		}

		[Fact]
		public void Test_fms()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\fms\2018-01-01");
		}

		[Fact]
		public void Test_forecast()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\forecast\2018-06-26");
		}

		[Fact]
		public void Test_forecastquery()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\forecastquery\2018-06-26");
		}

		[Fact]
		public void Test_frauddetector()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\frauddetector\2019-11-15");
		}

		[Fact]
		public void Test_fsx()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\fsx\2018-03-01");
		}

		[Fact]
		public void Test_gamelift()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\gamelift\2015-10-01");
		}

		[Fact]
		public void Test_glacier()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\glacier\2012-06-01");
		}

		[Fact]
		public void Test_globalaccelerator()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\globalaccelerator\2018-08-08");
		}

		[Fact]
		public void Test_glue()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\glue\2017-03-31");
		}

		[Fact]
		public void Test_greengrass()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\greengrass\2017-06-07");
		}

		[Fact]
		public void Test_groundstation()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\groundstation\2019-05-23");
		}

		[Fact]
		public void Test_guardduty()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\guardduty\2017-11-28");
		}

		[Fact]
		public void Test_health()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\health\2016-08-04");
		}

		[Fact]
		public void Test_iam()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\iam\2010-05-08");
		}

		[Fact]
		public void Test_imagebuilder()
		{
			GenerateAndAssert(@"C:\VSProjects\Study\openapi-directory\APIs\amazonaws.com\imagebuilder\2019-12-02");
		}

		//[Fact]
		//public void Test_()
		//{
		//	GenerateAndAssert(@"");
		//}


	}
}