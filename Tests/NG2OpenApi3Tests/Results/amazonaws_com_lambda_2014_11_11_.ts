import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes mapping between an Amazon Kinesis stream and a Lambda function. */
	export interface EventSourceConfiguration {
		UUID?: string;
		BatchSize?: number | null;
		EventSource?: string;
		FunctionName?: string;
		Parameters?: Map;
		Role?: string;
		LastModified?: Date;
		IsActive?: boolean | null;
		Status?: string;
	}

	/** Describes mapping between an Amazon Kinesis stream and a Lambda function. */
	export interface EventSourceConfigurationFormProperties {
		UUID: FormControl<string | null | undefined>,
		BatchSize: FormControl<number | null | undefined>,
		EventSource: FormControl<string | null | undefined>,
		FunctionName: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		IsActive: FormControl<boolean | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateEventSourceConfigurationFormGroup() {
		return new FormGroup<EventSourceConfigurationFormProperties>({
			UUID: new FormControl<string | null | undefined>(undefined),
			BatchSize: new FormControl<number | null | undefined>(undefined),
			EventSource: new FormControl<string | null | undefined>(undefined),
			FunctionName: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			IsActive: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Map {
	}
	export interface MapFormProperties {
	}
	export function CreateMapFormGroup() {
		return new FormGroup<MapFormProperties>({
		});

	}


	/** The AWS Lambda service encountered an internal error. */
	export interface ServiceException {
		Type?: string | null;
		Message?: string | null;
	}

	/** The AWS Lambda service encountered an internal error. */
	export interface ServiceExceptionFormProperties {
		Type: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateServiceExceptionFormGroup() {
		return new FormGroup<ServiceExceptionFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>UploadFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.  */
	export interface InvalidParameterValueException {
		Type?: string | null;
		message?: string | null;
	}

	/** One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>UploadFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.  */
	export interface InvalidParameterValueExceptionFormProperties {
		Type: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidParameterValueExceptionFormGroup() {
		return new FormGroup<InvalidParameterValueExceptionFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The function or the event source specified in the request does not exist. */
	export interface ResourceNotFoundException {
		Type?: string | null;
		Message?: string | null;
	}

	/** The function or the event source specified in the request does not exist. */
	export interface ResourceNotFoundExceptionFormProperties {
		Type: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This response contains the object for AWS Lambda function location (see <a>API_FunctionCodeLocation</a> */
	export interface GetFunctionResponse {

		/** A complex type that describes function metadata. */
		Configuration?: FunctionConfiguration;

		/** The object for the Lambda function location. */
		Code?: FunctionCodeLocation;
	}

	/** This response contains the object for AWS Lambda function location (see <a>API_FunctionCodeLocation</a> */
	export interface GetFunctionResponseFormProperties {
	}
	export function CreateGetFunctionResponseFormGroup() {
		return new FormGroup<GetFunctionResponseFormProperties>({
		});

	}


	/** A complex type that describes function metadata. */
	export interface FunctionConfiguration {
		FunctionName?: string;
		FunctionARN?: string;
		ConfigurationId?: string;
		Runtime?: Runtime;
		Role?: string;
		Handler?: string;
		Mode?: Mode;
		CodeSize?: number | null;
		Description?: string;
		Timeout?: number | null;
		MemorySize?: number | null;
		LastModified?: Date;
	}

	/** A complex type that describes function metadata. */
	export interface FunctionConfigurationFormProperties {
		FunctionName: FormControl<string | null | undefined>,
		FunctionARN: FormControl<string | null | undefined>,
		ConfigurationId: FormControl<string | null | undefined>,
		Runtime: FormControl<Runtime | null | undefined>,
		Role: FormControl<string | null | undefined>,
		Handler: FormControl<string | null | undefined>,
		Mode: FormControl<Mode | null | undefined>,
		CodeSize: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		MemorySize: FormControl<number | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
	}
	export function CreateFunctionConfigurationFormGroup() {
		return new FormGroup<FunctionConfigurationFormProperties>({
			FunctionName: new FormControl<string | null | undefined>(undefined),
			FunctionARN: new FormControl<string | null | undefined>(undefined),
			ConfigurationId: new FormControl<string | null | undefined>(undefined),
			Runtime: new FormControl<Runtime | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			Handler: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<Mode | null | undefined>(undefined),
			CodeSize: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			MemorySize: new FormControl<number | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum Runtime { nodejs = 0 }

	export enum Mode { event = 0 }


	/** The object for the Lambda function location. */
	export interface FunctionCodeLocation {
		RepositoryType?: string;
		Location?: string;
	}

	/** The object for the Lambda function location. */
	export interface FunctionCodeLocationFormProperties {
		RepositoryType: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateFunctionCodeLocationFormGroup() {
		return new FormGroup<FunctionCodeLocationFormProperties>({
			RepositoryType: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Upon success, it returns empty response. Otherwise, throws an exception. */
	export interface InvokeAsyncResponse {
		Status?: number | null;
	}

	/** Upon success, it returns empty response. Otherwise, throws an exception. */
	export interface InvokeAsyncResponseFormProperties {
		Status: FormControl<number | null | undefined>,
	}
	export function CreateInvokeAsyncResponseFormGroup() {
		return new FormGroup<InvokeAsyncResponseFormProperties>({
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request body could not be parsed as JSON. */
	export interface InvalidRequestContentException {
		Type?: string | null;
		message?: string | null;
	}

	/** The request body could not be parsed as JSON. */
	export interface InvalidRequestContentExceptionFormProperties {
		Type: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidRequestContentExceptionFormGroup() {
		return new FormGroup<InvalidRequestContentExceptionFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a list of event sources (see <a>API_EventSourceConfiguration</a>) */
	export interface ListEventSourcesResponse {
		NextMarker?: string;
		EventSources?: Array<EventSourceConfiguration>;
	}

	/** Contains a list of event sources (see <a>API_EventSourceConfiguration</a>) */
	export interface ListEventSourcesResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListEventSourcesResponseFormGroup() {
		return new FormGroup<ListEventSourcesResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a list of AWS Lambda function configurations (see <a>API_FunctionConfiguration</a>. */
	export interface ListFunctionsResponse {
		NextMarker?: string;
		Functions?: Array<FunctionConfiguration>;
	}

	/** Contains a list of AWS Lambda function configurations (see <a>API_FunctionConfiguration</a>. */
	export interface ListFunctionsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListFunctionsResponseFormGroup() {
		return new FormGroup<ListFunctionsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddEventSourceRequest {

		/** Required */
		EventSource: string;

		/** Required */
		FunctionName: string;

		/** Required */
		Role: string;
		BatchSize?: number | null;
		Parameters?: Map;
	}
	export interface AddEventSourceRequestFormProperties {

		/** Required */
		EventSource: FormControl<string | null | undefined>,

		/** Required */
		FunctionName: FormControl<string | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,
		BatchSize: FormControl<number | null | undefined>,
	}
	export function CreateAddEventSourceRequestFormGroup() {
		return new FormGroup<AddEventSourceRequestFormProperties>({
			EventSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BatchSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteFunctionRequest {
	}
	export interface DeleteFunctionRequestFormProperties {
	}
	export function CreateDeleteFunctionRequestFormGroup() {
		return new FormGroup<DeleteFunctionRequestFormProperties>({
		});

	}

	export interface GetEventSourceRequest {
	}
	export interface GetEventSourceRequestFormProperties {
	}
	export function CreateGetEventSourceRequestFormGroup() {
		return new FormGroup<GetEventSourceRequestFormProperties>({
		});

	}

	export interface GetFunctionConfigurationRequest {
	}
	export interface GetFunctionConfigurationRequestFormProperties {
	}
	export function CreateGetFunctionConfigurationRequestFormGroup() {
		return new FormGroup<GetFunctionConfigurationRequestFormProperties>({
		});

	}

	export interface GetFunctionRequest {
	}
	export interface GetFunctionRequestFormProperties {
	}
	export function CreateGetFunctionRequestFormGroup() {
		return new FormGroup<GetFunctionRequestFormProperties>({
		});

	}

	export interface InvokeAsyncRequest {

		/** Required */
		InvokeArgs: string;
	}
	export interface InvokeAsyncRequestFormProperties {

		/** Required */
		InvokeArgs: FormControl<string | null | undefined>,
	}
	export function CreateInvokeAsyncRequestFormGroup() {
		return new FormGroup<InvokeAsyncRequestFormProperties>({
			InvokeArgs: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEventSourcesRequest {
	}
	export interface ListEventSourcesRequestFormProperties {
	}
	export function CreateListEventSourcesRequestFormGroup() {
		return new FormGroup<ListEventSourcesRequestFormProperties>({
		});

	}

	export interface ListFunctionsRequest {
	}
	export interface ListFunctionsRequestFormProperties {
	}
	export function CreateListFunctionsRequestFormGroup() {
		return new FormGroup<ListFunctionsRequestFormProperties>({
		});

	}

	export interface RemoveEventSourceRequest {
	}
	export interface RemoveEventSourceRequestFormProperties {
	}
	export function CreateRemoveEventSourceRequestFormGroup() {
		return new FormGroup<RemoveEventSourceRequestFormProperties>({
		});

	}

	export interface UpdateFunctionConfigurationRequest {
	}
	export interface UpdateFunctionConfigurationRequestFormProperties {
	}
	export function CreateUpdateFunctionConfigurationRequestFormGroup() {
		return new FormGroup<UpdateFunctionConfigurationRequestFormProperties>({
		});

	}

	export interface UploadFunctionRequest {

		/** Required */
		FunctionZip: string;
	}
	export interface UploadFunctionRequestFormProperties {

		/** Required */
		FunctionZip: FormControl<string | null | undefined>,
	}
	export function CreateUploadFunctionRequestFormGroup() {
		return new FormGroup<UploadFunctionRequestFormProperties>({
			FunctionZip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Identifies a stream as an event source for an AWS Lambda function. It can be either an Amazon Kinesis stream or a Amazon DynamoDB stream. AWS Lambda invokes the specified function when records are posted to the stream.</p> <p>This is the pull model, where AWS Lambda invokes the function. For more information, go to <a href="http://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction.html">AWS Lambda: How it Works</a> in the AWS Lambda Developer Guide.</p> <p>This association between an Amazon Kinesis stream and an AWS Lambda function is called the event source mapping. You provide the configuration information (for example, which stream to read from and which AWS Lambda function to invoke) for the event source mapping in the request body.</p> <p> Each event source, such as a Kinesis stream, can only be associated with one AWS Lambda function. If you call <a>AddEventSource</a> for an event source that is already mapped to another AWS Lambda function, the existing mapping is updated to call the new function instead of the old one. </p> <p>This operation requires permission for the <code>iam:PassRole</code> action for the IAM role. It also requires permission for the <code>lambda:AddEventSource</code> action.</p>
		 * Post 2014-11-13/event-source-mappings/
		 * @return {EventSourceConfiguration} Success
		 */
		AddEventSource(requestBody: AddEventSourcePostBody): Observable<EventSourceConfiguration> {
			return this.http.post<EventSourceConfiguration>(this.baseUri + '2014-11-13/event-source-mappings/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of event source mappings you created using the <code>AddEventSource</code> (see <a>AddEventSource</a>), where you identify a stream as event source. This list does not include Amazon S3 event sources. </p> <p>For each mapping, the API returns configuration information. You can optionally specify filters to retrieve specific event source mappings.</p> <p>This operation requires permission for the <code>lambda:ListEventSources</code> action.</p>
		 * Get 2014-11-13/event-source-mappings/
		 * @param {string} EventSource The Amazon Resource Name (ARN) of the Amazon Kinesis stream.
		 * @param {string} FunctionName The name of the AWS Lambda function.
		 * @param {string} Marker Optional string. An opaque pagination token returned from a previous <code>ListEventSources</code> operation. If present, specifies to continue the list from where the returning call left off. 
		 * @param {number} MaxItems Optional integer. Specifies the maximum number of event sources to return in response. This value must be greater than 0.
		 * @return {ListEventSourcesResponse} Success
		 */
		ListEventSources(EventSource: string | null | undefined, FunctionName: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListEventSourcesResponse> {
			return this.http.get<ListEventSourcesResponse>(this.baseUri + '2014-11-13/event-source-mappings/?EventSource=' + (EventSource == null ? '' : encodeURIComponent(EventSource)) + '&FunctionName=' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * <p>Deletes the specified Lambda function code and configuration.</p> <p>This operation requires permission for the <code>lambda:DeleteFunction</code> action.</p>
		 * Delete 2014-11-13/functions/{FunctionName}
		 * @param {string} FunctionName The Lambda function to delete.
		 * @return {void} 
		 */
		DeleteFunction(FunctionName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2014-11-13/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the configuration information of the Lambda function and a presigned URL link to the .zip file you uploaded with <a>UploadFunction</a> so you can download the .zip file. Note that the URL is valid for up to 10 minutes. The configuration information is the same information you provided as parameters when uploading the function.</p> <p>This operation requires permission for the <code>lambda:GetFunction</code> action.</p>
		 * Get 2014-11-13/functions/{FunctionName}
		 * @param {string} FunctionName The Lambda function name.
		 * @return {GetFunctionResponse} Success
		 */
		GetFunction(FunctionName: string): Observable<GetFunctionResponse> {
			return this.http.get<GetFunctionResponse>(this.baseUri + '2014-11-13/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)), {});
		}

		/**
		 * <p>Returns configuration information for the specified event source mapping (see <a>AddEventSource</a>).</p> <p>This operation requires permission for the <code>lambda:GetEventSource</code> action.</p>
		 * Get 2014-11-13/event-source-mappings/{UUID}
		 * @param {string} UUID The AWS Lambda assigned ID of the event source mapping.
		 * @return {EventSourceConfiguration} Success
		 */
		GetEventSource(UUID: string): Observable<EventSourceConfiguration> {
			return this.http.get<EventSourceConfiguration>(this.baseUri + '2014-11-13/event-source-mappings/' + (UUID == null ? '' : encodeURIComponent(UUID)), {});
		}

		/**
		 * <p>Removes an event source mapping. This means AWS Lambda will no longer invoke the function for events in the associated source.</p> <p>This operation requires permission for the <code>lambda:RemoveEventSource</code> action.</p>
		 * Delete 2014-11-13/event-source-mappings/{UUID}
		 * @param {string} UUID The event source mapping ID.
		 * @return {void} 
		 */
		RemoveEventSource(UUID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2014-11-13/event-source-mappings/' + (UUID == null ? '' : encodeURIComponent(UUID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the configuration information of the Lambda function. This the same information you provided as parameters when uploading the function by using <a>UploadFunction</a>.</p> <p>This operation requires permission for the <code>lambda:GetFunctionConfiguration</code> operation.</p>
		 * Get 2014-11-13/functions/{FunctionName}/configuration
		 * @param {string} FunctionName The name of the Lambda function for which you want to retrieve the configuration information.
		 * @return {FunctionConfiguration} Success
		 */
		GetFunctionConfiguration(FunctionName: string): Observable<FunctionConfiguration> {
			return this.http.get<FunctionConfiguration>(this.baseUri + '2014-11-13/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/configuration', {});
		}

		/**
		 * <p>Updates the configuration parameters for the specified Lambda function by using the values provided in the request. You provide only the parameters you want to change. This operation must only be used on an existing Lambda function and cannot be used to update the function's code. </p> <p>This operation requires permission for the <code>lambda:UpdateFunctionConfiguration</code> action.</p>
		 * Put 2014-11-13/functions/{FunctionName}/configuration
		 * @param {string} FunctionName The name of the Lambda function.
		 * @param {string} Role The Amazon Resource Name (ARN) of the IAM role that Lambda will assume when it executes your function. 
		 * @param {string} Handler The function that Lambda calls to begin executing your function. For Node.js, it is the <i>module-name.export</i> value in your function. 
		 * @param {string} Description A short user-defined function description. Lambda does not use this value. Assign a meaningful description as you see fit.
		 * @param {number} Timeout The function execution time at which Lambda should terminate the function. Because the execution time has cost implications, we recommend you set this value based on your expected execution time. The default is 3 seconds. 
		 * @param {number} MemorySize The amount of memory, in MB, your Lambda function is given. Lambda uses this memory size to infer the amount of CPU allocated to your function. Your function use-case determines your CPU and memory requirements. For example, a database operation might need less memory compared to an image processing function. The default value is 128 MB. The value must be a multiple of 64 MB.
		 * @return {FunctionConfiguration} Success
		 */
		UpdateFunctionConfiguration(FunctionName: string, Role: string | null | undefined, Handler: string | null | undefined, Description: string | null | undefined, Timeout: number | null | undefined, MemorySize: number | null | undefined): Observable<FunctionConfiguration> {
			return this.http.put<FunctionConfiguration>(this.baseUri + '2014-11-13/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/configuration&Role=' + (Role == null ? '' : encodeURIComponent(Role)) + '&Handler=' + (Handler == null ? '' : encodeURIComponent(Handler)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&Timeout=' + Timeout + '&MemorySize=' + MemorySize, null, {});
		}

		/**
		 * <p>Submits an invocation request to AWS Lambda. Upon receiving the request, Lambda executes the specified function asynchronously. To see the logs generated by the Lambda function execution, see the CloudWatch logs console.</p> <p>This operation requires permission for the <code>lambda:InvokeAsync</code> action.</p>
		 * Post 2014-11-13/functions/{FunctionName}/invoke-async/
		 * @param {string} FunctionName The Lambda function name.
		 * @return {void} 
		 */
		InvokeAsync(FunctionName: string, requestBody: InvokeAsyncPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2014-11-13/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/invoke-async/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of your Lambda functions. For each function, the response includes the function configuration information. You must use <a>GetFunction</a> to retrieve the code for your function.</p> <p>This operation requires permission for the <code>lambda:ListFunctions</code> action.</p>
		 * Get 2014-11-13/functions/
		 * @param {string} Marker Optional string. An opaque pagination token returned from a previous <code>ListFunctions</code> operation. If present, indicates where to continue the listing. 
		 * @param {number} MaxItems Optional integer. Specifies the maximum number of AWS Lambda functions to return in response. This parameter value must be greater than 0.
		 * @return {ListFunctionsResponse} Success
		 */
		ListFunctions(Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListFunctionsResponse> {
			return this.http.get<ListFunctionsResponse>(this.baseUri + '2014-11-13/functions/?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * <p>Creates a new Lambda function or updates an existing function. The function metadata is created from the request parameters, and the code for the function is provided by a .zip file in the request body. If the function name already exists, the existing Lambda function is updated with the new code and metadata. </p> <p>This operation requires permission for the <code>lambda:UploadFunction</code> action.</p>
		 * Put 2014-11-13/functions/{FunctionName}#Runtime&Role&Handler&Mode
		 * @param {string} FunctionName The name you want to assign to the function you are uploading. The function names appear in the console and are returned in the <a>ListFunctions</a> API. Function names are used to specify functions to other AWS Lambda APIs, such as <a>InvokeAsync</a>. 
		 * @param {Runtime} Runtime The runtime environment for the Lambda function you are uploading. Currently, Lambda supports only "nodejs" as the runtime.
		 * @param {string} Role The Amazon Resource Name (ARN) of the IAM role that Lambda assumes when it executes your function to access any other Amazon Web Services (AWS) resources. 
		 * @param {string} Handler The function that Lambda calls to begin execution. For Node.js, it is the <i>module-name</i>.<i>export</i> value in your function. 
		 * @param {Mode} Mode How the Lambda function will be invoked. Lambda supports only the "event" mode. 
		 * @param {string} Description A short, user-defined function description. Lambda does not use this value. Assign a meaningful description as you see fit.
		 * @param {number} Timeout The function execution time at which Lambda should terminate the function. Because the execution time has cost implications, we recommend you set this value based on your expected execution time. The default is 3 seconds. 
		 * @param {number} MemorySize The amount of memory, in MB, your Lambda function is given. Lambda uses this memory size to infer the amount of CPU allocated to your function. Your function use-case determines your CPU and memory requirements. For example, database operation might need less memory compared to image processing function. The default value is 128 MB. The value must be a multiple of 64 MB.
		 * @return {void} 
		 */
		UploadFunction(FunctionName: string, Runtime: Runtime, Role: string, Handler: string, Mode: Mode, Description: string | null | undefined, Timeout: number | null | undefined, MemorySize: number | null | undefined, requestBody: UploadFunctionPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '2014-11-13/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '#Runtime&Role&Handler&Mode&Runtime=' + Runtime + '&Role=' + (Role == null ? '' : encodeURIComponent(Role)) + '&Handler=' + (Handler == null ? '' : encodeURIComponent(Handler)) + '&Mode=' + Mode + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&Timeout=' + Timeout + '&MemorySize=' + MemorySize, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface AddEventSourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Amazon Kinesis stream that is the event source. Any record added to this stream causes AWS Lambda to invoke your Lambda function. AWS Lambda POSTs the Amazon Kinesis event, containing records, to your Lambda function as JSON.
		 * Required
		 */
		EventSource: string;

		/**
		 * The Lambda function to invoke when AWS Lambda detects an event on the stream.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		FunctionName: string;

		/**
		 * The ARN of the IAM role (invocation role) that AWS Lambda can assume to read from the stream and invoke the function.
		 * Required
		 */
		Role: string;

		/** The largest number of records that AWS Lambda will give to your function in a single event. The default is 100 records. */
		BatchSize?: number | null;

		/** A map (key-value pairs) defining the configuration for AWS Lambda to use when reading the event source. Currently, AWS Lambda supports only the <code>InitialPositionInStream</code> key. The valid values are: "TRIM_HORIZON" and "LATEST". The default value is "TRIM_HORIZON". For more information, go to <a href="http://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html#Kinesis-GetShardIterator-request-ShardIteratorType">ShardIteratorType</a> in the Amazon Kinesis Service API Reference. */
		Parameters?: {[id: string]: string };
	}
	export interface AddEventSourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Amazon Kinesis stream that is the event source. Any record added to this stream causes AWS Lambda to invoke your Lambda function. AWS Lambda POSTs the Amazon Kinesis event, containing records, to your Lambda function as JSON.
		 * Required
		 */
		EventSource: FormControl<string | null | undefined>,

		/**
		 * The Lambda function to invoke when AWS Lambda detects an event on the stream.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		FunctionName: FormControl<string | null | undefined>,

		/**
		 * The ARN of the IAM role (invocation role) that AWS Lambda can assume to read from the stream and invoke the function.
		 * Required
		 */
		Role: FormControl<string | null | undefined>,

		/** The largest number of records that AWS Lambda will give to your function in a single event. The default is 100 records. */
		BatchSize: FormControl<number | null | undefined>,

		/** A map (key-value pairs) defining the configuration for AWS Lambda to use when reading the event source. Currently, AWS Lambda supports only the <code>InitialPositionInStream</code> key. The valid values are: "TRIM_HORIZON" and "LATEST". The default value is "TRIM_HORIZON". For more information, go to <a href="http://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html#Kinesis-GetShardIterator-request-ShardIteratorType">ShardIteratorType</a> in the Amazon Kinesis Service API Reference. */
		Parameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAddEventSourcePostBodyFormGroup() {
		return new FormGroup<AddEventSourcePostBodyFormProperties>({
			EventSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9-_]+')]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+')]),
			BatchSize: new FormControl<number | null | undefined>(undefined),
			Parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface InvokeAsyncPostBody {

		/**
		 * JSON that you want to provide to your Lambda function as input.
		 * Required
		 */
		InvokeArgs: string;
	}
	export interface InvokeAsyncPostBodyFormProperties {

		/**
		 * JSON that you want to provide to your Lambda function as input.
		 * Required
		 */
		InvokeArgs: FormControl<string | null | undefined>,
	}
	export function CreateInvokeAsyncPostBodyFormGroup() {
		return new FormGroup<InvokeAsyncPostBodyFormProperties>({
			InvokeArgs: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UploadFunctionPutBody {

		/**
		 * A .zip file containing your packaged source code. For more information about creating a .zip file, go to <a href="http://docs.aws.amazon.com/lambda/latest/dg/walkthrough-custom-events.html">AWS LambdaL How it Works</a> in the AWS Lambda Developer Guide.
		 * Required
		 */
		FunctionZip: string;
	}
	export interface UploadFunctionPutBodyFormProperties {

		/**
		 * A .zip file containing your packaged source code. For more information about creating a .zip file, go to <a href="http://docs.aws.amazon.com/lambda/latest/dg/walkthrough-custom-events.html">AWS LambdaL How it Works</a> in the AWS Lambda Developer Guide.
		 * Required
		 */
		FunctionZip: FormControl<string | null | undefined>,
	}
	export function CreateUploadFunctionPutBodyFormGroup() {
		return new FormGroup<UploadFunctionPutBodyFormProperties>({
			FunctionZip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

