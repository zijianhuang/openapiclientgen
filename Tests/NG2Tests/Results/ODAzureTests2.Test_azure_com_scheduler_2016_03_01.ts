import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BasicAuthentication extends HttpAuthentication {

		/** Gets or sets the password, return value will always be empty. */
		password?: string | null;

		/** Gets or sets the username. */
		username?: string | null;
	}
	export interface BasicAuthenticationFormProperties extends HttpAuthenticationFormProperties {

		/** Gets or sets the password, return value will always be empty. */
		password: FormControl<string | null | undefined>,

		/** Gets or sets the username. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateBasicAuthenticationFormGroup() {
		return new FormGroup<BasicAuthenticationFormProperties>({
			type: new FormControl<HttpAuthenticationType | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientCertAuthentication extends HttpAuthentication {

		/** Gets or sets the certificate expiration date. */
		certificateExpirationDate?: Date | null;

		/** Gets or sets the certificate subject name. */
		certificateSubjectName?: string | null;

		/** Gets or sets the certificate thumbprint. */
		certificateThumbprint?: string | null;

		/** Gets or sets the certificate password, return value will always be empty. */
		password?: string | null;

		/** Gets or sets the pfx certificate. Accepts certification in base64 encoding, return value will always be empty. */
		pfx?: string | null;
	}
	export interface ClientCertAuthenticationFormProperties extends HttpAuthenticationFormProperties {

		/** Gets or sets the certificate expiration date. */
		certificateExpirationDate: FormControl<Date | null | undefined>,

		/** Gets or sets the certificate subject name. */
		certificateSubjectName: FormControl<string | null | undefined>,

		/** Gets or sets the certificate thumbprint. */
		certificateThumbprint: FormControl<string | null | undefined>,

		/** Gets or sets the certificate password, return value will always be empty. */
		password: FormControl<string | null | undefined>,

		/** Gets or sets the pfx certificate. Accepts certification in base64 encoding, return value will always be empty. */
		pfx: FormControl<string | null | undefined>,
	}
	export function CreateClientCertAuthenticationFormGroup() {
		return new FormGroup<ClientCertAuthenticationFormProperties>({
			type: new FormControl<HttpAuthenticationType | null | undefined>(undefined, [Validators.required]),
			certificateExpirationDate: new FormControl<Date | null | undefined>(undefined),
			certificateSubjectName: new FormControl<string | null | undefined>(undefined),
			certificateThumbprint: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			pfx: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HttpAuthentication {

		/**
		 * Gets or sets the HTTP authentication type.
		 * Required
		 */
		type: HttpAuthenticationType;
	}
	export interface HttpAuthenticationFormProperties {

		/**
		 * Gets or sets the HTTP authentication type.
		 * Required
		 */
		type: FormControl<HttpAuthenticationType | null | undefined>,
	}
	export function CreateHttpAuthenticationFormGroup() {
		return new FormGroup<HttpAuthenticationFormProperties>({
			type: new FormControl<HttpAuthenticationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HttpAuthenticationType { NotSpecified = 0, ClientCertificate = 1, ActiveDirectoryOAuth = 2, Basic = 3 }

	export interface HttpRequest {
		authentication?: HttpAuthentication;

		/** Gets or sets the request body. */
		body?: string | null;

		/** Gets or sets the headers. */
		headers?: {[id: string]: string };

		/** Gets or sets the method of the request. */
		method?: string | null;

		/** Gets or sets the URI of the request. */
		uri?: string | null;
	}
	export interface HttpRequestFormProperties {

		/** Gets or sets the request body. */
		body: FormControl<string | null | undefined>,

		/** Gets or sets the headers. */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the method of the request. */
		method: FormControl<string | null | undefined>,

		/** Gets or sets the URI of the request. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateHttpRequestFormGroup() {
		return new FormGroup<HttpRequestFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobAction {
		errorAction?: JobErrorAction;
		queueMessage?: StorageQueueMessage;
		request?: HttpRequest;
		retryPolicy?: RetryPolicy;
		serviceBusQueueMessage?: ServiceBusQueueMessage;
		serviceBusTopicMessage?: ServiceBusTopicMessage;

		/** Gets or sets the job action type. */
		type?: JobActionType | null;
	}
	export interface JobActionFormProperties {

		/** Gets or sets the job action type. */
		type: FormControl<JobActionType | null | undefined>,
	}
	export function CreateJobActionFormGroup() {
		return new FormGroup<JobActionFormProperties>({
			type: new FormControl<JobActionType | null | undefined>(undefined),
		});

	}

	export enum JobActionType { Http = 0, Https = 1, StorageQueue = 2, ServiceBusQueue = 3, ServiceBusTopic = 4 }

	export interface JobCollectionDefinition {

		/** Gets the job collection resource identifier. */
		id?: string | null;

		/** Gets or sets the storage account location. */
		location?: string | null;

		/** Gets or sets the job collection resource name. */
		name?: string | null;
		properties?: JobCollectionProperties;

		/** Gets or sets the tags. */
		tags?: {[id: string]: string };

		/** Gets the job collection resource type. */
		type?: string | null;
	}
	export interface JobCollectionDefinitionFormProperties {

		/** Gets the job collection resource identifier. */
		id: FormControl<string | null | undefined>,

		/** Gets or sets the storage account location. */
		location: FormControl<string | null | undefined>,

		/** Gets or sets the job collection resource name. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets the job collection resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateJobCollectionDefinitionFormGroup() {
		return new FormGroup<JobCollectionDefinitionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobCollectionListResult {

		/** Gets or sets the URL to get the next set of job collections. */
		nextLink?: string | null;

		/** Gets the job collections. */
		value?: Array<JobCollectionDefinition>;
	}
	export interface JobCollectionListResultFormProperties {

		/** Gets or sets the URL to get the next set of job collections. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobCollectionListResultFormGroup() {
		return new FormGroup<JobCollectionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobCollectionProperties {
		quota?: JobCollectionQuota;
		sku?: Sku;

		/** Gets or sets the state. */
		state?: JobCollectionPropertiesState | null;
	}
	export interface JobCollectionPropertiesFormProperties {

		/** Gets or sets the state. */
		state: FormControl<JobCollectionPropertiesState | null | undefined>,
	}
	export function CreateJobCollectionPropertiesFormGroup() {
		return new FormGroup<JobCollectionPropertiesFormProperties>({
			state: new FormControl<JobCollectionPropertiesState | null | undefined>(undefined),
		});

	}

	export enum JobCollectionPropertiesState { Enabled = 0, Disabled = 1, Suspended = 2, Deleted = 3 }

	export interface JobCollectionQuota {

		/** Gets or set the maximum job count. */
		maxJobCount?: number | null;

		/** Gets or sets the maximum job occurrence. */
		maxJobOccurrence?: number | null;
		maxRecurrence?: JobMaxRecurrence;
	}
	export interface JobCollectionQuotaFormProperties {

		/** Gets or set the maximum job count. */
		maxJobCount: FormControl<number | null | undefined>,

		/** Gets or sets the maximum job occurrence. */
		maxJobOccurrence: FormControl<number | null | undefined>,
	}
	export function CreateJobCollectionQuotaFormGroup() {
		return new FormGroup<JobCollectionQuotaFormProperties>({
			maxJobCount: new FormControl<number | null | undefined>(undefined),
			maxJobOccurrence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface JobDefinition {

		/** Gets the job resource identifier. */
		id?: string | null;

		/** Gets the job resource name. */
		name?: string | null;
		properties?: JobProperties;

		/** Gets the job resource type. */
		type?: string | null;
	}
	export interface JobDefinitionFormProperties {

		/** Gets the job resource identifier. */
		id: FormControl<string | null | undefined>,

		/** Gets the job resource name. */
		name: FormControl<string | null | undefined>,

		/** Gets the job resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateJobDefinitionFormGroup() {
		return new FormGroup<JobDefinitionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobErrorAction {
		queueMessage?: StorageQueueMessage;
		request?: HttpRequest;
		retryPolicy?: RetryPolicy;
		serviceBusQueueMessage?: ServiceBusQueueMessage;
		serviceBusTopicMessage?: ServiceBusTopicMessage;

		/** Gets or sets the job error action type. */
		type?: JobActionType | null;
	}
	export interface JobErrorActionFormProperties {

		/** Gets or sets the job error action type. */
		type: FormControl<JobActionType | null | undefined>,
	}
	export function CreateJobErrorActionFormGroup() {
		return new FormGroup<JobErrorActionFormProperties>({
			type: new FormControl<JobActionType | null | undefined>(undefined),
		});

	}


	/** Gets the job execution status. */
	export enum JobExecutionStatus { Completed = 0, Failed = 1, Postponed = 2 }

	export interface JobHistoryDefinition {

		/** Gets the job history identifier. */
		id?: string | null;

		/** Gets the job history name. */
		name?: string | null;
		properties?: JobHistoryDefinitionProperties;

		/** Gets the job history resource type. */
		type?: string | null;
	}
	export interface JobHistoryDefinitionFormProperties {

		/** Gets the job history identifier. */
		id: FormControl<string | null | undefined>,

		/** Gets the job history name. */
		name: FormControl<string | null | undefined>,

		/** Gets the job history resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateJobHistoryDefinitionFormGroup() {
		return new FormGroup<JobHistoryDefinitionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobHistoryDefinitionProperties {

		/** Gets the job history action name. */
		actionName?: JobHistoryDefinitionPropertiesActionName | null;

		/** Gets the end time for this job. */
		endTime?: Date | null;

		/** Gets the expected execution time for this job. */
		expectedExecutionTime?: Date | null;

		/** Gets the message for the job history. */
		message?: string | null;

		/** Gets the repeat count for the job. */
		repeatCount?: number | null;

		/** Gets the retry count for job. */
		retryCount?: number | null;

		/** Gets the start time for this job. */
		startTime?: Date | null;

		/** Gets the job execution status. */
		status?: JobExecutionStatus | null;
	}
	export interface JobHistoryDefinitionPropertiesFormProperties {

		/** Gets the job history action name. */
		actionName: FormControl<JobHistoryDefinitionPropertiesActionName | null | undefined>,

		/** Gets the end time for this job. */
		endTime: FormControl<Date | null | undefined>,

		/** Gets the expected execution time for this job. */
		expectedExecutionTime: FormControl<Date | null | undefined>,

		/** Gets the message for the job history. */
		message: FormControl<string | null | undefined>,

		/** Gets the repeat count for the job. */
		repeatCount: FormControl<number | null | undefined>,

		/** Gets the retry count for job. */
		retryCount: FormControl<number | null | undefined>,

		/** Gets the start time for this job. */
		startTime: FormControl<Date | null | undefined>,

		/** Gets the job execution status. */
		status: FormControl<JobExecutionStatus | null | undefined>,
	}
	export function CreateJobHistoryDefinitionPropertiesFormGroup() {
		return new FormGroup<JobHistoryDefinitionPropertiesFormProperties>({
			actionName: new FormControl<JobHistoryDefinitionPropertiesActionName | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			expectedExecutionTime: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			repeatCount: new FormControl<number | null | undefined>(undefined),
			retryCount: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<JobExecutionStatus | null | undefined>(undefined),
		});

	}

	export enum JobHistoryDefinitionPropertiesActionName { MainAction = 0, ErrorAction = 1 }

	export interface JobHistoryFilter {

		/** Gets the job execution status. */
		status?: JobExecutionStatus | null;
	}
	export interface JobHistoryFilterFormProperties {

		/** Gets the job execution status. */
		status: FormControl<JobExecutionStatus | null | undefined>,
	}
	export function CreateJobHistoryFilterFormGroup() {
		return new FormGroup<JobHistoryFilterFormProperties>({
			status: new FormControl<JobExecutionStatus | null | undefined>(undefined),
		});

	}

	export interface JobHistoryListResult {

		/** Gets or sets the URL to get the next set of job histories. */
		nextLink?: string | null;

		/** Gets or sets the job histories under job. */
		value?: Array<JobHistoryDefinition>;
	}
	export interface JobHistoryListResultFormProperties {

		/** Gets or sets the URL to get the next set of job histories. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobHistoryListResultFormGroup() {
		return new FormGroup<JobHistoryListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobListResult {

		/** Gets or sets the URL to get the next set of jobs. */
		nextLink?: string | null;

		/** Gets or sets all jobs under job collection. */
		value?: Array<JobDefinition>;
	}
	export interface JobListResultFormProperties {

		/** Gets or sets the URL to get the next set of jobs. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobListResultFormGroup() {
		return new FormGroup<JobListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobMaxRecurrence {

		/** Gets or sets the frequency of recurrence (second, minute, hour, day, week, month). */
		frequency?: JobMaxRecurrenceFrequency | null;

		/** Gets or sets the interval between retries. */
		interval?: number | null;
	}
	export interface JobMaxRecurrenceFormProperties {

		/** Gets or sets the frequency of recurrence (second, minute, hour, day, week, month). */
		frequency: FormControl<JobMaxRecurrenceFrequency | null | undefined>,

		/** Gets or sets the interval between retries. */
		interval: FormControl<number | null | undefined>,
	}
	export function CreateJobMaxRecurrenceFormGroup() {
		return new FormGroup<JobMaxRecurrenceFormProperties>({
			frequency: new FormControl<JobMaxRecurrenceFrequency | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum JobMaxRecurrenceFrequency { Minute = 0, Hour = 1, Day = 2, Week = 3, Month = 4 }

	export interface JobProperties {
		action?: JobAction;
		recurrence?: JobRecurrence;

		/** Gets or sets the job start time. */
		startTime?: Date | null;

		/** Gets or set the job state. */
		state?: JobPropertiesState | null;
		status?: JobStatus;
	}
	export interface JobPropertiesFormProperties {

		/** Gets or sets the job start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Gets or set the job state. */
		state: FormControl<JobPropertiesState | null | undefined>,
	}
	export function CreateJobPropertiesFormGroup() {
		return new FormGroup<JobPropertiesFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<JobPropertiesState | null | undefined>(undefined),
		});

	}

	export enum JobPropertiesState { Enabled = 0, Disabled = 1, Faulted = 2, Completed = 3 }

	export interface JobRecurrence {

		/** Gets or sets the maximum number of times that the job should run. */
		count?: number | null;

		/** Gets or sets the time at which the job will complete. */
		endTime?: Date | null;

		/** Gets or sets the frequency of recurrence (second, minute, hour, day, week, month). */
		frequency?: JobMaxRecurrenceFrequency | null;

		/** Gets or sets the interval between retries. */
		interval?: number | null;
		schedule?: JobRecurrenceSchedule;
	}
	export interface JobRecurrenceFormProperties {

		/** Gets or sets the maximum number of times that the job should run. */
		count: FormControl<number | null | undefined>,

		/** Gets or sets the time at which the job will complete. */
		endTime: FormControl<Date | null | undefined>,

		/** Gets or sets the frequency of recurrence (second, minute, hour, day, week, month). */
		frequency: FormControl<JobMaxRecurrenceFrequency | null | undefined>,

		/** Gets or sets the interval between retries. */
		interval: FormControl<number | null | undefined>,
	}
	export function CreateJobRecurrenceFormGroup() {
		return new FormGroup<JobRecurrenceFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			frequency: new FormControl<JobMaxRecurrenceFrequency | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface JobRecurrenceSchedule {

		/** Gets or sets the hours of the day that the job should execute at. */
		hours?: Array<number>;

		/** Gets or sets the minutes of the hour that the job should execute at. */
		minutes?: Array<number>;

		/** Gets or sets the days of the month that the job should execute on. Must be between 1 and 31. */
		monthDays?: Array<number>;

		/** Gets or sets the occurrences of days within a month. */
		monthlyOccurrences?: Array<JobRecurrenceScheduleMonthlyOccurrence>;

		/** Gets or sets the days of the week that the job should execute on. */
		weekDays?: Array<string>;
	}
	export interface JobRecurrenceScheduleFormProperties {
	}
	export function CreateJobRecurrenceScheduleFormGroup() {
		return new FormGroup<JobRecurrenceScheduleFormProperties>({
		});

	}

	export interface JobRecurrenceScheduleMonthlyOccurrence {

		/** Gets or sets the occurrence. Must be between -5 and 5. */
		Occurrence?: number | null;

		/** Gets or sets the day. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday. */
		day?: JobRecurrenceScheduleMonthlyOccurrenceDay | null;
	}
	export interface JobRecurrenceScheduleMonthlyOccurrenceFormProperties {

		/** Gets or sets the occurrence. Must be between -5 and 5. */
		Occurrence: FormControl<number | null | undefined>,

		/** Gets or sets the day. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday. */
		day: FormControl<JobRecurrenceScheduleMonthlyOccurrenceDay | null | undefined>,
	}
	export function CreateJobRecurrenceScheduleMonthlyOccurrenceFormGroup() {
		return new FormGroup<JobRecurrenceScheduleMonthlyOccurrenceFormProperties>({
			Occurrence: new FormControl<number | null | undefined>(undefined),
			day: new FormControl<JobRecurrenceScheduleMonthlyOccurrenceDay | null | undefined>(undefined),
		});

	}

	export enum JobRecurrenceScheduleMonthlyOccurrenceDay { Monday = 0, Tuesday = 1, Wednesday = 2, Thursday = 3, Friday = 4, Saturday = 5, Sunday = 6 }


	/** Gets or set the job state. */
	export enum JobState { Enabled = 0, Disabled = 1, Faulted = 2, Completed = 3 }

	export interface JobStateFilter {

		/** Gets or set the job state. */
		state?: JobPropertiesState | null;
	}
	export interface JobStateFilterFormProperties {

		/** Gets or set the job state. */
		state: FormControl<JobPropertiesState | null | undefined>,
	}
	export function CreateJobStateFilterFormGroup() {
		return new FormGroup<JobStateFilterFormProperties>({
			state: new FormControl<JobPropertiesState | null | undefined>(undefined),
		});

	}

	export interface JobStatus {

		/** Gets the number of times this job has executed. */
		executionCount?: number | null;

		/** Gets the number of times this job has failed. */
		failureCount?: number | null;

		/** Gets the number of faulted occurrences (occurrences that were retried and failed as many times as the retry policy states). */
		faultedCount?: number | null;

		/** Gets the time the last occurrence executed in ISO-8601 format.  Could be empty if job has not run yet. */
		lastExecutionTime?: Date | null;

		/** Gets the time of the next occurrence in ISO-8601 format. Could be empty if the job is completed. */
		nextExecutionTime?: Date | null;
	}
	export interface JobStatusFormProperties {

		/** Gets the number of times this job has executed. */
		executionCount: FormControl<number | null | undefined>,

		/** Gets the number of times this job has failed. */
		failureCount: FormControl<number | null | undefined>,

		/** Gets the number of faulted occurrences (occurrences that were retried and failed as many times as the retry policy states). */
		faultedCount: FormControl<number | null | undefined>,

		/** Gets the time the last occurrence executed in ISO-8601 format.  Could be empty if job has not run yet. */
		lastExecutionTime: FormControl<Date | null | undefined>,

		/** Gets the time of the next occurrence in ISO-8601 format. Could be empty if the job is completed. */
		nextExecutionTime: FormControl<Date | null | undefined>,
	}
	export function CreateJobStatusFormGroup() {
		return new FormGroup<JobStatusFormProperties>({
			executionCount: new FormControl<number | null | undefined>(undefined),
			failureCount: new FormControl<number | null | undefined>(undefined),
			faultedCount: new FormControl<number | null | undefined>(undefined),
			lastExecutionTime: new FormControl<Date | null | undefined>(undefined),
			nextExecutionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OAuthAuthentication extends HttpAuthentication {

		/** Gets or sets the audience. */
		audience?: string | null;

		/** Gets or sets the client identifier. */
		clientId?: string | null;

		/** Gets or sets the secret, return value will always be empty. */
		secret?: string | null;

		/** Gets or sets the tenant. */
		tenant?: string | null;
	}
	export interface OAuthAuthenticationFormProperties extends HttpAuthenticationFormProperties {

		/** Gets or sets the audience. */
		audience: FormControl<string | null | undefined>,

		/** Gets or sets the client identifier. */
		clientId: FormControl<string | null | undefined>,

		/** Gets or sets the secret, return value will always be empty. */
		secret: FormControl<string | null | undefined>,

		/** Gets or sets the tenant. */
		tenant: FormControl<string | null | undefined>,
	}
	export function CreateOAuthAuthenticationFormGroup() {
		return new FormGroup<OAuthAuthenticationFormProperties>({
			type: new FormControl<HttpAuthenticationType | null | undefined>(undefined, [Validators.required]),
			audience: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
			tenant: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Gets or sets the frequency of recurrence (minute, hour, day, week, month). */
	export enum RecurrenceFrequency { Minute = 0, Hour = 1, Day = 2, Week = 3, Month = 4 }

	export interface RetryPolicy {

		/** Gets or sets the number of times a retry should be attempted. */
		retryCount?: number | null;

		/** Gets or sets the retry interval between retries, specify duration in ISO 8601 format. */
		retryInterval?: string | null;

		/** Gets or sets the retry strategy to be used. */
		retryType?: RetryPolicyRetryType | null;
	}
	export interface RetryPolicyFormProperties {

		/** Gets or sets the number of times a retry should be attempted. */
		retryCount: FormControl<number | null | undefined>,

		/** Gets or sets the retry interval between retries, specify duration in ISO 8601 format. */
		retryInterval: FormControl<string | null | undefined>,

		/** Gets or sets the retry strategy to be used. */
		retryType: FormControl<RetryPolicyRetryType | null | undefined>,
	}
	export function CreateRetryPolicyFormGroup() {
		return new FormGroup<RetryPolicyFormProperties>({
			retryCount: new FormControl<number | null | undefined>(undefined),
			retryInterval: new FormControl<string | null | undefined>(undefined),
			retryType: new FormControl<RetryPolicyRetryType | null | undefined>(undefined),
		});

	}

	export enum RetryPolicyRetryType { None = 0, Fixed = 1 }

	export interface ServiceBusAuthentication {

		/** Gets or sets the SAS key. */
		sasKey?: string | null;

		/** Gets or sets the SAS key name. */
		sasKeyName?: string | null;

		/** Gets or sets the authentication type. */
		type?: ServiceBusAuthenticationType | null;
	}
	export interface ServiceBusAuthenticationFormProperties {

		/** Gets or sets the SAS key. */
		sasKey: FormControl<string | null | undefined>,

		/** Gets or sets the SAS key name. */
		sasKeyName: FormControl<string | null | undefined>,

		/** Gets or sets the authentication type. */
		type: FormControl<ServiceBusAuthenticationType | null | undefined>,
	}
	export function CreateServiceBusAuthenticationFormGroup() {
		return new FormGroup<ServiceBusAuthenticationFormProperties>({
			sasKey: new FormControl<string | null | undefined>(undefined),
			sasKeyName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ServiceBusAuthenticationType | null | undefined>(undefined),
		});

	}

	export enum ServiceBusAuthenticationType { NotSpecified = 0, SharedAccessKey = 1 }

	export interface ServiceBusBrokeredMessageProperties {

		/** Gets or sets the content type. */
		contentType?: string | null;

		/** Gets or sets the correlation ID. */
		correlationId?: string | null;

		/** Gets or sets the force persistence. */
		forcePersistence?: boolean | null;

		/** Gets or sets the label. */
		label?: string | null;

		/** Gets or sets the message ID. */
		messageId?: string | null;

		/** Gets or sets the partition key. */
		partitionKey?: string | null;

		/** Gets or sets the reply to. */
		replyTo?: string | null;

		/** Gets or sets the reply to session ID. */
		replyToSessionId?: string | null;

		/** Gets or sets the scheduled enqueue time UTC. */
		scheduledEnqueueTimeUtc?: Date | null;

		/** Gets or sets the session ID. */
		sessionId?: string | null;

		/** Gets or sets the time to live. */
		timeToLive?: string | null;

		/** Gets or sets the to. */
		to?: string | null;

		/** Gets or sets the via partition key. */
		viaPartitionKey?: string | null;
	}
	export interface ServiceBusBrokeredMessagePropertiesFormProperties {

		/** Gets or sets the content type. */
		contentType: FormControl<string | null | undefined>,

		/** Gets or sets the correlation ID. */
		correlationId: FormControl<string | null | undefined>,

		/** Gets or sets the force persistence. */
		forcePersistence: FormControl<boolean | null | undefined>,

		/** Gets or sets the label. */
		label: FormControl<string | null | undefined>,

		/** Gets or sets the message ID. */
		messageId: FormControl<string | null | undefined>,

		/** Gets or sets the partition key. */
		partitionKey: FormControl<string | null | undefined>,

		/** Gets or sets the reply to. */
		replyTo: FormControl<string | null | undefined>,

		/** Gets or sets the reply to session ID. */
		replyToSessionId: FormControl<string | null | undefined>,

		/** Gets or sets the scheduled enqueue time UTC. */
		scheduledEnqueueTimeUtc: FormControl<Date | null | undefined>,

		/** Gets or sets the session ID. */
		sessionId: FormControl<string | null | undefined>,

		/** Gets or sets the time to live. */
		timeToLive: FormControl<string | null | undefined>,

		/** Gets or sets the to. */
		to: FormControl<string | null | undefined>,

		/** Gets or sets the via partition key. */
		viaPartitionKey: FormControl<string | null | undefined>,
	}
	export function CreateServiceBusBrokeredMessagePropertiesFormGroup() {
		return new FormGroup<ServiceBusBrokeredMessagePropertiesFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			forcePersistence: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			messageId: new FormControl<string | null | undefined>(undefined),
			partitionKey: new FormControl<string | null | undefined>(undefined),
			replyTo: new FormControl<string | null | undefined>(undefined),
			replyToSessionId: new FormControl<string | null | undefined>(undefined),
			scheduledEnqueueTimeUtc: new FormControl<Date | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			timeToLive: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			viaPartitionKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceBusMessage {
		authentication?: ServiceBusAuthentication;
		brokeredMessageProperties?: ServiceBusBrokeredMessageProperties;

		/** Gets or sets the custom message properties. */
		customMessageProperties?: {[id: string]: string };

		/** Gets or sets the message. */
		message?: string | null;

		/** Gets or sets the namespace. */
		namespace?: string | null;

		/** Gets or sets the transport type. */
		transportType?: ServiceBusMessageTransportType | null;
	}
	export interface ServiceBusMessageFormProperties {

		/** Gets or sets the custom message properties. */
		customMessageProperties: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the message. */
		message: FormControl<string | null | undefined>,

		/** Gets or sets the namespace. */
		namespace: FormControl<string | null | undefined>,

		/** Gets or sets the transport type. */
		transportType: FormControl<ServiceBusMessageTransportType | null | undefined>,
	}
	export function CreateServiceBusMessageFormGroup() {
		return new FormGroup<ServiceBusMessageFormProperties>({
			customMessageProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			transportType: new FormControl<ServiceBusMessageTransportType | null | undefined>(undefined),
		});

	}

	export enum ServiceBusMessageTransportType { NotSpecified = 0, NetMessaging = 1, AMQP = 2 }

	export interface ServiceBusQueueMessage extends ServiceBusMessage {

		/** Gets or sets the queue name. */
		queueName?: string | null;
	}
	export interface ServiceBusQueueMessageFormProperties extends ServiceBusMessageFormProperties {

		/** Gets or sets the queue name. */
		queueName: FormControl<string | null | undefined>,
	}
	export function CreateServiceBusQueueMessageFormGroup() {
		return new FormGroup<ServiceBusQueueMessageFormProperties>({
			customMessageProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			transportType: new FormControl<ServiceBusMessageTransportType | null | undefined>(undefined),
			queueName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceBusTopicMessage extends ServiceBusMessage {

		/** Gets or sets the topic path. */
		topicPath?: string | null;
	}
	export interface ServiceBusTopicMessageFormProperties extends ServiceBusMessageFormProperties {

		/** Gets or sets the topic path. */
		topicPath: FormControl<string | null | undefined>,
	}
	export function CreateServiceBusTopicMessageFormGroup() {
		return new FormGroup<ServiceBusTopicMessageFormProperties>({
			customMessageProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			transportType: new FormControl<ServiceBusMessageTransportType | null | undefined>(undefined),
			topicPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sku {

		/** Gets or set the SKU. */
		name?: SkuName | null;
	}
	export interface SkuFormProperties {

		/** Gets or set the SKU. */
		name: FormControl<SkuName | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<SkuName | null | undefined>(undefined),
		});

	}

	export enum SkuName { Standard = 0, Free = 1, P10Premium = 2, P20Premium = 3 }

	export interface StorageQueueMessage {

		/** Gets or sets the message. */
		message?: string | null;

		/** Gets or sets the queue name. */
		queueName?: string | null;

		/** Gets or sets the SAS key. */
		sasToken?: string | null;

		/** Gets or sets the storage account name. */
		storageAccount?: string | null;
	}
	export interface StorageQueueMessageFormProperties {

		/** Gets or sets the message. */
		message: FormControl<string | null | undefined>,

		/** Gets or sets the queue name. */
		queueName: FormControl<string | null | undefined>,

		/** Gets or sets the SAS key. */
		sasToken: FormControl<string | null | undefined>,

		/** Gets or sets the storage account name. */
		storageAccount: FormControl<string | null | undefined>,
	}
	export function CreateStorageQueueMessageFormGroup() {
		return new FormGroup<StorageQueueMessageFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			queueName: new FormControl<string | null | undefined>(undefined),
			sasToken: new FormControl<string | null | undefined>(undefined),
			storageAccount: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all job collections under specified subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Scheduler/jobCollections
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} api_version The API version.
		 * @return {JobCollectionListResult} The job collections have been successfully returned.
		 */
		JobCollections_ListBySubscription(subscriptionId: string, api_version: string): Observable<JobCollectionListResult> {
			return this.http.get<JobCollectionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Scheduler/jobCollections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all job collections under specified resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {JobCollectionListResult} The job collections have been successfully returned.
		 */
		JobCollections_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<JobCollectionListResult> {
			return this.http.get<JobCollectionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Scheduler/jobCollections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a job collection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} jobCollectionName The job collection name.
		 * @param {string} api_version The API version.
		 * @return {JobCollectionDefinition} The job collection has been successfully returned.
		 */
		JobCollections_Get(subscriptionId: string, resourceGroupName: string, jobCollectionName: string, api_version: string): Observable<JobCollectionDefinition> {
			return this.http.get<JobCollectionDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Scheduler/jobCollections/' + (jobCollectionName == null ? '' : encodeURIComponent(jobCollectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Provisions a new job collection or updates an existing job collection.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} jobCollectionName The job collection name.
		 * @param {string} api_version The API version.
		 * @param {JobCollectionDefinition} requestBody The job collection definition.
		 * @return {JobCollectionDefinition} The job collection has been successfully updated.
		 */
		JobCollections_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, jobCollectionName: string, api_version: string, requestBody: JobCollectionDefinition): Observable<JobCollectionDefinition> {
			return this.http.put<JobCollectionDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Scheduler/jobCollections/' + (jobCollectionName == null ? '' : encodeURIComponent(jobCollectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a job collection.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} jobCollectionName The job collection name.
		 * @param {string} api_version The API version.
		 * @return {void} The job collection has been successfully deleted.
		 */
		JobCollections_Delete(subscriptionId: string, resourceGroupName: string, jobCollectionName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Scheduler/jobCollections/' + (jobCollectionName == null ? '' : encodeURIComponent(jobCollectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patches an existing job collection.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} jobCollectionName The job collection name.
		 * @param {string} api_version The API version.
		 * @param {JobCollectionDefinition} requestBody The job collection definition.
		 * @return {JobCollectionDefinition} The job collection has been successfully patched.
		 */
		JobCollections_Patch(subscriptionId: string, resourceGroupName: string, jobCollectionName: string, api_version: string, requestBody: JobCollectionDefinition): Observable<JobCollectionDefinition> {
			return this.http.patch<JobCollectionDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Scheduler/jobCollections/' + (jobCollectionName == null ? '' : encodeURIComponent(jobCollectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables all of the jobs in the job collection.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/disable
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} jobCollectionName The job collection name.
		 * @param {string} api_version The API version.
		 * @return {void} All of the jobs in the job collection have been successfully disabled.
		 */
		JobCollections_Disable(subscriptionId: string, resourceGroupName: string, jobCollectionName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Scheduler/jobCollections/' + (jobCollectionName == null ? '' : encodeURIComponent(jobCollectionName)) + '/disable&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables all of the jobs in the job collection.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/enable
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} jobCollectionName The job collection name.
		 * @param {string} api_version The API version.
		 * @return {void} All of the jobs in the job collection have been successfully enabled.
		 */
		JobCollections_Enable(subscriptionId: string, resourceGroupName: string, jobCollectionName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Scheduler/jobCollections/' + (jobCollectionName == null ? '' : encodeURIComponent(jobCollectionName)) + '/enable&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all jobs under the specified job collection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} jobCollectionName The job collection name.
		 * @param {string} api_version The API version.
		 * @param {number} top The number of jobs to request, in the of range of [1..100].
		 * @param {number} skip The (0-based) index of the job history list from which to begin requesting entries.
		 * @param {string} filter The filter to apply on the job state.
		 * @return {JobListResult} The job has been successfully returned.
		 */
		Jobs_List(subscriptionId: string, resourceGroupName: string, jobCollectionName: string, api_version: string, top: number | null | undefined, skip: number | null | undefined, filter: string | null | undefined): Observable<JobListResult> {
			return this.http.get<JobListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Scheduler/jobCollections/' + (jobCollectionName == null ? '' : encodeURIComponent(jobCollectionName)) + '/jobs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&skip=' + skip + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets a job.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} jobCollectionName The job collection name.
		 * @param {string} jobName The job name.
		 * @param {string} api_version The API version.
		 * @return {JobDefinition} The job has been successfully returned.
		 */
		Jobs_Get(subscriptionId: string, resourceGroupName: string, jobCollectionName: string, jobName: string, api_version: string): Observable<JobDefinition> {
			return this.http.get<JobDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Scheduler/jobCollections/' + (jobCollectionName == null ? '' : encodeURIComponent(jobCollectionName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Provisions a new job or updates an existing job.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} jobCollectionName The job collection name.
		 * @param {string} jobName The job name.
		 * @param {string} api_version The API version.
		 * @param {JobDefinition} requestBody The job definition.
		 * @return {JobDefinition} The job has been successfully updated.
		 */
		Jobs_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, jobCollectionName: string, jobName: string, api_version: string, requestBody: JobDefinition): Observable<JobDefinition> {
			return this.http.put<JobDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Scheduler/jobCollections/' + (jobCollectionName == null ? '' : encodeURIComponent(jobCollectionName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a job.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} jobCollectionName The job collection name.
		 * @param {string} jobName The job name.
		 * @param {string} api_version The API version.
		 * @return {void} The job has been successfully deleted.
		 */
		Jobs_Delete(subscriptionId: string, resourceGroupName: string, jobCollectionName: string, jobName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Scheduler/jobCollections/' + (jobCollectionName == null ? '' : encodeURIComponent(jobCollectionName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patches an existing job.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName}
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} jobCollectionName The job collection name.
		 * @param {string} jobName The job name.
		 * @param {string} api_version The API version.
		 * @param {JobDefinition} requestBody The job definition.
		 * @return {JobDefinition} The job has been successfully patched.
		 */
		Jobs_Patch(subscriptionId: string, resourceGroupName: string, jobCollectionName: string, jobName: string, api_version: string, requestBody: JobDefinition): Observable<JobDefinition> {
			return this.http.patch<JobDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Scheduler/jobCollections/' + (jobCollectionName == null ? '' : encodeURIComponent(jobCollectionName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists job history.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName}/history
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} jobCollectionName The job collection name.
		 * @param {string} jobName The job name.
		 * @param {string} api_version The API version.
		 * @param {number} top the number of job history to request, in the of range of [1..100].
		 * @param {number} skip The (0-based) index of the job history list from which to begin requesting entries.
		 * @param {string} filter The filter to apply on the job state.
		 * @return {JobHistoryListResult} The job histories have been successfully returned.
		 */
		Jobs_ListJobHistory(subscriptionId: string, resourceGroupName: string, jobCollectionName: string, jobName: string, api_version: string, top: number | null | undefined, skip: number | null | undefined, filter: string | null | undefined): Observable<JobHistoryListResult> {
			return this.http.get<JobHistoryListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Scheduler/jobCollections/' + (jobCollectionName == null ? '' : encodeURIComponent(jobCollectionName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/history&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&skip=' + skip + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Runs a job.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName}/run
		 * @param {string} subscriptionId The subscription id.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} jobCollectionName The job collection name.
		 * @param {string} jobName The job name.
		 * @param {string} api_version The API version.
		 * @return {void} The job has been successfully run.
		 */
		Jobs_Run(subscriptionId: string, resourceGroupName: string, jobCollectionName: string, jobName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Scheduler/jobCollections/' + (jobCollectionName == null ? '' : encodeURIComponent(jobCollectionName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/run&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

