import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** A message containing availability data relevant to DoubleClick Search. */
	export interface Availability {

		/** DS advertiser ID. */
		advertiserId?: string;

		/** DS agency ID. */
		agencyId?: string;

		/** The time by which all conversions have been uploaded, in epoch millis UTC. */
		availabilityTimestamp?: string;

		/** The numeric segmentation identifier (for example, DoubleClick Search Floodlight activity ID). */
		segmentationId?: string;

		/** The friendly segmentation identifier (for example, DoubleClick Search Floodlight activity name). */
		segmentationName?: string;

		/** The segmentation type that this availability is for (its default value is FLOODLIGHT). */
		segmentationType?: string;
	}


	/** A conversion containing data relevant to DoubleClick Search. */
	export interface Conversion {

		/** DS ad group ID. */
		adGroupId?: string;

		/** DS ad ID. */
		adId?: string;

		/** DS advertiser ID. */
		advertiserId?: string;

		/** DS agency ID. */
		agencyId?: string;

		/** Available to advertisers only after contacting DoubleClick Search customer support. */
		attributionModel?: string;

		/** DS campaign ID. */
		campaignId?: string;

		/**
		 * Sales channel for the product. Acceptable values are:
		 * - "local": a physical store
		 * - "online": an online store
		 */
		channel?: string;

		/** DS click ID for the conversion. */
		clickId?: string;

		/**
		 * For offline conversions, advertisers provide this ID. Advertisers can specify any ID that is meaningful to them. Each conversion in a request must specify a unique ID, and the combination of ID and timestamp must be unique amongst all conversions within the advertiser.
		 * For online conversions, DS copies the dsConversionId or floodlightOrderId into this property depending on the advertiser's Floodlight instructions.
		 */
		conversionId?: string;

		/** The time at which the conversion was last modified, in epoch millis UTC. */
		conversionModifiedTimestamp?: string;

		/** The time at which the conversion took place, in epoch millis UTC. */
		conversionTimestamp?: string;

		/** Available to advertisers only after contacting DoubleClick Search customer support. */
		countMillis?: string;

		/** DS criterion (keyword) ID. */
		criterionId?: string;

		/** The currency code for the conversion's revenue. Should be in ISO 4217 alphabetic (3-char) format. */
		currencyCode?: string;

		/** Custom dimensions for the conversion, which can be used to filter data in a report. */
		customDimension?: Array<CustomDimension>;

		/** Custom metrics for the conversion. */
		customMetric?: Array<CustomMetric>;

		/** The type of device on which the conversion occurred. */
		deviceType?: string;

		/** ID that DoubleClick Search generates for each conversion. */
		dsConversionId?: string;

		/** DS engine account ID. */
		engineAccountId?: string;

		/** The Floodlight order ID provided by the advertiser for the conversion. */
		floodlightOrderId?: string;

		/** ID that DS generates and uses to uniquely identify the inventory account that contains the product. */
		inventoryAccountId?: string;

		/** The country registered for the Merchant Center feed that contains the product. Use an ISO 3166 code to specify a country. */
		productCountry?: string;

		/** DS product group ID. */
		productGroupId?: string;

		/** The product ID (SKU). */
		productId?: string;

		/** The language registered for the Merchant Center feed that contains the product. Use an ISO 639 code to specify a language. */
		productLanguage?: string;

		/** The quantity of this conversion, in millis. */
		quantityMillis?: string;

		/** The revenue amount of this TRANSACTION conversion, in micros (value multiplied by 1000000, no decimal). For example, to specify a revenue value of "10" enter "10000000" (10 million) in your request. */
		revenueMicros?: string;

		/** The numeric segmentation identifier (for example, DoubleClick Search Floodlight activity ID). */
		segmentationId?: string;

		/** The friendly segmentation identifier (for example, DoubleClick Search Floodlight activity name). */
		segmentationName?: string;

		/** The segmentation type of this conversion (for example, FLOODLIGHT). */
		segmentationType?: string;

		/** The state of the conversion, that is, either ACTIVE or REMOVED. Note: state DELETED is deprecated. */
		state?: string;

		/** The ID of the local store for which the product was advertised. Applicable only when the channel is "local". */
		storeId?: string;

		/** The type of the conversion, that is, either ACTION or TRANSACTION. An ACTION conversion is an action by the user that has no monetarily quantifiable value, while a TRANSACTION conversion is an action that does have a monetarily quantifiable value. Examples are email list signups (ACTION) versus ecommerce purchases (TRANSACTION). */
		type?: string;
	}


	/** A message containing the custome dimension. */
	export interface CustomDimension {

		/** Custom dimension name. */
		name?: string;

		/** Custom dimension value. */
		value?: string;
	}


	/** A message containing the custome metric. */
	export interface CustomMetric {

		/** Custom metric name. */
		name?: string;

		/** Custom metric numeric value. */
		value?: number;
	}


	/** A list of conversions. */
	export interface ConversionList {

		/** The conversions being requested. */
		conversion?: Array<Conversion>;

		/** Identifies this as a ConversionList resource. Value: the fixed string doubleclicksearch#conversionList. */
		kind?: string;
	}


	/** A DoubleClick Search report. This object contains the report request, some report metadata such as currency code, and the generated report rows or report files. */
	export interface Report {

		/** Asynchronous report only. Contains a list of generated report files once the report has successfully completed. */
		ReportFiles?: Array<ReportFiles>;

		/** Asynchronous report only. Id of the report. */
		id?: string;

		/** Asynchronous report only. True if and only if the report has completed successfully and the report files are ready to be downloaded. */
		isReportReady?: boolean;

		/** Identifies this as a Report resource. Value: the fixed string doubleclicksearch#report. */
		kind?: string;

		/** A request object used to create a DoubleClick Search report. */
		request?: ReportRequest;

		/** The number of report rows generated by the report, not including headers. */
		rowCount?: number;

		/** Synchronous report only. Generated report rows. */
		rows?: Array<ReportRow>;

		/** The currency code of all monetary values produced in the report, including values that are set by users (e.g., keyword bid settings) and metrics (e.g., cost and revenue). The currency code of a report is determined by the statisticsCurrency field of the report request. */
		statisticsCurrencyCode?: string;

		/** If all statistics of the report are sourced from the same time zone, this would be it. Otherwise the field is unset. */
		statisticsTimeZone?: string;
	}

	export interface ReportFiles {

		/** The size of this report file in bytes. */
		byteCount?: string;

		/** Use this url to download the report file. */
		url?: string;
	}


	/** A request object used to create a DoubleClick Search report. */
	export interface ReportRequest {

		/**
		 * The columns to include in the report. This includes both DoubleClick Search columns and saved columns. For DoubleClick Search columns, only the columnName parameter is required. For saved columns only the savedColumnName parameter is required. Both columnName and savedColumnName cannot be set in the same stanza.
		 * The maximum number of columns per request is 300.
		 */
		columns?: Array<ReportApiColumnSpec>;

		/** Format that the report should be returned in. Currently csv or tsv is supported. */
		downloadFormat?: string;

		/**
		 * A list of filters to be applied to the report.
		 * The maximum number of filters per request is 300.
		 */
		ReportRequestFilters?: Array<ReportRequestFilters>;

		/** Determines if removed entities should be included in the report. Defaults to false. Deprecated, please use includeRemovedEntities instead. */
		includeDeletedEntities?: boolean;

		/** Determines if removed entities should be included in the report. Defaults to false. */
		includeRemovedEntities?: boolean;

		/**
		 * Asynchronous report only. The maximum number of rows per report file. A large report is split into many files based on this field. Acceptable values are 1000000 to 100000000, inclusive.
		 * Minimum: 1000000
		 * Maximum: 100000000
		 */
		maxRowsPerFile?: number;

		/**
		 * Synchronous report only. A list of columns and directions defining sorting to be performed on the report rows.
		 * The maximum number of orderings per request is 300.
		 */
		ReportRequestOrderBy?: Array<ReportRequestOrderBy>;

		/** The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required. */
		reportScope?: ReportRequestReportScope;

		/** Determines the type of rows that are returned in the report. For example, if you specify reportType: keyword, each row in the report will contain data about a keyword. See the Types of Reports reference for the columns that are available for each type. */
		reportType?: string;

		/**
		 * Synchronous report only. The maximum number of rows to return; additional rows are dropped. Acceptable values are 0 to 10000, inclusive. Defaults to 10000.
		 * Minimum: 0
		 * Maximum: 10000
		 */
		rowCount?: number;

		/**
		 * Synchronous report only. Zero-based index of the first row to return. Acceptable values are 0 to 50000, inclusive. Defaults to 0.
		 * Minimum: 0
		 * Maximum: 50000
		 */
		startRow?: number;

		/** Specifies the currency in which monetary will be returned. Possible values are: usd, agency (valid if the report is scoped to agency or lower), advertiser (valid if the report is scoped to * advertiser or lower), or account (valid if the report is scoped to engine account or lower). */
		statisticsCurrency?: string;

		/** If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range. */
		timeRange?: ReportRequestTimeRange;

		/** If true, the report would only be created if all the requested stat data are sourced from a single timezone. Defaults to false. */
		verifySingleTimeZone?: boolean;
	}


	/** A request object used to create a DoubleClick Search report. */
	export interface ReportApiColumnSpec {

		/** Name of a DoubleClick Search column to include in the report. */
		columnName?: string;

		/**
		 * Segments a report by a custom dimension. The report must be scoped to an advertiser or lower, and the custom dimension must already be set up in DoubleClick Search. The custom dimension name, which appears in DoubleClick Search, is case sensitive.
		 * If used in a conversion report, returns the value of the specified custom dimension for the given conversion, if set. This column does not segment the conversion report.
		 */
		customDimensionName?: string;

		/** Name of a custom metric to include in the report. The report must be scoped to an advertiser or lower, and the custom metric must already be set up in DoubleClick Search. The custom metric name, which appears in DoubleClick Search, is case sensitive. */
		customMetricName?: string;

		/** Inclusive day in YYYY-MM-DD format. When provided, this overrides the overall time range of the report for this column only. Must be provided together with startDate. */
		endDate?: string;

		/** Synchronous report only. Set to true to group by this column. Defaults to false. */
		groupByColumn?: boolean;

		/** Text used to identify this column in the report output; defaults to columnName or savedColumnName when not specified. This can be used to prevent collisions between DoubleClick Search columns and saved columns with the same name. */
		headerText?: string;

		/** The platform that is used to provide data for the custom dimension. Acceptable values are "floodlight". */
		platformSource?: string;

		/**
		 * Returns metrics only for a specific type of product activity. Accepted values are:
		 * - "sold": returns metrics only for products that were sold
		 * - "advertised": returns metrics only for products that were advertised in a Shopping campaign, and that might or might not have been sold
		 */
		productReportPerspective?: string;

		/** Name of a saved column to include in the report. The report must be scoped at advertiser or lower, and this saved column must already be created in the DoubleClick Search UI. */
		savedColumnName?: string;

		/** Inclusive date in YYYY-MM-DD format. When provided, this overrides the overall time range of the report for this column only. Must be provided together with endDate. */
		startDate?: string;
	}

	export interface ReportRequestFilters {

		/** A request object used to create a DoubleClick Search report. */
		column?: ReportApiColumnSpec;

		/** Operator to use in the filter. See the filter reference for a list of available operators. */
		operator?: string;

		/**
		 * A list of values to filter the column value against.
		 * The maximum number of filter values per request is 300.
		 */
		values?: Array<string>;
	}

	export interface ReportRequestOrderBy {

		/** A request object used to create a DoubleClick Search report. */
		column?: ReportApiColumnSpec;

		/** The sort direction, which is either ascending or descending. */
		sortOrder?: string;
	}

	export interface ReportRequestReportScope {

		/** DS ad group ID. */
		adGroupId?: string;

		/** DS ad ID. */
		adId?: string;

		/** DS advertiser ID. */
		advertiserId?: string;

		/** DS agency ID. */
		agencyId?: string;

		/** DS campaign ID. */
		campaignId?: string;

		/** DS engine account ID. */
		engineAccountId?: string;

		/** DS keyword ID. */
		keywordId?: string;
	}

	export interface ReportRequestTimeRange {

		/** Inclusive UTC timestamp in RFC format, e.g., 2013-07-16T10:16:23.555Z. See additional references on how changed attribute reports work. */
		changedAttributesSinceTimestamp?: Date;

		/** Inclusive UTC timestamp in RFC format, e.g., 2013-07-16T10:16:23.555Z. See additional references on how changed metrics reports work. */
		changedMetricsSinceTimestamp?: Date;

		/** Inclusive date in YYYY-MM-DD format. */
		endDate?: string;

		/** Inclusive date in YYYY-MM-DD format. */
		startDate?: string;
	}


	/** A row in a DoubleClick Search report. */
	export interface ReportRow {
	}


	/** A saved column */
	export interface SavedColumn {

		/** Identifies this as a SavedColumn resource. Value: the fixed string doubleclicksearch#savedColumn. */
		kind?: string;

		/** The name of the saved column. */
		savedColumnName?: string;

		/** The type of data this saved column will produce. */
		type?: string;
	}


	/** A list of saved columns. Advertisers create saved columns to report on Floodlight activities, Google Analytics goals, or custom KPIs. To request reports with saved columns, you'll need the saved column names that are available from this list. */
	export interface SavedColumnList {

		/** The saved columns being requested. */
		items?: Array<SavedColumn>;

		/** Identifies this as a SavedColumnList resource. Value: the fixed string doubleclicksearch#savedColumnList. */
		kind?: string;
	}


	/** The request to update availability. */
	export interface UpdateAvailabilityRequest {

		/** The availabilities being requested. */
		availabilities?: Array<Availability>;
	}


	/** The response to a update availability request. */
	export interface UpdateAvailabilityResponse {

		/** The availabilities being returned. */
		availabilities?: Array<Availability>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves a list of conversions from a DoubleClick Search engine account.
		 * Get agency/{agencyId}/advertiser/{advertiserId}/engine/{engineAccountId}/conversion
		 * @param {string} agencyId Numeric ID of the agency.
		 * @param {string} advertiserId Numeric ID of the advertiser.
		 * @param {string} engineAccountId Numeric ID of the engine account.
		 * @param {number} endDate Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
		 * @param {number} rowCount The number of conversions to return per call.
		 * @param {number} startDate First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
		 * @param {number} startRow The 0-based starting index for retrieving conversions results.
		 * @param {string} adGroupId Numeric ID of the ad group.
		 * @param {string} adId Numeric ID of the ad.
		 * @param {string} campaignId Numeric ID of the campaign.
		 * @param {string} criterionId Numeric ID of the criterion.
		 * @return {void} Successful response
		 */
		Doubleclicksearch_conversion_get(agencyId: string, advertiserId: string, engineAccountId: string, endDate: number, rowCount: number, startDate: number, startRow: number, adGroupId: string, adId: string, campaignId: string, criterionId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'agency/' + (agencyId == null ? '' : encodeURIComponent(agencyId)) + '/advertiser/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/engine/' + (engineAccountId == null ? '' : encodeURIComponent(engineAccountId)) + '/conversion&endDate=' + endDate + '&rowCount=' + rowCount + '&startDate=' + startDate + '&startRow=' + startRow + '&adGroupId=' + (adGroupId == null ? '' : encodeURIComponent(adGroupId)) + '&adId=' + (adId == null ? '' : encodeURIComponent(adId)) + '&campaignId=' + (campaignId == null ? '' : encodeURIComponent(campaignId)) + '&criterionId=' + (criterionId == null ? '' : encodeURIComponent(criterionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the list of saved columns for a specified advertiser.
		 * Get agency/{agencyId}/advertiser/{advertiserId}/savedcolumns
		 * @param {string} agencyId DS ID of the agency.
		 * @param {string} advertiserId DS ID of the advertiser.
		 * @return {void} Successful response
		 */
		Doubleclicksearch_savedColumns_list(agencyId: string, advertiserId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'agency/' + (agencyId == null ? '' : encodeURIComponent(agencyId)) + '/advertiser/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/savedcolumns', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a batch of new conversions into DoubleClick Search.
		 * Post conversion
		 * @return {void} Successful response
		 */
		Doubleclicksearch_conversion_insert(requestBody: ConversionList): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'conversion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a batch of conversions in DoubleClick Search.
		 * Put conversion
		 * @return {void} Successful response
		 */
		Doubleclicksearch_conversion_update(requestBody: ConversionList): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'conversion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the availabilities of a batch of floodlight activities in DoubleClick Search.
		 * Post conversion/updateAvailability
		 * @return {void} Successful response
		 */
		Doubleclicksearch_conversion_updateAvailability(requestBody: UpdateAvailabilityRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'conversion/updateAvailability', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a report request into the reporting system.
		 * Post reports
		 * @return {void} Successful response
		 */
		Doubleclicksearch_reports_request(requestBody: ReportRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'reports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates and returns a report immediately.
		 * Post reports/generate
		 * @return {void} Successful response
		 */
		Doubleclicksearch_reports_generate(requestBody: ReportRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'reports/generate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Polls for the status of a report request.
		 * Get reports/{reportId}
		 * @param {string} reportId ID of the report request being polled.
		 * @return {void} Successful response
		 */
		Doubleclicksearch_reports_get(reportId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reports/' + (reportId == null ? '' : encodeURIComponent(reportId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Downloads a report file encoded in UTF-8.
		 * Get reports/{reportId}/files/{reportFragment}
		 * @param {string} reportId ID of the report.
		 * @param {number} reportFragment The index of the report fragment to download.
		 * @return {void} Successful response
		 */
		Doubleclicksearch_reports_getFile(reportId: string, reportFragment: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reports/' + (reportId == null ? '' : encodeURIComponent(reportId)) + '/files/' + reportFragment, { observe: 'response', responseType: 'text' });
		}
	}

}

