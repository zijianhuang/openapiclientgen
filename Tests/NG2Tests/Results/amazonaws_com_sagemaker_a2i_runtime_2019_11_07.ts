import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DeleteHumanLoopResponse {
	}
	export interface DeleteHumanLoopResponseFormProperties {
	}
	export function CreateDeleteHumanLoopResponseFormGroup() {
		return new FormGroup<DeleteHumanLoopResponseFormProperties>({
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface DescribeHumanLoopResponse {

		/** Required */
		CreationTime: Date;
		FailureReason?: string | null;
		FailureCode?: string | null;

		/** Required */
		HumanLoopStatus: DescribeHumanLoopResponseHumanLoopStatus;

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanLoopName: string;

		/**
		 * Required
		 * Max length: 1024
		 */
		HumanLoopArn: string;

		/**
		 * Required
		 * Max length: 1024
		 */
		FlowDefinitionArn: string;

		/** Information about where the human output will be stored. */
		HumanLoopOutput?: HumanLoopOutput;
	}
	export interface DescribeHumanLoopResponseFormProperties {

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		FailureCode: FormControl<string | null | undefined>,

		/** Required */
		HumanLoopStatus: FormControl<DescribeHumanLoopResponseHumanLoopStatus | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanLoopName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		HumanLoopArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		FlowDefinitionArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeHumanLoopResponseFormGroup() {
		return new FormGroup<DescribeHumanLoopResponseFormProperties>({
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			FailureCode: new FormControl<string | null | undefined>(undefined),
			HumanLoopStatus: new FormControl<DescribeHumanLoopResponseHumanLoopStatus | null | undefined>(undefined, [Validators.required]),
			HumanLoopName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-z0-9](-*[a-z0-9])*$')]),
			HumanLoopArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:human-loop/.*')]),
			FlowDefinitionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:flow-definition/.*')]),
		});

	}

	export enum DescribeHumanLoopResponseHumanLoopStatus { InProgress = 0, Failed = 1, Completed = 2, Stopped = 3, Stopping = 4 }


	/** Information about where the human output will be stored. */
	export interface HumanLoopOutput {

		/** Required */
		OutputS3Uri: string;
	}

	/** Information about where the human output will be stored. */
	export interface HumanLoopOutputFormProperties {

		/** Required */
		OutputS3Uri: FormControl<string | null | undefined>,
	}
	export function CreateHumanLoopOutputFormGroup() {
		return new FormGroup<HumanLoopOutputFormProperties>({
			OutputS3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListHumanLoopsResponse {

		/** Required */
		HumanLoopSummaries: Array<HumanLoopSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListHumanLoopsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListHumanLoopsResponseFormGroup() {
		return new FormGroup<ListHumanLoopsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Summary information about the human loop. */
	export interface HumanLoopSummary {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		HumanLoopName?: string | null;
		HumanLoopStatus?: DescribeHumanLoopResponseHumanLoopStatus | null;
		CreationTime?: Date | null;

		/** Max length: 1024 */
		FailureReason?: string | null;

		/** Max length: 1024 */
		FlowDefinitionArn?: string | null;
	}

	/** Summary information about the human loop. */
	export interface HumanLoopSummaryFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		HumanLoopName: FormControl<string | null | undefined>,
		HumanLoopStatus: FormControl<DescribeHumanLoopResponseHumanLoopStatus | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		FlowDefinitionArn: FormControl<string | null | undefined>,
	}
	export function CreateHumanLoopSummaryFormGroup() {
		return new FormGroup<HumanLoopSummaryFormProperties>({
			HumanLoopName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-z0-9](-*[a-z0-9])*$')]),
			HumanLoopStatus: new FormControl<DescribeHumanLoopResponseHumanLoopStatus | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			FlowDefinitionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:flow-definition/.*')]),
		});

	}

	export interface StartHumanLoopResponse {

		/** Max length: 1024 */
		HumanLoopArn?: string | null;
	}
	export interface StartHumanLoopResponseFormProperties {

		/** Max length: 1024 */
		HumanLoopArn: FormControl<string | null | undefined>,
	}
	export function CreateStartHumanLoopResponseFormGroup() {
		return new FormGroup<StartHumanLoopResponseFormProperties>({
			HumanLoopArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:human-loop/.*')]),
		});

	}

	export enum ContentClassifier { FreeOfPersonallyIdentifiableInformation = 0, FreeOfAdultContent = 1 }

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
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

	export interface StopHumanLoopResponse {
	}
	export interface StopHumanLoopResponseFormProperties {
	}
	export function CreateStopHumanLoopResponseFormGroup() {
		return new FormGroup<StopHumanLoopResponseFormProperties>({
		});

	}

	export interface DeleteHumanLoopRequest {
	}
	export interface DeleteHumanLoopRequestFormProperties {
	}
	export function CreateDeleteHumanLoopRequestFormGroup() {
		return new FormGroup<DeleteHumanLoopRequestFormProperties>({
		});

	}

	export interface DescribeHumanLoopRequest {
	}
	export interface DescribeHumanLoopRequestFormProperties {
	}
	export function CreateDescribeHumanLoopRequestFormGroup() {
		return new FormGroup<DescribeHumanLoopRequestFormProperties>({
		});

	}

	export enum HumanLoopStatus { InProgress = 0, Failed = 1, Completed = 2, Stopped = 3, Stopping = 4 }


	/** Attributes of the data specified by the customer. Use these to describe the data to be labeled. */
	export interface HumanLoopDataAttributes {

		/**
		 * Required
		 * Maximum items: 256
		 */
		ContentClassifiers: Array<ContentClassifier>;
	}

	/** Attributes of the data specified by the customer. Use these to describe the data to be labeled. */
	export interface HumanLoopDataAttributesFormProperties {
	}
	export function CreateHumanLoopDataAttributesFormGroup() {
		return new FormGroup<HumanLoopDataAttributesFormProperties>({
		});

	}


	/** An object containing the human loop input in JSON format. */
	export interface HumanLoopInput {

		/**
		 * Required
		 * Max length: 3145728
		 */
		InputContent: string;
	}

	/** An object containing the human loop input in JSON format. */
	export interface HumanLoopInputFormProperties {

		/**
		 * Required
		 * Max length: 3145728
		 */
		InputContent: FormControl<string | null | undefined>,
	}
	export function CreateHumanLoopInputFormGroup() {
		return new FormGroup<HumanLoopInputFormProperties>({
			InputContent: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(3145728)]),
		});

	}

	export enum SortOrder { Ascending = 0, Descending = 1 }

	export interface ListHumanLoopsRequest {
	}
	export interface ListHumanLoopsRequestFormProperties {
	}
	export function CreateListHumanLoopsRequestFormGroup() {
		return new FormGroup<ListHumanLoopsRequestFormProperties>({
		});

	}

	export interface StartHumanLoopRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanLoopName: string;

		/**
		 * Required
		 * Max length: 1024
		 */
		FlowDefinitionArn: string;

		/**
		 * An object containing the human loop input in JSON format.
		 * Required
		 */
		HumanLoopInput: HumanLoopInput;

		/** Attributes of the data specified by the customer. Use these to describe the data to be labeled. */
		DataAttributes?: HumanLoopDataAttributes;
	}
	export interface StartHumanLoopRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanLoopName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		FlowDefinitionArn: FormControl<string | null | undefined>,
	}
	export function CreateStartHumanLoopRequestFormGroup() {
		return new FormGroup<StartHumanLoopRequestFormProperties>({
			HumanLoopName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-z0-9](-*[a-z0-9])*$')]),
			FlowDefinitionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:flow-definition/.*')]),
		});

	}

	export interface StopHumanLoopRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanLoopName: string;
	}
	export interface StopHumanLoopRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanLoopName: FormControl<string | null | undefined>,
	}
	export function CreateStopHumanLoopRequestFormGroup() {
		return new FormGroup<StopHumanLoopRequestFormProperties>({
			HumanLoopName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-z0-9](-*[a-z0-9])*$')]),
		});

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
		ListHumanLoops(CreationTimeAfter: Date | null | undefined, CreationTimeBefore: Date | null | undefined, FlowDefinitionArn: string, SortOrder: SortOrder | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<ListHumanLoopsResponse> {
			return this.http.get<ListHumanLoopsResponse>(this.baseUri + 'human-loops#FlowDefinitionArn?CreationTimeAfter=' + CreationTimeAfter?.toISOString() + '&CreationTimeBefore=' + CreationTimeBefore?.toISOString() + '&FlowDefinitionArn=' + (FlowDefinitionArn == null ? '' : encodeURIComponent(FlowDefinitionArn)) + '&SortOrder=' + SortOrder + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
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
		 */
		HumanLoopName: string;

		/**
		 * The Amazon Resource Name (ARN) of the flow definition associated with this human loop.
		 * Required
		 * Max length: 1024
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
	export interface StartHumanLoopPostBodyFormProperties {

		/**
		 * The name of the human loop.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanLoopName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the flow definition associated with this human loop.
		 * Required
		 * Max length: 1024
		 */
		FlowDefinitionArn: FormControl<string | null | undefined>,
	}
	export function CreateStartHumanLoopPostBodyFormGroup() {
		return new FormGroup<StartHumanLoopPostBodyFormProperties>({
			HumanLoopName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-z0-9](-*[a-z0-9])*$')]),
			FlowDefinitionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:flow-definition/.*')]),
		});

	}

	export interface StartHumanLoopPostBodyHumanLoopInput {

		/** Max length: 3145728 */
		InputContent?: string | null;
	}
	export interface StartHumanLoopPostBodyHumanLoopInputFormProperties {

		/** Max length: 3145728 */
		InputContent: FormControl<string | null | undefined>,
	}
	export function CreateStartHumanLoopPostBodyHumanLoopInputFormGroup() {
		return new FormGroup<StartHumanLoopPostBodyHumanLoopInputFormProperties>({
			InputContent: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3145728)]),
		});

	}

	export interface StartHumanLoopPostBodyDataAttributes {

		/** Maximum items: 256 */
		ContentClassifiers?: Array<ContentClassifier>;
	}
	export interface StartHumanLoopPostBodyDataAttributesFormProperties {
	}
	export function CreateStartHumanLoopPostBodyDataAttributesFormGroup() {
		return new FormGroup<StartHumanLoopPostBodyDataAttributesFormProperties>({
		});

	}

	export interface StopHumanLoopPostBody {

		/**
		 * The name of the human loop that you want to stop.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanLoopName: string;
	}
	export interface StopHumanLoopPostBodyFormProperties {

		/**
		 * The name of the human loop that you want to stop.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanLoopName: FormControl<string | null | undefined>,
	}
	export function CreateStopHumanLoopPostBodyFormGroup() {
		return new FormGroup<StopHumanLoopPostBodyFormProperties>({
			HumanLoopName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-z0-9](-*[a-z0-9])*$')]),
		});

	}

}

