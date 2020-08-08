import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * A light reference to an audit by id, used to group and weight audits in a
	 * given category.
	 */
	export interface AuditRefs {

		/** The category group that the audit belongs to (optional). */
		group?: string;

		/** The audit ref id. */
		id?: string;

		/** The weight this audit's score has on the overall category score. */
		weight?: number;
	}


	/**
	 * A proportion of data in the total distribution, bucketed by a min/max
	 * percentage. Each bucket's range is bounded by min <= x < max, In
	 * millisecond.
	 */
	export interface Bucket {

		/** Upper bound for a bucket's range. */
		max?: number;

		/** Lower bound for a bucket's range. */
		min?: number;

		/** The proportion of data in this bucket. */
		proportion?: number;
	}


	/** The categories in a Lighthouse run. */
	export interface Categories {

		/** A Lighthouse category. */
		accessibility?: LighthouseCategoryV5;

		/** A Lighthouse category. */
		best_practices?: LighthouseCategoryV5;

		/** A Lighthouse category. */
		performance?: LighthouseCategoryV5;

		/** A Lighthouse category. */
		pwa?: LighthouseCategoryV5;

		/** A Lighthouse category. */
		seo?: LighthouseCategoryV5;
	}


	/** A Lighthouse category. */
	export interface LighthouseCategoryV5 {

		/** An array of references to all the audit members of this category. */
		auditRefs?: Array<AuditRefs>;

		/** A more detailed description of the category and its importance. */
		description?: string;

		/** The string identifier of the category. */
		id?: string;

		/** A description for the manual audits in the category. */
		manualDescription?: string;

		/**
		 * The overall score of the category, the weighted average of all its audits.
		 * (The category's score, can be null.)
		 */
		score?: any;

		/** The human-friendly name of the category. */
		title?: string;
	}


	/** Message containing a category */
	export interface CategoryGroupV5 {

		/** The description of what the category is grouping */
		description?: string;

		/** The human readable title of the group */
		title?: string;
	}


	/** Message containing the configuration settings for the Lighthouse run. */
	export interface ConfigSettings {

		/**
		 * How Lighthouse was run, e.g. from the Chrome extension or from the npm
		 * module.
		 */
		channel?: string;

		/** The form factor the emulation should use. */
		emulatedFormFactor?: string;

		/** The locale setting. */
		locale?: string;

		/** List of categories of audits the run should conduct. */
		onlyCategories?: any;
	}


	/** Message containing environment configuration for a Lighthouse run. */
	export interface Environment {

		/** The benchmark index number that indicates rough device class. */
		benchmarkIndex?: number;

		/** The user agent string of the version of Chrome used. */
		hostUserAgent?: string;

		/** The user agent string that was sent over the network. */
		networkUserAgent?: string;
	}


	/** Message containing the i18n data for the LHR - Version 1. */
	export interface I18n {

		/** Message holding the formatted strings used in the renderer. */
		rendererFormattedStrings?: RendererFormattedStrings;
	}


	/** Message holding the formatted strings used in the renderer. */
	export interface RendererFormattedStrings {

		/** The tooltip text on an expandable chevron icon. */
		auditGroupExpandTooltip?: string;

		/** The label for the initial request in a critical request chain. */
		crcInitialNavigation?: string;

		/** The label for values shown in the summary of critical request chains. */
		crcLongestDurationLabel?: string;

		/** The label shown next to an audit or metric that has had an error. */
		errorLabel?: string;

		/** The error string shown next to an erroring audit. */
		errorMissingAuditInfo?: string;

		/** The title of the lab data performance category. */
		labDataTitle?: string;

		/**
		 * The disclaimer shown under performance explaning that the network can
		 * vary.
		 */
		lsPerformanceCategoryDescription?: string;

		/**
		 * The heading shown above a list of audits that were not computerd in the
		 * run.
		 */
		manualAuditsGroupTitle?: string;

		/** The heading shown above a list of audits that do not apply to a page. */
		notApplicableAuditsGroupTitle?: string;

		/**
		 * The heading for the estimated page load savings opportunity of an
		 * audit.
		 */
		opportunityResourceColumnLabel?: string;

		/** The heading for the estimated page load savings of opportunity audits. */
		opportunitySavingsColumnLabel?: string;

		/** The heading that is shown above a list of audits that are passing. */
		passedAuditsGroupTitle?: string;

		/** The label that explains the score gauges scale (0-49, 50-89, 90-100). */
		scorescaleLabel?: string;

		/**
		 * The label shown preceding important warnings that may have invalidated
		 * an entire report.
		 */
		toplevelWarningsMessage?: string;

		/** The disclaimer shown below a performance metric value. */
		varianceDisclaimer?: string;

		/** The label shown above a bulleted list of warnings. */
		warningHeader?: string;
	}


	/** An audit's result object in a Lighthouse result. */
	export interface LighthouseAuditResultV5 {

		/** The description of the audit. */
		description?: string;

		/** Freeform details section of the audit. */
		details?: {[id: string]: any };

		/** The value that should be displayed on the UI for this audit. */
		displayValue?: string;

		/** An error message from a thrown error inside the audit. */
		errorMessage?: string;

		/** An explanation of the errors in the audit. */
		explanation?: string;

		/** The audit's id. */
		id?: string;

		/**
		 * A numeric value that has a meaning specific to the audit, e.g. the number
		 * of nodes in the DOM or the timestamp of a specific load event. More
		 * information can be found in the audit details, if present.
		 */
		numericValue?: number;

		/** The score of the audit, can be null. */
		score?: any;

		/** The enumerated score display mode. */
		scoreDisplayMode?: string;

		/** The human readable title. */
		title?: string;

		/** Possible warnings that occurred in the audit, can be null. */
		warnings?: any;
	}


	/** The Lighthouse result object. */
	export interface LighthouseResultV5 {

		/** Map of audits in the LHR. */
		audits?: {[id: string]: LighthouseAuditResultV5 };

		/** The categories in a Lighthouse run. */
		categories?: Categories;

		/** Map of category groups in the LHR. */
		categoryGroups?: {[id: string]: CategoryGroupV5 };

		/** Message containing the configuration settings for the Lighthouse run. */
		configSettings?: ConfigSettings;

		/** Message containing environment configuration for a Lighthouse run. */
		environment?: Environment;

		/** The time that this run was fetched. */
		fetchTime?: string;

		/** The final resolved url that was audited. */
		finalUrl?: string;

		/** Message containing the i18n data for the LHR - Version 1. */
		i18n?: I18n;

		/** The lighthouse version that was used to generate this LHR. */
		lighthouseVersion?: string;

		/** The original requested url. */
		requestedUrl?: string;

		/** List of all run warnings in the LHR.  Will always output to at least `[]`. */
		runWarnings?: Array<string>;

		/** Message containing a runtime error config. */
		runtimeError?: RuntimeError;

		/** The Stack Pack advice strings. */
		stackPacks?: Array<StackPack>;

		/** Message containing the performance timing data for the Lighthouse run. */
		timing?: Timing;

		/** The user agent that was used to run this LHR. */
		userAgent?: string;
	}


	/** Message containing a runtime error config. */
	export interface RuntimeError {

		/** The enumerated Lighthouse Error code. */
		code?: string;

		/** A human readable message explaining the error code. */
		message?: string;
	}


	/** Message containing Stack Pack information. */
	export interface StackPack {

		/** The stack pack advice strings. */
		descriptions?: {[id: string]: any };

		/** The stack pack icon data uri. */
		iconDataURL?: string;

		/** The stack pack id. */
		id?: string;

		/** The stack pack title. */
		title?: string;
	}


	/** Message containing the performance timing data for the Lighthouse run. */
	export interface Timing {

		/** The total duration of Lighthouse's run. */
		total?: number;
	}


	/** The CrUX loading experience object that contains CrUX data breakdowns. */
	export interface PagespeedApiLoadingExperienceV5 {

		/** The url, pattern or origin which the metrics are on. */
		id?: string;

		/** The requested URL, which may differ from the resolved "id". */
		initial_url?: string;

		/** The map of <metrics, data>. */
		metrics?: {[id: string]: UserPageLoadMetricV5 };

		/** The human readable speed "category" of the id. */
		overall_category?: string;
	}


	/** A CrUX metric object for a single metric and form factor. */
	export interface UserPageLoadMetricV5 {

		/** The category of the specific time metric. */
		category?: string;

		/** Metric distributions. Proportions should sum up to 1. */
		distributions?: Array<Bucket>;

		/** Identifies the form factor of the metric being collected. */
		formFactor?: string;

		/** The median number of the metric, in millisecond. */
		median?: number;

		/** Identifies the type of the metric. */
		metricId?: string;

		/**
		 * We use this field to store certain percentile value for this metric.
		 * For v4, this field contains pc50.
		 * For v5, this field contains pc90.
		 */
		percentile?: number;
	}


	/** The Pagespeed API response object. */
	export interface PagespeedApiPagespeedResponseV5 {

		/** The UTC timestamp of this analysis. */
		analysisUTCTimestamp?: string;

		/** The captcha verify result */
		captchaResult?: string;

		/**
		 * Canonicalized and final URL for the document, after following page
		 * redirects (if any).
		 */
		id?: string;

		/** Kind of result. */
		kind?: string;

		/** The Lighthouse result object. */
		lighthouseResult?: LighthouseResultV5;

		/** The CrUX loading experience object that contains CrUX data breakdowns. */
		loadingExperience?: PagespeedApiLoadingExperienceV5;

		/** The CrUX loading experience object that contains CrUX data breakdowns. */
		originLoadingExperience?: PagespeedApiLoadingExperienceV5;

		/** The Pagespeed Version object. */
		version?: PagespeedVersion;
	}


	/** The Pagespeed Version object. */
	export interface PagespeedVersion {

		/** The major version number of PageSpeed used to generate these results. */
		major?: string;

		/** The minor version number of PageSpeed used to generate these results. */
		minor?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Runs PageSpeed analysis on the page at the specified URL, and returns
		 * PageSpeed scores, a list of suggestions to make that page faster, and other
		 * information.
		 * Get pagespeedonline/v5/runPagespeed
		 * @param {string} captchaToken The captcha token passed when filling out a captcha.
		 * @param {Array<string>} category A Lighthouse category to run; if none are given, only Performance category
		 * will be run
		 * @param {string} locale The locale used to localize formatted results
		 * @param {Pagespeedonline_pagespeedapi_runpagespeedStrategy} strategy The analysis strategy (desktop or mobile) to use, and desktop is the
		 * default
		 * @param {string} url The URL to fetch and analyze
		 * @param {string} utm_campaign Campaign name for analytics.
		 * @param {string} utm_source Campaign source for analytics.
		 * @return {void} Successful response
		 */
		Pagespeedonline_pagespeedapi_runpagespeed(captchaToken: string, category: Array<string>, locale: string, strategy: Pagespeedonline_pagespeedapi_runpagespeedStrategy, url: string, utm_campaign: string, utm_source: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pagespeedonline/v5/runPagespeed?captchaToken=' + (captchaToken == null ? '' : encodeURIComponent(captchaToken)) + '&' + category.map(z => `category=${encodeURIComponent(z)}`).join('&') + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&strategy=' + strategy + '&url=' + (url == null ? '' : encodeURIComponent(url)) + '&utm_campaign=' + (utm_campaign == null ? '' : encodeURIComponent(utm_campaign)) + '&utm_source=' + (utm_source == null ? '' : encodeURIComponent(utm_source)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Pagespeedonline_pagespeedapi_runpagespeedStrategy { STRATEGY_UNSPECIFIED = 0, DESKTOP = 1, MOBILE = 2 }

}

