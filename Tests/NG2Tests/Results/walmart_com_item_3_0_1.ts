import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get status of an item feed
		 * You can display the status of an item within a feed. Use the feed ID returned from the upload an item API.
		 * Get v2/feeds
		 * @param {string} feedId The feed ID.
		 * @param {string} includeDetails Includes the status details for each item in the feed. Do not set this parameter to true as discrepancies may appear between the header and the item details (the item details may be incorrect). Instead, use the Get a feedItems status.
		 * @param {string} offset The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true.
		 * @param {string} limit The number of items to be returned. Cannot be more than 50 items. Use it only when the includeDetails is set to true.
		 * @return {void} 
		 */
		V2getFeedItemStatus(feedId: string | null | undefined, includeDetails: string | null | undefined, offset: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/feeds?feedId=' + (feedId == null ? '' : encodeURIComponent(feedId)) + '&includeDetails=' + (includeDetails == null ? '' : encodeURIComponent(includeDetails)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get status of an item within a feed
		 * You can display the status of all items within a feed. Use the feed ID returned from the upload an item API.
		 * Get v2/feeds/{feedId}
		 * @param {string} feedId The feed ID
		 * @param {string} includeDetails Includes details of each entity in the feed. Do not set this parameter to true.
		 * @param {string} offset The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true.
		 * @param {string} limit The number of entities to be returned. It cannot be more than 50 entities. Use it only when the includeDetails is set to true.
		 * @return {void} 
		 */
		V2getAllItemsStatus(feedId: string, includeDetails: string | null | undefined, offset: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/feeds/' + (feedId == null ? '' : encodeURIComponent(feedId)) + '&includeDetails=' + (includeDetails == null ? '' : encodeURIComponent(includeDetails)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get status of an item feed
		 * You can display the status of an item within a feed. Use the feed ID returned from the upload an item API.
		 * Get v3/feeds
		 * @param {string} feedId The feed ID.
		 * @param {string} includeDetails Includes the status details for each item in the feed. Do not set this parameter to true as discrepancies may appear between the header and the item details (the item details may be incorrect). Instead, use the Get a feedItems status.
		 * @param {string} offset The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true.
		 * @param {string} limit The number of items to be returned. Cannot be more than 50 items. Use it only when the includeDetails is set to true.
		 * @return {void} 
		 */
		V3getFeedItemStatus(feedId: string | null | undefined, includeDetails: string | null | undefined, offset: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/feeds?feedId=' + (feedId == null ? '' : encodeURIComponent(feedId)) + '&includeDetails=' + (includeDetails == null ? '' : encodeURIComponent(includeDetails)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get status of an item within a feed
		 * You can display the status of all items within a feed. Use the feed ID returned from the upload an item API.
		 * Get v3/feeds/{feedId}
		 * @param {string} feedId The feed ID
		 * @param {string} includeDetails Includes details of each entity in the feed. Do not set this parameter to true.
		 * @param {string} offset The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true.
		 * @param {string} limit The number of entities to be returned. It cannot be more than 50 entities. Use it only when the includeDetails is set to true.
		 * @return {void} 
		 */
		V3getAllItemsStatus(feedId: string, includeDetails: string | null | undefined, offset: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/feeds/' + (feedId == null ? '' : encodeURIComponent(feedId)) + '&includeDetails=' + (includeDetails == null ? '' : encodeURIComponent(includeDetails)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum V2getFeedItemStatusWM_CONSUMER_CHANNEL_TYPE { SWAGGER_CHANNEL_TYPE = 'SWAGGER_CHANNEL_TYPE' }

	export enum V2doPostMultiPartFeedType { item = 'item' }

	export enum V3doPostMultiPartFeedType { item = 'item', SUPPLIER_FULL_ITEM = 'SUPPLIER_FULL_ITEM', CONTENT_PRODUCT = 'CONTENT_PRODUCT' }

}

