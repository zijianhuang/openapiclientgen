using System.Linq;
using System.Text.RegularExpressions;

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
