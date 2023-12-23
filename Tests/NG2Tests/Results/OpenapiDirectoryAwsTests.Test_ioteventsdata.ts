import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchPutMessageResponse {
		BatchPutMessageErrorEntries?: Array<BatchPutMessageErrorEntry>;
	}
	export interface BatchPutMessageResponseFormProperties {
	}
	export function CreateBatchPutMessageResponseFormGroup() {
		return new FormGroup<BatchPutMessageResponseFormProperties>({
		});

	}


	/** Contains information about the errors encountered. */
	export interface BatchPutMessageErrorEntry {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		messageId?: string | null;
		errorCode?: BatchPutMessageErrorEntryErrorCode | null;
		errorMessage?: string | null;
	}

	/** Contains information about the errors encountered. */
	export interface BatchPutMessageErrorEntryFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		messageId: FormControl<string | null | undefined>,
		errorCode: FormControl<BatchPutMessageErrorEntryErrorCode | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutMessageErrorEntryFormGroup() {
		return new FormGroup<BatchPutMessageErrorEntryFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			errorCode: new FormControl<BatchPutMessageErrorEntryErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BatchPutMessageErrorEntryErrorCode { ResourceNotFoundException = 0, InvalidRequestException = 1, InternalFailureException = 2, ServiceUnavailableException = 3, ThrottlingException = 4 }


	/** Information about a message. */
	export interface Message {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		messageId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		inputName: string;

		/** Required */
		payload: string;
	}

	/** Information about a message. */
	export interface MessageFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		messageId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		inputName: FormControl<string | null | undefined>,

		/** Required */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			inputName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface InternalFailureException {
	}
	export interface InternalFailureExceptionFormProperties {
	}
	export function CreateInternalFailureExceptionFormGroup() {
		return new FormGroup<InternalFailureExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
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

	export interface BatchUpdateDetectorResponse {
		batchUpdateDetectorErrorEntries?: Array<BatchUpdateDetectorErrorEntry>;
	}
	export interface BatchUpdateDetectorResponseFormProperties {
	}
	export function CreateBatchUpdateDetectorResponseFormGroup() {
		return new FormGroup<BatchUpdateDetectorResponseFormProperties>({
		});

	}


	/** Information about the error that occured when attempting to update a detector. */
	export interface BatchUpdateDetectorErrorEntry {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		messageId?: string | null;
		errorCode?: BatchPutMessageErrorEntryErrorCode | null;
		errorMessage?: string | null;
	}

	/** Information about the error that occured when attempting to update a detector. */
	export interface BatchUpdateDetectorErrorEntryFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		messageId: FormControl<string | null | undefined>,
		errorCode: FormControl<BatchPutMessageErrorEntryErrorCode | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateDetectorErrorEntryFormGroup() {
		return new FormGroup<BatchUpdateDetectorErrorEntryFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			errorCode: new FormControl<BatchPutMessageErrorEntryErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information used to update the detector (instance). */
	export interface UpdateDetectorRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		messageId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9\-_:]+$
		 */
		keyValue?: string | null;

		/**
		 * The new state, variable values, and timer settings of the detector (instance).
		 * Required
		 */
		state: DetectorStateDefinition;
	}

	/** Information used to update the detector (instance). */
	export interface UpdateDetectorRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		messageId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9\-_:]+$
		 */
		keyValue: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDetectorRequestFormGroup() {
		return new FormGroup<UpdateDetectorRequestFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			detectorModelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			keyValue: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** The new state, variable values, and timer settings of the detector (instance). */
	export interface DetectorStateDefinition {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		stateName: string;

		/** Required */
		variables: Array<VariableDefinition>;

		/** Required */
		timers: Array<TimerDefinition>;
	}

	/** The new state, variable values, and timer settings of the detector (instance). */
	export interface DetectorStateDefinitionFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		stateName: FormControl<string | null | undefined>,
	}
	export function CreateDetectorStateDefinitionFormGroup() {
		return new FormGroup<DetectorStateDefinitionFormProperties>({
			stateName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** The new value of the variable. */
	export interface VariableDefinition {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		name: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		value: string;
	}

	/** The new value of the variable. */
	export interface VariableDefinitionFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateVariableDefinitionFormGroup() {
		return new FormGroup<VariableDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** The new setting of a timer. */
	export interface TimerDefinition {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		name: string;

		/** Required */
		seconds: number;
	}

	/** The new setting of a timer. */
	export interface TimerDefinitionFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateTimerDefinitionFormGroup() {
		return new FormGroup<TimerDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			seconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDetectorResponse {

		/** Information about the detector (instance). */
		detector?: Detector;
	}
	export interface DescribeDetectorResponseFormProperties {
	}
	export function CreateDescribeDetectorResponseFormGroup() {
		return new FormGroup<DescribeDetectorResponseFormProperties>({
		});

	}


	/** Information about the detector (instance). */
	export interface Detector {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9\-_:]+$
		 */
		keyValue?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		detectorModelVersion?: string | null;

		/** Information about the current state of the detector instance. */
		state?: DetectorState;
		creationTime?: Date | null;
		lastUpdateTime?: Date | null;
	}

	/** Information about the detector (instance). */
	export interface DetectorFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9\-_:]+$
		 */
		keyValue: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		detectorModelVersion: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDetectorFormGroup() {
		return new FormGroup<DetectorFormProperties>({
			detectorModelName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			keyValue: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			detectorModelVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the current state of the detector instance. */
	export interface DetectorState {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		stateName: string;

		/** Required */
		variables: Array<Variable>;

		/** Required */
		timers: Array<Timer>;
	}

	/** Information about the current state of the detector instance. */
	export interface DetectorStateFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		stateName: FormControl<string | null | undefined>,
	}
	export function CreateDetectorStateFormGroup() {
		return new FormGroup<DetectorStateFormProperties>({
			stateName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** The current state of the variable. */
	export interface Variable {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		name: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		value: string;
	}

	/** The current state of the variable. */
	export interface VariableFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateVariableFormGroup() {
		return new FormGroup<VariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** The current state of a timer. */
	export interface Timer {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		name: string;

		/** Required */
		timestamp: Date;
	}

	/** The current state of a timer. */
	export interface TimerFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateTimerFormGroup() {
		return new FormGroup<TimerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
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

	export interface ListDetectorsResponse {
		detectorSummaries?: Array<DetectorSummary>;
		nextToken?: string | null;
	}
	export interface ListDetectorsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDetectorsResponseFormGroup() {
		return new FormGroup<ListDetectorsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the detector (instance). */
	export interface DetectorSummary {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9\-_:]+$
		 */
		keyValue?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		detectorModelVersion?: string | null;

		/** Information about the detector state. */
		state?: DetectorStateSummary;
		creationTime?: Date | null;
		lastUpdateTime?: Date | null;
	}

	/** Information about the detector (instance). */
	export interface DetectorSummaryFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9\-_:]+$
		 */
		keyValue: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		detectorModelVersion: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDetectorSummaryFormGroup() {
		return new FormGroup<DetectorSummaryFormProperties>({
			detectorModelName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			keyValue: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			detectorModelVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the detector state. */
	export interface DetectorStateSummary {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		stateName?: string | null;
	}

	/** Information about the detector state. */
	export interface DetectorStateSummaryFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		stateName: FormControl<string | null | undefined>,
	}
	export function CreateDetectorStateSummaryFormGroup() {
		return new FormGroup<DetectorStateSummaryFormProperties>({
			stateName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export enum ErrorCode { ResourceNotFoundException = 0, InvalidRequestException = 1, InternalFailureException = 2, ServiceUnavailableException = 3, ThrottlingException = 4 }

	export interface BatchPutMessageRequest {

		/**
		 * Required
		 * Minimum items: 1
		 */
		messages: Array<Message>;
	}
	export interface BatchPutMessageRequestFormProperties {
	}
	export function CreateBatchPutMessageRequestFormGroup() {
		return new FormGroup<BatchPutMessageRequestFormProperties>({
		});

	}

	export interface BatchUpdateDetectorRequest {

		/**
		 * Required
		 * Minimum items: 1
		 */
		detectors: Array<UpdateDetectorRequest>;
	}
	export interface BatchUpdateDetectorRequestFormProperties {
	}
	export function CreateBatchUpdateDetectorRequestFormGroup() {
		return new FormGroup<BatchUpdateDetectorRequestFormProperties>({
		});

	}

	export interface DescribeDetectorRequest {
	}
	export interface DescribeDetectorRequestFormProperties {
	}
	export function CreateDescribeDetectorRequestFormGroup() {
		return new FormGroup<DescribeDetectorRequestFormProperties>({
		});

	}

	export interface ListDetectorsRequest {
	}
	export interface ListDetectorsRequestFormProperties {
	}
	export function CreateListDetectorsRequestFormGroup() {
		return new FormGroup<ListDetectorsRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Sends a set of messages to the AWS IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.
		 * Post inputs/messages
		 * @return {BatchPutMessageResponse} Success
		 */
		BatchPutMessage(requestBody: BatchPutMessagePostBody): Observable<BatchPutMessageResponse> {
			return this.http.post<BatchPutMessageResponse>(this.baseUri + 'inputs/messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.
		 * Post detectors
		 * @return {BatchUpdateDetectorResponse} Success
		 */
		BatchUpdateDetector(requestBody: BatchUpdateDetectorPostBody): Observable<BatchUpdateDetectorResponse> {
			return this.http.post<BatchUpdateDetectorResponse>(this.baseUri + 'detectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the specified detector (instance).
		 * Get detectors/{detectorModelName}/keyValues/
		 * @param {string} detectorModelName The name of the detector model whose detectors (instances) you want information about.
		 * @param {string} keyValue A filter used to limit results to detectors (instances) created because of the given key ID.
		 * @return {DescribeDetectorResponse} Success
		 */
		DescribeDetector(detectorModelName: string, keyValue: string | null | undefined): Observable<DescribeDetectorResponse> {
			return this.http.get<DescribeDetectorResponse>(this.baseUri + 'detectors/' + (detectorModelName == null ? '' : encodeURIComponent(detectorModelName)) + '/keyValues/&keyValue=' + (keyValue == null ? '' : encodeURIComponent(keyValue)), {});
		}

		/**
		 * Lists detectors (the instances of a detector model).
		 * Get detectors/{detectorModelName}
		 * @param {string} detectorModelName The name of the detector model whose detectors (instances) are listed.
		 * @param {string} stateName A filter that limits results to those detectors (instances) in the given state.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListDetectorsResponse} Success
		 */
		ListDetectors(detectorModelName: string, stateName: string | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDetectorsResponse> {
			return this.http.get<ListDetectorsResponse>(this.baseUri + 'detectors/' + (detectorModelName == null ? '' : encodeURIComponent(detectorModelName)) + '&stateName=' + (stateName == null ? '' : encodeURIComponent(stateName)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}
	}

	export interface BatchPutMessagePostBody {

		/**
		 * The list of messages to send. Each message has the following format: <code>'{ "messageId": "string", "inputName": "string", "payload": "string"}'</code>
		 * Required
		 * Minimum items: 1
		 */
		messages: Array<Message>;
	}
	export interface BatchPutMessagePostBodyFormProperties {
	}
	export function CreateBatchPutMessagePostBodyFormGroup() {
		return new FormGroup<BatchPutMessagePostBodyFormProperties>({
		});

	}

	export interface BatchUpdateDetectorPostBody {

		/**
		 * The list of detectors (instances) to update, along with the values to update.
		 * Required
		 * Minimum items: 1
		 */
		detectors: Array<UpdateDetectorRequest>;
	}
	export interface BatchUpdateDetectorPostBodyFormProperties {
	}
	export function CreateBatchUpdateDetectorPostBodyFormGroup() {
		return new FormGroup<BatchUpdateDetectorPostBodyFormProperties>({
		});

	}

}

