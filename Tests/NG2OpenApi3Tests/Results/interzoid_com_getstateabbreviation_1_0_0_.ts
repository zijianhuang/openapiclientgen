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
		 * Gets a two-letter abbreviation for a state or province name data
		 * Gets a two-letter abbreviation for a state or province given a permutation of state or province data.
		 * Get getstateabbreviation
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} state State (or province) name from which to retrieve the two letter abbreviation.
		 * @return {GetstateabbreviationReturn} State (or province) standardized two-letter abbreviation
		 */
		Getstateabbreviation(license: string, state: string): Observable<GetstateabbreviationReturn> {
			return this.http.get<GetstateabbreviationReturn>(this.baseUri + 'getstateabbreviation?license=' + (license == null ? '' : encodeURIComponent(license)) + '&state=' + (state == null ? '' : encodeURIComponent(state)), {});
		}
	}

	export interface GetstateabbreviationReturn {
		Abbreviation?: string | null;
		Code?: string | null;
		Credits?: string | null;
		State?: string | null;
	}
	export interface GetstateabbreviationReturnFormProperties {
		Abbreviation: FormControl<string | null | undefined>,
		Code: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
	}
	export function CreateGetstateabbreviationReturnFormGroup() {
		return new FormGroup<GetstateabbreviationReturnFormProperties>({
			Abbreviation: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
		});

	}

}

