import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Account_unauthorized {

		/** The status code of the response. `200` indicates a successful request. */
		'error-code'?: string | null;

		/** The status code description */
		'error-code-label'?: string | null;
	}
	export interface Account_unauthorizedFormProperties {

		/** The status code of the response. `200` indicates a successful request. */
		'error-code': FormControl<string | null | undefined>,

		/** The status code description */
		'error-code-label': FormControl<string | null | undefined>,
	}
	export function CreateAccount_unauthorizedFormGroup() {
		return new FormGroup<Account_unauthorizedFormProperties>({
			'error-code': new FormControl<string | null | undefined>(undefined),
			'error-code-label': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Available_numbers {

		/**
		 * The total amount of numbers available in the pool.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** A paginated array of available numbers and their details. */
		numbers?: Array<Availablenumber>;
	}
	export interface Available_numbersFormProperties {

		/**
		 * The total amount of numbers available in the pool.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
	}
	export function CreateAvailable_numbersFormGroup() {
		return new FormGroup<Available_numbersFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Availablenumber {

		/** The monthly rental cost for this number, in Euros */
		cost?: string | null;

		/**
		 * The two character country code in ISO 3166-1 alpha-2 format
		 * Min length: 2
		 * Max length: 2
		 */
		country?: string | null;

		/** The capabilities of the number: `SMS` or `VOICE` or `SMS,VOICE` or `SMS,MMS` or `VOICE,MMS` or `SMS,MMS,VOICE` */
		features?: Array<string>;

		/** An available inbound virtual number. */
		msisdn?: string | null;

		/** The type of number: `landline`, `landline-toll-free` or `mobile-lvn` */
		type?: string | null;
	}
	export interface AvailablenumberFormProperties {

		/** The monthly rental cost for this number, in Euros */
		cost: FormControl<string | null | undefined>,

		/**
		 * The two character country code in ISO 3166-1 alpha-2 format
		 * Min length: 2
		 * Max length: 2
		 */
		country: FormControl<string | null | undefined>,

		/** An available inbound virtual number. */
		msisdn: FormControl<string | null | undefined>,

		/** The type of number: `landline`, `landline-toll-free` or `mobile-lvn` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAvailablenumberFormGroup() {
		return new FormGroup<AvailablenumberFormProperties>({
			cost: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2)]),
			msisdn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Inbound_numbers {

		/**
		 * The total amount of numbers owned by the account
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** A paginated array of numbers and their details */
		numbers?: Array<Ownednumber>;
	}
	export interface Inbound_numbersFormProperties {

		/**
		 * The total amount of numbers owned by the account
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
	}
	export function CreateInbound_numbersFormGroup() {
		return new FormGroup<Inbound_numbersFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Ownednumber {

		/**
		 * The two character country code in ISO 3166-1 alpha-2 format
		 * Min length: 2
		 * Max length: 2
		 */
		country?: string | null;

		/** The capabilities of the number: `SMS` or `VOICE` or `SMS,VOICE` or `SMS,MMS` or `VOICE,MMS` or `SMS,MMS,VOICE` */
		features?: Array<string>;

		/** The messages webhook type: always `app` */
		messagesCallbackType?: string | null;

		/** An Application ID */
		messagesCallbackValue?: string | null;

		/** The URL of the webhook endpoint that handles inbound messages */
		moHttpUrl?: string | null;

		/** An available inbound virtual number. */
		msisdn?: string | null;

		/** The type of number: `landline`, `landline-toll-free` or `mobile-lvn` */
		type?: string | null;

		/** The voice webhook type: `sip`, `tel`, or `app` */
		voiceCallbackType?: string | null;

		/** A SIP URI, telephone number or Application ID */
		voiceCallbackValue?: string | null;
	}
	export interface OwnednumberFormProperties {

		/**
		 * The two character country code in ISO 3166-1 alpha-2 format
		 * Min length: 2
		 * Max length: 2
		 */
		country: FormControl<string | null | undefined>,

		/** The messages webhook type: always `app` */
		messagesCallbackType: FormControl<string | null | undefined>,

		/** An Application ID */
		messagesCallbackValue: FormControl<string | null | undefined>,

		/** The URL of the webhook endpoint that handles inbound messages */
		moHttpUrl: FormControl<string | null | undefined>,

		/** An available inbound virtual number. */
		msisdn: FormControl<string | null | undefined>,

		/** The type of number: `landline`, `landline-toll-free` or `mobile-lvn` */
		type: FormControl<string | null | undefined>,

		/** The voice webhook type: `sip`, `tel`, or `app` */
		voiceCallbackType: FormControl<string | null | undefined>,

		/** A SIP URI, telephone number or Application ID */
		voiceCallbackValue: FormControl<string | null | undefined>,
	}
	export function CreateOwnednumberFormGroup() {
		return new FormGroup<OwnednumberFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2)]),
			messagesCallbackType: new FormControl<string | null | undefined>(undefined),
			messagesCallbackValue: new FormControl<string | null | undefined>(undefined),
			moHttpUrl: new FormControl<string | null | undefined>(undefined),
			msisdn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			voiceCallbackType: new FormControl<string | null | undefined>(undefined),
			voiceCallbackValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Number_details {

		/**
		 * The two character country code in ISO 3166-1 alpha-2 format
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		country: string;

		/**
		 * An available inbound virtual number.
		 * Required
		 */
		msisdn: string;

		/** If you’d like to perform an action on a subaccount, provide the `api_key` of that account here. If you’d like to perform an action on your own account, you do not need to provide this field. */
		target_api_key?: string | null;
	}
	export interface Number_detailsFormProperties {

		/**
		 * The two character country code in ISO 3166-1 alpha-2 format
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * An available inbound virtual number.
		 * Required
		 */
		msisdn: FormControl<string | null | undefined>,

		/** If you’d like to perform an action on a subaccount, provide the `api_key` of that account here. If you’d like to perform an action on your own account, you do not need to provide this field. */
		target_api_key: FormControl<string | null | undefined>,
	}
	export function CreateNumber_detailsFormGroup() {
		return new FormGroup<Number_detailsFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
			msisdn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			target_api_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Number_details_update {

		/** The Application that will handle inbound traffic to this number. */
		app_id?: string | null;

		/**
		 * The two character country code in ISO 3166-1 alpha-2 format
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		country: string;

		/**
		 * <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.
		 * Specifies the Messages webhook type (always `app`) associated with this
		 * number and must be used with the `messagesCallbackValue` parameter.
		 */
		messagesCallbackType?: Number_details_updateMessagesCallbackType | null;

		/**
		 * <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.
		 * Specifies the Application ID of your Messages application.
		 * It must be used with the `messagesCallbackType` parameter.
		 */
		messagesCallbackValue?: string | null;

		/** An URL-encoded URI to the webhook endpoint that handles inbound messages. Your webhook endpoint must be active before you make this request. Vonage makes a `GET` request to the endpoint and checks that it returns a `200 OK` response. Set this parameter's value to an empty string to remove the webhook. */
		moHttpUrl?: string | null;

		/** The associated system type for your SMPP client */
		moSmppSysType?: string | null;

		/**
		 * An available inbound virtual number.
		 * Required
		 */
		msisdn: string;

		/**
		 * Specify whether inbound voice calls on your number are forwarded
		 * to a SIP or a telephone number.  This must be used with the
		 * `voiceCallbackValue` parameter. If set, `sip` or `tel` are
		 * prioritized over the Voice capability in your Application.
		 * *Note: The `app` value is deprecated and will be removed in future.*
		 */
		voiceCallbackType?: Number_details_updateVoiceCallbackType | null;

		/** A SIP URI or telephone number. Must be used with the `voiceCallbackType` parameter. */
		voiceCallbackValue?: string | null;

		/** A webhook URI for Vonage to send a request to when a call ends */
		voiceStatusCallback?: string | null;
	}
	export interface Number_details_updateFormProperties {

		/** The Application that will handle inbound traffic to this number. */
		app_id: FormControl<string | null | undefined>,

		/**
		 * The two character country code in ISO 3166-1 alpha-2 format
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.
		 * Specifies the Messages webhook type (always `app`) associated with this
		 * number and must be used with the `messagesCallbackValue` parameter.
		 */
		messagesCallbackType: FormControl<Number_details_updateMessagesCallbackType | null | undefined>,

		/**
		 * <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.
		 * Specifies the Application ID of your Messages application.
		 * It must be used with the `messagesCallbackType` parameter.
		 */
		messagesCallbackValue: FormControl<string | null | undefined>,

		/** An URL-encoded URI to the webhook endpoint that handles inbound messages. Your webhook endpoint must be active before you make this request. Vonage makes a `GET` request to the endpoint and checks that it returns a `200 OK` response. Set this parameter's value to an empty string to remove the webhook. */
		moHttpUrl: FormControl<string | null | undefined>,

		/** The associated system type for your SMPP client */
		moSmppSysType: FormControl<string | null | undefined>,

		/**
		 * An available inbound virtual number.
		 * Required
		 */
		msisdn: FormControl<string | null | undefined>,

		/**
		 * Specify whether inbound voice calls on your number are forwarded
		 * to a SIP or a telephone number.  This must be used with the
		 * `voiceCallbackValue` parameter. If set, `sip` or `tel` are
		 * prioritized over the Voice capability in your Application.
		 * *Note: The `app` value is deprecated and will be removed in future.*
		 */
		voiceCallbackType: FormControl<Number_details_updateVoiceCallbackType | null | undefined>,

		/** A SIP URI or telephone number. Must be used with the `voiceCallbackType` parameter. */
		voiceCallbackValue: FormControl<string | null | undefined>,

		/** A webhook URI for Vonage to send a request to when a call ends */
		voiceStatusCallback: FormControl<string | null | undefined>,
	}
	export function CreateNumber_details_updateFormGroup() {
		return new FormGroup<Number_details_updateFormProperties>({
			app_id: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
			messagesCallbackType: new FormControl<Number_details_updateMessagesCallbackType | null | undefined>(undefined),
			messagesCallbackValue: new FormControl<string | null | undefined>(undefined),
			moHttpUrl: new FormControl<string | null | undefined>(undefined),
			moSmppSysType: new FormControl<string | null | undefined>(undefined),
			msisdn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			voiceCallbackType: new FormControl<Number_details_updateVoiceCallbackType | null | undefined>(undefined),
			voiceCallbackValue: new FormControl<string | null | undefined>(undefined),
			voiceStatusCallback: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Number_details_updateMessagesCallbackType { app = 'app' }

	export enum Number_details_updateVoiceCallbackType { sip = 'sip', tel = 'tel', app = 'app' }

	export interface Response {

		/** The status code of the response. `200` indicates a successful request. */
		'error-code'?: string | null;

		/** The status code description */
		'error-code-label'?: string | null;
	}
	export interface ResponseFormProperties {

		/** The status code of the response. `200` indicates a successful request. */
		'error-code': FormControl<string | null | undefined>,

		/** The status code description */
		'error-code-label': FormControl<string | null | undefined>,
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
			'error-code': new FormControl<string | null | undefined>(undefined),
			'error-code-label': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response420 {

		/** The status code of the response. `200` indicates a successful request. */
		'error-code'?: string | null;

		/** More detail about what happened. For example you may need to request the number via the dashboard, or you may already own this number. */
		'error-code-label'?: string | null;
	}
	export interface Response420FormProperties {

		/** The status code of the response. `200` indicates a successful request. */
		'error-code': FormControl<string | null | undefined>,

		/** More detail about what happened. For example you may need to request the number via the dashboard, or you may already own this number. */
		'error-code-label': FormControl<string | null | undefined>,
	}
	export function CreateResponse420FormGroup() {
		return new FormGroup<Response420FormProperties>({
			'error-code': new FormControl<string | null | undefined>(undefined),
			'error-code-label': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Unauthorized {

		/** The status code of the response. `200` indicates a successful request. */
		'error-code'?: string | null;

		/** The status code description */
		'error-code-label'?: string | null;
	}
	export interface UnauthorizedFormProperties {

		/** The status code of the response. `200` indicates a successful request. */
		'error-code': FormControl<string | null | undefined>,

		/** The status code description */
		'error-code-label': FormControl<string | null | undefined>,
	}
	export function CreateUnauthorizedFormGroup() {
		return new FormGroup<UnauthorizedFormProperties>({
			'error-code': new FormControl<string | null | undefined>(undefined),
			'error-code-label': new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List the numbers you own
		 * Retrieve all the inbound numbers associated with your Vonage account.
		 * Get account/numbers
		 * @param {string} application_id The Application that you want to return the numbers for.
		 * @param {boolean} has_application Set this optional field to `true` to restrict your results to numbers
		 * associated with an Application (any Application). Set to `false` to
		 * find all numbers not associated with any Application. Omit the field
		 * to avoid filtering on whether or not the number is assigned to an
		 * Application.
		 * @param {string} country Min length: 2
		 *     Max length: 2
		 * @param {string} pattern The number pattern you want to search for. Use in conjunction with `search_pattern`.
		 * @param {GetOwnedNumbersSearch_pattern} search_pattern The strategy you want to use for matching:
		 * * `0` - Search for numbers that start with `pattern` (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA)
		 * * `1` - Search for numbers that contain `pattern`
		 * * `2` - Search for numbers that end with `pattern`
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} size Page size
		 *     Maximum: 100
		 * @param {number} index Page index
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Inbound_numbers} OK
		 */
		GetOwnedNumbers(application_id: string | null | undefined, has_application: boolean | null | undefined, country: string | null | undefined, pattern: string | null | undefined, search_pattern: GetOwnedNumbersSearch_pattern | null | undefined, size: number | null | undefined, index: number | null | undefined): Observable<Inbound_numbers> {
			return this.http.get<Inbound_numbers>(this.baseUri + 'account/numbers?application_id=' + (application_id == null ? '' : encodeURIComponent(application_id)) + '&has_application=' + has_application + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&pattern=' + (pattern == null ? '' : encodeURIComponent(pattern)) + '&search_pattern=' + search_pattern + '&size=' + size + '&index=' + index, {});
		}

		/**
		 * Search available numbers
		 * Retrieve inbound numbers that are available for the specified country.
		 * Get number/search
		 * @param {string} country The two character country code to filter on (in ISO 3166-1 alpha-2 format)
		 *     Min length: 2    Max length: 2
		 * @param {GetAvailableNumbersType} type Set this parameter to filter the type of number, such as mobile or landline
		 * @param {string} pattern The number pattern you want to search for. Use in conjunction with `search_pattern`.
		 * @param {GetAvailableNumbersSearch_pattern} search_pattern The strategy you want to use for matching:
		 * * `0` - Search for numbers that start with `pattern` (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA)
		 * * `1` - Search for numbers that contain `pattern`
		 * * `2` - Search for numbers that end with `pattern`
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {GetAvailableNumbersFeatures} features Available features are `SMS`, `VOICE` and `MMS`. To look for numbers that support multiple features, use a comma-separated value: `SMS,MMS,VOICE`.
		 * @param {number} size Page size
		 *     Maximum: 100
		 * @param {number} index Page index
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Available_numbers} OK
		 */
		GetAvailableNumbers(country: string, type: GetAvailableNumbersType | null | undefined, pattern: string | null | undefined, search_pattern: GetAvailableNumbersSearch_pattern | null | undefined, features: GetAvailableNumbersFeatures | null | undefined, size: number | null | undefined, index: number | null | undefined): Observable<Available_numbers> {
			return this.http.get<Available_numbers>(this.baseUri + 'number/search?country=' + (country == null ? '' : encodeURIComponent(country)) + '&type=' + type + '&pattern=' + (pattern == null ? '' : encodeURIComponent(pattern)) + '&search_pattern=' + search_pattern + '&features=' + features + '&size=' + size + '&index=' + index, {});
		}
	}

	export enum GetOwnedNumbersSearch_pattern { _0 = 0, _1 = 1, _2 = 2 }

	export enum GetAvailableNumbersType { landline = 'landline', 'mobile-lvn' = 'mobile-lvn', 'landline-toll-free' = 'landline-toll-free' }

	export enum GetAvailableNumbersSearch_pattern { _0 = 0, _1 = 1, _2 = 2 }

	export enum GetAvailableNumbersFeatures { SMS = 'SMS', VOICE = 'VOICE', 'SMS,VOICE' = 'SMS,VOICE', MMS = 'MMS', 'SMS,MMS' = 'SMS,MMS', 'VOICE,MMS' = 'VOICE,MMS', 'SMS,MMS,VOICE' = 'SMS,MMS,VOICE' }

}

