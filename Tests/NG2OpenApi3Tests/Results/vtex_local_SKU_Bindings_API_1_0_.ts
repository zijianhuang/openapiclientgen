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
		 * Get SKU Bindings by SKU ID
		 * Retrieves SKU Bindings details by SKU ID.
		 * ## Response body example
		 * ```json
		 * [
		 * {
		 * "Id": 48,
		 * "SellerId": "cosmetics1",
		 * "StockKeepingUnitId": 1,
		 * "SellerSkuId": "42",
		 * "IsActive": true,
		 * "LastUpdateDate": "2020-10-21T19:13:00.657",
		 * "SalesPolicy": 0
		 * }
		 * ]
		 * ```
		 * Get catalog/pvt/skusellers/{skuId}
		 * @param {string} skuId SKU's unique identifier in the marketplace.
		 * @return {Array<GetbySkuIdReturn>} OK
		 */
		GetbySkuId(skuId: string): Observable<Array<GetbySkuIdReturn>> {
			return this.http.get<Array<GetbySkuIdReturn>>(this.baseUri + 'catalog/pvt/skusellers/' + (skuId == null ? '' : encodeURIComponent(skuId)), {});
		}

		/**
		 * Activate SKU Binding
		 * Changes the status of an SKU Binding to active, setting `isActive` to `true`.
		 * > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/activate/{sellerId}/{skuSellerId}`.
		 * Post sku-binding/pvt/skuseller/activate/{sellerId}/{skuSellerId}
		 * @param {string} sellerId ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
		 * @param {string} skuSellerId SKU ID in the seller's store.
		 * @return {void} OK
		 */
		ActivateSKUBinding(sellerId: string, skuSellerId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sku-binding/pvt/skuseller/activate/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '/' + (skuSellerId == null ? '' : encodeURIComponent(skuSellerId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get SKU Bindings information
		 * Retrieves SKU Bindings administrative information using optional query params `sellerId`, `skuId`, `sellerSkuId` and `IsActive` to filter results and `size` to restrict the amount of results.
		 * > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/admin`.
		 * ## Response body example
		 * ```json
		 * [
		 * {
		 * "IsPersisted": true,
		 * "IsRemoved": false,
		 * "SkuSellerId": 1,
		 * "UpdateDate": "2019-12-04T01:56:00.673Z",
		 * "RequestedUpdateDate": null,
		 * "SellerStockKeepingUnitId": "12",
		 * "SellerId": "cosmetics1",
		 * "StockKeepingUnitId": 25,
		 * "IsActive": true
		 * }
		 * ]
		 * ```
		 * Get sku-binding/pvt/skuseller/admin
		 * @param {string} sellerId ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
		 * @param {string} skuId SKU's unique identifier in the marketplace.
		 * @param {string} sellerSkuId SKU ID in the seller's store.
		 * @param {boolean} isActive Defines if the SKU binding is active.
		 * @param {string} size Amount of results.
		 * @return {GetpagedadminReturn} OK
		 */
		Getpagedadmin(sellerId: string | null | undefined, skuId: string | null | undefined, sellerSkuId: string | null | undefined, isActive: boolean | null | undefined, size: string | null | undefined): Observable<GetpagedadminReturn> {
			return this.http.get<GetpagedadminReturn>(this.baseUri + 'sku-binding/pvt/skuseller/admin?sellerId=' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '&skuId=' + (skuId == null ? '' : encodeURIComponent(skuId)) + '&sellerSkuId=' + (sellerSkuId == null ? '' : encodeURIComponent(sellerSkuId)) + '&isActive=' + isActive + '&size=' + (size == null ? '' : encodeURIComponent(size)), {});
		}

		/**
		 * Change Notification with Seller ID and Seller SKU ID
		 * The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.
		 * With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.
		 * There are two information expected by the marketplace in this request: the `sellerId`, which identifies the seller, and the `sellerSkuId`, which identifies the binding of the seller with the SKU.
		 * Both information are passed through the request URL. The body of the request should be empty.
		 * > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/changenotification/{sellerId}/{sellerSkuId}`.
		 * ## Example
		 * Let's say your seller has the ID `123` in the marketplace and you want to inform the marketplace that has been a change in the SKU with ID `700`.
		 * In this case, you would have to replace the `sellerId` parameter with the value `123` and the `skuId` parameter with the value `700`. The URL of the request would be the following.
		 * ```
		 * https://{{accountName}}.vtexcommercestable.com.br/api/sku-binding/pvt/skuseller/changenotification/123/700
		 * ```
		 * ## Response codes
		 * The following response codes are possible for this request.
		 * * 200: the SKU whose ID was informed in the URL already exists in the marketplace and was found. The marketplace can now proceed with a fulfillment simulation in order to get updated information about this SKU's inventory and price.
		 * * 403: Failure in the authentication.
		 * * 404: the SKU was not found in the marketplace. The body of the response, in this case, should follow this format: "Seller StockKeepingUnit `{{skuId}}` not found for this seller id `{{sellerId}}`. This means that the seller can now proceed with sending an offer to the marketplace in order to suggest that this SKU is sold there.
		 * * 429: Failure due to too many requests.
		 * Post sku-binding/pvt/skuseller/changenotification/{sellerId}/{sellerSkuId}
		 * @param {string} sellerId ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
		 * @param {string} sellerSkuId ID of the binding of the seller with the SKU.
		 * @return {void} OK
		 */
		SKU_BindingsPostBySellerIdAndSellerSkuId(sellerId: string, sellerSkuId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sku-binding/pvt/skuseller/changenotification/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '/' + (sellerSkuId == null ? '' : encodeURIComponent(sellerSkuId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Change Notification with SKU ID
		 * The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.
		 * With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.
		 * The body of the request should be empty.
		 * > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/changenotification/{skuId}`.
		 * Post sku-binding/pvt/skuseller/changenotification/{skuId}
		 * @param {string} skuId A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use to look for the SKU whose change the seller wants to inform. If the marketplace finds this ID, it responds with status code `200`. Otherwise, it responds with status code `404`.
		 * @return {void} OK
		 */
		ChangeNotification(skuId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sku-binding/pvt/skuseller/changenotification/' + (skuId == null ? '' : encodeURIComponent(skuId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deactivate SKU Binding
		 * Changes the status of an SKU Binding to inactive, setting `isActive` to `false`.
		 * > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/inactivate/{sellerId}/{skuSellerId}`.
		 * Post sku-binding/pvt/skuseller/inactivate/{sellerId}/{skuSellerId}
		 * @param {string} sellerId ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
		 * @param {string} skuSellerId SKU ID in the seller's store.
		 * @return {void} OK
		 */
		DeactivateSKUBinding(sellerId: string, skuSellerId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sku-binding/pvt/skuseller/inactivate/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '/' + (skuSellerId == null ? '' : encodeURIComponent(skuSellerId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Insert SKU Binding
		 * Creates an SKU Binding, associating a seller's SKU with a marketplace's SKU.
		 * > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/insertion`.
		 * Post sku-binding/pvt/skuseller/insertion
		 * @param {InsertSKUBindingPostBody} requestBody Request body
		 * @return {void} OK
		 */
		InsertSKUBinding(requestBody: InsertSKUBindingPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sku-binding/pvt/skuseller/insertion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all SKU Bindings by Seller ID
		 * Retrieves a list of SKU Bindings given a specific Seller ID.
		 * > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/list/bysellerId/{sellerId}`.
		 * ## Response body example
		 * ```json
		 * [
		 * {
		 * "SellerStockKeepingUnitId": "24",
		 * "FreightCommissionPercentage": null,
		 * "ProductCommissionPercentage": null,
		 * "SellerId": "vtxkfj7352",
		 * "StockKeepingUnitId": 121,
		 * "IsActive": true
		 * }
		 * ]
		 * ```
		 * Get sku-binding/pvt/skuseller/list/bysellerId/{sellerId}
		 * @param {string} sellerId ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
		 * @return {Array<GetallbySellerIdReturn>} OK
		 */
		GetallbySellerId(sellerId: string): Observable<Array<GetallbySellerIdReturn>> {
			return this.http.get<Array<GetallbySellerIdReturn>>(this.baseUri + 'sku-binding/pvt/skuseller/list/bysellerId/' + (sellerId == null ? '' : encodeURIComponent(sellerId)), {});
		}

		/**
		 * Get paged SKU Bindings by Seller ID
		 * Retrieves a paged list of SKU Bindings given a specific Seller ID.
		 * > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/paged/sellerid/{sellerId}`.
		 * ## Response body example
		 * ```json
		 * [
		 * {
		 * "SellerId": "vtxkfj7352",
		 * "StockKeepingUnitId": 121,
		 * "SellerStockKeepingUnitId": "24",
		 * "IsActive": true,
		 * "FreightCommissionPercentage": null,
		 * "ProductCommissionPercentage": null
		 * },
		 * {
		 * "SellerId": "vtxkfj7352",
		 * "StockKeepingUnitId": 14,
		 * "SellerStockKeepingUnitId": "60",
		 * "IsActive": true,
		 * "FreightCommissionPercentage": null,
		 * "ProductCommissionPercentage": null
		 * }
		 * ]
		 * ```
		 * Get sku-binding/pvt/skuseller/paged/sellerid/{sellerId}
		 * @param {string} page Page number.
		 * @param {string} size Amount of results per page.
		 * @param {string} sellerId ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
		 * @return {Array<GetpagedbySellerIdReturn>} OK
		 */
		GetpagedbySellerId(page: string, size: string, sellerId: string): Observable<Array<GetpagedbySellerIdReturn>> {
			return this.http.get<Array<GetpagedbySellerIdReturn>>(this.baseUri + 'sku-binding/pvt/skuseller/paged/sellerid/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '?page=' + (page == null ? '' : encodeURIComponent(page)) + '&size=' + (size == null ? '' : encodeURIComponent(size)), {});
		}

		/**
		 * Remove a seller's SKU Binding
		 * Remove a seller's SKU binding, given the Seller ID and the SKU ID in the seller's store.
		 * > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/remove/{sellerId}/{sellerSkuId}`.
		 * Post sku-binding/pvt/skuseller/remove/{sellerId}/{sellerSkuId}
		 * @param {string} sellerId ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
		 * @param {string} sellerSkuId SKU ID in the seller's store.
		 * @return {void} OK
		 */
		DeleteSKUsellerassociation(sellerId: string, sellerSkuId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sku-binding/pvt/skuseller/remove/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '/' + (sellerSkuId == null ? '' : encodeURIComponent(sellerSkuId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get details of a seller's SKU
		 * Retrieves the details of a seller's SKU given a seller ID and the SKU ID in the seller's store.
		 * > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`.
		 * ## Response body example
		 * ```json
		 * {
		 * "IsPersisted": true,
		 * "IsRemoved": false,
		 * "SkuSellerId": 102,
		 * "UpdateDate": "2021-04-12T20:06:59.413Z",
		 * "RequestedUpdateDate": null,
		 * "SellerStockKeepingUnitId": "71",
		 * "SellerId": "vtxkfj7352",
		 * "StockKeepingUnitId": 1,
		 * "IsActive": true
		 * }
		 * ```
		 * Get sku-binding/pvt/skuseller/{sellerId}/{sellerSkuId}
		 * @param {string} sellerId ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
		 * @param {string} sellerSkuId SKU ID in the seller's store.
		 * @return {GetSKUsellerReturn} OK
		 */
		GetSKUseller(sellerId: string, sellerSkuId: string): Observable<GetSKUsellerReturn> {
			return this.http.get<GetSKUsellerReturn>(this.baseUri + 'sku-binding/pvt/skuseller/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '/' + (sellerSkuId == null ? '' : encodeURIComponent(sellerSkuId)), {});
		}

		/**
		 * Bind a seller's SKU to another SKU
		 * Associates a seller's SKU to another marketplace SKU.
		 * > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`.
		 * ## Request body example
		 * ```json
		 * {
		 * "StockKeepingUnitId": 1
		 * }
		 * ```
		 * Put sku-binding/pvt/skuseller/{sellerId}/{sellerSkuId}
		 * @param {string} sellerId ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
		 * @param {string} sellerSkuId SKU ID in the seller's store.
		 * @param {BindtoanotherskuPutBody} requestBody Request body
		 * @return {void} 
		 */
		Bindtoanothersku(sellerId: string, sellerSkuId: string, requestBody: BindtoanotherskuPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sku-binding/pvt/skuseller/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '/' + (sellerSkuId == null ? '' : encodeURIComponent(sellerSkuId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface GetbySkuIdReturn {

		/**
		 * SKU Binding ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id?: number | null;

		/** Defines if the SKU binding is active. */
		IsActive?: boolean | null;

		/** Date when the SKU binding was updated for the last time, in UTC format. */
		LastUpdateDate?: string | null;

		/**
		 * Sales policy ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SalesPolicy?: number | null;

		/** ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
		SellerId?: string | null;

		/** SKU seller ID. */
		SellerSkuId?: string | null;

		/**
		 * SKU ID in the VTEX marketplace.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StockKeepingUnitId?: number | null;
	}
	export interface GetbySkuIdReturnFormProperties {

		/**
		 * SKU Binding ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Id: FormControl<number | null | undefined>,

		/** Defines if the SKU binding is active. */
		IsActive: FormControl<boolean | null | undefined>,

		/** Date when the SKU binding was updated for the last time, in UTC format. */
		LastUpdateDate: FormControl<string | null | undefined>,

		/**
		 * Sales policy ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SalesPolicy: FormControl<number | null | undefined>,

		/** ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
		SellerId: FormControl<string | null | undefined>,

		/** SKU seller ID. */
		SellerSkuId: FormControl<string | null | undefined>,

		/**
		 * SKU ID in the VTEX marketplace.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StockKeepingUnitId: FormControl<number | null | undefined>,
	}
	export function CreateGetbySkuIdReturnFormGroup() {
		return new FormGroup<GetbySkuIdReturnFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined),
			IsActive: new FormControl<boolean | null | undefined>(undefined),
			LastUpdateDate: new FormControl<string | null | undefined>(undefined),
			SalesPolicy: new FormControl<number | null | undefined>(undefined),
			SellerId: new FormControl<string | null | undefined>(undefined),
			SellerSkuId: new FormControl<string | null | undefined>(undefined),
			StockKeepingUnitId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetpagedadminReturn {

		/** Defines if the SKU binding is active. */
		IsActive?: boolean | null;

		/** Defines if the seller is persisted. */
		IsPersisted?: boolean | null;

		/** Defines if the seller is removed. */
		IsRemoved?: boolean | null;

		/** Date when an SKU binding update was requested for the last time, in UTC format. */
		RequestedUpdateDate?: string | null;

		/** ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
		SellerId?: string | null;

		/** SKU ID in the seller's store. */
		SellerStockKeepingUnitId?: string | null;

		/**
		 * SKU Binding ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SkuSellerId?: number | null;

		/**
		 * SKU ID in the VTEX marketplace.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StockKeepingUnitId?: number | null;

		/** Date when the SKU binding was updated for the last time, in UTC format. */
		UpdateDate?: string | null;
	}
	export interface GetpagedadminReturnFormProperties {

		/** Defines if the SKU binding is active. */
		IsActive: FormControl<boolean | null | undefined>,

		/** Defines if the seller is persisted. */
		IsPersisted: FormControl<boolean | null | undefined>,

		/** Defines if the seller is removed. */
		IsRemoved: FormControl<boolean | null | undefined>,

		/** Date when an SKU binding update was requested for the last time, in UTC format. */
		RequestedUpdateDate: FormControl<string | null | undefined>,

		/** ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
		SellerId: FormControl<string | null | undefined>,

		/** SKU ID in the seller's store. */
		SellerStockKeepingUnitId: FormControl<string | null | undefined>,

		/**
		 * SKU Binding ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SkuSellerId: FormControl<number | null | undefined>,

		/**
		 * SKU ID in the VTEX marketplace.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StockKeepingUnitId: FormControl<number | null | undefined>,

		/** Date when the SKU binding was updated for the last time, in UTC format. */
		UpdateDate: FormControl<string | null | undefined>,
	}
	export function CreateGetpagedadminReturnFormGroup() {
		return new FormGroup<GetpagedadminReturnFormProperties>({
			IsActive: new FormControl<boolean | null | undefined>(undefined),
			IsPersisted: new FormControl<boolean | null | undefined>(undefined),
			IsRemoved: new FormControl<boolean | null | undefined>(undefined),
			RequestedUpdateDate: new FormControl<string | null | undefined>(undefined),
			SellerId: new FormControl<string | null | undefined>(undefined),
			SellerStockKeepingUnitId: new FormControl<string | null | undefined>(undefined),
			SkuSellerId: new FormControl<number | null | undefined>(undefined),
			StockKeepingUnitId: new FormControl<number | null | undefined>(undefined),
			UpdateDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InsertSKUBindingPostBody {

		/**
		 * Defines if the SKU binding is active.
		 * Required
		 */
		IsActive: boolean;

		/**
		 * ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
		 * Required
		 */
		SellerId: string;

		/**
		 * SKU seller ID.
		 * Required
		 */
		SellerStockKeepingUnitId: string;

		/**
		 * SKU ID in the marketplace.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StockKeepingUnitId: number;
	}
	export interface InsertSKUBindingPostBodyFormProperties {

		/**
		 * Defines if the SKU binding is active.
		 * Required
		 */
		IsActive: FormControl<boolean | null | undefined>,

		/**
		 * ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
		 * Required
		 */
		SellerId: FormControl<string | null | undefined>,

		/**
		 * SKU seller ID.
		 * Required
		 */
		SellerStockKeepingUnitId: FormControl<string | null | undefined>,

		/**
		 * SKU ID in the marketplace.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StockKeepingUnitId: FormControl<number | null | undefined>,
	}
	export function CreateInsertSKUBindingPostBodyFormGroup() {
		return new FormGroup<InsertSKUBindingPostBodyFormProperties>({
			IsActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			SellerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SellerStockKeepingUnitId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StockKeepingUnitId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetallbySellerIdReturn {

		/**
		 * The percentage that must be filled in as agreed between the marketplace and the seller.
		 * Type: double
		 */
		FreightCommissionPercentage?: number | null;

		/** Defines if the SKU binding is active. */
		IsActive?: boolean | null;

		/**
		 * The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.
		 * Type: double
		 */
		ProductCommissionPercentage?: number | null;

		/** ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
		SellerId?: string | null;

		/** SKU ID in the seller's store. */
		SellerStockKeepingUnitId?: string | null;

		/**
		 * SKU ID in the marketplace.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StockKeepingUnitId?: number | null;
	}
	export interface GetallbySellerIdReturnFormProperties {

		/**
		 * The percentage that must be filled in as agreed between the marketplace and the seller.
		 * Type: double
		 */
		FreightCommissionPercentage: FormControl<number | null | undefined>,

		/** Defines if the SKU binding is active. */
		IsActive: FormControl<boolean | null | undefined>,

		/**
		 * The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.
		 * Type: double
		 */
		ProductCommissionPercentage: FormControl<number | null | undefined>,

		/** ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
		SellerId: FormControl<string | null | undefined>,

		/** SKU ID in the seller's store. */
		SellerStockKeepingUnitId: FormControl<string | null | undefined>,

		/**
		 * SKU ID in the marketplace.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StockKeepingUnitId: FormControl<number | null | undefined>,
	}
	export function CreateGetallbySellerIdReturnFormGroup() {
		return new FormGroup<GetallbySellerIdReturnFormProperties>({
			FreightCommissionPercentage: new FormControl<number | null | undefined>(undefined),
			IsActive: new FormControl<boolean | null | undefined>(undefined),
			ProductCommissionPercentage: new FormControl<number | null | undefined>(undefined),
			SellerId: new FormControl<string | null | undefined>(undefined),
			SellerStockKeepingUnitId: new FormControl<string | null | undefined>(undefined),
			StockKeepingUnitId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetpagedbySellerIdReturn {

		/**
		 * The percentage that must be filled in as agreed between the marketplace and the seller.
		 * Type: double
		 */
		FreightCommissionPercentage?: number | null;

		/** Defines if the SKU binding is active. */
		IsActive?: boolean | null;

		/**
		 * The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.
		 * Type: double
		 */
		ProductCommissionPercentage?: number | null;

		/** ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
		SellerId?: string | null;

		/** SKU ID in the seller's store. */
		SellerStockKeepingUnitId?: string | null;

		/**
		 * SKU ID in the marketplace.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StockKeepingUnitId?: number | null;
	}
	export interface GetpagedbySellerIdReturnFormProperties {

		/**
		 * The percentage that must be filled in as agreed between the marketplace and the seller.
		 * Type: double
		 */
		FreightCommissionPercentage: FormControl<number | null | undefined>,

		/** Defines if the SKU binding is active. */
		IsActive: FormControl<boolean | null | undefined>,

		/**
		 * The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.
		 * Type: double
		 */
		ProductCommissionPercentage: FormControl<number | null | undefined>,

		/** ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
		SellerId: FormControl<string | null | undefined>,

		/** SKU ID in the seller's store. */
		SellerStockKeepingUnitId: FormControl<string | null | undefined>,

		/**
		 * SKU ID in the marketplace.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StockKeepingUnitId: FormControl<number | null | undefined>,
	}
	export function CreateGetpagedbySellerIdReturnFormGroup() {
		return new FormGroup<GetpagedbySellerIdReturnFormProperties>({
			FreightCommissionPercentage: new FormControl<number | null | undefined>(undefined),
			IsActive: new FormControl<boolean | null | undefined>(undefined),
			ProductCommissionPercentage: new FormControl<number | null | undefined>(undefined),
			SellerId: new FormControl<string | null | undefined>(undefined),
			SellerStockKeepingUnitId: new FormControl<string | null | undefined>(undefined),
			StockKeepingUnitId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSKUsellerReturn {

		/**
		 * Defines if the SKU binding is active.
		 * Required
		 */
		IsActive: boolean;

		/**
		 * Defines if the seller is persisted.
		 * Required
		 */
		IsPersisted: boolean;

		/**
		 * Defines if the seller is removed.
		 * Required
		 */
		IsRemoved: boolean;

		/**
		 * Date when an SKU binding update was requested for the last time, in UTC format.
		 * Required
		 */
		RequestedUpdateDate: string;

		/**
		 * ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
		 * Required
		 */
		SellerId: string;

		/**
		 * SKU seller ID.
		 * Required
		 */
		SellerStockKeepingUnitId: string;

		/**
		 * SKU ID in the seller's store.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SkuSellerId: number;

		/**
		 * SKU ID in the VTEX marketplace.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StockKeepingUnitId: number;

		/**
		 * Date when the SKU binding was updated for the last time, in UTC format.
		 * Required
		 */
		UpdateDate: string;
	}
	export interface GetSKUsellerReturnFormProperties {

		/**
		 * Defines if the SKU binding is active.
		 * Required
		 */
		IsActive: FormControl<boolean | null | undefined>,

		/**
		 * Defines if the seller is persisted.
		 * Required
		 */
		IsPersisted: FormControl<boolean | null | undefined>,

		/**
		 * Defines if the seller is removed.
		 * Required
		 */
		IsRemoved: FormControl<boolean | null | undefined>,

		/**
		 * Date when an SKU binding update was requested for the last time, in UTC format.
		 * Required
		 */
		RequestedUpdateDate: FormControl<string | null | undefined>,

		/**
		 * ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
		 * Required
		 */
		SellerId: FormControl<string | null | undefined>,

		/**
		 * SKU seller ID.
		 * Required
		 */
		SellerStockKeepingUnitId: FormControl<string | null | undefined>,

		/**
		 * SKU ID in the seller's store.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SkuSellerId: FormControl<number | null | undefined>,

		/**
		 * SKU ID in the VTEX marketplace.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StockKeepingUnitId: FormControl<number | null | undefined>,

		/**
		 * Date when the SKU binding was updated for the last time, in UTC format.
		 * Required
		 */
		UpdateDate: FormControl<string | null | undefined>,
	}
	export function CreateGetSKUsellerReturnFormGroup() {
		return new FormGroup<GetSKUsellerReturnFormProperties>({
			IsActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			IsPersisted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			IsRemoved: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			RequestedUpdateDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SellerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SellerStockKeepingUnitId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SkuSellerId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StockKeepingUnitId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			UpdateDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BindtoanotherskuPutBody {

		/**
		 * SKU ID in the marketplace.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StockKeepingUnitId: number;
	}
	export interface BindtoanotherskuPutBodyFormProperties {

		/**
		 * SKU ID in the marketplace.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		StockKeepingUnitId: FormControl<number | null | undefined>,
	}
	export function CreateBindtoanotherskuPutBodyFormGroup() {
		return new FormGroup<BindtoanotherskuPutBodyFormProperties>({
			StockKeepingUnitId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

}

