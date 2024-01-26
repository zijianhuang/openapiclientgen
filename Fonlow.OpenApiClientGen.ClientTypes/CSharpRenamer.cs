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
		public CSharpRenamer() : base()
		{
			KeywordsHashSet = new HashSet<string>(csKeywords);
		}

		/// <summary>
		/// stackexchange.com api uses C# keywords as parameters.
		/// </summary>
		static readonly string[] csKeywords = new string[] { "abstract", "as", "base", "bool", "break", "byte", "case", "catch", "char",
			"checked", "class", "const", "continue", "decimal", "default", "delegate", "do", "double", "else", "enum", "event", "explicit", "extern", "false", "finally",
			"fixed", "float", "for", "foreach", "goto", "if", "implicit", "in", "int", "interface", "internal", "is", "lock", "long", "namespace", "new",
			"null", "object", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "ref", "return", "sbyte", "sealed", "short",
			"sizeof", "stackalloc", "static", "string", "struct", "switch", "this", "throw", "true", "try", "typeof", "uint", "ulong", "unchecked", "unsafe", "ushort",
			"using", "virtual", "void", "volatile", "while", "Task", "HttpMethod", "System", "await",

			//TS/JS reserved words
			"package", "export", "extends", "import", "instanceof", "super", "this", "yield", "with", "function", "in", "delete", "default", "debugger", "var", "let",
			"throws", "arguments", "synchronized", "eval", "final"
		};
	}

}
