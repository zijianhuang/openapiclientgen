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
		 * Gets a similarity key for matching purposes for full name data
		 * Gets a similarity key for matching purposes for full name data, where first and last name are part of the same field.
		 * Get getfullnamematch
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} fullname Full name from which to generate similarity key
		 * @return {GetfullnamematchReturn} Generated similarity key for full name data
		 */
		Getfullnamematch(license: string, fullname: string): Observable<GetfullnamematchReturn> {
			return this.http.get<GetfullnamematchReturn>(this.baseUri + 'getfullnamematch?license=' + (license == null ? '' : encodeURIComponent(license)) + '&fullname=' + (fullname == null ? '' : encodeURIComponent(fullname)), {});
		}
	}

	export interface GetfullnamematchReturn {
		Code?: string | null;
		Credits?: string | null;
		Simkey?: string | null;
	}
	export interface GetfullnamematchReturnFormProperties {
		Code: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		Simkey: FormControl<string | null | undefined>,
	}
	export function CreateGetfullnamematchReturnFormGroup() {
		return new FormGroup<GetfullnamematchReturnFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			Simkey: new FormControl<string | null | undefined>(undefined),
		});

	}

}

