import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** AMP inspection result of the live page or the current information from Google's index, depending on whether you requested a live inspection or not. */
	export interface AmpInspectionResult {

		/** Index status of the AMP URL. */
		ampIndexStatusVerdict?: AmpInspectionResultAmpIndexStatusVerdict | null;

		/** URL of the AMP that was inspected. If the submitted URL is a desktop page that refers to an AMP version, the AMP version will be inspected. */
		ampUrl?: string | null;

		/** Whether or not the page blocks indexing through a noindex rule. */
		indexingState?: AmpInspectionResultIndexingState | null;

		/** A list of zero or more AMP issues found for the inspected URL. */
		issues?: Array<AmpIssue>;

		/** Last time this AMP version was crawled by Google. Absent if the URL was never crawled successfully. */
		lastCrawlTime?: string | null;

		/** Whether or not Google could fetch the AMP. */
		pageFetchState?: AmpInspectionResultPageFetchState | null;

		/** Whether or not the page is blocked to Google by a robots.txt rule. */
		robotsTxtState?: AmpInspectionResultRobotsTxtState | null;

		/** The status of the most severe error on the page. If a page has both warnings and errors, the page status is error. Error status means the page cannot be shown in Search results. */
		verdict?: AmpInspectionResultAmpIndexStatusVerdict | null;
	}

	/** AMP inspection result of the live page or the current information from Google's index, depending on whether you requested a live inspection or not. */
	export interface AmpInspectionResultFormProperties {

		/** Index status of the AMP URL. */
		ampIndexStatusVerdict: FormControl<AmpInspectionResultAmpIndexStatusVerdict | null | undefined>,

		/** URL of the AMP that was inspected. If the submitted URL is a desktop page that refers to an AMP version, the AMP version will be inspected. */
		ampUrl: FormControl<string | null | undefined>,

		/** Whether or not the page blocks indexing through a noindex rule. */
		indexingState: FormControl<AmpInspectionResultIndexingState | null | undefined>,

		/** Last time this AMP version was crawled by Google. Absent if the URL was never crawled successfully. */
		lastCrawlTime: FormControl<string | null | undefined>,

		/** Whether or not Google could fetch the AMP. */
		pageFetchState: FormControl<AmpInspectionResultPageFetchState | null | undefined>,

		/** Whether or not the page is blocked to Google by a robots.txt rule. */
		robotsTxtState: FormControl<AmpInspectionResultRobotsTxtState | null | undefined>,

		/** The status of the most severe error on the page. If a page has both warnings and errors, the page status is error. Error status means the page cannot be shown in Search results. */
		verdict: FormControl<AmpInspectionResultAmpIndexStatusVerdict | null | undefined>,
	}
	export function CreateAmpInspectionResultFormGroup() {
		return new FormGroup<AmpInspectionResultFormProperties>({
			ampIndexStatusVerdict: new FormControl<AmpInspectionResultAmpIndexStatusVerdict | null | undefined>(undefined),
			ampUrl: new FormControl<string | null | undefined>(undefined),
			indexingState: new FormControl<AmpInspectionResultIndexingState | null | undefined>(undefined),
			lastCrawlTime: new FormControl<string | null | undefined>(undefined),
			pageFetchState: new FormControl<AmpInspectionResultPageFetchState | null | undefined>(undefined),
			robotsTxtState: new FormControl<AmpInspectionResultRobotsTxtState | null | undefined>(undefined),
			verdict: new FormControl<AmpInspectionResultAmpIndexStatusVerdict | null | undefined>(undefined),
		});

	}

	export enum AmpInspectionResultAmpIndexStatusVerdict { VERDICT_UNSPECIFIED = 0, PASS = 1, PARTIAL = 2, FAIL = 3, NEUTRAL = 4 }

	export enum AmpInspectionResultIndexingState { AMP_INDEXING_STATE_UNSPECIFIED = 0, AMP_INDEXING_ALLOWED = 1, BLOCKED_DUE_TO_NOINDEX = 2, BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER = 3 }


	/** AMP issue. */
	export interface AmpIssue {

		/** Brief description of this issue. */
		issueMessage?: string | null;

		/** Severity of this issue: WARNING or ERROR. */
		severity?: AmpIssueSeverity | null;
	}

	/** AMP issue. */
	export interface AmpIssueFormProperties {

		/** Brief description of this issue. */
		issueMessage: FormControl<string | null | undefined>,

		/** Severity of this issue: WARNING or ERROR. */
		severity: FormControl<AmpIssueSeverity | null | undefined>,
	}
	export function CreateAmpIssueFormGroup() {
		return new FormGroup<AmpIssueFormProperties>({
			issueMessage: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<AmpIssueSeverity | null | undefined>(undefined),
		});

	}

	export enum AmpIssueSeverity { SEVERITY_UNSPECIFIED = 0, WARNING = 1, ERROR = 2 }

	export enum AmpInspectionResultPageFetchState { PAGE_FETCH_STATE_UNSPECIFIED = 0, SUCCESSFUL = 1, SOFT_404 = 2, BLOCKED_ROBOTS_TXT = 3, NOT_FOUND = 4, ACCESS_DENIED = 5, SERVER_ERROR = 6, REDIRECT_ERROR = 7, ACCESS_FORBIDDEN = 8, BLOCKED_4XX = 9, INTERNAL_CRAWL_ERROR = 10, INVALID_URL = 11 }

	export enum AmpInspectionResultRobotsTxtState { ROBOTS_TXT_STATE_UNSPECIFIED = 0, ALLOWED = 1, DISALLOWED = 2 }

	export interface ApiDataRow {
		clicks?: number | null;
		ctr?: number | null;
		impressions?: number | null;
		keys?: Array<string>;
		position?: number | null;
	}
	export interface ApiDataRowFormProperties {
		clicks: FormControl<number | null | undefined>,
		ctr: FormControl<number | null | undefined>,
		impressions: FormControl<number | null | undefined>,
		position: FormControl<number | null | undefined>,
	}
	export function CreateApiDataRowFormGroup() {
		return new FormGroup<ApiDataRowFormProperties>({
			clicks: new FormControl<number | null | undefined>(undefined),
			ctr: new FormControl<number | null | undefined>(undefined),
			impressions: new FormControl<number | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A filter test to be applied to each row in the data set, where a match can return the row. Filters are string comparisons, and values and dimension names are not case-sensitive. Individual filters are either AND'ed or OR'ed within their parent filter group, according to the group's group type. You do not need to group by a specified dimension to filter against it. */
	export interface ApiDimensionFilter {
		dimension?: ApiDimensionFilterDimension | null;
		expression?: string | null;
		operator?: ApiDimensionFilterOperator | null;
	}

	/** A filter test to be applied to each row in the data set, where a match can return the row. Filters are string comparisons, and values and dimension names are not case-sensitive. Individual filters are either AND'ed or OR'ed within their parent filter group, according to the group's group type. You do not need to group by a specified dimension to filter against it. */
	export interface ApiDimensionFilterFormProperties {
		dimension: FormControl<ApiDimensionFilterDimension | null | undefined>,
		expression: FormControl<string | null | undefined>,
		operator: FormControl<ApiDimensionFilterOperator | null | undefined>,
	}
	export function CreateApiDimensionFilterFormGroup() {
		return new FormGroup<ApiDimensionFilterFormProperties>({
			dimension: new FormControl<ApiDimensionFilterDimension | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<ApiDimensionFilterOperator | null | undefined>(undefined),
		});

	}

	export enum ApiDimensionFilterDimension { QUERY = 0, PAGE = 1, COUNTRY = 2, DEVICE = 3, SEARCH_APPEARANCE = 4 }

	export enum ApiDimensionFilterOperator { EQUALS = 0, NOT_EQUALS = 1, CONTAINS = 2, NOT_CONTAINS = 3, INCLUDING_REGEX = 4, EXCLUDING_REGEX = 5 }


	/** A set of dimension value filters to test against each row. Only rows that pass all filter groups will be returned. All results within a filter group are either AND'ed or OR'ed together, depending on the group type selected. All filter groups are AND'ed together. */
	export interface ApiDimensionFilterGroup {
		filters?: Array<ApiDimensionFilter>;
		groupType?: ApiDimensionFilterGroupGroupType | null;
	}

	/** A set of dimension value filters to test against each row. Only rows that pass all filter groups will be returned. All results within a filter group are either AND'ed or OR'ed together, depending on the group type selected. All filter groups are AND'ed together. */
	export interface ApiDimensionFilterGroupFormProperties {
		groupType: FormControl<ApiDimensionFilterGroupGroupType | null | undefined>,
	}
	export function CreateApiDimensionFilterGroupFormGroup() {
		return new FormGroup<ApiDimensionFilterGroupFormProperties>({
			groupType: new FormControl<ApiDimensionFilterGroupGroupType | null | undefined>(undefined),
		});

	}

	export enum ApiDimensionFilterGroupGroupType { AND = 0 }


	/** Blocked resource. */
	export interface BlockedResource {

		/** URL of the blocked resource. */
		url?: string | null;
	}

	/** Blocked resource. */
	export interface BlockedResourceFormProperties {

		/** URL of the blocked resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateBlockedResourceFormGroup() {
		return new FormGroup<BlockedResourceFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Rich Results items grouped by type. */
	export interface DetectedItems {

		/** List of Rich Results items. */
		items?: Array<Item>;

		/** Rich Results type */
		richResultType?: string | null;
	}

	/** Rich Results items grouped by type. */
	export interface DetectedItemsFormProperties {

		/** Rich Results type */
		richResultType: FormControl<string | null | undefined>,
	}
	export function CreateDetectedItemsFormGroup() {
		return new FormGroup<DetectedItemsFormProperties>({
			richResultType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A specific rich result found on the page. */
	export interface Item {

		/** A list of zero or more rich result issues found for this instance. */
		issues?: Array<RichResultsIssue>;

		/** The user-provided name of this item. */
		name?: string | null;
	}

	/** A specific rich result found on the page. */
	export interface ItemFormProperties {

		/** The user-provided name of this item. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Severity and status of a single issue affecting a single rich result instance on a page. */
	export interface RichResultsIssue {

		/** Rich Results issue type. */
		issueMessage?: string | null;

		/** Severity of this issue: WARNING, or ERROR. Items with an issue of status ERROR cannot appear with rich result features in Google Search results. */
		severity?: AmpIssueSeverity | null;
	}

	/** Severity and status of a single issue affecting a single rich result instance on a page. */
	export interface RichResultsIssueFormProperties {

		/** Rich Results issue type. */
		issueMessage: FormControl<string | null | undefined>,

		/** Severity of this issue: WARNING, or ERROR. Items with an issue of status ERROR cannot appear with rich result features in Google Search results. */
		severity: FormControl<AmpIssueSeverity | null | undefined>,
	}
	export function CreateRichResultsIssueFormGroup() {
		return new FormGroup<RichResultsIssueFormProperties>({
			issueMessage: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<AmpIssueSeverity | null | undefined>(undefined),
		});

	}


	/** Describe image data. */
	export interface Image {

		/** Image data in format determined by the mime type. Currently, the format will always be "image/png", but this might change in the future. */
		data?: string | null;

		/** The mime-type of the image data. */
		mimeType?: string | null;
	}

	/** Describe image data. */
	export interface ImageFormProperties {

		/** Image data in format determined by the mime type. Currently, the format will always be "image/png", but this might change in the future. */
		data: FormControl<string | null | undefined>,

		/** The mime-type of the image data. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of index status inspection for either the live page or the version in Google's index, depending on whether you requested a live inspection or not. For more information, see the [Index coverage report documentation](https://support.google.com/webmasters/answer/7440203). */
	export interface IndexStatusInspectionResult {

		/** Could Google find and index the page. More details about page indexing appear in 'indexing_state'. */
		coverageState?: string | null;

		/** Primary crawler that was used by Google to crawl your site. */
		crawledAs?: IndexStatusInspectionResultCrawledAs | null;

		/** The URL of the page that Google selected as canonical. If the page was not indexed, this field is absent. */
		googleCanonical?: string | null;

		/** Whether or not the page blocks indexing through a noindex rule. */
		indexingState?: IndexStatusInspectionResultIndexingState | null;

		/** Last time this URL was crawled by Google using the [primary crawler](https://support.google.com/webmasters/answer/7440203#primary_crawler). Absent if the URL was never crawled successfully. */
		lastCrawlTime?: string | null;

		/** Whether or not Google could retrieve the page from your server. Equivalent to ["page fetch"](https://support.google.com/webmasters/answer/9012289#index_coverage) in the URL inspection report. */
		pageFetchState?: AmpInspectionResultPageFetchState | null;

		/** URLs that link to the inspected URL, directly and indirectly. */
		referringUrls?: Array<string>;

		/** Whether or not the page is blocked to Google by a robots.txt rule. */
		robotsTxtState?: AmpInspectionResultRobotsTxtState | null;

		/** Any sitemaps that this URL was listed in, as known by Google. Not guaranteed to be an exhaustive list, especially if Google did not discover this URL through a sitemap. Absent if no sitemaps were found. */
		sitemap?: Array<string>;

		/** The URL that your page or site [declares as canonical](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls?#define-canonical). If you did not declare a canonical URL, this field is absent. */
		userCanonical?: string | null;

		/** High level verdict about whether the URL *is* indexed (indexed status), or *can be* indexed (live inspection). */
		verdict?: AmpInspectionResultAmpIndexStatusVerdict | null;
	}

	/** Results of index status inspection for either the live page or the version in Google's index, depending on whether you requested a live inspection or not. For more information, see the [Index coverage report documentation](https://support.google.com/webmasters/answer/7440203). */
	export interface IndexStatusInspectionResultFormProperties {

		/** Could Google find and index the page. More details about page indexing appear in 'indexing_state'. */
		coverageState: FormControl<string | null | undefined>,

		/** Primary crawler that was used by Google to crawl your site. */
		crawledAs: FormControl<IndexStatusInspectionResultCrawledAs | null | undefined>,

		/** The URL of the page that Google selected as canonical. If the page was not indexed, this field is absent. */
		googleCanonical: FormControl<string | null | undefined>,

		/** Whether or not the page blocks indexing through a noindex rule. */
		indexingState: FormControl<IndexStatusInspectionResultIndexingState | null | undefined>,

		/** Last time this URL was crawled by Google using the [primary crawler](https://support.google.com/webmasters/answer/7440203#primary_crawler). Absent if the URL was never crawled successfully. */
		lastCrawlTime: FormControl<string | null | undefined>,

		/** Whether or not Google could retrieve the page from your server. Equivalent to ["page fetch"](https://support.google.com/webmasters/answer/9012289#index_coverage) in the URL inspection report. */
		pageFetchState: FormControl<AmpInspectionResultPageFetchState | null | undefined>,

		/** Whether or not the page is blocked to Google by a robots.txt rule. */
		robotsTxtState: FormControl<AmpInspectionResultRobotsTxtState | null | undefined>,

		/** The URL that your page or site [declares as canonical](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls?#define-canonical). If you did not declare a canonical URL, this field is absent. */
		userCanonical: FormControl<string | null | undefined>,

		/** High level verdict about whether the URL *is* indexed (indexed status), or *can be* indexed (live inspection). */
		verdict: FormControl<AmpInspectionResultAmpIndexStatusVerdict | null | undefined>,
	}
	export function CreateIndexStatusInspectionResultFormGroup() {
		return new FormGroup<IndexStatusInspectionResultFormProperties>({
			coverageState: new FormControl<string | null | undefined>(undefined),
			crawledAs: new FormControl<IndexStatusInspectionResultCrawledAs | null | undefined>(undefined),
			googleCanonical: new FormControl<string | null | undefined>(undefined),
			indexingState: new FormControl<IndexStatusInspectionResultIndexingState | null | undefined>(undefined),
			lastCrawlTime: new FormControl<string | null | undefined>(undefined),
			pageFetchState: new FormControl<AmpInspectionResultPageFetchState | null | undefined>(undefined),
			robotsTxtState: new FormControl<AmpInspectionResultRobotsTxtState | null | undefined>(undefined),
			userCanonical: new FormControl<string | null | undefined>(undefined),
			verdict: new FormControl<AmpInspectionResultAmpIndexStatusVerdict | null | undefined>(undefined),
		});

	}

	export enum IndexStatusInspectionResultCrawledAs { CRAWLING_USER_AGENT_UNSPECIFIED = 0, DESKTOP = 1, MOBILE = 2 }

	export enum IndexStatusInspectionResultIndexingState { INDEXING_STATE_UNSPECIFIED = 0, INDEXING_ALLOWED = 1, BLOCKED_BY_META_TAG = 2, BLOCKED_BY_HTTP_HEADER = 3, BLOCKED_BY_ROBOTS_TXT = 4 }


	/** Index inspection request. */
	export interface InspectUrlIndexRequest {

		/** Required. URL to inspect. Must be under the property specified in "site_url". */
		inspectionUrl?: string | null;

		/** Optional. An [IETF BCP-47](https://en.wikipedia.org/wiki/IETF_language_tag) language code representing the requested language for translated issue messages, e.g. "en-US", "or "de-CH". Default value is "en-US". */
		languageCode?: string | null;

		/** Required. The URL of the property as defined in Search Console. **Examples:** `http://www.example.com/` for a URL-prefix property, or `sc-domain:example.com` for a Domain property. */
		siteUrl?: string | null;
	}

	/** Index inspection request. */
	export interface InspectUrlIndexRequestFormProperties {

		/** Required. URL to inspect. Must be under the property specified in "site_url". */
		inspectionUrl: FormControl<string | null | undefined>,

		/** Optional. An [IETF BCP-47](https://en.wikipedia.org/wiki/IETF_language_tag) language code representing the requested language for translated issue messages, e.g. "en-US", "or "de-CH". Default value is "en-US". */
		languageCode: FormControl<string | null | undefined>,

		/** Required. The URL of the property as defined in Search Console. **Examples:** `http://www.example.com/` for a URL-prefix property, or `sc-domain:example.com` for a Domain property. */
		siteUrl: FormControl<string | null | undefined>,
	}
	export function CreateInspectUrlIndexRequestFormGroup() {
		return new FormGroup<InspectUrlIndexRequestFormProperties>({
			inspectionUrl: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			siteUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Index-Status inspection response. */
	export interface InspectUrlIndexResponse {

		/** URL inspection result, including all inspection results. */
		inspectionResult?: UrlInspectionResult;
	}

	/** Index-Status inspection response. */
	export interface InspectUrlIndexResponseFormProperties {
	}
	export function CreateInspectUrlIndexResponseFormGroup() {
		return new FormGroup<InspectUrlIndexResponseFormProperties>({
		});

	}


	/** URL inspection result, including all inspection results. */
	export interface UrlInspectionResult {

		/** AMP inspection result of the live page or the current information from Google's index, depending on whether you requested a live inspection or not. */
		ampResult?: AmpInspectionResult;

		/** Results of index status inspection for either the live page or the version in Google's index, depending on whether you requested a live inspection or not. For more information, see the [Index coverage report documentation](https://support.google.com/webmasters/answer/7440203). */
		indexStatusResult?: IndexStatusInspectionResult;

		/** Link to Search Console URL inspection. */
		inspectionResultLink?: string | null;

		/** Mobile-usability inspection results. */
		mobileUsabilityResult?: MobileUsabilityInspectionResult;

		/** Rich-Results inspection result, including any rich results found at this URL. */
		richResultsResult?: RichResultsInspectionResult;
	}

	/** URL inspection result, including all inspection results. */
	export interface UrlInspectionResultFormProperties {

		/** Link to Search Console URL inspection. */
		inspectionResultLink: FormControl<string | null | undefined>,
	}
	export function CreateUrlInspectionResultFormGroup() {
		return new FormGroup<UrlInspectionResultFormProperties>({
			inspectionResultLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Mobile-usability inspection results. */
	export interface MobileUsabilityInspectionResult {

		/** A list of zero or more mobile-usability issues detected for this URL. */
		issues?: Array<MobileUsabilityIssue>;

		/** High-level mobile-usability inspection result for this URL. */
		verdict?: AmpInspectionResultAmpIndexStatusVerdict | null;
	}

	/** Mobile-usability inspection results. */
	export interface MobileUsabilityInspectionResultFormProperties {

		/** High-level mobile-usability inspection result for this URL. */
		verdict: FormControl<AmpInspectionResultAmpIndexStatusVerdict | null | undefined>,
	}
	export function CreateMobileUsabilityInspectionResultFormGroup() {
		return new FormGroup<MobileUsabilityInspectionResultFormProperties>({
			verdict: new FormControl<AmpInspectionResultAmpIndexStatusVerdict | null | undefined>(undefined),
		});

	}


	/** Mobile-usability issue. */
	export interface MobileUsabilityIssue {

		/** Mobile-usability issue type. */
		issueType?: MobileUsabilityIssueIssueType | null;

		/** Additional information regarding the issue. */
		message?: string | null;

		/** Not returned; reserved for future use. */
		severity?: AmpIssueSeverity | null;
	}

	/** Mobile-usability issue. */
	export interface MobileUsabilityIssueFormProperties {

		/** Mobile-usability issue type. */
		issueType: FormControl<MobileUsabilityIssueIssueType | null | undefined>,

		/** Additional information regarding the issue. */
		message: FormControl<string | null | undefined>,

		/** Not returned; reserved for future use. */
		severity: FormControl<AmpIssueSeverity | null | undefined>,
	}
	export function CreateMobileUsabilityIssueFormGroup() {
		return new FormGroup<MobileUsabilityIssueFormProperties>({
			issueType: new FormControl<MobileUsabilityIssueIssueType | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<AmpIssueSeverity | null | undefined>(undefined),
		});

	}

	export enum MobileUsabilityIssueIssueType { MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED = 0, USES_INCOMPATIBLE_PLUGINS = 1, CONFIGURE_VIEWPORT = 2, FIXED_WIDTH_VIEWPORT = 3, SIZE_CONTENT_TO_VIEWPORT = 4, USE_LEGIBLE_FONT_SIZES = 5, TAP_TARGETS_TOO_CLOSE = 6 }


	/** Rich-Results inspection result, including any rich results found at this URL. */
	export interface RichResultsInspectionResult {

		/** A list of zero or more rich results detected on this page. Rich results that cannot even be parsed due to syntactic issues will not be listed here. */
		detectedItems?: Array<DetectedItems>;

		/** High-level rich results inspection result for this URL. */
		verdict?: AmpInspectionResultAmpIndexStatusVerdict | null;
	}

	/** Rich-Results inspection result, including any rich results found at this URL. */
	export interface RichResultsInspectionResultFormProperties {

		/** High-level rich results inspection result for this URL. */
		verdict: FormControl<AmpInspectionResultAmpIndexStatusVerdict | null | undefined>,
	}
	export function CreateRichResultsInspectionResultFormGroup() {
		return new FormGroup<RichResultsInspectionResultFormProperties>({
			verdict: new FormControl<AmpInspectionResultAmpIndexStatusVerdict | null | undefined>(undefined),
		});

	}


	/** Mobile-friendly issue. */
	export interface MobileFriendlyIssue {

		/** Rule violated. */
		rule?: MobileFriendlyIssueRule | null;
	}

	/** Mobile-friendly issue. */
	export interface MobileFriendlyIssueFormProperties {

		/** Rule violated. */
		rule: FormControl<MobileFriendlyIssueRule | null | undefined>,
	}
	export function CreateMobileFriendlyIssueFormGroup() {
		return new FormGroup<MobileFriendlyIssueFormProperties>({
			rule: new FormControl<MobileFriendlyIssueRule | null | undefined>(undefined),
		});

	}

	export enum MobileFriendlyIssueRule { MOBILE_FRIENDLY_RULE_UNSPECIFIED = 0, USES_INCOMPATIBLE_PLUGINS = 1, CONFIGURE_VIEWPORT = 2, FIXED_WIDTH_VIEWPORT = 3, SIZE_CONTENT_TO_VIEWPORT = 4, USE_LEGIBLE_FONT_SIZES = 5, TAP_TARGETS_TOO_CLOSE = 6 }


	/** Information about a resource with issue. */
	export interface ResourceIssue {

		/** Blocked resource. */
		blockedResource?: BlockedResource;
	}

	/** Information about a resource with issue. */
	export interface ResourceIssueFormProperties {
	}
	export function CreateResourceIssueFormGroup() {
		return new FormGroup<ResourceIssueFormProperties>({
		});

	}


	/** Mobile-friendly test request. */
	export interface RunMobileFriendlyTestRequest {

		/** Whether or not screenshot is requested. Default is false. */
		requestScreenshot?: boolean | null;

		/** URL for inspection. */
		url?: string | null;
	}

	/** Mobile-friendly test request. */
	export interface RunMobileFriendlyTestRequestFormProperties {

		/** Whether or not screenshot is requested. Default is false. */
		requestScreenshot: FormControl<boolean | null | undefined>,

		/** URL for inspection. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateRunMobileFriendlyTestRequestFormGroup() {
		return new FormGroup<RunMobileFriendlyTestRequestFormProperties>({
			requestScreenshot: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Mobile-friendly test response, including mobile-friendly issues and resource issues. */
	export interface RunMobileFriendlyTestResponse {

		/** Test verdict, whether the page is mobile friendly or not. */
		mobileFriendliness?: RunMobileFriendlyTestResponseMobileFriendliness | null;

		/** List of mobile-usability issues. */
		mobileFriendlyIssues?: Array<MobileFriendlyIssue>;

		/** Information about embedded resources issues. */
		resourceIssues?: Array<ResourceIssue>;

		/** Describe image data. */
		screenshot?: Image;

		/** Final state of the test, including error details if necessary. */
		testStatus?: TestStatus;
	}

	/** Mobile-friendly test response, including mobile-friendly issues and resource issues. */
	export interface RunMobileFriendlyTestResponseFormProperties {

		/** Test verdict, whether the page is mobile friendly or not. */
		mobileFriendliness: FormControl<RunMobileFriendlyTestResponseMobileFriendliness | null | undefined>,
	}
	export function CreateRunMobileFriendlyTestResponseFormGroup() {
		return new FormGroup<RunMobileFriendlyTestResponseFormProperties>({
			mobileFriendliness: new FormControl<RunMobileFriendlyTestResponseMobileFriendliness | null | undefined>(undefined),
		});

	}

	export enum RunMobileFriendlyTestResponseMobileFriendliness { MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED = 0, MOBILE_FRIENDLY = 1, NOT_MOBILE_FRIENDLY = 2 }


	/** Final state of the test, including error details if necessary. */
	export interface TestStatus {

		/** Error details if applicable. */
		details?: string | null;

		/** Status of the test. */
		status?: TestStatusStatus | null;
	}

	/** Final state of the test, including error details if necessary. */
	export interface TestStatusFormProperties {

		/** Error details if applicable. */
		details: FormControl<string | null | undefined>,

		/** Status of the test. */
		status: FormControl<TestStatusStatus | null | undefined>,
	}
	export function CreateTestStatusFormGroup() {
		return new FormGroup<TestStatusFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TestStatusStatus | null | undefined>(undefined),
		});

	}

	export enum TestStatusStatus { TEST_STATUS_UNSPECIFIED = 0, COMPLETE = 1, INTERNAL_ERROR = 2, PAGE_UNREACHABLE = 3 }

	export interface SearchAnalyticsQueryRequest {

		/** [Optional; Default is \"auto\"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see the help documentation to learn how data is calculated differently by site versus by page. **Note:** If you group or filter by page, you cannot aggregate by property. If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid. */
		aggregationType?: SearchAnalyticsQueryRequestAggregationType | null;

		/** The data state to be fetched, can be full or all, the latter including full and partial data. */
		dataState?: SearchAnalyticsQueryRequestDataState | null;

		/** [Optional] Zero or more filters to apply to the dimension grouping values; for example, 'query contains \"buy\"' to see only data where the query string contains the substring \"buy\" (not case-sensitive). You can filter by a dimension without grouping by it. */
		dimensionFilterGroups?: Array<ApiDimensionFilterGroup>;

		/** [Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in the Search Analytics page. Dimensions are combined to create a unique row key for each row. Results are grouped in the order that you supply these dimensions. */
		dimensions?: Array<string>;

		/** [Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than or equal to the start date. This value is included in the range. */
		endDate?: string | null;

		/** [Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 25,000 (inclusive). */
		rowLimit?: number | null;

		/** [Optional; Default is \"web\"] The search type to filter for. */
		searchType?: SearchAnalyticsQueryRequestSearchType | null;

		/** [Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This value is included in the range. */
		startDate?: string | null;

		/** [Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number. */
		startRow?: number | null;

		/** Optional. [Optional; Default is \"web\"] Type of report: search type, or either Discover or Gnews. */
		type?: SearchAnalyticsQueryRequestSearchType | null;
	}
	export interface SearchAnalyticsQueryRequestFormProperties {

		/** [Optional; Default is \"auto\"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see the help documentation to learn how data is calculated differently by site versus by page. **Note:** If you group or filter by page, you cannot aggregate by property. If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid. */
		aggregationType: FormControl<SearchAnalyticsQueryRequestAggregationType | null | undefined>,

		/** The data state to be fetched, can be full or all, the latter including full and partial data. */
		dataState: FormControl<SearchAnalyticsQueryRequestDataState | null | undefined>,

		/** [Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than or equal to the start date. This value is included in the range. */
		endDate: FormControl<string | null | undefined>,

		/** [Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 25,000 (inclusive). */
		rowLimit: FormControl<number | null | undefined>,

		/** [Optional; Default is \"web\"] The search type to filter for. */
		searchType: FormControl<SearchAnalyticsQueryRequestSearchType | null | undefined>,

		/** [Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This value is included in the range. */
		startDate: FormControl<string | null | undefined>,

		/** [Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number. */
		startRow: FormControl<number | null | undefined>,

		/** Optional. [Optional; Default is \"web\"] Type of report: search type, or either Discover or Gnews. */
		type: FormControl<SearchAnalyticsQueryRequestSearchType | null | undefined>,
	}
	export function CreateSearchAnalyticsQueryRequestFormGroup() {
		return new FormGroup<SearchAnalyticsQueryRequestFormProperties>({
			aggregationType: new FormControl<SearchAnalyticsQueryRequestAggregationType | null | undefined>(undefined),
			dataState: new FormControl<SearchAnalyticsQueryRequestDataState | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			rowLimit: new FormControl<number | null | undefined>(undefined),
			searchType: new FormControl<SearchAnalyticsQueryRequestSearchType | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			startRow: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<SearchAnalyticsQueryRequestSearchType | null | undefined>(undefined),
		});

	}

	export enum SearchAnalyticsQueryRequestAggregationType { AUTO = 0, BY_PROPERTY = 1, BY_PAGE = 2, BY_NEWS_SHOWCASE_PANEL = 3 }

	export enum SearchAnalyticsQueryRequestDataState { DATA_STATE_UNSPECIFIED = 0, FINAL = 1, ALL = 2 }

	export enum SearchAnalyticsQueryRequestSearchType { WEB = 0, IMAGE = 1, VIDEO = 2, NEWS = 3, DISCOVER = 4, GOOGLE_NEWS = 5 }


	/** A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter. */
	export interface SearchAnalyticsQueryResponse {

		/** How the results were aggregated. */
		responseAggregationType?: SearchAnalyticsQueryRequestAggregationType | null;

		/** A list of rows grouped by the key values in the order given in the query. */
		rows?: Array<ApiDataRow>;
	}

	/** A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter. */
	export interface SearchAnalyticsQueryResponseFormProperties {

		/** How the results were aggregated. */
		responseAggregationType: FormControl<SearchAnalyticsQueryRequestAggregationType | null | undefined>,
	}
	export function CreateSearchAnalyticsQueryResponseFormGroup() {
		return new FormGroup<SearchAnalyticsQueryResponseFormProperties>({
			responseAggregationType: new FormControl<SearchAnalyticsQueryRequestAggregationType | null | undefined>(undefined),
		});

	}


	/** List of sitemaps. */
	export interface SitemapsListResponse {

		/** Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184). */
		sitemap?: Array<WmxSitemap>;
	}

	/** List of sitemaps. */
	export interface SitemapsListResponseFormProperties {
	}
	export function CreateSitemapsListResponseFormGroup() {
		return new FormGroup<SitemapsListResponseFormProperties>({
		});

	}


	/** Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184). */
	export interface WmxSitemap {

		/** The various content types in the sitemap. */
		contents?: Array<WmxSitemapContent>;

		/** Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed before it can be processed correctly. */
		errors?: string | null;

		/** If true, the sitemap has not been processed. */
		isPending?: boolean | null;

		/** If true, the sitemap is a collection of sitemaps. */
		isSitemapsIndex?: boolean | null;

		/** Date & time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd). */
		lastDownloaded?: string | null;

		/** Date & time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd). */
		lastSubmitted?: string | null;

		/** The url of the sitemap. */
		path?: string | null;

		/** The type of the sitemap. For example: `rssFeed`. */
		type?: WmxSitemapType | null;

		/** Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps. */
		warnings?: string | null;
	}

	/** Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184). */
	export interface WmxSitemapFormProperties {

		/** Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed before it can be processed correctly. */
		errors: FormControl<string | null | undefined>,

		/** If true, the sitemap has not been processed. */
		isPending: FormControl<boolean | null | undefined>,

		/** If true, the sitemap is a collection of sitemaps. */
		isSitemapsIndex: FormControl<boolean | null | undefined>,

		/** Date & time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd). */
		lastDownloaded: FormControl<string | null | undefined>,

		/** Date & time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd). */
		lastSubmitted: FormControl<string | null | undefined>,

		/** The url of the sitemap. */
		path: FormControl<string | null | undefined>,

		/** The type of the sitemap. For example: `rssFeed`. */
		type: FormControl<WmxSitemapType | null | undefined>,

		/** Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps. */
		warnings: FormControl<string | null | undefined>,
	}
	export function CreateWmxSitemapFormGroup() {
		return new FormGroup<WmxSitemapFormProperties>({
			errors: new FormControl<string | null | undefined>(undefined),
			isPending: new FormControl<boolean | null | undefined>(undefined),
			isSitemapsIndex: new FormControl<boolean | null | undefined>(undefined),
			lastDownloaded: new FormControl<string | null | undefined>(undefined),
			lastSubmitted: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<WmxSitemapType | null | undefined>(undefined),
			warnings: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the various content types in the sitemap. */
	export interface WmxSitemapContent {

		/** *Deprecated; do not use.* */
		indexed?: string | null;

		/** The number of URLs in the sitemap (of the content type). */
		submitted?: string | null;

		/** The specific type of content in this sitemap. For example: `web`. */
		type?: WmxSitemapContentType | null;
	}

	/** Information about the various content types in the sitemap. */
	export interface WmxSitemapContentFormProperties {

		/** *Deprecated; do not use.* */
		indexed: FormControl<string | null | undefined>,

		/** The number of URLs in the sitemap (of the content type). */
		submitted: FormControl<string | null | undefined>,

		/** The specific type of content in this sitemap. For example: `web`. */
		type: FormControl<WmxSitemapContentType | null | undefined>,
	}
	export function CreateWmxSitemapContentFormGroup() {
		return new FormGroup<WmxSitemapContentFormProperties>({
			indexed: new FormControl<string | null | undefined>(undefined),
			submitted: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<WmxSitemapContentType | null | undefined>(undefined),
		});

	}

	export enum WmxSitemapContentType { WEB = 0, IMAGE = 1, VIDEO = 2, NEWS = 3, MOBILE = 4, ANDROID_APP = 5, PATTERN = 6, IOS_APP = 7, DATA_FEED_ELEMENT = 8 }

	export enum WmxSitemapType { NOT_SITEMAP = 0, URL_LIST = 1, SITEMAP = 2, RSS_FEED = 3, ATOM_FEED = 4, PATTERN_SITEMAP = 5, OCEANFRONT = 6 }


	/** List of sites with access level information. */
	export interface SitesListResponse {

		/** Contains permission level information about a Search Console site. For more information, see [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999). */
		siteEntry?: Array<WmxSite>;
	}

	/** List of sites with access level information. */
	export interface SitesListResponseFormProperties {
	}
	export function CreateSitesListResponseFormGroup() {
		return new FormGroup<SitesListResponseFormProperties>({
		});

	}


	/** Contains permission level information about a Search Console site. For more information, see [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999). */
	export interface WmxSite {

		/** The user's permission level for the site. */
		permissionLevel?: WmxSitePermissionLevel | null;

		/** The URL of the site. */
		siteUrl?: string | null;
	}

	/** Contains permission level information about a Search Console site. For more information, see [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999). */
	export interface WmxSiteFormProperties {

		/** The user's permission level for the site. */
		permissionLevel: FormControl<WmxSitePermissionLevel | null | undefined>,

		/** The URL of the site. */
		siteUrl: FormControl<string | null | undefined>,
	}
	export function CreateWmxSiteFormGroup() {
		return new FormGroup<WmxSiteFormProperties>({
			permissionLevel: new FormControl<WmxSitePermissionLevel | null | undefined>(undefined),
			siteUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WmxSitePermissionLevel { SITE_PERMISSION_LEVEL_UNSPECIFIED = 0, SITE_OWNER = 1, SITE_FULL_USER = 2, SITE_RESTRICTED_USER = 3, SITE_UNVERIFIED_USER = 4 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Index inspection.
		 * Post v1/urlInspection/index:inspect
		 * @return {InspectUrlIndexResponse} Successful response
		 */
		Searchconsole_urlInspection_index_inspect(requestBody: InspectUrlIndexRequest): Observable<InspectUrlIndexResponse> {
			return this.http.post<InspectUrlIndexResponse>(this.baseUri + 'v1/urlInspection/index:inspect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs Mobile-Friendly Test for a given URL.
		 * Post v1/urlTestingTools/mobileFriendlyTest:run
		 * @return {RunMobileFriendlyTestResponse} Successful response
		 */
		Searchconsole_urlTestingTools_mobileFriendlyTest_run(requestBody: RunMobileFriendlyTestRequest): Observable<RunMobileFriendlyTestResponse> {
			return this.http.post<RunMobileFriendlyTestResponse>(this.baseUri + 'v1/urlTestingTools/mobileFriendlyTest:run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the user's Search Console sites.
		 * Get webmasters/v3/sites
		 * @return {SitesListResponse} Successful response
		 */
		Webmasters_sites_list(): Observable<SitesListResponse> {
			return this.http.get<SitesListResponse>(this.baseUri + 'webmasters/v3/sites', {});
		}

		/**
		 * Removes a site from the set of the user's Search Console sites.
		 * Delete webmasters/v3/sites/{siteUrl}
		 * @param {string} siteUrl The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`.
		 * @return {void} Successful response
		 */
		Webmasters_sites_delete(siteUrl: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'webmasters/v3/sites/' + (siteUrl == null ? '' : encodeURIComponent(siteUrl)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about specific site.
		 * Get webmasters/v3/sites/{siteUrl}
		 * @param {string} siteUrl The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`.
		 * @return {WmxSite} Successful response
		 */
		Webmasters_sites_get(siteUrl: string): Observable<WmxSite> {
			return this.http.get<WmxSite>(this.baseUri + 'webmasters/v3/sites/' + (siteUrl == null ? '' : encodeURIComponent(siteUrl)), {});
		}

		/**
		 * Adds a site to the set of the user's sites in Search Console.
		 * Put webmasters/v3/sites/{siteUrl}
		 * @param {string} siteUrl The URL of the site to add.
		 * @return {void} Successful response
		 */
		Webmasters_sites_add(siteUrl: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'webmasters/v3/sites/' + (siteUrl == null ? '' : encodeURIComponent(siteUrl)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.
		 * Post webmasters/v3/sites/{siteUrl}/searchAnalytics/query
		 * @param {string} siteUrl The site's URL, including protocol. For example: `http://www.example.com/`.
		 * @return {SearchAnalyticsQueryResponse} Successful response
		 */
		Webmasters_searchanalytics_query(siteUrl: string, requestBody: SearchAnalyticsQueryRequest): Observable<SearchAnalyticsQueryResponse> {
			return this.http.post<SearchAnalyticsQueryResponse>(this.baseUri + 'webmasters/v3/sites/' + (siteUrl == null ? '' : encodeURIComponent(siteUrl)) + '/searchAnalytics/query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).
		 * Get webmasters/v3/sites/{siteUrl}/sitemaps
		 * @param {string} siteUrl The site's URL, including protocol. For example: `http://www.example.com/`.
		 * @param {string} sitemapIndex  A URL of a site's sitemap index. For example: `http://www.example.com/sitemapindex.xml`.
		 * @return {SitemapsListResponse} Successful response
		 */
		Webmasters_sitemaps_list(siteUrl: string, sitemapIndex: string | null | undefined): Observable<SitemapsListResponse> {
			return this.http.get<SitemapsListResponse>(this.baseUri + 'webmasters/v3/sites/' + (siteUrl == null ? '' : encodeURIComponent(siteUrl)) + '/sitemaps&sitemapIndex=' + (sitemapIndex == null ? '' : encodeURIComponent(sitemapIndex)), {});
		}

		/**
		 * Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.
		 * Delete webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}
		 * @param {string} siteUrl The site's URL, including protocol. For example: `http://www.example.com/`.
		 * @param {string} feedpath The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`.
		 * @return {void} Successful response
		 */
		Webmasters_sitemaps_delete(siteUrl: string, feedpath: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'webmasters/v3/sites/' + (siteUrl == null ? '' : encodeURIComponent(siteUrl)) + '/sitemaps/' + (feedpath == null ? '' : encodeURIComponent(feedpath)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a specific sitemap.
		 * Get webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}
		 * @param {string} siteUrl The site's URL, including protocol. For example: `http://www.example.com/`.
		 * @param {string} feedpath The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`.
		 * @return {WmxSitemap} Successful response
		 */
		Webmasters_sitemaps_get(siteUrl: string, feedpath: string): Observable<WmxSitemap> {
			return this.http.get<WmxSitemap>(this.baseUri + 'webmasters/v3/sites/' + (siteUrl == null ? '' : encodeURIComponent(siteUrl)) + '/sitemaps/' + (feedpath == null ? '' : encodeURIComponent(feedpath)), {});
		}

		/**
		 * Submits a sitemap for a site.
		 * Put webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}
		 * @param {string} siteUrl The site's URL, including protocol. For example: `http://www.example.com/`.
		 * @param {string} feedpath The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`.
		 * @return {void} Successful response
		 */
		Webmasters_sitemaps_submit(siteUrl: string, feedpath: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'webmasters/v3/sites/' + (siteUrl == null ? '' : encodeURIComponent(siteUrl)) + '/sitemaps/' + (feedpath == null ? '' : encodeURIComponent(feedpath)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

