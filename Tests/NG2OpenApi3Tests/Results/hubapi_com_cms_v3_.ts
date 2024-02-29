import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CollectionResponseWithTotalDomainForwardPaging {
		paging?: ForwardPaging;

		/** Required */
		results: Array<Domain>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface CollectionResponseWithTotalDomainForwardPagingFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateCollectionResponseWithTotalDomainForwardPagingFormGroup() {
		return new FormGroup<CollectionResponseWithTotalDomainForwardPagingFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ForwardPaging {
		next?: NextPage;
	}
	export interface ForwardPagingFormProperties {
	}
	export function CreateForwardPagingFormGroup() {
		return new FormGroup<ForwardPagingFormProperties>({
		});

	}

	export interface NextPage {

		/** Required */
		after: string;
		link?: string | null;
	}
	export interface NextPageFormProperties {

		/** Required */
		after: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
	}
	export function CreateNextPageFormGroup() {
		return new FormGroup<NextPageFormProperties>({
			after: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Domain {
		correctCname?: string | null;
		created?: Date | null;

		/**
		 * The actual domain or sub-domain. e.g. www.hubspot.com
		 * Required
		 */
		domain: string;

		/**
		 * The unique ID of this domain.
		 * Required
		 */
		id: string;

		/**
		 * Whether the DNS for this domain is optimally configured for use with HubSpot.
		 * Required
		 */
		isResolving: boolean;
		isSslEnabled?: boolean | null;
		isSslOnly?: boolean | null;

		/**
		 * Whether the domain is used for CMS blog posts.
		 * Required
		 */
		isUsedForBlogPost: boolean;

		/**
		 * Whether the domain is used for CMS email web pages.
		 * Required
		 */
		isUsedForEmail: boolean;

		/**
		 * Whether the domain is used for CMS knowledge pages.
		 * Required
		 */
		isUsedForKnowledge: boolean;

		/**
		 * Whether the domain is used for CMS landing pages.
		 * Required
		 */
		isUsedForLandingPage: boolean;

		/**
		 * Whether the domain is used for CMS site pages.
		 * Required
		 */
		isUsedForSitePage: boolean;
		manuallyMarkedAsResolving?: boolean | null;
		primaryBlogPost?: boolean | null;
		primaryEmail?: boolean | null;
		primaryKnowledge?: boolean | null;
		primaryLandingPage?: boolean | null;
		primarySitePage?: boolean | null;
		secondaryToDomain?: string | null;
		updated?: Date | null;
	}
	export interface DomainFormProperties {
		correctCname: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,

		/**
		 * The actual domain or sub-domain. e.g. www.hubspot.com
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * The unique ID of this domain.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Whether the DNS for this domain is optimally configured for use with HubSpot.
		 * Required
		 */
		isResolving: FormControl<boolean | null | undefined>,
		isSslEnabled: FormControl<boolean | null | undefined>,
		isSslOnly: FormControl<boolean | null | undefined>,

		/**
		 * Whether the domain is used for CMS blog posts.
		 * Required
		 */
		isUsedForBlogPost: FormControl<boolean | null | undefined>,

		/**
		 * Whether the domain is used for CMS email web pages.
		 * Required
		 */
		isUsedForEmail: FormControl<boolean | null | undefined>,

		/**
		 * Whether the domain is used for CMS knowledge pages.
		 * Required
		 */
		isUsedForKnowledge: FormControl<boolean | null | undefined>,

		/**
		 * Whether the domain is used for CMS landing pages.
		 * Required
		 */
		isUsedForLandingPage: FormControl<boolean | null | undefined>,

		/**
		 * Whether the domain is used for CMS site pages.
		 * Required
		 */
		isUsedForSitePage: FormControl<boolean | null | undefined>,
		manuallyMarkedAsResolving: FormControl<boolean | null | undefined>,
		primaryBlogPost: FormControl<boolean | null | undefined>,
		primaryEmail: FormControl<boolean | null | undefined>,
		primaryKnowledge: FormControl<boolean | null | undefined>,
		primaryLandingPage: FormControl<boolean | null | undefined>,
		primarySitePage: FormControl<boolean | null | undefined>,
		secondaryToDomain: FormControl<string | null | undefined>,
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			correctCname: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isResolving: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isSslEnabled: new FormControl<boolean | null | undefined>(undefined),
			isSslOnly: new FormControl<boolean | null | undefined>(undefined),
			isUsedForBlogPost: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isUsedForEmail: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isUsedForKnowledge: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isUsedForLandingPage: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isUsedForSitePage: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			manuallyMarkedAsResolving: new FormControl<boolean | null | undefined>(undefined),
			primaryBlogPost: new FormControl<boolean | null | undefined>(undefined),
			primaryEmail: new FormControl<boolean | null | undefined>(undefined),
			primaryKnowledge: new FormControl<boolean | null | undefined>(undefined),
			primaryLandingPage: new FormControl<boolean | null | undefined>(undefined),
			primarySitePage: new FormControl<boolean | null | undefined>(undefined),
			secondaryToDomain: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Error {

		/**
		 * The error category
		 * Required
		 */
		category: string;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: string;

		/** further information about the error */
		errors?: Array<ErrorDetail>;

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links?: {[id: string]: string };

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorFormProperties {

		/**
		 * The error category
		 * Required
		 */
		category: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: FormControl<string | null | undefined>,

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorDetail {

		/** The status code associated with the error detail */
		code?: string | null;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/** The name of the field or parameter in which the error was found. */
		in?: string | null;

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorDetailFormProperties {

		/** The status code associated with the error detail */
		code: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** The name of the field or parameter in which the error was found. */
		in: FormControl<string | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			in: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get current domains
		 * Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.
		 * Get cms/v3/domains/
		 * @param {Date} createdAt Only return domains created at this date.
		 * @param {Date} createdAfter Only return domains created after this date.
		 * @param {Date} createdBefore Only return domains created before this date.
		 * @param {Date} updatedAt Only return domains updated at this date.
		 * @param {Date} updatedAfter Only return domains updated after this date.
		 * @param {Date} updatedBefore Only return domains updated before this date.
		 * @param {string} after The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.
		 * @param {number} limit Maximum number of results per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} archived Whether to return only results that have been archived.
		 * @return {CollectionResponseWithTotalDomainForwardPaging} successful operation
		 */
		Get_SlashcmsSlashv3SlashdomainsSlash_getPage(createdAt: Date | null | undefined, createdAfter: Date | null | undefined, createdBefore: Date | null | undefined, updatedAt: Date | null | undefined, updatedAfter: Date | null | undefined, updatedBefore: Date | null | undefined, sort: Array<string> | null | undefined, after: string | null | undefined, limit: number | null | undefined, archived: boolean | null | undefined): Observable<CollectionResponseWithTotalDomainForwardPaging> {
			return this.http.get<CollectionResponseWithTotalDomainForwardPaging>(this.baseUri + 'cms/v3/domains/?createdAt=' + createdAt?.toISOString() + '&createdAfter=' + createdAfter?.toISOString() + '&createdBefore=' + createdBefore?.toISOString() + '&updatedAt=' + updatedAt?.toISOString() + '&updatedAfter=' + updatedAfter?.toISOString() + '&updatedBefore=' + updatedBefore?.toISOString() + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&limit=' + limit + '&archived=' + archived, {});
		}

		/**
		 * Get a single domain
		 * Returns a single domains with the id specified.
		 * Get cms/v3/domains/{domainId}
		 * @param {string} domainId The unique ID of the domain.
		 * @return {Domain} successful operation
		 */
		Get_SlashcmsSlashv3SlashdomainsSlashdomainId_getById(domainId: string): Observable<Domain> {
			return this.http.get<Domain>(this.baseUri + 'cms/v3/domains/' + (domainId == null ? '' : encodeURIComponent(domainId)), {});
		}
	}

}

