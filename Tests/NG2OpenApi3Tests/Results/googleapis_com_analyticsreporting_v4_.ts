import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An Activity represents data for an activity of a user. Note that an Activity is different from a hit. A hit might result in multiple Activity's. For example, if a hit includes a transaction and a goal completion, there will be two Activity protos for this hit, one for ECOMMERCE and one for GOAL. Conversely, multiple hits can also construct one Activity. In classic e-commerce, data for one transaction might be sent through multiple hits. These hits will be merged into one ECOMMERCE Activity. */
	export interface Activity {

		/** Timestamp of the activity. If activities for a visit cross midnight and occur in two separate dates, then two sessions (one per date) share the session identifier. For example, say session ID 113472 has activity within 2019-08-20, and session ID 243742 has activity within 2019-08-25 and 2019-08-26. Session ID 113472 is one session, and session ID 243742 is two sessions. */
		activityTime?: string | null;

		/** Type of this activity. */
		activityType?: ActivityActivityType | null;
		appview?: ScreenviewData;

		/** For manual campaign tracking, it is the value of the utm_campaign campaign tracking parameter. For AdWords autotagging, it is the name(s) of the online ad campaign(s) you use for the property. If you use neither, its value is (not set). */
		campaign?: string | null;

		/** The Channel Group associated with an end user's session for this View (defined by the View's Channel Groupings). */
		channelGrouping?: string | null;

		/** A list of all custom dimensions associated with this activity. */
		customDimension?: Array<CustomDimension>;

		/** E-commerce details associated with the user activity. */
		ecommerce?: EcommerceData;

		/** Represents all the details pertaining to an event. */
		event?: EventData;

		/** Represents a set of goals that were reached in an activity. */
		goals?: GoalSetData;

		/** The hostname from which the tracking request was made. */
		hostname?: string | null;

		/** For manual campaign tracking, it is the value of the utm_term campaign tracking parameter. For AdWords traffic, it contains the best matching targeting criteria. For the display network, where multiple targeting criteria could have caused the ad to show up, it returns the best matching targeting criteria as selected by Ads. This could be display_keyword, site placement, boomuserlist, user_interest, age, or gender. Otherwise its value is (not set). */
		keyword?: string | null;

		/** The first page in users' sessions, or the landing page. */
		landingPagePath?: string | null;

		/** The type of referrals. For manual campaign tracking, it is the value of the utm_medium campaign tracking parameter. For AdWords autotagging, it is cpc. If users came from a search engine detected by Google Analytics, it is organic. If the referrer is not a search engine, it is referral. If users came directly to the property and document.referrer is empty, its value is (none). */
		medium?: string | null;

		/** Represents details collected when the visitor views a page. */
		pageview?: PageviewData;

		/** The source of referrals. For manual campaign tracking, it is the value of the utm_source campaign tracking parameter. For AdWords autotagging, it is google. If you use neither, it is the domain of the source (e.g., document.referrer) referring the users. It may also contain a port address. If users arrived without a referrer, its value is (direct). */
		source?: string | null;
	}

	/** An Activity represents data for an activity of a user. Note that an Activity is different from a hit. A hit might result in multiple Activity's. For example, if a hit includes a transaction and a goal completion, there will be two Activity protos for this hit, one for ECOMMERCE and one for GOAL. Conversely, multiple hits can also construct one Activity. In classic e-commerce, data for one transaction might be sent through multiple hits. These hits will be merged into one ECOMMERCE Activity. */
	export interface ActivityFormProperties {

		/** Timestamp of the activity. If activities for a visit cross midnight and occur in two separate dates, then two sessions (one per date) share the session identifier. For example, say session ID 113472 has activity within 2019-08-20, and session ID 243742 has activity within 2019-08-25 and 2019-08-26. Session ID 113472 is one session, and session ID 243742 is two sessions. */
		activityTime: FormControl<string | null | undefined>,

		/** Type of this activity. */
		activityType: FormControl<ActivityActivityType | null | undefined>,

		/** For manual campaign tracking, it is the value of the utm_campaign campaign tracking parameter. For AdWords autotagging, it is the name(s) of the online ad campaign(s) you use for the property. If you use neither, its value is (not set). */
		campaign: FormControl<string | null | undefined>,

		/** The Channel Group associated with an end user's session for this View (defined by the View's Channel Groupings). */
		channelGrouping: FormControl<string | null | undefined>,

		/** The hostname from which the tracking request was made. */
		hostname: FormControl<string | null | undefined>,

		/** For manual campaign tracking, it is the value of the utm_term campaign tracking parameter. For AdWords traffic, it contains the best matching targeting criteria. For the display network, where multiple targeting criteria could have caused the ad to show up, it returns the best matching targeting criteria as selected by Ads. This could be display_keyword, site placement, boomuserlist, user_interest, age, or gender. Otherwise its value is (not set). */
		keyword: FormControl<string | null | undefined>,

		/** The first page in users' sessions, or the landing page. */
		landingPagePath: FormControl<string | null | undefined>,

		/** The type of referrals. For manual campaign tracking, it is the value of the utm_medium campaign tracking parameter. For AdWords autotagging, it is cpc. If users came from a search engine detected by Google Analytics, it is organic. If the referrer is not a search engine, it is referral. If users came directly to the property and document.referrer is empty, its value is (none). */
		medium: FormControl<string | null | undefined>,

		/** The source of referrals. For manual campaign tracking, it is the value of the utm_source campaign tracking parameter. For AdWords autotagging, it is google. If you use neither, it is the domain of the source (e.g., document.referrer) referring the users. It may also contain a port address. If users arrived without a referrer, its value is (direct). */
		source: FormControl<string | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			activityTime: new FormControl<string | null | undefined>(undefined),
			activityType: new FormControl<ActivityActivityType | null | undefined>(undefined),
			campaign: new FormControl<string | null | undefined>(undefined),
			channelGrouping: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			keyword: new FormControl<string | null | undefined>(undefined),
			landingPagePath: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActivityActivityType { ACTIVITY_TYPE_UNSPECIFIED = 'ACTIVITY_TYPE_UNSPECIFIED', PAGEVIEW = 'PAGEVIEW', SCREENVIEW = 'SCREENVIEW', GOAL = 'GOAL', ECOMMERCE = 'ECOMMERCE', EVENT = 'EVENT' }

	export interface ScreenviewData {

		/** The application name. */
		appName?: string | null;

		/** Mobile manufacturer or branded name. Eg: "Google", "Apple" etc. */
		mobileDeviceBranding?: string | null;

		/** Mobile device model. Eg: "Pixel", "iPhone" etc. */
		mobileDeviceModel?: string | null;

		/** The name of the screen. */
		screenName?: string | null;
	}
	export interface ScreenviewDataFormProperties {

		/** The application name. */
		appName: FormControl<string | null | undefined>,

		/** Mobile manufacturer or branded name. Eg: "Google", "Apple" etc. */
		mobileDeviceBranding: FormControl<string | null | undefined>,

		/** Mobile device model. Eg: "Pixel", "iPhone" etc. */
		mobileDeviceModel: FormControl<string | null | undefined>,

		/** The name of the screen. */
		screenName: FormControl<string | null | undefined>,
	}
	export function CreateScreenviewDataFormGroup() {
		return new FormGroup<ScreenviewDataFormProperties>({
			appName: new FormControl<string | null | undefined>(undefined),
			mobileDeviceBranding: new FormControl<string | null | undefined>(undefined),
			mobileDeviceModel: new FormControl<string | null | undefined>(undefined),
			screenName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Custom dimension. */
	export interface CustomDimension {

		/** Slot number of custom dimension. */
		index?: number | null;

		/** Value of the custom dimension. Default value (i.e. empty string) indicates clearing sesion/visitor scope custom dimension value. */
		value?: string | null;
	}

	/** Custom dimension. */
	export interface CustomDimensionFormProperties {

		/** Slot number of custom dimension. */
		index: FormControl<number | null | undefined>,

		/** Value of the custom dimension. Default value (i.e. empty string) indicates clearing sesion/visitor scope custom dimension value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustomDimensionFormGroup() {
		return new FormGroup<CustomDimensionFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** E-commerce details associated with the user activity. */
	export interface EcommerceData {

		/** Action associated with this e-commerce action. */
		actionType?: EcommerceDataActionType | null;

		/** The type of this e-commerce activity. */
		ecommerceType?: EcommerceDataEcommerceType | null;

		/** Details of the products in this transaction. */
		products?: Array<ProductData>;

		/** Represents details collected when the visitor performs a transaction on the page. */
		transaction?: TransactionData;
	}

	/** E-commerce details associated with the user activity. */
	export interface EcommerceDataFormProperties {

		/** Action associated with this e-commerce action. */
		actionType: FormControl<EcommerceDataActionType | null | undefined>,

		/** The type of this e-commerce activity. */
		ecommerceType: FormControl<EcommerceDataEcommerceType | null | undefined>,
	}
	export function CreateEcommerceDataFormGroup() {
		return new FormGroup<EcommerceDataFormProperties>({
			actionType: new FormControl<EcommerceDataActionType | null | undefined>(undefined),
			ecommerceType: new FormControl<EcommerceDataEcommerceType | null | undefined>(undefined),
		});

	}

	export enum EcommerceDataActionType { UNKNOWN = 'UNKNOWN', CLICK = 'CLICK', DETAILS_VIEW = 'DETAILS_VIEW', ADD_TO_CART = 'ADD_TO_CART', REMOVE_FROM_CART = 'REMOVE_FROM_CART', CHECKOUT = 'CHECKOUT', PAYMENT = 'PAYMENT', REFUND = 'REFUND', CHECKOUT_OPTION = 'CHECKOUT_OPTION' }

	export enum EcommerceDataEcommerceType { ECOMMERCE_TYPE_UNSPECIFIED = 'ECOMMERCE_TYPE_UNSPECIFIED', CLASSIC = 'CLASSIC', ENHANCED = 'ENHANCED' }


	/** Details of the products in an e-commerce transaction. */
	export interface ProductData {

		/** The total revenue from purchased product items. */
		itemRevenue?: number | null;

		/** The product name, supplied by the e-commerce tracking application, for the purchased items. */
		productName?: string | null;

		/** Total number of this product units in the transaction. */
		productQuantity?: string | null;

		/** Unique code that represents the product. */
		productSku?: string | null;
	}

	/** Details of the products in an e-commerce transaction. */
	export interface ProductDataFormProperties {

		/** The total revenue from purchased product items. */
		itemRevenue: FormControl<number | null | undefined>,

		/** The product name, supplied by the e-commerce tracking application, for the purchased items. */
		productName: FormControl<string | null | undefined>,

		/** Total number of this product units in the transaction. */
		productQuantity: FormControl<string | null | undefined>,

		/** Unique code that represents the product. */
		productSku: FormControl<string | null | undefined>,
	}
	export function CreateProductDataFormGroup() {
		return new FormGroup<ProductDataFormProperties>({
			itemRevenue: new FormControl<number | null | undefined>(undefined),
			productName: new FormControl<string | null | undefined>(undefined),
			productQuantity: new FormControl<string | null | undefined>(undefined),
			productSku: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents details collected when the visitor performs a transaction on the page. */
	export interface TransactionData {

		/** The transaction ID, supplied by the e-commerce tracking method, for the purchase in the shopping cart. */
		transactionId?: string | null;

		/** The total sale revenue (excluding shipping and tax) of the transaction. */
		transactionRevenue?: number | null;

		/** Total cost of shipping. */
		transactionShipping?: number | null;

		/** Total tax for the transaction. */
		transactionTax?: number | null;
	}

	/** Represents details collected when the visitor performs a transaction on the page. */
	export interface TransactionDataFormProperties {

		/** The transaction ID, supplied by the e-commerce tracking method, for the purchase in the shopping cart. */
		transactionId: FormControl<string | null | undefined>,

		/** The total sale revenue (excluding shipping and tax) of the transaction. */
		transactionRevenue: FormControl<number | null | undefined>,

		/** Total cost of shipping. */
		transactionShipping: FormControl<number | null | undefined>,

		/** Total tax for the transaction. */
		transactionTax: FormControl<number | null | undefined>,
	}
	export function CreateTransactionDataFormGroup() {
		return new FormGroup<TransactionDataFormProperties>({
			transactionId: new FormControl<string | null | undefined>(undefined),
			transactionRevenue: new FormControl<number | null | undefined>(undefined),
			transactionShipping: new FormControl<number | null | undefined>(undefined),
			transactionTax: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents all the details pertaining to an event. */
	export interface EventData {

		/** Type of interaction with the object. Eg: 'play'. */
		eventAction?: string | null;

		/** The object on the page that was interacted with. Eg: 'Video'. */
		eventCategory?: string | null;

		/** Number of such events in this activity. */
		eventCount?: string | null;

		/** Label attached with the event. */
		eventLabel?: string | null;

		/** Numeric value associated with the event. */
		eventValue?: string | null;
	}

	/** Represents all the details pertaining to an event. */
	export interface EventDataFormProperties {

		/** Type of interaction with the object. Eg: 'play'. */
		eventAction: FormControl<string | null | undefined>,

		/** The object on the page that was interacted with. Eg: 'Video'. */
		eventCategory: FormControl<string | null | undefined>,

		/** Number of such events in this activity. */
		eventCount: FormControl<string | null | undefined>,

		/** Label attached with the event. */
		eventLabel: FormControl<string | null | undefined>,

		/** Numeric value associated with the event. */
		eventValue: FormControl<string | null | undefined>,
	}
	export function CreateEventDataFormGroup() {
		return new FormGroup<EventDataFormProperties>({
			eventAction: new FormControl<string | null | undefined>(undefined),
			eventCategory: new FormControl<string | null | undefined>(undefined),
			eventCount: new FormControl<string | null | undefined>(undefined),
			eventLabel: new FormControl<string | null | undefined>(undefined),
			eventValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a set of goals that were reached in an activity. */
	export interface GoalSetData {

		/** All the goals that were reached in the current activity. */
		goals?: Array<GoalData>;
	}

	/** Represents a set of goals that were reached in an activity. */
	export interface GoalSetDataFormProperties {
	}
	export function CreateGoalSetDataFormGroup() {
		return new FormGroup<GoalSetDataFormProperties>({
		});

	}


	/** Represents all the details pertaining to a goal. */
	export interface GoalData {

		/** URL of the page where this goal was completed. */
		goalCompletionLocation?: string | null;

		/** Total number of goal completions in this activity. */
		goalCompletions?: string | null;

		/** This identifies the goal as configured for the profile. */
		goalIndex?: number | null;

		/** Name of the goal. */
		goalName?: string | null;

		/** URL of the page one step prior to the goal completion. */
		goalPreviousStep1?: string | null;

		/** URL of the page two steps prior to the goal completion. */
		goalPreviousStep2?: string | null;

		/** URL of the page three steps prior to the goal completion. */
		goalPreviousStep3?: string | null;

		/** Value in this goal. */
		goalValue?: number | null;
	}

	/** Represents all the details pertaining to a goal. */
	export interface GoalDataFormProperties {

		/** URL of the page where this goal was completed. */
		goalCompletionLocation: FormControl<string | null | undefined>,

		/** Total number of goal completions in this activity. */
		goalCompletions: FormControl<string | null | undefined>,

		/** This identifies the goal as configured for the profile. */
		goalIndex: FormControl<number | null | undefined>,

		/** Name of the goal. */
		goalName: FormControl<string | null | undefined>,

		/** URL of the page one step prior to the goal completion. */
		goalPreviousStep1: FormControl<string | null | undefined>,

		/** URL of the page two steps prior to the goal completion. */
		goalPreviousStep2: FormControl<string | null | undefined>,

		/** URL of the page three steps prior to the goal completion. */
		goalPreviousStep3: FormControl<string | null | undefined>,

		/** Value in this goal. */
		goalValue: FormControl<number | null | undefined>,
	}
	export function CreateGoalDataFormGroup() {
		return new FormGroup<GoalDataFormProperties>({
			goalCompletionLocation: new FormControl<string | null | undefined>(undefined),
			goalCompletions: new FormControl<string | null | undefined>(undefined),
			goalIndex: new FormControl<number | null | undefined>(undefined),
			goalName: new FormControl<string | null | undefined>(undefined),
			goalPreviousStep1: new FormControl<string | null | undefined>(undefined),
			goalPreviousStep2: new FormControl<string | null | undefined>(undefined),
			goalPreviousStep3: new FormControl<string | null | undefined>(undefined),
			goalValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents details collected when the visitor views a page. */
	export interface PageviewData {

		/** The URL of the page that the visitor viewed. */
		pagePath?: string | null;

		/** The title of the page that the visitor viewed. */
		pageTitle?: string | null;
	}

	/** Represents details collected when the visitor views a page. */
	export interface PageviewDataFormProperties {

		/** The URL of the page that the visitor viewed. */
		pagePath: FormControl<string | null | undefined>,

		/** The title of the page that the visitor viewed. */
		pageTitle: FormControl<string | null | undefined>,
	}
	export function CreatePageviewDataFormGroup() {
		return new FormGroup<PageviewDataFormProperties>({
			pagePath: new FormControl<string | null | undefined>(undefined),
			pageTitle: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a cohort. A cohort is a group of users who share a common characteristic. For example, all users with the same acquisition date belong to the same cohort. */
	export interface Cohort {

		/** A contiguous set of days: startDate, startDate + 1 day, ..., endDate. The start and end dates are specified in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`. */
		dateRange?: DateRange;

		/** A unique name for the cohort. If not defined name will be auto-generated with values cohort_[1234...]. */
		name?: string | null;

		/** Type of the cohort. The only supported type as of now is `FIRST_VISIT_DATE`. If this field is unspecified the cohort is treated as `FIRST_VISIT_DATE` type cohort. */
		type?: CohortType | null;
	}

	/** Defines a cohort. A cohort is a group of users who share a common characteristic. For example, all users with the same acquisition date belong to the same cohort. */
	export interface CohortFormProperties {

		/** A unique name for the cohort. If not defined name will be auto-generated with values cohort_[1234...]. */
		name: FormControl<string | null | undefined>,

		/** Type of the cohort. The only supported type as of now is `FIRST_VISIT_DATE`. If this field is unspecified the cohort is treated as `FIRST_VISIT_DATE` type cohort. */
		type: FormControl<CohortType | null | undefined>,
	}
	export function CreateCohortFormGroup() {
		return new FormGroup<CohortFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CohortType | null | undefined>(undefined),
		});

	}


	/** A contiguous set of days: startDate, startDate + 1 day, ..., endDate. The start and end dates are specified in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`. */
	export interface DateRange {

		/** The end date for the query in the format `YYYY-MM-DD`. */
		endDate?: string | null;

		/** The start date for the query in the format `YYYY-MM-DD`. */
		startDate?: string | null;
	}

	/** A contiguous set of days: startDate, startDate + 1 day, ..., endDate. The start and end dates are specified in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`. */
	export interface DateRangeFormProperties {

		/** The end date for the query in the format `YYYY-MM-DD`. */
		endDate: FormControl<string | null | undefined>,

		/** The start date for the query in the format `YYYY-MM-DD`. */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateDateRangeFormGroup() {
		return new FormGroup<DateRangeFormProperties>({
			endDate: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CohortType { UNSPECIFIED_COHORT_TYPE = 'UNSPECIFIED_COHORT_TYPE', FIRST_VISIT_DATE = 'FIRST_VISIT_DATE' }


	/** Defines a cohort group. For example: "cohortGroup": { "cohorts": [{ "name": "cohort 1", "type": "FIRST_VISIT_DATE", "dateRange": { "startDate": "2015-08-01", "endDate": "2015-08-01" } },{ "name": "cohort 2" "type": "FIRST_VISIT_DATE" "dateRange": { "startDate": "2015-07-01", "endDate": "2015-07-01" } }] } */
	export interface CohortGroup {

		/** The definition for the cohort. */
		cohorts?: Array<Cohort>;

		/** Enable Life Time Value (LTV). LTV measures lifetime value for users acquired through different channels. Please see: [Cohort Analysis](https://support.google.com/analytics/answer/6074676) and [Lifetime Value](https://support.google.com/analytics/answer/6182550) If the value of lifetimeValue is false: - The metric values are similar to the values in the web interface cohort report. - The cohort definition date ranges must be aligned to the calendar week and month. i.e. while requesting `ga:cohortNthWeek` the `startDate` in the cohort definition should be a Sunday and the `endDate` should be the following Saturday, and for `ga:cohortNthMonth`, the `startDate` should be the 1st of the month and `endDate` should be the last day of the month. When the lifetimeValue is true: - The metric values will correspond to the values in the web interface LifeTime value report. - The Lifetime Value report shows you how user value (Revenue) and engagement (Appviews, Goal Completions, Sessions, and Session Duration) grow during the 90 days after a user is acquired. - The metrics are calculated as a cumulative average per user per the time increment. - The cohort definition date ranges need not be aligned to the calendar week and month boundaries. - The `viewId` must be an [app view ID](https://support.google.com/analytics/answer/2649553#WebVersusAppViews) */
		lifetimeValue?: boolean | null;
	}

	/** Defines a cohort group. For example: "cohortGroup": { "cohorts": [{ "name": "cohort 1", "type": "FIRST_VISIT_DATE", "dateRange": { "startDate": "2015-08-01", "endDate": "2015-08-01" } },{ "name": "cohort 2" "type": "FIRST_VISIT_DATE" "dateRange": { "startDate": "2015-07-01", "endDate": "2015-07-01" } }] } */
	export interface CohortGroupFormProperties {

		/** Enable Life Time Value (LTV). LTV measures lifetime value for users acquired through different channels. Please see: [Cohort Analysis](https://support.google.com/analytics/answer/6074676) and [Lifetime Value](https://support.google.com/analytics/answer/6182550) If the value of lifetimeValue is false: - The metric values are similar to the values in the web interface cohort report. - The cohort definition date ranges must be aligned to the calendar week and month. i.e. while requesting `ga:cohortNthWeek` the `startDate` in the cohort definition should be a Sunday and the `endDate` should be the following Saturday, and for `ga:cohortNthMonth`, the `startDate` should be the 1st of the month and `endDate` should be the last day of the month. When the lifetimeValue is true: - The metric values will correspond to the values in the web interface LifeTime value report. - The Lifetime Value report shows you how user value (Revenue) and engagement (Appviews, Goal Completions, Sessions, and Session Duration) grow during the 90 days after a user is acquired. - The metrics are calculated as a cumulative average per user per the time increment. - The cohort definition date ranges need not be aligned to the calendar week and month boundaries. - The `viewId` must be an [app view ID](https://support.google.com/analytics/answer/2649553#WebVersusAppViews) */
		lifetimeValue: FormControl<boolean | null | undefined>,
	}
	export function CreateCohortGroupFormGroup() {
		return new FormGroup<CohortGroupFormProperties>({
			lifetimeValue: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Column headers. */
	export interface ColumnHeader {

		/** The dimension names in the response. */
		dimensions?: Array<string>;

		/** The headers for the metrics. */
		metricHeader?: MetricHeader;
	}

	/** Column headers. */
	export interface ColumnHeaderFormProperties {
	}
	export function CreateColumnHeaderFormGroup() {
		return new FormGroup<ColumnHeaderFormProperties>({
		});

	}


	/** The headers for the metrics. */
	export interface MetricHeader {

		/** Headers for the metrics in the response. */
		metricHeaderEntries?: Array<MetricHeaderEntry>;

		/** Headers for the pivots in the response. */
		pivotHeaders?: Array<PivotHeader>;
	}

	/** The headers for the metrics. */
	export interface MetricHeaderFormProperties {
	}
	export function CreateMetricHeaderFormGroup() {
		return new FormGroup<MetricHeaderFormProperties>({
		});

	}


	/** Header for the metrics. */
	export interface MetricHeaderEntry {

		/** The name of the header. */
		name?: string | null;

		/** The type of the metric, for example `INTEGER`. */
		type?: MetricHeaderEntryType | null;
	}

	/** Header for the metrics. */
	export interface MetricHeaderEntryFormProperties {

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The type of the metric, for example `INTEGER`. */
		type: FormControl<MetricHeaderEntryType | null | undefined>,
	}
	export function CreateMetricHeaderEntryFormGroup() {
		return new FormGroup<MetricHeaderEntryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<MetricHeaderEntryType | null | undefined>(undefined),
		});

	}

	export enum MetricHeaderEntryType { METRIC_TYPE_UNSPECIFIED = 'METRIC_TYPE_UNSPECIFIED', INTEGER = 'INTEGER', FLOAT = 'FLOAT', CURRENCY = 'CURRENCY', PERCENT = 'PERCENT', TIME = 'TIME' }


	/** The headers for each of the pivot sections defined in the request. */
	export interface PivotHeader {

		/** A single pivot section header. */
		pivotHeaderEntries?: Array<PivotHeaderEntry>;

		/** The total number of groups for this pivot. */
		totalPivotGroupsCount?: number | null;
	}

	/** The headers for each of the pivot sections defined in the request. */
	export interface PivotHeaderFormProperties {

		/** The total number of groups for this pivot. */
		totalPivotGroupsCount: FormControl<number | null | undefined>,
	}
	export function CreatePivotHeaderFormGroup() {
		return new FormGroup<PivotHeaderFormProperties>({
			totalPivotGroupsCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The headers for the each of the metric column corresponding to the metrics requested in the pivots section of the response. */
	export interface PivotHeaderEntry {

		/** The name of the dimensions in the pivot response. */
		dimensionNames?: Array<string>;

		/** The values for the dimensions in the pivot. */
		dimensionValues?: Array<string>;

		/** Header for the metrics. */
		metric?: MetricHeaderEntry;
	}

	/** The headers for the each of the metric column corresponding to the metrics requested in the pivots section of the response. */
	export interface PivotHeaderEntryFormProperties {
	}
	export function CreatePivotHeaderEntryFormGroup() {
		return new FormGroup<PivotHeaderEntryFormProperties>({
		});

	}


	/** Used to return a list of metrics for a single DateRange / dimension combination */
	export interface DateRangeValues {

		/** The values of each pivot region. */
		pivotValueRegions?: Array<PivotValueRegion>;

		/** Each value corresponds to each Metric in the request. */
		values?: Array<string>;
	}

	/** Used to return a list of metrics for a single DateRange / dimension combination */
	export interface DateRangeValuesFormProperties {
	}
	export function CreateDateRangeValuesFormGroup() {
		return new FormGroup<DateRangeValuesFormProperties>({
		});

	}


	/** The metric values in the pivot region. */
	export interface PivotValueRegion {

		/** The values of the metrics in each of the pivot regions. */
		values?: Array<string>;
	}

	/** The metric values in the pivot region. */
	export interface PivotValueRegionFormProperties {
	}
	export function CreatePivotValueRegionFormGroup() {
		return new FormGroup<PivotValueRegionFormProperties>({
		});

	}


	/** [Dimensions](https://support.google.com/analytics/answer/1033861) are attributes of your data. For example, the dimension `ga:city` indicates the city, for example, "Paris" or "New York", from which a session originates. */
	export interface Dimension {

		/** If non-empty, we place dimension values into buckets after string to int64. Dimension values that are not the string representation of an integral value will be converted to zero. The bucket values have to be in increasing order. Each bucket is closed on the lower end, and open on the upper end. The "first" bucket includes all values less than the first boundary, the "last" bucket includes all values up to infinity. Dimension values that fall in a bucket get transformed to a new dimension value. For example, if one gives a list of "0, 1, 3, 4, 7", then we return the following buckets: - bucket #1: values < 0, dimension value "<0" - bucket #2: values in [0,1), dimension value "0" - bucket #3: values in [1,3), dimension value "1-2" - bucket #4: values in [3,4), dimension value "3" - bucket #5: values in [4,7), dimension value "4-6" - bucket #6: values >= 7, dimension value "7+" NOTE: If you are applying histogram mutation on any dimension, and using that dimension in sort, you will want to use the sort type `HISTOGRAM_BUCKET` for that purpose. Without that the dimension values will be sorted according to dictionary (lexicographic) order. For example the ascending dictionary order is: "<50", "1001+", "121-1000", "50-120" And the ascending `HISTOGRAM_BUCKET` order is: "<50", "50-120", "121-1000", "1001+" The client has to explicitly request `"orderType": "HISTOGRAM_BUCKET"` for a histogram-mutated dimension. */
		histogramBuckets?: Array<string>;

		/** Name of the dimension to fetch, for example `ga:browser`. */
		name?: string | null;
	}

	/** [Dimensions](https://support.google.com/analytics/answer/1033861) are attributes of your data. For example, the dimension `ga:city` indicates the city, for example, "Paris" or "New York", from which a session originates. */
	export interface DimensionFormProperties {

		/** Name of the dimension to fetch, for example `ga:browser`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dimension filter specifies the filtering options on a dimension. */
	export interface DimensionFilter {

		/** Should the match be case sensitive? Default is false. */
		caseSensitive?: boolean | null;

		/** The dimension to filter on. A DimensionFilter must contain a dimension. */
		dimensionName?: string | null;

		/** Strings or regular expression to match against. Only the first value of the list is used for comparison unless the operator is `IN_LIST`. If `IN_LIST` operator, then the entire list is used to filter the dimensions as explained in the description of the `IN_LIST` operator. */
		expressions?: Array<string>;

		/** Logical `NOT` operator. If this boolean is set to true, then the matching dimension values will be excluded in the report. The default is false. */
		not?: boolean | null;

		/** How to match the dimension to the expression. The default is REGEXP. */
		operator?: DimensionFilterOperator | null;
	}

	/** Dimension filter specifies the filtering options on a dimension. */
	export interface DimensionFilterFormProperties {

		/** Should the match be case sensitive? Default is false. */
		caseSensitive: FormControl<boolean | null | undefined>,

		/** The dimension to filter on. A DimensionFilter must contain a dimension. */
		dimensionName: FormControl<string | null | undefined>,

		/** Logical `NOT` operator. If this boolean is set to true, then the matching dimension values will be excluded in the report. The default is false. */
		not: FormControl<boolean | null | undefined>,

		/** How to match the dimension to the expression. The default is REGEXP. */
		operator: FormControl<DimensionFilterOperator | null | undefined>,
	}
	export function CreateDimensionFilterFormGroup() {
		return new FormGroup<DimensionFilterFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
			dimensionName: new FormControl<string | null | undefined>(undefined),
			not: new FormControl<boolean | null | undefined>(undefined),
			operator: new FormControl<DimensionFilterOperator | null | undefined>(undefined),
		});

	}

	export enum DimensionFilterOperator { OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED', REGEXP = 'REGEXP', BEGINS_WITH = 'BEGINS_WITH', ENDS_WITH = 'ENDS_WITH', PARTIAL = 'PARTIAL', EXACT = 'EXACT', NUMERIC_EQUAL = 'NUMERIC_EQUAL', NUMERIC_GREATER_THAN = 'NUMERIC_GREATER_THAN', NUMERIC_LESS_THAN = 'NUMERIC_LESS_THAN', IN_LIST = 'IN_LIST' }


	/** A group of dimension filters. Set the operator value to specify how the filters are logically combined. */
	export interface DimensionFilterClause {

		/** The repeated set of filters. They are logically combined based on the operator specified. */
		filters?: Array<DimensionFilter>;

		/** The operator for combining multiple dimension filters. If unspecified, it is treated as an `OR`. */
		operator?: DimensionFilterClauseOperator | null;
	}

	/** A group of dimension filters. Set the operator value to specify how the filters are logically combined. */
	export interface DimensionFilterClauseFormProperties {

		/** The operator for combining multiple dimension filters. If unspecified, it is treated as an `OR`. */
		operator: FormControl<DimensionFilterClauseOperator | null | undefined>,
	}
	export function CreateDimensionFilterClauseFormGroup() {
		return new FormGroup<DimensionFilterClauseFormProperties>({
			operator: new FormControl<DimensionFilterClauseOperator | null | undefined>(undefined),
		});

	}

	export enum DimensionFilterClauseOperator { OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED', OR = 'OR', AND = 'AND' }


	/** Dynamic segment definition for defining the segment within the request. A segment can select users, sessions or both. */
	export interface DynamicSegment {

		/** The name of the dynamic segment. */
		name?: string | null;

		/** SegmentDefinition defines the segment to be a set of SegmentFilters which are combined together with a logical `AND` operation. */
		sessionSegment?: SegmentDefinition;

		/** SegmentDefinition defines the segment to be a set of SegmentFilters which are combined together with a logical `AND` operation. */
		userSegment?: SegmentDefinition;
	}

	/** Dynamic segment definition for defining the segment within the request. A segment can select users, sessions or both. */
	export interface DynamicSegmentFormProperties {

		/** The name of the dynamic segment. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDynamicSegmentFormGroup() {
		return new FormGroup<DynamicSegmentFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SegmentDefinition defines the segment to be a set of SegmentFilters which are combined together with a logical `AND` operation. */
	export interface SegmentDefinition {

		/** A segment is defined by a set of segment filters which are combined together with a logical `AND` operation. */
		segmentFilters?: Array<SegmentFilter>;
	}

	/** SegmentDefinition defines the segment to be a set of SegmentFilters which are combined together with a logical `AND` operation. */
	export interface SegmentDefinitionFormProperties {
	}
	export function CreateSegmentDefinitionFormGroup() {
		return new FormGroup<SegmentDefinitionFormProperties>({
		});

	}


	/** SegmentFilter defines the segment to be either a simple or a sequence segment. A simple segment condition contains dimension and metric conditions to select the sessions or users. A sequence segment condition can be used to select users or sessions based on sequential conditions. */
	export interface SegmentFilter {

		/** If true, match the complement of simple or sequence segment. For example, to match all visits not from "New York", we can define the segment as follows: "sessionSegment": { "segmentFilters": [{ "simpleSegment" :{ "orFiltersForSegment": [{ "segmentFilterClauses":[{ "dimensionFilter": { "dimensionName": "ga:city", "expressions": ["New York"] } }] }] }, "not": "True" }] }, */
		not?: boolean | null;

		/** Sequence conditions consist of one or more steps, where each step is defined by one or more dimension/metric conditions. Multiple steps can be combined with special sequence operators. */
		sequenceSegment?: SequenceSegment;

		/** A Simple segment conditions consist of one or more dimension/metric conditions that can be combined. */
		simpleSegment?: SimpleSegment;
	}

	/** SegmentFilter defines the segment to be either a simple or a sequence segment. A simple segment condition contains dimension and metric conditions to select the sessions or users. A sequence segment condition can be used to select users or sessions based on sequential conditions. */
	export interface SegmentFilterFormProperties {

		/** If true, match the complement of simple or sequence segment. For example, to match all visits not from "New York", we can define the segment as follows: "sessionSegment": { "segmentFilters": [{ "simpleSegment" :{ "orFiltersForSegment": [{ "segmentFilterClauses":[{ "dimensionFilter": { "dimensionName": "ga:city", "expressions": ["New York"] } }] }] }, "not": "True" }] }, */
		not: FormControl<boolean | null | undefined>,
	}
	export function CreateSegmentFilterFormGroup() {
		return new FormGroup<SegmentFilterFormProperties>({
			not: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Sequence conditions consist of one or more steps, where each step is defined by one or more dimension/metric conditions. Multiple steps can be combined with special sequence operators. */
	export interface SequenceSegment {

		/** If set, first step condition must match the first hit of the visitor (in the date range). */
		firstStepShouldMatchFirstHit?: boolean | null;

		/** The list of steps in the sequence. */
		segmentSequenceSteps?: Array<SegmentSequenceStep>;
	}

	/** Sequence conditions consist of one or more steps, where each step is defined by one or more dimension/metric conditions. Multiple steps can be combined with special sequence operators. */
	export interface SequenceSegmentFormProperties {

		/** If set, first step condition must match the first hit of the visitor (in the date range). */
		firstStepShouldMatchFirstHit: FormControl<boolean | null | undefined>,
	}
	export function CreateSequenceSegmentFormGroup() {
		return new FormGroup<SequenceSegmentFormProperties>({
			firstStepShouldMatchFirstHit: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A segment sequence definition. */
	export interface SegmentSequenceStep {

		/** Specifies if the step immediately precedes or can be any time before the next step. */
		matchType?: SegmentSequenceStepMatchType | null;

		/** A sequence is specified with a list of Or grouped filters which are combined with `AND` operator. */
		orFiltersForSegment?: Array<OrFiltersForSegment>;
	}

	/** A segment sequence definition. */
	export interface SegmentSequenceStepFormProperties {

		/** Specifies if the step immediately precedes or can be any time before the next step. */
		matchType: FormControl<SegmentSequenceStepMatchType | null | undefined>,
	}
	export function CreateSegmentSequenceStepFormGroup() {
		return new FormGroup<SegmentSequenceStepFormProperties>({
			matchType: new FormControl<SegmentSequenceStepMatchType | null | undefined>(undefined),
		});

	}

	export enum SegmentSequenceStepMatchType { UNSPECIFIED_MATCH_TYPE = 'UNSPECIFIED_MATCH_TYPE', PRECEDES = 'PRECEDES', IMMEDIATELY_PRECEDES = 'IMMEDIATELY_PRECEDES' }


	/** A list of segment filters in the `OR` group are combined with the logical OR operator. */
	export interface OrFiltersForSegment {

		/** List of segment filters to be combined with a `OR` operator. */
		segmentFilterClauses?: Array<SegmentFilterClause>;
	}

	/** A list of segment filters in the `OR` group are combined with the logical OR operator. */
	export interface OrFiltersForSegmentFormProperties {
	}
	export function CreateOrFiltersForSegmentFormGroup() {
		return new FormGroup<OrFiltersForSegmentFormProperties>({
		});

	}


	/** Filter Clause to be used in a segment definition, can be wither a metric or a dimension filter. */
	export interface SegmentFilterClause {

		/** Dimension filter specifies the filtering options on a dimension. */
		dimensionFilter?: SegmentDimensionFilter;

		/** Metric filter to be used in a segment filter clause. */
		metricFilter?: SegmentMetricFilter;

		/** Matches the complement (`!`) of the filter. */
		not?: boolean | null;
	}

	/** Filter Clause to be used in a segment definition, can be wither a metric or a dimension filter. */
	export interface SegmentFilterClauseFormProperties {

		/** Matches the complement (`!`) of the filter. */
		not: FormControl<boolean | null | undefined>,
	}
	export function CreateSegmentFilterClauseFormGroup() {
		return new FormGroup<SegmentFilterClauseFormProperties>({
			not: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Dimension filter specifies the filtering options on a dimension. */
	export interface SegmentDimensionFilter {

		/** Should the match be case sensitive, ignored for `IN_LIST` operator. */
		caseSensitive?: boolean | null;

		/** Name of the dimension for which the filter is being applied. */
		dimensionName?: string | null;

		/** The list of expressions, only the first element is used for all operators */
		expressions?: Array<string>;

		/** Maximum comparison values for `BETWEEN` match type. */
		maxComparisonValue?: string | null;

		/** Minimum comparison values for `BETWEEN` match type. */
		minComparisonValue?: string | null;

		/** The operator to use to match the dimension with the expressions. */
		operator?: SegmentDimensionFilterOperator | null;
	}

	/** Dimension filter specifies the filtering options on a dimension. */
	export interface SegmentDimensionFilterFormProperties {

		/** Should the match be case sensitive, ignored for `IN_LIST` operator. */
		caseSensitive: FormControl<boolean | null | undefined>,

		/** Name of the dimension for which the filter is being applied. */
		dimensionName: FormControl<string | null | undefined>,

		/** Maximum comparison values for `BETWEEN` match type. */
		maxComparisonValue: FormControl<string | null | undefined>,

		/** Minimum comparison values for `BETWEEN` match type. */
		minComparisonValue: FormControl<string | null | undefined>,

		/** The operator to use to match the dimension with the expressions. */
		operator: FormControl<SegmentDimensionFilterOperator | null | undefined>,
	}
	export function CreateSegmentDimensionFilterFormGroup() {
		return new FormGroup<SegmentDimensionFilterFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
			dimensionName: new FormControl<string | null | undefined>(undefined),
			maxComparisonValue: new FormControl<string | null | undefined>(undefined),
			minComparisonValue: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<SegmentDimensionFilterOperator | null | undefined>(undefined),
		});

	}

	export enum SegmentDimensionFilterOperator { OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED', REGEXP = 'REGEXP', BEGINS_WITH = 'BEGINS_WITH', ENDS_WITH = 'ENDS_WITH', PARTIAL = 'PARTIAL', EXACT = 'EXACT', IN_LIST = 'IN_LIST', NUMERIC_LESS_THAN = 'NUMERIC_LESS_THAN', NUMERIC_GREATER_THAN = 'NUMERIC_GREATER_THAN', NUMERIC_BETWEEN = 'NUMERIC_BETWEEN' }


	/** Metric filter to be used in a segment filter clause. */
	export interface SegmentMetricFilter {

		/** The value to compare against. If the operator is `BETWEEN`, this value is treated as minimum comparison value. */
		comparisonValue?: string | null;

		/** Max comparison value is only used for `BETWEEN` operator. */
		maxComparisonValue?: string | null;

		/** The metric that will be filtered on. A `metricFilter` must contain a metric name. */
		metricName?: string | null;

		/** Specifies is the operation to perform to compare the metric. The default is `EQUAL`. */
		operator?: SegmentMetricFilterOperator | null;

		/** Scope for a metric defines the level at which that metric is defined. The specified metric scope must be equal to or greater than its primary scope as defined in the data model. The primary scope is defined by if the segment is selecting users or sessions. */
		scope?: SegmentMetricFilterScope | null;
	}

	/** Metric filter to be used in a segment filter clause. */
	export interface SegmentMetricFilterFormProperties {

		/** The value to compare against. If the operator is `BETWEEN`, this value is treated as minimum comparison value. */
		comparisonValue: FormControl<string | null | undefined>,

		/** Max comparison value is only used for `BETWEEN` operator. */
		maxComparisonValue: FormControl<string | null | undefined>,

		/** The metric that will be filtered on. A `metricFilter` must contain a metric name. */
		metricName: FormControl<string | null | undefined>,

		/** Specifies is the operation to perform to compare the metric. The default is `EQUAL`. */
		operator: FormControl<SegmentMetricFilterOperator | null | undefined>,

		/** Scope for a metric defines the level at which that metric is defined. The specified metric scope must be equal to or greater than its primary scope as defined in the data model. The primary scope is defined by if the segment is selecting users or sessions. */
		scope: FormControl<SegmentMetricFilterScope | null | undefined>,
	}
	export function CreateSegmentMetricFilterFormGroup() {
		return new FormGroup<SegmentMetricFilterFormProperties>({
			comparisonValue: new FormControl<string | null | undefined>(undefined),
			maxComparisonValue: new FormControl<string | null | undefined>(undefined),
			metricName: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<SegmentMetricFilterOperator | null | undefined>(undefined),
			scope: new FormControl<SegmentMetricFilterScope | null | undefined>(undefined),
		});

	}

	export enum SegmentMetricFilterOperator { UNSPECIFIED_OPERATOR = 'UNSPECIFIED_OPERATOR', LESS_THAN = 'LESS_THAN', GREATER_THAN = 'GREATER_THAN', EQUAL = 'EQUAL', BETWEEN = 'BETWEEN' }

	export enum SegmentMetricFilterScope { UNSPECIFIED_SCOPE = 'UNSPECIFIED_SCOPE', PRODUCT = 'PRODUCT', HIT = 'HIT', SESSION = 'SESSION', USER = 'USER' }


	/** A Simple segment conditions consist of one or more dimension/metric conditions that can be combined. */
	export interface SimpleSegment {

		/** A list of segment filters groups which are combined with logical `AND` operator. */
		orFiltersForSegment?: Array<OrFiltersForSegment>;
	}

	/** A Simple segment conditions consist of one or more dimension/metric conditions that can be combined. */
	export interface SimpleSegmentFormProperties {
	}
	export function CreateSimpleSegmentFormGroup() {
		return new FormGroup<SimpleSegmentFormProperties>({
		});

	}


	/** The batch request containing multiple report request. */
	export interface GetReportsRequest {

		/** Requests, each request will have a separate response. There can be a maximum of 5 requests. All requests should have the same `dateRanges`, `viewId`, `segments`, `samplingLevel`, and `cohortGroup`. */
		reportRequests?: Array<ReportRequest>;

		/** Enables [resource based quotas](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4), (defaults to `False`). If this field is set to `True` the per view (profile) quotas are governed by the computational cost of the request. Note that using cost based quotas will higher enable sampling rates. (10 Million for `SMALL`, 100M for `LARGE`. See the [limits and quotas documentation](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4) for details. */
		useResourceQuotas?: boolean | null;
	}

	/** The batch request containing multiple report request. */
	export interface GetReportsRequestFormProperties {

		/** Enables [resource based quotas](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4), (defaults to `False`). If this field is set to `True` the per view (profile) quotas are governed by the computational cost of the request. Note that using cost based quotas will higher enable sampling rates. (10 Million for `SMALL`, 100M for `LARGE`. See the [limits and quotas documentation](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4) for details. */
		useResourceQuotas: FormControl<boolean | null | undefined>,
	}
	export function CreateGetReportsRequestFormGroup() {
		return new FormGroup<GetReportsRequestFormProperties>({
			useResourceQuotas: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The main request class which specifies the Reporting API request. */
	export interface ReportRequest {

		/** Defines a cohort group. For example: "cohortGroup": { "cohorts": [{ "name": "cohort 1", "type": "FIRST_VISIT_DATE", "dateRange": { "startDate": "2015-08-01", "endDate": "2015-08-01" } },{ "name": "cohort 2" "type": "FIRST_VISIT_DATE" "dateRange": { "startDate": "2015-07-01", "endDate": "2015-07-01" } }] } */
		cohortGroup?: CohortGroup;

		/** Date ranges in the request. The request can have a maximum of 2 date ranges. The response will contain a set of metric values for each combination of the dimensions for each date range in the request. So, if there are two date ranges, there will be two set of metric values, one for the original date range and one for the second date range. The `reportRequest.dateRanges` field should not be specified for cohorts or Lifetime value requests. If a date range is not provided, the default date range is (startDate: current date - 7 days, endDate: current date - 1 day). Every [ReportRequest](#ReportRequest) within a `batchGet` method must contain the same `dateRanges` definition. */
		dateRanges?: Array<DateRange>;

		/** The dimension filter clauses for filtering Dimension Values. They are logically combined with the `AND` operator. Note that filtering occurs before any dimensions are aggregated, so that the returned metrics represent the total for only the relevant dimensions. */
		dimensionFilterClauses?: Array<DimensionFilterClause>;

		/** The dimensions requested. Requests can have a total of 9 dimensions. */
		dimensions?: Array<Dimension>;

		/** Dimension or metric filters that restrict the data returned for your request. To use the `filtersExpression`, supply a dimension or metric on which to filter, followed by the filter expression. For example, the following expression selects `ga:browser` dimension which starts with Firefox; `ga:browser=~^Firefox`. For more information on dimensions and metric filters, see [Filters reference](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#filters). */
		filtersExpression?: string | null;

		/** If set to true, hides the total of all metrics for all the matching rows, for every date range. The default false and will return the totals. */
		hideTotals?: boolean | null;

		/** If set to true, hides the minimum and maximum across all matching rows. The default is false and the value ranges are returned. */
		hideValueRanges?: boolean | null;

		/** If set to false, the response does not include rows if all the retrieved metrics are equal to zero. The default is false which will exclude these rows. */
		includeEmptyRows?: boolean | null;

		/** The metric filter clauses. They are logically combined with the `AND` operator. Metric filters look at only the first date range and not the comparing date range. Note that filtering on metrics occurs after the metrics are aggregated. */
		metricFilterClauses?: Array<MetricFilterClause>;

		/** The metrics requested. Requests must specify at least one metric. Requests can have a total of 10 metrics. */
		metrics?: Array<Metric>;

		/** Sort order on output rows. To compare two rows, the elements of the following are applied in order until a difference is found. All date ranges in the output get the same row order. */
		orderBys?: Array<OrderBy>;

		/** Page size is for paging and specifies the maximum number of returned rows. Page size should be >= 0. A query returns the default of 1,000 rows. The Analytics Core Reporting API returns a maximum of 100,000 rows per request, no matter how many you ask for. It can also return fewer rows than requested, if there aren't as many dimension segments as you expect. For instance, there are fewer than 300 possible values for `ga:country`, so when segmenting only by country, you can't get more than 300 rows, even if you set `pageSize` to a higher value. */
		pageSize?: number | null;

		/** A continuation token to get the next page of the results. Adding this to the request will return the rows after the pageToken. The pageToken should be the value returned in the nextPageToken parameter in the response to the GetReports request. */
		pageToken?: string | null;

		/** The pivot definitions. Requests can have a maximum of 2 pivots. */
		pivots?: Array<Pivot>;

		/** The desired report [sample](https://support.google.com/analytics/answer/2637192) size. If the the `samplingLevel` field is unspecified the `DEFAULT` sampling level is used. Every [ReportRequest](#ReportRequest) within a `batchGet` method must contain the same `samplingLevel` definition. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details. */
		samplingLevel?: ReportRequestSamplingLevel | null;

		/** Segment the data returned for the request. A segment definition helps look at a subset of the segment request. A request can contain up to four segments. Every [ReportRequest](#ReportRequest) within a `batchGet` method must contain the same `segments` definition. Requests with segments must have the `ga:segment` dimension. */
		segments?: Array<Segment>;

		/** The Analytics [view ID](https://support.google.com/analytics/answer/1009618) from which to retrieve data. Every [ReportRequest](#ReportRequest) within a `batchGet` method must contain the same `viewId`. */
		viewId?: string | null;
	}

	/** The main request class which specifies the Reporting API request. */
	export interface ReportRequestFormProperties {

		/** Dimension or metric filters that restrict the data returned for your request. To use the `filtersExpression`, supply a dimension or metric on which to filter, followed by the filter expression. For example, the following expression selects `ga:browser` dimension which starts with Firefox; `ga:browser=~^Firefox`. For more information on dimensions and metric filters, see [Filters reference](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#filters). */
		filtersExpression: FormControl<string | null | undefined>,

		/** If set to true, hides the total of all metrics for all the matching rows, for every date range. The default false and will return the totals. */
		hideTotals: FormControl<boolean | null | undefined>,

		/** If set to true, hides the minimum and maximum across all matching rows. The default is false and the value ranges are returned. */
		hideValueRanges: FormControl<boolean | null | undefined>,

		/** If set to false, the response does not include rows if all the retrieved metrics are equal to zero. The default is false which will exclude these rows. */
		includeEmptyRows: FormControl<boolean | null | undefined>,

		/** Page size is for paging and specifies the maximum number of returned rows. Page size should be >= 0. A query returns the default of 1,000 rows. The Analytics Core Reporting API returns a maximum of 100,000 rows per request, no matter how many you ask for. It can also return fewer rows than requested, if there aren't as many dimension segments as you expect. For instance, there are fewer than 300 possible values for `ga:country`, so when segmenting only by country, you can't get more than 300 rows, even if you set `pageSize` to a higher value. */
		pageSize: FormControl<number | null | undefined>,

		/** A continuation token to get the next page of the results. Adding this to the request will return the rows after the pageToken. The pageToken should be the value returned in the nextPageToken parameter in the response to the GetReports request. */
		pageToken: FormControl<string | null | undefined>,

		/** The desired report [sample](https://support.google.com/analytics/answer/2637192) size. If the the `samplingLevel` field is unspecified the `DEFAULT` sampling level is used. Every [ReportRequest](#ReportRequest) within a `batchGet` method must contain the same `samplingLevel` definition. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details. */
		samplingLevel: FormControl<ReportRequestSamplingLevel | null | undefined>,

		/** The Analytics [view ID](https://support.google.com/analytics/answer/1009618) from which to retrieve data. Every [ReportRequest](#ReportRequest) within a `batchGet` method must contain the same `viewId`. */
		viewId: FormControl<string | null | undefined>,
	}
	export function CreateReportRequestFormGroup() {
		return new FormGroup<ReportRequestFormProperties>({
			filtersExpression: new FormControl<string | null | undefined>(undefined),
			hideTotals: new FormControl<boolean | null | undefined>(undefined),
			hideValueRanges: new FormControl<boolean | null | undefined>(undefined),
			includeEmptyRows: new FormControl<boolean | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			samplingLevel: new FormControl<ReportRequestSamplingLevel | null | undefined>(undefined),
			viewId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a group of metric filters. Set the operator value to specify how the filters are logically combined. */
	export interface MetricFilterClause {

		/** The repeated set of filters. They are logically combined based on the operator specified. */
		filters?: Array<MetricFilter>;

		/** The operator for combining multiple metric filters. If unspecified, it is treated as an `OR`. */
		operator?: DimensionFilterClauseOperator | null;
	}

	/** Represents a group of metric filters. Set the operator value to specify how the filters are logically combined. */
	export interface MetricFilterClauseFormProperties {

		/** The operator for combining multiple metric filters. If unspecified, it is treated as an `OR`. */
		operator: FormControl<DimensionFilterClauseOperator | null | undefined>,
	}
	export function CreateMetricFilterClauseFormGroup() {
		return new FormGroup<MetricFilterClauseFormProperties>({
			operator: new FormControl<DimensionFilterClauseOperator | null | undefined>(undefined),
		});

	}


	/** MetricFilter specifies the filter on a metric. */
	export interface MetricFilter {

		/** The value to compare against. */
		comparisonValue?: string | null;

		/** The metric that will be filtered on. A metricFilter must contain a metric name. A metric name can be an alias earlier defined as a metric or it can also be a metric expression. */
		metricName?: string | null;

		/** Logical `NOT` operator. If this boolean is set to true, then the matching metric values will be excluded in the report. The default is false. */
		not?: boolean | null;

		/** Is the metric `EQUAL`, `LESS_THAN` or `GREATER_THAN` the comparisonValue, the default is `EQUAL`. If the operator is `IS_MISSING`, checks if the metric is missing and would ignore the comparisonValue. */
		operator?: MetricFilterOperator | null;
	}

	/** MetricFilter specifies the filter on a metric. */
	export interface MetricFilterFormProperties {

		/** The value to compare against. */
		comparisonValue: FormControl<string | null | undefined>,

		/** The metric that will be filtered on. A metricFilter must contain a metric name. A metric name can be an alias earlier defined as a metric or it can also be a metric expression. */
		metricName: FormControl<string | null | undefined>,

		/** Logical `NOT` operator. If this boolean is set to true, then the matching metric values will be excluded in the report. The default is false. */
		not: FormControl<boolean | null | undefined>,

		/** Is the metric `EQUAL`, `LESS_THAN` or `GREATER_THAN` the comparisonValue, the default is `EQUAL`. If the operator is `IS_MISSING`, checks if the metric is missing and would ignore the comparisonValue. */
		operator: FormControl<MetricFilterOperator | null | undefined>,
	}
	export function CreateMetricFilterFormGroup() {
		return new FormGroup<MetricFilterFormProperties>({
			comparisonValue: new FormControl<string | null | undefined>(undefined),
			metricName: new FormControl<string | null | undefined>(undefined),
			not: new FormControl<boolean | null | undefined>(undefined),
			operator: new FormControl<MetricFilterOperator | null | undefined>(undefined),
		});

	}

	export enum MetricFilterOperator { OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED', EQUAL = 'EQUAL', LESS_THAN = 'LESS_THAN', GREATER_THAN = 'GREATER_THAN', IS_MISSING = 'IS_MISSING' }


	/** [Metrics](https://support.google.com/analytics/answer/1033861) are the quantitative measurements. For example, the metric `ga:users` indicates the total number of users for the requested time period. */
	export interface Metric {

		/** An alias for the metric expression is an alternate name for the expression. The alias can be used for filtering and sorting. This field is optional and is useful if the expression is not a single metric but a complex expression which cannot be used in filtering and sorting. The alias is also used in the response column header. */
		alias?: string | null;

		/** A metric expression in the request. An expression is constructed from one or more metrics and numbers. Accepted operators include: Plus (+), Minus (-), Negation (Unary -), Divided by (/), Multiplied by (*), Parenthesis, Positive cardinal numbers (0-9), can include decimals and is limited to 1024 characters. Example `ga:totalRefunds/ga:users`, in most cases the metric expression is just a single metric name like `ga:users`. Adding mixed `MetricType` (E.g., `CURRENCY` + `PERCENTAGE`) metrics will result in unexpected results. */
		expression?: string | null;

		/** Specifies how the metric expression should be formatted, for example `INTEGER`. */
		formattingType?: MetricHeaderEntryType | null;
	}

	/** [Metrics](https://support.google.com/analytics/answer/1033861) are the quantitative measurements. For example, the metric `ga:users` indicates the total number of users for the requested time period. */
	export interface MetricFormProperties {

		/** An alias for the metric expression is an alternate name for the expression. The alias can be used for filtering and sorting. This field is optional and is useful if the expression is not a single metric but a complex expression which cannot be used in filtering and sorting. The alias is also used in the response column header. */
		alias: FormControl<string | null | undefined>,

		/** A metric expression in the request. An expression is constructed from one or more metrics and numbers. Accepted operators include: Plus (+), Minus (-), Negation (Unary -), Divided by (/), Multiplied by (*), Parenthesis, Positive cardinal numbers (0-9), can include decimals and is limited to 1024 characters. Example `ga:totalRefunds/ga:users`, in most cases the metric expression is just a single metric name like `ga:users`. Adding mixed `MetricType` (E.g., `CURRENCY` + `PERCENTAGE`) metrics will result in unexpected results. */
		expression: FormControl<string | null | undefined>,

		/** Specifies how the metric expression should be formatted, for example `INTEGER`. */
		formattingType: FormControl<MetricHeaderEntryType | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			formattingType: new FormControl<MetricHeaderEntryType | null | undefined>(undefined),
		});

	}


	/** Specifies the sorting options. */
	export interface OrderBy {

		/** The field which to sort by. The default sort order is ascending. Example: `ga:browser`. Note, that you can only specify one field for sort here. For example, `ga:browser, ga:city` is not valid. */
		fieldName?: string | null;

		/** The order type. The default orderType is `VALUE`. */
		orderType?: OrderByOrderType | null;

		/** The sorting order for the field. */
		sortOrder?: OrderBySortOrder | null;
	}

	/** Specifies the sorting options. */
	export interface OrderByFormProperties {

		/** The field which to sort by. The default sort order is ascending. Example: `ga:browser`. Note, that you can only specify one field for sort here. For example, `ga:browser, ga:city` is not valid. */
		fieldName: FormControl<string | null | undefined>,

		/** The order type. The default orderType is `VALUE`. */
		orderType: FormControl<OrderByOrderType | null | undefined>,

		/** The sorting order for the field. */
		sortOrder: FormControl<OrderBySortOrder | null | undefined>,
	}
	export function CreateOrderByFormGroup() {
		return new FormGroup<OrderByFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined),
			orderType: new FormControl<OrderByOrderType | null | undefined>(undefined),
			sortOrder: new FormControl<OrderBySortOrder | null | undefined>(undefined),
		});

	}

	export enum OrderByOrderType { ORDER_TYPE_UNSPECIFIED = 'ORDER_TYPE_UNSPECIFIED', VALUE = 'VALUE', DELTA = 'DELTA', SMART = 'SMART', HISTOGRAM_BUCKET = 'HISTOGRAM_BUCKET', DIMENSION_AS_INTEGER = 'DIMENSION_AS_INTEGER' }

	export enum OrderBySortOrder { SORT_ORDER_UNSPECIFIED = 'SORT_ORDER_UNSPECIFIED', ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }


	/** The Pivot describes the pivot section in the request. The Pivot helps rearrange the information in the table for certain reports by pivoting your data on a second dimension. */
	export interface Pivot {

		/** DimensionFilterClauses are logically combined with an `AND` operator: only data that is included by all these DimensionFilterClauses contributes to the values in this pivot region. Dimension filters can be used to restrict the columns shown in the pivot region. For example if you have `ga:browser` as the requested dimension in the pivot region, and you specify key filters to restrict `ga:browser` to only "IE" or "Firefox", then only those two browsers would show up as columns. */
		dimensionFilterClauses?: Array<DimensionFilterClause>;

		/** A list of dimensions to show as pivot columns. A Pivot can have a maximum of 4 dimensions. Pivot dimensions are part of the restriction on the total number of dimensions allowed in the request. */
		dimensions?: Array<Dimension>;

		/** Specifies the maximum number of groups to return. The default value is 10, also the maximum value is 1,000. */
		maxGroupCount?: number | null;

		/** The pivot metrics. Pivot metrics are part of the restriction on total number of metrics allowed in the request. */
		metrics?: Array<Metric>;

		/** If k metrics were requested, then the response will contain some data-dependent multiple of k columns in the report. E.g., if you pivoted on the dimension `ga:browser` then you'd get k columns for "Firefox", k columns for "IE", k columns for "Chrome", etc. The ordering of the groups of columns is determined by descending order of "total" for the first of the k values. Ties are broken by lexicographic ordering of the first pivot dimension, then lexicographic ordering of the second pivot dimension, and so on. E.g., if the totals for the first value for Firefox, IE, and Chrome were 8, 2, 8, respectively, the order of columns would be Chrome, Firefox, IE. The following let you choose which of the groups of k columns are included in the response. */
		startGroup?: number | null;
	}

	/** The Pivot describes the pivot section in the request. The Pivot helps rearrange the information in the table for certain reports by pivoting your data on a second dimension. */
	export interface PivotFormProperties {

		/** Specifies the maximum number of groups to return. The default value is 10, also the maximum value is 1,000. */
		maxGroupCount: FormControl<number | null | undefined>,

		/** If k metrics were requested, then the response will contain some data-dependent multiple of k columns in the report. E.g., if you pivoted on the dimension `ga:browser` then you'd get k columns for "Firefox", k columns for "IE", k columns for "Chrome", etc. The ordering of the groups of columns is determined by descending order of "total" for the first of the k values. Ties are broken by lexicographic ordering of the first pivot dimension, then lexicographic ordering of the second pivot dimension, and so on. E.g., if the totals for the first value for Firefox, IE, and Chrome were 8, 2, 8, respectively, the order of columns would be Chrome, Firefox, IE. The following let you choose which of the groups of k columns are included in the response. */
		startGroup: FormControl<number | null | undefined>,
	}
	export function CreatePivotFormGroup() {
		return new FormGroup<PivotFormProperties>({
			maxGroupCount: new FormControl<number | null | undefined>(undefined),
			startGroup: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ReportRequestSamplingLevel { SAMPLING_UNSPECIFIED = 'SAMPLING_UNSPECIFIED', DEFAULT = 'DEFAULT', SMALL = 'SMALL', LARGE = 'LARGE' }


	/** The segment definition, if the report needs to be segmented. A Segment is a subset of the Analytics data. For example, of the entire set of users, one Segment might be users from a particular country or city. */
	export interface Segment {

		/** Dynamic segment definition for defining the segment within the request. A segment can select users, sessions or both. */
		dynamicSegment?: DynamicSegment;

		/** The segment ID of a built-in or custom segment, for example `gaid::-3`. */
		segmentId?: string | null;
	}

	/** The segment definition, if the report needs to be segmented. A Segment is a subset of the Analytics data. For example, of the entire set of users, one Segment might be users from a particular country or city. */
	export interface SegmentFormProperties {

		/** The segment ID of a built-in or custom segment, for example `gaid::-3`. */
		segmentId: FormControl<string | null | undefined>,
	}
	export function CreateSegmentFormGroup() {
		return new FormGroup<SegmentFormProperties>({
			segmentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The main response class which holds the reports from the Reporting API `batchGet` call. */
	export interface GetReportsResponse {

		/** The amount of resource quota tokens deducted to execute the query. Includes all responses. */
		queryCost?: number | null;

		/** Responses corresponding to each of the request. */
		reports?: Array<Report>;

		/** The resource quota tokens remaining for the property after the request is completed. */
		resourceQuotasRemaining?: ResourceQuotasRemaining;
	}

	/** The main response class which holds the reports from the Reporting API `batchGet` call. */
	export interface GetReportsResponseFormProperties {

		/** The amount of resource quota tokens deducted to execute the query. Includes all responses. */
		queryCost: FormControl<number | null | undefined>,
	}
	export function CreateGetReportsResponseFormGroup() {
		return new FormGroup<GetReportsResponseFormProperties>({
			queryCost: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The data response corresponding to the request. */
	export interface Report {

		/** Column headers. */
		columnHeader?: ColumnHeader;

		/** The data part of the report. */
		data?: ReportData;

		/** Page token to retrieve the next page of results in the list. */
		nextPageToken?: string | null;
	}

	/** The data response corresponding to the request. */
	export interface ReportFormProperties {

		/** Page token to retrieve the next page of results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateReportFormGroup() {
		return new FormGroup<ReportFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data part of the report. */
	export interface ReportData {

		/** The last time the data in the report was refreshed. All the hits received before this timestamp are included in the calculation of the report. */
		dataLastRefreshed?: string | null;

		/** If empty reason is specified, the report is empty for this reason. */
		emptyReason?: string | null;

		/** Indicates if response to this request is golden or not. Data is golden when the exact same request will not produce any new results if asked at a later point in time. */
		isDataGolden?: boolean | null;

		/** Minimum and maximum values seen over all matching rows. These are both empty when `hideValueRanges` in the request is false, or when rowCount is zero. */
		maximums?: Array<DateRangeValues>;

		/** Minimum and maximum values seen over all matching rows. These are both empty when `hideValueRanges` in the request is false, or when rowCount is zero. */
		minimums?: Array<DateRangeValues>;

		/** Total number of matching rows for this query. */
		rowCount?: number | null;

		/** There's one ReportRow for every unique combination of dimensions. */
		rows?: Array<ReportRow>;

		/** If the results are [sampled](https://support.google.com/analytics/answer/2637192), this returns the total number of samples read, one entry per date range. If the results are not sampled this field will not be defined. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details. */
		samplesReadCounts?: Array<string>;

		/** If the results are [sampled](https://support.google.com/analytics/answer/2637192), this returns the total number of samples present, one entry per date range. If the results are not sampled this field will not be defined. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details. */
		samplingSpaceSizes?: Array<string>;

		/** For each requested date range, for the set of all rows that match the query, every requested value format gets a total. The total for a value format is computed by first totaling the metrics mentioned in the value format and then evaluating the value format as a scalar expression. E.g., The "totals" for `3 / (ga:sessions + 2)` we compute `3 / ((sum of all relevant ga:sessions) + 2)`. Totals are computed before pagination. */
		totals?: Array<DateRangeValues>;
	}

	/** The data part of the report. */
	export interface ReportDataFormProperties {

		/** The last time the data in the report was refreshed. All the hits received before this timestamp are included in the calculation of the report. */
		dataLastRefreshed: FormControl<string | null | undefined>,

		/** If empty reason is specified, the report is empty for this reason. */
		emptyReason: FormControl<string | null | undefined>,

		/** Indicates if response to this request is golden or not. Data is golden when the exact same request will not produce any new results if asked at a later point in time. */
		isDataGolden: FormControl<boolean | null | undefined>,

		/** Total number of matching rows for this query. */
		rowCount: FormControl<number | null | undefined>,
	}
	export function CreateReportDataFormGroup() {
		return new FormGroup<ReportDataFormProperties>({
			dataLastRefreshed: new FormControl<string | null | undefined>(undefined),
			emptyReason: new FormControl<string | null | undefined>(undefined),
			isDataGolden: new FormControl<boolean | null | undefined>(undefined),
			rowCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A row in the report. */
	export interface ReportRow {

		/** List of requested dimensions. */
		dimensions?: Array<string>;

		/** List of metrics for each requested DateRange. */
		metrics?: Array<DateRangeValues>;
	}

	/** A row in the report. */
	export interface ReportRowFormProperties {
	}
	export function CreateReportRowFormGroup() {
		return new FormGroup<ReportRowFormProperties>({
		});

	}


	/** The resource quota tokens remaining for the property after the request is completed. */
	export interface ResourceQuotasRemaining {

		/** Daily resource quota remaining remaining. */
		dailyQuotaTokensRemaining?: number | null;

		/** Hourly resource quota tokens remaining. */
		hourlyQuotaTokensRemaining?: number | null;
	}

	/** The resource quota tokens remaining for the property after the request is completed. */
	export interface ResourceQuotasRemainingFormProperties {

		/** Daily resource quota remaining remaining. */
		dailyQuotaTokensRemaining: FormControl<number | null | undefined>,

		/** Hourly resource quota tokens remaining. */
		hourlyQuotaTokensRemaining: FormControl<number | null | undefined>,
	}
	export function CreateResourceQuotasRemainingFormGroup() {
		return new FormGroup<ResourceQuotasRemainingFormProperties>({
			dailyQuotaTokensRemaining: new FormControl<number | null | undefined>(undefined),
			hourlyQuotaTokensRemaining: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request to fetch User Report from Reporting API `userActivity:get` call. */
	export interface SearchUserActivityRequest {

		/** Set of all activity types being requested. Only acvities matching these types will be returned in the response. If empty, all activies will be returned. */
		activityTypes?: Array<ActivityActivityType>;

		/** A contiguous set of days: startDate, startDate + 1 day, ..., endDate. The start and end dates are specified in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`. */
		dateRange?: DateRange;

		/** Page size is for paging and specifies the maximum number of returned rows. Page size should be > 0. If the value is 0 or if the field isn't specified, the request returns the default of 1000 rows per page. */
		pageSize?: number | null;

		/** A continuation token to get the next page of the results. Adding this to the request will return the rows after the pageToken. The pageToken should be the value returned in the nextPageToken parameter in the response to the [SearchUserActivityRequest](#SearchUserActivityRequest) request. */
		pageToken?: string | null;

		/** Contains information to identify a particular user uniquely. */
		user?: User;

		/** Required. The Analytics [view ID](https://support.google.com/analytics/answer/1009618) from which to retrieve data. Every [SearchUserActivityRequest](#SearchUserActivityRequest) must contain the `viewId`. */
		viewId?: string | null;
	}

	/** The request to fetch User Report from Reporting API `userActivity:get` call. */
	export interface SearchUserActivityRequestFormProperties {

		/** Page size is for paging and specifies the maximum number of returned rows. Page size should be > 0. If the value is 0 or if the field isn't specified, the request returns the default of 1000 rows per page. */
		pageSize: FormControl<number | null | undefined>,

		/** A continuation token to get the next page of the results. Adding this to the request will return the rows after the pageToken. The pageToken should be the value returned in the nextPageToken parameter in the response to the [SearchUserActivityRequest](#SearchUserActivityRequest) request. */
		pageToken: FormControl<string | null | undefined>,

		/** Required. The Analytics [view ID](https://support.google.com/analytics/answer/1009618) from which to retrieve data. Every [SearchUserActivityRequest](#SearchUserActivityRequest) must contain the `viewId`. */
		viewId: FormControl<string | null | undefined>,
	}
	export function CreateSearchUserActivityRequestFormGroup() {
		return new FormGroup<SearchUserActivityRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			viewId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information to identify a particular user uniquely. */
	export interface User {

		/** Type of the user in the request. The field `userId` is associated with this type. */
		type?: UserType | null;

		/** Unique Id of the user for which the data is being requested. */
		userId?: string | null;
	}

	/** Contains information to identify a particular user uniquely. */
	export interface UserFormProperties {

		/** Type of the user in the request. The field `userId` is associated with this type. */
		type: FormControl<UserType | null | undefined>,

		/** Unique Id of the user for which the data is being requested. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			type: new FormControl<UserType | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserType { USER_ID_TYPE_UNSPECIFIED = 'USER_ID_TYPE_UNSPECIFIED', USER_ID = 'USER_ID', CLIENT_ID = 'CLIENT_ID' }


	/** The response from `userActivity:get` call. */
	export interface SearchUserActivityResponse {

		/** This token should be passed to [SearchUserActivityRequest](#SearchUserActivityRequest) to retrieve the next page. */
		nextPageToken?: string | null;

		/** This field represents the [sampling rate](https://support.google.com/analytics/answer/2637192) for the given request and is a number between 0.0 to 1.0. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details. */
		sampleRate?: number | null;

		/** Each record represents a session (device details, duration, etc). */
		sessions?: Array<UserActivitySession>;

		/** Total rows returned by this query (across different pages). */
		totalRows?: number | null;
	}

	/** The response from `userActivity:get` call. */
	export interface SearchUserActivityResponseFormProperties {

		/** This token should be passed to [SearchUserActivityRequest](#SearchUserActivityRequest) to retrieve the next page. */
		nextPageToken: FormControl<string | null | undefined>,

		/** This field represents the [sampling rate](https://support.google.com/analytics/answer/2637192) for the given request and is a number between 0.0 to 1.0. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details. */
		sampleRate: FormControl<number | null | undefined>,

		/** Total rows returned by this query (across different pages). */
		totalRows: FormControl<number | null | undefined>,
	}
	export function CreateSearchUserActivityResponseFormGroup() {
		return new FormGroup<SearchUserActivityResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			sampleRate: new FormControl<number | null | undefined>(undefined),
			totalRows: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This represents a user session performed on a specific device at a certain time over a period of time. */
	export interface UserActivitySession {

		/** Represents a detailed view into each of the activity in this session. */
		activities?: Array<Activity>;

		/** The data source of a hit. By default, hits sent from analytics.js are reported as "web" and hits sent from the mobile SDKs are reported as "app". These values can be overridden in the Measurement Protocol. */
		dataSource?: string | null;

		/** The type of device used: "mobile", "tablet" etc. */
		deviceCategory?: string | null;

		/** Platform on which the activity happened: "android", "ios" etc. */
		platform?: string | null;

		/** Date of this session in ISO-8601 format. */
		sessionDate?: string | null;

		/** Unique ID of the session. */
		sessionId?: string | null;
	}

	/** This represents a user session performed on a specific device at a certain time over a period of time. */
	export interface UserActivitySessionFormProperties {

		/** The data source of a hit. By default, hits sent from analytics.js are reported as "web" and hits sent from the mobile SDKs are reported as "app". These values can be overridden in the Measurement Protocol. */
		dataSource: FormControl<string | null | undefined>,

		/** The type of device used: "mobile", "tablet" etc. */
		deviceCategory: FormControl<string | null | undefined>,

		/** Platform on which the activity happened: "android", "ios" etc. */
		platform: FormControl<string | null | undefined>,

		/** Date of this session in ISO-8601 format. */
		sessionDate: FormControl<string | null | undefined>,

		/** Unique ID of the session. */
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateUserActivitySessionFormGroup() {
		return new FormGroup<UserActivitySessionFormProperties>({
			dataSource: new FormControl<string | null | undefined>(undefined),
			deviceCategory: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
			sessionDate: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the Analytics data.
		 * Post v4/reports:batchGet
		 * @return {GetReportsResponse} Successful response
		 */
		Analyticsreporting_reports_batchGet(requestBody: GetReportsRequest): Observable<GetReportsResponse> {
			return this.http.post<GetReportsResponse>(this.baseUri + 'v4/reports:batchGet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns User Activity data.
		 * Post v4/userActivity:search
		 * @return {SearchUserActivityResponse} Successful response
		 */
		Analyticsreporting_userActivity_search(requestBody: SearchUserActivityRequest): Observable<SearchUserActivityResponse> {
			return this.http.post<SearchUserActivityResponse>(this.baseUri + 'v4/userActivity:search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

