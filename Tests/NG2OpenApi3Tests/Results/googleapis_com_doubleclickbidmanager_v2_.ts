import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A channel grouping defines a set of rules that can be used to categorize events in a path report. */
	export interface ChannelGrouping {

		/** The name to apply to an event that does not match any of the rules in the channel grouping. */
		fallbackName?: string | null;

		/** Channel Grouping name. */
		name?: string | null;

		/** Rules within Channel Grouping. There is a limit of 100 rules that can be set per channel grouping. */
		rules?: Array<Rule>;
	}

	/** A channel grouping defines a set of rules that can be used to categorize events in a path report. */
	export interface ChannelGroupingFormProperties {

		/** The name to apply to an event that does not match any of the rules in the channel grouping. */
		fallbackName: FormControl<string | null | undefined>,

		/** Channel Grouping name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateChannelGroupingFormGroup() {
		return new FormGroup<ChannelGroupingFormProperties>({
			fallbackName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Rule defines a name, and a boolean expression in [conjunctive normal form] (http://mathworld.wolfram.com/ConjunctiveNormalForm.html){.external} that can be applied to a path event to determine if that name should be applied. */
	export interface Rule {

		/** DisjunctiveMatchStatements within a Rule. DisjunctiveMatchStatement OR's all contained filters. */
		disjunctiveMatchStatements?: Array<DisjunctiveMatchStatement>;

		/** Rule name. */
		name?: string | null;
	}

	/** A Rule defines a name, and a boolean expression in [conjunctive normal form] (http://mathworld.wolfram.com/ConjunctiveNormalForm.html){.external} that can be applied to a path event to determine if that name should be applied. */
	export interface RuleFormProperties {

		/** Rule name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DisjunctiveMatchStatement that OR's all contained filters. */
	export interface DisjunctiveMatchStatement {

		/** Filters. There is a limit of 100 filters that can be set per disjunctive match statement. */
		eventFilters?: Array<EventFilter>;
	}

	/** DisjunctiveMatchStatement that OR's all contained filters. */
	export interface DisjunctiveMatchStatementFormProperties {
	}
	export function CreateDisjunctiveMatchStatementFormGroup() {
		return new FormGroup<DisjunctiveMatchStatementFormProperties>({
		});

	}


	/** Defines the type of filter to be applied to the path, a DV360 event dimension filter. */
	export interface EventFilter {

		/** Dimension filter on path events. */
		dimensionFilter?: PathQueryOptionsFilter;
	}

	/** Defines the type of filter to be applied to the path, a DV360 event dimension filter. */
	export interface EventFilterFormProperties {
	}
	export function CreateEventFilterFormGroup() {
		return new FormGroup<EventFilterFormProperties>({
		});

	}


	/** Dimension filter on path events. */
	export interface PathQueryOptionsFilter {

		/** Dimension the filter is applied to. */
		filter?: string | null;

		/** Match logic of the filter. */
		match?: PathQueryOptionsFilterMatch | null;

		/** Values to filter on. */
		values?: Array<string>;
	}

	/** Dimension filter on path events. */
	export interface PathQueryOptionsFilterFormProperties {

		/** Dimension the filter is applied to. */
		filter: FormControl<string | null | undefined>,

		/** Match logic of the filter. */
		match: FormControl<PathQueryOptionsFilterMatch | null | undefined>,
	}
	export function CreatePathQueryOptionsFilterFormGroup() {
		return new FormGroup<PathQueryOptionsFilterFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			match: new FormControl<PathQueryOptionsFilterMatch | null | undefined>(undefined),
		});

	}

	export enum PathQueryOptionsFilterMatch { UNKNOWN = 0, EXACT = 1, PARTIAL = 2, BEGINS_WITH = 3, WILDCARD_EXPRESSION = 4 }


	/** Report data range. */
	export interface DataRange {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		customEndDate?: Date;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		customStartDate?: Date;

		/** Report data range used to generate the report. */
		range?: DataRangeRange | null;
	}

	/** Report data range. */
	export interface DataRangeFormProperties {

		/** Report data range used to generate the report. */
		range: FormControl<DataRangeRange | null | undefined>,
	}
	export function CreateDataRangeFormGroup() {
		return new FormGroup<DataRangeFormProperties>({
			range: new FormControl<DataRangeRange | null | undefined>(undefined),
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

	export enum DataRangeRange { RANGE_UNSPECIFIED = 0, CUSTOM_DATES = 1, CURRENT_DAY = 2, PREVIOUS_DAY = 3, WEEK_TO_DATE = 4, MONTH_TO_DATE = 5, QUARTER_TO_DATE = 6, YEAR_TO_DATE = 7, PREVIOUS_WEEK = 8, PREVIOUS_MONTH = 9, PREVIOUS_QUARTER = 10, PREVIOUS_YEAR = 11, LAST_7_DAYS = 12, LAST_30_DAYS = 13, LAST_90_DAYS = 14, LAST_365_DAYS = 15, ALL_TIME = 16, LAST_14_DAYS = 17, LAST_60_DAYS = 18 }


	/** Filter used to match traffic data in your report. */
	export interface FilterPair {

		/** Filter type. */
		type?: string | null;

		/** Filter value. */
		value?: string | null;
	}

	/** Filter used to match traffic data in your report. */
	export interface FilterPairFormProperties {

		/** Filter type. */
		type: FormControl<string | null | undefined>,

		/** Filter value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFilterPairFormGroup() {
		return new FormGroup<FilterPairFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListQueriesResponse {

		/** A token, which can be sent as page_token to retrieve the next page of queries. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The list of queries. */
		queries?: Array<Query>;
	}
	export interface ListQueriesResponseFormProperties {

		/** A token, which can be sent as page_token to retrieve the next page of queries. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListQueriesResponseFormGroup() {
		return new FormGroup<ListQueriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a query. */
	export interface Query {

		/** Query metadata. */
		metadata?: QueryMetadata;

		/** Parameters of a query or report. */
		params?: Parameters;

		/** Output only. Query ID. */
		queryId?: string | null;

		/** Information on when and how frequently to run a query. */
		schedule?: QuerySchedule;
	}

	/** Represents a query. */
	export interface QueryFormProperties {

		/** Output only. Query ID. */
		queryId: FormControl<string | null | undefined>,
	}
	export function CreateQueryFormGroup() {
		return new FormGroup<QueryFormProperties>({
			queryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Query metadata. */
	export interface QueryMetadata {

		/** Report data range. */
		dataRange?: DataRange;

		/** Format of the generated report. */
		format?: QueryMetadataFormat | null;

		/** Whether to send an email notification when a report is ready. Defaults to false. */
		sendNotification?: boolean | null;

		/** List of email addresses which are sent email notifications when the report is finished. Separate from send_notification. */
		shareEmailAddress?: Array<string>;

		/** Query title. It is used to name the reports generated from this query. */
		title?: string | null;
	}

	/** Query metadata. */
	export interface QueryMetadataFormProperties {

		/** Format of the generated report. */
		format: FormControl<QueryMetadataFormat | null | undefined>,

		/** Whether to send an email notification when a report is ready. Defaults to false. */
		sendNotification: FormControl<boolean | null | undefined>,

		/** Query title. It is used to name the reports generated from this query. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateQueryMetadataFormGroup() {
		return new FormGroup<QueryMetadataFormProperties>({
			format: new FormControl<QueryMetadataFormat | null | undefined>(undefined),
			sendNotification: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QueryMetadataFormat { FORMAT_UNSPECIFIED = 0, CSV = 1, XLSX = 2 }


	/** Parameters of a query or report. */
	export interface Parameters {

		/** Filters used to match traffic data in your report. */
		filters?: Array<FilterPair>;

		/** Data is grouped by the filters listed in this field. */
		groupBys?: Array<string>;

		/** Metrics to include as columns in your report. */
		metrics?: Array<string>;

		/** Additional query options. */
		options?: Options;

		/** The type of the report. The type of the report will dictate what dimesions, filters, and metrics can be used. */
		type?: ParametersType | null;
	}

	/** Parameters of a query or report. */
	export interface ParametersFormProperties {

		/** The type of the report. The type of the report will dictate what dimesions, filters, and metrics can be used. */
		type: FormControl<ParametersType | null | undefined>,
	}
	export function CreateParametersFormGroup() {
		return new FormGroup<ParametersFormProperties>({
			type: new FormControl<ParametersType | null | undefined>(undefined),
		});

	}


	/** Additional query options. */
	export interface Options {

		/** Set to true and filter your report by `FILTER_INSERTION_ORDER` or `FILTER_LINE_ITEM` to include data for audience lists specifically targeted by those items. */
		includeOnlyTargetedUserLists?: boolean | null;

		/** Path Query Options for Report Options. */
		pathQueryOptions?: PathQueryOptions;
	}

	/** Additional query options. */
	export interface OptionsFormProperties {

		/** Set to true and filter your report by `FILTER_INSERTION_ORDER` or `FILTER_LINE_ITEM` to include data for audience lists specifically targeted by those items. */
		includeOnlyTargetedUserLists: FormControl<boolean | null | undefined>,
	}
	export function CreateOptionsFormGroup() {
		return new FormGroup<OptionsFormProperties>({
			includeOnlyTargetedUserLists: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Path Query Options for Report Options. */
	export interface PathQueryOptions {

		/** A channel grouping defines a set of rules that can be used to categorize events in a path report. */
		channelGrouping?: ChannelGrouping;

		/** Path Filters. There is a limit of 100 path filters that can be set per report. */
		pathFilters?: Array<PathFilter>;
	}

	/** Path Query Options for Report Options. */
	export interface PathQueryOptionsFormProperties {
	}
	export function CreatePathQueryOptionsFormGroup() {
		return new FormGroup<PathQueryOptionsFormProperties>({
		});

	}


	/** Path filters specify which paths to include in a report. A path is the result of combining DV360 events based on User ID to create a workflow of users' actions. When a path filter is set, the resulting report will only include paths that match the specified event at the specified position. All other paths will be excluded. */
	export interface PathFilter {

		/** Filter on an event to be applied to some part of the path. */
		eventFilters?: Array<EventFilter>;

		/** The position of the path the filter should match to (first, last, or any event in path). */
		pathMatchPosition?: PathFilterPathMatchPosition | null;
	}

	/** Path filters specify which paths to include in a report. A path is the result of combining DV360 events based on User ID to create a workflow of users' actions. When a path filter is set, the resulting report will only include paths that match the specified event at the specified position. All other paths will be excluded. */
	export interface PathFilterFormProperties {

		/** The position of the path the filter should match to (first, last, or any event in path). */
		pathMatchPosition: FormControl<PathFilterPathMatchPosition | null | undefined>,
	}
	export function CreatePathFilterFormGroup() {
		return new FormGroup<PathFilterFormProperties>({
			pathMatchPosition: new FormControl<PathFilterPathMatchPosition | null | undefined>(undefined),
		});

	}

	export enum PathFilterPathMatchPosition { PATH_MATCH_POSITION_UNSPECIFIED = 0, ANY = 1, FIRST = 2, LAST = 3 }

	export enum ParametersType { REPORT_TYPE_UNSPECIFIED = 0, STANDARD = 1, INVENTORY_AVAILABILITY = 2, AUDIENCE_COMPOSITION = 3, FLOODLIGHT = 4, YOUTUBE = 5, GRP = 6, YOUTUBE_PROGRAMMATIC_GUARANTEED = 7, REACH = 8, UNIQUE_REACH_AUDIENCE = 9, FULL_PATH = 10, PATH_ATTRIBUTION = 11 }


	/** Information on when and how frequently to run a query. */
	export interface QuerySchedule {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		endDate?: Date;

		/** How often the query is run. */
		frequency?: QueryScheduleFrequency | null;

		/** Canonical timezone code for report generation time. Defaults to `America/New_York`. */
		nextRunTimezoneCode?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		startDate?: Date;
	}

	/** Information on when and how frequently to run a query. */
	export interface QueryScheduleFormProperties {

		/** How often the query is run. */
		frequency: FormControl<QueryScheduleFrequency | null | undefined>,

		/** Canonical timezone code for report generation time. Defaults to `America/New_York`. */
		nextRunTimezoneCode: FormControl<string | null | undefined>,
	}
	export function CreateQueryScheduleFormGroup() {
		return new FormGroup<QueryScheduleFormProperties>({
			frequency: new FormControl<QueryScheduleFrequency | null | undefined>(undefined),
			nextRunTimezoneCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QueryScheduleFrequency { FREQUENCY_UNSPECIFIED = 0, ONE_TIME = 1, DAILY = 2, WEEKLY = 3, SEMI_MONTHLY = 4, MONTHLY = 5, QUARTERLY = 6, YEARLY = 7 }

	export interface ListReportsResponse {

		/** A token, which can be sent as page_token to retrieve the next page of reports. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Retrieved reports. */
		reports?: Array<Report>;
	}
	export interface ListReportsResponseFormProperties {

		/** A token, which can be sent as page_token to retrieve the next page of reports. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListReportsResponseFormGroup() {
		return new FormGroup<ListReportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a report. */
	export interface Report {

		/** Key used to identify a report. */
		key?: ReportKey;

		/** Report metadata. */
		metadata?: ReportMetadata;

		/** Parameters of a query or report. */
		params?: Parameters;
	}

	/** Represents a report. */
	export interface ReportFormProperties {
	}
	export function CreateReportFormGroup() {
		return new FormGroup<ReportFormProperties>({
		});

	}


	/** Key used to identify a report. */
	export interface ReportKey {

		/** Output only. Query ID. */
		queryId?: string | null;

		/** Output only. Report ID. */
		reportId?: string | null;
	}

	/** Key used to identify a report. */
	export interface ReportKeyFormProperties {

		/** Output only. Query ID. */
		queryId: FormControl<string | null | undefined>,

		/** Output only. Report ID. */
		reportId: FormControl<string | null | undefined>,
	}
	export function CreateReportKeyFormGroup() {
		return new FormGroup<ReportKeyFormProperties>({
			queryId: new FormControl<string | null | undefined>(undefined),
			reportId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Report metadata. */
	export interface ReportMetadata {

		/** Output only. The path to the location in Google Cloud Storage where the report is stored. */
		googleCloudStoragePath?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		reportDataEndDate?: Date;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		reportDataStartDate?: Date;

		/** Report status. */
		status?: ReportStatus;
	}

	/** Report metadata. */
	export interface ReportMetadataFormProperties {

		/** Output only. The path to the location in Google Cloud Storage where the report is stored. */
		googleCloudStoragePath: FormControl<string | null | undefined>,
	}
	export function CreateReportMetadataFormGroup() {
		return new FormGroup<ReportMetadataFormProperties>({
			googleCloudStoragePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Report status. */
	export interface ReportStatus {

		/** Output only. The time when this report either completed successfully or failed. */
		finishTime?: string | null;

		/** The file type of the report. */
		format?: QueryMetadataFormat | null;

		/** Output only. The state of the report. */
		state?: ReportStatusState | null;
	}

	/** Report status. */
	export interface ReportStatusFormProperties {

		/** Output only. The time when this report either completed successfully or failed. */
		finishTime: FormControl<string | null | undefined>,

		/** The file type of the report. */
		format: FormControl<QueryMetadataFormat | null | undefined>,

		/** Output only. The state of the report. */
		state: FormControl<ReportStatusState | null | undefined>,
	}
	export function CreateReportStatusFormGroup() {
		return new FormGroup<ReportStatusFormProperties>({
			finishTime: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<QueryMetadataFormat | null | undefined>(undefined),
			state: new FormControl<ReportStatusState | null | undefined>(undefined),
		});

	}

	export enum ReportStatusState { STATE_UNSPECIFIED = 0, QUEUED = 1, RUNNING = 2, DONE = 3, FAILED = 4 }


	/** Request to run a stored query to generate a report. */
	export interface RunQueryRequest {

		/** Report data range. */
		dataRange?: DataRange;
	}

	/** Request to run a stored query to generate a report. */
	export interface RunQueryRequestFormProperties {
	}
	export function CreateRunQueryRequestFormGroup() {
		return new FormGroup<RunQueryRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists queries created by the current user.
		 * Get queries
		 * @param {string} orderBy Name of a field used to order results. The default sorting order is ascending. To specify descending order for a field, append a " desc" suffix. For example "metadata.title desc". Sorting is only supported for the following fields: * `queryId` * `metadata.title`
		 * @param {number} pageSize Maximum number of results per page. Must be between `1` and `100`. Defaults to `100` if unspecified.
		 * @param {string} pageToken A page token, received from a previous list call. Provide this to retrieve the subsequent page of queries.
		 * @return {ListQueriesResponse} Successful response
		 */
		Doubleclickbidmanager_queries_list(orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListQueriesResponse> {
			return this.http.get<ListQueriesResponse>(this.baseUri + 'queries?orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a query.
		 * Post queries
		 * @return {Query} Successful response
		 */
		Doubleclickbidmanager_queries_create(requestBody: Query): Observable<Query> {
			return this.http.post<Query>(this.baseUri + 'queries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a query as well as the associated reports.
		 * Delete queries/{queryId}
		 * @param {string} queryId Required. ID of query to delete.
		 * @return {void} Successful response
		 */
		Doubleclickbidmanager_queries_delete(queryId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'queries/' + (queryId == null ? '' : encodeURIComponent(queryId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a query.
		 * Get queries/{queryId}
		 * @param {string} queryId Required. ID of query to retrieve.
		 * @return {Query} Successful response
		 */
		Doubleclickbidmanager_queries_get(queryId: string): Observable<Query> {
			return this.http.get<Query>(this.baseUri + 'queries/' + (queryId == null ? '' : encodeURIComponent(queryId)), {});
		}

		/**
		 * Lists reports associated with a query.
		 * Get queries/{queryId}/reports
		 * @param {string} queryId Required. ID of the query with which the reports are associated.
		 * @param {string} orderBy Name of a field used to order results. The default sorting order is ascending. To specify descending order for a field, append a " desc" suffix. For example "key.reportId desc". Sorting is only supported for the following fields: * `key.reportId`
		 * @param {number} pageSize Maximum number of results per page. Must be between `1` and `100`. Defaults to `100` if unspecified.
		 * @param {string} pageToken A page token, received from a previous list call. Provide this to retrieve the subsequent page of reports.
		 * @return {ListReportsResponse} Successful response
		 */
		Doubleclickbidmanager_queries_reports_list(queryId: string, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListReportsResponse> {
			return this.http.get<ListReportsResponse>(this.baseUri + 'queries/' + (queryId == null ? '' : encodeURIComponent(queryId)) + '/reports&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Retrieves a report.
		 * Get queries/{queryId}/reports/{reportId}
		 * @param {string} queryId Required. ID of the query the report is associated with.
		 * @param {string} reportId Required. ID of the report to retrieve.
		 * @return {Report} Successful response
		 */
		Doubleclickbidmanager_queries_reports_get(queryId: string, reportId: string): Observable<Report> {
			return this.http.get<Report>(this.baseUri + 'queries/' + (queryId == null ? '' : encodeURIComponent(queryId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)), {});
		}

		/**
		 * Runs a stored query to generate a report.
		 * Post queries/{queryId}:run
		 * @param {string} queryId Required. ID of query to run.
		 * @param {boolean} synchronous Whether the query should be run synchronously. When true, this method will not return until the query has finished running. When false or not specified, this method will return immediately.
		 * @return {Report} Successful response
		 */
		Doubleclickbidmanager_queries_run(queryId: string, synchronous: boolean | null | undefined, requestBody: RunQueryRequest): Observable<Report> {
			return this.http.post<Report>(this.baseUri + 'queries/' + (queryId == null ? '' : encodeURIComponent(queryId)) + ':run&synchronous=' + synchronous, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

