import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Leg1 {

		/** Required */
		destination_airport_code: string;

		/** Required */
		origin_airport_code: string;

		/** Required */
		travel_class: string;
	}
	export interface Leg1FormProperties {

		/** Required */
		destination_airport_code: FormControl<string | null | undefined>,

		/** Required */
		origin_airport_code: FormControl<string | null | undefined>,

		/** Required */
		travel_class: FormControl<string | null | undefined>,
	}
	export function CreateLeg1FormGroup() {
		return new FormGroup<Leg1FormProperties>({
			destination_airport_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			origin_airport_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			travel_class: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AirtravelMultilegRequest {

		/** Required */
		apiKey_l1: string;

		/** Required */
		apiKey_l2: string;

		/** Required */
		contactEmail: string;

		/** Required */
		contactFirstName: string;

		/** Required */
		contactLastName: string;

		/** Required */
		leg1: Leg1;

		/** Required */
		leg2: Leg1;

		/** Required */
		leg3: Leg1;

		/** Required */
		legs_count: string;

		/** Required */
		number_of_passengers: string;

		/** Required */
		travel_mode: string;
	}
	export interface AirtravelMultilegRequestFormProperties {

		/** Required */
		apiKey_l1: FormControl<string | null | undefined>,

		/** Required */
		apiKey_l2: FormControl<string | null | undefined>,

		/** Required */
		contactEmail: FormControl<string | null | undefined>,

		/** Required */
		contactFirstName: FormControl<string | null | undefined>,

		/** Required */
		contactLastName: FormControl<string | null | undefined>,

		/** Required */
		legs_count: FormControl<string | null | undefined>,

		/** Required */
		number_of_passengers: FormControl<string | null | undefined>,

		/** Required */
		travel_mode: FormControl<string | null | undefined>,
	}
	export function CreateAirtravelMultilegRequestFormGroup() {
		return new FormGroup<AirtravelMultilegRequestFormProperties>({
			apiKey_l1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			apiKey_l2: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contactEmail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contactFirstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contactLastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			legs_count: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number_of_passengers: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			travel_mode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * airtravelMultileg
		 * Post airtravelMultileg
		 * @return {void} 
		 */
		AirtravelMultileg(requestBody: AirtravelMultilegRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'airtravelMultileg', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

