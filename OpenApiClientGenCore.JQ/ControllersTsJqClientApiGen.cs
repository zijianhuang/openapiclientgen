using System.CodeDom;
using Fonlow.OpenApiClientGen.ClientTypes;


namespace Fonlow.CodeDom.Web.Ts
{
	/// <summary>
	/// Generate Axios TypeScript codes of the client API of the controllers
	/// </summary>
	public class ControllersTsJqClientApiGen : ControllersTsClientApiGenBase
	{
		/// <summary>
		/// 
		/// </summary>
		/// <param name="jsOutput"></param>
		/// <remarks>The client data types should better be generated through SvcUtil.exe with the DC option. The client namespace will then be the original namespace plus suffix ".client". </remarks>
		public ControllersTsJqClientApiGen(Settings settings, JSOutput jsOutput) : base(settings, jsOutput, () => new ClientApiTsJqFunctionGen(settings, jsOutput))
		{
		}

		protected override void AddBasicReferences()
		{
			CodeCompileUnit.ReferencedAssemblies.Add("///<reference path=\"HttpClient.ts\" />");
		}

		protected override void AddConstructor(CodeTypeDeclaration targetClass)
		{
			CodeConstructor constructor = new()
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final
			};

			// Add parameters.
			constructor.Parameters.Add(new CodeParameterDeclarationExpression(
				"string = HttpClient.locationOrigin", "private baseUri"));
			constructor.Parameters.Add(new CodeParameterDeclarationExpression(
				"HttpClientBase = new HttpClient()", "private httpClient"));
			constructor.Parameters.Add(new CodeParameterDeclarationExpression(
				"(xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any", "private error?"));
			constructor.Parameters.Add(new CodeParameterDeclarationExpression("{ [key: string]: any; }", "private statusCode?"));

			targetClass.Members.Add(constructor);
		}
	}


}
