import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Request to fetch stored line items. */
	export interface DownloadLineItemsRequest {

		/** File specification (column names, types, order) in which the line items will be returned. Default to EWF. */
		fileSpec?: DownloadLineItemsRequestFileSpec | null;

		/** Ids of the specified filter type used to filter line items to fetch. If omitted, all the line items will be returned. */
		filterIds?: Array<string> | null;

		/** Filter type used to filter line items to fetch. */
		filterType?: DownloadLineItemsRequestFilterType | null;

		/** Format in which the line items will be returned. Default to CSV. */
		format?: DownloadLineItemsRequestFormat | null;
	}

	export enum DownloadLineItemsRequestFileSpec { EWF = 0 }

	export enum DownloadLineItemsRequestFilterType { ADVERTISER_ID = 0, INSERTION_ORDER_ID = 1, LINE_ITEM_ID = 2 }

	export enum DownloadLineItemsRequestFormat { CSV = 0 }


	/** Download line items response. */
	export interface DownloadLineItemsResponse {

		/** Retrieved line items in CSV format. For more information about file formats, see  Entity Write File Format. */
		lineItems?: string | null;
	}


	/** Request to fetch stored inventory sources, campaigns, insertion orders, line items, TrueView ad groups and ads. */
	export interface DownloadRequest {

		/**
		 * File types that will be returned. If INVENTORY_SOURCE is requested, no other file types may be requested.
		 * Acceptable values are:
		 * - "AD"
		 * - "AD_GROUP"
		 * - "CAMPAIGN"
		 * - "INSERTION_ORDER"
		 * - "INVENTORY_SOURCE"
		 * - "LINE_ITEM"
		 */
		fileTypes?: Array<string> | null;

		/** The IDs of the specified filter type. This is used to filter entities to fetch. At least one ID must be specified. */
		filterIds?: Array<string> | null;

		/** Filter type used to filter entities to fetch. PARTNER_ID and INVENTORY_SOURCE_ID may only be used when downloading inventory sources. */
		filterType?: DownloadRequestFilterType | null;

		/** SDF Version (column names, types, order) in which the entities will be returned. Default to 5. */
		version?: string | null;
	}

	export enum DownloadRequestFilterType { ADVERTISER_ID = 0, CAMPAIGN_ID = 1, INSERTION_ORDER_ID = 2, INVENTORY_SOURCE_ID = 3, LINE_ITEM_ID = 4, PARTNER_ID = 5 }


	/** Download response. */
	export interface DownloadResponse {

		/** Retrieved ad groups in SDF format. */
		adGroups?: string | null;

		/** Retrieved ads in SDF format. */
		ads?: string | null;

		/** Retrieved campaigns in SDF format. */
		campaigns?: string | null;

		/** Retrieved insertion orders in SDF format. */
		insertionOrders?: string | null;
		inventorySources?: string | null;

		/** Retrieved line items in SDF format. */
		lineItems?: string | null;
	}


	/** Filter used to match traffic data in your report. */
	export interface FilterPair {

		/** Filter type. */
		type?: FilterPairType | null;

		/** Filter value. */
		value?: string | null;
	}

	export enum FilterPairType { FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY = 0, FILTER_ADVERTISER = 1, FILTER_ADVERTISER_CURRENCY = 2, FILTER_ADVERTISER_TIMEZONE = 3, FILTER_AD_POSITION = 4, FILTER_AGE = 5, FILTER_AUTHORIZED_SELLER_STATE = 6, FILTER_BROWSER = 7, FILTER_BUDGET_SEGMENT_DESCRIPTION = 8, FILTER_CAMPAIGN_DAILY_FREQUENCY = 9, FILTER_CARRIER = 10, FILTER_CHANNEL_ID = 11, FILTER_CITY = 12, FILTER_COMPANION_CREATIVE_ID = 13, FILTER_CONVERSION_DELAY = 14, FILTER_COUNTRY = 15, FILTER_CREATIVE_ATTRIBUTE = 16, FILTER_CREATIVE_HEIGHT = 17, FILTER_CREATIVE_ID = 18, FILTER_CREATIVE_SIZE = 19, FILTER_CREATIVE_TYPE = 20, FILTER_CREATIVE_WIDTH = 21, FILTER_DATA_PROVIDER = 22, FILTER_DATE = 23, FILTER_DAY_OF_WEEK = 24, FILTER_DEVICE_MAKE = 25, FILTER_DEVICE_MODEL = 26, FILTER_DEVICE_TYPE = 27, FILTER_DFP_ORDER_ID = 28, FILTER_DMA = 29, FILTER_EXCHANGE_ID = 30, FILTER_FLOODLIGHT_ACTIVITY_ID = 31, FILTER_GENDER = 32, FILTER_INSERTION_ORDER = 33, FILTER_INVENTORY_COMMITMENT_TYPE = 34, FILTER_INVENTORY_DELIVERY_METHOD = 35, FILTER_INVENTORY_FORMAT = 36, FILTER_INVENTORY_RATE_TYPE = 37, FILTER_INVENTORY_SOURCE = 38, FILTER_INVENTORY_SOURCE_EXTERNAL_ID = 39, FILTER_INVENTORY_SOURCE_TYPE = 40, FILTER_KEYWORD = 41, FILTER_LINE_ITEM = 42, FILTER_LINE_ITEM_DAILY_FREQUENCY = 43, FILTER_LINE_ITEM_LIFETIME_FREQUENCY = 44, FILTER_LINE_ITEM_TYPE = 45, FILTER_MEDIA_PLAN = 46, FILTER_MOBILE_GEO = 47, FILTER_MONTH = 48, FILTER_MRAID_SUPPORT = 49, FILTER_NIELSEN_AGE = 50, FILTER_NIELSEN_COUNTRY_CODE = 51, FILTER_NIELSEN_DEVICE_ID = 52, FILTER_NIELSEN_GENDER = 53, FILTER_NOT_SUPPORTED = 54, FILTER_ORDER_ID = 55, FILTER_OS = 56, FILTER_PAGE_CATEGORY = 57, FILTER_PAGE_LAYOUT = 58, FILTER_PARTNER = 59, FILTER_PARTNER_CURRENCY = 60, FILTER_QUARTER = 61, FILTER_REGION = 62, FILTER_SITE_ID = 63, FILTER_SITE_LANGUAGE = 64, FILTER_SKIPPABLE_SUPPORT = 65, FILTER_TARGETED_USER_LIST = 66, FILTER_TIME_OF_DAY = 67, FILTER_TRUEVIEW_AD_GROUP_AD_ID = 68, FILTER_TRUEVIEW_AD_GROUP_ID = 69, FILTER_TRUEVIEW_AGE = 70, FILTER_TRUEVIEW_CATEGORY = 71, FILTER_TRUEVIEW_CITY = 72, FILTER_TRUEVIEW_CONVERSION_TYPE = 73, FILTER_TRUEVIEW_COUNTRY = 74, FILTER_TRUEVIEW_CUSTOM_AFFINITY = 75, FILTER_TRUEVIEW_DMA = 76, FILTER_TRUEVIEW_GENDER = 77, FILTER_TRUEVIEW_IAR_AGE = 78, FILTER_TRUEVIEW_IAR_CATEGORY = 79, FILTER_TRUEVIEW_IAR_CITY = 80, FILTER_TRUEVIEW_IAR_COUNTRY = 81, FILTER_TRUEVIEW_IAR_GENDER = 82, FILTER_TRUEVIEW_IAR_INTEREST = 83, FILTER_TRUEVIEW_IAR_LANGUAGE = 84, FILTER_TRUEVIEW_IAR_PARENTAL_STATUS = 85, FILTER_TRUEVIEW_IAR_REGION = 86, FILTER_TRUEVIEW_IAR_REMARKETING_LIST = 87, FILTER_TRUEVIEW_IAR_TIME_OF_DAY = 88, FILTER_TRUEVIEW_IAR_YOUTUBE_CHANNEL = 89, FILTER_TRUEVIEW_IAR_YOUTUBE_VIDEO = 90, FILTER_TRUEVIEW_IAR_ZIPCODE = 91, FILTER_TRUEVIEW_INTEREST = 92, FILTER_TRUEVIEW_KEYWORD = 93, FILTER_TRUEVIEW_PARENTAL_STATUS = 94, FILTER_TRUEVIEW_PLACEMENT = 95, FILTER_TRUEVIEW_REGION = 96, FILTER_TRUEVIEW_REMARKETING_LIST = 97, FILTER_TRUEVIEW_URL = 98, FILTER_TRUEVIEW_ZIPCODE = 99, FILTER_UNKNOWN = 100, FILTER_USER_LIST = 101, FILTER_USER_LIST_FIRST_PARTY = 102, FILTER_USER_LIST_THIRD_PARTY = 103, FILTER_VIDEO_AD_POSITION_IN_STREAM = 104, FILTER_VIDEO_CREATIVE_DURATION = 105, FILTER_VIDEO_CREATIVE_DURATION_SKIPPABLE = 106, FILTER_VIDEO_DURATION_SECONDS = 107, FILTER_VIDEO_DURATION_SECONDS_RANGE = 108, FILTER_VIDEO_FORMAT_SUPPORT = 109, FILTER_VIDEO_PLAYER_SIZE = 110, FILTER_VIDEO_RATING_TIER = 111, FILTER_VIDEO_SKIPPABLE_SUPPORT = 112, FILTER_VIDEO_VPAID_SUPPORT = 113, FILTER_WEEK = 114, FILTER_YEAR = 115, FILTER_ZIP_CODE = 116 }


	/** List queries response. */
	export interface ListQueriesResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listQueriesResponse". */
		kind?: string | null;

		/** Retrieved queries. */
		queries?: Array<Query> | null;
	}


	/** Represents a query. */
	export interface Query {

		/** Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#query". */
		kind?: string | null;

		/** Query metadata. */
		metadata?: QueryMetadata | null;

		/** Parameters of a query or report. */
		params?: Parameters | null;

		/** Query ID. */
		queryId?: string | null;

		/** The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise. */
		reportDataEndTimeMs?: string | null;

		/** The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise. */
		reportDataStartTimeMs?: string | null;

		/** Information on how frequently and when to run a query. */
		schedule?: QuerySchedule | null;

		/** Canonical timezone code for report data time. Defaults to America/New_York. */
		timezoneCode?: string | null;
	}


	/** Query metadata. */
	export interface QueryMetadata {

		/** Range of report data. */
		dataRange?: QueryMetadataDataRange | null;

		/** Format of the generated report. */
		format?: QueryMetadataFormat | null;

		/** The path to the location in Google Cloud Storage where the latest report is stored. */
		googleCloudStoragePathForLatestReport?: string | null;

		/** The path in Google Drive for the latest report. */
		googleDrivePathForLatestReport?: string | null;

		/** The time when the latest report started to run. */
		latestReportRunTimeMs?: string | null;

		/**
		 * Locale of the generated reports. Valid values are cs CZECH de GERMAN en ENGLISH es SPANISH fr FRENCH it ITALIAN ja JAPANESE ko KOREAN pl POLISH pt-BR BRAZILIAN_PORTUGUESE ru RUSSIAN tr TURKISH uk UKRAINIAN zh-CN CHINA_CHINESE zh-TW TAIWAN_CHINESE
		 * An locale string not in the list above will generate reports in English.
		 */
		locale?: string | null;

		/** Number of reports that have been generated for the query. */
		reportCount?: number | null;

		/** Whether the latest report is currently running. */
		running?: boolean | null;

		/** Whether to send an email notification when a report is ready. Default to false. */
		sendNotification?: boolean | null;

		/** List of email addresses which are sent email notifications when the report is finished. Separate from sendNotification. */
		shareEmailAddress?: Array<string> | null;

		/** Query title. It is used to name the reports generated from this query. */
		title?: string | null;
	}

	export enum QueryMetadataDataRange { ALL_TIME = 0, CURRENT_DAY = 1, CUSTOM_DATES = 2, LAST_14_DAYS = 3, LAST_30_DAYS = 4, LAST_365_DAYS = 5, LAST_7_DAYS = 6, LAST_90_DAYS = 7, MONTH_TO_DATE = 8, PREVIOUS_DAY = 9, PREVIOUS_HALF_MONTH = 10, PREVIOUS_MONTH = 11, PREVIOUS_QUARTER = 12, PREVIOUS_WEEK = 13, PREVIOUS_YEAR = 14, QUARTER_TO_DATE = 15, TYPE_NOT_SUPPORTED = 16, WEEK_TO_DATE = 17, YEAR_TO_DATE = 18 }

	export enum QueryMetadataFormat { CSV = 0, EXCEL_CSV = 1, XLSX = 2 }


	/** Parameters of a query or report. */
	export interface Parameters {

		/** Filters used to match traffic data in your report. */
		filters?: Array<FilterPair> | null;

		/** Data is grouped by the filters listed in this field. */
		groupBys?: Array<FilterPairType> | null;

		/** Deprecated. This field is no longer in use. */
		includeInviteData?: boolean | null;

		/** Metrics to include as columns in your report. */
		metrics?: Array<string> | null;

		/** Report type. */
		type?: ParametersType | null;
	}

	export enum ParametersType { TYPE_ACTIVE_GRP = 0, TYPE_AUDIENCE_COMPOSITION = 1, TYPE_AUDIENCE_PERFORMANCE = 2, TYPE_CLIENT_SAFE = 3, TYPE_COMSCORE_VCE = 4, TYPE_CROSS_FEE = 5, TYPE_CROSS_PARTNER = 6, TYPE_CROSS_PARTNER_THIRD_PARTY_DATA_PROVIDER = 7, TYPE_ESTIMATED_CONVERSION = 8, TYPE_FEE = 9, TYPE_GENERAL = 10, TYPE_INVENTORY_AVAILABILITY = 11, TYPE_KEYWORD = 12, TYPE_LINEAR_TV_SEARCH_LIFT = 13, TYPE_NIELSEN_AUDIENCE_PROFILE = 14, TYPE_NIELSEN_DAILY_REACH_BUILD = 15, TYPE_NIELSEN_ONLINE_GLOBAL_MARKET = 16, TYPE_NIELSEN_SITE = 17, TYPE_NOT_SUPPORTED = 18, TYPE_ORDER_ID = 19, TYPE_PAGE_CATEGORY = 20, TYPE_PETRA_NIELSEN_AUDIENCE_PROFILE = 21, TYPE_PETRA_NIELSEN_DAILY_REACH_BUILD = 22, TYPE_PETRA_NIELSEN_ONLINE_GLOBAL_MARKET = 23, TYPE_PIXEL_LOAD = 24, TYPE_REACH_AND_FREQUENCY = 25, TYPE_REACH_AUDIENCE = 26, TYPE_THIRD_PARTY_DATA_PROVIDER = 27, TYPE_TRUEVIEW = 28, TYPE_TRUEVIEW_IAR = 29, TYPE_VERIFICATION = 30, TYPE_YOUTUBE_VERTICAL = 31 }


	/** Information on how frequently and when to run a query. */
	export interface QuerySchedule {

		/** Datetime to periodically run the query until. */
		endTimeMs?: string | null;

		/** How often the query is run. */
		frequency?: QueryScheduleFrequency | null;

		/** Time of day at which a new report will be generated, represented as minutes past midnight. Range is 0 to 1439. Only applies to scheduled reports. */
		nextRunMinuteOfDay?: number | null;

		/** Canonical timezone code for report generation time. Defaults to America/New_York. */
		nextRunTimezoneCode?: string | null;
	}

	export enum QueryScheduleFrequency { DAILY = 0, MONTHLY = 1, ONE_TIME = 2, QUARTERLY = 3, SEMI_MONTHLY = 4, WEEKLY = 5 }


	/** List reports response. */
	export interface ListReportsResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listReportsResponse". */
		kind?: string | null;

		/** Retrieved reports. */
		reports?: Array<Report> | null;
	}


	/** Represents a report. */
	export interface Report {

		/** Key used to identify a report. */
		key?: ReportKey | null;

		/** Report metadata. */
		metadata?: ReportMetadata | null;

		/** Parameters of a query or report. */
		params?: Parameters | null;
	}


	/** Key used to identify a report. */
	export interface ReportKey {

		/** Query ID. */
		queryId?: string | null;

		/** Report ID. */
		reportId?: string | null;
	}


	/** Report metadata. */
	export interface ReportMetadata {

		/** The path to the location in Google Cloud Storage where the report is stored. */
		googleCloudStoragePath?: string | null;

		/** The ending time for the data that is shown in the report. */
		reportDataEndTimeMs?: string | null;

		/** The starting time for the data that is shown in the report. */
		reportDataStartTimeMs?: string | null;

		/** Report status. */
		status?: ReportStatus | null;
	}


	/** Report status. */
	export interface ReportStatus {

		/** An explanation of a report failure. */
		failure?: ReportFailure | null;

		/** The time when this report either completed successfully or failed. */
		finishTimeMs?: string | null;

		/** The file type of the report. */
		format?: QueryMetadataFormat | null;

		/** The state of the report. */
		state?: ReportStatusState | null;
	}


	/** An explanation of a report failure. */
	export interface ReportFailure {

		/** Error code that shows why the report was not created. */
		errorCode?: ReportFailureErrorCode | null;
	}

	export enum ReportFailureErrorCode { AUTHENTICATION_ERROR = 0, DEPRECATED_REPORTING_INVALID_QUERY = 1, REPORTING_BUCKET_NOT_FOUND = 2, REPORTING_CREATE_BUCKET_FAILED = 3, REPORTING_DELETE_BUCKET_FAILED = 4, REPORTING_FATAL_ERROR = 5, REPORTING_ILLEGAL_FILENAME = 6, REPORTING_IMCOMPATIBLE_METRICS = 7, REPORTING_INVALID_QUERY_MISSING_PARTNER_AND_ADVERTISER_FILTERS = 8, REPORTING_INVALID_QUERY_TITLE_MISSING = 9, REPORTING_INVALID_QUERY_TOO_MANY_UNFILTERED_LARGE_GROUP_BYS = 10, REPORTING_QUERY_NOT_FOUND = 11, REPORTING_TRANSIENT_ERROR = 12, REPORTING_UPDATE_BUCKET_PERMISSION_FAILED = 13, REPORTING_WRITE_BUCKET_OBJECT_FAILED = 14, SERVER_ERROR = 15, UNAUTHORIZED_API_ACCESS = 16, VALIDATION_ERROR = 17 }

	export enum ReportStatusState { DONE = 0, FAILED = 1, RUNNING = 2 }


	/** Represents the upload status of a row in the request. */
	export interface RowStatus {

		/** Whether the stored entity is changed as a result of upload. */
		changed?: boolean | null;

		/** Entity Id. */
		entityId?: string | null;

		/** Entity name. */
		entityName?: string | null;

		/** Reasons why the entity can't be uploaded. */
		errors?: Array<string> | null;

		/** Whether the entity is persisted. */
		persisted?: boolean | null;

		/** Row number. */
		rowNumber?: number | null;
	}


	/** Request to run a stored query to generate a report. */
	export interface RunQueryRequest {

		/** Report data range used to generate the report. */
		dataRange?: QueryMetadataDataRange | null;

		/** The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise. */
		reportDataEndTimeMs?: string | null;

		/** The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise. */
		reportDataStartTimeMs?: string | null;

		/** Canonical timezone code for report data time. Defaults to America/New_York. */
		timezoneCode?: string | null;
	}


	/** Request to upload line items. */
	export interface UploadLineItemsRequest {

		/** Set to true to get upload status without actually persisting the line items. */
		dryRun?: boolean | null;

		/** Format the line items are in. Default to CSV. */
		format?: DownloadLineItemsRequestFormat | null;

		/** Line items in CSV to upload. Refer to  Entity Write File Format for more information on file format. */
		lineItems?: string | null;
	}


	/** Upload line items response. */
	export interface UploadLineItemsResponse {

		/** Represents the status of upload. */
		uploadStatus?: UploadStatus | null;
	}


	/** Represents the status of upload. */
	export interface UploadStatus {

		/** Reasons why upload can't be completed. */
		errors?: Array<string> | null;

		/** Per-row upload status. */
		rowStatus?: Array<RowStatus> | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves line items in CSV format. TrueView line items are not supported.
		 * Post lineitems/downloadlineitems
		 * @return {void} Successful response
		 */
		Doubleclickbidmanager_lineitems_downloadlineitems(requestBody: DownloadLineItemsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lineitems/downloadlineitems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Uploads line items in CSV format. TrueView line items are not supported.
		 * Post lineitems/uploadlineitems
		 * @return {void} Successful response
		 */
		Doubleclickbidmanager_lineitems_uploadlineitems(requestBody: UploadLineItemsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lineitems/uploadlineitems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves stored queries.
		 * Get queries
		 * @return {void} Successful response
		 */
		Doubleclickbidmanager_queries_listqueries(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'queries', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves stored reports.
		 * Get queries/{queryId}/reports
		 * @param {string} queryId Query ID with which the reports are associated.
		 * @return {void} Successful response
		 */
		Doubleclickbidmanager_reports_listreports(queryId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'queries/' + (queryId == null ? '' : encodeURIComponent(queryId)) + '/reports', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a query.
		 * Post query
		 * @return {void} Successful response
		 */
		Doubleclickbidmanager_queries_createquery(requestBody: Query): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a stored query as well as the associated stored reports.
		 * Delete query/{queryId}
		 * @param {string} queryId Query ID to delete.
		 * @return {void} Successful response
		 */
		Doubleclickbidmanager_queries_deletequery(queryId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'query/' + (queryId == null ? '' : encodeURIComponent(queryId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a stored query.
		 * Get query/{queryId}
		 * @param {string} queryId Query ID to retrieve.
		 * @return {void} Successful response
		 */
		Doubleclickbidmanager_queries_getquery(queryId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'query/' + (queryId == null ? '' : encodeURIComponent(queryId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Runs a stored query to generate a report.
		 * Post query/{queryId}
		 * @param {string} queryId Query ID to run.
		 * @return {void} Successful response
		 */
		Doubleclickbidmanager_queries_runquery(queryId: string, requestBody: RunQueryRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'query/' + (queryId == null ? '' : encodeURIComponent(queryId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves entities in SDF format.
		 * Post sdf/download
		 * @return {void} Successful response
		 */
		Doubleclickbidmanager_sdf_download(requestBody: DownloadRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sdf/download', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

