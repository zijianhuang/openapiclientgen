import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period. */
	export interface GoogleCloudBillingBudgetsV1Budget {

		/** The budgeted amount for each usage period. */
		amount?: GoogleCloudBillingBudgetsV1BudgetAmount;

		/** A filter for a budget, limiting the scope of the cost to calculate. */
		budgetFilter?: GoogleCloudBillingBudgetsV1Filter;

		/** User data for display name in UI. The name must be less than or equal to 60 characters. */
		displayName?: string | null;

		/** Optional. Etag to validate that the object is unchanged for a read-modify-write operation. An empty etag causes an update to overwrite other changes. */
		etag?: string | null;

		/** Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`. */
		name?: string | null;

		/** NotificationsRule defines notifications that are sent based on budget spend and thresholds. */
		notificationsRule?: GoogleCloudBillingBudgetsV1NotificationsRule;
		ownershipScope?: GoogleCloudBillingBudgetsV1BudgetOwnershipScope | null;

		/** Optional. Rules that trigger alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget. Optional for `pubsubTopic` notifications. Required if using email notifications. */
		thresholdRules?: Array<GoogleCloudBillingBudgetsV1ThresholdRule>;
	}

	/** A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period. */
	export interface GoogleCloudBillingBudgetsV1BudgetFormProperties {

		/** User data for display name in UI. The name must be less than or equal to 60 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Etag to validate that the object is unchanged for a read-modify-write operation. An empty etag causes an update to overwrite other changes. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`. */
		name: FormControl<string | null | undefined>,
		ownershipScope: FormControl<GoogleCloudBillingBudgetsV1BudgetOwnershipScope | null | undefined>,
	}
	export function CreateGoogleCloudBillingBudgetsV1BudgetFormGroup() {
		return new FormGroup<GoogleCloudBillingBudgetsV1BudgetFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ownershipScope: new FormControl<GoogleCloudBillingBudgetsV1BudgetOwnershipScope | null | undefined>(undefined),
		});

	}


	/** The budgeted amount for each usage period. */
	export interface GoogleCloudBillingBudgetsV1BudgetAmount {

		/** Describes a budget amount targeted to the last Filter.calendar_period spend. At this time, the amount is automatically 100% of the last calendar period's spend; that is, there are no other options yet. LastPeriodAmount cannot be set for a budget configured with a Filter.custom_period. */
		lastPeriodAmount?: GoogleCloudBillingBudgetsV1LastPeriodAmount;

		/** Represents an amount of money with its currency type. */
		specifiedAmount?: GoogleTypeMoney;
	}

	/** The budgeted amount for each usage period. */
	export interface GoogleCloudBillingBudgetsV1BudgetAmountFormProperties {
	}
	export function CreateGoogleCloudBillingBudgetsV1BudgetAmountFormGroup() {
		return new FormGroup<GoogleCloudBillingBudgetsV1BudgetAmountFormProperties>({
		});

	}


	/** Describes a budget amount targeted to the last Filter.calendar_period spend. At this time, the amount is automatically 100% of the last calendar period's spend; that is, there are no other options yet. LastPeriodAmount cannot be set for a budget configured with a Filter.custom_period. */
	export interface GoogleCloudBillingBudgetsV1LastPeriodAmount {
	}

	/** Describes a budget amount targeted to the last Filter.calendar_period spend. At this time, the amount is automatically 100% of the last calendar period's spend; that is, there are no other options yet. LastPeriodAmount cannot be set for a budget configured with a Filter.custom_period. */
	export interface GoogleCloudBillingBudgetsV1LastPeriodAmountFormProperties {
	}
	export function CreateGoogleCloudBillingBudgetsV1LastPeriodAmountFormGroup() {
		return new FormGroup<GoogleCloudBillingBudgetsV1LastPeriodAmountFormProperties>({
		});

	}


	/** Represents an amount of money with its currency type. */
	export interface GoogleTypeMoney {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode?: string | null;

		/**
		 * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos?: number | null;

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units?: string | null;
	}

	/** Represents an amount of money with its currency type. */
	export interface GoogleTypeMoneyFormProperties {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode: FormControl<string | null | undefined>,

		/**
		 * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos: FormControl<number | null | undefined>,

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeMoneyFormGroup() {
		return new FormGroup<GoogleTypeMoneyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter for a budget, limiting the scope of the cost to calculate. */
	export interface GoogleCloudBillingBudgetsV1Filter {

		/** Optional. Specifies to track usage for recurring calendar period. For example, assume that CalendarPeriod.QUARTER is set. The budget tracks usage from April 1 to June 30, when the current calendar month is April, May, June. After that, it tracks usage from July 1 to September 30 when the current calendar month is July, August, September, so on. */
		calendarPeriod?: GoogleCloudBillingBudgetsV1FilterCalendarPeriod | null;

		/** Optional. If Filter.credit_types_treatment is INCLUDE_SPECIFIED_CREDITS, this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See [a list of acceptable credit type values](https://cloud.google.com/billing/docs/how-to/export-data-bigquery-tables#credits-type). If Filter.credit_types_treatment is **not** INCLUDE_SPECIFIED_CREDITS, this field must be empty. */
		creditTypes?: Array<string>;

		/** Optional. If not set, default behavior is `INCLUDE_ALL_CREDITS`. */
		creditTypesTreatment?: GoogleCloudBillingBudgetsV1FilterCreditTypesTreatment | null;

		/** All date times begin at 12 AM US and Canadian Pacific Time (UTC-8). */
		customPeriod?: GoogleCloudBillingBudgetsV1CustomPeriod;

		/** Optional. A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. If omitted, the report includes all labeled and unlabeled usage. An object containing a single `"key": value` pair. Example: `{ "name": "wrench" }`. _Currently, multiple entries or multiple values per entry are not allowed._ */
		labels?: {[id: string]: Array<string> };

		/** Optional. A set of projects of the form `projects/{project}`, specifying that usage from only this set of projects should be included in the budget. If omitted, the report includes all usage for the billing account, regardless of which project the usage occurred on. */
		projects?: Array<string>;

		/** Optional. A set of folder and organization names of the form `folders/{folderId}` or `organizations/{organizationId}`, specifying that usage from only this set of folders and organizations should be included in the budget. If omitted, the budget includes all usage that the billing account pays for. If the folder or organization contains projects that are paid for by a different Cloud Billing account, the budget *doesn't* apply to those projects. */
		resourceAncestors?: Array<string>;

		/** Optional. A set of services of the form `services/{service_id}`, specifying that usage from only this set of services should be included in the budget. If omitted, the report includes usage for all the services. The service names are available through the Catalog API: https://cloud.google.com/billing/v1/how-tos/catalog-api. */
		services?: Array<string>;

		/** Optional. A set of subaccounts of the form `billingAccounts/{account_id}`, specifying that usage from only this set of subaccounts should be included in the budget. If a subaccount is set to the name of the parent account, usage from the parent account is included. If the field is omitted, the report includes usage from the parent account and all subaccounts, if they exist. */
		subaccounts?: Array<string>;
	}

	/** A filter for a budget, limiting the scope of the cost to calculate. */
	export interface GoogleCloudBillingBudgetsV1FilterFormProperties {

		/** Optional. Specifies to track usage for recurring calendar period. For example, assume that CalendarPeriod.QUARTER is set. The budget tracks usage from April 1 to June 30, when the current calendar month is April, May, June. After that, it tracks usage from July 1 to September 30 when the current calendar month is July, August, September, so on. */
		calendarPeriod: FormControl<GoogleCloudBillingBudgetsV1FilterCalendarPeriod | null | undefined>,

		/** Optional. If not set, default behavior is `INCLUDE_ALL_CREDITS`. */
		creditTypesTreatment: FormControl<GoogleCloudBillingBudgetsV1FilterCreditTypesTreatment | null | undefined>,

		/** Optional. A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. If omitted, the report includes all labeled and unlabeled usage. An object containing a single `"key": value` pair. Example: `{ "name": "wrench" }`. _Currently, multiple entries or multiple values per entry are not allowed._ */
		labels: FormControl<{[id: string]: Array<string> } | null | undefined>,
	}
	export function CreateGoogleCloudBillingBudgetsV1FilterFormGroup() {
		return new FormGroup<GoogleCloudBillingBudgetsV1FilterFormProperties>({
			calendarPeriod: new FormControl<GoogleCloudBillingBudgetsV1FilterCalendarPeriod | null | undefined>(undefined),
			creditTypesTreatment: new FormControl<GoogleCloudBillingBudgetsV1FilterCreditTypesTreatment | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudBillingBudgetsV1FilterCalendarPeriod { CALENDAR_PERIOD_UNSPECIFIED = 'CALENDAR_PERIOD_UNSPECIFIED', MONTH = 'MONTH', QUARTER = 'QUARTER', YEAR = 'YEAR' }

	export enum GoogleCloudBillingBudgetsV1FilterCreditTypesTreatment { CREDIT_TYPES_TREATMENT_UNSPECIFIED = 'CREDIT_TYPES_TREATMENT_UNSPECIFIED', INCLUDE_ALL_CREDITS = 'INCLUDE_ALL_CREDITS', EXCLUDE_ALL_CREDITS = 'EXCLUDE_ALL_CREDITS', INCLUDE_SPECIFIED_CREDITS = 'INCLUDE_SPECIFIED_CREDITS' }


	/** All date times begin at 12 AM US and Canadian Pacific Time (UTC-8). */
	export interface GoogleCloudBillingBudgetsV1CustomPeriod {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		endDate?: GoogleTypeDate;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		startDate?: GoogleTypeDate;
	}

	/** All date times begin at 12 AM US and Canadian Pacific Time (UTC-8). */
	export interface GoogleCloudBillingBudgetsV1CustomPeriodFormProperties {
	}
	export function CreateGoogleCloudBillingBudgetsV1CustomPeriodFormGroup() {
		return new FormGroup<GoogleCloudBillingBudgetsV1CustomPeriodFormProperties>({
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDate {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day?: number | null;

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month?: number | null;

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDateFormProperties {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeDateFormGroup() {
		return new FormGroup<GoogleTypeDateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** NotificationsRule defines notifications that are sent based on budget spend and thresholds. */
	export interface GoogleCloudBillingBudgetsV1NotificationsRule {

		/** Optional. When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account. */
		disableDefaultIamRecipients?: boolean | null;

		/** Optional. When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project. This field will be ignored if the budget has multiple or no project configured. Currently, project level recipients are the users with `Owner` role on a cloud project. */
		enableProjectLevelRecipients?: boolean | null;

		/** Optional. Email targets to send notifications to when a threshold is exceeded. This is in addition to the `DefaultIamRecipients` who receive alert emails based on their billing account IAM role. The value is the full REST resource name of a Cloud Monitoring email notification channel with the form `projects/{project_id}/notificationChannels/{channel_id}`. A maximum of 5 email notifications are allowed. To customize budget alert email recipients with monitoring notification channels, you _must create the monitoring notification channels before you link them to a budget_. For guidance on setting up notification channels to use with budgets, see [Customize budget alert email recipients](https://cloud.google.com/billing/docs/how-to/budgets-notification-recipients). For Cloud Billing budget alerts, you _must use email notification channels_. The other types of notification channels are _not_ supported, such as Slack, SMS, or PagerDuty. If you want to [send budget notifications to Slack](https://cloud.google.com/billing/docs/how-to/notify#send_notifications_to_slack), use a pubsubTopic and configure [programmatic notifications](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications). */
		monitoringNotificationChannels?: Array<string>;

		/** Optional. The name of the Pub/Sub topic where budget-related messages are published, in the form `projects/{project_id}/topics/{topic_id}`. Updates are sent to the topic at regular intervals; the timing of the updates is not dependent on the [threshold rules](#thresholdrule) you've set. Note that if you want your [Pub/Sub JSON object](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format) to contain data for `alertThresholdExceeded`, you need at least one [alert threshold rule](#thresholdrule). When you set threshold rules, you must also enable at least one of the email notification options, either using the default IAM recipients or Cloud Monitoring email notification channels. To use Pub/Sub topics with budgets, you must do the following: 1. Create the Pub/Sub topic before connecting it to your budget. For guidance, see [Manage programmatic budget alert notifications](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications). 2. Grant the API caller the `pubsub.topics.setIamPolicy` permission on the Pub/Sub topic. If not set, the API call fails with PERMISSION_DENIED. For additional details on Pub/Sub roles and permissions, see [Permissions required for this task](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#permissions_required_for_this_task). */
		pubsubTopic?: string | null;

		/** Optional. Required when NotificationsRule.pubsub_topic is set. The schema version of the notification sent to NotificationsRule.pubsub_topic. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format. */
		schemaVersion?: string | null;
	}

	/** NotificationsRule defines notifications that are sent based on budget spend and thresholds. */
	export interface GoogleCloudBillingBudgetsV1NotificationsRuleFormProperties {

		/** Optional. When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account. */
		disableDefaultIamRecipients: FormControl<boolean | null | undefined>,

		/** Optional. When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project. This field will be ignored if the budget has multiple or no project configured. Currently, project level recipients are the users with `Owner` role on a cloud project. */
		enableProjectLevelRecipients: FormControl<boolean | null | undefined>,

		/** Optional. The name of the Pub/Sub topic where budget-related messages are published, in the form `projects/{project_id}/topics/{topic_id}`. Updates are sent to the topic at regular intervals; the timing of the updates is not dependent on the [threshold rules](#thresholdrule) you've set. Note that if you want your [Pub/Sub JSON object](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format) to contain data for `alertThresholdExceeded`, you need at least one [alert threshold rule](#thresholdrule). When you set threshold rules, you must also enable at least one of the email notification options, either using the default IAM recipients or Cloud Monitoring email notification channels. To use Pub/Sub topics with budgets, you must do the following: 1. Create the Pub/Sub topic before connecting it to your budget. For guidance, see [Manage programmatic budget alert notifications](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications). 2. Grant the API caller the `pubsub.topics.setIamPolicy` permission on the Pub/Sub topic. If not set, the API call fails with PERMISSION_DENIED. For additional details on Pub/Sub roles and permissions, see [Permissions required for this task](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#permissions_required_for_this_task). */
		pubsubTopic: FormControl<string | null | undefined>,

		/** Optional. Required when NotificationsRule.pubsub_topic is set. The schema version of the notification sent to NotificationsRule.pubsub_topic. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format. */
		schemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBudgetsV1NotificationsRuleFormGroup() {
		return new FormGroup<GoogleCloudBillingBudgetsV1NotificationsRuleFormProperties>({
			disableDefaultIamRecipients: new FormControl<boolean | null | undefined>(undefined),
			enableProjectLevelRecipients: new FormControl<boolean | null | undefined>(undefined),
			pubsubTopic: new FormControl<string | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudBillingBudgetsV1BudgetOwnershipScope { OWNERSHIP_SCOPE_UNSPECIFIED = 'OWNERSHIP_SCOPE_UNSPECIFIED', ALL_USERS = 'ALL_USERS', BILLING_ACCOUNT = 'BILLING_ACCOUNT' }


	/** ThresholdRule contains the definition of a threshold. Threshold rules define the triggering events used to generate a budget notification email. When a threshold is crossed (spend exceeds the specified percentages of the budget), budget alert emails are sent to the email recipients you specify in the [NotificationsRule](#notificationsrule). Threshold rules also affect the fields included in the [JSON data object](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format) sent to a Pub/Sub topic. Threshold rules are _required_ if using email notifications. Threshold rules are _optional_ if only setting a [`pubsubTopic` NotificationsRule](#NotificationsRule), unless you want your JSON data object to include data about the thresholds you set. For more information, see [set budget threshold rules and actions](https://cloud.google.com/billing/docs/how-to/budgets#budget-actions). */
	export interface GoogleCloudBillingBudgetsV1ThresholdRule {

		/** Optional. The type of basis used to determine if spend has passed the threshold. Behavior defaults to CURRENT_SPEND if not set. */
		spendBasis?: GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasis | null;

		/**
		 * Required. Send an alert when this threshold is exceeded. This is a 1.0-based percentage, so 0.5 = 50%. Validation: non-negative number.
		 * Type: double
		 */
		thresholdPercent?: number | null;
	}

	/** ThresholdRule contains the definition of a threshold. Threshold rules define the triggering events used to generate a budget notification email. When a threshold is crossed (spend exceeds the specified percentages of the budget), budget alert emails are sent to the email recipients you specify in the [NotificationsRule](#notificationsrule). Threshold rules also affect the fields included in the [JSON data object](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format) sent to a Pub/Sub topic. Threshold rules are _required_ if using email notifications. Threshold rules are _optional_ if only setting a [`pubsubTopic` NotificationsRule](#NotificationsRule), unless you want your JSON data object to include data about the thresholds you set. For more information, see [set budget threshold rules and actions](https://cloud.google.com/billing/docs/how-to/budgets#budget-actions). */
	export interface GoogleCloudBillingBudgetsV1ThresholdRuleFormProperties {

		/** Optional. The type of basis used to determine if spend has passed the threshold. Behavior defaults to CURRENT_SPEND if not set. */
		spendBasis: FormControl<GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasis | null | undefined>,

		/**
		 * Required. Send an alert when this threshold is exceeded. This is a 1.0-based percentage, so 0.5 = 50%. Validation: non-negative number.
		 * Type: double
		 */
		thresholdPercent: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudBillingBudgetsV1ThresholdRuleFormGroup() {
		return new FormGroup<GoogleCloudBillingBudgetsV1ThresholdRuleFormProperties>({
			spendBasis: new FormControl<GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasis | null | undefined>(undefined),
			thresholdPercent: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasis { BASIS_UNSPECIFIED = 'BASIS_UNSPECIFIED', CURRENT_SPEND = 'CURRENT_SPEND', FORECASTED_SPEND = 'FORECASTED_SPEND' }


	/** Response for ListBudgets */
	export interface GoogleCloudBillingBudgetsV1ListBudgetsResponse {

		/** List of the budgets owned by the requested billing account. */
		budgets?: Array<GoogleCloudBillingBudgetsV1Budget>;

		/** If not empty, indicates that there may be more budgets that match the request; this value should be passed in a new `ListBudgetsRequest`. */
		nextPageToken?: string | null;
	}

	/** Response for ListBudgets */
	export interface GoogleCloudBillingBudgetsV1ListBudgetsResponseFormProperties {

		/** If not empty, indicates that there may be more budgets that match the request; this value should be passed in a new `ListBudgetsRequest`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBudgetsV1ListBudgetsResponseFormGroup() {
		return new FormGroup<GoogleCloudBillingBudgetsV1ListBudgetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a budget. Returns successfully if already deleted.
		 * Delete v1/{name}
		 * @param {string} name Required. Name of the budget to delete. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Billingbudgets_billingAccounts_budgets_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
		 * Get v1/{name}
		 * @param {string} name Required. Name of budget to get. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
		 * @return {GoogleCloudBillingBudgetsV1Budget} Successful response
		 */
		Billingbudgets_billingAccounts_budgets_get(name: string): Observable<GoogleCloudBillingBudgetsV1Budget> {
			return this.http.get<GoogleCloudBillingBudgetsV1Budget>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.
		 * Patch v1/{name}
		 * @param {string} name Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
		 * @param {string} updateMask Optional. Indicates which fields in the provided budget to update. Read-only fields (such as `name`) cannot be changed. If this is not provided, then only fields with non-default values from the request are updated. See https://developers.google.com/protocol-buffers/docs/proto3#default for more details about default values.
		 * @return {GoogleCloudBillingBudgetsV1Budget} Successful response
		 */
		Billingbudgets_billingAccounts_budgets_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleCloudBillingBudgetsV1Budget): Observable<GoogleCloudBillingBudgetsV1Budget> {
			return this.http.patch<GoogleCloudBillingBudgetsV1Budget>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
		 * Get v1/{parent}/budgets
		 * @param {string} parent Required. Name of billing account to list budgets under. Values are of the form `billingAccounts/{billingAccountId}`.
		 * @param {number} pageSize Optional. The maximum number of budgets to return per page. The default and maximum value are 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. The value returned by the last `ListBudgetsResponse` which indicates that this is a continuation of a prior `ListBudgets` call, and that the system should return the next page of data.
		 * @param {string} scope Optional. Set the scope of the budgets to be returned, in the format of the resource name. The scope of a budget is the cost that it tracks, such as costs for a single project, or the costs for all projects in a folder. Only project scope (in the format of "projects/project-id" or "projects/123") is supported in this field. When this field is set to a project's resource name, the budgets returned are tracking the costs for that project.
		 * @return {GoogleCloudBillingBudgetsV1ListBudgetsResponse} Successful response
		 */
		Billingbudgets_billingAccounts_budgets_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, scope: string | null | undefined): Observable<GoogleCloudBillingBudgetsV1ListBudgetsResponse> {
			return this.http.get<GoogleCloudBillingBudgetsV1ListBudgetsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/budgets&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)), {});
		}

		/**
		 * Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
		 * Post v1/{parent}/budgets
		 * @param {string} parent Required. The name of the billing account to create the budget in. Values are of the form `billingAccounts/{billingAccountId}`.
		 * @return {GoogleCloudBillingBudgetsV1Budget} Successful response
		 */
		Billingbudgets_billingAccounts_budgets_create(parent: string, requestBody: GoogleCloudBillingBudgetsV1Budget): Observable<GoogleCloudBillingBudgetsV1Budget> {
			return this.http.post<GoogleCloudBillingBudgetsV1Budget>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/budgets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

