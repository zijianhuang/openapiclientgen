using System.Diagnostics;

class Program
{
	static void Main(string[] args)
	{
		if (args.Length < 2)
		{
			Console.WriteLine(@"Need the NG2TestBed dir which should be like C:\MyDir containing sub dir NG2TestBed, and a NG2 file path.");
			Console.WriteLine(@"NgBuild.exe C:\OpenApiExamples\ C:\OpenApiExamples\NSwag\PetShopNg\PetshopClient.ts");
			Environment.Exit(1);
		}

		var path = args[1];
		var codes = System.IO.File.ReadAllText(path);
		var result = CheckNGBuild(codes, args[0]);
		if (result==0)
		{
			Console.WriteLine("Generated codes pass compilation.");
		}
		else
		{
			Console.WriteLine("Build generated codes and found some errors.");
			Environment.Exit(2);
		}
	}

	static int CheckNGBuild(string codes, string ng2TestBedDir)
	{
		File.WriteAllText(Path.Combine(ng2TestBedDir, @"NG2TestBed\src\clientapi\ClientApiAuto.ts"), codes);
		return Build(Path.Combine(ng2TestBedDir, "NG2TestBed"));
	}

	static int Build(string ng2Dir)
	{
		var currentDir = Directory.GetCurrentDirectory();
		Directory.SetCurrentDirectory(ng2Dir); // setting ProcessStartInfo.WorkingDirectory is not always working. Working in this demo, but not working in other heavier .net core Web app.
		var ngCmd = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), "npm\\ng.cmd");
		ProcessStartInfo info = new(ngCmd, "build --source-map=false --build-optimizer=false")
		{
			UseShellExecute = false,
			RedirectStandardError = true,
		};

		try
		{
			var process = Process.Start(info);
			var errorMsg = process.StandardError.ReadToEnd(); //before WaitForExit() https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.process.standarderror?view=netcore-3.1#System_Diagnostics_Process_StandardError
			if (!String.IsNullOrEmpty(errorMsg))
			{
				Console.WriteLine("Code generated but with ng build errors:");
				Console.WriteLine(errorMsg);
			}

			process.WaitForExit();

			return process.ExitCode;
		}
		finally
		{
			Directory.SetCurrentDirectory(currentDir);
		}
	}
}




