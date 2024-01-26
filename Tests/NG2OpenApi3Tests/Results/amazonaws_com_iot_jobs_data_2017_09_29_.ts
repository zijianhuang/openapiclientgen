import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DescribeJobExecutionResponse {
		execution?: JobExecution;
	}
	export interface DescribeJobExecutionResponseFormProperties {
	}
	export function CreateDescribeJobExecutionResponseFormGroup() {
		return new FormGroup<DescribeJobExecutionResponseFormProperties>({
		});

	}


	/** Contains data about a job execution. */
	export interface JobExecution {
		jobId?: string;
		thingName?: string;
		status?: JobExecutionStatus;
		statusDetails?: DetailsMap;
		queuedAt?: number | null;
		startedAt?: number | null;
		lastUpdatedAt?: number | null;
		approximateSecondsBeforeTimedOut?: number | null;
		versionNumber?: number | null;
		executionNumber?: number | null;
		jobDocument?: string;
	}

	/** Contains data about a job execution. */
	export interface JobExecutionFormProperties {
		jobId: FormControl<string | null | undefined>,
		thingName: FormControl<string | null | undefined>,
		status: FormControl<JobExecutionStatus | null | undefined>,
		queuedAt: FormControl<number | null | undefined>,
		startedAt: FormControl<number | null | undefined>,
		lastUpdatedAt: FormControl<number | null | undefined>,
		approximateSecondsBeforeTimedOut: FormControl<number | null | undefined>,
		versionNumber: FormControl<number | null | undefined>,
		executionNumber: FormControl<number | null | undefined>,
		jobDocument: FormControl<string | null | undefined>,
	}
	export function CreateJobExecutionFormGroup() {
		return new FormGroup<JobExecutionFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<JobExecutionStatus | null | undefined>(undefined),
			queuedAt: new FormControl<number | null | undefined>(undefined),
			startedAt: new FormControl<number | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<number | null | undefined>(undefined),
			approximateSecondsBeforeTimedOut: new FormControl<number | null | undefined>(undefined),
			versionNumber: new FormControl<number | null | undefined>(undefined),
			executionNumber: new FormControl<number | null | undefined>(undefined),
			jobDocument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobExecutionStatus { QUEUED = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3, TIMED_OUT = 4, REJECTED = 5, REMOVED = 6, CANCELED = 7 }

	export interface DetailsMap {
	}
	export interface DetailsMapFormProperties {
	}
	export function CreateDetailsMapFormGroup() {
		return new FormGroup<DetailsMapFormProperties>({
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

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface CertificateValidationException {
	}
	export interface CertificateValidationExceptionFormProperties {
	}
	export function CreateCertificateValidationExceptionFormGroup() {
		return new FormGroup<CertificateValidationExceptionFormProperties>({
		});

	}

	export interface TerminalStateException {
	}
	export interface TerminalStateExceptionFormProperties {
	}
	export function CreateTerminalStateExceptionFormGroup() {
		return new FormGroup<TerminalStateExceptionFormProperties>({
		});

	}

	export interface GetPendingJobExecutionsResponse {
		inProgressJobs?: Array<JobExecutionSummary>;
		queuedJobs?: Array<JobExecutionSummary>;
	}
	export interface GetPendingJobExecutionsResponseFormProperties {
	}
	export function CreateGetPendingJobExecutionsResponseFormGroup() {
		return new FormGroup<GetPendingJobExecutionsResponseFormProperties>({
		});

	}


	/** Contains a subset of information about a job execution. */
	export interface JobExecutionSummary {
		jobId?: string;
		queuedAt?: number | null;
		startedAt?: number | null;
		lastUpdatedAt?: number | null;
		versionNumber?: number | null;
		executionNumber?: number | null;
	}

	/** Contains a subset of information about a job execution. */
	export interface JobExecutionSummaryFormProperties {
		jobId: FormControl<string | null | undefined>,
		queuedAt: FormControl<number | null | undefined>,
		startedAt: FormControl<number | null | undefined>,
		lastUpdatedAt: FormControl<number | null | undefined>,
		versionNumber: FormControl<number | null | undefined>,
		executionNumber: FormControl<number | null | undefined>,
	}
	export function CreateJobExecutionSummaryFormGroup() {
		return new FormGroup<JobExecutionSummaryFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			queuedAt: new FormControl<number | null | undefined>(undefined),
			startedAt: new FormControl<number | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<number | null | undefined>(undefined),
			versionNumber: new FormControl<number | null | undefined>(undefined),
			executionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StartNextPendingJobExecutionResponse {
		execution?: JobExecution;
	}
	export interface StartNextPendingJobExecutionResponseFormProperties {
	}
	export function CreateStartNextPendingJobExecutionResponseFormGroup() {
		return new FormGroup<StartNextPendingJobExecutionResponseFormProperties>({
		});

	}

	export interface UpdateJobExecutionResponse {
		executionState?: JobExecutionState;
		jobDocument?: string;
	}
	export interface UpdateJobExecutionResponseFormProperties {
		jobDocument: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobExecutionResponseFormGroup() {
		return new FormGroup<UpdateJobExecutionResponseFormProperties>({
			jobDocument: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains data about the state of a job execution. */
	export interface JobExecutionState {
		status?: JobExecutionStatus;
		statusDetails?: DetailsMap;
		versionNumber?: number | null;
	}

	/** Contains data about the state of a job execution. */
	export interface JobExecutionStateFormProperties {
		status: FormControl<JobExecutionStatus | null | undefined>,
		versionNumber: FormControl<number | null | undefined>,
	}
	export function CreateJobExecutionStateFormGroup() {
		return new FormGroup<JobExecutionStateFormProperties>({
			status: new FormControl<JobExecutionStatus | null | undefined>(undefined),
			versionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidStateTransitionException {
	}
	export interface InvalidStateTransitionExceptionFormProperties {
	}
	export function CreateInvalidStateTransitionExceptionFormGroup() {
		return new FormGroup<InvalidStateTransitionExceptionFormProperties>({
		});

	}

	export interface DescribeJobExecutionRequest {
	}
	export interface DescribeJobExecutionRequestFormProperties {
	}
	export function CreateDescribeJobExecutionRequestFormGroup() {
		return new FormGroup<DescribeJobExecutionRequestFormProperties>({
		});

	}

	export interface GetPendingJobExecutionsRequest {
	}
	export interface GetPendingJobExecutionsRequestFormProperties {
	}
	export function CreateGetPendingJobExecutionsRequestFormGroup() {
		return new FormGroup<GetPendingJobExecutionsRequestFormProperties>({
		});

	}

	export interface StartNextPendingJobExecutionRequest {
		statusDetails?: DetailsMap;
		stepTimeoutInMinutes?: number | null;
	}
	export interface StartNextPendingJobExecutionRequestFormProperties {
		stepTimeoutInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateStartNextPendingJobExecutionRequestFormGroup() {
		return new FormGroup<StartNextPendingJobExecutionRequestFormProperties>({
			stepTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateJobExecutionRequest {

		/** Required */
		status: JobExecutionStatus;
		statusDetails?: DetailsMap;
		stepTimeoutInMinutes?: number | null;
		expectedVersion?: number | null;
		includeJobExecutionState?: boolean | null;
		includeJobDocument?: boolean | null;
		executionNumber?: number | null;
	}
	export interface UpdateJobExecutionRequestFormProperties {

		/** Required */
		status: FormControl<JobExecutionStatus | null | undefined>,
		stepTimeoutInMinutes: FormControl<number | null | undefined>,
		expectedVersion: FormControl<number | null | undefined>,
		includeJobExecutionState: FormControl<boolean | null | undefined>,
		includeJobDocument: FormControl<boolean | null | undefined>,
		executionNumber: FormControl<number | null | undefined>,
	}
	export function CreateUpdateJobExecutionRequestFormGroup() {
		return new FormGroup<UpdateJobExecutionRequestFormProperties>({
			status: new FormControl<JobExecutionStatus | null | undefined>(undefined, [Validators.required]),
			stepTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			expectedVersion: new FormControl<number | null | undefined>(undefined),
			includeJobExecutionState: new FormControl<boolean | null | undefined>(undefined),
			includeJobDocument: new FormControl<boolean | null | undefined>(undefined),
			executionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets details of a job execution.
		 * Get things/{thingName}/jobs/{jobId}
		 * @param {string} jobId The unique identifier assigned to this job when it was created.
		 * @param {string} thingName The thing name associated with the device the job execution is running on.
		 * @param {boolean} includeJobDocument Optional. When set to true, the response contains the job document. The default is false.
		 * @param {number} executionNumber Optional. A number that identifies a particular job execution on a particular device. If not specified, the latest job execution is returned.
		 * @return {DescribeJobExecutionResponse} Success
		 */
		DescribeJobExecution(jobId: string, thingName: string, includeJobDocument: boolean | null | undefined, executionNumber: number | null | undefined): Observable<DescribeJobExecutionResponse> {
			return this.http.get<DescribeJobExecutionResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&includeJobDocument=' + includeJobDocument + '&executionNumber=' + executionNumber, {});
		}

		/**
		 * Updates the status of a job execution.
		 * Post things/{thingName}/jobs/{jobId}
		 * @param {string} jobId The unique identifier assigned to this job when it was created.
		 * @param {string} thingName The name of the thing associated with the device.
		 * @return {UpdateJobExecutionResponse} Success
		 */
		UpdateJobExecution(jobId: string, thingName: string, requestBody: UpdateJobExecutionPostBody): Observable<UpdateJobExecutionResponse> {
			return this.http.post<UpdateJobExecutionResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the list of all jobs for a thing that are not in a terminal status.
		 * Get things/{thingName}/jobs
		 * @param {string} thingName The name of the thing that is executing the job.
		 * @return {GetPendingJobExecutionsResponse} Success
		 */
		GetPendingJobExecutions(thingName: string): Observable<GetPendingJobExecutionsResponse> {
			return this.http.get<GetPendingJobExecutionsResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs', {});
		}

		/**
		 * Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.
		 * Put things/{thingName}/jobs/$next
		 * @param {string} thingName The name of the thing associated with the device.
		 * @return {StartNextPendingJobExecutionResponse} Success
		 */
		StartNextPendingJobExecution(thingName: string, requestBody: StartNextPendingJobExecutionPutBody): Observable<StartNextPendingJobExecutionResponse> {
			return this.http.put<StartNextPendingJobExecutionResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs/$next', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface UpdateJobExecutionPostBody {

		/**
		 * The new status for the job execution (IN_PROGRESS, FAILED, SUCCESS, or REJECTED). This must be specified on every update.
		 * Required
		 */
		status: JobExecutionStatus;

		/** Optional. A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged. */
		statusDetails?: {[id: string]: string };

		/** Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by again calling <code>UpdateJobExecution</code>, setting the status to <code>IN_PROGRESS</code> and specifying a new timeout value in this field) the job execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting or resetting this timeout has no effect on that job execution timeout which may have been specified when the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>). */
		stepTimeoutInMinutes?: number | null;

		/** Optional. The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.) */
		expectedVersion?: number | null;

		/** Optional. When included and set to true, the response contains the JobExecutionState data. The default is false. */
		includeJobExecutionState?: boolean | null;

		/** Optional. When set to true, the response contains the job document. The default is false. */
		includeJobDocument?: boolean | null;

		/** Optional. A number that identifies a particular job execution on a particular device. */
		executionNumber?: number | null;
	}
	export interface UpdateJobExecutionPostBodyFormProperties {

		/**
		 * The new status for the job execution (IN_PROGRESS, FAILED, SUCCESS, or REJECTED). This must be specified on every update.
		 * Required
		 */
		status: FormControl<JobExecutionStatus | null | undefined>,

		/** Optional. A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged. */
		statusDetails: FormControl<{[id: string]: string } | null | undefined>,

		/** Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by again calling <code>UpdateJobExecution</code>, setting the status to <code>IN_PROGRESS</code> and specifying a new timeout value in this field) the job execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting or resetting this timeout has no effect on that job execution timeout which may have been specified when the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>). */
		stepTimeoutInMinutes: FormControl<number | null | undefined>,

		/** Optional. The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.) */
		expectedVersion: FormControl<number | null | undefined>,

		/** Optional. When included and set to true, the response contains the JobExecutionState data. The default is false. */
		includeJobExecutionState: FormControl<boolean | null | undefined>,

		/** Optional. When set to true, the response contains the job document. The default is false. */
		includeJobDocument: FormControl<boolean | null | undefined>,

		/** Optional. A number that identifies a particular job execution on a particular device. */
		executionNumber: FormControl<number | null | undefined>,
	}
	export function CreateUpdateJobExecutionPostBodyFormGroup() {
		return new FormGroup<UpdateJobExecutionPostBodyFormProperties>({
			status: new FormControl<JobExecutionStatus | null | undefined>(undefined, [Validators.required]),
			statusDetails: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			stepTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			expectedVersion: new FormControl<number | null | undefined>(undefined),
			includeJobExecutionState: new FormControl<boolean | null | undefined>(undefined),
			includeJobDocument: new FormControl<boolean | null | undefined>(undefined),
			executionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StartNextPendingJobExecutionPutBody {

		/** A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged. */
		statusDetails?: {[id: string]: string };

		/** Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by calling <code>UpdateJobExecution</code>, setting the status to <code>IN_PROGRESS</code> and specifying a new timeout value in field <code>stepTimeoutInMinutes</code>) the job execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting this timeout has no effect on that job execution timeout which may have been specified when the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>). */
		stepTimeoutInMinutes?: number | null;
	}
	export interface StartNextPendingJobExecutionPutBodyFormProperties {

		/** A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged. */
		statusDetails: FormControl<{[id: string]: string } | null | undefined>,

		/** Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by calling <code>UpdateJobExecution</code>, setting the status to <code>IN_PROGRESS</code> and specifying a new timeout value in field <code>stepTimeoutInMinutes</code>) the job execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting this timeout has no effect on that job execution timeout which may have been specified when the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>). */
		stepTimeoutInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateStartNextPendingJobExecutionPutBodyFormGroup() {
		return new FormGroup<StartNextPendingJobExecutionPutBodyFormProperties>({
			statusDetails: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			stepTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

}

