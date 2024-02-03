import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Controls certain runtime behaviors of the streaming job. */
	export enum CompatibilityLevel { _1_0 = '1.0' }


	/** Indicates the policy to apply to events that arrive out of order in the input event stream. */
	export enum EventsOutOfOrderPolicy { Adjust = 'Adjust', Drop = 'Drop' }


	/** A Stream Analytics REST API operation */
	export interface Operation {

		/** Contains the localized display information for this particular operation / action. */
		display?: any;

		/** The name of the operation being performed on this particular object. */
		name?: string | null;
	}

	/** A Stream Analytics REST API operation */
	export interface OperationFormProperties {

		/** Contains the localized display information for this particular operation / action. */
		display: FormControl<any | null | undefined>,

		/** The name of the operation being performed on this particular object. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Stream Analytics operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Stream Analytics operations supported by the Microsoft.StreamAnalytics resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Stream Analytics operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates the policy to apply to events that arrive at the output and cannot be written to the external storage due to being malformed (missing column values, column values of wrong type or size). */
	export enum OutputErrorPolicy { Stop = 'Stop', Drop = 'Drop' }


	/** Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time. */
	export enum OutputStartMode { JobStartTime = 'JobStartTime', CustomTime = 'CustomTime', LastOutputEventTime = 'LastOutputEventTime' }


	/** The base resource model definition. */
	export interface Resource {

		/** Resource Id */
		id?: string | null;

		/** Resource location. Required on PUT (CreateOrReplace) requests. */
		location?: string | null;

		/** Resource name */
		name?: string | null;

		/** Resource tags */
		tags?: {[id: string]: string };

		/** Resource type */
		type?: string | null;
	}

	/** The base resource model definition. */
	export interface ResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource location. Required on PUT (CreateOrReplace) requests. */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with a SKU. */
	export interface Sku {

		/** The name of the SKU. Required on PUT (CreateOrReplace) requests. */
		name?: SkuName | null;
	}

	/** The properties that are associated with a SKU. */
	export interface SkuFormProperties {

		/** The name of the SKU. Required on PUT (CreateOrReplace) requests. */
		name: FormControl<SkuName | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<SkuName | null | undefined>(undefined),
		});

	}

	export enum SkuName { Standard = 'Standard' }


	/** Parameters supplied to the Start Streaming Job operation. */
	export interface StartStreamingJobParameters {

		/** Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time. */
		outputStartMode?: OutputStartMode | null;

		/** Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime. */
		outputStartTime?: Date | null;
	}

	/** Parameters supplied to the Start Streaming Job operation. */
	export interface StartStreamingJobParametersFormProperties {

		/** Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time. */
		outputStartMode: FormControl<OutputStartMode | null | undefined>,

		/** Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime. */
		outputStartTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartStreamingJobParametersFormGroup() {
		return new FormGroup<StartStreamingJobParametersFormProperties>({
			outputStartMode: new FormControl<OutputStartMode | null | undefined>(undefined),
			outputStartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A streaming job object, containing all information associated with the named streaming job. */
	export interface StreamingJob extends Resource {

		/** The properties that are associated with a streaming job. */
		properties?: StreamingJobProperties;
	}

	/** A streaming job object, containing all information associated with the named streaming job. */
	export interface StreamingJobFormProperties extends ResourceFormProperties {
	}
	export function CreateStreamingJobFormGroup() {
		return new FormGroup<StreamingJobFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object containing a list of streaming jobs. */
	export interface StreamingJobListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** A list of streaming jobs. Populated by a 'List' operation. */
		value?: Array<StreamingJob>;
	}

	/** Object containing a list of streaming jobs. */
	export interface StreamingJobListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateStreamingJobListResultFormGroup() {
		return new FormGroup<StreamingJobListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with a streaming job. */
	export interface StreamingJobProperties {

		/** Controls certain runtime behaviors of the streaming job. */
		compatibilityLevel?: CompatibilityLevel | null;

		/** Value is an ISO-8601 formatted UTC timestamp indicating when the streaming job was created. */
		createdDate?: Date | null;

		/** The data locale of the stream analytics job. Value should be the name of a supported .NET Culture from the set https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v=vs.110).aspx. Defaults to 'en-US' if none specified. */
		dataLocale?: string | null;

		/** The current entity tag for the streaming job. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. */
		etag?: string | null;

		/** The maximum tolerable delay in seconds where events arriving late could be included.  Supported range is -1 to 1814399 (20.23:59:59 days) and -1 is used to specify wait indefinitely. If the property is absent, it is interpreted to have a value of -1. */
		eventsLateArrivalMaxDelayInSeconds?: number | null;

		/** The maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order. */
		eventsOutOfOrderMaxDelayInSeconds?: number | null;

		/** Indicates the policy to apply to events that arrive out of order in the input event stream. */
		eventsOutOfOrderPolicy?: EventsOutOfOrderPolicy | null;

		/** A list of one or more functions for the streaming job. The name property for each function is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation. */
		StreamingJobPropertiesFunctions?: Array<StreamingJobPropertiesFunctions>;

		/** A list of one or more inputs to the streaming job. The name property for each input is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual input. */
		StreamingJobPropertiesInputs?: Array<StreamingJobPropertiesInputs>;

		/** A GUID uniquely identifying the streaming job. This GUID is generated upon creation of the streaming job. */
		jobId?: string | null;

		/** Describes the state of the streaming job. */
		jobState?: string | null;

		/** Value is either an ISO-8601 formatted timestamp indicating the last output event time of the streaming job or null indicating that output has not yet been produced. In case of multiple outputs or multiple streams, this shows the latest value in that set. */
		lastOutputEventTime?: Date | null;

		/** Indicates the policy to apply to events that arrive at the output and cannot be written to the external storage due to being malformed (missing column values, column values of wrong type or size). */
		outputErrorPolicy?: OutputErrorPolicy | null;

		/** Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time. */
		outputStartMode?: OutputStartMode | null;

		/** Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime. */
		outputStartTime?: Date | null;

		/** A list of one or more outputs for the streaming job. The name property for each output is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual output. */
		StreamingJobPropertiesOutputs?: Array<StreamingJobPropertiesOutputs>;

		/** Describes the provisioning status of the streaming job. */
		provisioningState?: string | null;

		/** The properties that are associated with a SKU. */
		sku?: Sku;

		/** A transformation object, containing all information associated with the named transformation. All transformations are contained under a streaming job. */
		transformation?: any;
	}

	/** The properties that are associated with a streaming job. */
	export interface StreamingJobPropertiesFormProperties {

		/** Controls certain runtime behaviors of the streaming job. */
		compatibilityLevel: FormControl<CompatibilityLevel | null | undefined>,

		/** Value is an ISO-8601 formatted UTC timestamp indicating when the streaming job was created. */
		createdDate: FormControl<Date | null | undefined>,

		/** The data locale of the stream analytics job. Value should be the name of a supported .NET Culture from the set https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v=vs.110).aspx. Defaults to 'en-US' if none specified. */
		dataLocale: FormControl<string | null | undefined>,

		/** The current entity tag for the streaming job. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. */
		etag: FormControl<string | null | undefined>,

		/** The maximum tolerable delay in seconds where events arriving late could be included.  Supported range is -1 to 1814399 (20.23:59:59 days) and -1 is used to specify wait indefinitely. If the property is absent, it is interpreted to have a value of -1. */
		eventsLateArrivalMaxDelayInSeconds: FormControl<number | null | undefined>,

		/** The maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order. */
		eventsOutOfOrderMaxDelayInSeconds: FormControl<number | null | undefined>,

		/** Indicates the policy to apply to events that arrive out of order in the input event stream. */
		eventsOutOfOrderPolicy: FormControl<EventsOutOfOrderPolicy | null | undefined>,

		/** A GUID uniquely identifying the streaming job. This GUID is generated upon creation of the streaming job. */
		jobId: FormControl<string | null | undefined>,

		/** Describes the state of the streaming job. */
		jobState: FormControl<string | null | undefined>,

		/** Value is either an ISO-8601 formatted timestamp indicating the last output event time of the streaming job or null indicating that output has not yet been produced. In case of multiple outputs or multiple streams, this shows the latest value in that set. */
		lastOutputEventTime: FormControl<Date | null | undefined>,

		/** Indicates the policy to apply to events that arrive at the output and cannot be written to the external storage due to being malformed (missing column values, column values of wrong type or size). */
		outputErrorPolicy: FormControl<OutputErrorPolicy | null | undefined>,

		/** Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time. */
		outputStartMode: FormControl<OutputStartMode | null | undefined>,

		/** Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime. */
		outputStartTime: FormControl<Date | null | undefined>,

		/** Describes the provisioning status of the streaming job. */
		provisioningState: FormControl<string | null | undefined>,

		/** A transformation object, containing all information associated with the named transformation. All transformations are contained under a streaming job. */
		transformation: FormControl<any | null | undefined>,
	}
	export function CreateStreamingJobPropertiesFormGroup() {
		return new FormGroup<StreamingJobPropertiesFormProperties>({
			compatibilityLevel: new FormControl<CompatibilityLevel | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			dataLocale: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			eventsLateArrivalMaxDelayInSeconds: new FormControl<number | null | undefined>(undefined),
			eventsOutOfOrderMaxDelayInSeconds: new FormControl<number | null | undefined>(undefined),
			eventsOutOfOrderPolicy: new FormControl<EventsOutOfOrderPolicy | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			jobState: new FormControl<string | null | undefined>(undefined),
			lastOutputEventTime: new FormControl<Date | null | undefined>(undefined),
			outputErrorPolicy: new FormControl<OutputErrorPolicy | null | undefined>(undefined),
			outputStartMode: new FormControl<OutputStartMode | null | undefined>(undefined),
			outputStartTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			transformation: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface StreamingJobPropertiesFunctions {

		/** The properties that are associated with a function. */
		properties?: any;
	}
	export interface StreamingJobPropertiesFunctionsFormProperties {

		/** The properties that are associated with a function. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateStreamingJobPropertiesFunctionsFormGroup() {
		return new FormGroup<StreamingJobPropertiesFunctionsFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface StreamingJobPropertiesInputs {

		/** The properties that are associated with an input. */
		properties?: any;
	}
	export interface StreamingJobPropertiesInputsFormProperties {

		/** The properties that are associated with an input. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateStreamingJobPropertiesInputsFormGroup() {
		return new FormGroup<StreamingJobPropertiesInputsFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface StreamingJobPropertiesOutputs {

		/** The properties that are associated with an output. */
		properties?: any;
	}
	export interface StreamingJobPropertiesOutputsFormProperties {

		/** The properties that are associated with an output. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateStreamingJobPropertiesOutputsFormGroup() {
		return new FormGroup<StreamingJobPropertiesOutputsFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Stream Analytics related operations.
		 * Get providers/Microsoft.StreamAnalytics/operations
		 * @param {string} api_version Client Api Version.
		 * @return {OperationListResult} Successfully listed the available operations.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.StreamAnalytics/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all of the streaming jobs in the given subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/streamingjobs
		 * @param {string} expand The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {StreamingJobListResult} Successfully listed the streaming jobs under the given subscription.
		 */
		StreamingJobs_List(expand: string | null | undefined, api_version: string, subscriptionId: string): Observable<StreamingJobListResult> {
			return this.http.get<StreamingJobListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.StreamAnalytics/streamingjobs?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all of the streaming jobs in the specified resource group.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs
		 * @param {string} expand The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {StreamingJobListResult} Successfully listed the streaming jobs under the specified resource group.
		 */
		StreamingJobs_ListByResourceGroup(expand: string | null | undefined, api_version: string, subscriptionId: string, resourceGroupName: string): Observable<StreamingJobListResult> {
			return this.http.get<StreamingJobListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets details about the specified streaming job.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}
		 * @param {string} expand The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @return {StreamingJob} Successfully retrieved the specified streaming job.
		 */
		StreamingJobs_Get(expand: string | null | undefined, api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string): Observable<StreamingJob> {
			return this.http.get<StreamingJob>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a streaming job or replaces an already existing streaming job.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {StreamingJob} requestBody The definition of the streaming job that will be used to create a new streaming job or replace the existing one.
		 * @return {StreamingJob} The streaming job was successfully created or replaced.
		 */
		StreamingJobs_CreateOrReplace(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, requestBody: StreamingJob): Observable<StreamingJob> {
			return this.http.put<StreamingJob>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a streaming job.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @return {void} The streaming job was successfully deleted.
		 */
		StreamingJobs_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing streaming job. This can be used to partially update (ie. update one or two properties) a streaming job without affecting the rest the job definition.
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {StreamingJob} requestBody A streaming job object. The properties specified here will overwrite the corresponding properties in the existing streaming job (ie. Those properties will be updated). Any properties that are set to null here will mean that the corresponding property in the existing input will remain the same and not change as a result of this PATCH operation.
		 * @return {StreamingJob} The streaming job was successfully updated.
		 */
		StreamingJobs_Update(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, requestBody: StreamingJob): Observable<StreamingJob> {
			return this.http.patch<StreamingJob>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a streaming job. Once a job is started it will start processing input events and produce output.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/start
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {StartStreamingJobParameters} requestBody Parameters applicable to a start streaming job operation.
		 * @return {void} The streaming job was successfully started.
		 */
		StreamingJobs_Start(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, requestBody: StartStreamingJobParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/start?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a running streaming job. This will cause a running streaming job to stop processing input events and producing output.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/stop
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @return {void} The streaming job was successfully stopped.
		 */
		StreamingJobs_Stop(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/stop?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

