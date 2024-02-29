import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A complex type that describes the value of a monetary amount as represented by a global currency. */
	export interface Amount {

		/** The base currency applied to the value field to establish a monetary amount. The currency is represented as a 3-letter ISO4217 currency code. For example, the code for the Canadian Dollar is CAD. Default: The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/bas:CurrencyCodeEnum'>eBay API documentation</a> */
		currency?: string | null;

		/** The monetary amount in the specified currency. */
		value?: string | null;
	}

	/** A complex type that describes the value of a monetary amount as represented by a global currency. */
	export interface AmountFormProperties {

		/** The base currency applied to the value field to establish a monetary amount. The currency is represented as a 3-letter ISO4217 currency code. For example, the code for the Canadian Dollar is CAD. Default: The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/bas:CurrencyCodeEnum'>eBay API documentation</a> */
		currency: FormControl<string | null | undefined>,

		/** The monetary amount in the specified currency. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmountFormGroup() {
		return new FormGroup<AmountFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type contains the fields needed to create an offer to a buyer that is initiated by the seller. */
	export interface CreateOffersRequest {

		/** If set to true, the buyer is allowed to make a counter-offer to the seller's offer. Note: Currently, you must set this field to false; counter-offers are not supported in this release. Default: false */
		allowCounterOffer?: boolean | null;

		/** A seller-defined message related to the offer being made. This message is sent to the list of &quot;interested&quot; buyers. To increase the conversion rate of the offers a seller makes to buyers, eBay recommends you always add a customized message to your offers. Maximum length: 2,000 characters */
		message?: string | null;

		/** A complex type that specifies a period of time using a specified time-measurement unit. */
		offerDuration?: TimeDuration;

		/** An array of objects where each object contains the details of an offer and the ID of the listing on which the offer is being made. Note that the service does not currently support the creation of multiple offers with a single call to sendOfferToInterestedBuyer. With this, each request can target only one listing at a time and you must populate this array with a single element that contains the details of one offer. */
		offeredItems?: Array<OfferedItem>;
	}

	/** This complex type contains the fields needed to create an offer to a buyer that is initiated by the seller. */
	export interface CreateOffersRequestFormProperties {

		/** If set to true, the buyer is allowed to make a counter-offer to the seller's offer. Note: Currently, you must set this field to false; counter-offers are not supported in this release. Default: false */
		allowCounterOffer: FormControl<boolean | null | undefined>,

		/** A seller-defined message related to the offer being made. This message is sent to the list of &quot;interested&quot; buyers. To increase the conversion rate of the offers a seller makes to buyers, eBay recommends you always add a customized message to your offers. Maximum length: 2,000 characters */
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateOffersRequestFormGroup() {
		return new FormGroup<CreateOffersRequestFormProperties>({
			allowCounterOffer: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that specifies a period of time using a specified time-measurement unit. */
	export interface TimeDuration {

		/** A time-measurement unit that specifies a singular period of time. A span of time is defined when you apply the value specified in the value field to the value specified for unit. Time-measurement units can be YEAR, MONTH, DAY, and so on. See TimeDurationUnitEnum for a complete list of possible time-measurement units. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/bas:TimeDurationUnitEnum'>eBay API documentation</a> */
		unit?: string | null;

		/**
		 * An integer that represents an amount of time, as measured by the time-measurement unit specified in the unit field.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}

	/** A complex type that specifies a period of time using a specified time-measurement unit. */
	export interface TimeDurationFormProperties {

		/** A time-measurement unit that specifies a singular period of time. A span of time is defined when you apply the value specified in the value field to the value specified for unit. Time-measurement units can be YEAR, MONTH, DAY, and so on. See TimeDurationUnitEnum for a complete list of possible time-measurement units. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/bas:TimeDurationUnitEnum'>eBay API documentation</a> */
		unit: FormControl<string | null | undefined>,

		/**
		 * An integer that represents an amount of time, as measured by the time-measurement unit specified in the unit field.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateTimeDurationFormGroup() {
		return new FormGroup<TimeDurationFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type that defines the offer being made to an &quot;interested&quot; buyer. */
	export interface OfferedItem {

		/** This value denotes the percentage that the listing in the offer will be discounted from its original listed price. The seller can specify either the exact price of the discounted items with the price field or they can use this field to specify the percentage that the listing will be discounted, but not both. Minimum: 5 Required if you do not specify a price value. */
		discountPercentage?: string | null;

		/** This value is a unique eBay-assigned ID that identifies the listing to which the offer pertains. A listingId value is generated by eBay when you list an item with the Trading API. */
		listingId?: string | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		price?: Amount;

		/**
		 * This integer value indicates the number of items in the eBay listing for which the offer is being made. The offer being made by the seller is an &quot;all or nothing&quot; offer, meaning the buyer must purchase the indicated quantity of items in order to receive the discount on the transaction. Default: 1
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;
	}

	/** A complex type that defines the offer being made to an &quot;interested&quot; buyer. */
	export interface OfferedItemFormProperties {

		/** This value denotes the percentage that the listing in the offer will be discounted from its original listed price. The seller can specify either the exact price of the discounted items with the price field or they can use this field to specify the percentage that the listing will be discounted, but not both. Minimum: 5 Required if you do not specify a price value. */
		discountPercentage: FormControl<string | null | undefined>,

		/** This value is a unique eBay-assigned ID that identifies the listing to which the offer pertains. A listingId value is generated by eBay when you list an item with the Trading API. */
		listingId: FormControl<string | null | undefined>,

		/**
		 * This integer value indicates the number of items in the eBay listing for which the offer is being made. The offer being made by the seller is an &quot;all or nothing&quot; offer, meaning the buyer must purchase the indicated quantity of items in order to receive the discount on the transaction. Default: 1
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateOfferedItemFormGroup() {
		return new FormGroup<OfferedItemFormProperties>({
			discountPercentage: new FormControl<string | null | undefined>(undefined),
			listingId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A listing that is eligible for a seller-initiated offer to a buyer. Listings are identified by a listingId value that is generated and assigned by eBay when a seller lists an item using the Trading API. Note: The Negotiation API does not currently support listings that are managed with the Inventory API. */
	export interface EligibleItem {

		/** The unique eBay-assigned ID for an eBay listing. A listingId is assigned by eBay when a seller creates a listing with the Trading API. */
		listingId?: string | null;
	}

	/** A listing that is eligible for a seller-initiated offer to a buyer. Listings are identified by a listingId value that is generated and assigned by eBay when a seller lists an item using the Trading API. Note: The Negotiation API does not currently support listings that are managed with the Inventory API. */
	export interface EligibleItemFormProperties {

		/** The unique eBay-assigned ID for an eBay listing. A listingId is assigned by eBay when a seller creates a listing with the Trading API. */
		listingId: FormControl<string | null | undefined>,
	}
	export function CreateEligibleItemFormGroup() {
		return new FormGroup<EligibleItemFormProperties>({
			listingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the fields that can be returned in an error. */
	export interface Error {

		/** Identifies the type of erro. */
		category?: string | null;

		/** Name for the primary system where the error occurred. This is relevant for application errors. */
		domain?: string | null;

		/**
		 * A unique number to identify the error.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/**
		 * A unique number to identify the error.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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


	/** A complex type that defines an offer that a seller makes to eligible buyers. */
	export interface Offer {

		/** If set to true, the buyer is allowed to make a counter-offer to the seller's offer. */
		allowCounterOffer?: boolean | null;

		/** This complex type identifies an eBay user. */
		buyer?: User;

		/** The date and time when the seller's offer was created. The returned timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2018-08-20T07:09:00.000Z */
		creationDate?: string | null;

		/** The eBay UserName of the user (seller) who initiated the offer. */
		initiatedBy?: string | null;

		/** The date and time when the offer was last modified. The returned timestamp is formatted as an ISO 8601 string. */
		lastModifiedDate?: string | null;

		/** A seller-defined message related to the offer being made. This message is sent to the list of &quot;interested&quot; buyers along with the offer message from eBay. */
		message?: string | null;

		/** A complex type that specifies a period of time using a specified time-measurement unit. */
		offerDuration?: TimeDuration;

		/** A unique eBay-assigned identifier for the offer. */
		offerId?: string | null;

		/** The current state, or status, of an offer. Status states include PENDING, COUNTERED, ACCEPTED, and DECLINED. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/api:OfferStatusEnum'>eBay API documentation</a> */
		offerStatus?: string | null;

		/** The type of offer being made. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/api:OfferTypeEnum'>eBay API documentation</a> */
		offerType?: string | null;

		/** The list of items associated with the offer. Currently, the offer list is restricted to a single offer. */
		offeredItems?: Array<OfferedItem>;

		/** A unique, eBay-assigned ID for the revision of the offer. */
		revision?: string | null;
	}

	/** A complex type that defines an offer that a seller makes to eligible buyers. */
	export interface OfferFormProperties {

		/** If set to true, the buyer is allowed to make a counter-offer to the seller's offer. */
		allowCounterOffer: FormControl<boolean | null | undefined>,

		/** The date and time when the seller's offer was created. The returned timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2018-08-20T07:09:00.000Z */
		creationDate: FormControl<string | null | undefined>,

		/** The eBay UserName of the user (seller) who initiated the offer. */
		initiatedBy: FormControl<string | null | undefined>,

		/** The date and time when the offer was last modified. The returned timestamp is formatted as an ISO 8601 string. */
		lastModifiedDate: FormControl<string | null | undefined>,

		/** A seller-defined message related to the offer being made. This message is sent to the list of &quot;interested&quot; buyers along with the offer message from eBay. */
		message: FormControl<string | null | undefined>,

		/** A unique eBay-assigned identifier for the offer. */
		offerId: FormControl<string | null | undefined>,

		/** The current state, or status, of an offer. Status states include PENDING, COUNTERED, ACCEPTED, and DECLINED. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/api:OfferStatusEnum'>eBay API documentation</a> */
		offerStatus: FormControl<string | null | undefined>,

		/** The type of offer being made. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/api:OfferTypeEnum'>eBay API documentation</a> */
		offerType: FormControl<string | null | undefined>,

		/** A unique, eBay-assigned ID for the revision of the offer. */
		revision: FormControl<string | null | undefined>,
	}
	export function CreateOfferFormGroup() {
		return new FormGroup<OfferFormProperties>({
			allowCounterOffer: new FormControl<boolean | null | undefined>(undefined),
			creationDate: new FormControl<string | null | undefined>(undefined),
			initiatedBy: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			offerId: new FormControl<string | null | undefined>(undefined),
			offerStatus: new FormControl<string | null | undefined>(undefined),
			offerType: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type identifies an eBay user. */
	export interface User {

		/** The masked user name is a user name that has certain characters hidden for privacy of the user. */
		maskedUsername?: string | null;
	}

	/** This complex type identifies an eBay user. */
	export interface UserFormProperties {

		/** The masked user name is a user name that has certain characters hidden for privacy of the user. */
		maskedUsername: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			maskedUsername: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type defines a collection of listings that are eligible for an offer to a buyer. */
	export interface PagedEligibleItemCollection {

		/** A list of items that are eligible for a seller-initiated offer to a buyer. Each element in the list contains the listing ID of a listed item. These IDs represent the listings for which buyers have shown an interest. */
		eligibleItems?: Array<EligibleItem>;

		/** The URI of the current page of results from the result set. */
		href?: string | null;

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the limit query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. Max length: 2048 */
		next?: string | null;

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. Max length: 2048 */
		prev?: string | null;

		/**
		 * The total number of items retrieved in the result set. If no items match the search criteria, the server returns the HTTP status code 204 No Content.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** This complex type defines a collection of listings that are eligible for an offer to a buyer. */
	export interface PagedEligibleItemCollectionFormProperties {

		/** The URI of the current page of results from the result set. */
		href: FormControl<string | null | undefined>,

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the limit query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. Max length: 2048 */
		next: FormControl<string | null | undefined>,

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. Max length: 2048 */
		prev: FormControl<string | null | undefined>,

		/**
		 * The total number of items retrieved in the result set. If no items match the search criteria, the server returns the HTTP status code 204 No Content.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePagedEligibleItemCollectionFormGroup() {
		return new FormGroup<PagedEligibleItemCollectionFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response object returned from a SendOfferToInterestedBuyers request. */
	export interface SendOfferToInterestedBuyersCollectionResponse {

		/** The offers container returns a list of the offers sent to buyers who have shown an interest in listings included in the offer. */
		offers?: Array<Offer>;
	}

	/** The response object returned from a SendOfferToInterestedBuyers request. */
	export interface SendOfferToInterestedBuyersCollectionResponseFormProperties {
	}
	export function CreateSendOfferToInterestedBuyersCollectionResponseFormGroup() {
		return new FormGroup<SendOfferToInterestedBuyersCollectionResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This method evaluates a seller's current listings and returns the set of IDs that are eligible for a seller-initiated discount offer to a buyer. A listing ID is returned only when one or more buyers have shown an &quot;interest&quot; in the listing. If any buyers have shown interest in a listing, the seller can initiate a &quot;negotiation&quot; with them by calling sendOfferToInterestedBuyers, which sends all interested buyers a message that offers the listing at a discount. For details about how to create seller offers to buyers, see Sending offers to buyers.
		 * Get find_eligible_items
		 * @param {string} limit This query parameter specifies the maximum number of items to return from the result set on a page in the paginated response. Minimum: 1 &nbsp; &nbsp;Maximum: 200 Default: 10
		 * @param {string} offset This query parameter specifies the number of results to skip in the result set before returning the first result in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 results from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0
		 * @return {PagedEligibleItemCollection} Success
		 */
		FindEligibleItems(limit: string | null | undefined, offset: string | null | undefined): Observable<PagedEligibleItemCollection> {
			return this.http.get<PagedEligibleItemCollection>(this.baseUri + 'find_eligible_items?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}

		/**
		 * This method sends eligible buyers offers to purchase items in a listing at a discount. When a buyer has shown interest in a listing, they become &quot;eligible&quot; to receive a seller-initiated offer to purchase the item(s). Sellers use findEligibleItems to get the set of listings that have interested buyers. If a listing has interested buyers, sellers can use this method (sendOfferToInterestedBuyers) to send an offer to the buyers who are interested in the listing. The offer gives buyers the ability to purchase the associated listings at a discounted price. For details about how to create seller offers to buyers, see Sending offers to buyers.
		 * Post send_offer_to_interested_buyers
		 * @param {CreateOffersRequest} requestBody Send offer to eligible items request.
		 * @return {SendOfferToInterestedBuyersCollectionResponse} Success
		 */
		SendOfferToInterestedBuyers(requestBody: CreateOffersRequest): Observable<SendOfferToInterestedBuyersCollectionResponse> {
			return this.http.post<SendOfferToInterestedBuyersCollectionResponse>(this.baseUri + 'send_offer_to_interested_buyers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

