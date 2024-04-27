using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public class TypeScriptRenamer : RenamerBase, IRenamer
	{
		public TypeScriptRenamer() : base(new HashSet<string>(keywords))
		{
		}

		/// <summary>
		/// stackexchange.com api uses C# keywords as parameters. Provided by Daniel Rosenwasser @ https://github.com/microsoft/TypeScript/issues/2536
		/// </summary>
		static readonly string[] keywords = new string[] {"break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "export", 
			"extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", 
			"var", "void", "while", "with", 
			
			//Strict Mode Reserved Words
			"as", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", 
			////Contextual Keywords
			//"any", "boolean", "constructor", "declare", "get", "module", "require", "number", "set", "string", "symbol", "type", "from", "of"
		};
	}

}
