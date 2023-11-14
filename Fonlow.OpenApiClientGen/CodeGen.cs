using Fonlow.OpenApiClientGen.ClientTypes;
using Fonlow.OpenApiClientGen.CS;
using Microsoft.OpenApi.Models;
using System;
using System.Diagnostics;

namespace Fonlow.CodeDom.Web
{
	public static class CodeGen
	{
		public static void GenerateClientAPIs(Settings settings, OpenApiPaths paths, OpenApiComponents components, string outputBasePath)
		{
			string currentDir = System.IO.Directory.GetCurrentDirectory();
			if (settings.ClientLibraryProjectFolderName != null)
			{
				string csharpClientProjectDir = System.IO.Path.IsPathRooted(settings.ClientLibraryProjectFolderName) ?
					settings.ClientLibraryProjectFolderName : System.IO.Path.Combine(outputBasePath, settings.ClientLibraryProjectFolderName);

				if (!System.IO.Directory.Exists(csharpClientProjectDir))
				{
					if (settings.CreateFolder)
					{
						System.IO.Directory.CreateDirectory(csharpClientProjectDir);
					}
					else
					{
						string msg = $"{csharpClientProjectDir} not exist while current directory is {currentDir}";
						throw new CodeGenException(msg);
					}
				}

				string path = System.IO.Path.Combine(csharpClientProjectDir, settings.ClientLibraryFileName);
				ControllersClientApiGen csGen = new(settings);
				csGen.CreateCodeDom(paths, components);
				csGen.Save(path);
			}

			string CreateTsPath(string folder, string fileName)
			{
				if (folder != null)
				{
					string theFolder;
					try
					{
						theFolder = System.IO.Path.IsPathRooted(folder) ?
							folder : System.IO.Path.Combine(outputBasePath, folder);

						if (!System.IO.Directory.Exists(theFolder))
						{
							if (settings.CreateFolder)
							{
								System.IO.Directory.CreateDirectory(theFolder);
							}
							else
							{
								string msg = $"{theFolder} not exist while current directory is {currentDir}";
								throw new CodeGenException(msg);
							}
						}

					}
					catch (ArgumentException e)
					{
						Trace.TraceWarning(e.Message);
						string msg = $"Invalid TypeScriptFolder {folder} while current directory is {currentDir}";
						throw new CodeGenException(msg);
					}

					if (!System.IO.Directory.Exists(theFolder))
					{
						string msg = $"TypeScriptFolder {theFolder} not exist while current directory is {currentDir}";
						throw new CodeGenException(msg);
					}
					return System.IO.Path.Combine(theFolder, fileName);
				};

				return null;
			}

			if (settings.Plugins != null)
			{
				string exeDir = System.IO.Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);
				foreach (JSPlugin plugin in settings.Plugins)
				{
					JSOutput jsOutput = new()
					{
						JSPath = CreateTsPath(plugin.TargetDir, plugin.TSFile),
						AsModule = plugin.AsModule,
						ContentType = plugin.ContentType,
					};

					string assemblyFilePath = System.IO.Path.Combine(exeDir, plugin.AssemblyName + ".dll");
					Ts.ControllersTsClientApiGenBase tsGen = PluginFactory.CreateImplementationsFromAssembly(assemblyFilePath, settings, jsOutput);
					if (tsGen != null)
					{
						Trace.TraceInformation($"Generate codes with {tsGen.ProductName} ......");
						tsGen.CreateCodeDom(paths, components);
						tsGen.Save();
					}
					else
					{
						Trace.TraceWarning($"Not done with plugin {plugin.AssemblyName}");
					}
				}
			}
		}
	}
}
