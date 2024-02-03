import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface PagespeedApiFormatStringV4 {

		/** List of arguments for the format string. */
		PagespeedApiFormatStringV4Args?: Array<PagespeedApiFormatStringV4Args>;

		/** A localized format string with {{FOO}} placeholders, where 'FOO' is the key of the argument whose value should be substituted. For HYPERLINK arguments, the format string will instead contain {{BEGIN_FOO}} and {{END_FOO}} for the argument with key 'FOO'. */
		format?: string | null;
	}
	export interface PagespeedApiFormatStringV4FormProperties {

		/** A localized format string with {{FOO}} placeholders, where 'FOO' is the key of the argument whose value should be substituted. For HYPERLINK arguments, the format string will instead contain {{BEGIN_FOO}} and {{END_FOO}} for the argument with key 'FOO'. */
		format: FormControl<string | null | undefined>,
	}
	export function CreatePagespeedApiFormatStringV4FormGroup() {
		return new FormGroup<PagespeedApiFormatStringV4FormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiFormatStringV4Args {

		/** The placeholder key for this arg, as a string. */
		key?: string | null;

		/** The screen rectangles being referred to, with dimensions measured in CSS pixels. This is only ever used for SNAPSHOT_RECT arguments. If this is absent for a SNAPSHOT_RECT argument, it means that that argument refers to the entire snapshot. */
		PagespeedApiFormatStringV4ArgsRects?: Array<PagespeedApiFormatStringV4ArgsRects>;

		/** Secondary screen rectangles being referred to, with dimensions measured in CSS pixels. This is only ever used for SNAPSHOT_RECT arguments. */
		PagespeedApiFormatStringV4ArgsSecondary_rects?: Array<PagespeedApiFormatStringV4ArgsSecondary_rects>;

		/** Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, DURATION, VERBATIM_STRING, PERCENTAGE, HYPERLINK, or SNAPSHOT_RECT. */
		type?: string | null;

		/** Argument value, as a localized string. */
		value?: string | null;
	}
	export interface PagespeedApiFormatStringV4ArgsFormProperties {

		/** The placeholder key for this arg, as a string. */
		key: FormControl<string | null | undefined>,

		/** Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, DURATION, VERBATIM_STRING, PERCENTAGE, HYPERLINK, or SNAPSHOT_RECT. */
		type: FormControl<string | null | undefined>,

		/** Argument value, as a localized string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePagespeedApiFormatStringV4ArgsFormGroup() {
		return new FormGroup<PagespeedApiFormatStringV4ArgsFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiFormatStringV4ArgsRects {
		height?: number | null;
		left?: number | null;
		top?: number | null;
		width?: number | null;
	}
	export interface PagespeedApiFormatStringV4ArgsRectsFormProperties {
		height: FormControl<number | null | undefined>,
		left: FormControl<number | null | undefined>,
		top: FormControl<number | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreatePagespeedApiFormatStringV4ArgsRectsFormGroup() {
		return new FormGroup<PagespeedApiFormatStringV4ArgsRectsFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiFormatStringV4ArgsSecondary_rects {
		height?: number | null;
		left?: number | null;
		top?: number | null;
		width?: number | null;
	}
	export interface PagespeedApiFormatStringV4ArgsSecondary_rectsFormProperties {
		height: FormControl<number | null | undefined>,
		left: FormControl<number | null | undefined>,
		top: FormControl<number | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreatePagespeedApiFormatStringV4ArgsSecondary_rectsFormGroup() {
		return new FormGroup<PagespeedApiFormatStringV4ArgsSecondary_rectsFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiImageV4 {

		/** Image data base64 encoded. */
		data?: string | null;

		/** Height of screenshot in pixels. */
		height?: number | null;

		/** Unique string key, if any, identifying this image. */
		key?: string | null;

		/** Mime type of image data (e.g. "image/jpeg"). */
		mime_type?: string | null;
		page_rect?: PagespeedApiImageV4Page_rect;

		/** Width of screenshot in pixels. */
		width?: number | null;
	}
	export interface PagespeedApiImageV4FormProperties {

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
	export function CreatePagespeedApiImageV4FormGroup() {
		return new FormGroup<PagespeedApiImageV4FormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			mime_type: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiImageV4Page_rect {
		height?: number | null;
		left?: number | null;
		top?: number | null;
		width?: number | null;
	}
	export interface PagespeedApiImageV4Page_rectFormProperties {
		height: FormControl<number | null | undefined>,
		left: FormControl<number | null | undefined>,
		top: FormControl<number | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreatePagespeedApiImageV4Page_rectFormGroup() {
		return new FormGroup<PagespeedApiImageV4Page_rectFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiPagespeedResponseV4 {

		/** The captcha verify result */
		captchaResult?: string | null;

		/** Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server. */
		formattedResults?: PagespeedApiPagespeedResponseV4FormattedResults;

		/** Canonicalized and final URL for the document, after following page redirects (if any). */
		id?: string | null;

		/** List of rules that were specified in the request, but which the server did not know how to instantiate. */
		invalidRules?: Array<string>;

		/** Kind of result. */
		kind?: string | null;

		/** Metrics of end users' page loading experience. */
		loadingExperience?: PagespeedApiPagespeedResponseV4LoadingExperience;

		/** Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc. */
		pageStats?: PagespeedApiPagespeedResponseV4PageStats;

		/** Response code for the document. 200 indicates a normal page load. 4xx/5xx indicates an error. */
		responseCode?: number | null;

		/** A map with one entry for each rule group in these results. */
		ruleGroups?: {[id: string]: PagespeedApiPagespeedResponseV4RuleGroups };
		screenshot?: PagespeedApiImageV4;

		/** Additional base64-encoded screenshots of the page, in various partial render states. */
		snapshots?: Array<PagespeedApiImageV4>;

		/** Title of the page, as displayed in the browser's title bar. */
		title?: string | null;

		/** The version of PageSpeed used to generate these results. */
		version?: PagespeedApiPagespeedResponseV4Version;
	}
	export interface PagespeedApiPagespeedResponseV4FormProperties {

		/** The captcha verify result */
		captchaResult: FormControl<string | null | undefined>,

		/** Canonicalized and final URL for the document, after following page redirects (if any). */
		id: FormControl<string | null | undefined>,

		/** Kind of result. */
		kind: FormControl<string | null | undefined>,

		/** Response code for the document. 200 indicates a normal page load. 4xx/5xx indicates an error. */
		responseCode: FormControl<number | null | undefined>,

		/** A map with one entry for each rule group in these results. */
		ruleGroups: FormControl<{[id: string]: PagespeedApiPagespeedResponseV4RuleGroups } | null | undefined>,

		/** Title of the page, as displayed in the browser's title bar. */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePagespeedApiPagespeedResponseV4FormGroup() {
		return new FormGroup<PagespeedApiPagespeedResponseV4FormProperties>({
			captchaResult: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			responseCode: new FormControl<number | null | undefined>(undefined),
			ruleGroups: new FormControl<{[id: string]: PagespeedApiPagespeedResponseV4RuleGroups } | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiPagespeedResponseV4FormattedResults {

		/** The locale of the formattedResults, e.g. "en_US". */
		locale?: string | null;

		/** Dictionary of formatted rule results, with one entry for each PageSpeed rule instantiated and run by the server. */
		ruleResults?: {[id: string]: PagespeedApiPagespeedResponseV4FormattedResultsRuleResults };
	}
	export interface PagespeedApiPagespeedResponseV4FormattedResultsFormProperties {

		/** The locale of the formattedResults, e.g. "en_US". */
		locale: FormControl<string | null | undefined>,

		/** Dictionary of formatted rule results, with one entry for each PageSpeed rule instantiated and run by the server. */
		ruleResults: FormControl<{[id: string]: PagespeedApiPagespeedResponseV4FormattedResultsRuleResults } | null | undefined>,
	}
	export function CreatePagespeedApiPagespeedResponseV4FormattedResultsFormGroup() {
		return new FormGroup<PagespeedApiPagespeedResponseV4FormattedResultsFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			ruleResults: new FormControl<{[id: string]: PagespeedApiPagespeedResponseV4FormattedResultsRuleResults } | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiPagespeedResponseV4FormattedResultsRuleResults {

		/** Whether this rule is in 'beta'. Rules in beta are new rules that are being tested, which do not impact the overall score. */
		beta?: boolean | null;

		/** List of rule groups that this rule belongs to. Each entry in the list is one of "SPEED", "USABILITY", or "SECURITY". */
		groups?: Array<string>;

		/** Localized name of the rule, intended for presentation to a user. */
		localizedRuleName?: string | null;

		/** The impact (unbounded floating point value) that implementing the suggestions for this rule would have on making the page faster. Impact is comparable between rules to determine which rule's suggestions would have a higher or lower impact on making a page faster. For instance, if enabling compression would save 1MB, while optimizing images would save 500kB, the enable compression rule would have 2x the impact of the image optimization rule, all other things being equal. */
		ruleImpact?: number | null;
		summary?: PagespeedApiFormatStringV4;

		/** List of blocks of URLs. Each block may contain a heading and a list of URLs. Each URL may optionally include additional details. */
		PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks?: Array<PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks>;
	}
	export interface PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsFormProperties {

		/** Whether this rule is in 'beta'. Rules in beta are new rules that are being tested, which do not impact the overall score. */
		beta: FormControl<boolean | null | undefined>,

		/** Localized name of the rule, intended for presentation to a user. */
		localizedRuleName: FormControl<string | null | undefined>,

		/** The impact (unbounded floating point value) that implementing the suggestions for this rule would have on making the page faster. Impact is comparable between rules to determine which rule's suggestions would have a higher or lower impact on making a page faster. For instance, if enabling compression would save 1MB, while optimizing images would save 500kB, the enable compression rule would have 2x the impact of the image optimization rule, all other things being equal. */
		ruleImpact: FormControl<number | null | undefined>,
	}
	export function CreatePagespeedApiPagespeedResponseV4FormattedResultsRuleResultsFormGroup() {
		return new FormGroup<PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsFormProperties>({
			beta: new FormControl<boolean | null | undefined>(undefined),
			localizedRuleName: new FormControl<string | null | undefined>(undefined),
			ruleImpact: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks {
		header?: PagespeedApiFormatStringV4;

		/** List of entries that provide information about URLs in the url block. Optional. */
		PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls?: Array<PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls>;
	}
	export interface PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksFormProperties {
	}
	export function CreatePagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksFormGroup() {
		return new FormGroup<PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksFormProperties>({
		});

	}

	export interface PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls {

		/** List of entries that provide additional details about a single URL. Optional. */
		details?: Array<PagespeedApiFormatStringV4>;
		result?: PagespeedApiFormatStringV4;
	}
	export interface PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrlsFormProperties {
	}
	export function CreatePagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrlsFormGroup() {
		return new FormGroup<PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrlsFormProperties>({
		});

	}

	export interface PagespeedApiPagespeedResponseV4LoadingExperience {

		/** The url, pattern or origin which the metrics are on. */
		id?: string | null;
		initial_url?: string | null;
		metrics?: {[id: string]: PagespeedApiPagespeedResponseV4LoadingExperienceMetrics };
		overall_category?: string | null;
	}
	export interface PagespeedApiPagespeedResponseV4LoadingExperienceFormProperties {

		/** The url, pattern or origin which the metrics are on. */
		id: FormControl<string | null | undefined>,
		initial_url: FormControl<string | null | undefined>,
		metrics: FormControl<{[id: string]: PagespeedApiPagespeedResponseV4LoadingExperienceMetrics } | null | undefined>,
		overall_category: FormControl<string | null | undefined>,
	}
	export function CreatePagespeedApiPagespeedResponseV4LoadingExperienceFormGroup() {
		return new FormGroup<PagespeedApiPagespeedResponseV4LoadingExperienceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			initial_url: new FormControl<string | null | undefined>(undefined),
			metrics: new FormControl<{[id: string]: PagespeedApiPagespeedResponseV4LoadingExperienceMetrics } | null | undefined>(undefined),
			overall_category: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiPagespeedResponseV4LoadingExperienceMetrics {
		category?: string | null;
		PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions?: Array<PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions>;
		median?: number | null;
	}
	export interface PagespeedApiPagespeedResponseV4LoadingExperienceMetricsFormProperties {
		category: FormControl<string | null | undefined>,
		median: FormControl<number | null | undefined>,
	}
	export function CreatePagespeedApiPagespeedResponseV4LoadingExperienceMetricsFormGroup() {
		return new FormGroup<PagespeedApiPagespeedResponseV4LoadingExperienceMetricsFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			median: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions {
		max?: number | null;
		min?: number | null;
		proportion?: number | null;
	}
	export interface PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributionsFormProperties {
		max: FormControl<number | null | undefined>,
		min: FormControl<number | null | undefined>,
		proportion: FormControl<number | null | undefined>,
	}
	export function CreatePagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributionsFormGroup() {
		return new FormGroup<PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributionsFormProperties>({
			max: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
			proportion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiPagespeedResponseV4PageStats {

		/** Content management system (CMS) used for the page. */
		cms?: string | null;

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

		/** The needed round trips to load render blocking resources */
		numRenderBlockingRoundTrips?: number | null;

		/** The needed round trips to load the full page */
		numTotalRoundTrips?: number | null;

		/** Number of CSS resources referenced by the page. */
		numberCssResources?: number | null;

		/** Number of unique hosts referenced by the page. */
		numberHosts?: number | null;

		/** Number of JavaScript resources referenced by the page. */
		numberJsResources?: number | null;

		/** Number of HTTP resources loaded by the page. */
		numberResources?: number | null;

		/** Number of roboted resources. */
		numberRobotedResources?: number | null;

		/** Number of static (i.e. cacheable) resources on the page. */
		numberStaticResources?: number | null;

		/** Number of transient-failed resources. */
		numberTransientFetchFailureResources?: number | null;

		/** Number of response bytes for other resources on the page. */
		otherResponseBytes?: string | null;

		/** Number of over-the-wire bytes, uses the default gzip compression strategy as an estimation. */
		overTheWireResponseBytes?: string | null;

		/** List of roboted urls. */
		robotedUrls?: Array<string>;

		/** Number of uncompressed response bytes for text resources not covered by other statistics (i.e non-HTML, non-script, non-CSS resources) on the page. */
		textResponseBytes?: string | null;

		/** Total size of all request bytes sent by the page. */
		totalRequestBytes?: string | null;

		/** List of transient fetch failure urls. */
		transientFetchFailureUrls?: Array<string>;
	}
	export interface PagespeedApiPagespeedResponseV4PageStatsFormProperties {

		/** Content management system (CMS) used for the page. */
		cms: FormControl<string | null | undefined>,

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

		/** The needed round trips to load render blocking resources */
		numRenderBlockingRoundTrips: FormControl<number | null | undefined>,

		/** The needed round trips to load the full page */
		numTotalRoundTrips: FormControl<number | null | undefined>,

		/** Number of CSS resources referenced by the page. */
		numberCssResources: FormControl<number | null | undefined>,

		/** Number of unique hosts referenced by the page. */
		numberHosts: FormControl<number | null | undefined>,

		/** Number of JavaScript resources referenced by the page. */
		numberJsResources: FormControl<number | null | undefined>,

		/** Number of HTTP resources loaded by the page. */
		numberResources: FormControl<number | null | undefined>,

		/** Number of roboted resources. */
		numberRobotedResources: FormControl<number | null | undefined>,

		/** Number of static (i.e. cacheable) resources on the page. */
		numberStaticResources: FormControl<number | null | undefined>,

		/** Number of transient-failed resources. */
		numberTransientFetchFailureResources: FormControl<number | null | undefined>,

		/** Number of response bytes for other resources on the page. */
		otherResponseBytes: FormControl<string | null | undefined>,

		/** Number of over-the-wire bytes, uses the default gzip compression strategy as an estimation. */
		overTheWireResponseBytes: FormControl<string | null | undefined>,

		/** Number of uncompressed response bytes for text resources not covered by other statistics (i.e non-HTML, non-script, non-CSS resources) on the page. */
		textResponseBytes: FormControl<string | null | undefined>,

		/** Total size of all request bytes sent by the page. */
		totalRequestBytes: FormControl<string | null | undefined>,
	}
	export function CreatePagespeedApiPagespeedResponseV4PageStatsFormGroup() {
		return new FormGroup<PagespeedApiPagespeedResponseV4PageStatsFormProperties>({
			cms: new FormControl<string | null | undefined>(undefined),
			cssResponseBytes: new FormControl<string | null | undefined>(undefined),
			flashResponseBytes: new FormControl<string | null | undefined>(undefined),
			htmlResponseBytes: new FormControl<string | null | undefined>(undefined),
			imageResponseBytes: new FormControl<string | null | undefined>(undefined),
			javascriptResponseBytes: new FormControl<string | null | undefined>(undefined),
			numRenderBlockingRoundTrips: new FormControl<number | null | undefined>(undefined),
			numTotalRoundTrips: new FormControl<number | null | undefined>(undefined),
			numberCssResources: new FormControl<number | null | undefined>(undefined),
			numberHosts: new FormControl<number | null | undefined>(undefined),
			numberJsResources: new FormControl<number | null | undefined>(undefined),
			numberResources: new FormControl<number | null | undefined>(undefined),
			numberRobotedResources: new FormControl<number | null | undefined>(undefined),
			numberStaticResources: new FormControl<number | null | undefined>(undefined),
			numberTransientFetchFailureResources: new FormControl<number | null | undefined>(undefined),
			otherResponseBytes: new FormControl<string | null | undefined>(undefined),
			overTheWireResponseBytes: new FormControl<string | null | undefined>(undefined),
			textResponseBytes: new FormControl<string | null | undefined>(undefined),
			totalRequestBytes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiPagespeedResponseV4RuleGroups {
		pass?: boolean | null;

		/** The score (0-100) for this rule group, which indicates how much better a page could be in that category (e.g. how much faster, or how much more usable, or how much more secure). A high score indicates little room for improvement, while a lower score indicates more room for improvement. */
		score?: number | null;
	}
	export interface PagespeedApiPagespeedResponseV4RuleGroupsFormProperties {
		pass: FormControl<boolean | null | undefined>,

		/** The score (0-100) for this rule group, which indicates how much better a page could be in that category (e.g. how much faster, or how much more usable, or how much more secure). A high score indicates little room for improvement, while a lower score indicates more room for improvement. */
		score: FormControl<number | null | undefined>,
	}
	export function CreatePagespeedApiPagespeedResponseV4RuleGroupsFormGroup() {
		return new FormGroup<PagespeedApiPagespeedResponseV4RuleGroupsFormProperties>({
			pass: new FormControl<boolean | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PagespeedApiPagespeedResponseV4Version {

		/** The major version number of PageSpeed used to generate these results. */
		major?: number | null;

		/** The minor version number of PageSpeed used to generate these results. */
		minor?: number | null;
	}
	export interface PagespeedApiPagespeedResponseV4VersionFormProperties {

		/** The major version number of PageSpeed used to generate these results. */
		major: FormControl<number | null | undefined>,

		/** The minor version number of PageSpeed used to generate these results. */
		minor: FormControl<number | null | undefined>,
	}
	export function CreatePagespeedApiPagespeedResponseV4VersionFormGroup() {
		return new FormGroup<PagespeedApiPagespeedResponseV4VersionFormProperties>({
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
		 * @param {boolean} snapshots Indicates if binary data containing snapshot images should be included
		 * @param {Pagespeedonline_pagespeedapi_runpagespeedStrategy} strategy The analysis strategy (desktop or mobile) to use, and desktop is the default
		 * @param {string} utm_campaign Campaign name for analytics.
		 * @param {string} utm_source Campaign source for analytics.
		 * @return {void} Successful response
		 */
		Pagespeedonline_pagespeedapi_runpagespeed(url: string, filter_third_party_resources: boolean | null | undefined, locale: string | null | undefined, rule: Array<string> | null | undefined, screenshot: boolean | null | undefined, snapshots: boolean | null | undefined, strategy: Pagespeedonline_pagespeedapi_runpagespeedStrategy | null | undefined, utm_campaign: string | null | undefined, utm_source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'runPagespeed?url=' + (url == null ? '' : encodeURIComponent(url)) + '&filter_third_party_resources=' + filter_third_party_resources + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&' + rule?.map(z => `rule=${encodeURIComponent(z)}`).join('&') + '&screenshot=' + screenshot + '&snapshots=' + snapshots + '&strategy=' + strategy + '&utm_campaign=' + (utm_campaign == null ? '' : encodeURIComponent(utm_campaign)) + '&utm_source=' + (utm_source == null ? '' : encodeURIComponent(utm_source)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Pagespeedonline_pagespeedapi_runpagespeedStrategy { desktop = 'desktop', mobile = 'mobile' }

}

