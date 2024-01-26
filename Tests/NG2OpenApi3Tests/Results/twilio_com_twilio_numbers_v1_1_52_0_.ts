import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum Bulk_eligibility_enum_eligibility_status { ineligible = 0, eligible = 1 }

	export enum Bulk_eligibility_enum_eligibility_sub_status { 'country-ineligible' = 0, 'number-format-ineligible' = 1, 'number-type-ineligible' = 2, 'carrier-ineligible' = 3, 'already-in-twilio' = 4, 'internal-processing-error' = 5, 'invalid-phone-number' = 6, 'invalid-hosting-account-sid' = 7, eligible = 8, 'eligible-by-manual-process' = 9 }

	export enum Eligibility_enum_eligibility_status { ineligible = 0, eligible = 1 }

	export enum Eligibility_enum_eligibility_sub_status { 'country-ineligible' = 0, 'number-format-ineligible' = 1, 'number-type-ineligible' = 2, 'carrier-ineligible' = 3, 'already-in-twilio' = 4, 'internal-processing-error' = 5, 'invalid-phone-number' = 6, 'invalid-hosting-account-sid' = 7, eligible = 8 }

	export interface Numbersv1bulk_eligibility {
		date_completed?: Date | null;
		date_created?: Date | null;

		/** This is the string that you assigned as a friendly name for describing the eligibility check request. */
		friendly_name?: string | null;

		/**
		 * The SID of the bulk eligibility check that you want to know about.
		 * Max length: 34
		 * Min length: 34
		 */
		request_id?: string | null;

		/** The result set that contains the eligibility check response for each requested number, each result has at least the following attributes:  phone_number: The requested phone number ,hosting_account_sid: The account sid where the phone number will be hosted, country: Phone number’s country, eligibility_status: Indicates the eligibility status of the PN (Eligible/Ineligible), eligibility_sub_status: Indicates the sub status of the eligibility , ineligibility_reason: Reason for number's ineligibility (if applicable), next_step: Suggested next step in the hosting process based on the eligibility status. */
		results?: Array<string>;

		/** This is the status of the bulk eligibility check request. (Example: COMPLETE, IN_PROGRESS) */
		status?: string | null;

		/** This is the url of the request that you're trying to reach out to locate the resource. */
		url?: string | null;
	}
	export interface Numbersv1bulk_eligibilityFormProperties {
		date_completed: FormControl<Date | null | undefined>,
		date_created: FormControl<Date | null | undefined>,

		/** This is the string that you assigned as a friendly name for describing the eligibility check request. */
		friendly_name: FormControl<string | null | undefined>,

		/**
		 * The SID of the bulk eligibility check that you want to know about.
		 * Max length: 34
		 * Min length: 34
		 */
		request_id: FormControl<string | null | undefined>,

		/** This is the status of the bulk eligibility check request. (Example: COMPLETE, IN_PROGRESS) */
		status: FormControl<string | null | undefined>,

		/** This is the url of the request that you're trying to reach out to locate the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateNumbersv1bulk_eligibilityFormGroup() {
		return new FormGroup<Numbersv1bulk_eligibilityFormProperties>({
			date_completed: new FormControl<Date | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			request_id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^EC[0-9a-fA-F]{32}$')]),
			status: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Numbersv1eligibility {

		/** The result set that contains the eligibility check response for the requested number, each result has at least the following attributes:  phone_number: The requested phone number ,hosting_account_sid: The account sid where the phone number will be hosted, date_last_checked: Datetime (ISO 8601) when the PN was last checked for eligibility, country: Phone number’s country, eligibility_status: Indicates the eligibility status of the PN (Eligible/Ineligible), eligibility_sub_status: Indicates the sub status of the eligibility , ineligibility_reason: Reason for number's ineligibility (if applicable), next_step: Suggested next step in the hosting process based on the eligibility status. */
		results?: Array<string>;
	}
	export interface Numbersv1eligibilityFormProperties {
	}
	export function CreateNumbersv1eligibilityFormGroup() {
		return new FormGroup<Numbersv1eligibilityFormProperties>({
		});

	}

	export interface Numbersv1porting_bulk_portability {

		/** The date that the Portability check was created, given in ISO 8601 format. */
		datetime_created?: Date | null;

		/** Contains a list with all the information of the requested phone numbers. Each phone number contains the following properties: `phone_number`: The phone number which portability is to be checked. `portable`: Boolean flag specifying if phone number is portable or not. `not_portable_reason`: Reason why the phone number cannot be ported into Twilio, `null` otherwise. `not_portable_reason_code`: The Portability Reason Code for the phone number if it cannot be ported in Twilio, `null` otherwise. `pin_and_account_number_required`: Boolean flag specifying if PIN and account number is required for the phone number. `number_type`: The type of the requested phone number. `country` Country the phone number belongs to. `messaging_carrier` Current messaging carrier of the phone number. `voice_carrier` Current voice carrier of the phone number. */
		phone_numbers?: Array<string>;

		/**
		 * A 34 character string that uniquely identifies this Portability check.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		status?: Numbersv1porting_bulk_portabilityStatus | null;

		/** This is the url of the request that you're trying to reach out to locate the resource. */
		url?: string | null;
	}
	export interface Numbersv1porting_bulk_portabilityFormProperties {

		/** The date that the Portability check was created, given in ISO 8601 format. */
		datetime_created: FormControl<Date | null | undefined>,

		/**
		 * A 34 character string that uniquely identifies this Portability check.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		status: FormControl<Numbersv1porting_bulk_portabilityStatus | null | undefined>,

		/** This is the url of the request that you're trying to reach out to locate the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateNumbersv1porting_bulk_portabilityFormGroup() {
		return new FormGroup<Numbersv1porting_bulk_portabilityFormProperties>({
			datetime_created: new FormControl<Date | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KZ[0-9a-fA-F]{32}$')]),
			status: new FormControl<Numbersv1porting_bulk_portabilityStatus | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Numbersv1porting_bulk_portabilityStatus { 'in-progress' = 0, completed = 1, expired = 2 }

	export interface Numbersv1porting_port_in {

		/**
		 * The SID of the Port In request. This is a unique identifier of the port in request.
		 * Max length: 34
		 * Min length: 34
		 */
		port_in_request_sid?: string | null;
		url?: string | null;
	}
	export interface Numbersv1porting_port_inFormProperties {

		/**
		 * The SID of the Port In request. This is a unique identifier of the port in request.
		 * Max length: 34
		 * Min length: 34
		 */
		port_in_request_sid: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateNumbersv1porting_port_inFormGroup() {
		return new FormGroup<Numbersv1porting_port_inFormProperties>({
			port_in_request_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KW[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Numbersv1porting_port_in_fetch {

		/**
		 * The Account SID that the numbers will be added to after they are ported into Twilio.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The list of documents SID referencing a utility bills */
		documents?: Array<string>;

		/** The information for the losing carrier. */
		losing_carrier_information?: any;

		/** List of emails for getting notifications about the LOA signing process. Allowed Max 10 emails. */
		notification_emails?: Array<string>;

		/** The list of phone numbers to Port in. Phone numbers are in E.164 format (e.g. +16175551212). */
		phone_numbers?: Array<string>;

		/**
		 * The SID of the Port In request. This is a unique identifier of the port in request.
		 * Max length: 34
		 * Min length: 34
		 */
		port_in_request_sid?: string | null;

		/** Minimum number of days in the future (at least 2 days) needs to be established with the Ops team for validation. */
		target_port_in_date?: Date | null;

		/** Maximum hour in the future needs to be established with the Ops team for validation. */
		target_port_in_time_range_end?: string | null;

		/** Minimum hour in the future needs to be established with the Ops team for validation. */
		target_port_in_time_range_start?: string | null;

		/** The URL of this Port In request */
		url?: string | null;
	}
	export interface Numbersv1porting_port_in_fetchFormProperties {

		/**
		 * The Account SID that the numbers will be added to after they are ported into Twilio.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The information for the losing carrier. */
		losing_carrier_information: FormControl<any | null | undefined>,

		/**
		 * The SID of the Port In request. This is a unique identifier of the port in request.
		 * Max length: 34
		 * Min length: 34
		 */
		port_in_request_sid: FormControl<string | null | undefined>,

		/** Minimum number of days in the future (at least 2 days) needs to be established with the Ops team for validation. */
		target_port_in_date: FormControl<Date | null | undefined>,

		/** Maximum hour in the future needs to be established with the Ops team for validation. */
		target_port_in_time_range_end: FormControl<string | null | undefined>,

		/** Minimum hour in the future needs to be established with the Ops team for validation. */
		target_port_in_time_range_start: FormControl<string | null | undefined>,

		/** The URL of this Port In request */
		url: FormControl<string | null | undefined>,
	}
	export function CreateNumbersv1porting_port_in_fetchFormGroup() {
		return new FormGroup<Numbersv1porting_port_in_fetchFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			losing_carrier_information: new FormControl<any | null | undefined>(undefined),
			port_in_request_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KW[0-9a-fA-F]{32}$')]),
			target_port_in_date: new FormControl<Date | null | undefined>(undefined),
			target_port_in_time_range_end: new FormControl<string | null | undefined>(undefined),
			target_port_in_time_range_start: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Numbersv1porting_portability {

		/**
		 * The target account sid to which the number will be ported
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** Country the phone number belongs to. */
		country?: string | null;

		/** Current messaging carrier of the phone number */
		messaging_carrier?: string | null;

		/** Reason why the phone number cannot be ported into Twilio, `null` otherwise. */
		not_portable_reason?: string | null;

		/** The Portability Reason Code for the phone number if it cannot be ported into Twilio, `null` otherwise. One of `22131`, `22132`, `22130`, `22133`, `22102` or `22135`. */
		not_portable_reason_code?: number | null;
		number_type?: Numbersv1porting_portabilityNumber_type | null;

		/** The phone number which portability is to be checked. Phone numbers are in E.164 format (e.g. +16175551212). */
		phone_number?: string | null;

		/** Boolean flag specifying if PIN and account number is required for the phone number. */
		pin_and_account_number_required?: boolean | null;

		/** Boolean flag specifying if phone number is portable or not. */
		portable?: boolean | null;

		/** This is the url of the request that you're trying to reach out to locate the resource. */
		url?: string | null;

		/** Current voice carrier of the phone number */
		voice_carrier?: string | null;
	}
	export interface Numbersv1porting_portabilityFormProperties {

		/**
		 * The target account sid to which the number will be ported
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** Country the phone number belongs to. */
		country: FormControl<string | null | undefined>,

		/** Current messaging carrier of the phone number */
		messaging_carrier: FormControl<string | null | undefined>,

		/** Reason why the phone number cannot be ported into Twilio, `null` otherwise. */
		not_portable_reason: FormControl<string | null | undefined>,

		/** The Portability Reason Code for the phone number if it cannot be ported into Twilio, `null` otherwise. One of `22131`, `22132`, `22130`, `22133`, `22102` or `22135`. */
		not_portable_reason_code: FormControl<number | null | undefined>,
		number_type: FormControl<Numbersv1porting_portabilityNumber_type | null | undefined>,

		/** The phone number which portability is to be checked. Phone numbers are in E.164 format (e.g. +16175551212). */
		phone_number: FormControl<string | null | undefined>,

		/** Boolean flag specifying if PIN and account number is required for the phone number. */
		pin_and_account_number_required: FormControl<boolean | null | undefined>,

		/** Boolean flag specifying if phone number is portable or not. */
		portable: FormControl<boolean | null | undefined>,

		/** This is the url of the request that you're trying to reach out to locate the resource. */
		url: FormControl<string | null | undefined>,

		/** Current voice carrier of the phone number */
		voice_carrier: FormControl<string | null | undefined>,
	}
	export function CreateNumbersv1porting_portabilityFormGroup() {
		return new FormGroup<Numbersv1porting_portabilityFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			country: new FormControl<string | null | undefined>(undefined),
			messaging_carrier: new FormControl<string | null | undefined>(undefined),
			not_portable_reason: new FormControl<string | null | undefined>(undefined),
			not_portable_reason_code: new FormControl<number | null | undefined>(undefined),
			number_type: new FormControl<Numbersv1porting_portabilityNumber_type | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			pin_and_account_number_required: new FormControl<boolean | null | undefined>(undefined),
			portable: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			voice_carrier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Numbersv1porting_portabilityNumber_type { LOCAL = 0, UNKNOWN = 1, MOBILE = 2, 'TOLL-FREE' = 3 }

	export enum Porting_bulk_portability_enum_status { 'in-progress' = 0, completed = 1, expired = 2 }

	export enum Porting_portability_enum_number_type { LOCAL = 0, UNKNOWN = 1, MOBILE = 2, 'TOLL-FREE' = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Fetch an eligibility bulk check that you requested to host in Twilio.
		 * Get v1/HostedNumber/Eligibility/Bulk/{RequestId}
		 * @param {string} RequestId The SID of the bulk eligibility check that you want to know about.
		 * @return {Numbersv1bulk_eligibility} OK
		 */
		FetchBulkEligibility(RequestId: string): Observable<Numbersv1bulk_eligibility> {
			return this.http.get<Numbersv1bulk_eligibility>(this.baseUri + 'v1/HostedNumber/Eligibility/Bulk/' + (RequestId == null ? '' : encodeURIComponent(RequestId)), {});
		}

		/**
		 * Fetch a port in request by SID
		 * Get v1/Porting/PortIn/{PortInRequestSid}
		 * @param {string} PortInRequestSid The SID of the Port In request. This is a unique identifier of the port in request.
		 * @return {Numbersv1porting_port_in_fetch} OK
		 */
		FetchPortingPortInFetch(PortInRequestSid: string): Observable<Numbersv1porting_port_in_fetch> {
			return this.http.get<Numbersv1porting_port_in_fetch>(this.baseUri + 'v1/Porting/PortIn/' + (PortInRequestSid == null ? '' : encodeURIComponent(PortInRequestSid)), {});
		}

		/**
		 * Allows to check if a single phone number can be ported to Twilio or not.
		 * Get v1/Porting/Portability/PhoneNumber/{PhoneNumber}
		 * @param {string} PhoneNumber The phone number which portability is to be checked. Phone numbers are in E.164 format (e.g. +16175551212).
		 * @param {string} TargetAccountSid The SID of the account where the phone number(s) will be ported.
		 * @return {Numbersv1porting_portability} OK
		 */
		FetchPortingPortability(PhoneNumber: string, TargetAccountSid: string | null | undefined): Observable<Numbersv1porting_portability> {
			return this.http.get<Numbersv1porting_portability>(this.baseUri + 'v1/Porting/Portability/PhoneNumber/' + (PhoneNumber == null ? '' : encodeURIComponent(PhoneNumber)) + '&TargetAccountSid=' + (TargetAccountSid == null ? '' : encodeURIComponent(TargetAccountSid)), {});
		}

		/**
		 * Fetch a previous portability check. This should return the current status of the validation and the result for all the numbers provided, given that they have been validated (as this process is performed asynchronously).
		 * Get v1/Porting/Portability/{Sid}
		 * @param {string} Sid A 34 character string that uniquely identifies the Portability check.
		 * @return {Numbersv1porting_bulk_portability} OK
		 */
		FetchPortingBulkPortability(Sid: string): Observable<Numbersv1porting_bulk_portability> {
			return this.http.get<Numbersv1porting_bulk_portability>(this.baseUri + 'v1/Porting/Portability/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}
	}

}

