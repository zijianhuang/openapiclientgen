import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Trade Policy Fixed Price Validity Period Object. */
	export interface DateRange {

		/**
		 * Indicates the date and time when the fixed price will start to be valid.
		 * Required
		 */
		from: string;

		/**
		 * Indicates the date and time from which the fixed price will no longer be valid.
		 * Required
		 */
		to: string;
	}

	/** Trade Policy Fixed Price Validity Period Object. */
	export interface DateRangeFormProperties {

		/**
		 * Indicates the date and time when the fixed price will start to be valid.
		 * Required
		 */
		from: FormControl<string | null | undefined>,

		/**
		 * Indicates the date and time from which the fixed price will no longer be valid.
		 * Required
		 */
		to: FormControl<string | null | undefined>,
	}
	export function CreateDateRangeFormGroup() {
		return new FormGroup<DateRangeFormProperties>({
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FixedPrice {

		/** Trade Policy Fixed Price Validity Period Object. */
		dateRange?: DateRange;

		/**
		 * Trade Policy List Price Value.
		 * Required
		 * Type: double
		 */
		listPrice: number;

		/**
		 * Trade Policy Fixed Price Minimum Item Quantity.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minQuantity: number;

		/**
		 * Trade Policy ID.
		 * Required
		 */
		tradePolicyId: string;

		/**
		 * Trade Policy Fixed Price Value.
		 * Required
		 * Type: double
		 */
		value: number;
	}
	export interface FixedPriceFormProperties {

		/**
		 * Trade Policy List Price Value.
		 * Required
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Trade Policy Fixed Price Minimum Item Quantity.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minQuantity: FormControl<number | null | undefined>,

		/**
		 * Trade Policy ID.
		 * Required
		 */
		tradePolicyId: FormControl<string | null | undefined>,

		/**
		 * Trade Policy Fixed Price Value.
		 * Required
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateFixedPriceFormGroup() {
		return new FormGroup<FixedPriceFormProperties>({
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			tradePolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Getcomputedprice {

		/**
		 * Cost price.
		 * Type: double
		 */
		costPrice?: number | null;

		/**
		 * Trade Policy List Price, also known as "from" price.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: number;

		/**
		 * Date until when the computed price will be valid, due to price scheduling. If no price scheduling applies, this will be set a year from the current time.
		 * Required
		 */
		priceValidUntil: string;

		/**
		 * Computed Price before applying coupons, promotions and taxes. This price may change before reaching the shelf.
		 * Required
		 * Type: double
		 */
		sellingPrice: number;

		/**
		 * Trade Policy ID.
		 * Required
		 */
		tradePolicyId: string;
	}
	export interface GetcomputedpriceFormProperties {

		/**
		 * Cost price.
		 * Type: double
		 */
		costPrice: FormControl<number | null | undefined>,

		/**
		 * Trade Policy List Price, also known as "from" price.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Date until when the computed price will be valid, due to price scheduling. If no price scheduling applies, this will be set a year from the current time.
		 * Required
		 */
		priceValidUntil: FormControl<string | null | undefined>,

		/**
		 * Computed Price before applying coupons, promotions and taxes. This price may change before reaching the shelf.
		 * Required
		 * Type: double
		 */
		sellingPrice: FormControl<number | null | undefined>,

		/**
		 * Trade Policy ID.
		 * Required
		 */
		tradePolicyId: FormControl<string | null | undefined>,
	}
	export function CreateGetcomputedpriceFormGroup() {
		return new FormGroup<GetcomputedpriceFormProperties>({
			costPrice: new FormControl<number | null | undefined>(undefined),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			priceValidUntil: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellingPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			tradePolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Getprice {

		/**
		 * SKU's reference price.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		basePrice: number;

		/**
		 * SKU's cost price.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		costPrice: number;

		/**
		 * The fixed price is a price that overlaps all other existing price configurations of a price table.
		 * Required
		 */
		fixedPrices: Array<FixedPrice>;

		/**
		 * SKU ID.
		 * Required
		 */
		itemId: string;

		/**
		 * Suggested retail price for the SKU.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: number;

		/**
		 * Desired profit margin with the SKU's sale.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		markup: number;
	}
	export interface GetpriceFormProperties {

		/**
		 * SKU's reference price.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		basePrice: FormControl<number | null | undefined>,

		/**
		 * SKU's cost price.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		costPrice: FormControl<number | null | undefined>,

		/**
		 * SKU ID.
		 * Required
		 */
		itemId: FormControl<string | null | undefined>,

		/**
		 * Suggested retail price for the SKU.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Desired profit margin with the SKU's sale.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		markup: FormControl<number | null | undefined>,
	}
	export function CreateGetpriceFormGroup() {
		return new FormGroup<GetpriceFormProperties>({
			basePrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			costPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			markup: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PricingConfiguration {

		/** Defines if access to the Pricing APIs is blocked for external requests. */
		blockAccount?: boolean | null;

		/** Array with all blocked routes. */
		blockedRoutes?: Array<string>;

		/**
		 * Account default markup.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		defaultMarkup: number;

		/**
		 * Defines if the account has migrated to Pricing V2.
		 * Required
		 */
		hasMigrated: boolean;

		/** Defines if optional base price is allowed. */
		hasOptionalBasePrice?: boolean | null;

		/** Deprecated. Use the `priceInheritance` field instead. */
		hasPriceInheritance?: boolean | null;

		/** Pricing V2 migration status. */
		migrationStatus?: string | null;

		/**
		 * Account minimum markup.
		 * Required
		 */
		minimumMarkups: {[id: string]: number };

		/** Condition of price inheritance from its parent account. This field can have three possible values: `never` if the store should never inherit prices, `nonexistent` if the store should only inherit prices in case of nonexistent prices for a given product, or `always` if the store should always inherit prices, regardless of its own prices. */
		priceInheritance?: string | null;

		/**
		 * Price Table Limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceTableLimit?: number | null;

		/** The strategy used to get prices when there is more than one option. Possible values: `first`, `highest`, `lowest`. Default: `first`. */
		priceTableSelectionStrategy?: string | null;

		/** Price Variation object. */
		priceVariation?: PricingConfigurationPriceVariation;

		/** Overrides prices from sellers. */
		sellersToOverride?: Array<string>;

		/** Trade Policy Configurations array. */
		PricingConfigurationTradePolicyConfigs?: Array<PricingConfigurationTradePolicyConfigs>;
	}
	export interface PricingConfigurationFormProperties {

		/** Defines if access to the Pricing APIs is blocked for external requests. */
		blockAccount: FormControl<boolean | null | undefined>,

		/**
		 * Account default markup.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		defaultMarkup: FormControl<number | null | undefined>,

		/**
		 * Defines if the account has migrated to Pricing V2.
		 * Required
		 */
		hasMigrated: FormControl<boolean | null | undefined>,

		/** Defines if optional base price is allowed. */
		hasOptionalBasePrice: FormControl<boolean | null | undefined>,

		/** Deprecated. Use the `priceInheritance` field instead. */
		hasPriceInheritance: FormControl<boolean | null | undefined>,

		/** Pricing V2 migration status. */
		migrationStatus: FormControl<string | null | undefined>,

		/**
		 * Account minimum markup.
		 * Required
		 */
		minimumMarkups: FormControl<{[id: string]: number } | null | undefined>,

		/** Condition of price inheritance from its parent account. This field can have three possible values: `never` if the store should never inherit prices, `nonexistent` if the store should only inherit prices in case of nonexistent prices for a given product, or `always` if the store should always inherit prices, regardless of its own prices. */
		priceInheritance: FormControl<string | null | undefined>,

		/**
		 * Price Table Limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priceTableLimit: FormControl<number | null | undefined>,

		/** The strategy used to get prices when there is more than one option. Possible values: `first`, `highest`, `lowest`. Default: `first`. */
		priceTableSelectionStrategy: FormControl<string | null | undefined>,
	}
	export function CreatePricingConfigurationFormGroup() {
		return new FormGroup<PricingConfigurationFormProperties>({
			blockAccount: new FormControl<boolean | null | undefined>(undefined),
			defaultMarkup: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hasMigrated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hasOptionalBasePrice: new FormControl<boolean | null | undefined>(undefined),
			hasPriceInheritance: new FormControl<boolean | null | undefined>(undefined),
			migrationStatus: new FormControl<string | null | undefined>(undefined),
			minimumMarkups: new FormControl<{[id: string]: number } | null | undefined>(undefined, [Validators.required]),
			priceInheritance: new FormControl<string | null | undefined>(undefined),
			priceTableLimit: new FormControl<number | null | undefined>(undefined),
			priceTableSelectionStrategy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PricingConfigurationPriceVariation {

		/**
		 * Lower variation limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lowerLimit?: number | null;

		/**
		 * Upper variation limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		upperLimit?: number | null;
	}
	export interface PricingConfigurationPriceVariationFormProperties {

		/**
		 * Lower variation limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lowerLimit: FormControl<number | null | undefined>,

		/**
		 * Upper variation limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		upperLimit: FormControl<number | null | undefined>,
	}
	export function CreatePricingConfigurationPriceVariationFormGroup() {
		return new FormGroup<PricingConfigurationPriceVariationFormProperties>({
			lowerLimit: new FormControl<number | null | undefined>(undefined),
			upperLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PricingConfigurationTradePolicyConfigs {

		/**
		 * Trade Policy Minimum Markup.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumMarkup?: number | null;

		/** Defines if the Price Rule should affect the list price too. */
		rulesShouldAffectListPrice?: boolean | null;

		/** Trade Policy ID. */
		tradePolicyId?: string | null;
	}
	export interface PricingConfigurationTradePolicyConfigsFormProperties {

		/**
		 * Trade Policy Minimum Markup.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumMarkup: FormControl<number | null | undefined>,

		/** Defines if the Price Rule should affect the list price too. */
		rulesShouldAffectListPrice: FormControl<boolean | null | undefined>,

		/** Trade Policy ID. */
		tradePolicyId: FormControl<string | null | undefined>,
	}
	export function CreatePricingConfigurationTradePolicyConfigsFormGroup() {
		return new FormGroup<PricingConfigurationTradePolicyConfigsFormProperties>({
			minimumMarkup: new FormControl<number | null | undefined>(undefined),
			rulesShouldAffectListPrice: new FormControl<boolean | null | undefined>(undefined),
			tradePolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Pricing Configuration
		 * Retrieves Pricing Configuration.
		 * ## Response body example
		 * ```json
		 * {
		 * "hasMigrated": true,
		 * "migrationStatus": "Completed",
		 * "defaultMarkup": 100,
		 * "priceVariation": {
		 * "upperLimit": null,
		 * "lowerLimit": null
		 * },
		 * "minimumMarkups": {
		 * "1": 100,
		 * "2": 90
		 * },
		 * "tradePolicyConfigs": [],
		 * "sellersToOverride": [],
		 * "hasPriceInheritance": false,
		 * "priceInheritance": "never",
		 * "hasOptionalBasePrice": false,
		 * "blockAccount": false,
		 * "blockedRoutes": null,
		 * "priceTableSelectionStrategy": "first",
		 * "priceTableLimit": null
		 * }
		 * ```
		 * Get pricing/config
		 * @return {void} OK
		 */
		GetPricingConfig(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pricing/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Pricing v2 Status
		 * Retrieves Pricing v2 Status.
		 * ## Response body example
		 * ```json
		 * {
		 * "isActive": true,
		 * "hasMigrated": true
		 * }
		 * ```
		 * Get pricing/migration
		 * @return {void} OK
		 */
		GetPricingv2Status(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pricing/migration', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all price tables and their rules
		 * This method will retrieve all price tables and their rules.
		 * ## Response body example
		 * ```json
		 * [
		 * {
		 * "tradePolicyId": "2",
		 * "rules": [
		 * {
		 * "id": 0,
		 * "context": {
		 * "categories": {},
		 * "brands": {},
		 * "stockStatuses": null,
		 * "internalCategories": null,
		 * "markupRange": null,
		 * "dateRange": null
		 * },
		 * "percentualModifier": 20
		 * }
		 * ]
		 * },
		 * {
		 * "tradePolicyId": "b2c",
		 * "rules": [
		 * {
		 * "id": 0,
		 * "context": {
		 * "categories": {},
		 * "brands": {
		 * "2000009": "Whiskas"
		 * },
		 * "stockStatuses": null,
		 * "internalCategories": null,
		 * "markupRange": null,
		 * "dateRange": null
		 * },
		 * "percentualModifier": 15
		 * }
		 * ]
		 * }
		 * ]
		 * ```
		 * Get pricing/pipeline/catalog
		 * @return {Array<GetallpricetablesandrulesReturn>} OK
		 */
		Getallpricetablesandrules(): Observable<Array<GetallpricetablesandrulesReturn>> {
			return this.http.get<Array<GetallpricetablesandrulesReturn>>(this.baseUri + 'pricing/pipeline/catalog', {});
		}

		/**
		 * Get rules for a price table
		 * This method will retrieve the rules from a specific Price Table.
		 * ## Response body example
		 * ```json
		 * {
		 * "tradePolicyId": "b2c",
		 * "rules": [{
		 * "id": 0,
		 * "context": {
		 * "categories": {},
		 * "brands": {
		 * "2000009": "Whiskas"
		 * },
		 * "stockStatuses": null,
		 * "internalCategories": null,
		 * "markupRange": null,
		 * "dateRange": null
		 * },
		 * "percentualModifier": 15
		 * }]
		 * }
		 * ```
		 * Get pricing/pipeline/catalog/{priceTableId}
		 * @param {string} priceTableId Price Table Name.
		 * @return {GetrulesforapricetableReturn} OK
		 */
		Getrulesforapricetable(priceTableId: string): Observable<GetrulesforapricetableReturn> {
			return this.http.get<GetrulesforapricetableReturn>(this.baseUri + 'pricing/pipeline/catalog/' + (priceTableId == null ? '' : encodeURIComponent(priceTableId)), {});
		}

		/**
		 * Update rules for a price table
		 * This method will update the rules from a specific Price Table. It will delete all the rules from the requested Price Table and create new rules based on the content of the request.
		 * ## Request body example
		 * ```json
		 * {
		 * "rules": [
		 * {
		 * "id": 1,
		 * "context": {
		 * "categories": {
		 * "Category ID": "1",
		 * "Category Name": "Alimentação"
		 * },
		 * "brands": {
		 * "Brand ID": "2000002",
		 * "Brand Name": "Whiskas"
		 * },
		 * "markupRange": {
		 * "from": 0,
		 * "to": 200
		 * },
		 * "dateRange": {
		 * "from": "2022-01-23T19:00:00.000Z",
		 * "to": "2023-10-26T00:00:00.000Z"
		 * }
		 * },
		 * "percentualModifier": 0
		 * }
		 * ]
		 * }
		 * ```
		 * Put pricing/pipeline/catalog/{priceTableId}
		 * @param {string} priceTableId Price Table Name.
		 * @return {void} 
		 */
		Price_TablesPutByPriceTableId(priceTableId: string, requestBody: Price_TablesPutByPriceTableIdPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'pricing/pipeline/catalog/' + (priceTableId == null ? '' : encodeURIComponent(priceTableId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Price
		 * Deletes the Base Price and all available Fixed Prices for an SKU in all trade policies.
		 * Delete pricing/prices/{itemId}
		 * @param {number} itemId SKU ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		DeletePrice(itemId: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'pricing/prices/' + itemId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Price
		 * Retrieves price data given a specific SKU ID. Within the `fixedPrices` object, there might be a list of prices for specific Trade Policies and Minimium Quantities of the SKU. Fixed Prices may also be scheduled.
		 * ## Response body example
		 * ```json
		 * {
		 * "itemId": "1",
		 * "listPrice": 50,
		 * "costPrice": 90,
		 * "markup": 30,
		 * "basePrice": 117,
		 * "fixedPrices": [
		 * {
		 * "tradePolicyId": "1",
		 * "value": 50.5,
		 * "listPrice": 50.5,
		 * "minQuantity": 2,
		 * "dateRange": {
		 * "from": "2021-12-31T01:00:00Z",
		 * "to": "2022-12-31T01:00:00Z"
		 * }
		 * },
		 * {
		 * "tradePolicyId": "2",
		 * "value": 30,
		 * "listPrice": 50,
		 * "minQuantity": 2
		 * }
		 * ]
		 * }
		 * ```
		 * Get pricing/prices/{itemId}
		 * @param {number} itemId SKU ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Getprice} OK
		 */
		GetPrice(itemId: number): Observable<Getprice> {
			return this.http.get<Getprice>(this.baseUri + 'pricing/prices/' + itemId, {});
		}

		/**
		 * Create or Update Base Price or Fixed Prices
		 * Creates or updates an SKU Base Price or Fixed Prices. The **base price** is the basic selling price of a product, it comprises the cost price and the markup wanted in the sale of the product. The **fixed price** is an optional price of the SKU for a specific trade policy with a specific minimum quantity to be activated.
		 * <p> You may optionally set a list price. Additionally, you may set either a cost price or a markup value. By defining either one of them, the other will be calculated to conform to the formula <code>costPrice * (1 + markup) = basePrice</code>.</p> <h2>Request body example</h2>
		 * ```json
		 * {
		 * "markup": 30,
		 * "basePrice": 100,
		 * "listPrice": 35,
		 * "fixedPrices": [
		 * {
		 * "tradePolicyId": "1",
		 * "value": 31,
		 * "listPrice": 32,
		 * "minQuantity": 1,
		 * "dateRange": {
		 * "from": "2022-05-21T22:00:00Z",
		 * "to": "2023-05-28T22:00:00Z"
		 * }
		 * },
		 * {
		 * "tradePolicyId": "1",
		 * "value": 31.5,
		 * "listPrice": 33,
		 * "minQuantity": 2
		 * }
		 * ]
		 * }
		 * ```
		 * Put pricing/prices/{itemId}
		 * @param {number} itemId SKU unique identifier number.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		CreateUpdatePriceOrFixedPrice(itemId: number, requestBody: CreateUpdatePriceOrFixedPricePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'pricing/prices/' + itemId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Computed Price by price table or trade policy
		 * Gets the Computed Price, which is the price after all the steps in the Pricing pipeline, for an SKU in a specific price table or trade policy.
		 * ## Response body example
		 * ```json
		 * {
		 * "tradePolicyId": "1",
		 * "listPrice": 30,
		 * "costPrice": 76.92,
		 * "sellingPrice": 18.9,
		 * "priceValidUntil": "2018-12-20T18:12:14Z"
		 * }
		 * ```
		 * Get pricing/prices/{itemId}/computed/{priceTableId}
		 * @param {number} categoryIds Category ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} brandId Brand ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} quantity SKU quantity.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} itemId SKU ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} priceTableId SKU Price Table Name.
		 * @return {void} OK
		 */
		GetComputedPricebypricetable(categoryIds: number, brandId: number, quantity: number, itemId: number, priceTableId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pricing/prices/' + itemId + '/computed/' + (priceTableId == null ? '' : encodeURIComponent(priceTableId)) + '?categoryIds=' + categoryIds + '&brandId=' + brandId + '&quantity=' + quantity, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Fixed Prices
		 * The **fixed price** is an optional price of the SKU for a specific trade policy with a specific minimum quantity to be activated. This method retrieves an array of Fixed Prices for an SKU in a Trade Policy with Minimum Quantities.
		 * The default value for a Minimum Quantity is `1`. This means a Fixed Price will be valid for a SKU in a Trade Policy for orders containing the specified number of Minimum Quantity or above, unless a higher Minimum Quantity is specified.
		 * Fixed prices may, optionally, be scheduled. If so, these objects will contain the `dateRange` object with `from` and `to` properties, indicating the start and end time of the scheduled fixed price in the RFC3339 timestamp format (`YYYY-MM-DDT23:59:60Z`).
		 * Note that the 'Z', at the end, represents the UTC time (GMT+00:00). If it was in GMT-03:00, for example, it would be (`YYYY-MM-DDT23:59:60-03:00`).
		 * ## Response body example
		 * ```json
		 * [
		 * {
		 * "tradePolicyId": "6",
		 * "value": 20.9,
		 * "listPrice": 22.9,
		 * "minQuantity": 1,
		 * "dateRange": {
		 * "from": "2021-12-30T22:00:00-03:00",
		 * "to": "2021-12-30T22:00:00-03:00"
		 * }
		 * },
		 * {
		 * "tradePolicyId": "1",
		 * "value": 18.9,
		 * "listPrice": null,
		 * "minQuantity": 1,
		 * "dateRange": {
		 * "from": "2021-12-30T22:00:00-03:00",
		 * "to": "2021-12-30T22:00:00-03:00"
		 * }
		 * }
		 * ]
		 * ```
		 * Get pricing/prices/{itemId}/fixed
		 * @param {number} itemId SKU ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		GetFixedPrices(itemId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pricing/prices/' + itemId + '/fixed', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Fixed Prices on a price table or trade policy
		 * Deletes all Fixed Prices of an SKU in a specific Price Table or Trade Policy.
		 * Delete pricing/prices/{itemId}/fixed/{priceTableId}
		 * @param {number} itemId SKU ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} priceTableId Price Table or Trade Policy Name.
		 * @return {void} OK
		 */
		Deletefixedpricesonapricetableortradepolicy(itemId: number, priceTableId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'pricing/prices/' + itemId + '/fixed/' + (priceTableId == null ? '' : encodeURIComponent(priceTableId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Fixed Prices on a price table or trade policy
		 * Retrieves all Fixed Prices on a price table or trade policy.
		 * ## Response body example
		 * ```json
		 * [
		 * {
		 * "tradePolicyId": "6",
		 * "value": 20.9,
		 * "listPrice": 22.9,
		 * "minQuantity": 1,
		 * "dateRange": {
		 * "from": "2021-12-30T22:00:00-03:00",
		 * "to": "2021-12-30T22:00:00-04:00"
		 * }
		 * },
		 * {
		 * "tradePolicyId": "1",
		 * "value": 18.9,
		 * "listPrice": null,
		 * "minQuantity": 1
		 * }
		 * ]
		 * ```
		 * Get pricing/prices/{itemId}/fixed/{priceTableId}
		 * @param {number} itemId SKU ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} priceTableId Price Table Name
		 * @return {void} OK
		 */
		GetFixedPricesonapricetable(itemId: number, priceTableId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pricing/prices/' + itemId + '/fixed/' + (priceTableId == null ? '' : encodeURIComponent(priceTableId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create or Update Fixed Prices on a price table or trade policy
		 * Creates or updates the fixed prices of an SKU for a specific price table or trade policy. You can add one or multiple fixed prices per SKU.
		 * ## Request body example
		 * ```json
		 * [
		 * {
		 * "value": 50.5,
		 * "listPrice": 50.5,
		 * "minQuantity": 2,
		 * "dateRange": {
		 * "from": "2021-12-30T22:00:00-03:00",
		 * "to": "2021-12-30T22:00:00-04:00"
		 * }
		 * }
		 * ]
		 * ```
		 * Post pricing/prices/{itemId}/fixed/{priceTableId}
		 * @param {number} itemId SKU ID.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} priceTableId SKU **price table** name or **trade policy** ID.
		 * @return {void} OK
		 */
		Createorupdatefixedpricesonpricetableortradepolicy(itemId: number, priceTableId: string, requestBody: Array<CreateorupdatefixedpricesonpricetableortradepolicyPostBody>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pricing/prices/' + itemId + '/fixed/' + (priceTableId == null ? '' : encodeURIComponent(priceTableId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List price tables
		 * This method will list all price tables.
		 * ## Response body example
		 * ```json
		 * [
		 * "1",
		 * "2",
		 * "3",
		 * "b2c",
		 * "b2b",
		 * "gold"
		 * ]
		 * ```
		 * Get pricing/tables
		 * @return {Array<string>} OK
		 */
		Listpricetables(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'pricing/tables', {});
		}
	}

	export interface GetallpricetablesandrulesReturn {

		/**
		 * Percentual modifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentualModifier?: number | null;

		/** Array of rules for the price table. */
		GetallpricetablesandrulesReturnRules?: Array<GetallpricetablesandrulesReturnRules>;

		/** Trade Policy ID (Price Table ID). */
		tradePolicyId?: string | null;
	}
	export interface GetallpricetablesandrulesReturnFormProperties {

		/**
		 * Percentual modifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentualModifier: FormControl<number | null | undefined>,

		/** Trade Policy ID (Price Table ID). */
		tradePolicyId: FormControl<string | null | undefined>,
	}
	export function CreateGetallpricetablesandrulesReturnFormGroup() {
		return new FormGroup<GetallpricetablesandrulesReturnFormProperties>({
			percentualModifier: new FormControl<number | null | undefined>(undefined),
			tradePolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetallpricetablesandrulesReturnRules {

		/** Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item. */
		context?: GetallpricetablesandrulesReturnRulesContext;

		/**
		 * Rule ID.
		 * Type: double
		 */
		id?: number | null;
	}
	export interface GetallpricetablesandrulesReturnRulesFormProperties {

		/**
		 * Rule ID.
		 * Type: double
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateGetallpricetablesandrulesReturnRulesFormGroup() {
		return new FormGroup<GetallpricetablesandrulesReturnRulesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetallpricetablesandrulesReturnRulesContext {

		/** Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`. */
		brands?: {[id: string]: string };

		/** Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`. */
		categories?: {[id: string]: string };

		/** The rule will be active during this time range. */
		dateRange?: GetallpricetablesandrulesReturnRulesContextDateRange;

		/** Internal Categories. */
		internalCategories?: string | null;

		/** For an item to be eligible to the rule, it's markup should be in this Markup Range. */
		markupRange?: GetallpricetablesandrulesReturnRulesContextMarkupRange;

		/** Stock statuses. */
		stockStatuses?: string | null;
	}
	export interface GetallpricetablesandrulesReturnRulesContextFormProperties {

		/** Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`. */
		brands: FormControl<{[id: string]: string } | null | undefined>,

		/** Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`. */
		categories: FormControl<{[id: string]: string } | null | undefined>,

		/** Internal Categories. */
		internalCategories: FormControl<string | null | undefined>,

		/** Stock statuses. */
		stockStatuses: FormControl<string | null | undefined>,
	}
	export function CreateGetallpricetablesandrulesReturnRulesContextFormGroup() {
		return new FormGroup<GetallpricetablesandrulesReturnRulesContextFormProperties>({
			brands: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			categories: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			internalCategories: new FormControl<string | null | undefined>(undefined),
			stockStatuses: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetallpricetablesandrulesReturnRulesContextDateRange {

		/** Date when rule will be activated. Date format: `RFC3339`. */
		from?: string | null;

		/** Date when the rule will be deactivated. Date format: `RFC3339`. */
		to?: string | null;
	}
	export interface GetallpricetablesandrulesReturnRulesContextDateRangeFormProperties {

		/** Date when rule will be activated. Date format: `RFC3339`. */
		from: FormControl<string | null | undefined>,

		/** Date when the rule will be deactivated. Date format: `RFC3339`. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateGetallpricetablesandrulesReturnRulesContextDateRangeFormGroup() {
		return new FormGroup<GetallpricetablesandrulesReturnRulesContextDateRangeFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetallpricetablesandrulesReturnRulesContextMarkupRange {

		/**
		 * Item markup should be greater than or equal to this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		from?: number | null;

		/**
		 * Item markup should be less than or equal to this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		to?: number | null;
	}
	export interface GetallpricetablesandrulesReturnRulesContextMarkupRangeFormProperties {

		/**
		 * Item markup should be greater than or equal to this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		from: FormControl<number | null | undefined>,

		/**
		 * Item markup should be less than or equal to this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		to: FormControl<number | null | undefined>,
	}
	export function CreateGetallpricetablesandrulesReturnRulesContextMarkupRangeFormGroup() {
		return new FormGroup<GetallpricetablesandrulesReturnRulesContextMarkupRangeFormProperties>({
			from: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetrulesforapricetableReturn {

		/**
		 * Percentual modifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentualModifier?: number | null;

		/** Array of rules for the price table. */
		GetrulesforapricetableReturnRules?: Array<GetrulesforapricetableReturnRules>;

		/** Trade Policy ID (Price Table ID). */
		tradePolicyId?: string | null;
	}
	export interface GetrulesforapricetableReturnFormProperties {

		/**
		 * Percentual modifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentualModifier: FormControl<number | null | undefined>,

		/** Trade Policy ID (Price Table ID). */
		tradePolicyId: FormControl<string | null | undefined>,
	}
	export function CreateGetrulesforapricetableReturnFormGroup() {
		return new FormGroup<GetrulesforapricetableReturnFormProperties>({
			percentualModifier: new FormControl<number | null | undefined>(undefined),
			tradePolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetrulesforapricetableReturnRules {

		/** Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item. */
		context?: GetrulesforapricetableReturnRulesContext;

		/**
		 * Rule ID.
		 * Type: double
		 */
		id?: number | null;
	}
	export interface GetrulesforapricetableReturnRulesFormProperties {

		/**
		 * Rule ID.
		 * Type: double
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateGetrulesforapricetableReturnRulesFormGroup() {
		return new FormGroup<GetrulesforapricetableReturnRulesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetrulesforapricetableReturnRulesContext {

		/** Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`. */
		brands?: {[id: string]: string };

		/** Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`. */
		categories?: {[id: string]: string };

		/** The rule will be active during this time range. */
		dateRange?: GetrulesforapricetableReturnRulesContextDateRange;

		/** Internal Categories. */
		internalCategories?: string | null;

		/** For an item to be eligible to the rule, it's markup should be in this Markup Range. */
		markupRange?: GetrulesforapricetableReturnRulesContextMarkupRange;

		/** Stock statuses. */
		stockStatuses?: string | null;
	}
	export interface GetrulesforapricetableReturnRulesContextFormProperties {

		/** Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`. */
		brands: FormControl<{[id: string]: string } | null | undefined>,

		/** Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`. */
		categories: FormControl<{[id: string]: string } | null | undefined>,

		/** Internal Categories. */
		internalCategories: FormControl<string | null | undefined>,

		/** Stock statuses. */
		stockStatuses: FormControl<string | null | undefined>,
	}
	export function CreateGetrulesforapricetableReturnRulesContextFormGroup() {
		return new FormGroup<GetrulesforapricetableReturnRulesContextFormProperties>({
			brands: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			categories: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			internalCategories: new FormControl<string | null | undefined>(undefined),
			stockStatuses: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetrulesforapricetableReturnRulesContextDateRange {

		/** Date when rule will be activated. Date format: `RFC3339`. */
		from?: string | null;

		/** Date when the rule will be deactivated. Date format: `RFC3339`. */
		to?: string | null;
	}
	export interface GetrulesforapricetableReturnRulesContextDateRangeFormProperties {

		/** Date when rule will be activated. Date format: `RFC3339`. */
		from: FormControl<string | null | undefined>,

		/** Date when the rule will be deactivated. Date format: `RFC3339`. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateGetrulesforapricetableReturnRulesContextDateRangeFormGroup() {
		return new FormGroup<GetrulesforapricetableReturnRulesContextDateRangeFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetrulesforapricetableReturnRulesContextMarkupRange {

		/**
		 * Item markup should be greater than or equal to this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		from?: number | null;

		/**
		 * Item markup should be less than or equal to this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		to?: number | null;
	}
	export interface GetrulesforapricetableReturnRulesContextMarkupRangeFormProperties {

		/**
		 * Item markup should be greater than or equal to this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		from: FormControl<number | null | undefined>,

		/**
		 * Item markup should be less than or equal to this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		to: FormControl<number | null | undefined>,
	}
	export function CreateGetrulesforapricetableReturnRulesContextMarkupRangeFormGroup() {
		return new FormGroup<GetrulesforapricetableReturnRulesContextMarkupRangeFormProperties>({
			from: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Price_TablesPutByPriceTableIdPutBody {

		/**
		 * Array of rules for the price table.
		 * Required
		 */
		Price_TablesPutByPriceTableIdPutBodyRules: Array<Price_TablesPutByPriceTableIdPutBodyRules>;
	}
	export interface Price_TablesPutByPriceTableIdPutBodyFormProperties {
	}
	export function CreatePrice_TablesPutByPriceTableIdPutBodyFormGroup() {
		return new FormGroup<Price_TablesPutByPriceTableIdPutBodyFormProperties>({
		});

	}

	export interface Price_TablesPutByPriceTableIdPutBodyRules {

		/**
		 * Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item.
		 * Required
		 */
		context: Price_TablesPutByPriceTableIdPutBodyRulesContext;

		/**
		 * Rule ID.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/**
		 * Percentual modifier.
		 * Required
		 * Type: double
		 */
		percentualModifier: number;
	}
	export interface Price_TablesPutByPriceTableIdPutBodyRulesFormProperties {

		/**
		 * Rule ID.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Percentual modifier.
		 * Required
		 * Type: double
		 */
		percentualModifier: FormControl<number | null | undefined>,
	}
	export function CreatePrice_TablesPutByPriceTableIdPutBodyRulesFormGroup() {
		return new FormGroup<Price_TablesPutByPriceTableIdPutBodyRulesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			percentualModifier: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Price_TablesPutByPriceTableIdPutBodyRulesContext {

		/**
		 * Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`.
		 * Required
		 */
		brands: {[id: string]: string };

		/**
		 * Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`.
		 * Required
		 */
		categories: {[id: string]: string };

		/**
		 * The rule will be active during this time range.
		 * Required
		 */
		dateRange: Price_TablesPutByPriceTableIdPutBodyRulesContextDateRange;

		/** Internal Categories. */
		internalCategories?: string | null;

		/**
		 * For an item to be eligible to the rule, it's markup should be in this Markup Range.
		 * Required
		 */
		markupRange: Price_TablesPutByPriceTableIdPutBodyRulesContextMarkupRange;

		/** Stock statuses. */
		stockStatuses?: string | null;
	}
	export interface Price_TablesPutByPriceTableIdPutBodyRulesContextFormProperties {

		/**
		 * Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`.
		 * Required
		 */
		brands: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`.
		 * Required
		 */
		categories: FormControl<{[id: string]: string } | null | undefined>,

		/** Internal Categories. */
		internalCategories: FormControl<string | null | undefined>,

		/** Stock statuses. */
		stockStatuses: FormControl<string | null | undefined>,
	}
	export function CreatePrice_TablesPutByPriceTableIdPutBodyRulesContextFormGroup() {
		return new FormGroup<Price_TablesPutByPriceTableIdPutBodyRulesContextFormProperties>({
			brands: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			categories: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			internalCategories: new FormControl<string | null | undefined>(undefined),
			stockStatuses: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Price_TablesPutByPriceTableIdPutBodyRulesContextDateRange {

		/**
		 * Date when rule will be activated. Date format: `RFC3339`.
		 * Required
		 */
		from: string;

		/**
		 * Date when the rule will be deactivated. Date format: `RFC3339`.
		 * Required
		 */
		to: string;
	}
	export interface Price_TablesPutByPriceTableIdPutBodyRulesContextDateRangeFormProperties {

		/**
		 * Date when rule will be activated. Date format: `RFC3339`.
		 * Required
		 */
		from: FormControl<string | null | undefined>,

		/**
		 * Date when the rule will be deactivated. Date format: `RFC3339`.
		 * Required
		 */
		to: FormControl<string | null | undefined>,
	}
	export function CreatePrice_TablesPutByPriceTableIdPutBodyRulesContextDateRangeFormGroup() {
		return new FormGroup<Price_TablesPutByPriceTableIdPutBodyRulesContextDateRangeFormProperties>({
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Price_TablesPutByPriceTableIdPutBodyRulesContextMarkupRange {

		/**
		 * Item markup should be greater than or equal to this value.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		from: number;

		/**
		 * Item markup should be less than or equal to this value.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		to: number;
	}
	export interface Price_TablesPutByPriceTableIdPutBodyRulesContextMarkupRangeFormProperties {

		/**
		 * Item markup should be greater than or equal to this value.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		from: FormControl<number | null | undefined>,

		/**
		 * Item markup should be less than or equal to this value.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		to: FormControl<number | null | undefined>,
	}
	export function CreatePrice_TablesPutByPriceTableIdPutBodyRulesContextMarkupRangeFormGroup() {
		return new FormGroup<Price_TablesPutByPriceTableIdPutBodyRulesContextMarkupRangeFormProperties>({
			from: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdatePriceOrFixedPricePutBody {

		/**
		 * SKU selling base price. If you decide to fill only the `basePrice` item, the `markup` and `costPrice` will be automatically generated to adapt to the number inserted in `basePrice`.
		 * Required
		 * Type: double
		 */
		basePrice: number;

		/**
		 * SKU selling cost price. If you decide to fill the `costPrice` item, you must also fill the `markup` and `basePrice` will be automatically generated based on both values.
		 * Type: double
		 */
		costPrice?: number | null;
		CreateUpdatePriceOrFixedPricePutBodyFixedPrices?: Array<CreateUpdatePriceOrFixedPricePutBodyFixedPrices>;

		/**
		 * SKU's suggested selling price.
		 * Required
		 * Type: double
		 */
		listPrice: number;

		/**
		 * The profit percentage that is to be obtained from the sale of that SKU. If you decide to fill the `markup` item, you must also fill the `costPrice`. The `basePrice` will be automatically generated based on both values.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		markup: number;
	}
	export interface CreateUpdatePriceOrFixedPricePutBodyFormProperties {

		/**
		 * SKU selling base price. If you decide to fill only the `basePrice` item, the `markup` and `costPrice` will be automatically generated to adapt to the number inserted in `basePrice`.
		 * Required
		 * Type: double
		 */
		basePrice: FormControl<number | null | undefined>,

		/**
		 * SKU selling cost price. If you decide to fill the `costPrice` item, you must also fill the `markup` and `basePrice` will be automatically generated based on both values.
		 * Type: double
		 */
		costPrice: FormControl<number | null | undefined>,

		/**
		 * SKU's suggested selling price.
		 * Required
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * The profit percentage that is to be obtained from the sale of that SKU. If you decide to fill the `markup` item, you must also fill the `costPrice`. The `basePrice` will be automatically generated based on both values.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		markup: FormControl<number | null | undefined>,
	}
	export function CreateCreateUpdatePriceOrFixedPricePutBodyFormGroup() {
		return new FormGroup<CreateUpdatePriceOrFixedPricePutBodyFormProperties>({
			basePrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			costPrice: new FormControl<number | null | undefined>(undefined),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			markup: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdatePriceOrFixedPricePutBodyFixedPrices {

		/** Period of time when the fixed price will be applied to the SKU. */
		dateRange?: CreateUpdatePriceOrFixedPricePutBodyFixedPricesDateRange;

		/**
		 * SKU List Fixed Price.
		 * Type: double
		 */
		listPrice?: number | null;

		/**
		 * Minimum quantity of the SKU for the fixed price to be applied.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minQuantity: number;

		/**
		 * Trade policy name or ID that will have the fixed price configured.
		 * Required
		 */
		tradePolicyId: string;

		/**
		 * Fixed price value.
		 * Required
		 * Type: double
		 */
		value: number;
	}
	export interface CreateUpdatePriceOrFixedPricePutBodyFixedPricesFormProperties {

		/**
		 * SKU List Fixed Price.
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Minimum quantity of the SKU for the fixed price to be applied.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minQuantity: FormControl<number | null | undefined>,

		/**
		 * Trade policy name or ID that will have the fixed price configured.
		 * Required
		 */
		tradePolicyId: FormControl<string | null | undefined>,

		/**
		 * Fixed price value.
		 * Required
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateCreateUpdatePriceOrFixedPricePutBodyFixedPricesFormGroup() {
		return new FormGroup<CreateUpdatePriceOrFixedPricePutBodyFixedPricesFormProperties>({
			listPrice: new FormControl<number | null | undefined>(undefined),
			minQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			tradePolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdatePriceOrFixedPricePutBodyFixedPricesDateRange {

		/**
		 * Start date of the price.
		 * Required
		 */
		from: string;

		/**
		 * End date of the price.
		 * Required
		 */
		to: string;
	}
	export interface CreateUpdatePriceOrFixedPricePutBodyFixedPricesDateRangeFormProperties {

		/**
		 * Start date of the price.
		 * Required
		 */
		from: FormControl<string | null | undefined>,

		/**
		 * End date of the price.
		 * Required
		 */
		to: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdatePriceOrFixedPricePutBodyFixedPricesDateRangeFormGroup() {
		return new FormGroup<CreateUpdatePriceOrFixedPricePutBodyFixedPricesDateRangeFormProperties>({
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateorupdatefixedpricesonpricetableortradepolicyPostBody {

		/** Period of time when the fixed price will be applied to the SKU. */
		dateRange?: CreateorupdatefixedpricesonpricetableortradepolicyPostBodyDateRange;

		/**
		 * SKU List Fixed Price.
		 * Type: double
		 */
		listPrice?: number | null;

		/**
		 * The minimum SKU quantity for the fixed price to be applied.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minQuantity: number;

		/**
		 * Fixed price value.
		 * Required
		 * Type: double
		 */
		value: number;
	}
	export interface CreateorupdatefixedpricesonpricetableortradepolicyPostBodyFormProperties {

		/**
		 * SKU List Fixed Price.
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * The minimum SKU quantity for the fixed price to be applied.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minQuantity: FormControl<number | null | undefined>,

		/**
		 * Fixed price value.
		 * Required
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateCreateorupdatefixedpricesonpricetableortradepolicyPostBodyFormGroup() {
		return new FormGroup<CreateorupdatefixedpricesonpricetableortradepolicyPostBodyFormProperties>({
			listPrice: new FormControl<number | null | undefined>(undefined),
			minQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateorupdatefixedpricesonpricetableortradepolicyPostBodyDateRange {

		/**
		 * Start date of the price.
		 * Required
		 */
		from: string;

		/**
		 * End date of the price.
		 * Required
		 */
		to: string;
	}
	export interface CreateorupdatefixedpricesonpricetableortradepolicyPostBodyDateRangeFormProperties {

		/**
		 * Start date of the price.
		 * Required
		 */
		from: FormControl<string | null | undefined>,

		/**
		 * End date of the price.
		 * Required
		 */
		to: FormControl<string | null | undefined>,
	}
	export function CreateCreateorupdatefixedpricesonpricetableortradepolicyPostBodyDateRangeFormGroup() {
		return new FormGroup<CreateorupdatefixedpricesonpricetableortradepolicyPostBodyDateRangeFormProperties>({
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

