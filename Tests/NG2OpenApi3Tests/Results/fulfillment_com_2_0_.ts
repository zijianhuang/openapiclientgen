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
		 * List Order Accounting
		 * Retrieves accounting activity during the queried timespan.
		 * Get accounting
		 * @param {string} fromDate Orders invoice date. Date-time in ISO 8601 format for selecting orders after, or at, the specified time
		 * @param {string} toDate Orders invoice date. Date-time in ISO 8601 format for selecting orders before, or at, the specified time
		 * @param {number} page A multiplier of the number of items (limit parameter) to skip before returning results
		 *     Minimum: 1
		 * @param {number} limit The numbers of items to return
		 *     Minimum: 1    Maximum: 200
		 * @param {Array<number>} warehouseIds A CSV of warehouse id, '123' or '1,2,3'
		 * @param {Array<number>} orderIds A CSV of FDC order id, '123' or '1,2,3'
		 * @param {Array<string>} hydrate Adds additional information to the response, uses a CSV format for multiple values.
		 * @return {Get_accountingReturn} Accounting
		 */
		Get_accounting(fromDate: string, toDate: string, page: number | null | undefined, limit: number | null | undefined, warehouseIds: Array<number> | null | undefined, orderIds: Array<number> | null | undefined, hydrate: Array<string>): Observable<Get_accountingReturn> {
			return this.http.get<Get_accountingReturn>(this.baseUri + 'accounting?fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)) + '&page=' + page + '&limit=' + limit + '&' + warehouseIds?.map(z => `warehouseIds=${z}`).join('&') + '&' + orderIds?.map(z => `orderIds=${z}`).join('&') + '&' + hydrate.map(z => `hydrate=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * List of Item Inventories
		 * Retrieve inventory for one or more items. This API requires elevated permissions, please speak to your success manager.
		 * Get inventory
		 * @param {number} page A multiplier of the number of items (limit parameter) to skip before returning results
		 *     Minimum: 1
		 * @param {number} limit The numbers of items to return
		 *     Minimum: 1    Maximum: 200
		 * @param {Array<number>} merchantIds A CSV of merchant id, '123' or '1,2,3'
		 * @param {Array<number>} warehouseIds A CSV of warehouse id, '123' or '1,2,3'
		 * @param {Array<string>} externalSkuNames A CSV of sku reference names, 'skuName1' or 'skuName1,skuName2,skuName3'
		 * @return {Get_inventoryReturn} Found Inventory
		 */
		Get_inventory(page: number | null | undefined, limit: number | null | undefined, merchantIds: Array<number> | null | undefined, warehouseIds: Array<number> | null | undefined, externalSkuNames: Array<string> | null | undefined): Observable<Get_inventoryReturn> {
			return this.http.get<Get_inventoryReturn>(this.baseUri + 'inventory?page=' + page + '&limit=' + limit + '&' + merchantIds?.map(z => `merchantIds=${z}`).join('&') + '&' + warehouseIds?.map(z => `warehouseIds=${z}`).join('&') + '&' + externalSkuNames?.map(z => `externalSkuNames=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Generate an Access Token
		 * By default tokens are valid for 7 days while refresh tokens are valid for 30 days. If your `grant_type` is "password" include the `username` and `password`, if however your `grant_type` is "refresh_token" the username/password are not required, instead set the `refresh_token`
		 * Post oauth/access_token
		 * @param {Post_oauth_access_tokenPostBody} requestBody Get an access token
		 * @return {Post_oauth_access_tokenReturn} Authorized
		 */
		Post_oauth_access_token(requestBody: Post_oauth_access_tokenPostBody): Observable<Post_oauth_access_tokenReturn> {
			return this.http.post<Post_oauth_access_tokenReturn>(this.baseUri + 'oauth/access_token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List of Orders
		 * Retrieve many orders at once
		 * Get orders
		 * @param {string} fromDate Date-time in ISO 8601 format for selecting orders after, or at, the specified time
		 * @param {string} toDate Date-time in ISO 8601 format for selecting orders before, or at, the specified time
		 * @param {Array<number>} merchantIds A CSV of merchant id, '123' or '1,2,3'
		 * @param {Array<number>} warehouseIds A CSV of warehouse id, '123' or '1,2,3'
		 * @param {number} page A multiplier of the number of items (limit parameter) to skip before returning results
		 *     Minimum: 1
		 * @param {number} limit The numbers of items to return
		 *     Minimum: 1    Maximum: 200
		 * @param {Array<string>} hydrate Adds additional information to the response, uses a CSV format for multiple values.'
		 * @return {any} OK
		 */
		Get_orders(fromDate: string, toDate: string, merchantIds: Array<number> | null | undefined, warehouseIds: Array<number> | null | undefined, page: number | null | undefined, limit: number | null | undefined, hydrate: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'orders?fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)) + '&' + merchantIds?.map(z => `merchantIds=${z}`).join('&') + '&' + warehouseIds?.map(z => `warehouseIds=${z}`).join('&') + '&page=' + page + '&limit=' + limit + '&' + hydrate?.map(z => `hydrate=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * New Order
		 * Error Notes&#58;
		 * * When `409 Conflict` is a 'Duplicate Order' the `context` will include the FDC `id`, see samples.
		 * Post orders
		 * @param {Post_ordersPostBody} requestBody The order to create
		 * @return {void} 
		 */
		Post_orders(requestBody: Post_ordersPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'orders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel an Order
		 * Request an order is canceled to prevent shipment.
		 * Delete orders/{id}
		 * @param {number} id ID of order that needs to be canceled
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Your order was successfully canceled
		 */
		Delete_orders_id(id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'orders/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Order Details
		 * For the fastest results use the FDC provided `id` however you can use your `merchantOrderId` as the `id`.
		 * Get orders/{id}
		 * @param {string} id The FDC order Id
		 * @param {number} merchantId Providing your `merchantId` indicates the `id` is your `merchantOrderId`. Although it is not necessary to provide this it will speed up your results when using your `merchantOrderId` however it will slow your results when using the FDC provided `id`
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} hydrate Adds additional information to the response, uses a CSV format for multiple values.'
		 * @return {void} Order Found
		 */
		GetOrder(id: string, merchantId: number | null | undefined, hydrate: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'orders/' + (id == null ? '' : encodeURIComponent(id)) + '&merchantId=' + merchantId + '&' + hydrate?.map(z => `hydrate=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Ship an Order
		 * Note, this API is used to update orders and is reserved for our shipping partners.
		 * Put orders/{id}/ship
		 * @param {number} id The FDC order Id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Put_orders_id_shipPutBody} requestBody Shipping Details
		 * @return {void} Order Found
		 */
		Put_orders_id_ship(id: number, requestBody: Put_orders_id_shipPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'orders/' + id + '/ship', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Order Status
		 * Note, this API is used to update orders and is reserved for our shipping partners.
		 * Put orders/{id}/status
		 * @param {number} id The FDC order Id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Put_orders_id_statusPutBody} requestBody New status event
		 * @return {void} Order Found
		 */
		Put_orders_id_status(id: number, requestBody: Put_orders_id_statusPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'orders/' + id + '/status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Returns
		 * Retrieves summary return activity during the queried timespan. Although return knowledge can be learned from `GET /orders/{id}` it can take an unknown amount of time for an order that is refused or undeliverable to return to an FDC facility. Instead we recommend regularly querying this API.
		 * Get returns
		 * @param {string} fromDate Date-time in ISO 8601 format for selecting orders after, or at, the specified time
		 * @param {string} toDate Date-time in ISO 8601 format for selecting orders before, or at, the specified time
		 * @param {number} page A multiplier of the number of items (limit parameter) to skip before returning results
		 *     Minimum: 1
		 * @param {number} limit The numbers of items to return
		 *     Minimum: 1    Maximum: 200
		 * @return {Get_returnsReturn} Returns
		 */
		Get_returns(fromDate: string, toDate: string, page: number | null | undefined, limit: number | null | undefined): Observable<Get_returnsReturn> {
			return this.http.get<Get_returnsReturn>(this.baseUri + 'returns?fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)) + '&page=' + page + '&limit=' + limit, {});
		}

		/**
		 * Inform us of an RMA
		 * Inform FDC of an expected return.
		 * Put returns
		 * @param {string} requestBody RMA
		 * @return {void} 
		 */
		Put_returns(requestBody: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'returns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tracking
		 * Get uniformed tracking events for any package, this response is carrier independent. Please note, an API Key is required for throttling purposes, please contact your success manager for details.
		 * Get track
		 * @return {string} OK
		 */
		Get_track(trackingNumber: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'track?trackingNumber=' + (trackingNumber == null ? '' : encodeURIComponent(trackingNumber)), { responseType: 'text' });
		}

		/**
		 * About Me
		 * Returns the user profile of the access token's owner. This could be useful if managing multiple accounts or confirming validity of a token.
		 * Get users/me
		 * @return {Get_users_meReturn} User
		 */
		Get_users_me(): Observable<Get_users_meReturn> {
			return this.http.get<Get_users_meReturn>(this.baseUri + 'users/me', {});
		}
	}

	export interface Get_accountingReturn {
		Get_accountingReturnData?: Array<Get_accountingReturnData>;
		meta?: Get_accountingReturnMeta;
	}
	export interface Get_accountingReturnFormProperties {
	}
	export function CreateGet_accountingReturnFormGroup() {
		return new FormGroup<Get_accountingReturnFormProperties>({
		});

	}

	export interface Get_accountingReturnData {
		fees?: Get_accountingReturnDataFees;

		/**
		 * Total number of items accounted for
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemCount?: number | null;
		Get_accountingReturnDataItems?: Array<Get_accountingReturnDataItems>;
		merchant?: Get_accountingReturnDataMerchant;
		order?: Get_accountingReturnDataOrder;
		warehouse?: Get_accountingReturnDataWarehouse;
	}
	export interface Get_accountingReturnDataFormProperties {

		/**
		 * Total number of items accounted for
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemCount: FormControl<number | null | undefined>,
	}
	export function CreateGet_accountingReturnDataFormGroup() {
		return new FormGroup<Get_accountingReturnDataFormProperties>({
			itemCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get_accountingReturnDataFees {

		/** Type: float */
		box?: number | null;

		/** Type: float */
		envelope?: number | null;

		/** Type: float */
		fulfillment?: number | null;

		/** Type: float */
		insert?: number | null;

		/** Type: float */
		kitting?: number | null;

		/** Type: float */
		picking?: number | null;

		/** Type: float */
		postage?: number | null;

		/** Type: float */
		print?: number | null;

		/** Type: float */
		total?: number | null;
	}
	export interface Get_accountingReturnDataFeesFormProperties {

		/** Type: float */
		box: FormControl<number | null | undefined>,

		/** Type: float */
		envelope: FormControl<number | null | undefined>,

		/** Type: float */
		fulfillment: FormControl<number | null | undefined>,

		/** Type: float */
		insert: FormControl<number | null | undefined>,

		/** Type: float */
		kitting: FormControl<number | null | undefined>,

		/** Type: float */
		picking: FormControl<number | null | undefined>,

		/** Type: float */
		postage: FormControl<number | null | undefined>,

		/** Type: float */
		print: FormControl<number | null | undefined>,

		/** Type: float */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGet_accountingReturnDataFeesFormGroup() {
		return new FormGroup<Get_accountingReturnDataFeesFormProperties>({
			box: new FormControl<number | null | undefined>(undefined),
			envelope: new FormControl<number | null | undefined>(undefined),
			fulfillment: new FormControl<number | null | undefined>(undefined),
			insert: new FormControl<number | null | undefined>(undefined),
			kitting: new FormControl<number | null | undefined>(undefined),
			picking: new FormControl<number | null | undefined>(undefined),
			postage: new FormControl<number | null | undefined>(undefined),
			print: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get_accountingReturnDataItems {

		/** Minimum: 1 */
		id?: number | null;
		name?: string | null;

		/** Minimum: 1 */
		quantity?: number | null;
		wmsItemId?: string | null;
	}
	export interface Get_accountingReturnDataItemsFormProperties {

		/** Minimum: 1 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		quantity: FormControl<number | null | undefined>,
		wmsItemId: FormControl<string | null | undefined>,
	}
	export function CreateGet_accountingReturnDataItemsFormGroup() {
		return new FormGroup<Get_accountingReturnDataItemsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			name: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			wmsItemId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Get_accountingReturnDataMerchant {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Name of the merchant */
		name?: string | null;
	}
	export interface Get_accountingReturnDataMerchantFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Name of the merchant */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGet_accountingReturnDataMerchantFormGroup() {
		return new FormGroup<Get_accountingReturnDataMerchantFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Get_accountingReturnDataOrder {

		/**
		 * FDC order id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/**
		 * Date of the order when it was recorded by accounting.
		 * Type: DateOnly
		 */
		invoiceDate?: Date | null;

		/**
		 * Merchant order id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		merchantOrderId?: number | null;

		/**
		 * Date of the order when it was initially received.
		 * Type: DateOnly
		 */
		recordedDate?: Date | null;
	}
	export interface Get_accountingReturnDataOrderFormProperties {

		/**
		 * FDC order id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Date of the order when it was recorded by accounting.
		 * Type: DateOnly
		 */
		invoiceDate: FormControl<Date | null | undefined>,

		/**
		 * Merchant order id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		merchantOrderId: FormControl<number | null | undefined>,

		/**
		 * Date of the order when it was initially received.
		 * Type: DateOnly
		 */
		recordedDate: FormControl<Date | null | undefined>,
	}
	export function CreateGet_accountingReturnDataOrderFormGroup() {
		return new FormGroup<Get_accountingReturnDataOrderFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			invoiceDate: new FormControl<Date | null | undefined>(undefined),
			merchantOrderId: new FormControl<number | null | undefined>(undefined),
			recordedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Get_accountingReturnDataWarehouse {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Name of the merchant */
		shortName?: string | null;
	}
	export interface Get_accountingReturnDataWarehouseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Name of the merchant */
		shortName: FormControl<string | null | undefined>,
	}
	export function CreateGet_accountingReturnDataWarehouseFormGroup() {
		return new FormGroup<Get_accountingReturnDataWarehouseFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			shortName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Get_accountingReturnMeta {
		pagination?: Get_accountingReturnMetaPagination;
	}
	export interface Get_accountingReturnMetaFormProperties {
	}
	export function CreateGet_accountingReturnMetaFormGroup() {
		return new FormGroup<Get_accountingReturnMetaFormProperties>({
		});

	}

	export interface Get_accountingReturnMetaPagination {

		/**
		 * Count of records returned in response, this will be equal to or less then the limit parameter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/**
		 * Current page of the response, this will match the page parameter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentPage?: number | null;

		/**
		 * Total number of records available to request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;

		/**
		 * Total number of pages available to request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages?: number | null;
	}
	export interface Get_accountingReturnMetaPaginationFormProperties {

		/**
		 * Count of records returned in response, this will be equal to or less then the limit parameter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Current page of the response, this will match the page parameter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentPage: FormControl<number | null | undefined>,

		/**
		 * Total number of records available to request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Total number of pages available to request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreateGet_accountingReturnMetaPaginationFormGroup() {
		return new FormGroup<Get_accountingReturnMetaPaginationFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			currentPage: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get_inventoryReturn {
		Get_inventoryReturnData?: Array<Get_inventoryReturnData>;
		meta?: Get_inventoryReturnMeta;
	}
	export interface Get_inventoryReturnFormProperties {
	}
	export function CreateGet_inventoryReturnFormGroup() {
		return new FormGroup<Get_inventoryReturnFormProperties>({
		});

	}

	export interface Get_inventoryReturnData {

		/** Item this inventory data is based on */
		item?: Get_inventoryReturnDataItem;

		/** Merchant that owns this item */
		merchant?: Get_inventoryReturnDataMerchant;
		quantity?: Get_inventoryReturnDataQuantity;
	}
	export interface Get_inventoryReturnDataFormProperties {
	}
	export function CreateGet_inventoryReturnDataFormGroup() {
		return new FormGroup<Get_inventoryReturnDataFormProperties>({
		});

	}

	export interface Get_inventoryReturnDataItem {

		/**
		 * FDC ID for this Item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Sku reference name for this item */
		skuReference?: string | null;
	}
	export interface Get_inventoryReturnDataItemFormProperties {

		/**
		 * FDC ID for this Item
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Sku reference name for this item */
		skuReference: FormControl<string | null | undefined>,
	}
	export function CreateGet_inventoryReturnDataItemFormGroup() {
		return new FormGroup<Get_inventoryReturnDataItemFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			skuReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Get_inventoryReturnDataMerchant {

		/** Merchants name for this item */
		name?: string | null;
	}
	export interface Get_inventoryReturnDataMerchantFormProperties {

		/** Merchants name for this item */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGet_inventoryReturnDataMerchantFormGroup() {
		return new FormGroup<Get_inventoryReturnDataMerchantFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Get_inventoryReturnDataQuantity {
		total?: Get_inventoryReturnDataQuantityTotal;
	}
	export interface Get_inventoryReturnDataQuantityFormProperties {
	}
	export function CreateGet_inventoryReturnDataQuantityFormGroup() {
		return new FormGroup<Get_inventoryReturnDataQuantityFormProperties>({
		});

	}

	export interface Get_inventoryReturnDataQuantityTotal {

		/**
		 * Number of items that are available to be used in an order
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableToPromise?: number | null;
	}
	export interface Get_inventoryReturnDataQuantityTotalFormProperties {

		/**
		 * Number of items that are available to be used in an order
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableToPromise: FormControl<number | null | undefined>,
	}
	export function CreateGet_inventoryReturnDataQuantityTotalFormGroup() {
		return new FormGroup<Get_inventoryReturnDataQuantityTotalFormProperties>({
			availableToPromise: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get_inventoryReturnMeta {
		pagination?: Get_inventoryReturnMetaPagination;
	}
	export interface Get_inventoryReturnMetaFormProperties {
	}
	export function CreateGet_inventoryReturnMetaFormGroup() {
		return new FormGroup<Get_inventoryReturnMetaFormProperties>({
		});

	}

	export interface Get_inventoryReturnMetaPagination {

		/**
		 * Count of records returned in response, this will be equal to or less then the limit parameter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/**
		 * Current page of the response, this will match the page parameter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentPage?: number | null;

		/**
		 * Total number of records available to request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;

		/**
		 * Total number of pages available to request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages?: number | null;
	}
	export interface Get_inventoryReturnMetaPaginationFormProperties {

		/**
		 * Count of records returned in response, this will be equal to or less then the limit parameter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Current page of the response, this will match the page parameter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentPage: FormControl<number | null | undefined>,

		/**
		 * Total number of records available to request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Total number of pages available to request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreateGet_inventoryReturnMetaPaginationFormGroup() {
		return new FormGroup<Get_inventoryReturnMetaPaginationFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			currentPage: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Post_oauth_access_tokenPostBody {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface Post_oauth_access_tokenPostBodyFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function CreatePost_oauth_access_tokenPostBodyFormGroup() {
		return new FormGroup<Post_oauth_access_tokenPostBodyFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Post_oauth_access_tokenReturn {
		access_token?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires_in?: number | null;
		refresh_token?: string | null;
		token_type?: string | null;
	}
	export interface Post_oauth_access_tokenReturnFormProperties {
		access_token: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires_in: FormControl<number | null | undefined>,
		refresh_token: FormControl<string | null | undefined>,
		token_type: FormControl<string | null | undefined>,
	}
	export function CreatePost_oauth_access_tokenReturnFormGroup() {
		return new FormGroup<Post_oauth_access_tokenReturnFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<number | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
			token_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Post_ordersPostBody {

		/** Use of this property requires special permission and must be discussed with your account executive; values are restricted while custom values need to be accepted by your AE. */
		integrator?: Post_ordersPostBodyIntegrator | null;

		/** Required */
		Post_ordersPostBodyItems: Array<Post_ordersPostBodyItems>;

		/**
		 * Necessary if you have a multitenancy account, otherwise we will associate the order with your account
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		merchantId?: number | null;

		/**
		 * Unique ID provided by the merchant
		 * Required
		 */
		merchantOrderId: string;
		notes?: string | null;

		/** Required */
		recipient: Post_ordersPostBodyRecipient;

		/**
		 * Custom for you, it will be mapped to an actual method within the OMS UI
		 * Required
		 */
		shippingMethod: string;

		/** We automatically select a warehouse based on inventory availability, requested carrier and delivery schedule, and carrier cost. You may however override this process. Because this is not recommended please inform your AE prior to using so they may enable this feature. */
		warehouse?: Post_ordersPostBodyWarehouse;
	}
	export interface Post_ordersPostBodyFormProperties {

		/** Use of this property requires special permission and must be discussed with your account executive; values are restricted while custom values need to be accepted by your AE. */
		integrator: FormControl<Post_ordersPostBodyIntegrator | null | undefined>,

		/**
		 * Necessary if you have a multitenancy account, otherwise we will associate the order with your account
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		merchantId: FormControl<number | null | undefined>,

		/**
		 * Unique ID provided by the merchant
		 * Required
		 */
		merchantOrderId: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,

		/**
		 * Custom for you, it will be mapped to an actual method within the OMS UI
		 * Required
		 */
		shippingMethod: FormControl<string | null | undefined>,
	}
	export function CreatePost_ordersPostBodyFormGroup() {
		return new FormGroup<Post_ordersPostBodyFormProperties>({
			integrator: new FormControl<Post_ordersPostBodyIntegrator | null | undefined>(undefined),
			merchantId: new FormControl<number | null | undefined>(undefined),
			merchantOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notes: new FormControl<string | null | undefined>(undefined),
			shippingMethod: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Post_ordersPostBodyIntegrator { '1ShoppingCart' = '1ShoppingCart', '3dCart' = '3dCart', AdobeBC = 'AdobeBC', AmazonAU = 'AmazonAU', AmazonEU = 'AmazonEU', AmazonNA = 'AmazonNA', BigCommerce = 'BigCommerce', BrandBoom = 'BrandBoom', BrightPearl = 'BrightPearl', BuyGoods = 'BuyGoods', Celery = 'Celery', ChannelAdvisor = 'ChannelAdvisor', Clickbank = 'Clickbank', CommerceHub = 'CommerceHub', Custom = 'Custom', Demandware = 'Demandware', Ebay = 'Ebay', Ecwid = 'Ecwid', Etsy = 'Etsy', FoxyCart = 'FoxyCart', Goodsie = 'Goodsie', Infusionsoft = 'Infusionsoft', Konnektive = 'Konnektive', LimeLight = 'LimeLight', Linio = 'Linio', Linnworks = 'Linnworks', Magento = 'Magento', Netsuite = 'Netsuite', NewEgg = 'NewEgg', Nexternal = 'Nexternal', NuOrder = 'NuOrder', Opencart = 'Opencart', OrderWave = 'OrderWave', osCommerce1 = 'osCommerce1', Overstock = 'Overstock', PayPal = 'PayPal', PrestaShop = 'PrestaShop', Pricefalls = 'Pricefalls', Quickbooks = 'Quickbooks', Rakuten = 'Rakuten', Sears = 'Sears', Sellbrite = 'Sellbrite', SellerCloud = 'SellerCloud', Shipstation = 'Shipstation', Shopify = 'Shopify', Skubana = 'Skubana', SolidCommerce = 'SolidCommerce', SparkPay = 'SparkPay', SpreeCommerce = 'SpreeCommerce', spsCommerce = 'spsCommerce', StitchLabs = 'StitchLabs', StoneEdge = 'StoneEdge', TradeGecko = 'TradeGecko', UltraCart = 'UltraCart', Volusion = 'Volusion', VTEX = 'VTEX', Walmart = 'Walmart', WooCommerce = 'WooCommerce', Yahoo = 'Yahoo' }

	export interface Post_ordersPostBodyItems {

		/**
		 * Using USD, a per unit value of a single SKU. If your declaring a kit this is the sum total for a single kit. In both scenarios we will multiply the `declaredValue` against the `quantity` for customs declaration.
		 * Required
		 */
		declaredValue: string;

		/**
		 * Required
		 * Minimum: 1
		 */
		quantity: number;

		/** Required */
		sku: string;
	}
	export interface Post_ordersPostBodyItemsFormProperties {

		/**
		 * Using USD, a per unit value of a single SKU. If your declaring a kit this is the sum total for a single kit. In both scenarios we will multiply the `declaredValue` against the `quantity` for customs declaration.
		 * Required
		 */
		declaredValue: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		quantity: FormControl<number | null | undefined>,

		/** Required */
		sku: FormControl<string | null | undefined>,
	}
	export function CreatePost_ordersPostBodyItemsFormGroup() {
		return new FormGroup<Post_ordersPostBodyItemsFormProperties>({
			declaredValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9.]+$')]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			sku: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Post_ordersPostBodyRecipient {

		/**
		 * Address Line 1
		 * Required
		 */
		address1: string;

		/** Address Line 2 */
		address2?: string | null;

		/**
		 * City
		 * Required
		 */
		addressLocality: string;

		/**
		 * Province / State
		 * Required
		 */
		addressRegion: string;
		companyName?: string | null;

		/**
		 * Country, for best results please provide the two character ISO code
		 * Required
		 */
		country: string;

		/**
		 * Email, required for international shipments
		 * Required
		 */
		email: string;

		/** Required */
		firstName: string;

		/** Required */
		lastName: string;

		/**
		 * Phone number, required for international shipments
		 * Required
		 */
		phone: string;

		/** Postal Code / Zip */
		postalCode?: string | null;
	}
	export interface Post_ordersPostBodyRecipientFormProperties {

		/**
		 * Address Line 1
		 * Required
		 */
		address1: FormControl<string | null | undefined>,

		/** Address Line 2 */
		address2: FormControl<string | null | undefined>,

		/**
		 * City
		 * Required
		 */
		addressLocality: FormControl<string | null | undefined>,

		/**
		 * Province / State
		 * Required
		 */
		addressRegion: FormControl<string | null | undefined>,
		companyName: FormControl<string | null | undefined>,

		/**
		 * Country, for best results please provide the two character ISO code
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Email, required for international shipments
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/** Required */
		firstName: FormControl<string | null | undefined>,

		/** Required */
		lastName: FormControl<string | null | undefined>,

		/**
		 * Phone number, required for international shipments
		 * Required
		 */
		phone: FormControl<string | null | undefined>,

		/** Postal Code / Zip */
		postalCode: FormControl<string | null | undefined>,
	}
	export function CreatePost_ordersPostBodyRecipientFormGroup() {
		return new FormGroup<Post_ordersPostBodyRecipientFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			address2: new FormControl<string | null | undefined>(undefined),
			addressLocality: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			addressRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			companyName: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Post_ordersPostBodyWarehouse {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
	}
	export interface Post_ordersPostBodyWarehouseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
	}
	export function CreatePost_ordersPostBodyWarehouseFormGroup() {
		return new FormGroup<Post_ordersPostBodyWarehouseFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Put_orders_id_shipPutBody {

		/**
		 * Tracking number of package
		 * Required
		 */
		trackingNumber: string;

		/**
		 * Override predicted weight of package
		 * Type: float
		 */
		weightOverride?: number | null;
	}
	export interface Put_orders_id_shipPutBodyFormProperties {

		/**
		 * Tracking number of package
		 * Required
		 */
		trackingNumber: FormControl<string | null | undefined>,

		/**
		 * Override predicted weight of package
		 * Type: float
		 */
		weightOverride: FormControl<number | null | undefined>,
	}
	export function CreatePut_orders_id_shipPutBodyFormGroup() {
		return new FormGroup<Put_orders_id_shipPutBodyFormProperties>({
			trackingNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weightOverride: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Put_orders_id_statusPutBody {

		/**
		 * Human-readable description
		 * Required
		 */
		reason: string;

		/** Required */
		status: Put_orders_id_statusPutBodyStatus;
	}
	export interface Put_orders_id_statusPutBodyFormProperties {

		/**
		 * Human-readable description
		 * Required
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreatePut_orders_id_statusPutBodyFormGroup() {
		return new FormGroup<Put_orders_id_statusPutBodyFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Put_orders_id_statusPutBodyStatus {

		/** Required */
		code: string;
	}
	export interface Put_orders_id_statusPutBodyStatusFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,
	}
	export function CreatePut_orders_id_statusPutBodyStatusFormGroup() {
		return new FormGroup<Put_orders_id_statusPutBodyStatusFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{6}$')]),
		});

	}

	export interface Get_returnsReturn {
		data?: Array<string>;
		meta?: Get_returnsReturnMeta;
	}
	export interface Get_returnsReturnFormProperties {
	}
	export function CreateGet_returnsReturnFormGroup() {
		return new FormGroup<Get_returnsReturnFormProperties>({
		});

	}

	export interface Get_returnsReturnMeta {
		pagination?: Get_returnsReturnMetaPagination;
	}
	export interface Get_returnsReturnMetaFormProperties {
	}
	export function CreateGet_returnsReturnMetaFormGroup() {
		return new FormGroup<Get_returnsReturnMetaFormProperties>({
		});

	}

	export interface Get_returnsReturnMetaPagination {

		/**
		 * Count of records returned in response, this will be equal to or less then the limit parameter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/**
		 * Current page of the response, this will match the page parameter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentPage?: number | null;

		/**
		 * Total number of records available to request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;

		/**
		 * Total number of pages available to request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages?: number | null;
	}
	export interface Get_returnsReturnMetaPaginationFormProperties {

		/**
		 * Count of records returned in response, this will be equal to or less then the limit parameter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Current page of the response, this will match the page parameter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentPage: FormControl<number | null | undefined>,

		/**
		 * Total number of records available to request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Total number of pages available to request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreateGet_returnsReturnMetaPaginationFormGroup() {
		return new FormGroup<Get_returnsReturnMetaPaginationFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			currentPage: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get_users_meReturn {

		/** Depricated */
		apiKey?: string | null;
		contactInfo?: string | null;
		createDate?: Date | null;
		deptLeader?: boolean | null;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;
		merchant?: Get_users_meReturnMerchant;
		name?: string | null;
		status?: boolean | null;
		updatedAt?: Date | null;
		updatedBy?: Date | null;
		username?: string | null;
	}
	export interface Get_users_meReturnFormProperties {

		/** Depricated */
		apiKey: FormControl<string | null | undefined>,
		contactInfo: FormControl<string | null | undefined>,
		createDate: FormControl<Date | null | undefined>,
		deptLeader: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<boolean | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		updatedBy: FormControl<Date | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateGet_users_meReturnFormGroup() {
		return new FormGroup<Get_users_meReturnFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined),
			contactInfo: new FormControl<string | null | undefined>(undefined),
			createDate: new FormControl<Date | null | undefined>(undefined),
			deptLeader: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<boolean | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			updatedBy: new FormControl<Date | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Get_users_meReturnMerchant {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
	}
	export interface Get_users_meReturnMerchantFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateGet_users_meReturnMerchantFormGroup() {
		return new FormGroup<Get_users_meReturnMerchantFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

}

