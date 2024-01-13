import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Autoscale notification. */
	export interface AutoscaleNotification {

		/** Email notification of an autoscale event. */
		email?: EmailNotification;

		/**
		 * the operation associated with the notification and its value must be "scale"
		 * Required
		 */
		operation: AutoscaleNotificationOperation;

		/** the collection of webhook notifications. */
		webhooks?: Array<WebhookNotification>;
	}

	/** Autoscale notification. */
	export interface AutoscaleNotificationFormProperties {

		/**
		 * the operation associated with the notification and its value must be "scale"
		 * Required
		 */
		operation: FormControl<AutoscaleNotificationOperation | null | undefined>,
	}
	export function CreateAutoscaleNotificationFormGroup() {
		return new FormGroup<AutoscaleNotificationFormProperties>({
			operation: new FormControl<AutoscaleNotificationOperation | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AutoscaleNotificationOperation { Scale = 0 }


	/** Webhook notification of an autoscale event. */
	export interface WebhookNotification {

		/** a property bag of settings. This value can be empty. */
		properties?: {[id: string]: string };

		/** the service address to receive the notification. */
		serviceUri?: string | null;
	}

	/** Webhook notification of an autoscale event. */
	export interface WebhookNotificationFormProperties {

		/** a property bag of settings. This value can be empty. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** the service address to receive the notification. */
		serviceUri: FormControl<string | null | undefined>,
	}
	export function CreateWebhookNotificationFormGroup() {
		return new FormGroup<WebhookNotificationFormProperties>({
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			serviceUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Autoscale profile. */
	export interface AutoscaleProfile {

		/**
		 * The number of instances that can be used during this profile.
		 * Required
		 */
		capacity: ScaleCapacity;

		/** A specific date-time for the profile. */
		fixedDate?: TimeWindow;

		/**
		 * the name of the profile.
		 * Required
		 */
		name: string;

		/** The repeating times at which this profile begins. This element is not used if the FixedDate element is used. */
		recurrence?: Recurrence;

		/**
		 * the collection of rules that provide the triggers and parameters for the scaling action. A maximum of 10 rules can be specified.
		 * Required
		 */
		rules: Array<ScaleRule>;
	}

	/** Autoscale profile. */
	export interface AutoscaleProfileFormProperties {

		/**
		 * the name of the profile.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAutoscaleProfileFormGroup() {
		return new FormGroup<AutoscaleProfileFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A rule that provide the triggers and parameters for the scaling action. */
	export interface ScaleRule {

		/**
		 * The trigger that results in a scaling action.
		 * Required
		 */
		metricTrigger: MetricTrigger;

		/**
		 * The parameters for the scaling action.
		 * Required
		 */
		scaleAction: ScaleAction;
	}

	/** A rule that provide the triggers and parameters for the scaling action. */
	export interface ScaleRuleFormProperties {
	}
	export function CreateScaleRuleFormGroup() {
		return new FormGroup<ScaleRuleFormProperties>({
		});

	}


	/** A setting that contains all of the configuration for the automatic scaling of a resource. */
	export interface AutoscaleSetting {

		/** the enabled flag. Specifies whether automatic scaling is enabled for the resource. The default value is 'true'. */
		enabled?: boolean | null;

		/** the name of the autoscale setting. */
		name?: string | null;

		/** the collection of notifications. */
		notifications?: Array<AutoscaleNotification>;

		/**
		 * the collection of automatic scaling profiles that specify different scaling parameters for different time periods. A maximum of 20 profiles can be specified.
		 * Required
		 * Maximum items: 20
		 */
		profiles: Array<AutoscaleProfile>;

		/** the resource identifier of the resource that the autoscale setting should be added to. */
		targetResourceUri?: string | null;
	}

	/** A setting that contains all of the configuration for the automatic scaling of a resource. */
	export interface AutoscaleSettingFormProperties {

		/** the enabled flag. Specifies whether automatic scaling is enabled for the resource. The default value is 'true'. */
		enabled: FormControl<boolean | null | undefined>,

		/** the name of the autoscale setting. */
		name: FormControl<string | null | undefined>,

		/** the resource identifier of the resource that the autoscale setting should be added to. */
		targetResourceUri: FormControl<string | null | undefined>,
	}
	export function CreateAutoscaleSettingFormGroup() {
		return new FormGroup<AutoscaleSettingFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			targetResourceUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The autoscale setting resource. */
	export interface AutoscaleSettingResource {

		/**
		 * A setting that contains all of the configuration for the automatic scaling of a resource.
		 * Required
		 */
		properties: AutoscaleSetting;
	}

	/** The autoscale setting resource. */
	export interface AutoscaleSettingResourceFormProperties {
	}
	export function CreateAutoscaleSettingResourceFormGroup() {
		return new FormGroup<AutoscaleSettingResourceFormProperties>({
		});

	}


	/** Represents a collection of autoscale setting resources. */
	export interface AutoscaleSettingResourceCollection {

		/** URL to get the next set of results. */
		nextLink?: string | null;

		/**
		 * the values for the autoscale setting resources.
		 * Required
		 */
		value: Array<AutoscaleSettingResource>;
	}

	/** Represents a collection of autoscale setting resources. */
	export interface AutoscaleSettingResourceCollectionFormProperties {

		/** URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAutoscaleSettingResourceCollectionFormGroup() {
		return new FormGroup<AutoscaleSettingResourceCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The autoscale setting object for patch operations. */
	export interface AutoscaleSettingResourcePatch {

		/** A setting that contains all of the configuration for the automatic scaling of a resource. */
		properties?: AutoscaleSetting;

		/** Resource tags */
		tags?: any;
	}

	/** The autoscale setting object for patch operations. */
	export interface AutoscaleSettingResourcePatchFormProperties {

		/** Resource tags */
		tags: FormControl<any | null | undefined>,
	}
	export function CreateAutoscaleSettingResourcePatchFormGroup() {
		return new FormGroup<AutoscaleSettingResourcePatchFormProperties>({
			tags: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Email notification of an autoscale event. */
	export interface EmailNotification {

		/** the custom e-mails list. This value can be null or empty, in which case this attribute will be ignored. */
		customEmails?: Array<string>;

		/** a value indicating whether to send email to subscription administrator. */
		sendToSubscriptionAdministrator?: boolean | null;

		/** a value indicating whether to send email to subscription co-administrators. */
		sendToSubscriptionCoAdministrators?: boolean | null;
	}

	/** Email notification of an autoscale event. */
	export interface EmailNotificationFormProperties {

		/** a value indicating whether to send email to subscription administrator. */
		sendToSubscriptionAdministrator: FormControl<boolean | null | undefined>,

		/** a value indicating whether to send email to subscription co-administrators. */
		sendToSubscriptionCoAdministrators: FormControl<boolean | null | undefined>,
	}
	export function CreateEmailNotificationFormGroup() {
		return new FormGroup<EmailNotificationFormProperties>({
			sendToSubscriptionAdministrator: new FormControl<boolean | null | undefined>(undefined),
			sendToSubscriptionCoAdministrators: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes the format of Error response. */
	export interface ErrorResponse {

		/** Error code */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Describes the format of Error response. */
	export interface ErrorResponseFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The trigger that results in a scaling action. */
	export interface MetricTrigger {

		/**
		 * the name of the metric that defines what the rule monitors.
		 * Required
		 */
		metricName: string;

		/**
		 * the resource identifier of the resource the rule monitors.
		 * Required
		 */
		metricResourceUri: string;

		/**
		 * the operator that is used to compare the metric data and the threshold.
		 * Required
		 */
		operator: MetricTriggerOperator;

		/**
		 * the metric statistic type. How the metrics from multiple instances are combined.
		 * Required
		 */
		statistic: MetricTriggerStatistic;

		/**
		 * the threshold of the metric that triggers the scale action.
		 * Required
		 */
		threshold: number;

		/**
		 * time aggregation type. How the data that is collected should be combined over time. The default value is Average.
		 * Required
		 */
		timeAggregation: MetricTriggerTimeAggregation;

		/**
		 * the granularity of metrics the rule monitors. Must be one of the predefined values returned from metric definitions for the metric. Must be between 12 hours and 1 minute.
		 * Required
		 */
		timeGrain: string;

		/**
		 * the range of time in which instance data is collected. This value must be greater than the delay in metric collection, which can vary from resource-to-resource. Must be between 12 hours and 5 minutes.
		 * Required
		 */
		timeWindow: string;
	}

	/** The trigger that results in a scaling action. */
	export interface MetricTriggerFormProperties {

		/**
		 * the name of the metric that defines what the rule monitors.
		 * Required
		 */
		metricName: FormControl<string | null | undefined>,

		/**
		 * the resource identifier of the resource the rule monitors.
		 * Required
		 */
		metricResourceUri: FormControl<string | null | undefined>,

		/**
		 * the operator that is used to compare the metric data and the threshold.
		 * Required
		 */
		operator: FormControl<MetricTriggerOperator | null | undefined>,

		/**
		 * the metric statistic type. How the metrics from multiple instances are combined.
		 * Required
		 */
		statistic: FormControl<MetricTriggerStatistic | null | undefined>,

		/**
		 * the threshold of the metric that triggers the scale action.
		 * Required
		 */
		threshold: FormControl<number | null | undefined>,

		/**
		 * time aggregation type. How the data that is collected should be combined over time. The default value is Average.
		 * Required
		 */
		timeAggregation: FormControl<MetricTriggerTimeAggregation | null | undefined>,

		/**
		 * the granularity of metrics the rule monitors. Must be one of the predefined values returned from metric definitions for the metric. Must be between 12 hours and 1 minute.
		 * Required
		 */
		timeGrain: FormControl<string | null | undefined>,

		/**
		 * the range of time in which instance data is collected. This value must be greater than the delay in metric collection, which can vary from resource-to-resource. Must be between 12 hours and 5 minutes.
		 * Required
		 */
		timeWindow: FormControl<string | null | undefined>,
	}
	export function CreateMetricTriggerFormGroup() {
		return new FormGroup<MetricTriggerFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricResourceUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<MetricTriggerOperator | null | undefined>(undefined, [Validators.required]),
			statistic: new FormControl<MetricTriggerStatistic | null | undefined>(undefined, [Validators.required]),
			threshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timeAggregation: new FormControl<MetricTriggerTimeAggregation | null | undefined>(undefined, [Validators.required]),
			timeGrain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeWindow: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MetricTriggerOperator { Equals = 0, NotEquals = 1, GreaterThan = 2, GreaterThanOrEqual = 3, LessThan = 4, LessThanOrEqual = 5 }

	export enum MetricTriggerStatistic { Average = 0, Min = 1, Max = 2, Sum = 3 }

	export enum MetricTriggerTimeAggregation { Average = 0, Minimum = 1, Maximum = 2, Total = 3, Count = 4, Last = 5 }


	/** The repeating times at which this profile begins. This element is not used if the FixedDate element is used. */
	export interface Recurrence {

		/**
		 * the recurrence frequency. How often the schedule profile should take effect. This value must be Week, meaning each week will have the same set of profiles. For example, to set a daily schedule, set **schedule** to every day of the week. The frequency property specifies that the schedule is repeated weekly.
		 * Required
		 */
		frequency: RecurrenceFrequency;

		/**
		 * The scheduling constraints for when the profile begins.
		 * Required
		 */
		schedule: RecurrentSchedule;
	}

	/** The repeating times at which this profile begins. This element is not used if the FixedDate element is used. */
	export interface RecurrenceFormProperties {

		/**
		 * the recurrence frequency. How often the schedule profile should take effect. This value must be Week, meaning each week will have the same set of profiles. For example, to set a daily schedule, set **schedule** to every day of the week. The frequency property specifies that the schedule is repeated weekly.
		 * Required
		 */
		frequency: FormControl<RecurrenceFrequency | null | undefined>,
	}
	export function CreateRecurrenceFormGroup() {
		return new FormGroup<RecurrenceFormProperties>({
			frequency: new FormControl<RecurrenceFrequency | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RecurrenceFrequency { None = 0, Second = 1, Minute = 2, Hour = 3, Day = 4, Week = 5, Month = 6, Year = 7 }


	/** The scheduling constraints for when the profile begins. */
	export interface RecurrentSchedule {

		/**
		 * the collection of days that the profile takes effect on. Possible values are Sunday through Saturday.
		 * Required
		 */
		days: Array<string>;

		/**
		 * A collection of hours that the profile takes effect on. Values supported are 0 to 23 on the 24-hour clock (AM/PM times are not supported).
		 * Required
		 */
		hours: Array<number>;

		/**
		 * A collection of minutes at which the profile takes effect at.
		 * Required
		 */
		minutes: Array<number>;

		/**
		 * the timezone for the hours of the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time
		 * Required
		 */
		timeZone: string;
	}

	/** The scheduling constraints for when the profile begins. */
	export interface RecurrentScheduleFormProperties {

		/**
		 * the timezone for the hours of the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time
		 * Required
		 */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateRecurrentScheduleFormGroup() {
		return new FormGroup<RecurrentScheduleFormProperties>({
			timeZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An azure resource object */
	export interface Resource {

		/** Azure resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Azure resource name */
		name?: string | null;

		/** Resource tags */
		tags?: any;

		/** Azure resource type */
		type?: string | null;
	}

	/** An azure resource object */
	export interface ResourceFormProperties {

		/** Azure resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Azure resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<any | null | undefined>,

		/** Azure resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters for the scaling action. */
	export interface ScaleAction {

		/**
		 * the amount of time to wait since the last scaling action before this action occurs. It must be between 1 week and 1 minute in ISO 8601 format.
		 * Required
		 */
		cooldown: string;

		/**
		 * the scale direction. Whether the scaling action increases or decreases the number of instances.
		 * Required
		 */
		direction: ScaleActionDirection;

		/**
		 * the type of action that should occur when the scale rule fires.
		 * Required
		 */
		type: ScaleActionType;

		/** the number of instances that are involved in the scaling action. This value must be 1 or greater. The default value is 1. */
		value?: string | null;
	}

	/** The parameters for the scaling action. */
	export interface ScaleActionFormProperties {

		/**
		 * the amount of time to wait since the last scaling action before this action occurs. It must be between 1 week and 1 minute in ISO 8601 format.
		 * Required
		 */
		cooldown: FormControl<string | null | undefined>,

		/**
		 * the scale direction. Whether the scaling action increases or decreases the number of instances.
		 * Required
		 */
		direction: FormControl<ScaleActionDirection | null | undefined>,

		/**
		 * the type of action that should occur when the scale rule fires.
		 * Required
		 */
		type: FormControl<ScaleActionType | null | undefined>,

		/** the number of instances that are involved in the scaling action. This value must be 1 or greater. The default value is 1. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateScaleActionFormGroup() {
		return new FormGroup<ScaleActionFormProperties>({
			cooldown: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			direction: new FormControl<ScaleActionDirection | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ScaleActionType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScaleActionDirection { None = 0, Increase = 1, Decrease = 2 }

	export enum ScaleActionType { ChangeCount = 0, PercentChangeCount = 1, ExactCount = 2 }


	/** The number of instances that can be used during this profile. */
	export interface ScaleCapacity {

		/**
		 * the number of instances that will be set if metrics are not available for evaluation. The default is only used if the current instance count is lower than the default.
		 * Required
		 */
		default: string;

		/**
		 * the maximum number of instances for the resource. The actual maximum number of instances is limited by the cores that are available in the subscription.
		 * Required
		 */
		maximum: string;

		/**
		 * the minimum number of instances for the resource.
		 * Required
		 */
		minimum: string;
	}

	/** The number of instances that can be used during this profile. */
	export interface ScaleCapacityFormProperties {

		/**
		 * the number of instances that will be set if metrics are not available for evaluation. The default is only used if the current instance count is lower than the default.
		 * Required
		 */
		default: FormControl<string | null | undefined>,

		/**
		 * the maximum number of instances for the resource. The actual maximum number of instances is limited by the cores that are available in the subscription.
		 * Required
		 */
		maximum: FormControl<string | null | undefined>,

		/**
		 * the minimum number of instances for the resource.
		 * Required
		 */
		minimum: FormControl<string | null | undefined>,
	}
	export function CreateScaleCapacityFormGroup() {
		return new FormGroup<ScaleCapacityFormProperties>({
			default: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maximum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			minimum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A specific date-time for the profile. */
	export interface TimeWindow {

		/**
		 * the end time for the profile in ISO 8601 format.
		 * Required
		 */
		end: Date;

		/**
		 * the start time for the profile in ISO 8601 format.
		 * Required
		 */
		start: Date;

		/** the timezone of the start and end times for the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time */
		timeZone?: string | null;
	}

	/** A specific date-time for the profile. */
	export interface TimeWindowFormProperties {

		/**
		 * the end time for the profile in ISO 8601 format.
		 * Required
		 */
		end: FormControl<Date | null | undefined>,

		/**
		 * the start time for the profile in ISO 8601 format.
		 * Required
		 */
		start: FormControl<Date | null | undefined>,

		/** the timezone of the start and end times for the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateTimeWindowFormGroup() {
		return new FormGroup<TimeWindowFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the autoscale settings for a subscription
		 * Get subscriptions/{subscriptionId}/providers/microsoft.insights/autoscalesettings
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {AutoscaleSettingResourceCollection} Successful request for a list of autoscale settings
		 */
		AutoscaleSettings_ListBySubscription(api_version: string, subscriptionId: string): Observable<AutoscaleSettingResourceCollection> {
			return this.http.get<AutoscaleSettingResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/autoscalesettings?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the autoscale settings for a resource group
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/autoscalesettings
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {AutoscaleSettingResourceCollection} Successful request for a list of autoscale settings
		 */
		AutoscaleSettings_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<AutoscaleSettingResourceCollection> {
			return this.http.get<AutoscaleSettingResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/autoscalesettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an autoscale setting
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/autoscalesettings/{autoscaleSettingName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} autoscaleSettingName The autoscale setting name.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {AutoscaleSettingResource} Successful request to get one autoscale setting
		 */
		AutoscaleSettings_Get(resourceGroupName: string, autoscaleSettingName: string, api_version: string, subscriptionId: string): Observable<AutoscaleSettingResource> {
			return this.http.get<AutoscaleSettingResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/autoscalesettings/' + (autoscaleSettingName == null ? '' : encodeURIComponent(autoscaleSettingName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an autoscale setting.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/autoscalesettings/{autoscaleSettingName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} autoscaleSettingName The autoscale setting name.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {AutoscaleSettingResource} requestBody Parameters supplied to the operation.
		 * @return {AutoscaleSettingResource} Successful request to create or update an autoscale setting
		 */
		AutoscaleSettings_CreateOrUpdate(resourceGroupName: string, autoscaleSettingName: string, api_version: string, subscriptionId: string, requestBody: AutoscaleSettingResource): Observable<AutoscaleSettingResource> {
			return this.http.put<AutoscaleSettingResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/autoscalesettings/' + (autoscaleSettingName == null ? '' : encodeURIComponent(autoscaleSettingName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes and autoscale setting
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/autoscalesettings/{autoscaleSettingName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} autoscaleSettingName The autoscale setting name.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {void} Successful request to delete an autoscale setting
		 */
		AutoscaleSettings_Delete(resourceGroupName: string, autoscaleSettingName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/autoscalesettings/' + (autoscaleSettingName == null ? '' : encodeURIComponent(autoscaleSettingName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing AutoscaleSettingsResource. To update other fields use the CreateOrUpdate method.
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/autoscalesettings/{autoscaleSettingName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} autoscaleSettingName The autoscale setting name.
		 * @param {string} api_version Client Api Version.
		 * @param {AutoscaleSettingResourcePatch} requestBody Parameters supplied to the operation.
		 * @return {AutoscaleSettingResource} An existing autoscale setting resource was successfully updated.
		 */
		AutoscaleSettings_Update(subscriptionId: string, resourceGroupName: string, autoscaleSettingName: string, api_version: string, requestBody: AutoscaleSettingResourcePatch): Observable<AutoscaleSettingResource> {
			return this.http.patch<AutoscaleSettingResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/autoscalesettings/' + (autoscaleSettingName == null ? '' : encodeURIComponent(autoscaleSettingName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

