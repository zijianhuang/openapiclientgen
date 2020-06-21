using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public static class NameFunc
	{
		/// <summary>
		/// stackexchange.com api uses C# keywords as parameters.
		/// </summary>
		static readonly string[] keywords = new string[] { "abstract", "as", "base", "bool", "break", "byte", "case", "catch", "char",
			"checked", "class", "const", "continue", "decimal", "default", "delegate", "do", "double", "else", "enum", "event", "explicit", "extern", "false", "finally",
			"fixed", "float", "for", "foreach", "goto", "if", "implicit", "in", "int", "interface", "internal", "is", "lock", "long", "namespace", "new",
			"null", "object", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "ref", "return", "sbyte", "sealed", "short",
			"sizeof", "stackalloc", "static", "string", "struct", "switch", "this", "throw", "true", "try", "typeof", "uint", "ulong", "unchecked", "unsafe", "ushort",
			"using", "virtual", "void", "volatile", "while" };

		public static bool IsKeyword(string s)
		{
			return keywords.Any(d => d == s);
		}

		//public static string RefineTypeName(string s)
		//{
		//	if (String.IsNullOrEmpty(s))
		//	{
		//		return s;
		//	}

		//	return ToTitleCase(s).Replace('-', '_');
		//}

		public static string RefineTypeName(string s, string nsInType)
		{
			if (String.IsNullOrEmpty(s))
			{
				return s;
			}

			var rs = (!String.IsNullOrEmpty(nsInType) && s.StartsWith(nsInType)) ? s.Remove(0, nsInType.Length) : s;

			return ToTitleCase(rs).Replace('-', '_');
		}

		public static string RefineEnumMemberName(string s)
		{
			if (String.IsNullOrEmpty(s))
			{
				return s;
			}

			var rs = s.Replace('.', '_').Replace('-', '_').Replace(' ', '_').Replace('/', '_')
						.Replace("(", "").Replace(")", "") //amazon ec2 api , enum with dot and hyphen in enum members
						.Replace(":", "")//atlassian api has this.
						.Replace('+', '_');

			if (!Char.IsLetter(rs[0]) && rs[0] != '_' && !int.TryParse(rs, out int _) &&!double.TryParse(rs, out double _))
			{
				rs = "_" + rs;
			}

			return rs;
		}

		public static string RefineParameterName(string s)
		{
			if (String.IsNullOrEmpty(s))
			{
				return s;
			}

			var rs = s.Replace('-', '_').Replace("$", "");
			
			if (IsKeyword(s))
			{
				return "_" + s;
			}

			return rs;
		}

		public static string RefinePropertyName(string s)
		{
			if (String.IsNullOrEmpty(s))
			{
				return s;
			}

			return NameFunc.ToTitleCase(s.Replace("$", "").Replace(':', '_').Replace('-', '_'));
		}

		public static string ToTitleCase(string s)
		{
			return String.IsNullOrEmpty(s) ? s : (char.ToUpper(s[0]) + (s.Length > 1 ? s.Substring(1) : String.Empty));
		}


	}
}
