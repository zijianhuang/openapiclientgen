using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public class CSharpRenamer : RenamerBase, IRenamer
	{
		public CSharpRenamer() : base(new HashSet<string>(keywords))
		{
		}

		/// <summary>
		/// stackexchange.com api uses C# keywords as parameters. As listed at https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/
		/// </summary>
		static readonly string[] keywords = new string[] { "abstract", "as", "base", "bool", "break", "byte", "case", "catch", "char", "checked", "class", 
			"const", "continue", "decimal", "default", "delegate", "do", "double", "else", "enum", "", "event", "explicit", "extern", "false", "finally", "fixed", "float", 
			"for", "foreach", "goto", "if", "implicit", "in", "int", "interface", "internal", "is", "lock", "long", "", "namespace", "new", "null", "object", "operator", 
			"out", "override", "params", "private", "protected", "public", "readonly", "ref", "return", "sbyte", "sealed", "short", "sizeof", "stackalloc", "", "static", 
			"string", "struct", "switch", "this", "throw", "true", "try", "typeof", "uint", "ulong", "unchecked", "unsafe", "ushort", "using", "virtual", "void", "volatile", "while",
			
			//Extra for CS codegen
			"Task", "HttpMethod", "System", "await",
		};
	}

}
