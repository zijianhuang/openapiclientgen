using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public static class NameFunc
	{
		public static bool IsKeyNameValidTsPropertyName(string s)
		{
			if (String.IsNullOrEmpty(s))
			{
				return false;
			}

			var ok1 = !(s.Contains('.') || s.Contains('$') || s.Contains(':') || s.Contains('-') || s.Contains('.') || s.Contains('[') || s.Contains(']')
				|| s.Contains('/') || s.Contains('#') || s.Contains(' ') || s.Contains(',') || s.Contains('+') || s.Contains('(') || s.Contains(')') || s.Contains('%'));
			var ok2 = Char.IsLetter(s[0]) || s[0] == '_';
			return ok1 && ok2;
		}

		public static string ToTitleCase(string s)
		{
			return String.IsNullOrEmpty(s) ? s : (char.ToUpper(s[0]) + (s.Length > 1 ? s.Substring(1) : String.Empty));
		}

		public static string[] FindNamespacesInClassNames(IEnumerable<string> names)
		{
			var nss = names.Select(n => GetNamespaceOfClassName(n));
			var r = nss.Distinct().Where(k => k != null).ToArray();
			return r;
		}

		public static string GetNamespaceOfClassName(string className)
		{
			var lastIndex = className.LastIndexOf('.');
			return (lastIndex >= 0) ? className.Substring(0, lastIndex) : null;
		}

		public static string CombineNamespaceWithClassName(string ns, string typeName)
		{
			return String.IsNullOrEmpty(ns) ? typeName : (ns + "." + typeName);
		}


	}

}
