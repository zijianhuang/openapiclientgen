import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This type defines the monetary value of an amount and the currency used. */
	export interface Amount {

		/** The three-letter <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank">ISO 4217</a> code representing the currency of the amount in the <b> value</b> field. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/marketing/types/bas:CurrencyCodeEnum'>eBay API documentation</a> */
		currency?: string | null;

		/** The monetary amount, in the currency specified by the <b> currency</b> field. */
		value?: string | null;
	}

	/** This type defines the monetary value of an amount and the currency used. */
	export interface AmountFormProperties {

		/** The three-letter <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank">ISO 4217</a> code representing the currency of the amount in the <b> value</b> field. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/marketing/types/bas:CurrencyCodeEnum'>eBay API documentation</a> */
		currency: FormControl<string | null | undefined>,

		/** The monetary amount, in the currency specified by the <b> currency</b> field. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmountFormGroup() {
		return new FormGroup<AmountFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for the best selling product information. */
	export interface BestSellingProductResponse {

		/** An array of containers for the products. */
		merchandisedProducts?: Array<MerchandisedProduct>;

		/** The container with all the warnings for the input request. */
		warnings?: Array<Error>;
	}

	/** The type that defines the fields for the best selling product information. */
	export interface BestSellingProductResponseFormProperties {
	}
	export function CreateBestSellingProductResponseFormGroup() {
		return new FormGroup<BestSellingProductResponseFormProperties>({
		});

	}


	/** The type that defines the fields for product information, including price, condition, ratings, etc. */
	export interface MerchandisedProduct {

		/** The average rating for the product based on eBay user ratings. */
		averageRating?: string | null;

		/** The eBay product identifier of a product from the eBay product catalog. You can use this value in the Browse API <b>search</b> method to retrieve items for this product. */
		epid?: string | null;

		/** Type the defines the details of an image, such as size and URL. Currently only <b> imageUrl</b> is getting populated. The <b> height</b> and <b> width</b> were added for future use. */
		image?: Image;

		/** An array of containers for the product market price details, such as condition and market price. */
		marketPriceDetails?: Array<MarketPriceDetail>;

		/** An array of containers for ratings of the product aspects, such as "Is it a good value". */
		ratingAspects?: Array<RatingAspect>;

		/**
		 * The total number of eBay users that rated the product.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ratingCount?: number | null;

		/**
		 * The total number of eBay users that wrote a review for the product.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reviewCount?: number | null;

		/** The title of the product. */
		title?: string | null;
	}

	/** The type that defines the fields for product information, including price, condition, ratings, etc. */
	export interface MerchandisedProductFormProperties {

		/** The average rating for the product based on eBay user ratings. */
		averageRating: FormControl<string | null | undefined>,

		/** The eBay product identifier of a product from the eBay product catalog. You can use this value in the Browse API <b>search</b> method to retrieve items for this product. */
		epid: FormControl<string | null | undefined>,

		/**
		 * The total number of eBay users that rated the product.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ratingCount: FormControl<number | null | undefined>,

		/**
		 * The total number of eBay users that wrote a review for the product.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reviewCount: FormControl<number | null | undefined>,

		/** The title of the product. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateMerchandisedProductFormGroup() {
		return new FormGroup<MerchandisedProductFormProperties>({
			averageRating: new FormControl<string | null | undefined>(undefined),
			epid: new FormControl<string | null | undefined>(undefined),
			ratingCount: new FormControl<number | null | undefined>(undefined),
			reviewCount: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Type the defines the details of an image, such as size and URL. Currently only <b> imageUrl</b> is getting populated. The <b> height</b> and <b> width</b> were added for future use. */
	export interface Image {

		/**
		 * <b> Reserved for future use. </b>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** The URL of the image. */
		imageUrl?: string | null;

		/**
		 * <b> Reserved for future use. </b>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** Type the defines the details of an image, such as size and URL. Currently only <b> imageUrl</b> is getting populated. The <b> height</b> and <b> width</b> were added for future use. */
	export interface ImageFormProperties {

		/**
		 * <b> Reserved for future use. </b>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** The URL of the image. */
		imageUrl: FormControl<string | null | undefined>,

		/**
		 * <b> Reserved for future use. </b>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for details about the product, such as condition and estimated start price. */
	export interface MarketPriceDetail {

		/** The name for the condition of the product. For example: NEW */
		conditionGroup?: string | null;

		/** An array of condition identifiers for the product. */
		conditionIds?: Array<string>;

		/** This type defines the monetary value of an amount and the currency used. */
		estimatedStartPrice?: Amount;
	}

	/** The type that defines the fields for details about the product, such as condition and estimated start price. */
	export interface MarketPriceDetailFormProperties {

		/** The name for the condition of the product. For example: NEW */
		conditionGroup: FormControl<string | null | undefined>,
	}
	export function CreateMarketPriceDetailFormGroup() {
		return new FormGroup<MarketPriceDetailFormProperties>({
			conditionGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields for the product aspect ratings. */
	export interface RatingAspect {

		/**
		 * The number of eBay users that rated the product on this aspect.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** The name of the rating aspect. Camping tent examples: Is it lightweight? or Is it easy to set up? */
		description?: string | null;

		/** The answer or value of the rating aspect. Camping tent examples: Lightweight or Easy to set up */
		name?: string | null;

		/** The container for the details of the aspect rating. The details show the aspect rating value, usually TRUE or FALSE and the user count and percentage. */
		ratingAspectDistributions?: Array<RatingAspectDistribution>;
	}

	/** The type that defines the fields for the product aspect ratings. */
	export interface RatingAspectFormProperties {

		/**
		 * The number of eBay users that rated the product on this aspect.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/** The name of the rating aspect. Camping tent examples: Is it lightweight? or Is it easy to set up? */
		description: FormControl<string | null | undefined>,

		/** The answer or value of the rating aspect. Camping tent examples: Lightweight or Easy to set up */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRatingAspectFormGroup() {
		return new FormGroup<RatingAspectFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the field for the aspect rating details, such as the aspect rating value, usually TRUE or FALSE and the user count and percentage. */
	export interface RatingAspectDistribution {

		/**
		 * The number of eBay users that choose this rating aspect value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** The percentage of the aspect rating value. <br /><br /> <b> ratingAspectDistributions.percentage</b> =  <b> ratingAspectDistributions.count</b> /  <b>ratingAspects.count</b> */
		percentage?: string | null;

		/** The rating aspect. For example: TRUE or FALSE */
		value?: string | null;
	}

	/** The type that defines the field for the aspect rating details, such as the aspect rating value, usually TRUE or FALSE and the user count and percentage. */
	export interface RatingAspectDistributionFormProperties {

		/**
		 * The number of eBay users that choose this rating aspect value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/** The percentage of the aspect rating value. <br /><br /> <b> ratingAspectDistributions.percentage</b> =  <b> ratingAspectDistributions.count</b> /  <b>ratingAspects.count</b> */
		percentage: FormControl<string | null | undefined>,

		/** The rating aspect. For example: TRUE or FALSE */
		value: FormControl<string | null | undefined>,
	}
	export function CreateRatingAspectDistributionFormGroup() {
		return new FormGroup<RatingAspectDistributionFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the fields that can be returned in an error. */
	export interface Error {

		/** This string value indicates the error category. There are three categories of errors: request errors, application errors, and system errors. */
		category?: string | null;

		/** The name of the primary system where the error occurred. This is relevant for application errors. */
		domain?: string | null;

		/**
		 * A unique code that identifies the particular error or warning that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorId?: number | null;

		/** An array of reference IDs that identify the specific request elements most closely associated to the error or warning, if any. */
		inputRefIds?: Array<string>;

		/** A detailed description of the condition that caused the error or warning, and information on what to do to correct the problem. */
		longMessage?: string | null;

		/** A description of the condition that caused the error or warning. */
		message?: string | null;

		/** An array of reference IDs that identify the specific response elements most closely associated to the error or warning, if any. */
		outputRefIds?: Array<string>;

		/** An array of warning and error messages that return one or more variables contextual information about the error or warning. This is often the field or value that triggered the error or warning. */
		parameters?: Array<ErrorParameter>;

		/** The name of the subdomain in which the error or warning occurred. */
		subdomain?: string | null;
	}

	/** The type that defines the fields that can be returned in an error. */
	export interface ErrorFormProperties {

		/** This string value indicates the error category. There are three categories of errors: request errors, application errors, and system errors. */
		category: FormControl<string | null | undefined>,

		/** The name of the primary system where the error occurred. This is relevant for application errors. */
		domain: FormControl<string | null | undefined>,

		/**
		 * A unique code that identifies the particular error or warning that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorId: FormControl<number | null | undefined>,

		/** A detailed description of the condition that caused the error or warning, and information on what to do to correct the problem. */
		longMessage: FormControl<string | null | undefined>,

		/** A description of the condition that caused the error or warning. */
		message: FormControl<string | null | undefined>,

		/** The name of the subdomain in which the error or warning occurred. */
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


	/** An array of name/value pairs that provide details regarding the error. */
	export interface ErrorParameter {

		/** This is the name of input field that caused an issue with the call request. */
		name?: string | null;

		/** This is the actual value that was passed in for the element specified in the <b> name</b>  field. */
		value?: string | null;
	}

	/** An array of name/value pairs that provide details regarding the error. */
	export interface ErrorParameterFormProperties {

		/** This is the name of input field that caused an issue with the call request. */
		name: FormControl<string | null | undefined>,

		/** This is the actual value that was passed in for the element specified in the <b> name</b>  field. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorParameterFormGroup() {
		return new FormGroup<ErrorParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This method returns an array of products based on the category and metric specified. This includes details of the product, such as the eBay product ID (EPID), title, and user reviews and ratings for the product. You can use the <code>epid</code> returned by this method in the Browse API <b>search</b> method to retrieve items for this product. <h3><b>Restrictions </b></h3> <ul><li>To test <b> getMerchandisedProducts</b> in Sandbox, you must use category ID 9355 and the response will be mock data.  </li>   <li>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/marketing/overview.html#API">API Restrictions</a>.</li>  </ul>
		 * Get merchandised_product
		 * @param {string} aspect_filter The aspect name/value pairs used to further refine product results. <br /><br /> For example: <br />&nbsp;&nbsp;&nbsp;<code>/buy/marketing/v1_beta/merchandised_product?category_id=31388&metric_name=BEST_SELLING&aspect_filter=Brand:Canon</code>  <br /><br />You can use the Browse API <b>search</b> method with the <code>fieldgroups=ASPECT_REFINEMENTS</code> field to return the aspects of a product. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/buy/marketing/types/gct:MarketingAspectFilter
		 * @param {string} category_id This query parameter limits the products returned to a specific eBay category.  <br /> <br />The list of eBay category IDs is not published and category IDs are not all the same across all the eBay maketplace. You can use the following techniques to find a category by site: <ul> <li>Use the <a href="https://pages.ebay.com/sellerinformation/news/categorychanges.html" target="_blank">Category Changes page</a>.</li> <li>Use the Taxonomy API. For details see <a href="/api-docs/buy/buy-categories.html">Get Categories for Buy APIs</a>. </li>  <li>Use the Browse API and submit the following method to get the <b> dominantCategoryId</b> for an item. <br /><code>/buy/browse/v1/item_summary/search?q=<em>keyword</em>&fieldgroups=ASPECT_REFINEMENTS  </code></li></ul>  <b> Maximum: </b> 1 <br /> <b> Required: </b> 1 
		 * @param {string} limit This value specifies the maximum number of products to return in a result set. <br /> <br /><span class="tablenote"> <b>Note:</b> Maximum value means the method will return up <em>to</em> that many products per set, but it can be less than this value. If the number of products found is less than this value, the method will return all of the products matching the criteria.</span>  <br /><br /><b> Default:</b> 8<br /><b> Maximum: </b>100
		 * @param {string} metric_name This value filters the result set by the specified metric. Only products in this metric are returned. Currently, the only metric supported is <code> BEST_SELLING</code>. <br /><br /><b> Default: </b>BEST_SELLING <br /> <b> Maximum: </b> 1 <br /> <b> Required: </b> 1
		 * @return {void} OK
		 */
		GetMerchandisedProducts(aspect_filter: string | null | undefined, category_id: string, limit: string | null | undefined, metric_name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'merchandised_product?aspect_filter=' + (aspect_filter == null ? '' : encodeURIComponent(aspect_filter)) + '&category_id=' + (category_id == null ? '' : encodeURIComponent(category_id)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&metric_name=' + (metric_name == null ? '' : encodeURIComponent(metric_name)), { observe: 'response', responseType: 'text' });
		}
	}

}

