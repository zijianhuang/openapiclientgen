using System;
using System.IO;
using System.Linq;

namespace GenerateCases
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Read a text file in args1 to generate cases into file in args2.");
			if (args.Length <2)
			{
				Console.WriteLine("Need a text file path and an output file path.");
				return;
			}

			var filePath = args[0];
			var outputPath = args[1];
			var fileNames = File.ReadAllLines(filePath);
			File.WriteAllLines(outputPath, fileNames.Select(d =>
			{
				var prefix = @"C:\VSProjects\Study\openapi-directory\APIs\";
				var funcNameSuffix = d.Remove(0, prefix.Length).Replace('.', '_').Replace('\\', '_').Replace('-', '_');
				return $@"
		[Fact]
		public void Test_{funcNameSuffix}()
		{{
			helper.GenerateFromOpenApiAndBuild(@""{d}"");
		}}";
			}));
		}
	}
}
