import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface DescribeJobExecutionResponse {

		/** Contains data about a job execution. */
		execution?: JobExecution | null;
	}


	/** Contains data about a job execution. */
	export interface JobExecution {
		jobId?: string | null;
		thingName?: string | null;
		status?: JobExecutionStatus | null;
		statusDetails?: DetailsMap | null;
		queuedAt?: number | null;
		startedAt?: number | null;
		lastUpdatedAt?: number | null;
		approximateSecondsBeforeTimedOut?: number | null;
		versionNumber?: number | null;
		executionNumber?: number | null;
		jobDocument?: string | null;
	}

	export enum JobExecutionStatus { QUEUED = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3, TIMED_OUT = 4, REJECTED = 5, REMOVED = 6, CANCELED = 7 }

	export interface DetailsMap {
	}

	export interface InvalidRequestException {
	}

	export interface ResourceNotFoundException {
	}

	export interface ThrottlingException {
	}

	export interface ServiceUnavailableException {
	}

	export interface CertificateValidationException {
	}

	export interface TerminalStateException {
	}

	export interface GetPendingJobExecutionsResponse {
		inProgressJobs?: Array<JobExecutionSummary> | null;
		queuedJobs?: Array<JobExecutionSummary> | null;
	}


	/** Contains a subset of information about a job execution. */
	export interface JobExecutionSummary {
		jobId?: string | null;
		queuedAt?: number | null;
		startedAt?: number | null;
		lastUpdatedAt?: number | null;
		versionNumber?: number | null;
		executionNumber?: number | null;
	}

	export interface StartNextPendingJobExecutionResponse {

		/** Contains data about a job execution. */
		execution?: JobExecution | null;
	}

	export interface UpdateJobExecutionResponse {

		/** Contains data about the state of a job execution. */
		executionState?: JobExecutionState | null;
		jobDocument?: string | null;
	}


	/** Contains data about the state of a job execution. */
	export interface JobExecutionState {
		status?: JobExecutionStatus | null;
		statusDetails?: DetailsMap | null;
		versionNumber?: number | null;
	}

	export interface InvalidStateTransitionException {
	}

	export interface DescribeJobExecutionRequest {
	}

	export interface GetPendingJobExecutionsRequest {
	}

	export interface StartNextPendingJobExecutionRequest {
		statusDetails?: DetailsMap | null;
		stepTimeoutInMinutes?: number | null;
	}

	export interface UpdateJobExecutionRequest {
		status: JobExecutionStatus;
		statusDetails?: DetailsMap | null;
		stepTimeoutInMinutes?: number | null;
		expectedVersion?: number | null;
		includeJobExecutionState?: boolean | null;
		includeJobDocument?: boolean | null;
		executionNumber?: number | null;
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
		DescribeJobExecution(jobId: string, thingName: string, includeJobDocument: boolean, executionNumber: number): Observable<DescribeJobExecutionResponse> {
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
		statusDetails?: {[id: string]: string } | null;

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

	export interface StartNextPendingJobExecutionPutBody {

		/** A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged. */
		statusDetails?: {[id: string]: string } | null;

		/** Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by calling <code>UpdateJobExecution</code>, setting the status to <code>IN_PROGRESS</code> and specifying a new timeout value in field <code>stepTimeoutInMinutes</code>) the job execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting this timeout has no effect on that job execution timeout which may have been specified when the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>). */
		stepTimeoutInMinutes?: number | null;
	}

}

