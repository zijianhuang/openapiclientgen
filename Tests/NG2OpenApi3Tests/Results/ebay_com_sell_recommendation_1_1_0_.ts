import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A complex type that contains recommendations and information on how to configure Promoted Listings ad campaigns. */
	export interface Ad {

		/** This field returns information that you can use to configure the bidPercentage field in a Promoted Listings campaign. Note: Currently, ITEM and TRENDING are the only supported bid percentage types. The ITEM suggested bid percentages are tailored to each of your items and are designed to help you stay competitive while finding an optimal balance between performance and cost. The recommendations are calculated based on a variety of factors that may include item attributes, seasonality, past performance, and current competition for each of your listings. The TRENDING suggested bid percentages are calculated by reviewing the category level average ad rates in the marketplace. Setting the bidPercentage of your ad campaign based on these rate recommendations will help the items in the campaign be competitive with other items in the marketplace by improving their chances of being displayed more often in the marketplace. */
		bidPercentages?: Array<BidPercentages>;

		/** An enum whose values describe whether or not eBay recommends you place the associated listing in a Promoted Listings ad campaign. IDs deemed RECOMMENDED by eBay are the listings with the highest potential of benefiting from being promoted. The recommendation calculation is based on marketplace trends, like buyer demand and the competition in the item&rsquo;s category. Note: A promoteWithAd value cannot be calculated for listings that are part of Promoted Listings campaigns. Because of this, if you call findListingRecommendations with a specific set of listing IDs, the promoteWithAd field is not returned for any of the listings that are involved in a promotion. However, as long as they are eligible, the trending bidPercentage is returned for all specified listings, even if they are part of an ad campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/recommendation/types/api:PromoteWithAd'>eBay API documentation</a> */
		promoteWithAd?: string | null;
	}

	/** A complex type that contains recommendations and information on how to configure Promoted Listings ad campaigns. */
	export interface AdFormProperties {

		/** An enum whose values describe whether or not eBay recommends you place the associated listing in a Promoted Listings ad campaign. IDs deemed RECOMMENDED by eBay are the listings with the highest potential of benefiting from being promoted. The recommendation calculation is based on marketplace trends, like buyer demand and the competition in the item&rsquo;s category. Note: A promoteWithAd value cannot be calculated for listings that are part of Promoted Listings campaigns. Because of this, if you call findListingRecommendations with a specific set of listing IDs, the promoteWithAd field is not returned for any of the listings that are involved in a promotion. However, as long as they are eligible, the trending bidPercentage is returned for all specified listings, even if they are part of an ad campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/recommendation/types/api:PromoteWithAd'>eBay API documentation</a> */
		promoteWithAd: FormControl<string | null | undefined>,
	}
	export function CreateAdFormGroup() {
		return new FormGroup<AdFormProperties>({
			promoteWithAd: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that returns data related to Promoted Listings bid percentages. */
	export interface BidPercentages {

		/** The basis by which the ad rate is calculated. Valid Values: ITEM and TRENDING For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/recommendation/types/api:Basis'>eBay API documentation</a> */
		basis?: string | null;

		/** The bid percentage data is a single precision value, as calculated by the associated basis. In Promoted listings ad campaigns, the bid percentage (also known as the ad rate) is a user-defined value that sets the level that eBay raises the visibility of the listing in the marketplace. It is also the rate that is used to calculate the Promoted Listings fee. Minimum value: 1.0 &nbsp; Maximum value: 100.0 */
		value?: string | null;
	}

	/** A complex type that returns data related to Promoted Listings bid percentages. */
	export interface BidPercentagesFormProperties {

		/** The basis by which the ad rate is calculated. Valid Values: ITEM and TRENDING For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/recommendation/types/api:Basis'>eBay API documentation</a> */
		basis: FormControl<string | null | undefined>,

		/** The bid percentage data is a single precision value, as calculated by the associated basis. In Promoted listings ad campaigns, the bid percentage (also known as the ad rate) is a user-defined value that sets the level that eBay raises the visibility of the listing in the marketplace. It is also the rate that is used to calculate the Promoted Listings fee. Minimum value: 1.0 &nbsp; Maximum value: 100.0 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateBidPercentagesFormGroup() {
		return new FormGroup<BidPercentagesFormProperties>({
			basis: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
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


	/** An list of listing ID values for which you want Promoted Listings ad configuration information. */
	export interface FindListingRecommendationRequest {

		/** A comma-separated list of listing IDs for which you want Promoted Listings ad configuration information. Currently, this method accepts only listingId values from the Trading API. Max: 500 listing IDs */
		listingIds?: Array<string>;
	}

	/** An list of listing ID values for which you want Promoted Listings ad configuration information. */
	export interface FindListingRecommendationRequestFormProperties {
	}
	export function CreateFindListingRecommendationRequestFormGroup() {
		return new FormGroup<FindListingRecommendationRequestFormProperties>({
		});

	}


	/** A complex type that contains the ID of an actively listed item and a set of related listing recommendations. The recommendations contain information the seller can use to optimize their listing configurations. */
	export interface ListingRecommendation {

		/** An ID that identifies the active listing associated with the eBay recommendations. */
		listingId?: string | null;

		/** A complex type that contains information about how a seller can improve their listing configurations. The AD object contains Promoted Listings recommendations and information, which the seller can use to improve buyer conversions. The response can also contain an optional message about the returned data. */
		marketing?: MarketingRecommendation;
	}

	/** A complex type that contains the ID of an actively listed item and a set of related listing recommendations. The recommendations contain information the seller can use to optimize their listing configurations. */
	export interface ListingRecommendationFormProperties {

		/** An ID that identifies the active listing associated with the eBay recommendations. */
		listingId: FormControl<string | null | undefined>,
	}
	export function CreateListingRecommendationFormGroup() {
		return new FormGroup<ListingRecommendationFormProperties>({
			listingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about how a seller can improve their listing configurations. The AD object contains Promoted Listings recommendations and information, which the seller can use to improve buyer conversions. The response can also contain an optional message about the returned data. */
	export interface MarketingRecommendation {

		/** A complex type that contains recommendations and information on how to configure Promoted Listings ad campaigns. */
		ad?: Ad;

		/** A message that can conditionally accompany the listing information. */
		message?: string | null;
	}

	/** A complex type that contains information about how a seller can improve their listing configurations. The AD object contains Promoted Listings recommendations and information, which the seller can use to improve buyer conversions. The response can also contain an optional message about the returned data. */
	export interface MarketingRecommendationFormProperties {

		/** A message that can conditionally accompany the listing information. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateMarketingRecommendationFormGroup() {
		return new FormGroup<MarketingRecommendationFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The high-level object used to return a set of Promoted Listings ad recommendations. */
	export interface PagedListingRecommendationCollection {

		/** The URI of the current page of results from the result set. */
		href?: string | null;

		/** The number of items returned on a single page from the result set. This value can be set in the request with the limit query parameter. */
		limit?: number | null;

		/** Returns a list of listingRecommendations, where each element in the list offers recommendations for the associated listingId. Which elements are returned depend on how you structure the request. For example, if you request recommendations for all of a sellers listings (by leaving the request payload empty), ad recommendations are returned only for those listings where promoteWithAd is set to RECOMMENDED. */
		listingRecommendations?: Array<ListingRecommendation>;

		/** The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. Max length: 2048 */
		next?: string | null;

		/** The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0. */
		offset?: number | null;

		/** The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. Max length: 2048 */
		prev?: string | null;

		/** The total number of items retrieved in the result set. If no items are found, this field is returned with a value of 0. */
		total?: number | null;
	}

	/** The high-level object used to return a set of Promoted Listings ad recommendations. */
	export interface PagedListingRecommendationCollectionFormProperties {

		/** The URI of the current page of results from the result set. */
		href: FormControl<string | null | undefined>,

		/** The number of items returned on a single page from the result set. This value can be set in the request with the limit query parameter. */
		limit: FormControl<number | null | undefined>,

		/** The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. Max length: 2048 */
		next: FormControl<string | null | undefined>,

		/** The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0. */
		offset: FormControl<number | null | undefined>,

		/** The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. Max length: 2048 */
		prev: FormControl<string | null | undefined>,

		/** The total number of items retrieved in the result set. If no items are found, this field is returned with a value of 0. */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePagedListingRecommendationCollectionFormGroup() {
		return new FormGroup<PagedListingRecommendationCollectionFormProperties>({
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
		 * The find method currently returns information for a single recommendation type (AD) which contains information that sellers can use to configure Promoted Listings ad campaigns. The response from this method includes an array of the seller's listing IDs, where each element in the array contains recommendations related to the associated listing ID. For details on how to use this method, see Using the Recommendation API to help configure campaigns. The AD recommendation type The AD type contains two sets of information: The promoteWithAd indicator The promoteWithAd response field indicates whether or not eBay recommends you place the associated listing in a Promoted Listings ad campaign. The returned value is set to either RECOMMENDED or UNDETERMINED, where RECOMMENDED identifies the listings that will benefit the most from having them included in an ad campaign. The bid percentage Also known as the &quot;ad rate,&quot; the bidPercentage field provides the current trending bid percentage of similarly promoted items in the marketplace. The ad rate is a user-specified value that indicates the level of promotion that eBay applies to the campaign across the marketplace. The value is also used to calculate the Promotion Listings fee, which is assessed to the seller if a Promoted Listings action results in the sale of an item. Configuring the request You can configure a request to review all of a seller's currently active listings, or just a subset of them. All active listings &ndash; If you leave the request body empty, the request targets all the items currently listed by the seller. Here, the response is filtered to contain only the items where promoteWithAd equals RECOMMENDED. In this case, eBay recommends that all the returned listings should be included in a Promoted Listings ad campaign. Selected listing IDs &ndash; If you populate the request body with a set of listingIds, the response contains data for all the specified listing IDs. In this scenario, the response provides you with information on listings where the promoteWithAd can be either RECOMMENDED or UNDETERMINED. The paginated response Because the response can contain many listing IDs, the findListingRecommendations method paginates the response set. You can control size of the returned pages, as well as an offset that dictates where to start the pagination, using query parameters in the request.
		 * Post find
		 * @param {string} filter Provide a list of key-value pairs to specify the criteria you want to use to filter the response. In the list, separate each filter key from its associated value with a colon (&quot;:&quot;). Currently, the only supported filter value is recommendationTypes and it supports only the (&quot;AD&quot;) type. Follow the recommendationTypes specifier with the filter type(s) enclosed in curly braces (&quot;{ }&quot;), and separate multiple types with commas. Example: filter=recommendationTypes:{AD} Default: recommendationTypes:{AD}
		 * @param {string} limit Use this query parameter to set the maximum number of ads to return on a page from the paginated response. Default: 10 Maximum: 500
		 * @param {string} offset Specifies the number of ads to skip in the result set before returning the first ad in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0
		 * @return {void} Success
		 */
		FindListingRecommendations(filter: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined, requestBody: FindListingRecommendationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'find?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

