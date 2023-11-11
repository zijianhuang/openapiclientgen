import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface SiteVerificationWebResourceGettokenRequest {

		/** The site for which a verification token will be generated. */
		site?: SiteVerificationWebResourceGettokenRequestSite | null;

		/** The verification method that will be used to verify this site. For sites, 'FILE' or 'META' methods may be used. For domains, only 'DNS' may be used. */
		verificationMethod?: string | null;
	}

	export interface SiteVerificationWebResourceGettokenRequestSite {

		/** The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name. */
		identifier?: string | null;

		/** The type of resource to be verified. Can be SITE or INET_DOMAIN (domain name). */
		type?: string | null;
	}

	export interface SiteVerificationWebResourceGettokenResponse {

		/** The verification method to use in conjunction with this token. For FILE, the token should be placed in the top-level directory of the site, stored inside a file of the same name. For META, the token should be placed in the HEAD tag of the default page that is loaded for the site. For DNS, the token should be placed in a TXT record of the domain. */
		method?: string | null;

		/** The verification token. The token must be placed appropriately in order for verification to succeed. */
		token?: string | null;
	}

	export interface SiteVerificationWebResourceListResponse {

		/** The list of sites that are owned by the authenticated user. */
		items?: Array<SiteVerificationWebResourceResource> | null;
	}

	export interface SiteVerificationWebResourceResource {

		/** The string used to identify this site. This value should be used in the "id" portion of the REST URL for the Get, Update, and Delete operations. */
		id?: string | null;

		/** The email addresses of all verified owners. */
		owners?: Array<string> | null;

		/** The address and type of a site that is verified or will be verified. */
		site?: SiteVerificationWebResourceResourceSite | null;
	}

	export interface SiteVerificationWebResourceResourceSite {

		/** The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name. */
		identifier?: string | null;

		/** The site type. Can be SITE or INET_DOMAIN (domain name). */
		type?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a verification token for placing on a website or domain.
		 * Post token
		 * @return {void} Successful response
		 */
		SiteVerification_webResource_getToken(requestBody: SiteVerificationWebResourceGettokenRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the list of your verified websites and domains.
		 * Get webResource
		 * @return {void} Successful response
		 */
		SiteVerification_webResource_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'webResource', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Attempt verification of a website or domain.
		 * Post webResource
		 * @param {string} verificationMethod The method to use for verifying a site or domain.
		 * @return {void} Successful response
		 */
		SiteVerification_webResource_insert(verificationMethod: string, requestBody: SiteVerificationWebResourceResource): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'webResource?verificationMethod=' + (verificationMethod == null ? '' : encodeURIComponent(verificationMethod)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @return {void} Successful response
		 */
		SiteVerification_webResource_get(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'webResource/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modify the list of owners for your website or domain. This method supports patch semantics.
		 * Patch webResource/{id}
		 * @param {string} id The id of a verified site or domain.
		 * @return {void} Successful response
		 */
		SiteVerification_webResource_patch(id: string, requestBody: SiteVerificationWebResourceResource): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'webResource/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modify the list of owners for your website or domain.
		 * Put webResource/{id}
		 * @param {string} id The id of a verified site or domain.
		 * @return {void} Successful response
		 */
		SiteVerification_webResource_update(id: string, requestBody: SiteVerificationWebResourceResource): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'webResource/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

