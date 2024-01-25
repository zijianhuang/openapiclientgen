import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Representation of a license assignment. */
	export interface LicenseAssignment {

		/** ETag of the resource. */
		etags?: string | null;

		/** Identifies the resource as a LicenseAssignment. */
		kind?: string | null;

		/** A product's unique identifier. For more information about products in this version of the API, see Product and SKU IDs. */
		productId?: string | null;

		/** Display Name of the product. */
		productName?: string | null;

		/** Link to this page. */
		selfLink?: string | null;

		/** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
		skuId?: string | null;

		/** Display Name of the sku of the product. */
		skuName?: string | null;

		/** The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes. */
		userId?: string | null;
	}

	/** Representation of a license assignment. */
	export interface LicenseAssignmentFormProperties {

		/** ETag of the resource. */
		etags: FormControl<string | null | undefined>,

		/** Identifies the resource as a LicenseAssignment. */
		kind: FormControl<string | null | undefined>,

		/** A product's unique identifier. For more information about products in this version of the API, see Product and SKU IDs. */
		productId: FormControl<string | null | undefined>,

		/** Display Name of the product. */
		productName: FormControl<string | null | undefined>,

		/** Link to this page. */
		selfLink: FormControl<string | null | undefined>,

		/** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
		skuId: FormControl<string | null | undefined>,

		/** Display Name of the sku of the product. */
		skuName: FormControl<string | null | undefined>,

		/** The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateLicenseAssignmentFormGroup() {
		return new FormGroup<LicenseAssignmentFormProperties>({
			etags: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			productName: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			skuId: new FormControl<string | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of a license assignment. */
	export interface LicenseAssignmentInsert {

		/** Email id of the user */
		userId?: string | null;
	}

	/** Representation of a license assignment. */
	export interface LicenseAssignmentInsertFormProperties {

		/** Email id of the user */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateLicenseAssignmentInsertFormGroup() {
		return new FormGroup<LicenseAssignmentInsertFormProperties>({
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** LicesnseAssignment List for a given product/sku for a customer. */
	export interface LicenseAssignmentList {

		/** ETag of the resource. */
		etag?: string | null;

		/** The LicenseAssignments in this page of results. */
		items?: Array<LicenseAssignment>;

		/** Identifies the resource as a collection of LicenseAssignments. */
		kind?: string | null;

		/** The token that you must submit in a subsequent request to retrieve additional license results matching your query parameters. The maxResults query string is related to the nextPageToken since maxResults determines how many entries are returned on each next page. */
		nextPageToken?: string | null;
	}

	/** LicesnseAssignment List for a given product/sku for a customer. */
	export interface LicenseAssignmentListFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Identifies the resource as a collection of LicenseAssignments. */
		kind: FormControl<string | null | undefined>,

		/** The token that you must submit in a subsequent request to retrieve additional license results matching your query parameters. The maxResults query string is related to the nextPageToken since maxResults determines how many entries are returned on each next page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateLicenseAssignmentListFormGroup() {
		return new FormGroup<LicenseAssignmentListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Assign a license.
		 * Post {productId}/sku/{skuId}/user
		 * @param {string} productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
		 * @param {string} skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
		 * @return {void} Successful response
		 */
		Licensing_licenseAssignments_insert(productId: string, skuId: string, requestBody: LicenseAssignmentInsert): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (productId == null ? '' : encodeURIComponent(productId)) + '/sku/' + (skuId == null ? '' : encodeURIComponent(skuId)) + '/user', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Revoke a license.
		 * Delete {productId}/sku/{skuId}/user/{userId}
		 * @param {string} productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
		 * @param {string} skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
		 * @param {string} userId The user's current primary email address. If the user's email address changes, use the new email address in your API requests.
		 * Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes.
		 * If the userId is suspended, the license status changes.
		 * @return {void} Successful response
		 */
		Licensing_licenseAssignments_delete(productId: string, skuId: string, userId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (productId == null ? '' : encodeURIComponent(productId)) + '/sku/' + (skuId == null ? '' : encodeURIComponent(skuId)) + '/user/' + (userId == null ? '' : encodeURIComponent(userId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific user's license by product SKU.
		 * Get {productId}/sku/{skuId}/user/{userId}
		 * @param {string} productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
		 * @param {string} skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
		 * @param {string} userId The user's current primary email address. If the user's email address changes, use the new email address in your API requests.
		 * Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes.
		 * If the userId is suspended, the license status changes.
		 * @return {void} Successful response
		 */
		Licensing_licenseAssignments_get(productId: string, skuId: string, userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (productId == null ? '' : encodeURIComponent(productId)) + '/sku/' + (skuId == null ? '' : encodeURIComponent(skuId)) + '/user/' + (userId == null ? '' : encodeURIComponent(userId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
		 * Patch {productId}/sku/{skuId}/user/{userId}
		 * @param {string} productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
		 * @param {string} skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
		 * @param {string} userId The user's current primary email address. If the user's email address changes, use the new email address in your API requests.
		 * Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes.
		 * If the userId is suspended, the license status changes.
		 * @return {void} Successful response
		 */
		Licensing_licenseAssignments_patch(productId: string, skuId: string, userId: string, requestBody: LicenseAssignment): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + (productId == null ? '' : encodeURIComponent(productId)) + '/sku/' + (skuId == null ? '' : encodeURIComponent(skuId)) + '/user/' + (userId == null ? '' : encodeURIComponent(userId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reassign a user's product SKU with a different SKU in the same product.
		 * Put {productId}/sku/{skuId}/user/{userId}
		 * @param {string} productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
		 * @param {string} skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
		 * @param {string} userId The user's current primary email address. If the user's email address changes, use the new email address in your API requests.
		 * Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes.
		 * If the userId is suspended, the license status changes.
		 * @return {void} Successful response
		 */
		Licensing_licenseAssignments_update(productId: string, skuId: string, userId: string, requestBody: LicenseAssignment): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (productId == null ? '' : encodeURIComponent(productId)) + '/sku/' + (skuId == null ? '' : encodeURIComponent(skuId)) + '/user/' + (userId == null ? '' : encodeURIComponent(userId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all users assigned licenses for a specific product SKU.
		 * Get {productId}/sku/{skuId}/users
		 * @param {string} productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
		 * @param {string} skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
		 * @param {string} customerId Customer's customerId. A previous version of this API accepted the primary domain name as a value for this field.
		 * If the customer is suspended, the server returns an error.
		 * @param {number} maxResults The maxResults query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
		 * @param {string} pageToken Token to fetch the next page of data. The maxResults query string is related to the pageToken since maxResults determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
		 * @return {void} Successful response
		 */
		Licensing_licenseAssignments_listForProductAndSku(productId: string, skuId: string, customerId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (productId == null ? '' : encodeURIComponent(productId)) + '/sku/' + (skuId == null ? '' : encodeURIComponent(skuId)) + '/users&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all users assigned licenses for a specific product SKU.
		 * Get {productId}/users
		 * @param {string} productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
		 * @param {string} customerId Customer's customerId. A previous version of this API accepted the primary domain name as a value for this field.
		 * If the customer is suspended, the server returns an error.
		 * @param {number} maxResults The maxResults query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
		 * @param {string} pageToken Token to fetch the next page of data. The maxResults query string is related to the pageToken since maxResults determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
		 * @return {void} Successful response
		 */
		Licensing_licenseAssignments_listForProduct(productId: string, customerId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (productId == null ? '' : encodeURIComponent(productId)) + '/users&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}
	}

}

