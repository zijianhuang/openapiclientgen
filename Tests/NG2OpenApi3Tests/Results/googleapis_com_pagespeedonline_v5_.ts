import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A light reference to an audit by id, used to group and weight audits in a given category. */
	export interface AuditRefs {

		/** The conventional acronym for the audit/metric. */
		acronym?: string | null;

		/** The category group that the audit belongs to (optional). */
		group?: string | null;

		/** The audit ref id. */
		id?: string | null;

		/** Any audit IDs closely relevant to this one. */
		relevantAudits?: Array<string>;

		/** The weight this audit's score has on the overall category score. */
		weight?: number | null;
	}

	/** A light reference to an audit by id, used to group and weight audits in a given category. */
	export interface AuditRefsFormProperties {

		/** The conventional acronym for the audit/metric. */
		acronym: FormControl<string | null | undefined>,

		/** The category group that the audit belongs to (optional). */
		group: FormControl<string | null | undefined>,

		/** The audit ref id. */
		id: FormControl<string | null | undefined>,

		/** The weight this audit's score has on the overall category score. */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateAuditRefsFormGroup() {
		return new FormGroup<AuditRefsFormProperties>({
			acronym: new FormControl<string | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A proportion of data in the total distribution, bucketed by a min/max percentage. Each bucket's range is bounded by min <= x < max, In millisecond. */
	export interface Bucket {

		/** Upper bound for a bucket's range. */
		max?: number | null;

		/** Lower bound for a bucket's range. */
		min?: number | null;

		/** The proportion of data in this bucket. */
		proportion?: number | null;
	}

	/** A proportion of data in the total distribution, bucketed by a min/max percentage. Each bucket's range is bounded by min <= x < max, In millisecond. */
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
		'best-practices'?: LighthouseCategoryV5;

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

		/** The overall score of the category, the weighted average of all its audits. (The category's score, can be null.) */
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

		/** The overall score of the category, the weighted average of all its audits. (The category's score, can be null.) */
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

		/** How Lighthouse was run, e.g. from the Chrome extension or from the npm module. */
		channel?: string | null;

		/** The form factor the emulation should use. This field is deprecated, form_factor should be used instead. */
		emulatedFormFactor?: string | null;

		/** How Lighthouse should interpret this run in regards to scoring performance metrics and skipping mobile-only tests in desktop. */
		formFactor?: string | null;

		/** The locale setting. */
		locale?: string | null;

		/** List of categories of audits the run should conduct. */
		onlyCategories?: any;
	}

	/** Message containing the configuration settings for the Lighthouse run. */
	export interface ConfigSettingsFormProperties {

		/** How Lighthouse was run, e.g. from the Chrome extension or from the npm module. */
		channel: FormControl<string | null | undefined>,

		/** The form factor the emulation should use. This field is deprecated, form_factor should be used instead. */
		emulatedFormFactor: FormControl<string | null | undefined>,

		/** How Lighthouse should interpret this run in regards to scoring performance metrics and skipping mobile-only tests in desktop. */
		formFactor: FormControl<string | null | undefined>,

		/** The locale setting. */
		locale: FormControl<string | null | undefined>,

		/** List of categories of audits the run should conduct. */
		onlyCategories: FormControl<any | null | undefined>,
	}
	export function CreateConfigSettingsFormGroup() {
		return new FormGroup<ConfigSettingsFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined),
			emulatedFormFactor: new FormControl<string | null | undefined>(undefined),
			formFactor: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			onlyCategories: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Message containing environment configuration for a Lighthouse run. */
	export interface Environment {

		/** The benchmark index number that indicates rough device class. */
		benchmarkIndex?: number | null;

		/** The version of libraries with which these results were generated. Ex: axe-core. */
		credits?: {[id: string]: string };

		/** The user agent string of the version of Chrome used. */
		hostUserAgent?: string | null;

		/** The user agent string that was sent over the network. */
		networkUserAgent?: string | null;
	}

	/** Message containing environment configuration for a Lighthouse run. */
	export interface EnvironmentFormProperties {

		/** The benchmark index number that indicates rough device class. */
		benchmarkIndex: FormControl<number | null | undefined>,

		/** The version of libraries with which these results were generated. Ex: axe-core. */
		credits: FormControl<{[id: string]: string } | null | undefined>,

		/** The user agent string of the version of Chrome used. */
		hostUserAgent: FormControl<string | null | undefined>,

		/** The user agent string that was sent over the network. */
		networkUserAgent: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			benchmarkIndex: new FormControl<number | null | undefined>(undefined),
			credits: new FormControl<{[id: string]: string } | null | undefined>(undefined),
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

		/** Text link pointing to the Lighthouse scoring calculator. This link immediately follows a sentence stating the performance score is calculated from the perf metrics. */
		calculatorLink?: string | null;

		/** The label for the initial request in a critical request chain. */
		crcInitialNavigation?: string | null;

		/** The label for values shown in the summary of critical request chains. */
		crcLongestDurationLabel?: string | null;

		/** Option in a dropdown menu that copies the Lighthouse JSON object to the system clipboard. */
		dropdownCopyJSON?: string | null;

		/** Option in a dropdown menu that toggles the themeing of the report between Light(default) and Dark themes. */
		dropdownDarkTheme?: string | null;

		/** Option in a dropdown menu that opens a full Lighthouse report in a print dialog. */
		dropdownPrintExpanded?: string | null;

		/** Option in a dropdown menu that opens a small, summary report in a print dialog. */
		dropdownPrintSummary?: string | null;

		/** Option in a dropdown menu that saves the current report as a new GitHub Gist. */
		dropdownSaveGist?: string | null;

		/** Option in a dropdown menu that saves the Lighthouse report HTML locally to the system as a '.html' file. */
		dropdownSaveHTML?: string | null;

		/** Option in a dropdown menu that saves the Lighthouse JSON object to the local system as a '.json' file. */
		dropdownSaveJSON?: string | null;

		/** Option in a dropdown menu that opens the current report in the Lighthouse Viewer Application. */
		dropdownViewer?: string | null;

		/** The label shown next to an audit or metric that has had an error. */
		errorLabel?: string | null;

		/** The error string shown next to an erroring audit. */
		errorMissingAuditInfo?: string | null;

		/** Label for button to create an issue against the Lighthouse GitHub project. */
		footerIssue?: string | null;

		/** The title of the lab data performance category. */
		labDataTitle?: string | null;

		/** The disclaimer shown under performance explaining that the network can vary. */
		lsPerformanceCategoryDescription?: string | null;

		/** The heading shown above a list of audits that were not computerd in the run. */
		manualAuditsGroupTitle?: string | null;

		/** The heading shown above a list of audits that do not apply to a page. */
		notApplicableAuditsGroupTitle?: string | null;

		/** The heading for the estimated page load savings opportunity of an audit. */
		opportunityResourceColumnLabel?: string | null;

		/** The heading for the estimated page load savings of opportunity audits. */
		opportunitySavingsColumnLabel?: string | null;

		/** The heading that is shown above a list of audits that are passing. */
		passedAuditsGroupTitle?: string | null;

		/** Descriptive explanation for emulation setting when emulating a generic desktop form factor, as opposed to a mobile-device like form factor. */
		runtimeDesktopEmulation?: string | null;

		/** Descriptive explanation for emulation setting when emulating a Nexus 5X mobile device. */
		runtimeMobileEmulation?: string | null;

		/** Descriptive explanation for emulation setting when no device emulation is set. */
		runtimeNoEmulation?: string | null;

		/** Label for a row in a table that shows the version of the Axe library used */
		runtimeSettingsAxeVersion?: string | null;

		/** Label for a row in a table that shows the estimated CPU power of the machine running Lighthouse. Example row values: 532, 1492, 783. */
		runtimeSettingsBenchmark?: string | null;

		/** Label for a row in a table that describes the CPU throttling conditions that were used during a Lighthouse run, if any. */
		runtimeSettingsCPUThrottling?: string | null;

		/** Label for a row in a table that shows in what tool Lighthouse is being run (e.g. The lighthouse CLI, Chrome DevTools, Lightrider, WebPageTest, etc). */
		runtimeSettingsChannel?: string | null;

		/** Label for a row in a table that describes the kind of device that was emulated for the Lighthouse run. Example values for row elements: 'No Emulation', 'Emulated Desktop', etc. */
		runtimeSettingsDevice?: string | null;

		/** Label for a row in a table that shows the time at which a Lighthouse run was conducted; formatted as a timestamp, e.g. Jan 1, 1970 12:00 AM UTC. */
		runtimeSettingsFetchTime?: string | null;

		/** Label for a row in a table that describes the network throttling conditions that were used during a Lighthouse run, if any. */
		runtimeSettingsNetworkThrottling?: string | null;

		/** Title of the Runtime settings table in a Lighthouse report. Runtime settings are the environment configurations that a specific report used at auditing time. */
		runtimeSettingsTitle?: string | null;

		/** Label for a row in a table that shows the User Agent that was detected on the Host machine that ran Lighthouse. */
		runtimeSettingsUA?: string | null;

		/** Label for a row in a table that shows the User Agent that was used to send out all network requests during the Lighthouse run. */
		runtimeSettingsUANetwork?: string | null;

		/** Label for a row in a table that shows the URL that was audited during a Lighthouse run. */
		runtimeSettingsUrl?: string | null;

		/** Descriptive explanation for a runtime setting that is set to an unknown value. */
		runtimeUnknown?: string | null;

		/** The label that explains the score gauges scale (0-49, 50-89, 90-100). */
		scorescaleLabel?: string | null;

		/** Label preceding a radio control for filtering the list of audits. The radio choices are various performance metrics (FCP, LCP, TBT), and if chosen, the audits in the report are hidden if they are not relevant to the selected metric. */
		showRelevantAudits?: string | null;

		/** The label for the button to show only a few lines of a snippet */
		snippetCollapseButtonLabel?: string | null;

		/** The label for the button to show all lines of a snippet */
		snippetExpandButtonLabel?: string | null;

		/** This label is for a filter checkbox above a table of items */
		thirdPartyResourcesLabel?: string | null;

		/** Descriptive explanation for environment throttling that was provided by the runtime environment instead of provided by Lighthouse throttling. */
		throttlingProvided?: string | null;

		/** The label shown preceding important warnings that may have invalidated an entire report. */
		toplevelWarningsMessage?: string | null;

		/** The disclaimer shown below a performance metric value. */
		varianceDisclaimer?: string | null;

		/** Label for a button that opens the Treemap App */
		viewTreemapLabel?: string | null;

		/** The heading that is shown above a list of audits that have warnings */
		warningAuditsGroupTitle?: string | null;

		/** The label shown above a bulleted list of warnings. */
		warningHeader?: string | null;
	}

	/** Message holding the formatted strings used in the renderer. */
	export interface RendererFormattedStringsFormProperties {

		/** The tooltip text on an expandable chevron icon. */
		auditGroupExpandTooltip: FormControl<string | null | undefined>,

		/** Text link pointing to the Lighthouse scoring calculator. This link immediately follows a sentence stating the performance score is calculated from the perf metrics. */
		calculatorLink: FormControl<string | null | undefined>,

		/** The label for the initial request in a critical request chain. */
		crcInitialNavigation: FormControl<string | null | undefined>,

		/** The label for values shown in the summary of critical request chains. */
		crcLongestDurationLabel: FormControl<string | null | undefined>,

		/** Option in a dropdown menu that copies the Lighthouse JSON object to the system clipboard. */
		dropdownCopyJSON: FormControl<string | null | undefined>,

		/** Option in a dropdown menu that toggles the themeing of the report between Light(default) and Dark themes. */
		dropdownDarkTheme: FormControl<string | null | undefined>,

		/** Option in a dropdown menu that opens a full Lighthouse report in a print dialog. */
		dropdownPrintExpanded: FormControl<string | null | undefined>,

		/** Option in a dropdown menu that opens a small, summary report in a print dialog. */
		dropdownPrintSummary: FormControl<string | null | undefined>,

		/** Option in a dropdown menu that saves the current report as a new GitHub Gist. */
		dropdownSaveGist: FormControl<string | null | undefined>,

		/** Option in a dropdown menu that saves the Lighthouse report HTML locally to the system as a '.html' file. */
		dropdownSaveHTML: FormControl<string | null | undefined>,

		/** Option in a dropdown menu that saves the Lighthouse JSON object to the local system as a '.json' file. */
		dropdownSaveJSON: FormControl<string | null | undefined>,

		/** Option in a dropdown menu that opens the current report in the Lighthouse Viewer Application. */
		dropdownViewer: FormControl<string | null | undefined>,

		/** The label shown next to an audit or metric that has had an error. */
		errorLabel: FormControl<string | null | undefined>,

		/** The error string shown next to an erroring audit. */
		errorMissingAuditInfo: FormControl<string | null | undefined>,

		/** Label for button to create an issue against the Lighthouse GitHub project. */
		footerIssue: FormControl<string | null | undefined>,

		/** The title of the lab data performance category. */
		labDataTitle: FormControl<string | null | undefined>,

		/** The disclaimer shown under performance explaining that the network can vary. */
		lsPerformanceCategoryDescription: FormControl<string | null | undefined>,

		/** The heading shown above a list of audits that were not computerd in the run. */
		manualAuditsGroupTitle: FormControl<string | null | undefined>,

		/** The heading shown above a list of audits that do not apply to a page. */
		notApplicableAuditsGroupTitle: FormControl<string | null | undefined>,

		/** The heading for the estimated page load savings opportunity of an audit. */
		opportunityResourceColumnLabel: FormControl<string | null | undefined>,

		/** The heading for the estimated page load savings of opportunity audits. */
		opportunitySavingsColumnLabel: FormControl<string | null | undefined>,

		/** The heading that is shown above a list of audits that are passing. */
		passedAuditsGroupTitle: FormControl<string | null | undefined>,

		/** Descriptive explanation for emulation setting when emulating a generic desktop form factor, as opposed to a mobile-device like form factor. */
		runtimeDesktopEmulation: FormControl<string | null | undefined>,

		/** Descriptive explanation for emulation setting when emulating a Nexus 5X mobile device. */
		runtimeMobileEmulation: FormControl<string | null | undefined>,

		/** Descriptive explanation for emulation setting when no device emulation is set. */
		runtimeNoEmulation: FormControl<string | null | undefined>,

		/** Label for a row in a table that shows the version of the Axe library used */
		runtimeSettingsAxeVersion: FormControl<string | null | undefined>,

		/** Label for a row in a table that shows the estimated CPU power of the machine running Lighthouse. Example row values: 532, 1492, 783. */
		runtimeSettingsBenchmark: FormControl<string | null | undefined>,

		/** Label for a row in a table that describes the CPU throttling conditions that were used during a Lighthouse run, if any. */
		runtimeSettingsCPUThrottling: FormControl<string | null | undefined>,

		/** Label for a row in a table that shows in what tool Lighthouse is being run (e.g. The lighthouse CLI, Chrome DevTools, Lightrider, WebPageTest, etc). */
		runtimeSettingsChannel: FormControl<string | null | undefined>,

		/** Label for a row in a table that describes the kind of device that was emulated for the Lighthouse run. Example values for row elements: 'No Emulation', 'Emulated Desktop', etc. */
		runtimeSettingsDevice: FormControl<string | null | undefined>,

		/** Label for a row in a table that shows the time at which a Lighthouse run was conducted; formatted as a timestamp, e.g. Jan 1, 1970 12:00 AM UTC. */
		runtimeSettingsFetchTime: FormControl<string | null | undefined>,

		/** Label for a row in a table that describes the network throttling conditions that were used during a Lighthouse run, if any. */
		runtimeSettingsNetworkThrottling: FormControl<string | null | undefined>,

		/** Title of the Runtime settings table in a Lighthouse report. Runtime settings are the environment configurations that a specific report used at auditing time. */
		runtimeSettingsTitle: FormControl<string | null | undefined>,

		/** Label for a row in a table that shows the User Agent that was detected on the Host machine that ran Lighthouse. */
		runtimeSettingsUA: FormControl<string | null | undefined>,

		/** Label for a row in a table that shows the User Agent that was used to send out all network requests during the Lighthouse run. */
		runtimeSettingsUANetwork: FormControl<string | null | undefined>,

		/** Label for a row in a table that shows the URL that was audited during a Lighthouse run. */
		runtimeSettingsUrl: FormControl<string | null | undefined>,

		/** Descriptive explanation for a runtime setting that is set to an unknown value. */
		runtimeUnknown: FormControl<string | null | undefined>,

		/** The label that explains the score gauges scale (0-49, 50-89, 90-100). */
		scorescaleLabel: FormControl<string | null | undefined>,

		/** Label preceding a radio control for filtering the list of audits. The radio choices are various performance metrics (FCP, LCP, TBT), and if chosen, the audits in the report are hidden if they are not relevant to the selected metric. */
		showRelevantAudits: FormControl<string | null | undefined>,

		/** The label for the button to show only a few lines of a snippet */
		snippetCollapseButtonLabel: FormControl<string | null | undefined>,

		/** The label for the button to show all lines of a snippet */
		snippetExpandButtonLabel: FormControl<string | null | undefined>,

		/** This label is for a filter checkbox above a table of items */
		thirdPartyResourcesLabel: FormControl<string | null | undefined>,

		/** Descriptive explanation for environment throttling that was provided by the runtime environment instead of provided by Lighthouse throttling. */
		throttlingProvided: FormControl<string | null | undefined>,

		/** The label shown preceding important warnings that may have invalidated an entire report. */
		toplevelWarningsMessage: FormControl<string | null | undefined>,

		/** The disclaimer shown below a performance metric value. */
		varianceDisclaimer: FormControl<string | null | undefined>,

		/** Label for a button that opens the Treemap App */
		viewTreemapLabel: FormControl<string | null | undefined>,

		/** The heading that is shown above a list of audits that have warnings */
		warningAuditsGroupTitle: FormControl<string | null | undefined>,

		/** The label shown above a bulleted list of warnings. */
		warningHeader: FormControl<string | null | undefined>,
	}
	export function CreateRendererFormattedStringsFormGroup() {
		return new FormGroup<RendererFormattedStringsFormProperties>({
			auditGroupExpandTooltip: new FormControl<string | null | undefined>(undefined),
			calculatorLink: new FormControl<string | null | undefined>(undefined),
			crcInitialNavigation: new FormControl<string | null | undefined>(undefined),
			crcLongestDurationLabel: new FormControl<string | null | undefined>(undefined),
			dropdownCopyJSON: new FormControl<string | null | undefined>(undefined),
			dropdownDarkTheme: new FormControl<string | null | undefined>(undefined),
			dropdownPrintExpanded: new FormControl<string | null | undefined>(undefined),
			dropdownPrintSummary: new FormControl<string | null | undefined>(undefined),
			dropdownSaveGist: new FormControl<string | null | undefined>(undefined),
			dropdownSaveHTML: new FormControl<string | null | undefined>(undefined),
			dropdownSaveJSON: new FormControl<string | null | undefined>(undefined),
			dropdownViewer: new FormControl<string | null | undefined>(undefined),
			errorLabel: new FormControl<string | null | undefined>(undefined),
			errorMissingAuditInfo: new FormControl<string | null | undefined>(undefined),
			footerIssue: new FormControl<string | null | undefined>(undefined),
			labDataTitle: new FormControl<string | null | undefined>(undefined),
			lsPerformanceCategoryDescription: new FormControl<string | null | undefined>(undefined),
			manualAuditsGroupTitle: new FormControl<string | null | undefined>(undefined),
			notApplicableAuditsGroupTitle: new FormControl<string | null | undefined>(undefined),
			opportunityResourceColumnLabel: new FormControl<string | null | undefined>(undefined),
			opportunitySavingsColumnLabel: new FormControl<string | null | undefined>(undefined),
			passedAuditsGroupTitle: new FormControl<string | null | undefined>(undefined),
			runtimeDesktopEmulation: new FormControl<string | null | undefined>(undefined),
			runtimeMobileEmulation: new FormControl<string | null | undefined>(undefined),
			runtimeNoEmulation: new FormControl<string | null | undefined>(undefined),
			runtimeSettingsAxeVersion: new FormControl<string | null | undefined>(undefined),
			runtimeSettingsBenchmark: new FormControl<string | null | undefined>(undefined),
			runtimeSettingsCPUThrottling: new FormControl<string | null | undefined>(undefined),
			runtimeSettingsChannel: new FormControl<string | null | undefined>(undefined),
			runtimeSettingsDevice: new FormControl<string | null | undefined>(undefined),
			runtimeSettingsFetchTime: new FormControl<string | null | undefined>(undefined),
			runtimeSettingsNetworkThrottling: new FormControl<string | null | undefined>(undefined),
			runtimeSettingsTitle: new FormControl<string | null | undefined>(undefined),
			runtimeSettingsUA: new FormControl<string | null | undefined>(undefined),
			runtimeSettingsUANetwork: new FormControl<string | null | undefined>(undefined),
			runtimeSettingsUrl: new FormControl<string | null | undefined>(undefined),
			runtimeUnknown: new FormControl<string | null | undefined>(undefined),
			scorescaleLabel: new FormControl<string | null | undefined>(undefined),
			showRelevantAudits: new FormControl<string | null | undefined>(undefined),
			snippetCollapseButtonLabel: new FormControl<string | null | undefined>(undefined),
			snippetExpandButtonLabel: new FormControl<string | null | undefined>(undefined),
			thirdPartyResourcesLabel: new FormControl<string | null | undefined>(undefined),
			throttlingProvided: new FormControl<string | null | undefined>(undefined),
			toplevelWarningsMessage: new FormControl<string | null | undefined>(undefined),
			varianceDisclaimer: new FormControl<string | null | undefined>(undefined),
			viewTreemapLabel: new FormControl<string | null | undefined>(undefined),
			warningAuditsGroupTitle: new FormControl<string | null | undefined>(undefined),
			warningHeader: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message containing an Entity. */
	export interface LhrEntity {

		/** Optional. An optional category name for the entity. */
		category?: string | null;

		/** Optional. An optional homepage URL of the entity. */
		homepage?: string | null;

		/** Optional. An optional flag indicating if the entity is the first party. */
		isFirstParty?: boolean | null;

		/** Optional. An optional flag indicating if the entity is not recognized. */
		isUnrecognized?: boolean | null;

		/** Required. Name of the entity. */
		name?: string | null;

		/** Required. A list of URL origin strings that belong to this entity. */
		origins?: Array<string>;
	}

	/** Message containing an Entity. */
	export interface LhrEntityFormProperties {

		/** Optional. An optional category name for the entity. */
		category: FormControl<string | null | undefined>,

		/** Optional. An optional homepage URL of the entity. */
		homepage: FormControl<string | null | undefined>,

		/** Optional. An optional flag indicating if the entity is the first party. */
		isFirstParty: FormControl<boolean | null | undefined>,

		/** Optional. An optional flag indicating if the entity is not recognized. */
		isUnrecognized: FormControl<boolean | null | undefined>,

		/** Required. Name of the entity. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLhrEntityFormGroup() {
		return new FormGroup<LhrEntityFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			homepage: new FormControl<string | null | undefined>(undefined),
			isFirstParty: new FormControl<boolean | null | undefined>(undefined),
			isUnrecognized: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
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

		/** The unit of the numeric_value field. Used to format the numeric value for display. */
		numericUnit?: string | null;

		/** A numeric value that has a meaning specific to the audit, e.g. the number of nodes in the DOM or the timestamp of a specific load event. More information can be found in the audit details, if present. */
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

		/** The unit of the numeric_value field. Used to format the numeric value for display. */
		numericUnit: FormControl<string | null | undefined>,

		/** A numeric value that has a meaning specific to the audit, e.g. the number of nodes in the DOM or the timestamp of a specific load event. More information can be found in the audit details, if present. */
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
			numericUnit: new FormControl<string | null | undefined>(undefined),
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

		/** Entity classification data. */
		entities?: Array<LhrEntity>;

		/** Message containing environment configuration for a Lighthouse run. */
		environment?: Environment;

		/** The time that this run was fetched. */
		fetchTime?: string | null;

		/** URL displayed on the page after Lighthouse finishes. */
		finalDisplayedUrl?: string | null;

		/** The final resolved url that was audited. */
		finalUrl?: string | null;

		/** Screenshot data of the full page, along with node rects relevant to the audit results. */
		fullPageScreenshot?: any;

		/** Message containing the i18n data for the LHR - Version 1. */
		i18n?: I18n;

		/** The lighthouse version that was used to generate this LHR. */
		lighthouseVersion?: string | null;

		/** URL of the main document request of the final navigation. */
		mainDocumentUrl?: string | null;

		/** The original requested url. */
		requestedUrl?: string | null;

		/** List of all run warnings in the LHR. Will always output to at least `[]`. */
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

		/** URL displayed on the page after Lighthouse finishes. */
		finalDisplayedUrl: FormControl<string | null | undefined>,

		/** The final resolved url that was audited. */
		finalUrl: FormControl<string | null | undefined>,

		/** Screenshot data of the full page, along with node rects relevant to the audit results. */
		fullPageScreenshot: FormControl<any | null | undefined>,

		/** The lighthouse version that was used to generate this LHR. */
		lighthouseVersion: FormControl<string | null | undefined>,

		/** URL of the main document request of the final navigation. */
		mainDocumentUrl: FormControl<string | null | undefined>,

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
			finalDisplayedUrl: new FormControl<string | null | undefined>(undefined),
			finalUrl: new FormControl<string | null | undefined>(undefined),
			fullPageScreenshot: new FormControl<any | null | undefined>(undefined),
			lighthouseVersion: new FormControl<string | null | undefined>(undefined),
			mainDocumentUrl: new FormControl<string | null | undefined>(undefined),
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

		/** The map of . */
		metrics?: {[id: string]: UserPageLoadMetricV5 };

		/** True if the result is an origin fallback from a page, false otherwise. */
		origin_fallback?: boolean | null;

		/** The human readable speed "category" of the id. */
		overall_category?: string | null;
	}

	/** The CrUX loading experience object that contains CrUX data breakdowns. */
	export interface PagespeedApiLoadingExperienceV5FormProperties {

		/** The url, pattern or origin which the metrics are on. */
		id: FormControl<string | null | undefined>,

		/** The requested URL, which may differ from the resolved "id". */
		initial_url: FormControl<string | null | undefined>,

		/** The map of . */
		metrics: FormControl<{[id: string]: UserPageLoadMetricV5 } | null | undefined>,

		/** True if the result is an origin fallback from a page, false otherwise. */
		origin_fallback: FormControl<boolean | null | undefined>,

		/** The human readable speed "category" of the id. */
		overall_category: FormControl<string | null | undefined>,
	}
	export function CreatePagespeedApiLoadingExperienceV5FormGroup() {
		return new FormGroup<PagespeedApiLoadingExperienceV5FormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			initial_url: new FormControl<string | null | undefined>(undefined),
			metrics: new FormControl<{[id: string]: UserPageLoadMetricV5 } | null | undefined>(undefined),
			origin_fallback: new FormControl<boolean | null | undefined>(undefined),
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

		/** We use this field to store certain percentile value for this metric. For v4, this field contains pc50. For v5, this field contains pc90. */
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

		/** We use this field to store certain percentile value for this metric. For v4, this field contains pc50. For v5, this field contains pc90. */
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

		/** Canonicalized and final URL for the document, after following page redirects (if any). */
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

		/** Canonicalized and final URL for the document, after following page redirects (if any). */
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
		 * Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.
		 * Get pagespeedonline/v5/runPagespeed
		 * @param {string} url Required. The URL to fetch and analyze
		 * @param {string} captchaToken The captcha token passed when filling out a captcha.
		 * @param {Array<string>} category A Lighthouse category to run; if none are given, only Performance category will be run
		 * @param {string} locale The locale used to localize formatted results
		 * @param {Pagespeedonline_pagespeedapi_runpagespeedStrategy} strategy The analysis strategy (desktop or mobile) to use, and desktop is the default
		 * @param {string} utm_campaign Campaign name for analytics.
		 * @param {string} utm_source Campaign source for analytics.
		 * @return {PagespeedApiPagespeedResponseV5} Successful response
		 */
		Pagespeedonline_pagespeedapi_runpagespeed(url: string, captchaToken: string | null | undefined, category: Array<string> | null | undefined, locale: string | null | undefined, strategy: Pagespeedonline_pagespeedapi_runpagespeedStrategy | null | undefined, utm_campaign: string | null | undefined, utm_source: string | null | undefined): Observable<PagespeedApiPagespeedResponseV5> {
			return this.http.get<PagespeedApiPagespeedResponseV5>(this.baseUri + 'pagespeedonline/v5/runPagespeed?url=' + (url == null ? '' : encodeURIComponent(url)) + '&captchaToken=' + (captchaToken == null ? '' : encodeURIComponent(captchaToken)) + '&' + category?.map(z => `category=${encodeURIComponent(z)}`).join('&') + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&strategy=' + strategy + '&utm_campaign=' + (utm_campaign == null ? '' : encodeURIComponent(utm_campaign)) + '&utm_source=' + (utm_source == null ? '' : encodeURIComponent(utm_source)), {});
		}
	}

	export enum Pagespeedonline_pagespeedapi_runpagespeedStrategy { STRATEGY_UNSPECIFIED = 'STRATEGY_UNSPECIFIED', DESKTOP = 'DESKTOP', MOBILE = 'MOBILE' }

}

