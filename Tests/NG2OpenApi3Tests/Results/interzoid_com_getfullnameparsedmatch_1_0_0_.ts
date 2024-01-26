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
		 * Gets a similarity key for matching purposes for parsed full name data
		 * Gets a similarity key for matching purposes for parsed full name data, where the first name and last name are split into separate fields in the source data rather than combined.
		 * Get getfullnameparsedmatch
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} firstname First name from which to generate similarity key
		 * @param {string} lastname Last name from which to generate similarity key
		 * @return {GetfullnameparsedmatchReturn} Generated similarity key for parsed full name data
		 */
		Getfullnameparsedmatch(license: string, firstname: string, lastname: string): Observable<GetfullnameparsedmatchReturn> {
			return this.http.get<GetfullnameparsedmatchReturn>(this.baseUri + 'getfullnameparsedmatch?license=' + (license == null ? '' : encodeURIComponent(license)) + '&firstname=' + (firstname == null ? '' : encodeURIComponent(firstname)) + '&lastname=' + (lastname == null ? '' : encodeURIComponent(lastname)), {});
		}
	}

	export interface GetfullnameparsedmatchReturn {
		Code?: string | null;
		Credits?: string | null;
		Simkey?: string | null;
	}
	export interface GetfullnameparsedmatchReturnFormProperties {
		Code: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		Simkey: FormControl<string | null | undefined>,
	}
	export function CreateGetfullnameparsedmatchReturnFormGroup() {
		return new FormGroup<GetfullnameparsedmatchReturnFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			Simkey: new FormControl<string | null | undefined>(undefined),
		});

	}

}

