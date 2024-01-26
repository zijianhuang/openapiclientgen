import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface SiteVerificationWebResourceGettokenRequest {

		/** The site for which a verification token will be generated. */
		site?: SiteVerificationWebResourceGettokenRequestSite;

		/** The verification method that will be used to verify this site. For sites, 'FILE' or 'META' methods may be used. For domains, only 'DNS' may be used. */
		verificationMethod?: string | null;
	}
	export interface SiteVerificationWebResourceGettokenRequestFormProperties {

		/** The verification method that will be used to verify this site. For sites, 'FILE' or 'META' methods may be used. For domains, only 'DNS' may be used. */
		verificationMethod: FormControl<string | null | undefined>,
	}
	export function CreateSiteVerificationWebResourceGettokenRequestFormGroup() {
		return new FormGroup<SiteVerificationWebResourceGettokenRequestFormProperties>({
			verificationMethod: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteVerificationWebResourceGettokenRequestSite {

		/** The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name. */
		identifier?: string | null;

		/** The type of resource to be verified. Can be SITE or INET_DOMAIN (domain name). */
		type?: string | null;
	}
	export interface SiteVerificationWebResourceGettokenRequestSiteFormProperties {

		/** The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name. */
		identifier: FormControl<string | null | undefined>,

		/** The type of resource to be verified. Can be SITE or INET_DOMAIN (domain name). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSiteVerificationWebResourceGettokenRequestSiteFormGroup() {
		return new FormGroup<SiteVerificationWebResourceGettokenRequestSiteFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteVerificationWebResourceGettokenResponse {

		/** The verification method to use in conjunction with this token. For FILE, the token should be placed in the top-level directory of the site, stored inside a file of the same name. For META, the token should be placed in the HEAD tag of the default page that is loaded for the site. For DNS, the token should be placed in a TXT record of the domain. */
		method?: string | null;

		/** The verification token. The token must be placed appropriately in order for verification to succeed. */
		token?: string | null;
	}
	export interface SiteVerificationWebResourceGettokenResponseFormProperties {

		/** The verification method to use in conjunction with this token. For FILE, the token should be placed in the top-level directory of the site, stored inside a file of the same name. For META, the token should be placed in the HEAD tag of the default page that is loaded for the site. For DNS, the token should be placed in a TXT record of the domain. */
		method: FormControl<string | null | undefined>,

		/** The verification token. The token must be placed appropriately in order for verification to succeed. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateSiteVerificationWebResourceGettokenResponseFormGroup() {
		return new FormGroup<SiteVerificationWebResourceGettokenResponseFormProperties>({
			method: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteVerificationWebResourceListResponse {

		/** The list of sites that are owned by the authenticated user. */
		items?: Array<SiteVerificationWebResourceResource>;
	}
	export interface SiteVerificationWebResourceListResponseFormProperties {
	}
	export function CreateSiteVerificationWebResourceListResponseFormGroup() {
		return new FormGroup<SiteVerificationWebResourceListResponseFormProperties>({
		});

	}

	export interface SiteVerificationWebResourceResource {

		/** The string used to identify this site. This value should be used in the "id" portion of the REST URL for the Get, Update, and Delete operations. */
		id?: string | null;

		/** The email addresses of all verified owners. */
		owners?: Array<string>;

		/** The address and type of a site that is verified or will be verified. */
		site?: SiteVerificationWebResourceResourceSite;
	}
	export interface SiteVerificationWebResourceResourceFormProperties {

		/** The string used to identify this site. This value should be used in the "id" portion of the REST URL for the Get, Update, and Delete operations. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSiteVerificationWebResourceResourceFormGroup() {
		return new FormGroup<SiteVerificationWebResourceResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SiteVerificationWebResourceResourceSite {

		/** The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name. */
		identifier?: string | null;

		/** The site type. Can be SITE or INET_DOMAIN (domain name). */
		type?: string | null;
	}
	export interface SiteVerificationWebResourceResourceSiteFormProperties {

		/** The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name. */
		identifier: FormControl<string | null | undefined>,

		/** The site type. Can be SITE or INET_DOMAIN (domain name). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSiteVerificationWebResourceResourceSiteFormGroup() {
		return new FormGroup<SiteVerificationWebResourceResourceSiteFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a verification token for placing on a website or domain.
		 * Post token
		 * @return {SiteVerificationWebResourceGettokenResponse} Successful response
		 */
		SiteVerification_webResource_getToken(requestBody: SiteVerificationWebResourceGettokenRequest): Observable<SiteVerificationWebResourceGettokenResponse> {
			return this.http.post<SiteVerificationWebResourceGettokenResponse>(this.baseUri + 'token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the list of your verified websites and domains.
		 * Get webResource
		 * @return {SiteVerificationWebResourceListResponse} Successful response
		 */
		SiteVerification_webResource_list(): Observable<SiteVerificationWebResourceListResponse> {
			return this.http.get<SiteVerificationWebResourceListResponse>(this.baseUri + 'webResource', {});
		}

		/**
		 * Attempt verification of a website or domain.
		 * Post webResource
		 * @param {string} verificationMethod The method to use for verifying a site or domain.
		 * @return {SiteVerificationWebResourceResource} Successful response
		 */
		SiteVerification_webResource_insert(verificationMethod: string, requestBody: SiteVerificationWebResourceResource): Observable<SiteVerificationWebResourceResource> {
			return this.http.post<SiteVerificationWebResourceResource>(this.baseUri + 'webResource?verificationMethod=' + (verificationMethod == null ? '' : encodeURIComponent(verificationMethod)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Relinquish ownership of a website or domain.
		 * Delete webResource/{id}
		 * @param {string} id The id of a verified site or domain.
		 * @return {void} Successful response
		 */
		SiteVerification_webResource_delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'webResource/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the most current data for a website or domain.
		 * Get webResource/{id}
		 * @param {string} id The id of a verified site or domain.
		 * @return {SiteVerificationWebResourceResource} Successful response
		 */
		SiteVerification_webResource_get(id: string): Observable<SiteVerificationWebResourceResource> {
			return this.http.get<SiteVerificationWebResourceResource>(this.baseUri + 'webResource/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Modify the list of owners for your website or domain. This method supports patch semantics.
		 * Patch webResource/{id}
		 * @param {string} id The id of a verified site or domain.
		 * @return {SiteVerificationWebResourceResource} Successful response
		 */
		SiteVerification_webResource_patch(id: string, requestBody: SiteVerificationWebResourceResource): Observable<SiteVerificationWebResourceResource> {
			return this.http.patch<SiteVerificationWebResourceResource>(this.baseUri + 'webResource/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modify the list of owners for your website or domain.
		 * Put webResource/{id}
		 * @param {string} id The id of a verified site or domain.
		 * @return {SiteVerificationWebResourceResource} Successful response
		 */
		SiteVerification_webResource_update(id: string, requestBody: SiteVerificationWebResourceResource): Observable<SiteVerificationWebResourceResource> {
			return this.http.put<SiteVerificationWebResourceResource>(this.baseUri + 'webResource/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

