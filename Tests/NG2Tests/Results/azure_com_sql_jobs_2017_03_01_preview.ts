import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A job. */
	export interface Job {

		/** Properties of a job. */
		properties?: JobProperties;
	}

	/** A job. */
	export interface JobFormProperties {
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
		});

	}


	/** Properties of a job. */
	export interface JobProperties {

		/** User-defined description of the job. */
		description?: string | null;

		/** Scheduling properties of a job. */
		schedule?: JobSchedule;

		/**
		 * The job version number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** Properties of a job. */
	export interface JobPropertiesFormProperties {

		/** User-defined description of the job. */
		description: FormControl<string | null | undefined>,

		/**
		 * The job version number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateJobPropertiesFormGroup() {
		return new FormGroup<JobPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Scheduling properties of a job. */
	export interface JobSchedule {

		/** Whether or not the schedule is enabled. */
		enabled?: boolean | null;

		/** Schedule end time. */
		endTime?: Date | null;

		/** Value of the schedule's recurring interval, if the schedule type is recurring. ISO8601 duration format. */
		interval?: string | null;

		/** Schedule start time. */
		startTime?: Date | null;

		/** Schedule interval type */
		type?: JobScheduleType | null;
	}

	/** Scheduling properties of a job. */
	export interface JobScheduleFormProperties {

		/** Whether or not the schedule is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** Schedule end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Value of the schedule's recurring interval, if the schedule type is recurring. ISO8601 duration format. */
		interval: FormControl<string | null | undefined>,

		/** Schedule start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Schedule interval type */
		type: FormControl<JobScheduleType | null | undefined>,
	}
	export function CreateJobScheduleFormGroup() {
		return new FormGroup<JobScheduleFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			interval: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<JobScheduleType | null | undefined>(undefined),
		});

	}

	export enum JobScheduleType { Once = 'Once', Recurring = 'Recurring' }


	/** An Azure SQL job agent. */
	export interface JobAgent {

		/** Properties of a job agent. */
		properties?: JobAgentProperties;

		/** An ARM Resource SKU. */
		sku?: JobAgentSku;
	}

	/** An Azure SQL job agent. */
	export interface JobAgentFormProperties {
	}
	export function CreateJobAgentFormGroup() {
		return new FormGroup<JobAgentFormProperties>({
		});

	}


	/** Properties of a job agent. */
	export interface JobAgentProperties {

		/**
		 * Resource ID of the database to store job metadata in.
		 * Required
		 */
		databaseId: string;

		/** The state of the job agent. */
		state?: JobAgentPropertiesState | null;
	}

	/** Properties of a job agent. */
	export interface JobAgentPropertiesFormProperties {

		/**
		 * Resource ID of the database to store job metadata in.
		 * Required
		 */
		databaseId: FormControl<string | null | undefined>,

		/** The state of the job agent. */
		state: FormControl<JobAgentPropertiesState | null | undefined>,
	}
	export function CreateJobAgentPropertiesFormGroup() {
		return new FormGroup<JobAgentPropertiesFormProperties>({
			databaseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<JobAgentPropertiesState | null | undefined>(undefined),
		});

	}

	export enum JobAgentPropertiesState { Creating = 'Creating', Ready = 'Ready', Updating = 'Updating', Deleting = 'Deleting', Disabled = 'Disabled' }

	export interface JobAgentSku {

		/**
		 * Capacity of the particular SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity?: number | null;

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family?: string | null;

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: string;

		/** Size of the particular SKU */
		size?: string | null;

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier?: string | null;
	}
	export interface JobAgentSkuFormProperties {

		/**
		 * Capacity of the particular SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity: FormControl<number | null | undefined>,

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family: FormControl<string | null | undefined>,

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Size of the particular SKU */
		size: FormControl<string | null | undefined>,

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateJobAgentSkuFormGroup() {
		return new FormGroup<JobAgentSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of Azure SQL job agents. */
	export interface JobAgentListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<JobAgent>;
	}

	/** A list of Azure SQL job agents. */
	export interface JobAgentListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobAgentListResultFormGroup() {
		return new FormGroup<JobAgentListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An update to an Azure SQL job agent. */
	export interface JobAgentUpdate {

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** An update to an Azure SQL job agent. */
	export interface JobAgentUpdateFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateJobAgentUpdateFormGroup() {
		return new FormGroup<JobAgentUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A stored credential that can be used by a job to connect to target databases. */
	export interface JobCredential {

		/** Properties of a job credential. */
		properties?: JobCredentialProperties;
	}

	/** A stored credential that can be used by a job to connect to target databases. */
	export interface JobCredentialFormProperties {
	}
	export function CreateJobCredentialFormGroup() {
		return new FormGroup<JobCredentialFormProperties>({
		});

	}


	/** Properties of a job credential. */
	export interface JobCredentialProperties {

		/**
		 * The credential password.
		 * Required
		 */
		password: string;

		/**
		 * The credential user name.
		 * Required
		 */
		username: string;
	}

	/** Properties of a job credential. */
	export interface JobCredentialPropertiesFormProperties {

		/**
		 * The credential password.
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * The credential user name.
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateJobCredentialPropertiesFormGroup() {
		return new FormGroup<JobCredentialPropertiesFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of job credentials. */
	export interface JobCredentialListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<JobCredential>;
	}

	/** A list of job credentials. */
	export interface JobCredentialListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobCredentialListResultFormGroup() {
		return new FormGroup<JobCredentialListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An execution of a job */
	export interface JobExecution {

		/** Properties for an Azure SQL Database Elastic job execution. */
		properties?: JobExecutionProperties;
	}

	/** An execution of a job */
	export interface JobExecutionFormProperties {
	}
	export function CreateJobExecutionFormGroup() {
		return new FormGroup<JobExecutionFormProperties>({
		});

	}


	/** Properties for an Azure SQL Database Elastic job execution. */
	export interface JobExecutionProperties {

		/** The time that the job execution was created. */
		createTime?: Date | null;

		/** Start time of the current attempt. */
		currentAttemptStartTime?: Date | null;

		/**
		 * Number of times the job execution has been attempted.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentAttempts?: number | null;

		/** The time that the job execution completed. */
		endTime?: Date | null;

		/** The unique identifier of the job execution. */
		jobExecutionId?: string | null;

		/**
		 * The job version number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		jobVersion?: number | null;

		/** The last status or error message. */
		lastMessage?: string | null;

		/** The detailed state of the job execution. */
		lifecycle?: JobExecutionPropertiesLifecycle | null;

		/** The ARM provisioning state of the job execution. */
		provisioningState?: JobExecutionPropertiesProvisioningState | null;

		/** The time that the job execution started. */
		startTime?: Date | null;

		/**
		 * The job step id.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stepId?: number | null;

		/** The job step name. */
		stepName?: string | null;

		/** The target that a job execution is executed on. */
		target?: JobExecutionTarget;
	}

	/** Properties for an Azure SQL Database Elastic job execution. */
	export interface JobExecutionPropertiesFormProperties {

		/** The time that the job execution was created. */
		createTime: FormControl<Date | null | undefined>,

		/** Start time of the current attempt. */
		currentAttemptStartTime: FormControl<Date | null | undefined>,

		/**
		 * Number of times the job execution has been attempted.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentAttempts: FormControl<number | null | undefined>,

		/** The time that the job execution completed. */
		endTime: FormControl<Date | null | undefined>,

		/** The unique identifier of the job execution. */
		jobExecutionId: FormControl<string | null | undefined>,

		/**
		 * The job version number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		jobVersion: FormControl<number | null | undefined>,

		/** The last status or error message. */
		lastMessage: FormControl<string | null | undefined>,

		/** The detailed state of the job execution. */
		lifecycle: FormControl<JobExecutionPropertiesLifecycle | null | undefined>,

		/** The ARM provisioning state of the job execution. */
		provisioningState: FormControl<JobExecutionPropertiesProvisioningState | null | undefined>,

		/** The time that the job execution started. */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The job step id.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stepId: FormControl<number | null | undefined>,

		/** The job step name. */
		stepName: FormControl<string | null | undefined>,
	}
	export function CreateJobExecutionPropertiesFormGroup() {
		return new FormGroup<JobExecutionPropertiesFormProperties>({
			createTime: new FormControl<Date | null | undefined>(undefined),
			currentAttemptStartTime: new FormControl<Date | null | undefined>(undefined),
			currentAttempts: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			jobExecutionId: new FormControl<string | null | undefined>(undefined),
			jobVersion: new FormControl<number | null | undefined>(undefined),
			lastMessage: new FormControl<string | null | undefined>(undefined),
			lifecycle: new FormControl<JobExecutionPropertiesLifecycle | null | undefined>(undefined),
			provisioningState: new FormControl<JobExecutionPropertiesProvisioningState | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			stepId: new FormControl<number | null | undefined>(undefined),
			stepName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobExecutionPropertiesLifecycle { Created = 'Created', InProgress = 'InProgress', WaitingForChildJobExecutions = 'WaitingForChildJobExecutions', WaitingForRetry = 'WaitingForRetry', Succeeded = 'Succeeded', SucceededWithSkipped = 'SucceededWithSkipped', Failed = 'Failed', TimedOut = 'TimedOut', Canceled = 'Canceled', Skipped = 'Skipped' }

	export enum JobExecutionPropertiesProvisioningState { Created = 'Created', InProgress = 'InProgress', Succeeded = 'Succeeded', Failed = 'Failed', Canceled = 'Canceled' }


	/** The target that a job execution is executed on. */
	export interface JobExecutionTarget {

		/** The database name. */
		databaseName?: string | null;

		/** The server name. */
		serverName?: string | null;

		/** The type of the target. */
		type?: JobExecutionTargetType | null;
	}

	/** The target that a job execution is executed on. */
	export interface JobExecutionTargetFormProperties {

		/** The database name. */
		databaseName: FormControl<string | null | undefined>,

		/** The server name. */
		serverName: FormControl<string | null | undefined>,

		/** The type of the target. */
		type: FormControl<JobExecutionTargetType | null | undefined>,
	}
	export function CreateJobExecutionTargetFormGroup() {
		return new FormGroup<JobExecutionTargetFormProperties>({
			databaseName: new FormControl<string | null | undefined>(undefined),
			serverName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<JobExecutionTargetType | null | undefined>(undefined),
		});

	}

	export enum JobExecutionTargetType { TargetGroup = 'TargetGroup', SqlDatabase = 'SqlDatabase', SqlElasticPool = 'SqlElasticPool', SqlShardMap = 'SqlShardMap', SqlServer = 'SqlServer' }


	/** A list of job executions. */
	export interface JobExecutionListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<JobExecution>;
	}

	/** A list of job executions. */
	export interface JobExecutionListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobExecutionListResultFormGroup() {
		return new FormGroup<JobExecutionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of jobs. */
	export interface JobListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<Job>;
	}

	/** A list of jobs. */
	export interface JobListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobListResultFormGroup() {
		return new FormGroup<JobListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A job step. */
	export interface JobStep {

		/** Properties of a job step. */
		properties?: JobStepProperties;
	}

	/** A job step. */
	export interface JobStepFormProperties {
	}
	export function CreateJobStepFormGroup() {
		return new FormGroup<JobStepFormProperties>({
		});

	}


	/** Properties of a job step. */
	export interface JobStepProperties {

		/**
		 * The action to be executed by a job step.
		 * Required
		 */
		action: JobStepAction;

		/**
		 * The resource ID of the job credential that will be used to connect to the targets.
		 * Required
		 */
		credential: string;

		/** The execution options of a job step. */
		executionOptions?: JobStepExecutionOptions;

		/** The output configuration of a job step. */
		output?: JobStepOutput;

		/**
		 * The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stepId?: number | null;

		/**
		 * The resource ID of the target group that the job step will be executed on.
		 * Required
		 */
		targetGroup: string;
	}

	/** Properties of a job step. */
	export interface JobStepPropertiesFormProperties {

		/**
		 * The resource ID of the job credential that will be used to connect to the targets.
		 * Required
		 */
		credential: FormControl<string | null | undefined>,

		/**
		 * The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stepId: FormControl<number | null | undefined>,

		/**
		 * The resource ID of the target group that the job step will be executed on.
		 * Required
		 */
		targetGroup: FormControl<string | null | undefined>,
	}
	export function CreateJobStepPropertiesFormGroup() {
		return new FormGroup<JobStepPropertiesFormProperties>({
			credential: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stepId: new FormControl<number | null | undefined>(undefined),
			targetGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The action to be executed by a job step. */
	export interface JobStepAction {

		/** The source of the action to execute. */
		source?: JobStepActionSource | null;

		/** Type of action being executed by the job step. */
		type?: JobStepActionType | null;

		/**
		 * The action value, for example the text of the T-SQL script to execute.
		 * Required
		 */
		value: string;
	}

	/** The action to be executed by a job step. */
	export interface JobStepActionFormProperties {

		/** The source of the action to execute. */
		source: FormControl<JobStepActionSource | null | undefined>,

		/** Type of action being executed by the job step. */
		type: FormControl<JobStepActionType | null | undefined>,

		/**
		 * The action value, for example the text of the T-SQL script to execute.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateJobStepActionFormGroup() {
		return new FormGroup<JobStepActionFormProperties>({
			source: new FormControl<JobStepActionSource | null | undefined>(undefined),
			type: new FormControl<JobStepActionType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobStepActionSource { Inline = 'Inline' }

	export enum JobStepActionType { TSql = 'TSql' }


	/** The execution options of a job step. */
	export interface JobStepExecutionOptions {

		/**
		 * Initial delay between retries for job step execution.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		initialRetryIntervalSeconds?: number | null;

		/**
		 * The maximum amount of time to wait between retries for job step execution.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximumRetryIntervalSeconds?: number | null;

		/**
		 * Maximum number of times the job step will be reattempted if the first attempt fails.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retryAttempts?: number | null;

		/**
		 * The backoff multiplier for the time between retries.
		 * Type: float
		 */
		retryIntervalBackoffMultiplier?: number | null;

		/**
		 * Execution timeout for the job step.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeoutSeconds?: number | null;
	}

	/** The execution options of a job step. */
	export interface JobStepExecutionOptionsFormProperties {

		/**
		 * Initial delay between retries for job step execution.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		initialRetryIntervalSeconds: FormControl<number | null | undefined>,

		/**
		 * The maximum amount of time to wait between retries for job step execution.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximumRetryIntervalSeconds: FormControl<number | null | undefined>,

		/**
		 * Maximum number of times the job step will be reattempted if the first attempt fails.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retryAttempts: FormControl<number | null | undefined>,

		/**
		 * The backoff multiplier for the time between retries.
		 * Type: float
		 */
		retryIntervalBackoffMultiplier: FormControl<number | null | undefined>,

		/**
		 * Execution timeout for the job step.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateJobStepExecutionOptionsFormGroup() {
		return new FormGroup<JobStepExecutionOptionsFormProperties>({
			initialRetryIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			maximumRetryIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			retryAttempts: new FormControl<number | null | undefined>(undefined),
			retryIntervalBackoffMultiplier: new FormControl<number | null | undefined>(undefined),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The output configuration of a job step. */
	export interface JobStepOutput {

		/**
		 * The resource ID of the credential to use to connect to the output destination.
		 * Required
		 */
		credential: string;

		/**
		 * The output destination database.
		 * Required
		 */
		databaseName: string;

		/** The output destination resource group. */
		resourceGroupName?: string | null;

		/** The output destination schema. */
		schemaName?: string | null;

		/**
		 * The output destination server name.
		 * Required
		 */
		serverName: string;

		/** The output destination subscription id. */
		subscriptionId?: string | null;

		/**
		 * The output destination table.
		 * Required
		 */
		tableName: string;

		/** The output destination type. */
		type?: JobStepOutputType | null;
	}

	/** The output configuration of a job step. */
	export interface JobStepOutputFormProperties {

		/**
		 * The resource ID of the credential to use to connect to the output destination.
		 * Required
		 */
		credential: FormControl<string | null | undefined>,

		/**
		 * The output destination database.
		 * Required
		 */
		databaseName: FormControl<string | null | undefined>,

		/** The output destination resource group. */
		resourceGroupName: FormControl<string | null | undefined>,

		/** The output destination schema. */
		schemaName: FormControl<string | null | undefined>,

		/**
		 * The output destination server name.
		 * Required
		 */
		serverName: FormControl<string | null | undefined>,

		/** The output destination subscription id. */
		subscriptionId: FormControl<string | null | undefined>,

		/**
		 * The output destination table.
		 * Required
		 */
		tableName: FormControl<string | null | undefined>,

		/** The output destination type. */
		type: FormControl<JobStepOutputType | null | undefined>,
	}
	export function CreateJobStepOutputFormGroup() {
		return new FormGroup<JobStepOutputFormProperties>({
			credential: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			databaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceGroupName: new FormControl<string | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined),
			serverName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<JobStepOutputType | null | undefined>(undefined),
		});

	}

	export enum JobStepOutputType { SqlDatabase = 'SqlDatabase' }


	/** A list of job steps. */
	export interface JobStepListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<JobStep>;
	}

	/** A list of job steps. */
	export interface JobStepListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobStepListResultFormGroup() {
		return new FormGroup<JobStepListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A job target, for example a specific database or a container of databases that is evaluated during job execution. */
	export interface JobTarget {

		/** The target database name. */
		databaseName?: string | null;

		/** The target elastic pool name. */
		elasticPoolName?: string | null;

		/** Whether the target is included or excluded from the group. */
		membershipType?: JobTargetMembershipType | null;

		/** The resource ID of the credential that is used during job execution to connect to the target and determine the list of databases inside the target. */
		refreshCredential?: string | null;

		/** The target server name. */
		serverName?: string | null;

		/** The target shard map. */
		shardMapName?: string | null;

		/**
		 * The target type.
		 * Required
		 */
		type: JobExecutionTargetType;
	}

	/** A job target, for example a specific database or a container of databases that is evaluated during job execution. */
	export interface JobTargetFormProperties {

		/** The target database name. */
		databaseName: FormControl<string | null | undefined>,

		/** The target elastic pool name. */
		elasticPoolName: FormControl<string | null | undefined>,

		/** Whether the target is included or excluded from the group. */
		membershipType: FormControl<JobTargetMembershipType | null | undefined>,

		/** The resource ID of the credential that is used during job execution to connect to the target and determine the list of databases inside the target. */
		refreshCredential: FormControl<string | null | undefined>,

		/** The target server name. */
		serverName: FormControl<string | null | undefined>,

		/** The target shard map. */
		shardMapName: FormControl<string | null | undefined>,

		/**
		 * The target type.
		 * Required
		 */
		type: FormControl<JobExecutionTargetType | null | undefined>,
	}
	export function CreateJobTargetFormGroup() {
		return new FormGroup<JobTargetFormProperties>({
			databaseName: new FormControl<string | null | undefined>(undefined),
			elasticPoolName: new FormControl<string | null | undefined>(undefined),
			membershipType: new FormControl<JobTargetMembershipType | null | undefined>(undefined),
			refreshCredential: new FormControl<string | null | undefined>(undefined),
			serverName: new FormControl<string | null | undefined>(undefined),
			shardMapName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<JobExecutionTargetType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobTargetMembershipType { Include = 'Include', Exclude = 'Exclude' }


	/** A group of job targets. */
	export interface JobTargetGroup {

		/** Properties of job target group. */
		properties?: JobTargetGroupProperties;
	}

	/** A group of job targets. */
	export interface JobTargetGroupFormProperties {
	}
	export function CreateJobTargetGroupFormGroup() {
		return new FormGroup<JobTargetGroupFormProperties>({
		});

	}


	/** Properties of job target group. */
	export interface JobTargetGroupProperties {

		/**
		 * Members of the target group.
		 * Required
		 */
		members: Array<JobTarget>;
	}

	/** Properties of job target group. */
	export interface JobTargetGroupPropertiesFormProperties {
	}
	export function CreateJobTargetGroupPropertiesFormGroup() {
		return new FormGroup<JobTargetGroupPropertiesFormProperties>({
		});

	}


	/** A list of target groups. */
	export interface JobTargetGroupListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<JobTargetGroup>;
	}

	/** A list of target groups. */
	export interface JobTargetGroupListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobTargetGroupListResultFormGroup() {
		return new FormGroup<JobTargetGroupListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A job version. */
	export interface JobVersion {
	}

	/** A job version. */
	export interface JobVersionFormProperties {
	}
	export function CreateJobVersionFormGroup() {
		return new FormGroup<JobVersionFormProperties>({
		});

	}


	/** A list of job versions. */
	export interface JobVersionListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<JobVersion>;
	}

	/** A list of job versions. */
	export interface JobVersionListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobVersionListResultFormGroup() {
		return new FormGroup<JobVersionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of job agents in a server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobAgentListResult} Successfully retrieved the list of job agents.
		 */
		JobAgents_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<JobAgentListResult> {
			return this.http.get<JobAgentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a job agent.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent to be retrieved.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobAgent} Successfully retrieved the specified job agent.
		 */
		JobAgents_Get(resourceGroupName: string, serverName: string, jobAgentName: string, subscriptionId: string, api_version: string): Observable<JobAgent> {
			return this.http.get<JobAgent>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a job agent.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent to be created or updated.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {JobAgent} requestBody The requested job agent resource state.
		 * @return {JobAgent} Successfully updated the job agent.
		 */
		JobAgents_CreateOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, subscriptionId: string, api_version: string, requestBody: JobAgent): Observable<JobAgent> {
			return this.http.put<JobAgent>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a job agent.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent to be deleted.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the job agent.
		 */
		JobAgents_Delete(resourceGroupName: string, serverName: string, jobAgentName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a job agent.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent to be updated.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {JobAgentUpdate} requestBody The update to the job agent.
		 * @return {JobAgent} Successfully updated the job agent.
		 */
		JobAgents_Update(resourceGroupName: string, serverName: string, jobAgentName: string, subscriptionId: string, api_version: string, requestBody: JobAgentUpdate): Observable<JobAgent> {
			return this.http.patch<JobAgent>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of jobs credentials.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/credentials
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobCredentialListResult} Successfully retrieved the list of job credentials.
		 */
		JobCredentials_ListByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, subscriptionId: string, api_version: string): Observable<JobCredentialListResult> {
			return this.http.get<JobCredentialListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/credentials&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a jobs credential.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/credentials/{credentialName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} credentialName The name of the credential.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobCredential} Successfully retrieved the job credential.
		 */
		JobCredentials_Get(resourceGroupName: string, serverName: string, jobAgentName: string, credentialName: string, subscriptionId: string, api_version: string): Observable<JobCredential> {
			return this.http.get<JobCredential>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/credentials/' + (credentialName == null ? '' : encodeURIComponent(credentialName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a job credential.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/credentials/{credentialName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} credentialName The name of the credential.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {JobCredential} requestBody The requested job credential state.
		 * @return {JobCredential} Successfully updated the credential.
		 */
		JobCredentials_CreateOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, credentialName: string, subscriptionId: string, api_version: string, requestBody: JobCredential): Observable<JobCredential> {
			return this.http.put<JobCredential>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/credentials/' + (credentialName == null ? '' : encodeURIComponent(credentialName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a job credential.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/credentials/{credentialName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} credentialName The name of the credential.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the credential.
		 */
		JobCredentials_Delete(resourceGroupName: string, serverName: string, jobAgentName: string, credentialName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/credentials/' + (credentialName == null ? '' : encodeURIComponent(credentialName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all executions in a job agent.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/executions
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {Date} createTimeMin If specified, only job executions created at or after the specified time are included.
		 * @param {Date} createTimeMax If specified, only job executions created before the specified time are included.
		 * @param {Date} endTimeMin If specified, only job executions completed at or after the specified time are included.
		 * @param {Date} endTimeMax If specified, only job executions completed before the specified time are included.
		 * @param {boolean} isActive If specified, only active or only completed job executions are included.
		 * @param {number} skip The number of elements in the collection to skip.
		 * @param {number} top The number of elements to return from the collection.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobExecutionListResult} Successfully retrieved job executions.
		 */
		JobExecutions_ListByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, createTimeMin: Date | null | undefined, createTimeMax: Date | null | undefined, endTimeMin: Date | null | undefined, endTimeMax: Date | null | undefined, isActive: boolean | null | undefined, skip: number | null | undefined, top: number | null | undefined, subscriptionId: string, api_version: string): Observable<JobExecutionListResult> {
			return this.http.get<JobExecutionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/executions&createTimeMin=' + createTimeMin?.toISOString() + '&createTimeMax=' + createTimeMax?.toISOString() + '&endTimeMin=' + endTimeMin?.toISOString() + '&endTimeMax=' + endTimeMax?.toISOString() + '&isActive=' + isActive + '&skip=' + skip + '&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of jobs.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobListResult} Successfully retrieved the list of jobs.
		 */
		Jobs_ListByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, subscriptionId: string, api_version: string): Observable<JobListResult> {
			return this.http.get<JobListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a job.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job to get.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {Job} Successfully retrieved the job.
		 */
		Jobs_Get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, subscriptionId: string, api_version: string): Observable<Job> {
			return this.http.get<Job>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a job.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job to get.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {Job} requestBody The requested job state.
		 * @return {Job} Successfully updated the job.
		 */
		Jobs_CreateOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, subscriptionId: string, api_version: string, requestBody: Job): Observable<Job> {
			return this.http.put<Job>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a job.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job to delete.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the job.
		 */
		Jobs_Delete(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists a job's executions.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job to get.
		 * @param {Date} createTimeMin If specified, only job executions created at or after the specified time are included.
		 * @param {Date} createTimeMax If specified, only job executions created before the specified time are included.
		 * @param {Date} endTimeMin If specified, only job executions completed at or after the specified time are included.
		 * @param {Date} endTimeMax If specified, only job executions completed before the specified time are included.
		 * @param {boolean} isActive If specified, only active or only completed job executions are included.
		 * @param {number} skip The number of elements in the collection to skip.
		 * @param {number} top The number of elements to return from the collection.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobExecutionListResult} Successfully retrieved job executions.
		 */
		JobExecutions_ListByJob(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, createTimeMin: Date | null | undefined, createTimeMax: Date | null | undefined, endTimeMin: Date | null | undefined, endTimeMax: Date | null | undefined, isActive: boolean | null | undefined, skip: number | null | undefined, top: number | null | undefined, subscriptionId: string, api_version: string): Observable<JobExecutionListResult> {
			return this.http.get<JobExecutionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/executions&createTimeMin=' + createTimeMin?.toISOString() + '&createTimeMax=' + createTimeMax?.toISOString() + '&endTimeMin=' + endTimeMin?.toISOString() + '&endTimeMax=' + endTimeMax?.toISOString() + '&isActive=' + isActive + '&skip=' + skip + '&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a job execution.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job.
		 * @param {string} jobExecutionId The id of the job execution
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobExecution} Successfully retrieved the job.
		 */
		JobExecutions_Get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, subscriptionId: string, api_version: string): Observable<JobExecution> {
			return this.http.get<JobExecution>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/executions/' + (jobExecutionId == null ? '' : encodeURIComponent(jobExecutionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a job execution.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job to get.
		 * @param {string} jobExecutionId The job execution id to create the job execution under.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobExecution} A job execution for the job with the given id already existed.
		 */
		JobExecutions_CreateOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, subscriptionId: string, api_version: string): Observable<JobExecution> {
			return this.http.put<JobExecution>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/executions/' + (jobExecutionId == null ? '' : encodeURIComponent(jobExecutionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Requests cancellation of a job execution.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/cancel
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job.
		 * @param {string} jobExecutionId The id of the job execution to cancel.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully requested cancellation of the job execution.
		 */
		JobExecutions_Cancel(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/executions/' + (jobExecutionId == null ? '' : encodeURIComponent(jobExecutionId)) + '/cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the step executions of a job execution.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job to get.
		 * @param {string} jobExecutionId The id of the job execution
		 * @param {Date} createTimeMin If specified, only job executions created at or after the specified time are included.
		 * @param {Date} createTimeMax If specified, only job executions created before the specified time are included.
		 * @param {Date} endTimeMin If specified, only job executions completed at or after the specified time are included.
		 * @param {Date} endTimeMax If specified, only job executions completed before the specified time are included.
		 * @param {boolean} isActive If specified, only active or only completed job executions are included.
		 * @param {number} skip The number of elements in the collection to skip.
		 * @param {number} top The number of elements to return from the collection.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobExecutionListResult} Successfully retrieved the step executions.
		 */
		JobStepExecutions_ListByJobExecution(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, createTimeMin: Date | null | undefined, createTimeMax: Date | null | undefined, endTimeMin: Date | null | undefined, endTimeMax: Date | null | undefined, isActive: boolean | null | undefined, skip: number | null | undefined, top: number | null | undefined, subscriptionId: string, api_version: string): Observable<JobExecutionListResult> {
			return this.http.get<JobExecutionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/executions/' + (jobExecutionId == null ? '' : encodeURIComponent(jobExecutionId)) + '/steps&createTimeMin=' + createTimeMin?.toISOString() + '&createTimeMax=' + createTimeMax?.toISOString() + '&endTimeMin=' + endTimeMin?.toISOString() + '&endTimeMax=' + endTimeMax?.toISOString() + '&isActive=' + isActive + '&skip=' + skip + '&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a step execution of a job execution.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps/{stepName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job to get.
		 * @param {string} jobExecutionId The unique id of the job execution
		 * @param {string} stepName The name of the step.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobExecution} Successfully retrieved the step execution.
		 */
		JobStepExecutions_Get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, subscriptionId: string, api_version: string): Observable<JobExecution> {
			return this.http.get<JobExecution>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/executions/' + (jobExecutionId == null ? '' : encodeURIComponent(jobExecutionId)) + '/steps/' + (stepName == null ? '' : encodeURIComponent(stepName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the target executions of a job step execution.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps/{stepName}/targets
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job to get.
		 * @param {string} jobExecutionId The id of the job execution
		 * @param {string} stepName The name of the step.
		 * @param {Date} createTimeMin If specified, only job executions created at or after the specified time are included.
		 * @param {Date} createTimeMax If specified, only job executions created before the specified time are included.
		 * @param {Date} endTimeMin If specified, only job executions completed at or after the specified time are included.
		 * @param {Date} endTimeMax If specified, only job executions completed before the specified time are included.
		 * @param {boolean} isActive If specified, only active or only completed job executions are included.
		 * @param {number} skip The number of elements in the collection to skip.
		 * @param {number} top The number of elements to return from the collection.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobExecutionListResult} Successfully retrieved the target executions.
		 */
		JobTargetExecutions_ListByStep(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, createTimeMin: Date | null | undefined, createTimeMax: Date | null | undefined, endTimeMin: Date | null | undefined, endTimeMax: Date | null | undefined, isActive: boolean | null | undefined, skip: number | null | undefined, top: number | null | undefined, subscriptionId: string, api_version: string): Observable<JobExecutionListResult> {
			return this.http.get<JobExecutionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/executions/' + (jobExecutionId == null ? '' : encodeURIComponent(jobExecutionId)) + '/steps/' + (stepName == null ? '' : encodeURIComponent(stepName)) + '/targets&createTimeMin=' + createTimeMin?.toISOString() + '&createTimeMax=' + createTimeMax?.toISOString() + '&endTimeMin=' + endTimeMin?.toISOString() + '&endTimeMax=' + endTimeMax?.toISOString() + '&isActive=' + isActive + '&skip=' + skip + '&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a target execution.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps/{stepName}/targets/{targetId}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job to get.
		 * @param {string} jobExecutionId The unique id of the job execution
		 * @param {string} stepName The name of the step.
		 * @param {string} targetId The target id.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobExecution} Successfully retrieved the target execution.
		 */
		JobTargetExecutions_Get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, targetId: string, subscriptionId: string, api_version: string): Observable<JobExecution> {
			return this.http.get<JobExecution>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/executions/' + (jobExecutionId == null ? '' : encodeURIComponent(jobExecutionId)) + '/steps/' + (stepName == null ? '' : encodeURIComponent(stepName)) + '/targets/' + (targetId == null ? '' : encodeURIComponent(targetId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists target executions for all steps of a job execution.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/targets
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job to get.
		 * @param {string} jobExecutionId The id of the job execution
		 * @param {Date} createTimeMin If specified, only job executions created at or after the specified time are included.
		 * @param {Date} createTimeMax If specified, only job executions created before the specified time are included.
		 * @param {Date} endTimeMin If specified, only job executions completed at or after the specified time are included.
		 * @param {Date} endTimeMax If specified, only job executions completed before the specified time are included.
		 * @param {boolean} isActive If specified, only active or only completed job executions are included.
		 * @param {number} skip The number of elements in the collection to skip.
		 * @param {number} top The number of elements to return from the collection.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobExecutionListResult} Successfully retrieved the target executions.
		 */
		JobTargetExecutions_ListByJobExecution(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, createTimeMin: Date | null | undefined, createTimeMax: Date | null | undefined, endTimeMin: Date | null | undefined, endTimeMax: Date | null | undefined, isActive: boolean | null | undefined, skip: number | null | undefined, top: number | null | undefined, subscriptionId: string, api_version: string): Observable<JobExecutionListResult> {
			return this.http.get<JobExecutionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/executions/' + (jobExecutionId == null ? '' : encodeURIComponent(jobExecutionId)) + '/targets&createTimeMin=' + createTimeMin?.toISOString() + '&createTimeMax=' + createTimeMax?.toISOString() + '&endTimeMin=' + endTimeMin?.toISOString() + '&endTimeMax=' + endTimeMax?.toISOString() + '&isActive=' + isActive + '&skip=' + skip + '&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Starts an elastic job execution.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/start
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job to get.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobExecution} Successfully started an execution for the job.
		 */
		JobExecutions_Create(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, subscriptionId: string, api_version: string): Observable<JobExecution> {
			return this.http.post<JobExecution>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets all job steps for a job's current version.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/steps
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job to get.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobStepListResult} Successfully retrieved the list of job steps.
		 */
		JobSteps_ListByJob(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, subscriptionId: string, api_version: string): Observable<JobStepListResult> {
			return this.http.get<JobStepListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/steps&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a job step in a job's current version.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/steps/{stepName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job.
		 * @param {string} stepName The name of the job step.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobStep} Successfully retrieved the job step.
		 */
		JobSteps_Get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, stepName: string, subscriptionId: string, api_version: string): Observable<JobStep> {
			return this.http.get<JobStep>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/steps/' + (stepName == null ? '' : encodeURIComponent(stepName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a job step. This will implicitly create a new job version.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/steps/{stepName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job.
		 * @param {string} stepName The name of the job step.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {JobStep} requestBody The requested state of the job step.
		 * @return {JobStep} Successfully updated the job step.
		 */
		JobSteps_CreateOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, stepName: string, subscriptionId: string, api_version: string, requestBody: JobStep): Observable<JobStep> {
			return this.http.put<JobStep>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/steps/' + (stepName == null ? '' : encodeURIComponent(stepName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a job step. This will implicitly create a new job version.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/steps/{stepName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job.
		 * @param {string} stepName The name of the job step to delete.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the job step.
		 */
		JobSteps_Delete(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, stepName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/steps/' + (stepName == null ? '' : encodeURIComponent(stepName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all versions of a job.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/versions
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job to get.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobVersionListResult} Successfully retrieved the list of versions.
		 */
		JobVersions_ListByJob(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, subscriptionId: string, api_version: string): Observable<JobVersionListResult> {
			return this.http.get<JobVersionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/versions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a job version.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/versions/{jobVersion}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job.
		 * @param {number} jobVersion The version of the job to get.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobVersion} Successfully retrieved the job version.
		 */
		JobVersions_Get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobVersion: number, subscriptionId: string, api_version: string): Observable<JobVersion> {
			return this.http.get<JobVersion>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/versions/' + jobVersion + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all job steps in the specified job version.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/versions/{jobVersion}/steps
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job to get.
		 * @param {number} jobVersion The version of the job to get.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobStepListResult} Successfully retrieved the list of job steps.
		 */
		JobSteps_ListByVersion(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobVersion: number, subscriptionId: string, api_version: string): Observable<JobStepListResult> {
			return this.http.get<JobStepListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/versions/' + jobVersion + '/steps&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified version of a job step.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/versions/{jobVersion}/steps/{stepName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} jobName The name of the job.
		 * @param {number} jobVersion The version of the job to get.
		 * @param {string} stepName The name of the job step.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobStep} Successfully retrieved the job step.
		 */
		JobSteps_GetByVersion(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobVersion: number, stepName: string, subscriptionId: string, api_version: string): Observable<JobStep> {
			return this.http.get<JobStep>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/versions/' + jobVersion + '/steps/' + (stepName == null ? '' : encodeURIComponent(stepName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all target groups in an agent.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/targetGroups
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobTargetGroupListResult} Successfully retrieved the list of target groups.
		 */
		JobTargetGroups_ListByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, subscriptionId: string, api_version: string): Observable<JobTargetGroupListResult> {
			return this.http.get<JobTargetGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/targetGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a target group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/targetGroups/{targetGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} targetGroupName The name of the target group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {JobTargetGroup} Successfully retrieved the target group.
		 */
		JobTargetGroups_Get(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, subscriptionId: string, api_version: string): Observable<JobTargetGroup> {
			return this.http.get<JobTargetGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/targetGroups/' + (targetGroupName == null ? '' : encodeURIComponent(targetGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a target group.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/targetGroups/{targetGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} targetGroupName The name of the target group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {JobTargetGroup} requestBody The requested state of the target group.
		 * @return {JobTargetGroup} Successfully updated the target group.
		 */
		JobTargetGroups_CreateOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, subscriptionId: string, api_version: string, requestBody: JobTargetGroup): Observable<JobTargetGroup> {
			return this.http.put<JobTargetGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/targetGroups/' + (targetGroupName == null ? '' : encodeURIComponent(targetGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a target group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/targetGroups/{targetGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} jobAgentName The name of the job agent.
		 * @param {string} targetGroupName The name of the target group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the target group.
		 */
		JobTargetGroups_Delete(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/jobAgents/' + (jobAgentName == null ? '' : encodeURIComponent(jobAgentName)) + '/targetGroups/' + (targetGroupName == null ? '' : encodeURIComponent(targetGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

