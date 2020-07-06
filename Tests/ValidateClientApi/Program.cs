using System;
using Fonlow.OpenApiClientGen.CS;
namespace ValidateClientApi
{
	class Program
	{
		static void Main(string[] args)
		{
			if (args.Length < 1)
			{
				Console.WriteLine("Need a C# code file path.");
				Environment.Exit(1);
			}

			var path = args[0];
			var csharpCodes = System.IO.File.ReadAllText(path);
			var result = CSharpValidation.CompileThenSave(csharpCodes, null);
			if (result.Success)
			{
				Console.WriteLine("Generated codes pass compilation.");
			}
			else
			{
				Console.WriteLine("Compile generated codes and found the following errors:");
				foreach (var ms in result.Diagnostics)
				{
					Console.WriteLine(ms.ToString());
				}

				Console.WriteLine($"Total Errors: {result.Diagnostics.Length}");
				Environment.Exit(2);
			}
		}
	}
}
