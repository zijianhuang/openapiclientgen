import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface ApiDataRow {
		clicks?: number | null;
		ctr?: number | null;
		impressions?: number | null;
		keys?: Array<string> | null;
		position?: number | null;
	}

	export interface ApiDimensionFilter {
		dimension?: string | null;
		expression?: string | null;
		operator?: string | null;
	}

	export interface ApiDimensionFilterGroup {
		filters?: Array<ApiDimensionFilter> | null;
		groupType?: string | null;
	}

	export interface SearchAnalyticsQueryRequest {

		/**
		 * [Optional; Default is "auto"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see  the help documentation to learn how data is calculated differently by site versus by page.
		 * Note: If you group or filter by page, you cannot aggregate by property.
		 * If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid.
		 */
		aggregationType?: string | null;

		/** [Optional] Zero or more filters to apply to the dimension grouping values; for example, 'query contains "buy"' to see only data where the query string contains the substring "buy" (not case-sensitive). You can filter by a dimension without grouping by it. */
		dimensionFilterGroups?: Array<ApiDimensionFilterGroup> | null;

		/** [Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in the Search Analytics page. Dimensions are combined to create a unique row key for each row. Results are grouped in the order that you supply these dimensions. */
		dimensions?: Array<string> | null;

		/** [Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than or equal to the start date. This value is included in the range. */
		endDate?: string | null;

		/** [Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 5,000 (inclusive). */
		rowLimit?: number | null;

		/** [Optional; Default is "web"] The search type to filter for. */
		searchType?: string | null;

		/** [Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This value is included in the range. */
		startDate?: string | null;

		/** [Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number. */
		startRow?: number | null;
	}


	/** A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter. */
	export interface SearchAnalyticsQueryResponse {

		/** How the results were aggregated. */
		responseAggregationType?: string | null;

		/** A list of rows grouped by the key values in the order given in the query. */
		rows?: Array<ApiDataRow> | null;
	}


	/** List of sitemaps. */
	export interface SitemapsListResponse {

		/** Contains detailed information about a specific URL submitted as a sitemap. */
		sitemap?: Array<WmxSitemap> | null;
	}


	/** Contains detailed information about a specific URL submitted as a sitemap. */
	export interface WmxSitemap {

		/** The various content types in the sitemap. */
		contents?: Array<WmxSitemapContent> | null;

		/** Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed before it can be processed correctly. */
		errors?: string | null;

		/** If true, the sitemap has not been processed. */
		isPending?: boolean | null;

		/** If true, the sitemap is a collection of sitemaps. */
		isSitemapsIndex?: boolean | null;

		/** Date & time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd). */
		lastDownloaded?: Date | null;

		/** Date & time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd). */
		lastSubmitted?: Date | null;

		/** The url of the sitemap. */
		path?: string | null;

		/** The type of the sitemap. For example: rssFeed. */
		type?: string | null;

		/** Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps. */
		warnings?: string | null;
	}


	/** Information about the various content types in the sitemap. */
	export interface WmxSitemapContent {

		/** The number of URLs from the sitemap that were indexed (of the content type). */
		indexed?: string | null;

		/** The number of URLs in the sitemap (of the content type). */
		submitted?: string | null;

		/** The specific type of content in this sitemap. For example: web. */
		type?: string | null;
	}


	/** List of sites with access level information. */
	export interface SitesListResponse {

		/** Contains permission level information about a Search Console site. For more information, see Permissions in Search Console. */
		siteEntry?: Array<WmxSite> | null;
	}


	/** Contains permission level information about a Search Console site. For more information, see  Permissions in Search Console. */
	export interface WmxSite {

		/** The user's permission level for the site. */
		permissionLevel?: string | null;

		/** The URL of the site. */
		siteUrl?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the user's Search Console sites.
		 * Get sites
		 * @return {void} Successful response
		 */
		Webmasters_sites_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sites', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a site from the set of the user's Search Console sites.
		 * Delete sites/{siteUrl}
		 * @param {string} siteUrl The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/ Note: for property-sets, use the URI that starts with sc-set: which is used in Search Console URLs.
		 * @return {void} Successful response
		 */
		Webmasters_sites_delete(siteUrl: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sites/' + (siteUrl == null ? '' : encodeURIComponent(siteUrl)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about specific site.
		 * Get sites/{siteUrl}
		 * @param {string} siteUrl The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/ Note: for property-sets, use the URI that starts with sc-set: which is used in Search Console URLs.
		 * @return {void} Successful response
		 */
		Webmasters_sites_get(siteUrl: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sites/' + (siteUrl == null ? '' : encodeURIComponent(siteUrl)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a site to the set of the user's sites in Search Console.
		 * Put sites/{siteUrl}
		 * @param {string} siteUrl The URL of the site to add.
		 * @return {void} Successful response
		 */
		Webmasters_sites_add(siteUrl: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sites/' + (siteUrl == null ? '' : encodeURIComponent(siteUrl)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.
		 * When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.
		 * Post sites/{siteUrl}/searchAnalytics/query
		 * @param {string} siteUrl The site's URL, including protocol. For example: http://www.example.com/
		 * @return {void} Successful response
		 */
		Webmasters_searchanalytics_query(siteUrl: string, requestBody: SearchAnalyticsQueryRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sites/' + (siteUrl == null ? '' : encodeURIComponent(siteUrl)) + '/searchAnalytics/query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).
		 * Get sites/{siteUrl}/sitemaps
		 * @param {string} siteUrl The site's URL, including protocol. For example: http://www.example.com/
		 * @param {string} sitemapIndex A URL of a site's sitemap index. For example: http://www.example.com/sitemapindex.xml
		 * @return {void} Successful response
		 */
		Webmasters_sitemaps_list(siteUrl: string, sitemapIndex: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sites/' + (siteUrl == null ? '' : encodeURIComponent(siteUrl)) + '/sitemaps&sitemapIndex=' + (sitemapIndex == null ? '' : encodeURIComponent(sitemapIndex)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a sitemap from this site.
		 * Delete sites/{siteUrl}/sitemaps/{feedpath}
		 * @param {string} siteUrl The site's URL, including protocol. For example: http://www.example.com/
		 * @param {string} feedpath The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
		 * @return {void} Successful response
		 */
		Webmasters_sitemaps_delete(siteUrl: string, feedpath: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sites/' + (siteUrl == null ? '' : encodeURIComponent(siteUrl)) + '/sitemaps/' + (feedpath == null ? '' : encodeURIComponent(feedpath)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a specific sitemap.
		 * Get sites/{siteUrl}/sitemaps/{feedpath}
		 * @param {string} siteUrl The site's URL, including protocol. For example: http://www.example.com/
		 * @param {string} feedpath The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
		 * @return {void} Successful response
		 */
		Webmasters_sitemaps_get(siteUrl: string, feedpath: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sites/' + (siteUrl == null ? '' : encodeURIComponent(siteUrl)) + '/sitemaps/' + (feedpath == null ? '' : encodeURIComponent(feedpath)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Submits a sitemap for a site.
		 * Put sites/{siteUrl}/sitemaps/{feedpath}
		 * @param {string} siteUrl The site's URL, including protocol. For example: http://www.example.com/
		 * @param {string} feedpath The URL of the sitemap to add. For example: http://www.example.com/sitemap.xml
		 * @return {void} Successful response
		 */
		Webmasters_sitemaps_submit(siteUrl: string, feedpath: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sites/' + (siteUrl == null ? '' : encodeURIComponent(siteUrl)) + '/sitemaps/' + (feedpath == null ? '' : encodeURIComponent(feedpath)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

