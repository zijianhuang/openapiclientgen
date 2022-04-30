using System.CodeDom;
using Fonlow.OpenApiClientGen.ClientTypes;

namespace Fonlow.CodeDom.Web.Ts
{
	/// <summary>
	/// Generate Axios TypeScript codes of the client API of the controllers
	/// </summary>
	public class ControllersTsAureliaClientApiGen : ControllersTsClientApiGenBase
	{
		/// <summary>
		/// 
		/// </summary>
		/// <param name="jsOutput"></param>
		/// <remarks>The client data types should better be generated through SvcUtil.exe with the DC option. The client namespace will then be the original namespace plus suffix ".client". </remarks>
		public ControllersTsAureliaClientApiGen(Settings settings, JSOutput jsOutput) : base(settings, jsOutput, () => new ClientApiTsAureliaFunctionGen(settings, jsOutput))
		{
		}

		protected override void AddBasicReferences()
		{
			CodeCompileUnit.ReferencedAssemblies.Add("import {HttpClient} from 'aurelia-fetch-client';");
			CodeCompileUnit.ReferencedAssemblies.Add("import {autoinject} from 'aurelia-framework';");
		}

		protected override void AddConstructor(CodeTypeDeclaration targetClass)
		{
			CodeConstructor constructor = new()
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final
			};

			// Add parameters.
			constructor.Parameters.Add(new CodeParameterDeclarationExpression(
				"HttpClient", "private http"));
			targetClass.Members.Add(constructor);
		}

		protected override CodeAttributeDeclarationCollection CreateClassCustomAttributes()
		{
			return new CodeAttributeDeclarationCollection(new CodeAttributeDeclaration[] { new CodeAttributeDeclaration("autoinject") });
		}
	}


}
