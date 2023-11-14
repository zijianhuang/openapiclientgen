using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace TsTestHelpers
{
	public sealed class TestingSettings
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

		public bool NgBuild { get; set; } = false;
		public bool UpdateGenerated { get; set; } = false;

	}
}
