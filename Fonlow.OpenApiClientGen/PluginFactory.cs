using Fonlow.CodeDom.Web.Ts;
using Fonlow.OpenApiClientGen.ClientTypes;
using System;
using System.Diagnostics;
using System.Reflection;
using System.Text;

namespace Fonlow.CodeDom.Web
{
	public static class PluginFactory
	{
		/// <summary>
		/// Load the first ICommand type found in the assembly and instantiate it.
		/// </summary>
		/// <param name="assemblyFilePath">Absolute assembly file path. The assembly must have a concrete class derived from ICommand, and generally 
		/// from CommandBase, CommandWithOptions or CommandWithParametersAndOptions;
		/// and the class must have a constructor without parameter that calls a base constructor with proper options type and parameters type.</param>
		/// <param name="jsOutput"></param>
		/// <returns>ICommand object. Null if not found</returns>
		public static ControllersTsClientApiGenBase CreateImplementationsFromAssembly(string assemblyFilePath, ISettings settings, JSOutput jsOutput)
		{
			Assembly assembly;
			try
			{
				assembly = Assembly.LoadFrom(assemblyFilePath); // the main program does not generally has the plugin assembly registered in deps.json, so it is better to load file.
				Trace.TraceInformation("Assembly {0} is loaded for type {1}.", assemblyFilePath, "ICommand");
			}
			catch (Exception ex) when (ex is System.IO.FileLoadException || ex is BadImageFormatException || ex is System.IO.FileNotFoundException || ex is ArgumentException)
			{
				var s = $"When loading plugin {assemblyFilePath}, {ex.GetType().FullName}: {ex.Message}";
				throw new CodeGenLoadPluginException(s, ex);
			}

			ControllersTsClientApiGenBase controllersTsClientApiGen = null;
			try
			{
				foreach (Type type in assembly.GetTypes())
				{
					if (type.IsClass && type.IsSubclassOf(typeof(ControllersTsClientApiGenBase)))
					{
						controllersTsClientApiGen = (ControllersTsClientApiGenBase)Activator.CreateInstance(type, settings, jsOutput);
						break;
					}
				}

				if (controllersTsClientApiGen == null)
				{
					throw new ArgumentException($"Cannot find derived class of ControllersTsClientApiGenBase from {assemblyFilePath}");
				}

				return controllersTsClientApiGen;

			}
			catch (System.IO.FileNotFoundException ex)
			{
				throw new CodeGenReadPluginException($"When loading plugin {assemblyFilePath}: {ex.Message}", ex);
			}
			catch (ReflectionTypeLoadException reflectionTypeLoadException)
			{
				var sb = new StringBuilder();
				foreach (Exception ex in reflectionTypeLoadException.LoaderExceptions)
				{
					sb.AppendLine(String.Format("When reading plugin {0}, GetTypes errors occur: {1}", assemblyFilePath, ex.Message));
				}

				var s = $"When reading plugin {assemblyFilePath}, ReflectionTypeLoadException: {sb.ToString()}";
				throw new CodeGenReadPluginException(s, reflectionTypeLoadException);
			}
			catch (TargetInvocationException ex)
			{
				var s = $"When reading plugin {assemblyFilePath}, {ex.GetType().FullName}: {ex}";
				throw new CodeGenReadPluginException(s, ex);
			}
		}
	}
}
