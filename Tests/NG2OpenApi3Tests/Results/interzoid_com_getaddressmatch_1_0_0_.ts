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
		 * Gets a similarity key for matching purposes for address data
		 * Gets a similarity key for matching purposes for street address data
		 * Get getaddressmatch
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} address Address from which to generate similarity key
		 * @return {GetaddressmatchReturn} Generated similarity key for address data
		 */
		Getaddressmatch(license: string, address: string): Observable<GetaddressmatchReturn> {
			return this.http.get<GetaddressmatchReturn>(this.baseUri + 'getaddressmatch?license=' + (license == null ? '' : encodeURIComponent(license)) + '&address=' + (address == null ? '' : encodeURIComponent(address)), {});
		}
	}

	export interface GetaddressmatchReturn {
		Code?: string | null;
		Credits?: string | null;
		Simkey?: string | null;
	}
	export interface GetaddressmatchReturnFormProperties {
		Code: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		Simkey: FormControl<string | null | undefined>,
	}
	export function CreateGetaddressmatchReturnFormGroup() {
		return new FormGroup<GetaddressmatchReturnFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			Simkey: new FormControl<string | null | undefined>(undefined),
		});

	}

}

