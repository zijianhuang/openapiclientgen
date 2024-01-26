import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An Account Report of a GLS account identified by their account id containing aggregate data gathered from a particular date range. Next ID: 18 */
	export interface GoogleAdsHomeservicesLocalservicesV1AccountReport {

		/** Unique identifier of the GLS account. */
		accountId?: string | null;

		/** Conatiner for aggregator specific information if lead is for an aggregator GLS account. */
		aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo;

		/** Average review rating score from 1-5 stars. */
		averageFiveStarRating?: number | null;

		/** Average weekly budget in the currency code of the account. */
		averageWeeklyBudget?: number | null;

		/** Business name of the account. */
		businessName?: string | null;

		/** Currency code of the account. */
		currencyCode?: string | null;

		/** Number of charged leads the account received in current specified period. */
		currentPeriodChargedLeads?: string | null;

		/** Number of connected phone calls (duration over 30s) in current specified period. */
		currentPeriodConnectedPhoneCalls?: string | null;

		/** Number of phone calls in current specified period, including both connected and unconnected calls. */
		currentPeriodPhoneCalls?: string | null;

		/** Total cost of the account in current specified period in the account's specified currency. */
		currentPeriodTotalCost?: number | null;

		/** Number of impressions that customers have had in the past 2 days. */
		impressionsLastTwoDays?: string | null;

		/** Phone lead responsiveness of the account for the past 90 days from current date. This is computed by taking the total number of connected calls from charged phone leads and dividing by the total number of calls received. */
		phoneLeadResponsiveness?: number | null;

		/** Number of charged leads the account received in previous specified period. */
		previousPeriodChargedLeads?: string | null;

		/** Number of connected phone calls (duration over 30s) in previous specified period. */
		previousPeriodConnectedPhoneCalls?: string | null;

		/** Number of phone calls in previous specified period, including both connected and unconnected calls. */
		previousPeriodPhoneCalls?: string | null;

		/** Total cost of the account in previous specified period in the account's specified currency. */
		previousPeriodTotalCost?: number | null;

		/** Total number of reviews the account has up to current date. */
		totalReview?: number | null;
	}

	/** An Account Report of a GLS account identified by their account id containing aggregate data gathered from a particular date range. Next ID: 18 */
	export interface GoogleAdsHomeservicesLocalservicesV1AccountReportFormProperties {

		/** Unique identifier of the GLS account. */
		accountId: FormControl<string | null | undefined>,

		/** Average review rating score from 1-5 stars. */
		averageFiveStarRating: FormControl<number | null | undefined>,

		/** Average weekly budget in the currency code of the account. */
		averageWeeklyBudget: FormControl<number | null | undefined>,

		/** Business name of the account. */
		businessName: FormControl<string | null | undefined>,

		/** Currency code of the account. */
		currencyCode: FormControl<string | null | undefined>,

		/** Number of charged leads the account received in current specified period. */
		currentPeriodChargedLeads: FormControl<string | null | undefined>,

		/** Number of connected phone calls (duration over 30s) in current specified period. */
		currentPeriodConnectedPhoneCalls: FormControl<string | null | undefined>,

		/** Number of phone calls in current specified period, including both connected and unconnected calls. */
		currentPeriodPhoneCalls: FormControl<string | null | undefined>,

		/** Total cost of the account in current specified period in the account's specified currency. */
		currentPeriodTotalCost: FormControl<number | null | undefined>,

		/** Number of impressions that customers have had in the past 2 days. */
		impressionsLastTwoDays: FormControl<string | null | undefined>,

		/** Phone lead responsiveness of the account for the past 90 days from current date. This is computed by taking the total number of connected calls from charged phone leads and dividing by the total number of calls received. */
		phoneLeadResponsiveness: FormControl<number | null | undefined>,

		/** Number of charged leads the account received in previous specified period. */
		previousPeriodChargedLeads: FormControl<string | null | undefined>,

		/** Number of connected phone calls (duration over 30s) in previous specified period. */
		previousPeriodConnectedPhoneCalls: FormControl<string | null | undefined>,

		/** Number of phone calls in previous specified period, including both connected and unconnected calls. */
		previousPeriodPhoneCalls: FormControl<string | null | undefined>,

		/** Total cost of the account in previous specified period in the account's specified currency. */
		previousPeriodTotalCost: FormControl<number | null | undefined>,

		/** Total number of reviews the account has up to current date. */
		totalReview: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAdsHomeservicesLocalservicesV1AccountReportFormGroup() {
		return new FormGroup<GoogleAdsHomeservicesLocalservicesV1AccountReportFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			averageFiveStarRating: new FormControl<number | null | undefined>(undefined),
			averageWeeklyBudget: new FormControl<number | null | undefined>(undefined),
			businessName: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			currentPeriodChargedLeads: new FormControl<string | null | undefined>(undefined),
			currentPeriodConnectedPhoneCalls: new FormControl<string | null | undefined>(undefined),
			currentPeriodPhoneCalls: new FormControl<string | null | undefined>(undefined),
			currentPeriodTotalCost: new FormControl<number | null | undefined>(undefined),
			impressionsLastTwoDays: new FormControl<string | null | undefined>(undefined),
			phoneLeadResponsiveness: new FormControl<number | null | undefined>(undefined),
			previousPeriodChargedLeads: new FormControl<string | null | undefined>(undefined),
			previousPeriodConnectedPhoneCalls: new FormControl<string | null | undefined>(undefined),
			previousPeriodPhoneCalls: new FormControl<string | null | undefined>(undefined),
			previousPeriodTotalCost: new FormControl<number | null | undefined>(undefined),
			totalReview: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Conatiner for aggregator specific information if lead is for an aggregator GLS account. */
	export interface GoogleAdsHomeservicesLocalservicesV1AggregatorInfo {

		/** Provider id (listed in aggregator system) which maps to a account id in GLS system. */
		aggregatorProviderId?: string | null;
	}

	/** Conatiner for aggregator specific information if lead is for an aggregator GLS account. */
	export interface GoogleAdsHomeservicesLocalservicesV1AggregatorInfoFormProperties {

		/** Provider id (listed in aggregator system) which maps to a account id in GLS system. */
		aggregatorProviderId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsHomeservicesLocalservicesV1AggregatorInfoFormGroup() {
		return new FormGroup<GoogleAdsHomeservicesLocalservicesV1AggregatorInfoFormProperties>({
			aggregatorProviderId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for booking lead specific information. */
	export interface GoogleAdsHomeservicesLocalservicesV1BookingLead {

		/** Timestamp of when service is provided by advertiser. */
		bookingAppointmentTimestamp?: string | null;

		/** Consumer email associated with the booking lead. */
		consumerEmail?: string | null;

		/** Consumer phone number associated with the booking lead. */
		consumerPhoneNumber?: string | null;

		/** Name of the customer who created the lead. */
		customerName?: string | null;

		/** The job type of the specified lead. */
		jobType?: string | null;
	}

	/** Container for booking lead specific information. */
	export interface GoogleAdsHomeservicesLocalservicesV1BookingLeadFormProperties {

		/** Timestamp of when service is provided by advertiser. */
		bookingAppointmentTimestamp: FormControl<string | null | undefined>,

		/** Consumer email associated with the booking lead. */
		consumerEmail: FormControl<string | null | undefined>,

		/** Consumer phone number associated with the booking lead. */
		consumerPhoneNumber: FormControl<string | null | undefined>,

		/** Name of the customer who created the lead. */
		customerName: FormControl<string | null | undefined>,

		/** The job type of the specified lead. */
		jobType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsHomeservicesLocalservicesV1BookingLeadFormGroup() {
		return new FormGroup<GoogleAdsHomeservicesLocalservicesV1BookingLeadFormProperties>({
			bookingAppointmentTimestamp: new FormControl<string | null | undefined>(undefined),
			consumerEmail: new FormControl<string | null | undefined>(undefined),
			consumerPhoneNumber: new FormControl<string | null | undefined>(undefined),
			customerName: new FormControl<string | null | undefined>(undefined),
			jobType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data. */
	export interface GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport {

		/** Identifies account that received the lead. */
		accountId?: string | null;

		/** Conatiner for aggregator specific information if lead is for an aggregator GLS account. */
		aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo;

		/** Container for booking lead specific information. */
		bookingLead?: GoogleAdsHomeservicesLocalservicesV1BookingLead;

		/** Business name associated to the account. */
		businessName?: string | null;

		/** Whether the lead has been charged. */
		chargeStatus?: GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatus | null;

		/** Currency code. */
		currencyCode?: string | null;

		/** Dispute status related to the lead. */
		disputeStatus?: string | null;

		/** Location of the associated account's home city. */
		geo?: string | null;

		/** Lead category (e.g. hvac, plumber) */
		leadCategory?: string | null;

		/** Timestamp of when the lead was created. */
		leadCreationTimestamp?: string | null;

		/** Unique identifier of a Detailed Lead Report. */
		leadId?: string | null;

		/** Price of the lead (available only after it has been charged). */
		leadPrice?: number | null;

		/** Lead type. */
		leadType?: GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadType | null;

		/** Container for message lead specific information. */
		messageLead?: GoogleAdsHomeservicesLocalservicesV1MessageLead;

		/** Container for phone lead specific information. */
		phoneLead?: GoogleAdsHomeservicesLocalservicesV1PhoneLead;

		/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
		timezone?: GoogleTypeTimeZone;
	}

	/** A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data. */
	export interface GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportFormProperties {

		/** Identifies account that received the lead. */
		accountId: FormControl<string | null | undefined>,

		/** Business name associated to the account. */
		businessName: FormControl<string | null | undefined>,

		/** Whether the lead has been charged. */
		chargeStatus: FormControl<GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatus | null | undefined>,

		/** Currency code. */
		currencyCode: FormControl<string | null | undefined>,

		/** Dispute status related to the lead. */
		disputeStatus: FormControl<string | null | undefined>,

		/** Location of the associated account's home city. */
		geo: FormControl<string | null | undefined>,

		/** Lead category (e.g. hvac, plumber) */
		leadCategory: FormControl<string | null | undefined>,

		/** Timestamp of when the lead was created. */
		leadCreationTimestamp: FormControl<string | null | undefined>,

		/** Unique identifier of a Detailed Lead Report. */
		leadId: FormControl<string | null | undefined>,

		/** Price of the lead (available only after it has been charged). */
		leadPrice: FormControl<number | null | undefined>,

		/** Lead type. */
		leadType: FormControl<GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadType | null | undefined>,
	}
	export function CreateGoogleAdsHomeservicesLocalservicesV1DetailedLeadReportFormGroup() {
		return new FormGroup<GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			businessName: new FormControl<string | null | undefined>(undefined),
			chargeStatus: new FormControl<GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatus | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			disputeStatus: new FormControl<string | null | undefined>(undefined),
			geo: new FormControl<string | null | undefined>(undefined),
			leadCategory: new FormControl<string | null | undefined>(undefined),
			leadCreationTimestamp: new FormControl<string | null | undefined>(undefined),
			leadId: new FormControl<string | null | undefined>(undefined),
			leadPrice: new FormControl<number | null | undefined>(undefined),
			leadType: new FormControl<GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadType | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatus { CHARGE_STATUS_UNSPECIFIED = 0, CHARGED = 1, NOT_CHARGED = 2 }

	export enum GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadType { LEAD_TYPE_UNSPECIFIED = 0, MESSAGE = 1, PHONE_CALL = 2, BOOKING = 3 }


	/** Container for message lead specific information. */
	export interface GoogleAdsHomeservicesLocalservicesV1MessageLead {

		/** Consumer phone number associated with the message lead. */
		consumerPhoneNumber?: string | null;

		/** Name of the customer who created the lead. */
		customerName?: string | null;

		/** The job type of the specified lead. */
		jobType?: string | null;

		/** The postal code of the customer who created the lead. */
		postalCode?: string | null;
	}

	/** Container for message lead specific information. */
	export interface GoogleAdsHomeservicesLocalservicesV1MessageLeadFormProperties {

		/** Consumer phone number associated with the message lead. */
		consumerPhoneNumber: FormControl<string | null | undefined>,

		/** Name of the customer who created the lead. */
		customerName: FormControl<string | null | undefined>,

		/** The job type of the specified lead. */
		jobType: FormControl<string | null | undefined>,

		/** The postal code of the customer who created the lead. */
		postalCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsHomeservicesLocalservicesV1MessageLeadFormGroup() {
		return new FormGroup<GoogleAdsHomeservicesLocalservicesV1MessageLeadFormProperties>({
			consumerPhoneNumber: new FormControl<string | null | undefined>(undefined),
			customerName: new FormControl<string | null | undefined>(undefined),
			jobType: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for phone lead specific information. */
	export interface GoogleAdsHomeservicesLocalservicesV1PhoneLead {

		/** Timestamp of the phone call which resulted in a charged phone lead. */
		chargedCallTimestamp?: string | null;

		/** Duration of the charged phone call in seconds. */
		chargedConnectedCallDurationSeconds?: string | null;

		/** Consumer phone number associated with the phone lead. */
		consumerPhoneNumber?: string | null;
	}

	/** Container for phone lead specific information. */
	export interface GoogleAdsHomeservicesLocalservicesV1PhoneLeadFormProperties {

		/** Timestamp of the phone call which resulted in a charged phone lead. */
		chargedCallTimestamp: FormControl<string | null | undefined>,

		/** Duration of the charged phone call in seconds. */
		chargedConnectedCallDurationSeconds: FormControl<string | null | undefined>,

		/** Consumer phone number associated with the phone lead. */
		consumerPhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsHomeservicesLocalservicesV1PhoneLeadFormGroup() {
		return new FormGroup<GoogleAdsHomeservicesLocalservicesV1PhoneLeadFormProperties>({
			chargedCallTimestamp: new FormControl<string | null | undefined>(undefined),
			chargedConnectedCallDurationSeconds: new FormControl<string | null | undefined>(undefined),
			consumerPhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
	export interface GoogleTypeTimeZone {

		/** IANA Time Zone Database time zone, e.g. "America/New_York". */
		id?: string | null;

		/** Optional. IANA Time Zone Database version number, e.g. "2019a". */
		version?: string | null;
	}

	/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
	export interface GoogleTypeTimeZoneFormProperties {

		/** IANA Time Zone Database time zone, e.g. "America/New_York". */
		id: FormControl<string | null | undefined>,

		/** Optional. IANA Time Zone Database version number, e.g. "2019a". */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeTimeZoneFormGroup() {
		return new FormGroup<GoogleTypeTimeZoneFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A page of the response received from the SearchAccountReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page. */
	export interface GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse {

		/** List of account reports which maps 1:1 to a particular linked GLS account. */
		accountReports?: Array<GoogleAdsHomeservicesLocalservicesV1AccountReport>;

		/** Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. */
		nextPageToken?: string | null;
	}

	/** A page of the response received from the SearchAccountReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page. */
	export interface GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponseFormProperties {

		/** Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponseFormGroup() {
		return new FormGroup<GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A page of the response received from the SearchDetailedLeadReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page. */
	export interface GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse {

		/** List of detailed lead reports uniquely identified by external lead id. */
		detailedLeadReports?: Array<GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport>;

		/** Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. */
		nextPageToken?: string | null;
	}

	/** A page of the response received from the SearchDetailedLeadReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page. */
	export interface GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponseFormProperties {

		/** Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponseFormGroup() {
		return new FormGroup<GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.
		 * Get v1/accountReports:search
		 * @param {number} endDate_day Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * @param {number} endDate_month Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * @param {number} endDate_year Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * @param {number} pageSize The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional.
		 * @param {string} pageToken The `next_page_token` value returned from a previous request to SearchAccountReports that indicates where listing should continue. Optional.
		 * @param {string} query A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked accounts. Search expressions are case insensitive. Example query: | Query | Description | |-------------------------|-----------------------------------------------| | manager_customer_id:123 | Get Account Report for Manager with id 123. | Required.
		 * @param {number} startDate_day Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * @param {number} startDate_month Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * @param {number} startDate_year Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * @return {GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse} Successful response
		 */
		Localservices_accountReports_search(endDate_day: number | null | undefined, endDate_month: number | null | undefined, endDate_year: number | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined, startDate_day: number | null | undefined, startDate_month: number | null | undefined, startDate_year: number | null | undefined): Observable<GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse> {
			return this.http.get<GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse>(this.baseUri + 'v1/accountReports:search?endDate_day=' + endDate_day + '&endDate_month=' + endDate_month + '&endDate_year=' + endDate_year + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&startDate_day=' + startDate_day + '&startDate_month=' + startDate_month + '&startDate_year=' + startDate_year, {});
		}

		/**
		 * Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.
		 * Get v1/detailedLeadReports:search
		 * @param {number} endDate_day Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * @param {number} endDate_month Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * @param {number} endDate_year Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * @param {number} pageSize The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional.
		 * @param {string} pageToken The `next_page_token` value returned from a previous request to SearchDetailedLeadReports that indicates where listing should continue. Optional.
		 * @param {string} query A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked accounts. Search expressions are case insensitive. Example query: | Query | Description | |-------------------------|-----------------------------------------------| | manager_customer_id:123 | Get Detailed Lead Report for Manager with id | | | 123. | Required.
		 * @param {number} startDate_day Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * @param {number} startDate_month Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * @param {number} startDate_year Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * @return {GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse} Successful response
		 */
		Localservices_detailedLeadReports_search(endDate_day: number | null | undefined, endDate_month: number | null | undefined, endDate_year: number | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined, startDate_day: number | null | undefined, startDate_month: number | null | undefined, startDate_year: number | null | undefined): Observable<GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse> {
			return this.http.get<GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse>(this.baseUri + 'v1/detailedLeadReports:search?endDate_day=' + endDate_day + '&endDate_month=' + endDate_month + '&endDate_year=' + endDate_year + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&startDate_day=' + startDate_day + '&startDate_month=' + startDate_month + '&startDate_year=' + startDate_year, {});
		}
	}

}

