import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The associated fields returned, given a unique abuse ticket id */
	export interface AbuseTicket {

		/**
		 * Is this abuse ticket closed?
		 * Required
		 */
		closed: boolean;

		/**
		 * The date the abuse ticket was closed
		 * Required
		 */
		closedAt: string;

		/**
		 * The date the abuse ticket was created
		 * Required
		 */
		createdAt: string;

		/**
		 * The domain or IP the suspected abuse was reported against
		 * Required
		 */
		domainIp: string;

		/**
		 * The shopper id of the person who reported the suspected abuse
		 * Required
		 */
		reporter: string;

		/**
		 * The single URL or IP the suspected abuse was reported against
		 * Required
		 */
		source: string;

		/**
		 * The company the suspected abuse is targeting
		 * Required
		 */
		target: string;

		/**
		 * Abuse ticket ID
		 * Required
		 */
		ticketId: string;

		/**
		 * The type of abuse being reported
		 * Required
		 */
		type: AbuseTicketType;
	}

	/** The associated fields returned, given a unique abuse ticket id */
	export interface AbuseTicketFormProperties {

		/**
		 * Is this abuse ticket closed?
		 * Required
		 */
		closed: FormControl<boolean | null | undefined>,

		/**
		 * The date the abuse ticket was closed
		 * Required
		 */
		closedAt: FormControl<string | null | undefined>,

		/**
		 * The date the abuse ticket was created
		 * Required
		 */
		createdAt: FormControl<string | null | undefined>,

		/**
		 * The domain or IP the suspected abuse was reported against
		 * Required
		 */
		domainIp: FormControl<string | null | undefined>,

		/**
		 * The shopper id of the person who reported the suspected abuse
		 * Required
		 */
		reporter: FormControl<string | null | undefined>,

		/**
		 * The single URL or IP the suspected abuse was reported against
		 * Required
		 */
		source: FormControl<string | null | undefined>,

		/**
		 * The company the suspected abuse is targeting
		 * Required
		 */
		target: FormControl<string | null | undefined>,

		/**
		 * Abuse ticket ID
		 * Required
		 */
		ticketId: FormControl<string | null | undefined>,

		/**
		 * The type of abuse being reported
		 * Required
		 */
		type: FormControl<AbuseTicketType | null | undefined>,
	}
	export function CreateAbuseTicketFormGroup() {
		return new FormGroup<AbuseTicketFormProperties>({
			closed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			closedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domainIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reporter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ticketId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AbuseTicketType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AbuseTicketType { A_RECORD = 0, CHILD_ABUSE = 1, CONTENT = 2, FRAUD_WIRE = 3, IP_BLOCK = 4, MALWARE = 5, NETWORK_ABUSE = 6, PHISHING = 7, SPAM = 8 }

	export interface AbuseTicketCreate {

		/** Additional information that may assist the abuse investigator. ie: server logs or email headers/body for SPAM */
		info?: string | null;

		/** Reporter URL if housing additional information that may assist the abuse investigator */
		infoUrl?: string | null;

		/** Do you believe this is intentional abuse by the domain holder? */
		intentional?: boolean | null;

		/** The Proxy information required to view the abuse being reported. ie: Specific IP used, or country of IP viewing from */
		proxy?: string | null;

		/** The URL or IP where live abuse content is located at. ie: https://www.example.com/bad_stuff/bad.php */
		source?: string | null;

		/** The brand/company the abuse is targeting. ie: brand name/bank name */
		target?: string | null;

		/** The type of abuse being reported. */
		type?: AbuseTicketType | null;
	}
	export interface AbuseTicketCreateFormProperties {

		/** Additional information that may assist the abuse investigator. ie: server logs or email headers/body for SPAM */
		info: FormControl<string | null | undefined>,

		/** Reporter URL if housing additional information that may assist the abuse investigator */
		infoUrl: FormControl<string | null | undefined>,

		/** Do you believe this is intentional abuse by the domain holder? */
		intentional: FormControl<boolean | null | undefined>,

		/** The Proxy information required to view the abuse being reported. ie: Specific IP used, or country of IP viewing from */
		proxy: FormControl<string | null | undefined>,

		/** The URL or IP where live abuse content is located at. ie: https://www.example.com/bad_stuff/bad.php */
		source: FormControl<string | null | undefined>,

		/** The brand/company the abuse is targeting. ie: brand name/bank name */
		target: FormControl<string | null | undefined>,

		/** The type of abuse being reported. */
		type: FormControl<AbuseTicketType | null | undefined>,
	}
	export function CreateAbuseTicketCreateFormGroup() {
		return new FormGroup<AbuseTicketCreateFormProperties>({
			info: new FormControl<string | null | undefined>(undefined),
			infoUrl: new FormControl<string | null | undefined>(undefined),
			intentional: new FormControl<boolean | null | undefined>(undefined),
			proxy: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AbuseTicketType | null | undefined>(undefined),
		});

	}


	/** The primary key of a newly created abuse ticket */
	export interface AbuseTicketId {

		/** Abuse ticket ID */
		u_number?: string | null;
	}

	/** The primary key of a newly created abuse ticket */
	export interface AbuseTicketIdFormProperties {

		/** Abuse ticket ID */
		u_number: FormControl<string | null | undefined>,
	}
	export function CreateAbuseTicketIdFormGroup() {
		return new FormGroup<AbuseTicketIdFormProperties>({
			u_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AbuseTicketList {
		pagination?: Pagination;

		/**
		 * A list of abuse ticket ids originated by this reporter.
		 * Required
		 */
		ticketIds: Array<string>;
	}
	export interface AbuseTicketListFormProperties {
	}
	export function CreateAbuseTicketListFormGroup() {
		return new FormGroup<AbuseTicketListFormProperties>({
		});

	}

	export interface Error {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: string;

		/** List of the specific fields, and the errors found with their contents */
		fields?: Array<ErrorField>;

		/** Human-readable, English description of the error */
		message?: string | null;

		/**
		 * Stack trace indicating where the error occurred.<br/>
		 * NOTE: This attribute <strong>MAY</strong> be included for Development and Test environments.
		 * However, it <strong>MUST NOT</strong> be exposed from OTE nor Production systems.
		 */
		stack?: Array<string>;
	}
	export interface ErrorFormProperties {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Human-readable, English description of the error */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorField {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: string;

		/** Human-readable, English description of the problem with the contents of the field */
		message?: string | null;

		/**
		 * 1) JSONPath referring to the field within the data containing an error<br/>or<br/>2) JSONPath referring to an object containing an error
		 * Required
		 */
		path: string;

		/** JSONPath referring to the field on the object referenced by `path` containing an error */
		pathRelated?: string | null;
	}
	export interface ErrorFieldFormProperties {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Human-readable, English description of the problem with the contents of the field */
		message: FormControl<string | null | undefined>,

		/**
		 * 1) JSONPath referring to the field within the data containing an error<br/>or<br/>2) JSONPath referring to an object containing an error
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/** JSONPath referring to the field on the object referenced by `path` containing an error */
		pathRelated: FormControl<string | null | undefined>,
	}
	export function CreateErrorFieldFormGroup() {
		return new FormGroup<ErrorFieldFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pathRelated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pagination {

		/** Optional link to first list of results */
		first?: string | null;

		/** Optional link to last list of results */
		last?: string | null;

		/** Optional link to next list of results */
		next?: string | null;

		/** Optional link to previous list of results */
		previous?: string | null;

		/** Number of records available */
		total?: number | null;
	}
	export interface PaginationFormProperties {

		/** Optional link to first list of results */
		first: FormControl<string | null | undefined>,

		/** Optional link to last list of results */
		last: FormControl<string | null | undefined>,

		/** Optional link to next list of results */
		next: FormControl<string | null | undefined>,

		/** Optional link to previous list of results */
		previous: FormControl<string | null | undefined>,

		/** Number of records available */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePaginationFormGroup() {
		return new FormGroup<PaginationFormProperties>({
			first: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all abuse tickets ids that match user provided filters
		 * Get v1/abuse/tickets
		 * @param {AbuseTicketType} type The type of abuse.
		 * @param {boolean} closed Is this abuse ticket closed?
		 * @param {string} sourceDomainOrIp The domain name or ip address the abuse originated from
		 * @param {string} target The brand/company the abuse is targeting. ie: brand name/bank name
		 * @param {string} createdStart The earliest abuse ticket creation date to pull abuse tickets for
		 * @param {string} createdEnd The latest abuse ticket creation date to pull abuse tickets for
		 * @param {string} limit Number of abuse ticket numbers to return.
		 * @param {string} offset The earliest result set record number to pull abuse tickets for
		 * @return {void} Success
		 */
		GetTickets(type: AbuseTicketType | null | undefined, closed: boolean | null | undefined, sourceDomainOrIp: string | null | undefined, target: string | null | undefined, createdStart: string | null | undefined, createdEnd: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/abuse/tickets?type=' + type + '&closed=' + closed + '&sourceDomainOrIp=' + (sourceDomainOrIp == null ? '' : encodeURIComponent(sourceDomainOrIp)) + '&target=' + (target == null ? '' : encodeURIComponent(target)) + '&createdStart=' + (createdStart == null ? '' : encodeURIComponent(createdStart)) + '&createdEnd=' + (createdEnd == null ? '' : encodeURIComponent(createdEnd)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new abuse ticket
		 * Post v1/abuse/tickets
		 * @param {AbuseTicketCreate} requestBody The endpoint which allows the Reporter to create a new abuse ticket
		 * @return {void} No response was specified
		 */
		CreateTicket(requestBody: AbuseTicketCreate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/abuse/tickets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return the abuse ticket data for a given ticket id
		 * Get v1/abuse/tickets/{ticketId}
		 * @param {string} ticketId A unique abuse ticket identifier
		 * @return {void} Success
		 */
		GetTicketInfo(ticketId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/abuse/tickets/' + (ticketId == null ? '' : encodeURIComponent(ticketId)), { observe: 'response', responseType: 'text' });
		}
	}

}

