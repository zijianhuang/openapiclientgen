import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes the format of Error response. */
	export interface ErrorResponse {

		/** Error code */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Describes the format of Error response. */
	export interface ErrorResponseFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Key-value pairs of instance details in the legacy format. */
	export interface InfoField {

		/** Identifies the name of the instance provisioned by the user. */
		project?: string | null;
	}

	/** Key-value pairs of instance details in the legacy format. */
	export interface InfoFieldFormProperties {

		/** Identifies the name of the instance provisioned by the user. */
		project: FormControl<string | null | undefined>,
	}
	export function CreateInfoFieldFormGroup() {
		return new FormGroup<InfoFieldFormProperties>({
			project: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed information about the meter. */
	export interface MeterInfo {

		/** Indicates the date from which the meter rate is effective. */
		EffectiveDate?: Date | null;

		/** The resource quantity that is included in the offer at no cost. Consumption beyond this quantity will be charged. */
		IncludedQuantity?: number | null;

		/** The category of the meter, e.g., 'Cloud services', 'Networking', etc.. */
		MeterCategory?: string | null;

		/** The unique identifier of the resource. */
		MeterId?: string | null;

		/** The name of the meter, within the given meter category */
		MeterName?: string | null;

		/** The list of key/value pairs for the meter rates, in the format 'key':'value' where key = the meter quantity, and value = the corresponding price */
		MeterRates?: {[id: string]: number };

		/** The region in which the Azure service is available. */
		MeterRegion?: string | null;

		/** The subcategory of the meter, e.g., 'A6 Cloud services', 'ExpressRoute (IXP)', etc.. */
		MeterSubCategory?: string | null;

		/** Provides additional meter data. 'Third Party' indicates a meter with no discount. Blanks indicate First Party. */
		MeterTags?: Array<string>;

		/** The unit in which the meter consumption is charged, e.g., 'Hours', 'GB', etc. */
		Unit?: string | null;
	}

	/** Detailed information about the meter. */
	export interface MeterInfoFormProperties {

		/** Indicates the date from which the meter rate is effective. */
		EffectiveDate: FormControl<Date | null | undefined>,

		/** The resource quantity that is included in the offer at no cost. Consumption beyond this quantity will be charged. */
		IncludedQuantity: FormControl<number | null | undefined>,

		/** The category of the meter, e.g., 'Cloud services', 'Networking', etc.. */
		MeterCategory: FormControl<string | null | undefined>,

		/** The unique identifier of the resource. */
		MeterId: FormControl<string | null | undefined>,

		/** The name of the meter, within the given meter category */
		MeterName: FormControl<string | null | undefined>,

		/** The list of key/value pairs for the meter rates, in the format 'key':'value' where key = the meter quantity, and value = the corresponding price */
		MeterRates: FormControl<{[id: string]: number } | null | undefined>,

		/** The region in which the Azure service is available. */
		MeterRegion: FormControl<string | null | undefined>,

		/** The subcategory of the meter, e.g., 'A6 Cloud services', 'ExpressRoute (IXP)', etc.. */
		MeterSubCategory: FormControl<string | null | undefined>,

		/** The unit in which the meter consumption is charged, e.g., 'Hours', 'GB', etc. */
		Unit: FormControl<string | null | undefined>,
	}
	export function CreateMeterInfoFormGroup() {
		return new FormGroup<MeterInfoFormProperties>({
			EffectiveDate: new FormControl<Date | null | undefined>(undefined),
			IncludedQuantity: new FormControl<number | null | undefined>(undefined),
			MeterCategory: new FormControl<string | null | undefined>(undefined),
			MeterId: new FormControl<string | null | undefined>(undefined),
			MeterName: new FormControl<string | null | undefined>(undefined),
			MeterRates: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			MeterRegion: new FormControl<string | null | undefined>(undefined),
			MeterSubCategory: new FormControl<string | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates that a monetary commitment is required for this offer */
	export interface MonetaryCommitment extends OfferTermInfo {

		/** An array of meter ids that are excluded from the given offer terms. */
		ExcludedMeterIds?: Array<string>;

		/** The list of key/value pairs for the tiered meter rates, in the format 'key':'value' where key = price, and value = the corresponding discount percentage. This field is used only by offer terms of type 'Monetary Commitment'. */
		TieredDiscount?: {[id: string]: string };
	}

	/** Indicates that a monetary commitment is required for this offer */
	export interface MonetaryCommitmentFormProperties extends OfferTermInfoFormProperties {

		/** The list of key/value pairs for the tiered meter rates, in the format 'key':'value' where key = price, and value = the corresponding discount percentage. This field is used only by offer terms of type 'Monetary Commitment'. */
		TieredDiscount: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateMonetaryCommitmentFormGroup() {
		return new FormGroup<MonetaryCommitmentFormProperties>({
			EffectiveDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<OfferTermInfoName | null | undefined>(undefined, [Validators.required]),
			TieredDiscount: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Indicates that this is a monetary credit offer. */
	export interface MonetaryCredit extends OfferTermInfo {

		/** The amount of credit provided under the terms of the given offer level. */
		Credit?: string | null;

		/** An array of meter ids that are excluded from the given offer terms. */
		ExcludedMeterIds?: Array<string>;
	}

	/** Indicates that this is a monetary credit offer. */
	export interface MonetaryCreditFormProperties extends OfferTermInfoFormProperties {

		/** The amount of credit provided under the terms of the given offer level. */
		Credit: FormControl<string | null | undefined>,
	}
	export function CreateMonetaryCreditFormGroup() {
		return new FormGroup<MonetaryCreditFormProperties>({
			EffectiveDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<OfferTermInfoName | null | undefined>(undefined, [Validators.required]),
			Credit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the offer term. */
	export interface OfferTermInfo {

		/** Indicates the date from which the offer term is effective. */
		EffectiveDate?: Date | null;

		/**
		 * Name of the offer term
		 * Required
		 */
		Name: OfferTermInfoName;
	}

	/** Describes the offer term. */
	export interface OfferTermInfoFormProperties {

		/** Indicates the date from which the offer term is effective. */
		EffectiveDate: FormControl<Date | null | undefined>,

		/**
		 * Name of the offer term
		 * Required
		 */
		Name: FormControl<OfferTermInfoName | null | undefined>,
	}
	export function CreateOfferTermInfoFormGroup() {
		return new FormGroup<OfferTermInfoFormProperties>({
			EffectiveDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<OfferTermInfoName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OfferTermInfoName { 'Recurring Charge' = 0, 'Monetary Commitment' = 1, 'Monetary Credit' = 2 }


	/** Parameters that are used in the odata $filter query parameter for providing RateCard information. */
	export interface RateCardQueryParameters {

		/**
		 * The currency in which the rates need to be provided.
		 * Required
		 */
		Currency: string;

		/**
		 * The culture in which the resource metadata needs to be localized.
		 * Required
		 */
		Locale: string;

		/**
		 * The Offer ID parameter consists of the 'MS-AZR-' prefix, plus the Offer ID number (e.g., MS-AZR-0026P). See https://azure.microsoft.com/en-us/support/legal/offer-details/ for more information on the list of available Offer IDs, country/region availability, and billing currency.
		 * Required
		 */
		OfferDurableId: string;

		/**
		 * 2 letter ISO code where the offer was purchased.
		 * Required
		 */
		RegionInfo: string;
	}

	/** Parameters that are used in the odata $filter query parameter for providing RateCard information. */
	export interface RateCardQueryParametersFormProperties {

		/**
		 * The currency in which the rates need to be provided.
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,

		/**
		 * The culture in which the resource metadata needs to be localized.
		 * Required
		 */
		Locale: FormControl<string | null | undefined>,

		/**
		 * The Offer ID parameter consists of the 'MS-AZR-' prefix, plus the Offer ID number (e.g., MS-AZR-0026P). See https://azure.microsoft.com/en-us/support/legal/offer-details/ for more information on the list of available Offer IDs, country/region availability, and billing currency.
		 * Required
		 */
		OfferDurableId: FormControl<string | null | undefined>,

		/**
		 * 2 letter ISO code where the offer was purchased.
		 * Required
		 */
		RegionInfo: FormControl<string | null | undefined>,
	}
	export function CreateRateCardQueryParametersFormGroup() {
		return new FormGroup<RateCardQueryParametersFormProperties>({
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Locale: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OfferDurableId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^MS-AZR-\d{4}P(-\d{4}P)*$')]),
			RegionInfo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Indicates a recurring charge is present for this offer. */
	export interface RecurringCharge extends OfferTermInfo {

		/** The amount of recurring charge as per the offer term. */
		RecurringCharge1?: number | null;
	}

	/** Indicates a recurring charge is present for this offer. */
	export interface RecurringChargeFormProperties extends OfferTermInfoFormProperties {

		/** The amount of recurring charge as per the offer term. */
		RecurringCharge1: FormControl<number | null | undefined>,
	}
	export function CreateRecurringChargeFormGroup() {
		return new FormGroup<RecurringChargeFormProperties>({
			EffectiveDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<OfferTermInfoName | null | undefined>(undefined, [Validators.required]),
			RecurringCharge1: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Price and Metadata information for resources */
	export interface ResourceRateCardInfo {

		/** The currency in which the rates are provided. */
		Currency?: string | null;

		/** All rates are pretax, so this will always be returned as 'false'. */
		IsTaxIncluded?: boolean | null;

		/** The culture in which the resource information is localized. */
		Locale?: string | null;

		/** A list of meters. */
		Meters?: Array<MeterInfo>;

		/** A list of offer terms. */
		OfferTerms?: Array<OfferTermInfo>;
	}

	/** Price and Metadata information for resources */
	export interface ResourceRateCardInfoFormProperties {

		/** The currency in which the rates are provided. */
		Currency: FormControl<string | null | undefined>,

		/** All rates are pretax, so this will always be returned as 'false'. */
		IsTaxIncluded: FormControl<boolean | null | undefined>,

		/** The culture in which the resource information is localized. */
		Locale: FormControl<string | null | undefined>,
	}
	export function CreateResourceRateCardInfoFormGroup() {
		return new FormGroup<ResourceRateCardInfoFormProperties>({
			Currency: new FormControl<string | null | undefined>(undefined),
			IsTaxIncluded: new FormControl<boolean | null | undefined>(undefined),
			Locale: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the usageAggregation. */
	export interface UsageAggregation {

		/** Unique Id for the usage aggregate. */
		id?: string | null;

		/** Name of the usage aggregate. */
		name?: string | null;

		/** Describes a sample of the usageAggregation. */
		properties?: UsageSample;

		/** Type of the resource being returned. */
		type?: string | null;
	}

	/** Describes the usageAggregation. */
	export interface UsageAggregationFormProperties {

		/** Unique Id for the usage aggregate. */
		id: FormControl<string | null | undefined>,

		/** Name of the usage aggregate. */
		name: FormControl<string | null | undefined>,

		/** Type of the resource being returned. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUsageAggregationFormGroup() {
		return new FormGroup<UsageAggregationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Get UsageAggregates operation response. */
	export interface UsageAggregationListResult {

		/** Gets or sets the link to the next set of results. */
		nextLink?: string | null;

		/** Gets or sets details for the requested aggregation. */
		value?: Array<UsageAggregation>;
	}

	/** The Get UsageAggregates operation response. */
	export interface UsageAggregationListResultFormProperties {

		/** Gets or sets the link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateUsageAggregationListResultFormGroup() {
		return new FormGroup<UsageAggregationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a sample of the usageAggregation. */
	export interface UsageSample {

		/** Key-value pairs of instance details in the legacy format. */
		infoFields?: InfoField;

		/** Key-value pairs of instance details represented as a string. */
		instanceData?: string | null;

		/** Category of the consumed resource. */
		meterCategory?: string | null;

		/** Unique ID for the resource that was consumed (aka ResourceID). */
		meterId?: string | null;

		/** Friendly name of the resource being consumed. */
		meterName?: string | null;

		/** Region of the meterId used for billing purposes */
		meterRegion?: string | null;

		/** Sub-category of the consumed resource. */
		meterSubCategory?: string | null;

		/** The amount of the resource consumption that occurred in this time frame. */
		quantity?: number | null;

		/** The subscription identifier for the Azure user. */
		subscriptionId?: string | null;

		/** The unit in which the usage for this resource is being counted, e.g. Hours, GB. */
		unit?: string | null;

		/** UTC end time for the usage bucket to which this usage aggregate belongs. */
		usageEndTime?: Date | null;

		/** UTC start time for the usage bucket to which this usage aggregate belongs. */
		usageStartTime?: Date | null;
	}

	/** Describes a sample of the usageAggregation. */
	export interface UsageSampleFormProperties {

		/** Key-value pairs of instance details represented as a string. */
		instanceData: FormControl<string | null | undefined>,

		/** Category of the consumed resource. */
		meterCategory: FormControl<string | null | undefined>,

		/** Unique ID for the resource that was consumed (aka ResourceID). */
		meterId: FormControl<string | null | undefined>,

		/** Friendly name of the resource being consumed. */
		meterName: FormControl<string | null | undefined>,

		/** Region of the meterId used for billing purposes */
		meterRegion: FormControl<string | null | undefined>,

		/** Sub-category of the consumed resource. */
		meterSubCategory: FormControl<string | null | undefined>,

		/** The amount of the resource consumption that occurred in this time frame. */
		quantity: FormControl<number | null | undefined>,

		/** The subscription identifier for the Azure user. */
		subscriptionId: FormControl<string | null | undefined>,

		/** The unit in which the usage for this resource is being counted, e.g. Hours, GB. */
		unit: FormControl<string | null | undefined>,

		/** UTC end time for the usage bucket to which this usage aggregate belongs. */
		usageEndTime: FormControl<Date | null | undefined>,

		/** UTC start time for the usage bucket to which this usage aggregate belongs. */
		usageStartTime: FormControl<Date | null | undefined>,
	}
	export function CreateUsageSampleFormGroup() {
		return new FormGroup<UsageSampleFormProperties>({
			instanceData: new FormControl<string | null | undefined>(undefined),
			meterCategory: new FormControl<string | null | undefined>(undefined),
			meterId: new FormControl<string | null | undefined>(undefined),
			meterName: new FormControl<string | null | undefined>(undefined),
			meterRegion: new FormControl<string | null | undefined>(undefined),
			meterSubCategory: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			usageEndTime: new FormControl<Date | null | undefined>(undefined),
			usageStartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Enables you to query for the resource/meter metadata and related prices used in a given subscription by Offer ID, Currency, Locale and Region. The metadata associated with the billing meters, including but not limited to service names, types, resources, units of measure, and regions, is subject to change at any time and without notice. If you intend to use this billing data in an automated fashion, please use the billing meter GUID to uniquely identify each billable item. If the billing meter GUID is scheduled to change due to a new billing model, you will be notified in advance of the change.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Commerce/RateCard
		 * @param {string} filter The filter to apply on the operation. It ONLY supports the 'eq' and 'and' logical operators at this time. All the 4 query parameters 'OfferDurableId',  'Currency', 'Locale', 'Region' are required to be a part of the $filter.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId It uniquely identifies Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ResourceRateCardInfo} Normal response for a successful query. The response body will contain the data that matches the filters specified in the query parameters.
		 */
		RateCard_Get(filter: string, api_version: string, subscriptionId: string): Observable<ResourceRateCardInfo> {
			return this.http.get<ResourceRateCardInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Commerce/RateCard?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Query aggregated Azure subscription consumption data for a date range.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Commerce/UsageAggregates
		 * @param {Date} reportedStartTime The start of the time range to retrieve data for.
		 * @param {Date} reportedEndTime The end of the time range to retrieve data for.
		 * @param {boolean} showDetails `True` returns usage data in instance-level detail, `false` causes server-side aggregation with fewer details. For example, if you have 3 website instances, by default you will get 3 line items for website consumption. If you specify showDetails = false, the data will be aggregated as a single line item for website consumption within the time period (for the given subscriptionId, meterId, usageStartTime and usageEndTime).
		 * @param {UsageAggregates_ListAggregationGranularity} aggregationGranularity `Daily` (default) returns the data in daily granularity, `Hourly` returns the data in hourly granularity.
		 * @param {string} continuationToken Used when a continuation token string is provided in the response body of the previous call, enabling paging through a large result set. If not present, the data is retrieved from the beginning of the day/hour (based on the granularity) passed in. 
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId It uniquely identifies Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {UsageAggregationListResult} Normal response for a successful query. The response body will contain the data that matches the filters specified in the query parameters.
		 */
		UsageAggregates_List(reportedStartTime: Date, reportedEndTime: Date, showDetails: boolean | null | undefined, aggregationGranularity: UsageAggregates_ListAggregationGranularity | null | undefined, continuationToken: string | null | undefined, api_version: string, subscriptionId: string): Observable<UsageAggregationListResult> {
			return this.http.get<UsageAggregationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Commerce/UsageAggregates?reportedStartTime=' + reportedStartTime.toISOString() + '&reportedEndTime=' + reportedEndTime.toISOString() + '&showDetails=' + showDetails + '&aggregationGranularity=' + aggregationGranularity + '&continuationToken=' + (continuationToken == null ? '' : encodeURIComponent(continuationToken)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum UsageAggregates_ListAggregationGranularity { Daily = 0, Hourly = 1 }

}

