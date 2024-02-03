import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface PagespeedApiFormatStringV2 {

		/** List of arguments for the format string. */
		PagespeedApiFormatStringV2Args?: Array<PagespeedApiFormatStringV2Args>;

		/** A localized format string with {{FOO}} placeholders, where 'FOO' is the key of the argument whose value should be substituted. For HYPERLINK arguments, the format string will instead contain {{BEGIN_FOO}} and {{END_FOO}} for the argument with key 'FOO'. */
		format?: string | null;
	}
	export interface PagespeedApiFormatStringV2FormProperties {

		/** A localized format string with {{FOO}} placeholders, where 'FOO' is the key of the argument whose value should be substituted. For HYPERLINK arguments, the format string will instead contain {{BEGIN_FOO}} and {{END_FOO}} for the argument with key 'FOO'. */
		format: FormControl<string | null | undefined>,
	}
	export function CreatePagespeedApiFormatStringV2FormGroup() {
		return new FormGroup<PagespeedApiFormatStringV2FormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiFormatStringV2Args {

		/** The placeholder key for this arg, as a string. */
		key?: string | null;

		/** The screen rectangles being referred to, with dimensions measured in CSS pixels. This is only ever used for SNAPSHOT_RECT arguments. If this is absent for a SNAPSHOT_RECT argument, it means that that argument refers to the entire snapshot. */
		PagespeedApiFormatStringV2ArgsRects?: Array<PagespeedApiFormatStringV2ArgsRects>;

		/** Secondary screen rectangles being referred to, with dimensions measured in CSS pixels. This is only ever used for SNAPSHOT_RECT arguments. */
		PagespeedApiFormatStringV2ArgsSecondary_rects?: Array<PagespeedApiFormatStringV2ArgsSecondary_rects>;

		/** Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, DURATION, VERBATIM_STRING, PERCENTAGE, HYPERLINK, or SNAPSHOT_RECT. */
		type?: string | null;

		/** Argument value, as a localized string. */
		value?: string | null;
	}
	export interface PagespeedApiFormatStringV2ArgsFormProperties {

		/** The placeholder key for this arg, as a string. */
		key: FormControl<string | null | undefined>,

		/** Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, DURATION, VERBATIM_STRING, PERCENTAGE, HYPERLINK, or SNAPSHOT_RECT. */
		type: FormControl<string | null | undefined>,

		/** Argument value, as a localized string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePagespeedApiFormatStringV2ArgsFormGroup() {
		return new FormGroup<PagespeedApiFormatStringV2ArgsFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiFormatStringV2ArgsRects {

		/** The height of the rect. */
		height?: number | null;

		/** The left coordinate of the rect, in page coordinates. */
		left?: number | null;

		/** The top coordinate of the rect, in page coordinates. */
		top?: number | null;

		/** The width of the rect. */
		width?: number | null;
	}
	export interface PagespeedApiFormatStringV2ArgsRectsFormProperties {

		/** The height of the rect. */
		height: FormControl<number | null | undefined>,

		/** The left coordinate of the rect, in page coordinates. */
		left: FormControl<number | null | undefined>,

		/** The top coordinate of the rect, in page coordinates. */
		top: FormControl<number | null | undefined>,

		/** The width of the rect. */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePagespeedApiFormatStringV2ArgsRectsFormGroup() {
		return new FormGroup<PagespeedApiFormatStringV2ArgsRectsFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiFormatStringV2ArgsSecondary_rects {

		/** The height of the rect. */
		height?: number | null;

		/** The left coordinate of the rect, in page coordinates. */
		left?: number | null;

		/** The top coordinate of the rect, in page coordinates. */
		top?: number | null;

		/** The width of the rect. */
		width?: number | null;
	}
	export interface PagespeedApiFormatStringV2ArgsSecondary_rectsFormProperties {

		/** The height of the rect. */
		height: FormControl<number | null | undefined>,

		/** The left coordinate of the rect, in page coordinates. */
		left: FormControl<number | null | undefined>,

		/** The top coordinate of the rect, in page coordinates. */
		top: FormControl<number | null | undefined>,

		/** The width of the rect. */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePagespeedApiFormatStringV2ArgsSecondary_rectsFormGroup() {
		return new FormGroup<PagespeedApiFormatStringV2ArgsSecondary_rectsFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiImageV2 {

		/** Image data base64 encoded. */
		data?: string | null;

		/** Height of screenshot in pixels. */
		height?: number | null;

		/** Unique string key, if any, identifying this image. */
		key?: string | null;

		/** Mime type of image data (e.g. "image/jpeg"). */
		mime_type?: string | null;

		/** The region of the page that is captured by this image, with dimensions measured in CSS pixels. */
		page_rect?: PagespeedApiImageV2Page_rect;

		/** Width of screenshot in pixels. */
		width?: number | null;
	}
	export interface PagespeedApiImageV2FormProperties {

		/** Image data base64 encoded. */
		data: FormControl<string | null | undefined>,

		/** Height of screenshot in pixels. */
		height: FormControl<number | null | undefined>,

		/** Unique string key, if any, identifying this image. */
		key: FormControl<string | null | undefined>,

		/** Mime type of image data (e.g. "image/jpeg"). */
		mime_type: FormControl<string | null | undefined>,

		/** Width of screenshot in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePagespeedApiImageV2FormGroup() {
		return new FormGroup<PagespeedApiImageV2FormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			mime_type: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiImageV2Page_rect {

		/** The height of the rect. */
		height?: number | null;

		/** The left coordinate of the rect, in page coordinates. */
		left?: number | null;

		/** The top coordinate of the rect, in page coordinates. */
		top?: number | null;

		/** The width of the rect. */
		width?: number | null;
	}
	export interface PagespeedApiImageV2Page_rectFormProperties {

		/** The height of the rect. */
		height: FormControl<number | null | undefined>,

		/** The left coordinate of the rect, in page coordinates. */
		left: FormControl<number | null | undefined>,

		/** The top coordinate of the rect, in page coordinates. */
		top: FormControl<number | null | undefined>,

		/** The width of the rect. */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePagespeedApiImageV2Page_rectFormGroup() {
		return new FormGroup<PagespeedApiImageV2Page_rectFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Result {

		/** The captcha verify result */
		captchaResult?: string | null;

		/** Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server. */
		formattedResults?: ResultFormattedResults;

		/** Canonicalized and final URL for the document, after following page redirects (if any). */
		id?: string | null;

		/** List of rules that were specified in the request, but which the server did not know how to instantiate. */
		invalidRules?: Array<string>;

		/** Kind of result. */
		kind?: string | null;

		/** Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc. */
		pageStats?: ResultPageStats;

		/** Response code for the document. 200 indicates a normal page load. 4xx/5xx indicates an error. */
		responseCode?: number | null;

		/** A map with one entry for each rule group in these results. */
		ruleGroups?: {[id: string]: ResultRuleGroups };
		screenshot?: PagespeedApiImageV2;

		/** Title of the page, as displayed in the browser's title bar. */
		title?: string | null;

		/** The version of PageSpeed used to generate these results. */
		version?: ResultVersion;
	}
	export interface ResultFormProperties {

		/** The captcha verify result */
		captchaResult: FormControl<string | null | undefined>,

		/** Canonicalized and final URL for the document, after following page redirects (if any). */
		id: FormControl<string | null | undefined>,

		/** Kind of result. */
		kind: FormControl<string | null | undefined>,

		/** Response code for the document. 200 indicates a normal page load. 4xx/5xx indicates an error. */
		responseCode: FormControl<number | null | undefined>,

		/** A map with one entry for each rule group in these results. */
		ruleGroups: FormControl<{[id: string]: ResultRuleGroups } | null | undefined>,

		/** Title of the page, as displayed in the browser's title bar. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateResultFormGroup() {
		return new FormGroup<ResultFormProperties>({
			captchaResult: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			responseCode: new FormControl<number | null | undefined>(undefined),
			ruleGroups: new FormControl<{[id: string]: ResultRuleGroups } | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResultFormattedResults {

		/** The locale of the formattedResults, e.g. "en_US". */
		locale?: string | null;

		/** Dictionary of formatted rule results, with one entry for each PageSpeed rule instantiated and run by the server. */
		ruleResults?: {[id: string]: ResultFormattedResultsRuleResults };
	}
	export interface ResultFormattedResultsFormProperties {

		/** The locale of the formattedResults, e.g. "en_US". */
		locale: FormControl<string | null | undefined>,

		/** Dictionary of formatted rule results, with one entry for each PageSpeed rule instantiated and run by the server. */
		ruleResults: FormControl<{[id: string]: ResultFormattedResultsRuleResults } | null | undefined>,
	}
	export function CreateResultFormattedResultsFormGroup() {
		return new FormGroup<ResultFormattedResultsFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			ruleResults: new FormControl<{[id: string]: ResultFormattedResultsRuleResults } | null | undefined>(undefined),
		});

	}

	export interface ResultFormattedResultsRuleResults {

		/** List of rule groups that this rule belongs to. Each entry in the list is one of "SPEED" or "USABILITY". */
		groups?: Array<string>;

		/** Localized name of the rule, intended for presentation to a user. */
		localizedRuleName?: string | null;

		/** The impact (unbounded floating point value) that implementing the suggestions for this rule would have on making the page faster. Impact is comparable between rules to determine which rule's suggestions would have a higher or lower impact on making a page faster. For instance, if enabling compression would save 1MB, while optimizing images would save 500kB, the enable compression rule would have 2x the impact of the image optimization rule, all other things being equal. */
		ruleImpact?: number | null;
		summary?: PagespeedApiFormatStringV2;

		/** List of blocks of URLs. Each block may contain a heading and a list of URLs. Each URL may optionally include additional details. */
		ResultFormattedResultsRuleResultsUrlBlocks?: Array<ResultFormattedResultsRuleResultsUrlBlocks>;
	}
	export interface ResultFormattedResultsRuleResultsFormProperties {

		/** Localized name of the rule, intended for presentation to a user. */
		localizedRuleName: FormControl<string | null | undefined>,

		/** The impact (unbounded floating point value) that implementing the suggestions for this rule would have on making the page faster. Impact is comparable between rules to determine which rule's suggestions would have a higher or lower impact on making a page faster. For instance, if enabling compression would save 1MB, while optimizing images would save 500kB, the enable compression rule would have 2x the impact of the image optimization rule, all other things being equal. */
		ruleImpact: FormControl<number | null | undefined>,
	}
	export function CreateResultFormattedResultsRuleResultsFormGroup() {
		return new FormGroup<ResultFormattedResultsRuleResultsFormProperties>({
			localizedRuleName: new FormControl<string | null | undefined>(undefined),
			ruleImpact: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResultFormattedResultsRuleResultsUrlBlocks {
		header?: PagespeedApiFormatStringV2;

		/** List of entries that provide information about URLs in the url block. Optional. */
		ResultFormattedResultsRuleResultsUrlBlocksUrls?: Array<ResultFormattedResultsRuleResultsUrlBlocksUrls>;
	}
	export interface ResultFormattedResultsRuleResultsUrlBlocksFormProperties {
	}
	export function CreateResultFormattedResultsRuleResultsUrlBlocksFormGroup() {
		return new FormGroup<ResultFormattedResultsRuleResultsUrlBlocksFormProperties>({
		});

	}

	export interface ResultFormattedResultsRuleResultsUrlBlocksUrls {

		/** List of entries that provide additional details about a single URL. Optional. */
		details?: Array<PagespeedApiFormatStringV2>;
		result?: PagespeedApiFormatStringV2;
	}
	export interface ResultFormattedResultsRuleResultsUrlBlocksUrlsFormProperties {
	}
	export function CreateResultFormattedResultsRuleResultsUrlBlocksUrlsFormGroup() {
		return new FormGroup<ResultFormattedResultsRuleResultsUrlBlocksUrlsFormProperties>({
		});

	}

	export interface ResultPageStats {

		/** Number of uncompressed response bytes for CSS resources on the page. */
		cssResponseBytes?: string | null;

		/** Number of response bytes for flash resources on the page. */
		flashResponseBytes?: string | null;

		/** Number of uncompressed response bytes for the main HTML document and all iframes on the page. */
		htmlResponseBytes?: string | null;

		/** Number of response bytes for image resources on the page. */
		imageResponseBytes?: string | null;

		/** Number of uncompressed response bytes for JS resources on the page. */
		javascriptResponseBytes?: string | null;

		/** Number of CSS resources referenced by the page. */
		numberCssResources?: number | null;

		/** Number of unique hosts referenced by the page. */
		numberHosts?: number | null;

		/** Number of JavaScript resources referenced by the page. */
		numberJsResources?: number | null;

		/** Number of HTTP resources loaded by the page. */
		numberResources?: number | null;

		/** Number of static (i.e. cacheable) resources on the page. */
		numberStaticResources?: number | null;

		/** Number of response bytes for other resources on the page. */
		otherResponseBytes?: string | null;

		/** Number of uncompressed response bytes for text resources not covered by other statistics (i.e non-HTML, non-script, non-CSS resources) on the page. */
		textResponseBytes?: string | null;

		/** Total size of all request bytes sent by the page. */
		totalRequestBytes?: string | null;
	}
	export interface ResultPageStatsFormProperties {

		/** Number of uncompressed response bytes for CSS resources on the page. */
		cssResponseBytes: FormControl<string | null | undefined>,

		/** Number of response bytes for flash resources on the page. */
		flashResponseBytes: FormControl<string | null | undefined>,

		/** Number of uncompressed response bytes for the main HTML document and all iframes on the page. */
		htmlResponseBytes: FormControl<string | null | undefined>,

		/** Number of response bytes for image resources on the page. */
		imageResponseBytes: FormControl<string | null | undefined>,

		/** Number of uncompressed response bytes for JS resources on the page. */
		javascriptResponseBytes: FormControl<string | null | undefined>,

		/** Number of CSS resources referenced by the page. */
		numberCssResources: FormControl<number | null | undefined>,

		/** Number of unique hosts referenced by the page. */
		numberHosts: FormControl<number | null | undefined>,

		/** Number of JavaScript resources referenced by the page. */
		numberJsResources: FormControl<number | null | undefined>,

		/** Number of HTTP resources loaded by the page. */
		numberResources: FormControl<number | null | undefined>,

		/** Number of static (i.e. cacheable) resources on the page. */
		numberStaticResources: FormControl<number | null | undefined>,

		/** Number of response bytes for other resources on the page. */
		otherResponseBytes: FormControl<string | null | undefined>,

		/** Number of uncompressed response bytes for text resources not covered by other statistics (i.e non-HTML, non-script, non-CSS resources) on the page. */
		textResponseBytes: FormControl<string | null | undefined>,

		/** Total size of all request bytes sent by the page. */
		totalRequestBytes: FormControl<string | null | undefined>,
	}
	export function CreateResultPageStatsFormGroup() {
		return new FormGroup<ResultPageStatsFormProperties>({
			cssResponseBytes: new FormControl<string | null | undefined>(undefined),
			flashResponseBytes: new FormControl<string | null | undefined>(undefined),
			htmlResponseBytes: new FormControl<string | null | undefined>(undefined),
			imageResponseBytes: new FormControl<string | null | undefined>(undefined),
			javascriptResponseBytes: new FormControl<string | null | undefined>(undefined),
			numberCssResources: new FormControl<number | null | undefined>(undefined),
			numberHosts: new FormControl<number | null | undefined>(undefined),
			numberJsResources: new FormControl<number | null | undefined>(undefined),
			numberResources: new FormControl<number | null | undefined>(undefined),
			numberStaticResources: new FormControl<number | null | undefined>(undefined),
			otherResponseBytes: new FormControl<string | null | undefined>(undefined),
			textResponseBytes: new FormControl<string | null | undefined>(undefined),
			totalRequestBytes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResultRuleGroups {

		/** The score (0-100) for this rule group, which indicates how much better a page could be in that category (e.g. how much faster, or how much more usable). A high score indicates little room for improvement, while a lower score indicates more room for improvement. */
		score?: number | null;
	}
	export interface ResultRuleGroupsFormProperties {

		/** The score (0-100) for this rule group, which indicates how much better a page could be in that category (e.g. how much faster, or how much more usable). A high score indicates little room for improvement, while a lower score indicates more room for improvement. */
		score: FormControl<number | null | undefined>,
	}
	export function CreateResultRuleGroupsFormGroup() {
		return new FormGroup<ResultRuleGroupsFormProperties>({
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResultVersion {

		/** The major version number of PageSpeed used to generate these results. */
		major?: number | null;

		/** The minor version number of PageSpeed used to generate these results. */
		minor?: number | null;
	}
	export interface ResultVersionFormProperties {

		/** The major version number of PageSpeed used to generate these results. */
		major: FormControl<number | null | undefined>,

		/** The minor version number of PageSpeed used to generate these results. */
		minor: FormControl<number | null | undefined>,
	}
	export function CreateResultVersionFormGroup() {
		return new FormGroup<ResultVersionFormProperties>({
			major: new FormControl<number | null | undefined>(undefined),
			minor: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.
		 * Get runPagespeed
		 * @param {string} url The URL to fetch and analyze
		 * @param {boolean} filter_third_party_resources Indicates if third party resources should be filtered out before PageSpeed analysis.
		 * @param {string} locale The locale used to localize formatted results
		 * @param {Array<string>} rule A PageSpeed rule to run; if none are given, all rules are run
		 * @param {boolean} screenshot Indicates if binary data containing a screenshot should be included
		 * @param {Pagespeedonline_pagespeedapi_runpagespeedStrategy} strategy The analysis strategy to use
		 * @return {void} Successful response
		 */
		Pagespeedonline_pagespeedapi_runpagespeed(url: string, filter_third_party_resources: boolean | null | undefined, locale: string | null | undefined, rule: Array<string> | null | undefined, screenshot: boolean | null | undefined, strategy: Pagespeedonline_pagespeedapi_runpagespeedStrategy | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'runPagespeed?url=' + (url == null ? '' : encodeURIComponent(url)) + '&filter_third_party_resources=' + filter_third_party_resources + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&' + rule?.map(z => `rule=${encodeURIComponent(z)}`).join('&') + '&screenshot=' + screenshot + '&strategy=' + strategy, { observe: 'response', responseType: 'text' });
		}
	}

	export enum Pagespeedonline_pagespeedapi_runpagespeedStrategy { desktop = 'desktop', mobile = 'mobile' }

}

