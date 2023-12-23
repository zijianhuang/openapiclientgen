import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateClusterResponse {
		ClusterArn?: string | null;
		ClusterName?: string | null;

		/**
		 * <p>The state of a Kafka cluster.</p>
		 */
		State?: CreateClusterResponseState | null;
	}
	export interface CreateClusterResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ClusterName: FormControl<string | null | undefined>,

		/**
		 * <p>The state of a Kafka cluster.</p>
		 */
		State: FormControl<CreateClusterResponseState | null | undefined>,
	}
	export function CreateCreateClusterResponseFormGroup() {
		return new FormGroup<CreateClusterResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<CreateClusterResponseState | null | undefined>(undefined),
		});

	}

	export enum CreateClusterResponseState { ACTIVE = 0, CREATING = 1, UPDATING = 2, DELETING = 3, FAILED = 4 }


	/**
	 *             <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>
	 *          <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>
	 *          
	 */
	export enum BrokerAZDistribution { DEFAULT = 0 }


	/**
	 *             <p>Contains information about storage volumes attached to MSK broker nodes.</p>
	 *          
	 */
	export interface StorageInfo {

		/**
		 * <p>Contains information about the EBS storage volumes attached to Kafka broker nodes.</p>
		 */
		EbsStorageInfo?: EBSStorageInfo;
	}

	/**
	 *             <p>Contains information about storage volumes attached to MSK broker nodes.</p>
	 *          
	 */
	export interface StorageInfoFormProperties {
	}
	export function CreateStorageInfoFormGroup() {
		return new FormGroup<StorageInfoFormProperties>({
		});

	}


	/**
	 *             <p>Contains information about the EBS storage volumes attached to Kafka broker nodes.</p>
	 *          
	 */
	export interface EBSStorageInfo {

		/**
		 * Minimum: 1
		 * Maximum: 16384
		 */
		VolumeSize?: number | null;
	}

	/**
	 *             <p>Contains information about the EBS storage volumes attached to Kafka broker nodes.</p>
	 *          
	 */
	export interface EBSStorageInfoFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 16384
		 */
		VolumeSize: FormControl<number | null | undefined>,
	}
	export function CreateEBSStorageInfoFormGroup() {
		return new FormGroup<EBSStorageInfoFormProperties>({
			VolumeSize: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(16384)]),
		});

	}


	/**
	 *             <p>Details for client authentication using TLS.</p>
	 *          
	 */
	export interface Tls {
		CertificateAuthorityArnList?: Array<string>;
	}

	/**
	 *             <p>Details for client authentication using TLS.</p>
	 *          
	 */
	export interface TlsFormProperties {
	}
	export function CreateTlsFormGroup() {
		return new FormGroup<TlsFormProperties>({
		});

	}


	/**
	 *             <p>The data-volume encryption details.</p>
	 *          
	 */
	export interface EncryptionAtRest {

		/** Required */
		DataVolumeKMSKeyId: string;
	}

	/**
	 *             <p>The data-volume encryption details.</p>
	 *          
	 */
	export interface EncryptionAtRestFormProperties {

		/** Required */
		DataVolumeKMSKeyId: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionAtRestFormGroup() {
		return new FormGroup<EncryptionAtRestFormProperties>({
			DataVolumeKMSKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 *             <p>The settings for encrypting data in transit.</p>
	 *          
	 */
	export interface EncryptionInTransit {

		/**
		 * <p>Client-broker encryption in transit setting.</p>
		 */
		ClientBroker?: EncryptionInTransitClientBroker | null;
		InCluster?: boolean | null;
	}

	/**
	 *             <p>The settings for encrypting data in transit.</p>
	 *          
	 */
	export interface EncryptionInTransitFormProperties {

		/**
		 * <p>Client-broker encryption in transit setting.</p>
		 */
		ClientBroker: FormControl<EncryptionInTransitClientBroker | null | undefined>,
		InCluster: FormControl<boolean | null | undefined>,
	}
	export function CreateEncryptionInTransitFormGroup() {
		return new FormGroup<EncryptionInTransitFormProperties>({
			ClientBroker: new FormControl<EncryptionInTransitClientBroker | null | undefined>(undefined),
			InCluster: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum EncryptionInTransitClientBroker { TLS = 0, TLS_PLAINTEXT = 1, PLAINTEXT = 2 }


	/**
	 *             <p>Prometheus settings.</p>
	 *          
	 */
	export interface PrometheusInfo {

		/**
		 * <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
		 */
		JmxExporter?: JmxExporterInfo;

		/**
		 * <p>Indicates whether you want to enable or disable the Node Exporter.</p>
		 */
		NodeExporter?: NodeExporterInfo;
	}

	/**
	 *             <p>Prometheus settings.</p>
	 *          
	 */
	export interface PrometheusInfoFormProperties {
	}
	export function CreatePrometheusInfoFormGroup() {
		return new FormGroup<PrometheusInfoFormProperties>({
		});

	}


	/**
	 *             <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
	 *          
	 */
	export interface JmxExporterInfo {

		/** Required */
		EnabledInBroker: boolean;
	}

	/**
	 *             <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
	 *          
	 */
	export interface JmxExporterInfoFormProperties {

		/** Required */
		EnabledInBroker: FormControl<boolean | null | undefined>,
	}
	export function CreateJmxExporterInfoFormGroup() {
		return new FormGroup<JmxExporterInfoFormProperties>({
			EnabledInBroker: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 *             <p>Indicates whether you want to enable or disable the Node Exporter.</p>
	 *          
	 */
	export interface NodeExporterInfo {

		/** Required */
		EnabledInBroker: boolean;
	}

	/**
	 *             <p>Indicates whether you want to enable or disable the Node Exporter.</p>
	 *          
	 */
	export interface NodeExporterInfoFormProperties {

		/** Required */
		EnabledInBroker: FormControl<boolean | null | undefined>,
	}
	export function CreateNodeExporterInfoFormGroup() {
		return new FormGroup<NodeExporterInfoFormProperties>({
			EnabledInBroker: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BrokerLogs {
		CloudWatchLogs?: CloudWatchLogs;
		Firehose?: Firehose;
		S3?: S3;
	}
	export interface BrokerLogsFormProperties {
	}
	export function CreateBrokerLogsFormGroup() {
		return new FormGroup<BrokerLogsFormProperties>({
		});

	}

	export interface CloudWatchLogs {

		/** Required */
		Enabled: boolean;
		LogGroup?: string | null;
	}
	export interface CloudWatchLogsFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		LogGroup: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogsFormGroup() {
		return new FormGroup<CloudWatchLogsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			LogGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Firehose {
		DeliveryStream?: string | null;

		/** Required */
		Enabled: boolean;
	}
	export interface FirehoseFormProperties {
		DeliveryStream: FormControl<string | null | undefined>,

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateFirehoseFormGroup() {
		return new FormGroup<FirehoseFormProperties>({
			DeliveryStream: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface S3 {
		Bucket?: string | null;

		/** Required */
		Enabled: boolean;
		Prefix?: string | null;
	}
	export interface S3FormProperties {
		Bucket: FormControl<string | null | undefined>,

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3FormGroup() {
		return new FormGroup<S3FormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined),
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

	export interface InternalServerErrorException {
	}
	export interface InternalServerErrorExceptionFormProperties {
	}
	export function CreateInternalServerErrorExceptionFormGroup() {
		return new FormGroup<InternalServerErrorExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface CreateConfigurationResponse {
		Arn?: string | null;
		CreationTime?: Date | null;

		/**
		 * <p>Describes a configuration revision.</p>
		 */
		LatestRevision?: ConfigurationRevision;
		Name?: string | null;
	}
	export interface CreateConfigurationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationResponseFormGroup() {
		return new FormGroup<CreateConfigurationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Describes a configuration revision.</p>
	 *          
	 */
	export interface ConfigurationRevision {

		/** Required */
		CreationTime: Date;
		Description?: string | null;

		/** Required */
		Revision: number;
	}

	/**
	 *             <p>Describes a configuration revision.</p>
	 *          
	 */
	export interface ConfigurationRevisionFormProperties {

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Revision: FormControl<number | null | undefined>,
	}
	export function CreateConfigurationRevisionFormGroup() {
		return new FormGroup<ConfigurationRevisionFormProperties>({
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteClusterResponse {
		ClusterArn?: string | null;

		/**
		 * <p>The state of a Kafka cluster.</p>
		 */
		State?: CreateClusterResponseState | null;
	}
	export interface DeleteClusterResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,

		/**
		 * <p>The state of a Kafka cluster.</p>
		 */
		State: FormControl<CreateClusterResponseState | null | undefined>,
	}
	export function CreateDeleteClusterResponseFormGroup() {
		return new FormGroup<DeleteClusterResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<CreateClusterResponseState | null | undefined>(undefined),
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

	export interface DescribeClusterResponse {

		/**
		 * <p>Returns information about a cluster.</p>
		 */
		ClusterInfo?: ClusterInfo;
	}
	export interface DescribeClusterResponseFormProperties {
	}
	export function CreateDescribeClusterResponseFormGroup() {
		return new FormGroup<DescribeClusterResponseFormProperties>({
		});

	}


	/**
	 *             <p>Returns information about a cluster.</p>
	 *          
	 */
	export interface ClusterInfo {
		ActiveOperationArn?: string | null;

		/**
		 * <p>Describes the setup to be used for Kafka broker nodes in the cluster.</p>
		 */
		BrokerNodeGroupInfo?: BrokerNodeGroupInfo;

		/**
		 * <p>Includes all client authentication information.</p>
		 */
		ClientAuthentication?: ClientAuthentication;
		ClusterArn?: string | null;
		ClusterName?: string | null;
		CreationTime?: Date | null;

		/**
		 * <p>Information about the current software installed on the cluster.</p>
		 */
		CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;
		CurrentVersion?: string | null;

		/**
		 * <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
		 */
		EncryptionInfo?: EncryptionInfo;

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		EnhancedMonitoring?: ClusterInfoEnhancedMonitoring | null;

		/**
		 * <p>JMX and Node monitoring for the MSK cluster.</p>
		 */
		OpenMonitoring?: OpenMonitoring;
		LoggingInfo?: LoggingInfo;
		NumberOfBrokerNodes?: number | null;

		/**
		 * <p>The state of a Kafka cluster.</p>
		 */
		State?: CreateClusterResponseState | null;
		StateInfo?: StateInfo;
		Tags?: __mapOf__string;
		ZookeeperConnectString?: string | null;
	}

	/**
	 *             <p>Returns information about a cluster.</p>
	 *          
	 */
	export interface ClusterInfoFormProperties {
		ActiveOperationArn: FormControl<string | null | undefined>,
		ClusterArn: FormControl<string | null | undefined>,
		ClusterName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		CurrentVersion: FormControl<string | null | undefined>,

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		EnhancedMonitoring: FormControl<ClusterInfoEnhancedMonitoring | null | undefined>,
		NumberOfBrokerNodes: FormControl<number | null | undefined>,

		/**
		 * <p>The state of a Kafka cluster.</p>
		 */
		State: FormControl<CreateClusterResponseState | null | undefined>,
		ZookeeperConnectString: FormControl<string | null | undefined>,
	}
	export function CreateClusterInfoFormGroup() {
		return new FormGroup<ClusterInfoFormProperties>({
			ActiveOperationArn: new FormControl<string | null | undefined>(undefined),
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			CurrentVersion: new FormControl<string | null | undefined>(undefined),
			EnhancedMonitoring: new FormControl<ClusterInfoEnhancedMonitoring | null | undefined>(undefined),
			NumberOfBrokerNodes: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<CreateClusterResponseState | null | undefined>(undefined),
			ZookeeperConnectString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Describes the setup to be used for Kafka broker nodes in the cluster.</p>
	 *          
	 */
	export interface BrokerNodeGroupInfo {

		/**
		 * <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>
		 * <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>
		 */
		BrokerAZDistribution?: BrokerAZDistribution | null;

		/** Required */
		ClientSubnets: Array<string>;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 5
		 */
		InstanceType: string;
		SecurityGroups?: Array<string>;

		/**
		 * <p>Contains information about storage volumes attached to MSK broker nodes.</p>
		 */
		StorageInfo?: StorageInfo;
	}

	/**
	 *             <p>Describes the setup to be used for Kafka broker nodes in the cluster.</p>
	 *          
	 */
	export interface BrokerNodeGroupInfoFormProperties {

		/**
		 * <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>
		 * <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>
		 */
		BrokerAZDistribution: FormControl<BrokerAZDistribution | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 5
		 */
		InstanceType: FormControl<string | null | undefined>,
	}
	export function CreateBrokerNodeGroupInfoFormGroup() {
		return new FormGroup<BrokerNodeGroupInfoFormProperties>({
			BrokerAZDistribution: new FormControl<BrokerAZDistribution | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(5)]),
		});

	}


	/**
	 *             <p>Includes all client authentication information.</p>
	 *          
	 */
	export interface ClientAuthentication {

		/**
		 * <p>Details for client authentication using TLS.</p>
		 */
		Tls?: Tls;
	}

	/**
	 *             <p>Includes all client authentication information.</p>
	 *          
	 */
	export interface ClientAuthenticationFormProperties {
	}
	export function CreateClientAuthenticationFormGroup() {
		return new FormGroup<ClientAuthenticationFormProperties>({
		});

	}


	/**
	 *             <p>Information about the current software installed on the cluster.</p>
	 *          
	 */
	export interface BrokerSoftwareInfo {
		ConfigurationArn?: string | null;
		ConfigurationRevision?: number | null;
		KafkaVersion?: string | null;
	}

	/**
	 *             <p>Information about the current software installed on the cluster.</p>
	 *          
	 */
	export interface BrokerSoftwareInfoFormProperties {
		ConfigurationArn: FormControl<string | null | undefined>,
		ConfigurationRevision: FormControl<number | null | undefined>,
		KafkaVersion: FormControl<string | null | undefined>,
	}
	export function CreateBrokerSoftwareInfoFormGroup() {
		return new FormGroup<BrokerSoftwareInfoFormProperties>({
			ConfigurationArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationRevision: new FormControl<number | null | undefined>(undefined),
			KafkaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
	 *          
	 */
	export interface EncryptionInfo {

		/**
		 * <p>The data-volume encryption details.</p>
		 */
		EncryptionAtRest?: EncryptionAtRest;

		/**
		 * <p>The settings for encrypting data in transit.</p>
		 */
		EncryptionInTransit?: EncryptionInTransit;
	}

	/**
	 *             <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
	 *          
	 */
	export interface EncryptionInfoFormProperties {
	}
	export function CreateEncryptionInfoFormGroup() {
		return new FormGroup<EncryptionInfoFormProperties>({
		});

	}

	export enum ClusterInfoEnhancedMonitoring { DEFAULT = 0, PER_BROKER = 1, PER_TOPIC_PER_BROKER = 2 }


	/**
	 *             <p>JMX and Node monitoring for the MSK cluster.</p>
	 *          
	 */
	export interface OpenMonitoring {

		/**
		 * <p>Prometheus settings.</p>
		 * Required
		 */
		Prometheus: Prometheus;
	}

	/**
	 *             <p>JMX and Node monitoring for the MSK cluster.</p>
	 *          
	 */
	export interface OpenMonitoringFormProperties {
	}
	export function CreateOpenMonitoringFormGroup() {
		return new FormGroup<OpenMonitoringFormProperties>({
		});

	}


	/**
	 *             <p>Prometheus settings.</p>
	 *          
	 */
	export interface Prometheus {

		/**
		 * <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
		 */
		JmxExporter?: JmxExporter;

		/**
		 * <p>Indicates whether you want to enable or disable the Node Exporter.</p>
		 */
		NodeExporter?: NodeExporter;
	}

	/**
	 *             <p>Prometheus settings.</p>
	 *          
	 */
	export interface PrometheusFormProperties {
	}
	export function CreatePrometheusFormGroup() {
		return new FormGroup<PrometheusFormProperties>({
		});

	}


	/**
	 *             <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
	 *          
	 */
	export interface JmxExporter {

		/** Required */
		EnabledInBroker: boolean;
	}

	/**
	 *             <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
	 *          
	 */
	export interface JmxExporterFormProperties {

		/** Required */
		EnabledInBroker: FormControl<boolean | null | undefined>,
	}
	export function CreateJmxExporterFormGroup() {
		return new FormGroup<JmxExporterFormProperties>({
			EnabledInBroker: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 *             <p>Indicates whether you want to enable or disable the Node Exporter.</p>
	 *          
	 */
	export interface NodeExporter {

		/** Required */
		EnabledInBroker: boolean;
	}

	/**
	 *             <p>Indicates whether you want to enable or disable the Node Exporter.</p>
	 *          
	 */
	export interface NodeExporterFormProperties {

		/** Required */
		EnabledInBroker: FormControl<boolean | null | undefined>,
	}
	export function CreateNodeExporterFormGroup() {
		return new FormGroup<NodeExporterFormProperties>({
			EnabledInBroker: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LoggingInfo {

		/** Required */
		BrokerLogs: BrokerLogs;
	}
	export interface LoggingInfoFormProperties {
	}
	export function CreateLoggingInfoFormGroup() {
		return new FormGroup<LoggingInfoFormProperties>({
		});

	}

	export interface StateInfo {
		Code?: string | null;
		Message?: string | null;
	}
	export interface StateInfoFormProperties {
		Code: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateStateInfoFormGroup() {
		return new FormGroup<StateInfoFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __mapOf__string {
	}
	export interface __mapOf__stringFormProperties {
	}
	export function Create__mapOf__stringFormGroup() {
		return new FormGroup<__mapOf__stringFormProperties>({
		});

	}

	export interface DescribeClusterOperationResponse {

		/**
		 * <p>Returns information about a cluster operation.</p>
		 */
		ClusterOperationInfo?: ClusterOperationInfo;
	}
	export interface DescribeClusterOperationResponseFormProperties {
	}
	export function CreateDescribeClusterOperationResponseFormGroup() {
		return new FormGroup<DescribeClusterOperationResponseFormProperties>({
		});

	}


	/**
	 *             <p>Returns information about a cluster operation.</p>
	 *          
	 */
	export interface ClusterOperationInfo {
		ClientRequestId?: string | null;
		ClusterArn?: string | null;
		CreationTime?: Date | null;
		EndTime?: Date | null;

		/**
		 * <p>Returns information about an error state of the cluster.</p>
		 */
		ErrorInfo?: ErrorInfo;
		OperationArn?: string | null;
		OperationState?: string | null;
		OperationSteps?: Array<ClusterOperationStep>;
		OperationType?: string | null;

		/**
		 * <p>Information about cluster attributes that can be updated via update APIs.</p>
		 */
		SourceClusterInfo?: MutableClusterInfo;

		/**
		 * <p>Information about cluster attributes that can be updated via update APIs.</p>
		 */
		TargetClusterInfo?: MutableClusterInfo;
	}

	/**
	 *             <p>Returns information about a cluster operation.</p>
	 *          
	 */
	export interface ClusterOperationInfoFormProperties {
		ClientRequestId: FormControl<string | null | undefined>,
		ClusterArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		OperationArn: FormControl<string | null | undefined>,
		OperationState: FormControl<string | null | undefined>,
		OperationType: FormControl<string | null | undefined>,
	}
	export function CreateClusterOperationInfoFormGroup() {
		return new FormGroup<ClusterOperationInfoFormProperties>({
			ClientRequestId: new FormControl<string | null | undefined>(undefined),
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			OperationArn: new FormControl<string | null | undefined>(undefined),
			OperationState: new FormControl<string | null | undefined>(undefined),
			OperationType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Returns information about an error state of the cluster.</p>
	 *          
	 */
	export interface ErrorInfo {
		ErrorCode?: string | null;
		ErrorString?: string | null;
	}

	/**
	 *             <p>Returns information about an error state of the cluster.</p>
	 *          
	 */
	export interface ErrorInfoFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		ErrorString: FormControl<string | null | undefined>,
	}
	export function CreateErrorInfoFormGroup() {
		return new FormGroup<ErrorInfoFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Step taken during a cluster operation.</p>
	 *          
	 */
	export interface ClusterOperationStep {

		/**
		 * <p>State information about the operation step.</p>
		 */
		StepInfo?: ClusterOperationStepInfo;
		StepName?: string | null;
	}

	/**
	 *             <p>Step taken during a cluster operation.</p>
	 *          
	 */
	export interface ClusterOperationStepFormProperties {
		StepName: FormControl<string | null | undefined>,
	}
	export function CreateClusterOperationStepFormGroup() {
		return new FormGroup<ClusterOperationStepFormProperties>({
			StepName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>State information about the operation step.</p>
	 *          
	 */
	export interface ClusterOperationStepInfo {
		StepStatus?: string | null;
	}

	/**
	 *             <p>State information about the operation step.</p>
	 *          
	 */
	export interface ClusterOperationStepInfoFormProperties {
		StepStatus: FormControl<string | null | undefined>,
	}
	export function CreateClusterOperationStepInfoFormGroup() {
		return new FormGroup<ClusterOperationStepInfoFormProperties>({
			StepStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Information about cluster attributes that can be updated via update APIs.</p>
	 *          
	 */
	export interface MutableClusterInfo {
		BrokerEBSVolumeInfo?: Array<BrokerEBSVolumeInfo>;

		/**
		 * <p>Specifies the configuration to use for the brokers.</p>
		 */
		ConfigurationInfo?: ConfigurationInfo;
		NumberOfBrokerNodes?: number | null;

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		EnhancedMonitoring?: ClusterInfoEnhancedMonitoring | null;

		/**
		 * <p>JMX and Node monitoring for the MSK cluster.</p>
		 */
		OpenMonitoring?: OpenMonitoring;
		KafkaVersion?: string | null;
		LoggingInfo?: LoggingInfo;
	}

	/**
	 *             <p>Information about cluster attributes that can be updated via update APIs.</p>
	 *          
	 */
	export interface MutableClusterInfoFormProperties {
		NumberOfBrokerNodes: FormControl<number | null | undefined>,

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		EnhancedMonitoring: FormControl<ClusterInfoEnhancedMonitoring | null | undefined>,
		KafkaVersion: FormControl<string | null | undefined>,
	}
	export function CreateMutableClusterInfoFormGroup() {
		return new FormGroup<MutableClusterInfoFormProperties>({
			NumberOfBrokerNodes: new FormControl<number | null | undefined>(undefined),
			EnhancedMonitoring: new FormControl<ClusterInfoEnhancedMonitoring | null | undefined>(undefined),
			KafkaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Specifies the EBS volume upgrade information. The broker identifier must be set to the keyword ALL. This means the changes apply to all the brokers in the cluster.</p>
	 *          
	 */
	export interface BrokerEBSVolumeInfo {

		/** Required */
		KafkaBrokerNodeId: string;

		/** Required */
		VolumeSizeGB: number;
	}

	/**
	 *             <p>Specifies the EBS volume upgrade information. The broker identifier must be set to the keyword ALL. This means the changes apply to all the brokers in the cluster.</p>
	 *          
	 */
	export interface BrokerEBSVolumeInfoFormProperties {

		/** Required */
		KafkaBrokerNodeId: FormControl<string | null | undefined>,

		/** Required */
		VolumeSizeGB: FormControl<number | null | undefined>,
	}
	export function CreateBrokerEBSVolumeInfoFormGroup() {
		return new FormGroup<BrokerEBSVolumeInfoFormProperties>({
			KafkaBrokerNodeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VolumeSizeGB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 *             <p>Specifies the configuration to use for the brokers.</p>
	 *          
	 */
	export interface ConfigurationInfo {

		/** Required */
		Arn: string;

		/** Required */
		Revision: number;
	}

	/**
	 *             <p>Specifies the configuration to use for the brokers.</p>
	 *          
	 */
	export interface ConfigurationInfoFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		Revision: FormControl<number | null | undefined>,
	}
	export function CreateConfigurationInfoFormGroup() {
		return new FormGroup<ConfigurationInfoFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Revision: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeConfigurationResponse {
		Arn?: string | null;
		CreationTime?: Date | null;
		Description?: string | null;
		KafkaVersions?: Array<string>;

		/**
		 * <p>Describes a configuration revision.</p>
		 */
		LatestRevision?: ConfigurationRevision;
		Name?: string | null;
	}
	export interface DescribeConfigurationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConfigurationResponseFormGroup() {
		return new FormGroup<DescribeConfigurationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConfigurationRevisionResponse {
		Arn?: string | null;
		CreationTime?: Date | null;
		Description?: string | null;
		Revision?: number | null;
		ServerProperties?: string | null;
	}
	export interface DescribeConfigurationRevisionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Revision: FormControl<number | null | undefined>,
		ServerProperties: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConfigurationRevisionResponseFormGroup() {
		return new FormGroup<DescribeConfigurationRevisionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
			ServerProperties: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBootstrapBrokersResponse {
		BootstrapBrokerString?: string | null;
		BootstrapBrokerStringTls?: string | null;
	}
	export interface GetBootstrapBrokersResponseFormProperties {
		BootstrapBrokerString: FormControl<string | null | undefined>,
		BootstrapBrokerStringTls: FormControl<string | null | undefined>,
	}
	export function CreateGetBootstrapBrokersResponseFormGroup() {
		return new FormGroup<GetBootstrapBrokersResponseFormProperties>({
			BootstrapBrokerString: new FormControl<string | null | undefined>(undefined),
			BootstrapBrokerStringTls: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCompatibleKafkaVersionsResponse {
		CompatibleKafkaVersions?: Array<CompatibleKafkaVersion>;
	}
	export interface GetCompatibleKafkaVersionsResponseFormProperties {
	}
	export function CreateGetCompatibleKafkaVersionsResponseFormGroup() {
		return new FormGroup<GetCompatibleKafkaVersionsResponseFormProperties>({
		});

	}


	/**
	 *             <p>Contains source Kafka versions and compatible target Kafka versions.</p>
	 *         
	 */
	export interface CompatibleKafkaVersion {
		SourceVersion?: string | null;
		TargetVersions?: Array<string>;
	}

	/**
	 *             <p>Contains source Kafka versions and compatible target Kafka versions.</p>
	 *         
	 */
	export interface CompatibleKafkaVersionFormProperties {
		SourceVersion: FormControl<string | null | undefined>,
	}
	export function CreateCompatibleKafkaVersionFormGroup() {
		return new FormGroup<CompatibleKafkaVersionFormProperties>({
			SourceVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClusterOperationsResponse {
		ClusterOperationInfoList?: Array<ClusterOperationInfo>;
		NextToken?: string | null;
	}
	export interface ListClusterOperationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClusterOperationsResponseFormGroup() {
		return new FormGroup<ListClusterOperationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClustersResponse {
		ClusterInfoList?: Array<ClusterInfo>;
		NextToken?: string | null;
	}
	export interface ListClustersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClustersResponseFormGroup() {
		return new FormGroup<ListClustersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConfigurationRevisionsResponse {
		NextToken?: string | null;
		Revisions?: Array<ConfigurationRevision>;
	}
	export interface ListConfigurationRevisionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfigurationRevisionsResponseFormGroup() {
		return new FormGroup<ListConfigurationRevisionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConfigurationsResponse {
		Configurations?: Array<Configuration>;
		NextToken?: string | null;
	}
	export interface ListConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfigurationsResponseFormGroup() {
		return new FormGroup<ListConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Represents an MSK Configuration.</p>
	 *          
	 */
	export interface Configuration {

		/** Required */
		Arn: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		Description: string;

		/** Required */
		KafkaVersions: Array<string>;

		/**
		 * <p>Describes a configuration revision.</p>
		 * Required
		 */
		LatestRevision: ConfigurationRevision;

		/** Required */
		Name: string;
	}

	/**
	 *             <p>Represents an MSK Configuration.</p>
	 *          
	 */
	export interface ConfigurationFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListKafkaVersionsResponse {
		KafkaVersions?: Array<KafkaVersion>;
		NextToken?: string | null;
	}
	export interface ListKafkaVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListKafkaVersionsResponseFormGroup() {
		return new FormGroup<ListKafkaVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface KafkaVersion {
		Version?: string | null;
		Status?: KafkaVersionStatus | null;
	}
	export interface KafkaVersionFormProperties {
		Version: FormControl<string | null | undefined>,
		Status: FormControl<KafkaVersionStatus | null | undefined>,
	}
	export function CreateKafkaVersionFormGroup() {
		return new FormGroup<KafkaVersionFormProperties>({
			Version: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<KafkaVersionStatus | null | undefined>(undefined),
		});

	}

	export enum KafkaVersionStatus { ACTIVE = 0, DEPRECATED = 1 }

	export interface ListNodesResponse {
		NextToken?: string | null;
		NodeInfoList?: Array<NodeInfo>;
	}
	export interface ListNodesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNodesResponseFormGroup() {
		return new FormGroup<ListNodesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>The node information object.</p>
	 *          
	 */
	export interface NodeInfo {
		AddedToClusterTime?: string | null;

		/**
		 * <p>BrokerNodeInfo</p>
		 */
		BrokerNodeInfo?: BrokerNodeInfo;
		InstanceType?: string | null;
		NodeARN?: string | null;

		/**
		 * <p>The broker or Zookeeper node.</p>
		 */
		NodeType?: NodeInfoNodeType | null;

		/**
		 * <p>Zookeeper node information.</p>
		 */
		ZookeeperNodeInfo?: ZookeeperNodeInfo;
	}

	/**
	 *             <p>The node information object.</p>
	 *          
	 */
	export interface NodeInfoFormProperties {
		AddedToClusterTime: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		NodeARN: FormControl<string | null | undefined>,

		/**
		 * <p>The broker or Zookeeper node.</p>
		 */
		NodeType: FormControl<NodeInfoNodeType | null | undefined>,
	}
	export function CreateNodeInfoFormGroup() {
		return new FormGroup<NodeInfoFormProperties>({
			AddedToClusterTime: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			NodeARN: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<NodeInfoNodeType | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>BrokerNodeInfo</p>
	 *          
	 */
	export interface BrokerNodeInfo {
		AttachedENIId?: string | null;
		BrokerId?: number | null;
		ClientSubnet?: string | null;
		ClientVpcIpAddress?: string | null;

		/**
		 * <p>Information about the current software installed on the cluster.</p>
		 */
		CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;
		Endpoints?: Array<string>;
	}

	/**
	 *             <p>BrokerNodeInfo</p>
	 *          
	 */
	export interface BrokerNodeInfoFormProperties {
		AttachedENIId: FormControl<string | null | undefined>,
		BrokerId: FormControl<number | null | undefined>,
		ClientSubnet: FormControl<string | null | undefined>,
		ClientVpcIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateBrokerNodeInfoFormGroup() {
		return new FormGroup<BrokerNodeInfoFormProperties>({
			AttachedENIId: new FormControl<string | null | undefined>(undefined),
			BrokerId: new FormControl<number | null | undefined>(undefined),
			ClientSubnet: new FormControl<string | null | undefined>(undefined),
			ClientVpcIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NodeInfoNodeType { BROKER = 0 }


	/**
	 *             <p>Zookeeper node information.</p>
	 *          
	 */
	export interface ZookeeperNodeInfo {
		AttachedENIId?: string | null;
		ClientVpcIpAddress?: string | null;
		Endpoints?: Array<string>;
		ZookeeperId?: number | null;
		ZookeeperVersion?: string | null;
	}

	/**
	 *             <p>Zookeeper node information.</p>
	 *          
	 */
	export interface ZookeeperNodeInfoFormProperties {
		AttachedENIId: FormControl<string | null | undefined>,
		ClientVpcIpAddress: FormControl<string | null | undefined>,
		ZookeeperId: FormControl<number | null | undefined>,
		ZookeeperVersion: FormControl<string | null | undefined>,
	}
	export function CreateZookeeperNodeInfoFormGroup() {
		return new FormGroup<ZookeeperNodeInfoFormProperties>({
			AttachedENIId: new FormControl<string | null | undefined>(undefined),
			ClientVpcIpAddress: new FormControl<string | null | undefined>(undefined),
			ZookeeperId: new FormControl<number | null | undefined>(undefined),
			ZookeeperVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: __mapOf__string;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface UpdateBrokerCountResponse {
		ClusterArn?: string | null;
		ClusterOperationArn?: string | null;
	}
	export interface UpdateBrokerCountResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ClusterOperationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBrokerCountResponseFormGroup() {
		return new FormGroup<UpdateBrokerCountResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterOperationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBrokerStorageResponse {
		ClusterArn?: string | null;
		ClusterOperationArn?: string | null;
	}
	export interface UpdateBrokerStorageResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ClusterOperationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBrokerStorageResponseFormGroup() {
		return new FormGroup<UpdateBrokerStorageResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterOperationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateClusterConfigurationResponse {
		ClusterArn?: string | null;
		ClusterOperationArn?: string | null;
	}
	export interface UpdateClusterConfigurationResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ClusterOperationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterConfigurationResponseFormGroup() {
		return new FormGroup<UpdateClusterConfigurationResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterOperationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateClusterKafkaVersionResponse {
		ClusterArn?: string | null;
		ClusterOperationArn?: string | null;
	}
	export interface UpdateClusterKafkaVersionResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ClusterOperationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterKafkaVersionResponseFormGroup() {
		return new FormGroup<UpdateClusterKafkaVersionResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterOperationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMonitoringResponse {
		ClusterArn?: string | null;
		ClusterOperationArn?: string | null;
	}
	export interface UpdateMonitoringResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ClusterOperationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMonitoringResponseFormGroup() {
		return new FormGroup<UpdateMonitoringResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterOperationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Client-broker encryption in transit setting.</p>
	 *          
	 */
	export enum ClientBroker { TLS = 0, TLS_PLAINTEXT = 1, PLAINTEXT = 2 }


	/**
	 *             <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
	 *          
	 */
	export enum EnhancedMonitoring { DEFAULT = 0, PER_BROKER = 1, PER_TOPIC_PER_BROKER = 2 }


	/**
	 *             <p>The state of a Kafka cluster.</p>
	 *          
	 */
	export enum ClusterState { ACTIVE = 0, CREATING = 1, UPDATING = 2, DELETING = 3, FAILED = 4 }


	/**
	 *             <p>JMX and Node monitoring for the MSK cluster.</p>
	 *          
	 */
	export interface OpenMonitoringInfo {

		/**
		 * <p>Prometheus settings.</p>
		 * Required
		 */
		Prometheus: PrometheusInfo;
	}

	/**
	 *             <p>JMX and Node monitoring for the MSK cluster.</p>
	 *          
	 */
	export interface OpenMonitoringInfoFormProperties {
	}
	export function CreateOpenMonitoringInfoFormGroup() {
		return new FormGroup<OpenMonitoringInfoFormProperties>({
		});

	}

	export interface CreateClusterRequest {

		/**
		 * <p>Describes the setup to be used for Kafka broker nodes in the cluster.</p>
		 * Required
		 */
		BrokerNodeGroupInfo: BrokerNodeGroupInfo;

		/**
		 * <p>Includes all client authentication information.</p>
		 */
		ClientAuthentication?: ClientAuthentication;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ClusterName: string;

		/**
		 * <p>Specifies the configuration to use for the brokers.</p>
		 */
		ConfigurationInfo?: ConfigurationInfo;

		/**
		 * <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
		 */
		EncryptionInfo?: EncryptionInfo;

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		EnhancedMonitoring?: ClusterInfoEnhancedMonitoring | null;

		/**
		 * <p>JMX and Node monitoring for the MSK cluster.</p>
		 */
		OpenMonitoring?: OpenMonitoringInfo;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		KafkaVersion: string;
		LoggingInfo?: LoggingInfo;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 15
		 */
		NumberOfBrokerNodes: number;
		Tags?: __mapOf__string;
	}
	export interface CreateClusterRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ClusterName: FormControl<string | null | undefined>,

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		EnhancedMonitoring: FormControl<ClusterInfoEnhancedMonitoring | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		KafkaVersion: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 15
		 */
		NumberOfBrokerNodes: FormControl<number | null | undefined>,
	}
	export function CreateCreateClusterRequestFormGroup() {
		return new FormGroup<CreateClusterRequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			EnhancedMonitoring: new FormControl<ClusterInfoEnhancedMonitoring | null | undefined>(undefined),
			KafkaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			NumberOfBrokerNodes: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(15)]),
		});

	}

	export interface CreateConfigurationRequest {
		Description?: string | null;
		KafkaVersions?: Array<string>;

		/** Required */
		Name: string;

		/** Required */
		ServerProperties: string;
	}
	export interface CreateConfigurationRequestFormProperties {
		Description: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ServerProperties: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationRequestFormGroup() {
		return new FormGroup<CreateConfigurationRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerProperties: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteClusterRequest {
	}
	export interface DeleteClusterRequestFormProperties {
	}
	export function CreateDeleteClusterRequestFormGroup() {
		return new FormGroup<DeleteClusterRequestFormProperties>({
		});

	}

	export interface DescribeClusterOperationRequest {
	}
	export interface DescribeClusterOperationRequestFormProperties {
	}
	export function CreateDescribeClusterOperationRequestFormGroup() {
		return new FormGroup<DescribeClusterOperationRequestFormProperties>({
		});

	}

	export interface DescribeClusterRequest {
	}
	export interface DescribeClusterRequestFormProperties {
	}
	export function CreateDescribeClusterRequestFormGroup() {
		return new FormGroup<DescribeClusterRequestFormProperties>({
		});

	}

	export interface DescribeConfigurationRequest {
	}
	export interface DescribeConfigurationRequestFormProperties {
	}
	export function CreateDescribeConfigurationRequestFormGroup() {
		return new FormGroup<DescribeConfigurationRequestFormProperties>({
		});

	}

	export interface DescribeConfigurationRevisionRequest {
	}
	export interface DescribeConfigurationRevisionRequestFormProperties {
	}
	export function CreateDescribeConfigurationRevisionRequestFormGroup() {
		return new FormGroup<DescribeConfigurationRevisionRequestFormProperties>({
		});

	}

	export interface GetBootstrapBrokersRequest {
	}
	export interface GetBootstrapBrokersRequestFormProperties {
	}
	export function CreateGetBootstrapBrokersRequestFormGroup() {
		return new FormGroup<GetBootstrapBrokersRequestFormProperties>({
		});

	}

	export interface GetCompatibleKafkaVersionsRequest {
	}
	export interface GetCompatibleKafkaVersionsRequestFormProperties {
	}
	export function CreateGetCompatibleKafkaVersionsRequestFormGroup() {
		return new FormGroup<GetCompatibleKafkaVersionsRequestFormProperties>({
		});

	}

	export interface ListClusterOperationsRequest {
	}
	export interface ListClusterOperationsRequestFormProperties {
	}
	export function CreateListClusterOperationsRequestFormGroup() {
		return new FormGroup<ListClusterOperationsRequestFormProperties>({
		});

	}

	export interface ListClustersRequest {
	}
	export interface ListClustersRequestFormProperties {
	}
	export function CreateListClustersRequestFormGroup() {
		return new FormGroup<ListClustersRequestFormProperties>({
		});

	}

	export interface ListConfigurationRevisionsRequest {
	}
	export interface ListConfigurationRevisionsRequestFormProperties {
	}
	export function CreateListConfigurationRevisionsRequestFormGroup() {
		return new FormGroup<ListConfigurationRevisionsRequestFormProperties>({
		});

	}

	export interface ListConfigurationsRequest {
	}
	export interface ListConfigurationsRequestFormProperties {
	}
	export function CreateListConfigurationsRequestFormGroup() {
		return new FormGroup<ListConfigurationsRequestFormProperties>({
		});

	}

	export interface ListKafkaVersionsRequest {
	}
	export interface ListKafkaVersionsRequestFormProperties {
	}
	export function CreateListKafkaVersionsRequestFormGroup() {
		return new FormGroup<ListKafkaVersionsRequestFormProperties>({
		});

	}

	export interface ListNodesRequest {
	}
	export interface ListNodesRequestFormProperties {
	}
	export function CreateListNodesRequestFormGroup() {
		return new FormGroup<ListNodesRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}


	/**
	 *             <p>The broker or Zookeeper node.</p>
	 *          
	 */
	export enum NodeType { BROKER = 0 }

	export interface TagResourceRequest {

		/** Required */
		Tags: __mapOf__string;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateBrokerCountRequest {

		/** Required */
		CurrentVersion: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 15
		 */
		TargetNumberOfBrokerNodes: number;
	}
	export interface UpdateBrokerCountRequestFormProperties {

		/** Required */
		CurrentVersion: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 15
		 */
		TargetNumberOfBrokerNodes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateBrokerCountRequestFormGroup() {
		return new FormGroup<UpdateBrokerCountRequestFormProperties>({
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetNumberOfBrokerNodes: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(15)]),
		});

	}

	export interface UpdateBrokerStorageRequest {

		/** Required */
		CurrentVersion: string;

		/** Required */
		TargetBrokerEBSVolumeInfo: Array<BrokerEBSVolumeInfo>;
	}
	export interface UpdateBrokerStorageRequestFormProperties {

		/** Required */
		CurrentVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBrokerStorageRequestFormGroup() {
		return new FormGroup<UpdateBrokerStorageRequestFormProperties>({
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateClusterConfigurationRequest {

		/**
		 * <p>Specifies the configuration to use for the brokers.</p>
		 * Required
		 */
		ConfigurationInfo: ConfigurationInfo;

		/** Required */
		CurrentVersion: string;
	}
	export interface UpdateClusterConfigurationRequestFormProperties {

		/** Required */
		CurrentVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterConfigurationRequestFormGroup() {
		return new FormGroup<UpdateClusterConfigurationRequestFormProperties>({
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateClusterKafkaVersionRequest {

		/**
		 * <p>Specifies the configuration to use for the brokers.</p>
		 */
		ConfigurationInfo?: ConfigurationInfo;

		/** Required */
		CurrentVersion: string;

		/** Required */
		TargetKafkaVersion: string;
	}
	export interface UpdateClusterKafkaVersionRequestFormProperties {

		/** Required */
		CurrentVersion: FormControl<string | null | undefined>,

		/** Required */
		TargetKafkaVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterKafkaVersionRequestFormGroup() {
		return new FormGroup<UpdateClusterKafkaVersionRequestFormProperties>({
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetKafkaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request body for UpdateMonitoring. */
	export interface UpdateMonitoringRequest {

		/** Required */
		CurrentVersion: string;

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		EnhancedMonitoring?: ClusterInfoEnhancedMonitoring | null;

		/**
		 * <p>JMX and Node monitoring for the MSK cluster.</p>
		 */
		OpenMonitoring?: OpenMonitoringInfo;
		LoggingInfo?: LoggingInfo;
	}

	/** Request body for UpdateMonitoring. */
	export interface UpdateMonitoringRequestFormProperties {

		/** Required */
		CurrentVersion: FormControl<string | null | undefined>,

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		EnhancedMonitoring: FormControl<ClusterInfoEnhancedMonitoring | null | undefined>,
	}
	export function CreateUpdateMonitoringRequestFormGroup() {
		return new FormGroup<UpdateMonitoringRequestFormProperties>({
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnhancedMonitoring: new FormControl<ClusterInfoEnhancedMonitoring | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a new MSK cluster.</p>
		 * Post v1/clusters
		 * @return {CreateClusterResponse} Success
		 */
		CreateCluster(requestBody: CreateClusterPostBody): Observable<CreateClusterResponse> {
			return this.http.post<CreateClusterResponse>(this.baseUri + 'v1/clusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of all the MSK clusters in the current Region.</p>
		 * Get v1/clusters
		 * @param {string} clusterNameFilter 
		 *             <p>Specify a prefix of the name of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.</p>
		 *          
		 * @param {number} maxResults 
		 *             <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
		 *          
		 * @param {string} nextToken 
		 *             <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
		 *             To get the next batch, provide this token in your next request.</p>
		 *          
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListClustersResponse} Success
		 */
		ListClusters(clusterNameFilter: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListClustersResponse> {
			return this.http.get<ListClustersResponse>(this.baseUri + 'v1/clusters?clusterNameFilter=' + (clusterNameFilter == null ? '' : encodeURIComponent(clusterNameFilter)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a new MSK configuration.</p>
		 * Post v1/configurations
		 * @return {CreateConfigurationResponse} Success
		 */
		CreateConfiguration(requestBody: CreateConfigurationPostBody): Observable<CreateConfigurationResponse> {
			return this.http.post<CreateConfigurationResponse>(this.baseUri + 'v1/configurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of all the MSK configurations in this Region.</p>
		 * Get v1/configurations
		 * @param {number} maxResults 
		 *             <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
		 *          
		 * @param {string} nextToken 
		 *             <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
		 *             To get the next batch, provide this token in your next request.</p>
		 *          
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConfigurationsResponse} Success
		 */
		ListConfigurations(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListConfigurationsResponse> {
			return this.http.get<ListConfigurationsResponse>(this.baseUri + 'v1/configurations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Deletes the MSK cluster specified by the Amazon Resource Name (ARN) in the request.</p>
		 * Delete v1/clusters/{clusterArn}
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @param {string} currentVersion 
		 *             <p>The current version of the MSK cluster.</p>
		 *          
		 * @return {DeleteClusterResponse} Success
		 */
		DeleteCluster(clusterArn: string, currentVersion: string | null | undefined): Observable<DeleteClusterResponse> {
			return this.http.delete<DeleteClusterResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '&currentVersion=' + (currentVersion == null ? '' : encodeURIComponent(currentVersion)), {});
		}

		/**
		 * <p>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</p>
		 * Get v1/clusters/{clusterArn}
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @return {DescribeClusterResponse} Success
		 */
		DescribeCluster(clusterArn: string): Observable<DescribeClusterResponse> {
			return this.http.get<DescribeClusterResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)), {});
		}

		/**
		 * <p>Returns a description of the cluster operation specified by the ARN.</p>
		 * Get v1/operations/{clusterOperationArn}
		 * @param {string} clusterOperationArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the MSK cluster operation.</p>
		 *          
		 * @return {DescribeClusterOperationResponse} Success
		 */
		DescribeClusterOperation(clusterOperationArn: string): Observable<DescribeClusterOperationResponse> {
			return this.http.get<DescribeClusterOperationResponse>(this.baseUri + 'v1/operations/' + (clusterOperationArn == null ? '' : encodeURIComponent(clusterOperationArn)), {});
		}

		/**
		 * <p>Returns a description of this MSK configuration.</p>
		 * Get v1/configurations/{arn}
		 * @param {string} arn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
		 *          
		 * @return {DescribeConfigurationResponse} Success
		 */
		DescribeConfiguration(arn: string): Observable<DescribeConfigurationResponse> {
			return this.http.get<DescribeConfigurationResponse>(this.baseUri + 'v1/configurations/' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * <p>Returns a description of this revision of the configuration.</p>
		 * Get v1/configurations/{arn}/revisions/{revision}
		 * @param {string} arn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
		 *          
		 * @param {number} revision 
		 *             <p>A string that uniquely identifies a revision of an MSK configuration.</p>
		 *          
		 * @return {DescribeConfigurationRevisionResponse} Success
		 */
		DescribeConfigurationRevision(arn: string, revision: number): Observable<DescribeConfigurationRevisionResponse> {
			return this.http.get<DescribeConfigurationRevisionResponse>(this.baseUri + 'v1/configurations/' + (arn == null ? '' : encodeURIComponent(arn)) + '/revisions/' + revision, {});
		}

		/**
		 * <p>A list of brokers that a client application can use to bootstrap.</p>
		 * Get v1/clusters/{clusterArn}/bootstrap-brokers
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @return {GetBootstrapBrokersResponse} Success
		 */
		GetBootstrapBrokers(clusterArn: string): Observable<GetBootstrapBrokersResponse> {
			return this.http.get<GetBootstrapBrokersResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/bootstrap-brokers', {});
		}

		/**
		 * <p>Gets the Apache Kafka versions to which you can update the MSK cluster.</p>
		 * Get v1/compatible-kafka-versions
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) of the cluster check.</p>
		 *             
		 * @return {GetCompatibleKafkaVersionsResponse} Success
		 */
		GetCompatibleKafkaVersions(clusterArn: string | null | undefined): Observable<GetCompatibleKafkaVersionsResponse> {
			return this.http.get<GetCompatibleKafkaVersionsResponse>(this.baseUri + 'v1/compatible-kafka-versions?clusterArn=' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)), {});
		}

		/**
		 * <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>
		 * Get v1/clusters/{clusterArn}/operations
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @param {number} maxResults 
		 *             <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
		 *          
		 * @param {string} nextToken 
		 *             <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
		 *             To get the next batch, provide this token in your next request.</p>
		 *          
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListClusterOperationsResponse} Success
		 */
		ListClusterOperations(clusterArn: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListClusterOperationsResponse> {
			return this.http.get<ListClusterOperationsResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/operations&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Returns a list of all the MSK configurations in this Region.</p>
		 * Get v1/configurations/{arn}/revisions
		 * @param {string} arn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
		 *          
		 * @param {number} maxResults 
		 *             <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
		 *          
		 * @param {string} nextToken 
		 *             <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
		 *             To get the next batch, provide this token in your next request.</p>
		 *          
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConfigurationRevisionsResponse} Success
		 */
		ListConfigurationRevisions(arn: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListConfigurationRevisionsResponse> {
			return this.http.get<ListConfigurationRevisionsResponse>(this.baseUri + 'v1/configurations/' + (arn == null ? '' : encodeURIComponent(arn)) + '/revisions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Returns a list of Kafka versions.</p>
		 * Get v1/kafka-versions
		 * @param {number} maxResults 
		 *             <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
		 * @param {string} nextToken 
		 *             <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.</p>
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListKafkaVersionsResponse} Success
		 */
		ListKafkaVersions(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListKafkaVersionsResponse> {
			return this.http.get<ListKafkaVersionsResponse>(this.baseUri + 'v1/kafka-versions?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Returns a list of the broker nodes in the cluster.</p>
		 * Get v1/clusters/{clusterArn}/nodes
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @param {number} maxResults 
		 *             <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
		 *          
		 * @param {string} nextToken 
		 *             <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
		 *             To get the next batch, provide this token in your next request.</p>
		 *          
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNodesResponse} Success
		 */
		ListNodes(clusterArn: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListNodesResponse> {
			return this.http.get<ListNodesResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/nodes&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Returns a list of the tags associated with the specified resource.</p>
		 * Get v1/tags/{resourceArn}
		 * @param {string} resourceArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
		 *          
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Adds tags to the specified MSK resource.</p>
		 * Post v1/tags/{resourceArn}
		 * @param {string} resourceArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
		 *          
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the tags associated with the keys that are provided in the query.</p>
		 * Delete v1/tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
		 *          
		 * @param {Array<string>} tagKeys 
		 *             <p>Tag keys must be unique for a given cluster. In addition, the following restrictions apply:</p>
		 *             <ul>
		 *                <li>
		 *                   <p>Each tag key must be unique. If you add a tag with a key that's already in
		 *                   use, your new tag overwrites the existing key-value pair. </p>
		 *                </li>
		 *                <li>
		 *                   <p>You can't start a tag key with aws: because this prefix is reserved for use
		 *                   by  AWS.  AWS creates tags that begin with this prefix on your behalf, but
		 *                   you can't edit or delete them.</p>
		 *                </li>
		 *                <li>
		 *                   <p>Tag keys must be between 1 and 128 Unicode characters in length.</p>
		 *                </li>
		 *                <li>
		 *                   <p>Tag keys must consist of the following characters: Unicode letters, digits,
		 *                   white space, and the following special characters: _ . / = + -
		 *                      @.</p>
		 *                </li>
		 *             </ul>
		 *          
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the number of broker nodes in the cluster.</p>
		 * Put v1/clusters/{clusterArn}/nodes/count
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @return {UpdateBrokerCountResponse} Success
		 */
		UpdateBrokerCount(clusterArn: string, requestBody: UpdateBrokerCountPutBody): Observable<UpdateBrokerCountResponse> {
			return this.http.put<UpdateBrokerCountResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/nodes/count', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the EBS storage associated with MSK brokers.</p>
		 * Put v1/clusters/{clusterArn}/nodes/storage
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @return {UpdateBrokerStorageResponse} Success
		 */
		UpdateBrokerStorage(clusterArn: string, requestBody: UpdateBrokerStoragePutBody): Observable<UpdateBrokerStorageResponse> {
			return this.http.put<UpdateBrokerStorageResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/nodes/storage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the cluster with the configuration that is specified in the request body.</p>
		 * Put v1/clusters/{clusterArn}/configuration
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @return {UpdateClusterConfigurationResponse} Success
		 */
		UpdateClusterConfiguration(clusterArn: string, requestBody: UpdateClusterConfigurationPutBody): Observable<UpdateClusterConfigurationResponse> {
			return this.http.put<UpdateClusterConfigurationResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the Apache Kafka version for the cluster.</p>
		 * Put v1/clusters/{clusterArn}/version
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
		 *             
		 * @return {UpdateClusterKafkaVersionResponse} Success
		 */
		UpdateClusterKafkaVersion(clusterArn: string, requestBody: UpdateClusterKafkaVersionPutBody): Observable<UpdateClusterKafkaVersionResponse> {
			return this.http.put<UpdateClusterKafkaVersionResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/version', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the monitoring settings for the cluster. You can use this operation to specify which Apache Kafka metrics you want Amazon MSK to send to Amazon CloudWatch. You can also specify settings for open monitoring with Prometheus.</p>
		 * Put v1/clusters/{clusterArn}/monitoring
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @return {UpdateMonitoringResponse} Success
		 */
		UpdateMonitoring(clusterArn: string, requestBody: UpdateMonitoringPutBody): Observable<UpdateMonitoringResponse> {
			return this.http.put<UpdateMonitoringResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/monitoring', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateClusterPostBody {

		/**
		 * <p>Describes the setup to be used for Kafka broker nodes in the cluster.</p>
		 * Required
		 */
		brokerNodeGroupInfo: CreateClusterPostBodyBrokerNodeGroupInfo;

		/**
		 * <p>Includes all client authentication information.</p>
		 */
		clientAuthentication?: CreateClusterPostBodyClientAuthentication;

		/**
		 * <p>The name of the cluster.</p>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clusterName: string;

		/**
		 * <p>Specifies the configuration to use for the brokers.</p>
		 */
		configurationInfo?: CreateClusterPostBodyConfigurationInfo;

		/**
		 * <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
		 */
		encryptionInfo?: CreateClusterPostBodyEncryptionInfo;

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		enhancedMonitoring?: ClusterInfoEnhancedMonitoring | null;

		/**
		 * <p>JMX and Node monitoring for the MSK cluster.</p>
		 */
		openMonitoring?: CreateClusterPostBodyOpenMonitoring;

		/**
		 * <p>The version of Apache Kafka.</p>
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		kafkaVersion: string;
		loggingInfo?: CreateClusterPostBodyLoggingInfo;

		/**
		 * <p>The number of broker nodes in the cluster.</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 15
		 */
		numberOfBrokerNodes: number;

		/**
		 * <p>Create tags when creating the cluster.</p>
		 */
		tags?: {[id: string]: string };
	}
	export interface CreateClusterPostBodyFormProperties {

		/**
		 * <p>The name of the cluster.</p>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clusterName: FormControl<string | null | undefined>,

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		enhancedMonitoring: FormControl<ClusterInfoEnhancedMonitoring | null | undefined>,

		/**
		 * <p>The version of Apache Kafka.</p>
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		kafkaVersion: FormControl<string | null | undefined>,

		/**
		 * <p>The number of broker nodes in the cluster.</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 15
		 */
		numberOfBrokerNodes: FormControl<number | null | undefined>,

		/**
		 * <p>Create tags when creating the cluster.</p>
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateClusterPostBodyFormGroup() {
		return new FormGroup<CreateClusterPostBodyFormProperties>({
			clusterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			enhancedMonitoring: new FormControl<ClusterInfoEnhancedMonitoring | null | undefined>(undefined),
			kafkaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			numberOfBrokerNodes: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(15)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateClusterPostBodyBrokerNodeGroupInfo {

		/**
		 * <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>
		 * <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>
		 */
		BrokerAZDistribution?: BrokerAZDistribution | null;
		ClientSubnets?: Array<string>;

		/**
		 * Max length: 32
		 * Min length: 5
		 */
		InstanceType?: string | null;
		SecurityGroups?: Array<string>;

		/**
		 * <p>Contains information about storage volumes attached to MSK broker nodes.</p>
		 */
		StorageInfo?: StorageInfo;
	}
	export interface CreateClusterPostBodyBrokerNodeGroupInfoFormProperties {

		/**
		 * <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>
		 * <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>
		 */
		BrokerAZDistribution: FormControl<BrokerAZDistribution | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 5
		 */
		InstanceType: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterPostBodyBrokerNodeGroupInfoFormGroup() {
		return new FormGroup<CreateClusterPostBodyBrokerNodeGroupInfoFormProperties>({
			BrokerAZDistribution: new FormControl<BrokerAZDistribution | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(5)]),
		});

	}

	export interface CreateClusterPostBodyClientAuthentication {

		/**
		 * <p>Details for client authentication using TLS.</p>
		 */
		Tls?: Tls;
	}
	export interface CreateClusterPostBodyClientAuthenticationFormProperties {
	}
	export function CreateCreateClusterPostBodyClientAuthenticationFormGroup() {
		return new FormGroup<CreateClusterPostBodyClientAuthenticationFormProperties>({
		});

	}

	export interface CreateClusterPostBodyConfigurationInfo {
		Arn?: string | null;
		Revision?: number | null;
	}
	export interface CreateClusterPostBodyConfigurationInfoFormProperties {
		Arn: FormControl<string | null | undefined>,
		Revision: FormControl<number | null | undefined>,
	}
	export function CreateCreateClusterPostBodyConfigurationInfoFormGroup() {
		return new FormGroup<CreateClusterPostBodyConfigurationInfoFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateClusterPostBodyEncryptionInfo {

		/**
		 * <p>The data-volume encryption details.</p>
		 */
		EncryptionAtRest?: EncryptionAtRest;

		/**
		 * <p>The settings for encrypting data in transit.</p>
		 */
		EncryptionInTransit?: EncryptionInTransit;
	}
	export interface CreateClusterPostBodyEncryptionInfoFormProperties {
	}
	export function CreateCreateClusterPostBodyEncryptionInfoFormGroup() {
		return new FormGroup<CreateClusterPostBodyEncryptionInfoFormProperties>({
		});

	}

	export interface CreateClusterPostBodyOpenMonitoring {

		/**
		 * <p>Prometheus settings.</p>
		 */
		Prometheus?: PrometheusInfo;
	}
	export interface CreateClusterPostBodyOpenMonitoringFormProperties {
	}
	export function CreateCreateClusterPostBodyOpenMonitoringFormGroup() {
		return new FormGroup<CreateClusterPostBodyOpenMonitoringFormProperties>({
		});

	}

	export interface CreateClusterPostBodyLoggingInfo {
		BrokerLogs?: BrokerLogs;
	}
	export interface CreateClusterPostBodyLoggingInfoFormProperties {
	}
	export function CreateCreateClusterPostBodyLoggingInfoFormGroup() {
		return new FormGroup<CreateClusterPostBodyLoggingInfoFormProperties>({
		});

	}

	export interface CreateConfigurationPostBody {

		/**
		 * <p>The description of the configuration.</p>
		 */
		description?: string | null;

		/**
		 * <p>The versions of Apache Kafka with which you can use this MSK configuration.</p>
		 */
		kafkaVersions?: Array<string>;

		/**
		 * <p>The name of the configuration.</p>
		 * Required
		 */
		name: string;

		/**
		 * <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
		 * When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
		 * Required
		 */
		serverProperties: string;
	}
	export interface CreateConfigurationPostBodyFormProperties {

		/**
		 * <p>The description of the configuration.</p>
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * <p>The name of the configuration.</p>
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
		 * When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
		 * Required
		 */
		serverProperties: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationPostBodyFormGroup() {
		return new FormGroup<CreateConfigurationPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverProperties: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * <p>The key-value pair for the resource tag.</p>
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * <p>The key-value pair for the resource tag.</p>
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateBrokerCountPutBody {

		/**
		 * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
		 * Required
		 */
		currentVersion: string;

		/**
		 * <p>The number of broker nodes that you want the cluster to have after this operation completes successfully.</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 15
		 */
		targetNumberOfBrokerNodes: number;
	}
	export interface UpdateBrokerCountPutBodyFormProperties {

		/**
		 * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
		 * Required
		 */
		currentVersion: FormControl<string | null | undefined>,

		/**
		 * <p>The number of broker nodes that you want the cluster to have after this operation completes successfully.</p>
		 * Required
		 * Minimum: 1
		 * Maximum: 15
		 */
		targetNumberOfBrokerNodes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateBrokerCountPutBodyFormGroup() {
		return new FormGroup<UpdateBrokerCountPutBodyFormProperties>({
			currentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetNumberOfBrokerNodes: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(15)]),
		});

	}

	export interface UpdateBrokerStoragePutBody {

		/**
		 * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
		 * Required
		 */
		currentVersion: string;

		/**
		 * <p>Describes the target volume size and the ID of the broker to apply the update to.</p>
		 * Required
		 */
		targetBrokerEBSVolumeInfo: Array<BrokerEBSVolumeInfo>;
	}
	export interface UpdateBrokerStoragePutBodyFormProperties {

		/**
		 * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
		 * Required
		 */
		currentVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBrokerStoragePutBodyFormGroup() {
		return new FormGroup<UpdateBrokerStoragePutBodyFormProperties>({
			currentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateClusterConfigurationPutBody {

		/**
		 * <p>Specifies the configuration to use for the brokers.</p>
		 * Required
		 */
		configurationInfo: UpdateClusterConfigurationPutBodyConfigurationInfo;

		/**
		 * <p>The version of the cluster that needs to be updated.</p>
		 * Required
		 */
		currentVersion: string;
	}
	export interface UpdateClusterConfigurationPutBodyFormProperties {

		/**
		 * <p>The version of the cluster that needs to be updated.</p>
		 * Required
		 */
		currentVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateClusterConfigurationPutBodyFormProperties>({
			currentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateClusterConfigurationPutBodyConfigurationInfo {
		Arn?: string | null;
		Revision?: number | null;
	}
	export interface UpdateClusterConfigurationPutBodyConfigurationInfoFormProperties {
		Arn: FormControl<string | null | undefined>,
		Revision: FormControl<number | null | undefined>,
	}
	export function CreateUpdateClusterConfigurationPutBodyConfigurationInfoFormGroup() {
		return new FormGroup<UpdateClusterConfigurationPutBodyConfigurationInfoFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateClusterKafkaVersionPutBody {

		/**
		 * <p>Specifies the configuration to use for the brokers.</p>
		 */
		configurationInfo?: UpdateClusterKafkaVersionPutBodyConfigurationInfo;

		/**
		 * <p>Current cluster version.</p>
		 * Required
		 */
		currentVersion: string;

		/**
		 * <p>Target Kafka version.</p>
		 * Required
		 */
		targetKafkaVersion: string;
	}
	export interface UpdateClusterKafkaVersionPutBodyFormProperties {

		/**
		 * <p>Current cluster version.</p>
		 * Required
		 */
		currentVersion: FormControl<string | null | undefined>,

		/**
		 * <p>Target Kafka version.</p>
		 * Required
		 */
		targetKafkaVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterKafkaVersionPutBodyFormGroup() {
		return new FormGroup<UpdateClusterKafkaVersionPutBodyFormProperties>({
			currentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetKafkaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateClusterKafkaVersionPutBodyConfigurationInfo {
		Arn?: string | null;
		Revision?: number | null;
	}
	export interface UpdateClusterKafkaVersionPutBodyConfigurationInfoFormProperties {
		Arn: FormControl<string | null | undefined>,
		Revision: FormControl<number | null | undefined>,
	}
	export function CreateUpdateClusterKafkaVersionPutBodyConfigurationInfoFormGroup() {
		return new FormGroup<UpdateClusterKafkaVersionPutBodyConfigurationInfoFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateMonitoringPutBody {

		/**
		 * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
		 * Required
		 */
		currentVersion: string;

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		enhancedMonitoring?: ClusterInfoEnhancedMonitoring | null;

		/**
		 * <p>JMX and Node monitoring for the MSK cluster.</p>
		 */
		openMonitoring?: UpdateMonitoringPutBodyOpenMonitoring;
		loggingInfo?: UpdateMonitoringPutBodyLoggingInfo;
	}
	export interface UpdateMonitoringPutBodyFormProperties {

		/**
		 * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
		 * Required
		 */
		currentVersion: FormControl<string | null | undefined>,

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		enhancedMonitoring: FormControl<ClusterInfoEnhancedMonitoring | null | undefined>,
	}
	export function CreateUpdateMonitoringPutBodyFormGroup() {
		return new FormGroup<UpdateMonitoringPutBodyFormProperties>({
			currentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enhancedMonitoring: new FormControl<ClusterInfoEnhancedMonitoring | null | undefined>(undefined),
		});

	}

	export interface UpdateMonitoringPutBodyOpenMonitoring {

		/**
		 * <p>Prometheus settings.</p>
		 */
		Prometheus?: PrometheusInfo;
	}
	export interface UpdateMonitoringPutBodyOpenMonitoringFormProperties {
	}
	export function CreateUpdateMonitoringPutBodyOpenMonitoringFormGroup() {
		return new FormGroup<UpdateMonitoringPutBodyOpenMonitoringFormProperties>({
		});

	}

	export interface UpdateMonitoringPutBodyLoggingInfo {
		BrokerLogs?: BrokerLogs;
	}
	export interface UpdateMonitoringPutBodyLoggingInfoFormProperties {
	}
	export function CreateUpdateMonitoringPutBodyLoggingInfoFormGroup() {
		return new FormGroup<UpdateMonitoringPutBodyLoggingInfoFormProperties>({
		});

	}

}

