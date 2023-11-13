import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** The result of a <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation. Contains details of accepted inbound connection. */
	export interface AcceptInboundCrossClusterSearchConnectionResponse {

		/** Specifies details of an inbound connection. */
		CrossClusterSearchConnection?: InboundCrossClusterSearchConnection | null;
	}


	/** Specifies details of an inbound connection. */
	export interface InboundCrossClusterSearchConnection {
		SourceDomainInfo?: DomainInformation | null;
		DestinationDomainInfo?: DomainInformation | null;
		CrossClusterSearchConnectionId?: string | null;

		/** Specifies the coonection status of an inbound cross-cluster search connection. */
		ConnectionStatus?: InboundCrossClusterSearchConnectionStatus | null;
	}

	export interface DomainInformation {
		OwnerId?: string | null;

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
		Region?: string | null;
	}


	/** Specifies the coonection status of an inbound cross-cluster search connection. */
	export interface InboundCrossClusterSearchConnectionStatus {
		StatusCode?: InboundCrossClusterSearchConnectionStatusStatusCode | null;
		Message?: string | null;
	}

	export enum InboundCrossClusterSearchConnectionStatusStatusCode { PENDING_ACCEPTANCE = 0, APPROVED = 1, REJECTING = 2, REJECTED = 3, DELETING = 4, DELETED = 5 }

	export interface ResourceNotFoundException {
	}

	export interface LimitExceededException {
	}

	export interface DisabledOperationException {
	}


	/** Specifies a key value pair for a resource tag. */
	export interface Tag {

		/**
		 * A string of length from 1 to 128 characters that specifies the key for a Tag. Tag keys must be unique for the Elasticsearch domain to which they are attached.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * A string of length from 0 to 256 characters that specifies the value for a Tag. Tag values can be null and do not have to be unique in a tag set.
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: string;
	}

	export interface BaseException {
	}

	export interface ValidationException {
	}

	export interface InternalException {
	}


	/**  Container for response returned by <code> <a>AssociatePackage</a> </code> operation.  */
	export interface AssociatePackageResponse {

		/** Information on a package that is associated with a domain. */
		DomainPackageDetails?: DomainPackageDetails | null;
	}


	/** Information on a package that is associated with a domain. */
	export interface DomainPackageDetails {
		PackageID?: string | null;
		PackageName?: string | null;
		PackageType?: DomainPackageDetailsPackageType | null;
		LastUpdated?: Date | null;

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName?: string | null;
		DomainPackageStatus?: DomainPackageDetailsDomainPackageStatus | null;
		ReferencePath?: string | null;
		ErrorDetails?: ErrorDetails | null;
	}

	export enum DomainPackageDetailsPackageType { TXT_DICTIONARY = 0 }

	export enum DomainPackageDetailsDomainPackageStatus { ASSOCIATING = 0, ASSOCIATION_FAILED = 1, ACTIVE = 2, DISSOCIATING = 3, DISSOCIATION_FAILED = 4 }

	export interface ErrorDetails {
		ErrorType?: string | null;
		ErrorMessage?: string | null;
	}

	export interface AccessDeniedException {
	}

	export interface ConflictException {
	}


	/** The result of a <code>CancelElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update. */
	export interface CancelElasticsearchServiceSoftwareUpdateResponse {

		/** The current options of an Elasticsearch domain service software options. */
		ServiceSoftwareOptions?: ServiceSoftwareOptions | null;
	}


	/** The current options of an Elasticsearch domain service software options. */
	export interface ServiceSoftwareOptions {
		CurrentVersion?: string | null;
		NewVersion?: string | null;
		UpdateAvailable?: boolean | null;
		Cancellable?: boolean | null;
		UpdateStatus?: ServiceSoftwareOptionsUpdateStatus | null;
		Description?: string | null;
		AutomatedUpdateDate?: Date | null;
		OptionalDeployment?: boolean | null;
	}

	export enum ServiceSoftwareOptionsUpdateStatus { PENDING_UPDATE = 0, IN_PROGRESS = 1, COMPLETED = 2, NOT_ELIGIBLE = 3, ELIGIBLE = 4 }


	/** The result of a <code>CreateElasticsearchDomain</code> operation. Contains the status of the newly created Elasticsearch domain. */
	export interface CreateElasticsearchDomainResponse {

		/** The current status of an Elasticsearch domain. */
		DomainStatus?: ElasticsearchDomainStatus | null;
	}


	/** The current status of an Elasticsearch domain. */
	export interface ElasticsearchDomainStatus {

		/**
		 * Unique identifier for an Elasticsearch domain.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DomainId: string;

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/**
		 * The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
		 * Required
		 */
		ARN: string;
		Created?: boolean | null;
		Deleted?: boolean | null;

		/** The endpoint to which service requests are submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code>. */
		Endpoint?: string | null;
		Endpoints?: EndpointsMap | null;
		Processing?: boolean | null;
		UpgradeProcessing?: boolean | null;
		ElasticsearchVersion?: string | null;

		/**
		 * Specifies the configuration for the domain cluster, such as the type and number of instances.
		 * Required
		 */
		ElasticsearchClusterConfig: ElasticsearchClusterConfig;

		/** Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
		EBSOptions?: EBSOptions | null;

		/** Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies?: string | null;

		/** Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
		SnapshotOptions?: SnapshotOptions | null;

		/** Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
		VPCOptions?: VPCDerivedInfo | null;

		/** Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
		CognitoOptions?: CognitoOptions | null;

		/** Specifies the Encryption At Rest Options. */
		EncryptionAtRestOptions?: EncryptionAtRestOptions | null;

		/** Specifies the node-to-node encryption options. */
		NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions | null;

		/** <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: AdvancedOptions | null;
		LogPublishingOptions?: LogPublishingOptions | null;

		/** The current options of an Elasticsearch domain service software options. */
		ServiceSoftwareOptions?: ServiceSoftwareOptions | null;

		/** Options to configure endpoint for the Elasticsearch domain. */
		DomainEndpointOptions?: DomainEndpointOptions | null;

		/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled. */
		AdvancedSecurityOptions?: AdvancedSecurityOptions | null;
	}

	export interface EndpointsMap {
	}


	/** Specifies the configuration for the domain cluster, such as the type and number of instances. */
	export interface ElasticsearchClusterConfig {
		InstanceType?: ElasticsearchClusterConfigInstanceType | null;
		InstanceCount?: number | null;
		DedicatedMasterEnabled?: boolean | null;
		ZoneAwarenessEnabled?: boolean | null;

		/** Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones. */
		ZoneAwarenessConfig?: ZoneAwarenessConfig | null;
		DedicatedMasterType?: ElasticsearchClusterConfigDedicatedMasterType | null;
		DedicatedMasterCount?: number | null;
		WarmEnabled?: boolean | null;
		WarmType?: ElasticsearchClusterConfigWarmType | null;
		WarmCount?: number | null;
	}

	export enum ElasticsearchClusterConfigInstanceType { m3_medium_elasticsearch = 0, m3_large_elasticsearch = 1, m3_xlarge_elasticsearch = 2, m3_2xlarge_elasticsearch = 3, m4_large_elasticsearch = 4, m4_xlarge_elasticsearch = 5, m4_2xlarge_elasticsearch = 6, m4_4xlarge_elasticsearch = 7, m4_10xlarge_elasticsearch = 8, m5_large_elasticsearch = 9, m5_xlarge_elasticsearch = 10, m5_2xlarge_elasticsearch = 11, m5_4xlarge_elasticsearch = 12, m5_12xlarge_elasticsearch = 13, r5_large_elasticsearch = 14, r5_xlarge_elasticsearch = 15, r5_2xlarge_elasticsearch = 16, r5_4xlarge_elasticsearch = 17, r5_12xlarge_elasticsearch = 18, c5_large_elasticsearch = 19, c5_xlarge_elasticsearch = 20, c5_2xlarge_elasticsearch = 21, c5_4xlarge_elasticsearch = 22, c5_9xlarge_elasticsearch = 23, c5_18xlarge_elasticsearch = 24, ultrawarm1_medium_elasticsearch = 25, ultrawarm1_large_elasticsearch = 26, t2_micro_elasticsearch = 27, t2_small_elasticsearch = 28, t2_medium_elasticsearch = 29, r3_large_elasticsearch = 30, r3_xlarge_elasticsearch = 31, r3_2xlarge_elasticsearch = 32, r3_4xlarge_elasticsearch = 33, r3_8xlarge_elasticsearch = 34, i2_xlarge_elasticsearch = 35, i2_2xlarge_elasticsearch = 36, d2_xlarge_elasticsearch = 37, d2_2xlarge_elasticsearch = 38, d2_4xlarge_elasticsearch = 39, d2_8xlarge_elasticsearch = 40, c4_large_elasticsearch = 41, c4_xlarge_elasticsearch = 42, c4_2xlarge_elasticsearch = 43, c4_4xlarge_elasticsearch = 44, c4_8xlarge_elasticsearch = 45, r4_large_elasticsearch = 46, r4_xlarge_elasticsearch = 47, r4_2xlarge_elasticsearch = 48, r4_4xlarge_elasticsearch = 49, r4_8xlarge_elasticsearch = 50, r4_16xlarge_elasticsearch = 51, i3_large_elasticsearch = 52, i3_xlarge_elasticsearch = 53, i3_2xlarge_elasticsearch = 54, i3_4xlarge_elasticsearch = 55, i3_8xlarge_elasticsearch = 56, i3_16xlarge_elasticsearch = 57 }


	/** Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones. */
	export interface ZoneAwarenessConfig {
		AvailabilityZoneCount?: number | null;
	}

	export enum ElasticsearchClusterConfigDedicatedMasterType { m3_medium_elasticsearch = 0, m3_large_elasticsearch = 1, m3_xlarge_elasticsearch = 2, m3_2xlarge_elasticsearch = 3, m4_large_elasticsearch = 4, m4_xlarge_elasticsearch = 5, m4_2xlarge_elasticsearch = 6, m4_4xlarge_elasticsearch = 7, m4_10xlarge_elasticsearch = 8, m5_large_elasticsearch = 9, m5_xlarge_elasticsearch = 10, m5_2xlarge_elasticsearch = 11, m5_4xlarge_elasticsearch = 12, m5_12xlarge_elasticsearch = 13, r5_large_elasticsearch = 14, r5_xlarge_elasticsearch = 15, r5_2xlarge_elasticsearch = 16, r5_4xlarge_elasticsearch = 17, r5_12xlarge_elasticsearch = 18, c5_large_elasticsearch = 19, c5_xlarge_elasticsearch = 20, c5_2xlarge_elasticsearch = 21, c5_4xlarge_elasticsearch = 22, c5_9xlarge_elasticsearch = 23, c5_18xlarge_elasticsearch = 24, ultrawarm1_medium_elasticsearch = 25, ultrawarm1_large_elasticsearch = 26, t2_micro_elasticsearch = 27, t2_small_elasticsearch = 28, t2_medium_elasticsearch = 29, r3_large_elasticsearch = 30, r3_xlarge_elasticsearch = 31, r3_2xlarge_elasticsearch = 32, r3_4xlarge_elasticsearch = 33, r3_8xlarge_elasticsearch = 34, i2_xlarge_elasticsearch = 35, i2_2xlarge_elasticsearch = 36, d2_xlarge_elasticsearch = 37, d2_2xlarge_elasticsearch = 38, d2_4xlarge_elasticsearch = 39, d2_8xlarge_elasticsearch = 40, c4_large_elasticsearch = 41, c4_xlarge_elasticsearch = 42, c4_2xlarge_elasticsearch = 43, c4_4xlarge_elasticsearch = 44, c4_8xlarge_elasticsearch = 45, r4_large_elasticsearch = 46, r4_xlarge_elasticsearch = 47, r4_2xlarge_elasticsearch = 48, r4_4xlarge_elasticsearch = 49, r4_8xlarge_elasticsearch = 50, r4_16xlarge_elasticsearch = 51, i3_large_elasticsearch = 52, i3_xlarge_elasticsearch = 53, i3_2xlarge_elasticsearch = 54, i3_4xlarge_elasticsearch = 55, i3_8xlarge_elasticsearch = 56, i3_16xlarge_elasticsearch = 57 }

	export enum ElasticsearchClusterConfigWarmType { ultrawarm1_medium_elasticsearch = 0, ultrawarm1_large_elasticsearch = 1 }


	/** Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
	export interface EBSOptions {
		EBSEnabled?: boolean | null;

		/** The type of EBS volume, standard, gp2, or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information. */
		VolumeType?: EBSOptionsVolumeType | null;
		VolumeSize?: number | null;
		Iops?: number | null;
	}

	export enum EBSOptionsVolumeType { standard = 0, gp2 = 1, io1 = 2 }


	/** Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
	export interface SnapshotOptions {
		AutomatedSnapshotStartHour?: number | null;
	}


	/** Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
	export interface VPCDerivedInfo {
		VPCId?: string | null;
		SubnetIds?: Array<string> | null;
		AvailabilityZones?: Array<string> | null;
		SecurityGroupIds?: Array<string> | null;
	}


	/** Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
	export interface CognitoOptions {
		Enabled?: boolean | null;
		UserPoolId?: string | null;
		IdentityPoolId?: string | null;
		RoleArn?: string | null;
	}


	/** Specifies the Encryption At Rest Options. */
	export interface EncryptionAtRestOptions {
		Enabled?: boolean | null;
		KmsKeyId?: string | null;
	}


	/** Specifies the node-to-node encryption options. */
	export interface NodeToNodeEncryptionOptions {
		Enabled?: boolean | null;
	}


	/** <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
	export interface AdvancedOptions {
	}

	export interface LogPublishingOptions {
	}


	/** Options to configure endpoint for the Elasticsearch domain. */
	export interface DomainEndpointOptions {
		EnforceHTTPS?: boolean | null;
		TLSSecurityPolicy?: DomainEndpointOptionsTLSSecurityPolicy | null;
	}

	export enum DomainEndpointOptionsTLSSecurityPolicy { Policy_Min_TLS_1_0_2019_07 = 0, Policy_Min_TLS_1_2_2019_07 = 1 }


	/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled. */
	export interface AdvancedSecurityOptions {
		Enabled?: boolean | null;
		InternalUserDatabaseEnabled?: boolean | null;
	}

	export enum ESPartitionInstanceType { m3_medium_elasticsearch = 0, m3_large_elasticsearch = 1, m3_xlarge_elasticsearch = 2, m3_2xlarge_elasticsearch = 3, m4_large_elasticsearch = 4, m4_xlarge_elasticsearch = 5, m4_2xlarge_elasticsearch = 6, m4_4xlarge_elasticsearch = 7, m4_10xlarge_elasticsearch = 8, m5_large_elasticsearch = 9, m5_xlarge_elasticsearch = 10, m5_2xlarge_elasticsearch = 11, m5_4xlarge_elasticsearch = 12, m5_12xlarge_elasticsearch = 13, r5_large_elasticsearch = 14, r5_xlarge_elasticsearch = 15, r5_2xlarge_elasticsearch = 16, r5_4xlarge_elasticsearch = 17, r5_12xlarge_elasticsearch = 18, c5_large_elasticsearch = 19, c5_xlarge_elasticsearch = 20, c5_2xlarge_elasticsearch = 21, c5_4xlarge_elasticsearch = 22, c5_9xlarge_elasticsearch = 23, c5_18xlarge_elasticsearch = 24, ultrawarm1_medium_elasticsearch = 25, ultrawarm1_large_elasticsearch = 26, t2_micro_elasticsearch = 27, t2_small_elasticsearch = 28, t2_medium_elasticsearch = 29, r3_large_elasticsearch = 30, r3_xlarge_elasticsearch = 31, r3_2xlarge_elasticsearch = 32, r3_4xlarge_elasticsearch = 33, r3_8xlarge_elasticsearch = 34, i2_xlarge_elasticsearch = 35, i2_2xlarge_elasticsearch = 36, d2_xlarge_elasticsearch = 37, d2_2xlarge_elasticsearch = 38, d2_4xlarge_elasticsearch = 39, d2_8xlarge_elasticsearch = 40, c4_large_elasticsearch = 41, c4_xlarge_elasticsearch = 42, c4_2xlarge_elasticsearch = 43, c4_4xlarge_elasticsearch = 44, c4_8xlarge_elasticsearch = 45, r4_large_elasticsearch = 46, r4_xlarge_elasticsearch = 47, r4_2xlarge_elasticsearch = 48, r4_4xlarge_elasticsearch = 49, r4_8xlarge_elasticsearch = 50, r4_16xlarge_elasticsearch = 51, i3_large_elasticsearch = 52, i3_xlarge_elasticsearch = 53, i3_2xlarge_elasticsearch = 54, i3_4xlarge_elasticsearch = 55, i3_8xlarge_elasticsearch = 56, i3_16xlarge_elasticsearch = 57 }

	export enum ESWarmPartitionInstanceType { ultrawarm1_medium_elasticsearch = 0, ultrawarm1_large_elasticsearch = 1 }


	/**  The type of EBS volume, standard, gp2, or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information. */
	export enum VolumeType { standard = 0, gp2 = 1, io1 = 2 }


	/** Log Publishing option that is set for given domain. <br/>Attributes and their details: <ul> <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li> <li>Enabled: Whether the log publishing for given log type is enabled or not</li> </ul>  */
	export interface LogPublishingOption {

		/** ARN of the Cloudwatch log group to which log needs to be published. */
		CloudWatchLogsLogGroupArn?: string | null;
		Enabled?: boolean | null;
	}

	export enum TLSSecurityPolicy { Policy_Min_TLS_1_0_2019_07 = 0, Policy_Min_TLS_1_2_2019_07 = 1 }


	/** Credentials for the master user: username and password, ARN, or both. */
	export interface MasterUserOptions {

		/** The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information. */
		MasterUserARN?: string | null;
		MasterUserName?: string | null;
		MasterUserPassword?: string | null;
	}

	export interface InvalidTypeException {
	}

	export interface ResourceAlreadyExistsException {
	}


	/** The result of a <code><a>CreateOutboundCrossClusterSearchConnection</a></code> request. Contains the details of the newly created cross-cluster search connection. */
	export interface CreateOutboundCrossClusterSearchConnectionResponse {
		SourceDomainInfo?: DomainInformation | null;
		DestinationDomainInfo?: DomainInformation | null;
		ConnectionAlias?: string | null;

		/** Specifies the connection status of an outbound cross-cluster search connection. */
		ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus | null;
		CrossClusterSearchConnectionId?: string | null;
	}


	/** Specifies the connection status of an outbound cross-cluster search connection. */
	export interface OutboundCrossClusterSearchConnectionStatus {
		StatusCode?: OutboundCrossClusterSearchConnectionStatusStatusCode | null;
		Message?: string | null;
	}

	export enum OutboundCrossClusterSearchConnectionStatusStatusCode { PENDING_ACCEPTANCE = 0, VALIDATING = 1, VALIDATION_FAILED = 2, PROVISIONING = 3, ACTIVE = 4, REJECTED = 5, DELETING = 6, DELETED = 7 }


	/**  Container for response returned by <code> <a>CreatePackage</a> </code> operation.  */
	export interface CreatePackageResponse {

		/** Basic information about a package. */
		PackageDetails?: PackageDetails | null;
	}


	/** Basic information about a package. */
	export interface PackageDetails {
		PackageID?: string | null;
		PackageName?: string | null;
		PackageType?: PackageDetailsPackageType | null;
		PackageDescription?: string | null;
		PackageStatus?: PackageDetailsPackageStatus | null;
		CreatedAt?: Date | null;
		ErrorDetails?: ErrorDetails | null;
	}

	export enum PackageDetailsPackageType { TXT_DICTIONARY = 0 }

	export enum PackageDetailsPackageStatus { COPYING = 0, COPY_FAILED = 1, VALIDATING = 2, VALIDATION_FAILED = 3, AVAILABLE = 4, DELETING = 5, DELETED = 6, DELETE_FAILED = 7 }


	/** The result of a <code>DeleteElasticsearchDomain</code> request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted. */
	export interface DeleteElasticsearchDomainResponse {

		/** The current status of an Elasticsearch domain. */
		DomainStatus?: ElasticsearchDomainStatus | null;
	}


	/** The result of a <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted inbound connection. */
	export interface DeleteInboundCrossClusterSearchConnectionResponse {

		/** Specifies details of an inbound connection. */
		CrossClusterSearchConnection?: InboundCrossClusterSearchConnection | null;
	}


	/** The result of a <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted outbound connection. */
	export interface DeleteOutboundCrossClusterSearchConnectionResponse {

		/** Specifies details of an outbound connection. */
		CrossClusterSearchConnection?: OutboundCrossClusterSearchConnection | null;
	}


	/** Specifies details of an outbound connection. */
	export interface OutboundCrossClusterSearchConnection {
		SourceDomainInfo?: DomainInformation | null;
		DestinationDomainInfo?: DomainInformation | null;
		CrossClusterSearchConnectionId?: string | null;
		ConnectionAlias?: string | null;

		/** Specifies the connection status of an outbound cross-cluster search connection. */
		ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus | null;
	}


	/**  Container for response parameters to <code> <a>DeletePackage</a> </code> operation.  */
	export interface DeletePackageResponse {

		/** Basic information about a package. */
		PackageDetails?: PackageDetails | null;
	}


	/** The result of a <code>DescribeElasticsearchDomain</code> request. Contains the status of the domain specified in the request. */
	export interface DescribeElasticsearchDomainResponse {

		/**
		 * The current status of an Elasticsearch domain.
		 * Required
		 */
		DomainStatus: ElasticsearchDomainStatus;
	}


	/** The result of a <code>DescribeElasticsearchDomainConfig</code> request. Contains the configuration information of the requested domain. */
	export interface DescribeElasticsearchDomainConfigResponse {

		/**
		 * The configuration of an Elasticsearch domain.
		 * Required
		 */
		DomainConfig: ElasticsearchDomainConfig;
	}


	/** The configuration of an Elasticsearch domain. */
	export interface ElasticsearchDomainConfig {

		/** Status of the Elasticsearch version options for the specified Elasticsearch domain. */
		ElasticsearchVersion?: ElasticsearchVersionStatus | null;

		/** Specifies the configuration status for the specified Elasticsearch domain. */
		ElasticsearchClusterConfig?: ElasticsearchClusterConfigStatus | null;

		/** Status of the EBS options for the specified Elasticsearch domain. */
		EBSOptions?: EBSOptionsStatus | null;

		/** The configured access rules for the domain's document and search endpoints, and the current status of those rules. */
		AccessPolicies?: AccessPoliciesStatus | null;

		/** Status of a daily automated snapshot. */
		SnapshotOptions?: SnapshotOptionsStatus | null;

		/** Status of the VPC options for the specified Elasticsearch domain. */
		VPCOptions?: VPCDerivedInfoStatus | null;

		/** Status of the Cognito options for the specified Elasticsearch domain. */
		CognitoOptions?: CognitoOptionsStatus | null;

		/** Status of the Encryption At Rest options for the specified Elasticsearch domain. */
		EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus | null;

		/** Status of the node-to-node encryption options for the specified Elasticsearch domain. */
		NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus | null;

		/** <p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: AdvancedOptionsStatus | null;

		/** The configured log publishing options for the domain and their current status. */
		LogPublishingOptions?: LogPublishingOptionsStatus | null;

		/** The configured endpoint options for the domain and their current status. */
		DomainEndpointOptions?: DomainEndpointOptionsStatus | null;

		/** Specifies the status of advanced security options for the specified Elasticsearch domain. */
		AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus | null;
	}


	/**  Status of the Elasticsearch version options for the specified Elasticsearch domain. */
	export interface ElasticsearchVersionStatus {
		Options: string;

		/**
		 * Provides the current status of the entity.
		 * Required
		 */
		Status: OptionStatus;
	}


	/** Provides the current status of the entity. */
	export interface OptionStatus {
		CreationDate: Date;
		UpdateDate: Date;
		UpdateVersion?: number | null;

		/**
		 * <p>The state of a requested change. One of the following:</p> <ul> <li>Processing: The request change is still in-process.</li> <li>Active: The request change is processed and deployed to the Elasticsearch domain.</li> </ul>
		 * Required
		 */
		State: OptionStatusState;
		PendingDeletion?: boolean | null;
	}

	export enum OptionStatusState { RequiresIndexDocuments = 0, Processing = 1, Active = 2 }


	/**  Specifies the configuration status for the specified Elasticsearch domain. */
	export interface ElasticsearchClusterConfigStatus {

		/**
		 * Specifies the configuration for the domain cluster, such as the type and number of instances.
		 * Required
		 */
		Options: ElasticsearchClusterConfig;

		/**
		 * Provides the current status of the entity.
		 * Required
		 */
		Status: OptionStatus;
	}


	/**  Status of the EBS options for the specified Elasticsearch domain. */
	export interface EBSOptionsStatus {

		/**
		 * Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.
		 * Required
		 */
		Options: EBSOptions;

		/**
		 * Provides the current status of the entity.
		 * Required
		 */
		Status: OptionStatus;
	}


	/** The configured access rules for the domain's document and search endpoints, and the current status of those rules. */
	export interface AccessPoliciesStatus {

		/**
		 * Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB.
		 * Required
		 */
		Options: string;

		/**
		 * Provides the current status of the entity.
		 * Required
		 */
		Status: OptionStatus;
	}


	/** Status of a daily automated snapshot. */
	export interface SnapshotOptionsStatus {

		/**
		 * Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.
		 * Required
		 */
		Options: SnapshotOptions;

		/**
		 * Provides the current status of the entity.
		 * Required
		 */
		Status: OptionStatus;
	}


	/**  Status of the VPC options for the specified Elasticsearch domain. */
	export interface VPCDerivedInfoStatus {

		/**
		 * Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.
		 * Required
		 */
		Options: VPCDerivedInfo;

		/**
		 * Provides the current status of the entity.
		 * Required
		 */
		Status: OptionStatus;
	}


	/** Status of the Cognito options for the specified Elasticsearch domain. */
	export interface CognitoOptionsStatus {

		/**
		 * Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.
		 * Required
		 */
		Options: CognitoOptions;

		/**
		 * Provides the current status of the entity.
		 * Required
		 */
		Status: OptionStatus;
	}


	/**  Status of the Encryption At Rest options for the specified Elasticsearch domain. */
	export interface EncryptionAtRestOptionsStatus {

		/**
		 * Specifies the Encryption At Rest Options.
		 * Required
		 */
		Options: EncryptionAtRestOptions;

		/**
		 * Provides the current status of the entity.
		 * Required
		 */
		Status: OptionStatus;
	}


	/** Status of the node-to-node encryption options for the specified Elasticsearch domain. */
	export interface NodeToNodeEncryptionOptionsStatus {

		/**
		 * Specifies the node-to-node encryption options.
		 * Required
		 */
		Options: NodeToNodeEncryptionOptions;

		/**
		 * Provides the current status of the entity.
		 * Required
		 */
		Status: OptionStatus;
	}


	/** <p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
	export interface AdvancedOptionsStatus {

		/**
		 * <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>
		 * Required
		 */
		Options: AdvancedOptions;

		/**
		 * Provides the current status of the entity.
		 * Required
		 */
		Status: OptionStatus;
	}


	/** The configured log publishing options for the domain and their current status. */
	export interface LogPublishingOptionsStatus {
		Options?: LogPublishingOptions | null;

		/** Provides the current status of the entity. */
		Status?: OptionStatus | null;
	}


	/** The configured endpoint options for the domain and their current status. */
	export interface DomainEndpointOptionsStatus {

		/**
		 * Options to configure endpoint for the Elasticsearch domain.
		 * Required
		 */
		Options: DomainEndpointOptions;

		/**
		 * Provides the current status of the entity.
		 * Required
		 */
		Status: OptionStatus;
	}


	/**  Specifies the status of advanced security options for the specified Elasticsearch domain. */
	export interface AdvancedSecurityOptionsStatus {

		/**
		 * Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled.
		 * Required
		 */
		Options: AdvancedSecurityOptions;

		/**
		 * Provides the current status of the entity.
		 * Required
		 */
		Status: OptionStatus;
	}


	/** The result of a <code>DescribeElasticsearchDomains</code> request. Contains the status of the specified domains or all domains owned by the account. */
	export interface DescribeElasticsearchDomainsResponse {

		/**
		 * A list that contains the status of each requested Elasticsearch domain.
		 * Required
		 */
		DomainStatusList: Array<ElasticsearchDomainStatus>;
	}


	/**  Container for the parameters received from <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation.  */
	export interface DescribeElasticsearchInstanceTypeLimitsResponse {

		/** Map of Role of the Instance and Limits that are applicable. Role performed by given Instance in Elasticsearch can be one of the following: <ul> <li>data: If the given InstanceType is used as data node</li> <li>master: If the given InstanceType is used as master node</li> <li>ultra_warm: If the given InstanceType is used as warm node</li> </ul> */
		LimitsByRole?: LimitsByRole | null;
	}


	/**  Map of Role of the Instance and Limits that are applicable. Role performed by given Instance in Elasticsearch can be one of the following: <ul> <li>data: If the given InstanceType is used as data node</li> <li>master: If the given InstanceType is used as master node</li> <li>ultra_warm: If the given InstanceType is used as warm node</li> </ul>  */
	export interface LimitsByRole {
	}


	/** The result of a <code><a>DescribeInboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria. */
	export interface DescribeInboundCrossClusterSearchConnectionsResponse {
		CrossClusterSearchConnections?: Array<InboundCrossClusterSearchConnection> | null;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}


	/**  A filter used to limit results when describing inbound or outbound cross-cluster search connections. Multiple values can be specified per filter. A cross-cluster search connection must match at least one of the specified values for it to be returned from an operation.  */
	export interface Filter {
		Name?: string | null;
		Values?: Array<string> | null;
	}

	export interface InvalidPaginationTokenException {
	}


	/** The result of a <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria. */
	export interface DescribeOutboundCrossClusterSearchConnectionsResponse {
		CrossClusterSearchConnections?: Array<OutboundCrossClusterSearchConnection> | null;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}


	/**  Container for response returned by <code> <a>DescribePackages</a> </code> operation.  */
	export interface DescribePackagesResponse {
		PackageDetailsList?: Array<PackageDetails> | null;
		NextToken?: string | null;
	}


	/** Filter to apply in <code>DescribePackage</code> response. */
	export interface DescribePackagesFilter {
		Name?: DescribePackagesFilterName | null;
		Value?: Array<string> | null;
	}

	export enum DescribePackagesFilterName { PackageID = 0, PackageName = 1, PackageStatus = 2 }


	/** Container for results from <code>DescribeReservedElasticsearchInstanceOfferings</code> */
	export interface DescribeReservedElasticsearchInstanceOfferingsResponse {

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
		ReservedElasticsearchInstanceOfferings?: Array<ReservedElasticsearchInstanceOffering> | null;
	}


	/** Details of a reserved Elasticsearch instance offering. */
	export interface ReservedElasticsearchInstanceOffering {
		ReservedElasticsearchInstanceOfferingId?: string | null;
		ElasticsearchInstanceType?: ReservedElasticsearchInstanceOfferingElasticsearchInstanceType | null;
		Duration?: number | null;
		FixedPrice?: number | null;
		UsagePrice?: number | null;
		CurrencyCode?: string | null;
		PaymentOption?: ReservedElasticsearchInstanceOfferingPaymentOption | null;
		RecurringCharges?: Array<RecurringCharge> | null;
	}

	export enum ReservedElasticsearchInstanceOfferingElasticsearchInstanceType { m3_medium_elasticsearch = 0, m3_large_elasticsearch = 1, m3_xlarge_elasticsearch = 2, m3_2xlarge_elasticsearch = 3, m4_large_elasticsearch = 4, m4_xlarge_elasticsearch = 5, m4_2xlarge_elasticsearch = 6, m4_4xlarge_elasticsearch = 7, m4_10xlarge_elasticsearch = 8, m5_large_elasticsearch = 9, m5_xlarge_elasticsearch = 10, m5_2xlarge_elasticsearch = 11, m5_4xlarge_elasticsearch = 12, m5_12xlarge_elasticsearch = 13, r5_large_elasticsearch = 14, r5_xlarge_elasticsearch = 15, r5_2xlarge_elasticsearch = 16, r5_4xlarge_elasticsearch = 17, r5_12xlarge_elasticsearch = 18, c5_large_elasticsearch = 19, c5_xlarge_elasticsearch = 20, c5_2xlarge_elasticsearch = 21, c5_4xlarge_elasticsearch = 22, c5_9xlarge_elasticsearch = 23, c5_18xlarge_elasticsearch = 24, ultrawarm1_medium_elasticsearch = 25, ultrawarm1_large_elasticsearch = 26, t2_micro_elasticsearch = 27, t2_small_elasticsearch = 28, t2_medium_elasticsearch = 29, r3_large_elasticsearch = 30, r3_xlarge_elasticsearch = 31, r3_2xlarge_elasticsearch = 32, r3_4xlarge_elasticsearch = 33, r3_8xlarge_elasticsearch = 34, i2_xlarge_elasticsearch = 35, i2_2xlarge_elasticsearch = 36, d2_xlarge_elasticsearch = 37, d2_2xlarge_elasticsearch = 38, d2_4xlarge_elasticsearch = 39, d2_8xlarge_elasticsearch = 40, c4_large_elasticsearch = 41, c4_xlarge_elasticsearch = 42, c4_2xlarge_elasticsearch = 43, c4_4xlarge_elasticsearch = 44, c4_8xlarge_elasticsearch = 45, r4_large_elasticsearch = 46, r4_xlarge_elasticsearch = 47, r4_2xlarge_elasticsearch = 48, r4_4xlarge_elasticsearch = 49, r4_8xlarge_elasticsearch = 50, r4_16xlarge_elasticsearch = 51, i3_large_elasticsearch = 52, i3_xlarge_elasticsearch = 53, i3_2xlarge_elasticsearch = 54, i3_4xlarge_elasticsearch = 55, i3_8xlarge_elasticsearch = 56, i3_16xlarge_elasticsearch = 57 }

	export enum ReservedElasticsearchInstanceOfferingPaymentOption { ALL_UPFRONT = 0, PARTIAL_UPFRONT = 1, NO_UPFRONT = 2 }


	/** Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering. */
	export interface RecurringCharge {
		RecurringChargeAmount?: number | null;
		RecurringChargeFrequency?: string | null;
	}


	/** Container for results from <code>DescribeReservedElasticsearchInstances</code> */
	export interface DescribeReservedElasticsearchInstancesResponse {
		NextToken?: string | null;
		ReservedElasticsearchInstances?: Array<ReservedElasticsearchInstance> | null;
	}


	/** Details of a reserved Elasticsearch instance. */
	export interface ReservedElasticsearchInstance {
		ReservationName?: string | null;
		ReservedElasticsearchInstanceId?: string | null;
		ReservedElasticsearchInstanceOfferingId?: string | null;
		ElasticsearchInstanceType?: ReservedElasticsearchInstanceElasticsearchInstanceType | null;
		StartTime?: Date | null;
		Duration?: number | null;
		FixedPrice?: number | null;
		UsagePrice?: number | null;
		CurrencyCode?: string | null;
		ElasticsearchInstanceCount?: number | null;
		State?: string | null;
		PaymentOption?: ReservedElasticsearchInstanceOfferingPaymentOption | null;
		RecurringCharges?: Array<RecurringCharge> | null;
	}

	export enum ReservedElasticsearchInstanceElasticsearchInstanceType { m3_medium_elasticsearch = 0, m3_large_elasticsearch = 1, m3_xlarge_elasticsearch = 2, m3_2xlarge_elasticsearch = 3, m4_large_elasticsearch = 4, m4_xlarge_elasticsearch = 5, m4_2xlarge_elasticsearch = 6, m4_4xlarge_elasticsearch = 7, m4_10xlarge_elasticsearch = 8, m5_large_elasticsearch = 9, m5_xlarge_elasticsearch = 10, m5_2xlarge_elasticsearch = 11, m5_4xlarge_elasticsearch = 12, m5_12xlarge_elasticsearch = 13, r5_large_elasticsearch = 14, r5_xlarge_elasticsearch = 15, r5_2xlarge_elasticsearch = 16, r5_4xlarge_elasticsearch = 17, r5_12xlarge_elasticsearch = 18, c5_large_elasticsearch = 19, c5_xlarge_elasticsearch = 20, c5_2xlarge_elasticsearch = 21, c5_4xlarge_elasticsearch = 22, c5_9xlarge_elasticsearch = 23, c5_18xlarge_elasticsearch = 24, ultrawarm1_medium_elasticsearch = 25, ultrawarm1_large_elasticsearch = 26, t2_micro_elasticsearch = 27, t2_small_elasticsearch = 28, t2_medium_elasticsearch = 29, r3_large_elasticsearch = 30, r3_xlarge_elasticsearch = 31, r3_2xlarge_elasticsearch = 32, r3_4xlarge_elasticsearch = 33, r3_8xlarge_elasticsearch = 34, i2_xlarge_elasticsearch = 35, i2_2xlarge_elasticsearch = 36, d2_xlarge_elasticsearch = 37, d2_2xlarge_elasticsearch = 38, d2_4xlarge_elasticsearch = 39, d2_8xlarge_elasticsearch = 40, c4_large_elasticsearch = 41, c4_xlarge_elasticsearch = 42, c4_2xlarge_elasticsearch = 43, c4_4xlarge_elasticsearch = 44, c4_8xlarge_elasticsearch = 45, r4_large_elasticsearch = 46, r4_xlarge_elasticsearch = 47, r4_2xlarge_elasticsearch = 48, r4_4xlarge_elasticsearch = 49, r4_8xlarge_elasticsearch = 50, r4_16xlarge_elasticsearch = 51, i3_large_elasticsearch = 52, i3_xlarge_elasticsearch = 53, i3_2xlarge_elasticsearch = 54, i3_4xlarge_elasticsearch = 55, i3_8xlarge_elasticsearch = 56, i3_16xlarge_elasticsearch = 57 }


	/**  Container for response returned by <code> <a>DissociatePackage</a> </code> operation.  */
	export interface DissociatePackageResponse {

		/** Information on a package that is associated with a domain. */
		DomainPackageDetails?: DomainPackageDetails | null;
	}


	/**  Container for response returned by <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation.  */
	export interface GetCompatibleElasticsearchVersionsResponse {
		CompatibleElasticsearchVersions?: Array<CompatibleVersionsMap> | null;
	}


	/**  A map from an <code> <a>ElasticsearchVersion</a> </code> to a list of compatible <code> <a>ElasticsearchVersion</a> </code> s to which the domain can be upgraded.  */
	export interface CompatibleVersionsMap {
		SourceVersion?: string | null;

		/** List of supported elastic search versions. */
		TargetVersions?: Array<string> | null;
	}


	/**  Container for response returned by <code> <a>GetUpgradeHistory</a> </code> operation.  */
	export interface GetUpgradeHistoryResponse {
		UpgradeHistories?: Array<UpgradeHistory> | null;
		NextToken?: string | null;
	}


	/** History of the last 10 Upgrades and Upgrade Eligibility Checks. */
	export interface UpgradeHistory {
		UpgradeName?: string | null;
		StartTimestamp?: Date | null;
		UpgradeStatus?: UpgradeHistoryUpgradeStatus | null;
		StepsList?: Array<UpgradeStepItem> | null;
	}

	export enum UpgradeHistoryUpgradeStatus { IN_PROGRESS = 0, SUCCEEDED = 1, SUCCEEDED_WITH_ISSUES = 2, FAILED = 3 }


	/** Represents a single step of the Upgrade or Upgrade Eligibility Check workflow. */
	export interface UpgradeStepItem {
		UpgradeStep?: UpgradeStepItemUpgradeStep | null;
		UpgradeStepStatus?: UpgradeHistoryUpgradeStatus | null;
		Issues?: Array<string> | null;
		ProgressPercent?: number | null;
	}

	export enum UpgradeStepItemUpgradeStep { PRE_UPGRADE_CHECK = 0, SNAPSHOT = 1, UPGRADE = 2 }


	/**  Container for response returned by <code> <a>GetUpgradeStatus</a> </code> operation.  */
	export interface GetUpgradeStatusResponse {
		UpgradeStep?: UpgradeStepItemUpgradeStep | null;
		StepStatus?: UpgradeHistoryUpgradeStatus | null;
		UpgradeName?: string | null;
	}


	/** The result of a <code>ListDomainNames</code> operation. Contains the names of all Elasticsearch domains owned by this account. */
	export interface ListDomainNamesResponse {

		/** Contains the list of Elasticsearch domain information. */
		DomainNames?: Array<DomainInfo> | null;
	}

	export interface DomainInfo {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName?: string | null;
	}


	/**  Container for response parameters to <code> <a>ListDomainsForPackage</a> </code> operation.  */
	export interface ListDomainsForPackageResponse {
		DomainPackageDetailsList?: Array<DomainPackageDetails> | null;
		NextToken?: string | null;
	}


	/**  Container for the parameters returned by <code> <a>ListElasticsearchInstanceTypes</a> </code> operation.  */
	export interface ListElasticsearchInstanceTypesResponse {

		/** List of instance types supported by Amazon Elasticsearch service. */
		ElasticsearchInstanceTypes?: Array<ESPartitionInstanceType> | null;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}


	/**  Container for the parameters for response received from <code> <a>ListElasticsearchVersions</a> </code> operation.  */
	export interface ListElasticsearchVersionsResponse {

		/** List of supported elastic search versions. */
		ElasticsearchVersions?: Array<string> | null;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}


	/**  Container for response parameters to <code> <a>ListPackagesForDomain</a> </code> operation.  */
	export interface ListPackagesForDomainResponse {
		DomainPackageDetailsList?: Array<DomainPackageDetails> | null;
		NextToken?: string | null;
	}


	/** The result of a <code>ListTags</code> operation. Contains tags for all requested Elasticsearch domains. */
	export interface ListTagsResponse {

		/** A list of <code>Tag</code> */
		TagList?: Array<Tag> | null;
	}


	/** Represents the output of a <code>PurchaseReservedElasticsearchInstanceOffering</code> operation. */
	export interface PurchaseReservedElasticsearchInstanceOfferingResponse {
		ReservedElasticsearchInstanceId?: string | null;
		ReservationName?: string | null;
	}


	/** The result of a <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation. Contains details of rejected inbound connection. */
	export interface RejectInboundCrossClusterSearchConnectionResponse {

		/** Specifies details of an inbound connection. */
		CrossClusterSearchConnection?: InboundCrossClusterSearchConnection | null;
	}


	/** The result of a <code>StartElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update. */
	export interface StartElasticsearchServiceSoftwareUpdateResponse {

		/** The current options of an Elasticsearch domain service software options. */
		ServiceSoftwareOptions?: ServiceSoftwareOptions | null;
	}


	/** The result of an <code>UpdateElasticsearchDomain</code> request. Contains the status of the Elasticsearch domain being updated. */
	export interface UpdateElasticsearchDomainConfigResponse {

		/**
		 * The configuration of an Elasticsearch domain.
		 * Required
		 */
		DomainConfig: ElasticsearchDomainConfig;
	}


	/**  Container for response returned by <code> <a>UpgradeElasticsearchDomain</a> </code> operation.  */
	export interface UpgradeElasticsearchDomainResponse {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName?: string | null;
		TargetVersion?: string | null;
		PerformCheckOnly?: boolean | null;
	}


	/** Container for the parameters to the <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation. */
	export interface AcceptInboundCrossClusterSearchConnectionRequest {
	}


	/** Container for the parameters to the <code><a>AddTags</a></code> operation. Specify the tags that you want to attach to the Elasticsearch domain. */
	export interface AddTagsRequest {

		/**
		 * The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
		 * Required
		 */
		ARN: string;

		/**
		 * A list of <code>Tag</code>
		 * Required
		 */
		TagList: Array<Tag>;
	}


	/**  List of limits that are specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> .  */
	export interface AdditionalLimit {
		LimitName?: string | null;
		LimitValues?: Array<string> | null;
	}


	/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
	export interface AdvancedSecurityOptionsInput {
		Enabled?: boolean | null;
		InternalUserDatabaseEnabled?: boolean | null;

		/** Credentials for the master user: username and password, ARN, or both. */
		MasterUserOptions?: MasterUserOptions | null;
	}


	/**  Container for request parameters to <code> <a>AssociatePackage</a> </code> operation.  */
	export interface AssociatePackageRequest {
	}


	/** Container for the parameters to the <code><a>CancelElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to cancel a service software update on. */
	export interface CancelElasticsearchServiceSoftwareUpdateRequest {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
	}


	/** Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
	export interface VPCOptions {
		SubnetIds?: Array<string> | null;
		SecurityGroupIds?: Array<string> | null;
	}

	export interface CreateElasticsearchDomainRequest {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
		ElasticsearchVersion?: string | null;

		/** Specifies the configuration for the domain cluster, such as the type and number of instances. */
		ElasticsearchClusterConfig?: ElasticsearchClusterConfig | null;

		/** Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
		EBSOptions?: EBSOptions | null;

		/** Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies?: string | null;

		/** Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
		SnapshotOptions?: SnapshotOptions | null;

		/** Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
		VPCOptions?: VPCOptions | null;

		/** Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
		CognitoOptions?: CognitoOptions | null;

		/** Specifies the Encryption At Rest Options. */
		EncryptionAtRestOptions?: EncryptionAtRestOptions | null;

		/** Specifies the node-to-node encryption options. */
		NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions | null;

		/** <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: AdvancedOptions | null;
		LogPublishingOptions?: LogPublishingOptions | null;

		/** Options to configure endpoint for the Elasticsearch domain. */
		DomainEndpointOptions?: DomainEndpointOptions | null;

		/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
		AdvancedSecurityOptions?: AdvancedSecurityOptionsInput | null;
	}


	/** Container for the parameters to the <code><a>CreateOutboundCrossClusterSearchConnection</a></code> operation. */
	export interface CreateOutboundCrossClusterSearchConnectionRequest {
		SourceDomainInfo: DomainInformation;
		DestinationDomainInfo: DomainInformation;
		ConnectionAlias: string;
	}

	export enum PackageType { TXT_DICTIONARY = 0 }


	/** The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code> */
	export interface PackageSource {
		S3BucketName?: string | null;
		S3Key?: string | null;
	}


	/**  Container for request parameters to <code> <a>CreatePackage</a> </code> operation.  */
	export interface CreatePackageRequest {
		PackageName: string;
		PackageType: CreatePackageRequestPackageType;
		PackageDescription?: string | null;

		/**
		 * The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code>
		 * Required
		 */
		PackageSource: PackageSource;
	}

	export enum CreatePackageRequestPackageType { TXT_DICTIONARY = 0 }


	/** Container for the parameters to the <code><a>DeleteElasticsearchDomain</a></code> operation. Specifies the name of the Elasticsearch domain that you want to delete. */
	export interface DeleteElasticsearchDomainRequest {
	}


	/** Container for the parameters to the <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation. */
	export interface DeleteInboundCrossClusterSearchConnectionRequest {
	}


	/** Container for the parameters to the <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation. */
	export interface DeleteOutboundCrossClusterSearchConnectionRequest {
	}


	/**  Container for request parameters to <code> <a>DeletePackage</a> </code> operation.  */
	export interface DeletePackageRequest {
	}

	export enum DeploymentStatus { PENDING_UPDATE = 0, IN_PROGRESS = 1, COMPLETED = 2, NOT_ELIGIBLE = 3, ELIGIBLE = 4 }


	/**  Container for the parameters to the <code>DescribeElasticsearchDomainConfig</code> operation. Specifies the domain name for which you want configuration information. */
	export interface DescribeElasticsearchDomainConfigRequest {
	}


	/** Container for the parameters to the <code><a>DescribeElasticsearchDomain</a></code> operation. */
	export interface DescribeElasticsearchDomainRequest {
	}


	/** Container for the parameters to the <code><a>DescribeElasticsearchDomains</a></code> operation. By default, the API returns the status of all Elasticsearch domains. */
	export interface DescribeElasticsearchDomainsRequest {

		/**
		 * A list of Elasticsearch domain names.
		 * Required
		 */
		DomainNames: Array<string>;
	}


	/**  Container for the parameters to <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation.  */
	export interface DescribeElasticsearchInstanceTypeLimitsRequest {
	}


	/** Container for the parameters to the <code><a>DescribeInboundCrossClusterSearchConnections</a></code> operation. */
	export interface DescribeInboundCrossClusterSearchConnectionsRequest {
		Filters?: Array<Filter> | null;

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}


	/** Container for the parameters to the <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> operation. */
	export interface DescribeOutboundCrossClusterSearchConnectionsRequest {
		Filters?: Array<Filter> | null;

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}


	/**  Container for request parameters to <code> <a>DescribePackage</a> </code> operation.  */
	export interface DescribePackagesRequest {

		/** A list of <code>DescribePackagesFilter</code> to filter the packages included in a <code>DescribePackages</code> response. */
		Filters?: Array<DescribePackagesFilter> | null;

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}


	/** Container for parameters to <code>DescribeReservedElasticsearchInstanceOfferings</code> */
	export interface DescribeReservedElasticsearchInstanceOfferingsRequest {
	}


	/** Container for parameters to <code>DescribeReservedElasticsearchInstances</code> */
	export interface DescribeReservedElasticsearchInstancesRequest {
	}


	/**  Container for request parameters to <code> <a>DissociatePackage</a> </code> operation.  */
	export interface DissociatePackageRequest {
	}

	export enum DomainPackageStatus { ASSOCIATING = 0, ASSOCIATION_FAILED = 1, ACTIVE = 2, DISSOCIATING = 3, DISSOCIATION_FAILED = 4 }


	/**  Container for request parameters to <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation.  */
	export interface GetCompatibleElasticsearchVersionsRequest {
	}


	/**  Container for request parameters to <code> <a>GetUpgradeHistory</a> </code> operation.  */
	export interface GetUpgradeHistoryRequest {
	}


	/**  Container for request parameters to <code> <a>GetUpgradeStatus</a> </code> operation.  */
	export interface GetUpgradeStatusRequest {
	}

	export enum UpgradeStep { PRE_UPGRADE_CHECK = 0, SNAPSHOT = 1, UPGRADE = 2 }

	export enum UpgradeStatus { IN_PROGRESS = 0, SUCCEEDED = 1, SUCCEEDED_WITH_ISSUES = 2, FAILED = 3 }

	export enum InboundCrossClusterSearchConnectionStatusCode { PENDING_ACCEPTANCE = 0, APPROVED = 1, REJECTING = 2, REJECTED = 3, DELETING = 4, DELETED = 5 }


	/**  InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType.  */
	export interface InstanceCountLimits {

		/** Minimum number of Instances that can be instantiated for given InstanceType. */
		MinimumInstanceCount?: number | null;

		/** Maximum number of Instances that can be instantiated for given InstanceType. */
		MaximumInstanceCount?: number | null;
	}


	/** InstanceLimits represents the list of instance related attributes that are available for given InstanceType.  */
	export interface InstanceLimits {

		/** InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType. */
		InstanceCountLimits?: InstanceCountLimits | null;
	}


	/** StorageTypes represents the list of storage related types and their attributes that are available for given InstanceType.  */
	export interface StorageType {

		/** Type of the storage. List of available storage options: <ol> <li>instance</li> Inbuilt storage available for the given Instance <li>ebs</li> Elastic block storage that would be attached to the given Instance </ol> */
		StorageTypeName?: string | null;

		/** SubType of the given storage type. List of available sub-storage options: For "instance" storageType we wont have any storageSubType, in case of "ebs" storageType we will have following valid storageSubTypes <ol> <li>standard</li> <li>gp2</li> <li>io1</li> </ol> Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options. */
		StorageSubTypeName?: string | null;
		StorageTypeLimits?: Array<StorageTypeLimit> | null;
	}


	/** Limits that are applicable for given storage type.  */
	export interface StorageTypeLimit {
		LimitName?: string | null;
		LimitValues?: Array<string> | null;
	}


	/**  Limits for given InstanceType and for each of it's role. <br/> Limits contains following <code> <a>StorageTypes,</a> </code> <code> <a>InstanceLimits</a> </code> and <code> <a>AdditionalLimits</a> </code>  */
	export interface Limits {
		StorageTypes?: Array<StorageType> | null;

		/** InstanceLimits represents the list of instance related attributes that are available for given InstanceType. */
		InstanceLimits?: InstanceLimits | null;
		AdditionalLimits?: Array<AdditionalLimit> | null;
	}


	/**  Container for request parameters to <code> <a>ListDomainsForPackage</a> </code> operation.  */
	export interface ListDomainsForPackageRequest {
	}


	/**  Container for the parameters to the <code> <a>ListElasticsearchInstanceTypes</a> </code> operation.  */
	export interface ListElasticsearchInstanceTypesRequest {
	}


	/** <p> Container for the parameters to the <code> <a>ListElasticsearchVersions</a> </code> operation. <p> Use <code> <a>MaxResults</a> </code> to control the maximum number of results to retrieve in a single call. </p> <p> Use <code> <a>NextToken</a> </code> in response to retrieve more results. If the received response does not contain a NextToken, then there are no more results to retrieve. </p> </p> */
	export interface ListElasticsearchVersionsRequest {
	}


	/**  Container for request parameters to <code> <a>ListPackagesForDomain</a> </code> operation.  */
	export interface ListPackagesForDomainRequest {
	}


	/** Container for the parameters to the <code><a>ListTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view are attached. */
	export interface ListTagsRequest {
	}


	/** Type of Log File, it can be one of the following: <ul> <li>INDEX_SLOW_LOGS: Index slow logs contain insert requests that took more time than configured index query log threshold to execute.</li> <li>SEARCH_SLOW_LOGS: Search slow logs contain search queries that took more time than configured search query log threshold to execute.</li> <li>ES_APPLICATION_LOGS: Elasticsearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.</li> </ul>  */
	export enum LogType { INDEX_SLOW_LOGS = 0, SEARCH_SLOW_LOGS = 1, ES_APPLICATION_LOGS = 2 }


	/** <p>The state of a requested change. One of the following:</p> <ul> <li>Processing: The request change is still in-process.</li> <li>Active: The request change is processed and deployed to the Elasticsearch domain.</li> </ul> */
	export enum OptionState { RequiresIndexDocuments = 0, Processing = 1, Active = 2 }

	export enum OutboundCrossClusterSearchConnectionStatusCode { PENDING_ACCEPTANCE = 0, VALIDATING = 1, VALIDATION_FAILED = 2, PROVISIONING = 3, ACTIVE = 4, REJECTED = 5, DELETING = 6, DELETED = 7 }

	export enum PackageStatus { COPYING = 0, COPY_FAILED = 1, VALIDATING = 2, VALIDATION_FAILED = 3, AVAILABLE = 4, DELETING = 5, DELETED = 6, DELETE_FAILED = 7 }


	/** Container for parameters to <code>PurchaseReservedElasticsearchInstanceOffering</code> */
	export interface PurchaseReservedElasticsearchInstanceOfferingRequest {
		ReservedElasticsearchInstanceOfferingId: string;
		ReservationName: string;

		/**
		 * Specifies the number of EC2 instances in the Elasticsearch domain.
		 * Minimum: 1
		 */
		InstanceCount?: number | null;
	}


	/** Container for the parameters to the <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation. */
	export interface RejectInboundCrossClusterSearchConnectionRequest {
	}


	/** Container for the parameters to the <code><a>RemoveTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain from which you want to remove the specified <code>TagKey</code>. */
	export interface RemoveTagsRequest {

		/**
		 * The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
		 * Required
		 */
		ARN: string;
		TagKeys: Array<string>;
	}

	export enum ReservedElasticsearchInstancePaymentOption { ALL_UPFRONT = 0, PARTIAL_UPFRONT = 1, NO_UPFRONT = 2 }


	/** Container for the parameters to the <code><a>StartElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to schedule a service software update on. */
	export interface StartElasticsearchServiceSoftwareUpdateRequest {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
	}


	/** Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster. */
	export interface UpdateElasticsearchDomainConfigRequest {

		/** Specifies the configuration for the domain cluster, such as the type and number of instances. */
		ElasticsearchClusterConfig?: ElasticsearchClusterConfig | null;

		/** Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
		EBSOptions?: EBSOptions | null;

		/** Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
		SnapshotOptions?: SnapshotOptions | null;

		/** Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
		VPCOptions?: VPCOptions | null;

		/** Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
		CognitoOptions?: CognitoOptions | null;

		/** <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: AdvancedOptions | null;

		/** Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies?: string | null;
		LogPublishingOptions?: LogPublishingOptions | null;

		/** Options to configure endpoint for the Elasticsearch domain. */
		DomainEndpointOptions?: DomainEndpointOptions | null;

		/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
		AdvancedSecurityOptions?: AdvancedSecurityOptionsInput | null;
	}


	/**  Container for request parameters to <code> <a>UpgradeElasticsearchDomain</a> </code> operation.  */
	export interface UpgradeElasticsearchDomainRequest {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
		TargetVersion: string;
		PerformCheckOnly?: boolean | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Allows the destination domain owner to accept an inbound cross-cluster search connection request.
		 * Put 2015-01-01/es/ccs/inboundConnection/{ConnectionId}/accept
		 * @param {string} ConnectionId The id of the inbound connection that you want to accept.
		 * @return {AcceptInboundCrossClusterSearchConnectionResponse} Success
		 */
		AcceptInboundCrossClusterSearchConnection(ConnectionId: string): Observable<AcceptInboundCrossClusterSearchConnectionResponse> {
			return this.http.put<AcceptInboundCrossClusterSearchConnectionResponse>(this.baseUri + '2015-01-01/es/ccs/inboundConnection/' + (ConnectionId == null ? '' : encodeURIComponent(ConnectionId)) + '/accept', null, {});
		}

		/**
		 * Attaches tags to an existing Elasticsearch domain. Tags are a set of case-sensitive key value pairs. An Elasticsearch domain may have up to 10 tags. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-awsresorcetagging" target="_blank"> Tagging Amazon Elasticsearch Service Domains for more information.</a>
		 * Post 2015-01-01/tags
		 * @return {void} Success
		 */
		AddTags(requestBody: AddTagsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-01-01/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates a package with an Amazon ES domain.
		 * Post 2015-01-01/packages/associate/{PackageID}/{DomainName}
		 * @param {string} PackageID Internal ID of the package that you want to associate with a domain. Use <code>DescribePackages</code> to find this value.
		 * @param {string} DomainName Name of the domain that you want to associate the package with.
		 * @return {AssociatePackageResponse} Success
		 */
		AssociatePackage(PackageID: string, DomainName: string): Observable<AssociatePackageResponse> {
			return this.http.post<AssociatePackageResponse>(this.baseUri + '2015-01-01/packages/associate/' + (PackageID == null ? '' : encodeURIComponent(PackageID)) + '/' + (DomainName == null ? '' : encodeURIComponent(DomainName)), null, {});
		}

		/**
		 * Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the <code>AutomatedUpdateDate</code> and when the <code>UpdateStatus</code> is in the <code>PENDING_UPDATE</code> state.
		 * Post 2015-01-01/es/serviceSoftwareUpdate/cancel
		 * @return {CancelElasticsearchServiceSoftwareUpdateResponse} Success
		 */
		CancelElasticsearchServiceSoftwareUpdate(requestBody: CancelElasticsearchServiceSoftwareUpdatePostBody): Observable<CancelElasticsearchServiceSoftwareUpdateResponse> {
			return this.http.post<CancelElasticsearchServiceSoftwareUpdateResponse>(this.baseUri + '2015-01-01/es/serviceSoftwareUpdate/cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new Elasticsearch domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.
		 * Post 2015-01-01/es/domain
		 * @return {CreateElasticsearchDomainResponse} Success
		 */
		CreateElasticsearchDomain(requestBody: CreateElasticsearchDomainPostBody): Observable<CreateElasticsearchDomainResponse> {
			return this.http.post<CreateElasticsearchDomainResponse>(this.baseUri + '2015-01-01/es/domain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new cross-cluster search connection from a source domain to a destination domain.
		 * Post 2015-01-01/es/ccs/outboundConnection
		 * @return {CreateOutboundCrossClusterSearchConnectionResponse} Success
		 */
		CreateOutboundCrossClusterSearchConnection(requestBody: CreateOutboundCrossClusterSearchConnectionPostBody): Observable<CreateOutboundCrossClusterSearchConnectionResponse> {
			return this.http.post<CreateOutboundCrossClusterSearchConnectionResponse>(this.baseUri + '2015-01-01/es/ccs/outboundConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a package for use with Amazon ES domains.
		 * Post 2015-01-01/packages
		 * @return {CreatePackageResponse} Success
		 */
		CreatePackage(requestBody: CreatePackagePostBody): Observable<CreatePackageResponse> {
			return this.http.post<CreatePackageResponse>(this.baseUri + '2015-01-01/packages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.
		 * Delete 2015-01-01/es/domain/{DomainName}
		 * @param {string} DomainName The name of the Elasticsearch domain that you want to permanently delete.
		 * @return {DeleteElasticsearchDomainResponse} Success
		 */
		DeleteElasticsearchDomain(DomainName: string): Observable<DeleteElasticsearchDomainResponse> {
			return this.http.delete<DeleteElasticsearchDomainResponse>(this.baseUri + '2015-01-01/es/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)), {});
		}

		/**
		 * Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.
		 * Get 2015-01-01/es/domain/{DomainName}
		 * @param {string} DomainName The name of the Elasticsearch domain for which you want information.
		 * @return {DescribeElasticsearchDomainResponse} Success
		 */
		DescribeElasticsearchDomain(DomainName: string): Observable<DescribeElasticsearchDomainResponse> {
			return this.http.get<DescribeElasticsearchDomainResponse>(this.baseUri + '2015-01-01/es/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)), {});
		}

		/**
		 * Deletes the service-linked role that Elasticsearch Service uses to manage and maintain VPC domains. Role deletion will fail if any existing VPC domains use the role. You must delete any such Elasticsearch domains before deleting the role. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-enabling-slr" target="_blank">Deleting Elasticsearch Service Role</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i>.
		 * Delete 2015-01-01/es/role
		 * @return {void} Success
		 */
		DeleteElasticsearchServiceRole(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-01-01/es/role', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows the destination domain owner to delete an existing inbound cross-cluster search connection.
		 * Delete 2015-01-01/es/ccs/inboundConnection/{ConnectionId}
		 * @param {string} ConnectionId The id of the inbound connection that you want to permanently delete.
		 * @return {DeleteInboundCrossClusterSearchConnectionResponse} Success
		 */
		DeleteInboundCrossClusterSearchConnection(ConnectionId: string): Observable<DeleteInboundCrossClusterSearchConnectionResponse> {
			return this.http.delete<DeleteInboundCrossClusterSearchConnectionResponse>(this.baseUri + '2015-01-01/es/ccs/inboundConnection/' + (ConnectionId == null ? '' : encodeURIComponent(ConnectionId)), {});
		}

		/**
		 * Allows the source domain owner to delete an existing outbound cross-cluster search connection.
		 * Delete 2015-01-01/es/ccs/outboundConnection/{ConnectionId}
		 * @param {string} ConnectionId The id of the outbound connection that you want to permanently delete.
		 * @return {DeleteOutboundCrossClusterSearchConnectionResponse} Success
		 */
		DeleteOutboundCrossClusterSearchConnection(ConnectionId: string): Observable<DeleteOutboundCrossClusterSearchConnectionResponse> {
			return this.http.delete<DeleteOutboundCrossClusterSearchConnectionResponse>(this.baseUri + '2015-01-01/es/ccs/outboundConnection/' + (ConnectionId == null ? '' : encodeURIComponent(ConnectionId)), {});
		}

		/**
		 * Delete the package.
		 * Delete 2015-01-01/packages/{PackageID}
		 * @param {string} PackageID Internal ID of the package that you want to delete. Use <code>DescribePackages</code> to find this value.
		 * @return {DeletePackageResponse} Success
		 */
		DeletePackage(PackageID: string): Observable<DeletePackageResponse> {
			return this.http.delete<DeletePackageResponse>(this.baseUri + '2015-01-01/packages/' + (PackageID == null ? '' : encodeURIComponent(PackageID)), {});
		}

		/**
		 * Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.
		 * Get 2015-01-01/es/domain/{DomainName}/config
		 * @param {string} DomainName The Elasticsearch domain that you want to get information about.
		 * @return {DescribeElasticsearchDomainConfigResponse} Success
		 */
		DescribeElasticsearchDomainConfig(DomainName: string): Observable<DescribeElasticsearchDomainConfigResponse> {
			return this.http.get<DescribeElasticsearchDomainConfigResponse>(this.baseUri + '2015-01-01/es/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/config', {});
		}

		/**
		 * Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances.
		 * Post 2015-01-01/es/domain/{DomainName}/config
		 * @param {string} DomainName The name of the Elasticsearch domain that you are updating. 
		 * @return {UpdateElasticsearchDomainConfigResponse} Success
		 */
		UpdateElasticsearchDomainConfig(DomainName: string, requestBody: UpdateElasticsearchDomainConfigPostBody): Observable<UpdateElasticsearchDomainConfigResponse> {
			return this.http.post<UpdateElasticsearchDomainConfigResponse>(this.baseUri + '2015-01-01/es/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.
		 * Post 2015-01-01/es/domain-info
		 * @return {DescribeElasticsearchDomainsResponse} Success
		 */
		DescribeElasticsearchDomains(requestBody: DescribeElasticsearchDomainsPostBody): Observable<DescribeElasticsearchDomainsResponse> {
			return this.http.post<DescribeElasticsearchDomainsResponse>(this.baseUri + '2015-01-01/es/domain-info', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion. When modifying existing Domain, specify the <code> <a>DomainName</a> </code> to know what Limits are supported for modifying.
		 * Get 2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}
		 * @param {string} domainName  DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for Elasticsearch <code> <a>Limits</a> </code> for existing domain. 
		 * @param {DescribeElasticsearchInstanceTypeLimitsInstanceType} InstanceType  The instance type for an Elasticsearch cluster for which Elasticsearch <code> <a>Limits</a> </code> are needed. 
		 * @param {string} ElasticsearchVersion  Version of Elasticsearch for which <code> <a>Limits</a> </code> are needed. 
		 * @return {DescribeElasticsearchInstanceTypeLimitsResponse} Success
		 */
		DescribeElasticsearchInstanceTypeLimits(domainName: string | null | undefined, InstanceType: DescribeElasticsearchInstanceTypeLimitsInstanceType, ElasticsearchVersion: string): Observable<DescribeElasticsearchInstanceTypeLimitsResponse> {
			return this.http.get<DescribeElasticsearchInstanceTypeLimitsResponse>(this.baseUri + '2015-01-01/es/instanceTypeLimits/' + (ElasticsearchVersion == null ? '' : encodeURIComponent(ElasticsearchVersion)) + '/' + InstanceType + '?domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)), {});
		}

		/**
		 * Lists all the inbound cross-cluster search connections for a destination domain.
		 * Post 2015-01-01/es/ccs/inboundConnection/search
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeInboundCrossClusterSearchConnectionsResponse} Success
		 */
		DescribeInboundCrossClusterSearchConnections(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeInboundCrossClusterSearchConnectionsPostBody): Observable<DescribeInboundCrossClusterSearchConnectionsResponse> {
			return this.http.post<DescribeInboundCrossClusterSearchConnectionsResponse>(this.baseUri + '2015-01-01/es/ccs/inboundConnection/search?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the outbound cross-cluster search connections for a source domain.
		 * Post 2015-01-01/es/ccs/outboundConnection/search
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeOutboundCrossClusterSearchConnectionsResponse} Success
		 */
		DescribeOutboundCrossClusterSearchConnections(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeOutboundCrossClusterSearchConnectionsPostBody): Observable<DescribeOutboundCrossClusterSearchConnectionsResponse> {
			return this.http.post<DescribeOutboundCrossClusterSearchConnectionsResponse>(this.baseUri + '2015-01-01/es/ccs/outboundConnection/search?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes all packages available to Amazon ES. Includes options for filtering, limiting the number of results, and pagination.
		 * Post 2015-01-01/packages/describe
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribePackagesResponse} Success
		 */
		DescribePackages(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribePackagesPostBody): Observable<DescribePackagesResponse> {
			return this.http.post<DescribePackagesResponse>(this.baseUri + '2015-01-01/packages/describe?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists available reserved Elasticsearch instance offerings.
		 * Get 2015-01-01/es/reservedInstanceOfferings
		 * @param {string} offeringId The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.
		 * @param {number} maxResults Set this value to limit the number of results returned. If not specified, defaults to 100.
		 * @param {string} nextToken NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeReservedElasticsearchInstanceOfferingsResponse} Success
		 */
		DescribeReservedElasticsearchInstanceOfferings(offeringId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<DescribeReservedElasticsearchInstanceOfferingsResponse> {
			return this.http.get<DescribeReservedElasticsearchInstanceOfferingsResponse>(this.baseUri + '2015-01-01/es/reservedInstanceOfferings?offeringId=' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns information about reserved Elasticsearch instances for this account.
		 * Get 2015-01-01/es/reservedInstances
		 * @param {string} reservationId The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the specified reserved Elasticsearch instance ID.
		 * @param {number} maxResults Set this value to limit the number of results returned. If not specified, defaults to 100.
		 * @param {string} nextToken NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeReservedElasticsearchInstancesResponse} Success
		 */
		DescribeReservedElasticsearchInstances(reservationId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<DescribeReservedElasticsearchInstancesResponse> {
			return this.http.get<DescribeReservedElasticsearchInstancesResponse>(this.baseUri + '2015-01-01/es/reservedInstances?reservationId=' + (reservationId == null ? '' : encodeURIComponent(reservationId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Dissociates a package from the Amazon ES domain.
		 * Post 2015-01-01/packages/dissociate/{PackageID}/{DomainName}
		 * @param {string} PackageID Internal ID of the package that you want to associate with a domain. Use <code>DescribePackages</code> to find this value.
		 * @param {string} DomainName Name of the domain that you want to associate the package with.
		 * @return {DissociatePackageResponse} Success
		 */
		DissociatePackage(PackageID: string, DomainName: string): Observable<DissociatePackageResponse> {
			return this.http.post<DissociatePackageResponse>(this.baseUri + '2015-01-01/packages/dissociate/' + (PackageID == null ? '' : encodeURIComponent(PackageID)) + '/' + (DomainName == null ? '' : encodeURIComponent(DomainName)), null, {});
		}

		/**
		 * Returns a list of upgrade compatible Elastisearch versions. You can optionally pass a <code> <a>DomainName</a> </code> to get all upgrade compatible Elasticsearch versions for that specific domain.
		 * Get 2015-01-01/es/compatibleVersions
		 * @return {GetCompatibleElasticsearchVersionsResponse} Success
		 */
		GetCompatibleElasticsearchVersions(domainName: string | null | undefined): Observable<GetCompatibleElasticsearchVersionsResponse> {
			return this.http.get<GetCompatibleElasticsearchVersionsResponse>(this.baseUri + '2015-01-01/es/compatibleVersions?domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)), {});
		}

		/**
		 * Retrieves the complete history of the last 10 upgrades that were performed on the domain.
		 * Get 2015-01-01/es/upgradeDomain/{DomainName}/history
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetUpgradeHistoryResponse} Success
		 */
		GetUpgradeHistory(DomainName: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetUpgradeHistoryResponse> {
			return this.http.get<GetUpgradeHistoryResponse>(this.baseUri + '2015-01-01/es/upgradeDomain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/history&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.
		 * Get 2015-01-01/es/upgradeDomain/{DomainName}/status
		 * @return {GetUpgradeStatusResponse} Success
		 */
		GetUpgradeStatus(DomainName: string): Observable<GetUpgradeStatusResponse> {
			return this.http.get<GetUpgradeStatusResponse>(this.baseUri + '2015-01-01/es/upgradeDomain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/status', {});
		}

		/**
		 * Returns the name of all Elasticsearch domains owned by the current user's account.
		 * Get 2015-01-01/domain
		 * @return {ListDomainNamesResponse} Success
		 */
		ListDomainNames(): Observable<ListDomainNamesResponse> {
			return this.http.get<ListDomainNamesResponse>(this.baseUri + '2015-01-01/domain', {});
		}

		/**
		 * Lists all Amazon ES domains associated with the package.
		 * Get 2015-01-01/packages/{PackageID}/domains
		 * @param {string} PackageID The package for which to list domains.
		 * @param {number} maxResults Limits results to a maximum number of domains.
		 * @param {string} nextToken Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDomainsForPackageResponse} Success
		 */
		ListDomainsForPackage(PackageID: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDomainsForPackageResponse> {
			return this.http.get<ListDomainsForPackageResponse>(this.baseUri + '2015-01-01/packages/' + (PackageID == null ? '' : encodeURIComponent(PackageID)) + '/domains&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * List all Elasticsearch instance types that are supported for given ElasticsearchVersion
		 * Get 2015-01-01/es/instanceTypes/{ElasticsearchVersion}
		 * @param {string} ElasticsearchVersion Version of Elasticsearch for which list of supported elasticsearch instance types are needed. 
		 * @param {string} domainName DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for list of available Elasticsearch instance types when modifying existing domain. 
		 * @param {number} maxResults  Set this value to limit the number of results returned. Value provided must be greater than 30 else it wont be honored. 
		 * @param {string} nextToken NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination. 
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListElasticsearchInstanceTypesResponse} Success
		 */
		ListElasticsearchInstanceTypes(ElasticsearchVersion: string, domainName: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListElasticsearchInstanceTypesResponse> {
			return this.http.get<ListElasticsearchInstanceTypesResponse>(this.baseUri + '2015-01-01/es/instanceTypes/' + (ElasticsearchVersion == null ? '' : encodeURIComponent(ElasticsearchVersion)) + '&domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * List all supported Elasticsearch versions
		 * Get 2015-01-01/es/versions
		 * @param {number} maxResults  Set this value to limit the number of results returned. Value provided must be greater than 10 else it wont be honored. 
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListElasticsearchVersionsResponse} Success
		 */
		ListElasticsearchVersions(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListElasticsearchVersionsResponse> {
			return this.http.get<ListElasticsearchVersionsResponse>(this.baseUri + '2015-01-01/es/versions?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists all packages associated with the Amazon ES domain.
		 * Get 2015-01-01/domain/{DomainName}/packages
		 * @param {string} DomainName The name of the domain for which you want to list associated packages.
		 * @param {number} maxResults Limits results to a maximum number of packages.
		 * @param {string} nextToken Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPackagesForDomainResponse} Success
		 */
		ListPackagesForDomain(DomainName: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPackagesForDomainResponse> {
			return this.http.get<ListPackagesForDomainResponse>(this.baseUri + '2015-01-01/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/packages&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns all tags for the given Elasticsearch domain.
		 * Get 2015-01-01/tags/#arn
		 * @param {string} arn  Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view.
		 * @return {ListTagsResponse} Success
		 */
		ListTags(arn: string): Observable<ListTagsResponse> {
			return this.http.get<ListTagsResponse>(this.baseUri + '2015-01-01/tags/#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * Allows you to purchase reserved Elasticsearch instances.
		 * Post 2015-01-01/es/purchaseReservedInstanceOffering
		 * @return {PurchaseReservedElasticsearchInstanceOfferingResponse} Success
		 */
		PurchaseReservedElasticsearchInstanceOffering(requestBody: PurchaseReservedElasticsearchInstanceOfferingPostBody): Observable<PurchaseReservedElasticsearchInstanceOfferingResponse> {
			return this.http.post<PurchaseReservedElasticsearchInstanceOfferingResponse>(this.baseUri + '2015-01-01/es/purchaseReservedInstanceOffering', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows the destination domain owner to reject an inbound cross-cluster search connection request.
		 * Put 2015-01-01/es/ccs/inboundConnection/{ConnectionId}/reject
		 * @param {string} ConnectionId The id of the inbound connection that you want to reject.
		 * @return {RejectInboundCrossClusterSearchConnectionResponse} Success
		 */
		RejectInboundCrossClusterSearchConnection(ConnectionId: string): Observable<RejectInboundCrossClusterSearchConnectionResponse> {
			return this.http.put<RejectInboundCrossClusterSearchConnectionResponse>(this.baseUri + '2015-01-01/es/ccs/inboundConnection/' + (ConnectionId == null ? '' : encodeURIComponent(ConnectionId)) + '/reject', null, {});
		}

		/**
		 * Removes the specified set of tags from the specified Elasticsearch domain.
		 * Post 2015-01-01/tags-removal
		 * @return {void} Success
		 */
		RemoveTags(requestBody: RemoveTagsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-01-01/tags-removal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Schedules a service software update for an Amazon ES domain.
		 * Post 2015-01-01/es/serviceSoftwareUpdate/start
		 * @return {StartElasticsearchServiceSoftwareUpdateResponse} Success
		 */
		StartElasticsearchServiceSoftwareUpdate(requestBody: StartElasticsearchServiceSoftwareUpdatePostBody): Observable<StartElasticsearchServiceSoftwareUpdateResponse> {
			return this.http.post<StartElasticsearchServiceSoftwareUpdateResponse>(this.baseUri + '2015-01-01/es/serviceSoftwareUpdate/start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to either upgrade your domain or perform an Upgrade eligibility check to a compatible Elasticsearch version.
		 * Post 2015-01-01/es/upgradeDomain
		 * @return {UpgradeElasticsearchDomainResponse} Success
		 */
		UpgradeElasticsearchDomain(requestBody: UpgradeElasticsearchDomainPostBody): Observable<UpgradeElasticsearchDomainResponse> {
			return this.http.post<UpgradeElasticsearchDomainResponse>(this.baseUri + '2015-01-01/es/upgradeDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AddTagsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
		 * Required
		 */
		ARN: string;

		/**
		 * A list of <code>Tag</code>
		 * Required
		 */
		TagList: Array<Tag>;
	}

	export interface CancelElasticsearchServiceSoftwareUpdatePostBody {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
	}

	export interface CreateElasticsearchDomainPostBody {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/** String of format X.Y to specify version for the Elasticsearch domain eg. "1.5" or "2.3". For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. */
		ElasticsearchVersion?: string | null;

		/** Specifies the configuration for the domain cluster, such as the type and number of instances. */
		ElasticsearchClusterConfig?: CreateElasticsearchDomainPostBodyElasticsearchClusterConfig | null;

		/** Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
		EBSOptions?: CreateElasticsearchDomainPostBodyEBSOptions | null;

		/** Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies?: string | null;

		/** Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
		SnapshotOptions?: CreateElasticsearchDomainPostBodySnapshotOptions | null;

		/** Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
		VPCOptions?: CreateElasticsearchDomainPostBodyVPCOptions | null;

		/** Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
		CognitoOptions?: CreateElasticsearchDomainPostBodyCognitoOptions | null;

		/** Specifies the Encryption At Rest Options. */
		EncryptionAtRestOptions?: CreateElasticsearchDomainPostBodyEncryptionAtRestOptions | null;

		/** Specifies the node-to-node encryption options. */
		NodeToNodeEncryptionOptions?: CreateElasticsearchDomainPostBodyNodeToNodeEncryptionOptions | null;

		/** <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: {[id: string]: string } | null;

		/** Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log. */
		LogPublishingOptions?: {[id: string]: LogPublishingOption } | null;

		/** Options to configure endpoint for the Elasticsearch domain. */
		DomainEndpointOptions?: CreateElasticsearchDomainPostBodyDomainEndpointOptions | null;

		/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
		AdvancedSecurityOptions?: CreateElasticsearchDomainPostBodyAdvancedSecurityOptions | null;
	}

	export interface CreateElasticsearchDomainPostBodyElasticsearchClusterConfig {
		InstanceType?: CreateElasticsearchDomainPostBodyElasticsearchClusterConfigInstanceType | null;
		InstanceCount?: number | null;
		DedicatedMasterEnabled?: boolean | null;
		ZoneAwarenessEnabled?: boolean | null;

		/** Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones. */
		ZoneAwarenessConfig?: ZoneAwarenessConfig | null;
		DedicatedMasterType?: CreateElasticsearchDomainPostBodyElasticsearchClusterConfigDedicatedMasterType | null;
		DedicatedMasterCount?: number | null;
		WarmEnabled?: boolean | null;
		WarmType?: CreateElasticsearchDomainPostBodyElasticsearchClusterConfigWarmType | null;
		WarmCount?: number | null;
	}

	export enum CreateElasticsearchDomainPostBodyElasticsearchClusterConfigInstanceType { m3_medium_elasticsearch = 0, m3_large_elasticsearch = 1, m3_xlarge_elasticsearch = 2, m3_2xlarge_elasticsearch = 3, m4_large_elasticsearch = 4, m4_xlarge_elasticsearch = 5, m4_2xlarge_elasticsearch = 6, m4_4xlarge_elasticsearch = 7, m4_10xlarge_elasticsearch = 8, m5_large_elasticsearch = 9, m5_xlarge_elasticsearch = 10, m5_2xlarge_elasticsearch = 11, m5_4xlarge_elasticsearch = 12, m5_12xlarge_elasticsearch = 13, r5_large_elasticsearch = 14, r5_xlarge_elasticsearch = 15, r5_2xlarge_elasticsearch = 16, r5_4xlarge_elasticsearch = 17, r5_12xlarge_elasticsearch = 18, c5_large_elasticsearch = 19, c5_xlarge_elasticsearch = 20, c5_2xlarge_elasticsearch = 21, c5_4xlarge_elasticsearch = 22, c5_9xlarge_elasticsearch = 23, c5_18xlarge_elasticsearch = 24, ultrawarm1_medium_elasticsearch = 25, ultrawarm1_large_elasticsearch = 26, t2_micro_elasticsearch = 27, t2_small_elasticsearch = 28, t2_medium_elasticsearch = 29, r3_large_elasticsearch = 30, r3_xlarge_elasticsearch = 31, r3_2xlarge_elasticsearch = 32, r3_4xlarge_elasticsearch = 33, r3_8xlarge_elasticsearch = 34, i2_xlarge_elasticsearch = 35, i2_2xlarge_elasticsearch = 36, d2_xlarge_elasticsearch = 37, d2_2xlarge_elasticsearch = 38, d2_4xlarge_elasticsearch = 39, d2_8xlarge_elasticsearch = 40, c4_large_elasticsearch = 41, c4_xlarge_elasticsearch = 42, c4_2xlarge_elasticsearch = 43, c4_4xlarge_elasticsearch = 44, c4_8xlarge_elasticsearch = 45, r4_large_elasticsearch = 46, r4_xlarge_elasticsearch = 47, r4_2xlarge_elasticsearch = 48, r4_4xlarge_elasticsearch = 49, r4_8xlarge_elasticsearch = 50, r4_16xlarge_elasticsearch = 51, i3_large_elasticsearch = 52, i3_xlarge_elasticsearch = 53, i3_2xlarge_elasticsearch = 54, i3_4xlarge_elasticsearch = 55, i3_8xlarge_elasticsearch = 56, i3_16xlarge_elasticsearch = 57 }

	export enum CreateElasticsearchDomainPostBodyElasticsearchClusterConfigDedicatedMasterType { m3_medium_elasticsearch = 0, m3_large_elasticsearch = 1, m3_xlarge_elasticsearch = 2, m3_2xlarge_elasticsearch = 3, m4_large_elasticsearch = 4, m4_xlarge_elasticsearch = 5, m4_2xlarge_elasticsearch = 6, m4_4xlarge_elasticsearch = 7, m4_10xlarge_elasticsearch = 8, m5_large_elasticsearch = 9, m5_xlarge_elasticsearch = 10, m5_2xlarge_elasticsearch = 11, m5_4xlarge_elasticsearch = 12, m5_12xlarge_elasticsearch = 13, r5_large_elasticsearch = 14, r5_xlarge_elasticsearch = 15, r5_2xlarge_elasticsearch = 16, r5_4xlarge_elasticsearch = 17, r5_12xlarge_elasticsearch = 18, c5_large_elasticsearch = 19, c5_xlarge_elasticsearch = 20, c5_2xlarge_elasticsearch = 21, c5_4xlarge_elasticsearch = 22, c5_9xlarge_elasticsearch = 23, c5_18xlarge_elasticsearch = 24, ultrawarm1_medium_elasticsearch = 25, ultrawarm1_large_elasticsearch = 26, t2_micro_elasticsearch = 27, t2_small_elasticsearch = 28, t2_medium_elasticsearch = 29, r3_large_elasticsearch = 30, r3_xlarge_elasticsearch = 31, r3_2xlarge_elasticsearch = 32, r3_4xlarge_elasticsearch = 33, r3_8xlarge_elasticsearch = 34, i2_xlarge_elasticsearch = 35, i2_2xlarge_elasticsearch = 36, d2_xlarge_elasticsearch = 37, d2_2xlarge_elasticsearch = 38, d2_4xlarge_elasticsearch = 39, d2_8xlarge_elasticsearch = 40, c4_large_elasticsearch = 41, c4_xlarge_elasticsearch = 42, c4_2xlarge_elasticsearch = 43, c4_4xlarge_elasticsearch = 44, c4_8xlarge_elasticsearch = 45, r4_large_elasticsearch = 46, r4_xlarge_elasticsearch = 47, r4_2xlarge_elasticsearch = 48, r4_4xlarge_elasticsearch = 49, r4_8xlarge_elasticsearch = 50, r4_16xlarge_elasticsearch = 51, i3_large_elasticsearch = 52, i3_xlarge_elasticsearch = 53, i3_2xlarge_elasticsearch = 54, i3_4xlarge_elasticsearch = 55, i3_8xlarge_elasticsearch = 56, i3_16xlarge_elasticsearch = 57 }

	export enum CreateElasticsearchDomainPostBodyElasticsearchClusterConfigWarmType { ultrawarm1_medium_elasticsearch = 0, ultrawarm1_large_elasticsearch = 1 }

	export interface CreateElasticsearchDomainPostBodyEBSOptions {
		EBSEnabled?: boolean | null;

		/** The type of EBS volume, standard, gp2, or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information. */
		VolumeType?: EBSOptionsVolumeType | null;
		VolumeSize?: number | null;
		Iops?: number | null;
	}

	export interface CreateElasticsearchDomainPostBodySnapshotOptions {
		AutomatedSnapshotStartHour?: number | null;
	}

	export interface CreateElasticsearchDomainPostBodyVPCOptions {
		SubnetIds?: Array<string> | null;
		SecurityGroupIds?: Array<string> | null;
	}

	export interface CreateElasticsearchDomainPostBodyCognitoOptions {
		Enabled?: boolean | null;
		UserPoolId?: string | null;
		IdentityPoolId?: string | null;
		RoleArn?: string | null;
	}

	export interface CreateElasticsearchDomainPostBodyEncryptionAtRestOptions {
		Enabled?: boolean | null;
		KmsKeyId?: string | null;
	}

	export interface CreateElasticsearchDomainPostBodyNodeToNodeEncryptionOptions {
		Enabled?: boolean | null;
	}

	export interface CreateElasticsearchDomainPostBodyDomainEndpointOptions {
		EnforceHTTPS?: boolean | null;
		TLSSecurityPolicy?: CreateElasticsearchDomainPostBodyDomainEndpointOptionsTLSSecurityPolicy | null;
	}

	export enum CreateElasticsearchDomainPostBodyDomainEndpointOptionsTLSSecurityPolicy { Policy_Min_TLS_1_0_2019_07 = 0, Policy_Min_TLS_1_2_2019_07 = 1 }

	export interface CreateElasticsearchDomainPostBodyAdvancedSecurityOptions {
		Enabled?: boolean | null;
		InternalUserDatabaseEnabled?: boolean | null;

		/** Credentials for the master user: username and password, ARN, or both. */
		MasterUserOptions?: MasterUserOptions | null;
	}

	export interface CreateOutboundCrossClusterSearchConnectionPostBody {

		/**
		 * Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.
		 * Required
		 */
		SourceDomainInfo: CreateOutboundCrossClusterSearchConnectionPostBodySourceDomainInfo;

		/**
		 * Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.
		 * Required
		 */
		DestinationDomainInfo: CreateOutboundCrossClusterSearchConnectionPostBodyDestinationDomainInfo;

		/**
		 * Specifies the connection alias that will be used by the customer for this connection.
		 * Required
		 * Max length: 20
		 */
		ConnectionAlias: string;
	}

	export interface CreateOutboundCrossClusterSearchConnectionPostBodySourceDomainInfo {
		OwnerId?: string | null;

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName?: string | null;
		Region?: string | null;
	}

	export interface CreateOutboundCrossClusterSearchConnectionPostBodyDestinationDomainInfo {
		OwnerId?: string | null;

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName?: string | null;
		Region?: string | null;
	}

	export interface CreatePackagePostBody {

		/**
		 * Unique identifier for the package.
		 * Required
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		PackageName: string;

		/**
		 * Type of package. Currently supports only TXT-DICTIONARY.
		 * Required
		 */
		PackageType: CreatePackagePostBodyPackageType;

		/**
		 * Description of the package.
		 * Max length: 1024
		 */
		PackageDescription?: string | null;

		/**
		 * The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code>
		 * Required
		 */
		PackageSource: CreatePackagePostBodyPackageSource;
	}

	export enum CreatePackagePostBodyPackageType { TXT_DICTIONARY = 0 }

	export interface CreatePackagePostBodyPackageSource {
		S3BucketName?: string | null;
		S3Key?: string | null;
	}

	export interface UpdateElasticsearchDomainConfigPostBody {

		/** Specifies the configuration for the domain cluster, such as the type and number of instances. */
		ElasticsearchClusterConfig?: UpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfig | null;

		/** Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
		EBSOptions?: UpdateElasticsearchDomainConfigPostBodyEBSOptions | null;

		/** Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
		SnapshotOptions?: UpdateElasticsearchDomainConfigPostBodySnapshotOptions | null;

		/** Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
		VPCOptions?: UpdateElasticsearchDomainConfigPostBodyVPCOptions | null;

		/** Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
		CognitoOptions?: UpdateElasticsearchDomainConfigPostBodyCognitoOptions | null;

		/** <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: {[id: string]: string } | null;

		/** Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies?: string | null;

		/** Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log. */
		LogPublishingOptions?: {[id: string]: LogPublishingOption } | null;

		/** Options to configure endpoint for the Elasticsearch domain. */
		DomainEndpointOptions?: UpdateElasticsearchDomainConfigPostBodyDomainEndpointOptions | null;

		/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
		AdvancedSecurityOptions?: UpdateElasticsearchDomainConfigPostBodyAdvancedSecurityOptions | null;
	}

	export interface UpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfig {
		InstanceType?: UpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfigInstanceType | null;
		InstanceCount?: number | null;
		DedicatedMasterEnabled?: boolean | null;
		ZoneAwarenessEnabled?: boolean | null;

		/** Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones. */
		ZoneAwarenessConfig?: ZoneAwarenessConfig | null;
		DedicatedMasterType?: UpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfigDedicatedMasterType | null;
		DedicatedMasterCount?: number | null;
		WarmEnabled?: boolean | null;
		WarmType?: UpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfigWarmType | null;
		WarmCount?: number | null;
	}

	export enum UpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfigInstanceType { m3_medium_elasticsearch = 0, m3_large_elasticsearch = 1, m3_xlarge_elasticsearch = 2, m3_2xlarge_elasticsearch = 3, m4_large_elasticsearch = 4, m4_xlarge_elasticsearch = 5, m4_2xlarge_elasticsearch = 6, m4_4xlarge_elasticsearch = 7, m4_10xlarge_elasticsearch = 8, m5_large_elasticsearch = 9, m5_xlarge_elasticsearch = 10, m5_2xlarge_elasticsearch = 11, m5_4xlarge_elasticsearch = 12, m5_12xlarge_elasticsearch = 13, r5_large_elasticsearch = 14, r5_xlarge_elasticsearch = 15, r5_2xlarge_elasticsearch = 16, r5_4xlarge_elasticsearch = 17, r5_12xlarge_elasticsearch = 18, c5_large_elasticsearch = 19, c5_xlarge_elasticsearch = 20, c5_2xlarge_elasticsearch = 21, c5_4xlarge_elasticsearch = 22, c5_9xlarge_elasticsearch = 23, c5_18xlarge_elasticsearch = 24, ultrawarm1_medium_elasticsearch = 25, ultrawarm1_large_elasticsearch = 26, t2_micro_elasticsearch = 27, t2_small_elasticsearch = 28, t2_medium_elasticsearch = 29, r3_large_elasticsearch = 30, r3_xlarge_elasticsearch = 31, r3_2xlarge_elasticsearch = 32, r3_4xlarge_elasticsearch = 33, r3_8xlarge_elasticsearch = 34, i2_xlarge_elasticsearch = 35, i2_2xlarge_elasticsearch = 36, d2_xlarge_elasticsearch = 37, d2_2xlarge_elasticsearch = 38, d2_4xlarge_elasticsearch = 39, d2_8xlarge_elasticsearch = 40, c4_large_elasticsearch = 41, c4_xlarge_elasticsearch = 42, c4_2xlarge_elasticsearch = 43, c4_4xlarge_elasticsearch = 44, c4_8xlarge_elasticsearch = 45, r4_large_elasticsearch = 46, r4_xlarge_elasticsearch = 47, r4_2xlarge_elasticsearch = 48, r4_4xlarge_elasticsearch = 49, r4_8xlarge_elasticsearch = 50, r4_16xlarge_elasticsearch = 51, i3_large_elasticsearch = 52, i3_xlarge_elasticsearch = 53, i3_2xlarge_elasticsearch = 54, i3_4xlarge_elasticsearch = 55, i3_8xlarge_elasticsearch = 56, i3_16xlarge_elasticsearch = 57 }

	export enum UpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfigDedicatedMasterType { m3_medium_elasticsearch = 0, m3_large_elasticsearch = 1, m3_xlarge_elasticsearch = 2, m3_2xlarge_elasticsearch = 3, m4_large_elasticsearch = 4, m4_xlarge_elasticsearch = 5, m4_2xlarge_elasticsearch = 6, m4_4xlarge_elasticsearch = 7, m4_10xlarge_elasticsearch = 8, m5_large_elasticsearch = 9, m5_xlarge_elasticsearch = 10, m5_2xlarge_elasticsearch = 11, m5_4xlarge_elasticsearch = 12, m5_12xlarge_elasticsearch = 13, r5_large_elasticsearch = 14, r5_xlarge_elasticsearch = 15, r5_2xlarge_elasticsearch = 16, r5_4xlarge_elasticsearch = 17, r5_12xlarge_elasticsearch = 18, c5_large_elasticsearch = 19, c5_xlarge_elasticsearch = 20, c5_2xlarge_elasticsearch = 21, c5_4xlarge_elasticsearch = 22, c5_9xlarge_elasticsearch = 23, c5_18xlarge_elasticsearch = 24, ultrawarm1_medium_elasticsearch = 25, ultrawarm1_large_elasticsearch = 26, t2_micro_elasticsearch = 27, t2_small_elasticsearch = 28, t2_medium_elasticsearch = 29, r3_large_elasticsearch = 30, r3_xlarge_elasticsearch = 31, r3_2xlarge_elasticsearch = 32, r3_4xlarge_elasticsearch = 33, r3_8xlarge_elasticsearch = 34, i2_xlarge_elasticsearch = 35, i2_2xlarge_elasticsearch = 36, d2_xlarge_elasticsearch = 37, d2_2xlarge_elasticsearch = 38, d2_4xlarge_elasticsearch = 39, d2_8xlarge_elasticsearch = 40, c4_large_elasticsearch = 41, c4_xlarge_elasticsearch = 42, c4_2xlarge_elasticsearch = 43, c4_4xlarge_elasticsearch = 44, c4_8xlarge_elasticsearch = 45, r4_large_elasticsearch = 46, r4_xlarge_elasticsearch = 47, r4_2xlarge_elasticsearch = 48, r4_4xlarge_elasticsearch = 49, r4_8xlarge_elasticsearch = 50, r4_16xlarge_elasticsearch = 51, i3_large_elasticsearch = 52, i3_xlarge_elasticsearch = 53, i3_2xlarge_elasticsearch = 54, i3_4xlarge_elasticsearch = 55, i3_8xlarge_elasticsearch = 56, i3_16xlarge_elasticsearch = 57 }

	export enum UpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfigWarmType { ultrawarm1_medium_elasticsearch = 0, ultrawarm1_large_elasticsearch = 1 }

	export interface UpdateElasticsearchDomainConfigPostBodyEBSOptions {
		EBSEnabled?: boolean | null;

		/** The type of EBS volume, standard, gp2, or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information. */
		VolumeType?: EBSOptionsVolumeType | null;
		VolumeSize?: number | null;
		Iops?: number | null;
	}

	export interface UpdateElasticsearchDomainConfigPostBodySnapshotOptions {
		AutomatedSnapshotStartHour?: number | null;
	}

	export interface UpdateElasticsearchDomainConfigPostBodyVPCOptions {
		SubnetIds?: Array<string> | null;
		SecurityGroupIds?: Array<string> | null;
	}

	export interface UpdateElasticsearchDomainConfigPostBodyCognitoOptions {
		Enabled?: boolean | null;
		UserPoolId?: string | null;
		IdentityPoolId?: string | null;
		RoleArn?: string | null;
	}

	export interface UpdateElasticsearchDomainConfigPostBodyDomainEndpointOptions {
		EnforceHTTPS?: boolean | null;
		TLSSecurityPolicy?: UpdateElasticsearchDomainConfigPostBodyDomainEndpointOptionsTLSSecurityPolicy | null;
	}

	export enum UpdateElasticsearchDomainConfigPostBodyDomainEndpointOptionsTLSSecurityPolicy { Policy_Min_TLS_1_0_2019_07 = 0, Policy_Min_TLS_1_2_2019_07 = 1 }

	export interface UpdateElasticsearchDomainConfigPostBodyAdvancedSecurityOptions {
		Enabled?: boolean | null;
		InternalUserDatabaseEnabled?: boolean | null;

		/** Credentials for the master user: username and password, ARN, or both. */
		MasterUserOptions?: MasterUserOptions | null;
	}

	export interface DescribeElasticsearchDomainsPostBody {

		/**
		 * A list of Elasticsearch domain names.
		 * Required
		 */
		DomainNames: Array<string>;
	}

	export enum DescribeElasticsearchInstanceTypeLimitsInstanceType { m3_medium_elasticsearch = 0, m3_large_elasticsearch = 1, m3_xlarge_elasticsearch = 2, m3_2xlarge_elasticsearch = 3, m4_large_elasticsearch = 4, m4_xlarge_elasticsearch = 5, m4_2xlarge_elasticsearch = 6, m4_4xlarge_elasticsearch = 7, m4_10xlarge_elasticsearch = 8, m5_large_elasticsearch = 9, m5_xlarge_elasticsearch = 10, m5_2xlarge_elasticsearch = 11, m5_4xlarge_elasticsearch = 12, m5_12xlarge_elasticsearch = 13, r5_large_elasticsearch = 14, r5_xlarge_elasticsearch = 15, r5_2xlarge_elasticsearch = 16, r5_4xlarge_elasticsearch = 17, r5_12xlarge_elasticsearch = 18, c5_large_elasticsearch = 19, c5_xlarge_elasticsearch = 20, c5_2xlarge_elasticsearch = 21, c5_4xlarge_elasticsearch = 22, c5_9xlarge_elasticsearch = 23, c5_18xlarge_elasticsearch = 24, ultrawarm1_medium_elasticsearch = 25, ultrawarm1_large_elasticsearch = 26, t2_micro_elasticsearch = 27, t2_small_elasticsearch = 28, t2_medium_elasticsearch = 29, r3_large_elasticsearch = 30, r3_xlarge_elasticsearch = 31, r3_2xlarge_elasticsearch = 32, r3_4xlarge_elasticsearch = 33, r3_8xlarge_elasticsearch = 34, i2_xlarge_elasticsearch = 35, i2_2xlarge_elasticsearch = 36, d2_xlarge_elasticsearch = 37, d2_2xlarge_elasticsearch = 38, d2_4xlarge_elasticsearch = 39, d2_8xlarge_elasticsearch = 40, c4_large_elasticsearch = 41, c4_xlarge_elasticsearch = 42, c4_2xlarge_elasticsearch = 43, c4_4xlarge_elasticsearch = 44, c4_8xlarge_elasticsearch = 45, r4_large_elasticsearch = 46, r4_xlarge_elasticsearch = 47, r4_2xlarge_elasticsearch = 48, r4_4xlarge_elasticsearch = 49, r4_8xlarge_elasticsearch = 50, r4_16xlarge_elasticsearch = 51, i3_large_elasticsearch = 52, i3_xlarge_elasticsearch = 53, i3_2xlarge_elasticsearch = 54, i3_4xlarge_elasticsearch = 55, i3_8xlarge_elasticsearch = 56, i3_16xlarge_elasticsearch = 57 }

	export interface DescribeInboundCrossClusterSearchConnectionsPostBody {

		/** A list of filters used to match properties for inbound cross-cluster search connection. Available <code><a>Filter</a></code> names for this operation are: <ul> <li>cross-cluster-search-connection-id</li> <li>source-domain-info.domain-name</li> <li>source-domain-info.owner-id</li> <li>source-domain-info.region</li> <li>destination-domain-info.domain-name</li> </ul> */
		Filters?: Array<Filter> | null;

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}

	export interface DescribeOutboundCrossClusterSearchConnectionsPostBody {

		/** A list of filters used to match properties for outbound cross-cluster search connection. Available <code><a>Filter</a></code> names for this operation are: <ul> <li>cross-cluster-search-connection-id</li> <li>destination-domain-info.domain-name</li> <li>destination-domain-info.owner-id</li> <li>destination-domain-info.region</li> <li>source-domain-info.domain-name</li> </ul> */
		Filters?: Array<Filter> | null;

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}

	export interface DescribePackagesPostBody {

		/** A list of <code>DescribePackagesFilter</code> to filter the packages included in a <code>DescribePackages</code> response. */
		Filters?: Array<DescribePackagesFilter> | null;

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}

	export interface PurchaseReservedElasticsearchInstanceOfferingPostBody {

		/**
		 * The ID of the reserved Elasticsearch instance offering to purchase.
		 * Required
		 * Pattern: \p{XDigit}{8}-\p{XDigit}{4}-\p{XDigit}{4}-\p{XDigit}{4}-\p{XDigit}{12}
		 */
		ReservedElasticsearchInstanceOfferingId: string;

		/**
		 * A customer-specified identifier to track this reservation.
		 * Required
		 * Max length: 64
		 * Min length: 5
		 */
		ReservationName: string;

		/**
		 * Specifies the number of EC2 instances in the Elasticsearch domain.
		 * Minimum: 1
		 */
		InstanceCount?: number | null;
	}

	export interface RemoveTagsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
		 * Required
		 */
		ARN: string;

		/**
		 * Specifies the <code>TagKey</code> list which you want to remove from the Elasticsearch domain.
		 * Required
		 */
		TagKeys: Array<string>;
	}

	export interface StartElasticsearchServiceSoftwareUpdatePostBody {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;
	}

	export interface UpgradeElasticsearchDomainPostBody {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 * Pattern: [a-z][a-z0-9\-]+
		 */
		DomainName: string;

		/**
		 * The version of Elasticsearch that you intend to upgrade the domain to.
		 * Required
		 */
		TargetVersion: string;

		/** This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed. This will not actually perform the Upgrade. */
		PerformCheckOnly?: boolean | null;
	}

}

