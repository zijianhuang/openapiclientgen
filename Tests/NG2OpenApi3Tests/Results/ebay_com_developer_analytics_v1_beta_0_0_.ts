import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/** This complex type defines a "rate" as the quota of calls that can be made to a resource per time window, the remaining number of calls before the threshold is met, the amount of time until the time window resets, and the length of the time window (in seconds). */
	export interface Rate {

		/**
		 * The maximum number of requests that can be made to this resource during a set time period. The length of time to which the limit is applied is defined by the associated <b>timeWindow</b> value.  <br><br>This value is often referred to as the "call quota" for the resource.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/**
		 * The remaining number of requests that can be made to this resource before the associated time window resets.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		remaining?: number | null;

		/** The data and time the time window and accumulated calls for this resource reset.  <br><br>When the <b>reset</b> time is reached, the <b>remaining</b> value is reset to the value of <b>limit</b>, and this <b>reset</b> value is reset to the current time plus the number of seconds defined by the <b>timeWindow</b> value. <br><br>The time stamp is formatted as an <a href="http://www.iso.org/iso/home/standards/iso8601.htm " target="_blank">ISO 8601</a> string, which is based on the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2018-08-04T07:09:00.000Z</code> */
		reset?: string | null;

		/**
		 * A period of time, expressed in seconds. The call quota for a resource is applied to the period of time defined by the value of this field.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeWindow?: number | null;
	}

	/** This complex type defines a "rate" as the quota of calls that can be made to a resource per time window, the remaining number of calls before the threshold is met, the amount of time until the time window resets, and the length of the time window (in seconds). */
	export interface RateFormProperties {

		/**
		 * The maximum number of requests that can be made to this resource during a set time period. The length of time to which the limit is applied is defined by the associated <b>timeWindow</b> value.  <br><br>This value is often referred to as the "call quota" for the resource.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * The remaining number of requests that can be made to this resource before the associated time window resets.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		remaining: FormControl<number | null | undefined>,

		/** The data and time the time window and accumulated calls for this resource reset.  <br><br>When the <b>reset</b> time is reached, the <b>remaining</b> value is reset to the value of <b>limit</b>, and this <b>reset</b> value is reset to the current time plus the number of seconds defined by the <b>timeWindow</b> value. <br><br>The time stamp is formatted as an <a href="http://www.iso.org/iso/home/standards/iso8601.htm " target="_blank">ISO 8601</a> string, which is based on the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2018-08-04T07:09:00.000Z</code> */
		reset: FormControl<string | null | undefined>,

		/**
		 * A period of time, expressed in seconds. The call quota for a resource is applied to the period of time defined by the value of this field.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeWindow: FormControl<number | null | undefined>,
	}
	export function CreateRateFormGroup() {
		return new FormGroup<RateFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			remaining: new FormControl<number | null | undefined>(undefined),
			reset: new FormControl<string | null | undefined>(undefined),
			timeWindow: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This complex types defines the resource (such as an API method) for which the rate-limit data is returned.  <br><br>A method is included in an API, and an API is part of an API context for the API version specified. */
	export interface RateLimit {

		/** The context of the API for which rate-limit data is returned. For example <code>buy</code>, <code>sell</code>, <code>commerce</code>, <code>developer</code> or <code>tradingapi</code>. */
		apiContext?: string | null;

		/** The name of the API for which rate-limit data is returned. For example <code>browse</code> for the Buy API, <code>inventory</code> for the Sell API, <code>taxonomy</code> for the Commerce API, or <code>tradingapi</code> for Trading API. */
		apiName?: string | null;

		/** The version of the API for which rate-limit data is returned. For example <code>v1</code> or <code>v2</code>. */
		apiVersion?: string | null;

		/** A list of the methods for which rate-limit data is returned. For example <code>item</code> for the Feed API, <code>getOrder</code> for the Fulfillment API, <code>getProduct</code> for the Catalog API, <code>AddItems</code> for the Trading API. */
		resources?: Array<Resource>;
	}

	/** This complex types defines the resource (such as an API method) for which the rate-limit data is returned.  <br><br>A method is included in an API, and an API is part of an API context for the API version specified. */
	export interface RateLimitFormProperties {

		/** The context of the API for which rate-limit data is returned. For example <code>buy</code>, <code>sell</code>, <code>commerce</code>, <code>developer</code> or <code>tradingapi</code>. */
		apiContext: FormControl<string | null | undefined>,

		/** The name of the API for which rate-limit data is returned. For example <code>browse</code> for the Buy API, <code>inventory</code> for the Sell API, <code>taxonomy</code> for the Commerce API, or <code>tradingapi</code> for Trading API. */
		apiName: FormControl<string | null | undefined>,

		/** The version of the API for which rate-limit data is returned. For example <code>v1</code> or <code>v2</code>. */
		apiVersion: FormControl<string | null | undefined>,
	}
	export function CreateRateLimitFormGroup() {
		return new FormGroup<RateLimitFormProperties>({
			apiContext: new FormControl<string | null | undefined>(undefined),
			apiName: new FormControl<string | null | undefined>(undefined),
			apiVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type defines the resource (API method) and the current rate-limit data for that resource. */
	export interface Resource {

		/** The name of the resource (an API or an API method) to which the rate-limit data applies. */
		name?: string | null;

		/** A list of rate-limit data, where each list element represents the rate-limit data for a specific resource. */
		rates?: Array<Rate>;
	}

	/** This complex type defines the resource (API method) and the current rate-limit data for that resource. */
	export interface ResourceFormProperties {

		/** The name of the resource (an API or an API method) to which the rate-limit data applies. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type defines a list of rate-limit data as it pertains to a method within the specified version of an API. */
	export interface RateLimitsResponse {

		/** The rate-limit data for the specified APIs. The rate-limit data is returned for all the methods in the specified APIs and data pertains to the current time window. */
		rateLimits?: Array<RateLimit>;
	}

	/** This complex type defines a list of rate-limit data as it pertains to a method within the specified version of an API. */
	export interface RateLimitsResponseFormProperties {
	}
	export function CreateRateLimitsResponseFormGroup() {
		return new FormGroup<RateLimitsResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This method retrieves the call limit and utilization data for an application. The data is retrieved for all RESTful APIs and the legacy Trading API.  <br><br>The response from <b>getRateLimits</b> includes a list of the applicable resources and the "call limit", or quota, that is set for each resource. In addition to quota information, the response also includes the number of remaining calls available before the limit is reached, the time remaining before the quota resets, and the length of the "time window" to which the quota applies.  <br><br>By default, this method returns utilization data for all RESTful API and the legacy Trading API resources. Use the <b>api_name</b> and <b>api_context</b> query parameters to filter the response to only the desired APIs.  <br><br>For more on call limits, see <a href="https://developer.ebay.com/support/app-check " target="_blank">Compatible Application Check</a>.
		 * Get rate_limit/
		 * @param {string} api_context This optional query parameter filters the result to include only the specified API context. <br><br><b>Valid values:</b> <ul><li><code>buy</code></li><li><code>sell</code></li> <li><code>commerce</code></li><li><code>developer</code></li><li><code>tradingapi</code></li></ul>
		 * @param {string} api_name This optional query parameter filters the result to include only the APIs specified. <br><br><b>Example values:</b> <ul> <li><code>browse</code> for the <a href="/../develop/apis/restful-apis/buy-apis#buy-apis" target="_blank">Buy APIs</a></li> <li><code>inventory</code> for the <a href="/../develop/apis/restful-apis/sell-apis#sell-apis" target="_blank">Sell APIs</a></li>  <li><code>taxonomy</code> for the <a href="/../develop/apis/restful-apis/commerce-apis#commerce-apis" target="_blank">Commerce APIs</a></li>  <li><code>tradingapi</code> for the <a href="/../Devzone/XML/docs/Reference/eBay/index.html" target="_blank">Trading APIs</a></li></ul>
		 * @return {RateLimitsResponse} OK
		 */
		GetRateLimits(api_context: string | null | undefined, api_name: string | null | undefined): Observable<RateLimitsResponse> {
			return this.http.get<RateLimitsResponse>(this.baseUri + 'rate_limit/?api_context=' + (api_context == null ? '' : encodeURIComponent(api_context)) + '&api_name=' + (api_name == null ? '' : encodeURIComponent(api_name)), {});
		}

		/**
		 * This method retrieves the call limit and utilization data for an application user. The call-limit data is returned for all RESTful APIs and the legacy Trading API that limit calls on a per-user basis.  <br><br>The response from <b>getUserRateLimits</b> includes a list of the applicable resources and the "call limit", or quota, that is set for each resource. In addition to quota information, the response also includes the number of remaining calls available before the limit is reached, the time remaining before the quota resets, and the length of the "time window" to which the quota applies.  <br><br>By default, this method returns utilization data for all RESTful APIs resources and the legacy Trading API calls that limit request access by user. Use the <b>api_name</b> and <b>api_context</b> query parameters to filter the response to only the desired APIs.  <br><br>For more on call limits, see <a href="https://developer.ebay.com/support/app-check " target="_blank">Compatible Application Check</a>.
		 * Get user_rate_limit/
		 * @param {string} api_context This optional query parameter filters the result to include only the specified API context. <br><br><b>Valid values:</b> <ul><li><code>buy</code></li> <li><code>sell</code></li> <li><code>commerce</code></li> <li><code>developer</code></li> <li><code>tradingapi</code></li></ul>
		 * @param {string} api_name This optional query parameter filters the result to include only the APIs specified. <br><br><b>Example values:</b> <ul><li><code>browse</code> for the <a href="/../develop/apis/restful-apis/buy-apis#buy-apis" target="_blank">Buy APIs</a></li> <li><code>inventory</code> for the <a href="/../develop/apis/restful-apis/sell-apis#sell-apis" target="_blank">Sell APIs</a></li>  <li><code>taxonomy</code> for the <a href="/../develop/apis/restful-apis/commerce-apis#commerce-apis" target="_blank">Commerce APIs</a></li>  <li><code>tradingapi</code> for the <a href="/../Devzone/XML/docs/Reference/eBay/index.html" target="_blank">Trading APIs</a></li></ul>
		 * @return {RateLimitsResponse} OK
		 */
		GetUserRateLimits(api_context: string | null | undefined, api_name: string | null | undefined): Observable<RateLimitsResponse> {
			return this.http.get<RateLimitsResponse>(this.baseUri + 'user_rate_limit/?api_context=' + (api_context == null ? '' : encodeURIComponent(api_context)) + '&api_name=' + (api_name == null ? '' : encodeURIComponent(api_name)), {});
		}
	}

}

