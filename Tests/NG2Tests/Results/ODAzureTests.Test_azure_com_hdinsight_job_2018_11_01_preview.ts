import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The State of the application. */
	export interface AppState {

		/** The State of the application. */
		state?: AppStateState | null;
	}

	/** The State of the application. */
	export interface AppStateFormProperties {

		/** The State of the application. */
		state: FormControl<AppStateState | null | undefined>,
	}
	export function CreateAppStateFormGroup() {
		return new FormGroup<AppStateFormProperties>({
			state: new FormControl<AppStateState | null | undefined>(undefined),
		});

	}

	export enum AppStateState { NEW = 0, NEW_SAVING = 1, SUBMITTED = 2, ACCEPTED = 3, RUNNING = 4, FINISHED = 5, FINISHING = 6, FAILED = 7, KILLED = 8 }


	/** The object containing the job ACLs. */
	export interface JobACLs {
	}

	/** The object containing the job ACLs. */
	export interface JobACLsFormProperties {
	}
	export function CreateJobACLsFormGroup() {
		return new FormGroup<JobACLsFormProperties>({
		});

	}


	/** The object containing the job details. */
	export interface JobDetailRootJsonObject {

		/** The callback URL, if any. */
		callback?: string | null;

		/** The string representing completed status, for example 'done'. */
		completed?: string | null;

		/** The job's exit value. */
		exitValue?: number | null;

		/** The job ID. */
		id?: string | null;

		/** The message returned. */
		msg?: string | null;

		/** The parent job ID. */
		parentId?: string | null;

		/** The job completion percentage, for example '75% complete'. */
		percentComplete?: string | null;

		/** The object containing the job profile information. */
		profile?: Profile;

		/** Gets or sets the object containing the job status information. */
		status?: Status;

		/** The user name of the job creator. */
		user?: string | null;

		/** Gets or sets the object containing the user arguments. */
		userargs?: Userargs;
	}

	/** The object containing the job details. */
	export interface JobDetailRootJsonObjectFormProperties {

		/** The callback URL, if any. */
		callback: FormControl<string | null | undefined>,

		/** The string representing completed status, for example 'done'. */
		completed: FormControl<string | null | undefined>,

		/** The job's exit value. */
		exitValue: FormControl<number | null | undefined>,

		/** The job ID. */
		id: FormControl<string | null | undefined>,

		/** The message returned. */
		msg: FormControl<string | null | undefined>,

		/** The parent job ID. */
		parentId: FormControl<string | null | undefined>,

		/** The job completion percentage, for example '75% complete'. */
		percentComplete: FormControl<string | null | undefined>,

		/** The user name of the job creator. */
		user: FormControl<string | null | undefined>,
	}
	export function CreateJobDetailRootJsonObjectFormGroup() {
		return new FormGroup<JobDetailRootJsonObjectFormProperties>({
			callback: new FormControl<string | null | undefined>(undefined),
			completed: new FormControl<string | null | undefined>(undefined),
			exitValue: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			msg: new FormControl<string | null | undefined>(undefined),
			parentId: new FormControl<string | null | undefined>(undefined),
			percentComplete: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The object with the Job ID. */
	export interface JobID {

		/** The job number. */
		id?: number | null;

		/** The jobTracker identifier. */
		jtIdentifier?: string | null;
	}

	/** The object with the Job ID. */
	export interface JobIDFormProperties {

		/** The job number. */
		id: FormControl<number | null | undefined>,

		/** The jobTracker identifier. */
		jtIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateJobIDFormGroup() {
		return new FormGroup<JobIDFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			jtIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List Job operation response. */
	export interface JobListJsonObject {

		/** The object containing the job details. */
		detail?: JobDetailRootJsonObject;

		/** The Id of the job. */
		id?: string | null;
	}

	/** The List Job operation response. */
	export interface JobListJsonObjectFormProperties {

		/** The Id of the job. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateJobListJsonObjectFormGroup() {
		return new FormGroup<JobListJsonObjectFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the format of Error response. */
	export interface JobOperationsErrorResponse {

		/** Error message indicating why the operation failed. */
		error?: string | null;
	}

	/** Describes the format of Error response. */
	export interface JobOperationsErrorResponseFormProperties {

		/** Error message indicating why the operation failed. */
		error: FormControl<string | null | undefined>,
	}
	export function CreateJobOperationsErrorResponseFormGroup() {
		return new FormGroup<JobOperationsErrorResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The job submission json response. */
	export interface JobSubmissionJsonResponse {

		/** The Id of the created job. */
		id?: string | null;
	}

	/** The job submission json response. */
	export interface JobSubmissionJsonResponseFormProperties {

		/** The Id of the created job. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateJobSubmissionJsonResponseFormGroup() {
		return new FormGroup<JobSubmissionJsonResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The object containing the job profile information. */
	export interface Profile {

		/** The job configuration file. */
		jobFile?: string | null;

		/** The object with the Job ID. */
		jobID?: JobID;

		/** The full ID of the job. */
		jobId?: string | null;

		/** The user-specified job name. */
		jobName?: string | null;

		/** The name of the queue to which the job is submitted. */
		queueName?: string | null;

		/** The link to the web-ui for details of the job. */
		url?: string | null;

		/** The userid of the person who submitted the job. */
		user?: string | null;
	}

	/** The object containing the job profile information. */
	export interface ProfileFormProperties {

		/** The job configuration file. */
		jobFile: FormControl<string | null | undefined>,

		/** The full ID of the job. */
		jobId: FormControl<string | null | undefined>,

		/** The user-specified job name. */
		jobName: FormControl<string | null | undefined>,

		/** The name of the queue to which the job is submitted. */
		queueName: FormControl<string | null | undefined>,

		/** The link to the web-ui for details of the job. */
		url: FormControl<string | null | undefined>,

		/** The userid of the person who submitted the job. */
		user: FormControl<string | null | undefined>,
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
			jobFile: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined),
			queueName: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Gets or sets the object containing the job status information. */
	export interface Status {

		/** The progress made on the cleanup. */
		cleanupProgress?: number | null;

		/** The information about any failures that have occurred. */
		failureInfo?: string | null;

		/** The time at which the job completed. It is an integer in milliseconds, as a Unix timestamp relative to 1/1/1970 00:00:00. */
		finishTime?: number | null;

		/** The history file of the job. */
		historyFile?: string | null;

		/** The object containing the job ACLs. */
		jobACLs?: JobACLs;

		/** Whether or not the job has completed. */
		jobComplete?: boolean | null;

		/** The job configuration file. */
		jobFile?: string | null;

		/** The object with the Job ID. */
		jobID?: JobID;

		/** The full ID of the job. */
		jobId?: string | null;

		/** The user-specified job name. */
		jobName?: string | null;

		/** The priority of the job. */
		jobPriority?: string | null;

		/** The progress made on the maps. */
		mapProgress?: number | null;

		/** The amount of memory needed for the job. */
		neededMem?: number | null;

		/** The number of slots reserved. */
		numReservedSlots?: number | null;

		/** The number of slots used for the job. */
		numUsedSlots?: number | null;

		/** The priority of the job. */
		priority?: string | null;

		/** The job queue name. */
		queue?: string | null;

		/** The progress made on the reduces. */
		reduceProgress?: number | null;

		/** The amount of memory reserved for the job. */
		reservedMem?: number | null;

		/** Whether or not the job has been retired. */
		retired?: boolean | null;

		/** The current state of the job. */
		runState?: number | null;

		/** The information about the scheduling of the job. */
		schedulingInfo?: string | null;

		/** The progress made on the setup. */
		setupProgress?: number | null;

		/** The time at which the job started. It is an integer in milliseconds, as a Unix timestamp relative to 1/1/1970 00:00:00. */
		startTime?: number | null;

		/** The state of the job. */
		state?: string | null;

		/** The link to the web-ui for details of the job. */
		trackingUrl?: string | null;

		/** Whether job running in uber mode. */
		uber?: boolean | null;

		/** The amount of memory used by the job. */
		usedMem?: number | null;

		/** The userid of the person who submitted the job. */
		username?: string | null;
	}

	/** Gets or sets the object containing the job status information. */
	export interface StatusFormProperties {

		/** The progress made on the cleanup. */
		cleanupProgress: FormControl<number | null | undefined>,

		/** The information about any failures that have occurred. */
		failureInfo: FormControl<string | null | undefined>,

		/** The time at which the job completed. It is an integer in milliseconds, as a Unix timestamp relative to 1/1/1970 00:00:00. */
		finishTime: FormControl<number | null | undefined>,

		/** The history file of the job. */
		historyFile: FormControl<string | null | undefined>,

		/** Whether or not the job has completed. */
		jobComplete: FormControl<boolean | null | undefined>,

		/** The job configuration file. */
		jobFile: FormControl<string | null | undefined>,

		/** The full ID of the job. */
		jobId: FormControl<string | null | undefined>,

		/** The user-specified job name. */
		jobName: FormControl<string | null | undefined>,

		/** The priority of the job. */
		jobPriority: FormControl<string | null | undefined>,

		/** The progress made on the maps. */
		mapProgress: FormControl<number | null | undefined>,

		/** The amount of memory needed for the job. */
		neededMem: FormControl<number | null | undefined>,

		/** The number of slots reserved. */
		numReservedSlots: FormControl<number | null | undefined>,

		/** The number of slots used for the job. */
		numUsedSlots: FormControl<number | null | undefined>,

		/** The priority of the job. */
		priority: FormControl<string | null | undefined>,

		/** The job queue name. */
		queue: FormControl<string | null | undefined>,

		/** The progress made on the reduces. */
		reduceProgress: FormControl<number | null | undefined>,

		/** The amount of memory reserved for the job. */
		reservedMem: FormControl<number | null | undefined>,

		/** Whether or not the job has been retired. */
		retired: FormControl<boolean | null | undefined>,

		/** The current state of the job. */
		runState: FormControl<number | null | undefined>,

		/** The information about the scheduling of the job. */
		schedulingInfo: FormControl<string | null | undefined>,

		/** The progress made on the setup. */
		setupProgress: FormControl<number | null | undefined>,

		/** The time at which the job started. It is an integer in milliseconds, as a Unix timestamp relative to 1/1/1970 00:00:00. */
		startTime: FormControl<number | null | undefined>,

		/** The state of the job. */
		state: FormControl<string | null | undefined>,

		/** The link to the web-ui for details of the job. */
		trackingUrl: FormControl<string | null | undefined>,

		/** Whether job running in uber mode. */
		uber: FormControl<boolean | null | undefined>,

		/** The amount of memory used by the job. */
		usedMem: FormControl<number | null | undefined>,

		/** The userid of the person who submitted the job. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			cleanupProgress: new FormControl<number | null | undefined>(undefined),
			failureInfo: new FormControl<string | null | undefined>(undefined),
			finishTime: new FormControl<number | null | undefined>(undefined),
			historyFile: new FormControl<string | null | undefined>(undefined),
			jobComplete: new FormControl<boolean | null | undefined>(undefined),
			jobFile: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined),
			jobPriority: new FormControl<string | null | undefined>(undefined),
			mapProgress: new FormControl<number | null | undefined>(undefined),
			neededMem: new FormControl<number | null | undefined>(undefined),
			numReservedSlots: new FormControl<number | null | undefined>(undefined),
			numUsedSlots: new FormControl<number | null | undefined>(undefined),
			priority: new FormControl<string | null | undefined>(undefined),
			queue: new FormControl<string | null | undefined>(undefined),
			reduceProgress: new FormControl<number | null | undefined>(undefined),
			reservedMem: new FormControl<number | null | undefined>(undefined),
			retired: new FormControl<boolean | null | undefined>(undefined),
			runState: new FormControl<number | null | undefined>(undefined),
			schedulingInfo: new FormControl<string | null | undefined>(undefined),
			setupProgress: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			trackingUrl: new FormControl<string | null | undefined>(undefined),
			uber: new FormControl<boolean | null | undefined>(undefined),
			usedMem: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Gets or sets the object containing the user arguments. */
	export interface Userargs {

		/** The list of args defined by the user. */
		arg?: Array<string>;

		/** The callback URL, if any. */
		callback?: string | null;

		/** The define properties defined by the user. */
		define?: Array<string>;

		/** Whether or not the user enabled logs. */
		enablelog?: string | null;

		/** The query defined by the user. */
		execute?: string | null;

		/** The query file provided by the user. */
		file?: string | null;

		/** The files defined by the user. */
		files?: string | null;

		/** The JAR file provided by the user. */
		jar?: string | null;

		/** The status directory defined by the user. */
		statusdir?: string | null;
	}

	/** Gets or sets the object containing the user arguments. */
	export interface UserargsFormProperties {

		/** The callback URL, if any. */
		callback: FormControl<string | null | undefined>,

		/** Whether or not the user enabled logs. */
		enablelog: FormControl<string | null | undefined>,

		/** The query defined by the user. */
		execute: FormControl<string | null | undefined>,

		/** The query file provided by the user. */
		file: FormControl<string | null | undefined>,

		/** The files defined by the user. */
		files: FormControl<string | null | undefined>,

		/** The JAR file provided by the user. */
		jar: FormControl<string | null | undefined>,

		/** The status directory defined by the user. */
		statusdir: FormControl<string | null | undefined>,
	}
	export function CreateUserargsFormGroup() {
		return new FormGroup<UserargsFormProperties>({
			callback: new FormControl<string | null | undefined>(undefined),
			enablelog: new FormControl<string | null | undefined>(undefined),
			execute: new FormControl<string | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
			files: new FormControl<string | null | undefined>(undefined),
			jar: new FormControl<string | null | undefined>(undefined),
			statusdir: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the list of jobs from the specified HDInsight cluster.
		 * Get templeton/v1/jobs
		 * @param {string} user_name The user name used for running job.
		 * @param {Job_ListShowall} showall If showall is set to 'true', the request will return all jobs the user has permission to view, not only the jobs belonging to the user.
		 * @param {Job_ListFields} fields If fields set to '*', the request will return full details of the job. Currently the value can only be '*'.
		 * @return {Array<JobListJsonObject>} OK response definition.
		 */
		Job_List(user_name: string, showall: Job_ListShowall, fields: Job_ListFields): Observable<Array<JobListJsonObject>> {
			return this.http.get<Array<JobListJsonObject>>(this.baseUri + 'templeton/v1/jobs?user_name=' + (user_name == null ? '' : encodeURIComponent(user_name)) + '&showall=' + showall + '&fields=' + fields, {});
		}

		/**
		 * Gets job details from the specified HDInsight cluster.
		 * Get templeton/v1/jobs/{jobId}
		 * @param {string} user_name The user name used for running job.
		 * @param {string} jobId The id of the job.
		 * @param {Job_GetFields} fields If fields set to '*', the request will return full details of the job. Currently the value can only be '*'.
		 * @return {JobDetailRootJsonObject} OK response definition.
		 */
		Job_Get(user_name: string, jobId: string, fields: Job_GetFields): Observable<JobDetailRootJsonObject> {
			return this.http.get<JobDetailRootJsonObject>(this.baseUri + 'templeton/v1/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '?user_name=' + (user_name == null ? '' : encodeURIComponent(user_name)) + '&fields=' + fields, {});
		}

		/**
		 * Initiates cancel on given running job in the specified HDInsight.
		 * Delete templeton/v1/jobs/{jobId}
		 * @param {string} user_name The user name used for running job.
		 * @param {string} jobId The id of the job.
		 * @return {JobDetailRootJsonObject} OK response definition.
		 */
		Job_Kill(user_name: string, jobId: string): Observable<JobDetailRootJsonObject> {
			return this.http.delete<JobDetailRootJsonObject>(this.baseUri + 'templeton/v1/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '?user_name=' + (user_name == null ? '' : encodeURIComponent(user_name)), {});
		}

		/**
		 * Gets numrecords Of Jobs after jobid from the specified HDInsight cluster.
		 * Get templeton/v1/jobs?op=LISTAFTERID
		 * @param {string} user_name The user name used for running job.
		 * @param {string} jobid JobId from where to list jobs.
		 * @param {number} numrecords Number of jobs to fetch.
		 * @param {Job_ListShowall} showall If showall is set to 'true', the request will return all jobs the user has permission to view, not only the jobs belonging to the user.
		 * @param {Job_ListAfterJobIdFields} fields If fields set to '*', the request will return full details of the job. Currently the value can only be '*'.
		 * @return {Array<JobListJsonObject>} OK response definition.
		 */
		Job_ListAfterJobId(user_name: string, jobid: string | null | undefined, numrecords: number | null | undefined, showall: Job_ListShowall, fields: Job_ListAfterJobIdFields): Observable<Array<JobListJsonObject>> {
			return this.http.get<Array<JobListJsonObject>>(this.baseUri + 'templeton/v1/jobs?op=LISTAFTERID&user_name=' + (user_name == null ? '' : encodeURIComponent(user_name)) + '&jobid=' + (jobid == null ? '' : encodeURIComponent(jobid)) + '&numrecords=' + numrecords + '&showall=' + showall + '&fields=' + fields, {});
		}

		/**
		 * Gets application state from the specified HDInsight cluster.
		 * Get ws/v1/cluster/apps/{appId}/state
		 * @param {string} appId The id of the job.
		 * @return {AppState} OK response definition.
		 */
		Job_GetAppState(appId: string): Observable<AppState> {
			return this.http.get<AppState>(this.baseUri + 'ws/v1/cluster/apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/state', {});
		}
	}

	export enum Job_ListShowall { true = 0 }

	export enum Job_ListFields { '*' = 0 }

	export enum Job_GetFields { '*' = 0 }

	export enum Job_ListAfterJobIdFields { '*' = 0 }

}

