using System;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;

namespace Fonlow.OpenApiClientGen.ClientTypes;

public static class StringExtensions
{
	public static string ToPascalCase(this string original)
	{
		var invalidCharsRgx = new Regex("[^_a-zA-Z0-9]");
		var whiteSpace = new Regex(@"(?<=\s)");
		var startsWithLowerCaseChar = new Regex("^[a-z]");
		var firstCharFollowedByUpperCasesOnly = new Regex("(?<=[A-Z])[A-Z0-9]+$");
		var lowerCaseNextToNumber = new Regex("(?<=[0-9])[a-z]");
		var upperCaseInside = new Regex("(?<=[A-Z])[A-Z]+?((?=[A-Z][a-z])|(?=[0-9]))");

		// replace white spaces with undescore, then replace all invalid chars with empty string
		var pascalCase = invalidCharsRgx.Replace(whiteSpace.Replace(original, "_"), string.Empty)
			// split by underscores
			.Split('_', StringSplitOptions.RemoveEmptyEntries)
			// set first letter to uppercase
			.Select(w => startsWithLowerCaseChar.Replace(w, m => m.Value.ToUpper(CultureInfo.CurrentCulture)))
			// replace second and all following upper case letters to lower if there is no next lower (ABC -> Abc)
			.Select(w => firstCharFollowedByUpperCasesOnly.Replace(w, m => m.Value.ToLower(CultureInfo.CurrentCulture)))
			// set upper case the first lower case following a number (Ab9cd -> Ab9Cd)
			.Select(w => lowerCaseNextToNumber.Replace(w, m => m.Value.ToUpper(CultureInfo.CurrentCulture)))
			// lower second and next upper case letters except the last if it follows by any lower (ABcDEf -> AbcDef)
			.Select(w => upperCaseInside.Replace(w, m => m.Value.ToLower(CultureInfo.CurrentCulture)));

		return string.Concat(pascalCase);
	}
}