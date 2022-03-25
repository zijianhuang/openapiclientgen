import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface BatchPutMessageResponse {
		BatchPutMessageErrorEntries?: Array<BatchPutMessageErrorEntry>;
	}


	/** Contains information about the errors encountered. */
	export interface BatchPutMessageErrorEntry {
		messageId?: string;
		errorCode?: BatchPutMessageErrorEntryErrorCode;
		errorMessage?: string;
	}

	export enum BatchPutMessageErrorEntryErrorCode { ResourceNotFoundException = 0, InvalidRequestException = 1, InternalFailureException = 2, ServiceUnavailableException = 3, ThrottlingException = 4 }


	/** Information about a message. */
	export interface Message {
		messageId: string;
		inputName: string;
		payload: string;
	}

	export interface InvalidRequestException {
	}

	export interface InternalFailureException {
	}

	export interface ServiceUnavailableException {
	}

	export interface ThrottlingException {
	}

	export interface BatchUpdateDetectorResponse {
		batchUpdateDetectorErrorEntries?: Array<BatchUpdateDetectorErrorEntry>;
	}


	/** Information about the error that occured when attempting to update a detector. */
	export interface BatchUpdateDetectorErrorEntry {
		messageId?: string;
		errorCode?: BatchPutMessageErrorEntryErrorCode;
		errorMessage?: string;
	}


	/** Information used to update the detector (instance). */
	export interface UpdateDetectorRequest {
		messageId: string;
		detectorModelName: string;
		keyValue?: string;

		/**
		 * The new state, variable values, and timer settings of the detector (instance).
		 * Required
		 */
		state: DetectorStateDefinition;
	}


	/** The new state, variable values, and timer settings of the detector (instance). */
	export interface DetectorStateDefinition {
		stateName: string;
		variables: Array<VariableDefinition>;
		timers: Array<TimerDefinition>;
	}


	/** The new value of the variable. */
	export interface VariableDefinition {
		name: string;
		value: string;
	}


	/** The new setting of a timer. */
	export interface TimerDefinition {
		name: string;
		seconds: number;
	}

	export interface DescribeDetectorResponse {

		/** Information about the detector (instance). */
		detector?: Detector;
	}


	/** Information about the detector (instance). */
	export interface Detector {
		detectorModelName?: string;
		keyValue?: string;
		detectorModelVersion?: string;

		/** Information about the current state of the detector instance. */
		state?: DetectorState;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}


	/** Information about the current state of the detector instance. */
	export interface DetectorState {
		stateName: string;
		variables: Array<Variable>;
		timers: Array<Timer>;
	}


	/** The current state of the variable. */
	export interface Variable {
		name: string;
		value: string;
	}


	/** The current state of a timer. */
	export interface Timer {
		name: string;
		timestamp: Date;
	}

	export interface ResourceNotFoundException {
	}

	export interface ListDetectorsResponse {
		detectorSummaries?: Array<DetectorSummary>;
		nextToken?: string;
	}


	/** Information about the detector (instance). */
	export interface DetectorSummary {
		detectorModelName?: string;
		keyValue?: string;
		detectorModelVersion?: string;

		/** Information about the detector state. */
		state?: DetectorStateSummary;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}


	/** Information about the detector state. */
	export interface DetectorStateSummary {
		stateName?: string;
	}

	export enum ErrorCode { ResourceNotFoundException = 0, InvalidRequestException = 1, InternalFailureException = 2, ServiceUnavailableException = 3, ThrottlingException = 4 }

	export interface BatchPutMessageRequest {
		messages: Array<Message>;
	}

	export interface BatchUpdateDetectorRequest {
		detectors: Array<UpdateDetectorRequest>;
	}

	export interface DescribeDetectorRequest {
	}

	export interface ListDetectorsRequest {
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
		DescribeDetector(detectorModelName: string, keyValue: string): Observable<DescribeDetectorResponse> {
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
		ListDetectors(detectorModelName: string, stateName: string, nextToken: string, maxResults: number): Observable<ListDetectorsResponse> {
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

	export interface BatchUpdateDetectorPostBody {

		/**
		 * The list of detectors (instances) to update, along with the values to update.
		 * Required
		 * Minimum items: 1
		 */
		detectors: Array<UpdateDetectorRequest>;
	}

}

