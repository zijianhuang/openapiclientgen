import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Contentv1content {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** A string name used to describe the Content resource. Not visible to the end recipient. */
		friendly_name?: string | null;

		/** Two-letter (ISO 639-1) language code (e.g., en) identifying the language the Content resource is in. */
		language?: string | null;

		/** A list of links related to the Content resource, such as approval_fetch and approval_create */
		links?: string | null;

		/**
		 * The unique string that that we created to identify the Content resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The [Content types](https://www.twilio.com/docs/content/content-types-overview) (e.g. twilio/text) for this Content resource. */
		types?: any;

		/** The URL of the resource, relative to `https://content.twilio.com`. */
		url?: string | null;

		/** Defines the default placeholder values for variables included in the Content resource. e.g. {"1": "Customer_Name"}. */
		variables?: any;
	}
	export interface Contentv1contentFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** A string name used to describe the Content resource. Not visible to the end recipient. */
		friendly_name: FormControl<string | null | undefined>,

		/** Two-letter (ISO 639-1) language code (e.g., en) identifying the language the Content resource is in. */
		language: FormControl<string | null | undefined>,

		/** A list of links related to the Content resource, such as approval_fetch and approval_create */
		links: FormControl<string | null | undefined>,

		/**
		 * The unique string that that we created to identify the Content resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The [Content types](https://www.twilio.com/docs/content/content-types-overview) (e.g. twilio/text) for this Content resource. */
		types: FormControl<any | null | undefined>,

		/** The URL of the resource, relative to `https://content.twilio.com`. */
		url: FormControl<string | null | undefined>,

		/** Defines the default placeholder values for variables included in the Content resource. e.g. {"1": "Customer_Name"}. */
		variables: FormControl<any | null | undefined>,
	}
	export function CreateContentv1contentFormGroup() {
		return new FormGroup<Contentv1contentFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^HX[0-9a-fA-F]{32}$')]),
			types: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			variables: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface Contentv1contentapproval_fetch {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/**
		 * The unique string that that we created to identify the Content resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The URL of the resource, relative to `https://content.twilio.com`. */
		url?: string | null;

		/** Contains the whatsapp approval information for the Content resource, with fields such as approval status, rejection reason, and category, amongst others. */
		whatsapp?: any;
	}
	export interface Contentv1contentapproval_fetchFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that that we created to identify the Content resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The URL of the resource, relative to `https://content.twilio.com`. */
		url: FormControl<string | null | undefined>,

		/** Contains the whatsapp approval information for the Content resource, with fields such as approval status, rejection reason, and category, amongst others. */
		whatsapp: FormControl<any | null | undefined>,
	}
	export function CreateContentv1contentapproval_fetchFormGroup() {
		return new FormGroup<Contentv1contentapproval_fetchFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^HX[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			whatsapp: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface Contentv1content_and_approvals {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The submitted information and approval request status of the Content resource. */
		approval_requests?: any;

		/** The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** A string name used to describe the Content resource. Not visible to the end recipient. */
		friendly_name?: string | null;

		/** Two-letter (ISO 639-1) language code (e.g., en) identifying the language the Content resource is in. */
		language?: string | null;

		/**
		 * The unique string that that we created to identify the Content resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The [Content types](https://www.twilio.com/docs/content/content-types-overview) (e.g. twilio/text) for this Content resource. */
		types?: any;

		/** Defines the default placeholder values for variables included in the Content resource. e.g. {"1": "Customer_Name"}. */
		variables?: any;
	}
	export interface Contentv1content_and_approvalsFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The submitted information and approval request status of the Content resource. */
		approval_requests: FormControl<any | null | undefined>,

		/** The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** A string name used to describe the Content resource. Not visible to the end recipient. */
		friendly_name: FormControl<string | null | undefined>,

		/** Two-letter (ISO 639-1) language code (e.g., en) identifying the language the Content resource is in. */
		language: FormControl<string | null | undefined>,

		/**
		 * The unique string that that we created to identify the Content resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The [Content types](https://www.twilio.com/docs/content/content-types-overview) (e.g. twilio/text) for this Content resource. */
		types: FormControl<any | null | undefined>,

		/** Defines the default placeholder values for variables included in the Content resource. e.g. {"1": "Customer_Name"}. */
		variables: FormControl<any | null | undefined>,
	}
	export function CreateContentv1content_and_approvalsFormGroup() {
		return new FormGroup<Contentv1content_and_approvalsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			approval_requests: new FormControl<any | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^HX[0-9a-fA-F]{32}$')]),
			types: new FormControl<any | null | undefined>(undefined),
			variables: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface Contentv1legacy_content {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created?: Date | null;

		/** The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated?: Date | null;

		/** A string name used to describe the Content resource. Not visible to the end recipient. */
		friendly_name?: string | null;

		/** Two-letter (ISO 639-1) language code (e.g., en) identifying the language the Content resource is in. */
		language?: string | null;

		/** The string body field of the legacy content template associated with this Content resource */
		legacy_body?: string | null;

		/** The string name of the legacy content template associated with this Content resource, unique across all template names for its account.  Only lowercase letters, numbers and underscores are allowed */
		legacy_template_name?: string | null;

		/**
		 * The unique string that that we created to identify the Content resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The [Content types](https://www.twilio.com/docs/content/content-types-overview) (e.g. twilio/text) for this Content resource. */
		types?: any;

		/** The URL of the resource, relative to `https://content.twilio.com`. */
		url?: string | null;

		/** Defines the default placeholder values for variables included in the Content resource. e.g. {"1": "Customer_Name"}. */
		variables?: any;
	}
	export interface Contentv1legacy_contentFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** A string name used to describe the Content resource. Not visible to the end recipient. */
		friendly_name: FormControl<string | null | undefined>,

		/** Two-letter (ISO 639-1) language code (e.g., en) identifying the language the Content resource is in. */
		language: FormControl<string | null | undefined>,

		/** The string body field of the legacy content template associated with this Content resource */
		legacy_body: FormControl<string | null | undefined>,

		/** The string name of the legacy content template associated with this Content resource, unique across all template names for its account.  Only lowercase letters, numbers and underscores are allowed */
		legacy_template_name: FormControl<string | null | undefined>,

		/**
		 * The unique string that that we created to identify the Content resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The [Content types](https://www.twilio.com/docs/content/content-types-overview) (e.g. twilio/text) for this Content resource. */
		types: FormControl<any | null | undefined>,

		/** The URL of the resource, relative to `https://content.twilio.com`. */
		url: FormControl<string | null | undefined>,

		/** Defines the default placeholder values for variables included in the Content resource. e.g. {"1": "Customer_Name"}. */
		variables: FormControl<any | null | undefined>,
	}
	export function CreateContentv1legacy_contentFormGroup() {
		return new FormGroup<Contentv1legacy_contentFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			legacy_body: new FormControl<string | null | undefined>(undefined),
			legacy_template_name: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^HX[0-9a-fA-F]{32}$')]),
			types: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			variables: new FormControl<any | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of Contents belonging to the account used to make the request
		 * Get v1/Content
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {V1ContentGetByPageSizeAndPageAndPageTokenReturn} OK
		 */
		V1ContentGetByPageSizeAndPageAndPageToken(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<V1ContentGetByPageSizeAndPageAndPageTokenReturn> {
			return this.http.get<V1ContentGetByPageSizeAndPageAndPageTokenReturn>(this.baseUri + 'v1/Content?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a Content resource
		 * Delete v1/Content/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Content resource to fetch.
		 * @return {void} 
		 */
		V1Content_SidDelete(Sid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Content/' + (Sid == null ? '' : encodeURIComponent(Sid)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a Content resource by its unique Content Sid
		 * Get v1/Content/{Sid}
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Content resource to fetch.
		 * @return {Contentv1content} OK
		 */
		V1Content_SidGet(Sid: string, headersHandler?: () => HttpHeaders): Observable<Contentv1content> {
			return this.http.get<Contentv1content>(this.baseUri + 'v1/Content/' + (Sid == null ? '' : encodeURIComponent(Sid)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Fetch a Content resource's approval status by its unique Content Sid
		 * Get v1/Content/{Sid}/ApprovalRequests
		 * @param {string} Sid The Twilio-provided string that uniquely identifies the Content resource whose approval information to fetch.
		 * @return {Contentv1contentapproval_fetch} OK
		 */
		V1Content_SidApprovalRequestsGet(Sid: string, headersHandler?: () => HttpHeaders): Observable<Contentv1contentapproval_fetch> {
			return this.http.get<Contentv1contentapproval_fetch>(this.baseUri + 'v1/Content/' + (Sid == null ? '' : encodeURIComponent(Sid)) + '/ApprovalRequests', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a list of Contents with approval statuses belonging to the account used to make the request
		 * Get v1/ContentAndApprovals
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {V1ContentAndApprovalsGetByPageSizeAndPageAndPageTokenReturn} OK
		 */
		V1ContentAndApprovalsGetByPageSizeAndPageAndPageToken(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<V1ContentAndApprovalsGetByPageSizeAndPageAndPageTokenReturn> {
			return this.http.get<V1ContentAndApprovalsGetByPageSizeAndPageAndPageTokenReturn>(this.baseUri + 'v1/ContentAndApprovals?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a list of Legacy Contents belonging to the account used to make the request
		 * Get v1/LegacyContent
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {V1LegacyContentGetByPageSizeAndPageAndPageTokenReturn} OK
		 */
		V1LegacyContentGetByPageSizeAndPageAndPageToken(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<V1LegacyContentGetByPageSizeAndPageAndPageTokenReturn> {
			return this.http.get<V1LegacyContentGetByPageSizeAndPageAndPageTokenReturn>(this.baseUri + 'v1/LegacyContent?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface V1ContentGetByPageSizeAndPageAndPageTokenReturn {
		contents?: Array<Contentv1content>;
		meta?: V1ContentGetByPageSizeAndPageAndPageTokenReturnMeta;
	}
	export interface V1ContentGetByPageSizeAndPageAndPageTokenReturnFormProperties {
	}
	export function CreateV1ContentGetByPageSizeAndPageAndPageTokenReturnFormGroup() {
		return new FormGroup<V1ContentGetByPageSizeAndPageAndPageTokenReturnFormProperties>({
		});

	}

	export interface V1ContentGetByPageSizeAndPageAndPageTokenReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface V1ContentGetByPageSizeAndPageAndPageTokenReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateV1ContentGetByPageSizeAndPageAndPageTokenReturnMetaFormGroup() {
		return new FormGroup<V1ContentGetByPageSizeAndPageAndPageTokenReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V1ContentAndApprovalsGetByPageSizeAndPageAndPageTokenReturn {
		contents?: Array<Contentv1content_and_approvals>;
		meta?: V1ContentAndApprovalsGetByPageSizeAndPageAndPageTokenReturnMeta;
	}
	export interface V1ContentAndApprovalsGetByPageSizeAndPageAndPageTokenReturnFormProperties {
	}
	export function CreateV1ContentAndApprovalsGetByPageSizeAndPageAndPageTokenReturnFormGroup() {
		return new FormGroup<V1ContentAndApprovalsGetByPageSizeAndPageAndPageTokenReturnFormProperties>({
		});

	}

	export interface V1ContentAndApprovalsGetByPageSizeAndPageAndPageTokenReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface V1ContentAndApprovalsGetByPageSizeAndPageAndPageTokenReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateV1ContentAndApprovalsGetByPageSizeAndPageAndPageTokenReturnMetaFormGroup() {
		return new FormGroup<V1ContentAndApprovalsGetByPageSizeAndPageAndPageTokenReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface V1LegacyContentGetByPageSizeAndPageAndPageTokenReturn {
		contents?: Array<Contentv1legacy_content>;
		meta?: V1LegacyContentGetByPageSizeAndPageAndPageTokenReturnMeta;
	}
	export interface V1LegacyContentGetByPageSizeAndPageAndPageTokenReturnFormProperties {
	}
	export function CreateV1LegacyContentGetByPageSizeAndPageAndPageTokenReturnFormGroup() {
		return new FormGroup<V1LegacyContentGetByPageSizeAndPageAndPageTokenReturnFormProperties>({
		});

	}

	export interface V1LegacyContentGetByPageSizeAndPageAndPageTokenReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface V1LegacyContentGetByPageSizeAndPageAndPageTokenReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateV1LegacyContentGetByPageSizeAndPageAndPageTokenReturnMetaFormGroup() {
		return new FormGroup<V1LegacyContentGetByPageSizeAndPageAndPageTokenReturnMetaFormProperties>({
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

