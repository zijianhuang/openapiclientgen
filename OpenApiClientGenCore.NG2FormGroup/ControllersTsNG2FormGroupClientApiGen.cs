using Fonlow.OpenApiClientGen.ClientTypes;
using Fonlow.TypeScriptCodeDom;

namespace Fonlow.CodeDom.Web.Ts
{
	public class ControllersTsNG2FormGroupClientApiGen : ControllersTsNG2ClientApiGen
	{
		public ControllersTsNG2FormGroupClientApiGen(Settings settings, JSOutput jsOutput) : base(settings, jsOutput)
		{

		}

		protected override CodeObjectHelper CreateCodeObjectHelper(bool asModule)
		{
			return new CodeObjectHelperForNg2FormGroup(CodeCompileUnit.Namespaces);
		}

		protected override void AddBasicReferences()
		{
			CodeCompileUnit.ReferencedAssemblies.Add("import { Injectable, Inject } from '@angular/core';");
			CodeCompileUnit.ReferencedAssemblies.Add("import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';");
			CodeCompileUnit.ReferencedAssemblies.Add("import { Observable } from 'rxjs';");
			CodeCompileUnit.ReferencedAssemblies.Add("import { FormControl, FormGroup, Validators } from '@angular/forms';");
		}
	}
}