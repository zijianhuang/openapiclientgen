import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ConfigExternalPriceSourceRequest {

		/** Defines if the external price source is active (`true`) or not (`false`). If not set, the default value will be `false`. */
		active?: boolean | null;

		/**
		 * Name of the app that communicates with the external pricing source
		 * Required
		 */
		appName: string;
	}
	export interface ConfigExternalPriceSourceRequestFormProperties {

		/** Defines if the external price source is active (`true`) or not (`false`). If not set, the default value will be `false`. */
		active: FormControl<boolean | null | undefined>,

		/**
		 * Name of the app that communicates with the external pricing source
		 * Required
		 */
		appName: FormControl<string | null | undefined>,
	}
	export function CreateConfigExternalPriceSourceRequestFormGroup() {
		return new FormGroup<ConfigExternalPriceSourceRequestFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			appName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPricesRequestObject {

		/** Campaign name, represented by the `utm_campaign` value in the URL that led to the order. If there is no value, use `null` */
		UtmCampaign?: string | null;

		/** Internal campaign name, represented by the `utmi_cp` value in the URL that led to the order. If there is no value, use `null` */
		UtmInternalCampaign?: string | null;

		/** Medium that indicates what type of traffic the customer originated from, represented by the `utm_medium` value in the URL that led to the order. If there is no value, use `null` */
		UtmMedium?: string | null;

		/** Traffic source, indicates where the traffic originated from according to the `utm_source` value in the URL that led to the order. If there is no value, use `null` */
		UtmSource?: string | null;

		/**
		 * The customer's email address. If there is no value, use an empty string
		 * Required
		 */
		email: string;

		/**
		 * The list of items that are to be priced by Pricing Hub
		 * Required
		 */
		GetPricesRequestObjectItems: Array<GetPricesRequestObjectItems>;

		/**
		 * Represents Checkout's sales channel
		 * Required
		 */
		salesChannel: string;
	}
	export interface GetPricesRequestObjectFormProperties {

		/** Campaign name, represented by the `utm_campaign` value in the URL that led to the order. If there is no value, use `null` */
		UtmCampaign: FormControl<string | null | undefined>,

		/** Internal campaign name, represented by the `utmi_cp` value in the URL that led to the order. If there is no value, use `null` */
		UtmInternalCampaign: FormControl<string | null | undefined>,

		/** Medium that indicates what type of traffic the customer originated from, represented by the `utm_medium` value in the URL that led to the order. If there is no value, use `null` */
		UtmMedium: FormControl<string | null | undefined>,

		/** Traffic source, indicates where the traffic originated from according to the `utm_source` value in the URL that led to the order. If there is no value, use `null` */
		UtmSource: FormControl<string | null | undefined>,

		/**
		 * The customer's email address. If there is no value, use an empty string
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Represents Checkout's sales channel
		 * Required
		 */
		salesChannel: FormControl<string | null | undefined>,
	}
	export function CreateGetPricesRequestObjectFormGroup() {
		return new FormGroup<GetPricesRequestObjectFormProperties>({
			UtmCampaign: new FormControl<string | null | undefined>(undefined),
			UtmInternalCampaign: new FormControl<string | null | undefined>(undefined),
			UtmMedium: new FormControl<string | null | undefined>(undefined),
			UtmSource: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			salesChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPricesRequestObjectItems {

		/**
		 * This is the brand ID for the item
		 * Required
		 */
		brandId: string;

		/**
		 * ID of the categories that will be used to compute the price
		 * Required
		 */
		categoriesIds: Array<string>;

		/**
		 * This is the index of the item at Checkout's cart. It has to be unique in the items array
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/**
		 * IDs of the price tables that will be used to compute the price. More than one price table might be passed to the array. The final price rule might be more complex than the lowest or the highest price
		 * Required
		 */
		priceTableIds: Array<string>;

		/**
		 * This is the amount of items that will be priced. It is possible to have a volume discount for many repeated items. Hence, the price may not be the quantity of the item multiplied by the unitary price
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;

		/**
		 * This is the seller ID for the item
		 * Required
		 */
		sellerId: string;

		/**
		 * This is the sku id of the item that will be priced
		 * Required
		 */
		skuId: string;
	}
	export interface GetPricesRequestObjectItemsFormProperties {

		/**
		 * This is the brand ID for the item
		 * Required
		 */
		brandId: FormControl<string | null | undefined>,

		/**
		 * This is the index of the item at Checkout's cart. It has to be unique in the items array
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: FormControl<number | null | undefined>,

		/**
		 * This is the amount of items that will be priced. It is possible to have a volume discount for many repeated items. Hence, the price may not be the quantity of the item multiplied by the unitary price
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/**
		 * This is the seller ID for the item
		 * Required
		 */
		sellerId: FormControl<string | null | undefined>,

		/**
		 * This is the sku id of the item that will be priced
		 * Required
		 */
		skuId: FormControl<string | null | undefined>,
	}
	export function CreateGetPricesRequestObjectItemsFormGroup() {
		return new FormGroup<GetPricesRequestObjectItemsFormProperties>({
			brandId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			index: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sellerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			skuId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Item1 {

		/**
		 * The cost price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency.
		 * Required
		 * Type: double
		 */
		costPrice: number;

		/**
		 * The same index referring to Checkout's cart that was passed to the API
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/**
		 * The list price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency
		 * Required
		 * Type: double
		 */
		listPrice: number;

		/**
		 * The price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency
		 * Required
		 * Type: double
		 */
		price: number;

		/**
		 * The price table that was used to price the item
		 * Required
		 */
		priceTable: string;

		/**
		 * The moment up until the price is valid. After that moment, it will be necessary to call the pricing API again. The format of the string is in RFC3339
		 * Required
		 */
		priceValidUntil: string;

		/**
		 * The same skuId that was passed to the API
		 * Required
		 */
		skuId: string;
	}
	export interface Item1FormProperties {

		/**
		 * The cost price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency.
		 * Required
		 * Type: double
		 */
		costPrice: FormControl<number | null | undefined>,

		/**
		 * The same index referring to Checkout's cart that was passed to the API
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: FormControl<number | null | undefined>,

		/**
		 * The list price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency
		 * Required
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * The price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency
		 * Required
		 * Type: double
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * The price table that was used to price the item
		 * Required
		 */
		priceTable: FormControl<string | null | undefined>,

		/**
		 * The moment up until the price is valid. After that moment, it will be necessary to call the pricing API again. The format of the string is in RFC3339
		 * Required
		 */
		priceValidUntil: FormControl<string | null | undefined>,

		/**
		 * The same skuId that was passed to the API
		 * Required
		 */
		skuId: FormControl<string | null | undefined>,
	}
	export function CreateItem1FormGroup() {
		return new FormGroup<Item1FormProperties>({
			costPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			index: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			priceTable: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priceValidUntil: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			skuId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Each item to be priced by Pricing Hub */
	export interface ItemsElement {

		/**
		 * This is the brand ID for the item
		 * Required
		 */
		brandId: string;

		/**
		 * ID of the categories that will be used to compute the price
		 * Required
		 */
		categoriesIds: Array<string>;

		/**
		 * This is the index of the item at Checkout's cart. It has to be unique in the items array
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/**
		 * IDs of the price tables that will be used to compute the price. More than one price table might be passed to the array. The final price rule might be more complex than the lowest or the highest price
		 * Required
		 */
		priceTableIds: Array<string>;

		/**
		 * This is the amount of items that will be priced. It is possible to have a volume discount for many repeated items. Hence, the price may not be the quantity of the item multiplied by the unitary price
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;

		/**
		 * This is the seller ID for the item
		 * Required
		 */
		sellerId: string;

		/**
		 * This is the sku id of the item that will be priced
		 * Required
		 */
		skuId: string;
	}

	/** Each item to be priced by Pricing Hub */
	export interface ItemsElementFormProperties {

		/**
		 * This is the brand ID for the item
		 * Required
		 */
		brandId: FormControl<string | null | undefined>,

		/**
		 * This is the index of the item at Checkout's cart. It has to be unique in the items array
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: FormControl<number | null | undefined>,

		/**
		 * This is the amount of items that will be priced. It is possible to have a volume discount for many repeated items. Hence, the price may not be the quantity of the item multiplied by the unitary price
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/**
		 * This is the seller ID for the item
		 * Required
		 */
		sellerId: FormControl<string | null | undefined>,

		/**
		 * This is the sku id of the item that will be priced
		 * Required
		 */
		skuId: FormControl<string | null | undefined>,
	}
	export function CreateItemsElementFormGroup() {
		return new FormGroup<ItemsElementFormProperties>({
			brandId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			index: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sellerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			skuId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Response2 {

		/**
		 * List of items and their respective prices applied by Pricing Hub
		 * Required
		 */
		items: Array<Item1>;
	}
	export interface Response2FormProperties {
	}
	export function CreateResponse2FormGroup() {
		return new FormGroup<Response2FormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Prices
		 * This route retrieves and applies prices for the items that are passed in the request. Pricing Hub will select the pricing method that will be used for each item and will fetch their respective price from the selected pricing method.
		 * >ℹ️ > This feature is in closed beta, available only for selected customers. If you have any questions, contact our [Support](https://support.vtex.com/hc/en-us/requests).
		 * Post api/pricing-hub/prices
		 * @param {string} accountName Name of the VTEX account. Used as part of the URL
		 * @return {Response2} OK
		 */
		Pricing_Hub_PricesPostByAccountName(accountName: string, requestBody: GetPricesRequestObject): Observable<Response2> {
			return this.http.post<Response2>(this.baseUri + 'api/pricing-hub/prices?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Configure External Price Source
		 * This route facilitates setting up an external price source in Pricing Hub. It also allows you to activate or deactivate that source in a given account.
		 * >ℹ️ This feature is in closed beta, available only for selected customers. If you have any questions, contact our [Support](https://support.vtex.com/hc/en-us/requests).
		 * Put config
		 * @param {string} an Name of the VTEX account
		 * @return {void} OK
		 */
		ConfigExternalPriceSource(an: string | null | undefined, requestBody: ConfigExternalPriceSourceRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'config?an=' + (an == null ? '' : encodeURIComponent(an)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

