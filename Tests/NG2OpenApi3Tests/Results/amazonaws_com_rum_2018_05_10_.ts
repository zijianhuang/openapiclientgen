import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchCreateRumMetricDefinitionsResponse {

		/** Required */
		Errors: Array<BatchCreateRumMetricDefinitionsError>;
		MetricDefinitions?: Array<MetricDefinition>;
	}
	export interface BatchCreateRumMetricDefinitionsResponseFormProperties {
	}
	export function CreateBatchCreateRumMetricDefinitionsResponseFormGroup() {
		return new FormGroup<BatchCreateRumMetricDefinitionsResponseFormProperties>({
		});

	}


	/** A structure that defines one error caused by a <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchCreateRumMetricsDefinitions.html">BatchCreateRumMetricsDefinitions</a> operation. */
	export interface BatchCreateRumMetricDefinitionsError {

		/** Required */
		ErrorCode: string;

		/** Required */
		ErrorMessage: string;

		/** Required */
		MetricDefinition: MetricDefinitionRequest;
	}

	/** A structure that defines one error caused by a <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchCreateRumMetricsDefinitions.html">BatchCreateRumMetricsDefinitions</a> operation. */
	export interface BatchCreateRumMetricDefinitionsErrorFormProperties {

		/** Required */
		ErrorCode: FormControl<string | null | undefined>,

		/** Required */
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateRumMetricDefinitionsErrorFormGroup() {
		return new FormGroup<BatchCreateRumMetricDefinitionsErrorFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Use this structure to define one extended metric or custom metric that RUM will send to CloudWatch or CloudWatch Evidently. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html"> Additional metrics that you can send to CloudWatch and CloudWatch Evidently</a>.</p> <p>This structure is validated differently for extended metrics and custom metrics. For extended metrics that are sent to the <code>AWS/RUM</code> namespace, the following validations apply:</p> <ul> <li> <p>The <code>Namespace</code> parameter must be omitted or set to <code>AWS/RUM</code>.</p> </li> <li> <p>Only certain combinations of values for <code>Name</code>, <code>ValueKey</code>, and <code>EventPattern</code> are valid. In addition to what is displayed in the list below, the <code>EventPattern</code> can also include information used by the <code>DimensionKeys</code> field.</p> <ul> <li> <p>If <code>Name</code> is <code>PerformanceNavigationDuration</code>, then <code>ValueKey</code>must be <code>event_details.duration</code> and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.performance_navigation_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>PerformanceResourceDuration</code>, then <code>ValueKey</code>must be <code>event_details.duration</code> and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.performance_resource_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>NavigationSatisfiedTransaction</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{ "event_type": ["com.amazon.rum.performance_navigation_event"], "event_details": { "duration": [{ "numeric": ["&gt;",2000] }] } }</code> </p> </li> <li> <p>If <code>Name</code> is <code>NavigationToleratedTransaction</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{ "event_type": ["com.amazon.rum.performance_navigation_event"], "event_details": { "duration": [{ "numeric": ["&gt;=",2000,"&lt;"8000] }] } }</code> </p> </li> <li> <p>If <code>Name</code> is <code>NavigationFrustratedTransaction</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{ "event_type": ["com.amazon.rum.performance_navigation_event"], "event_details": { "duration": [{ "numeric": ["&gt;=",8000] }] } }</code> </p> </li> <li> <p>If <code>Name</code> is <code>WebVitalsCumulativeLayoutShift</code>, then <code>ValueKey</code>must be <code>event_details.value</code> and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.cumulative_layout_shift_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>WebVitalsFirstInputDelay</code>, then <code>ValueKey</code>must be <code>event_details.value</code> and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.first_input_delay_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>WebVitalsLargestContentfulPaint</code>, then <code>ValueKey</code>must be <code>event_details.value</code> and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.largest_contentful_paint_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>JsErrorCount</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.js_error_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>HttpErrorCount</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.http_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>SessionCount</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.session_start_event"]}</code> </p> </li> </ul> </li> </ul> <p>For custom metrics, the following validation rules apply:</p> <ul> <li> <p>The namespace can't be omitted and can't be <code>AWS/RUM</code>. You can use the <code>AWS/RUM</code> namespace only for extended metrics.</p> </li> <li> <p>All dimensions listed in the <code>DimensionKeys</code> field must be present in the value of <code>EventPattern</code>.</p> </li> <li> <p>The values that you specify for <code>ValueKey</code>, <code>EventPattern</code>, and <code>DimensionKeys</code> must be fields in RUM events, so all first-level keys in these fields must be one of the keys in the list later in this section.</p> </li> <li> <p>If you set a value for <code>EventPattern</code>, it must be a JSON object.</p> </li> <li> <p>For every non-empty <code>event_details</code>, there must be a non-empty <code>event_type</code>.</p> </li> <li> <p>If <code>EventPattern</code> contains an <code>event_details</code> field, it must also contain an <code>event_type</code>. For every built-in <code>event_type</code> that you use, you must use a value for <code>event_details</code> that corresponds to that <code>event_type</code>. For information about event details that correspond to event types, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-datacollected.html#CloudWatch-RUM-datacollected-eventDetails"> RUM event details</a>.</p> </li> <li> <p>In <code>EventPattern</code>, any JSON array must contain only one value.</p> </li> </ul> <p>Valid key values for first-level keys in the <code>ValueKey</code>, <code>EventPattern</code>, and <code>DimensionKeys</code> fields:</p> <ul> <li> <p> <code>account_id</code> </p> </li> <li> <p> <code>application_Id</code> </p> </li> <li> <p> <code>application_version</code> </p> </li> <li> <p> <code>application_name</code> </p> </li> <li> <p> <code>batch_id</code> </p> </li> <li> <p> <code>event_details</code> </p> </li> <li> <p> <code>event_id</code> </p> </li> <li> <p> <code>event_interaction</code> </p> </li> <li> <p> <code>event_timestamp</code> </p> </li> <li> <p> <code>event_type</code> </p> </li> <li> <p> <code>event_version</code> </p> </li> <li> <p> <code>log_stream</code> </p> </li> <li> <p> <code>metadata</code> </p> </li> <li> <p> <code>sessionId</code> </p> </li> <li> <p> <code>user_details</code> </p> </li> <li> <p> <code>userId</code> </p> </li> </ul> */
	export interface MetricDefinitionRequest {
		DimensionKeys?: DimensionKeysMap;
		EventPattern?: string;

		/** Required */
		Name: string;
		Namespace?: string;
		UnitLabel?: string;
		ValueKey?: string;
	}

	/** <p>Use this structure to define one extended metric or custom metric that RUM will send to CloudWatch or CloudWatch Evidently. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html"> Additional metrics that you can send to CloudWatch and CloudWatch Evidently</a>.</p> <p>This structure is validated differently for extended metrics and custom metrics. For extended metrics that are sent to the <code>AWS/RUM</code> namespace, the following validations apply:</p> <ul> <li> <p>The <code>Namespace</code> parameter must be omitted or set to <code>AWS/RUM</code>.</p> </li> <li> <p>Only certain combinations of values for <code>Name</code>, <code>ValueKey</code>, and <code>EventPattern</code> are valid. In addition to what is displayed in the list below, the <code>EventPattern</code> can also include information used by the <code>DimensionKeys</code> field.</p> <ul> <li> <p>If <code>Name</code> is <code>PerformanceNavigationDuration</code>, then <code>ValueKey</code>must be <code>event_details.duration</code> and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.performance_navigation_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>PerformanceResourceDuration</code>, then <code>ValueKey</code>must be <code>event_details.duration</code> and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.performance_resource_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>NavigationSatisfiedTransaction</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{ "event_type": ["com.amazon.rum.performance_navigation_event"], "event_details": { "duration": [{ "numeric": ["&gt;",2000] }] } }</code> </p> </li> <li> <p>If <code>Name</code> is <code>NavigationToleratedTransaction</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{ "event_type": ["com.amazon.rum.performance_navigation_event"], "event_details": { "duration": [{ "numeric": ["&gt;=",2000,"&lt;"8000] }] } }</code> </p> </li> <li> <p>If <code>Name</code> is <code>NavigationFrustratedTransaction</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{ "event_type": ["com.amazon.rum.performance_navigation_event"], "event_details": { "duration": [{ "numeric": ["&gt;=",8000] }] } }</code> </p> </li> <li> <p>If <code>Name</code> is <code>WebVitalsCumulativeLayoutShift</code>, then <code>ValueKey</code>must be <code>event_details.value</code> and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.cumulative_layout_shift_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>WebVitalsFirstInputDelay</code>, then <code>ValueKey</code>must be <code>event_details.value</code> and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.first_input_delay_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>WebVitalsLargestContentfulPaint</code>, then <code>ValueKey</code>must be <code>event_details.value</code> and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.largest_contentful_paint_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>JsErrorCount</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.js_error_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>HttpErrorCount</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.http_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>SessionCount</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.session_start_event"]}</code> </p> </li> </ul> </li> </ul> <p>For custom metrics, the following validation rules apply:</p> <ul> <li> <p>The namespace can't be omitted and can't be <code>AWS/RUM</code>. You can use the <code>AWS/RUM</code> namespace only for extended metrics.</p> </li> <li> <p>All dimensions listed in the <code>DimensionKeys</code> field must be present in the value of <code>EventPattern</code>.</p> </li> <li> <p>The values that you specify for <code>ValueKey</code>, <code>EventPattern</code>, and <code>DimensionKeys</code> must be fields in RUM events, so all first-level keys in these fields must be one of the keys in the list later in this section.</p> </li> <li> <p>If you set a value for <code>EventPattern</code>, it must be a JSON object.</p> </li> <li> <p>For every non-empty <code>event_details</code>, there must be a non-empty <code>event_type</code>.</p> </li> <li> <p>If <code>EventPattern</code> contains an <code>event_details</code> field, it must also contain an <code>event_type</code>. For every built-in <code>event_type</code> that you use, you must use a value for <code>event_details</code> that corresponds to that <code>event_type</code>. For information about event details that correspond to event types, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-datacollected.html#CloudWatch-RUM-datacollected-eventDetails"> RUM event details</a>.</p> </li> <li> <p>In <code>EventPattern</code>, any JSON array must contain only one value.</p> </li> </ul> <p>Valid key values for first-level keys in the <code>ValueKey</code>, <code>EventPattern</code>, and <code>DimensionKeys</code> fields:</p> <ul> <li> <p> <code>account_id</code> </p> </li> <li> <p> <code>application_Id</code> </p> </li> <li> <p> <code>application_version</code> </p> </li> <li> <p> <code>application_name</code> </p> </li> <li> <p> <code>batch_id</code> </p> </li> <li> <p> <code>event_details</code> </p> </li> <li> <p> <code>event_id</code> </p> </li> <li> <p> <code>event_interaction</code> </p> </li> <li> <p> <code>event_timestamp</code> </p> </li> <li> <p> <code>event_type</code> </p> </li> <li> <p> <code>event_version</code> </p> </li> <li> <p> <code>log_stream</code> </p> </li> <li> <p> <code>metadata</code> </p> </li> <li> <p> <code>sessionId</code> </p> </li> <li> <p> <code>user_details</code> </p> </li> <li> <p> <code>userId</code> </p> </li> </ul> */
	export interface MetricDefinitionRequestFormProperties {
		EventPattern: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
		UnitLabel: FormControl<string | null | undefined>,
		ValueKey: FormControl<string | null | undefined>,
	}
	export function CreateMetricDefinitionRequestFormGroup() {
		return new FormGroup<MetricDefinitionRequestFormProperties>({
			EventPattern: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Namespace: new FormControl<string | null | undefined>(undefined),
			UnitLabel: new FormControl<string | null | undefined>(undefined),
			ValueKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DimensionKeysMap {
	}
	export interface DimensionKeysMapFormProperties {
	}
	export function CreateDimensionKeysMapFormGroup() {
		return new FormGroup<DimensionKeysMapFormProperties>({
		});

	}


	/** A structure that displays the definition of one extended metric that RUM sends to CloudWatch or CloudWatch Evidently. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html"> Additional metrics that you can send to CloudWatch and CloudWatch Evidently</a>. */
	export interface MetricDefinition {
		DimensionKeys?: DimensionKeysMap;
		EventPattern?: string;

		/** Required */
		MetricDefinitionId: string;

		/** Required */
		Name: string;
		Namespace?: string;
		UnitLabel?: string;
		ValueKey?: string;
	}

	/** A structure that displays the definition of one extended metric that RUM sends to CloudWatch or CloudWatch Evidently. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html"> Additional metrics that you can send to CloudWatch and CloudWatch Evidently</a>. */
	export interface MetricDefinitionFormProperties {
		EventPattern: FormControl<string | null | undefined>,

		/** Required */
		MetricDefinitionId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
		UnitLabel: FormControl<string | null | undefined>,
		ValueKey: FormControl<string | null | undefined>,
	}
	export function CreateMetricDefinitionFormGroup() {
		return new FormGroup<MetricDefinitionFormProperties>({
			EventPattern: new FormControl<string | null | undefined>(undefined),
			MetricDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Namespace: new FormControl<string | null | undefined>(undefined),
			UnitLabel: new FormControl<string | null | undefined>(undefined),
			ValueKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface BatchDeleteRumMetricDefinitionsResponse {

		/** Required */
		Errors: Array<BatchDeleteRumMetricDefinitionsError>;
		MetricDefinitionIds?: Array<string>;
	}
	export interface BatchDeleteRumMetricDefinitionsResponseFormProperties {
	}
	export function CreateBatchDeleteRumMetricDefinitionsResponseFormGroup() {
		return new FormGroup<BatchDeleteRumMetricDefinitionsResponseFormProperties>({
		});

	}


	/** A structure that defines one error caused by a <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchDeleteRumMetricsDefinitions.html">BatchCreateRumMetricsDefinitions</a> operation. */
	export interface BatchDeleteRumMetricDefinitionsError {

		/** Required */
		ErrorCode: string;

		/** Required */
		ErrorMessage: string;

		/** Required */
		MetricDefinitionId: string;
	}

	/** A structure that defines one error caused by a <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchDeleteRumMetricsDefinitions.html">BatchCreateRumMetricsDefinitions</a> operation. */
	export interface BatchDeleteRumMetricDefinitionsErrorFormProperties {

		/** Required */
		ErrorCode: FormControl<string | null | undefined>,

		/** Required */
		ErrorMessage: FormControl<string | null | undefined>,

		/** Required */
		MetricDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteRumMetricDefinitionsErrorFormGroup() {
		return new FormGroup<BatchDeleteRumMetricDefinitionsErrorFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MetricDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchGetRumMetricDefinitionsResponse {
		MetricDefinitions?: Array<MetricDefinition>;
		NextToken?: string;
	}
	export interface BatchGetRumMetricDefinitionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetRumMetricDefinitionsResponseFormGroup() {
		return new FormGroup<BatchGetRumMetricDefinitionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAppMonitorResponse {
		Id?: string;
	}
	export interface CreateAppMonitorResponseFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppMonitorResponseFormGroup() {
		return new FormGroup<CreateAppMonitorResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Telemetry { errors = 0, performance = 1, http = 2 }

	export enum CustomEventsStatus { ENABLED = 0, DISABLED = 1 }

	export interface DeleteAppMonitorResponse {
	}
	export interface DeleteAppMonitorResponseFormProperties {
	}
	export function CreateDeleteAppMonitorResponseFormGroup() {
		return new FormGroup<DeleteAppMonitorResponseFormProperties>({
		});

	}

	export interface DeleteRumMetricsDestinationResponse {
	}
	export interface DeleteRumMetricsDestinationResponseFormProperties {
	}
	export function CreateDeleteRumMetricsDestinationResponseFormGroup() {
		return new FormGroup<DeleteRumMetricsDestinationResponseFormProperties>({
		});

	}

	export interface GetAppMonitorResponse {
		AppMonitor?: AppMonitor;
	}
	export interface GetAppMonitorResponseFormProperties {
	}
	export function CreateGetAppMonitorResponseFormGroup() {
		return new FormGroup<GetAppMonitorResponseFormProperties>({
		});

	}


	/** A RUM app monitor collects telemetry data from your application and sends that data to RUM. The data includes performance and reliability information such as page load time, client-side errors, and user behavior. */
	export interface AppMonitor {
		AppMonitorConfiguration?: AppMonitorConfiguration;
		Created?: string;
		CustomEvents?: CustomEvents;
		DataStorage?: DataStorage;
		Domain?: string;
		Id?: string;
		LastModified?: string;
		Name?: string;
		State?: StateEnum;
		Tags?: TagMap;
	}

	/** A RUM app monitor collects telemetry data from your application and sends that data to RUM. The data includes performance and reliability information such as page load time, client-side errors, and user behavior. */
	export interface AppMonitorFormProperties {
		Created: FormControl<string | null | undefined>,
		Domain: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastModified: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<StateEnum | null | undefined>,
	}
	export function CreateAppMonitorFormGroup() {
		return new FormGroup<AppMonitorFormProperties>({
			Created: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<StateEnum | null | undefined>(undefined),
		});

	}


	/** This structure contains much of the configuration data for the app monitor. */
	export interface AppMonitorConfiguration {
		AllowCookies?: boolean | null;
		EnableXRay?: boolean | null;
		ExcludedPages?: Array<string>;
		FavoritePages?: Array<string>;
		GuestRoleArn?: string;
		IdentityPoolId?: string;
		IncludedPages?: Array<string>;
		SessionSampleRate?: number | null;
		Telemetries?: Array<Telemetry>;
	}

	/** This structure contains much of the configuration data for the app monitor. */
	export interface AppMonitorConfigurationFormProperties {
		AllowCookies: FormControl<boolean | null | undefined>,
		EnableXRay: FormControl<boolean | null | undefined>,
		GuestRoleArn: FormControl<string | null | undefined>,
		IdentityPoolId: FormControl<string | null | undefined>,
		SessionSampleRate: FormControl<number | null | undefined>,
	}
	export function CreateAppMonitorConfigurationFormGroup() {
		return new FormGroup<AppMonitorConfigurationFormProperties>({
			AllowCookies: new FormControl<boolean | null | undefined>(undefined),
			EnableXRay: new FormControl<boolean | null | undefined>(undefined),
			GuestRoleArn: new FormControl<string | null | undefined>(undefined),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined),
			SessionSampleRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A structure that contains information about custom events for this app monitor. */
	export interface CustomEvents {
		Status?: CustomEventsStatus;
	}

	/** A structure that contains information about custom events for this app monitor. */
	export interface CustomEventsFormProperties {
		Status: FormControl<CustomEventsStatus | null | undefined>,
	}
	export function CreateCustomEventsFormGroup() {
		return new FormGroup<CustomEventsFormProperties>({
			Status: new FormControl<CustomEventsStatus | null | undefined>(undefined),
		});

	}


	/** A structure that contains information about whether this app monitor stores a copy of the telemetry data that RUM collects using CloudWatch Logs. */
	export interface DataStorage {
		CwLog?: CwLog;
	}

	/** A structure that contains information about whether this app monitor stores a copy of the telemetry data that RUM collects using CloudWatch Logs. */
	export interface DataStorageFormProperties {
	}
	export function CreateDataStorageFormGroup() {
		return new FormGroup<DataStorageFormProperties>({
		});

	}


	/** A structure that contains the information about whether the app monitor stores copies of the data that RUM collects in CloudWatch Logs. If it does, this structure also contains the name of the log group. */
	export interface CwLog {
		CwLogEnabled?: boolean | null;
		CwLogGroup?: string;
	}

	/** A structure that contains the information about whether the app monitor stores copies of the data that RUM collects in CloudWatch Logs. If it does, this structure also contains the name of the log group. */
	export interface CwLogFormProperties {
		CwLogEnabled: FormControl<boolean | null | undefined>,
		CwLogGroup: FormControl<string | null | undefined>,
	}
	export function CreateCwLogFormGroup() {
		return new FormGroup<CwLogFormProperties>({
			CwLogEnabled: new FormControl<boolean | null | undefined>(undefined),
			CwLogGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StateEnum { CREATED = 0, DELETING = 1, ACTIVE = 2 }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface GetAppMonitorDataResponse {
		Events?: Array<string>;
		NextToken?: string;
	}
	export interface GetAppMonitorDataResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAppMonitorDataResponseFormGroup() {
		return new FormGroup<GetAppMonitorDataResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A structure that defines a key and values that you can use to filter the results. The only performance events that are returned are those that have values matching the ones that you specify in one of your <code>QueryFilter</code> structures.</p> <p>For example, you could specify <code>Browser</code> as the <code>Name</code> and specify <code>Chrome,Firefox</code> as the <code>Values</code> to return events generated only from those browsers.</p> <p>Specifying <code>Invert</code> as the <code>Name</code> works as a "not equal to" filter. For example, specify <code>Invert</code> as the <code>Name</code> and specify <code>Chrome</code> as the value to return all events except events from user sessions with the Chrome browser.</p> */
	export interface QueryFilter {
		Name?: string;
		Values?: Array<string>;
	}

	/** <p>A structure that defines a key and values that you can use to filter the results. The only performance events that are returned are those that have values matching the ones that you specify in one of your <code>QueryFilter</code> structures.</p> <p>For example, you could specify <code>Browser</code> as the <code>Name</code> and specify <code>Chrome,Firefox</code> as the <code>Values</code> to return events generated only from those browsers.</p> <p>Specifying <code>Invert</code> as the <code>Name</code> works as a "not equal to" filter. For example, specify <code>Invert</code> as the <code>Name</code> and specify <code>Chrome</code> as the value to return all events except events from user sessions with the Chrome browser.</p> */
	export interface QueryFilterFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateQueryFilterFormGroup() {
		return new FormGroup<QueryFilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppMonitorsResponse {
		AppMonitorSummaries?: Array<AppMonitorSummary>;
		NextToken?: string;
	}
	export interface ListAppMonitorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppMonitorsResponseFormGroup() {
		return new FormGroup<ListAppMonitorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that includes some data about app monitors and their settings. */
	export interface AppMonitorSummary {
		Created?: string;
		Id?: string;
		LastModified?: string;
		Name?: string;
		State?: StateEnum;
	}

	/** A structure that includes some data about app monitors and their settings. */
	export interface AppMonitorSummaryFormProperties {
		Created: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastModified: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<StateEnum | null | undefined>,
	}
	export function CreateAppMonitorSummaryFormGroup() {
		return new FormGroup<AppMonitorSummaryFormProperties>({
			Created: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<StateEnum | null | undefined>(undefined),
		});

	}

	export interface ListRumMetricsDestinationsResponse {
		Destinations?: Array<MetricDestinationSummary>;
		NextToken?: string;
	}
	export interface ListRumMetricsDestinationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRumMetricsDestinationsResponseFormGroup() {
		return new FormGroup<ListRumMetricsDestinationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that displays information about one destination that CloudWatch RUM sends extended metrics to. */
	export interface MetricDestinationSummary {
		Destination?: MetricDestination;
		DestinationArn?: string;
		IamRoleArn?: string;
	}

	/** A structure that displays information about one destination that CloudWatch RUM sends extended metrics to. */
	export interface MetricDestinationSummaryFormProperties {
		Destination: FormControl<MetricDestination | null | undefined>,
		DestinationArn: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateMetricDestinationSummaryFormGroup() {
		return new FormGroup<MetricDestinationSummaryFormProperties>({
			Destination: new FormControl<MetricDestination | null | undefined>(undefined),
			DestinationArn: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MetricDestination { CloudWatch = 0, Evidently = 1 }

	export interface ListTagsForResourceResponse {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutRumEventsResponse {
	}
	export interface PutRumEventsResponseFormProperties {
	}
	export function CreatePutRumEventsResponseFormGroup() {
		return new FormGroup<PutRumEventsResponseFormProperties>({
		});

	}


	/** A structure that contains the information for one performance event that RUM collects from a user session with your application. */
	export interface RumEvent {

		/** Required */
		details: string;

		/** Required */
		id: string;
		metadata?: string;

		/** Required */
		timestamp: Date;

		/** Required */
		type: string;
	}

	/** A structure that contains the information for one performance event that RUM collects from a user session with your application. */
	export interface RumEventFormProperties {

		/** Required */
		details: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Required */
		timestamp: FormControl<Date | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRumEventFormGroup() {
		return new FormGroup<RumEventFormProperties>({
			details: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutRumMetricsDestinationResponse {
	}
	export interface PutRumMetricsDestinationResponseFormProperties {
	}
	export function CreatePutRumMetricsDestinationResponseFormGroup() {
		return new FormGroup<PutRumMetricsDestinationResponseFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateAppMonitorResponse {
	}
	export interface UpdateAppMonitorResponseFormProperties {
	}
	export function CreateUpdateAppMonitorResponseFormGroup() {
		return new FormGroup<UpdateAppMonitorResponseFormProperties>({
		});

	}

	export interface UpdateRumMetricDefinitionResponse {
	}
	export interface UpdateRumMetricDefinitionResponseFormProperties {
	}
	export function CreateUpdateRumMetricDefinitionResponseFormGroup() {
		return new FormGroup<UpdateRumMetricDefinitionResponseFormProperties>({
		});

	}


	/** A structure that contains information about the RUM app monitor. */
	export interface AppMonitorDetails {
		id?: string;
		name?: string;
		version?: string;
	}

	/** A structure that contains information about the RUM app monitor. */
	export interface AppMonitorDetailsFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateAppMonitorDetailsFormGroup() {
		return new FormGroup<AppMonitorDetailsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchCreateRumMetricDefinitionsRequest {

		/** Required */
		Destination: MetricDestination;
		DestinationArn?: string;

		/** Required */
		MetricDefinitions: Array<MetricDefinitionRequest>;
	}
	export interface BatchCreateRumMetricDefinitionsRequestFormProperties {

		/** Required */
		Destination: FormControl<MetricDestination | null | undefined>,
		DestinationArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateRumMetricDefinitionsRequestFormGroup() {
		return new FormGroup<BatchCreateRumMetricDefinitionsRequestFormProperties>({
			Destination: new FormControl<MetricDestination | null | undefined>(undefined, [Validators.required]),
			DestinationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDeleteRumMetricDefinitionsRequest {
	}
	export interface BatchDeleteRumMetricDefinitionsRequestFormProperties {
	}
	export function CreateBatchDeleteRumMetricDefinitionsRequestFormGroup() {
		return new FormGroup<BatchDeleteRumMetricDefinitionsRequestFormProperties>({
		});

	}

	export interface BatchGetRumMetricDefinitionsRequest {
	}
	export interface BatchGetRumMetricDefinitionsRequestFormProperties {
	}
	export function CreateBatchGetRumMetricDefinitionsRequestFormGroup() {
		return new FormGroup<BatchGetRumMetricDefinitionsRequestFormProperties>({
		});

	}

	export interface CreateAppMonitorRequest {
		AppMonitorConfiguration?: AppMonitorConfiguration;
		CustomEvents?: CustomEvents;
		CwLogEnabled?: boolean | null;

		/** Required */
		Domain: string;

		/** Required */
		Name: string;
		Tags?: TagMap;
	}
	export interface CreateAppMonitorRequestFormProperties {
		CwLogEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		Domain: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppMonitorRequestFormGroup() {
		return new FormGroup<CreateAppMonitorRequestFormProperties>({
			CwLogEnabled: new FormControl<boolean | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAppMonitorRequest {
	}
	export interface DeleteAppMonitorRequestFormProperties {
	}
	export function CreateDeleteAppMonitorRequestFormGroup() {
		return new FormGroup<DeleteAppMonitorRequestFormProperties>({
		});

	}

	export interface DeleteRumMetricsDestinationRequest {
	}
	export interface DeleteRumMetricsDestinationRequestFormProperties {
	}
	export function CreateDeleteRumMetricsDestinationRequestFormGroup() {
		return new FormGroup<DeleteRumMetricsDestinationRequestFormProperties>({
		});

	}


	/** A structure that defines the time range that you want to retrieve results from. */
	export interface TimeRange {

		/** Required */
		After: number;
		Before?: number | null;
	}

	/** A structure that defines the time range that you want to retrieve results from. */
	export interface TimeRangeFormProperties {

		/** Required */
		After: FormControl<number | null | undefined>,
		Before: FormControl<number | null | undefined>,
	}
	export function CreateTimeRangeFormGroup() {
		return new FormGroup<TimeRangeFormProperties>({
			After: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Before: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAppMonitorDataRequest {
		Filters?: Array<QueryFilter>;
		MaxResults?: number | null;
		NextToken?: string;

		/** Required */
		TimeRange: TimeRange;
	}
	export interface GetAppMonitorDataRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAppMonitorDataRequestFormGroup() {
		return new FormGroup<GetAppMonitorDataRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAppMonitorRequest {
	}
	export interface GetAppMonitorRequestFormProperties {
	}
	export function CreateGetAppMonitorRequestFormGroup() {
		return new FormGroup<GetAppMonitorRequestFormProperties>({
		});

	}

	export interface ListAppMonitorsRequest {
	}
	export interface ListAppMonitorsRequestFormProperties {
	}
	export function CreateListAppMonitorsRequestFormGroup() {
		return new FormGroup<ListAppMonitorsRequestFormProperties>({
		});

	}

	export interface ListRumMetricsDestinationsRequest {
	}
	export interface ListRumMetricsDestinationsRequestFormProperties {
	}
	export function CreateListRumMetricsDestinationsRequestFormGroup() {
		return new FormGroup<ListRumMetricsDestinationsRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}


	/** A structure that contains information about the user session that this batch of events was collected from. */
	export interface UserDetails {
		sessionId?: string;
		userId?: string;
	}

	/** A structure that contains information about the user session that this batch of events was collected from. */
	export interface UserDetailsFormProperties {
		sessionId: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserDetailsFormGroup() {
		return new FormGroup<UserDetailsFormProperties>({
			sessionId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutRumEventsRequest {

		/** Required */
		AppMonitorDetails: AppMonitorDetails;

		/** Required */
		BatchId: string;

		/** Required */
		RumEvents: Array<RumEvent>;

		/** Required */
		UserDetails: UserDetails;
	}
	export interface PutRumEventsRequestFormProperties {

		/** Required */
		BatchId: FormControl<string | null | undefined>,
	}
	export function CreatePutRumEventsRequestFormGroup() {
		return new FormGroup<PutRumEventsRequestFormProperties>({
			BatchId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutRumMetricsDestinationRequest {

		/** Required */
		Destination: MetricDestination;
		DestinationArn?: string;
		IamRoleArn?: string;
	}
	export interface PutRumMetricsDestinationRequestFormProperties {

		/** Required */
		Destination: FormControl<MetricDestination | null | undefined>,
		DestinationArn: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreatePutRumMetricsDestinationRequestFormGroup() {
		return new FormGroup<PutRumMetricsDestinationRequestFormProperties>({
			Destination: new FormControl<MetricDestination | null | undefined>(undefined, [Validators.required]),
			DestinationArn: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateAppMonitorRequest {
		AppMonitorConfiguration?: AppMonitorConfiguration;
		CustomEvents?: CustomEvents;
		CwLogEnabled?: boolean | null;
		Domain?: string;
	}
	export interface UpdateAppMonitorRequestFormProperties {
		CwLogEnabled: FormControl<boolean | null | undefined>,
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppMonitorRequestFormGroup() {
		return new FormGroup<UpdateAppMonitorRequestFormProperties>({
			CwLogEnabled: new FormControl<boolean | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRumMetricDefinitionRequest {

		/** Required */
		Destination: MetricDestination;
		DestinationArn?: string;

		/** Required */
		MetricDefinition: MetricDefinitionRequest;

		/** Required */
		MetricDefinitionId: string;
	}
	export interface UpdateRumMetricDefinitionRequestFormProperties {

		/** Required */
		Destination: FormControl<MetricDestination | null | undefined>,
		DestinationArn: FormControl<string | null | undefined>,

		/** Required */
		MetricDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRumMetricDefinitionRequestFormGroup() {
		return new FormGroup<UpdateRumMetricDefinitionRequestFormProperties>({
			Destination: new FormControl<MetricDestination | null | undefined>(undefined, [Validators.required]),
			DestinationArn: new FormControl<string | null | undefined>(undefined),
			MetricDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Specifies the extended metrics and custom metrics that you want a CloudWatch RUM app monitor to send to a destination. Valid destinations include CloudWatch and Evidently.</p> <p>By default, RUM app monitors send some metrics to CloudWatch. These default metrics are listed in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-metrics.html">CloudWatch metrics that you can collect with CloudWatch RUM</a>.</p> <p>In addition to these default metrics, you can choose to send extended metrics or custom metrics or both.</p> <ul> <li> <p>Extended metrics enable you to send metrics with additional dimensions not included in the default metrics. You can also send extended metrics to Evidently as well as CloudWatch. The valid dimension names for the additional dimensions for extended metrics are <code>BrowserName</code>, <code>CountryCode</code>, <code>DeviceType</code>, <code>FileType</code>, <code>OSName</code>, and <code>PageId</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html"> Extended metrics that you can send to CloudWatch and CloudWatch Evidently</a>.</p> </li> <li> <p>Custom metrics are metrics that you define. You can send custom metrics to CloudWatch or to CloudWatch Evidently or to both. With custom metrics, you can use any metric name and namespace, and to derive the metrics you can use any custom events, built-in events, custom attributes, or default attributes. </p> <p>You can't send custom metrics to the <code>AWS/RUM</code> namespace. You must send custom metrics to a custom namespace that you define. The namespace that you use can't start with <code>AWS/</code>. CloudWatch RUM prepends <code>RUM/CustomMetrics/</code> to the custom namespace that you define, so the final namespace for your metrics in CloudWatch is <code>RUM/CustomMetrics/<i>your-custom-namespace</i> </code>.</p> </li> </ul> <p>The maximum number of metric definitions that you can specify in one <code>BatchCreateRumMetricDefinitions</code> operation is 200.</p> <p>The maximum number of metric definitions that one destination can contain is 2000.</p> <p>Extended metrics sent to CloudWatch and RUM custom metrics are charged as CloudWatch custom metrics. Each combination of additional dimension name and dimension value counts as a custom metric. For more information, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> <p>You must have already created a destination for the metrics before you send them. For more information, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_PutRumMetricsDestination.html">PutRumMetricsDestination</a>.</p> <p>If some metric definitions specified in a <code>BatchCreateRumMetricDefinitions</code> operations are not valid, those metric definitions fail and return errors, but all valid metric definitions in the same operation still succeed.</p>
		 * Post rummetrics/{AppMonitorName}/metrics
		 * @param {string} AppMonitorName The name of the CloudWatch RUM app monitor that is to send the metrics.
		 * @return {BatchCreateRumMetricDefinitionsResponse} Success
		 */
		BatchCreateRumMetricDefinitions(AppMonitorName: string, requestBody: BatchCreateRumMetricDefinitionsPostBody): Observable<BatchCreateRumMetricDefinitionsResponse> {
			return this.http.post<BatchCreateRumMetricDefinitionsResponse>(this.baseUri + 'rummetrics/' + (AppMonitorName == null ? '' : encodeURIComponent(AppMonitorName)) + '/metrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies one existing metric definition for CloudWatch RUM extended metrics. For more information about extended metrics, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchCreateRumMetricsDefinitions.html">BatchCreateRumMetricsDefinitions</a>.
		 * Patch rummetrics/{AppMonitorName}/metrics
		 * @param {string} AppMonitorName The name of the CloudWatch RUM app monitor that sends these metrics.
		 * @return {UpdateRumMetricDefinitionResponse} Success
		 */
		UpdateRumMetricDefinition(AppMonitorName: string, requestBody: UpdateRumMetricDefinitionPatchBody): Observable<UpdateRumMetricDefinitionResponse> {
			return this.http.patch<UpdateRumMetricDefinitionResponse>(this.baseUri + 'rummetrics/' + (AppMonitorName == null ? '' : encodeURIComponent(AppMonitorName)) + '/metrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the specified metrics from being sent to an extended metrics destination.</p> <p>If some metric definition IDs specified in a <code>BatchDeleteRumMetricDefinitions</code> operations are not valid, those metric definitions fail and return errors, but all valid metric definition IDs in the same operation are still deleted.</p> <p>The maximum number of metric definitions that you can specify in one <code>BatchDeleteRumMetricDefinitions</code> operation is 200.</p>
		 * Delete rummetrics/{AppMonitorName}/metrics#destination&metricDefinitionIds
		 * @param {string} AppMonitorName The name of the CloudWatch RUM app monitor that is sending these metrics.
		 * @param {MetricDestination} destination Defines the destination where you want to stop sending the specified metrics. Valid values are <code>CloudWatch</code> and <code>Evidently</code>. If you specify <code>Evidently</code>, you must also specify the ARN of the CloudWatchEvidently experiment that is to be the destination and an IAM role that has permission to write to the experiment.
		 * @param {string} destinationArn <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is <code>CloudWatch</code>, do not use this parameter. </p> <p>This parameter specifies the ARN of the Evidently experiment that was receiving the metrics that are being deleted.</p>
		 * @param {Array<string>} metricDefinitionIds An array of structures which define the metrics that you want to stop sending.
		 * @return {BatchDeleteRumMetricDefinitionsResponse} Success
		 */
		BatchDeleteRumMetricDefinitions(AppMonitorName: string, destination: MetricDestination, destinationArn: string | null | undefined, metricDefinitionIds: Array<string>): Observable<BatchDeleteRumMetricDefinitionsResponse> {
			return this.http.delete<BatchDeleteRumMetricDefinitionsResponse>(this.baseUri + 'rummetrics/' + (AppMonitorName == null ? '' : encodeURIComponent(AppMonitorName)) + '/metrics#destination&metricDefinitionIds&destination=' + destination + '&destinationArn=' + (destinationArn == null ? '' : encodeURIComponent(destinationArn)) + '&' + metricDefinitionIds.map(z => `metricDefinitionIds=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Retrieves the list of metrics and dimensions that a RUM app monitor is sending to a single destination.
		 * Get rummetrics/{AppMonitorName}/metrics#destination
		 * @param {string} AppMonitorName The name of the CloudWatch RUM app monitor that is sending the metrics.
		 * @param {MetricDestination} destination The type of destination that you want to view metrics for. Valid values are <code>CloudWatch</code> and <code>Evidently</code>.
		 * @param {string} destinationArn <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is <code>CloudWatch</code>, do not use this parameter.</p> <p>This parameter specifies the ARN of the Evidently experiment that corresponds to the destination.</p>
		 * @param {number} maxResults <p>The maximum number of results to return in one operation. The default is 50. The maximum that you can specify is 100.</p> <p>To retrieve the remaining results, make another call with the returned <code>NextToken</code> value. </p>
		 * @param {string} nextToken Use the token returned by the previous operation to request the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {BatchGetRumMetricDefinitionsResponse} Success
		 */
		BatchGetRumMetricDefinitions(AppMonitorName: string, destination: MetricDestination, destinationArn: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<BatchGetRumMetricDefinitionsResponse> {
			return this.http.get<BatchGetRumMetricDefinitionsResponse>(this.baseUri + 'rummetrics/' + (AppMonitorName == null ? '' : encodeURIComponent(AppMonitorName)) + '/metrics#destination&destination=' + destination + '&destinationArn=' + (destinationArn == null ? '' : encodeURIComponent(destinationArn)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a Amazon CloudWatch RUM app monitor, which collects telemetry data from your application and sends that data to RUM. The data includes performance and reliability information such as page load time, client-side errors, and user behavior.</p> <p>You use this operation only to create a new app monitor. To update an existing app monitor, use <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_UpdateAppMonitor.html">UpdateAppMonitor</a> instead.</p> <p>After you create an app monitor, sign in to the CloudWatch RUM console to get the JavaScript code snippet to add to your web application. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-find-code-snippet.html">How do I find a code snippet that I've already generated?</a> </p>
		 * Post appmonitor
		 * @return {CreateAppMonitorResponse} Success
		 */
		CreateAppMonitor(requestBody: CreateAppMonitorPostBody): Observable<CreateAppMonitorResponse> {
			return this.http.post<CreateAppMonitorResponse>(this.baseUri + 'appmonitor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing app monitor. This immediately stops the collection of data.
		 * Delete appmonitor/{Name}
		 * @param {string} Name The name of the app monitor to delete.
		 * @return {DeleteAppMonitorResponse} Success
		 */
		DeleteAppMonitor(Name: string): Observable<DeleteAppMonitorResponse> {
			return this.http.delete<DeleteAppMonitorResponse>(this.baseUri + 'appmonitor/' + (Name == null ? '' : encodeURIComponent(Name)), {});
		}

		/**
		 * Retrieves the complete configuration information for one app monitor.
		 * Get appmonitor/{Name}
		 * @param {string} Name The app monitor to retrieve information for.
		 * @return {GetAppMonitorResponse} Success
		 */
		GetAppMonitor(Name: string): Observable<GetAppMonitorResponse> {
			return this.http.get<GetAppMonitorResponse>(this.baseUri + 'appmonitor/' + (Name == null ? '' : encodeURIComponent(Name)), {});
		}

		/**
		 * <p>Updates the configuration of an existing app monitor. When you use this operation, only the parts of the app monitor configuration that you specify in this operation are changed. For any parameters that you omit, the existing values are kept.</p> <p>You can't use this operation to change the tags of an existing app monitor. To change the tags of an existing app monitor, use <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_TagResource.html">TagResource</a>.</p> <p>To create a new app monitor, use <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_CreateAppMonitor.html">CreateAppMonitor</a>.</p> <p>After you update an app monitor, sign in to the CloudWatch RUM console to get the updated JavaScript code snippet to add to your web application. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-find-code-snippet.html">How do I find a code snippet that I've already generated?</a> </p>
		 * Patch appmonitor/{Name}
		 * @param {string} Name The name of the app monitor to update.
		 * @return {UpdateAppMonitorResponse} Success
		 */
		UpdateAppMonitor(Name: string, requestBody: UpdateAppMonitorPatchBody): Observable<UpdateAppMonitorResponse> {
			return this.http.patch<UpdateAppMonitorResponse>(this.baseUri + 'appmonitor/' + (Name == null ? '' : encodeURIComponent(Name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a destination for CloudWatch RUM extended metrics, so that the specified app monitor stops sending extended metrics to that destination.
		 * Delete rummetrics/{AppMonitorName}/metricsdestination#destination
		 * @param {string} AppMonitorName The name of the app monitor that is sending metrics to the destination that you want to delete.
		 * @param {MetricDestination} destination The type of destination to delete. Valid values are <code>CloudWatch</code> and <code>Evidently</code>.
		 * @param {string} destinationArn This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is <code>CloudWatch</code>, do not use this parameter. This parameter specifies the ARN of the Evidently experiment that corresponds to the destination to delete.
		 * @return {DeleteRumMetricsDestinationResponse} Success
		 */
		DeleteRumMetricsDestination(AppMonitorName: string, destination: MetricDestination, destinationArn: string | null | undefined): Observable<DeleteRumMetricsDestinationResponse> {
			return this.http.delete<DeleteRumMetricsDestinationResponse>(this.baseUri + 'rummetrics/' + (AppMonitorName == null ? '' : encodeURIComponent(AppMonitorName)) + '/metricsdestination#destination&destination=' + destination + '&destinationArn=' + (destinationArn == null ? '' : encodeURIComponent(destinationArn)), {});
		}

		/**
		 * Retrieves the raw performance events that RUM has collected from your web application, so that you can do your own processing or analysis of this data.
		 * Post appmonitor/{Name}/data
		 * @param {string} Name The name of the app monitor that collected the data that you want to retrieve.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetAppMonitorDataResponse} Success
		 */
		GetAppMonitorData(Name: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetAppMonitorDataPostBody): Observable<GetAppMonitorDataResponse> {
			return this.http.post<GetAppMonitorDataResponse>(this.baseUri + 'appmonitor/' + (Name == null ? '' : encodeURIComponent(Name)) + '/data&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the Amazon CloudWatch RUM app monitors in the account.
		 * Post appmonitors
		 * @param {number} maxResults The maximum number of results to return in one operation. The default is 50. The maximum that you can specify is 100.
		 * @param {string} nextToken Use the token returned by the previous operation to request the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAppMonitorsResponse} Success
		 */
		ListAppMonitors(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAppMonitorsResponse> {
			return this.http.post<ListAppMonitorsResponse>(this.baseUri + 'appmonitors?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), null, {});
		}

		/**
		 * <p>Returns a list of destinations that you have created to receive RUM extended metrics, for the specified app monitor.</p> <p>For more information about extended metrics, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_AddRumMetrcs.html">AddRumMetrics</a>.</p>
		 * Get rummetrics/{AppMonitorName}/metricsdestination
		 * @param {string} AppMonitorName The name of the app monitor associated with the destinations that you want to retrieve.
		 * @param {number} maxResults <p>The maximum number of results to return in one operation. The default is 50. The maximum that you can specify is 100.</p> <p>To retrieve the remaining results, make another call with the returned <code>NextToken</code> value. </p>
		 * @param {string} nextToken Use the token returned by the previous operation to request the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRumMetricsDestinationsResponse} Success
		 */
		ListRumMetricsDestinations(AppMonitorName: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRumMetricsDestinationsResponse> {
			return this.http.get<ListRumMetricsDestinationsResponse>(this.baseUri + 'rummetrics/' + (AppMonitorName == null ? '' : encodeURIComponent(AppMonitorName)) + '/metricsdestination&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates or updates a destination to receive extended metrics from CloudWatch RUM. You can send extended metrics to CloudWatch or to a CloudWatch Evidently experiment.</p> <p>For more information about extended metrics, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchCreateRumMetricDefinitions.html">BatchCreateRumMetricDefinitions</a>.</p>
		 * Post rummetrics/{AppMonitorName}/metricsdestination
		 * @param {string} AppMonitorName The name of the CloudWatch RUM app monitor that will send the metrics.
		 * @return {PutRumMetricsDestinationResponse} Success
		 */
		PutRumMetricsDestination(AppMonitorName: string, requestBody: PutRumMetricsDestinationPostBody): Observable<PutRumMetricsDestinationResponse> {
			return this.http.post<PutRumMetricsDestinationResponse>(this.baseUri + 'rummetrics/' + (AppMonitorName == null ? '' : encodeURIComponent(AppMonitorName)) + '/metricsdestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays the tags associated with a CloudWatch RUM resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The ARN of the resource that you want to see the tags of.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch RUM resource. Currently, the only resources that can be tagged app monitors.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The ARN of the CloudWatch RUM resource that you're adding tags to.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends telemetry events about your application performance and user behavior to CloudWatch RUM. The code snippet that RUM generates for you to add to your application includes <code>PutRumEvents</code> operations to send this data to RUM.</p> <p>Each <code>PutRumEvents</code> operation can send a batch of events from one user session.</p>
		 * Post appmonitors/{Id}/
		 * @param {string} Id The ID of the app monitor that is sending this data.
		 * @return {PutRumEventsResponse} Success
		 */
		PutRumEvents(Id: string, requestBody: PutRumEventsPostBody): Observable<PutRumEventsResponse> {
			return this.http.post<PutRumEventsResponse>(this.baseUri + 'appmonitors/' + (Id == null ? '' : encodeURIComponent(Id)) + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from the specified resource.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The ARN of the CloudWatch RUM resource that you're removing tags from.
		 * @param {Array<string>} tagKeys The list of tag keys to remove from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface BatchCreateRumMetricDefinitionsPostBody {

		/**
		 * The destination to send the metrics to. Valid values are <code>CloudWatch</code> and <code>Evidently</code>. If you specify <code>Evidently</code>, you must also specify the ARN of the CloudWatchEvidently experiment that will receive the metrics and an IAM role that has permission to write to the experiment.
		 * Required
		 */
		Destination: MetricDestination;

		/**
		 * <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is <code>CloudWatch</code>, do not use this parameter.</p> <p>This parameter specifies the ARN of the Evidently experiment that is to receive the metrics. You must have already defined this experiment as a valid destination. For more information, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_PutRumMetricsDestination.html">PutRumMetricsDestination</a>.</p>
		 * Max length: 2048
		 * Min length: 0
		 */
		DestinationArn?: string | null;

		/**
		 * An array of structures which define the metrics that you want to send.
		 * Required
		 */
		MetricDefinitions: Array<MetricDefinitionRequest>;
	}
	export interface BatchCreateRumMetricDefinitionsPostBodyFormProperties {

		/**
		 * The destination to send the metrics to. Valid values are <code>CloudWatch</code> and <code>Evidently</code>. If you specify <code>Evidently</code>, you must also specify the ARN of the CloudWatchEvidently experiment that will receive the metrics and an IAM role that has permission to write to the experiment.
		 * Required
		 */
		Destination: FormControl<MetricDestination | null | undefined>,

		/**
		 * <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is <code>CloudWatch</code>, do not use this parameter.</p> <p>This parameter specifies the ARN of the Evidently experiment that is to receive the metrics. You must have already defined this experiment as a valid destination. For more information, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_PutRumMetricsDestination.html">PutRumMetricsDestination</a>.</p>
		 * Max length: 2048
		 * Min length: 0
		 */
		DestinationArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateRumMetricDefinitionsPostBodyFormGroup() {
		return new FormGroup<BatchCreateRumMetricDefinitionsPostBodyFormProperties>({
			Destination: new FormControl<MetricDestination | null | undefined>(undefined, [Validators.required]),
			DestinationArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('arn:[^:]*:[^:]*:[^:]*:[^:]*:.*')]),
		});

	}

	export interface UpdateRumMetricDefinitionPatchBody {

		/**
		 * The destination to send the metrics to. Valid values are <code>CloudWatch</code> and <code>Evidently</code>. If you specify <code>Evidently</code>, you must also specify the ARN of the CloudWatchEvidently experiment that will receive the metrics and an IAM role that has permission to write to the experiment.
		 * Required
		 */
		Destination: MetricDestination;

		/**
		 * <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is <code>CloudWatch</code>, do not use this parameter.</p> <p>This parameter specifies the ARN of the Evidently experiment that is to receive the metrics. You must have already defined this experiment as a valid destination. For more information, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_PutRumMetricsDestination.html">PutRumMetricsDestination</a>.</p>
		 * Max length: 2048
		 * Min length: 0
		 */
		DestinationArn?: string | null;

		/**
		 * <p>Use this structure to define one extended metric or custom metric that RUM will send to CloudWatch or CloudWatch Evidently. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html"> Additional metrics that you can send to CloudWatch and CloudWatch Evidently</a>.</p> <p>This structure is validated differently for extended metrics and custom metrics. For extended metrics that are sent to the <code>AWS/RUM</code> namespace, the following validations apply:</p> <ul> <li> <p>The <code>Namespace</code> parameter must be omitted or set to <code>AWS/RUM</code>.</p> </li> <li> <p>Only certain combinations of values for <code>Name</code>, <code>ValueKey</code>, and <code>EventPattern</code> are valid. In addition to what is displayed in the list below, the <code>EventPattern</code> can also include information used by the <code>DimensionKeys</code> field.</p> <ul> <li> <p>If <code>Name</code> is <code>PerformanceNavigationDuration</code>, then <code>ValueKey</code>must be <code>event_details.duration</code> and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.performance_navigation_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>PerformanceResourceDuration</code>, then <code>ValueKey</code>must be <code>event_details.duration</code> and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.performance_resource_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>NavigationSatisfiedTransaction</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{ "event_type": ["com.amazon.rum.performance_navigation_event"], "event_details": { "duration": [{ "numeric": ["&gt;",2000] }] } }</code> </p> </li> <li> <p>If <code>Name</code> is <code>NavigationToleratedTransaction</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{ "event_type": ["com.amazon.rum.performance_navigation_event"], "event_details": { "duration": [{ "numeric": ["&gt;=",2000,"&lt;"8000] }] } }</code> </p> </li> <li> <p>If <code>Name</code> is <code>NavigationFrustratedTransaction</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{ "event_type": ["com.amazon.rum.performance_navigation_event"], "event_details": { "duration": [{ "numeric": ["&gt;=",8000] }] } }</code> </p> </li> <li> <p>If <code>Name</code> is <code>WebVitalsCumulativeLayoutShift</code>, then <code>ValueKey</code>must be <code>event_details.value</code> and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.cumulative_layout_shift_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>WebVitalsFirstInputDelay</code>, then <code>ValueKey</code>must be <code>event_details.value</code> and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.first_input_delay_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>WebVitalsLargestContentfulPaint</code>, then <code>ValueKey</code>must be <code>event_details.value</code> and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.largest_contentful_paint_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>JsErrorCount</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.js_error_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>HttpErrorCount</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.http_event"]}</code> </p> </li> <li> <p>If <code>Name</code> is <code>SessionCount</code>, then <code>ValueKey</code>must be null and the <code>EventPattern</code> must include <code>{"event_type":["com.amazon.rum.session_start_event"]}</code> </p> </li> </ul> </li> </ul> <p>For custom metrics, the following validation rules apply:</p> <ul> <li> <p>The namespace can't be omitted and can't be <code>AWS/RUM</code>. You can use the <code>AWS/RUM</code> namespace only for extended metrics.</p> </li> <li> <p>All dimensions listed in the <code>DimensionKeys</code> field must be present in the value of <code>EventPattern</code>.</p> </li> <li> <p>The values that you specify for <code>ValueKey</code>, <code>EventPattern</code>, and <code>DimensionKeys</code> must be fields in RUM events, so all first-level keys in these fields must be one of the keys in the list later in this section.</p> </li> <li> <p>If you set a value for <code>EventPattern</code>, it must be a JSON object.</p> </li> <li> <p>For every non-empty <code>event_details</code>, there must be a non-empty <code>event_type</code>.</p> </li> <li> <p>If <code>EventPattern</code> contains an <code>event_details</code> field, it must also contain an <code>event_type</code>. For every built-in <code>event_type</code> that you use, you must use a value for <code>event_details</code> that corresponds to that <code>event_type</code>. For information about event details that correspond to event types, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-datacollected.html#CloudWatch-RUM-datacollected-eventDetails"> RUM event details</a>.</p> </li> <li> <p>In <code>EventPattern</code>, any JSON array must contain only one value.</p> </li> </ul> <p>Valid key values for first-level keys in the <code>ValueKey</code>, <code>EventPattern</code>, and <code>DimensionKeys</code> fields:</p> <ul> <li> <p> <code>account_id</code> </p> </li> <li> <p> <code>application_Id</code> </p> </li> <li> <p> <code>application_version</code> </p> </li> <li> <p> <code>application_name</code> </p> </li> <li> <p> <code>batch_id</code> </p> </li> <li> <p> <code>event_details</code> </p> </li> <li> <p> <code>event_id</code> </p> </li> <li> <p> <code>event_interaction</code> </p> </li> <li> <p> <code>event_timestamp</code> </p> </li> <li> <p> <code>event_type</code> </p> </li> <li> <p> <code>event_version</code> </p> </li> <li> <p> <code>log_stream</code> </p> </li> <li> <p> <code>metadata</code> </p> </li> <li> <p> <code>sessionId</code> </p> </li> <li> <p> <code>user_details</code> </p> </li> <li> <p> <code>userId</code> </p> </li> </ul>
		 * Required
		 */
		MetricDefinition: UpdateRumMetricDefinitionPatchBodyMetricDefinition;

		/**
		 * The ID of the metric definition to update.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MetricDefinitionId: string;
	}
	export interface UpdateRumMetricDefinitionPatchBodyFormProperties {

		/**
		 * The destination to send the metrics to. Valid values are <code>CloudWatch</code> and <code>Evidently</code>. If you specify <code>Evidently</code>, you must also specify the ARN of the CloudWatchEvidently experiment that will receive the metrics and an IAM role that has permission to write to the experiment.
		 * Required
		 */
		Destination: FormControl<MetricDestination | null | undefined>,

		/**
		 * <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is <code>CloudWatch</code>, do not use this parameter.</p> <p>This parameter specifies the ARN of the Evidently experiment that is to receive the metrics. You must have already defined this experiment as a valid destination. For more information, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_PutRumMetricsDestination.html">PutRumMetricsDestination</a>.</p>
		 * Max length: 2048
		 * Min length: 0
		 */
		DestinationArn: FormControl<string | null | undefined>,

		/**
		 * The ID of the metric definition to update.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MetricDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRumMetricDefinitionPatchBodyFormGroup() {
		return new FormGroup<UpdateRumMetricDefinitionPatchBodyFormProperties>({
			Destination: new FormControl<MetricDestination | null | undefined>(undefined, [Validators.required]),
			DestinationArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('arn:[^:]*:[^:]*:[^:]*:[^:]*:.*')]),
			MetricDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface UpdateRumMetricDefinitionPatchBodyMetricDefinition {
		DimensionKeys?: DimensionKeysMap;
		EventPattern?: string;
		Name?: string;
		Namespace?: string;
		UnitLabel?: string;
		ValueKey?: string;
	}
	export interface UpdateRumMetricDefinitionPatchBodyMetricDefinitionFormProperties {
		EventPattern: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
		UnitLabel: FormControl<string | null | undefined>,
		ValueKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRumMetricDefinitionPatchBodyMetricDefinitionFormGroup() {
		return new FormGroup<UpdateRumMetricDefinitionPatchBodyMetricDefinitionFormProperties>({
			EventPattern: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Namespace: new FormControl<string | null | undefined>(undefined),
			UnitLabel: new FormControl<string | null | undefined>(undefined),
			ValueKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAppMonitorPostBody {

		/** This structure contains much of the configuration data for the app monitor. */
		AppMonitorConfiguration?: CreateAppMonitorPostBodyAppMonitorConfiguration;

		/** A structure that contains information about custom events for this app monitor. */
		CustomEvents?: CreateAppMonitorPostBodyCustomEvents;

		/** <p>Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges.</p> <p>If you omit this parameter, the default is <code>false</code>.</p> */
		CwLogEnabled?: boolean | null;

		/**
		 * The top-level internet domain name for which your application has administrative authority.
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		Domain: string;

		/**
		 * A name for the app monitor.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/** <p>Assigns one or more tags (key-value pairs) to the app monitor.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can associate as many as 50 tags with an app monitor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p> */
		Tags?: {[id: string]: string };
	}
	export interface CreateAppMonitorPostBodyFormProperties {

		/** <p>Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges.</p> <p>If you omit this parameter, the default is <code>false</code>.</p> */
		CwLogEnabled: FormControl<boolean | null | undefined>,

		/**
		 * The top-level internet domain name for which your application has administrative authority.
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		Domain: FormControl<string | null | undefined>,

		/**
		 * A name for the app monitor.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** <p>Assigns one or more tags (key-value pairs) to the app monitor.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can associate as many as 50 tags with an app monitor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAppMonitorPostBodyFormGroup() {
		return new FormGroup<CreateAppMonitorPostBodyFormProperties>({
			CwLogEnabled: new FormControl<boolean | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(253), Validators.pattern('^(localhost)|^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(?![-.])([A-Za-z0-9-\.\-]{0,63})((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))\.(?![-])[A-Za-z-0-9]{1,63}((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))|^(\*\.)(?![-.])([A-Za-z0-9-\.\-]{0,63})((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))\.(?![-])[A-Za-z-0-9]{1,63}((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(?!\.)[\.\-_#A-Za-z0-9]+$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateAppMonitorPostBodyAppMonitorConfiguration {
		AllowCookies?: boolean | null;
		EnableXRay?: boolean | null;
		ExcludedPages?: Array<string>;
		FavoritePages?: Array<string>;
		GuestRoleArn?: string;
		IdentityPoolId?: string;
		IncludedPages?: Array<string>;
		SessionSampleRate?: number | null;
		Telemetries?: Array<Telemetry>;
	}
	export interface CreateAppMonitorPostBodyAppMonitorConfigurationFormProperties {
		AllowCookies: FormControl<boolean | null | undefined>,
		EnableXRay: FormControl<boolean | null | undefined>,
		GuestRoleArn: FormControl<string | null | undefined>,
		IdentityPoolId: FormControl<string | null | undefined>,
		SessionSampleRate: FormControl<number | null | undefined>,
	}
	export function CreateCreateAppMonitorPostBodyAppMonitorConfigurationFormGroup() {
		return new FormGroup<CreateAppMonitorPostBodyAppMonitorConfigurationFormProperties>({
			AllowCookies: new FormControl<boolean | null | undefined>(undefined),
			EnableXRay: new FormControl<boolean | null | undefined>(undefined),
			GuestRoleArn: new FormControl<string | null | undefined>(undefined),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined),
			SessionSampleRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateAppMonitorPostBodyCustomEvents {
		Status?: CustomEventsStatus;
	}
	export interface CreateAppMonitorPostBodyCustomEventsFormProperties {
		Status: FormControl<CustomEventsStatus | null | undefined>,
	}
	export function CreateCreateAppMonitorPostBodyCustomEventsFormGroup() {
		return new FormGroup<CreateAppMonitorPostBodyCustomEventsFormProperties>({
			Status: new FormControl<CustomEventsStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateAppMonitorPatchBody {

		/** This structure contains much of the configuration data for the app monitor. */
		AppMonitorConfiguration?: UpdateAppMonitorPatchBodyAppMonitorConfiguration;

		/** A structure that contains information about custom events for this app monitor. */
		CustomEvents?: UpdateAppMonitorPatchBodyCustomEvents;

		/** Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges. */
		CwLogEnabled?: boolean | null;

		/**
		 * The top-level internet domain name for which your application has administrative authority.
		 * Max length: 253
		 * Min length: 1
		 */
		Domain?: string | null;
	}
	export interface UpdateAppMonitorPatchBodyFormProperties {

		/** Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges. */
		CwLogEnabled: FormControl<boolean | null | undefined>,

		/**
		 * The top-level internet domain name for which your application has administrative authority.
		 * Max length: 253
		 * Min length: 1
		 */
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppMonitorPatchBodyFormGroup() {
		return new FormGroup<UpdateAppMonitorPatchBodyFormProperties>({
			CwLogEnabled: new FormControl<boolean | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(253), Validators.pattern('^(localhost)|^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(?![-.])([A-Za-z0-9-\.\-]{0,63})((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))\.(?![-])[A-Za-z-0-9]{1,63}((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))|^(\*\.)(?![-.])([A-Za-z0-9-\.\-]{0,63})((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))\.(?![-])[A-Za-z-0-9]{1,63}((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))')]),
		});

	}

	export interface UpdateAppMonitorPatchBodyAppMonitorConfiguration {
		AllowCookies?: boolean | null;
		EnableXRay?: boolean | null;
		ExcludedPages?: Array<string>;
		FavoritePages?: Array<string>;
		GuestRoleArn?: string;
		IdentityPoolId?: string;
		IncludedPages?: Array<string>;
		SessionSampleRate?: number | null;
		Telemetries?: Array<Telemetry>;
	}
	export interface UpdateAppMonitorPatchBodyAppMonitorConfigurationFormProperties {
		AllowCookies: FormControl<boolean | null | undefined>,
		EnableXRay: FormControl<boolean | null | undefined>,
		GuestRoleArn: FormControl<string | null | undefined>,
		IdentityPoolId: FormControl<string | null | undefined>,
		SessionSampleRate: FormControl<number | null | undefined>,
	}
	export function CreateUpdateAppMonitorPatchBodyAppMonitorConfigurationFormGroup() {
		return new FormGroup<UpdateAppMonitorPatchBodyAppMonitorConfigurationFormProperties>({
			AllowCookies: new FormControl<boolean | null | undefined>(undefined),
			EnableXRay: new FormControl<boolean | null | undefined>(undefined),
			GuestRoleArn: new FormControl<string | null | undefined>(undefined),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined),
			SessionSampleRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateAppMonitorPatchBodyCustomEvents {
		Status?: CustomEventsStatus;
	}
	export interface UpdateAppMonitorPatchBodyCustomEventsFormProperties {
		Status: FormControl<CustomEventsStatus | null | undefined>,
	}
	export function CreateUpdateAppMonitorPatchBodyCustomEventsFormGroup() {
		return new FormGroup<UpdateAppMonitorPatchBodyCustomEventsFormProperties>({
			Status: new FormControl<CustomEventsStatus | null | undefined>(undefined),
		});

	}

	export interface GetAppMonitorDataPostBody {

		/** An array of structures that you can use to filter the results to those that match one or more sets of key-value pairs that you specify. */
		Filters?: Array<QueryFilter>;

		/**
		 * The maximum number of results to return in one operation.
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Use the token returned by the previous operation to request the next page of results. */
		NextToken?: string | null;

		/**
		 * A structure that defines the time range that you want to retrieve results from.
		 * Required
		 */
		TimeRange: GetAppMonitorDataPostBodyTimeRange;
	}
	export interface GetAppMonitorDataPostBodyFormProperties {

		/**
		 * The maximum number of results to return in one operation.
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Use the token returned by the previous operation to request the next page of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAppMonitorDataPostBodyFormGroup() {
		return new FormGroup<GetAppMonitorDataPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAppMonitorDataPostBodyTimeRange {
		After?: number | null;
		Before?: number | null;
	}
	export interface GetAppMonitorDataPostBodyTimeRangeFormProperties {
		After: FormControl<number | null | undefined>,
		Before: FormControl<number | null | undefined>,
	}
	export function CreateGetAppMonitorDataPostBodyTimeRangeFormGroup() {
		return new FormGroup<GetAppMonitorDataPostBodyTimeRangeFormProperties>({
			After: new FormControl<number | null | undefined>(undefined),
			Before: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutRumMetricsDestinationPostBody {

		/**
		 * Defines the destination to send the metrics to. Valid values are <code>CloudWatch</code> and <code>Evidently</code>. If you specify <code>Evidently</code>, you must also specify the ARN of the CloudWatchEvidently experiment that is to be the destination and an IAM role that has permission to write to the experiment.
		 * Required
		 */
		Destination: MetricDestination;

		/**
		 * Use this parameter only if <code>Destination</code> is <code>Evidently</code>. This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics.
		 * Max length: 2048
		 * Min length: 0
		 */
		DestinationArn?: string | null;

		/** <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is <code>CloudWatch</code>, do not use this parameter.</p> <p>This parameter specifies the ARN of an IAM role that RUM will assume to write to the Evidently experiment that you are sending metrics to. This role must have permission to write to that experiment.</p> */
		IamRoleArn?: string | null;
	}
	export interface PutRumMetricsDestinationPostBodyFormProperties {

		/**
		 * Defines the destination to send the metrics to. Valid values are <code>CloudWatch</code> and <code>Evidently</code>. If you specify <code>Evidently</code>, you must also specify the ARN of the CloudWatchEvidently experiment that is to be the destination and an IAM role that has permission to write to the experiment.
		 * Required
		 */
		Destination: FormControl<MetricDestination | null | undefined>,

		/**
		 * Use this parameter only if <code>Destination</code> is <code>Evidently</code>. This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics.
		 * Max length: 2048
		 * Min length: 0
		 */
		DestinationArn: FormControl<string | null | undefined>,

		/** <p>This parameter is required if <code>Destination</code> is <code>Evidently</code>. If <code>Destination</code> is <code>CloudWatch</code>, do not use this parameter.</p> <p>This parameter specifies the ARN of an IAM role that RUM will assume to write to the Evidently experiment that you are sending metrics to. This role must have permission to write to that experiment.</p> */
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreatePutRumMetricsDestinationPostBodyFormGroup() {
		return new FormGroup<PutRumMetricsDestinationPostBodyFormProperties>({
			Destination: new FormControl<MetricDestination | null | undefined>(undefined, [Validators.required]),
			DestinationArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('arn:[^:]*:[^:]*:[^:]*:[^:]*:.*')]),
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('arn:[^:]*:[^:]*:[^:]*:[^:]*:.*')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The list of key-value pairs to associate with the resource.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The list of key-value pairs to associate with the resource.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutRumEventsPostBody {

		/**
		 * A structure that contains information about the RUM app monitor.
		 * Required
		 */
		AppMonitorDetails: PutRumEventsPostBodyAppMonitorDetails;

		/**
		 * A unique identifier for this batch of RUM event data.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		BatchId: string;

		/**
		 * An array of structures that contain the telemetry event data.
		 * Required
		 */
		RumEvents: Array<RumEvent>;

		/**
		 * A structure that contains information about the user session that this batch of events was collected from.
		 * Required
		 */
		UserDetails: PutRumEventsPostBodyUserDetails;
	}
	export interface PutRumEventsPostBodyFormProperties {

		/**
		 * A unique identifier for this batch of RUM event data.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		BatchId: FormControl<string | null | undefined>,
	}
	export function CreatePutRumEventsPostBodyFormGroup() {
		return new FormGroup<PutRumEventsPostBodyFormProperties>({
			BatchId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$')]),
		});

	}

	export interface PutRumEventsPostBodyAppMonitorDetails {
		id?: string;
		name?: string;
		version?: string;
	}
	export interface PutRumEventsPostBodyAppMonitorDetailsFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreatePutRumEventsPostBodyAppMonitorDetailsFormGroup() {
		return new FormGroup<PutRumEventsPostBodyAppMonitorDetailsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutRumEventsPostBodyUserDetails {
		sessionId?: string;
		userId?: string;
	}
	export interface PutRumEventsPostBodyUserDetailsFormProperties {
		sessionId: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreatePutRumEventsPostBodyUserDetailsFormGroup() {
		return new FormGroup<PutRumEventsPostBodyUserDetailsFormProperties>({
			sessionId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

}

