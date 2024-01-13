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
		 * Get inventory for an item
		 * This endpoint retrieves inventory for a given item.
		 * Get v2/inventory
		 * @param {string} sku The SKU (seller-provided product identifier) of the item whose inventory we are retrieving
		 * @return {void} 
		 */
		Version_2GetBySku(sku: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/inventory?sku=' + (sku == null ? '' : encodeURIComponent(sku)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get inventory for an item
		 * This endpoint retrieves inventory for a given item.
		 * Get v3/inventory
		 * @param {string} sku The SKU (seller-provided product identifier) of the item whose inventory we are retrieving
		 * @param {string} shipNode Ship Node
		 * @return {void} 
		 */
		Version_3GetBySkuAndShipNode(sku: string, shipNode: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/inventory?sku=' + (sku == null ? '' : encodeURIComponent(sku)) + '&shipNode=' + (shipNode == null ? '' : encodeURIComponent(shipNode)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Version_2PostByFeedTypeFeedType { inventory = 0 }

	export enum Version_2PostByFeedTypeWM_CONSUMER_CHANNEL_TYPE { SWAGGER_CHANNEL_TYPE = 0 }

}

