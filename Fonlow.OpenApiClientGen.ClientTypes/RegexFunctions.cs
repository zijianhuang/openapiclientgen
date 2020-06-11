using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using System.Linq;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public static class RegexFunctions
	{
		public static string RefineUrlWithHyphenInParameters(string s)
		{
			var regex = new Regex("{\\w*(-\\w*)+}");
			string r = s;
			MatchCollection matches = regex.Matches(s);
			foreach (var m in matches.ToArray())
			{
				var refinedP = m.Value.Replace('-', '_');
				r = r.Replace(m.Value, refinedP);
			}

			return r;
		}
	}
}
