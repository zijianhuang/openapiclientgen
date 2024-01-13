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
		 * Get all orders
		 * You can display a list of all orders with the query parameter filter criteria.
		 * Get v3/orders
		 * @param {string} shipNode Ship Node
		 * @param {string} sku Retrieves all orders with the specified SKU.
		 * @param {string} customerOrderId Retrives the details of the specified customerOrderId.
		 * @param {string} purchaseOrderId The purchase order ID associated with the order to retrieve. One customer order can have multiple purchase orders associated with it.
		 * @param {string} status The list of orders corresponding to the requested status.
		 * @param {string} createdStartDate Limit orders to those created after this date or a timestamp.
		 * @param {string} createdEndDate Limit orders to those created before this date or timestamp.
		 * @param {string} fromExpectedShipDate Limit orders to those that have order lines with an expected ship date after this date.
		 * @param {string} toExpectedShipDate Limit orders to those that have order lines with an expected ship date before this date. 
		 * @param {number} limit The number of orders to be returned. Do not set this parameter to over 200 orders.
		 * @return {void} 
		 */
		GetAllOrders(shipNode: string | null | undefined, sku: string | null | undefined, customerOrderId: string | null | undefined, purchaseOrderId: string | null | undefined, status: string | null | undefined, createdStartDate: string | null | undefined, createdEndDate: string | null | undefined, fromExpectedShipDate: string | null | undefined, toExpectedShipDate: string | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/orders?shipNode=' + (shipNode == null ? '' : encodeURIComponent(shipNode)) + '&sku=' + (sku == null ? '' : encodeURIComponent(sku)) + '&customerOrderId=' + (customerOrderId == null ? '' : encodeURIComponent(customerOrderId)) + '&purchaseOrderId=' + (purchaseOrderId == null ? '' : encodeURIComponent(purchaseOrderId)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&createdStartDate=' + (createdStartDate == null ? '' : encodeURIComponent(createdStartDate)) + '&createdEndDate=' + (createdEndDate == null ? '' : encodeURIComponent(createdEndDate)) + '&fromExpectedShipDate=' + (fromExpectedShipDate == null ? '' : encodeURIComponent(fromExpectedShipDate)) + '&toExpectedShipDate=' + (toExpectedShipDate == null ? '' : encodeURIComponent(toExpectedShipDate)) + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all released orders
		 * You can display all released orders that have been created and are ready for fulfilment.
		 * Get v3/orders/released
		 * @param {string} shipNode Ship Node
		 * @param {string} createdStartDate Limit orders to those created after this date or a timestamp.
		 * @param {number} limit The number of orders to be returned. Do not set this parameter to over 200 orders.
		 * @return {void} 
		 */
		GetReleasedOrders(shipNode: string | null | undefined, createdStartDate: string, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/orders/released?shipNode=' + (shipNode == null ? '' : encodeURIComponent(shipNode)) + '&createdStartDate=' + (createdStartDate == null ? '' : encodeURIComponent(createdStartDate)) + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get released orders for next page
		 * You can display all released orders that have been created and are ready for fulfilment with nextCursor path parameter.
		 * Get v3/orders/released{nextCursor}
		 * @param {string} nextCursor Used for pagination when there are more than 200 orders to retrieve. The nextCursor value of the returned response includes a link to another GET call to retrieve the next page. Copy the link and paste it in the next call.
		 * @return {void} 
		 */
		GetNextCursorReleasedOrders(nextCursor: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/orders/released' + (nextCursor == null ? '' : encodeURIComponent(nextCursor)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an order
		 * You can display details of a specific order based on the purchaseOrderId.
		 * Get v3/orders/{purchaseOrderId}
		 * @param {string} purchaseOrderId Purchase Order ID
		 * @param {string} shipNode Ship Node
		 * @return {void} 
		 */
		GetOrderByPurchaseOrderId(purchaseOrderId: string, shipNode: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/orders/' + (purchaseOrderId == null ? '' : encodeURIComponent(purchaseOrderId)) + '&shipNode=' + (shipNode == null ? '' : encodeURIComponent(shipNode)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Acknowledge orders
		 * You can acknowledge an entire order, including all of its order lines. Walmart business rules require to acknowledge orders within four hour of receipt of the order, except in extenuating circumstances.
		 * Post v3/orders/{purchaseOrderId}/acknowledge
		 * @param {string} purchaseOrderId Purchase Order ID
		 * @param {string} shipNode Ship Node
		 * @return {void} 
		 */
		AcknowledgeOrders(purchaseOrderId: string, shipNode: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/orders/' + (purchaseOrderId == null ? '' : encodeURIComponent(purchaseOrderId)) + '/acknowledge&shipNode=' + (shipNode == null ? '' : encodeURIComponent(shipNode)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel order lines
		 * You can cancel one or more order lines. You must include a purchaseOrderLineNumber when cancelling an order. After cancelling your order, update the inventory for the cancelled order and send it in the next inventory feed.
		 * Post v3/orders/{purchaseOrderId}/cancel
		 * @param {string} purchaseOrderId Purchase Order ID
		 * @param {string} shipNode Ship Node
		 * @param {string} requestBody Request body
		 * @return {void} 
		 */
		CancelOrder(purchaseOrderId: string, shipNode: string | null | undefined, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/orders/' + (purchaseOrderId == null ? '' : encodeURIComponent(purchaseOrderId)) + '/cancel&shipNode=' + (shipNode == null ? '' : encodeURIComponent(shipNode)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Refund order lines
		 * You can refund one or more order lines that have been shipped. The response to a successful call contains the order with the refunded line item.
		 * Post v3/orders/{purchaseOrderId}/refund
		 * @param {string} purchaseOrderId Purchase Order ID
		 * @param {string} shipNode Ship Node
		 * @param {string} requestBody Request body
		 * @return {void} 
		 */
		RefundOrder(purchaseOrderId: string, shipNode: string | null | undefined, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/orders/' + (purchaseOrderId == null ? '' : encodeURIComponent(purchaseOrderId)) + '/refund&shipNode=' + (shipNode == null ? '' : encodeURIComponent(shipNode)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Shipping updates
		 * You can change the status of order lines to "Shipped" and trigger the charge to a customer. You must acknowledge your orders before sending a shipping update to avoid underselling. An order line, once marked as shipped, cannot be updated.
		 * Post v3/orders/{purchaseOrderId}/shipping
		 * @param {string} purchaseOrderId Purchase Order ID
		 * @param {string} shipNode Ship Node
		 * @param {string} requestBody Request body
		 * @return {void} 
		 */
		ShippingOrder(purchaseOrderId: string, shipNode: string | null | undefined, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/orders/' + (purchaseOrderId == null ? '' : encodeURIComponent(purchaseOrderId)) + '/shipping&shipNode=' + (shipNode == null ? '' : encodeURIComponent(shipNode)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get orders for next page
		 * You can display a list of all orders with nextCursor path parameter pagination criteria.
		 * Get v3/orders{nextCursor}
		 * @param {string} nextCursor Used for pagination when there are more than 200 orders to retrieve. The nextCursor value of the returned response includes a link to another GET call to retrieve the next page. Copy the link and paste it in the next call.
		 * @return {void} 
		 */
		GetAllOrdersNext(nextCursor: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/orders' + (nextCursor == null ? '' : encodeURIComponent(nextCursor)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum GetAllOrdersContent_Type { 'application/xml' = 0, 'application/json' = 1 }

	export enum GetAllOrdersAccept { 'application/xml' = 0, 'application/json' = 1 }

	export enum GetAllOrdersWM_CONSUMER_CHANNEL_TYPE { SWAGGER_CHANNEL_TYPE = 0 }

	export enum GetReleasedOrdersContent_Type { 'application/xml' = 0, 'application/json' = 1 }

	export enum GetReleasedOrdersAccept { 'application/xml' = 0, 'application/json' = 1 }

	export enum GetNextCursorReleasedOrdersContent_Type { 'application/xml' = 0, 'application/json' = 1 }

	export enum GetNextCursorReleasedOrdersAccept { 'application/xml' = 0, 'application/json' = 1 }

	export enum GetOrderByPurchaseOrderIdContent_Type { 'application/xml' = 0, 'application/json' = 1 }

	export enum GetOrderByPurchaseOrderIdAccept { 'application/xml' = 0, 'application/json' = 1 }

	export enum AcknowledgeOrdersContent_Type { 'application/xml' = 0, 'application/json' = 1 }

	export enum AcknowledgeOrdersAccept { 'application/xml' = 0, 'application/json' = 1 }

	export enum CancelOrderContent_Type { 'application/xml' = 0, 'application/json' = 1 }

	export enum CancelOrderAccept { 'application/xml' = 0, 'application/json' = 1 }

	export enum RefundOrderContent_Type { 'application/xml' = 0, 'application/json' = 1 }

	export enum RefundOrderAccept { 'application/xml' = 0, 'application/json' = 1 }

	export enum ShippingOrderContent_Type { 'application/xml' = 0, 'application/json' = 1 }

	export enum ShippingOrderAccept { 'application/xml' = 0, 'application/json' = 1 }

	export enum GetAllOrdersNextContent_Type { 'application/xml' = 0, 'application/json' = 1 }

	export enum GetAllOrdersNextAccept { 'application/xml' = 0, 'application/json' = 1 }

}

