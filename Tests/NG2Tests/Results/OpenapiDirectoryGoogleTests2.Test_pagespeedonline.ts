import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * A light reference to an audit by id, used to group and weight audits in a
	 * given category.
	 */
	export interface AuditRefs {

		/** The category group that the audit belongs to (optional). */
		group?: string | null;

		/** The audit ref id. */
		id?: string | null;

		/** The weight this audit's score has on the overall category score. */
		weight?: number | null;
	}

	/**
	 * A light reference to an audit by id, used to group and weight audits in a
	 * given category.
	 */
	export interface AuditRefsFormProperties {

		/** The category group that the audit belongs to (optional). */
		group: FormControl<string | null | undefined>,

		/** The audit ref id. */
		id: FormControl<string | null | undefined>,

		/** The weight this audit's score has on the overall category score. */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateAuditRefsFormGroup() {
		return new FormGroup<AuditRefsFormProperties>({
			group: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * A proportion of data in the total distribution, bucketed by a min/max
	 * percentage. Each bucket's range is bounded by min <= x < max, In
	 * millisecond.
	 */
	export interface Bucket {

		/** Upper bound for a bucket's range. */
		max?: number | null;

		/** Lower bound for a bucket's range. */
		min?: number | null;

		/** The proportion of data in this bucket. */
		proportion?: number | null;
	}

	/**
	 * A proportion of data in the total distribution, bucketed by a min/max
	 * percentage. Each bucket's range is bounded by min <= x < max, In
	 * millisecond.
	 */
	export interface BucketFormProperties {

		/** Upper bound for a bucket's range. */
		max: FormControl<number | null | undefined>,

		/** Lower bound for a bucket's range. */
		min: FormControl<number | null | undefined>,

		/** The proportion of data in this bucket. */
		proportion: FormControl<number | null | undefined>,
	}
	export function CreateBucketFormGroup() {
		return new FormGroup<BucketFormProperties>({
			max: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
			proportion: new FormControl<number | null | undefined>(undefined),
		});

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

	/** The categories in a Lighthouse run. */
	export interface CategoriesFormProperties {
	}
	export function CreateCategoriesFormGroup() {
		return new FormGroup<CategoriesFormProperties>({
		});

	}


	/** A Lighthouse category. */
	export interface LighthouseCategoryV5 {

		/** An array of references to all the audit members of this category. */
		auditRefs?: Array<AuditRefs>;

		/** A more detailed description of the category and its importance. */
		description?: string | null;

		/** The string identifier of the category. */
		id?: string | null;

		/** A description for the manual audits in the category. */
		manualDescription?: string | null;

		/**
		 * The overall score of the category, the weighted average of all its audits.
		 * (The category's score, can be null.)
		 */
		score?: any;

		/** The human-friendly name of the category. */
		title?: string | null;
	}

	/** A Lighthouse category. */
	export interface LighthouseCategoryV5FormProperties {

		/** A more detailed description of the category and its importance. */
		description: FormControl<string | null | undefined>,

		/** The string identifier of the category. */
		id: FormControl<string | null | undefined>,

		/** A description for the manual audits in the category. */
		manualDescription: FormControl<string | null | undefined>,

		/**
		 * The overall score of the category, the weighted average of all its audits.
		 * (The category's score, can be null.)
		 */
		score: FormControl<any | null | undefined>,

		/** The human-friendly name of the category. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateLighthouseCategoryV5FormGroup() {
		return new FormGroup<LighthouseCategoryV5FormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			manualDescription: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<any | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message containing a category */
	export interface CategoryGroupV5 {

		/** The description of what the category is grouping */
		description?: string | null;

		/** The human readable title of the group */
		title?: string | null;
	}

	/** Message containing a category */
	export interface CategoryGroupV5FormProperties {

		/** The description of what the category is grouping */
		description: FormControl<string | null | undefined>,

		/** The human readable title of the group */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCategoryGroupV5FormGroup() {
		return new FormGroup<CategoryGroupV5FormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message containing the configuration settings for the Lighthouse run. */
	export interface ConfigSettings {

		/**
		 * How Lighthouse was run, e.g. from the Chrome extension or from the npm
		 * module.
		 */
		channel?: string | null;

		/** The form factor the emulation should use. */
		emulatedFormFactor?: string | null;

		/** The locale setting. */
		locale?: string | null;

		/** List of categories of audits the run should conduct. */
		onlyCategories?: any;
	}

	/** Message containing the configuration settings for the Lighthouse run. */
	export interface ConfigSettingsFormProperties {

		/**
		 * How Lighthouse was run, e.g. from the Chrome extension or from the npm
		 * module.
		 */
		channel: FormControl<string | null | undefined>,

		/** The form factor the emulation should use. */
		emulatedFormFactor: FormControl<string | null | undefined>,

		/** The locale setting. */
		locale: FormControl<string | null | undefined>,

		/** List of categories of audits the run should conduct. */
		onlyCategories: FormControl<any | null | undefined>,
	}
	export function CreateConfigSettingsFormGroup() {
		return new FormGroup<ConfigSettingsFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined),
			emulatedFormFactor: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			onlyCategories: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Message containing environment configuration for a Lighthouse run. */
	export interface Environment {

		/** The benchmark index number that indicates rough device class. */
		benchmarkIndex?: number | null;

		/** The user agent string of the version of Chrome used. */
		hostUserAgent?: string | null;

		/** The user agent string that was sent over the network. */
		networkUserAgent?: string | null;
	}

	/** Message containing environment configuration for a Lighthouse run. */
	export interface EnvironmentFormProperties {

		/** The benchmark index number that indicates rough device class. */
		benchmarkIndex: FormControl<number | null | undefined>,

		/** The user agent string of the version of Chrome used. */
		hostUserAgent: FormControl<string | null | undefined>,

		/** The user agent string that was sent over the network. */
		networkUserAgent: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			benchmarkIndex: new FormControl<number | null | undefined>(undefined),
			hostUserAgent: new FormControl<string | null | undefined>(undefined),
			networkUserAgent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message containing the i18n data for the LHR - Version 1. */
	export interface I18n {

		/** Message holding the formatted strings used in the renderer. */
		rendererFormattedStrings?: RendererFormattedStrings;
	}

	/** Message containing the i18n data for the LHR - Version 1. */
	export interface I18nFormProperties {
	}
	export function CreateI18nFormGroup() {
		return new FormGroup<I18nFormProperties>({
		});

	}


	/** Message holding the formatted strings used in the renderer. */
	export interface RendererFormattedStrings {

		/** The tooltip text on an expandable chevron icon. */
		auditGroupExpandTooltip?: string | null;

		/** The label for the initial request in a critical request chain. */
		crcInitialNavigation?: string | null;

		/** The label for values shown in the summary of critical request chains. */
		crcLongestDurationLabel?: string | null;

		/** The label shown next to an audit or metric that has had an error. */
		errorLabel?: string | null;

		/** The error string shown next to an erroring audit. */
		errorMissingAuditInfo?: string | null;

		/** The title of the lab data performance category. */
		labDataTitle?: string | null;

		/**
		 * The disclaimer shown under performance explaning that the network can
		 * vary.
		 */
		lsPerformanceCategoryDescription?: string | null;

		/**
		 * The heading shown above a list of audits that were not computerd in the
		 * run.
		 */
		manualAuditsGroupTitle?: string | null;

		/** The heading shown above a list of audits that do not apply to a page. */
		notApplicableAuditsGroupTitle?: string | null;

		/**
		 * The heading for the estimated page load savings opportunity of an
		 * audit.
		 */
		opportunityResourceColumnLabel?: string | null;

		/** The heading for the estimated page load savings of opportunity audits. */
		opportunitySavingsColumnLabel?: string | null;

		/** The heading that is shown above a list of audits that are passing. */
		passedAuditsGroupTitle?: string | null;

		/** The label that explains the score gauges scale (0-49, 50-89, 90-100). */
		scorescaleLabel?: string | null;

		/**
		 * The label shown preceding important warnings that may have invalidated
		 * an entire report.
		 */
		toplevelWarningsMessage?: string | null;

		/** The disclaimer shown below a performance metric value. */
		varianceDisclaimer?: string | null;

		/** The label shown above a bulleted list of warnings. */
		warningHeader?: string | null;
	}

	/** Message holding the formatted strings used in the renderer. */
	export interface RendererFormattedStringsFormProperties {

		/** The tooltip text on an expandable chevron icon. */
		auditGroupExpandTooltip: FormControl<string | null | undefined>,

		/** The label for the initial request in a critical request chain. */
		crcInitialNavigation: FormControl<string | null | undefined>,

		/** The label for values shown in the summary of critical request chains. */
		crcLongestDurationLabel: FormControl<string | null | undefined>,

		/** The label shown next to an audit or metric that has had an error. */
		errorLabel: FormControl<string | null | undefined>,

		/** The error string shown next to an erroring audit. */
		errorMissingAuditInfo: FormControl<string | null | undefined>,

		/** The title of the lab data performance category. */
		labDataTitle: FormControl<string | null | undefined>,

		/**
		 * The disclaimer shown under performance explaning that the network can
		 * vary.
		 */
		lsPerformanceCategoryDescription: FormControl<string | null | undefined>,

		/**
		 * The heading shown above a list of audits that were not computerd in the
		 * run.
		 */
		manualAuditsGroupTitle: FormControl<string | null | undefined>,

		/** The heading shown above a list of audits that do not apply to a page. */
		notApplicableAuditsGroupTitle: FormControl<string | null | undefined>,

		/**
		 * The heading for the estimated page load savings opportunity of an
		 * audit.
		 */
		opportunityResourceColumnLabel: FormControl<string | null | undefined>,

		/** The heading for the estimated page load savings of opportunity audits. */
		opportunitySavingsColumnLabel: FormControl<string | null | undefined>,

		/** The heading that is shown above a list of audits that are passing. */
		passedAuditsGroupTitle: FormControl<string | null | undefined>,

		/** The label that explains the score gauges scale (0-49, 50-89, 90-100). */
		scorescaleLabel: FormControl<string | null | undefined>,

		/**
		 * The label shown preceding important warnings that may have invalidated
		 * an entire report.
		 */
		toplevelWarningsMessage: FormControl<string | null | undefined>,

		/** The disclaimer shown below a performance metric value. */
		varianceDisclaimer: FormControl<string | null | undefined>,

		/** The label shown above a bulleted list of warnings. */
		warningHeader: FormControl<string | null | undefined>,
	}
	export function CreateRendererFormattedStringsFormGroup() {
		return new FormGroup<RendererFormattedStringsFormProperties>({
			auditGroupExpandTooltip: new FormControl<string | null | undefined>(undefined),
			crcInitialNavigation: new FormControl<string | null | undefined>(undefined),
			crcLongestDurationLabel: new FormControl<string | null | undefined>(undefined),
			errorLabel: new FormControl<string | null | undefined>(undefined),
			errorMissingAuditInfo: new FormControl<string | null | undefined>(undefined),
			labDataTitle: new FormControl<string | null | undefined>(undefined),
			lsPerformanceCategoryDescription: new FormControl<string | null | undefined>(undefined),
			manualAuditsGroupTitle: new FormControl<string | null | undefined>(undefined),
			notApplicableAuditsGroupTitle: new FormControl<string | null | undefined>(undefined),
			opportunityResourceColumnLabel: new FormControl<string | null | undefined>(undefined),
			opportunitySavingsColumnLabel: new FormControl<string | null | undefined>(undefined),
			passedAuditsGroupTitle: new FormControl<string | null | undefined>(undefined),
			scorescaleLabel: new FormControl<string | null | undefined>(undefined),
			toplevelWarningsMessage: new FormControl<string | null | undefined>(undefined),
			varianceDisclaimer: new FormControl<string | null | undefined>(undefined),
			warningHeader: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An audit's result object in a Lighthouse result. */
	export interface LighthouseAuditResultV5 {

		/** The description of the audit. */
		description?: string | null;

		/** Freeform details section of the audit. */
		details?: {[id: string]: any };

		/** The value that should be displayed on the UI for this audit. */
		displayValue?: string | null;

		/** An error message from a thrown error inside the audit. */
		errorMessage?: string | null;

		/** An explanation of the errors in the audit. */
		explanation?: string | null;

		/** The audit's id. */
		id?: string | null;

		/**
		 * A numeric value that has a meaning specific to the audit, e.g. the number
		 * of nodes in the DOM or the timestamp of a specific load event. More
		 * information can be found in the audit details, if present.
		 */
		numericValue?: number | null;

		/** The score of the audit, can be null. */
		score?: any;

		/** The enumerated score display mode. */
		scoreDisplayMode?: string | null;

		/** The human readable title. */
		title?: string | null;

		/** Possible warnings that occurred in the audit, can be null. */
		warnings?: any;
	}

	/** An audit's result object in a Lighthouse result. */
	export interface LighthouseAuditResultV5FormProperties {

		/** The description of the audit. */
		description: FormControl<string | null | undefined>,

		/** Freeform details section of the audit. */
		details: FormControl<{[id: string]: any } | null | undefined>,

		/** The value that should be displayed on the UI for this audit. */
		displayValue: FormControl<string | null | undefined>,

		/** An error message from a thrown error inside the audit. */
		errorMessage: FormControl<string | null | undefined>,

		/** An explanation of the errors in the audit. */
		explanation: FormControl<string | null | undefined>,

		/** The audit's id. */
		id: FormControl<string | null | undefined>,

		/**
		 * A numeric value that has a meaning specific to the audit, e.g. the number
		 * of nodes in the DOM or the timestamp of a specific load event. More
		 * information can be found in the audit details, if present.
		 */
		numericValue: FormControl<number | null | undefined>,

		/** The score of the audit, can be null. */
		score: FormControl<any | null | undefined>,

		/** The enumerated score display mode. */
		scoreDisplayMode: FormControl<string | null | undefined>,

		/** The human readable title. */
		title: FormControl<string | null | undefined>,

		/** Possible warnings that occurred in the audit, can be null. */
		warnings: FormControl<any | null | undefined>,
	}
	export function CreateLighthouseAuditResultV5FormGroup() {
		return new FormGroup<LighthouseAuditResultV5FormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			displayValue: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			explanation: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			numericValue: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<any | null | undefined>(undefined),
			scoreDisplayMode: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			warnings: new FormControl<any | null | undefined>(undefined),
		});

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
		fetchTime?: string | null;

		/** The final resolved url that was audited. */
		finalUrl?: string | null;

		/** Message containing the i18n data for the LHR - Version 1. */
		i18n?: I18n;

		/** The lighthouse version that was used to generate this LHR. */
		lighthouseVersion?: string | null;

		/** The original requested url. */
		requestedUrl?: string | null;

		/** List of all run warnings in the LHR.  Will always output to at least `[]`. */
		runWarnings?: Array<string>;

		/** Message containing a runtime error config. */
		runtimeError?: RuntimeError;

		/** The Stack Pack advice strings. */
		stackPacks?: Array<StackPack>;

		/** Message containing the performance timing data for the Lighthouse run. */
		timing?: Timing;

		/** The user agent that was used to run this LHR. */
		userAgent?: string | null;
	}

	/** The Lighthouse result object. */
	export interface LighthouseResultV5FormProperties {

		/** Map of audits in the LHR. */
		audits: FormControl<{[id: string]: LighthouseAuditResultV5 } | null | undefined>,

		/** Map of category groups in the LHR. */
		categoryGroups: FormControl<{[id: string]: CategoryGroupV5 } | null | undefined>,

		/** The time that this run was fetched. */
		fetchTime: FormControl<string | null | undefined>,

		/** The final resolved url that was audited. */
		finalUrl: FormControl<string | null | undefined>,

		/** The lighthouse version that was used to generate this LHR. */
		lighthouseVersion: FormControl<string | null | undefined>,

		/** The original requested url. */
		requestedUrl: FormControl<string | null | undefined>,

		/** The user agent that was used to run this LHR. */
		userAgent: FormControl<string | null | undefined>,
	}
	export function CreateLighthouseResultV5FormGroup() {
		return new FormGroup<LighthouseResultV5FormProperties>({
			audits: new FormControl<{[id: string]: LighthouseAuditResultV5 } | null | undefined>(undefined),
			categoryGroups: new FormControl<{[id: string]: CategoryGroupV5 } | null | undefined>(undefined),
			fetchTime: new FormControl<string | null | undefined>(undefined),
			finalUrl: new FormControl<string | null | undefined>(undefined),
			lighthouseVersion: new FormControl<string | null | undefined>(undefined),
			requestedUrl: new FormControl<string | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message containing a runtime error config. */
	export interface RuntimeError {

		/** The enumerated Lighthouse Error code. */
		code?: string | null;

		/** A human readable message explaining the error code. */
		message?: string | null;
	}

	/** Message containing a runtime error config. */
	export interface RuntimeErrorFormProperties {

		/** The enumerated Lighthouse Error code. */
		code: FormControl<string | null | undefined>,

		/** A human readable message explaining the error code. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeErrorFormGroup() {
		return new FormGroup<RuntimeErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message containing Stack Pack information. */
	export interface StackPack {

		/** The stack pack advice strings. */
		descriptions?: {[id: string]: string };

		/** The stack pack icon data uri. */
		iconDataURL?: string | null;

		/** The stack pack id. */
		id?: string | null;

		/** The stack pack title. */
		title?: string | null;
	}

	/** Message containing Stack Pack information. */
	export interface StackPackFormProperties {

		/** The stack pack advice strings. */
		descriptions: FormControl<{[id: string]: string } | null | undefined>,

		/** The stack pack icon data uri. */
		iconDataURL: FormControl<string | null | undefined>,

		/** The stack pack id. */
		id: FormControl<string | null | undefined>,

		/** The stack pack title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateStackPackFormGroup() {
		return new FormGroup<StackPackFormProperties>({
			descriptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			iconDataURL: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message containing the performance timing data for the Lighthouse run. */
	export interface Timing {

		/** The total duration of Lighthouse's run. */
		total?: number | null;
	}

	/** Message containing the performance timing data for the Lighthouse run. */
	export interface TimingFormProperties {

		/** The total duration of Lighthouse's run. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateTimingFormGroup() {
		return new FormGroup<TimingFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The CrUX loading experience object that contains CrUX data breakdowns. */
	export interface PagespeedApiLoadingExperienceV5 {

		/** The url, pattern or origin which the metrics are on. */
		id?: string | null;

		/** The requested URL, which may differ from the resolved "id". */
		initial_url?: string | null;

		/** The map of <metrics, data>. */
		metrics?: {[id: string]: UserPageLoadMetricV5 };

		/** The human readable speed "category" of the id. */
		overall_category?: string | null;
	}

	/** The CrUX loading experience object that contains CrUX data breakdowns. */
	export interface PagespeedApiLoadingExperienceV5FormProperties {

		/** The url, pattern or origin which the metrics are on. */
		id: FormControl<string | null | undefined>,

		/** The requested URL, which may differ from the resolved "id". */
		initial_url: FormControl<string | null | undefined>,

		/** The map of <metrics, data>. */
		metrics: FormControl<{[id: string]: UserPageLoadMetricV5 } | null | undefined>,

		/** The human readable speed "category" of the id. */
		overall_category: FormControl<string | null | undefined>,
	}
	export function CreatePagespeedApiLoadingExperienceV5FormGroup() {
		return new FormGroup<PagespeedApiLoadingExperienceV5FormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			initial_url: new FormControl<string | null | undefined>(undefined),
			metrics: new FormControl<{[id: string]: UserPageLoadMetricV5 } | null | undefined>(undefined),
			overall_category: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A CrUX metric object for a single metric and form factor. */
	export interface UserPageLoadMetricV5 {

		/** The category of the specific time metric. */
		category?: string | null;

		/** Metric distributions. Proportions should sum up to 1. */
		distributions?: Array<Bucket>;

		/** Identifies the form factor of the metric being collected. */
		formFactor?: string | null;

		/** The median number of the metric, in millisecond. */
		median?: number | null;

		/** Identifies the type of the metric. */
		metricId?: string | null;

		/**
		 * We use this field to store certain percentile value for this metric.
		 * For v4, this field contains pc50.
		 * For v5, this field contains pc90.
		 */
		percentile?: number | null;
	}

	/** A CrUX metric object for a single metric and form factor. */
	export interface UserPageLoadMetricV5FormProperties {

		/** The category of the specific time metric. */
		category: FormControl<string | null | undefined>,

		/** Identifies the form factor of the metric being collected. */
		formFactor: FormControl<string | null | undefined>,

		/** The median number of the metric, in millisecond. */
		median: FormControl<number | null | undefined>,

		/** Identifies the type of the metric. */
		metricId: FormControl<string | null | undefined>,

		/**
		 * We use this field to store certain percentile value for this metric.
		 * For v4, this field contains pc50.
		 * For v5, this field contains pc90.
		 */
		percentile: FormControl<number | null | undefined>,
	}
	export function CreateUserPageLoadMetricV5FormGroup() {
		return new FormGroup<UserPageLoadMetricV5FormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			formFactor: new FormControl<string | null | undefined>(undefined),
			median: new FormControl<number | null | undefined>(undefined),
			metricId: new FormControl<string | null | undefined>(undefined),
			percentile: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Pagespeed API response object. */
	export interface PagespeedApiPagespeedResponseV5 {

		/** The UTC timestamp of this analysis. */
		analysisUTCTimestamp?: string | null;

		/** The captcha verify result */
		captchaResult?: string | null;

		/**
		 * Canonicalized and final URL for the document, after following page
		 * redirects (if any).
		 */
		id?: string | null;

		/** Kind of result. */
		kind?: string | null;

		/** The Lighthouse result object. */
		lighthouseResult?: LighthouseResultV5;

		/** The CrUX loading experience object that contains CrUX data breakdowns. */
		loadingExperience?: PagespeedApiLoadingExperienceV5;

		/** The CrUX loading experience object that contains CrUX data breakdowns. */
		originLoadingExperience?: PagespeedApiLoadingExperienceV5;

		/** The Pagespeed Version object. */
		version?: PagespeedVersion;
	}

	/** The Pagespeed API response object. */
	export interface PagespeedApiPagespeedResponseV5FormProperties {

		/** The UTC timestamp of this analysis. */
		analysisUTCTimestamp: FormControl<string | null | undefined>,

		/** The captcha verify result */
		captchaResult: FormControl<string | null | undefined>,

		/**
		 * Canonicalized and final URL for the document, after following page
		 * redirects (if any).
		 */
		id: FormControl<string | null | undefined>,

		/** Kind of result. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePagespeedApiPagespeedResponseV5FormGroup() {
		return new FormGroup<PagespeedApiPagespeedResponseV5FormProperties>({
			analysisUTCTimestamp: new FormControl<string | null | undefined>(undefined),
			captchaResult: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Pagespeed Version object. */
	export interface PagespeedVersion {

		/** The major version number of PageSpeed used to generate these results. */
		major?: string | null;

		/** The minor version number of PageSpeed used to generate these results. */
		minor?: string | null;
	}

	/** The Pagespeed Version object. */
	export interface PagespeedVersionFormProperties {

		/** The major version number of PageSpeed used to generate these results. */
		major: FormControl<string | null | undefined>,

		/** The minor version number of PageSpeed used to generate these results. */
		minor: FormControl<string | null | undefined>,
	}
	export function CreatePagespeedVersionFormGroup() {
		return new FormGroup<PagespeedVersionFormProperties>({
			major: new FormControl<string | null | undefined>(undefined),
			minor: new FormControl<string | null | undefined>(undefined),
		});

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
		Pagespeedonline_pagespeedapi_runpagespeed(captchaToken: string | null | undefined, category: Array<string> | null | undefined, locale: string | null | undefined, strategy: Pagespeedonline_pagespeedapi_runpagespeedStrategy | null | undefined, url: string | null | undefined, utm_campaign: string | null | undefined, utm_source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pagespeedonline/v5/runPagespeed?captchaToken=' + (captchaToken == null ? '' : encodeURIComponent(captchaToken)) + '&' + category?.map(z => `category=${encodeURIComponent(z)}`).join('&') + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&strategy=' + strategy + '&url=' + (url == null ? '' : encodeURIComponent(url)) + '&utm_campaign=' + (utm_campaign == null ? '' : encodeURIComponent(utm_campaign)) + '&utm_source=' + (utm_source == null ? '' : encodeURIComponent(utm_source)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Pagespeedonline_pagespeedapi_runpagespeedStrategy { STRATEGY_UNSPECIFIED = 0, DESKTOP = 1, MOBILE = 2 }

}

