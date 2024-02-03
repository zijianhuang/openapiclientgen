import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** API invocation or processing error */
	export interface APIError {
		APIErrorErrors?: Array<APIErrorErrors>;
	}

	/** API invocation or processing error */
	export interface APIErrorFormProperties {
	}
	export function CreateAPIErrorFormGroup() {
		return new FormGroup<APIErrorFormProperties>({
		});

	}

	export interface APIErrorErrors {
		code?: string | null;
		detail?: string | null;
		status?: string | null;
		title?: string | null;
	}
	export interface APIErrorErrorsFormProperties {
		code: FormControl<string | null | undefined>,
		detail: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAPIErrorErrorsFormGroup() {
		return new FormGroup<APIErrorErrorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** API Platform authorization (API token) error */
	export interface AuthorizationError {
		message?: string | null;
	}

	/** API Platform authorization (API token) error */
	export interface AuthorizationErrorFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationErrorFormGroup() {
		return new FormGroup<AuthorizationErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Veteran status confirmation for an individual */
	export interface VeteranStatusConfirmation {

		/**
		 * Whether the system could confirm the Veteran status of an individual based on traits
		 */
		veteran_status?: VeteranStatusConfirmationVeteran_status | null;
	}

	/** Veteran status confirmation for an individual */
	export interface VeteranStatusConfirmationFormProperties {

		/**
		 * Whether the system could confirm the Veteran status of an individual based on traits
		 */
		veteran_status: FormControl<VeteranStatusConfirmationVeteran_status | null | undefined>,
	}
	export function CreateVeteranStatusConfirmationFormGroup() {
		return new FormGroup<VeteranStatusConfirmationFormProperties>({
			veteran_status: new FormControl<VeteranStatusConfirmationVeteran_status | null | undefined>(undefined),
		});

	}

	export enum VeteranStatusConfirmationVeteran_status { confirmed = 'confirmed', 'not confirmed' = 'not confirmed' }


	/** Attributes required to retrieve a Veteran's status */
	export interface VeteranStatusRequest {

		/**
		 * Birth date for the person of interest in any valid ISO8601 format
		 * Required
		 */
		birth_date: string;

		/**
		 * First name for the person of interest
		 * Required
		 */
		first_name: string;

		/** Optional gender of M or F for the person of interest */
		gender?: VeteranStatusRequestGender | null;

		/**
		 * Last name for the person of interest
		 * Required
		 */
		last_name: string;

		/** Optional middle name for the person of interest */
		middle_name?: string | null;

		/**
		 * Social Security Number for the person of interest with or without dashes
		 * Required
		 */
		ssn: string;
	}

	/** Attributes required to retrieve a Veteran's status */
	export interface VeteranStatusRequestFormProperties {

		/**
		 * Birth date for the person of interest in any valid ISO8601 format
		 * Required
		 */
		birth_date: FormControl<string | null | undefined>,

		/**
		 * First name for the person of interest
		 * Required
		 */
		first_name: FormControl<string | null | undefined>,

		/** Optional gender of M or F for the person of interest */
		gender: FormControl<VeteranStatusRequestGender | null | undefined>,

		/**
		 * Last name for the person of interest
		 * Required
		 */
		last_name: FormControl<string | null | undefined>,

		/** Optional middle name for the person of interest */
		middle_name: FormControl<string | null | undefined>,

		/**
		 * Social Security Number for the person of interest with or without dashes
		 * Required
		 */
		ssn: FormControl<string | null | undefined>,
	}
	export function CreateVeteranStatusRequestFormGroup() {
		return new FormGroup<VeteranStatusRequestFormProperties>({
			birth_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			first_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gender: new FormControl<VeteranStatusRequestGender | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			middle_name: new FormControl<string | null | undefined>(undefined),
			ssn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VeteranStatusRequestGender { M = 'M', F = 'F' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get confirmation about an individual's Veteran status according to the VA
		 * Post status
		 * @return {VeteranStatusConfirmation} Confirmation status successfully retrieved
		 */
		GetVeteranStatus(requestBody: VeteranStatusRequest): Observable<VeteranStatusConfirmation> {
			return this.http.post<VeteranStatusConfirmation>(this.baseUri + 'status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

