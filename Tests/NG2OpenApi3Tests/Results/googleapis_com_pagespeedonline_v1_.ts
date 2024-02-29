import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
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

		/**
		 * Response code for the document. 200 indicates a normal page load. 4xx/5xx indicates an error.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		responseCode?: number | null;

		/**
		 * The PageSpeed Score (0-100), which indicates how much faster a page could be. A high score indicates little room for improvement, while a lower score indicates more room for improvement.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		score?: number | null;

		/** Base64-encoded screenshot of the page that was analyzed. */
		screenshot?: ResultScreenshot;

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

		/**
		 * Response code for the document. 200 indicates a normal page load. 4xx/5xx indicates an error.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		responseCode: FormControl<number | null | undefined>,

		/**
		 * The PageSpeed Score (0-100), which indicates how much faster a page could be. A high score indicates little room for improvement, while a lower score indicates more room for improvement.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		score: FormControl<number | null | undefined>,

		/** Title of the page, as displayed in the browser's title bar. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateResultFormGroup() {
		return new FormGroup<ResultFormProperties>({
			captchaResult: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			responseCode: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
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

		/** Localized name of the rule, intended for presentation to a user. */
		localizedRuleName?: string | null;

		/**
		 * The impact (unbounded floating point value) that implementing the suggestions for this rule would have on making the page faster. Impact is comparable between rules to determine which rule's suggestions would have a higher or lower impact on making a page faster. For instance, if enabling compression would save 1MB, while optimizing images would save 500kB, the enable compression rule would have 2x the impact of the image optimization rule, all other things being equal.
		 * Type: double
		 */
		ruleImpact?: number | null;

		/** List of blocks of URLs. Each block may contain a heading and a list of URLs. Each URL may optionally include additional details. */
		ResultFormattedResultsRuleResultsUrlBlocks?: Array<ResultFormattedResultsRuleResultsUrlBlocks>;
	}
	export interface ResultFormattedResultsRuleResultsFormProperties {

		/** Localized name of the rule, intended for presentation to a user. */
		localizedRuleName: FormControl<string | null | undefined>,

		/**
		 * The impact (unbounded floating point value) that implementing the suggestions for this rule would have on making the page faster. Impact is comparable between rules to determine which rule's suggestions would have a higher or lower impact on making a page faster. For instance, if enabling compression would save 1MB, while optimizing images would save 500kB, the enable compression rule would have 2x the impact of the image optimization rule, all other things being equal.
		 * Type: double
		 */
		ruleImpact: FormControl<number | null | undefined>,
	}
	export function CreateResultFormattedResultsRuleResultsFormGroup() {
		return new FormGroup<ResultFormattedResultsRuleResultsFormProperties>({
			localizedRuleName: new FormControl<string | null | undefined>(undefined),
			ruleImpact: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResultFormattedResultsRuleResultsUrlBlocks {

		/** Heading to be displayed with the list of URLs. */
		header?: ResultFormattedResultsRuleResultsUrlBlocksHeader;

		/** List of entries that provide information about URLs in the url block. Optional. */
		ResultFormattedResultsRuleResultsUrlBlocksUrls?: Array<ResultFormattedResultsRuleResultsUrlBlocksUrls>;
	}
	export interface ResultFormattedResultsRuleResultsUrlBlocksFormProperties {
	}
	export function CreateResultFormattedResultsRuleResultsUrlBlocksFormGroup() {
		return new FormGroup<ResultFormattedResultsRuleResultsUrlBlocksFormProperties>({
		});

	}

	export interface ResultFormattedResultsRuleResultsUrlBlocksHeader {

		/** List of arguments for the format string. */
		ResultFormattedResultsRuleResultsUrlBlocksHeaderArgs?: Array<ResultFormattedResultsRuleResultsUrlBlocksHeaderArgs>;

		/** A localized format string with $N placeholders, where N is the 1-indexed argument number, e.g. 'Minifying the following $1 resources would save a total of $2 bytes'. */
		format?: string | null;
	}
	export interface ResultFormattedResultsRuleResultsUrlBlocksHeaderFormProperties {

		/** A localized format string with $N placeholders, where N is the 1-indexed argument number, e.g. 'Minifying the following $1 resources would save a total of $2 bytes'. */
		format: FormControl<string | null | undefined>,
	}
	export function CreateResultFormattedResultsRuleResultsUrlBlocksHeaderFormGroup() {
		return new FormGroup<ResultFormattedResultsRuleResultsUrlBlocksHeaderFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResultFormattedResultsRuleResultsUrlBlocksHeaderArgs {

		/** Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, or DURATION. */
		type?: string | null;

		/** Argument value, as a localized string. */
		value?: string | null;
	}
	export interface ResultFormattedResultsRuleResultsUrlBlocksHeaderArgsFormProperties {

		/** Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, or DURATION. */
		type: FormControl<string | null | undefined>,

		/** Argument value, as a localized string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateResultFormattedResultsRuleResultsUrlBlocksHeaderArgsFormGroup() {
		return new FormGroup<ResultFormattedResultsRuleResultsUrlBlocksHeaderArgsFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResultFormattedResultsRuleResultsUrlBlocksUrls {

		/** List of entries that provide additional details about a single URL. Optional. */
		ResultFormattedResultsRuleResultsUrlBlocksUrlsDetails?: Array<ResultFormattedResultsRuleResultsUrlBlocksUrlsDetails>;

		/** A format string that gives information about the URL, and a list of arguments for that format string. */
		result?: ResultFormattedResultsRuleResultsUrlBlocksUrlsResult;
	}
	export interface ResultFormattedResultsRuleResultsUrlBlocksUrlsFormProperties {
	}
	export function CreateResultFormattedResultsRuleResultsUrlBlocksUrlsFormGroup() {
		return new FormGroup<ResultFormattedResultsRuleResultsUrlBlocksUrlsFormProperties>({
		});

	}

	export interface ResultFormattedResultsRuleResultsUrlBlocksUrlsDetails {

		/** List of arguments for the format string. */
		ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgs?: Array<ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgs>;

		/** A localized format string with $N placeholders, where N is the 1-indexed argument number, e.g. 'Unnecessary metadata for this resource adds an additional $1 bytes to its download size'. */
		format?: string | null;
	}
	export interface ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsFormProperties {

		/** A localized format string with $N placeholders, where N is the 1-indexed argument number, e.g. 'Unnecessary metadata for this resource adds an additional $1 bytes to its download size'. */
		format: FormControl<string | null | undefined>,
	}
	export function CreateResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsFormGroup() {
		return new FormGroup<ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgs {

		/** Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, or DURATION. */
		type?: string | null;

		/** Argument value, as a localized string. */
		value?: string | null;
	}
	export interface ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgsFormProperties {

		/** Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, or DURATION. */
		type: FormControl<string | null | undefined>,

		/** Argument value, as a localized string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgsFormGroup() {
		return new FormGroup<ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgsFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResultFormattedResultsRuleResultsUrlBlocksUrlsResult {

		/** List of arguments for the format string. */
		ResultFormattedResultsRuleResultsUrlBlocksUrlsResultArgs?: Array<ResultFormattedResultsRuleResultsUrlBlocksUrlsResultArgs>;

		/** A localized format string with $N placeholders, where N is the 1-indexed argument number, e.g. 'Minifying the resource at URL $1 can save $2 bytes'. */
		format?: string | null;
	}
	export interface ResultFormattedResultsRuleResultsUrlBlocksUrlsResultFormProperties {

		/** A localized format string with $N placeholders, where N is the 1-indexed argument number, e.g. 'Minifying the resource at URL $1 can save $2 bytes'. */
		format: FormControl<string | null | undefined>,
	}
	export function CreateResultFormattedResultsRuleResultsUrlBlocksUrlsResultFormGroup() {
		return new FormGroup<ResultFormattedResultsRuleResultsUrlBlocksUrlsResultFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResultFormattedResultsRuleResultsUrlBlocksUrlsResultArgs {

		/** Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, or DURATION. */
		type?: string | null;

		/** Argument value, as a localized string. */
		value?: string | null;
	}
	export interface ResultFormattedResultsRuleResultsUrlBlocksUrlsResultArgsFormProperties {

		/** Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, or DURATION. */
		type: FormControl<string | null | undefined>,

		/** Argument value, as a localized string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateResultFormattedResultsRuleResultsUrlBlocksUrlsResultArgsFormGroup() {
		return new FormGroup<ResultFormattedResultsRuleResultsUrlBlocksUrlsResultArgsFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * Number of CSS resources referenced by the page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberCssResources?: number | null;

		/**
		 * Number of unique hosts referenced by the page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberHosts?: number | null;

		/**
		 * Number of JavaScript resources referenced by the page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberJsResources?: number | null;

		/**
		 * Number of HTTP resources loaded by the page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberResources?: number | null;

		/**
		 * Number of static (i.e. cacheable) resources on the page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/**
		 * Number of CSS resources referenced by the page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberCssResources: FormControl<number | null | undefined>,

		/**
		 * Number of unique hosts referenced by the page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberHosts: FormControl<number | null | undefined>,

		/**
		 * Number of JavaScript resources referenced by the page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberJsResources: FormControl<number | null | undefined>,

		/**
		 * Number of HTTP resources loaded by the page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberResources: FormControl<number | null | undefined>,

		/**
		 * Number of static (i.e. cacheable) resources on the page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

	export interface ResultScreenshot {

		/** Image data base64 encoded. */
		data?: string | null;

		/**
		 * Height of screenshot in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** Mime type of image data. E.g. "image/jpeg". */
		mime_type?: string | null;

		/**
		 * Width of screenshot in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}
	export interface ResultScreenshotFormProperties {

		/** Image data base64 encoded. */
		data: FormControl<string | null | undefined>,

		/**
		 * Height of screenshot in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** Mime type of image data. E.g. "image/jpeg". */
		mime_type: FormControl<string | null | undefined>,

		/**
		 * Width of screenshot in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateResultScreenshotFormGroup() {
		return new FormGroup<ResultScreenshotFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			mime_type: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResultVersion {

		/**
		 * The major version number of PageSpeed used to generate these results.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		major?: number | null;

		/**
		 * The minor version number of PageSpeed used to generate these results.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minor?: number | null;
	}
	export interface ResultVersionFormProperties {

		/**
		 * The major version number of PageSpeed used to generate these results.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		major: FormControl<number | null | undefined>,

		/**
		 * The minor version number of PageSpeed used to generate these results.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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
		 * Runs PageSpeed analysis on the page at the specified URL, and returns a PageSpeed score, a list of suggestions to make that page faster, and other information.
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

