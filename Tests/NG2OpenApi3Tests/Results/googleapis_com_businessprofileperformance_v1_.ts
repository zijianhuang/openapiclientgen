import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents a single datapoint, where each datapoint is a DailyMetric-DailySubEntityType-TimeSeries tuple. */
	export interface DailyMetricTimeSeries {

		/** The DailyMetric that the TimeSeries represents. */
		dailyMetric?: DailyMetricTimeSeriesDailyMetric | null;

		/** Represents all possible subentity types that are associated with DailyMetrics. */
		dailySubEntityType?: DailySubEntityType;

		/** Represents a timeseries. */
		timeSeries?: TimeSeries;
	}

	/** Represents a single datapoint, where each datapoint is a DailyMetric-DailySubEntityType-TimeSeries tuple. */
	export interface DailyMetricTimeSeriesFormProperties {

		/** The DailyMetric that the TimeSeries represents. */
		dailyMetric: FormControl<DailyMetricTimeSeriesDailyMetric | null | undefined>,
	}
	export function CreateDailyMetricTimeSeriesFormGroup() {
		return new FormGroup<DailyMetricTimeSeriesFormProperties>({
			dailyMetric: new FormControl<DailyMetricTimeSeriesDailyMetric | null | undefined>(undefined),
		});

	}

	export enum DailyMetricTimeSeriesDailyMetric { DAILY_METRIC_UNKNOWN = 'DAILY_METRIC_UNKNOWN', BUSINESS_IMPRESSIONS_DESKTOP_MAPS = 'BUSINESS_IMPRESSIONS_DESKTOP_MAPS', BUSINESS_IMPRESSIONS_DESKTOP_SEARCH = 'BUSINESS_IMPRESSIONS_DESKTOP_SEARCH', BUSINESS_IMPRESSIONS_MOBILE_MAPS = 'BUSINESS_IMPRESSIONS_MOBILE_MAPS', BUSINESS_IMPRESSIONS_MOBILE_SEARCH = 'BUSINESS_IMPRESSIONS_MOBILE_SEARCH', BUSINESS_CONVERSATIONS = 'BUSINESS_CONVERSATIONS', BUSINESS_DIRECTION_REQUESTS = 'BUSINESS_DIRECTION_REQUESTS', CALL_CLICKS = 'CALL_CLICKS', WEBSITE_CLICKS = 'WEBSITE_CLICKS', BUSINESS_BOOKINGS = 'BUSINESS_BOOKINGS', BUSINESS_FOOD_ORDERS = 'BUSINESS_FOOD_ORDERS', BUSINESS_FOOD_MENU_CLICKS = 'BUSINESS_FOOD_MENU_CLICKS' }


	/** Represents all possible subentity types that are associated with DailyMetrics. */
	export interface DailySubEntityType {

		/** Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics = NONE. */
		dayOfWeek?: DailySubEntityTypeDayOfWeek | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		timeOfDay?: TimeOfDay;
	}

	/** Represents all possible subentity types that are associated with DailyMetrics. */
	export interface DailySubEntityTypeFormProperties {

		/** Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics = NONE. */
		dayOfWeek: FormControl<DailySubEntityTypeDayOfWeek | null | undefined>,
	}
	export function CreateDailySubEntityTypeFormGroup() {
		return new FormGroup<DailySubEntityTypeFormProperties>({
			dayOfWeek: new FormControl<DailySubEntityTypeDayOfWeek | null | undefined>(undefined),
		});

	}

	export enum DailySubEntityTypeDayOfWeek { DAY_OF_WEEK_UNSPECIFIED = 'DAY_OF_WEEK_UNSPECIFIED', MONDAY = 'MONDAY', TUESDAY = 'TUESDAY', WEDNESDAY = 'WEDNESDAY', THURSDAY = 'THURSDAY', FRIDAY = 'FRIDAY', SATURDAY = 'SATURDAY', SUNDAY = 'SUNDAY' }


	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDay {

		/**
		 * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hours?: number | null;

		/**
		 * Minutes of hour of day. Must be from 0 to 59.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minutes?: number | null;

		/**
		 * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos?: number | null;

		/**
		 * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds?: number | null;
	}

	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDayFormProperties {

		/**
		 * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hours: FormControl<number | null | undefined>,

		/**
		 * Minutes of hour of day. Must be from 0 to 59.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minutes: FormControl<number | null | undefined>,

		/**
		 * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos: FormControl<number | null | undefined>,

		/**
		 * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateTimeOfDayFormGroup() {
		return new FormGroup<TimeOfDayFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a timeseries. */
	export interface TimeSeries {

		/** List of datapoints in the timeseries, where each datapoint is a date-value pair. */
		datedValues?: Array<DatedValue>;
	}

	/** Represents a timeseries. */
	export interface TimeSeriesFormProperties {
	}
	export function CreateTimeSeriesFormGroup() {
		return new FormGroup<TimeSeriesFormProperties>({
		});

	}


	/** Represents a single datapoint in the timeseries, where each datapoint is a date-value pair. */
	export interface DatedValue {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		date?: Date;

		/** The value of the datapoint. This will not be present when the value is zero. */
		value?: string | null;
	}

	/** Represents a single datapoint in the timeseries, where each datapoint is a date-value pair. */
	export interface DatedValueFormProperties {

		/** The value of the datapoint. This will not be present when the value is zero. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDatedValueFormGroup() {
		return new FormGroup<DatedValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day?: number | null;

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month?: number | null;

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the response for FetchMultiDailyMetricsTimeSeries. */
	export interface FetchMultiDailyMetricsTimeSeriesResponse {

		/** DailyMetrics and their corresponding time series. */
		multiDailyMetricTimeSeries?: Array<MultiDailyMetricTimeSeries>;
	}

	/** Represents the response for FetchMultiDailyMetricsTimeSeries. */
	export interface FetchMultiDailyMetricsTimeSeriesResponseFormProperties {
	}
	export function CreateFetchMultiDailyMetricsTimeSeriesResponseFormGroup() {
		return new FormGroup<FetchMultiDailyMetricsTimeSeriesResponseFormProperties>({
		});

	}


	/** Represents a list of tuples of DailyMetric-DailySubEntityType-TimeSeries. */
	export interface MultiDailyMetricTimeSeries {

		/** List of DailyMetric-TimeSeries pairs. */
		dailyMetricTimeSeries?: Array<DailyMetricTimeSeries>;
	}

	/** Represents a list of tuples of DailyMetric-DailySubEntityType-TimeSeries. */
	export interface MultiDailyMetricTimeSeriesFormProperties {
	}
	export function CreateMultiDailyMetricTimeSeriesFormGroup() {
		return new FormGroup<MultiDailyMetricTimeSeriesFormProperties>({
		});

	}


	/** Represents the response for GetDailyMetricsTimeSeries. */
	export interface GetDailyMetricsTimeSeriesResponse {

		/** Represents a timeseries. */
		timeSeries?: TimeSeries;
	}

	/** Represents the response for GetDailyMetricsTimeSeries. */
	export interface GetDailyMetricsTimeSeriesResponseFormProperties {
	}
	export function CreateGetDailyMetricsTimeSeriesResponseFormGroup() {
		return new FormGroup<GetDailyMetricsTimeSeriesResponseFormProperties>({
		});

	}


	/** Represents an insights value. */
	export interface InsightsValue {

		/** Represents the threshold below which the actual value falls. */
		threshold?: string | null;

		/** Represents the actual value. */
		value?: string | null;
	}

	/** Represents an insights value. */
	export interface InsightsValueFormProperties {

		/** Represents the threshold below which the actual value falls. */
		threshold: FormControl<string | null | undefined>,

		/** Represents the actual value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateInsightsValueFormGroup() {
		return new FormGroup<InsightsValueFormProperties>({
			threshold: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response for ListSearchKeywordImpressionsMonthly. */
	export interface ListSearchKeywordImpressionsMonthlyResponse {

		/** A token indicating the last paginated result returned. This can be used by succeeding requests to get the next "page" of keywords. It will only be present when there are more results to be returned. */
		nextPageToken?: string | null;

		/** Search terms which have been used to find a business. */
		searchKeywordsCounts?: Array<SearchKeywordCount>;
	}

	/** Represents the response for ListSearchKeywordImpressionsMonthly. */
	export interface ListSearchKeywordImpressionsMonthlyResponseFormProperties {

		/** A token indicating the last paginated result returned. This can be used by succeeding requests to get the next "page" of keywords. It will only be present when there are more results to be returned. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSearchKeywordImpressionsMonthlyResponseFormGroup() {
		return new FormGroup<ListSearchKeywordImpressionsMonthlyResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single search keyword and its value. */
	export interface SearchKeywordCount {

		/** Represents an insights value. */
		insightsValue?: InsightsValue;

		/** The lower-cased string that the user entered. */
		searchKeyword?: string | null;
	}

	/** Represents a single search keyword and its value. */
	export interface SearchKeywordCountFormProperties {

		/** The lower-cased string that the user entered. */
		searchKeyword: FormControl<string | null | undefined>,
	}
	export function CreateSearchKeywordCountFormGroup() {
		return new FormGroup<SearchKeywordCountFormProperties>({
			searchKeyword: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the values for each date from a given time range and optionally the sub entity type, where applicable, that are associated with the specific daily metrics. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
		 * Get v1/{location}:fetchMultiDailyMetricsTimeSeries
		 * @param {string} location Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.
		 * @param {Array<DailyMetricTimeSeriesDailyMetric>} dailyMetrics Required. The metrics to retrieve time series for.
		 * @param {number} dailyRange_endDate_day Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} dailyRange_endDate_month Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} dailyRange_endDate_year Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} dailyRange_startDate_day Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} dailyRange_startDate_month Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} dailyRange_startDate_year Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {FetchMultiDailyMetricsTimeSeriesResponse} Successful response
		 */
		Businessprofileperformance_locations_fetchMultiDailyMetricsTimeSeries(location: string, dailyMetrics: Array<DailyMetricTimeSeriesDailyMetric> | null | undefined, dailyRange_endDate_day: number | null | undefined, dailyRange_endDate_month: number | null | undefined, dailyRange_endDate_year: number | null | undefined, dailyRange_startDate_day: number | null | undefined, dailyRange_startDate_month: number | null | undefined, dailyRange_startDate_year: number | null | undefined): Observable<FetchMultiDailyMetricsTimeSeriesResponse> {
			return this.http.get<FetchMultiDailyMetricsTimeSeriesResponse>(this.baseUri + 'v1/' + (location == null ? '' : encodeURIComponent(location)) + ':fetchMultiDailyMetricsTimeSeries&' + dailyMetrics?.map(z => `dailyMetrics=${z}`).join('&') + '&dailyRange_endDate_day=' + dailyRange_endDate_day + '&dailyRange_endDate_month=' + dailyRange_endDate_month + '&dailyRange_endDate_year=' + dailyRange_endDate_year + '&dailyRange_startDate_day=' + dailyRange_startDate_day + '&dailyRange_startDate_month=' + dailyRange_startDate_month + '&dailyRange_startDate_year=' + dailyRange_startDate_year, {});
		}

		/**
		 * Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
		 * Get v1/{name}:getDailyMetricsTimeSeries
		 * @param {string} name Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.
		 * @param {DailyMetricTimeSeriesDailyMetric} dailyMetric Required. The metric to retrieve time series.
		 * @param {number} dailyRange_endDate_day Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} dailyRange_endDate_month Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} dailyRange_endDate_year Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} dailyRange_startDate_day Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} dailyRange_startDate_month Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} dailyRange_startDate_year Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {DailySubEntityTypeDayOfWeek} dailySubEntityType_dayOfWeek Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics = NONE.
		 * @param {number} dailySubEntityType_timeOfDay_hours Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} dailySubEntityType_timeOfDay_minutes Minutes of hour of day. Must be from 0 to 59.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} dailySubEntityType_timeOfDay_nanos Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} dailySubEntityType_timeOfDay_seconds Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetDailyMetricsTimeSeriesResponse} Successful response
		 */
		Businessprofileperformance_locations_getDailyMetricsTimeSeries(name: string, dailyMetric: DailyMetricTimeSeriesDailyMetric | null | undefined, dailyRange_endDate_day: number | null | undefined, dailyRange_endDate_month: number | null | undefined, dailyRange_endDate_year: number | null | undefined, dailyRange_startDate_day: number | null | undefined, dailyRange_startDate_month: number | null | undefined, dailyRange_startDate_year: number | null | undefined, dailySubEntityType_dayOfWeek: DailySubEntityTypeDayOfWeek | null | undefined, dailySubEntityType_timeOfDay_hours: number | null | undefined, dailySubEntityType_timeOfDay_minutes: number | null | undefined, dailySubEntityType_timeOfDay_nanos: number | null | undefined, dailySubEntityType_timeOfDay_seconds: number | null | undefined): Observable<GetDailyMetricsTimeSeriesResponse> {
			return this.http.get<GetDailyMetricsTimeSeriesResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':getDailyMetricsTimeSeries&dailyMetric=' + dailyMetric + '&dailyRange_endDate_day=' + dailyRange_endDate_day + '&dailyRange_endDate_month=' + dailyRange_endDate_month + '&dailyRange_endDate_year=' + dailyRange_endDate_year + '&dailyRange_startDate_day=' + dailyRange_startDate_day + '&dailyRange_startDate_month=' + dailyRange_startDate_month + '&dailyRange_startDate_year=' + dailyRange_startDate_year + '&dailySubEntityType_dayOfWeek=' + dailySubEntityType_dayOfWeek + '&dailySubEntityType_timeOfDay_hours=' + dailySubEntityType_timeOfDay_hours + '&dailySubEntityType_timeOfDay_minutes=' + dailySubEntityType_timeOfDay_minutes + '&dailySubEntityType_timeOfDay_nanos=' + dailySubEntityType_timeOfDay_nanos + '&dailySubEntityType_timeOfDay_seconds=' + dailySubEntityType_timeOfDay_seconds, {});
		}

		/**
		 * Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`
		 * Get v1/{parent}/searchkeywords/impressions/monthly
		 * @param {string} parent Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.
		 * @param {number} monthlyRange_endMonth_day Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} monthlyRange_endMonth_month Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} monthlyRange_endMonth_year Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} monthlyRange_startMonth_day Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} monthlyRange_startMonth_month Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} monthlyRange_startMonth_year Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize Optional. The number of results requested. The default page size is 100. Page size can be set to a maximum of 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token indicating the next paginated result to be returned.
		 * @return {ListSearchKeywordImpressionsMonthlyResponse} Successful response
		 */
		Businessprofileperformance_locations_searchkeywords_impressions_monthly_list(parent: string, monthlyRange_endMonth_day: number | null | undefined, monthlyRange_endMonth_month: number | null | undefined, monthlyRange_endMonth_year: number | null | undefined, monthlyRange_startMonth_day: number | null | undefined, monthlyRange_startMonth_month: number | null | undefined, monthlyRange_startMonth_year: number | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSearchKeywordImpressionsMonthlyResponse> {
			return this.http.get<ListSearchKeywordImpressionsMonthlyResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/searchkeywords/impressions/monthly&monthlyRange_endMonth_day=' + monthlyRange_endMonth_day + '&monthlyRange_endMonth_month=' + monthlyRange_endMonth_month + '&monthlyRange_endMonth_year=' + monthlyRange_endMonth_year + '&monthlyRange_startMonth_day=' + monthlyRange_startMonth_day + '&monthlyRange_startMonth_month=' + monthlyRange_startMonth_month + '&monthlyRange_startMonth_year=' + monthlyRange_startMonth_year + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

