import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Trigger that runs every time a Blob event occurs. */
	export interface BlobEventsTrigger {

		/**
		 * Blob Events Trigger properties.
		 * Required
		 */
		typeProperties: any;
	}

	/** Trigger that runs every time a Blob event occurs. */
	export interface BlobEventsTriggerFormProperties {

		/**
		 * Blob Events Trigger properties.
		 * Required
		 */
		typeProperties: FormControl<any | null | undefined>,
	}
	export function CreateBlobEventsTriggerFormGroup() {
		return new FormGroup<BlobEventsTriggerFormProperties>({
			typeProperties: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Trigger that runs every time the selected Blob container changes. */
	export interface BlobTrigger {

		/**
		 * Blob Trigger properties.
		 * Required
		 */
		typeProperties: any;
	}

	/** Trigger that runs every time the selected Blob container changes. */
	export interface BlobTriggerFormProperties {

		/**
		 * Blob Trigger properties.
		 * Required
		 */
		typeProperties: FormControl<any | null | undefined>,
	}
	export function CreateBlobTriggerFormGroup() {
		return new FormGroup<BlobTriggerFormProperties>({
			typeProperties: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Trigger that allows the referenced pipeline to depend on other pipeline runs based on runDimension Name/Value pairs. Upstream pipelines should declare the same runDimension Name and their runs should have the values for those runDimensions. The referenced pipeline run would be triggered if the values for the runDimension match for all upstream pipeline runs. */
	export interface ChainingTrigger {

		/**
		 * Pipeline that needs to be triggered with the given parameters.
		 * Required
		 */
		pipeline: any;

		/**
		 * Chaining Trigger properties.
		 * Required
		 */
		typeProperties: any;
	}

	/** Trigger that allows the referenced pipeline to depend on other pipeline runs based on runDimension Name/Value pairs. Upstream pipelines should declare the same runDimension Name and their runs should have the values for those runDimensions. The referenced pipeline run would be triggered if the values for the runDimension match for all upstream pipeline runs. */
	export interface ChainingTriggerFormProperties {

		/**
		 * Pipeline that needs to be triggered with the given parameters.
		 * Required
		 */
		pipeline: FormControl<any | null | undefined>,

		/**
		 * Chaining Trigger properties.
		 * Required
		 */
		typeProperties: FormControl<any | null | undefined>,
	}
	export function CreateChainingTriggerFormGroup() {
		return new FormGroup<ChainingTriggerFormProperties>({
			pipeline: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			typeProperties: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The days of the week. */
	export enum DayOfWeek { Sunday = 'Sunday', Monday = 'Monday', Tuesday = 'Tuesday', Wednesday = 'Wednesday', Thursday = 'Thursday', Friday = 'Friday', Saturday = 'Saturday' }


	/** Referenced dependency. */
	export interface DependencyReference {

		/**
		 * The type of dependency reference.
		 * Required
		 */
		type: string;
	}

	/** Referenced dependency. */
	export interface DependencyReferenceFormProperties {

		/**
		 * The type of dependency reference.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDependencyReferenceFormGroup() {
		return new FormGroup<DependencyReferenceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Base class for all triggers that support one to many model for trigger to pipeline. */
	export interface MultiplePipelineTrigger extends Trigger {

		/** Pipelines that need to be started. */
		MultiplePipelineTriggerPipelines?: Array<MultiplePipelineTriggerPipelines>;
	}

	/** Base class for all triggers that support one to many model for trigger to pipeline. */
	export interface MultiplePipelineTriggerFormProperties extends TriggerFormProperties {
	}
	export function CreateMultiplePipelineTriggerFormGroup() {
		return new FormGroup<MultiplePipelineTriggerFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			runtimeState: new FormControl<TriggerRuntimeState | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MultiplePipelineTriggerPipelines {

		/** An object mapping parameter names to argument values. */
		parameters?: {[id: string]: any };

		/** Pipeline reference type. */
		pipelineReference?: any;
	}
	export interface MultiplePipelineTriggerPipelinesFormProperties {

		/** An object mapping parameter names to argument values. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/** Pipeline reference type. */
		pipelineReference: FormControl<any | null | undefined>,
	}
	export function CreateMultiplePipelineTriggerPipelinesFormGroup() {
		return new FormGroup<MultiplePipelineTriggerPipelinesFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			pipelineReference: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Enumerates possible frequency option for the schedule trigger. */
	export enum RecurrenceFrequency { NotSpecified = 'NotSpecified', Minute = 'Minute', Hour = 'Hour', Day = 'Day', Week = 'Week', Month = 'Month', Year = 'Year' }


	/** The recurrence schedule. */
	export interface RecurrenceSchedule {

		/** The hours. */
		hours?: Array<number>;

		/** The minutes. */
		minutes?: Array<number>;

		/** The month days. */
		monthDays?: Array<number>;

		/** The monthly occurrences. */
		monthlyOccurrences?: Array<RecurrenceScheduleOccurrence>;

		/** The days of the week. */
		weekDays?: Array<DayOfWeek>;
	}

	/** The recurrence schedule. */
	export interface RecurrenceScheduleFormProperties {
	}
	export function CreateRecurrenceScheduleFormGroup() {
		return new FormGroup<RecurrenceScheduleFormProperties>({
		});

	}


	/** The recurrence schedule occurrence. */
	export interface RecurrenceScheduleOccurrence {

		/** The days of the week. */
		day?: DayOfWeek | null;

		/** The occurrence. */
		occurrence?: number | null;
	}

	/** The recurrence schedule occurrence. */
	export interface RecurrenceScheduleOccurrenceFormProperties {

		/** The days of the week. */
		day: FormControl<DayOfWeek | null | undefined>,

		/** The occurrence. */
		occurrence: FormControl<number | null | undefined>,
	}
	export function CreateRecurrenceScheduleOccurrenceFormGroup() {
		return new FormGroup<RecurrenceScheduleOccurrenceFormProperties>({
			day: new FormControl<DayOfWeek | null | undefined>(undefined),
			occurrence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Trigger that schedules pipeline reruns for all fixed time interval windows from a requested start time to requested end time. */
	export interface RerunTumblingWindowTrigger {

		/**
		 * Rerun Trigger properties.
		 * Required
		 */
		typeProperties: any;
	}

	/** Trigger that schedules pipeline reruns for all fixed time interval windows from a requested start time to requested end time. */
	export interface RerunTumblingWindowTriggerFormProperties {

		/**
		 * Rerun Trigger properties.
		 * Required
		 */
		typeProperties: FormControl<any | null | undefined>,
	}
	export function CreateRerunTumblingWindowTriggerFormGroup() {
		return new FormGroup<RerunTumblingWindowTriggerFormProperties>({
			typeProperties: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Execution policy for an activity. */
	export interface RetryPolicy {

		/** Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0. */
		count?: string | null;

		/**
		 * Interval between retries in seconds. Default is 30.
		 * Minimum: 30
		 * Maximum: 86400
		 */
		intervalInSeconds?: number | null;
	}

	/** Execution policy for an activity. */
	export interface RetryPolicyFormProperties {

		/** Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0. */
		count: FormControl<string | null | undefined>,

		/**
		 * Interval between retries in seconds. Default is 30.
		 * Minimum: 30
		 * Maximum: 86400
		 */
		intervalInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateRetryPolicyFormGroup() {
		return new FormGroup<RetryPolicyFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			intervalInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(30), Validators.max(86400)]),
		});

	}


	/** Trigger that creates pipeline runs periodically, on schedule. */
	export interface ScheduleTrigger {

		/**
		 * Schedule Trigger properties.
		 * Required
		 */
		typeProperties: any;
	}

	/** Trigger that creates pipeline runs periodically, on schedule. */
	export interface ScheduleTriggerFormProperties {

		/**
		 * Schedule Trigger properties.
		 * Required
		 */
		typeProperties: FormControl<any | null | undefined>,
	}
	export function CreateScheduleTriggerFormGroup() {
		return new FormGroup<ScheduleTriggerFormProperties>({
			typeProperties: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The workflow trigger recurrence. */
	export interface ScheduleTriggerRecurrence {

		/** The end time. */
		endTime?: Date | null;

		/** Enumerates possible frequency option for the schedule trigger. */
		frequency?: RecurrenceFrequency | null;

		/** The interval. */
		interval?: number | null;

		/** The recurrence schedule. */
		schedule?: RecurrenceSchedule;

		/** The start time. */
		startTime?: Date | null;

		/** The time zone. */
		timeZone?: string | null;
	}

	/** The workflow trigger recurrence. */
	export interface ScheduleTriggerRecurrenceFormProperties {

		/** The end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Enumerates possible frequency option for the schedule trigger. */
		frequency: FormControl<RecurrenceFrequency | null | undefined>,

		/** The interval. */
		interval: FormControl<number | null | undefined>,

		/** The start time. */
		startTime: FormControl<Date | null | undefined>,

		/** The time zone. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateScheduleTriggerRecurrenceFormGroup() {
		return new FormGroup<ScheduleTriggerRecurrenceFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			frequency: new FormControl<RecurrenceFrequency | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Self referenced tumbling window trigger dependency. */
	export interface SelfDependencyTumblingWindowTriggerReference {

		/**
		 * Timespan applied to the start time of a tumbling window when evaluating dependency.
		 * Required
		 * Max length: 15
		 * Min length: 8
		 */
		offset: string;

		/**
		 * The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
		 * Max length: 15
		 * Min length: 8
		 */
		size?: string | null;
	}

	/** Self referenced tumbling window trigger dependency. */
	export interface SelfDependencyTumblingWindowTriggerReferenceFormProperties {

		/**
		 * Timespan applied to the start time of a tumbling window when evaluating dependency.
		 * Required
		 * Max length: 15
		 * Min length: 8
		 */
		offset: FormControl<string | null | undefined>,

		/**
		 * The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
		 * Max length: 15
		 * Min length: 8
		 */
		size: FormControl<string | null | undefined>,
	}
	export function CreateSelfDependencyTumblingWindowTriggerReferenceFormGroup() {
		return new FormGroup<SelfDependencyTumblingWindowTriggerReferenceFormProperties>({
			offset: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern('((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))')]),
			size: new FormControl<string | null | undefined>(undefined, [Validators.minLength(8), Validators.maxLength(15), Validators.pattern('((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))')]),
		});

	}


	/** Azure data factory nested object which contains information about creating pipeline run */
	export interface Trigger {

		/** List of tags that can be used for describing the trigger. */
		annotations?: Array<string>;

		/** Trigger description. */
		description?: string | null;

		/** Enumerates possible state of Triggers. */
		runtimeState?: TriggerRuntimeState | null;

		/**
		 * Trigger type.
		 * Required
		 */
		type: string;
	}

	/** Azure data factory nested object which contains information about creating pipeline run */
	export interface TriggerFormProperties {

		/** Trigger description. */
		description: FormControl<string | null | undefined>,

		/** Enumerates possible state of Triggers. */
		runtimeState: FormControl<TriggerRuntimeState | null | undefined>,

		/**
		 * Trigger type.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTriggerFormGroup() {
		return new FormGroup<TriggerFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			runtimeState: new FormControl<TriggerRuntimeState | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TriggerRuntimeState { Started = 'Started', Stopped = 'Stopped', Disabled = 'Disabled' }


	/** Trigger referenced dependency. */
	export interface TriggerDependencyReference {

		/**
		 * Trigger reference type.
		 * Required
		 */
		referenceTrigger: TriggerReference;
	}

	/** Trigger referenced dependency. */
	export interface TriggerDependencyReferenceFormProperties {
	}
	export function CreateTriggerDependencyReferenceFormGroup() {
		return new FormGroup<TriggerDependencyReferenceFormProperties>({
		});

	}


	/** Trigger reference type. */
	export interface TriggerReference {

		/**
		 * Reference trigger name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Trigger reference type.
		 * Required
		 */
		type: TriggerReferenceType;
	}

	/** Trigger reference type. */
	export interface TriggerReferenceFormProperties {

		/**
		 * Reference trigger name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Trigger reference type.
		 * Required
		 */
		type: FormControl<TriggerReferenceType | null | undefined>,
	}
	export function CreateTriggerReferenceFormGroup() {
		return new FormGroup<TriggerReferenceFormProperties>({
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<TriggerReferenceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TriggerReferenceType { TriggerReference = 'TriggerReference' }


	/** Enumerates possible frequency option for the tumbling window trigger. */
	export enum TumblingWindowFrequency { Minute = 'Minute', Hour = 'Hour' }


	/** Trigger that schedules pipeline runs for all fixed time interval windows from a start time without gaps and also supports backfill scenarios (when start time is in the past). */
	export interface TumblingWindowTrigger {

		/**
		 * Pipeline that needs to be triggered with the given parameters.
		 * Required
		 */
		pipeline: any;

		/**
		 * Tumbling Window Trigger properties.
		 * Required
		 */
		typeProperties: any;
	}

	/** Trigger that schedules pipeline runs for all fixed time interval windows from a start time without gaps and also supports backfill scenarios (when start time is in the past). */
	export interface TumblingWindowTriggerFormProperties {

		/**
		 * Pipeline that needs to be triggered with the given parameters.
		 * Required
		 */
		pipeline: FormControl<any | null | undefined>,

		/**
		 * Tumbling Window Trigger properties.
		 * Required
		 */
		typeProperties: FormControl<any | null | undefined>,
	}
	export function CreateTumblingWindowTriggerFormGroup() {
		return new FormGroup<TumblingWindowTriggerFormProperties>({
			pipeline: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			typeProperties: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Referenced tumbling window trigger dependency. */
	export interface TumblingWindowTriggerDependencyReference {

		/**
		 * Timespan applied to the start time of a tumbling window when evaluating dependency.
		 * Max length: 15
		 * Min length: 8
		 */
		offset?: string | null;

		/**
		 * The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
		 * Max length: 15
		 * Min length: 8
		 */
		size?: string | null;
	}

	/** Referenced tumbling window trigger dependency. */
	export interface TumblingWindowTriggerDependencyReferenceFormProperties {

		/**
		 * Timespan applied to the start time of a tumbling window when evaluating dependency.
		 * Max length: 15
		 * Min length: 8
		 */
		offset: FormControl<string | null | undefined>,

		/**
		 * The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
		 * Max length: 15
		 * Min length: 8
		 */
		size: FormControl<string | null | undefined>,
	}
	export function CreateTumblingWindowTriggerDependencyReferenceFormGroup() {
		return new FormGroup<TumblingWindowTriggerDependencyReferenceFormProperties>({
			offset: new FormControl<string | null | undefined>(undefined, [Validators.minLength(8), Validators.maxLength(15), Validators.pattern('((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))')]),
			size: new FormControl<string | null | undefined>(undefined, [Validators.minLength(8), Validators.maxLength(15), Validators.pattern('((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))')]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

