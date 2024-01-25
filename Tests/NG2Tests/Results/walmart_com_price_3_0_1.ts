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
		 * Get status of a price feed
		 * You can display the status of an item price within a feed. Use the feed ID returned from the upload a price feed API.
		 * Get v3/feeds/{feedId}
		 * @param {string} feedId The feed ID which status you want to retrieve.
		 * @param {string} includeDetails Includes details of each entity in the feed. Do not set this parameter to true.
		 * @param {string} offset The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true.
		 * @param {string} limit The number of entities to be returned. It cannot be more than 50 entities. Only used when includeDetails is set to true.
		 * @return {void} 
		 */
		GetFeedsStatus(feedId: string, includeDetails: string | null | undefined, offset: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/feeds/' + (feedId == null ? '' : encodeURIComponent(feedId)) + '&includeDetails=' + (includeDetails == null ? '' : encodeURIComponent(includeDetails)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum UpdatePriceFeedType { price = 0, promo = 1 }

	export enum UpdatePriceWM_CONSUMER_CHANNEL_TYPE { SWAGGER_CHANNEL_TYPE = 0 }

}

