import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface DeleteHumanLoopResponse {
	}

	export interface ValidationException {
	}

	export interface ResourceNotFoundException {
	}

	export interface ThrottlingException {
	}

	export interface InternalServerException {
	}

	export interface DescribeHumanLoopResponse {
		CreationTime: Date;
		FailureReason?: string;
		FailureCode?: string;
		HumanLoopStatus: DescribeHumanLoopResponseHumanLoopStatus;
		HumanLoopName: string;
		HumanLoopArn: string;
		FlowDefinitionArn: string;

		/** Information about where the human output will be stored. */
		HumanLoopOutput?: HumanLoopOutput;
	}

	export enum DescribeHumanLoopResponseHumanLoopStatus { InProgress = 0, Failed = 1, Completed = 2, Stopped = 3, Stopping = 4 }


	/** Information about where the human output will be stored. */
	export interface HumanLoopOutput {
		OutputS3Uri: string;
	}

	export interface ListHumanLoopsResponse {
		HumanLoopSummaries: Array<HumanLoopSummary>;
		NextToken?: string;
	}


	/** Summary information about the human loop. */
	export interface HumanLoopSummary {
		HumanLoopName?: string;
		HumanLoopStatus?: DescribeHumanLoopResponseHumanLoopStatus;
		CreationTime?: Date;
		FailureReason?: string;
		FlowDefinitionArn?: string;
	}

	export interface StartHumanLoopResponse {
		HumanLoopArn?: string;
	}

	export enum ContentClassifier { FreeOfPersonallyIdentifiableInformation = 0, FreeOfAdultContent = 1 }

	export interface ServiceQuotaExceededException {
	}

	export interface ConflictException {
	}

	export interface StopHumanLoopResponse {
	}

	export interface DeleteHumanLoopRequest {
	}

	export interface DescribeHumanLoopRequest {
	}

	export enum HumanLoopStatus { InProgress = 0, Failed = 1, Completed = 2, Stopped = 3, Stopping = 4 }


	/** Attributes of the data specified by the customer. Use these to describe the data to be labeled. */
	export interface HumanLoopDataAttributes {
		ContentClassifiers: Array<ContentClassifier>;
	}


	/** An object containing the human loop input in JSON format. */
	export interface HumanLoopInput {
		InputContent: string;
	}

	export enum SortOrder { Ascending = 0, Descending = 1 }

	export interface ListHumanLoopsRequest {
	}

	export interface StartHumanLoopRequest {
		HumanLoopName: string;
		FlowDefinitionArn: string;

		/**
		 * An object containing the human loop input in JSON format.
		 * Required
		 */
		HumanLoopInput: HumanLoopInput;

		/** Attributes of the data specified by the customer. Use these to describe the data to be labeled. */
		DataAttributes?: HumanLoopDataAttributes;
	}

	export interface StopHumanLoopRequest {
		HumanLoopName: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes the specified human loop for a flow definition.
		 * Delete human-loops/{HumanLoopName}
		 * @param {string} HumanLoopName The name of the human loop that you want to delete.
		 * @return {DeleteHumanLoopResponse} Success
		 */
		DeleteHumanLoop(HumanLoopName: string): Observable<DeleteHumanLoopResponse> {
			return this.http.delete<DeleteHumanLoopResponse>(this.baseUri + 'human-loops/' + (HumanLoopName == null ? '' : encodeURIComponent(HumanLoopName)), {});
		}

		/**
		 * Returns information about the specified human loop.
		 * Get human-loops/{HumanLoopName}
		 * @param {string} HumanLoopName The name of the human loop that you want information about.
		 * @return {DescribeHumanLoopResponse} Success
		 */
		DescribeHumanLoop(HumanLoopName: string): Observable<DescribeHumanLoopResponse> {
			return this.http.get<DescribeHumanLoopResponse>(this.baseUri + 'human-loops/' + (HumanLoopName == null ? '' : encodeURIComponent(HumanLoopName)), {});
		}

		/**
		 * Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.
		 * Get human-loops#FlowDefinitionArn
		 * @param {Date} CreationTimeAfter (Optional) The timestamp of the date when you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.
		 * @param {Date} CreationTimeBefore (Optional) The timestamp of the date before which you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.
		 * @param {string} FlowDefinitionArn The Amazon Resource Name (ARN) of a flow definition.
		 * @param {SortOrder} SortOrder Optional. The order for displaying results. Valid values: <code>Ascending</code> and <code>Descending</code>.
		 * @param {string} NextToken A token to display the next page of results.
		 * @param {number} MaxResults The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> is returned in the output. You can use this token to display the next page of results. 
		 * @return {ListHumanLoopsResponse} Success
		 */
		ListHumanLoops(CreationTimeAfter: Date, CreationTimeBefore: Date, FlowDefinitionArn: string, SortOrder: SortOrder, NextToken: string, MaxResults: number): Observable<ListHumanLoopsResponse> {
			return this.http.get<ListHumanLoopsResponse>(this.baseUri + 'human-loops#FlowDefinitionArn?CreationTimeAfter=' + CreationTimeAfter.toISOString() + '&CreationTimeBefore=' + CreationTimeBefore.toISOString() + '&FlowDefinitionArn=' + (FlowDefinitionArn == null ? '' : encodeURIComponent(FlowDefinitionArn)) + '&SortOrder=' + SortOrder + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * Starts a human loop, provided that at least one activation condition is met.
		 * Post human-loops
		 * @return {StartHumanLoopResponse} Success
		 */
		StartHumanLoop(requestBody: StartHumanLoopPostBody): Observable<StartHumanLoopResponse> {
			return this.http.post<StartHumanLoopResponse>(this.baseUri + 'human-loops', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the specified human loop.
		 * Post human-loops/stop
		 * @return {StopHumanLoopResponse} Success
		 */
		StopHumanLoop(requestBody: StopHumanLoopPostBody): Observable<StopHumanLoopResponse> {
			return this.http.post<StopHumanLoopResponse>(this.baseUri + 'human-loops/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface StartHumanLoopPostBody {

		/**
		 * The name of the human loop.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 * Pattern: ^[a-z0-9](-*[a-z0-9])*$
		 */
		HumanLoopName: string;

		/**
		 * The Amazon Resource Name (ARN) of the flow definition associated with this human loop.
		 * Required
		 * Max length: 1024
		 * Pattern: arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:flow-definition/.*
		 */
		FlowDefinitionArn: string;

		/**
		 * An object containing the human loop input in JSON format.
		 * Required
		 */
		HumanLoopInput: StartHumanLoopPostBodyHumanLoopInput;

		/** Attributes of the data specified by the customer. Use these to describe the data to be labeled. */
		DataAttributes?: StartHumanLoopPostBodyDataAttributes;
	}

	export interface StartHumanLoopPostBodyHumanLoopInput {
		InputContent?: string;
	}

	export interface StartHumanLoopPostBodyDataAttributes {
		ContentClassifiers?: Array<ContentClassifier>;
	}

	export interface StopHumanLoopPostBody {

		/**
		 * The name of the human loop that you want to stop.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 * Pattern: ^[a-z0-9](-*[a-z0-9])*$
		 */
		HumanLoopName: string;
	}

}

