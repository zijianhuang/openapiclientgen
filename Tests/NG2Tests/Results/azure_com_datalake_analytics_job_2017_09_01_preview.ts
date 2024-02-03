import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Data Lake Analytics Job Parameters base class for build and submit. */
	export interface BaseJobParameters {

		/**
		 * The common Data Lake Analytics job properties for job submission.
		 * Required
		 */
		properties: CreateJobProperties;

		/**
		 * The job type of the current job (Hive, USql, or Scope (for internal use only)).
		 * Required
		 */
		type: BaseJobParametersType;
	}

	/** Data Lake Analytics Job Parameters base class for build and submit. */
	export interface BaseJobParametersFormProperties {

		/**
		 * The job type of the current job (Hive, USql, or Scope (for internal use only)).
		 * Required
		 */
		type: FormControl<BaseJobParametersType | null | undefined>,
	}
	export function CreateBaseJobParametersFormGroup() {
		return new FormGroup<BaseJobParametersFormProperties>({
			type: new FormControl<BaseJobParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BaseJobParametersType { USql = 'USql', Hive = 'Hive', Scope = 'Scope' }


	/** The parameters used to build a new Data Lake Analytics job. */
	export interface BuildJobParameters extends BaseJobParameters {

		/** The friendly name of the job to build. */
		name?: string | null;
	}

	/** The parameters used to build a new Data Lake Analytics job. */
	export interface BuildJobParametersFormProperties extends BaseJobParametersFormProperties {

		/** The friendly name of the job to build. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBuildJobParametersFormGroup() {
		return new FormGroup<BuildJobParametersFormProperties>({
			type: new FormControl<BaseJobParametersType | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters used to submit a new Data Lake Analytics job. */
	export interface CreateJobParameters extends BaseJobParameters {

		/** The degree of parallelism to use for this job. At most one of degreeOfParallelism and degreeOfParallelismPercent should be specified. If none, a default value of 1 will be used for degreeOfParallelism. */
		degreeOfParallelism?: number | null;

		/** the degree of parallelism in percentage used for this job. At most one of degreeOfParallelism and degreeOfParallelismPercent should be specified. If none, a default value of 1 will be used for degreeOfParallelism. */
		degreeOfParallelismPercent?: number | null;

		/** The list of log file name patterns to find in the logFolder. '*' is the only matching character allowed. Example format: jobExecution*.log or *mylog*.txt */
		logFilePatterns?: Array<string>;

		/**
		 * The friendly name of the job to submit.
		 * Required
		 */
		name: string;

		/** The priority value to use for the current job. Lower numbers have a higher priority. By default, a job has a priority of 1000. This must be greater than 0. */
		priority?: number | null;

		/** Job relationship information properties including pipeline information, correlation information, etc. */
		related?: JobRelationshipProperties;
	}

	/** The parameters used to submit a new Data Lake Analytics job. */
	export interface CreateJobParametersFormProperties extends BaseJobParametersFormProperties {

		/** The degree of parallelism to use for this job. At most one of degreeOfParallelism and degreeOfParallelismPercent should be specified. If none, a default value of 1 will be used for degreeOfParallelism. */
		degreeOfParallelism: FormControl<number | null | undefined>,

		/** the degree of parallelism in percentage used for this job. At most one of degreeOfParallelism and degreeOfParallelismPercent should be specified. If none, a default value of 1 will be used for degreeOfParallelism. */
		degreeOfParallelismPercent: FormControl<number | null | undefined>,

		/**
		 * The friendly name of the job to submit.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The priority value to use for the current job. Lower numbers have a higher priority. By default, a job has a priority of 1000. This must be greater than 0. */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateCreateJobParametersFormGroup() {
		return new FormGroup<CreateJobParametersFormProperties>({
			type: new FormControl<BaseJobParametersType | null | undefined>(undefined, [Validators.required]),
			degreeOfParallelism: new FormControl<number | null | undefined>(undefined),
			degreeOfParallelismPercent: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The common Data Lake Analytics job properties for job submission. */
	export interface CreateJobProperties {

		/** The runtime version of the Data Lake Analytics engine to use for the specific type of job being run. */
		runtimeVersion?: string | null;

		/**
		 * The script to run. Please note that the maximum script size is 3 MB.
		 * Required
		 */
		script: string;

		/**
		 * The job type of the current job (Hive, USql, or Scope (for internal use only)).
		 * Required
		 */
		type: string;
	}

	/** The common Data Lake Analytics job properties for job submission. */
	export interface CreateJobPropertiesFormProperties {

		/** The runtime version of the Data Lake Analytics engine to use for the specific type of job being run. */
		runtimeVersion: FormControl<string | null | undefined>,

		/**
		 * The script to run. Please note that the maximum script size is 3 MB.
		 * Required
		 */
		script: FormControl<string | null | undefined>,

		/**
		 * The job type of the current job (Hive, USql, or Scope (for internal use only)).
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobPropertiesFormGroup() {
		return new FormGroup<CreateJobPropertiesFormProperties>({
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters used to submit a new Data Lake Analytics Scope job. (Only for use internally with Scope job type.) */
	export interface CreateScopeJobParameters extends CreateJobParameters {

		/** The key-value pairs used to add additional metadata to the job information. */
		tags?: {[id: string]: string };
	}

	/** The parameters used to submit a new Data Lake Analytics Scope job. (Only for use internally with Scope job type.) */
	export interface CreateScopeJobParametersFormProperties extends CreateJobParametersFormProperties {

		/** The key-value pairs used to add additional metadata to the job information. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateScopeJobParametersFormGroup() {
		return new FormGroup<CreateScopeJobParametersFormProperties>({
			type: new FormControl<BaseJobParametersType | null | undefined>(undefined, [Validators.required]),
			degreeOfParallelism: new FormControl<number | null | undefined>(undefined),
			degreeOfParallelismPercent: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<number | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Scope job properties used when submitting Scope jobs. (Only for use internally with Scope job type.) */
	export interface CreateScopeJobProperties extends CreateJobProperties {

		/** The list of email addresses, separated by semi-colons, to notify when the job reaches a terminal state. */
		notifier?: string | null;

		/** The list of resources that are required by the job. */
		resources?: Array<ScopeJobResource>;
	}

	/** Scope job properties used when submitting Scope jobs. (Only for use internally with Scope job type.) */
	export interface CreateScopeJobPropertiesFormProperties extends CreateJobPropertiesFormProperties {

		/** The list of email addresses, separated by semi-colons, to notify when the job reaches a terminal state. */
		notifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateScopeJobPropertiesFormGroup() {
		return new FormGroup<CreateScopeJobPropertiesFormProperties>({
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Scope job resources. (Only for use internally with Scope job type.) */
	export interface ScopeJobResource {

		/** The name of the resource. */
		name?: string | null;

		/** The path to the resource. */
		path?: string | null;
	}

	/** The Scope job resources. (Only for use internally with Scope job type.) */
	export interface ScopeJobResourceFormProperties {

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The path to the resource. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateScopeJobResourceFormGroup() {
		return new FormGroup<ScopeJobResourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** U-SQL job properties used when submitting U-SQL jobs. */
	export interface CreateUSqlJobProperties extends CreateJobProperties {

		/** The specific compilation mode for the job used during execution. If this is not specified during submission, the server will determine the optimal compilation mode. */
		compileMode?: CreateUSqlJobPropertiesCompileMode | null;
	}

	/** U-SQL job properties used when submitting U-SQL jobs. */
	export interface CreateUSqlJobPropertiesFormProperties extends CreateJobPropertiesFormProperties {

		/** The specific compilation mode for the job used during execution. If this is not specified during submission, the server will determine the optimal compilation mode. */
		compileMode: FormControl<CreateUSqlJobPropertiesCompileMode | null | undefined>,
	}
	export function CreateCreateUSqlJobPropertiesFormGroup() {
		return new FormGroup<CreateUSqlJobPropertiesFormProperties>({
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			compileMode: new FormControl<CreateUSqlJobPropertiesCompileMode | null | undefined>(undefined),
		});

	}

	export enum CreateUSqlJobPropertiesCompileMode { Semantic = 'Semantic', Full = 'Full', SingleBox = 'SingleBox' }


	/** Error diagnostic information for failed jobs. */
	export interface Diagnostics {

		/** The column where the error occurred. */
		columnNumber?: number | null;

		/** The ending index of the error. */
		end?: number | null;

		/** The line number the error occurred on. */
		lineNumber?: number | null;

		/** The error message. */
		message?: string | null;

		/** The severity of the error. */
		severity?: DiagnosticsSeverity | null;

		/** The starting index of the error. */
		start?: number | null;
	}

	/** Error diagnostic information for failed jobs. */
	export interface DiagnosticsFormProperties {

		/** The column where the error occurred. */
		columnNumber: FormControl<number | null | undefined>,

		/** The ending index of the error. */
		end: FormControl<number | null | undefined>,

		/** The line number the error occurred on. */
		lineNumber: FormControl<number | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The severity of the error. */
		severity: FormControl<DiagnosticsSeverity | null | undefined>,

		/** The starting index of the error. */
		start: FormControl<number | null | undefined>,
	}
	export function CreateDiagnosticsFormGroup() {
		return new FormGroup<DiagnosticsFormProperties>({
			columnNumber: new FormControl<number | null | undefined>(undefined),
			end: new FormControl<number | null | undefined>(undefined),
			lineNumber: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<DiagnosticsSeverity | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DiagnosticsSeverity { Warning = 'Warning', Error = 'Error', Info = 'Info', SevereWarning = 'SevereWarning', Deprecated = 'Deprecated', UserWarning = 'UserWarning' }


	/** Hive job properties used when retrieving Hive jobs. */
	export interface HiveJobProperties extends JobProperties {

		/** The number of statements that have been run based on the script. */
		executedStatementCount?: number | null;

		/** The Hive logs location. */
		logsLocation?: string | null;

		/** The location of Hive job output files (both execution output and results). */
		outputLocation?: string | null;

		/** The number of statements that will be run based on the script. */
		statementCount?: number | null;
	}

	/** Hive job properties used when retrieving Hive jobs. */
	export interface HiveJobPropertiesFormProperties extends JobPropertiesFormProperties {

		/** The number of statements that have been run based on the script. */
		executedStatementCount: FormControl<number | null | undefined>,

		/** The Hive logs location. */
		logsLocation: FormControl<string | null | undefined>,

		/** The location of Hive job output files (both execution output and results). */
		outputLocation: FormControl<string | null | undefined>,

		/** The number of statements that will be run based on the script. */
		statementCount: FormControl<number | null | undefined>,
	}
	export function CreateHiveJobPropertiesFormGroup() {
		return new FormGroup<HiveJobPropertiesFormProperties>({
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			executedStatementCount: new FormControl<number | null | undefined>(undefined),
			logsLocation: new FormControl<string | null | undefined>(undefined),
			outputLocation: new FormControl<string | null | undefined>(undefined),
			statementCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics job data path item. */
	export interface JobDataPath {

		/** The command that this job data relates to. */
		command?: string | null;

		/** The ID of the job this data is for. */
		jobId?: string | null;

		/** The list of paths to all of the job data. */
		paths?: Array<string>;
	}

	/** A Data Lake Analytics job data path item. */
	export interface JobDataPathFormProperties {

		/** The command that this job data relates to. */
		command: FormControl<string | null | undefined>,

		/** The ID of the job this data is for. */
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateJobDataPathFormGroup() {
		return new FormGroup<JobDataPathFormProperties>({
			command: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Data Lake Analytics job error details. */
	export interface JobErrorDetails {

		/** The error message description. */
		description?: string | null;

		/** The details of the error message. */
		details?: string | null;

		/** The end offset in the job where the error was found. */
		endOffset?: number | null;

		/** The specific identifier for the type of error encountered in the job. */
		errorId?: string | null;

		/** The path to any supplemental error files, if any. */
		filePath?: string | null;

		/** The link to MSDN or Azure help for this type of error, if any. */
		helpLink?: string | null;

		/** The Data Lake Analytics job error details. */
		innerError?: JobInnerError;

		/** The internal diagnostic stack trace if the user requesting the job error details has sufficient permissions it will be retrieved, otherwise it will be empty. */
		internalDiagnostics?: string | null;

		/** The specific line number in the job where the error occurred. */
		lineNumber?: number | null;

		/** The user friendly error message for the failure. */
		message?: string | null;

		/** The recommended resolution for the failure, if any. */
		resolution?: string | null;

		/** The severity level of the failure. */
		severity?: DiagnosticsSeverity | null;

		/** The ultimate source of the failure (usually either SYSTEM or USER). */
		source?: string | null;

		/** The start offset in the job where the error was found */
		startOffset?: number | null;
	}

	/** The Data Lake Analytics job error details. */
	export interface JobErrorDetailsFormProperties {

		/** The error message description. */
		description: FormControl<string | null | undefined>,

		/** The details of the error message. */
		details: FormControl<string | null | undefined>,

		/** The end offset in the job where the error was found. */
		endOffset: FormControl<number | null | undefined>,

		/** The specific identifier for the type of error encountered in the job. */
		errorId: FormControl<string | null | undefined>,

		/** The path to any supplemental error files, if any. */
		filePath: FormControl<string | null | undefined>,

		/** The link to MSDN or Azure help for this type of error, if any. */
		helpLink: FormControl<string | null | undefined>,

		/** The internal diagnostic stack trace if the user requesting the job error details has sufficient permissions it will be retrieved, otherwise it will be empty. */
		internalDiagnostics: FormControl<string | null | undefined>,

		/** The specific line number in the job where the error occurred. */
		lineNumber: FormControl<number | null | undefined>,

		/** The user friendly error message for the failure. */
		message: FormControl<string | null | undefined>,

		/** The recommended resolution for the failure, if any. */
		resolution: FormControl<string | null | undefined>,

		/** The severity level of the failure. */
		severity: FormControl<DiagnosticsSeverity | null | undefined>,

		/** The ultimate source of the failure (usually either SYSTEM or USER). */
		source: FormControl<string | null | undefined>,

		/** The start offset in the job where the error was found */
		startOffset: FormControl<number | null | undefined>,
	}
	export function CreateJobErrorDetailsFormGroup() {
		return new FormGroup<JobErrorDetailsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			endOffset: new FormControl<number | null | undefined>(undefined),
			errorId: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
			helpLink: new FormControl<string | null | undefined>(undefined),
			internalDiagnostics: new FormControl<string | null | undefined>(undefined),
			lineNumber: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			resolution: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<DiagnosticsSeverity | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			startOffset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of JobInfo items. */
	export interface JobInfoListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The list of JobInfo items. */
		value?: Array<JobInformationBasic>;
	}

	/** List of JobInfo items. */
	export interface JobInfoListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobInfoListResultFormGroup() {
		return new FormGroup<JobInfoListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The common Data Lake Analytics job information properties. */
	export interface JobInformationBasic {

		/** The degree of parallelism used for this job. */
		degreeOfParallelism?: number | null;

		/** the degree of parallelism in percentage used for this job. */
		degreeOfParallelismPercent?: number | null;

		/** The completion time of the job. */
		endTime?: Date | null;

		/** the name of hierarchy queue node this job is assigned to, Null if job has not been assigned yet or the account doesn't have hierarchy queue. */
		hierarchyQueueNode?: string | null;

		/** The job's unique identifier (a GUID). */
		jobId?: string | null;

		/** The list of log file name patterns to find in the logFolder. '*' is the only matching character allowed. Example format: jobExecution*.log or *mylog*.txt */
		logFilePatterns?: Array<string>;

		/** The log folder path to use in the following format: adl://<accountName>.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/03/13/17/18/5fe51957-93bc-4de0-8ddc-c5a4753b068b/logs/. */
		logFolder?: string | null;

		/**
		 * The friendly name of the job.
		 * Required
		 */
		name: string;

		/** The priority value for the current job. Lower numbers have a higher priority. By default, a job has a priority of 1000. This must be greater than 0. */
		priority?: number | null;

		/** Job relationship information properties including pipeline information, correlation information, etc. */
		related?: JobRelationshipProperties;

		/** The result of job execution or the current result of the running job. */
		result?: JobInformationBasicResult | null;

		/** The start time of the job. */
		startTime?: Date | null;

		/** The job state. When the job is in the Ended state, refer to Result and ErrorMessage for details. */
		state?: JobInformationBasicState | null;

		/** The time the job was submitted to the service. */
		submitTime?: Date | null;

		/** The user or account that submitted the job. */
		submitter?: string | null;

		/** The key-value pairs used to add additional metadata to the job information. (Only for use internally with Scope job type.) */
		tags?: {[id: string]: string };

		/**
		 * The job type of the current job (Hive, USql, or Scope (for internal use only)).
		 * Required
		 */
		type: BaseJobParametersType;
	}

	/** The common Data Lake Analytics job information properties. */
	export interface JobInformationBasicFormProperties {

		/** The degree of parallelism used for this job. */
		degreeOfParallelism: FormControl<number | null | undefined>,

		/** the degree of parallelism in percentage used for this job. */
		degreeOfParallelismPercent: FormControl<number | null | undefined>,

		/** The completion time of the job. */
		endTime: FormControl<Date | null | undefined>,

		/** the name of hierarchy queue node this job is assigned to, Null if job has not been assigned yet or the account doesn't have hierarchy queue. */
		hierarchyQueueNode: FormControl<string | null | undefined>,

		/** The job's unique identifier (a GUID). */
		jobId: FormControl<string | null | undefined>,

		/** The log folder path to use in the following format: adl://<accountName>.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/03/13/17/18/5fe51957-93bc-4de0-8ddc-c5a4753b068b/logs/. */
		logFolder: FormControl<string | null | undefined>,

		/**
		 * The friendly name of the job.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The priority value for the current job. Lower numbers have a higher priority. By default, a job has a priority of 1000. This must be greater than 0. */
		priority: FormControl<number | null | undefined>,

		/** The result of job execution or the current result of the running job. */
		result: FormControl<JobInformationBasicResult | null | undefined>,

		/** The start time of the job. */
		startTime: FormControl<Date | null | undefined>,

		/** The job state. When the job is in the Ended state, refer to Result and ErrorMessage for details. */
		state: FormControl<JobInformationBasicState | null | undefined>,

		/** The time the job was submitted to the service. */
		submitTime: FormControl<Date | null | undefined>,

		/** The user or account that submitted the job. */
		submitter: FormControl<string | null | undefined>,

		/** The key-value pairs used to add additional metadata to the job information. (Only for use internally with Scope job type.) */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The job type of the current job (Hive, USql, or Scope (for internal use only)).
		 * Required
		 */
		type: FormControl<BaseJobParametersType | null | undefined>,
	}
	export function CreateJobInformationBasicFormGroup() {
		return new FormGroup<JobInformationBasicFormProperties>({
			degreeOfParallelism: new FormControl<number | null | undefined>(undefined),
			degreeOfParallelismPercent: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			hierarchyQueueNode: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			logFolder: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<number | null | undefined>(undefined),
			result: new FormControl<JobInformationBasicResult | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<JobInformationBasicState | null | undefined>(undefined),
			submitTime: new FormControl<Date | null | undefined>(undefined),
			submitter: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<BaseJobParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobInformationBasicResult { None = 'None', Succeeded = 'Succeeded', Cancelled = 'Cancelled', Failed = 'Failed' }

	export enum JobInformationBasicState { Accepted = 'Accepted', Compiling = 'Compiling', Ended = 'Ended', New = 'New', Queued = 'Queued', Running = 'Running', Scheduling = 'Scheduling', Starting = 'Starting', Paused = 'Paused', WaitingForCapacity = 'WaitingForCapacity', Yielded = 'Yielded', Finalizing = 'Finalizing' }


	/** The extended Data Lake Analytics job information properties returned when retrieving a specific job. */
	export interface JobInformation extends JobInformationBasic {

		/** The error message details for the job, if the job failed. */
		errorMessage?: Array<JobErrorDetails>;

		/**
		 * The common Data Lake Analytics job properties.
		 * Required
		 */
		properties: JobProperties;

		/** The job state audit records, indicating when various operations have been performed on this job. */
		stateAuditRecords?: Array<JobStateAuditRecord>;
	}

	/** The extended Data Lake Analytics job information properties returned when retrieving a specific job. */
	export interface JobInformationFormProperties extends JobInformationBasicFormProperties {
	}
	export function CreateJobInformationFormGroup() {
		return new FormGroup<JobInformationFormProperties>({
			degreeOfParallelism: new FormControl<number | null | undefined>(undefined),
			degreeOfParallelismPercent: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			hierarchyQueueNode: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			logFolder: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<number | null | undefined>(undefined),
			result: new FormControl<JobInformationBasicResult | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<JobInformationBasicState | null | undefined>(undefined),
			submitTime: new FormControl<Date | null | undefined>(undefined),
			submitter: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<BaseJobParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Data Lake Analytics job state audit records for tracking the lifecycle of a job. */
	export interface JobStateAuditRecord {

		/** The details of the audit log. */
		details?: string | null;

		/** The new state the job is in. */
		newState?: string | null;

		/** The user who requests the change. */
		requestedByUser?: string | null;

		/** The time stamp that the state change took place. */
		timeStamp?: Date | null;
	}

	/** The Data Lake Analytics job state audit records for tracking the lifecycle of a job. */
	export interface JobStateAuditRecordFormProperties {

		/** The details of the audit log. */
		details: FormControl<string | null | undefined>,

		/** The new state the job is in. */
		newState: FormControl<string | null | undefined>,

		/** The user who requests the change. */
		requestedByUser: FormControl<string | null | undefined>,

		/** The time stamp that the state change took place. */
		timeStamp: FormControl<Date | null | undefined>,
	}
	export function CreateJobStateAuditRecordFormGroup() {
		return new FormGroup<JobStateAuditRecordFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			newState: new FormControl<string | null | undefined>(undefined),
			requestedByUser: new FormControl<string | null | undefined>(undefined),
			timeStamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The Data Lake Analytics job error details. */
	export interface JobInnerError {

		/** The component that failed. */
		component?: string | null;

		/** The error message description. */
		description?: string | null;

		/** The details of the error message. */
		details?: string | null;

		/** The diagnostic error code. */
		diagnosticCode?: number | null;

		/** The specific identifier for the type of error encountered in the job. */
		errorId?: string | null;

		/** The link to MSDN or Azure help for this type of error, if any. */
		helpLink?: string | null;

		/** The Data Lake Analytics job error details. */
		innerError?: JobInnerError;

		/** The internal diagnostic stack trace if the user requesting the job error details has sufficient permissions it will be retrieved, otherwise it will be empty. */
		internalDiagnostics?: string | null;

		/** The user friendly error message for the failure. */
		message?: string | null;

		/** The recommended resolution for the failure, if any. */
		resolution?: string | null;

		/** The severity level of the failure. */
		severity?: DiagnosticsSeverity | null;

		/** The ultimate source of the failure (usually either SYSTEM or USER). */
		source?: string | null;
	}

	/** The Data Lake Analytics job error details. */
	export interface JobInnerErrorFormProperties {

		/** The component that failed. */
		component: FormControl<string | null | undefined>,

		/** The error message description. */
		description: FormControl<string | null | undefined>,

		/** The details of the error message. */
		details: FormControl<string | null | undefined>,

		/** The diagnostic error code. */
		diagnosticCode: FormControl<number | null | undefined>,

		/** The specific identifier for the type of error encountered in the job. */
		errorId: FormControl<string | null | undefined>,

		/** The link to MSDN or Azure help for this type of error, if any. */
		helpLink: FormControl<string | null | undefined>,

		/** The internal diagnostic stack trace if the user requesting the job error details has sufficient permissions it will be retrieved, otherwise it will be empty. */
		internalDiagnostics: FormControl<string | null | undefined>,

		/** The user friendly error message for the failure. */
		message: FormControl<string | null | undefined>,

		/** The recommended resolution for the failure, if any. */
		resolution: FormControl<string | null | undefined>,

		/** The severity level of the failure. */
		severity: FormControl<DiagnosticsSeverity | null | undefined>,

		/** The ultimate source of the failure (usually either SYSTEM or USER). */
		source: FormControl<string | null | undefined>,
	}
	export function CreateJobInnerErrorFormGroup() {
		return new FormGroup<JobInnerErrorFormProperties>({
			component: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			diagnosticCode: new FormControl<number | null | undefined>(undefined),
			errorId: new FormControl<string | null | undefined>(undefined),
			helpLink: new FormControl<string | null | undefined>(undefined),
			internalDiagnostics: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			resolution: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<DiagnosticsSeverity | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Job Pipeline Information, showing the relationship of jobs and recurrences of those jobs in a pipeline. */
	export interface JobPipelineInformation {

		/** The number of job execution hours that resulted in canceled jobs. */
		auHoursCanceled?: number | null;

		/** The number of job execution hours that resulted in failed jobs. */
		auHoursFailed?: number | null;

		/** The number of job execution hours that resulted in successful jobs. */
		auHoursSucceeded?: number | null;

		/** The last time a job in this pipeline was submitted. */
		lastSubmitTime?: Date | null;

		/** The number of jobs in this pipeline that have been canceled. */
		numJobsCanceled?: number | null;

		/** The number of jobs in this pipeline that have failed. */
		numJobsFailed?: number | null;

		/** The number of jobs in this pipeline that have succeeded. */
		numJobsSucceeded?: number | null;

		/** The job relationship pipeline identifier (a GUID). */
		pipelineId?: string | null;

		/**
		 * The friendly name of the job relationship pipeline, which does not need to be unique.
		 * Max length: 260
		 */
		pipelineName?: string | null;

		/** The pipeline uri, unique, links to the originating service for this pipeline. */
		pipelineUri?: string | null;

		/** The list of recurrence identifiers representing each run of this pipeline. */
		recurrences?: Array<string>;

		/** The list of recurrence identifiers representing each run of this pipeline. */
		runs?: Array<JobPipelineRunInformation>;
	}

	/** Job Pipeline Information, showing the relationship of jobs and recurrences of those jobs in a pipeline. */
	export interface JobPipelineInformationFormProperties {

		/** The number of job execution hours that resulted in canceled jobs. */
		auHoursCanceled: FormControl<number | null | undefined>,

		/** The number of job execution hours that resulted in failed jobs. */
		auHoursFailed: FormControl<number | null | undefined>,

		/** The number of job execution hours that resulted in successful jobs. */
		auHoursSucceeded: FormControl<number | null | undefined>,

		/** The last time a job in this pipeline was submitted. */
		lastSubmitTime: FormControl<Date | null | undefined>,

		/** The number of jobs in this pipeline that have been canceled. */
		numJobsCanceled: FormControl<number | null | undefined>,

		/** The number of jobs in this pipeline that have failed. */
		numJobsFailed: FormControl<number | null | undefined>,

		/** The number of jobs in this pipeline that have succeeded. */
		numJobsSucceeded: FormControl<number | null | undefined>,

		/** The job relationship pipeline identifier (a GUID). */
		pipelineId: FormControl<string | null | undefined>,

		/**
		 * The friendly name of the job relationship pipeline, which does not need to be unique.
		 * Max length: 260
		 */
		pipelineName: FormControl<string | null | undefined>,

		/** The pipeline uri, unique, links to the originating service for this pipeline. */
		pipelineUri: FormControl<string | null | undefined>,
	}
	export function CreateJobPipelineInformationFormGroup() {
		return new FormGroup<JobPipelineInformationFormProperties>({
			auHoursCanceled: new FormControl<number | null | undefined>(undefined),
			auHoursFailed: new FormControl<number | null | undefined>(undefined),
			auHoursSucceeded: new FormControl<number | null | undefined>(undefined),
			lastSubmitTime: new FormControl<Date | null | undefined>(undefined),
			numJobsCanceled: new FormControl<number | null | undefined>(undefined),
			numJobsFailed: new FormControl<number | null | undefined>(undefined),
			numJobsSucceeded: new FormControl<number | null | undefined>(undefined),
			pipelineId: new FormControl<string | null | undefined>(undefined),
			pipelineName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(260)]),
			pipelineUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Run info for a specific job pipeline. */
	export interface JobPipelineRunInformation {

		/** The time this instance was last submitted. */
		lastSubmitTime?: Date | null;

		/** The run identifier of an instance of pipeline executions (a GUID). */
		runId?: string | null;
	}

	/** Run info for a specific job pipeline. */
	export interface JobPipelineRunInformationFormProperties {

		/** The time this instance was last submitted. */
		lastSubmitTime: FormControl<Date | null | undefined>,

		/** The run identifier of an instance of pipeline executions (a GUID). */
		runId: FormControl<string | null | undefined>,
	}
	export function CreateJobPipelineRunInformationFormGroup() {
		return new FormGroup<JobPipelineRunInformationFormProperties>({
			lastSubmitTime: new FormControl<Date | null | undefined>(undefined),
			runId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of job pipeline information items. */
	export interface JobPipelineInformationListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The list of job pipeline information items. */
		value?: Array<JobPipelineInformation>;
	}

	/** List of job pipeline information items. */
	export interface JobPipelineInformationListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobPipelineInformationListResultFormGroup() {
		return new FormGroup<JobPipelineInformationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The common Data Lake Analytics job properties. */
	export interface JobProperties {

		/** The runtime version of the Data Lake Analytics engine to use for the specific type of job being run. */
		runtimeVersion?: string | null;

		/**
		 * The script to run. Please note that the maximum script size is 3 MB.
		 * Required
		 */
		script: string;

		/**
		 * The job type of the current job (Hive, USql, or Scope (for internal use only)).
		 * Required
		 */
		type: string;
	}

	/** The common Data Lake Analytics job properties. */
	export interface JobPropertiesFormProperties {

		/** The runtime version of the Data Lake Analytics engine to use for the specific type of job being run. */
		runtimeVersion: FormControl<string | null | undefined>,

		/**
		 * The script to run. Please note that the maximum script size is 3 MB.
		 * Required
		 */
		script: FormControl<string | null | undefined>,

		/**
		 * The job type of the current job (Hive, USql, or Scope (for internal use only)).
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateJobPropertiesFormGroup() {
		return new FormGroup<JobPropertiesFormProperties>({
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Recurrence job information for a specific recurrence. */
	export interface JobRecurrenceInformation {

		/** The number of job execution hours that resulted in canceled jobs. */
		auHoursCanceled?: number | null;

		/** The number of job execution hours that resulted in failed jobs. */
		auHoursFailed?: number | null;

		/** The number of job execution hours that resulted in successful jobs. */
		auHoursSucceeded?: number | null;

		/** The last time a job in this recurrence was submitted. */
		lastSubmitTime?: Date | null;

		/** The number of jobs in this recurrence that have been canceled. */
		numJobsCanceled?: number | null;

		/** The number of jobs in this recurrence that have failed. */
		numJobsFailed?: number | null;

		/** The number of jobs in this recurrence that have succeeded. */
		numJobsSucceeded?: number | null;

		/** The recurrence identifier (a GUID), unique per activity/script, regardless of iterations. This is something to link different occurrences of the same job together. */
		recurrenceId?: string | null;

		/** The recurrence name, user friendly name for the correlation between jobs. */
		recurrenceName?: string | null;
	}

	/** Recurrence job information for a specific recurrence. */
	export interface JobRecurrenceInformationFormProperties {

		/** The number of job execution hours that resulted in canceled jobs. */
		auHoursCanceled: FormControl<number | null | undefined>,

		/** The number of job execution hours that resulted in failed jobs. */
		auHoursFailed: FormControl<number | null | undefined>,

		/** The number of job execution hours that resulted in successful jobs. */
		auHoursSucceeded: FormControl<number | null | undefined>,

		/** The last time a job in this recurrence was submitted. */
		lastSubmitTime: FormControl<Date | null | undefined>,

		/** The number of jobs in this recurrence that have been canceled. */
		numJobsCanceled: FormControl<number | null | undefined>,

		/** The number of jobs in this recurrence that have failed. */
		numJobsFailed: FormControl<number | null | undefined>,

		/** The number of jobs in this recurrence that have succeeded. */
		numJobsSucceeded: FormControl<number | null | undefined>,

		/** The recurrence identifier (a GUID), unique per activity/script, regardless of iterations. This is something to link different occurrences of the same job together. */
		recurrenceId: FormControl<string | null | undefined>,

		/** The recurrence name, user friendly name for the correlation between jobs. */
		recurrenceName: FormControl<string | null | undefined>,
	}
	export function CreateJobRecurrenceInformationFormGroup() {
		return new FormGroup<JobRecurrenceInformationFormProperties>({
			auHoursCanceled: new FormControl<number | null | undefined>(undefined),
			auHoursFailed: new FormControl<number | null | undefined>(undefined),
			auHoursSucceeded: new FormControl<number | null | undefined>(undefined),
			lastSubmitTime: new FormControl<Date | null | undefined>(undefined),
			numJobsCanceled: new FormControl<number | null | undefined>(undefined),
			numJobsFailed: new FormControl<number | null | undefined>(undefined),
			numJobsSucceeded: new FormControl<number | null | undefined>(undefined),
			recurrenceId: new FormControl<string | null | undefined>(undefined),
			recurrenceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of job recurrence information items. */
	export interface JobRecurrenceInformationListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The list of job recurrence information items. */
		value?: Array<JobRecurrenceInformation>;
	}

	/** List of job recurrence information items. */
	export interface JobRecurrenceInformationListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobRecurrenceInformationListResultFormGroup() {
		return new FormGroup<JobRecurrenceInformationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Job relationship information properties including pipeline information, correlation information, etc. */
	export interface JobRelationshipProperties {

		/** The job relationship pipeline identifier (a GUID). */
		pipelineId?: string | null;

		/**
		 * The friendly name of the job relationship pipeline, which does not need to be unique.
		 * Max length: 260
		 */
		pipelineName?: string | null;

		/** The pipeline uri, unique, links to the originating service for this pipeline. */
		pipelineUri?: string | null;

		/**
		 * The recurrence identifier (a GUID), unique per activity/script, regardless of iterations. This is something to link different occurrences of the same job together.
		 * Required
		 */
		recurrenceId: string;

		/**
		 * The recurrence name, user friendly name for the correlation between jobs.
		 * Max length: 260
		 */
		recurrenceName?: string | null;

		/** The run identifier (a GUID), unique identifier of the iteration of this pipeline. */
		runId?: string | null;
	}

	/** Job relationship information properties including pipeline information, correlation information, etc. */
	export interface JobRelationshipPropertiesFormProperties {

		/** The job relationship pipeline identifier (a GUID). */
		pipelineId: FormControl<string | null | undefined>,

		/**
		 * The friendly name of the job relationship pipeline, which does not need to be unique.
		 * Max length: 260
		 */
		pipelineName: FormControl<string | null | undefined>,

		/** The pipeline uri, unique, links to the originating service for this pipeline. */
		pipelineUri: FormControl<string | null | undefined>,

		/**
		 * The recurrence identifier (a GUID), unique per activity/script, regardless of iterations. This is something to link different occurrences of the same job together.
		 * Required
		 */
		recurrenceId: FormControl<string | null | undefined>,

		/**
		 * The recurrence name, user friendly name for the correlation between jobs.
		 * Max length: 260
		 */
		recurrenceName: FormControl<string | null | undefined>,

		/** The run identifier (a GUID), unique identifier of the iteration of this pipeline. */
		runId: FormControl<string | null | undefined>,
	}
	export function CreateJobRelationshipPropertiesFormGroup() {
		return new FormGroup<JobRelationshipPropertiesFormProperties>({
			pipelineId: new FormControl<string | null | undefined>(undefined),
			pipelineName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(260)]),
			pipelineUri: new FormControl<string | null | undefined>(undefined),
			recurrenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recurrenceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(260)]),
			runId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Data Lake Analytics job resources. */
	export interface JobResource {

		/** The name of the resource. */
		name?: string | null;

		/** The path to the resource. */
		resourcePath?: string | null;

		/** The job resource type. */
		type?: JobResourceType | null;
	}

	/** The Data Lake Analytics job resources. */
	export interface JobResourceFormProperties {

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The path to the resource. */
		resourcePath: FormControl<string | null | undefined>,

		/** The job resource type. */
		type: FormControl<JobResourceType | null | undefined>,
	}
	export function CreateJobResourceFormGroup() {
		return new FormGroup<JobResourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			resourcePath: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<JobResourceType | null | undefined>(undefined),
		});

	}

	export enum JobResourceType { VertexResource = 'VertexResource', JobManagerResource = 'JobManagerResource', StatisticsResource = 'StatisticsResource', VertexResourceInUserFolder = 'VertexResourceInUserFolder', JobManagerResourceInUserFolder = 'JobManagerResourceInUserFolder', StatisticsResourceInUserFolder = 'StatisticsResourceInUserFolder' }


	/** The Data Lake Analytics job execution statistics. */
	export interface JobStatistics {

		/** The job finalizing start time. */
		finalizingTimeUtc?: Date | null;

		/** The last update time for the statistics. */
		lastUpdateTimeUtc?: Date | null;

		/** The list of stages for the job. */
		stages?: Array<JobStatisticsVertexStage>;
	}

	/** The Data Lake Analytics job execution statistics. */
	export interface JobStatisticsFormProperties {

		/** The job finalizing start time. */
		finalizingTimeUtc: FormControl<Date | null | undefined>,

		/** The last update time for the statistics. */
		lastUpdateTimeUtc: FormControl<Date | null | undefined>,
	}
	export function CreateJobStatisticsFormGroup() {
		return new FormGroup<JobStatisticsFormProperties>({
			finalizingTimeUtc: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTimeUtc: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The Data Lake Analytics job statistics vertex stage information. */
	export interface JobStatisticsVertexStage {

		/** The statistics information for resource usage. */
		allocatedContainerCpuCoreCount?: ResourceUsageStatistics;

		/** The statistics information for resource usage. */
		allocatedContainerMemSize?: ResourceUsageStatistics;

		/** The amount of data read, in bytes. */
		dataRead?: number | null;

		/** The amount of data read across multiple pods, in bytes. */
		dataReadCrossPod?: number | null;

		/** The amount of data read in one pod, in bytes. */
		dataReadIntraPod?: number | null;

		/** The amount of data remaining to be read, in bytes. */
		dataToRead?: number | null;

		/** The amount of data written, in bytes. */
		dataWritten?: number | null;

		/** The number of duplicates that were discarded. */
		duplicateDiscardCount?: number | null;

		/** The estimated vertex CPU core count. */
		estimatedVertexCpuCoreCount?: number | null;

		/** The estimated vertex memory size, in bytes. */
		estimatedVertexMemSize?: number | null;

		/** The estimated vertex peak CPU core count. */
		estimatedVertexPeakCpuCoreCount?: number | null;

		/** The number of failures that occurred in this stage. */
		failedCount?: number | null;

		/** The detailed information for a vertex. */
		maxDataReadVertex?: JobStatisticsVertex;

		/** The detailed information for a vertex. */
		maxExecutionTimeVertex?: JobStatisticsVertex;

		/** The detailed information for a vertex. */
		maxPeakMemUsageVertex?: JobStatisticsVertex;

		/** The maximum amount of data read in a single vertex, in bytes. */
		maxVertexDataRead?: number | null;

		/** The minimum amount of data read in a single vertex, in bytes. */
		minVertexDataRead?: number | null;

		/** The number of read failures in this stage. */
		readFailureCount?: number | null;

		/** The number of vertices that were revoked during this stage. */
		revocationCount?: number | null;

		/** The number of currently running vertices in this stage. */
		runningCount?: number | null;

		/** The number of currently scheduled vertices in this stage. */
		scheduledCount?: number | null;

		/** The name of this stage in job execution. */
		stageName?: string | null;

		/** The number of vertices that succeeded in this stage. */
		succeededCount?: number | null;

		/** The amount of temporary data written, in bytes. */
		tempDataWritten?: number | null;

		/** The total vertex count for this stage. */
		totalCount?: number | null;

		/** The sum of the total execution time of all the vertices in the stage. */
		totalExecutionTime?: string | null;

		/** The amount of time that failed vertices took up in this stage. */
		totalFailedTime?: string | null;

		/** The sum of the peak memory usage of all the vertices in the stage, in bytes. */
		totalPeakMemUsage?: number | null;

		/** The current progress of this stage, as a percentage. */
		totalProgress?: number | null;

		/** The amount of time all successful vertices took in this stage. */
		totalSucceededTime?: string | null;

		/** The statistics information for resource usage. */
		usedVertexCpuCoreCount?: ResourceUsageStatistics;

		/** The statistics information for resource usage. */
		usedVertexPeakMemSize?: ResourceUsageStatistics;
	}

	/** The Data Lake Analytics job statistics vertex stage information. */
	export interface JobStatisticsVertexStageFormProperties {

		/** The amount of data read, in bytes. */
		dataRead: FormControl<number | null | undefined>,

		/** The amount of data read across multiple pods, in bytes. */
		dataReadCrossPod: FormControl<number | null | undefined>,

		/** The amount of data read in one pod, in bytes. */
		dataReadIntraPod: FormControl<number | null | undefined>,

		/** The amount of data remaining to be read, in bytes. */
		dataToRead: FormControl<number | null | undefined>,

		/** The amount of data written, in bytes. */
		dataWritten: FormControl<number | null | undefined>,

		/** The number of duplicates that were discarded. */
		duplicateDiscardCount: FormControl<number | null | undefined>,

		/** The estimated vertex CPU core count. */
		estimatedVertexCpuCoreCount: FormControl<number | null | undefined>,

		/** The estimated vertex memory size, in bytes. */
		estimatedVertexMemSize: FormControl<number | null | undefined>,

		/** The estimated vertex peak CPU core count. */
		estimatedVertexPeakCpuCoreCount: FormControl<number | null | undefined>,

		/** The number of failures that occurred in this stage. */
		failedCount: FormControl<number | null | undefined>,

		/** The maximum amount of data read in a single vertex, in bytes. */
		maxVertexDataRead: FormControl<number | null | undefined>,

		/** The minimum amount of data read in a single vertex, in bytes. */
		minVertexDataRead: FormControl<number | null | undefined>,

		/** The number of read failures in this stage. */
		readFailureCount: FormControl<number | null | undefined>,

		/** The number of vertices that were revoked during this stage. */
		revocationCount: FormControl<number | null | undefined>,

		/** The number of currently running vertices in this stage. */
		runningCount: FormControl<number | null | undefined>,

		/** The number of currently scheduled vertices in this stage. */
		scheduledCount: FormControl<number | null | undefined>,

		/** The name of this stage in job execution. */
		stageName: FormControl<string | null | undefined>,

		/** The number of vertices that succeeded in this stage. */
		succeededCount: FormControl<number | null | undefined>,

		/** The amount of temporary data written, in bytes. */
		tempDataWritten: FormControl<number | null | undefined>,

		/** The total vertex count for this stage. */
		totalCount: FormControl<number | null | undefined>,

		/** The sum of the total execution time of all the vertices in the stage. */
		totalExecutionTime: FormControl<string | null | undefined>,

		/** The amount of time that failed vertices took up in this stage. */
		totalFailedTime: FormControl<string | null | undefined>,

		/** The sum of the peak memory usage of all the vertices in the stage, in bytes. */
		totalPeakMemUsage: FormControl<number | null | undefined>,

		/** The current progress of this stage, as a percentage. */
		totalProgress: FormControl<number | null | undefined>,

		/** The amount of time all successful vertices took in this stage. */
		totalSucceededTime: FormControl<string | null | undefined>,
	}
	export function CreateJobStatisticsVertexStageFormGroup() {
		return new FormGroup<JobStatisticsVertexStageFormProperties>({
			dataRead: new FormControl<number | null | undefined>(undefined),
			dataReadCrossPod: new FormControl<number | null | undefined>(undefined),
			dataReadIntraPod: new FormControl<number | null | undefined>(undefined),
			dataToRead: new FormControl<number | null | undefined>(undefined),
			dataWritten: new FormControl<number | null | undefined>(undefined),
			duplicateDiscardCount: new FormControl<number | null | undefined>(undefined),
			estimatedVertexCpuCoreCount: new FormControl<number | null | undefined>(undefined),
			estimatedVertexMemSize: new FormControl<number | null | undefined>(undefined),
			estimatedVertexPeakCpuCoreCount: new FormControl<number | null | undefined>(undefined),
			failedCount: new FormControl<number | null | undefined>(undefined),
			maxVertexDataRead: new FormControl<number | null | undefined>(undefined),
			minVertexDataRead: new FormControl<number | null | undefined>(undefined),
			readFailureCount: new FormControl<number | null | undefined>(undefined),
			revocationCount: new FormControl<number | null | undefined>(undefined),
			runningCount: new FormControl<number | null | undefined>(undefined),
			scheduledCount: new FormControl<number | null | undefined>(undefined),
			stageName: new FormControl<string | null | undefined>(undefined),
			succeededCount: new FormControl<number | null | undefined>(undefined),
			tempDataWritten: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
			totalExecutionTime: new FormControl<string | null | undefined>(undefined),
			totalFailedTime: new FormControl<string | null | undefined>(undefined),
			totalPeakMemUsage: new FormControl<number | null | undefined>(undefined),
			totalProgress: new FormControl<number | null | undefined>(undefined),
			totalSucceededTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The detailed information for a vertex. */
	export interface JobStatisticsVertex {

		/** The amount of data read of the vertex, in bytes. */
		dataRead?: number | null;

		/** The amount of execution time of the vertex. */
		executionTime?: string | null;

		/** The name of the vertex. */
		name?: string | null;

		/** The amount of peak memory usage of the vertex, in bytes. */
		peakMemUsage?: number | null;

		/** The id of the vertex. */
		vertexId?: string | null;
	}

	/** The detailed information for a vertex. */
	export interface JobStatisticsVertexFormProperties {

		/** The amount of data read of the vertex, in bytes. */
		dataRead: FormControl<number | null | undefined>,

		/** The amount of execution time of the vertex. */
		executionTime: FormControl<string | null | undefined>,

		/** The name of the vertex. */
		name: FormControl<string | null | undefined>,

		/** The amount of peak memory usage of the vertex, in bytes. */
		peakMemUsage: FormControl<number | null | undefined>,

		/** The id of the vertex. */
		vertexId: FormControl<string | null | undefined>,
	}
	export function CreateJobStatisticsVertexFormGroup() {
		return new FormGroup<JobStatisticsVertexFormProperties>({
			dataRead: new FormControl<number | null | undefined>(undefined),
			executionTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			peakMemUsage: new FormControl<number | null | undefined>(undefined),
			vertexId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The statistics information for resource usage. */
	export interface ResourceUsageStatistics {

		/** The average value. */
		average?: number | null;

		/** The maximum value. */
		maximum?: number | null;

		/** The minimum value. */
		minimum?: number | null;
	}

	/** The statistics information for resource usage. */
	export interface ResourceUsageStatisticsFormProperties {

		/** The average value. */
		average: FormControl<number | null | undefined>,

		/** The maximum value. */
		maximum: FormControl<number | null | undefined>,

		/** The minimum value. */
		minimum: FormControl<number | null | undefined>,
	}
	export function CreateResourceUsageStatisticsFormGroup() {
		return new FormGroup<ResourceUsageStatisticsFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Scope job properties used when submitting and retrieving Scope jobs. (Only for use internally with Scope job type.) */
	export interface ScopeJobProperties extends JobProperties {

		/** The list of email addresses, separated by semi-colons, to notify when the job reaches a terminal state. */
		notifier?: string | null;

		/** The list of resources that are required by the job. */
		resources?: Array<ScopeJobResource>;

		/** The ID used to identify the job manager coordinating job execution. This value should not be set by the user and will be ignored if it is. */
		rootProcessNodeId?: string | null;

		/** The total time this job spent compiling. This value should not be set by the user and will be ignored if it is. */
		totalCompilationTime?: string | null;

		/** The total time this job spent paused. This value should not be set by the user and will be ignored if it is. */
		totalPausedTime?: string | null;

		/** The total time this job spent queued. This value should not be set by the user and will be ignored if it is. */
		totalQueuedTime?: string | null;

		/** The total time this job spent executing. This value should not be set by the user and will be ignored if it is. */
		totalRunningTime?: string | null;

		/** The algebra file path after the job has completed. */
		userAlgebraPath?: string | null;

		/** The ID used to identify the yarn application executing the job. This value should not be set by the user and will be ignored if it is. */
		yarnApplicationId?: string | null;
	}

	/** Scope job properties used when submitting and retrieving Scope jobs. (Only for use internally with Scope job type.) */
	export interface ScopeJobPropertiesFormProperties extends JobPropertiesFormProperties {

		/** The list of email addresses, separated by semi-colons, to notify when the job reaches a terminal state. */
		notifier: FormControl<string | null | undefined>,

		/** The ID used to identify the job manager coordinating job execution. This value should not be set by the user and will be ignored if it is. */
		rootProcessNodeId: FormControl<string | null | undefined>,

		/** The total time this job spent compiling. This value should not be set by the user and will be ignored if it is. */
		totalCompilationTime: FormControl<string | null | undefined>,

		/** The total time this job spent paused. This value should not be set by the user and will be ignored if it is. */
		totalPausedTime: FormControl<string | null | undefined>,

		/** The total time this job spent queued. This value should not be set by the user and will be ignored if it is. */
		totalQueuedTime: FormControl<string | null | undefined>,

		/** The total time this job spent executing. This value should not be set by the user and will be ignored if it is. */
		totalRunningTime: FormControl<string | null | undefined>,

		/** The algebra file path after the job has completed. */
		userAlgebraPath: FormControl<string | null | undefined>,

		/** The ID used to identify the yarn application executing the job. This value should not be set by the user and will be ignored if it is. */
		yarnApplicationId: FormControl<string | null | undefined>,
	}
	export function CreateScopeJobPropertiesFormGroup() {
		return new FormGroup<ScopeJobPropertiesFormProperties>({
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notifier: new FormControl<string | null | undefined>(undefined),
			rootProcessNodeId: new FormControl<string | null | undefined>(undefined),
			totalCompilationTime: new FormControl<string | null | undefined>(undefined),
			totalPausedTime: new FormControl<string | null | undefined>(undefined),
			totalQueuedTime: new FormControl<string | null | undefined>(undefined),
			totalRunningTime: new FormControl<string | null | undefined>(undefined),
			userAlgebraPath: new FormControl<string | null | undefined>(undefined),
			yarnApplicationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** U-SQL job properties used when retrieving U-SQL jobs. */
	export interface USqlJobProperties extends JobProperties {

		/** The algebra file path after the job has completed. */
		algebraFilePath?: string | null;

		/** The specific compilation mode for the job used during execution. If this is not specified during submission, the server will determine the optimal compilation mode. */
		compileMode?: CreateUSqlJobPropertiesCompileMode | null;

		/** A Data Lake Analytics job data path item. */
		debugData?: JobDataPath;

		/** The diagnostics for the job. */
		diagnostics?: Array<Diagnostics>;

		/** The list of resources that are required by the job. */
		resources?: Array<JobResource>;

		/** The ID used to identify the job manager coordinating job execution. This value should not be set by the user and will be ignored if it is. */
		rootProcessNodeId?: string | null;

		/** The Data Lake Analytics job execution statistics. */
		statistics?: JobStatistics;

		/** The total time this job spent compiling. This value should not be set by the user and will be ignored if it is. */
		totalCompilationTime?: string | null;

		/** The total time this job spent paused. This value should not be set by the user and will be ignored if it is. */
		totalPausedTime?: string | null;

		/** The total time this job spent queued. This value should not be set by the user and will be ignored if it is. */
		totalQueuedTime?: string | null;

		/** The total time this job spent executing. This value should not be set by the user and will be ignored if it is. */
		totalRunningTime?: string | null;

		/** The ID used to identify the yarn application executing the job. This value should not be set by the user and will be ignored if it is. */
		yarnApplicationId?: string | null;

		/** The timestamp (in ticks) for the yarn application executing the job. This value should not be set by the user and will be ignored if it is. */
		yarnApplicationTimeStamp?: number | null;
	}

	/** U-SQL job properties used when retrieving U-SQL jobs. */
	export interface USqlJobPropertiesFormProperties extends JobPropertiesFormProperties {

		/** The algebra file path after the job has completed. */
		algebraFilePath: FormControl<string | null | undefined>,

		/** The specific compilation mode for the job used during execution. If this is not specified during submission, the server will determine the optimal compilation mode. */
		compileMode: FormControl<CreateUSqlJobPropertiesCompileMode | null | undefined>,

		/** The ID used to identify the job manager coordinating job execution. This value should not be set by the user and will be ignored if it is. */
		rootProcessNodeId: FormControl<string | null | undefined>,

		/** The total time this job spent compiling. This value should not be set by the user and will be ignored if it is. */
		totalCompilationTime: FormControl<string | null | undefined>,

		/** The total time this job spent paused. This value should not be set by the user and will be ignored if it is. */
		totalPausedTime: FormControl<string | null | undefined>,

		/** The total time this job spent queued. This value should not be set by the user and will be ignored if it is. */
		totalQueuedTime: FormControl<string | null | undefined>,

		/** The total time this job spent executing. This value should not be set by the user and will be ignored if it is. */
		totalRunningTime: FormControl<string | null | undefined>,

		/** The ID used to identify the yarn application executing the job. This value should not be set by the user and will be ignored if it is. */
		yarnApplicationId: FormControl<string | null | undefined>,

		/** The timestamp (in ticks) for the yarn application executing the job. This value should not be set by the user and will be ignored if it is. */
		yarnApplicationTimeStamp: FormControl<number | null | undefined>,
	}
	export function CreateUSqlJobPropertiesFormGroup() {
		return new FormGroup<USqlJobPropertiesFormProperties>({
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			algebraFilePath: new FormControl<string | null | undefined>(undefined),
			compileMode: new FormControl<CreateUSqlJobPropertiesCompileMode | null | undefined>(undefined),
			rootProcessNodeId: new FormControl<string | null | undefined>(undefined),
			totalCompilationTime: new FormControl<string | null | undefined>(undefined),
			totalPausedTime: new FormControl<string | null | undefined>(undefined),
			totalQueuedTime: new FormControl<string | null | undefined>(undefined),
			totalRunningTime: new FormControl<string | null | undefined>(undefined),
			yarnApplicationId: new FormControl<string | null | undefined>(undefined),
			yarnApplicationTimeStamp: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The parameters that can be used to update existing Data Lake Analytics job information properties. (Only for use internally with Scope job type.) */
	export interface UpdateJobParameters {

		/** The degree of parallelism used for this job. */
		degreeOfParallelism?: number | null;

		/** the degree of parallelism in percentage used for this job. */
		degreeOfParallelismPercent?: number | null;

		/** The priority value for the current job. Lower numbers have a higher priority. By default, a job has a priority of 1000. This must be greater than 0. */
		priority?: number | null;

		/** The key-value pairs used to add additional metadata to the job information. */
		tags?: {[id: string]: string };
	}

	/** The parameters that can be used to update existing Data Lake Analytics job information properties. (Only for use internally with Scope job type.) */
	export interface UpdateJobParametersFormProperties {

		/** The degree of parallelism used for this job. */
		degreeOfParallelism: FormControl<number | null | undefined>,

		/** the degree of parallelism in percentage used for this job. */
		degreeOfParallelismPercent: FormControl<number | null | undefined>,

		/** The priority value for the current job. Lower numbers have a higher priority. By default, a job has a priority of 1000. This must be greater than 0. */
		priority: FormControl<number | null | undefined>,

		/** The key-value pairs used to add additional metadata to the job information. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateJobParametersFormGroup() {
		return new FormGroup<UpdateJobParametersFormProperties>({
			degreeOfParallelism: new FormControl<number | null | undefined>(undefined),
			degreeOfParallelismPercent: new FormControl<number | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Builds (compiles) the specified job in the specified Data Lake Analytics account for job correctness and validation.
		 * Post buildJob
		 * @param {string} api_version Client Api Version.
		 * @param {BuildJobParameters} requestBody The parameters to build a job.
		 * @return {JobInformation} Successfully built the job script.
		 */
		Job_Build(api_version: string, requestBody: BuildJobParameters): Observable<JobInformation> {
			return this.http.post<JobInformation>(this.baseUri + 'buildJob?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the jobs, if any, associated with the specified Data Lake Analytics account. The response includes a link to the next page of results, if any.
		 * Get jobs
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {JobInfoListResult} Successfully retrieved the list of jobs.
		 */
		Job_List(filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<JobInfoListResult> {
			return this.http.get<JobInfoListResult>(this.baseUri + 'jobs?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the job information for the specified job ID.
		 * Get jobs/{jobIdentity}
		 * @param {string} jobIdentity JobInfo ID.
		 * @param {string} api_version Client Api Version.
		 * @return {JobInformation} Successfully retrieved details of the specified job.
		 */
		Job_Get(jobIdentity: string, api_version: string): Observable<JobInformation> {
			return this.http.get<JobInformation>(this.baseUri + 'jobs/' + (jobIdentity == null ? '' : encodeURIComponent(jobIdentity)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Submits a job to the specified Data Lake Analytics account.
		 * Put jobs/{jobIdentity}
		 * @param {string} jobIdentity Job identifier. Uniquely identifies the job across all jobs submitted to the service.
		 * @param {string} api_version Client Api Version.
		 * @param {CreateJobParameters} requestBody The parameters to submit a job.
		 * @return {JobInformation} Successfully submitted the job.
		 */
		Job_Create(jobIdentity: string, api_version: string, requestBody: CreateJobParameters): Observable<JobInformation> {
			return this.http.put<JobInformation>(this.baseUri + 'jobs/' + (jobIdentity == null ? '' : encodeURIComponent(jobIdentity)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the job information for the specified job ID. (Only for use internally with Scope job type.)
		 * Patch jobs/{jobIdentity}
		 * @param {string} jobIdentity Job identifier. Uniquely identifies the job across all jobs submitted to the service.
		 * @param {string} api_version Client Api Version.
		 * @param {UpdateJobParameters} requestBody The parameters to update a job.
		 * @return {JobInformation} Successfully updated the details of the specified job.
		 */
		Job_Update(jobIdentity: string, api_version: string, requestBody: UpdateJobParameters): Observable<JobInformation> {
			return this.http.patch<JobInformation>(this.baseUri + 'jobs/' + (jobIdentity == null ? '' : encodeURIComponent(jobIdentity)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels the running job specified by the job ID.
		 * Post jobs/{jobIdentity}/CancelJob
		 * @param {string} jobIdentity Job identifier. Uniquely identifies the job across all jobs submitted to the service.
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successfully cancelled the job.
		 */
		Job_Cancel(jobIdentity: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobs/' + (jobIdentity == null ? '' : encodeURIComponent(jobIdentity)) + '/CancelJob&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the job debug data information specified by the job ID.
		 * Get jobs/{jobIdentity}/GetDebugDataPath
		 * @param {string} jobIdentity Job identifier. Uniquely identifies the job across all jobs submitted to the service.
		 * @param {string} api_version Client Api Version.
		 * @return {JobDataPath} Successfully retrieved debug data paths of the specified job.
		 */
		Job_GetDebugDataPath(jobIdentity: string, api_version: string): Observable<JobDataPath> {
			return this.http.get<JobDataPath>(this.baseUri + 'jobs/' + (jobIdentity == null ? '' : encodeURIComponent(jobIdentity)) + '/GetDebugDataPath&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets statistics of the specified job.
		 * Get jobs/{jobIdentity}/GetStatistics
		 * @param {string} jobIdentity Job Information ID.
		 * @param {string} api_version Client Api Version.
		 * @return {JobStatistics} Successfully retrieved job statistics of the specified job.
		 */
		Job_GetStatistics(jobIdentity: string, api_version: string): Observable<JobStatistics> {
			return this.http.get<JobStatistics>(this.baseUri + 'jobs/' + (jobIdentity == null ? '' : encodeURIComponent(jobIdentity)) + '/GetStatistics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Pauses the specified job and places it back in the job queue, behind other jobs of equal or higher importance, based on priority. (Only for use internally with Scope job type.)
		 * Post jobs/{jobIdentity}/YieldJob
		 * @param {string} jobIdentity Job identifier. Uniquely identifies the job across all jobs submitted to the service.
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successfully yielded the specified job.
		 */
		Job_Yield(jobIdentity: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobs/' + (jobIdentity == null ? '' : encodeURIComponent(jobIdentity)) + '/YieldJob&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all pipelines.
		 * Get pipelines
		 * @param {Date} startDateTime The start date for when to get the list of pipelines. The startDateTime and endDateTime can be no more than 30 days apart.
		 * @param {Date} endDateTime The end date for when to get the list of pipelines. The startDateTime and endDateTime can be no more than 30 days apart.
		 * @param {string} api_version Client Api Version.
		 * @return {JobPipelineInformationListResult} Successfully retrieved the list of pipelines.
		 */
		Pipeline_List(startDateTime: Date | null | undefined, endDateTime: Date | null | undefined, api_version: string): Observable<JobPipelineInformationListResult> {
			return this.http.get<JobPipelineInformationListResult>(this.baseUri + 'pipelines?startDateTime=' + startDateTime?.toISOString() + '&endDateTime=' + endDateTime?.toISOString() + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the Pipeline information for the specified pipeline ID.
		 * Get pipelines/{pipelineIdentity}
		 * @param {string} pipelineIdentity Pipeline ID.
		 * @param {Date} startDateTime The start date for when to get the pipeline and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart.
		 * @param {Date} endDateTime The end date for when to get the pipeline and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart.
		 * @param {string} api_version Client Api Version.
		 * @return {JobPipelineInformation} Successfully retrieved details of the specified pipeline.
		 */
		Pipeline_Get(pipelineIdentity: string, startDateTime: Date | null | undefined, endDateTime: Date | null | undefined, api_version: string): Observable<JobPipelineInformation> {
			return this.http.get<JobPipelineInformation>(this.baseUri + 'pipelines/' + (pipelineIdentity == null ? '' : encodeURIComponent(pipelineIdentity)) + '&startDateTime=' + startDateTime?.toISOString() + '&endDateTime=' + endDateTime?.toISOString() + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all recurrences.
		 * Get recurrences
		 * @param {Date} startDateTime The start date for when to get the list of recurrences. The startDateTime and endDateTime can be no more than 30 days apart.
		 * @param {Date} endDateTime The end date for when to get the list of recurrences. The startDateTime and endDateTime can be no more than 30 days apart.
		 * @param {string} api_version Client Api Version.
		 * @return {JobRecurrenceInformationListResult} Successfully retrieved the list of recurrences.
		 */
		Recurrence_List(startDateTime: Date | null | undefined, endDateTime: Date | null | undefined, api_version: string): Observable<JobRecurrenceInformationListResult> {
			return this.http.get<JobRecurrenceInformationListResult>(this.baseUri + 'recurrences?startDateTime=' + startDateTime?.toISOString() + '&endDateTime=' + endDateTime?.toISOString() + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the recurrence information for the specified recurrence ID.
		 * Get recurrences/{recurrenceIdentity}
		 * @param {string} recurrenceIdentity Recurrence ID.
		 * @param {Date} startDateTime The start date for when to get the recurrence and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart.
		 * @param {Date} endDateTime The end date for when to get recurrence and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart.
		 * @param {string} api_version Client Api Version.
		 * @return {JobRecurrenceInformation} Successfully retrieved details of the specified pipeline.
		 */
		Recurrence_Get(recurrenceIdentity: string, startDateTime: Date | null | undefined, endDateTime: Date | null | undefined, api_version: string): Observable<JobRecurrenceInformation> {
			return this.http.get<JobRecurrenceInformation>(this.baseUri + 'recurrences/' + (recurrenceIdentity == null ? '' : encodeURIComponent(recurrenceIdentity)) + '&startDateTime=' + startDateTime?.toISOString() + '&endDateTime=' + endDateTime?.toISOString() + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

