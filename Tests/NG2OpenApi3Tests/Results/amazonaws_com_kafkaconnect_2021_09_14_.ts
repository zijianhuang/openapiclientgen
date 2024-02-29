import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateConnectorResponse {
		connectorArn?: string;
		connectorName?: string;
		connectorState?: ConnectorState;
	}
	export interface CreateConnectorResponseFormProperties {
		connectorArn: FormControl<string | null | undefined>,
		connectorName: FormControl<string | null | undefined>,
		connectorState: FormControl<ConnectorState | null | undefined>,
	}
	export function CreateCreateConnectorResponseFormGroup() {
		return new FormGroup<CreateConnectorResponseFormProperties>({
			connectorArn: new FormControl<string | null | undefined>(undefined),
			connectorName: new FormControl<string | null | undefined>(undefined),
			connectorState: new FormControl<ConnectorState | null | undefined>(undefined),
		});

	}

	export enum ConnectorState { RUNNING = 'RUNNING', CREATING = 'CREATING', UPDATING = 'UPDATING', DELETING = 'DELETING', FAILED = 'FAILED' }


	/** Specifies how the connector scales. */
	export interface AutoScaling {

		/** Required */
		maxWorkerCount: number;

		/** Required */
		mcuCount: number;

		/** Required */
		minWorkerCount: number;
		scaleInPolicy?: ScaleInPolicy;
		scaleOutPolicy?: ScaleOutPolicy;
	}

	/** Specifies how the connector scales. */
	export interface AutoScalingFormProperties {

		/** Required */
		maxWorkerCount: FormControl<number | null | undefined>,

		/** Required */
		mcuCount: FormControl<number | null | undefined>,

		/** Required */
		minWorkerCount: FormControl<number | null | undefined>,
	}
	export function CreateAutoScalingFormGroup() {
		return new FormGroup<AutoScalingFormProperties>({
			maxWorkerCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			mcuCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minWorkerCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The scale-in policy for the connector. */
	export interface ScaleInPolicy {

		/** Required */
		cpuUtilizationPercentage: number;
	}

	/** The scale-in policy for the connector. */
	export interface ScaleInPolicyFormProperties {

		/** Required */
		cpuUtilizationPercentage: FormControl<number | null | undefined>,
	}
	export function CreateScaleInPolicyFormGroup() {
		return new FormGroup<ScaleInPolicyFormProperties>({
			cpuUtilizationPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The scale-out policy for the connector. */
	export interface ScaleOutPolicy {

		/** Required */
		cpuUtilizationPercentage: number;
	}

	/** The scale-out policy for the connector. */
	export interface ScaleOutPolicyFormProperties {

		/** Required */
		cpuUtilizationPercentage: FormControl<number | null | undefined>,
	}
	export function CreateScaleOutPolicyFormGroup() {
		return new FormGroup<ScaleOutPolicyFormProperties>({
			cpuUtilizationPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about a connector's provisioned capacity. */
	export interface ProvisionedCapacity {

		/** Required */
		mcuCount: number;

		/** Required */
		workerCount: number;
	}

	/** Details about a connector's provisioned capacity. */
	export interface ProvisionedCapacityFormProperties {

		/** Required */
		mcuCount: FormControl<number | null | undefined>,

		/** Required */
		workerCount: FormControl<number | null | undefined>,
	}
	export function CreateProvisionedCapacityFormGroup() {
		return new FormGroup<ProvisionedCapacityFormProperties>({
			mcuCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			workerCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The details of the Apache Kafka cluster to which the connector is connected. */
	export interface ApacheKafkaCluster {

		/** Required */
		bootstrapServers: string;

		/** Required */
		vpc: Vpc;
	}

	/** The details of the Apache Kafka cluster to which the connector is connected. */
	export interface ApacheKafkaClusterFormProperties {

		/** Required */
		bootstrapServers: FormControl<string | null | undefined>,
	}
	export function CreateApacheKafkaClusterFormGroup() {
		return new FormGroup<ApacheKafkaClusterFormProperties>({
			bootstrapServers: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the VPC in which the connector resides. */
	export interface Vpc {
		securityGroups?: Array<string>;

		/** Required */
		subnets: Array<string>;
	}

	/** Information about the VPC in which the connector resides. */
	export interface VpcFormProperties {
	}
	export function CreateVpcFormGroup() {
		return new FormGroup<VpcFormProperties>({
		});

	}

	export enum KafkaClusterClientAuthenticationType { NONE = 'NONE', IAM = 'IAM' }

	export enum KafkaClusterEncryptionInTransitType { PLAINTEXT = 'PLAINTEXT', TLS = 'TLS' }


	/** Workers can send worker logs to different destination types. This configuration specifies the details of these destinations. */
	export interface WorkerLogDelivery {
		cloudWatchLogs?: CloudWatchLogsLogDelivery;
		firehose?: FirehoseLogDelivery;
		s3?: S3LogDelivery;
	}

	/** Workers can send worker logs to different destination types. This configuration specifies the details of these destinations. */
	export interface WorkerLogDeliveryFormProperties {
	}
	export function CreateWorkerLogDeliveryFormGroup() {
		return new FormGroup<WorkerLogDeliveryFormProperties>({
		});

	}


	/** The settings for delivering connector logs to Amazon CloudWatch Logs. */
	export interface CloudWatchLogsLogDelivery {

		/** Required */
		enabled: boolean;
		logGroup?: string;
	}

	/** The settings for delivering connector logs to Amazon CloudWatch Logs. */
	export interface CloudWatchLogsLogDeliveryFormProperties {

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
		logGroup: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogsLogDeliveryFormGroup() {
		return new FormGroup<CloudWatchLogsLogDeliveryFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			logGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings for delivering logs to Amazon Kinesis Data Firehose. */
	export interface FirehoseLogDelivery {
		deliveryStream?: string;

		/** Required */
		enabled: boolean;
	}

	/** The settings for delivering logs to Amazon Kinesis Data Firehose. */
	export interface FirehoseLogDeliveryFormProperties {
		deliveryStream: FormControl<string | null | undefined>,

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateFirehoseLogDeliveryFormGroup() {
		return new FormGroup<FirehoseLogDeliveryFormProperties>({
			deliveryStream: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about delivering logs to Amazon S3. */
	export interface S3LogDelivery {
		bucket?: string;

		/** Required */
		enabled: boolean;
		prefix?: string;
	}

	/** Details about delivering logs to Amazon S3. */
	export interface S3LogDeliveryFormProperties {
		bucket: FormControl<string | null | undefined>,

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3LogDeliveryFormGroup() {
		return new FormGroup<S3LogDeliveryFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A plugin is an AWS resource that contains the code that defines your connector logic.  */
	export interface Plugin {

		/** Required */
		customPlugin: CustomPlugin;
	}

	/** A plugin is an AWS resource that contains the code that defines your connector logic.  */
	export interface PluginFormProperties {
	}
	export function CreatePluginFormGroup() {
		return new FormGroup<PluginFormProperties>({
		});

	}


	/** A plugin is an AWS resource that contains the code that defines a connector's logic. */
	export interface CustomPlugin {

		/** Required */
		customPluginArn: string;

		/** Required */
		revision: number;
	}

	/** A plugin is an AWS resource that contains the code that defines a connector's logic. */
	export interface CustomPluginFormProperties {

		/** Required */
		customPluginArn: FormControl<string | null | undefined>,

		/** Required */
		revision: FormControl<number | null | undefined>,
	}
	export function CreateCustomPluginFormGroup() {
		return new FormGroup<CustomPluginFormProperties>({
			customPluginArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revision: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
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

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
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

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
		});

	}

	export interface InternalServerErrorException {
	}
	export interface InternalServerErrorExceptionFormProperties {
	}
	export function CreateInternalServerErrorExceptionFormGroup() {
		return new FormGroup<InternalServerErrorExceptionFormProperties>({
		});

	}

	export interface CreateCustomPluginResponse {
		customPluginArn?: string;
		customPluginState?: CustomPluginState;
		name?: string;
		revision?: number | null;
	}
	export interface CreateCustomPluginResponseFormProperties {
		customPluginArn: FormControl<string | null | undefined>,
		customPluginState: FormControl<CustomPluginState | null | undefined>,
		name: FormControl<string | null | undefined>,
		revision: FormControl<number | null | undefined>,
	}
	export function CreateCreateCustomPluginResponseFormGroup() {
		return new FormGroup<CreateCustomPluginResponseFormProperties>({
			customPluginArn: new FormControl<string | null | undefined>(undefined),
			customPluginState: new FormControl<CustomPluginState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CustomPluginState { CREATING = 'CREATING', CREATE_FAILED = 'CREATE_FAILED', ACTIVE = 'ACTIVE', UPDATING = 'UPDATING', UPDATE_FAILED = 'UPDATE_FAILED', DELETING = 'DELETING' }


	/** The location of an object in Amazon S3. */
	export interface S3Location {

		/** Required */
		bucketArn: string;

		/** Required */
		fileKey: string;
		objectVersion?: string;
	}

	/** The location of an object in Amazon S3. */
	export interface S3LocationFormProperties {

		/** Required */
		bucketArn: FormControl<string | null | undefined>,

		/** Required */
		fileKey: FormControl<string | null | undefined>,
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			bucketArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fileKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWorkerConfigurationResponse {
		creationTime?: Date;
		latestRevision?: WorkerConfigurationRevisionSummary;
		name?: string;
		workerConfigurationArn?: string;
	}
	export interface CreateWorkerConfigurationResponseFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		workerConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkerConfigurationResponseFormGroup() {
		return new FormGroup<CreateWorkerConfigurationResponseFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			workerConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of a worker configuration revision. */
	export interface WorkerConfigurationRevisionSummary {
		creationTime?: Date;
		description?: string;
		revision?: number | null;
	}

	/** The summary of a worker configuration revision. */
	export interface WorkerConfigurationRevisionSummaryFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		revision: FormControl<number | null | undefined>,
	}
	export function CreateWorkerConfigurationRevisionSummaryFormGroup() {
		return new FormGroup<WorkerConfigurationRevisionSummaryFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteConnectorResponse {
		connectorArn?: string;
		connectorState?: ConnectorState;
	}
	export interface DeleteConnectorResponseFormProperties {
		connectorArn: FormControl<string | null | undefined>,
		connectorState: FormControl<ConnectorState | null | undefined>,
	}
	export function CreateDeleteConnectorResponseFormGroup() {
		return new FormGroup<DeleteConnectorResponseFormProperties>({
			connectorArn: new FormControl<string | null | undefined>(undefined),
			connectorState: new FormControl<ConnectorState | null | undefined>(undefined),
		});

	}

	export interface DeleteCustomPluginResponse {
		customPluginArn?: string;
		customPluginState?: CustomPluginState;
	}
	export interface DeleteCustomPluginResponseFormProperties {
		customPluginArn: FormControl<string | null | undefined>,
		customPluginState: FormControl<CustomPluginState | null | undefined>,
	}
	export function CreateDeleteCustomPluginResponseFormGroup() {
		return new FormGroup<DeleteCustomPluginResponseFormProperties>({
			customPluginArn: new FormControl<string | null | undefined>(undefined),
			customPluginState: new FormControl<CustomPluginState | null | undefined>(undefined),
		});

	}

	export interface DescribeConnectorResponse {
		capacity?: CapacityDescription;
		connectorArn?: string;
		connectorConfiguration?: SyntheticDescribeConnectorResponse__mapOf__string;
		connectorDescription?: string;
		connectorName?: string;
		connectorState?: ConnectorState;
		creationTime?: Date;
		currentVersion?: string;
		kafkaCluster?: KafkaClusterDescription;
		kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;
		kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;
		kafkaConnectVersion?: string;
		logDelivery?: LogDeliveryDescription;
		plugins?: Array<PluginDescription>;
		serviceExecutionRoleArn?: string;
		stateDescription?: StateDescription;
		workerConfiguration?: WorkerConfigurationDescription;
	}
	export interface DescribeConnectorResponseFormProperties {
		connectorArn: FormControl<string | null | undefined>,
		connectorDescription: FormControl<string | null | undefined>,
		connectorName: FormControl<string | null | undefined>,
		connectorState: FormControl<ConnectorState | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		currentVersion: FormControl<string | null | undefined>,
		kafkaConnectVersion: FormControl<string | null | undefined>,
		serviceExecutionRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectorResponseFormGroup() {
		return new FormGroup<DescribeConnectorResponseFormProperties>({
			connectorArn: new FormControl<string | null | undefined>(undefined),
			connectorDescription: new FormControl<string | null | undefined>(undefined),
			connectorName: new FormControl<string | null | undefined>(undefined),
			connectorState: new FormControl<ConnectorState | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			currentVersion: new FormControl<string | null | undefined>(undefined),
			kafkaConnectVersion: new FormControl<string | null | undefined>(undefined),
			serviceExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of the connector's capacity. */
	export interface CapacityDescription {
		autoScaling?: AutoScalingDescription;
		provisionedCapacity?: ProvisionedCapacityDescription;
	}

	/** A description of the connector's capacity. */
	export interface CapacityDescriptionFormProperties {
	}
	export function CreateCapacityDescriptionFormGroup() {
		return new FormGroup<CapacityDescriptionFormProperties>({
		});

	}


	/** Information about the auto scaling parameters for the connector. */
	export interface AutoScalingDescription {
		maxWorkerCount?: number | null;
		mcuCount?: number | null;
		minWorkerCount?: number | null;
		scaleInPolicy?: ScaleInPolicyDescription;
		scaleOutPolicy?: ScaleOutPolicyDescription;
	}

	/** Information about the auto scaling parameters for the connector. */
	export interface AutoScalingDescriptionFormProperties {
		maxWorkerCount: FormControl<number | null | undefined>,
		mcuCount: FormControl<number | null | undefined>,
		minWorkerCount: FormControl<number | null | undefined>,
	}
	export function CreateAutoScalingDescriptionFormGroup() {
		return new FormGroup<AutoScalingDescriptionFormProperties>({
			maxWorkerCount: new FormControl<number | null | undefined>(undefined),
			mcuCount: new FormControl<number | null | undefined>(undefined),
			minWorkerCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The description of the scale-in policy for the connector. */
	export interface ScaleInPolicyDescription {
		cpuUtilizationPercentage?: number | null;
	}

	/** The description of the scale-in policy for the connector. */
	export interface ScaleInPolicyDescriptionFormProperties {
		cpuUtilizationPercentage: FormControl<number | null | undefined>,
	}
	export function CreateScaleInPolicyDescriptionFormGroup() {
		return new FormGroup<ScaleInPolicyDescriptionFormProperties>({
			cpuUtilizationPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The description of the scale-out policy for the connector. */
	export interface ScaleOutPolicyDescription {
		cpuUtilizationPercentage?: number | null;
	}

	/** The description of the scale-out policy for the connector. */
	export interface ScaleOutPolicyDescriptionFormProperties {
		cpuUtilizationPercentage: FormControl<number | null | undefined>,
	}
	export function CreateScaleOutPolicyDescriptionFormGroup() {
		return new FormGroup<ScaleOutPolicyDescriptionFormProperties>({
			cpuUtilizationPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The description of a connector's provisioned capacity. */
	export interface ProvisionedCapacityDescription {
		mcuCount?: number | null;
		workerCount?: number | null;
	}

	/** The description of a connector's provisioned capacity. */
	export interface ProvisionedCapacityDescriptionFormProperties {
		mcuCount: FormControl<number | null | undefined>,
		workerCount: FormControl<number | null | undefined>,
	}
	export function CreateProvisionedCapacityDescriptionFormGroup() {
		return new FormGroup<ProvisionedCapacityDescriptionFormProperties>({
			mcuCount: new FormControl<number | null | undefined>(undefined),
			workerCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyntheticDescribeConnectorResponse__mapOf__string {
	}
	export interface SyntheticDescribeConnectorResponse__mapOf__stringFormProperties {
	}
	export function CreateSyntheticDescribeConnectorResponse__mapOf__stringFormGroup() {
		return new FormGroup<SyntheticDescribeConnectorResponse__mapOf__stringFormProperties>({
		});

	}


	/** Details of how to connect to the Apache Kafka cluster. */
	export interface KafkaClusterDescription {
		apacheKafkaCluster?: ApacheKafkaClusterDescription;
	}

	/** Details of how to connect to the Apache Kafka cluster. */
	export interface KafkaClusterDescriptionFormProperties {
	}
	export function CreateKafkaClusterDescriptionFormGroup() {
		return new FormGroup<KafkaClusterDescriptionFormProperties>({
		});

	}


	/** The description of the Apache Kafka cluster to which the connector is connected. */
	export interface ApacheKafkaClusterDescription {
		bootstrapServers?: string;
		vpc?: VpcDescription;
	}

	/** The description of the Apache Kafka cluster to which the connector is connected. */
	export interface ApacheKafkaClusterDescriptionFormProperties {
		bootstrapServers: FormControl<string | null | undefined>,
	}
	export function CreateApacheKafkaClusterDescriptionFormGroup() {
		return new FormGroup<ApacheKafkaClusterDescriptionFormProperties>({
			bootstrapServers: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of the VPC in which the connector resides. */
	export interface VpcDescription {
		securityGroups?: Array<string>;
		subnets?: Array<string>;
	}

	/** The description of the VPC in which the connector resides. */
	export interface VpcDescriptionFormProperties {
	}
	export function CreateVpcDescriptionFormGroup() {
		return new FormGroup<VpcDescriptionFormProperties>({
		});

	}


	/** The client authentication information used in order to authenticate with the Apache Kafka cluster. */
	export interface KafkaClusterClientAuthenticationDescription {
		authenticationType?: KafkaClusterClientAuthenticationType;
	}

	/** The client authentication information used in order to authenticate with the Apache Kafka cluster. */
	export interface KafkaClusterClientAuthenticationDescriptionFormProperties {
		authenticationType: FormControl<KafkaClusterClientAuthenticationType | null | undefined>,
	}
	export function CreateKafkaClusterClientAuthenticationDescriptionFormGroup() {
		return new FormGroup<KafkaClusterClientAuthenticationDescriptionFormProperties>({
			authenticationType: new FormControl<KafkaClusterClientAuthenticationType | null | undefined>(undefined),
		});

	}


	/** The description of the encryption in transit to the Apache Kafka cluster. */
	export interface KafkaClusterEncryptionInTransitDescription {
		encryptionType?: KafkaClusterEncryptionInTransitType;
	}

	/** The description of the encryption in transit to the Apache Kafka cluster. */
	export interface KafkaClusterEncryptionInTransitDescriptionFormProperties {
		encryptionType: FormControl<KafkaClusterEncryptionInTransitType | null | undefined>,
	}
	export function CreateKafkaClusterEncryptionInTransitDescriptionFormGroup() {
		return new FormGroup<KafkaClusterEncryptionInTransitDescriptionFormProperties>({
			encryptionType: new FormControl<KafkaClusterEncryptionInTransitType | null | undefined>(undefined),
		});

	}


	/** The description of the log delivery settings. */
	export interface LogDeliveryDescription {
		workerLogDelivery?: WorkerLogDeliveryDescription;
	}

	/** The description of the log delivery settings. */
	export interface LogDeliveryDescriptionFormProperties {
	}
	export function CreateLogDeliveryDescriptionFormGroup() {
		return new FormGroup<LogDeliveryDescriptionFormProperties>({
		});

	}


	/** Workers can send worker logs to different destination types. This configuration specifies the details of these destinations. */
	export interface WorkerLogDeliveryDescription {
		cloudWatchLogs?: CloudWatchLogsLogDeliveryDescription;
		firehose?: FirehoseLogDeliveryDescription;
		s3?: S3LogDeliveryDescription;
	}

	/** Workers can send worker logs to different destination types. This configuration specifies the details of these destinations. */
	export interface WorkerLogDeliveryDescriptionFormProperties {
	}
	export function CreateWorkerLogDeliveryDescriptionFormGroup() {
		return new FormGroup<WorkerLogDeliveryDescriptionFormProperties>({
		});

	}


	/** A description of the log delivery settings. */
	export interface CloudWatchLogsLogDeliveryDescription {
		enabled?: boolean | null;
		logGroup?: string;
	}

	/** A description of the log delivery settings. */
	export interface CloudWatchLogsLogDeliveryDescriptionFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		logGroup: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogsLogDeliveryDescriptionFormGroup() {
		return new FormGroup<CloudWatchLogsLogDeliveryDescriptionFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			logGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of the settings for delivering logs to Amazon Kinesis Data Firehose. */
	export interface FirehoseLogDeliveryDescription {
		deliveryStream?: string;
		enabled?: boolean | null;
	}

	/** A description of the settings for delivering logs to Amazon Kinesis Data Firehose. */
	export interface FirehoseLogDeliveryDescriptionFormProperties {
		deliveryStream: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateFirehoseLogDeliveryDescriptionFormGroup() {
		return new FormGroup<FirehoseLogDeliveryDescriptionFormProperties>({
			deliveryStream: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The description of the details about delivering logs to Amazon S3. */
	export interface S3LogDeliveryDescription {
		bucket?: string;
		enabled?: boolean | null;
		prefix?: string;
	}

	/** The description of the details about delivering logs to Amazon S3. */
	export interface S3LogDeliveryDescriptionFormProperties {
		bucket: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3LogDeliveryDescriptionFormGroup() {
		return new FormGroup<S3LogDeliveryDescriptionFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of the plugin. */
	export interface PluginDescription {
		customPlugin?: CustomPluginDescription;
	}

	/** The description of the plugin. */
	export interface PluginDescriptionFormProperties {
	}
	export function CreatePluginDescriptionFormGroup() {
		return new FormGroup<PluginDescriptionFormProperties>({
		});

	}


	/** Details about a custom plugin. */
	export interface CustomPluginDescription {
		customPluginArn?: string;
		revision?: number | null;
	}

	/** Details about a custom plugin. */
	export interface CustomPluginDescriptionFormProperties {
		customPluginArn: FormControl<string | null | undefined>,
		revision: FormControl<number | null | undefined>,
	}
	export function CreateCustomPluginDescriptionFormGroup() {
		return new FormGroup<CustomPluginDescriptionFormProperties>({
			customPluginArn: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details about the state of a resource. */
	export interface StateDescription {
		code?: string;
		message?: string;
	}

	/** Details about the state of a resource. */
	export interface StateDescriptionFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateStateDescriptionFormGroup() {
		return new FormGroup<StateDescriptionFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of the worker configuration. */
	export interface WorkerConfigurationDescription {
		revision?: number | null;
		workerConfigurationArn?: string;
	}

	/** The description of the worker configuration. */
	export interface WorkerConfigurationDescriptionFormProperties {
		revision: FormControl<number | null | undefined>,
		workerConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateWorkerConfigurationDescriptionFormGroup() {
		return new FormGroup<WorkerConfigurationDescriptionFormProperties>({
			revision: new FormControl<number | null | undefined>(undefined),
			workerConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCustomPluginResponse {
		creationTime?: Date;
		customPluginArn?: string;
		customPluginState?: CustomPluginState;
		description?: string;
		latestRevision?: CustomPluginRevisionSummary;
		name?: string;
		stateDescription?: StateDescription;
	}
	export interface DescribeCustomPluginResponseFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		customPluginArn: FormControl<string | null | undefined>,
		customPluginState: FormControl<CustomPluginState | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCustomPluginResponseFormGroup() {
		return new FormGroup<DescribeCustomPluginResponseFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			customPluginArn: new FormControl<string | null | undefined>(undefined),
			customPluginState: new FormControl<CustomPluginState | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the revision of a custom plugin. */
	export interface CustomPluginRevisionSummary {
		contentType?: CustomPluginContentType;
		creationTime?: Date;
		description?: string;
		fileDescription?: CustomPluginFileDescription;
		location?: CustomPluginLocationDescription;
		revision?: number | null;
	}

	/** Details about the revision of a custom plugin. */
	export interface CustomPluginRevisionSummaryFormProperties {
		contentType: FormControl<CustomPluginContentType | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		revision: FormControl<number | null | undefined>,
	}
	export function CreateCustomPluginRevisionSummaryFormGroup() {
		return new FormGroup<CustomPluginRevisionSummaryFormProperties>({
			contentType: new FormControl<CustomPluginContentType | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CustomPluginContentType { JAR = 'JAR', ZIP = 'ZIP' }


	/** Details about a custom plugin file. */
	export interface CustomPluginFileDescription {
		fileMd5?: string;
		fileSize?: number | null;
	}

	/** Details about a custom plugin file. */
	export interface CustomPluginFileDescriptionFormProperties {
		fileMd5: FormControl<string | null | undefined>,
		fileSize: FormControl<number | null | undefined>,
	}
	export function CreateCustomPluginFileDescriptionFormGroup() {
		return new FormGroup<CustomPluginFileDescriptionFormProperties>({
			fileMd5: new FormControl<string | null | undefined>(undefined),
			fileSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the location of a custom plugin. */
	export interface CustomPluginLocationDescription {
		s3Location?: S3LocationDescription;
	}

	/** Information about the location of a custom plugin. */
	export interface CustomPluginLocationDescriptionFormProperties {
	}
	export function CreateCustomPluginLocationDescriptionFormGroup() {
		return new FormGroup<CustomPluginLocationDescriptionFormProperties>({
		});

	}


	/** The description of the location of an object in Amazon S3. */
	export interface S3LocationDescription {
		bucketArn?: string;
		fileKey?: string;
		objectVersion?: string;
	}

	/** The description of the location of an object in Amazon S3. */
	export interface S3LocationDescriptionFormProperties {
		bucketArn: FormControl<string | null | undefined>,
		fileKey: FormControl<string | null | undefined>,
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationDescriptionFormGroup() {
		return new FormGroup<S3LocationDescriptionFormProperties>({
			bucketArn: new FormControl<string | null | undefined>(undefined),
			fileKey: new FormControl<string | null | undefined>(undefined),
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkerConfigurationResponse {
		creationTime?: Date;
		description?: string;
		latestRevision?: WorkerConfigurationRevisionDescription;
		name?: string;
		workerConfigurationArn?: string;
	}
	export interface DescribeWorkerConfigurationResponseFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		workerConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkerConfigurationResponseFormGroup() {
		return new FormGroup<DescribeWorkerConfigurationResponseFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			workerConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of the worker configuration revision. */
	export interface WorkerConfigurationRevisionDescription {
		creationTime?: Date;
		description?: string;
		propertiesFileContent?: string;
		revision?: number | null;
	}

	/** The description of the worker configuration revision. */
	export interface WorkerConfigurationRevisionDescriptionFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		propertiesFileContent: FormControl<string | null | undefined>,
		revision: FormControl<number | null | undefined>,
	}
	export function CreateWorkerConfigurationRevisionDescriptionFormGroup() {
		return new FormGroup<WorkerConfigurationRevisionDescriptionFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			propertiesFileContent: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListConnectorsResponse {
		connectors?: Array<ConnectorSummary>;
		nextToken?: string;
	}
	export interface ListConnectorsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectorsResponseFormGroup() {
		return new FormGroup<ListConnectorsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of a connector. */
	export interface ConnectorSummary {
		capacity?: CapacityDescription;
		connectorArn?: string;
		connectorDescription?: string;
		connectorName?: string;
		connectorState?: ConnectorState;
		creationTime?: Date;
		currentVersion?: string;
		kafkaCluster?: KafkaClusterDescription;
		kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;
		kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;
		kafkaConnectVersion?: string;
		logDelivery?: LogDeliveryDescription;
		plugins?: Array<PluginDescription>;
		serviceExecutionRoleArn?: string;
		workerConfiguration?: WorkerConfigurationDescription;
	}

	/** Summary of a connector. */
	export interface ConnectorSummaryFormProperties {
		connectorArn: FormControl<string | null | undefined>,
		connectorDescription: FormControl<string | null | undefined>,
		connectorName: FormControl<string | null | undefined>,
		connectorState: FormControl<ConnectorState | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		currentVersion: FormControl<string | null | undefined>,
		kafkaConnectVersion: FormControl<string | null | undefined>,
		serviceExecutionRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateConnectorSummaryFormGroup() {
		return new FormGroup<ConnectorSummaryFormProperties>({
			connectorArn: new FormControl<string | null | undefined>(undefined),
			connectorDescription: new FormControl<string | null | undefined>(undefined),
			connectorName: new FormControl<string | null | undefined>(undefined),
			connectorState: new FormControl<ConnectorState | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			currentVersion: new FormControl<string | null | undefined>(undefined),
			kafkaConnectVersion: new FormControl<string | null | undefined>(undefined),
			serviceExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomPluginsResponse {
		customPlugins?: Array<CustomPluginSummary>;
		nextToken?: string;
	}
	export interface ListCustomPluginsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomPluginsResponseFormGroup() {
		return new FormGroup<ListCustomPluginsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of the custom plugin. */
	export interface CustomPluginSummary {
		creationTime?: Date;
		customPluginArn?: string;
		customPluginState?: CustomPluginState;
		description?: string;
		latestRevision?: CustomPluginRevisionSummary;
		name?: string;
	}

	/** A summary of the custom plugin. */
	export interface CustomPluginSummaryFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		customPluginArn: FormControl<string | null | undefined>,
		customPluginState: FormControl<CustomPluginState | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomPluginSummaryFormGroup() {
		return new FormGroup<CustomPluginSummaryFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			customPluginArn: new FormControl<string | null | undefined>(undefined),
			customPluginState: new FormControl<CustomPluginState | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWorkerConfigurationsResponse {
		nextToken?: string;
		workerConfigurations?: Array<WorkerConfigurationSummary>;
	}
	export interface ListWorkerConfigurationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkerConfigurationsResponseFormGroup() {
		return new FormGroup<ListWorkerConfigurationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of a worker configuration. */
	export interface WorkerConfigurationSummary {
		creationTime?: Date;
		description?: string;
		latestRevision?: WorkerConfigurationRevisionSummary;
		name?: string;
		workerConfigurationArn?: string;
	}

	/** The summary of a worker configuration. */
	export interface WorkerConfigurationSummaryFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		workerConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateWorkerConfigurationSummaryFormGroup() {
		return new FormGroup<WorkerConfigurationSummaryFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			workerConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConnectorResponse {
		connectorArn?: string;
		connectorState?: ConnectorState;
	}
	export interface UpdateConnectorResponseFormProperties {
		connectorArn: FormControl<string | null | undefined>,
		connectorState: FormControl<ConnectorState | null | undefined>,
	}
	export function CreateUpdateConnectorResponseFormGroup() {
		return new FormGroup<UpdateConnectorResponseFormProperties>({
			connectorArn: new FormControl<string | null | undefined>(undefined),
			connectorState: new FormControl<ConnectorState | null | undefined>(undefined),
		});

	}


	/** The updates to the auto scaling parameters for the connector. */
	export interface AutoScalingUpdate {

		/** Required */
		maxWorkerCount: number;

		/** Required */
		mcuCount: number;

		/** Required */
		minWorkerCount: number;

		/** Required */
		scaleInPolicy: ScaleInPolicyUpdate;

		/** Required */
		scaleOutPolicy: ScaleOutPolicyUpdate;
	}

	/** The updates to the auto scaling parameters for the connector. */
	export interface AutoScalingUpdateFormProperties {

		/** Required */
		maxWorkerCount: FormControl<number | null | undefined>,

		/** Required */
		mcuCount: FormControl<number | null | undefined>,

		/** Required */
		minWorkerCount: FormControl<number | null | undefined>,
	}
	export function CreateAutoScalingUpdateFormGroup() {
		return new FormGroup<AutoScalingUpdateFormProperties>({
			maxWorkerCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			mcuCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minWorkerCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An update to the connector's scale-in policy. */
	export interface ScaleInPolicyUpdate {

		/** Required */
		cpuUtilizationPercentage: number;
	}

	/** An update to the connector's scale-in policy. */
	export interface ScaleInPolicyUpdateFormProperties {

		/** Required */
		cpuUtilizationPercentage: FormControl<number | null | undefined>,
	}
	export function CreateScaleInPolicyUpdateFormGroup() {
		return new FormGroup<ScaleInPolicyUpdateFormProperties>({
			cpuUtilizationPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An update to the connector's scale-out policy. */
	export interface ScaleOutPolicyUpdate {

		/** Required */
		cpuUtilizationPercentage: number;
	}

	/** An update to the connector's scale-out policy. */
	export interface ScaleOutPolicyUpdateFormProperties {

		/** Required */
		cpuUtilizationPercentage: FormControl<number | null | undefined>,
	}
	export function CreateScaleOutPolicyUpdateFormGroup() {
		return new FormGroup<ScaleOutPolicyUpdateFormProperties>({
			cpuUtilizationPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An update to a connector's fixed capacity. */
	export interface ProvisionedCapacityUpdate {

		/** Required */
		mcuCount: number;

		/** Required */
		workerCount: number;
	}

	/** An update to a connector's fixed capacity. */
	export interface ProvisionedCapacityUpdateFormProperties {

		/** Required */
		mcuCount: FormControl<number | null | undefined>,

		/** Required */
		workerCount: FormControl<number | null | undefined>,
	}
	export function CreateProvisionedCapacityUpdateFormGroup() {
		return new FormGroup<ProvisionedCapacityUpdateFormProperties>({
			mcuCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			workerCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the capacity of the connector, whether it is auto scaled or provisioned. */
	export interface Capacity {
		autoScaling?: AutoScaling;
		provisionedCapacity?: ProvisionedCapacity;
	}

	/** Information about the capacity of the connector, whether it is auto scaled or provisioned. */
	export interface CapacityFormProperties {
	}
	export function CreateCapacityFormGroup() {
		return new FormGroup<CapacityFormProperties>({
		});

	}


	/** The target capacity for the connector. The capacity can be auto scaled or provisioned. */
	export interface CapacityUpdate {
		autoScaling?: AutoScalingUpdate;
		provisionedCapacity?: ProvisionedCapacityUpdate;
	}

	/** The target capacity for the connector. The capacity can be auto scaled or provisioned. */
	export interface CapacityUpdateFormProperties {
	}
	export function CreateCapacityUpdateFormGroup() {
		return new FormGroup<CapacityUpdateFormProperties>({
		});

	}

	export interface SyntheticCreateConnectorRequest__mapOf__string {
	}
	export interface SyntheticCreateConnectorRequest__mapOf__stringFormProperties {
	}
	export function CreateSyntheticCreateConnectorRequest__mapOf__stringFormGroup() {
		return new FormGroup<SyntheticCreateConnectorRequest__mapOf__stringFormProperties>({
		});

	}


	/** The details of the Apache Kafka cluster to which the connector is connected. */
	export interface KafkaCluster {

		/** Required */
		apacheKafkaCluster: ApacheKafkaCluster;
	}

	/** The details of the Apache Kafka cluster to which the connector is connected. */
	export interface KafkaClusterFormProperties {
	}
	export function CreateKafkaClusterFormGroup() {
		return new FormGroup<KafkaClusterFormProperties>({
		});

	}


	/** The client authentication information used in order to authenticate with the Apache Kafka cluster. */
	export interface KafkaClusterClientAuthentication {

		/** Required */
		authenticationType: KafkaClusterClientAuthenticationType;
	}

	/** The client authentication information used in order to authenticate with the Apache Kafka cluster. */
	export interface KafkaClusterClientAuthenticationFormProperties {

		/** Required */
		authenticationType: FormControl<KafkaClusterClientAuthenticationType | null | undefined>,
	}
	export function CreateKafkaClusterClientAuthenticationFormGroup() {
		return new FormGroup<KafkaClusterClientAuthenticationFormProperties>({
			authenticationType: new FormControl<KafkaClusterClientAuthenticationType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details of encryption in transit to the Apache Kafka cluster. */
	export interface KafkaClusterEncryptionInTransit {

		/** Required */
		encryptionType: KafkaClusterEncryptionInTransitType;
	}

	/** Details of encryption in transit to the Apache Kafka cluster. */
	export interface KafkaClusterEncryptionInTransitFormProperties {

		/** Required */
		encryptionType: FormControl<KafkaClusterEncryptionInTransitType | null | undefined>,
	}
	export function CreateKafkaClusterEncryptionInTransitFormGroup() {
		return new FormGroup<KafkaClusterEncryptionInTransitFormProperties>({
			encryptionType: new FormControl<KafkaClusterEncryptionInTransitType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about log delivery. */
	export interface LogDelivery {

		/** Required */
		workerLogDelivery: WorkerLogDelivery;
	}

	/** Details about log delivery. */
	export interface LogDeliveryFormProperties {
	}
	export function CreateLogDeliveryFormGroup() {
		return new FormGroup<LogDeliveryFormProperties>({
		});

	}


	/** The configuration of the workers, which are the processes that run the connector logic. */
	export interface WorkerConfiguration {

		/** Required */
		revision: number;

		/** Required */
		workerConfigurationArn: string;
	}

	/** The configuration of the workers, which are the processes that run the connector logic. */
	export interface WorkerConfigurationFormProperties {

		/** Required */
		revision: FormControl<number | null | undefined>,

		/** Required */
		workerConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateWorkerConfigurationFormGroup() {
		return new FormGroup<WorkerConfigurationFormProperties>({
			revision: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			workerConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateConnectorRequest {

		/** Required */
		capacity: Capacity;

		/** Required */
		connectorConfiguration: SyntheticCreateConnectorRequest__mapOf__string;
		connectorDescription?: string;

		/** Required */
		connectorName: string;

		/** Required */
		kafkaCluster: KafkaCluster;

		/** Required */
		kafkaClusterClientAuthentication: KafkaClusterClientAuthentication;

		/** Required */
		kafkaClusterEncryptionInTransit: KafkaClusterEncryptionInTransit;

		/** Required */
		kafkaConnectVersion: string;
		logDelivery?: LogDelivery;

		/** Required */
		plugins: Array<Plugin>;

		/** Required */
		serviceExecutionRoleArn: string;
		workerConfiguration?: WorkerConfiguration;
	}
	export interface CreateConnectorRequestFormProperties {
		connectorDescription: FormControl<string | null | undefined>,

		/** Required */
		connectorName: FormControl<string | null | undefined>,

		/** Required */
		kafkaConnectVersion: FormControl<string | null | undefined>,

		/** Required */
		serviceExecutionRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectorRequestFormGroup() {
		return new FormGroup<CreateConnectorRequestFormProperties>({
			connectorDescription: new FormControl<string | null | undefined>(undefined),
			connectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kafkaConnectVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the location of a custom plugin. */
	export interface CustomPluginLocation {

		/** Required */
		s3Location: S3Location;
	}

	/** Information about the location of a custom plugin. */
	export interface CustomPluginLocationFormProperties {
	}
	export function CreateCustomPluginLocationFormGroup() {
		return new FormGroup<CustomPluginLocationFormProperties>({
		});

	}

	export interface CreateCustomPluginRequest {

		/** Required */
		contentType: CustomPluginContentType;
		description?: string;

		/** Required */
		location: CustomPluginLocation;

		/** Required */
		name: string;
	}
	export interface CreateCustomPluginRequestFormProperties {

		/** Required */
		contentType: FormControl<CustomPluginContentType | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomPluginRequestFormGroup() {
		return new FormGroup<CreateCustomPluginRequestFormProperties>({
			contentType: new FormControl<CustomPluginContentType | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWorkerConfigurationRequest {
		description?: string;

		/** Required */
		name: string;

		/** Required */
		propertiesFileContent: string;
	}
	export interface CreateWorkerConfigurationRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		propertiesFileContent: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkerConfigurationRequestFormGroup() {
		return new FormGroup<CreateWorkerConfigurationRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			propertiesFileContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteConnectorRequest {
	}
	export interface DeleteConnectorRequestFormProperties {
	}
	export function CreateDeleteConnectorRequestFormGroup() {
		return new FormGroup<DeleteConnectorRequestFormProperties>({
		});

	}

	export interface DeleteCustomPluginRequest {
	}
	export interface DeleteCustomPluginRequestFormProperties {
	}
	export function CreateDeleteCustomPluginRequestFormGroup() {
		return new FormGroup<DeleteCustomPluginRequestFormProperties>({
		});

	}

	export interface DescribeConnectorRequest {
	}
	export interface DescribeConnectorRequestFormProperties {
	}
	export function CreateDescribeConnectorRequestFormGroup() {
		return new FormGroup<DescribeConnectorRequestFormProperties>({
		});

	}

	export interface DescribeCustomPluginRequest {
	}
	export interface DescribeCustomPluginRequestFormProperties {
	}
	export function CreateDescribeCustomPluginRequestFormGroup() {
		return new FormGroup<DescribeCustomPluginRequestFormProperties>({
		});

	}

	export interface DescribeWorkerConfigurationRequest {
	}
	export interface DescribeWorkerConfigurationRequestFormProperties {
	}
	export function CreateDescribeWorkerConfigurationRequestFormGroup() {
		return new FormGroup<DescribeWorkerConfigurationRequestFormProperties>({
		});

	}

	export interface ListConnectorsRequest {
	}
	export interface ListConnectorsRequestFormProperties {
	}
	export function CreateListConnectorsRequestFormGroup() {
		return new FormGroup<ListConnectorsRequestFormProperties>({
		});

	}

	export interface ListCustomPluginsRequest {
	}
	export interface ListCustomPluginsRequestFormProperties {
	}
	export function CreateListCustomPluginsRequestFormGroup() {
		return new FormGroup<ListCustomPluginsRequestFormProperties>({
		});

	}

	export interface ListWorkerConfigurationsRequest {
	}
	export interface ListWorkerConfigurationsRequestFormProperties {
	}
	export function CreateListWorkerConfigurationsRequestFormGroup() {
		return new FormGroup<ListWorkerConfigurationsRequestFormProperties>({
		});

	}

	export interface UpdateConnectorRequest {

		/** Required */
		capacity: CapacityUpdate;
	}
	export interface UpdateConnectorRequestFormProperties {
	}
	export function CreateUpdateConnectorRequestFormGroup() {
		return new FormGroup<UpdateConnectorRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a connector using the specified properties.
		 * Post v1/connectors
		 * @return {CreateConnectorResponse} Success
		 */
		CreateConnector(requestBody: CreateConnectorPostBody): Observable<CreateConnectorResponse> {
			return this.http.post<CreateConnectorResponse>(this.baseUri + 'v1/connectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
		 * Get v1/connectors
		 * @param {string} connectorNamePrefix The name prefix that you want to use to search for and list connectors.
		 * @param {number} maxResults The maximum number of connectors to list in one response.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken If the response of a ListConnectors operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.
		 * @return {ListConnectorsResponse} Success
		 */
		ListConnectors(connectorNamePrefix: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListConnectorsResponse> {
			return this.http.get<ListConnectorsResponse>(this.baseUri + 'v1/connectors?connectorNamePrefix=' + (connectorNamePrefix == null ? '' : encodeURIComponent(connectorNamePrefix)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a custom plugin using the specified properties.
		 * Post v1/custom-plugins
		 * @return {CreateCustomPluginResponse} Success
		 */
		CreateCustomPlugin(requestBody: CreateCustomPluginPostBody): Observable<CreateCustomPluginResponse> {
			return this.http.post<CreateCustomPluginResponse>(this.baseUri + 'v1/custom-plugins', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all of the custom plugins in this account and Region.
		 * Get v1/custom-plugins
		 * @param {number} maxResults The maximum number of custom plugins to list in one response.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken If the response of a ListCustomPlugins operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.
		 * @return {ListCustomPluginsResponse} Success
		 */
		ListCustomPlugins(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListCustomPluginsResponse> {
			return this.http.get<ListCustomPluginsResponse>(this.baseUri + 'v1/custom-plugins?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a worker configuration using the specified properties.
		 * Post v1/worker-configurations
		 * @return {CreateWorkerConfigurationResponse} Success
		 */
		CreateWorkerConfiguration(requestBody: CreateWorkerConfigurationPostBody): Observable<CreateWorkerConfigurationResponse> {
			return this.http.post<CreateWorkerConfigurationResponse>(this.baseUri + 'v1/worker-configurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all of the worker configurations in this account and Region.
		 * Get v1/worker-configurations
		 * @param {number} maxResults The maximum number of worker configurations to list in one response.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken If the response of a ListWorkerConfigurations operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.
		 * @return {ListWorkerConfigurationsResponse} Success
		 */
		ListWorkerConfigurations(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListWorkerConfigurationsResponse> {
			return this.http.get<ListWorkerConfigurationsResponse>(this.baseUri + 'v1/worker-configurations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Deletes the specified connector.
		 * Delete v1/connectors/{connectorArn}
		 * @param {string} connectorArn The Amazon Resource Name (ARN) of the connector that you want to delete.
		 * @param {string} currentVersion The current version of the connector that you want to delete.
		 * @return {DeleteConnectorResponse} Success
		 */
		DeleteConnector(connectorArn: string, currentVersion: string | null | undefined): Observable<DeleteConnectorResponse> {
			return this.http.delete<DeleteConnectorResponse>(this.baseUri + 'v1/connectors/' + (connectorArn == null ? '' : encodeURIComponent(connectorArn)) + '&currentVersion=' + (currentVersion == null ? '' : encodeURIComponent(currentVersion)), {});
		}

		/**
		 * Returns summary information about the connector.
		 * Get v1/connectors/{connectorArn}
		 * @param {string} connectorArn The Amazon Resource Name (ARN) of the connector that you want to describe.
		 * @return {DescribeConnectorResponse} Success
		 */
		DescribeConnector(connectorArn: string): Observable<DescribeConnectorResponse> {
			return this.http.get<DescribeConnectorResponse>(this.baseUri + 'v1/connectors/' + (connectorArn == null ? '' : encodeURIComponent(connectorArn)), {});
		}

		/**
		 * Deletes a custom plugin.
		 * Delete v1/custom-plugins/{customPluginArn}
		 * @param {string} customPluginArn The Amazon Resource Name (ARN) of the custom plugin that you want to delete.
		 * @return {DeleteCustomPluginResponse} Success
		 */
		DeleteCustomPlugin(customPluginArn: string): Observable<DeleteCustomPluginResponse> {
			return this.http.delete<DeleteCustomPluginResponse>(this.baseUri + 'v1/custom-plugins/' + (customPluginArn == null ? '' : encodeURIComponent(customPluginArn)), {});
		}

		/**
		 * A summary description of the custom plugin.
		 * Get v1/custom-plugins/{customPluginArn}
		 * @param {string} customPluginArn Returns information about a custom plugin.
		 * @return {DescribeCustomPluginResponse} Success
		 */
		DescribeCustomPlugin(customPluginArn: string): Observable<DescribeCustomPluginResponse> {
			return this.http.get<DescribeCustomPluginResponse>(this.baseUri + 'v1/custom-plugins/' + (customPluginArn == null ? '' : encodeURIComponent(customPluginArn)), {});
		}

		/**
		 * Returns information about a worker configuration.
		 * Get v1/worker-configurations/{workerConfigurationArn}
		 * @param {string} workerConfigurationArn The Amazon Resource Name (ARN) of the worker configuration that you want to get information about.
		 * @return {DescribeWorkerConfigurationResponse} Success
		 */
		DescribeWorkerConfiguration(workerConfigurationArn: string): Observable<DescribeWorkerConfigurationResponse> {
			return this.http.get<DescribeWorkerConfigurationResponse>(this.baseUri + 'v1/worker-configurations/' + (workerConfigurationArn == null ? '' : encodeURIComponent(workerConfigurationArn)), {});
		}

		/**
		 * Updates the specified connector.
		 * Put v1/connectors/{connectorArn}#currentVersion
		 * @param {string} connectorArn The Amazon Resource Name (ARN) of the connector that you want to update.
		 * @param {string} currentVersion The current version of the connector that you want to update.
		 * @return {UpdateConnectorResponse} Success
		 */
		UpdateConnector(connectorArn: string, currentVersion: string, requestBody: UpdateConnectorPutBody): Observable<UpdateConnectorResponse> {
			return this.http.put<UpdateConnectorResponse>(this.baseUri + 'v1/connectors/' + (connectorArn == null ? '' : encodeURIComponent(connectorArn)) + '#currentVersion&currentVersion=' + (currentVersion == null ? '' : encodeURIComponent(currentVersion)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateConnectorPostBody {

		/**
		 * Information about the capacity of the connector, whether it is auto scaled or provisioned.
		 * Required
		 */
		capacity: CreateConnectorPostBodyCapacity;

		/**
		 * A map of keys to values that represent the configuration for the connector.
		 * Required
		 */
		connectorConfiguration: {[id: string]: string };

		/**
		 * A summary description of the connector.
		 * Min length: 0
		 * Max length: 1024
		 */
		connectorDescription?: string | null;

		/**
		 * The name of the connector.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		connectorName: string;

		/**
		 * The details of the Apache Kafka cluster to which the connector is connected.
		 * Required
		 */
		kafkaCluster: CreateConnectorPostBodyKafkaCluster;

		/**
		 * The client authentication information used in order to authenticate with the Apache Kafka cluster.
		 * Required
		 */
		kafkaClusterClientAuthentication: CreateConnectorPostBodyKafkaClusterClientAuthentication;

		/**
		 * Details of encryption in transit to the Apache Kafka cluster.
		 * Required
		 */
		kafkaClusterEncryptionInTransit: CreateConnectorPostBodyKafkaClusterEncryptionInTransit;

		/**
		 * The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.
		 * Required
		 */
		kafkaConnectVersion: string;

		/** Details about log delivery. */
		logDelivery?: CreateConnectorPostBodyLogDelivery;

		/**
		 * Specifies which plugins to use for the connector.
		 * Required
		 */
		plugins: Array<Plugin>;

		/**
		 * The Amazon Resource Name (ARN) of the IAM role used by the connector to access the Amazon Web Services resources that it needs. The types of resources depends on the logic of the connector. For example, a connector that has Amazon S3 as a destination must have permissions that allow it to write to the S3 destination bucket.
		 * Required
		 */
		serviceExecutionRoleArn: string;

		/** The configuration of the workers, which are the processes that run the connector logic. */
		workerConfiguration?: CreateConnectorPostBodyWorkerConfiguration;
	}
	export interface CreateConnectorPostBodyFormProperties {

		/**
		 * A map of keys to values that represent the configuration for the connector.
		 * Required
		 */
		connectorConfiguration: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A summary description of the connector.
		 * Min length: 0
		 * Max length: 1024
		 */
		connectorDescription: FormControl<string | null | undefined>,

		/**
		 * The name of the connector.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		connectorName: FormControl<string | null | undefined>,

		/**
		 * The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.
		 * Required
		 */
		kafkaConnectVersion: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the IAM role used by the connector to access the Amazon Web Services resources that it needs. The types of resources depends on the logic of the connector. For example, a connector that has Amazon S3 as a destination must have permissions that allow it to write to the S3 destination bucket.
		 * Required
		 */
		serviceExecutionRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectorPostBodyFormGroup() {
		return new FormGroup<CreateConnectorPostBodyFormProperties>({
			connectorConfiguration: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			connectorDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			connectorName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			kafkaConnectVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateConnectorPostBodyCapacity {
		autoScaling?: AutoScaling;
		provisionedCapacity?: ProvisionedCapacity;
	}
	export interface CreateConnectorPostBodyCapacityFormProperties {
	}
	export function CreateCreateConnectorPostBodyCapacityFormGroup() {
		return new FormGroup<CreateConnectorPostBodyCapacityFormProperties>({
		});

	}

	export interface CreateConnectorPostBodyKafkaCluster {
		apacheKafkaCluster?: ApacheKafkaCluster;
	}
	export interface CreateConnectorPostBodyKafkaClusterFormProperties {
	}
	export function CreateCreateConnectorPostBodyKafkaClusterFormGroup() {
		return new FormGroup<CreateConnectorPostBodyKafkaClusterFormProperties>({
		});

	}

	export interface CreateConnectorPostBodyKafkaClusterClientAuthentication {
		authenticationType?: KafkaClusterClientAuthenticationType;
	}
	export interface CreateConnectorPostBodyKafkaClusterClientAuthenticationFormProperties {
		authenticationType: FormControl<KafkaClusterClientAuthenticationType | null | undefined>,
	}
	export function CreateCreateConnectorPostBodyKafkaClusterClientAuthenticationFormGroup() {
		return new FormGroup<CreateConnectorPostBodyKafkaClusterClientAuthenticationFormProperties>({
			authenticationType: new FormControl<KafkaClusterClientAuthenticationType | null | undefined>(undefined),
		});

	}

	export interface CreateConnectorPostBodyKafkaClusterEncryptionInTransit {
		encryptionType?: KafkaClusterEncryptionInTransitType;
	}
	export interface CreateConnectorPostBodyKafkaClusterEncryptionInTransitFormProperties {
		encryptionType: FormControl<KafkaClusterEncryptionInTransitType | null | undefined>,
	}
	export function CreateCreateConnectorPostBodyKafkaClusterEncryptionInTransitFormGroup() {
		return new FormGroup<CreateConnectorPostBodyKafkaClusterEncryptionInTransitFormProperties>({
			encryptionType: new FormControl<KafkaClusterEncryptionInTransitType | null | undefined>(undefined),
		});

	}

	export interface CreateConnectorPostBodyLogDelivery {
		workerLogDelivery?: WorkerLogDelivery;
	}
	export interface CreateConnectorPostBodyLogDeliveryFormProperties {
	}
	export function CreateCreateConnectorPostBodyLogDeliveryFormGroup() {
		return new FormGroup<CreateConnectorPostBodyLogDeliveryFormProperties>({
		});

	}

	export interface CreateConnectorPostBodyWorkerConfiguration {
		revision?: number | null;
		workerConfigurationArn?: string;
	}
	export interface CreateConnectorPostBodyWorkerConfigurationFormProperties {
		revision: FormControl<number | null | undefined>,
		workerConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectorPostBodyWorkerConfigurationFormGroup() {
		return new FormGroup<CreateConnectorPostBodyWorkerConfigurationFormProperties>({
			revision: new FormControl<number | null | undefined>(undefined),
			workerConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCustomPluginPostBody {

		/**
		 * The type of the plugin file.
		 * Required
		 */
		contentType: CustomPluginContentType;

		/**
		 * A summary description of the custom plugin.
		 * Min length: 0
		 * Max length: 1024
		 */
		description?: string | null;

		/**
		 * Information about the location of a custom plugin.
		 * Required
		 */
		location: CreateCustomPluginPostBodyLocation;

		/**
		 * The name of the custom plugin.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		name: string;
	}
	export interface CreateCustomPluginPostBodyFormProperties {

		/**
		 * The type of the plugin file.
		 * Required
		 */
		contentType: FormControl<CustomPluginContentType | null | undefined>,

		/**
		 * A summary description of the custom plugin.
		 * Min length: 0
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of the custom plugin.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomPluginPostBodyFormGroup() {
		return new FormGroup<CreateCustomPluginPostBodyFormProperties>({
			contentType: new FormControl<CustomPluginContentType | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface CreateCustomPluginPostBodyLocation {
		s3Location?: S3Location;
	}
	export interface CreateCustomPluginPostBodyLocationFormProperties {
	}
	export function CreateCreateCustomPluginPostBodyLocationFormGroup() {
		return new FormGroup<CreateCustomPluginPostBodyLocationFormProperties>({
		});

	}

	export interface CreateWorkerConfigurationPostBody {

		/**
		 * A summary description of the worker configuration.
		 * Min length: 0
		 * Max length: 1024
		 */
		description?: string | null;

		/**
		 * The name of the worker configuration.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		name: string;

		/**
		 * Base64 encoded contents of connect-distributed.properties file.
		 * Required
		 */
		propertiesFileContent: string;
	}
	export interface CreateWorkerConfigurationPostBodyFormProperties {

		/**
		 * A summary description of the worker configuration.
		 * Min length: 0
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of the worker configuration.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Base64 encoded contents of connect-distributed.properties file.
		 * Required
		 */
		propertiesFileContent: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkerConfigurationPostBodyFormGroup() {
		return new FormGroup<CreateWorkerConfigurationPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			propertiesFileContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateConnectorPutBody {

		/**
		 * The target capacity for the connector. The capacity can be auto scaled or provisioned.
		 * Required
		 */
		capacity: UpdateConnectorPutBodyCapacity;
	}
	export interface UpdateConnectorPutBodyFormProperties {
	}
	export function CreateUpdateConnectorPutBodyFormGroup() {
		return new FormGroup<UpdateConnectorPutBodyFormProperties>({
		});

	}

	export interface UpdateConnectorPutBodyCapacity {
		autoScaling?: AutoScalingUpdate;
		provisionedCapacity?: ProvisionedCapacityUpdate;
	}
	export interface UpdateConnectorPutBodyCapacityFormProperties {
	}
	export function CreateUpdateConnectorPutBodyCapacityFormGroup() {
		return new FormGroup<UpdateConnectorPutBodyCapacityFormProperties>({
		});

	}

}

