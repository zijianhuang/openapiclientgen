using Fonlow.OpenApiClientGen.ClientTypes;
using System;
using System.IO;
using Xunit.Abstractions;

namespace SwagTests
{
	public class NG2OpenApiDirTestHelper: NG2TestHelper
	{
		public NG2OpenApiDirTestHelper(Type genType, ITestOutputHelper output): base(genType, output)
		{
		}

		/// <summary>
		/// Just generate and build, not assertion for comparing previous
		/// </summary>
		/// <param name="openapiDir"></param>
		/// <param name="mySettings"></param>
		public void GenerateFromOpenApiAndBuild(string openapiDir, Settings mySettings = null)
		{
			var m = (new System.Diagnostics.StackTrace()).GetFrame(1).GetMethod();
			var targetFileName = $"{m.DeclaringType.Name}.{m.Name}.ts";
			var targetFilePath = System.IO.Path.Combine("Results", targetFileName);
			var filePath = Path.Combine(openapiDir, "openapi.yaml");
			GenerateAndAssertAndBuild(filePath, targetFilePath, mySettings);
		}
	}
}
