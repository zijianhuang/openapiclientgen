using Fonlow.OpenApiClientGen.ClientTypes;
using Fonlow.TypeScriptCodeDom;

namespace Fonlow.CodeDom.Web.Ts
{
	public class ControllersTsNG2FormGroupClientApiGen : ControllersTsNG2ClientApiGen
	{
		public ControllersTsNG2FormGroupClientApiGen(ISettings settings, JSOutput jsOutput) : base(settings, jsOutput)
		{

		}

		protected override CodeObjectHelper CreateCodeObjectHelper(bool asModule)
		{
			return new CodeObjectHelperForNg2FormGroup(CodeCompileUnit.Namespaces, jsOutput.NgDateOnlyFormControlEnabled);
		}

		protected override void AddBasicReferences()
		{
			CodeCompileUnit.ReferencedAssemblies.Add("import { Injectable, Inject } from '@angular/core';");
			CodeCompileUnit.ReferencedAssemblies.Add("import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';");
			CodeCompileUnit.ReferencedAssemblies.Add("import { Observable } from 'rxjs';");
			CodeCompileUnit.ReferencedAssemblies.Add("import { FormControl, FormGroup, Validators } from '@angular/forms';");

			if (jsOutput.NgDateOnlyFormControlEnabled)
			{
				CodeCompileUnit.ReferencedAssemblies.Add(@"
function CreateDateOnlyFormControl(){
	const fc = new FormControl<any | null | undefined>(undefined);
	fc.valueChanges.subscribe(v=>{
		if (v && v instanceof Date){
			fc.setValue(v.toLocaleDateString(""sv"").substring(0, 10));
		}
	});

	return fc;
}
");
			}

		}
	}
}