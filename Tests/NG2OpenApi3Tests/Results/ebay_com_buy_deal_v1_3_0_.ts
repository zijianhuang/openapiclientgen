import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The currency and value of the item. */
	export interface Amount {

		/** The three-letter ISO 4217 code representing the currency of the amount in the value field. Default: The currency of the authenticated user's country. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/bas:CurrencyCodeEnum'>eBay API documentation</a> */
		currency?: string | null;

		/** The monetary value, in the currency specified by the currency field. */
		value?: string | null;
	}

	/** The currency and value of the item. */
	export interface AmountFormProperties {

		/** The three-letter ISO 4217 code representing the currency of the amount in the value field. Default: The currency of the authenticated user's country. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/bas:CurrencyCodeEnum'>eBay API documentation</a> */
		currency: FormControl<string | null | undefined>,

		/** The monetary value, in the currency specified by the currency field. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmountFormGroup() {
		return new FormGroup<AmountFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details for the coupon available for the item. */
	export interface Coupon {

		/** The coupon code. */
		redemptionCode?: string | null;

		/** The terms for the event, provided in a full-text description and summary. */
		terms?: Terms;
	}

	/** The details for the coupon available for the item. */
	export interface CouponFormProperties {

		/** The coupon code. */
		redemptionCode: FormControl<string | null | undefined>,
	}
	export function CreateCouponFormGroup() {
		return new FormGroup<CouponFormProperties>({
			redemptionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The terms for the event, provided in a full-text description and summary. */
	export interface Terms {

		/** A full-text description of the terms. */
		fullText?: string | null;

		/** A summarized description of the terms. */
		summary?: string | null;
	}

	/** The terms for the event, provided in a full-text description and summary. */
	export interface TermsFormProperties {

		/** A full-text description of the terms. */
		fullText: FormControl<string | null | undefined>,

		/** A summarized description of the terms. */
		summary: FormControl<string | null | undefined>,
	}
	export function CreateTermsFormGroup() {
		return new FormGroup<TermsFormProperties>({
			fullText: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The detailed data returned for the deal item. */
	export interface DealItem {

		/** The additional images for the deal item. */
		additionalImages?: Array<Image>;

		/** The IDs of the ancestors for the primary category. */
		categoryAncestorIds?: Array<string>;

		/** The ID of the leaf category for the deal item. A leaf category is the lowest level in a category and has no children. */
		categoryId?: string | null;

		/** A boolean value specifying whether the listing has commission. */
		commissionable?: boolean | null;

		/** The deal associated with the item with affiliate attribution. */
		dealAffiliateWebUrl?: string | null;

		/** The date after which the deal ends. */
		dealEndDate?: string | null;

		/** The date on which the deal starts. */
		dealStartDate?: string | null;

		/** The web URL for the deal associated with the item. */
		dealWebUrl?: string | null;

		/** A string value specifying the Energy Efficiency class. */
		energyEfficiencyClass?: string | null;

		/** The type that defines the details of an image, such as size and URL. */
		image?: Image;

		/** The item web URL with affiliate attribution. */
		itemAffiliateWebUrl?: string | null;

		/** The unique identifier for the deal item group. This is the parent item ID for the seller-defined variations. Note: This field is returned for multiple-SKU items. */
		itemGroupId?: string | null;

		/** An enumeration value that indicates the type of item group. An item group contains items that have various aspect differences, such as color, size, or storage capacity. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:ItemGroupTypeEnum'>eBay API documentation</a> */
		itemGroupType?: string | null;

		/** The unique identifier for the deal item. Note: This field is only returned for single-SKU items. */
		itemId?: string | null;

		/** The web URL for the deal item. */
		itemWebUrl?: string | null;

		/** The legacy item ID associated with the deal item. */
		legacyItemId?: string | null;

		/** A type that describes the seller discount. */
		marketingPrice?: MarketingPrice;

		/** The currency and value of the item. */
		price?: Amount;

		/** A list of programs applicable to the item. */
		qualifiedPrograms?: Array<string>;

		/** The cost required to ship the deal item. */
		shippingOptions?: Array<ShippingOption>;

		/** The title of the deal item. */
		title?: string | null;

		/** The currency and value of the item. */
		unitPrice?: Amount;

		/** The designation used to specify the quantity of the deal item, such as size, weight, volume, and count. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot; */
		unitPricingMeasure?: string | null;
	}

	/** The detailed data returned for the deal item. */
	export interface DealItemFormProperties {

		/** The ID of the leaf category for the deal item. A leaf category is the lowest level in a category and has no children. */
		categoryId: FormControl<string | null | undefined>,

		/** A boolean value specifying whether the listing has commission. */
		commissionable: FormControl<boolean | null | undefined>,

		/** The deal associated with the item with affiliate attribution. */
		dealAffiliateWebUrl: FormControl<string | null | undefined>,

		/** The date after which the deal ends. */
		dealEndDate: FormControl<string | null | undefined>,

		/** The date on which the deal starts. */
		dealStartDate: FormControl<string | null | undefined>,

		/** The web URL for the deal associated with the item. */
		dealWebUrl: FormControl<string | null | undefined>,

		/** A string value specifying the Energy Efficiency class. */
		energyEfficiencyClass: FormControl<string | null | undefined>,

		/** The item web URL with affiliate attribution. */
		itemAffiliateWebUrl: FormControl<string | null | undefined>,

		/** The unique identifier for the deal item group. This is the parent item ID for the seller-defined variations. Note: This field is returned for multiple-SKU items. */
		itemGroupId: FormControl<string | null | undefined>,

		/** An enumeration value that indicates the type of item group. An item group contains items that have various aspect differences, such as color, size, or storage capacity. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:ItemGroupTypeEnum'>eBay API documentation</a> */
		itemGroupType: FormControl<string | null | undefined>,

		/** The unique identifier for the deal item. Note: This field is only returned for single-SKU items. */
		itemId: FormControl<string | null | undefined>,

		/** The web URL for the deal item. */
		itemWebUrl: FormControl<string | null | undefined>,

		/** The legacy item ID associated with the deal item. */
		legacyItemId: FormControl<string | null | undefined>,

		/** The title of the deal item. */
		title: FormControl<string | null | undefined>,

		/** The designation used to specify the quantity of the deal item, such as size, weight, volume, and count. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot; */
		unitPricingMeasure: FormControl<string | null | undefined>,
	}
	export function CreateDealItemFormGroup() {
		return new FormGroup<DealItemFormProperties>({
			categoryId: new FormControl<string | null | undefined>(undefined),
			commissionable: new FormControl<boolean | null | undefined>(undefined),
			dealAffiliateWebUrl: new FormControl<string | null | undefined>(undefined),
			dealEndDate: new FormControl<string | null | undefined>(undefined),
			dealStartDate: new FormControl<string | null | undefined>(undefined),
			dealWebUrl: new FormControl<string | null | undefined>(undefined),
			energyEfficiencyClass: new FormControl<string | null | undefined>(undefined),
			itemAffiliateWebUrl: new FormControl<string | null | undefined>(undefined),
			itemGroupId: new FormControl<string | null | undefined>(undefined),
			itemGroupType: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			itemWebUrl: new FormControl<string | null | undefined>(undefined),
			legacyItemId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			unitPricingMeasure: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the details of an image, such as size and URL. */
	export interface Image {

		/** The height of the image. */
		height?: string | null;

		/** The relative path to the image location. */
		imageUrl?: string | null;

		/** The text associated with the image. */
		text?: string | null;

		/** The width of the image. */
		width?: string | null;
	}

	/** The type that defines the details of an image, such as size and URL. */
	export interface ImageFormProperties {

		/** The height of the image. */
		height: FormControl<string | null | undefined>,

		/** The relative path to the image location. */
		imageUrl: FormControl<string | null | undefined>,

		/** The text associated with the image. */
		text: FormControl<string | null | undefined>,

		/** The width of the image. */
		width: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			height: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that describes the seller discount. */
	export interface MarketingPrice {

		/** The currency and value of the item. */
		discountAmount?: Amount;

		/** The percentage of the seller discount based on the value returned in the originalPrice field. */
		discountPercentage?: string | null;

		/** The currency and value of the item. */
		originalPrice?: Amount;

		/** The pricing treatment (discount) that was applied to the price of the item. Note: The pricing treatment affects how and where the discounted price can be displayed. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:PriceTreatmentEnum'>eBay API documentation</a> */
		priceTreatment?: string | null;
	}

	/** A type that describes the seller discount. */
	export interface MarketingPriceFormProperties {

		/** The percentage of the seller discount based on the value returned in the originalPrice field. */
		discountPercentage: FormControl<string | null | undefined>,

		/** The pricing treatment (discount) that was applied to the price of the item. Note: The pricing treatment affects how and where the discounted price can be displayed. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:PriceTreatmentEnum'>eBay API documentation</a> */
		priceTreatment: FormControl<string | null | undefined>,
	}
	export function CreateMarketingPriceFormGroup() {
		return new FormGroup<MarketingPriceFormProperties>({
			discountPercentage: new FormControl<string | null | undefined>(undefined),
			priceTreatment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details provided for the shipping provider, such as shipping cost and type. */
	export interface ShippingOption {

		/** The currency and value of the item. */
		shippingCost?: Amount;

		/** The class of the shipping cost. Valid Values: FIXED or CALCULATED Code so that your app gracefully handles any future changes to this list. */
		shippingCostType?: string | null;
	}

	/** The details provided for the shipping provider, such as shipping cost and type. */
	export interface ShippingOptionFormProperties {

		/** The class of the shipping cost. Valid Values: FIXED or CALCULATED Code so that your app gracefully handles any future changes to this list. */
		shippingCostType: FormControl<string | null | undefined>,
	}
	export function CreateShippingOptionFormGroup() {
		return new FormGroup<ShippingOptionFormProperties>({
			shippingCostType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result set for the deal item search. */
	export interface DealItemSearchResponse {

		/** A list of deal items that match the search criteria. */
		dealItems?: Array<DealItem>;

		/** The relative path to the current set of results. */
		href?: string | null;

		/** The maximum number of items, from the current result set, returned on a single page. Default: 20 */
		limit?: number | null;

		/** The relative path to the next set of results. */
		next?: string | null;

		/** The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0 */
		offset?: number | null;

		/** The relative path to the previous set of results. */
		prev?: string | null;

		/** The total number of matches for the search criteria. */
		total?: number | null;
	}

	/** The result set for the deal item search. */
	export interface DealItemSearchResponseFormProperties {

		/** The relative path to the current set of results. */
		href: FormControl<string | null | undefined>,

		/** The maximum number of items, from the current result set, returned on a single page. Default: 20 */
		limit: FormControl<number | null | undefined>,

		/** The relative path to the next set of results. */
		next: FormControl<string | null | undefined>,

		/** The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0 */
		offset: FormControl<number | null | undefined>,

		/** The relative path to the previous set of results. */
		prev: FormControl<string | null | undefined>,

		/** The total number of matches for the search criteria. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateDealItemSearchResponseFormGroup() {
		return new FormGroup<DealItemSearchResponseFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type defines the fields that can be returned in an error. */
	export interface Error {

		/** Identifies the type of erro. */
		category?: string | null;

		/** Name for the primary system where the error occurred. This is relevant for application errors. */
		domain?: string | null;

		/** A unique number to identify the error. */
		errorId?: number | null;

		/** An array of request elements most closely associated to the error. */
		inputRefIds?: Array<string>;

		/** A more detailed explanation of the error. */
		longMessage?: string | null;

		/** Information on how to correct the problem, in the end user's terms and language where applicable. */
		message?: string | null;

		/** An array of request elements most closely associated to the error. */
		outputRefIds?: Array<string>;

		/** An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned. */
		parameters?: Array<ErrorParameter>;

		/** Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc. */
		subdomain?: string | null;
	}

	/** This type defines the fields that can be returned in an error. */
	export interface ErrorFormProperties {

		/** Identifies the type of erro. */
		category: FormControl<string | null | undefined>,

		/** Name for the primary system where the error occurred. This is relevant for application errors. */
		domain: FormControl<string | null | undefined>,

		/** A unique number to identify the error. */
		errorId: FormControl<number | null | undefined>,

		/** A more detailed explanation of the error. */
		longMessage: FormControl<string | null | undefined>,

		/** Information on how to correct the problem, in the end user's terms and language where applicable. */
		message: FormControl<string | null | undefined>,

		/** Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc. */
		subdomain: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			errorId: new FormControl<number | null | undefined>(undefined),
			longMessage: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			subdomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorParameter {

		/** The object of the error. */
		name?: string | null;

		/** The value of the object. */
		value?: string | null;
	}
	export interface ErrorParameterFormProperties {

		/** The object of the error. */
		name: FormControl<string | null | undefined>,

		/** The value of the object. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorParameterFormGroup() {
		return new FormGroup<ErrorParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result set for the event search. */
	export interface Event {

		/** A list of coupons associated with the event. */
		applicableCoupons?: Array<Coupon>;

		/** The event description. */
		description?: string | null;

		/** The end date for the event. */
		endDate?: string | null;

		/** The URL of the View Event page for the event, which includes the affiliate tracking ID. */
		eventAffiliateWebUrl?: string | null;

		/** The unique identifier for the event. */
		eventId?: string | null;

		/** The web URL for the event. */
		eventWebUrl?: string | null;

		/** The images for the event. */
		images?: Array<Image>;

		/** The start date for the event. */
		startDate?: string | null;

		/** The terms for the event, provided in a full-text description and summary. */
		terms?: Terms;

		/** The title of the event. */
		title?: string | null;
	}

	/** The result set for the event search. */
	export interface EventFormProperties {

		/** The event description. */
		description: FormControl<string | null | undefined>,

		/** The end date for the event. */
		endDate: FormControl<string | null | undefined>,

		/** The URL of the View Event page for the event, which includes the affiliate tracking ID. */
		eventAffiliateWebUrl: FormControl<string | null | undefined>,

		/** The unique identifier for the event. */
		eventId: FormControl<string | null | undefined>,

		/** The web URL for the event. */
		eventWebUrl: FormControl<string | null | undefined>,

		/** The start date for the event. */
		startDate: FormControl<string | null | undefined>,

		/** The title of the event. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			eventAffiliateWebUrl: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			eventWebUrl: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The detailed data returned for the event item. */
	export interface EventItem {

		/** The additional images for the event item. */
		additionalImages?: Array<Image>;

		/** The IDs of the ancestors for the primary category. */
		categoryAncestorIds?: Array<string>;

		/** The ID of the leaf category for the event item. A leaf category is the lowest level in a category and has no children. */
		categoryId?: string | null;

		/** A string value specifying the Energy Efficiency class. */
		energyEfficiencyClass?: string | null;

		/** The unique event identifier associated with the item. */
		eventId?: string | null;

		/** The type that defines the details of an image, such as size and URL. */
		image?: Image;

		/** The item web URL with affiliate attribution. */
		itemAffiliateWebUrl?: string | null;

		/** The unique identifier for the event item group. This is the parent item ID for the seller-defined variations. Note: This field is returned for multiple-SKU items. */
		itemGroupId?: string | null;

		/** An enumeration value that indicates the type of item group. An item group contains items that have various aspect differences, such as color, size, or storage capacity. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:ItemGroupTypeEnum'>eBay API documentation</a> */
		itemGroupType?: string | null;

		/** The unique identifier for the event item. Note: This field is only returned for single-SKU items. */
		itemId?: string | null;

		/** The web URL for the event item. */
		itemWebUrl?: string | null;

		/** The legacy item ID associated with the event item. */
		legacyItemId?: string | null;

		/** A type that describes the seller discount. */
		marketingPrice?: MarketingPrice;

		/** The currency and value of the item. */
		price?: Amount;

		/** A list of programs applicable to the event item. */
		qualifiedPrograms?: Array<string>;

		/** The cost required to ship the event item. */
		shippingOptions?: Array<ShippingOption>;

		/** The title of the event item. */
		title?: string | null;

		/** The currency and value of the item. */
		unitPrice?: Amount;

		/** The designation used to specify the quantity of the event item, such as size, weight, volume, and count. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot; */
		unitPricingMeasure?: string | null;
	}

	/** The detailed data returned for the event item. */
	export interface EventItemFormProperties {

		/** The ID of the leaf category for the event item. A leaf category is the lowest level in a category and has no children. */
		categoryId: FormControl<string | null | undefined>,

		/** A string value specifying the Energy Efficiency class. */
		energyEfficiencyClass: FormControl<string | null | undefined>,

		/** The unique event identifier associated with the item. */
		eventId: FormControl<string | null | undefined>,

		/** The item web URL with affiliate attribution. */
		itemAffiliateWebUrl: FormControl<string | null | undefined>,

		/** The unique identifier for the event item group. This is the parent item ID for the seller-defined variations. Note: This field is returned for multiple-SKU items. */
		itemGroupId: FormControl<string | null | undefined>,

		/** An enumeration value that indicates the type of item group. An item group contains items that have various aspect differences, such as color, size, or storage capacity. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:ItemGroupTypeEnum'>eBay API documentation</a> */
		itemGroupType: FormControl<string | null | undefined>,

		/** The unique identifier for the event item. Note: This field is only returned for single-SKU items. */
		itemId: FormControl<string | null | undefined>,

		/** The web URL for the event item. */
		itemWebUrl: FormControl<string | null | undefined>,

		/** The legacy item ID associated with the event item. */
		legacyItemId: FormControl<string | null | undefined>,

		/** The title of the event item. */
		title: FormControl<string | null | undefined>,

		/** The designation used to specify the quantity of the event item, such as size, weight, volume, and count. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot; */
		unitPricingMeasure: FormControl<string | null | undefined>,
	}
	export function CreateEventItemFormGroup() {
		return new FormGroup<EventItemFormProperties>({
			categoryId: new FormControl<string | null | undefined>(undefined),
			energyEfficiencyClass: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			itemAffiliateWebUrl: new FormControl<string | null | undefined>(undefined),
			itemGroupId: new FormControl<string | null | undefined>(undefined),
			itemGroupType: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			itemWebUrl: new FormControl<string | null | undefined>(undefined),
			legacyItemId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			unitPricingMeasure: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result set for the event item search. */
	export interface EventItemSearchResponse {

		/** A list of event items that match the search criteria. */
		eventItems?: Array<EventItem>;

		/** The relative path to the current set of results. */
		href?: string | null;

		/** The maximum number of items, from the current result set, returned on a single page. Default: 20 */
		limit?: number | null;

		/** The relative path to the next set of results. */
		next?: string | null;

		/** The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0 */
		offset?: number | null;

		/** The relative path to the previous set of results. */
		prev?: string | null;

		/** The total number of matches for the specified search criteria. */
		total?: number | null;
	}

	/** The result set for the event item search. */
	export interface EventItemSearchResponseFormProperties {

		/** The relative path to the current set of results. */
		href: FormControl<string | null | undefined>,

		/** The maximum number of items, from the current result set, returned on a single page. Default: 20 */
		limit: FormControl<number | null | undefined>,

		/** The relative path to the next set of results. */
		next: FormControl<string | null | undefined>,

		/** The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0 */
		offset: FormControl<number | null | undefined>,

		/** The relative path to the previous set of results. */
		prev: FormControl<string | null | undefined>,

		/** The total number of matches for the specified search criteria. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateEventItemSearchResponseFormGroup() {
		return new FormGroup<EventItemSearchResponseFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The result set for the specified event search criteria. */
	export interface EventSearchResponse {

		/** A list of results that match the search criteria. */
		events?: Array<Event>;

		/** The relative path to the current set of results. */
		href?: string | null;

		/** The maximum number of items, from the current result set, returned on a single page. Default: 20 */
		limit?: number | null;

		/** The relative path to the next set of results. */
		next?: string | null;

		/** The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0 */
		offset?: number | null;

		/** The relative path to the previous set of results. */
		prev?: string | null;

		/** The total number of matches for the specified search criteria. */
		total?: number | null;
	}

	/** The result set for the specified event search criteria. */
	export interface EventSearchResponseFormProperties {

		/** The relative path to the current set of results. */
		href: FormControl<string | null | undefined>,

		/** The maximum number of items, from the current result set, returned on a single page. Default: 20 */
		limit: FormControl<number | null | undefined>,

		/** The relative path to the next set of results. */
		next: FormControl<string | null | undefined>,

		/** The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0 */
		offset: FormControl<number | null | undefined>,

		/** The relative path to the previous set of results. */
		prev: FormControl<string | null | undefined>,

		/** The total number of matches for the specified search criteria. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateEventSearchResponseFormGroup() {
		return new FormGroup<EventSearchResponseFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This method retrieves a paginated set of deal items. The result set contains all deal items associated with the specified search criteria and marketplace ID. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.
		 * Get deal_item
		 * @param {string} category_ids The unique identifier of the eBay category for the search.
		 * @param {string} commissionable A filter for commissionable deals. Restriction: This filter is currently only supported for the US marketplace.
		 * @param {string} delivery_country A filter for items that can be shipped to the specified country.
		 * @param {string} limit The maximum number of items, from the current result set, returned on a single page.
		 * @param {string} offset The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0
		 * @return {DealItemSearchResponse} OK
		 */
		GetDealItems(category_ids: string | null | undefined, commissionable: string | null | undefined, delivery_country: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined): Observable<DealItemSearchResponse> {
			return this.http.get<DealItemSearchResponse>(this.baseUri + 'deal_item?category_ids=' + (category_ids == null ? '' : encodeURIComponent(category_ids)) + '&commissionable=' + (commissionable == null ? '' : encodeURIComponent(commissionable)) + '&delivery_country=' + (delivery_country == null ? '' : encodeURIComponent(delivery_country)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}

		/**
		 * This method returns paginated results containing all eBay events for the specified marketplace. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.
		 * Get event
		 * @param {string} limit The maximum number of items, from the current result set, returned on a single page. Default: 20 Maximum Value: 100
		 * @param {string} offset The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0
		 * @return {EventSearchResponse} OK
		 */
		GetEvents(limit: string | null | undefined, offset: string | null | undefined): Observable<EventSearchResponse> {
			return this.http.get<EventSearchResponse>(this.baseUri + 'event?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}

		/**
		 * This method retrieves the details for an eBay event. The result set contains detailed information associated with the specified event ID, such as applicable coupons, start and end dates, and event terms. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.
		 * Get event/{event_id}
		 * @param {string} event_id The unique identifier for the eBay event.
		 * @return {Event} OK
		 */
		GetEvent(event_id: string): Observable<Event> {
			return this.http.get<Event>(this.baseUri + 'event/' + (event_id == null ? '' : encodeURIComponent(event_id)), {});
		}

		/**
		 * This method returns a paginated set of event items. The result set contains all event items associated with the specified search criteria and marketplace ID. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.
		 * Get event_item
		 * @param {string} category_ids The unique identifier of the eBay category for the search. Maximum Value: 1
		 * @param {string} delivery_country A filter for items that can be shipped to the specified country.
		 * @param {string} event_ids The unique identifiers for the eBay events. Maximum Value: 1
		 * @param {string} limit The maximum number of items, from the current result set, returned on a single page. Default: 20
		 * @param {string} offset The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0
		 * @return {EventItemSearchResponse} OK
		 */
		GetEventItems(category_ids: string | null | undefined, delivery_country: string | null | undefined, event_ids: string, limit: string | null | undefined, offset: string | null | undefined): Observable<EventItemSearchResponse> {
			return this.http.get<EventItemSearchResponse>(this.baseUri + 'event_item?category_ids=' + (category_ids == null ? '' : encodeURIComponent(category_ids)) + '&delivery_country=' + (delivery_country == null ? '' : encodeURIComponent(delivery_country)) + '&event_ids=' + (event_ids == null ? '' : encodeURIComponent(event_ids)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}
	}

}

