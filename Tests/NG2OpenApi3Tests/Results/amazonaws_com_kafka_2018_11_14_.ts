import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchAssociateScramSecretResponse {
		ClusterArn?: string;
		UnprocessedScramSecrets?: Array<UnprocessedScramSecret>;
	}
	export interface BatchAssociateScramSecretResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchAssociateScramSecretResponseFormGroup() {
		return new FormGroup<BatchAssociateScramSecretResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Error info for scram secret associate/disassociate failure.</p>
	 *          
	 */
	export interface UnprocessedScramSecret {
		ErrorCode?: string;
		ErrorMessage?: string;
		SecretArn?: string;
	}

	/**
	 *             <p>Error info for scram secret associate/disassociate failure.</p>
	 *          
	 */
	export interface UnprocessedScramSecretFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedScramSecretFormGroup() {
		return new FormGroup<UnprocessedScramSecretFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
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

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
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

	export interface CreateClusterResponse {
		ClusterArn?: string;
		ClusterName?: string;
		State?: ClusterState;
	}
	export interface CreateClusterResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ClusterName: FormControl<string | null | undefined>,
		State: FormControl<ClusterState | null | undefined>,
	}
	export function CreateCreateClusterResponseFormGroup() {
		return new FormGroup<CreateClusterResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ClusterState | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>The state of the Apache Kafka cluster.</p>
	 *          
	 */
	export enum ClusterState { ACTIVE = 0, CREATING = 1, DELETING = 2, FAILED = 3, HEALING = 4, MAINTENANCE = 5, REBOOTING_BROKER = 6, UPDATING = 7 }


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
	 *             <p>Contains information about the EBS storage volumes attached to Apache Kafka broker nodes.</p>
	 *          
	 */
	export interface EBSStorageInfo {
		ProvisionedThroughput?: ProvisionedThroughput;
		VolumeSize?: number | null;
	}

	/**
	 *             <p>Contains information about the EBS storage volumes attached to Apache Kafka broker nodes.</p>
	 *          
	 */
	export interface EBSStorageInfoFormProperties {
		VolumeSize: FormControl<number | null | undefined>,
	}
	export function CreateEBSStorageInfoFormGroup() {
		return new FormGroup<EBSStorageInfoFormProperties>({
			VolumeSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Contains information about provisioned throughput for EBS storage volumes attached to kafka broker nodes.</p>
	 *          
	 */
	export interface ProvisionedThroughput {
		Enabled?: boolean | null;
		VolumeThroughput?: number | null;
	}

	/**
	 *             <p>Contains information about provisioned throughput for EBS storage volumes attached to kafka broker nodes.</p>
	 *          
	 */
	export interface ProvisionedThroughputFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		VolumeThroughput: FormControl<number | null | undefined>,
	}
	export function CreateProvisionedThroughputFormGroup() {
		return new FormGroup<ProvisionedThroughputFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			VolumeThroughput: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Information about the broker access configuration.</p>
	 *          
	 */
	export interface ConnectivityInfo {
		PublicAccess?: PublicAccess;
		VpcConnectivity?: VpcConnectivity;
	}

	/**
	 *             <p>Information about the broker access configuration.</p>
	 *          
	 */
	export interface ConnectivityInfoFormProperties {
	}
	export function CreateConnectivityInfoFormGroup() {
		return new FormGroup<ConnectivityInfoFormProperties>({
		});

	}


	/** Public access control for brokers. */
	export interface PublicAccess {
		Type?: string;
	}

	/** Public access control for brokers. */
	export interface PublicAccessFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreatePublicAccessFormGroup() {
		return new FormGroup<PublicAccessFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VPC connectivity access control for brokers. */
	export interface VpcConnectivity {
		ClientAuthentication?: VpcConnectivityClientAuthentication;
	}

	/** VPC connectivity access control for brokers. */
	export interface VpcConnectivityFormProperties {
	}
	export function CreateVpcConnectivityFormGroup() {
		return new FormGroup<VpcConnectivityFormProperties>({
		});

	}


	/**
	 *             <p>Includes all client authentication information for VPC connectivity.</p>
	 *          
	 */
	export interface VpcConnectivityClientAuthentication {
		Sasl?: VpcConnectivitySasl;
		Tls?: VpcConnectivityTls;
	}

	/**
	 *             <p>Includes all client authentication information for VPC connectivity.</p>
	 *          
	 */
	export interface VpcConnectivityClientAuthenticationFormProperties {
	}
	export function CreateVpcConnectivityClientAuthenticationFormGroup() {
		return new FormGroup<VpcConnectivityClientAuthenticationFormProperties>({
		});

	}


	/**
	 *             <p>Details for SASL client authentication for VPC connectivity.</p>
	 *          
	 */
	export interface VpcConnectivitySasl {
		Scram?: VpcConnectivityScram;
		Iam?: VpcConnectivityIam;
	}

	/**
	 *             <p>Details for SASL client authentication for VPC connectivity.</p>
	 *          
	 */
	export interface VpcConnectivitySaslFormProperties {
	}
	export function CreateVpcConnectivitySaslFormGroup() {
		return new FormGroup<VpcConnectivitySaslFormProperties>({
		});

	}


	/**
	 *             <p>Details for SASL/SCRAM client authentication for VPC connectivity.</p>
	 *          
	 */
	export interface VpcConnectivityScram {
		Enabled?: boolean | null;
	}

	/**
	 *             <p>Details for SASL/SCRAM client authentication for VPC connectivity.</p>
	 *          
	 */
	export interface VpcConnectivityScramFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVpcConnectivityScramFormGroup() {
		return new FormGroup<VpcConnectivityScramFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Details for IAM access control for VPC connectivity.</p>
	 *          
	 */
	export interface VpcConnectivityIam {
		Enabled?: boolean | null;
	}

	/**
	 *             <p>Details for IAM access control for VPC connectivity.</p>
	 *          
	 */
	export interface VpcConnectivityIamFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVpcConnectivityIamFormGroup() {
		return new FormGroup<VpcConnectivityIamFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Details for TLS client authentication for VPC connectivity.</p>
	 *          
	 */
	export interface VpcConnectivityTls {
		Enabled?: boolean | null;
	}

	/**
	 *             <p>Details for TLS client authentication for VPC connectivity.</p>
	 *          
	 */
	export interface VpcConnectivityTlsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVpcConnectivityTlsFormGroup() {
		return new FormGroup<VpcConnectivityTlsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Details for client authentication using SASL.</p>
	 *          
	 */
	export interface Sasl {
		Scram?: Scram;
		Iam?: Iam;
	}

	/**
	 *             <p>Details for client authentication using SASL.</p>
	 *          
	 */
	export interface SaslFormProperties {
	}
	export function CreateSaslFormGroup() {
		return new FormGroup<SaslFormProperties>({
		});

	}


	/**
	 *             <p>Details for SASL/SCRAM client authentication.</p>
	 *          
	 */
	export interface Scram {
		Enabled?: boolean | null;
	}

	/**
	 *             <p>Details for SASL/SCRAM client authentication.</p>
	 *          
	 */
	export interface ScramFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateScramFormGroup() {
		return new FormGroup<ScramFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Details for IAM access control.</p>
	 *          
	 */
	export interface Iam {
		Enabled?: boolean | null;
	}

	/**
	 *             <p>Details for IAM access control.</p>
	 *          
	 */
	export interface IamFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateIamFormGroup() {
		return new FormGroup<IamFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Details for client authentication using TLS.</p>
	 *          
	 */
	export interface Tls {
		CertificateAuthorityArnList?: Array<string>;
		Enabled?: boolean | null;
	}

	/**
	 *             <p>Details for client authentication using TLS.</p>
	 *          
	 */
	export interface TlsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateTlsFormGroup() {
		return new FormGroup<TlsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Unauthenticated {
		Enabled?: boolean | null;
	}
	export interface UnauthenticatedFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUnauthenticatedFormGroup() {
		return new FormGroup<UnauthenticatedFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
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
		ClientBroker?: ClientBroker;
		InCluster?: boolean | null;
	}

	/**
	 *             <p>The settings for encrypting data in transit.</p>
	 *          
	 */
	export interface EncryptionInTransitFormProperties {
		ClientBroker: FormControl<ClientBroker | null | undefined>,
		InCluster: FormControl<boolean | null | undefined>,
	}
	export function CreateEncryptionInTransitFormGroup() {
		return new FormGroup<EncryptionInTransitFormProperties>({
			ClientBroker: new FormControl<ClientBroker | null | undefined>(undefined),
			InCluster: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Client-broker encryption in transit setting.</p>
	 *          
	 */
	export enum ClientBroker { TLS = 0, TLS_PLAINTEXT = 1, PLAINTEXT = 2 }


	/**
	 *             <p>Prometheus settings.</p>
	 *          
	 */
	export interface PrometheusInfo {
		JmxExporter?: JmxExporterInfo;
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
	 *             <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
	 *          
	 */
	export interface JmxExporterInfo {

		/** Required */
		EnabledInBroker: boolean;
	}

	/**
	 *             <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
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
	 *             <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
	 *          
	 */
	export interface NodeExporterInfo {

		/** Required */
		EnabledInBroker: boolean;
	}

	/**
	 *             <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
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
		LogGroup?: string;
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
		DeliveryStream?: string;

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
		Bucket?: string;

		/** Required */
		Enabled: boolean;
		Prefix?: string;
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface CreateClusterV2Response {
		ClusterArn?: string;
		ClusterName?: string;
		State?: ClusterState;
		ClusterType?: ClusterType;
	}
	export interface CreateClusterV2ResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ClusterName: FormControl<string | null | undefined>,
		State: FormControl<ClusterState | null | undefined>,
		ClusterType: FormControl<ClusterType | null | undefined>,
	}
	export function CreateCreateClusterV2ResponseFormGroup() {
		return new FormGroup<CreateClusterV2ResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ClusterState | null | undefined>(undefined),
			ClusterType: new FormControl<ClusterType | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>The type of cluster.</p>
	 *          
	 */
	export enum ClusterType { PROVISIONED = 0, SERVERLESS = 1 }


	/**
	 *             <p>Describes the setup to be used for Apache Kafka broker nodes in the cluster.</p>
	 *          
	 */
	export interface BrokerNodeGroupInfo {
		BrokerAZDistribution?: BrokerAZDistribution;

		/** Required */
		ClientSubnets: Array<string>;

		/** Required */
		InstanceType: string;
		SecurityGroups?: Array<string>;
		StorageInfo?: StorageInfo;
		ConnectivityInfo?: ConnectivityInfo;
		ZoneIds?: Array<string>;
	}

	/**
	 *             <p>Describes the setup to be used for Apache Kafka broker nodes in the cluster.</p>
	 *          
	 */
	export interface BrokerNodeGroupInfoFormProperties {
		BrokerAZDistribution: FormControl<BrokerAZDistribution | null | undefined>,

		/** Required */
		InstanceType: FormControl<string | null | undefined>,
	}
	export function CreateBrokerNodeGroupInfoFormGroup() {
		return new FormGroup<BrokerNodeGroupInfoFormProperties>({
			BrokerAZDistribution: new FormControl<BrokerAZDistribution | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 *             <p>Includes all client authentication information.</p>
	 *          
	 */
	export interface ClientAuthentication {
		Sasl?: Sasl;
		Tls?: Tls;
		Unauthenticated?: Unauthenticated;
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


	/**
	 *             <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
	 *          
	 */
	export interface EncryptionInfo {
		EncryptionAtRest?: EncryptionAtRest;
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


	/**
	 *             <p>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
	 *          
	 */
	export enum EnhancedMonitoring { DEFAULT = 0, PER_BROKER = 1, PER_TOPIC_PER_BROKER = 2, PER_TOPIC_PER_PARTITION = 3 }


	/**
	 *             <p>JMX and Node monitoring for the MSK cluster.</p>
	 *          
	 */
	export interface OpenMonitoringInfo {

		/** Required */
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


	/** Controls storage mode for various supported storage tiers. */
	export enum StorageMode { LOCAL = 0, TIERED = 1 }


	/**
	 *             <p>The configuration of the Amazon VPCs for the cluster.</p>
	 *          
	 */
	export interface VpcConfig {

		/** Required */
		SubnetIds: Array<string>;
		SecurityGroupIds?: Array<string>;
	}

	/**
	 *             <p>The configuration of the Amazon VPCs for the cluster.</p>
	 *          
	 */
	export interface VpcConfigFormProperties {
	}
	export function CreateVpcConfigFormGroup() {
		return new FormGroup<VpcConfigFormProperties>({
		});

	}


	/**
	 *             <p>Includes all client authentication information.</p>
	 *          
	 */
	export interface ServerlessClientAuthentication {
		Sasl?: ServerlessSasl;
	}

	/**
	 *             <p>Includes all client authentication information.</p>
	 *          
	 */
	export interface ServerlessClientAuthenticationFormProperties {
	}
	export function CreateServerlessClientAuthenticationFormGroup() {
		return new FormGroup<ServerlessClientAuthenticationFormProperties>({
		});

	}


	/**
	 *             <p>Details for client authentication using SASL.</p>
	 *          
	 */
	export interface ServerlessSasl {
		Iam?: Iam;
	}

	/**
	 *             <p>Details for client authentication using SASL.</p>
	 *          
	 */
	export interface ServerlessSaslFormProperties {
	}
	export function CreateServerlessSaslFormGroup() {
		return new FormGroup<ServerlessSaslFormProperties>({
		});

	}

	export interface CreateConfigurationResponse {
		Arn?: string;
		CreationTime?: Date;
		LatestRevision?: ConfigurationRevision;
		Name?: string;
		State?: ConfigurationState;
	}
	export interface CreateConfigurationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<ConfigurationState | null | undefined>,
	}
	export function CreateCreateConfigurationResponseFormGroup() {
		return new FormGroup<CreateConfigurationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ConfigurationState | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Describes a configuration revision.</p>
	 *          
	 */
	export interface ConfigurationRevision {

		/** Required */
		CreationTime: Date;
		Description?: string;

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


	/**
	 *             <p>The state of a configuration.</p>
	 *          
	 */
	export enum ConfigurationState { ACTIVE = 0, DELETING = 1, DELETE_FAILED = 2 }

	export interface CreateVpcConnectionResponse {
		VpcConnectionArn?: string;
		State?: VpcConnectionState;
		Authentication?: string;
		VpcId?: string;
		ClientSubnets?: Array<string>;
		SecurityGroups?: Array<string>;
		CreationTime?: Date;
		Tags?: __mapOf__string;
	}
	export interface CreateVpcConnectionResponseFormProperties {
		VpcConnectionArn: FormControl<string | null | undefined>,
		State: FormControl<VpcConnectionState | null | undefined>,
		Authentication: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateVpcConnectionResponseFormGroup() {
		return new FormGroup<CreateVpcConnectionResponseFormProperties>({
			VpcConnectionArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<VpcConnectionState | null | undefined>(undefined),
			Authentication: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>The state of a VPC connection.</p>
	 *          
	 */
	export enum VpcConnectionState { CREATING = 0, AVAILABLE = 1, INACTIVE = 2, DEACTIVATING = 3, DELETING = 4, FAILED = 5, REJECTED = 6, REJECTING = 7 }

	export interface __mapOf__string {
	}
	export interface __mapOf__stringFormProperties {
	}
	export function Create__mapOf__stringFormGroup() {
		return new FormGroup<__mapOf__stringFormProperties>({
		});

	}

	export interface DeleteClusterResponse {
		ClusterArn?: string;
		State?: ClusterState;
	}
	export interface DeleteClusterResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		State: FormControl<ClusterState | null | undefined>,
	}
	export function CreateDeleteClusterResponseFormGroup() {
		return new FormGroup<DeleteClusterResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ClusterState | null | undefined>(undefined),
		});

	}

	export interface DeleteClusterPolicyResponse {
	}
	export interface DeleteClusterPolicyResponseFormProperties {
	}
	export function CreateDeleteClusterPolicyResponseFormGroup() {
		return new FormGroup<DeleteClusterPolicyResponseFormProperties>({
		});

	}

	export interface DeleteConfigurationResponse {
		Arn?: string;
		State?: ConfigurationState;
	}
	export interface DeleteConfigurationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		State: FormControl<ConfigurationState | null | undefined>,
	}
	export function CreateDeleteConfigurationResponseFormGroup() {
		return new FormGroup<DeleteConfigurationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ConfigurationState | null | undefined>(undefined),
		});

	}

	export interface DeleteVpcConnectionResponse {
		VpcConnectionArn?: string;
		State?: VpcConnectionState;
	}
	export interface DeleteVpcConnectionResponseFormProperties {
		VpcConnectionArn: FormControl<string | null | undefined>,
		State: FormControl<VpcConnectionState | null | undefined>,
	}
	export function CreateDeleteVpcConnectionResponseFormGroup() {
		return new FormGroup<DeleteVpcConnectionResponseFormProperties>({
			VpcConnectionArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<VpcConnectionState | null | undefined>(undefined),
		});

	}

	export interface DescribeClusterResponse {
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
		ActiveOperationArn?: string;
		BrokerNodeGroupInfo?: BrokerNodeGroupInfo;
		ClientAuthentication?: ClientAuthentication;
		ClusterArn?: string;
		ClusterName?: string;
		CreationTime?: Date;
		CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;
		CurrentVersion?: string;
		EncryptionInfo?: EncryptionInfo;
		EnhancedMonitoring?: EnhancedMonitoring;
		OpenMonitoring?: OpenMonitoring;
		LoggingInfo?: LoggingInfo;
		NumberOfBrokerNodes?: number | null;
		State?: ClusterState;
		StateInfo?: StateInfo;
		Tags?: __mapOf__string;
		ZookeeperConnectString?: string;
		ZookeeperConnectStringTls?: string;
		StorageMode?: StorageMode;
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
		EnhancedMonitoring: FormControl<EnhancedMonitoring | null | undefined>,
		NumberOfBrokerNodes: FormControl<number | null | undefined>,
		State: FormControl<ClusterState | null | undefined>,
		ZookeeperConnectString: FormControl<string | null | undefined>,
		ZookeeperConnectStringTls: FormControl<string | null | undefined>,
		StorageMode: FormControl<StorageMode | null | undefined>,
	}
	export function CreateClusterInfoFormGroup() {
		return new FormGroup<ClusterInfoFormProperties>({
			ActiveOperationArn: new FormControl<string | null | undefined>(undefined),
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			CurrentVersion: new FormControl<string | null | undefined>(undefined),
			EnhancedMonitoring: new FormControl<EnhancedMonitoring | null | undefined>(undefined),
			NumberOfBrokerNodes: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<ClusterState | null | undefined>(undefined),
			ZookeeperConnectString: new FormControl<string | null | undefined>(undefined),
			ZookeeperConnectStringTls: new FormControl<string | null | undefined>(undefined),
			StorageMode: new FormControl<StorageMode | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Information about the current software installed on the cluster.</p>
	 *          
	 */
	export interface BrokerSoftwareInfo {
		ConfigurationArn?: string;
		ConfigurationRevision?: number | null;
		KafkaVersion?: string;
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
	 *             <p>JMX and Node monitoring for the MSK cluster.</p>
	 *          
	 */
	export interface OpenMonitoring {

		/** Required */
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
		JmxExporter?: JmxExporter;
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
	 *             <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
	 *          
	 */
	export interface JmxExporter {

		/** Required */
		EnabledInBroker: boolean;
	}

	/**
	 *             <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
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
	 *             <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
	 *          
	 */
	export interface NodeExporter {

		/** Required */
		EnabledInBroker: boolean;
	}

	/**
	 *             <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
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

	export interface StateInfo {
		Code?: string;
		Message?: string;
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

	export interface DescribeClusterV2Response {
		ClusterInfo?: Cluster;
	}
	export interface DescribeClusterV2ResponseFormProperties {
	}
	export function CreateDescribeClusterV2ResponseFormGroup() {
		return new FormGroup<DescribeClusterV2ResponseFormProperties>({
		});

	}


	/**
	 *             <p>Returns information about a cluster.</p>
	 *          
	 */
	export interface Cluster {
		ActiveOperationArn?: string;
		ClusterType?: ClusterType;
		ClusterArn?: string;
		ClusterName?: string;
		CreationTime?: Date;
		CurrentVersion?: string;
		State?: ClusterState;
		StateInfo?: StateInfo;
		Tags?: __mapOf__string;
		Provisioned?: Provisioned;
		Serverless?: Serverless;
	}

	/**
	 *             <p>Returns information about a cluster.</p>
	 *          
	 */
	export interface ClusterFormProperties {
		ActiveOperationArn: FormControl<string | null | undefined>,
		ClusterType: FormControl<ClusterType | null | undefined>,
		ClusterArn: FormControl<string | null | undefined>,
		ClusterName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		CurrentVersion: FormControl<string | null | undefined>,
		State: FormControl<ClusterState | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			ActiveOperationArn: new FormControl<string | null | undefined>(undefined),
			ClusterType: new FormControl<ClusterType | null | undefined>(undefined),
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			CurrentVersion: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ClusterState | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Provisioned cluster.</p>
	 *          
	 */
	export interface Provisioned {

		/** Required */
		BrokerNodeGroupInfo: BrokerNodeGroupInfo;
		CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;
		ClientAuthentication?: ClientAuthentication;
		EncryptionInfo?: EncryptionInfo;
		EnhancedMonitoring?: EnhancedMonitoring;
		OpenMonitoring?: OpenMonitoringInfo;
		LoggingInfo?: LoggingInfo;

		/** Required */
		NumberOfBrokerNodes: number;
		ZookeeperConnectString?: string;
		ZookeeperConnectStringTls?: string;
		StorageMode?: StorageMode;
	}

	/**
	 *             <p>Provisioned cluster.</p>
	 *          
	 */
	export interface ProvisionedFormProperties {
		EnhancedMonitoring: FormControl<EnhancedMonitoring | null | undefined>,

		/** Required */
		NumberOfBrokerNodes: FormControl<number | null | undefined>,
		ZookeeperConnectString: FormControl<string | null | undefined>,
		ZookeeperConnectStringTls: FormControl<string | null | undefined>,
		StorageMode: FormControl<StorageMode | null | undefined>,
	}
	export function CreateProvisionedFormGroup() {
		return new FormGroup<ProvisionedFormProperties>({
			EnhancedMonitoring: new FormControl<EnhancedMonitoring | null | undefined>(undefined),
			NumberOfBrokerNodes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ZookeeperConnectString: new FormControl<string | null | undefined>(undefined),
			ZookeeperConnectStringTls: new FormControl<string | null | undefined>(undefined),
			StorageMode: new FormControl<StorageMode | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Serverless cluster.</p>
	 *          
	 */
	export interface Serverless {

		/** Required */
		VpcConfigs: Array<VpcConfig>;
		ClientAuthentication?: ServerlessClientAuthentication;
	}

	/**
	 *             <p>Serverless cluster.</p>
	 *          
	 */
	export interface ServerlessFormProperties {
	}
	export function CreateServerlessFormGroup() {
		return new FormGroup<ServerlessFormProperties>({
		});

	}

	export interface DescribeClusterOperationResponse {
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
		ClientRequestId?: string;
		ClusterArn?: string;
		CreationTime?: Date;
		EndTime?: Date;
		ErrorInfo?: ErrorInfo;
		OperationArn?: string;
		OperationState?: string;
		OperationSteps?: Array<ClusterOperationStep>;
		OperationType?: string;
		SourceClusterInfo?: MutableClusterInfo;
		TargetClusterInfo?: MutableClusterInfo;
		VpcConnectionInfo?: VpcConnectionInfo;
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
		ErrorCode?: string;
		ErrorString?: string;
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
		StepInfo?: ClusterOperationStepInfo;
		StepName?: string;
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
		StepStatus?: string;
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
		ConfigurationInfo?: ConfigurationInfo;
		NumberOfBrokerNodes?: number | null;
		EnhancedMonitoring?: EnhancedMonitoring;
		OpenMonitoring?: OpenMonitoring;
		KafkaVersion?: string;
		LoggingInfo?: LoggingInfo;
		InstanceType?: string;
		ClientAuthentication?: ClientAuthentication;
		EncryptionInfo?: EncryptionInfo;
		ConnectivityInfo?: ConnectivityInfo;
		StorageMode?: StorageMode;
	}

	/**
	 *             <p>Information about cluster attributes that can be updated via update APIs.</p>
	 *          
	 */
	export interface MutableClusterInfoFormProperties {
		NumberOfBrokerNodes: FormControl<number | null | undefined>,
		EnhancedMonitoring: FormControl<EnhancedMonitoring | null | undefined>,
		KafkaVersion: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		StorageMode: FormControl<StorageMode | null | undefined>,
	}
	export function CreateMutableClusterInfoFormGroup() {
		return new FormGroup<MutableClusterInfoFormProperties>({
			NumberOfBrokerNodes: new FormControl<number | null | undefined>(undefined),
			EnhancedMonitoring: new FormControl<EnhancedMonitoring | null | undefined>(undefined),
			KafkaVersion: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			StorageMode: new FormControl<StorageMode | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Specifies the EBS volume upgrade information. The broker identifier must be set to the keyword ALL. This means the changes apply to all the brokers in the cluster.</p>
	 *          
	 */
	export interface BrokerEBSVolumeInfo {

		/** Required */
		KafkaBrokerNodeId: string;
		ProvisionedThroughput?: ProvisionedThroughput;
		VolumeSizeGB?: number | null;
	}

	/**
	 *             <p>Specifies the EBS volume upgrade information. The broker identifier must be set to the keyword ALL. This means the changes apply to all the brokers in the cluster.</p>
	 *          
	 */
	export interface BrokerEBSVolumeInfoFormProperties {

		/** Required */
		KafkaBrokerNodeId: FormControl<string | null | undefined>,
		VolumeSizeGB: FormControl<number | null | undefined>,
	}
	export function CreateBrokerEBSVolumeInfoFormGroup() {
		return new FormGroup<BrokerEBSVolumeInfoFormProperties>({
			KafkaBrokerNodeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VolumeSizeGB: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Description of the VPC connection.</p>
	 *          
	 */
	export interface VpcConnectionInfo {
		VpcConnectionArn?: string;
		Owner?: string;
		UserIdentity?: UserIdentity;
		CreationTime?: Date;
	}

	/**
	 *             <p>Description of the VPC connection.</p>
	 *          
	 */
	export interface VpcConnectionInfoFormProperties {
		VpcConnectionArn: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateVpcConnectionInfoFormGroup() {
		return new FormGroup<VpcConnectionInfoFormProperties>({
			VpcConnectionArn: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Description of the requester that calls the API operation.</p>
	 *          
	 */
	export interface UserIdentity {
		Type?: UserIdentityType;
		PrincipalId?: string;
	}

	/**
	 *             <p>Description of the requester that calls the API operation.</p>
	 *          
	 */
	export interface UserIdentityFormProperties {
		Type: FormControl<UserIdentityType | null | undefined>,
		PrincipalId: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentityFormGroup() {
		return new FormGroup<UserIdentityFormProperties>({
			Type: new FormControl<UserIdentityType | null | undefined>(undefined),
			PrincipalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>The identity type of the requester that calls the API operation.</p>
	 *          
	 */
	export enum UserIdentityType { AWSACCOUNT = 0, AWSSERVICE = 1 }

	export interface DescribeClusterOperationV2Response {
		ClusterOperationInfo?: ClusterOperationV2;
	}
	export interface DescribeClusterOperationV2ResponseFormProperties {
	}
	export function CreateDescribeClusterOperationV2ResponseFormGroup() {
		return new FormGroup<DescribeClusterOperationV2ResponseFormProperties>({
		});

	}


	/**
	 *             <p>Returns information about a cluster operation.</p>
	 */
	export interface ClusterOperationV2 {
		ClusterArn?: string;
		ClusterType?: ClusterType;
		StartTime?: Date;
		EndTime?: Date;
		ErrorInfo?: ErrorInfo;
		OperationArn?: string;
		OperationState?: string;
		OperationType?: string;
		Provisioned?: ClusterOperationV2Provisioned;
		Serverless?: ClusterOperationV2Serverless;
	}

	/**
	 *             <p>Returns information about a cluster operation.</p>
	 */
	export interface ClusterOperationV2FormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ClusterType: FormControl<ClusterType | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		OperationArn: FormControl<string | null | undefined>,
		OperationState: FormControl<string | null | undefined>,
		OperationType: FormControl<string | null | undefined>,
	}
	export function CreateClusterOperationV2FormGroup() {
		return new FormGroup<ClusterOperationV2FormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterType: new FormControl<ClusterType | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			OperationArn: new FormControl<string | null | undefined>(undefined),
			OperationState: new FormControl<string | null | undefined>(undefined),
			OperationType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Returns information about a provisioned cluster operation.</p>
	 */
	export interface ClusterOperationV2Provisioned {
		OperationSteps?: Array<ClusterOperationStep>;
		SourceClusterInfo?: MutableClusterInfo;
		TargetClusterInfo?: MutableClusterInfo;
		VpcConnectionInfo?: VpcConnectionInfo;
	}

	/**
	 *             <p>Returns information about a provisioned cluster operation.</p>
	 */
	export interface ClusterOperationV2ProvisionedFormProperties {
	}
	export function CreateClusterOperationV2ProvisionedFormGroup() {
		return new FormGroup<ClusterOperationV2ProvisionedFormProperties>({
		});

	}


	/**
	 *             <p>Returns information about a serverless cluster operation.</p>
	 */
	export interface ClusterOperationV2Serverless {
		VpcConnectionInfo?: VpcConnectionInfoServerless;
	}

	/**
	 *             <p>Returns information about a serverless cluster operation.</p>
	 */
	export interface ClusterOperationV2ServerlessFormProperties {
	}
	export function CreateClusterOperationV2ServerlessFormGroup() {
		return new FormGroup<ClusterOperationV2ServerlessFormProperties>({
		});

	}


	/** Description of the VPC connection. */
	export interface VpcConnectionInfoServerless {
		CreationTime?: Date;
		Owner?: string;
		UserIdentity?: UserIdentity;
		VpcConnectionArn?: string;
	}

	/** Description of the VPC connection. */
	export interface VpcConnectionInfoServerlessFormProperties {
		CreationTime: FormControl<Date | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		VpcConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateVpcConnectionInfoServerlessFormGroup() {
		return new FormGroup<VpcConnectionInfoServerlessFormProperties>({
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			VpcConnectionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConfigurationResponse {
		Arn?: string;
		CreationTime?: Date;
		Description?: string;
		KafkaVersions?: Array<string>;
		LatestRevision?: ConfigurationRevision;
		Name?: string;
		State?: ConfigurationState;
	}
	export interface DescribeConfigurationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<ConfigurationState | null | undefined>,
	}
	export function CreateDescribeConfigurationResponseFormGroup() {
		return new FormGroup<DescribeConfigurationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ConfigurationState | null | undefined>(undefined),
		});

	}

	export interface DescribeConfigurationRevisionResponse {
		Arn?: string;
		CreationTime?: Date;
		Description?: string;
		Revision?: number | null;
		ServerProperties?: string;
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

	export interface DescribeVpcConnectionResponse {
		VpcConnectionArn?: string;
		TargetClusterArn?: string;
		State?: VpcConnectionState;
		Authentication?: string;
		VpcId?: string;
		Subnets?: Array<string>;
		SecurityGroups?: Array<string>;
		CreationTime?: Date;
		Tags?: __mapOf__string;
	}
	export interface DescribeVpcConnectionResponseFormProperties {
		VpcConnectionArn: FormControl<string | null | undefined>,
		TargetClusterArn: FormControl<string | null | undefined>,
		State: FormControl<VpcConnectionState | null | undefined>,
		Authentication: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeVpcConnectionResponseFormGroup() {
		return new FormGroup<DescribeVpcConnectionResponseFormProperties>({
			VpcConnectionArn: new FormControl<string | null | undefined>(undefined),
			TargetClusterArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<VpcConnectionState | null | undefined>(undefined),
			Authentication: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface BatchDisassociateScramSecretResponse {
		ClusterArn?: string;
		UnprocessedScramSecrets?: Array<UnprocessedScramSecret>;
	}
	export interface BatchDisassociateScramSecretResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchDisassociateScramSecretResponseFormGroup() {
		return new FormGroup<BatchDisassociateScramSecretResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBootstrapBrokersResponse {
		BootstrapBrokerString?: string;
		BootstrapBrokerStringTls?: string;
		BootstrapBrokerStringSaslScram?: string;
		BootstrapBrokerStringSaslIam?: string;
		BootstrapBrokerStringPublicTls?: string;
		BootstrapBrokerStringPublicSaslScram?: string;
		BootstrapBrokerStringPublicSaslIam?: string;
		BootstrapBrokerStringVpcConnectivityTls?: string;
		BootstrapBrokerStringVpcConnectivitySaslScram?: string;
		BootstrapBrokerStringVpcConnectivitySaslIam?: string;
	}
	export interface GetBootstrapBrokersResponseFormProperties {
		BootstrapBrokerString: FormControl<string | null | undefined>,
		BootstrapBrokerStringTls: FormControl<string | null | undefined>,
		BootstrapBrokerStringSaslScram: FormControl<string | null | undefined>,
		BootstrapBrokerStringSaslIam: FormControl<string | null | undefined>,
		BootstrapBrokerStringPublicTls: FormControl<string | null | undefined>,
		BootstrapBrokerStringPublicSaslScram: FormControl<string | null | undefined>,
		BootstrapBrokerStringPublicSaslIam: FormControl<string | null | undefined>,
		BootstrapBrokerStringVpcConnectivityTls: FormControl<string | null | undefined>,
		BootstrapBrokerStringVpcConnectivitySaslScram: FormControl<string | null | undefined>,
		BootstrapBrokerStringVpcConnectivitySaslIam: FormControl<string | null | undefined>,
	}
	export function CreateGetBootstrapBrokersResponseFormGroup() {
		return new FormGroup<GetBootstrapBrokersResponseFormProperties>({
			BootstrapBrokerString: new FormControl<string | null | undefined>(undefined),
			BootstrapBrokerStringTls: new FormControl<string | null | undefined>(undefined),
			BootstrapBrokerStringSaslScram: new FormControl<string | null | undefined>(undefined),
			BootstrapBrokerStringSaslIam: new FormControl<string | null | undefined>(undefined),
			BootstrapBrokerStringPublicTls: new FormControl<string | null | undefined>(undefined),
			BootstrapBrokerStringPublicSaslScram: new FormControl<string | null | undefined>(undefined),
			BootstrapBrokerStringPublicSaslIam: new FormControl<string | null | undefined>(undefined),
			BootstrapBrokerStringVpcConnectivityTls: new FormControl<string | null | undefined>(undefined),
			BootstrapBrokerStringVpcConnectivitySaslScram: new FormControl<string | null | undefined>(undefined),
			BootstrapBrokerStringVpcConnectivitySaslIam: new FormControl<string | null | undefined>(undefined),
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
	 *             <p>Contains source Apache Kafka versions and compatible target Apache Kafka versions.</p>
	 *         
	 */
	export interface CompatibleKafkaVersion {
		SourceVersion?: string;
		TargetVersions?: Array<string>;
	}

	/**
	 *             <p>Contains source Apache Kafka versions and compatible target Apache Kafka versions.</p>
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

	export interface GetClusterPolicyResponse {
		CurrentVersion?: string;
		Policy?: string;
	}
	export interface GetClusterPolicyResponseFormProperties {
		CurrentVersion: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetClusterPolicyResponseFormGroup() {
		return new FormGroup<GetClusterPolicyResponseFormProperties>({
			CurrentVersion: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClusterOperationsResponse {
		ClusterOperationInfoList?: Array<ClusterOperationInfo>;
		NextToken?: string;
	}
	export interface ListClusterOperationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClusterOperationsResponseFormGroup() {
		return new FormGroup<ListClusterOperationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClusterOperationsV2Response {
		ClusterOperationInfoList?: Array<ClusterOperationV2Summary>;
		NextToken?: string;
	}
	export interface ListClusterOperationsV2ResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClusterOperationsV2ResponseFormGroup() {
		return new FormGroup<ListClusterOperationsV2ResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Returns information about a cluster operation.</p>
	 */
	export interface ClusterOperationV2Summary {
		ClusterArn?: string;
		ClusterType?: ClusterType;
		StartTime?: Date;
		EndTime?: Date;
		OperationArn?: string;
		OperationState?: string;
		OperationType?: string;
	}

	/**
	 *             <p>Returns information about a cluster operation.</p>
	 */
	export interface ClusterOperationV2SummaryFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ClusterType: FormControl<ClusterType | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		OperationArn: FormControl<string | null | undefined>,
		OperationState: FormControl<string | null | undefined>,
		OperationType: FormControl<string | null | undefined>,
	}
	export function CreateClusterOperationV2SummaryFormGroup() {
		return new FormGroup<ClusterOperationV2SummaryFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterType: new FormControl<ClusterType | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			OperationArn: new FormControl<string | null | undefined>(undefined),
			OperationState: new FormControl<string | null | undefined>(undefined),
			OperationType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClustersResponse {
		ClusterInfoList?: Array<ClusterInfo>;
		NextToken?: string;
	}
	export interface ListClustersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClustersResponseFormGroup() {
		return new FormGroup<ListClustersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClustersV2Response {
		ClusterInfoList?: Array<Cluster>;
		NextToken?: string;
	}
	export interface ListClustersV2ResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClustersV2ResponseFormGroup() {
		return new FormGroup<ListClustersV2ResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConfigurationRevisionsResponse {
		NextToken?: string;
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
		NextToken?: string;
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

		/** Required */
		LatestRevision: ConfigurationRevision;

		/** Required */
		Name: string;

		/** Required */
		State: ConfigurationState;
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

		/** Required */
		State: FormControl<ConfigurationState | null | undefined>,
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<ConfigurationState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListKafkaVersionsResponse {
		KafkaVersions?: Array<KafkaVersion>;
		NextToken?: string;
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
		Version?: string;
		Status?: KafkaVersionStatus;
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
		NextToken?: string;
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
		AddedToClusterTime?: string;
		BrokerNodeInfo?: BrokerNodeInfo;
		InstanceType?: string;
		NodeARN?: string;
		NodeType?: NodeType;
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
		NodeType: FormControl<NodeType | null | undefined>,
	}
	export function CreateNodeInfoFormGroup() {
		return new FormGroup<NodeInfoFormProperties>({
			AddedToClusterTime: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			NodeARN: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<NodeType | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>BrokerNodeInfo</p>
	 *          
	 */
	export interface BrokerNodeInfo {
		AttachedENIId?: string;
		BrokerId?: number | null;
		ClientSubnet?: string;
		ClientVpcIpAddress?: string;
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


	/**
	 *             <p>The broker or Zookeeper node.</p>
	 *          
	 */
	export enum NodeType { BROKER = 0 }


	/**
	 *             <p>Zookeeper node information.</p>
	 *          
	 */
	export interface ZookeeperNodeInfo {
		AttachedENIId?: string;
		ClientVpcIpAddress?: string;
		Endpoints?: Array<string>;
		ZookeeperId?: number | null;
		ZookeeperVersion?: string;
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

	export interface ListScramSecretsResponse {
		NextToken?: string;
		SecretArnList?: Array<string>;
	}
	export interface ListScramSecretsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListScramSecretsResponseFormGroup() {
		return new FormGroup<ListScramSecretsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
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

	export interface ListClientVpcConnectionsResponse {
		ClientVpcConnections?: Array<ClientVpcConnection>;
		NextToken?: string;
	}
	export interface ListClientVpcConnectionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClientVpcConnectionsResponseFormGroup() {
		return new FormGroup<ListClientVpcConnectionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>The client VPC connection object.</p>
	 *          
	 */
	export interface ClientVpcConnection {
		Authentication?: string;
		CreationTime?: Date;
		State?: VpcConnectionState;

		/** Required */
		VpcConnectionArn: string;
		Owner?: string;
	}

	/**
	 *             <p>The client VPC connection object.</p>
	 *          
	 */
	export interface ClientVpcConnectionFormProperties {
		Authentication: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		State: FormControl<VpcConnectionState | null | undefined>,

		/** Required */
		VpcConnectionArn: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
	}
	export function CreateClientVpcConnectionFormGroup() {
		return new FormGroup<ClientVpcConnectionFormProperties>({
			Authentication: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<VpcConnectionState | null | undefined>(undefined),
			VpcConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Owner: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVpcConnectionsResponse {
		VpcConnections?: Array<VpcConnection>;
		NextToken?: string;
	}
	export interface ListVpcConnectionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVpcConnectionsResponseFormGroup() {
		return new FormGroup<ListVpcConnectionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>The VPC connection object.</p>
	 *          
	 */
	export interface VpcConnection {

		/** Required */
		VpcConnectionArn: string;

		/** Required */
		TargetClusterArn: string;
		CreationTime?: Date;
		Authentication?: string;
		VpcId?: string;
		State?: VpcConnectionState;
	}

	/**
	 *             <p>The VPC connection object.</p>
	 *          
	 */
	export interface VpcConnectionFormProperties {

		/** Required */
		VpcConnectionArn: FormControl<string | null | undefined>,

		/** Required */
		TargetClusterArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		Authentication: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		State: FormControl<VpcConnectionState | null | undefined>,
	}
	export function CreateVpcConnectionFormGroup() {
		return new FormGroup<VpcConnectionFormProperties>({
			VpcConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetClusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Authentication: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<VpcConnectionState | null | undefined>(undefined),
		});

	}

	export interface RejectClientVpcConnectionResponse {
	}
	export interface RejectClientVpcConnectionResponseFormProperties {
	}
	export function CreateRejectClientVpcConnectionResponseFormGroup() {
		return new FormGroup<RejectClientVpcConnectionResponseFormProperties>({
		});

	}

	export interface PutClusterPolicyResponse {
		CurrentVersion?: string;
	}
	export interface PutClusterPolicyResponseFormProperties {
		CurrentVersion: FormControl<string | null | undefined>,
	}
	export function CreatePutClusterPolicyResponseFormGroup() {
		return new FormGroup<PutClusterPolicyResponseFormProperties>({
			CurrentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RebootBrokerResponse {
		ClusterArn?: string;
		ClusterOperationArn?: string;
	}
	export interface RebootBrokerResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ClusterOperationArn: FormControl<string | null | undefined>,
	}
	export function CreateRebootBrokerResponseFormGroup() {
		return new FormGroup<RebootBrokerResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterOperationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBrokerCountResponse {
		ClusterArn?: string;
		ClusterOperationArn?: string;
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

	export interface UpdateBrokerTypeResponse {
		ClusterArn?: string;
		ClusterOperationArn?: string;
	}
	export interface UpdateBrokerTypeResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ClusterOperationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBrokerTypeResponseFormGroup() {
		return new FormGroup<UpdateBrokerTypeResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterOperationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBrokerStorageResponse {
		ClusterArn?: string;
		ClusterOperationArn?: string;
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

	export interface UpdateConfigurationResponse {
		Arn?: string;
		LatestRevision?: ConfigurationRevision;
	}
	export interface UpdateConfigurationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationResponseFormGroup() {
		return new FormGroup<UpdateConfigurationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConnectivityResponse {
		ClusterArn?: string;
		ClusterOperationArn?: string;
	}
	export interface UpdateConnectivityResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ClusterOperationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectivityResponseFormGroup() {
		return new FormGroup<UpdateConnectivityResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterOperationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateClusterConfigurationResponse {
		ClusterArn?: string;
		ClusterOperationArn?: string;
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
		ClusterArn?: string;
		ClusterOperationArn?: string;
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
		ClusterArn?: string;
		ClusterOperationArn?: string;
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

	export interface UpdateSecurityResponse {
		ClusterArn?: string;
		ClusterOperationArn?: string;
	}
	export interface UpdateSecurityResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ClusterOperationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSecurityResponseFormGroup() {
		return new FormGroup<UpdateSecurityResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterOperationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStorageResponse {
		ClusterArn?: string;
		ClusterOperationArn?: string;
	}
	export interface UpdateStorageResponseFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ClusterOperationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStorageResponseFormGroup() {
		return new FormGroup<UpdateStorageResponseFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ClusterOperationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Associates sasl scram secrets to cluster.</p>
	 *          
	 */
	export interface BatchAssociateScramSecretRequest {

		/** Required */
		SecretArnList: Array<string>;
	}

	/**
	 *             <p>Associates sasl scram secrets to cluster.</p>
	 *          
	 */
	export interface BatchAssociateScramSecretRequestFormProperties {
	}
	export function CreateBatchAssociateScramSecretRequestFormGroup() {
		return new FormGroup<BatchAssociateScramSecretRequestFormProperties>({
		});

	}


	/**
	 *             <p>Provisioned cluster request.</p>
	 *          
	 */
	export interface ProvisionedRequest {

		/** Required */
		BrokerNodeGroupInfo: BrokerNodeGroupInfo;
		ClientAuthentication?: ClientAuthentication;
		ConfigurationInfo?: ConfigurationInfo;
		EncryptionInfo?: EncryptionInfo;
		EnhancedMonitoring?: EnhancedMonitoring;
		OpenMonitoring?: OpenMonitoringInfo;

		/** Required */
		KafkaVersion: string;
		LoggingInfo?: LoggingInfo;

		/** Required */
		NumberOfBrokerNodes: number;
		StorageMode?: StorageMode;
	}

	/**
	 *             <p>Provisioned cluster request.</p>
	 *          
	 */
	export interface ProvisionedRequestFormProperties {
		EnhancedMonitoring: FormControl<EnhancedMonitoring | null | undefined>,

		/** Required */
		KafkaVersion: FormControl<string | null | undefined>,

		/** Required */
		NumberOfBrokerNodes: FormControl<number | null | undefined>,
		StorageMode: FormControl<StorageMode | null | undefined>,
	}
	export function CreateProvisionedRequestFormGroup() {
		return new FormGroup<ProvisionedRequestFormProperties>({
			EnhancedMonitoring: new FormControl<EnhancedMonitoring | null | undefined>(undefined),
			KafkaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumberOfBrokerNodes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StorageMode: new FormControl<StorageMode | null | undefined>(undefined),
		});

	}


	/**
	 *             <p>Serverless cluster request.</p>
	 *          
	 */
	export interface ServerlessRequest {

		/** Required */
		VpcConfigs: Array<VpcConfig>;
		ClientAuthentication?: ServerlessClientAuthentication;
	}

	/**
	 *             <p>Serverless cluster request.</p>
	 *          
	 */
	export interface ServerlessRequestFormProperties {
	}
	export function CreateServerlessRequestFormGroup() {
		return new FormGroup<ServerlessRequestFormProperties>({
		});

	}

	export interface CreateClusterV2Request {

		/** Required */
		ClusterName: string;
		Tags?: __mapOf__string;
		Provisioned?: ProvisionedRequest;
		Serverless?: ServerlessRequest;
	}
	export interface CreateClusterV2RequestFormProperties {

		/** Required */
		ClusterName: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterV2RequestFormGroup() {
		return new FormGroup<CreateClusterV2RequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateClusterRequest {

		/** Required */
		BrokerNodeGroupInfo: BrokerNodeGroupInfo;
		ClientAuthentication?: ClientAuthentication;

		/** Required */
		ClusterName: string;
		ConfigurationInfo?: ConfigurationInfo;
		EncryptionInfo?: EncryptionInfo;
		EnhancedMonitoring?: EnhancedMonitoring;
		OpenMonitoring?: OpenMonitoringInfo;

		/** Required */
		KafkaVersion: string;
		LoggingInfo?: LoggingInfo;

		/** Required */
		NumberOfBrokerNodes: number;
		Tags?: __mapOf__string;
		StorageMode?: StorageMode;
	}
	export interface CreateClusterRequestFormProperties {

		/** Required */
		ClusterName: FormControl<string | null | undefined>,
		EnhancedMonitoring: FormControl<EnhancedMonitoring | null | undefined>,

		/** Required */
		KafkaVersion: FormControl<string | null | undefined>,

		/** Required */
		NumberOfBrokerNodes: FormControl<number | null | undefined>,
		StorageMode: FormControl<StorageMode | null | undefined>,
	}
	export function CreateCreateClusterRequestFormGroup() {
		return new FormGroup<CreateClusterRequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnhancedMonitoring: new FormControl<EnhancedMonitoring | null | undefined>(undefined),
			KafkaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumberOfBrokerNodes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StorageMode: new FormControl<StorageMode | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationRequest {
		Description?: string;
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

	export interface CreateVpcConnectionRequest {

		/** Required */
		TargetClusterArn: string;

		/** Required */
		Authentication: string;

		/** Required */
		VpcId: string;

		/** Required */
		ClientSubnets: Array<string>;

		/** Required */
		SecurityGroups: Array<string>;
		Tags?: __mapOf__string;
	}
	export interface CreateVpcConnectionRequestFormProperties {

		/** Required */
		TargetClusterArn: FormControl<string | null | undefined>,

		/** Required */
		Authentication: FormControl<string | null | undefined>,

		/** Required */
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateCreateVpcConnectionRequestFormGroup() {
		return new FormGroup<CreateVpcConnectionRequestFormProperties>({
			TargetClusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Authentication: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteClusterPolicyRequest {
	}
	export interface DeleteClusterPolicyRequestFormProperties {
	}
	export function CreateDeleteClusterPolicyRequestFormGroup() {
		return new FormGroup<DeleteClusterPolicyRequestFormProperties>({
		});

	}

	export interface DeleteConfigurationRequest {
	}
	export interface DeleteConfigurationRequestFormProperties {
	}
	export function CreateDeleteConfigurationRequestFormGroup() {
		return new FormGroup<DeleteConfigurationRequestFormProperties>({
		});

	}

	export interface DeleteVpcConnectionRequest {
	}
	export interface DeleteVpcConnectionRequestFormProperties {
	}
	export function CreateDeleteVpcConnectionRequestFormGroup() {
		return new FormGroup<DeleteVpcConnectionRequestFormProperties>({
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

	export interface DescribeClusterOperationV2Request {
	}
	export interface DescribeClusterOperationV2RequestFormProperties {
	}
	export function CreateDescribeClusterOperationV2RequestFormGroup() {
		return new FormGroup<DescribeClusterOperationV2RequestFormProperties>({
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

	export interface DescribeClusterV2Request {
	}
	export interface DescribeClusterV2RequestFormProperties {
	}
	export function CreateDescribeClusterV2RequestFormGroup() {
		return new FormGroup<DescribeClusterV2RequestFormProperties>({
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

	export interface DescribeVpcConnectionRequest {
	}
	export interface DescribeVpcConnectionRequestFormProperties {
	}
	export function CreateDescribeVpcConnectionRequestFormGroup() {
		return new FormGroup<DescribeVpcConnectionRequestFormProperties>({
		});

	}


	/**
	 *             <p>Disassociates sasl scram secrets to cluster.</p>
	 *          
	 */
	export interface BatchDisassociateScramSecretRequest {

		/** Required */
		SecretArnList: Array<string>;
	}

	/**
	 *             <p>Disassociates sasl scram secrets to cluster.</p>
	 *          
	 */
	export interface BatchDisassociateScramSecretRequestFormProperties {
	}
	export function CreateBatchDisassociateScramSecretRequestFormGroup() {
		return new FormGroup<BatchDisassociateScramSecretRequestFormProperties>({
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

	export interface GetClusterPolicyRequest {
	}
	export interface GetClusterPolicyRequestFormProperties {
	}
	export function CreateGetClusterPolicyRequestFormGroup() {
		return new FormGroup<GetClusterPolicyRequestFormProperties>({
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

	export interface ListClusterOperationsV2Request {
	}
	export interface ListClusterOperationsV2RequestFormProperties {
	}
	export function CreateListClusterOperationsV2RequestFormGroup() {
		return new FormGroup<ListClusterOperationsV2RequestFormProperties>({
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

	export interface ListClustersV2Request {
	}
	export interface ListClustersV2RequestFormProperties {
	}
	export function CreateListClustersV2RequestFormGroup() {
		return new FormGroup<ListClustersV2RequestFormProperties>({
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

	export interface ListScramSecretsRequest {
	}
	export interface ListScramSecretsRequestFormProperties {
	}
	export function CreateListScramSecretsRequestFormGroup() {
		return new FormGroup<ListScramSecretsRequestFormProperties>({
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

	export interface ListClientVpcConnectionsRequest {
	}
	export interface ListClientVpcConnectionsRequestFormProperties {
	}
	export function CreateListClientVpcConnectionsRequestFormGroup() {
		return new FormGroup<ListClientVpcConnectionsRequestFormProperties>({
		});

	}

	export interface ListVpcConnectionsRequest {
	}
	export interface ListVpcConnectionsRequestFormProperties {
	}
	export function CreateListVpcConnectionsRequestFormGroup() {
		return new FormGroup<ListVpcConnectionsRequestFormProperties>({
		});

	}

	export interface RejectClientVpcConnectionRequest {

		/** Required */
		VpcConnectionArn: string;
	}
	export interface RejectClientVpcConnectionRequestFormProperties {

		/** Required */
		VpcConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateRejectClientVpcConnectionRequestFormGroup() {
		return new FormGroup<RejectClientVpcConnectionRequestFormProperties>({
			VpcConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutClusterPolicyRequest {
		CurrentVersion?: string;

		/** Required */
		Policy: string;
	}
	export interface PutClusterPolicyRequestFormProperties {
		CurrentVersion: FormControl<string | null | undefined>,

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutClusterPolicyRequestFormGroup() {
		return new FormGroup<PutClusterPolicyRequestFormProperties>({
			CurrentVersion: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Reboots a node. */
	export interface RebootBrokerRequest {

		/** Required */
		BrokerIds: Array<string>;
	}

	/** Reboots a node. */
	export interface RebootBrokerRequestFormProperties {
	}
	export function CreateRebootBrokerRequestFormGroup() {
		return new FormGroup<RebootBrokerRequestFormProperties>({
		});

	}

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

		/** Required */
		TargetNumberOfBrokerNodes: number;
	}
	export interface UpdateBrokerCountRequestFormProperties {

		/** Required */
		CurrentVersion: FormControl<string | null | undefined>,

		/** Required */
		TargetNumberOfBrokerNodes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateBrokerCountRequestFormGroup() {
		return new FormGroup<UpdateBrokerCountRequestFormProperties>({
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetNumberOfBrokerNodes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateBrokerTypeRequest {

		/** Required */
		CurrentVersion: string;

		/** Required */
		TargetInstanceType: string;
	}
	export interface UpdateBrokerTypeRequestFormProperties {

		/** Required */
		CurrentVersion: FormControl<string | null | undefined>,

		/** Required */
		TargetInstanceType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBrokerTypeRequestFormGroup() {
		return new FormGroup<UpdateBrokerTypeRequestFormProperties>({
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
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
		EnhancedMonitoring?: EnhancedMonitoring;
		OpenMonitoring?: OpenMonitoringInfo;
		LoggingInfo?: LoggingInfo;
	}

	/** Request body for UpdateMonitoring. */
	export interface UpdateMonitoringRequestFormProperties {

		/** Required */
		CurrentVersion: FormControl<string | null | undefined>,
		EnhancedMonitoring: FormControl<EnhancedMonitoring | null | undefined>,
	}
	export function CreateUpdateMonitoringRequestFormGroup() {
		return new FormGroup<UpdateMonitoringRequestFormProperties>({
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnhancedMonitoring: new FormControl<EnhancedMonitoring | null | undefined>(undefined),
		});

	}

	export interface UpdateSecurityRequest {
		ClientAuthentication?: ClientAuthentication;

		/** Required */
		CurrentVersion: string;
		EncryptionInfo?: EncryptionInfo;
	}
	export interface UpdateSecurityRequestFormProperties {

		/** Required */
		CurrentVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSecurityRequestFormGroup() {
		return new FormGroup<UpdateSecurityRequestFormProperties>({
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 *             <p>Request object for UpdateStorage api. Its used to update the storage attributes for the cluster.</p>
	 *          
	 */
	export interface UpdateStorageRequest {

		/** Required */
		CurrentVersion: string;
		ProvisionedThroughput?: ProvisionedThroughput;
		StorageMode?: StorageMode;
		VolumeSizeGB?: number | null;
	}

	/**
	 *             <p>Request object for UpdateStorage api. Its used to update the storage attributes for the cluster.</p>
	 *          
	 */
	export interface UpdateStorageRequestFormProperties {

		/** Required */
		CurrentVersion: FormControl<string | null | undefined>,
		StorageMode: FormControl<StorageMode | null | undefined>,
		VolumeSizeGB: FormControl<number | null | undefined>,
	}
	export function CreateUpdateStorageRequestFormGroup() {
		return new FormGroup<UpdateStorageRequestFormProperties>({
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StorageMode: new FormControl<StorageMode | null | undefined>(undefined),
			VolumeSizeGB: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateConfigurationRequest {
		Description?: string;

		/** Required */
		ServerProperties: string;
	}
	export interface UpdateConfigurationRequestFormProperties {
		Description: FormControl<string | null | undefined>,

		/** Required */
		ServerProperties: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationRequestFormGroup() {
		return new FormGroup<UpdateConfigurationRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			ServerProperties: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request body for UpdateConnectivity. */
	export interface UpdateConnectivityRequest {

		/** Required */
		ConnectivityInfo: ConnectivityInfo;

		/** Required */
		CurrentVersion: string;
	}

	/** Request body for UpdateConnectivity. */
	export interface UpdateConnectivityRequestFormProperties {

		/** Required */
		CurrentVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectivityRequestFormGroup() {
		return new FormGroup<UpdateConnectivityRequestFormProperties>({
			CurrentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates one or more Scram Secrets with an Amazon MSK cluster.</p>
		 * Post v1/clusters/{clusterArn}/scram-secrets
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
		 *          
		 * @return {BatchAssociateScramSecretResponse} Success
		 */
		BatchAssociateScramSecret(clusterArn: string, requestBody: BatchAssociateScramSecretPostBody): Observable<BatchAssociateScramSecretResponse> {
			return this.http.post<BatchAssociateScramSecretResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/scram-secrets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociates one or more Scram Secrets from an Amazon MSK cluster.</p>
		 * Patch v1/clusters/{clusterArn}/scram-secrets
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
		 *          
		 * @return {BatchDisassociateScramSecretResponse} Success
		 */
		BatchDisassociateScramSecret(clusterArn: string, requestBody: BatchDisassociateScramSecretPatchBody): Observable<BatchDisassociateScramSecretResponse> {
			return this.http.patch<BatchDisassociateScramSecretResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/scram-secrets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of the Scram Secrets associated with an Amazon MSK cluster.</p>
		 * Get v1/clusters/{clusterArn}/scram-secrets
		 * @param {string} clusterArn 
		 *             <p>The arn of the cluster.</p>
		 *          
		 * @param {number} maxResults 
		 *             <p>The maxResults of the query.</p>
		 *          
		 * @param {string} nextToken 
		 *             <p>The nextToken of the query.</p>
		 *          
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListScramSecretsResponse} Success
		 */
		ListScramSecrets(clusterArn: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListScramSecretsResponse> {
			return this.http.get<ListScramSecretsResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/scram-secrets&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
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
		 * <p>Creates a new MSK cluster.</p>
		 * Post api/v2/clusters
		 * @return {CreateClusterV2Response} Success
		 */
		CreateClusterV2(requestBody: CreateClusterV2PostBody): Observable<CreateClusterV2Response> {
			return this.http.post<CreateClusterV2Response>(this.baseUri + 'api/v2/clusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of all the MSK clusters in the current Region.</p>
		 * Get api/v2/clusters
		 * @param {string} clusterNameFilter 
		 *             <p>Specify a prefix of the names of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.</p>
		 *          
		 * @param {string} clusterTypeFilter 
		 *             <p>Specify either PROVISIONED or SERVERLESS.</p>
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
		 * @return {ListClustersV2Response} Success
		 */
		ListClustersV2(clusterNameFilter: string | null | undefined, clusterTypeFilter: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListClustersV2Response> {
			return this.http.get<ListClustersV2Response>(this.baseUri + 'api/v2/clusters?clusterNameFilter=' + (clusterNameFilter == null ? '' : encodeURIComponent(clusterNameFilter)) + '&clusterTypeFilter=' + (clusterTypeFilter == null ? '' : encodeURIComponent(clusterTypeFilter)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
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
		 * <p>Creates a new MSK VPC connection.</p>
		 * Post v1/vpc-connection
		 * @return {CreateVpcConnectionResponse} Success
		 */
		CreateVpcConnection(requestBody: CreateVpcConnectionPostBody): Observable<CreateVpcConnectionResponse> {
			return this.http.post<CreateVpcConnectionResponse>(this.baseUri + 'v1/vpc-connection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Deletes the MSK cluster policy specified by the Amazon Resource Name (ARN) in the request.</p>
		 * Delete v1/clusters/{clusterArn}/policy
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) of the cluster.</p>
		 *          
		 * @return {DeleteClusterPolicyResponse} Success
		 */
		DeleteClusterPolicy(clusterArn: string): Observable<DeleteClusterPolicyResponse> {
			return this.http.delete<DeleteClusterPolicyResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/policy', {});
		}

		/**
		 * <p>Get the MSK cluster policy specified by the Amazon Resource Name (ARN) in the request.</p>
		 * Get v1/clusters/{clusterArn}/policy
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) of the cluster.</p>
		 *             
		 * @return {GetClusterPolicyResponse} Success
		 */
		GetClusterPolicy(clusterArn: string): Observable<GetClusterPolicyResponse> {
			return this.http.get<GetClusterPolicyResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/policy', {});
		}

		/**
		 * <p>Creates or updates the MSK cluster policy specified by the cluster Amazon Resource Name (ARN) in the request.</p>
		 * Put v1/clusters/{clusterArn}/policy
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) of the cluster.</p>
		 *          
		 * @return {PutClusterPolicyResponse} Success
		 */
		PutClusterPolicy(clusterArn: string, requestBody: PutClusterPolicyPutBody): Observable<PutClusterPolicyResponse> {
			return this.http.put<PutClusterPolicyResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an MSK Configuration.</p>
		 * Delete v1/configurations/{arn}
		 * @param {string} arn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration.</p>
		 *          
		 * @return {DeleteConfigurationResponse} Success
		 */
		DeleteConfiguration(arn: string): Observable<DeleteConfigurationResponse> {
			return this.http.delete<DeleteConfigurationResponse>(this.baseUri + 'v1/configurations/' + (arn == null ? '' : encodeURIComponent(arn)), {});
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
		 * <p>Updates an MSK configuration.</p>
		 * Put v1/configurations/{arn}
		 * @param {string} arn 
		 *             <p>The Amazon Resource Name (ARN) of the configuration.</p>
		 *          
		 * @return {UpdateConfigurationResponse} Success
		 */
		UpdateConfiguration(arn: string, requestBody: UpdateConfigurationPutBody): Observable<UpdateConfigurationResponse> {
			return this.http.put<UpdateConfigurationResponse>(this.baseUri + 'v1/configurations/' + (arn == null ? '' : encodeURIComponent(arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a MSK VPC connection.</p>
		 * Delete v1/vpc-connection/{arn}
		 * @param {string} arn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK VPC connection.</p>
		 *          
		 * @return {DeleteVpcConnectionResponse} Success
		 */
		DeleteVpcConnection(arn: string): Observable<DeleteVpcConnectionResponse> {
			return this.http.delete<DeleteVpcConnectionResponse>(this.baseUri + 'v1/vpc-connection/' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * <p>Returns a description of this MSK VPC connection.</p>
		 * Get v1/vpc-connection/{arn}
		 * @param {string} arn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies a MSK VPC connection.</p>
		 *    
		 * @return {DescribeVpcConnectionResponse} Success
		 */
		DescribeVpcConnection(arn: string): Observable<DescribeVpcConnectionResponse> {
			return this.http.get<DescribeVpcConnectionResponse>(this.baseUri + 'v1/vpc-connection/' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * <p>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</p>
		 * Get api/v2/clusters/{clusterArn}
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @return {DescribeClusterV2Response} Success
		 */
		DescribeClusterV2(clusterArn: string): Observable<DescribeClusterV2Response> {
			return this.http.get<DescribeClusterV2Response>(this.baseUri + 'api/v2/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)), {});
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
		 * <p>Returns a description of the cluster operation specified by the ARN.</p>
		 * Get api/v2/operations/{clusterOperationArn}
		 * @param {string} clusterOperationArn ARN of the cluster operation to describe.
		 * @return {DescribeClusterOperationV2Response} Success
		 */
		DescribeClusterOperationV2(clusterOperationArn: string): Observable<DescribeClusterOperationV2Response> {
			return this.http.get<DescribeClusterOperationV2Response>(this.baseUri + 'api/v2/operations/' + (clusterOperationArn == null ? '' : encodeURIComponent(clusterOperationArn)), {});
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
		 * <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>
		 * Get api/v2/clusters/{clusterArn}/operations
		 * @param {string} clusterArn The arn of the cluster whose operations are being requested.
		 * @param {number} maxResults The maxResults of the query.
		 * @param {string} nextToken The nextToken of the query.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListClusterOperationsV2Response} Success
		 */
		ListClusterOperationsV2(clusterArn: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListClusterOperationsV2Response> {
			return this.http.get<ListClusterOperationsV2Response>(this.baseUri + 'api/v2/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/operations&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
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
		 * <p>Returns a list of Apache Kafka versions.</p>
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
		 * <p>Returns a list of all the VPC connections in this Region.</p>
		 * Get v1/clusters/{clusterArn}/client-vpc-connections
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) of the cluster.</p>
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
		 * @return {ListClientVpcConnectionsResponse} Success
		 */
		ListClientVpcConnections(clusterArn: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListClientVpcConnectionsResponse> {
			return this.http.get<ListClientVpcConnectionsResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/client-vpc-connections&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Returns a list of all the VPC connections in this Region.</p>
		 * Get v1/vpc-connections
		 * @param {number} maxResults 
		 *             <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
		 *          
		 * @param {string} nextToken 
		 *             <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
		 *             To get the next batch, provide this token in your next request.</p>
		 *          
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVpcConnectionsResponse} Success
		 */
		ListVpcConnections(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListVpcConnectionsResponse> {
			return this.http.get<ListVpcConnectionsResponse>(this.baseUri + 'v1/vpc-connections?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Returns empty response.</p>
		 * Put v1/clusters/{clusterArn}/client-vpc-connection
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) of the cluster.</p>
		 *          
		 * @return {RejectClientVpcConnectionResponse} Success
		 */
		RejectClientVpcConnection(clusterArn: string, requestBody: RejectClientVpcConnectionPutBody): Observable<RejectClientVpcConnectionResponse> {
			return this.http.put<RejectClientVpcConnectionResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/client-vpc-connection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reboots brokers.
		 * Put v1/clusters/{clusterArn}/reboot-broker
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
		 *          
		 * @return {RebootBrokerResponse} Success
		 */
		RebootBroker(clusterArn: string, requestBody: RebootBrokerPutBody): Observable<RebootBrokerResponse> {
			return this.http.put<RebootBrokerResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/reboot-broker', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Updates EC2 instance type.</p>
		 * Put v1/clusters/{clusterArn}/nodes/type
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @return {UpdateBrokerTypeResponse} Success
		 */
		UpdateBrokerType(clusterArn: string, requestBody: UpdateBrokerTypePutBody): Observable<UpdateBrokerTypeResponse> {
			return this.http.put<UpdateBrokerTypeResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/nodes/type', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Updates the cluster's connectivity configuration.</p>
		 * Put v1/clusters/{clusterArn}/connectivity
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) of the configuration.</p>
		 *          
		 * @return {UpdateConnectivityResponse} Success
		 */
		UpdateConnectivity(clusterArn: string, requestBody: UpdateConnectivityPutBody): Observable<UpdateConnectivityResponse> {
			return this.http.put<UpdateConnectivityResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/connectivity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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

		/**
		 * <p>Updates the security settings for the cluster. You can use this operation to specify encryption and authentication on existing clusters.</p>
		 * Patch v1/clusters/{clusterArn}/security
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @return {UpdateSecurityResponse} Success
		 */
		UpdateSecurity(clusterArn: string, requestBody: UpdateSecurityPatchBody): Observable<UpdateSecurityResponse> {
			return this.http.patch<UpdateSecurityResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/security', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates cluster broker volume size (or) sets cluster storage mode to TIERED.
		 * Put v1/clusters/{clusterArn}/storage
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
		 *          
		 * @return {UpdateStorageResponse} Success
		 */
		UpdateStorage(clusterArn: string, requestBody: UpdateStoragePutBody): Observable<UpdateStorageResponse> {
			return this.http.put<UpdateStorageResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/storage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface BatchAssociateScramSecretPostBody {

		/**
		 * <p>List of AWS Secrets Manager secret ARNs.</p>
		 * Required
		 */
		secretArnList: Array<string>;
	}
	export interface BatchAssociateScramSecretPostBodyFormProperties {
	}
	export function CreateBatchAssociateScramSecretPostBodyFormGroup() {
		return new FormGroup<BatchAssociateScramSecretPostBodyFormProperties>({
		});

	}

	export interface BatchDisassociateScramSecretPatchBody {

		/**
		 * <p>List of AWS Secrets Manager secret ARNs.</p>
		 * Required
		 */
		secretArnList: Array<string>;
	}
	export interface BatchDisassociateScramSecretPatchBodyFormProperties {
	}
	export function CreateBatchDisassociateScramSecretPatchBodyFormGroup() {
		return new FormGroup<BatchDisassociateScramSecretPatchBodyFormProperties>({
		});

	}

	export interface CreateClusterPostBody {

		/**
		 * <p>Describes the setup to be used for Apache Kafka broker nodes in the cluster.</p>
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
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		enhancedMonitoring?: EnhancedMonitoring | null;

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

		/** Controls storage mode for various supported storage tiers. */
		storageMode?: StorageMode | null;
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
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		enhancedMonitoring: FormControl<EnhancedMonitoring | null | undefined>,

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

		/** Controls storage mode for various supported storage tiers. */
		storageMode: FormControl<StorageMode | null | undefined>,
	}
	export function CreateCreateClusterPostBodyFormGroup() {
		return new FormGroup<CreateClusterPostBodyFormProperties>({
			clusterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			enhancedMonitoring: new FormControl<EnhancedMonitoring | null | undefined>(undefined),
			kafkaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			numberOfBrokerNodes: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(15)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			storageMode: new FormControl<StorageMode | null | undefined>(undefined),
		});

	}

	export interface CreateClusterPostBodyBrokerNodeGroupInfo {
		BrokerAZDistribution?: BrokerAZDistribution;
		ClientSubnets?: Array<string>;
		InstanceType?: string;
		SecurityGroups?: Array<string>;
		StorageInfo?: StorageInfo;
		ConnectivityInfo?: ConnectivityInfo;
		ZoneIds?: Array<string>;
	}
	export interface CreateClusterPostBodyBrokerNodeGroupInfoFormProperties {
		BrokerAZDistribution: FormControl<BrokerAZDistribution | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterPostBodyBrokerNodeGroupInfoFormGroup() {
		return new FormGroup<CreateClusterPostBodyBrokerNodeGroupInfoFormProperties>({
			BrokerAZDistribution: new FormControl<BrokerAZDistribution | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateClusterPostBodyClientAuthentication {
		Sasl?: Sasl;
		Tls?: Tls;
		Unauthenticated?: Unauthenticated;
	}
	export interface CreateClusterPostBodyClientAuthenticationFormProperties {
	}
	export function CreateCreateClusterPostBodyClientAuthenticationFormGroup() {
		return new FormGroup<CreateClusterPostBodyClientAuthenticationFormProperties>({
		});

	}

	export interface CreateClusterPostBodyConfigurationInfo {
		Arn?: string;
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
		EncryptionAtRest?: EncryptionAtRest;
		EncryptionInTransit?: EncryptionInTransit;
	}
	export interface CreateClusterPostBodyEncryptionInfoFormProperties {
	}
	export function CreateCreateClusterPostBodyEncryptionInfoFormGroup() {
		return new FormGroup<CreateClusterPostBodyEncryptionInfoFormProperties>({
		});

	}

	export interface CreateClusterPostBodyOpenMonitoring {
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

	export interface CreateClusterV2PostBody {

		/**
		 * <p>The name of the cluster.</p>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clusterName: string;

		/**
		 * <p>A map of tags that you want the cluster to have.</p>
		 */
		tags?: {[id: string]: string };

		/**
		 * <p>Provisioned cluster request.</p>
		 */
		provisioned?: CreateClusterV2PostBodyProvisioned;

		/**
		 * <p>Serverless cluster request.</p>
		 */
		serverless?: CreateClusterV2PostBodyServerless;
	}
	export interface CreateClusterV2PostBodyFormProperties {

		/**
		 * <p>The name of the cluster.</p>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clusterName: FormControl<string | null | undefined>,

		/**
		 * <p>A map of tags that you want the cluster to have.</p>
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateClusterV2PostBodyFormGroup() {
		return new FormGroup<CreateClusterV2PostBodyFormProperties>({
			clusterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateClusterV2PostBodyProvisioned {
		BrokerNodeGroupInfo?: BrokerNodeGroupInfo;
		ClientAuthentication?: ClientAuthentication;
		ConfigurationInfo?: ConfigurationInfo;
		EncryptionInfo?: EncryptionInfo;
		EnhancedMonitoring?: EnhancedMonitoring;
		OpenMonitoring?: OpenMonitoringInfo;
		KafkaVersion?: string;
		LoggingInfo?: LoggingInfo;
		NumberOfBrokerNodes?: number | null;
		StorageMode?: StorageMode;
	}
	export interface CreateClusterV2PostBodyProvisionedFormProperties {
		EnhancedMonitoring: FormControl<EnhancedMonitoring | null | undefined>,
		KafkaVersion: FormControl<string | null | undefined>,
		NumberOfBrokerNodes: FormControl<number | null | undefined>,
		StorageMode: FormControl<StorageMode | null | undefined>,
	}
	export function CreateCreateClusterV2PostBodyProvisionedFormGroup() {
		return new FormGroup<CreateClusterV2PostBodyProvisionedFormProperties>({
			EnhancedMonitoring: new FormControl<EnhancedMonitoring | null | undefined>(undefined),
			KafkaVersion: new FormControl<string | null | undefined>(undefined),
			NumberOfBrokerNodes: new FormControl<number | null | undefined>(undefined),
			StorageMode: new FormControl<StorageMode | null | undefined>(undefined),
		});

	}

	export interface CreateClusterV2PostBodyServerless {
		VpcConfigs?: Array<VpcConfig>;
		ClientAuthentication?: ServerlessClientAuthentication;
	}
	export interface CreateClusterV2PostBodyServerlessFormProperties {
	}
	export function CreateCreateClusterV2PostBodyServerlessFormGroup() {
		return new FormGroup<CreateClusterV2PostBodyServerlessFormProperties>({
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

	export interface CreateVpcConnectionPostBody {

		/**
		 * <p>The cluster Amazon Resource Name (ARN) for the VPC connection.</p>
		 * Required
		 */
		targetClusterArn: string;

		/**
		 * <p>The authentication type of VPC connection.</p>
		 * Required
		 */
		authentication: string;

		/**
		 * <p>The VPC ID of VPC connection.</p>
		 * Required
		 */
		vpcId: string;

		/**
		 * <p>The list of client subnets.</p>
		 * Required
		 */
		clientSubnets: Array<string>;

		/**
		 * <p>The list of security groups.</p>
		 * Required
		 */
		securityGroups: Array<string>;

		/**
		 * <p>A map of tags for the VPC connection.</p>
		 */
		tags?: {[id: string]: string };
	}
	export interface CreateVpcConnectionPostBodyFormProperties {

		/**
		 * <p>The cluster Amazon Resource Name (ARN) for the VPC connection.</p>
		 * Required
		 */
		targetClusterArn: FormControl<string | null | undefined>,

		/**
		 * <p>The authentication type of VPC connection.</p>
		 * Required
		 */
		authentication: FormControl<string | null | undefined>,

		/**
		 * <p>The VPC ID of VPC connection.</p>
		 * Required
		 */
		vpcId: FormControl<string | null | undefined>,

		/**
		 * <p>A map of tags for the VPC connection.</p>
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateVpcConnectionPostBodyFormGroup() {
		return new FormGroup<CreateVpcConnectionPostBodyFormProperties>({
			targetClusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authentication: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface PutClusterPolicyPutBody {

		/**
		 * <p>The policy version.</p>
		 */
		currentVersion?: string | null;

		/**
		 * <p>The policy.</p>
		 * Required
		 */
		policy: string;
	}
	export interface PutClusterPolicyPutBodyFormProperties {

		/**
		 * <p>The policy version.</p>
		 */
		currentVersion: FormControl<string | null | undefined>,

		/**
		 * <p>The policy.</p>
		 * Required
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutClusterPolicyPutBodyFormGroup() {
		return new FormGroup<PutClusterPolicyPutBodyFormProperties>({
			currentVersion: new FormControl<string | null | undefined>(undefined),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateConfigurationPutBody {

		/**
		 * <p>The description of the configuration revision.</p>
		 */
		description?: string | null;

		/**
		 * <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
		 * When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
		 * Required
		 */
		serverProperties: string;
	}
	export interface UpdateConfigurationPutBodyFormProperties {

		/**
		 * <p>The description of the configuration revision.</p>
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
		 * When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
		 * Required
		 */
		serverProperties: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateConfigurationPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
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

	export interface RejectClientVpcConnectionPutBody {

		/**
		 * <p>The VPC connection ARN.</p>
		 * Required
		 */
		vpcConnectionArn: string;
	}
	export interface RejectClientVpcConnectionPutBodyFormProperties {

		/**
		 * <p>The VPC connection ARN.</p>
		 * Required
		 */
		vpcConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateRejectClientVpcConnectionPutBodyFormGroup() {
		return new FormGroup<RejectClientVpcConnectionPutBodyFormProperties>({
			vpcConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RebootBrokerPutBody {

		/**
		 * <p>The list of broker IDs to be rebooted. The reboot-broker operation supports rebooting one broker at a time.</p>
		 * Required
		 */
		brokerIds: Array<string>;
	}
	export interface RebootBrokerPutBodyFormProperties {
	}
	export function CreateRebootBrokerPutBodyFormGroup() {
		return new FormGroup<RebootBrokerPutBodyFormProperties>({
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

	export interface UpdateBrokerTypePutBody {

		/**
		 * <p>The cluster version that you want to change. After this operation completes successfully, the cluster will have a new version.</p>
		 * Required
		 */
		currentVersion: string;

		/**
		 * <p>The Amazon MSK broker type that you want all of the brokers in this cluster to be.</p>
		 * Required
		 */
		targetInstanceType: string;
	}
	export interface UpdateBrokerTypePutBodyFormProperties {

		/**
		 * <p>The cluster version that you want to change. After this operation completes successfully, the cluster will have a new version.</p>
		 * Required
		 */
		currentVersion: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon MSK broker type that you want all of the brokers in this cluster to be.</p>
		 * Required
		 */
		targetInstanceType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBrokerTypePutBodyFormGroup() {
		return new FormGroup<UpdateBrokerTypePutBodyFormProperties>({
			currentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateConnectivityPutBody {

		/**
		 * <p>Information about the broker access configuration.</p>
		 * Required
		 */
		connectivityInfo: UpdateConnectivityPutBodyConnectivityInfo;

		/**
		 * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
		 * Required
		 */
		currentVersion: string;
	}
	export interface UpdateConnectivityPutBodyFormProperties {

		/**
		 * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
		 * Required
		 */
		currentVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectivityPutBodyFormGroup() {
		return new FormGroup<UpdateConnectivityPutBodyFormProperties>({
			currentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateConnectivityPutBodyConnectivityInfo {
		PublicAccess?: PublicAccess;
		VpcConnectivity?: VpcConnectivity;
	}
	export interface UpdateConnectivityPutBodyConnectivityInfoFormProperties {
	}
	export function CreateUpdateConnectivityPutBodyConnectivityInfoFormGroup() {
		return new FormGroup<UpdateConnectivityPutBodyConnectivityInfoFormProperties>({
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
		Arn?: string;
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
		Arn?: string;
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
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		enhancedMonitoring?: EnhancedMonitoring | null;

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
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		enhancedMonitoring: FormControl<EnhancedMonitoring | null | undefined>,
	}
	export function CreateUpdateMonitoringPutBodyFormGroup() {
		return new FormGroup<UpdateMonitoringPutBodyFormProperties>({
			currentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enhancedMonitoring: new FormControl<EnhancedMonitoring | null | undefined>(undefined),
		});

	}

	export interface UpdateMonitoringPutBodyOpenMonitoring {
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

	export interface UpdateSecurityPatchBody {

		/**
		 * <p>Includes all client authentication information.</p>
		 */
		clientAuthentication?: UpdateSecurityPatchBodyClientAuthentication;

		/**
		 * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
		 * Required
		 */
		currentVersion: string;

		/**
		 * <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
		 */
		encryptionInfo?: UpdateSecurityPatchBodyEncryptionInfo;
	}
	export interface UpdateSecurityPatchBodyFormProperties {

		/**
		 * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
		 * Required
		 */
		currentVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSecurityPatchBodyFormGroup() {
		return new FormGroup<UpdateSecurityPatchBodyFormProperties>({
			currentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSecurityPatchBodyClientAuthentication {
		Sasl?: Sasl;
		Tls?: Tls;
		Unauthenticated?: Unauthenticated;
	}
	export interface UpdateSecurityPatchBodyClientAuthenticationFormProperties {
	}
	export function CreateUpdateSecurityPatchBodyClientAuthenticationFormGroup() {
		return new FormGroup<UpdateSecurityPatchBodyClientAuthenticationFormProperties>({
		});

	}

	export interface UpdateSecurityPatchBodyEncryptionInfo {
		EncryptionAtRest?: EncryptionAtRest;
		EncryptionInTransit?: EncryptionInTransit;
	}
	export interface UpdateSecurityPatchBodyEncryptionInfoFormProperties {
	}
	export function CreateUpdateSecurityPatchBodyEncryptionInfoFormGroup() {
		return new FormGroup<UpdateSecurityPatchBodyEncryptionInfoFormProperties>({
		});

	}

	export interface UpdateStoragePutBody {

		/**
		 * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
		 * Required
		 */
		currentVersion: string;

		/**
		 * <p>Contains information about provisioned throughput for EBS storage volumes attached to kafka broker nodes.</p>
		 */
		provisionedThroughput?: UpdateStoragePutBodyProvisionedThroughput;

		/** Controls storage mode for various supported storage tiers. */
		storageMode?: StorageMode | null;

		/**
		 * <p>size of the EBS volume to update.</p>
		 */
		volumeSizeGB?: number | null;
	}
	export interface UpdateStoragePutBodyFormProperties {

		/**
		 * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
		 * Required
		 */
		currentVersion: FormControl<string | null | undefined>,

		/** Controls storage mode for various supported storage tiers. */
		storageMode: FormControl<StorageMode | null | undefined>,

		/**
		 * <p>size of the EBS volume to update.</p>
		 */
		volumeSizeGB: FormControl<number | null | undefined>,
	}
	export function CreateUpdateStoragePutBodyFormGroup() {
		return new FormGroup<UpdateStoragePutBodyFormProperties>({
			currentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageMode: new FormControl<StorageMode | null | undefined>(undefined),
			volumeSizeGB: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateStoragePutBodyProvisionedThroughput {
		Enabled?: boolean | null;
		VolumeThroughput?: number | null;
	}
	export interface UpdateStoragePutBodyProvisionedThroughputFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		VolumeThroughput: FormControl<number | null | undefined>,
	}
	export function CreateUpdateStoragePutBodyProvisionedThroughputFormGroup() {
		return new FormGroup<UpdateStoragePutBodyProvisionedThroughputFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			VolumeThroughput: new FormControl<number | null | undefined>(undefined),
		});

	}

}

