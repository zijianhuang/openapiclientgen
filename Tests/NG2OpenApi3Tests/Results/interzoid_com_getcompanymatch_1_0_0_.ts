import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a similarity key for matching purposes for company name data
		 * Gets a similarity key for matching purposes for company name data
		 * Get getcompanymatch
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} company Company name from which to generate similarity key
		 * @return {GetcompanymatchReturn} Generated similarity key for company name data
		 */
		Getcompanymatch(license: string, company: string): Observable<GetcompanymatchReturn> {
			return this.http.get<GetcompanymatchReturn>(this.baseUri + 'getcompanymatch?license=' + (license == null ? '' : encodeURIComponent(license)) + '&company=' + (company == null ? '' : encodeURIComponent(company)), {});
		}
	}

	export interface GetcompanymatchReturn {
		Code?: string | null;
		Credits?: string | null;
		Simkey?: string | null;
	}
	export interface GetcompanymatchReturnFormProperties {
		Code: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		Simkey: FormControl<string | null | undefined>,
	}
	export function CreateGetcompanymatchReturnFormGroup() {
		return new FormGroup<GetcompanymatchReturnFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			Simkey: new FormControl<string | null | undefined>(undefined),
		});

	}

}

