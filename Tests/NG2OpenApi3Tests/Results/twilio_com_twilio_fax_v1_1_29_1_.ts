import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Faxv1fax {

		/**
		 * The SID of the Account that created the resource
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The API version used to transmit the fax */
		api_version?: string | null;

		/** The ISO 8601 formatted date and time in GMT when the resource was created */
		date_created?: Date | null;

		/** The ISO 8601 formatted date and time in GMT when the resource was last updated */
		date_updated?: Date | null;

		/** The direction of the fax */
		direction?: Faxv1faxDirection | null;

		/** The time it took to transmit the fax */
		duration?: number | null;

		/** The number the fax was sent from */
		from?: string | null;

		/** The URLs of the fax's related resources */
		links?: string | null;

		/**
		 * The SID of the FaxMedia resource that is associated with the Fax
		 * Max length: 34
		 * Min length: 34
		 */
		media_sid?: string | null;

		/** The Twilio-hosted URL that can be used to download fax media */
		media_url?: string | null;

		/** The number of pages contained in the fax document */
		num_pages?: number | null;

		/** The fax transmission price */
		price?: number | null;

		/** The ISO 4217 currency used for billing */
		price_unit?: string | null;

		/** The quality of the fax */
		quality?: Faxv1faxQuality | null;

		/**
		 * The unique string that identifies the resource
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The status of the fax */
		status?: Faxv1faxStatus | null;

		/** The phone number that received the fax */
		to?: string | null;

		/** The absolute URL of the fax resource */
		url?: string | null;
	}
	export interface Faxv1faxFormProperties {

		/**
		 * The SID of the Account that created the resource
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The API version used to transmit the fax */
		api_version: FormControl<string | null | undefined>,

		/** The ISO 8601 formatted date and time in GMT when the resource was created */
		date_created: FormControl<Date | null | undefined>,

		/** The ISO 8601 formatted date and time in GMT when the resource was last updated */
		date_updated: FormControl<Date | null | undefined>,

		/** The direction of the fax */
		direction: FormControl<Faxv1faxDirection | null | undefined>,

		/** The time it took to transmit the fax */
		duration: FormControl<number | null | undefined>,

		/** The number the fax was sent from */
		from: FormControl<string | null | undefined>,

		/** The URLs of the fax's related resources */
		links: FormControl<string | null | undefined>,

		/**
		 * The SID of the FaxMedia resource that is associated with the Fax
		 * Max length: 34
		 * Min length: 34
		 */
		media_sid: FormControl<string | null | undefined>,

		/** The Twilio-hosted URL that can be used to download fax media */
		media_url: FormControl<string | null | undefined>,

		/** The number of pages contained in the fax document */
		num_pages: FormControl<number | null | undefined>,

		/** The fax transmission price */
		price: FormControl<number | null | undefined>,

		/** The ISO 4217 currency used for billing */
		price_unit: FormControl<string | null | undefined>,

		/** The quality of the fax */
		quality: FormControl<Faxv1faxQuality | null | undefined>,

		/**
		 * The unique string that identifies the resource
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The status of the fax */
		status: FormControl<Faxv1faxStatus | null | undefined>,

		/** The phone number that received the fax */
		to: FormControl<string | null | undefined>,

		/** The absolute URL of the fax resource */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFaxv1faxFormGroup() {
		return new FormGroup<Faxv1faxFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			api_version: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			direction: new FormControl<Faxv1faxDirection | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			media_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ME[0-9a-fA-F]{32}$')]),
			media_url: new FormControl<string | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			price_unit: new FormControl<string | null | undefined>(undefined),
			quality: new FormControl<Faxv1faxQuality | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FX[0-9a-fA-F]{32}$')]),
			status: new FormControl<Faxv1faxStatus | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Faxv1faxDirection { inbound = 0, outbound = 1 }

	export enum Faxv1faxQuality { standard = 0, fine = 1, superfine = 2 }

	export enum Faxv1faxStatus { queued = 0, processing = 1, sending = 2, delivered = 3, receiving = 4, received = 5, 'no-answer' = 6, busy = 7, failed = 8, canceled = 9 }

	export interface Faxv1faxfax_media {

		/**
		 * The SID of the Account that created the resource
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The content type of the stored fax media */
		content_type?: string | null;

		/** The ISO 8601 date and time in GMT when the resource was created */
		date_created?: Date | null;

		/** The ISO 8601 date and time in GMT when the resource was last updated */
		date_updated?: Date | null;

		/**
		 * The SID of the fax the FaxMedia resource is associated with
		 * Max length: 34
		 * Min length: 34
		 */
		fax_sid?: string | null;

		/**
		 * The unique string that identifies the resource
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the FaxMedia resource */
		url?: string | null;
	}
	export interface Faxv1faxfax_mediaFormProperties {

		/**
		 * The SID of the Account that created the resource
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The content type of the stored fax media */
		content_type: FormControl<string | null | undefined>,

		/** The ISO 8601 date and time in GMT when the resource was created */
		date_created: FormControl<Date | null | undefined>,

		/** The ISO 8601 date and time in GMT when the resource was last updated */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * The SID of the fax the FaxMedia resource is associated with
		 * Max length: 34
		 * Min length: 34
		 */
		fax_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that identifies the resource
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the FaxMedia resource */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFaxv1faxfax_mediaFormGroup() {
		return new FormGroup<Faxv1faxfax_mediaFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			content_type: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			fax_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^FX[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ME[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of all faxes.
		 * Get v1/Faxes
		 * @param {string} From Retrieve only those faxes sent from this phone number, specified in [E.164](https://www.twilio.com/docs/glossary/what-e164) format.
		 * @param {string} To Retrieve only those faxes sent to this phone number, specified in [E.164](https://www.twilio.com/docs/glossary/what-e164) format.
		 * @param {Date} DateCreatedOnOrBefore Retrieve only those faxes with a `date_created` that is before or equal to this value, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
		 * @param {Date} DateCreatedAfter Retrieve only those faxes with a `date_created` that is later than this value, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @return {ListFaxReturn} OK
		 */
		ListFax(From: string | null | undefined, To: string | null | undefined, DateCreatedOnOrBefore: Date | null | undefined, DateCreatedAfter: Date | null | undefined, PageSize: number | null | undefined): Observable<ListFaxReturn> {
			return this.http.get<ListFaxReturn>(this.baseUri + 'v1/Faxes?From=' + (From == null ? '' : encodeURIComponent(From)) + '&To=' + (To == null ? '' : encodeURIComponent(To)) + '&DateCreatedOnOrBefore=' + DateCreatedOnOrBefore?.toISOString() + '&DateCreatedAfter=' + DateCreatedAfter?.toISOString() + '&PageSize=' + PageSize, {});
		}

		/**
		 * Retrieve a list of all fax media instances for the specified fax.
		 * Get v1/Faxes/{FaxSid}/Media
		 * @param {string} FaxSid The SID of the fax with the FaxMedia resources to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @return {ListFaxMediaReturn} OK
		 */
		ListFaxMedia(FaxSid: string, PageSize: number | null | undefined): Observable<ListFaxMediaReturn> {
			return this.http.get<ListFaxMediaReturn>(this.baseUri + 'v1/Faxes/' + (FaxSid == null ? '' : encodeURIComponent(FaxSid)) + '/Media&PageSize=' + PageSize, {});
		}

		/**
		 * Delete a specific fax media instance.
		 * Delete v1/Faxes/{FaxSid}/Media/{Sid}
		 * @param {string} FaxSid The SID of the fax with the FaxMedia resource to delete.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the FaxMedia resource to delete.
		 * @return {void} 
		 */
		DeleteFaxMedia(FaxSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Faxes/' + (FaxSid == null ? '' : encodeURIComponent(FaxSid)) + '/Media/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a specific fax media instance.
		 * Get v1/Faxes/{FaxSid}/Media/{Sid}
		 * @param {string} FaxSid The SID of the fax with the FaxMedia resource to fetch.
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the FaxMedia resource to fetch.
		 * @return {Faxv1faxfax_media} OK
		 */
		FetchFaxMedia(FaxSid: string, Sid: string): Observable<Faxv1faxfax_media> {
			return this.http.get<Faxv1faxfax_media>(this.baseUri + 'v1/Faxes/' + (FaxSid == null ? '' : encodeURIComponent(FaxSid)) + '/Media/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Delete a specific fax and its associated media.
		 * Delete v1/Faxes/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Fax resource to delete.
		 * @return {void} 
		 */
		DeleteFax(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Faxes/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a specific fax.
		 * Get v1/Faxes/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Fax resource to fetch.
		 * @return {Faxv1fax} OK
		 */
		FetchFax(Sid: string): Observable<Faxv1fax> {
			return this.http.get<Faxv1fax>(this.baseUri + 'v1/Faxes/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}
	}

	export interface ListFaxReturn {
		faxes?: Array<Faxv1fax>;
		meta?: ListFaxReturnMeta;
	}
	export interface ListFaxReturnFormProperties {
	}
	export function CreateListFaxReturnFormGroup() {
		return new FormGroup<ListFaxReturnFormProperties>({
		});

	}

	export interface ListFaxReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListFaxReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListFaxReturnMetaFormGroup() {
		return new FormGroup<ListFaxReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFaxMediaReturn {
		media?: Array<Faxv1faxfax_media>;
		meta?: ListFaxMediaReturnMeta;
	}
	export interface ListFaxMediaReturnFormProperties {
	}
	export function CreateListFaxMediaReturnFormGroup() {
		return new FormGroup<ListFaxMediaReturnFormProperties>({
		});

	}

	export interface ListFaxMediaReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListFaxMediaReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListFaxMediaReturnMetaFormGroup() {
		return new FormGroup<ListFaxMediaReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

