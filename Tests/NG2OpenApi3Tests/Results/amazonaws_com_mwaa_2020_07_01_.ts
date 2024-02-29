import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateCliTokenResponse {
		CliToken?: string;
		WebServerHostname?: string;
	}
	export interface CreateCliTokenResponseFormProperties {
		CliToken: FormControl<string | null | undefined>,
		WebServerHostname: FormControl<string | null | undefined>,
	}
	export function CreateCreateCliTokenResponseFormGroup() {
		return new FormGroup<CreateCliTokenResponseFormProperties>({
			CliToken: new FormControl<string | null | undefined>(undefined),
			WebServerHostname: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateEnvironmentOutput {
		Arn?: string;
	}
	export interface CreateEnvironmentOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentOutputFormGroup() {
		return new FormGroup<CreateEnvironmentOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enables the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) and defines the log level to send to CloudWatch Logs (e.g. <code>INFO</code>). */
	export interface ModuleLoggingConfigurationInput {

		/** Required */
		Enabled: boolean;

		/** Required */
		LogLevel: LoggingLevel;
	}

	/** Enables the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) and defines the log level to send to CloudWatch Logs (e.g. <code>INFO</code>). */
	export interface ModuleLoggingConfigurationInputFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		LogLevel: FormControl<LoggingLevel | null | undefined>,
	}
	export function CreateModuleLoggingConfigurationInputFormGroup() {
		return new FormGroup<ModuleLoggingConfigurationInputFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			LogLevel: new FormControl<LoggingLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LoggingLevel { CRITICAL = 'CRITICAL', ERROR = 'ERROR', WARNING = 'WARNING', INFO = 'INFO', DEBUG = 'DEBUG' }

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface CreateWebLoginTokenResponse {
		WebServerHostname?: string;
		WebToken?: string;
	}
	export interface CreateWebLoginTokenResponseFormProperties {
		WebServerHostname: FormControl<string | null | undefined>,
		WebToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebLoginTokenResponseFormGroup() {
		return new FormGroup<CreateWebLoginTokenResponseFormProperties>({
			WebServerHostname: new FormControl<string | null | undefined>(undefined),
			WebToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface DeleteEnvironmentOutput {
	}
	export interface DeleteEnvironmentOutputFormProperties {
	}
	export function CreateDeleteEnvironmentOutputFormGroup() {
		return new FormGroup<DeleteEnvironmentOutputFormProperties>({
		});

	}

	export interface GetEnvironmentOutput {
		Environment?: Environment;
	}
	export interface GetEnvironmentOutputFormProperties {
	}
	export function CreateGetEnvironmentOutputFormGroup() {
		return new FormGroup<GetEnvironmentOutputFormProperties>({
		});

	}


	/** Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment. */
	export interface Environment {
		AirflowConfigurationOptions?: AirflowConfigurationOptions;
		AirflowVersion?: string;
		Arn?: string;
		CreatedAt?: Date;
		DagS3Path?: string;
		EnvironmentClass?: string;
		ExecutionRoleArn?: string;
		KmsKey?: string;
		LastUpdate?: LastUpdate;
		LoggingConfiguration?: LoggingConfiguration;
		MaxWorkers?: number | null;
		MinWorkers?: number | null;
		Name?: string;
		NetworkConfiguration?: NetworkConfiguration;
		PluginsS3ObjectVersion?: string;
		PluginsS3Path?: string;
		RequirementsS3ObjectVersion?: string;
		RequirementsS3Path?: string;
		Schedulers?: number | null;
		ServiceRoleArn?: string;
		SourceBucketArn?: string;
		StartupScriptS3ObjectVersion?: string;
		StartupScriptS3Path?: string;
		Status?: EnvironmentStatus;
		Tags?: TagMap;
		WebserverAccessMode?: WebserverAccessMode;
		WebserverUrl?: string;
		WeeklyMaintenanceWindowStart?: string;
	}

	/** Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment. */
	export interface EnvironmentFormProperties {
		AirflowVersion: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		DagS3Path: FormControl<string | null | undefined>,
		EnvironmentClass: FormControl<string | null | undefined>,
		ExecutionRoleArn: FormControl<string | null | undefined>,
		KmsKey: FormControl<string | null | undefined>,
		MaxWorkers: FormControl<number | null | undefined>,
		MinWorkers: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PluginsS3ObjectVersion: FormControl<string | null | undefined>,
		PluginsS3Path: FormControl<string | null | undefined>,
		RequirementsS3ObjectVersion: FormControl<string | null | undefined>,
		RequirementsS3Path: FormControl<string | null | undefined>,
		Schedulers: FormControl<number | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,
		SourceBucketArn: FormControl<string | null | undefined>,
		StartupScriptS3ObjectVersion: FormControl<string | null | undefined>,
		StartupScriptS3Path: FormControl<string | null | undefined>,
		Status: FormControl<EnvironmentStatus | null | undefined>,
		WebserverAccessMode: FormControl<WebserverAccessMode | null | undefined>,
		WebserverUrl: FormControl<string | null | undefined>,
		WeeklyMaintenanceWindowStart: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			AirflowVersion: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DagS3Path: new FormControl<string | null | undefined>(undefined),
			EnvironmentClass: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			KmsKey: new FormControl<string | null | undefined>(undefined),
			MaxWorkers: new FormControl<number | null | undefined>(undefined),
			MinWorkers: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PluginsS3ObjectVersion: new FormControl<string | null | undefined>(undefined),
			PluginsS3Path: new FormControl<string | null | undefined>(undefined),
			RequirementsS3ObjectVersion: new FormControl<string | null | undefined>(undefined),
			RequirementsS3Path: new FormControl<string | null | undefined>(undefined),
			Schedulers: new FormControl<number | null | undefined>(undefined),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			SourceBucketArn: new FormControl<string | null | undefined>(undefined),
			StartupScriptS3ObjectVersion: new FormControl<string | null | undefined>(undefined),
			StartupScriptS3Path: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EnvironmentStatus | null | undefined>(undefined),
			WebserverAccessMode: new FormControl<WebserverAccessMode | null | undefined>(undefined),
			WebserverUrl: new FormControl<string | null | undefined>(undefined),
			WeeklyMaintenanceWindowStart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AirflowConfigurationOptions {
	}
	export interface AirflowConfigurationOptionsFormProperties {
	}
	export function CreateAirflowConfigurationOptionsFormGroup() {
		return new FormGroup<AirflowConfigurationOptionsFormProperties>({
		});

	}


	/** Describes the status of the last update on the environment, and any errors that were encountered. */
	export interface LastUpdate {
		CreatedAt?: Date;
		Error?: UpdateError;
		Source?: string;
		Status?: UpdateStatus;
	}

	/** Describes the status of the last update on the environment, and any errors that were encountered. */
	export interface LastUpdateFormProperties {
		CreatedAt: FormControl<Date | null | undefined>,
		Source: FormControl<string | null | undefined>,
		Status: FormControl<UpdateStatus | null | undefined>,
	}
	export function CreateLastUpdateFormGroup() {
		return new FormGroup<LastUpdateFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<UpdateStatus | null | undefined>(undefined),
		});

	}


	/** Describes the error(s) encountered with the last update of the environment. */
	export interface UpdateError {
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Describes the error(s) encountered with the last update of the environment. */
	export interface UpdateErrorFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateUpdateErrorFormGroup() {
		return new FormGroup<UpdateErrorFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateStatus { SUCCESS = 'SUCCESS', PENDING = 'PENDING', FAILED = 'FAILED' }


	/** Describes the Apache Airflow log types that are published to CloudWatch Logs. */
	export interface LoggingConfiguration {
		DagProcessingLogs?: ModuleLoggingConfiguration;
		SchedulerLogs?: ModuleLoggingConfiguration;
		TaskLogs?: ModuleLoggingConfiguration;
		WebserverLogs?: ModuleLoggingConfiguration;
		WorkerLogs?: ModuleLoggingConfiguration;
	}

	/** Describes the Apache Airflow log types that are published to CloudWatch Logs. */
	export interface LoggingConfigurationFormProperties {
	}
	export function CreateLoggingConfigurationFormGroup() {
		return new FormGroup<LoggingConfigurationFormProperties>({
		});

	}


	/** Describes the Apache Airflow log details for the log type (e.g. <code>DagProcessingLogs</code>). */
	export interface ModuleLoggingConfiguration {
		CloudWatchLogGroupArn?: string;
		Enabled?: boolean | null;
		LogLevel?: LoggingLevel;
	}

	/** Describes the Apache Airflow log details for the log type (e.g. <code>DagProcessingLogs</code>). */
	export interface ModuleLoggingConfigurationFormProperties {
		CloudWatchLogGroupArn: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		LogLevel: FormControl<LoggingLevel | null | undefined>,
	}
	export function CreateModuleLoggingConfigurationFormGroup() {
		return new FormGroup<ModuleLoggingConfigurationFormProperties>({
			CloudWatchLogGroupArn: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			LogLevel: new FormControl<LoggingLevel | null | undefined>(undefined),
		});

	}


	/** Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>. */
	export interface NetworkConfiguration {
		SecurityGroupIds?: Array<string>;
		SubnetIds?: Array<string>;
	}

	/** Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>. */
	export interface NetworkConfigurationFormProperties {
	}
	export function CreateNetworkConfigurationFormGroup() {
		return new FormGroup<NetworkConfigurationFormProperties>({
		});

	}

	export enum EnvironmentStatus { CREATING = 'CREATING', CREATE_FAILED = 'CREATE_FAILED', AVAILABLE = 'AVAILABLE', UPDATING = 'UPDATING', DELETING = 'DELETING', DELETED = 'DELETED', UNAVAILABLE = 'UNAVAILABLE', UPDATE_FAILED = 'UPDATE_FAILED', ROLLING_BACK = 'ROLLING_BACK', CREATING_SNAPSHOT = 'CREATING_SNAPSHOT' }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export enum WebserverAccessMode { PRIVATE_ONLY = 'PRIVATE_ONLY', PUBLIC_ONLY = 'PUBLIC_ONLY' }

	export interface ListEnvironmentsOutput {

		/** Required */
		Environments: Array<string>;
		NextToken?: string;
	}
	export interface ListEnvironmentsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentsOutputFormGroup() {
		return new FormGroup<ListEnvironmentsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceOutputFormProperties {
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
		});

	}

	export interface PublishMetricsOutput {
	}
	export interface PublishMetricsOutputFormProperties {
	}
	export function CreatePublishMetricsOutputFormGroup() {
		return new FormGroup<PublishMetricsOutputFormProperties>({
		});

	}


	/**  <b>Internal only</b>. Collects Apache Airflow metrics. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>. */
	export interface MetricDatum {
		Dimensions?: Array<Dimension>;

		/** Required */
		MetricName: string;
		StatisticValues?: StatisticSet;

		/** Required */
		Timestamp: Date;
		Unit?: Unit;
		Value?: number | null;
	}

	/**  <b>Internal only</b>. Collects Apache Airflow metrics. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>. */
	export interface MetricDatumFormProperties {

		/** Required */
		MetricName: FormControl<string | null | undefined>,

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,
		Unit: FormControl<Unit | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreateMetricDatumFormGroup() {
		return new FormGroup<MetricDatumFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Unit: new FormControl<Unit | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  <b>Internal only</b>. Represents the dimensions of a metric. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>. */
	export interface Dimension {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
	}

	/**  <b>Internal only</b>. Represents the dimensions of a metric. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>. */
	export interface DimensionFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  <b>Internal only</b>. Represents a set of statistics that describe a specific metric. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>. */
	export interface StatisticSet {
		Maximum?: number | null;
		Minimum?: number | null;
		SampleCount?: number | null;
		Sum?: number | null;
	}

	/**  <b>Internal only</b>. Represents a set of statistics that describe a specific metric. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>. */
	export interface StatisticSetFormProperties {
		Maximum: FormControl<number | null | undefined>,
		Minimum: FormControl<number | null | undefined>,
		SampleCount: FormControl<number | null | undefined>,
		Sum: FormControl<number | null | undefined>,
	}
	export function CreateStatisticSetFormGroup() {
		return new FormGroup<StatisticSetFormProperties>({
			Maximum: new FormControl<number | null | undefined>(undefined),
			Minimum: new FormControl<number | null | undefined>(undefined),
			SampleCount: new FormControl<number | null | undefined>(undefined),
			Sum: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Unit { Seconds = 'Seconds', Microseconds = 'Microseconds', Milliseconds = 'Milliseconds', Bytes = 'Bytes', Kilobytes = 'Kilobytes', Megabytes = 'Megabytes', Gigabytes = 'Gigabytes', Terabytes = 'Terabytes', Bits = 'Bits', Kilobits = 'Kilobits', Megabits = 'Megabits', Gigabits = 'Gigabits', Terabits = 'Terabits', Percent = 'Percent', Count = 'Count', 'Bytes/Second' = 'Bytes/Second', 'Kilobytes/Second' = 'Kilobytes/Second', 'Megabytes/Second' = 'Megabytes/Second', 'Gigabytes/Second' = 'Gigabytes/Second', 'Terabytes/Second' = 'Terabytes/Second', 'Bits/Second' = 'Bits/Second', 'Kilobits/Second' = 'Kilobits/Second', 'Megabits/Second' = 'Megabits/Second', 'Gigabits/Second' = 'Gigabits/Second', 'Terabits/Second' = 'Terabits/Second', 'Count/Second' = 'Count/Second', None = 'None' }

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UpdateEnvironmentOutput {
		Arn?: string;
	}
	export interface UpdateEnvironmentOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentOutputFormGroup() {
		return new FormGroup<UpdateEnvironmentOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCliTokenRequest {
	}
	export interface CreateCliTokenRequestFormProperties {
	}
	export function CreateCreateCliTokenRequestFormGroup() {
		return new FormGroup<CreateCliTokenRequestFormProperties>({
		});

	}


	/** Defines the Apache Airflow log types to send to CloudWatch Logs. */
	export interface LoggingConfigurationInput {
		DagProcessingLogs?: ModuleLoggingConfigurationInput;
		SchedulerLogs?: ModuleLoggingConfigurationInput;
		TaskLogs?: ModuleLoggingConfigurationInput;
		WebserverLogs?: ModuleLoggingConfigurationInput;
		WorkerLogs?: ModuleLoggingConfigurationInput;
	}

	/** Defines the Apache Airflow log types to send to CloudWatch Logs. */
	export interface LoggingConfigurationInputFormProperties {
	}
	export function CreateLoggingConfigurationInputFormGroup() {
		return new FormGroup<LoggingConfigurationInputFormProperties>({
		});

	}


	/** This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation to create an environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/get-started.html">Get started with Amazon Managed Workflows for Apache Airflow</a>. */
	export interface CreateEnvironmentInput {
		AirflowConfigurationOptions?: AirflowConfigurationOptions;
		AirflowVersion?: string;

		/** Required */
		DagS3Path: string;
		EnvironmentClass?: string;

		/** Required */
		ExecutionRoleArn: string;
		KmsKey?: string;
		LoggingConfiguration?: LoggingConfigurationInput;
		MaxWorkers?: number | null;
		MinWorkers?: number | null;

		/** Required */
		NetworkConfiguration: NetworkConfiguration;
		PluginsS3ObjectVersion?: string;
		PluginsS3Path?: string;
		RequirementsS3ObjectVersion?: string;
		RequirementsS3Path?: string;
		Schedulers?: number | null;

		/** Required */
		SourceBucketArn: string;
		StartupScriptS3ObjectVersion?: string;
		StartupScriptS3Path?: string;
		Tags?: TagMap;
		WebserverAccessMode?: WebserverAccessMode;
		WeeklyMaintenanceWindowStart?: string;
	}

	/** This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation to create an environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/get-started.html">Get started with Amazon Managed Workflows for Apache Airflow</a>. */
	export interface CreateEnvironmentInputFormProperties {
		AirflowVersion: FormControl<string | null | undefined>,

		/** Required */
		DagS3Path: FormControl<string | null | undefined>,
		EnvironmentClass: FormControl<string | null | undefined>,

		/** Required */
		ExecutionRoleArn: FormControl<string | null | undefined>,
		KmsKey: FormControl<string | null | undefined>,
		MaxWorkers: FormControl<number | null | undefined>,
		MinWorkers: FormControl<number | null | undefined>,
		PluginsS3ObjectVersion: FormControl<string | null | undefined>,
		PluginsS3Path: FormControl<string | null | undefined>,
		RequirementsS3ObjectVersion: FormControl<string | null | undefined>,
		RequirementsS3Path: FormControl<string | null | undefined>,
		Schedulers: FormControl<number | null | undefined>,

		/** Required */
		SourceBucketArn: FormControl<string | null | undefined>,
		StartupScriptS3ObjectVersion: FormControl<string | null | undefined>,
		StartupScriptS3Path: FormControl<string | null | undefined>,
		WebserverAccessMode: FormControl<WebserverAccessMode | null | undefined>,
		WeeklyMaintenanceWindowStart: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentInputFormGroup() {
		return new FormGroup<CreateEnvironmentInputFormProperties>({
			AirflowVersion: new FormControl<string | null | undefined>(undefined),
			DagS3Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnvironmentClass: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKey: new FormControl<string | null | undefined>(undefined),
			MaxWorkers: new FormControl<number | null | undefined>(undefined),
			MinWorkers: new FormControl<number | null | undefined>(undefined),
			PluginsS3ObjectVersion: new FormControl<string | null | undefined>(undefined),
			PluginsS3Path: new FormControl<string | null | undefined>(undefined),
			RequirementsS3ObjectVersion: new FormControl<string | null | undefined>(undefined),
			RequirementsS3Path: new FormControl<string | null | undefined>(undefined),
			Schedulers: new FormControl<number | null | undefined>(undefined),
			SourceBucketArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartupScriptS3ObjectVersion: new FormControl<string | null | undefined>(undefined),
			StartupScriptS3Path: new FormControl<string | null | undefined>(undefined),
			WebserverAccessMode: new FormControl<WebserverAccessMode | null | undefined>(undefined),
			WeeklyMaintenanceWindowStart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWebLoginTokenRequest {
	}
	export interface CreateWebLoginTokenRequestFormProperties {
	}
	export function CreateCreateWebLoginTokenRequestFormGroup() {
		return new FormGroup<CreateWebLoginTokenRequestFormProperties>({
		});

	}

	export interface DeleteEnvironmentInput {
	}
	export interface DeleteEnvironmentInputFormProperties {
	}
	export function CreateDeleteEnvironmentInputFormGroup() {
		return new FormGroup<DeleteEnvironmentInputFormProperties>({
		});

	}

	export interface GetEnvironmentInput {
	}
	export interface GetEnvironmentInputFormProperties {
	}
	export function CreateGetEnvironmentInputFormGroup() {
		return new FormGroup<GetEnvironmentInputFormProperties>({
		});

	}

	export interface ListEnvironmentsInput {
	}
	export interface ListEnvironmentsInputFormProperties {
	}
	export function CreateListEnvironmentsInputFormGroup() {
		return new FormGroup<ListEnvironmentsInputFormProperties>({
		});

	}

	export interface ListTagsForResourceInput {
	}
	export interface ListTagsForResourceInputFormProperties {
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
		});

	}

	export interface PublishMetricsInput {

		/** Required */
		MetricData: Array<MetricDatum>;
	}
	export interface PublishMetricsInputFormProperties {
	}
	export function CreatePublishMetricsInputFormGroup() {
		return new FormGroup<PublishMetricsInputFormProperties>({
		});

	}

	export interface TagResourceInput {

		/** Required */
		Tags: TagMap;
	}
	export interface TagResourceInputFormProperties {
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
		});

	}

	export interface UntagResourceInput {
	}
	export interface UntagResourceInputFormProperties {
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
		});

	}


	/** Defines the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>. */
	export interface UpdateNetworkConfigurationInput {

		/** Required */
		SecurityGroupIds: Array<string>;
	}

	/** Defines the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>. */
	export interface UpdateNetworkConfigurationInputFormProperties {
	}
	export function CreateUpdateNetworkConfigurationInputFormGroup() {
		return new FormGroup<UpdateNetworkConfigurationInputFormProperties>({
		});

	}

	export interface UpdateEnvironmentInput {
		AirflowConfigurationOptions?: AirflowConfigurationOptions;
		AirflowVersion?: string;
		DagS3Path?: string;
		EnvironmentClass?: string;
		ExecutionRoleArn?: string;
		LoggingConfiguration?: LoggingConfigurationInput;
		MaxWorkers?: number | null;
		MinWorkers?: number | null;
		NetworkConfiguration?: UpdateNetworkConfigurationInput;
		PluginsS3ObjectVersion?: string;
		PluginsS3Path?: string;
		RequirementsS3ObjectVersion?: string;
		RequirementsS3Path?: string;
		Schedulers?: number | null;
		SourceBucketArn?: string;
		StartupScriptS3ObjectVersion?: string;
		StartupScriptS3Path?: string;
		WebserverAccessMode?: WebserverAccessMode;
		WeeklyMaintenanceWindowStart?: string;
	}
	export interface UpdateEnvironmentInputFormProperties {
		AirflowVersion: FormControl<string | null | undefined>,
		DagS3Path: FormControl<string | null | undefined>,
		EnvironmentClass: FormControl<string | null | undefined>,
		ExecutionRoleArn: FormControl<string | null | undefined>,
		MaxWorkers: FormControl<number | null | undefined>,
		MinWorkers: FormControl<number | null | undefined>,
		PluginsS3ObjectVersion: FormControl<string | null | undefined>,
		PluginsS3Path: FormControl<string | null | undefined>,
		RequirementsS3ObjectVersion: FormControl<string | null | undefined>,
		RequirementsS3Path: FormControl<string | null | undefined>,
		Schedulers: FormControl<number | null | undefined>,
		SourceBucketArn: FormControl<string | null | undefined>,
		StartupScriptS3ObjectVersion: FormControl<string | null | undefined>,
		StartupScriptS3Path: FormControl<string | null | undefined>,
		WebserverAccessMode: FormControl<WebserverAccessMode | null | undefined>,
		WeeklyMaintenanceWindowStart: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentInputFormGroup() {
		return new FormGroup<UpdateEnvironmentInputFormProperties>({
			AirflowVersion: new FormControl<string | null | undefined>(undefined),
			DagS3Path: new FormControl<string | null | undefined>(undefined),
			EnvironmentClass: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			MaxWorkers: new FormControl<number | null | undefined>(undefined),
			MinWorkers: new FormControl<number | null | undefined>(undefined),
			PluginsS3ObjectVersion: new FormControl<string | null | undefined>(undefined),
			PluginsS3Path: new FormControl<string | null | undefined>(undefined),
			RequirementsS3ObjectVersion: new FormControl<string | null | undefined>(undefined),
			RequirementsS3Path: new FormControl<string | null | undefined>(undefined),
			Schedulers: new FormControl<number | null | undefined>(undefined),
			SourceBucketArn: new FormControl<string | null | undefined>(undefined),
			StartupScriptS3ObjectVersion: new FormControl<string | null | undefined>(undefined),
			StartupScriptS3Path: new FormControl<string | null | undefined>(undefined),
			WebserverAccessMode: new FormControl<WebserverAccessMode | null | undefined>(undefined),
			WeeklyMaintenanceWindowStart: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a CLI token for the Airflow CLI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-cli.html">Creating an Apache Airflow CLI token</a>.
		 * Post clitoken/{Name}
		 * @param {string} Name The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.
		 *     Min length: 1    Max length: 80
		 * @return {CreateCliTokenResponse} Success
		 */
		CreateCliToken(Name: string): Observable<CreateCliTokenResponse> {
			return this.http.post<CreateCliTokenResponse>(this.baseUri + 'clitoken/' + (Name == null ? '' : encodeURIComponent(Name)), null, {});
		}

		/**
		 * Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
		 * Put environments/{Name}
		 * @param {string} Name The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.
		 *     Min length: 1    Max length: 80
		 * @return {CreateEnvironmentOutput} Success
		 */
		CreateEnvironment(Name: string, requestBody: CreateEnvironmentPutBody): Observable<CreateEnvironmentOutput> {
			return this.http.put<CreateEnvironmentOutput>(this.baseUri + 'environments/' + (Name == null ? '' : encodeURIComponent(Name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
		 * Delete environments/{Name}
		 * @param {string} Name The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.
		 *     Min length: 1    Max length: 80
		 * @return {DeleteEnvironmentOutput} Success
		 */
		DeleteEnvironment(Name: string): Observable<DeleteEnvironmentOutput> {
			return this.http.delete<DeleteEnvironmentOutput>(this.baseUri + 'environments/' + (Name == null ? '' : encodeURIComponent(Name)), {});
		}

		/**
		 * Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
		 * Get environments/{Name}
		 * @param {string} Name The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.
		 *     Min length: 1    Max length: 80
		 * @return {GetEnvironmentOutput} Success
		 */
		GetEnvironment(Name: string): Observable<GetEnvironmentOutput> {
			return this.http.get<GetEnvironmentOutput>(this.baseUri + 'environments/' + (Name == null ? '' : encodeURIComponent(Name)), {});
		}

		/**
		 * Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
		 * Patch environments/{Name}
		 * @param {string} Name The name of your Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.
		 *     Min length: 1    Max length: 80
		 * @return {UpdateEnvironmentOutput} Success
		 */
		UpdateEnvironment(Name: string, requestBody: UpdateEnvironmentPatchBody): Observable<UpdateEnvironmentOutput> {
			return this.http.patch<UpdateEnvironmentOutput>(this.baseUri + 'environments/' + (Name == null ? '' : encodeURIComponent(Name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a web login token for the Airflow Web UI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-web.html">Creating an Apache Airflow web login token</a>.
		 * Post webtoken/{Name}
		 * @param {string} Name The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.
		 *     Min length: 1    Max length: 80
		 * @return {CreateWebLoginTokenResponse} Success
		 */
		CreateWebLoginToken(Name: string): Observable<CreateWebLoginTokenResponse> {
			return this.http.post<CreateWebLoginTokenResponse>(this.baseUri + 'webtoken/' + (Name == null ? '' : encodeURIComponent(Name)), null, {});
		}

		/**
		 * Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.
		 * Get environments
		 * @param {number} MaxResults The maximum number of results to retrieve per page. For example, <code>5</code> environments per page.
		 *     Minimum: 1    Maximum: 25
		 * @param {string} NextToken Retrieves the next page of the results.
		 *     Min length: 0    Max length: 2048
		 * @return {ListEnvironmentsOutput} Success
		 */
		ListEnvironments(MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListEnvironmentsOutput> {
			return this.http.get<ListEnvironmentsOutput>(this.baseUri + 'environments?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the key-value tag pairs associated to the Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.
		 *     Min length: 1    Max length: 1224
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceOutput> {
			return this.http.get<ListTagsForResourceOutput>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Associates key-value tag pairs to your Amazon Managed Workflows for Apache Airflow (MWAA) environment.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.
		 *     Min length: 1    Max length: 1224
		 * @return {TagResourceOutput} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <b>Internal only</b>. Publishes environment health metrics to Amazon CloudWatch.
		 * Post metrics/environments/{EnvironmentName}
		 * @param {string} EnvironmentName  <b>Internal only</b>. The name of the environment.
		 *     Min length: 1    Max length: 80
		 * @return {PublishMetricsOutput} Success
		 */
		PublishMetrics(EnvironmentName: string, requestBody: PublishMetricsPostBody): Observable<PublishMetricsOutput> {
			return this.http.post<PublishMetricsOutput>(this.baseUri + 'metrics/environments/' + (EnvironmentName == null ? '' : encodeURIComponent(EnvironmentName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes key-value tag pairs associated to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.
		 *     Min length: 1    Max length: 1224
		 * @param {Array<string>} tagKeys The key-value tag pair you want to remove. For example, <code>"Environment": "Staging"</code>. 
		 *     Minimum items: 0    Maximum items: 50
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<UntagResourceOutput> {
			return this.http.delete<UntagResourceOutput>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateEnvironmentPutBody {

		/** A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>. */
		AirflowConfigurationOptions?: {[id: string]: string };

		/**
		 * The Apache Airflow version for your environment. If no value is specified, it defaults to the latest version. Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>, <code>2.4.3</code>, and <code>2.5.1</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/airflow-versions.html">Apache Airflow versions on Amazon Managed Workflows for Apache Airflow (MWAA)</a>.
		 * Min length: 1
		 * Max length: 32
		 */
		AirflowVersion?: string | null;

		/**
		 * The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		DagS3Path: string;

		/**
		 * The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		EnvironmentClass?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the execution role for your environment. An execution role is an Amazon Web Services Identity and Access Management (IAM) role that grants MWAA permission to access Amazon Web Services services and resources used by your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		ExecutionRoleArn: string;

		/**
		 * The Amazon Web Services Key Management Service (KMS) key to encrypt the data in your environment. You can use an Amazon Web Services owned CMK, or a Customer managed CMK (advanced). For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/create-environment.html">Create an Amazon MWAA environment</a>.
		 * Min length: 1
		 * Max length: 1224
		 */
		KmsKey?: string | null;

		/** Defines the Apache Airflow log types to send to CloudWatch Logs. */
		LoggingConfiguration?: CreateEnvironmentPutBodyLoggingConfiguration;

		/**
		 * The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.
		 * Minimum: 1
		 */
		MaxWorkers?: number | null;

		/**
		 * The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.
		 * Minimum: 1
		 */
		MinWorkers?: number | null;

		/**
		 * Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.
		 * Required
		 */
		NetworkConfiguration: CreateEnvironmentPutBodyNetworkConfiguration;

		/**
		 * The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a plugins.zip file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		PluginsS3ObjectVersion?: string | null;

		/**
		 * The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the <code>plugins.zip</code> version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		PluginsS3Path?: string | null;

		/**
		 * The version of the <code>requirements.txt</code> file on your Amazon S3 bucket. You must specify a version each time a requirements.txt file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		RequirementsS3ObjectVersion?: string | null;

		/**
		 * The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		RequirementsS3Path?: string | null;

		/**
		 * <p>The number of Apache Airflow schedulers to run in your environment. Valid values:</p> <ul> <li> <p>v2 - Accepts between 2 to 5. Defaults to 2.</p> </li> <li> <p>v1 - Accepts 1.</p> </li> </ul>
		 * Maximum: 5
		 */
		Schedulers?: number | null;

		/**
		 * The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		SourceBucketArn: string;

		/**
		 * <p>The version of the startup shell script in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file every time you update the script. </p> <p> Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example: </p> <p> <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code> </p> <p> For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>
		 * Min length: 1
		 * Max length: 1024
		 */
		StartupScriptS3ObjectVersion?: string | null;

		/**
		 * <p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p> <p> Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>
		 * Min length: 1
		 * Max length: 1024
		 */
		StartupScriptS3Path?: string | null;

		/** The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>. */
		Tags?: {[id: string]: string };

		/** The Apache Airflow <i>Web server</i> access mode. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>. */
		WebserverAccessMode?: WebserverAccessMode | null;

		/**
		 * The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.
		 * Min length: 1
		 * Max length: 9
		 */
		WeeklyMaintenanceWindowStart?: string | null;
	}
	export interface CreateEnvironmentPutBodyFormProperties {

		/** A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>. */
		AirflowConfigurationOptions: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The Apache Airflow version for your environment. If no value is specified, it defaults to the latest version. Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>, <code>2.4.3</code>, and <code>2.5.1</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/airflow-versions.html">Apache Airflow versions on Amazon Managed Workflows for Apache Airflow (MWAA)</a>.
		 * Min length: 1
		 * Max length: 32
		 */
		AirflowVersion: FormControl<string | null | undefined>,

		/**
		 * The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		DagS3Path: FormControl<string | null | undefined>,

		/**
		 * The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		EnvironmentClass: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the execution role for your environment. An execution role is an Amazon Web Services Identity and Access Management (IAM) role that grants MWAA permission to access Amazon Web Services services and resources used by your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/**
		 * The Amazon Web Services Key Management Service (KMS) key to encrypt the data in your environment. You can use an Amazon Web Services owned CMK, or a Customer managed CMK (advanced). For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/create-environment.html">Create an Amazon MWAA environment</a>.
		 * Min length: 1
		 * Max length: 1224
		 */
		KmsKey: FormControl<string | null | undefined>,

		/**
		 * The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.
		 * Minimum: 1
		 */
		MaxWorkers: FormControl<number | null | undefined>,

		/**
		 * The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.
		 * Minimum: 1
		 */
		MinWorkers: FormControl<number | null | undefined>,

		/**
		 * The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a plugins.zip file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		PluginsS3ObjectVersion: FormControl<string | null | undefined>,

		/**
		 * The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the <code>plugins.zip</code> version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		PluginsS3Path: FormControl<string | null | undefined>,

		/**
		 * The version of the <code>requirements.txt</code> file on your Amazon S3 bucket. You must specify a version each time a requirements.txt file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		RequirementsS3ObjectVersion: FormControl<string | null | undefined>,

		/**
		 * The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		RequirementsS3Path: FormControl<string | null | undefined>,

		/**
		 * <p>The number of Apache Airflow schedulers to run in your environment. Valid values:</p> <ul> <li> <p>v2 - Accepts between 2 to 5. Defaults to 2.</p> </li> <li> <p>v1 - Accepts 1.</p> </li> </ul>
		 * Maximum: 5
		 */
		Schedulers: FormControl<number | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		SourceBucketArn: FormControl<string | null | undefined>,

		/**
		 * <p>The version of the startup shell script in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file every time you update the script. </p> <p> Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example: </p> <p> <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code> </p> <p> For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>
		 * Min length: 1
		 * Max length: 1024
		 */
		StartupScriptS3ObjectVersion: FormControl<string | null | undefined>,

		/**
		 * <p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p> <p> Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>
		 * Min length: 1
		 * Max length: 1024
		 */
		StartupScriptS3Path: FormControl<string | null | undefined>,

		/** The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The Apache Airflow <i>Web server</i> access mode. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>. */
		WebserverAccessMode: FormControl<WebserverAccessMode | null | undefined>,

		/**
		 * The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.
		 * Min length: 1
		 * Max length: 9
		 */
		WeeklyMaintenanceWindowStart: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentPutBodyFormGroup() {
		return new FormGroup<CreateEnvironmentPutBodyFormProperties>({
			AirflowConfigurationOptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			AirflowVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32), Validators.pattern('^[0-9a-z.]+$')]),
			DagS3Path: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('.*')]),
			EnvironmentClass: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('^arn:aws(-[a-z]+)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			KmsKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('^(((arn:aws(-[a-z]+)?:kms:[a-z]{2}-[a-z]+-\d:\d+:)?key\/)?[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}|(arn:aws(-[a-z]+)?:kms:[a-z]{2}-[a-z]+-\d:\d+:)?alias/.+)$')]),
			MaxWorkers: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MinWorkers: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			PluginsS3ObjectVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			PluginsS3Path: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('.*')]),
			RequirementsS3ObjectVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			RequirementsS3Path: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('.*')]),
			Schedulers: new FormControl<number | null | undefined>(undefined, [Validators.max(5)]),
			SourceBucketArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('^arn:aws(-[a-z]+)?:s3:::[a-z0-9.\-]+$')]),
			StartupScriptS3ObjectVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			StartupScriptS3Path: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('.*')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			WebserverAccessMode: new FormControl<WebserverAccessMode | null | undefined>(undefined),
			WeeklyMaintenanceWindowStart: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(9), Validators.pattern('(MON|TUE|WED|THU|FRI|SAT|SUN):([01]\d|2[0-3]):(00|30)')]),
		});

	}

	export interface CreateEnvironmentPutBodyLoggingConfiguration {
		DagProcessingLogs?: ModuleLoggingConfigurationInput;
		SchedulerLogs?: ModuleLoggingConfigurationInput;
		TaskLogs?: ModuleLoggingConfigurationInput;
		WebserverLogs?: ModuleLoggingConfigurationInput;
		WorkerLogs?: ModuleLoggingConfigurationInput;
	}
	export interface CreateEnvironmentPutBodyLoggingConfigurationFormProperties {
	}
	export function CreateCreateEnvironmentPutBodyLoggingConfigurationFormGroup() {
		return new FormGroup<CreateEnvironmentPutBodyLoggingConfigurationFormProperties>({
		});

	}

	export interface CreateEnvironmentPutBodyNetworkConfiguration {
		SecurityGroupIds?: Array<string>;
		SubnetIds?: Array<string>;
	}
	export interface CreateEnvironmentPutBodyNetworkConfigurationFormProperties {
	}
	export function CreateCreateEnvironmentPutBodyNetworkConfigurationFormGroup() {
		return new FormGroup<CreateEnvironmentPutBodyNetworkConfigurationFormProperties>({
		});

	}

	export interface UpdateEnvironmentPatchBody {

		/** A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>. */
		AirflowConfigurationOptions?: {[id: string]: string };

		/**
		 * <p>The Apache Airflow version for your environment. To upgrade your environment, specify a newer version of Apache Airflow supported by Amazon MWAA.</p> <p>Before you upgrade an environment, make sure your requirements, DAGs, plugins, and other resources used in your workflows are compatible with the new Apache Airflow version. For more information about updating your resources, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/upgrading-environment.html">Upgrading an Amazon MWAA environment</a>.</p> <p>Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>, <code>2.4.3</code>, and <code>2.5.1</code>.</p>
		 * Min length: 1
		 * Max length: 32
		 */
		AirflowVersion?: string | null;

		/**
		 * The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		DagS3Path?: string | null;

		/**
		 * The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		EnvironmentClass?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.
		 * Min length: 1
		 * Max length: 1224
		 */
		ExecutionRoleArn?: string | null;

		/** Defines the Apache Airflow log types to send to CloudWatch Logs. */
		LoggingConfiguration?: UpdateEnvironmentPatchBodyLoggingConfiguration;

		/**
		 * The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.
		 * Minimum: 1
		 */
		MaxWorkers?: number | null;

		/**
		 * The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.
		 * Minimum: 1
		 */
		MinWorkers?: number | null;

		/** Defines the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>. */
		NetworkConfiguration?: UpdateEnvironmentPatchBodyNetworkConfiguration;

		/**
		 * The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a <code>plugins.zip</code> file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		PluginsS3ObjectVersion?: string | null;

		/**
		 * The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the plugins.zip version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		PluginsS3Path?: string | null;

		/**
		 * The version of the requirements.txt file on your Amazon S3 bucket. You must specify a version each time a <code>requirements.txt</code> file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		RequirementsS3ObjectVersion?: string | null;

		/**
		 * The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a file version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		RequirementsS3Path?: string | null;

		/**
		 * The number of Apache Airflow schedulers to run in your Amazon MWAA environment.
		 * Maximum: 5
		 */
		Schedulers?: number | null;

		/**
		 * The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.
		 * Min length: 1
		 * Max length: 1224
		 */
		SourceBucketArn?: string | null;

		/**
		 * <p> The version of the startup shell script in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file every time you update the script. </p> <p> Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example: </p> <p> <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code> </p> <p> For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>
		 * Min length: 1
		 * Max length: 1024
		 */
		StartupScriptS3ObjectVersion?: string | null;

		/**
		 * <p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p> <p> Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>
		 * Min length: 1
		 * Max length: 1024
		 */
		StartupScriptS3Path?: string | null;

		/** The Apache Airflow <i>Web server</i> access mode. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>. */
		WebserverAccessMode?: WebserverAccessMode | null;

		/**
		 * The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.
		 * Min length: 1
		 * Max length: 9
		 */
		WeeklyMaintenanceWindowStart?: string | null;
	}
	export interface UpdateEnvironmentPatchBodyFormProperties {

		/** A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>. */
		AirflowConfigurationOptions: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * <p>The Apache Airflow version for your environment. To upgrade your environment, specify a newer version of Apache Airflow supported by Amazon MWAA.</p> <p>Before you upgrade an environment, make sure your requirements, DAGs, plugins, and other resources used in your workflows are compatible with the new Apache Airflow version. For more information about updating your resources, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/upgrading-environment.html">Upgrading an Amazon MWAA environment</a>.</p> <p>Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>, <code>2.4.3</code>, and <code>2.5.1</code>.</p>
		 * Min length: 1
		 * Max length: 32
		 */
		AirflowVersion: FormControl<string | null | undefined>,

		/**
		 * The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		DagS3Path: FormControl<string | null | undefined>,

		/**
		 * The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		EnvironmentClass: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.
		 * Min length: 1
		 * Max length: 1224
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/**
		 * The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.
		 * Minimum: 1
		 */
		MaxWorkers: FormControl<number | null | undefined>,

		/**
		 * The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.
		 * Minimum: 1
		 */
		MinWorkers: FormControl<number | null | undefined>,

		/**
		 * The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a <code>plugins.zip</code> file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		PluginsS3ObjectVersion: FormControl<string | null | undefined>,

		/**
		 * The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the plugins.zip version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		PluginsS3Path: FormControl<string | null | undefined>,

		/**
		 * The version of the requirements.txt file on your Amazon S3 bucket. You must specify a version each time a <code>requirements.txt</code> file is updated. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		RequirementsS3ObjectVersion: FormControl<string | null | undefined>,

		/**
		 * The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a file version is required. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.
		 * Min length: 1
		 * Max length: 1024
		 */
		RequirementsS3Path: FormControl<string | null | undefined>,

		/**
		 * The number of Apache Airflow schedulers to run in your Amazon MWAA environment.
		 * Maximum: 5
		 */
		Schedulers: FormControl<number | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.
		 * Min length: 1
		 * Max length: 1224
		 */
		SourceBucketArn: FormControl<string | null | undefined>,

		/**
		 * <p> The version of the startup shell script in your Amazon S3 bucket. You must specify the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">version ID</a> that Amazon S3 assigns to the file every time you update the script. </p> <p> Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example: </p> <p> <code>3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo</code> </p> <p> For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>
		 * Min length: 1
		 * Max length: 1024
		 */
		StartupScriptS3ObjectVersion: FormControl<string | null | undefined>,

		/**
		 * <p>The relative path to the startup shell script in your Amazon S3 bucket. For example, <code>s3://mwaa-environment/startup.sh</code>.</p> <p> Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html">Using a startup script</a>. </p>
		 * Min length: 1
		 * Max length: 1024
		 */
		StartupScriptS3Path: FormControl<string | null | undefined>,

		/** The Apache Airflow <i>Web server</i> access mode. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>. */
		WebserverAccessMode: FormControl<WebserverAccessMode | null | undefined>,

		/**
		 * The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.
		 * Min length: 1
		 * Max length: 9
		 */
		WeeklyMaintenanceWindowStart: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentPatchBodyFormGroup() {
		return new FormGroup<UpdateEnvironmentPatchBodyFormProperties>({
			AirflowConfigurationOptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			AirflowVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32), Validators.pattern('^[0-9a-z.]+$')]),
			DagS3Path: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('.*')]),
			EnvironmentClass: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('^arn:aws(-[a-z]+)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			MaxWorkers: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MinWorkers: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			PluginsS3ObjectVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			PluginsS3Path: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('.*')]),
			RequirementsS3ObjectVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			RequirementsS3Path: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('.*')]),
			Schedulers: new FormControl<number | null | undefined>(undefined, [Validators.max(5)]),
			SourceBucketArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('^arn:aws(-[a-z]+)?:s3:::[a-z0-9.\-]+$')]),
			StartupScriptS3ObjectVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			StartupScriptS3Path: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('.*')]),
			WebserverAccessMode: new FormControl<WebserverAccessMode | null | undefined>(undefined),
			WeeklyMaintenanceWindowStart: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(9), Validators.pattern('(MON|TUE|WED|THU|FRI|SAT|SUN):([01]\d|2[0-3]):(00|30)')]),
		});

	}

	export interface UpdateEnvironmentPatchBodyLoggingConfiguration {
		DagProcessingLogs?: ModuleLoggingConfigurationInput;
		SchedulerLogs?: ModuleLoggingConfigurationInput;
		TaskLogs?: ModuleLoggingConfigurationInput;
		WebserverLogs?: ModuleLoggingConfigurationInput;
		WorkerLogs?: ModuleLoggingConfigurationInput;
	}
	export interface UpdateEnvironmentPatchBodyLoggingConfigurationFormProperties {
	}
	export function CreateUpdateEnvironmentPatchBodyLoggingConfigurationFormGroup() {
		return new FormGroup<UpdateEnvironmentPatchBodyLoggingConfigurationFormProperties>({
		});

	}

	export interface UpdateEnvironmentPatchBodyNetworkConfiguration {
		SecurityGroupIds?: Array<string>;
	}
	export interface UpdateEnvironmentPatchBodyNetworkConfigurationFormProperties {
	}
	export function CreateUpdateEnvironmentPatchBodyNetworkConfigurationFormGroup() {
		return new FormGroup<UpdateEnvironmentPatchBodyNetworkConfigurationFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PublishMetricsPostBody {

		/**
		 * <b>Internal only</b>. Publishes metrics to Amazon CloudWatch. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.
		 * Required
		 */
		MetricData: Array<MetricDatum>;
	}
	export interface PublishMetricsPostBodyFormProperties {
	}
	export function CreatePublishMetricsPostBodyFormGroup() {
		return new FormGroup<PublishMetricsPostBodyFormProperties>({
		});

	}

}

