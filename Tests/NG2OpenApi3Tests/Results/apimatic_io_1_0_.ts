import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

	export enum ConvertAPIFormat { swagger10 = 'swagger10', swagger20 = 'swagger20', swaggeryaml = 'swaggeryaml', apiblueprint = 'apiblueprint', wadl2009 = 'wadl2009', raml = 'raml', apimatic = 'apimatic' }

}

