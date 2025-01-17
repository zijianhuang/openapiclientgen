﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public abstract class RenamerBase : IRenamer
	{
		protected RenamerBase(HashSet<string> keywordsHashSet)
		{
			KeywordsHashSet = keywordsHashSet;
		}

		protected HashSet<string> KeywordsHashSet { get; }

		public bool IsKeyword(string s)
		{
			return KeywordsHashSet.Contains(s);
		}

		/// <summary>
		/// Normalize type name and remove namespace prefix.
		/// </summary>
		/// <param name="s"></param>
		/// <param name="nsInType"></param>
		/// <returns></returns>
		public string RefineTypeName(string s, string nsInType, bool dotsToNamespaces = false)
		{
			if (String.IsNullOrEmpty(s))
			{
				return s;
			}

			if (IsKeyword(s))
			{
				return s + "_";
			}

			if (Char.IsDigit(s[0]))
			{
				s = "_" + s;
			}

			var rs = (!String.IsNullOrEmpty(nsInType) && s.StartsWith(nsInType, StringComparison.Ordinal)) ? s.Remove(0, nsInType.Length + 1) : s;//nsInType.Length+1 to remove the dot after namespace

			var r = ToTitleCase(rs).Replace('-', '_')
				.Replace("(", "").Replace(")", "")
				.Replace("&", "And")
				.Replace("?", "_")
				.Replace("+", "_")
				.Replace('[', '_').Replace("]", ""); // for something like PartialFindResult[ActivityEntryForApiContract]
			return dotsToNamespaces ? r : r.Replace(".", string.Empty);
		}

		/// <summary>
		/// Enum member names from def may be invalid in C# and TS, as many definitions use wide variety of symbols as enum names.
		/// </summary>
		/// <param name="s"></param>
		/// <param name="settings"></param>
		/// <returns></returns>
		public string RefineEnumMemberName(string s, ISettings settings = null)
		{
#if DEBUG
			//test bed
			if (s == "-1")
			{
				Debug.WriteLine("ccc");
			}
#endif
			if (String.IsNullOrEmpty(s))
			{
				return "_";
			}

			if (IsKeyword(s))
			{
				return "_" + s;
			}

			var b = s;

			if (double.TryParse(b, out _)) // some apis define negative value
			{
				b = "_" + b;
			}

			b = b.Replace('.', '_').Replace(' ', '_').Replace('/', '_')
						.Replace("(", "").Replace(")", "") //amazon ec2 api , enum with dot and hyphen in enum members
						.Replace(":", "")//atlassian api has this.
						.Replace("*", "_")//aws s3 has this
						.Replace("+", "Plus")
						.Replace("-", "Minus")
						.Replace('$', '_')
						.Replace('#', '_')
						.Replace('|', '_')
						.Replace("'", "_")
						.Replace("=", "Equal")
						.Replace(">", "Greater")
						.Replace("<", "LessThan")
						.Replace("!", "Exclamation")
						.Replace(";", "_")
						.Replace("`", "_")
						.Replace("&", "And")
						.Replace("%", "Percent")
						.Replace('[', '_').Replace("]", "")
						.Replace(" ", "") //azure.com\appconfiguration seems to define a flags enum as a CSV. But Swagger does not seem to support flags enum.
						.Replace(",", "");

			if (!Char.IsLetter(b[0]) && b[0] != '_' && Char.IsDigit(b[0]))
			{
				b = "_" + b;
			}

			return b;
		}

		public string RefineEnumValue(string s)
		{
#if DEBUG
			if (s == "-1")
			{
				Debug.WriteLine("ccc");
			}
#endif
			var b = RefineEnumMemberName(s);

			if (int.TryParse(b, out _))
			{
				System.Diagnostics.Debug.Assert(b != "-1");
				b = "_" + b;
			}

			b = b.Replace('.', '_').Replace("-", "Minus").Replace(' ', '_').Replace('/', '_')
						.Replace("(", "").Replace(")", "") //amazon ec2 api , enum with dot and hyphen in enum members
						.Replace(":", "")//atlassian api has this.
						.Replace("+", "Plus");

			if (!Char.IsLetter(b[0]) && b[0] != '_' && Char.IsDigit(b[0]))
			{
				b = "_" + b;
			}

			return b;
		}

		public string RefineParameterName(string s)
		{
			if (String.IsNullOrEmpty(s))
			{
				return s;
			}

			if (IsKeyword(s))
			{
				return "_" + s;
			}

			var rs = s.Replace('-', '_').Replace("$", "").Replace('.', '_').Replace(':', '_')
				.Replace("(", "").Replace(")", "")
				.Replace('[', '_').Replace("]", "");

			return rs;
		}

		public string RefinePropertyName(string s)
		{
			if (String.IsNullOrEmpty(s))
			{
				return s;
			}

			return NameFunc.ToTitleCase(s.Replace("$", "").Replace(':', '_').Replace(';', '_').Replace('-', '_').Replace('.', '_').Replace(',', '_').Replace('?', '_')
				.Replace("(", "").Replace(")", "")
				.Replace("{", "").Replace("}", "")
				.Replace("+", "Plus")
				.Replace("-", "Minus")
				.Replace("%", "Percent")
				.Replace("&", "And")
				.Replace("=", "_")
				.Replace("{", "_")
				.Replace("}", "_")
				.Replace('[', '_').Replace(']', '_').Replace("/", "Slash").Replace('#', '_').Replace('@', '_').Replace('$', '_').Replace("'", "_").Replace("`", "_")
				.Replace(' ', '_'));
		}

		///// <summary>
		///// obsolete
		///// </summary>
		///// <param name="s"></param>
		///// <returns></returns>
		//public static string RefineTsPropertyName(string s)
		//{
		//	if (String.IsNullOrEmpty(s))
		//	{
		//		return s;
		//	}

		//	return s.Replace("$", "").Replace(':', '_').Replace('-', '_').Replace(' ', '_').Replace('.', '_');
		//}

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
