import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GetStatus {
		answered_by?: string | null;
		error?: string | null;
		option_selected?: string | null;
		phone_number?: string | null;
		previously_verified_at?: string | null;
		progress?: string | null;
		token?: string | null;
	}
	export interface GetStatusFormProperties {
		answered_by: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
		option_selected: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
		previously_verified_at: FormControl<string | null | undefined>,
		progress: FormControl<string | null | undefined>,
		token: FormControl<string | null | undefined>,
	}
	export function CreateGetStatusFormGroup() {
		return new FormGroup<GetStatusFormProperties>({
			answered_by: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			option_selected: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			previously_verified_at: new FormControl<string | null | undefined>(undefined),
			progress: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HTTPValidationError {
		detail?: Array<ValidationError>;
	}
	export interface HTTPValidationErrorFormProperties {
	}
	export function CreateHTTPValidationErrorFormGroup() {
		return new FormGroup<HTTPValidationErrorFormProperties>({
		});

	}

	export interface ValidationError {

		/** Required */
		loc: Array<string>;

		/** Required */
		msg: string;

		/** Required */
		type: string;
	}
	export interface ValidationErrorFormProperties {

		/** Required */
		msg: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlaceCall {
		answered_by?: string | null;
		error?: string | null;
		option_selected?: string | null;
		phone_number?: string | null;
		previously_verified_at?: string | null;
		progress?: string | null;
		token?: string | null;
	}
	export interface PlaceCallFormProperties {
		answered_by: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
		option_selected: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
		previously_verified_at: FormControl<string | null | undefined>,
		progress: FormControl<string | null | undefined>,
		token: FormControl<string | null | undefined>,
	}
	export function CreatePlaceCallFormGroup() {
		return new FormGroup<PlaceCallFormProperties>({
			answered_by: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			option_selected: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			previously_verified_at: new FormControl<string | null | undefined>(undefined),
			progress: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StatusCall {

		/** Required */
		data: GetStatus;

		/** Required */
		meta: VerifyNameMeta;
	}
	export interface StatusCallFormProperties {
	}
	export function CreateStatusCallFormGroup() {
		return new FormGroup<StatusCallFormProperties>({
		});

	}

	export interface VerifyNameMeta {
		job_id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		job_time?: number | null;

		/** Required */
		query: string;
	}
	export interface VerifyNameMetaFormProperties {
		job_id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		job_time: FormControl<number | null | undefined>,

		/** Required */
		query: FormControl<string | null | undefined>,
	}
	export function CreateVerifyNameMetaFormGroup() {
		return new FormGroup<VerifyNameMetaFormProperties>({
			job_id: new FormControl<string | null | undefined>(undefined),
			job_time: new FormControl<number | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VerifyName {

		/** Required */
		data: Array<VerifyNameData>;

		/** Required */
		meta: VerifyNameMeta;
	}
	export interface VerifyNameFormProperties {
	}
	export function CreateVerifyNameFormGroup() {
		return new FormGroup<VerifyNameFormProperties>({
		});

	}

	export interface VerifyNameData {
		business_name?: string | null;
		city?: string | null;
		department_code_and_type?: Array<string>;
		entity_type?: string | null;
		is_gstn_verified?: boolean | null;
		nature_of_business?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pincode?: number | null;
		registration_date?: string | null;
		registration_type?: string | null;
		state?: string | null;
	}
	export interface VerifyNameDataFormProperties {
		business_name: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		entity_type: FormControl<string | null | undefined>,
		is_gstn_verified: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pincode: FormControl<number | null | undefined>,
		registration_date: FormControl<string | null | undefined>,
		registration_type: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
	}
	export function CreateVerifyNameDataFormGroup() {
		return new FormGroup<VerifyNameDataFormProperties>({
			business_name: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<string | null | undefined>(undefined),
			is_gstn_verified: new FormControl<boolean | null | undefined>(undefined),
			pincode: new FormControl<number | null | undefined>(undefined),
			registration_date: new FormControl<string | null | undefined>(undefined),
			registration_type: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VerifyPhone {

		/** Required */
		data: PlaceCall;

		/** Required */
		meta: VerifyNameMeta;
	}
	export interface VerifyPhoneFormProperties {
	}
	export function CreateVerifyPhoneFormGroup() {
		return new FormGroup<VerifyPhoneFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Status Call
		 * Get api/v1/status/call
		 * @return {StatusCall} Successful Response
		 */
		Status_call_api_v1_status_call_get(query: string): Observable<StatusCall> {
			return this.http.get<StatusCall>(this.baseUri + 'api/v1/status/call?query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Status Sku
		 * Get api/v1/status/sku
		 * @return {StatusCall} Successful Response
		 */
		Status_sku_api_v1_status_sku_get(query: string): Observable<StatusCall> {
			return this.http.get<StatusCall>(this.baseUri + 'api/v1/status/sku?query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Verify Name
		 * Get api/v1/verify/name
		 * @return {VerifyName} Successful Response
		 */
		Verify_name_api_v1_verify_name_get(query: string, state: string | null | undefined, city: string | null | undefined): Observable<VerifyName> {
			return this.http.get<VerifyName>(this.baseUri + 'api/v1/verify/name?query=' + (query == null ? '' : encodeURIComponent(query)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&city=' + (city == null ? '' : encodeURIComponent(city)), {});
		}

		/**
		 * Verify Business
		 * Get api/v1/verify/phone
		 * @return {VerifyPhone} Successful Response
		 */
		Verify_business_api_v1_verify_phone_get(query: string, locking_period: any | null | undefined): Observable<VerifyPhone> {
			return this.http.get<VerifyPhone>(this.baseUri + 'api/v1/verify/phone?query=' + (query == null ? '' : encodeURIComponent(query)) + '&locking_period=' + locking_period, {});
		}

		/**
		 * Verify Sku
		 * Get api/v1/verify/sku
		 * @return {VerifyPhone} Successful Response
		 */
		Verify_sku_api_v1_verify_sku_get(query: string, locking_period: any | null | undefined): Observable<VerifyPhone> {
			return this.http.get<VerifyPhone>(this.baseUri + 'api/v1/verify/sku?query=' + (query == null ? '' : encodeURIComponent(query)) + '&locking_period=' + locking_period, {});
		}
	}

}

