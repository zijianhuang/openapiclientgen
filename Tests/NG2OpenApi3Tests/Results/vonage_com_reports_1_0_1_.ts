import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CallLog {

		/** Amount charged for the call */
		charge?: number | null;

		/** Name of the destination device of the call */
		destination_device_name?: string | null;

		/** Destination extension of the call */
		destination_extension?: number | null;

		/** SIP ID of the destination device of the call */
		destination_sip_id?: string | null;

		/** Destination user of the call */
		destination_user?: string | null;

		/** Full name of the destination user of the call */
		destination_user_full_name?: string | null;

		/** Direction of the call */
		direction?: string | null;

		/** End time of the call */
		end?: string | null;

		/** Source number of the call */
		from?: string | null;

		/** Unique identifier of the call */
		id?: string | null;

		/** Indicates if call was on/off network */
		in_network?: boolean | null;

		/** Indicates if call was international */
		international?: boolean | null;

		/** Duration of the call in seconds */
		length?: number | null;

		/** Rate charged for the call */
		rate?: number | null;

		/** Indicates if call was recorded */
		recorded?: boolean | null;

		/** Result of the call */
		result?: string | null;

		/** Name of the source device of the call */
		source_device_name?: string | null;

		/** Source extension of the call */
		source_extension?: number | null;

		/** SIP ID of the source device of the call */
		source_sip_id?: string | null;

		/** Source user of the call */
		source_user?: string | null;

		/** Full name of the source user of the call */
		source_user_full_name?: string | null;

		/** Start time of the call */
		start?: string | null;

		/** Destination number of the call */
		to?: string | null;
	}
	export interface CallLogFormProperties {

		/** Amount charged for the call */
		charge: FormControl<number | null | undefined>,

		/** Name of the destination device of the call */
		destination_device_name: FormControl<string | null | undefined>,

		/** Destination extension of the call */
		destination_extension: FormControl<number | null | undefined>,

		/** SIP ID of the destination device of the call */
		destination_sip_id: FormControl<string | null | undefined>,

		/** Destination user of the call */
		destination_user: FormControl<string | null | undefined>,

		/** Full name of the destination user of the call */
		destination_user_full_name: FormControl<string | null | undefined>,

		/** Direction of the call */
		direction: FormControl<string | null | undefined>,

		/** End time of the call */
		end: FormControl<string | null | undefined>,

		/** Source number of the call */
		from: FormControl<string | null | undefined>,

		/** Unique identifier of the call */
		id: FormControl<string | null | undefined>,

		/** Indicates if call was on/off network */
		in_network: FormControl<boolean | null | undefined>,

		/** Indicates if call was international */
		international: FormControl<boolean | null | undefined>,

		/** Duration of the call in seconds */
		length: FormControl<number | null | undefined>,

		/** Rate charged for the call */
		rate: FormControl<number | null | undefined>,

		/** Indicates if call was recorded */
		recorded: FormControl<boolean | null | undefined>,

		/** Result of the call */
		result: FormControl<string | null | undefined>,

		/** Name of the source device of the call */
		source_device_name: FormControl<string | null | undefined>,

		/** Source extension of the call */
		source_extension: FormControl<number | null | undefined>,

		/** SIP ID of the source device of the call */
		source_sip_id: FormControl<string | null | undefined>,

		/** Source user of the call */
		source_user: FormControl<string | null | undefined>,

		/** Full name of the source user of the call */
		source_user_full_name: FormControl<string | null | undefined>,

		/** Start time of the call */
		start: FormControl<string | null | undefined>,

		/** Destination number of the call */
		to: FormControl<string | null | undefined>,
	}
	export function CreateCallLogFormGroup() {
		return new FormGroup<CallLogFormProperties>({
			charge: new FormControl<number | null | undefined>(undefined),
			destination_device_name: new FormControl<string | null | undefined>(undefined),
			destination_extension: new FormControl<number | null | undefined>(undefined),
			destination_sip_id: new FormControl<string | null | undefined>(undefined),
			destination_user: new FormControl<string | null | undefined>(undefined),
			destination_user_full_name: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<string | null | undefined>(undefined),
			end: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			in_network: new FormControl<boolean | null | undefined>(undefined),
			international: new FormControl<boolean | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			recorded: new FormControl<boolean | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
			source_device_name: new FormControl<string | null | undefined>(undefined),
			source_extension: new FormControl<number | null | undefined>(undefined),
			source_sip_id: new FormControl<string | null | undefined>(undefined),
			source_user: new FormControl<string | null | undefined>(undefined),
			source_user_full_name: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CallLogsEmbeddedObject {
		call_logs?: Array<CallLog>;
	}
	export interface CallLogsEmbeddedObjectFormProperties {
	}
	export function CreateCallLogsEmbeddedObjectFormGroup() {
		return new FormGroup<CallLogsEmbeddedObjectFormProperties>({
		});

	}

	export interface CallLogsHalResponse {
		_embedded?: CallLogsEmbeddedObject;
		_links?: Links;

		/** Current page number */
		page?: number | null;

		/** Number of records per page */
		page_size?: number | null;

		/** Total number of records */
		total_items?: number | null;

		/** Total number of pages */
		total_page?: number | null;
	}
	export interface CallLogsHalResponseFormProperties {

		/** Current page number */
		page: FormControl<number | null | undefined>,

		/** Number of records per page */
		page_size: FormControl<number | null | undefined>,

		/** Total number of records */
		total_items: FormControl<number | null | undefined>,

		/** Total number of pages */
		total_page: FormControl<number | null | undefined>,
	}
	export function CreateCallLogsHalResponseFormGroup() {
		return new FormGroup<CallLogsHalResponseFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			total_items: new FormControl<number | null | undefined>(undefined),
			total_page: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Links {

		/** URL to the first page of records */
		first?: FirstHref;

		/** URL to the next page of records */
		next?: NextHref;

		/** URL to the previous page of records */
		prev?: PrevHref;

		/** URL to the current page of records */
		self?: SelfHref;
	}
	export interface LinksFormProperties {
	}
	export function CreateLinksFormGroup() {
		return new FormGroup<LinksFormProperties>({
		});

	}


	/** URL to the first page of records */
	export interface FirstHref {
		href?: string | null;
	}

	/** URL to the first page of records */
	export interface FirstHrefFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateFirstHrefFormGroup() {
		return new FormGroup<FirstHrefFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** URL to the next page of records */
	export interface NextHref {
		href?: string | null;
	}

	/** URL to the next page of records */
	export interface NextHrefFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateNextHrefFormGroup() {
		return new FormGroup<NextHrefFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** URL to the previous page of records */
	export interface PrevHref {
		href?: string | null;
	}

	/** URL to the previous page of records */
	export interface PrevHrefFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreatePrevHrefFormGroup() {
		return new FormGroup<PrevHrefFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** URL to the current page of records */
	export interface SelfHref {
		href?: string | null;
	}

	/** URL to the current page of records */
	export interface SelfHrefFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateSelfHrefFormGroup() {
		return new FormGroup<SelfHrefFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetailedInvalidParam {

		/** Invalid property name */
		name?: string | null;

		/** Invalid property reason */
		reason?: string | null;
	}
	export interface DetailedInvalidParamFormProperties {

		/** Invalid property name */
		name: FormControl<string | null | undefined>,

		/** Invalid property reason */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateDetailedInvalidParamFormGroup() {
		return new FormGroup<DetailedInvalidParamFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorResponse {

		/** Error message */
		msg?: string | null;

		/** Http Response Code */
		status?: number | null;
	}
	export interface ErrorResponseFormProperties {

		/** Error message */
		msg: FormControl<string | null | undefined>,

		/** Http Response Code */
		status: FormControl<number | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** URL to the last page of records */
	export interface LastHref {
		href?: string | null;
	}

	/** URL to the last page of records */
	export interface LastHrefFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateLastHrefFormGroup() {
		return new FormGroup<LastHrefFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ValidationErrorsResponse {

		/** Error Track ID */
		instance?: string | null;

		/** Invalid parameters and their reason for failing */
		invalid_parameters?: Array<DetailedInvalidParam>;

		/** Error status code */
		status?: number | null;

		/** Error title */
		title?: string | null;
	}
	export interface ValidationErrorsResponseFormProperties {

		/** Error Track ID */
		instance: FormControl<string | null | undefined>,

		/** Error status code */
		status: FormControl<number | null | undefined>,

		/** Error title */
		title: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorsResponseFormGroup() {
		return new FormGroup<ValidationErrorsResponseFormProperties>({
			instance: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve call logs for your account
		 * Retrieve call logs for your account
		 * Get accounts/{account_id}/call-logs
		 * @param {string} account_id The Vonage Business Cloud account ID
		 * @param {string} start_gte Filter records by start date (greater equal or equal to)
		 * @param {string} start_lte Filter records by start date (less equal or equal to)
		 * @param {string} end_gte Filter records by end date (greater equal or equal to)
		 * @param {string} end_lte Filter records by end date (less equal or equal to)
		 * @param {number} page_size Number of records per page
		 * @param {number} page Current page number
		 * @param {string} to Filter by called number
		 * @param {string} from Filter by source number
		 * @param {string} source_user Filter by source user
		 * @param {string} destination_user Filter by destination user
		 * @param {GetCallLogsDirection} direction Filter by call direction.
		 * @return {CallLogsHalResponse} Success
		 */
		GetCallLogs(account_id: string, start_gte: string, start_lte: string, end_gte: string | null | undefined, end_lte: string | null | undefined, page_size: number, page: number, to: string | null | undefined, from: string | null | undefined, source_user: string | null | undefined, destination_user: string | null | undefined, direction: GetCallLogsDirection | null | undefined): Observable<CallLogsHalResponse> {
			return this.http.get<CallLogsHalResponse>(this.baseUri + 'accounts/' + (account_id == null ? '' : encodeURIComponent(account_id)) + '/call-logs&start_gte=' + (start_gte == null ? '' : encodeURIComponent(start_gte)) + '&start_lte=' + (start_lte == null ? '' : encodeURIComponent(start_lte)) + '&end_gte=' + (end_gte == null ? '' : encodeURIComponent(end_gte)) + '&end_lte=' + (end_lte == null ? '' : encodeURIComponent(end_lte)) + '&page_size=' + page_size + '&page=' + page + '&to=' + (to == null ? '' : encodeURIComponent(to)) + '&from=' + (from == null ? '' : encodeURIComponent(from)) + '&source_user=' + (source_user == null ? '' : encodeURIComponent(source_user)) + '&destination_user=' + (destination_user == null ? '' : encodeURIComponent(destination_user)) + '&direction=' + direction, {});
		}
	}

	export enum GetCallLogsDirection { Inbound = 'Inbound', Outbound = 'Outbound' }

}

