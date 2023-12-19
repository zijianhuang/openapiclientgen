using Fonlow.OpenApiClientGen.ClientTypes;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Readers;
using System;
using System.Diagnostics;
using System.IO;
using TsTestHelpers;
using Xunit;

namespace SwagTests
{
	/// <summary>
	/// For integration testing for TypeScript. Though injecting a code gen type, this can be used for various TypeScript codes generators for various TypeScript libs and frameworks.
	/// </summary>
	public class TsTestHelper
	{
		/// <summary>
		/// 
		/// </summary>
		/// <param name="codeGenType">Code gen to be instantiated.</param>
		public TsTestHelper(Type codeGenType)
		{
			this.codeGenType = codeGenType;
		}

		readonly Type codeGenType;

		public static OpenApiDocument ReadDef(string filePath)
		{
			using FileStream stream = new(filePath, FileMode.Open, FileAccess.Read);
			return new OpenApiStreamReader().Read(stream, out OpenApiDiagnostic diagnostic);
		}

		public string TranslateDefToCode(string filePath, Settings mySettings = null)
		{
			static string CreateTsPath(string folder, string fileName)
			{
				if (!string.IsNullOrEmpty(folder))
				{
					string theFolder;
					try
					{
						theFolder = Path.IsPathRooted(folder) ?
							folder : Path.Combine(Directory.GetCurrentDirectory(), folder);

					}
					catch (ArgumentException e)
					{
						Trace.TraceWarning(e.Message);
						throw;
					}

					if (!Directory.Exists(theFolder))
					{
						//throw new ArgumentException("TypeScript Folder Not Exist");
						Directory.CreateDirectory(theFolder);
					}
					return Path.Combine(theFolder, fileName);
				};

				return null;
			}

			OpenApiDocument doc = ReadDef(filePath);

			Settings settings = mySettings ?? new Settings()
			{
				ClientNamespace = "MyNS",
				PathPrefixToRemove = "/api",
				ContainerClassName = "MyClient",
				ContainerNameStrategy = ContainerNameStrategy.Tags,
				DataAnnotationsToComments = true,
			};

			System.CodeDom.CodeCompileUnit codeCompileUnit = new();
			System.CodeDom.CodeNamespace clientNamespace = new(settings.ClientNamespace);
			codeCompileUnit.Namespaces.Add(clientNamespace);//namespace added to Dom
			JSOutput jsOutput = new()
			{
				JSPath = CreateTsPath("Results", filePath),
				AsModule = true,
				ContentType = "application/json;charset=UTF-8",
			};

			Fonlow.CodeDom.Web.Ts.ControllersTsClientApiGenBase gen = (Fonlow.CodeDom.Web.Ts.ControllersTsClientApiGenBase)Activator.CreateInstance(codeGenType, settings, jsOutput);
			gen.CreateCodeDom(doc.Paths, doc.Components);
			return gen.WriteToText();
		}

		public static string ReadFromResults(string filePath)
		{
			return File.ReadAllText(filePath);
		}

		public void GenerateAndAssert(string openApiFile, string expectedFile, Settings mySettings = null)
		{
			string s = TranslateDefToCode(openApiFile, mySettings);
			if (TestingSettings.Instance.UpdateGenerated)
			{
				File.WriteAllText(expectedFile, s); //To update Results after some feature changes. Copy what in the bin folder back to the source content.
			}

			string expected = ReadFromResults(expectedFile);
			Assert.Equal(expected, s);
		}
	}

}
