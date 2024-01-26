namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public interface IRenamer
	{
		bool IsKeyword(string s);
		string RefineEnumMemberName(string s, ISettings settings = null);
		string RefineEnumValue(string s);
		string RefineParameterName(string s);
		string RefinePropertyName(string s);
		string RefineTypeName(string s, string nsInType, bool dotsToNamespaces = false);
	}
}