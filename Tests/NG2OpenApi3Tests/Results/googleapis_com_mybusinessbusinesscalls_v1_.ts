import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Metrics aggregated over the input time range. */
	export interface AggregateMetrics {

		/** Total count of answered calls. */
		answeredCallsCount?: number | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		endDate?: Date;

		/** A list of metrics by hour of day. */
		hourlyMetrics?: Array<HourlyMetrics>;

		/** Total count of missed calls. */
		missedCallsCount?: number | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		startDate?: Date;

		/** A list of metrics by day of week. */
		weekdayMetrics?: Array<WeekDayMetrics>;
	}

	/** Metrics aggregated over the input time range. */
	export interface AggregateMetricsFormProperties {

		/** Total count of answered calls. */
		answeredCallsCount: FormControl<number | null | undefined>,

		/** Total count of missed calls. */
		missedCallsCount: FormControl<number | null | undefined>,
	}
	export function CreateAggregateMetricsFormGroup() {
		return new FormGroup<AggregateMetricsFormProperties>({
			answeredCallsCount: new FormControl<number | null | undefined>(undefined),
			missedCallsCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metrics for an hour. */
	export interface HourlyMetrics {

		/** Hour of the day. Allowed values are 0-23. */
		hour?: number | null;

		/** Total count of missed calls for this hour. */
		missedCallsCount?: number | null;
	}

	/** Metrics for an hour. */
	export interface HourlyMetricsFormProperties {

		/** Hour of the day. Allowed values are 0-23. */
		hour: FormControl<number | null | undefined>,

		/** Total count of missed calls for this hour. */
		missedCallsCount: FormControl<number | null | undefined>,
	}
	export function CreateHourlyMetricsFormGroup() {
		return new FormGroup<HourlyMetricsFormProperties>({
			hour: new FormControl<number | null | undefined>(undefined),
			missedCallsCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metrics for a week day. */
	export interface WeekDayMetrics {

		/** Day of the week. Allowed values are Sunday - Saturday. */
		day?: WeekDayMetricsDay | null;

		/** Total count of missed calls for this hour. */
		missedCallsCount?: number | null;
	}

	/** Metrics for a week day. */
	export interface WeekDayMetricsFormProperties {

		/** Day of the week. Allowed values are Sunday - Saturday. */
		day: FormControl<WeekDayMetricsDay | null | undefined>,

		/** Total count of missed calls for this hour. */
		missedCallsCount: FormControl<number | null | undefined>,
	}
	export function CreateWeekDayMetricsFormGroup() {
		return new FormGroup<WeekDayMetricsFormProperties>({
			day: new FormControl<WeekDayMetricsDay | null | undefined>(undefined),
			missedCallsCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum WeekDayMetricsDay { DAY_OF_WEEK_UNSPECIFIED = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6, SUNDAY = 7 }


	/** Insights for calls made to a location. */
	export interface BusinessCallsInsights {

		/** Metrics aggregated over the input time range. */
		aggregateMetrics?: AggregateMetrics;

		/** The metric for which the value applies. */
		metricType?: BusinessCallsInsightsMetricType | null;

		/** Required. The resource name of the calls insights. Format: locations/{location}/businesscallsinsights */
		name?: string | null;
	}

	/** Insights for calls made to a location. */
	export interface BusinessCallsInsightsFormProperties {

		/** The metric for which the value applies. */
		metricType: FormControl<BusinessCallsInsightsMetricType | null | undefined>,

		/** Required. The resource name of the calls insights. Format: locations/{location}/businesscallsinsights */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBusinessCallsInsightsFormGroup() {
		return new FormGroup<BusinessCallsInsightsFormProperties>({
			metricType: new FormControl<BusinessCallsInsightsMetricType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BusinessCallsInsightsMetricType { METRIC_TYPE_UNSPECIFIED = 0, AGGREGATE_COUNT = 1 }


	/** Business calls settings for a location. */
	export interface BusinessCallsSettings {

		/** Required. The state of this location's enrollment in Business calls. */
		callsState?: BusinessCallsSettingsCallsState | null;

		/** Input only. Time when the end user provided consent to the API user to enable business calls. */
		consentTime?: string | null;

		/** Required. The resource name of the calls settings. Format: locations/{location}/businesscallssettings */
		name?: string | null;
	}

	/** Business calls settings for a location. */
	export interface BusinessCallsSettingsFormProperties {

		/** Required. The state of this location's enrollment in Business calls. */
		callsState: FormControl<BusinessCallsSettingsCallsState | null | undefined>,

		/** Input only. Time when the end user provided consent to the API user to enable business calls. */
		consentTime: FormControl<string | null | undefined>,

		/** Required. The resource name of the calls settings. Format: locations/{location}/businesscallssettings */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBusinessCallsSettingsFormGroup() {
		return new FormGroup<BusinessCallsSettingsFormProperties>({
			callsState: new FormControl<BusinessCallsSettingsCallsState | null | undefined>(undefined),
			consentTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BusinessCallsSettingsCallsState { CALLS_STATE_UNSPECIFIED = 0, ENABLED = 1, DISABLED = 2 }


	/** Response message for ListBusinessCallsInsights. */
	export interface ListBusinessCallsInsightsResponse {

		/** A collection of business calls insights for the location. */
		businessCallsInsights?: Array<BusinessCallsInsights>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Some of the metric_types (e.g, AGGREGATE_COUNT) returns a single page. For these metrics, the next_page_token will be empty. */
		nextPageToken?: string | null;
	}

	/** Response message for ListBusinessCallsInsights. */
	export interface ListBusinessCallsInsightsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Some of the metric_types (e.g, AGGREGATE_COUNT) returns a single page. For these metrics, the next_page_token will be empty. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBusinessCallsInsightsResponseFormGroup() {
		return new FormGroup<ListBusinessCallsInsightsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the Business calls settings resource for the given location.
		 * Get v1/{name}
		 * @param {string} name Required. The BusinessCallsSettings to get. The `name` field is used to identify the business call settings to get. Format: locations/{location_id}/businesscallssettings.
		 * @return {BusinessCallsSettings} Successful response
		 */
		Mybusinessbusinesscalls_locations_getBusinesscallssettings(name: string): Observable<BusinessCallsSettings> {
			return this.http.get<BusinessCallsSettings>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the Business call settings for the specified location.
		 * Patch v1/{name}
		 * @param {string} name Required. The resource name of the calls settings. Format: locations/{location}/businesscallssettings
		 * @param {string} updateMask Required. The list of fields to update.
		 * @return {BusinessCallsSettings} Successful response
		 */
		Mybusinessbusinesscalls_locations_updateBusinesscallssettings(name: string, updateMask: string | null | undefined, requestBody: BusinessCallsSettings): Observable<BusinessCallsSettings> {
			return this.http.patch<BusinessCallsSettings>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns insights for Business calls for a location.
		 * Get v1/{parent}/businesscallsinsights
		 * @param {string} parent Required. The parent location to fetch calls insights for. Format: locations/{location_id}
		 * @param {string} filter Optional. A filter constraining the calls insights to return. The response includes only entries that match the filter. If the MetricType is not provided, AGGREGATE_COUNT is returned. If no end_date is provided, the last date for which data is available is used. If no start_date is provided, we will default to the first date for which data is available, which is currently 6 months. If start_date is before the date when data is available, data is returned starting from the date when it is available. At this time we support following filters. 1. start_date="DATE" where date is in YYYY-MM-DD format. 2. end_date="DATE" where date is in YYYY-MM-DD format. 3. metric_type=XYZ where XYZ is a valid MetricType. 4. Conjunctions(AND) of all of the above. e.g., "start_date=2021-08-01 AND end_date=2021-08-10 AND metric_type=AGGREGATE_COUNT" The AGGREGATE_COUNT metric_type ignores the DD part of the date.
		 * @param {number} pageSize Optional. The maximum number of BusinessCallsInsights to return. If unspecified, at most 20 will be returned. Some of the metric_types(e.g, AGGREGATE_COUNT) returns a single page. For these metrics, the page_size is ignored.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListBusinessCallsInsights` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBusinessCallsInsights` must match the call that provided the page token. Some of the metric_types (e.g, AGGREGATE_COUNT) returns a single page. For these metrics, the pake_token is ignored.
		 * @return {ListBusinessCallsInsightsResponse} Successful response
		 */
		Mybusinessbusinesscalls_locations_businesscallsinsights_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBusinessCallsInsightsResponse> {
			return this.http.get<ListBusinessCallsInsightsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/businesscallsinsights&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

