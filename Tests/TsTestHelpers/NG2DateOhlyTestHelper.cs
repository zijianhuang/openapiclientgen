using Fonlow.OpenApiClientGen.ClientTypes;
using System;
using System.IO;
using Xunit.Abstractions;

namespace Fonlow.OpenApiClientGen.TestHelpers
{
	/// <summary>
	/// For integrations for large amount of OpenAPI files. In such tests, whether the generated codes are the same which those generated in the past is no a concern.
	/// As long as the codes generated could be ng built, things are OK.
	/// </summary>
	public class NG2DateOhlyTestHelper: NG2TestHelper
	{
		/// <summary>
		/// 
		/// </summary>
		/// <param name="genType"></param>
		/// <param name="output"></param>
		public NG2DateOhlyTestHelper(Type genType, ITestOutputHelper output, ITestingSettings testingSettings, Action<string, string> assertEqual, Action<int, int> assertEqualInt) 
		: base(genType, output, 
			new CasualTestingSettings(TestHelpers.TestingSettings.Instance.Build, TestHelpers.TestingSettings.Instance.UpdateGenerated), assertEqual, assertEqualInt)
		{
		}

		protected override JSOutput GetJSOutput(string defFilePath)
		{
			return new JSOutput()
			{
				JSPath = CreateTsPath("Results", defFilePath),
				AsModule = true,
				ContentType = "application/json;charset=UTF-8",
				NgDateOnlyFormControlEnabled = true,
			};
		}
	}
}
