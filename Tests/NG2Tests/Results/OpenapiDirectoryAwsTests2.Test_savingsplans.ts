import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateSavingsPlanResponse {
		savingsPlanId?: string;
	}

	export interface ResourceNotFoundException {
	}

	export interface ValidationException {
	}

	export interface InternalServerException {
	}

	export interface ServiceQuotaExceededException {
	}

	export interface DescribeSavingsPlanRatesResponse {
		savingsPlanId?: string;
		searchResults?: Array<SavingsPlanRate>;
		nextToken?: string;
	}


	/** Information about a Savings Plan rate. */
	export interface SavingsPlanRate {
		rate?: string;
		currency?: SavingsPlanRateCurrency;
		unit?: SavingsPlanRateUnit;
		productType?: SavingsPlanRateProductType;
		serviceCode?: SavingsPlanRateServiceCode;
		usageType?: string;
		operation?: string;
		properties?: Array<SavingsPlanRateProperty>;
	}

	export enum SavingsPlanRateCurrency { CNY = 0, USD = 1 }

	export enum SavingsPlanRateUnit { Hrs = 0, Lambda_GB_Second = 1, Request = 2 }

	export enum SavingsPlanRateProductType { EC2 = 0, Fargate = 1, Lambda = 2 }

	export enum SavingsPlanRateServiceCode { AmazonEC2 = 0, AmazonECS = 1, AWSLambda = 2 }


	/** Information about a property. */
	export interface SavingsPlanRateProperty {
		name?: SavingsPlanRatePropertyName;
		value?: string;
	}

	export enum SavingsPlanRatePropertyName { region = 0, instanceType = 1, instanceFamily = 2, productDescription = 3, tenancy = 4 }


	/** Information about a filter. */
	export interface SavingsPlanRateFilter {
		name?: SavingsPlanRateFilterName;
		values?: Array<string>;
	}

	export enum SavingsPlanRateFilterName { region = 0, instanceType = 1, productDescription = 2, tenancy = 3, productType = 4, serviceCode = 5, usageType = 6, operation = 7 }

	export interface DescribeSavingsPlansResponse {
		savingsPlans?: Array<SavingsPlan>;
		nextToken?: string;
	}


	/** Information about a Savings Plan. */
	export interface SavingsPlan {
		offeringId?: string;
		savingsPlanId?: string;
		savingsPlanArn?: string;
		description?: string;
		start?: string;
		end?: string;
		state?: SavingsPlanState;
		region?: string;
		ec2InstanceFamily?: string;
		savingsPlanType?: SavingsPlanSavingsPlanType;
		paymentOption?: SavingsPlanPaymentOption;
		productTypes?: Array<SavingsPlanProductType>;
		currency?: SavingsPlanRateCurrency;
		commitment?: string;
		upfrontPaymentAmount?: string;
		recurringPaymentAmount?: string;
		termDurationInSeconds?: number;
		tags?: TagMap;
	}

	export enum SavingsPlanState { payment_pending = 0, payment_failed = 1, active = 2, retired = 3 }

	export enum SavingsPlanSavingsPlanType { Compute = 0, EC2Instance = 1 }

	export enum SavingsPlanPaymentOption { All_Upfront = 0, Partial_Upfront = 1, No_Upfront = 2 }

	export enum SavingsPlanProductType { EC2 = 0, Fargate = 1, Lambda = 2 }

	export interface TagMap {
	}


	/** Information about a filter. */
	export interface SavingsPlanFilter {
		name?: SavingsPlanFilterName;
		values?: Array<string>;
	}

	export enum SavingsPlanFilterName { region = 0, ec2_instance_family = 1, commitment = 2, upfront = 3, term = 4, savings_plan_type = 5, payment_option = 6, start = 7, end = 8 }

	export interface DescribeSavingsPlansOfferingRatesResponse {
		searchResults?: Array<SavingsPlanOfferingRate>;
		nextToken?: string;
	}


	/** Information about a Savings Plan offering rate. */
	export interface SavingsPlanOfferingRate {

		/** Information about a Savings Plan offering. */
		savingsPlanOffering?: ParentSavingsPlanOffering;
		rate?: string;
		unit?: SavingsPlanOfferingRateUnit;
		productType?: SavingsPlanRateProductType;
		serviceCode?: SavingsPlanRateServiceCode;
		usageType?: string;
		operation?: string;
		properties?: Array<SavingsPlanOfferingRateProperty>;
	}


	/** Information about a Savings Plan offering. */
	export interface ParentSavingsPlanOffering {
		offeringId?: string;
		paymentOption?: ParentSavingsPlanOfferingPaymentOption;
		planType?: SavingsPlanSavingsPlanType;
		durationSeconds?: number;
		currency?: SavingsPlanRateCurrency;
		planDescription?: string;
	}

	export enum ParentSavingsPlanOfferingPaymentOption { All_Upfront = 0, Partial_Upfront = 1, No_Upfront = 2 }

	export enum SavingsPlanOfferingRateUnit { Hrs = 0, Lambda_GB_Second = 1, Request = 2 }


	/** Information about a property. */
	export interface SavingsPlanOfferingRateProperty {
		name?: string;
		value?: string;
	}

	export enum SavingsPlanType { Compute = 0, EC2Instance = 1 }


	/** Information about a filter. */
	export interface SavingsPlanOfferingRateFilterElement {
		name?: SavingsPlanOfferingRateFilterElementName;
		values?: Array<string>;
	}

	export enum SavingsPlanOfferingRateFilterElementName { region = 0, instanceFamily = 1, instanceType = 2, productDescription = 3, tenancy = 4, productId = 5 }

	export interface DescribeSavingsPlansOfferingsResponse {
		searchResults?: Array<SavingsPlanOffering>;
		nextToken?: string;
	}


	/** Information about a Savings Plan offering. */
	export interface SavingsPlanOffering {
		offeringId?: string;
		productTypes?: Array<SavingsPlanProductType>;
		planType?: SavingsPlanSavingsPlanType;
		description?: string;
		paymentOption?: SavingsPlanOfferingPaymentOption;
		durationSeconds?: number;
		currency?: SavingsPlanRateCurrency;
		serviceCode?: string;
		usageType?: string;
		operation?: string;
		properties?: Array<SavingsPlanOfferingProperty>;
	}

	export enum SavingsPlanOfferingPaymentOption { All_Upfront = 0, Partial_Upfront = 1, No_Upfront = 2 }


	/** Information about a property. */
	export interface SavingsPlanOfferingProperty {
		name?: SavingsPlanOfferingPropertyName;
		value?: string;
	}

	export enum SavingsPlanOfferingPropertyName { region = 0, instanceFamily = 1 }

	export enum CurrencyCode { CNY = 0, USD = 1 }


	/** Information about a filter. */
	export interface SavingsPlanOfferingFilterElement {
		name?: SavingsPlanOfferingPropertyName;
		values?: Array<string>;
	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}

	export interface TagResourceResponse {
	}

	export interface UntagResourceResponse {
	}

	export interface CreateSavingsPlanRequest {
		savingsPlanOfferingId: string;
		commitment: string;
		upfrontPaymentAmount?: string;
		clientToken?: string;
		tags?: TagMap;
	}

	export interface DescribeSavingsPlanRatesRequest {
		savingsPlanId: string;
		filters?: Array<SavingsPlanRateFilter>;
		nextToken?: string;
		maxResults?: number;
	}

	export interface DescribeSavingsPlansOfferingRatesRequest {
		savingsPlanOfferingIds?: Array<string>;
		savingsPlanPaymentOptions?: Array<SavingsPlanPaymentOption>;
		savingsPlanTypes?: Array<SavingsPlanType>;
		products?: Array<SavingsPlanProductType>;
		serviceCodes?: Array<SavingsPlanRateServiceCode>;
		usageTypes?: Array<string>;
		operations?: Array<string>;
		filters?: Array<SavingsPlanOfferingRateFilterElement>;
		nextToken?: string;
		maxResults?: number;
	}

	export interface DescribeSavingsPlansOfferingsRequest {
		offeringIds?: Array<string>;
		paymentOptions?: Array<SavingsPlanPaymentOption>;
		productType?: SavingsPlanRateProductType;
		planTypes?: Array<SavingsPlanType>;
		durations?: Array<number>;
		currencies?: Array<CurrencyCode>;
		descriptions?: Array<string>;
		serviceCodes?: Array<string>;
		usageTypes?: Array<string>;
		operations?: Array<string>;
		filters?: Array<SavingsPlanOfferingFilterElement>;
		nextToken?: string;
		maxResults?: number;
	}

	export interface DescribeSavingsPlansRequest {
		savingsPlanArns?: Array<string>;
		savingsPlanIds?: Array<string>;
		nextToken?: string;
		maxResults?: number;
		states?: Array<SavingsPlanState>;
		filters?: Array<SavingsPlanFilter>;
	}

	export interface ListTagsForResourceRequest {
		resourceArn: string;
	}

	export enum SavingsPlansFilterName { region = 0, ec2_instance_family = 1, commitment = 2, upfront = 3, term = 4, savings_plan_type = 5, payment_option = 6, start = 7, end = 8 }

	export enum SavingsPlanOfferingFilterAttribute { region = 0, instanceFamily = 1 }

	export enum SavingsPlanOfferingPropertyKey { region = 0, instanceFamily = 1 }

	export enum SavingsPlanRateFilterAttribute { region = 0, instanceFamily = 1, instanceType = 2, productDescription = 3, tenancy = 4, productId = 5 }

	export enum SavingsPlanRatePropertyKey { region = 0, instanceType = 1, instanceFamily = 2, productDescription = 3, tenancy = 4 }

	export interface TagResourceRequest {
		resourceArn: string;
		tags: TagMap;
	}

	export interface UntagResourceRequest {
		resourceArn: string;
		tagKeys: Array<string>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a Savings Plan.
		 * Post CreateSavingsPlan
		 * @return {CreateSavingsPlanResponse} Success
		 */
		CreateSavingsPlan(requestBody: CreateSavingsPlanPostBody): Observable<CreateSavingsPlanResponse> {
			return this.http.post<CreateSavingsPlanResponse>(this.baseUri + 'CreateSavingsPlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified Savings Plans rates.
		 * Post DescribeSavingsPlanRates
		 * @return {DescribeSavingsPlanRatesResponse} Success
		 */
		DescribeSavingsPlanRates(requestBody: DescribeSavingsPlanRatesPostBody): Observable<DescribeSavingsPlanRatesResponse> {
			return this.http.post<DescribeSavingsPlanRatesResponse>(this.baseUri + 'DescribeSavingsPlanRates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified Savings Plans.
		 * Post DescribeSavingsPlans
		 * @return {DescribeSavingsPlansResponse} Success
		 */
		DescribeSavingsPlans(requestBody: DescribeSavingsPlansPostBody): Observable<DescribeSavingsPlansResponse> {
			return this.http.post<DescribeSavingsPlansResponse>(this.baseUri + 'DescribeSavingsPlans', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified Savings Plans offering rates.
		 * Post DescribeSavingsPlansOfferingRates
		 * @return {DescribeSavingsPlansOfferingRatesResponse} Success
		 */
		DescribeSavingsPlansOfferingRates(requestBody: DescribeSavingsPlansOfferingRatesPostBody): Observable<DescribeSavingsPlansOfferingRatesResponse> {
			return this.http.post<DescribeSavingsPlansOfferingRatesResponse>(this.baseUri + 'DescribeSavingsPlansOfferingRates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified Savings Plans offerings.
		 * Post DescribeSavingsPlansOfferings
		 * @return {DescribeSavingsPlansOfferingsResponse} Success
		 */
		DescribeSavingsPlansOfferings(requestBody: DescribeSavingsPlansOfferingsPostBody): Observable<DescribeSavingsPlansOfferingsResponse> {
			return this.http.post<DescribeSavingsPlansOfferingsResponse>(this.baseUri + 'DescribeSavingsPlansOfferings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for the specified resource.
		 * Post ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourcePostBody): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + 'ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds the specified tags to the specified resource.
		 * Post TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from the specified resource.
		 * Post UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourcePostBody): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + 'UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateSavingsPlanPostBody {

		/**
		 * The ID of the offering.
		 * Required
		 */
		savingsPlanOfferingId: string;

		/**
		 * The hourly commitment, in USD. This is a value between 0.001 and 1 million. You cannot specify more than three digits after the decimal point.
		 * Required
		 */
		commitment: string;

		/** The up-front payment amount. This is a whole number between 50 and 99 percent of the total value of the Savings Plan. This parameter is supported only if the payment option is <code>Partial Upfront</code>. */
		upfrontPaymentAmount?: string;

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string;

		/** One or more tags. */
		tags?: {[id: string]: string };
	}

	export interface DescribeSavingsPlanRatesPostBody {

		/**
		 * The ID of the Savings Plan.
		 * Required
		 */
		savingsPlanId: string;

		/** The filters. */
		filters?: Array<SavingsPlanRateFilter>;

		/**
		 * The token for the next page of results.
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken?: string;

		/**
		 * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number;
	}

	export interface DescribeSavingsPlansPostBody {

		/**
		 * The Amazon Resource Names (ARN) of the Savings Plans.
		 * Maximum items: 100
		 */
		savingsPlanArns?: Array<string>;

		/** The IDs of the Savings Plans. */
		savingsPlanIds?: Array<string>;

		/**
		 * The token for the next page of results.
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken?: string;

		/**
		 * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number;

		/** The states. */
		states?: Array<SavingsPlanState>;

		/** The filters. */
		filters?: Array<SavingsPlanFilter>;
	}

	export interface DescribeSavingsPlansOfferingRatesPostBody {

		/** The IDs of the offerings. */
		savingsPlanOfferingIds?: Array<string>;

		/** The payment options. */
		savingsPlanPaymentOptions?: Array<SavingsPlanPaymentOption>;

		/** The plan types. */
		savingsPlanTypes?: Array<SavingsPlanType>;

		/** The AWS products. */
		products?: Array<SavingsPlanProductType>;

		/** The services. */
		serviceCodes?: Array<SavingsPlanRateServiceCode>;

		/** The usage details of the line item in the billing report. */
		usageTypes?: Array<string>;

		/** The specific AWS operation for the line item in the billing report. */
		operations?: Array<string>;

		/** The filters. */
		filters?: Array<SavingsPlanOfferingRateFilterElement>;

		/**
		 * The token for the next page of results.
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken?: string;

		/**
		 * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults?: number;
	}

	export interface DescribeSavingsPlansOfferingsPostBody {

		/** The IDs of the offerings. */
		offeringIds?: Array<string>;

		/** The payment options. */
		paymentOptions?: Array<SavingsPlanPaymentOption>;

		/** The product type. */
		productType?: SavingsPlanRateProductType;

		/** The plan type. */
		planTypes?: Array<SavingsPlanType>;

		/** The durations, in seconds. */
		durations?: Array<number>;

		/** The currencies. */
		currencies?: Array<CurrencyCode>;

		/** The descriptions. */
		descriptions?: Array<string>;

		/** The services. */
		serviceCodes?: Array<string>;

		/** The usage details of the line item in the billing report. */
		usageTypes?: Array<string>;

		/** The specific AWS operation for the line item in the billing report. */
		operations?: Array<string>;

		/** The filters. */
		filters?: Array<SavingsPlanOfferingFilterElement>;

		/**
		 * The token for the next page of results.
		 * Max length: 1024
		 * Pattern: ^[A-Za-z0-9/=\+]+$
		 */
		nextToken?: string;

		/**
		 * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults?: number;
	}

	export interface ListTagsForResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
		 * Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$
		 */
		resourceArn: string;
	}

	export interface TagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
		 * Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$
		 */
		resourceArn: string;

		/**
		 * One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
		 * Required
		 */
		tags: {[id: string]: string };
	}

	export interface UntagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource.
		 * Required
		 * Pattern: arn:aws:[a-z]+:([a-z]{2}-[a-z]+-\d{1}|):(\d{12}):savingsplan\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$
		 */
		resourceArn: string;

		/**
		 * The tag keys.
		 * Required
		 */
		tagKeys: Array<string>;
	}

}

