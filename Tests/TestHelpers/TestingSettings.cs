using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Fonlow.OpenApiClientGen.ClientTypes;
using Microsoft.Extensions.Configuration;

namespace TestHelpers
{
	public sealed class TestingSettings : ITestingSettings
	{
		private TestingSettings()
		{
		}

		public static TestingSettings Instance { get { return Nested.instance; } }

		private class Nested
		{
			static Nested()
			{
			}

			static TestingSettings Create()
			{
				var obj = new TestingSettings();
				var config = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
				config.Bind("Testing", obj);

				return obj;
			}

			internal static readonly TestingSettings instance = Create();
		}

		//public IConfigurationRoot ConfigurationRoot { get; set; }

		public bool Build { get; set; } = false;
		public bool UpdateGenerated { get; set; } = false;

	}

	public interface ITestingSettings
	{
		bool Build { get;  }
		bool UpdateGenerated { get; }
	}

	public class CasualTestingSettings : ITestingSettings
	{
		public CasualTestingSettings(bool build, bool updateGenerated)
		{
			Build = build;
			UpdateGenerated = updateGenerated;
		}

		public bool Build { get; }
		public bool UpdateGenerated { get; }

	}

	public interface ITestHelper
	{
		void GenerateAndAssertAndBuild(string filePath, string expectedFile, ISettings mySettings);
	}

	public interface IOpenApiDirTestHelper : ITestHelper
	{
		void GenerateFromOpenApiAndBuild(string openapiDir, ISettings mySettings = null);
	}

}
