import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The result of a <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation. Contains details of accepted inbound connection. */
	export interface AcceptInboundCrossClusterSearchConnectionResponse {
		CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
	}

	/** The result of a <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation. Contains details of accepted inbound connection. */
	export interface AcceptInboundCrossClusterSearchConnectionResponseFormProperties {
	}
	export function CreateAcceptInboundCrossClusterSearchConnectionResponseFormGroup() {
		return new FormGroup<AcceptInboundCrossClusterSearchConnectionResponseFormProperties>({
		});

	}


	/** Specifies details of an inbound connection. */
	export interface InboundCrossClusterSearchConnection {
		SourceDomainInfo?: DomainInformation;
		DestinationDomainInfo?: DomainInformation;
		CrossClusterSearchConnectionId?: string;
		ConnectionStatus?: InboundCrossClusterSearchConnectionStatus;
	}

	/** Specifies details of an inbound connection. */
	export interface InboundCrossClusterSearchConnectionFormProperties {
		CrossClusterSearchConnectionId: FormControl<string | null | undefined>,
	}
	export function CreateInboundCrossClusterSearchConnectionFormGroup() {
		return new FormGroup<InboundCrossClusterSearchConnectionFormProperties>({
			CrossClusterSearchConnectionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainInformation {

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		OwnerId?: string | null;

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: string;
		Region?: string | null;
	}
	export interface DomainInformationFormProperties {

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		OwnerId: FormControl<string | null | undefined>,

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
	}
	export function CreateDomainInformationFormGroup() {
		return new FormGroup<DomainInformationFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12)]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			Region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the coonection status of an inbound cross-cluster search connection. */
	export interface InboundCrossClusterSearchConnectionStatus {
		StatusCode?: InboundCrossClusterSearchConnectionStatusCode;
		Message?: string;
	}

	/** Specifies the coonection status of an inbound cross-cluster search connection. */
	export interface InboundCrossClusterSearchConnectionStatusFormProperties {
		StatusCode: FormControl<InboundCrossClusterSearchConnectionStatusCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInboundCrossClusterSearchConnectionStatusFormGroup() {
		return new FormGroup<InboundCrossClusterSearchConnectionStatusFormProperties>({
			StatusCode: new FormControl<InboundCrossClusterSearchConnectionStatusCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InboundCrossClusterSearchConnectionStatusCode { PENDING_ACCEPTANCE = 'PENDING_ACCEPTANCE', APPROVED = 'APPROVED', REJECTING = 'REJECTING', REJECTED = 'REJECTED', DELETING = 'DELETING', DELETED = 'DELETED' }

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface DisabledOperationException {
	}
	export interface DisabledOperationExceptionFormProperties {
	}
	export function CreateDisabledOperationExceptionFormGroup() {
		return new FormGroup<DisabledOperationExceptionFormProperties>({
		});

	}


	/** Specifies a key value pair for a resource tag. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Specifies a key value pair for a resource tag. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BaseException {
	}
	export interface BaseExceptionFormProperties {
	}
	export function CreateBaseExceptionFormGroup() {
		return new FormGroup<BaseExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface InternalException {
	}
	export interface InternalExceptionFormProperties {
	}
	export function CreateInternalExceptionFormGroup() {
		return new FormGroup<InternalExceptionFormProperties>({
		});

	}


	/**  Container for response returned by <code> <a>AssociatePackage</a> </code> operation.  */
	export interface AssociatePackageResponse {
		DomainPackageDetails?: DomainPackageDetails;
	}

	/**  Container for response returned by <code> <a>AssociatePackage</a> </code> operation.  */
	export interface AssociatePackageResponseFormProperties {
	}
	export function CreateAssociatePackageResponseFormGroup() {
		return new FormGroup<AssociatePackageResponseFormProperties>({
		});

	}


	/** Information on a package that is associated with a domain. */
	export interface DomainPackageDetails {
		PackageID?: string;
		PackageName?: string;
		PackageType?: PackageType;
		LastUpdated?: Date;
		DomainName?: string;
		DomainPackageStatus?: DomainPackageStatus;
		PackageVersion?: string | null;
		ReferencePath?: string;
		ErrorDetails?: ErrorDetails;
	}

	/** Information on a package that is associated with a domain. */
	export interface DomainPackageDetailsFormProperties {
		PackageID: FormControl<string | null | undefined>,
		PackageName: FormControl<string | null | undefined>,
		PackageType: FormControl<PackageType | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		DomainPackageStatus: FormControl<DomainPackageStatus | null | undefined>,
		PackageVersion: FormControl<string | null | undefined>,
		ReferencePath: FormControl<string | null | undefined>,
	}
	export function CreateDomainPackageDetailsFormGroup() {
		return new FormGroup<DomainPackageDetailsFormProperties>({
			PackageID: new FormControl<string | null | undefined>(undefined),
			PackageName: new FormControl<string | null | undefined>(undefined),
			PackageType: new FormControl<PackageType | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			DomainPackageStatus: new FormControl<DomainPackageStatus | null | undefined>(undefined),
			PackageVersion: new FormControl<string | null | undefined>(undefined),
			ReferencePath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PackageType { 'TXT-DICTIONARY' = 'TXT-DICTIONARY' }

	export enum DomainPackageStatus { ASSOCIATING = 'ASSOCIATING', ASSOCIATION_FAILED = 'ASSOCIATION_FAILED', ACTIVE = 'ACTIVE', DISSOCIATING = 'DISSOCIATING', DISSOCIATION_FAILED = 'DISSOCIATION_FAILED' }

	export interface ErrorDetails {
		ErrorType?: string | null;
		ErrorMessage?: string | null;
	}
	export interface ErrorDetailsFormProperties {
		ErrorType: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			ErrorType: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}


	/** Container for response parameters to the <code><a>AuthorizeVpcEndpointAccess</a></code> operation. Contains the account ID and the type of the account being authorized to access the VPC endpoint. */
	export interface AuthorizeVpcEndpointAccessResponse {

		/** Required */
		AuthorizedPrincipal: AuthorizedPrincipal;
	}

	/** Container for response parameters to the <code><a>AuthorizeVpcEndpointAccess</a></code> operation. Contains the account ID and the type of the account being authorized to access the VPC endpoint. */
	export interface AuthorizeVpcEndpointAccessResponseFormProperties {
	}
	export function CreateAuthorizeVpcEndpointAccessResponseFormGroup() {
		return new FormGroup<AuthorizeVpcEndpointAccessResponseFormProperties>({
		});

	}


	/** Information about an account or service that has access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint. */
	export interface AuthorizedPrincipal {
		PrincipalType?: PrincipalType;
		Principal?: string;
	}

	/** Information about an account or service that has access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint. */
	export interface AuthorizedPrincipalFormProperties {
		PrincipalType: FormControl<PrincipalType | null | undefined>,
		Principal: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizedPrincipalFormGroup() {
		return new FormGroup<AuthorizedPrincipalFormProperties>({
			PrincipalType: new FormControl<PrincipalType | null | undefined>(undefined),
			Principal: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the type of AWS account permitted to manage VPC endpoints.: <ul> <li>AWS_ACCOUNT: Indicates that the account is owned by an AWS user.</li> <li>AWS_SERVICE: Indicates the the account is owned by an AWS service.</li> </ul>  */
	export enum PrincipalType { AWS_ACCOUNT = 'AWS_ACCOUNT', AWS_SERVICE = 'AWS_SERVICE' }


	/** The result of a <code>CancelElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update. */
	export interface CancelElasticsearchServiceSoftwareUpdateResponse {
		ServiceSoftwareOptions?: ServiceSoftwareOptions;
	}

	/** The result of a <code>CancelElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update. */
	export interface CancelElasticsearchServiceSoftwareUpdateResponseFormProperties {
	}
	export function CreateCancelElasticsearchServiceSoftwareUpdateResponseFormGroup() {
		return new FormGroup<CancelElasticsearchServiceSoftwareUpdateResponseFormProperties>({
		});

	}


	/** The current options of an Elasticsearch domain service software options. */
	export interface ServiceSoftwareOptions {
		CurrentVersion?: string;
		NewVersion?: string;
		UpdateAvailable?: boolean | null;
		Cancellable?: boolean | null;
		UpdateStatus?: DeploymentStatus;
		Description?: string;
		AutomatedUpdateDate?: Date;
		OptionalDeployment?: boolean | null;
	}

	/** The current options of an Elasticsearch domain service software options. */
	export interface ServiceSoftwareOptionsFormProperties {
		CurrentVersion: FormControl<string | null | undefined>,
		NewVersion: FormControl<string | null | undefined>,
		UpdateAvailable: FormControl<boolean | null | undefined>,
		Cancellable: FormControl<boolean | null | undefined>,
		UpdateStatus: FormControl<DeploymentStatus | null | undefined>,
		Description: FormControl<string | null | undefined>,
		AutomatedUpdateDate: FormControl<Date | null | undefined>,
		OptionalDeployment: FormControl<boolean | null | undefined>,
	}
	export function CreateServiceSoftwareOptionsFormGroup() {
		return new FormGroup<ServiceSoftwareOptionsFormProperties>({
			CurrentVersion: new FormControl<string | null | undefined>(undefined),
			NewVersion: new FormControl<string | null | undefined>(undefined),
			UpdateAvailable: new FormControl<boolean | null | undefined>(undefined),
			Cancellable: new FormControl<boolean | null | undefined>(undefined),
			UpdateStatus: new FormControl<DeploymentStatus | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			AutomatedUpdateDate: new FormControl<Date | null | undefined>(undefined),
			OptionalDeployment: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DeploymentStatus { PENDING_UPDATE = 'PENDING_UPDATE', IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', NOT_ELIGIBLE = 'NOT_ELIGIBLE', ELIGIBLE = 'ELIGIBLE' }


	/** The result of a <code>CreateElasticsearchDomain</code> operation. Contains the status of the newly created Elasticsearch domain. */
	export interface CreateElasticsearchDomainResponse {
		DomainStatus?: ElasticsearchDomainStatus;
	}

	/** The result of a <code>CreateElasticsearchDomain</code> operation. Contains the status of the newly created Elasticsearch domain. */
	export interface CreateElasticsearchDomainResponseFormProperties {
	}
	export function CreateCreateElasticsearchDomainResponseFormGroup() {
		return new FormGroup<CreateElasticsearchDomainResponseFormProperties>({
		});

	}


	/** The current status of an Elasticsearch domain. */
	export interface ElasticsearchDomainStatus {

		/** Required */
		DomainId: string;

		/** Required */
		DomainName: string;

		/** Required */
		ARN: string;
		Created?: boolean | null;
		Deleted?: boolean | null;
		Endpoint?: string;
		Endpoints?: EndpointsMap;
		Processing?: boolean | null;
		UpgradeProcessing?: boolean | null;
		ElasticsearchVersion?: string | null;

		/** Required */
		ElasticsearchClusterConfig: ElasticsearchClusterConfig;
		EBSOptions?: EBSOptions;
		AccessPolicies?: string;
		SnapshotOptions?: SnapshotOptions;
		VPCOptions?: VPCDerivedInfo;
		CognitoOptions?: CognitoOptions;
		EncryptionAtRestOptions?: EncryptionAtRestOptions;
		NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
		AdvancedOptions?: AdvancedOptions;
		LogPublishingOptions?: LogPublishingOptions;
		ServiceSoftwareOptions?: ServiceSoftwareOptions;
		DomainEndpointOptions?: DomainEndpointOptions;
		AdvancedSecurityOptions?: AdvancedSecurityOptions;
		AutoTuneOptions?: AutoTuneOptionsOutput;
		ChangeProgressDetails?: ChangeProgressDetails;
	}

	/** The current status of an Elasticsearch domain. */
	export interface ElasticsearchDomainStatusFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		ARN: FormControl<string | null | undefined>,
		Created: FormControl<boolean | null | undefined>,
		Deleted: FormControl<boolean | null | undefined>,
		Endpoint: FormControl<string | null | undefined>,
		Processing: FormControl<boolean | null | undefined>,
		UpgradeProcessing: FormControl<boolean | null | undefined>,
		ElasticsearchVersion: FormControl<string | null | undefined>,
		AccessPolicies: FormControl<string | null | undefined>,
	}
	export function CreateElasticsearchDomainStatusFormGroup() {
		return new FormGroup<ElasticsearchDomainStatusFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Created: new FormControl<boolean | null | undefined>(undefined),
			Deleted: new FormControl<boolean | null | undefined>(undefined),
			Endpoint: new FormControl<string | null | undefined>(undefined),
			Processing: new FormControl<boolean | null | undefined>(undefined),
			UpgradeProcessing: new FormControl<boolean | null | undefined>(undefined),
			ElasticsearchVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{1}\.[0-9]{1,2}$|^OpenSearch_[0-9]{1,2}\.[0-9]{1,2}$|^OS_[0-9]{1,2}\.[0-9]{1,2}$')]),
			AccessPolicies: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EndpointsMap {
	}
	export interface EndpointsMapFormProperties {
	}
	export function CreateEndpointsMapFormGroup() {
		return new FormGroup<EndpointsMapFormProperties>({
		});

	}


	/** Specifies the configuration for the domain cluster, such as the type and number of instances. */
	export interface ElasticsearchClusterConfig {
		InstanceType?: ESPartitionInstanceType;
		InstanceCount?: number | null;
		DedicatedMasterEnabled?: boolean | null;
		ZoneAwarenessEnabled?: boolean | null;
		ZoneAwarenessConfig?: ZoneAwarenessConfig;
		DedicatedMasterType?: ESPartitionInstanceType;
		DedicatedMasterCount?: number | null;
		WarmEnabled?: boolean | null;
		WarmType?: ESWarmPartitionInstanceType;
		WarmCount?: number | null;
		ColdStorageOptions?: ColdStorageOptions;
	}

	/** Specifies the configuration for the domain cluster, such as the type and number of instances. */
	export interface ElasticsearchClusterConfigFormProperties {
		InstanceType: FormControl<ESPartitionInstanceType | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		DedicatedMasterEnabled: FormControl<boolean | null | undefined>,
		ZoneAwarenessEnabled: FormControl<boolean | null | undefined>,
		DedicatedMasterType: FormControl<ESPartitionInstanceType | null | undefined>,
		DedicatedMasterCount: FormControl<number | null | undefined>,
		WarmEnabled: FormControl<boolean | null | undefined>,
		WarmType: FormControl<ESWarmPartitionInstanceType | null | undefined>,
		WarmCount: FormControl<number | null | undefined>,
	}
	export function CreateElasticsearchClusterConfigFormGroup() {
		return new FormGroup<ElasticsearchClusterConfigFormProperties>({
			InstanceType: new FormControl<ESPartitionInstanceType | null | undefined>(undefined),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			DedicatedMasterEnabled: new FormControl<boolean | null | undefined>(undefined),
			ZoneAwarenessEnabled: new FormControl<boolean | null | undefined>(undefined),
			DedicatedMasterType: new FormControl<ESPartitionInstanceType | null | undefined>(undefined),
			DedicatedMasterCount: new FormControl<number | null | undefined>(undefined),
			WarmEnabled: new FormControl<boolean | null | undefined>(undefined),
			WarmType: new FormControl<ESWarmPartitionInstanceType | null | undefined>(undefined),
			WarmCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ESPartitionInstanceType { 'm3.medium.elasticsearch' = 'm3.medium.elasticsearch', 'm3.large.elasticsearch' = 'm3.large.elasticsearch', 'm3.xlarge.elasticsearch' = 'm3.xlarge.elasticsearch', 'm3.2xlarge.elasticsearch' = 'm3.2xlarge.elasticsearch', 'm4.large.elasticsearch' = 'm4.large.elasticsearch', 'm4.xlarge.elasticsearch' = 'm4.xlarge.elasticsearch', 'm4.2xlarge.elasticsearch' = 'm4.2xlarge.elasticsearch', 'm4.4xlarge.elasticsearch' = 'm4.4xlarge.elasticsearch', 'm4.10xlarge.elasticsearch' = 'm4.10xlarge.elasticsearch', 'm5.large.elasticsearch' = 'm5.large.elasticsearch', 'm5.xlarge.elasticsearch' = 'm5.xlarge.elasticsearch', 'm5.2xlarge.elasticsearch' = 'm5.2xlarge.elasticsearch', 'm5.4xlarge.elasticsearch' = 'm5.4xlarge.elasticsearch', 'm5.12xlarge.elasticsearch' = 'm5.12xlarge.elasticsearch', 'r5.large.elasticsearch' = 'r5.large.elasticsearch', 'r5.xlarge.elasticsearch' = 'r5.xlarge.elasticsearch', 'r5.2xlarge.elasticsearch' = 'r5.2xlarge.elasticsearch', 'r5.4xlarge.elasticsearch' = 'r5.4xlarge.elasticsearch', 'r5.12xlarge.elasticsearch' = 'r5.12xlarge.elasticsearch', 'c5.large.elasticsearch' = 'c5.large.elasticsearch', 'c5.xlarge.elasticsearch' = 'c5.xlarge.elasticsearch', 'c5.2xlarge.elasticsearch' = 'c5.2xlarge.elasticsearch', 'c5.4xlarge.elasticsearch' = 'c5.4xlarge.elasticsearch', 'c5.9xlarge.elasticsearch' = 'c5.9xlarge.elasticsearch', 'c5.18xlarge.elasticsearch' = 'c5.18xlarge.elasticsearch', 'ultrawarm1.medium.elasticsearch' = 'ultrawarm1.medium.elasticsearch', 'ultrawarm1.large.elasticsearch' = 'ultrawarm1.large.elasticsearch', 't2.micro.elasticsearch' = 't2.micro.elasticsearch', 't2.small.elasticsearch' = 't2.small.elasticsearch', 't2.medium.elasticsearch' = 't2.medium.elasticsearch', 'r3.large.elasticsearch' = 'r3.large.elasticsearch', 'r3.xlarge.elasticsearch' = 'r3.xlarge.elasticsearch', 'r3.2xlarge.elasticsearch' = 'r3.2xlarge.elasticsearch', 'r3.4xlarge.elasticsearch' = 'r3.4xlarge.elasticsearch', 'r3.8xlarge.elasticsearch' = 'r3.8xlarge.elasticsearch', 'i2.xlarge.elasticsearch' = 'i2.xlarge.elasticsearch', 'i2.2xlarge.elasticsearch' = 'i2.2xlarge.elasticsearch', 'd2.xlarge.elasticsearch' = 'd2.xlarge.elasticsearch', 'd2.2xlarge.elasticsearch' = 'd2.2xlarge.elasticsearch', 'd2.4xlarge.elasticsearch' = 'd2.4xlarge.elasticsearch', 'd2.8xlarge.elasticsearch' = 'd2.8xlarge.elasticsearch', 'c4.large.elasticsearch' = 'c4.large.elasticsearch', 'c4.xlarge.elasticsearch' = 'c4.xlarge.elasticsearch', 'c4.2xlarge.elasticsearch' = 'c4.2xlarge.elasticsearch', 'c4.4xlarge.elasticsearch' = 'c4.4xlarge.elasticsearch', 'c4.8xlarge.elasticsearch' = 'c4.8xlarge.elasticsearch', 'r4.large.elasticsearch' = 'r4.large.elasticsearch', 'r4.xlarge.elasticsearch' = 'r4.xlarge.elasticsearch', 'r4.2xlarge.elasticsearch' = 'r4.2xlarge.elasticsearch', 'r4.4xlarge.elasticsearch' = 'r4.4xlarge.elasticsearch', 'r4.8xlarge.elasticsearch' = 'r4.8xlarge.elasticsearch', 'r4.16xlarge.elasticsearch' = 'r4.16xlarge.elasticsearch', 'i3.large.elasticsearch' = 'i3.large.elasticsearch', 'i3.xlarge.elasticsearch' = 'i3.xlarge.elasticsearch', 'i3.2xlarge.elasticsearch' = 'i3.2xlarge.elasticsearch', 'i3.4xlarge.elasticsearch' = 'i3.4xlarge.elasticsearch', 'i3.8xlarge.elasticsearch' = 'i3.8xlarge.elasticsearch', 'i3.16xlarge.elasticsearch' = 'i3.16xlarge.elasticsearch' }


	/** Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones. */
	export interface ZoneAwarenessConfig {
		AvailabilityZoneCount?: number | null;
	}

	/** Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones. */
	export interface ZoneAwarenessConfigFormProperties {
		AvailabilityZoneCount: FormControl<number | null | undefined>,
	}
	export function CreateZoneAwarenessConfigFormGroup() {
		return new FormGroup<ZoneAwarenessConfigFormProperties>({
			AvailabilityZoneCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ESWarmPartitionInstanceType { 'ultrawarm1.medium.elasticsearch' = 'ultrawarm1.medium.elasticsearch', 'ultrawarm1.large.elasticsearch' = 'ultrawarm1.large.elasticsearch' }


	/** Specifies the configuration for cold storage options such as enabled */
	export interface ColdStorageOptions {

		/** Required */
		Enabled: boolean;
	}

	/** Specifies the configuration for cold storage options such as enabled */
	export interface ColdStorageOptionsFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateColdStorageOptionsFormGroup() {
		return new FormGroup<ColdStorageOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
	export interface EBSOptions {
		EBSEnabled?: boolean | null;
		VolumeType?: VolumeType;
		VolumeSize?: number | null;
		Iops?: number | null;
		Throughput?: number | null;
	}

	/** Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
	export interface EBSOptionsFormProperties {
		EBSEnabled: FormControl<boolean | null | undefined>,
		VolumeType: FormControl<VolumeType | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		Throughput: FormControl<number | null | undefined>,
	}
	export function CreateEBSOptionsFormGroup() {
		return new FormGroup<EBSOptionsFormProperties>({
			EBSEnabled: new FormControl<boolean | null | undefined>(undefined),
			VolumeType: new FormControl<VolumeType | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			Throughput: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The type of EBS volume, standard, gp2, gp3 or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information. */
	export enum VolumeType { standard = 'standard', gp2 = 'gp2', io1 = 'io1', gp3 = 'gp3' }


	/** Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
	export interface SnapshotOptions {
		AutomatedSnapshotStartHour?: number | null;
	}

	/** Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
	export interface SnapshotOptionsFormProperties {
		AutomatedSnapshotStartHour: FormControl<number | null | undefined>,
	}
	export function CreateSnapshotOptionsFormGroup() {
		return new FormGroup<SnapshotOptionsFormProperties>({
			AutomatedSnapshotStartHour: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
	export interface VPCDerivedInfo {
		VPCId?: string;
		SubnetIds?: Array<string>;
		AvailabilityZones?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}

	/** Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
	export interface VPCDerivedInfoFormProperties {
		VPCId: FormControl<string | null | undefined>,
	}
	export function CreateVPCDerivedInfoFormGroup() {
		return new FormGroup<VPCDerivedInfoFormProperties>({
			VPCId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
	export interface CognitoOptions {
		Enabled?: boolean | null;
		UserPoolId?: string;
		IdentityPoolId?: string;
		RoleArn?: string;
	}

	/** Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
	export interface CognitoOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
		IdentityPoolId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCognitoOptionsFormGroup() {
		return new FormGroup<CognitoOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the Encryption At Rest Options. */
	export interface EncryptionAtRestOptions {
		Enabled?: boolean | null;
		KmsKeyId?: string;
	}

	/** Specifies the Encryption At Rest Options. */
	export interface EncryptionAtRestOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionAtRestOptionsFormGroup() {
		return new FormGroup<EncryptionAtRestOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the node-to-node encryption options. */
	export interface NodeToNodeEncryptionOptions {
		Enabled?: boolean | null;
	}

	/** Specifies the node-to-node encryption options. */
	export interface NodeToNodeEncryptionOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateNodeToNodeEncryptionOptionsFormGroup() {
		return new FormGroup<NodeToNodeEncryptionOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
	export interface AdvancedOptions {
	}

	/** <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
	export interface AdvancedOptionsFormProperties {
	}
	export function CreateAdvancedOptionsFormGroup() {
		return new FormGroup<AdvancedOptionsFormProperties>({
		});

	}

	export interface LogPublishingOptions {
	}
	export interface LogPublishingOptionsFormProperties {
	}
	export function CreateLogPublishingOptionsFormGroup() {
		return new FormGroup<LogPublishingOptionsFormProperties>({
		});

	}


	/** Options to configure endpoint for the Elasticsearch domain. */
	export interface DomainEndpointOptions {
		EnforceHTTPS?: boolean | null;
		TLSSecurityPolicy?: TLSSecurityPolicy;
		CustomEndpointEnabled?: boolean | null;
		CustomEndpoint?: string;
		CustomEndpointCertificateArn?: string;
	}

	/** Options to configure endpoint for the Elasticsearch domain. */
	export interface DomainEndpointOptionsFormProperties {
		EnforceHTTPS: FormControl<boolean | null | undefined>,
		TLSSecurityPolicy: FormControl<TLSSecurityPolicy | null | undefined>,
		CustomEndpointEnabled: FormControl<boolean | null | undefined>,
		CustomEndpoint: FormControl<string | null | undefined>,
		CustomEndpointCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateDomainEndpointOptionsFormGroup() {
		return new FormGroup<DomainEndpointOptionsFormProperties>({
			EnforceHTTPS: new FormControl<boolean | null | undefined>(undefined),
			TLSSecurityPolicy: new FormControl<TLSSecurityPolicy | null | undefined>(undefined),
			CustomEndpointEnabled: new FormControl<boolean | null | undefined>(undefined),
			CustomEndpoint: new FormControl<string | null | undefined>(undefined),
			CustomEndpointCertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TLSSecurityPolicy { 'Policy-Min-TLS-1-0-2019-07' = 'Policy-Min-TLS-1-0-2019-07', 'Policy-Min-TLS-1-2-2019-07' = 'Policy-Min-TLS-1-2-2019-07' }


	/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled. */
	export interface AdvancedSecurityOptions {
		Enabled?: boolean | null;
		InternalUserDatabaseEnabled?: boolean | null;
		SAMLOptions?: SAMLOptionsOutput;
		AnonymousAuthDisableDate?: Date;
		AnonymousAuthEnabled?: boolean | null;
	}

	/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled. */
	export interface AdvancedSecurityOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		InternalUserDatabaseEnabled: FormControl<boolean | null | undefined>,
		AnonymousAuthDisableDate: FormControl<Date | null | undefined>,
		AnonymousAuthEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdvancedSecurityOptionsFormGroup() {
		return new FormGroup<AdvancedSecurityOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			InternalUserDatabaseEnabled: new FormControl<boolean | null | undefined>(undefined),
			AnonymousAuthDisableDate: new FormControl<Date | null | undefined>(undefined),
			AnonymousAuthEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes the SAML application configured for the domain. */
	export interface SAMLOptionsOutput {
		Enabled?: boolean | null;
		Idp?: SAMLIdp;
		SubjectKey?: string;
		RolesKey?: string;
		SessionTimeoutMinutes?: number | null;
	}

	/** Describes the SAML application configured for the domain. */
	export interface SAMLOptionsOutputFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		SubjectKey: FormControl<string | null | undefined>,
		RolesKey: FormControl<string | null | undefined>,
		SessionTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateSAMLOptionsOutputFormGroup() {
		return new FormGroup<SAMLOptionsOutputFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			SubjectKey: new FormControl<string | null | undefined>(undefined),
			RolesKey: new FormControl<string | null | undefined>(undefined),
			SessionTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the SAML Identity Provider's information. */
	export interface SAMLIdp {

		/** Required */
		MetadataContent: string;

		/** Required */
		EntityId: string;
	}

	/** Specifies the SAML Identity Provider's information. */
	export interface SAMLIdpFormProperties {

		/** Required */
		MetadataContent: FormControl<string | null | undefined>,

		/** Required */
		EntityId: FormControl<string | null | undefined>,
	}
	export function CreateSAMLIdpFormGroup() {
		return new FormGroup<SAMLIdpFormProperties>({
			MetadataContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules. */
	export interface AutoTuneOptionsOutput {
		State?: AutoTuneState;
		ErrorMessage?: string;
	}

	/** Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules. */
	export interface AutoTuneOptionsOutputFormProperties {
		State: FormControl<AutoTuneState | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateAutoTuneOptionsOutputFormGroup() {
		return new FormGroup<AutoTuneOptionsOutputFormProperties>({
			State: new FormControl<AutoTuneState | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the Auto-Tune state for the Elasticsearch domain. For valid states see the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a>. */
	export enum AutoTuneState { ENABLED = 'ENABLED', DISABLED = 'DISABLED', ENABLE_IN_PROGRESS = 'ENABLE_IN_PROGRESS', DISABLE_IN_PROGRESS = 'DISABLE_IN_PROGRESS', DISABLED_AND_ROLLBACK_SCHEDULED = 'DISABLED_AND_ROLLBACK_SCHEDULED', DISABLED_AND_ROLLBACK_IN_PROGRESS = 'DISABLED_AND_ROLLBACK_IN_PROGRESS', DISABLED_AND_ROLLBACK_COMPLETE = 'DISABLED_AND_ROLLBACK_COMPLETE', DISABLED_AND_ROLLBACK_ERROR = 'DISABLED_AND_ROLLBACK_ERROR', ERROR = 'ERROR' }


	/** Specifies change details of the domain configuration change. */
	export interface ChangeProgressDetails {
		ChangeId?: string;
		Message?: string;
	}

	/** Specifies change details of the domain configuration change. */
	export interface ChangeProgressDetailsFormProperties {
		ChangeId: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateChangeProgressDetailsFormGroup() {
		return new FormGroup<ChangeProgressDetailsFormProperties>({
			ChangeId: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Log Publishing option that is set for given domain. <br/>Attributes and their details: <ul> <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li> <li>Enabled: Whether the log publishing for given log type is enabled or not</li> </ul>  */
	export interface LogPublishingOption {

		/** ARN of the Cloudwatch log group to which log needs to be published. */
		CloudWatchLogsLogGroupArn?: string | null;
		Enabled?: boolean | null;
	}

	/** Log Publishing option that is set for given domain. <br/>Attributes and their details: <ul> <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li> <li>Enabled: Whether the log publishing for given log type is enabled or not</li> </ul>  */
	export interface LogPublishingOptionFormProperties {

		/** ARN of the Cloudwatch log group to which log needs to be published. */
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLogPublishingOptionFormGroup() {
		return new FormGroup<LogPublishingOptionFormProperties>({
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Credentials for the master user: username and password, ARN, or both. */
	export interface MasterUserOptions {
		MasterUserARN?: string;
		MasterUserName?: string;
		MasterUserPassword?: string;
	}

	/** Credentials for the master user: username and password, ARN, or both. */
	export interface MasterUserOptionsFormProperties {
		MasterUserARN: FormControl<string | null | undefined>,
		MasterUserName: FormControl<string | null | undefined>,
		MasterUserPassword: FormControl<string | null | undefined>,
	}
	export function CreateMasterUserOptionsFormGroup() {
		return new FormGroup<MasterUserOptionsFormProperties>({
			MasterUserARN: new FormControl<string | null | undefined>(undefined),
			MasterUserName: new FormControl<string | null | undefined>(undefined),
			MasterUserPassword: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the SAML application configuration for the domain. */
	export interface SAMLOptionsInput {
		Enabled?: boolean | null;
		Idp?: SAMLIdp;
		MasterUserName?: string;
		MasterBackendRole?: string;
		SubjectKey?: string;
		RolesKey?: string;
		SessionTimeoutMinutes?: number | null;
	}

	/** Specifies the SAML application configuration for the domain. */
	export interface SAMLOptionsInputFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		MasterUserName: FormControl<string | null | undefined>,
		MasterBackendRole: FormControl<string | null | undefined>,
		SubjectKey: FormControl<string | null | undefined>,
		RolesKey: FormControl<string | null | undefined>,
		SessionTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateSAMLOptionsInputFormGroup() {
		return new FormGroup<SAMLOptionsInputFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			MasterUserName: new FormControl<string | null | undefined>(undefined),
			MasterBackendRole: new FormControl<string | null | undefined>(undefined),
			SubjectKey: new FormControl<string | null | undefined>(undefined),
			RolesKey: new FormControl<string | null | undefined>(undefined),
			SessionTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED. */
	export enum AutoTuneDesiredState { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** Specifies Auto-Tune maitenance schedule. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. */
	export interface AutoTuneMaintenanceSchedule {
		StartAt?: Date;
		Duration?: Duration;
		CronExpressionForRecurrence?: string;
	}

	/** Specifies Auto-Tune maitenance schedule. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. */
	export interface AutoTuneMaintenanceScheduleFormProperties {
		StartAt: FormControl<Date | null | undefined>,
		CronExpressionForRecurrence: FormControl<string | null | undefined>,
	}
	export function CreateAutoTuneMaintenanceScheduleFormGroup() {
		return new FormGroup<AutoTuneMaintenanceScheduleFormProperties>({
			StartAt: new FormControl<Date | null | undefined>(undefined),
			CronExpressionForRecurrence: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies maintenance schedule duration: duration value and duration unit. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. */
	export interface Duration {
		Value?: number | null;
		Unit?: TimeUnit;
	}

	/** Specifies maintenance schedule duration: duration value and duration unit. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. */
	export interface DurationFormProperties {
		Value: FormControl<number | null | undefined>,
		Unit: FormControl<TimeUnit | null | undefined>,
	}
	export function CreateDurationFormGroup() {
		return new FormGroup<DurationFormProperties>({
			Value: new FormControl<number | null | undefined>(undefined),
			Unit: new FormControl<TimeUnit | null | undefined>(undefined),
		});

	}


	/** Specifies the unit of a maintenance schedule duration. Valid value is HOUR. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. */
	export enum TimeUnit { HOURS = 'HOURS' }

	export interface InvalidTypeException {
	}
	export interface InvalidTypeExceptionFormProperties {
	}
	export function CreateInvalidTypeExceptionFormGroup() {
		return new FormGroup<InvalidTypeExceptionFormProperties>({
		});

	}

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}


	/** The result of a <code><a>CreateOutboundCrossClusterSearchConnection</a></code> request. Contains the details of the newly created cross-cluster search connection. */
	export interface CreateOutboundCrossClusterSearchConnectionResponse {
		SourceDomainInfo?: DomainInformation;
		DestinationDomainInfo?: DomainInformation;
		ConnectionAlias?: string;
		ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus;
		CrossClusterSearchConnectionId?: string;
	}

	/** The result of a <code><a>CreateOutboundCrossClusterSearchConnection</a></code> request. Contains the details of the newly created cross-cluster search connection. */
	export interface CreateOutboundCrossClusterSearchConnectionResponseFormProperties {
		ConnectionAlias: FormControl<string | null | undefined>,
		CrossClusterSearchConnectionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateOutboundCrossClusterSearchConnectionResponseFormGroup() {
		return new FormGroup<CreateOutboundCrossClusterSearchConnectionResponseFormProperties>({
			ConnectionAlias: new FormControl<string | null | undefined>(undefined),
			CrossClusterSearchConnectionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the connection status of an outbound cross-cluster search connection. */
	export interface OutboundCrossClusterSearchConnectionStatus {
		StatusCode?: OutboundCrossClusterSearchConnectionStatusCode;
		Message?: string;
	}

	/** Specifies the connection status of an outbound cross-cluster search connection. */
	export interface OutboundCrossClusterSearchConnectionStatusFormProperties {
		StatusCode: FormControl<OutboundCrossClusterSearchConnectionStatusCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateOutboundCrossClusterSearchConnectionStatusFormGroup() {
		return new FormGroup<OutboundCrossClusterSearchConnectionStatusFormProperties>({
			StatusCode: new FormControl<OutboundCrossClusterSearchConnectionStatusCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OutboundCrossClusterSearchConnectionStatusCode { PENDING_ACCEPTANCE = 'PENDING_ACCEPTANCE', VALIDATING = 'VALIDATING', VALIDATION_FAILED = 'VALIDATION_FAILED', PROVISIONING = 'PROVISIONING', ACTIVE = 'ACTIVE', REJECTED = 'REJECTED', DELETING = 'DELETING', DELETED = 'DELETED' }


	/**  Container for response returned by <code> <a>CreatePackage</a> </code> operation.  */
	export interface CreatePackageResponse {
		PackageDetails?: PackageDetails;
	}

	/**  Container for response returned by <code> <a>CreatePackage</a> </code> operation.  */
	export interface CreatePackageResponseFormProperties {
	}
	export function CreateCreatePackageResponseFormGroup() {
		return new FormGroup<CreatePackageResponseFormProperties>({
		});

	}


	/** Basic information about a package. */
	export interface PackageDetails {
		PackageID?: string;
		PackageName?: string;
		PackageType?: PackageType;
		PackageDescription?: string;
		PackageStatus?: PackageStatus;
		CreatedAt?: Date;
		LastUpdatedAt?: Date | null;
		AvailablePackageVersion?: string | null;
		ErrorDetails?: ErrorDetails;
	}

	/** Basic information about a package. */
	export interface PackageDetailsFormProperties {
		PackageID: FormControl<string | null | undefined>,
		PackageName: FormControl<string | null | undefined>,
		PackageType: FormControl<PackageType | null | undefined>,
		PackageDescription: FormControl<string | null | undefined>,
		PackageStatus: FormControl<PackageStatus | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		AvailablePackageVersion: FormControl<string | null | undefined>,
	}
	export function CreatePackageDetailsFormGroup() {
		return new FormGroup<PackageDetailsFormProperties>({
			PackageID: new FormControl<string | null | undefined>(undefined),
			PackageName: new FormControl<string | null | undefined>(undefined),
			PackageType: new FormControl<PackageType | null | undefined>(undefined),
			PackageDescription: new FormControl<string | null | undefined>(undefined),
			PackageStatus: new FormControl<PackageStatus | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			AvailablePackageVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PackageStatus { COPYING = 'COPYING', COPY_FAILED = 'COPY_FAILED', VALIDATING = 'VALIDATING', VALIDATION_FAILED = 'VALIDATION_FAILED', AVAILABLE = 'AVAILABLE', DELETING = 'DELETING', DELETED = 'DELETED', DELETE_FAILED = 'DELETE_FAILED' }


	/** Container for response parameters to the <code><a>CreateVpcEndpoint</a></code> operation. Contains the configuration and status of the VPC Endpoint being created. */
	export interface CreateVpcEndpointResponse {

		/** Required */
		VpcEndpoint: VpcEndpoint;
	}

	/** Container for response parameters to the <code><a>CreateVpcEndpoint</a></code> operation. Contains the configuration and status of the VPC Endpoint being created. */
	export interface CreateVpcEndpointResponseFormProperties {
	}
	export function CreateCreateVpcEndpointResponseFormGroup() {
		return new FormGroup<CreateVpcEndpointResponseFormProperties>({
		});

	}


	/** The connection endpoint for connecting to an Amazon OpenSearch Service domain through a proxy. */
	export interface VpcEndpoint {
		VpcEndpointId?: string;
		VpcEndpointOwner?: string;
		DomainArn?: string;
		VpcOptions?: VPCDerivedInfo;
		Status?: VpcEndpointStatus;
		Endpoint?: string;
	}

	/** The connection endpoint for connecting to an Amazon OpenSearch Service domain through a proxy. */
	export interface VpcEndpointFormProperties {
		VpcEndpointId: FormControl<string | null | undefined>,
		VpcEndpointOwner: FormControl<string | null | undefined>,
		DomainArn: FormControl<string | null | undefined>,
		Status: FormControl<VpcEndpointStatus | null | undefined>,
		Endpoint: FormControl<string | null | undefined>,
	}
	export function CreateVpcEndpointFormGroup() {
		return new FormGroup<VpcEndpointFormProperties>({
			VpcEndpointId: new FormControl<string | null | undefined>(undefined),
			VpcEndpointOwner: new FormControl<string | null | undefined>(undefined),
			DomainArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<VpcEndpointStatus | null | undefined>(undefined),
			Endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the current status of the VPC endpoint: <ul> <li>CREATING: Indicates that the VPC endpoint is currently being created.</li> <li>CREATE_FAILED: Indicates that the VPC endpoint creation failed.</li> <li>ACTIVE: Indicates that the VPC endpoint is currently active.</li> <li>UPDATING: Indicates that the VPC endpoint is currently being updated.</li> <li>UPDATE_FAILED: Indicates that the VPC endpoint update failed.</li> <li>DELETING: Indicates that the VPC endpoint is currently being deleted.</li> <li>DELETE_FAILED: Indicates that the VPC endpoint deletion failed.</li> </ul>  */
	export enum VpcEndpointStatus { CREATING = 'CREATING', CREATE_FAILED = 'CREATE_FAILED', ACTIVE = 'ACTIVE', UPDATING = 'UPDATING', UPDATE_FAILED = 'UPDATE_FAILED', DELETING = 'DELETING', DELETE_FAILED = 'DELETE_FAILED' }


	/** The result of a <code>DeleteElasticsearchDomain</code> request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted. */
	export interface DeleteElasticsearchDomainResponse {
		DomainStatus?: ElasticsearchDomainStatus;
	}

	/** The result of a <code>DeleteElasticsearchDomain</code> request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted. */
	export interface DeleteElasticsearchDomainResponseFormProperties {
	}
	export function CreateDeleteElasticsearchDomainResponseFormGroup() {
		return new FormGroup<DeleteElasticsearchDomainResponseFormProperties>({
		});

	}


	/** The result of a <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted inbound connection. */
	export interface DeleteInboundCrossClusterSearchConnectionResponse {
		CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
	}

	/** The result of a <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted inbound connection. */
	export interface DeleteInboundCrossClusterSearchConnectionResponseFormProperties {
	}
	export function CreateDeleteInboundCrossClusterSearchConnectionResponseFormGroup() {
		return new FormGroup<DeleteInboundCrossClusterSearchConnectionResponseFormProperties>({
		});

	}


	/** The result of a <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted outbound connection. */
	export interface DeleteOutboundCrossClusterSearchConnectionResponse {
		CrossClusterSearchConnection?: OutboundCrossClusterSearchConnection;
	}

	/** The result of a <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted outbound connection. */
	export interface DeleteOutboundCrossClusterSearchConnectionResponseFormProperties {
	}
	export function CreateDeleteOutboundCrossClusterSearchConnectionResponseFormGroup() {
		return new FormGroup<DeleteOutboundCrossClusterSearchConnectionResponseFormProperties>({
		});

	}


	/** Specifies details of an outbound connection. */
	export interface OutboundCrossClusterSearchConnection {
		SourceDomainInfo?: DomainInformation;
		DestinationDomainInfo?: DomainInformation;
		CrossClusterSearchConnectionId?: string;
		ConnectionAlias?: string;
		ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus;
	}

	/** Specifies details of an outbound connection. */
	export interface OutboundCrossClusterSearchConnectionFormProperties {
		CrossClusterSearchConnectionId: FormControl<string | null | undefined>,
		ConnectionAlias: FormControl<string | null | undefined>,
	}
	export function CreateOutboundCrossClusterSearchConnectionFormGroup() {
		return new FormGroup<OutboundCrossClusterSearchConnectionFormProperties>({
			CrossClusterSearchConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionAlias: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Container for response parameters to <code> <a>DeletePackage</a> </code> operation.  */
	export interface DeletePackageResponse {
		PackageDetails?: PackageDetails;
	}

	/**  Container for response parameters to <code> <a>DeletePackage</a> </code> operation.  */
	export interface DeletePackageResponseFormProperties {
	}
	export function CreateDeletePackageResponseFormGroup() {
		return new FormGroup<DeletePackageResponseFormProperties>({
		});

	}


	/** Container for response parameters to the <code><a>DeleteVpcEndpoint</a></code> operation. Contains the summarized detail of the VPC Endpoint being deleted. */
	export interface DeleteVpcEndpointResponse {

		/** Required */
		VpcEndpointSummary: VpcEndpointSummary;
	}

	/** Container for response parameters to the <code><a>DeleteVpcEndpoint</a></code> operation. Contains the summarized detail of the VPC Endpoint being deleted. */
	export interface DeleteVpcEndpointResponseFormProperties {
	}
	export function CreateDeleteVpcEndpointResponseFormGroup() {
		return new FormGroup<DeleteVpcEndpointResponseFormProperties>({
		});

	}


	/** Summary information for an Amazon OpenSearch Service-managed VPC endpoint. */
	export interface VpcEndpointSummary {
		VpcEndpointId?: string;
		VpcEndpointOwner?: string;
		DomainArn?: string;
		Status?: VpcEndpointStatus;
	}

	/** Summary information for an Amazon OpenSearch Service-managed VPC endpoint. */
	export interface VpcEndpointSummaryFormProperties {
		VpcEndpointId: FormControl<string | null | undefined>,
		VpcEndpointOwner: FormControl<string | null | undefined>,
		DomainArn: FormControl<string | null | undefined>,
		Status: FormControl<VpcEndpointStatus | null | undefined>,
	}
	export function CreateVpcEndpointSummaryFormGroup() {
		return new FormGroup<VpcEndpointSummaryFormProperties>({
			VpcEndpointId: new FormControl<string | null | undefined>(undefined),
			VpcEndpointOwner: new FormControl<string | null | undefined>(undefined),
			DomainArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<VpcEndpointStatus | null | undefined>(undefined),
		});

	}


	/** The result of <code>DescribeDomainAutoTunes</code> request. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.  */
	export interface DescribeDomainAutoTunesResponse {
		AutoTunes?: Array<AutoTune>;
		NextToken?: string;
	}

	/** The result of <code>DescribeDomainAutoTunes</code> request. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.  */
	export interface DescribeDomainAutoTunesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDomainAutoTunesResponseFormGroup() {
		return new FormGroup<DescribeDomainAutoTunesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies Auto-Tune type and Auto-Tune action details.  */
	export interface AutoTune {
		AutoTuneType?: AutoTuneType;
		AutoTuneDetails?: AutoTuneDetails;
	}

	/** Specifies Auto-Tune type and Auto-Tune action details.  */
	export interface AutoTuneFormProperties {
		AutoTuneType: FormControl<AutoTuneType | null | undefined>,
	}
	export function CreateAutoTuneFormGroup() {
		return new FormGroup<AutoTuneFormProperties>({
			AutoTuneType: new FormControl<AutoTuneType | null | undefined>(undefined),
		});

	}


	/** Specifies Auto-Tune type. Valid value is SCHEDULED_ACTION.  */
	export enum AutoTuneType { SCHEDULED_ACTION = 'SCHEDULED_ACTION' }


	/** Specifies details of the Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.  */
	export interface AutoTuneDetails {

		/** Specifies details of the scheduled Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. */
		ScheduledAutoTuneDetails?: ScheduledAutoTuneDetails;
	}

	/** Specifies details of the Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.  */
	export interface AutoTuneDetailsFormProperties {
	}
	export function CreateAutoTuneDetailsFormGroup() {
		return new FormGroup<AutoTuneDetailsFormProperties>({
		});

	}


	/** Specifies details of the scheduled Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.  */
	export interface ScheduledAutoTuneDetails {
		Date?: Date;
		ActionType?: ScheduledAutoTuneActionType;
		Action?: string;
		Severity?: ScheduledAutoTuneSeverityType;
	}

	/** Specifies details of the scheduled Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.  */
	export interface ScheduledAutoTuneDetailsFormProperties {
		Date: FormControl<Date | null | undefined>,
		ActionType: FormControl<ScheduledAutoTuneActionType | null | undefined>,
		Action: FormControl<string | null | undefined>,
		Severity: FormControl<ScheduledAutoTuneSeverityType | null | undefined>,
	}
	export function CreateScheduledAutoTuneDetailsFormGroup() {
		return new FormGroup<ScheduledAutoTuneDetailsFormProperties>({
			Date: new FormControl<Date | null | undefined>(undefined),
			ActionType: new FormControl<ScheduledAutoTuneActionType | null | undefined>(undefined),
			Action: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<ScheduledAutoTuneSeverityType | null | undefined>(undefined),
		});

	}


	/** Specifies Auto-Tune action type. Valid values are JVM_HEAP_SIZE_TUNING and JVM_YOUNG_GEN_TUNING.  */
	export enum ScheduledAutoTuneActionType { JVM_HEAP_SIZE_TUNING = 'JVM_HEAP_SIZE_TUNING', JVM_YOUNG_GEN_TUNING = 'JVM_YOUNG_GEN_TUNING' }


	/** Specifies Auto-Tune action severity. Valid values are LOW, MEDIUM and HIGH.  */
	export enum ScheduledAutoTuneSeverityType { LOW = 'LOW', MEDIUM = 'MEDIUM', HIGH = 'HIGH' }


	/** The result of a <code>DescribeDomainChangeProgress</code> request. Contains the progress information of the requested domain change.  */
	export interface DescribeDomainChangeProgressResponse {
		ChangeProgressStatus?: ChangeProgressStatusDetails;
	}

	/** The result of a <code>DescribeDomainChangeProgress</code> request. Contains the progress information of the requested domain change.  */
	export interface DescribeDomainChangeProgressResponseFormProperties {
	}
	export function CreateDescribeDomainChangeProgressResponseFormGroup() {
		return new FormGroup<DescribeDomainChangeProgressResponseFormProperties>({
		});

	}


	/** The progress details of a specific domain configuration change. */
	export interface ChangeProgressStatusDetails {
		ChangeId?: string;
		StartTime?: Date;
		Status?: OverallChangeStatus;
		PendingProperties?: Array<string>;
		CompletedProperties?: Array<string>;
		TotalNumberOfStages?: number | null;
		ChangeProgressStages?: Array<ChangeProgressStage>;
	}

	/** The progress details of a specific domain configuration change. */
	export interface ChangeProgressStatusDetailsFormProperties {
		ChangeId: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		Status: FormControl<OverallChangeStatus | null | undefined>,
		TotalNumberOfStages: FormControl<number | null | undefined>,
	}
	export function CreateChangeProgressStatusDetailsFormGroup() {
		return new FormGroup<ChangeProgressStatusDetailsFormProperties>({
			ChangeId: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<OverallChangeStatus | null | undefined>(undefined),
			TotalNumberOfStages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The overall status value of the domain configuration change. */
	export enum OverallChangeStatus { PENDING = 'PENDING', PROCESSING = 'PROCESSING', COMPLETED = 'COMPLETED', FAILED = 'FAILED' }


	/** A progress stage details of a specific domain configuration change. */
	export interface ChangeProgressStage {
		Name?: string;
		Status?: string;
		Description?: string;
		LastUpdated?: Date;
	}

	/** A progress stage details of a specific domain configuration change. */
	export interface ChangeProgressStageFormProperties {
		Name: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
	}
	export function CreateChangeProgressStageFormGroup() {
		return new FormGroup<ChangeProgressStageFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The result of a <code>DescribeElasticsearchDomain</code> request. Contains the status of the domain specified in the request. */
	export interface DescribeElasticsearchDomainResponse {

		/** Required */
		DomainStatus: ElasticsearchDomainStatus;
	}

	/** The result of a <code>DescribeElasticsearchDomain</code> request. Contains the status of the domain specified in the request. */
	export interface DescribeElasticsearchDomainResponseFormProperties {
	}
	export function CreateDescribeElasticsearchDomainResponseFormGroup() {
		return new FormGroup<DescribeElasticsearchDomainResponseFormProperties>({
		});

	}


	/** The result of a <code>DescribeElasticsearchDomainConfig</code> request. Contains the configuration information of the requested domain. */
	export interface DescribeElasticsearchDomainConfigResponse {

		/** Required */
		DomainConfig: ElasticsearchDomainConfig;
	}

	/** The result of a <code>DescribeElasticsearchDomainConfig</code> request. Contains the configuration information of the requested domain. */
	export interface DescribeElasticsearchDomainConfigResponseFormProperties {
	}
	export function CreateDescribeElasticsearchDomainConfigResponseFormGroup() {
		return new FormGroup<DescribeElasticsearchDomainConfigResponseFormProperties>({
		});

	}


	/** The configuration of an Elasticsearch domain. */
	export interface ElasticsearchDomainConfig {
		ElasticsearchVersion?: ElasticsearchVersionStatus;
		ElasticsearchClusterConfig?: ElasticsearchClusterConfigStatus;
		EBSOptions?: EBSOptionsStatus;
		AccessPolicies?: AccessPoliciesStatus;
		SnapshotOptions?: SnapshotOptionsStatus;
		VPCOptions?: VPCDerivedInfoStatus;
		CognitoOptions?: CognitoOptionsStatus;
		EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus;
		NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus;
		AdvancedOptions?: AdvancedOptionsStatus;
		LogPublishingOptions?: LogPublishingOptionsStatus;
		DomainEndpointOptions?: DomainEndpointOptionsStatus;
		AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus;
		AutoTuneOptions?: AutoTuneOptionsStatus;
		ChangeProgressDetails?: ChangeProgressDetails;
	}

	/** The configuration of an Elasticsearch domain. */
	export interface ElasticsearchDomainConfigFormProperties {
	}
	export function CreateElasticsearchDomainConfigFormGroup() {
		return new FormGroup<ElasticsearchDomainConfigFormProperties>({
		});

	}


	/**  Status of the Elasticsearch version options for the specified Elasticsearch domain. */
	export interface ElasticsearchVersionStatus {

		/** Required */
		Options: string;

		/** Required */
		Status: OptionStatus;
	}

	/**  Status of the Elasticsearch version options for the specified Elasticsearch domain. */
	export interface ElasticsearchVersionStatusFormProperties {

		/** Required */
		Options: FormControl<string | null | undefined>,
	}
	export function CreateElasticsearchVersionStatusFormGroup() {
		return new FormGroup<ElasticsearchVersionStatusFormProperties>({
			Options: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the current status of the entity. */
	export interface OptionStatus {

		/** Required */
		CreationDate: Date;

		/** Required */
		UpdateDate: Date;
		UpdateVersion?: number | null;

		/** Required */
		State: OptionState;
		PendingDeletion?: boolean | null;
	}

	/** Provides the current status of the entity. */
	export interface OptionStatusFormProperties {

		/** Required */
		CreationDate: FormControl<Date | null | undefined>,

		/** Required */
		UpdateDate: FormControl<Date | null | undefined>,
		UpdateVersion: FormControl<number | null | undefined>,

		/** Required */
		State: FormControl<OptionState | null | undefined>,
		PendingDeletion: FormControl<boolean | null | undefined>,
	}
	export function CreateOptionStatusFormGroup() {
		return new FormGroup<OptionStatusFormProperties>({
			CreationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			UpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			UpdateVersion: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<OptionState | null | undefined>(undefined, [Validators.required]),
			PendingDeletion: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>The state of a requested change. One of the following:</p> <ul> <li>Processing: The request change is still in-process.</li> <li>Active: The request change is processed and deployed to the Elasticsearch domain.</li> </ul> */
	export enum OptionState { RequiresIndexDocuments = 'RequiresIndexDocuments', Processing = 'Processing', Active = 'Active' }


	/**  Specifies the configuration status for the specified Elasticsearch domain. */
	export interface ElasticsearchClusterConfigStatus {

		/** Required */
		Options: ElasticsearchClusterConfig;

		/** Required */
		Status: OptionStatus;
	}

	/**  Specifies the configuration status for the specified Elasticsearch domain. */
	export interface ElasticsearchClusterConfigStatusFormProperties {
	}
	export function CreateElasticsearchClusterConfigStatusFormGroup() {
		return new FormGroup<ElasticsearchClusterConfigStatusFormProperties>({
		});

	}


	/**  Status of the EBS options for the specified Elasticsearch domain. */
	export interface EBSOptionsStatus {

		/** Required */
		Options: EBSOptions;

		/** Required */
		Status: OptionStatus;
	}

	/**  Status of the EBS options for the specified Elasticsearch domain. */
	export interface EBSOptionsStatusFormProperties {
	}
	export function CreateEBSOptionsStatusFormGroup() {
		return new FormGroup<EBSOptionsStatusFormProperties>({
		});

	}


	/** The configured access rules for the domain's document and search endpoints, and the current status of those rules. */
	export interface AccessPoliciesStatus {

		/** Required */
		Options: string;

		/** Required */
		Status: OptionStatus;
	}

	/** The configured access rules for the domain's document and search endpoints, and the current status of those rules. */
	export interface AccessPoliciesStatusFormProperties {

		/** Required */
		Options: FormControl<string | null | undefined>,
	}
	export function CreateAccessPoliciesStatusFormGroup() {
		return new FormGroup<AccessPoliciesStatusFormProperties>({
			Options: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Status of a daily automated snapshot. */
	export interface SnapshotOptionsStatus {

		/** Required */
		Options: SnapshotOptions;

		/** Required */
		Status: OptionStatus;
	}

	/** Status of a daily automated snapshot. */
	export interface SnapshotOptionsStatusFormProperties {
	}
	export function CreateSnapshotOptionsStatusFormGroup() {
		return new FormGroup<SnapshotOptionsStatusFormProperties>({
		});

	}


	/**  Status of the VPC options for the specified Elasticsearch domain. */
	export interface VPCDerivedInfoStatus {

		/** Required */
		Options: VPCDerivedInfo;

		/** Required */
		Status: OptionStatus;
	}

	/**  Status of the VPC options for the specified Elasticsearch domain. */
	export interface VPCDerivedInfoStatusFormProperties {
	}
	export function CreateVPCDerivedInfoStatusFormGroup() {
		return new FormGroup<VPCDerivedInfoStatusFormProperties>({
		});

	}


	/** Status of the Cognito options for the specified Elasticsearch domain. */
	export interface CognitoOptionsStatus {

		/** Required */
		Options: CognitoOptions;

		/** Required */
		Status: OptionStatus;
	}

	/** Status of the Cognito options for the specified Elasticsearch domain. */
	export interface CognitoOptionsStatusFormProperties {
	}
	export function CreateCognitoOptionsStatusFormGroup() {
		return new FormGroup<CognitoOptionsStatusFormProperties>({
		});

	}


	/**  Status of the Encryption At Rest options for the specified Elasticsearch domain. */
	export interface EncryptionAtRestOptionsStatus {

		/** Required */
		Options: EncryptionAtRestOptions;

		/** Required */
		Status: OptionStatus;
	}

	/**  Status of the Encryption At Rest options for the specified Elasticsearch domain. */
	export interface EncryptionAtRestOptionsStatusFormProperties {
	}
	export function CreateEncryptionAtRestOptionsStatusFormGroup() {
		return new FormGroup<EncryptionAtRestOptionsStatusFormProperties>({
		});

	}


	/** Status of the node-to-node encryption options for the specified Elasticsearch domain. */
	export interface NodeToNodeEncryptionOptionsStatus {

		/** Required */
		Options: NodeToNodeEncryptionOptions;

		/** Required */
		Status: OptionStatus;
	}

	/** Status of the node-to-node encryption options for the specified Elasticsearch domain. */
	export interface NodeToNodeEncryptionOptionsStatusFormProperties {
	}
	export function CreateNodeToNodeEncryptionOptionsStatusFormGroup() {
		return new FormGroup<NodeToNodeEncryptionOptionsStatusFormProperties>({
		});

	}


	/** <p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
	export interface AdvancedOptionsStatus {

		/** Required */
		Options: AdvancedOptions;

		/** Required */
		Status: OptionStatus;
	}

	/** <p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
	export interface AdvancedOptionsStatusFormProperties {
	}
	export function CreateAdvancedOptionsStatusFormGroup() {
		return new FormGroup<AdvancedOptionsStatusFormProperties>({
		});

	}


	/** The configured log publishing options for the domain and their current status. */
	export interface LogPublishingOptionsStatus {
		Options?: LogPublishingOptions;
		Status?: OptionStatus;
	}

	/** The configured log publishing options for the domain and their current status. */
	export interface LogPublishingOptionsStatusFormProperties {
	}
	export function CreateLogPublishingOptionsStatusFormGroup() {
		return new FormGroup<LogPublishingOptionsStatusFormProperties>({
		});

	}


	/** The configured endpoint options for the domain and their current status. */
	export interface DomainEndpointOptionsStatus {

		/** Required */
		Options: DomainEndpointOptions;

		/** Required */
		Status: OptionStatus;
	}

	/** The configured endpoint options for the domain and their current status. */
	export interface DomainEndpointOptionsStatusFormProperties {
	}
	export function CreateDomainEndpointOptionsStatusFormGroup() {
		return new FormGroup<DomainEndpointOptionsStatusFormProperties>({
		});

	}


	/**  Specifies the status of advanced security options for the specified Elasticsearch domain. */
	export interface AdvancedSecurityOptionsStatus {

		/** Required */
		Options: AdvancedSecurityOptions;

		/** Required */
		Status: OptionStatus;
	}

	/**  Specifies the status of advanced security options for the specified Elasticsearch domain. */
	export interface AdvancedSecurityOptionsStatusFormProperties {
	}
	export function CreateAdvancedSecurityOptionsStatusFormGroup() {
		return new FormGroup<AdvancedSecurityOptionsStatusFormProperties>({
		});

	}


	/**  Specifies the status of Auto-Tune options for the specified Elasticsearch domain. */
	export interface AutoTuneOptionsStatus {
		Options?: AutoTuneOptions;
		Status?: AutoTuneStatus;
	}

	/**  Specifies the status of Auto-Tune options for the specified Elasticsearch domain. */
	export interface AutoTuneOptionsStatusFormProperties {
	}
	export function CreateAutoTuneOptionsStatusFormGroup() {
		return new FormGroup<AutoTuneOptionsStatusFormProperties>({
		});

	}


	/** Specifies the Auto-Tune options: the Auto-Tune desired state for the domain, rollback state when disabling Auto-Tune options and list of maintenance schedules. */
	export interface AutoTuneOptions {
		DesiredState?: AutoTuneDesiredState;
		RollbackOnDisable?: RollbackOnDisable;
		MaintenanceSchedules?: Array<AutoTuneMaintenanceSchedule>;
	}

	/** Specifies the Auto-Tune options: the Auto-Tune desired state for the domain, rollback state when disabling Auto-Tune options and list of maintenance schedules. */
	export interface AutoTuneOptionsFormProperties {
		DesiredState: FormControl<AutoTuneDesiredState | null | undefined>,
		RollbackOnDisable: FormControl<RollbackOnDisable | null | undefined>,
	}
	export function CreateAutoTuneOptionsFormGroup() {
		return new FormGroup<AutoTuneOptionsFormProperties>({
			DesiredState: new FormControl<AutoTuneDesiredState | null | undefined>(undefined),
			RollbackOnDisable: new FormControl<RollbackOnDisable | null | undefined>(undefined),
		});

	}


	/** Specifies the rollback state while disabling Auto-Tune for the domain. Valid values are NO_ROLLBACK, DEFAULT_ROLLBACK. */
	export enum RollbackOnDisable { NO_ROLLBACK = 'NO_ROLLBACK', DEFAULT_ROLLBACK = 'DEFAULT_ROLLBACK' }


	/** Provides the current status of the Auto-Tune options.  */
	export interface AutoTuneStatus {

		/** Required */
		CreationDate: Date;

		/** Required */
		UpdateDate: Date;
		UpdateVersion?: number | null;

		/** Required */
		State: AutoTuneState;
		ErrorMessage?: string;
		PendingDeletion?: boolean | null;
	}

	/** Provides the current status of the Auto-Tune options.  */
	export interface AutoTuneStatusFormProperties {

		/** Required */
		CreationDate: FormControl<Date | null | undefined>,

		/** Required */
		UpdateDate: FormControl<Date | null | undefined>,
		UpdateVersion: FormControl<number | null | undefined>,

		/** Required */
		State: FormControl<AutoTuneState | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		PendingDeletion: FormControl<boolean | null | undefined>,
	}
	export function CreateAutoTuneStatusFormGroup() {
		return new FormGroup<AutoTuneStatusFormProperties>({
			CreationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			UpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			UpdateVersion: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<AutoTuneState | null | undefined>(undefined, [Validators.required]),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			PendingDeletion: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The result of a <code>DescribeElasticsearchDomains</code> request. Contains the status of the specified domains or all domains owned by the account. */
	export interface DescribeElasticsearchDomainsResponse {

		/** Required */
		DomainStatusList: Array<ElasticsearchDomainStatus>;
	}

	/** The result of a <code>DescribeElasticsearchDomains</code> request. Contains the status of the specified domains or all domains owned by the account. */
	export interface DescribeElasticsearchDomainsResponseFormProperties {
	}
	export function CreateDescribeElasticsearchDomainsResponseFormGroup() {
		return new FormGroup<DescribeElasticsearchDomainsResponseFormProperties>({
		});

	}


	/**  Container for the parameters received from <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation.  */
	export interface DescribeElasticsearchInstanceTypeLimitsResponse {

		/** Map of Role of the Instance and Limits that are applicable. Role performed by given Instance in Elasticsearch can be one of the following: <ul> <li>data: If the given InstanceType is used as data node</li> <li>master: If the given InstanceType is used as master node</li> <li>ultra_warm: If the given InstanceType is used as warm node</li> </ul> */
		LimitsByRole?: LimitsByRole;
	}

	/**  Container for the parameters received from <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation.  */
	export interface DescribeElasticsearchInstanceTypeLimitsResponseFormProperties {
	}
	export function CreateDescribeElasticsearchInstanceTypeLimitsResponseFormGroup() {
		return new FormGroup<DescribeElasticsearchInstanceTypeLimitsResponseFormProperties>({
		});

	}


	/**  Map of Role of the Instance and Limits that are applicable. Role performed by given Instance in Elasticsearch can be one of the following: <ul> <li>data: If the given InstanceType is used as data node</li> <li>master: If the given InstanceType is used as master node</li> <li>ultra_warm: If the given InstanceType is used as warm node</li> </ul>  */
	export interface LimitsByRole {
	}

	/**  Map of Role of the Instance and Limits that are applicable. Role performed by given Instance in Elasticsearch can be one of the following: <ul> <li>data: If the given InstanceType is used as data node</li> <li>master: If the given InstanceType is used as master node</li> <li>ultra_warm: If the given InstanceType is used as warm node</li> </ul>  */
	export interface LimitsByRoleFormProperties {
	}
	export function CreateLimitsByRoleFormGroup() {
		return new FormGroup<LimitsByRoleFormProperties>({
		});

	}


	/** The result of a <code><a>DescribeInboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria. */
	export interface DescribeInboundCrossClusterSearchConnectionsResponse {
		CrossClusterSearchConnections?: Array<InboundCrossClusterSearchConnection>;
		NextToken?: string;
	}

	/** The result of a <code><a>DescribeInboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria. */
	export interface DescribeInboundCrossClusterSearchConnectionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInboundCrossClusterSearchConnectionsResponseFormGroup() {
		return new FormGroup<DescribeInboundCrossClusterSearchConnectionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A filter used to limit results when describing inbound or outbound cross-cluster search connections. Multiple values can be specified per filter. A cross-cluster search connection must match at least one of the specified values for it to be returned from an operation.  */
	export interface Filter {
		Name?: string;
		Values?: Array<string>;
	}

	/**  A filter used to limit results when describing inbound or outbound cross-cluster search connections. Multiple values can be specified per filter. A cross-cluster search connection must match at least one of the specified values for it to be returned from an operation.  */
	export interface FilterFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidPaginationTokenException {
	}
	export interface InvalidPaginationTokenExceptionFormProperties {
	}
	export function CreateInvalidPaginationTokenExceptionFormGroup() {
		return new FormGroup<InvalidPaginationTokenExceptionFormProperties>({
		});

	}


	/** The result of a <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria. */
	export interface DescribeOutboundCrossClusterSearchConnectionsResponse {
		CrossClusterSearchConnections?: Array<OutboundCrossClusterSearchConnection>;
		NextToken?: string;
	}

	/** The result of a <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria. */
	export interface DescribeOutboundCrossClusterSearchConnectionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOutboundCrossClusterSearchConnectionsResponseFormGroup() {
		return new FormGroup<DescribeOutboundCrossClusterSearchConnectionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Container for response returned by <code> <a>DescribePackages</a> </code> operation.  */
	export interface DescribePackagesResponse {
		PackageDetailsList?: Array<PackageDetails>;
		NextToken?: string | null;
	}

	/**  Container for response returned by <code> <a>DescribePackages</a> </code> operation.  */
	export interface DescribePackagesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePackagesResponseFormGroup() {
		return new FormGroup<DescribePackagesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filter to apply in <code>DescribePackage</code> response. */
	export interface DescribePackagesFilter {
		Name?: DescribePackagesFilterName;
		Value?: Array<string>;
	}

	/** Filter to apply in <code>DescribePackage</code> response. */
	export interface DescribePackagesFilterFormProperties {
		Name: FormControl<DescribePackagesFilterName | null | undefined>,
	}
	export function CreateDescribePackagesFilterFormGroup() {
		return new FormGroup<DescribePackagesFilterFormProperties>({
			Name: new FormControl<DescribePackagesFilterName | null | undefined>(undefined),
		});

	}

	export enum DescribePackagesFilterName { PackageID = 'PackageID', PackageName = 'PackageName', PackageStatus = 'PackageStatus' }


	/** Container for results from <code>DescribeReservedElasticsearchInstanceOfferings</code> */
	export interface DescribeReservedElasticsearchInstanceOfferingsResponse {
		NextToken?: string;
		ReservedElasticsearchInstanceOfferings?: Array<ReservedElasticsearchInstanceOffering>;
	}

	/** Container for results from <code>DescribeReservedElasticsearchInstanceOfferings</code> */
	export interface DescribeReservedElasticsearchInstanceOfferingsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReservedElasticsearchInstanceOfferingsResponseFormGroup() {
		return new FormGroup<DescribeReservedElasticsearchInstanceOfferingsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a reserved Elasticsearch instance offering. */
	export interface ReservedElasticsearchInstanceOffering {
		ReservedElasticsearchInstanceOfferingId?: string;
		ElasticsearchInstanceType?: ESPartitionInstanceType;
		Duration?: number | null;
		FixedPrice?: number | null;
		UsagePrice?: number | null;
		CurrencyCode?: string;
		PaymentOption?: ReservedElasticsearchInstancePaymentOption;
		RecurringCharges?: Array<RecurringCharge>;
	}

	/** Details of a reserved Elasticsearch instance offering. */
	export interface ReservedElasticsearchInstanceOfferingFormProperties {
		ReservedElasticsearchInstanceOfferingId: FormControl<string | null | undefined>,
		ElasticsearchInstanceType: FormControl<ESPartitionInstanceType | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		UsagePrice: FormControl<number | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		PaymentOption: FormControl<ReservedElasticsearchInstancePaymentOption | null | undefined>,
	}
	export function CreateReservedElasticsearchInstanceOfferingFormGroup() {
		return new FormGroup<ReservedElasticsearchInstanceOfferingFormProperties>({
			ReservedElasticsearchInstanceOfferingId: new FormControl<string | null | undefined>(undefined),
			ElasticsearchInstanceType: new FormControl<ESPartitionInstanceType | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			PaymentOption: new FormControl<ReservedElasticsearchInstancePaymentOption | null | undefined>(undefined),
		});

	}

	export enum ReservedElasticsearchInstancePaymentOption { ALL_UPFRONT = 'ALL_UPFRONT', PARTIAL_UPFRONT = 'PARTIAL_UPFRONT', NO_UPFRONT = 'NO_UPFRONT' }


	/** Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering. */
	export interface RecurringCharge {
		RecurringChargeAmount?: number | null;
		RecurringChargeFrequency?: string;
	}

	/** Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering. */
	export interface RecurringChargeFormProperties {
		RecurringChargeAmount: FormControl<number | null | undefined>,
		RecurringChargeFrequency: FormControl<string | null | undefined>,
	}
	export function CreateRecurringChargeFormGroup() {
		return new FormGroup<RecurringChargeFormProperties>({
			RecurringChargeAmount: new FormControl<number | null | undefined>(undefined),
			RecurringChargeFrequency: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for results from <code>DescribeReservedElasticsearchInstances</code> */
	export interface DescribeReservedElasticsearchInstancesResponse {
		NextToken?: string;
		ReservedElasticsearchInstances?: Array<ReservedElasticsearchInstance>;
	}

	/** Container for results from <code>DescribeReservedElasticsearchInstances</code> */
	export interface DescribeReservedElasticsearchInstancesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReservedElasticsearchInstancesResponseFormGroup() {
		return new FormGroup<DescribeReservedElasticsearchInstancesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a reserved Elasticsearch instance. */
	export interface ReservedElasticsearchInstance {
		ReservationName?: string;
		ReservedElasticsearchInstanceId?: string;
		ReservedElasticsearchInstanceOfferingId?: string;
		ElasticsearchInstanceType?: ESPartitionInstanceType;
		StartTime?: Date;
		Duration?: number | null;
		FixedPrice?: number | null;
		UsagePrice?: number | null;
		CurrencyCode?: string;
		ElasticsearchInstanceCount?: number | null;
		State?: string;
		PaymentOption?: ReservedElasticsearchInstancePaymentOption;
		RecurringCharges?: Array<RecurringCharge>;
	}

	/** Details of a reserved Elasticsearch instance. */
	export interface ReservedElasticsearchInstanceFormProperties {
		ReservationName: FormControl<string | null | undefined>,
		ReservedElasticsearchInstanceId: FormControl<string | null | undefined>,
		ReservedElasticsearchInstanceOfferingId: FormControl<string | null | undefined>,
		ElasticsearchInstanceType: FormControl<ESPartitionInstanceType | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		UsagePrice: FormControl<number | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		ElasticsearchInstanceCount: FormControl<number | null | undefined>,
		State: FormControl<string | null | undefined>,
		PaymentOption: FormControl<ReservedElasticsearchInstancePaymentOption | null | undefined>,
	}
	export function CreateReservedElasticsearchInstanceFormGroup() {
		return new FormGroup<ReservedElasticsearchInstanceFormProperties>({
			ReservationName: new FormControl<string | null | undefined>(undefined),
			ReservedElasticsearchInstanceId: new FormControl<string | null | undefined>(undefined),
			ReservedElasticsearchInstanceOfferingId: new FormControl<string | null | undefined>(undefined),
			ElasticsearchInstanceType: new FormControl<ESPartitionInstanceType | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			ElasticsearchInstanceCount: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			PaymentOption: new FormControl<ReservedElasticsearchInstancePaymentOption | null | undefined>(undefined),
		});

	}


	/** Container for response parameters to the <code><a>DescribeVpcEndpoints</a></code> operation. Returns a list containing configuration details and status of the VPC Endpoints as well as a list containing error responses of the endpoints that could not be described */
	export interface DescribeVpcEndpointsResponse {

		/** Required */
		VpcEndpoints: Array<VpcEndpoint>;

		/** Required */
		VpcEndpointErrors: Array<VpcEndpointError>;
	}

	/** Container for response parameters to the <code><a>DescribeVpcEndpoints</a></code> operation. Returns a list containing configuration details and status of the VPC Endpoints as well as a list containing error responses of the endpoints that could not be described */
	export interface DescribeVpcEndpointsResponseFormProperties {
	}
	export function CreateDescribeVpcEndpointsResponseFormGroup() {
		return new FormGroup<DescribeVpcEndpointsResponseFormProperties>({
		});

	}


	/** Error information when attempting to describe an Amazon OpenSearch Service-managed VPC endpoint. */
	export interface VpcEndpointError {
		VpcEndpointId?: string;
		ErrorCode?: VpcEndpointErrorCode;
		ErrorMessage?: string;
	}

	/** Error information when attempting to describe an Amazon OpenSearch Service-managed VPC endpoint. */
	export interface VpcEndpointErrorFormProperties {
		VpcEndpointId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<VpcEndpointErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateVpcEndpointErrorFormGroup() {
		return new FormGroup<VpcEndpointErrorFormProperties>({
			VpcEndpointId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<VpcEndpointErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the error code of the failure encountered while describing the VPC endpoint: <ul> <li>ENDPOINT_NOT_FOUND: Indicates that the requested VPC endpoint does not exist.</li> <li>SERVER_ERROR: Indicates the describe endpoint operation failed due to an internal server error.</li> </ul>  */
	export enum VpcEndpointErrorCode { ENDPOINT_NOT_FOUND = 'ENDPOINT_NOT_FOUND', SERVER_ERROR = 'SERVER_ERROR' }


	/**  Container for response returned by <code> <a>DissociatePackage</a> </code> operation.  */
	export interface DissociatePackageResponse {
		DomainPackageDetails?: DomainPackageDetails;
	}

	/**  Container for response returned by <code> <a>DissociatePackage</a> </code> operation.  */
	export interface DissociatePackageResponseFormProperties {
	}
	export function CreateDissociatePackageResponseFormGroup() {
		return new FormGroup<DissociatePackageResponseFormProperties>({
		});

	}


	/**  Container for response returned by <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation.  */
	export interface GetCompatibleElasticsearchVersionsResponse {
		CompatibleElasticsearchVersions?: Array<CompatibleVersionsMap>;
	}

	/**  Container for response returned by <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation.  */
	export interface GetCompatibleElasticsearchVersionsResponseFormProperties {
	}
	export function CreateGetCompatibleElasticsearchVersionsResponseFormGroup() {
		return new FormGroup<GetCompatibleElasticsearchVersionsResponseFormProperties>({
		});

	}


	/**  A map from an <code> <a>ElasticsearchVersion</a> </code> to a list of compatible <code> <a>ElasticsearchVersion</a> </code> s to which the domain can be upgraded.  */
	export interface CompatibleVersionsMap {
		SourceVersion?: string;

		/** List of supported elastic search versions. */
		TargetVersions?: Array<string>;
	}

	/**  A map from an <code> <a>ElasticsearchVersion</a> </code> to a list of compatible <code> <a>ElasticsearchVersion</a> </code> s to which the domain can be upgraded.  */
	export interface CompatibleVersionsMapFormProperties {
		SourceVersion: FormControl<string | null | undefined>,
	}
	export function CreateCompatibleVersionsMapFormGroup() {
		return new FormGroup<CompatibleVersionsMapFormProperties>({
			SourceVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Container for response returned by <code> <a>GetPackageVersionHistory</a> </code> operation.  */
	export interface GetPackageVersionHistoryResponse {
		PackageID?: string | null;
		PackageVersionHistoryList?: Array<PackageVersionHistory>;
		NextToken?: string | null;
	}

	/**  Container for response returned by <code> <a>GetPackageVersionHistory</a> </code> operation.  */
	export interface GetPackageVersionHistoryResponseFormProperties {
		PackageID: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetPackageVersionHistoryResponseFormGroup() {
		return new FormGroup<GetPackageVersionHistoryResponseFormProperties>({
			PackageID: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a package version. */
	export interface PackageVersionHistory {
		PackageVersion?: string;
		CommitMessage?: string;
		CreatedAt?: Date;
	}

	/** Details of a package version. */
	export interface PackageVersionHistoryFormProperties {
		PackageVersion: FormControl<string | null | undefined>,
		CommitMessage: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
	}
	export function CreatePackageVersionHistoryFormGroup() {
		return new FormGroup<PackageVersionHistoryFormProperties>({
			PackageVersion: new FormControl<string | null | undefined>(undefined),
			CommitMessage: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  Container for response returned by <code> <a>GetUpgradeHistory</a> </code> operation.  */
	export interface GetUpgradeHistoryResponse {
		UpgradeHistories?: Array<UpgradeHistory>;
		NextToken?: string;
	}

	/**  Container for response returned by <code> <a>GetUpgradeHistory</a> </code> operation.  */
	export interface GetUpgradeHistoryResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetUpgradeHistoryResponseFormGroup() {
		return new FormGroup<GetUpgradeHistoryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** History of the last 10 Upgrades and Upgrade Eligibility Checks. */
	export interface UpgradeHistory {
		UpgradeName?: string;
		StartTimestamp?: Date;
		UpgradeStatus?: UpgradeStatus;
		StepsList?: Array<UpgradeStepItem>;
	}

	/** History of the last 10 Upgrades and Upgrade Eligibility Checks. */
	export interface UpgradeHistoryFormProperties {
		UpgradeName: FormControl<string | null | undefined>,
		StartTimestamp: FormControl<Date | null | undefined>,
		UpgradeStatus: FormControl<UpgradeStatus | null | undefined>,
	}
	export function CreateUpgradeHistoryFormGroup() {
		return new FormGroup<UpgradeHistoryFormProperties>({
			UpgradeName: new FormControl<string | null | undefined>(undefined),
			StartTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpgradeStatus: new FormControl<UpgradeStatus | null | undefined>(undefined),
		});

	}

	export enum UpgradeStatus { IN_PROGRESS = 'IN_PROGRESS', SUCCEEDED = 'SUCCEEDED', SUCCEEDED_WITH_ISSUES = 'SUCCEEDED_WITH_ISSUES', FAILED = 'FAILED' }


	/** Represents a single step of the Upgrade or Upgrade Eligibility Check workflow. */
	export interface UpgradeStepItem {
		UpgradeStep?: UpgradeStep;
		UpgradeStepStatus?: UpgradeStatus;
		Issues?: Array<string>;
		ProgressPercent?: number | null;
	}

	/** Represents a single step of the Upgrade or Upgrade Eligibility Check workflow. */
	export interface UpgradeStepItemFormProperties {
		UpgradeStep: FormControl<UpgradeStep | null | undefined>,
		UpgradeStepStatus: FormControl<UpgradeStatus | null | undefined>,
		ProgressPercent: FormControl<number | null | undefined>,
	}
	export function CreateUpgradeStepItemFormGroup() {
		return new FormGroup<UpgradeStepItemFormProperties>({
			UpgradeStep: new FormControl<UpgradeStep | null | undefined>(undefined),
			UpgradeStepStatus: new FormControl<UpgradeStatus | null | undefined>(undefined),
			ProgressPercent: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum UpgradeStep { PRE_UPGRADE_CHECK = 'PRE_UPGRADE_CHECK', SNAPSHOT = 'SNAPSHOT', UPGRADE = 'UPGRADE' }


	/**  Container for response returned by <code> <a>GetUpgradeStatus</a> </code> operation.  */
	export interface GetUpgradeStatusResponse {
		UpgradeStep?: UpgradeStep;
		StepStatus?: UpgradeStatus;
		UpgradeName?: string;
	}

	/**  Container for response returned by <code> <a>GetUpgradeStatus</a> </code> operation.  */
	export interface GetUpgradeStatusResponseFormProperties {
		UpgradeStep: FormControl<UpgradeStep | null | undefined>,
		StepStatus: FormControl<UpgradeStatus | null | undefined>,
		UpgradeName: FormControl<string | null | undefined>,
	}
	export function CreateGetUpgradeStatusResponseFormGroup() {
		return new FormGroup<GetUpgradeStatusResponseFormProperties>({
			UpgradeStep: new FormControl<UpgradeStep | null | undefined>(undefined),
			StepStatus: new FormControl<UpgradeStatus | null | undefined>(undefined),
			UpgradeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a <code>ListDomainNames</code> operation. Contains the names of all domains owned by this account and their respective engine types. */
	export interface ListDomainNamesResponse {
		DomainNames?: Array<DomainInfo>;
	}

	/** The result of a <code>ListDomainNames</code> operation. Contains the names of all domains owned by this account and their respective engine types. */
	export interface ListDomainNamesResponseFormProperties {
	}
	export function CreateListDomainNamesResponseFormGroup() {
		return new FormGroup<ListDomainNamesResponseFormProperties>({
		});

	}

	export interface DomainInfo {
		DomainName?: string;
		EngineType?: EngineType;
	}
	export interface DomainInfoFormProperties {
		DomainName: FormControl<string | null | undefined>,
		EngineType: FormControl<EngineType | null | undefined>,
	}
	export function CreateDomainInfoFormGroup() {
		return new FormGroup<DomainInfoFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			EngineType: new FormControl<EngineType | null | undefined>(undefined),
		});

	}

	export enum EngineType { OpenSearch = 'OpenSearch', Elasticsearch = 'Elasticsearch' }


	/**  Container for response parameters to <code> <a>ListDomainsForPackage</a> </code> operation.  */
	export interface ListDomainsForPackageResponse {
		DomainPackageDetailsList?: Array<DomainPackageDetails>;
		NextToken?: string | null;
	}

	/**  Container for response parameters to <code> <a>ListDomainsForPackage</a> </code> operation.  */
	export interface ListDomainsForPackageResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsForPackageResponseFormGroup() {
		return new FormGroup<ListDomainsForPackageResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Container for the parameters returned by <code> <a>ListElasticsearchInstanceTypes</a> </code> operation.  */
	export interface ListElasticsearchInstanceTypesResponse {
		ElasticsearchInstanceTypes?: Array<ESPartitionInstanceType>;
		NextToken?: string;
	}

	/**  Container for the parameters returned by <code> <a>ListElasticsearchInstanceTypes</a> </code> operation.  */
	export interface ListElasticsearchInstanceTypesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListElasticsearchInstanceTypesResponseFormGroup() {
		return new FormGroup<ListElasticsearchInstanceTypesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Container for the parameters for response received from <code> <a>ListElasticsearchVersions</a> </code> operation.  */
	export interface ListElasticsearchVersionsResponse {

		/** List of supported elastic search versions. */
		ElasticsearchVersions?: Array<string>;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}

	/**  Container for the parameters for response received from <code> <a>ListElasticsearchVersions</a> </code> operation.  */
	export interface ListElasticsearchVersionsResponseFormProperties {

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListElasticsearchVersionsResponseFormGroup() {
		return new FormGroup<ListElasticsearchVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Container for response parameters to <code> <a>ListPackagesForDomain</a> </code> operation.  */
	export interface ListPackagesForDomainResponse {
		DomainPackageDetailsList?: Array<DomainPackageDetails>;
		NextToken?: string;
	}

	/**  Container for response parameters to <code> <a>ListPackagesForDomain</a> </code> operation.  */
	export interface ListPackagesForDomainResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPackagesForDomainResponseFormGroup() {
		return new FormGroup<ListPackagesForDomainResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a <code>ListTags</code> operation. Contains tags for all requested Elasticsearch domains. */
	export interface ListTagsResponse {
		TagList?: Array<Tag>;
	}

	/** The result of a <code>ListTags</code> operation. Contains tags for all requested Elasticsearch domains. */
	export interface ListTagsResponseFormProperties {
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
		});

	}


	/** Container for response parameters to the <code><a>ListVpcEndpointAccess</a></code> operation. Returns a list of accounts id and account type authorized to manage VPC endpoints. */
	export interface ListVpcEndpointAccessResponse {

		/** Required */
		AuthorizedPrincipalList: Array<AuthorizedPrincipal>;

		/** Required */
		NextToken: string;
	}

	/** Container for response parameters to the <code><a>ListVpcEndpointAccess</a></code> operation. Returns a list of accounts id and account type authorized to manage VPC endpoints. */
	export interface ListVpcEndpointAccessResponseFormProperties {

		/** Required */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVpcEndpointAccessResponseFormGroup() {
		return new FormGroup<ListVpcEndpointAccessResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for response parameters to the <code><a>ListVpcEndpoints</a></code> operation. Returns a list containing summarized details of the VPC endpoints. */
	export interface ListVpcEndpointsResponse {

		/** Required */
		VpcEndpointSummaryList: Array<VpcEndpointSummary>;

		/** Required */
		NextToken: string;
	}

	/** Container for response parameters to the <code><a>ListVpcEndpoints</a></code> operation. Returns a list containing summarized details of the VPC endpoints. */
	export interface ListVpcEndpointsResponseFormProperties {

		/** Required */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVpcEndpointsResponseFormGroup() {
		return new FormGroup<ListVpcEndpointsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for response parameters to the <code><a>ListVpcEndpointsForDomain</a></code> operation. Returns a list containing summarized details of the VPC endpoints. */
	export interface ListVpcEndpointsForDomainResponse {

		/** Required */
		VpcEndpointSummaryList: Array<VpcEndpointSummary>;

		/** Required */
		NextToken: string;
	}

	/** Container for response parameters to the <code><a>ListVpcEndpointsForDomain</a></code> operation. Returns a list containing summarized details of the VPC endpoints. */
	export interface ListVpcEndpointsForDomainResponseFormProperties {

		/** Required */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVpcEndpointsForDomainResponseFormGroup() {
		return new FormGroup<ListVpcEndpointsForDomainResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>PurchaseReservedElasticsearchInstanceOffering</code> operation. */
	export interface PurchaseReservedElasticsearchInstanceOfferingResponse {
		ReservedElasticsearchInstanceId?: string;
		ReservationName?: string;
	}

	/** Represents the output of a <code>PurchaseReservedElasticsearchInstanceOffering</code> operation. */
	export interface PurchaseReservedElasticsearchInstanceOfferingResponseFormProperties {
		ReservedElasticsearchInstanceId: FormControl<string | null | undefined>,
		ReservationName: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseReservedElasticsearchInstanceOfferingResponseFormGroup() {
		return new FormGroup<PurchaseReservedElasticsearchInstanceOfferingResponseFormProperties>({
			ReservedElasticsearchInstanceId: new FormControl<string | null | undefined>(undefined),
			ReservationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation. Contains details of rejected inbound connection. */
	export interface RejectInboundCrossClusterSearchConnectionResponse {
		CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
	}

	/** The result of a <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation. Contains details of rejected inbound connection. */
	export interface RejectInboundCrossClusterSearchConnectionResponseFormProperties {
	}
	export function CreateRejectInboundCrossClusterSearchConnectionResponseFormGroup() {
		return new FormGroup<RejectInboundCrossClusterSearchConnectionResponseFormProperties>({
		});

	}


	/** Container for response parameters to the <code><a>RevokeVpcEndpointAccess</a></code> operation. The response body for this operation is empty. */
	export interface RevokeVpcEndpointAccessResponse {
	}

	/** Container for response parameters to the <code><a>RevokeVpcEndpointAccess</a></code> operation. The response body for this operation is empty. */
	export interface RevokeVpcEndpointAccessResponseFormProperties {
	}
	export function CreateRevokeVpcEndpointAccessResponseFormGroup() {
		return new FormGroup<RevokeVpcEndpointAccessResponseFormProperties>({
		});

	}


	/** The result of a <code>StartElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update. */
	export interface StartElasticsearchServiceSoftwareUpdateResponse {
		ServiceSoftwareOptions?: ServiceSoftwareOptions;
	}

	/** The result of a <code>StartElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update. */
	export interface StartElasticsearchServiceSoftwareUpdateResponseFormProperties {
	}
	export function CreateStartElasticsearchServiceSoftwareUpdateResponseFormGroup() {
		return new FormGroup<StartElasticsearchServiceSoftwareUpdateResponseFormProperties>({
		});

	}


	/** The result of an <code>UpdateElasticsearchDomain</code> request. Contains the status of the Elasticsearch domain being updated. */
	export interface UpdateElasticsearchDomainConfigResponse {

		/** Required */
		DomainConfig: ElasticsearchDomainConfig;
		DryRunResults?: DryRunResults;
	}

	/** The result of an <code>UpdateElasticsearchDomain</code> request. Contains the status of the Elasticsearch domain being updated. */
	export interface UpdateElasticsearchDomainConfigResponseFormProperties {
	}
	export function CreateUpdateElasticsearchDomainConfigResponseFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigResponseFormProperties>({
		});

	}

	export interface DryRunResults {
		DeploymentType?: string;
		Message?: string;
	}
	export interface DryRunResultsFormProperties {
		DeploymentType: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDryRunResultsFormGroup() {
		return new FormGroup<DryRunResultsFormProperties>({
			DeploymentType: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Container for response returned by <code> <a>UpdatePackage</a> </code> operation.  */
	export interface UpdatePackageResponse {
		PackageDetails?: PackageDetails;
	}

	/**  Container for response returned by <code> <a>UpdatePackage</a> </code> operation.  */
	export interface UpdatePackageResponseFormProperties {
	}
	export function CreateUpdatePackageResponseFormGroup() {
		return new FormGroup<UpdatePackageResponseFormProperties>({
		});

	}


	/** Contains the configuration and status of the VPC endpoint being updated. */
	export interface UpdateVpcEndpointResponse {

		/** Required */
		VpcEndpoint: VpcEndpoint;
	}

	/** Contains the configuration and status of the VPC endpoint being updated. */
	export interface UpdateVpcEndpointResponseFormProperties {
	}
	export function CreateUpdateVpcEndpointResponseFormGroup() {
		return new FormGroup<UpdateVpcEndpointResponseFormProperties>({
		});

	}


	/**  Container for response returned by <code> <a>UpgradeElasticsearchDomain</a> </code> operation.  */
	export interface UpgradeElasticsearchDomainResponse {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName?: string | null;
		TargetVersion?: string;
		PerformCheckOnly?: boolean | null;

		/** Specifies change details of the domain configuration change. */
		ChangeProgressDetails?: ChangeProgressDetails;
	}

	/**  Container for response returned by <code> <a>UpgradeElasticsearchDomain</a> </code> operation.  */
	export interface UpgradeElasticsearchDomainResponseFormProperties {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: FormControl<string | null | undefined>,
		TargetVersion: FormControl<string | null | undefined>,
		PerformCheckOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateUpgradeElasticsearchDomainResponseFormGroup() {
		return new FormGroup<UpgradeElasticsearchDomainResponseFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			TargetVersion: new FormControl<string | null | undefined>(undefined),
			PerformCheckOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation. */
	export interface AcceptInboundCrossClusterSearchConnectionRequest {
	}

	/** Container for the parameters to the <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation. */
	export interface AcceptInboundCrossClusterSearchConnectionRequestFormProperties {
	}
	export function CreateAcceptInboundCrossClusterSearchConnectionRequestFormGroup() {
		return new FormGroup<AcceptInboundCrossClusterSearchConnectionRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code><a>AddTags</a></code> operation. Specify the tags that you want to attach to the Elasticsearch domain. */
	export interface AddTagsRequest {

		/** Required */
		ARN: string;

		/** Required */
		TagList: Array<Tag>;
	}

	/** Container for the parameters to the <code><a>AddTags</a></code> operation. Specify the tags that you want to attach to the Elasticsearch domain. */
	export interface AddTagsRequestFormProperties {

		/** Required */
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsRequestFormGroup() {
		return new FormGroup<AddTagsRequestFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  List of limits that are specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> .  */
	export interface AdditionalLimit {
		LimitName?: string;
		LimitValues?: Array<string>;
	}

	/**  List of limits that are specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> .  */
	export interface AdditionalLimitFormProperties {
		LimitName: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalLimitFormGroup() {
		return new FormGroup<AdditionalLimitFormProperties>({
			LimitName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
	export interface AdvancedSecurityOptionsInput {
		Enabled?: boolean | null;
		InternalUserDatabaseEnabled?: boolean | null;
		MasterUserOptions?: MasterUserOptions;
		SAMLOptions?: SAMLOptionsInput;
		AnonymousAuthEnabled?: boolean | null;
	}

	/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
	export interface AdvancedSecurityOptionsInputFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		InternalUserDatabaseEnabled: FormControl<boolean | null | undefined>,
		AnonymousAuthEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdvancedSecurityOptionsInputFormGroup() {
		return new FormGroup<AdvancedSecurityOptionsInputFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			InternalUserDatabaseEnabled: new FormControl<boolean | null | undefined>(undefined),
			AnonymousAuthEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Container for request parameters to <code> <a>AssociatePackage</a> </code> operation.  */
	export interface AssociatePackageRequest {
	}

	/**  Container for request parameters to <code> <a>AssociatePackage</a> </code> operation.  */
	export interface AssociatePackageRequestFormProperties {
	}
	export function CreateAssociatePackageRequestFormGroup() {
		return new FormGroup<AssociatePackageRequestFormProperties>({
		});

	}


	/** Container for request parameters to the <code><a>AuthorizeVpcEndpointAccess</a></code> operation. Specifies the account to be permitted to manage VPC endpoints against the domain. */
	export interface AuthorizeVpcEndpointAccessRequest {

		/** Required */
		Account: string;
	}

	/** Container for request parameters to the <code><a>AuthorizeVpcEndpointAccess</a></code> operation. Specifies the account to be permitted to manage VPC endpoints against the domain. */
	export interface AuthorizeVpcEndpointAccessRequestFormProperties {

		/** Required */
		Account: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizeVpcEndpointAccessRequestFormGroup() {
		return new FormGroup<AuthorizeVpcEndpointAccessRequestFormProperties>({
			Account: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules. */
	export interface AutoTuneOptionsInput {
		DesiredState?: AutoTuneDesiredState;
		MaintenanceSchedules?: Array<AutoTuneMaintenanceSchedule>;
	}

	/** Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules. */
	export interface AutoTuneOptionsInputFormProperties {
		DesiredState: FormControl<AutoTuneDesiredState | null | undefined>,
	}
	export function CreateAutoTuneOptionsInputFormGroup() {
		return new FormGroup<AutoTuneOptionsInputFormProperties>({
			DesiredState: new FormControl<AutoTuneDesiredState | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code><a>CancelElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to cancel a service software update on. */
	export interface CancelElasticsearchServiceSoftwareUpdateRequest {

		/** Required */
		DomainName: string;
	}

	/** Container for the parameters to the <code><a>CancelElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to cancel a service software update on. */
	export interface CancelElasticsearchServiceSoftwareUpdateRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateCancelElasticsearchServiceSoftwareUpdateRequestFormGroup() {
		return new FormGroup<CancelElasticsearchServiceSoftwareUpdateRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
	export interface VPCOptions {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}

	/** Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
	export interface VPCOptionsFormProperties {
	}
	export function CreateVPCOptionsFormGroup() {
		return new FormGroup<VPCOptionsFormProperties>({
		});

	}

	export interface CreateElasticsearchDomainRequest {

		/** Required */
		DomainName: string;
		ElasticsearchVersion?: string;
		ElasticsearchClusterConfig?: ElasticsearchClusterConfig;
		EBSOptions?: EBSOptions;
		AccessPolicies?: string;
		SnapshotOptions?: SnapshotOptions;
		VPCOptions?: VPCOptions;
		CognitoOptions?: CognitoOptions;
		EncryptionAtRestOptions?: EncryptionAtRestOptions;
		NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
		AdvancedOptions?: AdvancedOptions;
		LogPublishingOptions?: LogPublishingOptions;
		DomainEndpointOptions?: DomainEndpointOptions;
		AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
		AutoTuneOptions?: AutoTuneOptionsInput;
		TagList?: Array<Tag>;
	}
	export interface CreateElasticsearchDomainRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		ElasticsearchVersion: FormControl<string | null | undefined>,
		AccessPolicies: FormControl<string | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainRequestFormGroup() {
		return new FormGroup<CreateElasticsearchDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ElasticsearchVersion: new FormControl<string | null | undefined>(undefined),
			AccessPolicies: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code><a>CreateOutboundCrossClusterSearchConnection</a></code> operation. */
	export interface CreateOutboundCrossClusterSearchConnectionRequest {

		/** Required */
		SourceDomainInfo: DomainInformation;

		/** Required */
		DestinationDomainInfo: DomainInformation;

		/** Required */
		ConnectionAlias: string;
	}

	/** Container for the parameters to the <code><a>CreateOutboundCrossClusterSearchConnection</a></code> operation. */
	export interface CreateOutboundCrossClusterSearchConnectionRequestFormProperties {

		/** Required */
		ConnectionAlias: FormControl<string | null | undefined>,
	}
	export function CreateCreateOutboundCrossClusterSearchConnectionRequestFormGroup() {
		return new FormGroup<CreateOutboundCrossClusterSearchConnectionRequestFormProperties>({
			ConnectionAlias: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code> */
	export interface PackageSource {
		S3BucketName?: string;
		S3Key?: string;
	}

	/** The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code> */
	export interface PackageSourceFormProperties {
		S3BucketName: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
	}
	export function CreatePackageSourceFormGroup() {
		return new FormGroup<PackageSourceFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Container for request parameters to <code> <a>CreatePackage</a> </code> operation.  */
	export interface CreatePackageRequest {

		/** Required */
		PackageName: string;

		/** Required */
		PackageType: PackageType;
		PackageDescription?: string;

		/** Required */
		PackageSource: PackageSource;
	}

	/**  Container for request parameters to <code> <a>CreatePackage</a> </code> operation.  */
	export interface CreatePackageRequestFormProperties {

		/** Required */
		PackageName: FormControl<string | null | undefined>,

		/** Required */
		PackageType: FormControl<PackageType | null | undefined>,
		PackageDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackageRequestFormGroup() {
		return new FormGroup<CreatePackageRequestFormProperties>({
			PackageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageType: new FormControl<PackageType | null | undefined>(undefined, [Validators.required]),
			PackageDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code><a>CreateVpcEndpointRequest</a></code> operation. */
	export interface CreateVpcEndpointRequest {

		/** Required */
		DomainArn: string;

		/** Required */
		VpcOptions: VPCOptions;
		ClientToken?: string;
	}

	/** Container for the parameters to the <code><a>CreateVpcEndpointRequest</a></code> operation. */
	export interface CreateVpcEndpointRequestFormProperties {

		/** Required */
		DomainArn: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateVpcEndpointRequestFormGroup() {
		return new FormGroup<CreateVpcEndpointRequestFormProperties>({
			DomainArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code><a>DeleteElasticsearchDomain</a></code> operation. Specifies the name of the Elasticsearch domain that you want to delete. */
	export interface DeleteElasticsearchDomainRequest {
	}

	/** Container for the parameters to the <code><a>DeleteElasticsearchDomain</a></code> operation. Specifies the name of the Elasticsearch domain that you want to delete. */
	export interface DeleteElasticsearchDomainRequestFormProperties {
	}
	export function CreateDeleteElasticsearchDomainRequestFormGroup() {
		return new FormGroup<DeleteElasticsearchDomainRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation. */
	export interface DeleteInboundCrossClusterSearchConnectionRequest {
	}

	/** Container for the parameters to the <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation. */
	export interface DeleteInboundCrossClusterSearchConnectionRequestFormProperties {
	}
	export function CreateDeleteInboundCrossClusterSearchConnectionRequestFormGroup() {
		return new FormGroup<DeleteInboundCrossClusterSearchConnectionRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation. */
	export interface DeleteOutboundCrossClusterSearchConnectionRequest {
	}

	/** Container for the parameters to the <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation. */
	export interface DeleteOutboundCrossClusterSearchConnectionRequestFormProperties {
	}
	export function CreateDeleteOutboundCrossClusterSearchConnectionRequestFormGroup() {
		return new FormGroup<DeleteOutboundCrossClusterSearchConnectionRequestFormProperties>({
		});

	}


	/**  Container for request parameters to <code> <a>DeletePackage</a> </code> operation.  */
	export interface DeletePackageRequest {
	}

	/**  Container for request parameters to <code> <a>DeletePackage</a> </code> operation.  */
	export interface DeletePackageRequestFormProperties {
	}
	export function CreateDeletePackageRequestFormGroup() {
		return new FormGroup<DeletePackageRequestFormProperties>({
		});

	}


	/** Deletes an Amazon OpenSearch Service-managed interface VPC endpoint. */
	export interface DeleteVpcEndpointRequest {
	}

	/** Deletes an Amazon OpenSearch Service-managed interface VPC endpoint. */
	export interface DeleteVpcEndpointRequestFormProperties {
	}
	export function CreateDeleteVpcEndpointRequestFormGroup() {
		return new FormGroup<DeleteVpcEndpointRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code>DescribeDomainAutoTunes</code> operation. */
	export interface DescribeDomainAutoTunesRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** Container for the parameters to the <code>DescribeDomainAutoTunes</code> operation. */
	export interface DescribeDomainAutoTunesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDomainAutoTunesRequestFormGroup() {
		return new FormGroup<DescribeDomainAutoTunesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code>DescribeDomainChangeProgress</code> operation. Specifies the domain name and optional change specific identity for which you want progress information.  */
	export interface DescribeDomainChangeProgressRequest {
	}

	/** Container for the parameters to the <code>DescribeDomainChangeProgress</code> operation. Specifies the domain name and optional change specific identity for which you want progress information.  */
	export interface DescribeDomainChangeProgressRequestFormProperties {
	}
	export function CreateDescribeDomainChangeProgressRequestFormGroup() {
		return new FormGroup<DescribeDomainChangeProgressRequestFormProperties>({
		});

	}


	/**  Container for the parameters to the <code>DescribeElasticsearchDomainConfig</code> operation. Specifies the domain name for which you want configuration information. */
	export interface DescribeElasticsearchDomainConfigRequest {
	}

	/**  Container for the parameters to the <code>DescribeElasticsearchDomainConfig</code> operation. Specifies the domain name for which you want configuration information. */
	export interface DescribeElasticsearchDomainConfigRequestFormProperties {
	}
	export function CreateDescribeElasticsearchDomainConfigRequestFormGroup() {
		return new FormGroup<DescribeElasticsearchDomainConfigRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code><a>DescribeElasticsearchDomain</a></code> operation. */
	export interface DescribeElasticsearchDomainRequest {
	}

	/** Container for the parameters to the <code><a>DescribeElasticsearchDomain</a></code> operation. */
	export interface DescribeElasticsearchDomainRequestFormProperties {
	}
	export function CreateDescribeElasticsearchDomainRequestFormGroup() {
		return new FormGroup<DescribeElasticsearchDomainRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code><a>DescribeElasticsearchDomains</a></code> operation. By default, the API returns the status of all Elasticsearch domains. */
	export interface DescribeElasticsearchDomainsRequest {

		/** Required */
		DomainNames: Array<string>;
	}

	/** Container for the parameters to the <code><a>DescribeElasticsearchDomains</a></code> operation. By default, the API returns the status of all Elasticsearch domains. */
	export interface DescribeElasticsearchDomainsRequestFormProperties {
	}
	export function CreateDescribeElasticsearchDomainsRequestFormGroup() {
		return new FormGroup<DescribeElasticsearchDomainsRequestFormProperties>({
		});

	}


	/**  Container for the parameters to <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation.  */
	export interface DescribeElasticsearchInstanceTypeLimitsRequest {
	}

	/**  Container for the parameters to <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation.  */
	export interface DescribeElasticsearchInstanceTypeLimitsRequestFormProperties {
	}
	export function CreateDescribeElasticsearchInstanceTypeLimitsRequestFormGroup() {
		return new FormGroup<DescribeElasticsearchInstanceTypeLimitsRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code><a>DescribeInboundCrossClusterSearchConnections</a></code> operation. */
	export interface DescribeInboundCrossClusterSearchConnectionsRequest {
		Filters?: Array<Filter>;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** Container for the parameters to the <code><a>DescribeInboundCrossClusterSearchConnections</a></code> operation. */
	export interface DescribeInboundCrossClusterSearchConnectionsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInboundCrossClusterSearchConnectionsRequestFormGroup() {
		return new FormGroup<DescribeInboundCrossClusterSearchConnectionsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> operation. */
	export interface DescribeOutboundCrossClusterSearchConnectionsRequest {
		Filters?: Array<Filter>;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** Container for the parameters to the <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> operation. */
	export interface DescribeOutboundCrossClusterSearchConnectionsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOutboundCrossClusterSearchConnectionsRequestFormGroup() {
		return new FormGroup<DescribeOutboundCrossClusterSearchConnectionsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Container for request parameters to <code> <a>DescribePackage</a> </code> operation.  */
	export interface DescribePackagesRequest {
		Filters?: Array<DescribePackagesFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/**  Container for request parameters to <code> <a>DescribePackage</a> </code> operation.  */
	export interface DescribePackagesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePackagesRequestFormGroup() {
		return new FormGroup<DescribePackagesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for parameters to <code>DescribeReservedElasticsearchInstanceOfferings</code> */
	export interface DescribeReservedElasticsearchInstanceOfferingsRequest {
	}

	/** Container for parameters to <code>DescribeReservedElasticsearchInstanceOfferings</code> */
	export interface DescribeReservedElasticsearchInstanceOfferingsRequestFormProperties {
	}
	export function CreateDescribeReservedElasticsearchInstanceOfferingsRequestFormGroup() {
		return new FormGroup<DescribeReservedElasticsearchInstanceOfferingsRequestFormProperties>({
		});

	}


	/** Container for parameters to <code>DescribeReservedElasticsearchInstances</code> */
	export interface DescribeReservedElasticsearchInstancesRequest {
	}

	/** Container for parameters to <code>DescribeReservedElasticsearchInstances</code> */
	export interface DescribeReservedElasticsearchInstancesRequestFormProperties {
	}
	export function CreateDescribeReservedElasticsearchInstancesRequestFormGroup() {
		return new FormGroup<DescribeReservedElasticsearchInstancesRequestFormProperties>({
		});

	}


	/** Container for request parameters to the <code><a>DescribeVpcEndpoints</a></code> operation. Specifies the list of VPC endpoints to be described. */
	export interface DescribeVpcEndpointsRequest {

		/** Required */
		VpcEndpointIds: Array<string>;
	}

	/** Container for request parameters to the <code><a>DescribeVpcEndpoints</a></code> operation. Specifies the list of VPC endpoints to be described. */
	export interface DescribeVpcEndpointsRequestFormProperties {
	}
	export function CreateDescribeVpcEndpointsRequestFormGroup() {
		return new FormGroup<DescribeVpcEndpointsRequestFormProperties>({
		});

	}


	/**  Container for request parameters to <code> <a>DissociatePackage</a> </code> operation.  */
	export interface DissociatePackageRequest {
	}

	/**  Container for request parameters to <code> <a>DissociatePackage</a> </code> operation.  */
	export interface DissociatePackageRequestFormProperties {
	}
	export function CreateDissociatePackageRequestFormGroup() {
		return new FormGroup<DissociatePackageRequestFormProperties>({
		});

	}


	/**  Container for request parameters to <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation.  */
	export interface GetCompatibleElasticsearchVersionsRequest {
	}

	/**  Container for request parameters to <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation.  */
	export interface GetCompatibleElasticsearchVersionsRequestFormProperties {
	}
	export function CreateGetCompatibleElasticsearchVersionsRequestFormGroup() {
		return new FormGroup<GetCompatibleElasticsearchVersionsRequestFormProperties>({
		});

	}


	/**  Container for request parameters to <code> <a>GetPackageVersionHistory</a> </code> operation.  */
	export interface GetPackageVersionHistoryRequest {
	}

	/**  Container for request parameters to <code> <a>GetPackageVersionHistory</a> </code> operation.  */
	export interface GetPackageVersionHistoryRequestFormProperties {
	}
	export function CreateGetPackageVersionHistoryRequestFormGroup() {
		return new FormGroup<GetPackageVersionHistoryRequestFormProperties>({
		});

	}


	/**  Container for request parameters to <code> <a>GetUpgradeHistory</a> </code> operation.  */
	export interface GetUpgradeHistoryRequest {
	}

	/**  Container for request parameters to <code> <a>GetUpgradeHistory</a> </code> operation.  */
	export interface GetUpgradeHistoryRequestFormProperties {
	}
	export function CreateGetUpgradeHistoryRequestFormGroup() {
		return new FormGroup<GetUpgradeHistoryRequestFormProperties>({
		});

	}


	/**  Container for request parameters to <code> <a>GetUpgradeStatus</a> </code> operation.  */
	export interface GetUpgradeStatusRequest {
	}

	/**  Container for request parameters to <code> <a>GetUpgradeStatus</a> </code> operation.  */
	export interface GetUpgradeStatusRequestFormProperties {
	}
	export function CreateGetUpgradeStatusRequestFormGroup() {
		return new FormGroup<GetUpgradeStatusRequestFormProperties>({
		});

	}


	/**  InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType.  */
	export interface InstanceCountLimits {

		/** Minimum number of Instances that can be instantiated for given InstanceType. */
		MinimumInstanceCount?: number | null;

		/** Maximum number of Instances that can be instantiated for given InstanceType. */
		MaximumInstanceCount?: number | null;
	}

	/**  InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType.  */
	export interface InstanceCountLimitsFormProperties {

		/** Minimum number of Instances that can be instantiated for given InstanceType. */
		MinimumInstanceCount: FormControl<number | null | undefined>,

		/** Maximum number of Instances that can be instantiated for given InstanceType. */
		MaximumInstanceCount: FormControl<number | null | undefined>,
	}
	export function CreateInstanceCountLimitsFormGroup() {
		return new FormGroup<InstanceCountLimitsFormProperties>({
			MinimumInstanceCount: new FormControl<number | null | undefined>(undefined),
			MaximumInstanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** InstanceLimits represents the list of instance related attributes that are available for given InstanceType.  */
	export interface InstanceLimits {

		/** InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType. */
		InstanceCountLimits?: InstanceCountLimits;
	}

	/** InstanceLimits represents the list of instance related attributes that are available for given InstanceType.  */
	export interface InstanceLimitsFormProperties {
	}
	export function CreateInstanceLimitsFormGroup() {
		return new FormGroup<InstanceLimitsFormProperties>({
		});

	}


	/** StorageTypes represents the list of storage related types and their attributes that are available for given InstanceType.  */
	export interface StorageType {

		/** Type of the storage. List of available storage options: <ol> <li>instance</li> Inbuilt storage available for the given Instance <li>ebs</li> Elastic block storage that would be attached to the given Instance </ol> */
		StorageTypeName?: string | null;

		/** SubType of the given storage type. List of available sub-storage options: For "instance" storageType we wont have any storageSubType, in case of "ebs" storageType we will have following valid storageSubTypes <ol> <li>standard</li> <li>gp2</li> <li>gp3</li> <li>io1</li> </ol> Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options. */
		StorageSubTypeName?: string | null;
		StorageTypeLimits?: Array<StorageTypeLimit>;
	}

	/** StorageTypes represents the list of storage related types and their attributes that are available for given InstanceType.  */
	export interface StorageTypeFormProperties {

		/** Type of the storage. List of available storage options: <ol> <li>instance</li> Inbuilt storage available for the given Instance <li>ebs</li> Elastic block storage that would be attached to the given Instance </ol> */
		StorageTypeName: FormControl<string | null | undefined>,

		/** SubType of the given storage type. List of available sub-storage options: For "instance" storageType we wont have any storageSubType, in case of "ebs" storageType we will have following valid storageSubTypes <ol> <li>standard</li> <li>gp2</li> <li>gp3</li> <li>io1</li> </ol> Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options. */
		StorageSubTypeName: FormControl<string | null | undefined>,
	}
	export function CreateStorageTypeFormGroup() {
		return new FormGroup<StorageTypeFormProperties>({
			StorageTypeName: new FormControl<string | null | undefined>(undefined),
			StorageSubTypeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Limits that are applicable for given storage type.  */
	export interface StorageTypeLimit {
		LimitName?: string;
		LimitValues?: Array<string>;
	}

	/** Limits that are applicable for given storage type.  */
	export interface StorageTypeLimitFormProperties {
		LimitName: FormControl<string | null | undefined>,
	}
	export function CreateStorageTypeLimitFormGroup() {
		return new FormGroup<StorageTypeLimitFormProperties>({
			LimitName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Limits for given InstanceType and for each of it's role. <br/> Limits contains following <code> <a>StorageTypes,</a> </code> <code> <a>InstanceLimits</a> </code> and <code> <a>AdditionalLimits</a> </code>  */
	export interface Limits {
		StorageTypes?: Array<StorageType>;

		/** InstanceLimits represents the list of instance related attributes that are available for given InstanceType. */
		InstanceLimits?: InstanceLimits;
		AdditionalLimits?: Array<AdditionalLimit>;
	}

	/**  Limits for given InstanceType and for each of it's role. <br/> Limits contains following <code> <a>StorageTypes,</a> </code> <code> <a>InstanceLimits</a> </code> and <code> <a>AdditionalLimits</a> </code>  */
	export interface LimitsFormProperties {
	}
	export function CreateLimitsFormGroup() {
		return new FormGroup<LimitsFormProperties>({
		});

	}


	/**  Container for the parameters to the <code><a>ListDomainNames</a></code> operation. */
	export interface ListDomainNamesRequest {
	}

	/**  Container for the parameters to the <code><a>ListDomainNames</a></code> operation. */
	export interface ListDomainNamesRequestFormProperties {
	}
	export function CreateListDomainNamesRequestFormGroup() {
		return new FormGroup<ListDomainNamesRequestFormProperties>({
		});

	}


	/**  Container for request parameters to <code> <a>ListDomainsForPackage</a> </code> operation.  */
	export interface ListDomainsForPackageRequest {
	}

	/**  Container for request parameters to <code> <a>ListDomainsForPackage</a> </code> operation.  */
	export interface ListDomainsForPackageRequestFormProperties {
	}
	export function CreateListDomainsForPackageRequestFormGroup() {
		return new FormGroup<ListDomainsForPackageRequestFormProperties>({
		});

	}


	/**  Container for the parameters to the <code> <a>ListElasticsearchInstanceTypes</a> </code> operation.  */
	export interface ListElasticsearchInstanceTypesRequest {
	}

	/**  Container for the parameters to the <code> <a>ListElasticsearchInstanceTypes</a> </code> operation.  */
	export interface ListElasticsearchInstanceTypesRequestFormProperties {
	}
	export function CreateListElasticsearchInstanceTypesRequestFormGroup() {
		return new FormGroup<ListElasticsearchInstanceTypesRequestFormProperties>({
		});

	}


	/** <p> Container for the parameters to the <code> <a>ListElasticsearchVersions</a> </code> operation. <p> Use <code> <a>MaxResults</a> </code> to control the maximum number of results to retrieve in a single call. </p> <p> Use <code> <a>NextToken</a> </code> in response to retrieve more results. If the received response does not contain a NextToken, then there are no more results to retrieve. </p> </p> */
	export interface ListElasticsearchVersionsRequest {
	}

	/** <p> Container for the parameters to the <code> <a>ListElasticsearchVersions</a> </code> operation. <p> Use <code> <a>MaxResults</a> </code> to control the maximum number of results to retrieve in a single call. </p> <p> Use <code> <a>NextToken</a> </code> in response to retrieve more results. If the received response does not contain a NextToken, then there are no more results to retrieve. </p> </p> */
	export interface ListElasticsearchVersionsRequestFormProperties {
	}
	export function CreateListElasticsearchVersionsRequestFormGroup() {
		return new FormGroup<ListElasticsearchVersionsRequestFormProperties>({
		});

	}


	/**  Container for request parameters to <code> <a>ListPackagesForDomain</a> </code> operation.  */
	export interface ListPackagesForDomainRequest {
	}

	/**  Container for request parameters to <code> <a>ListPackagesForDomain</a> </code> operation.  */
	export interface ListPackagesForDomainRequestFormProperties {
	}
	export function CreateListPackagesForDomainRequestFormGroup() {
		return new FormGroup<ListPackagesForDomainRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code><a>ListTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view are attached. */
	export interface ListTagsRequest {
	}

	/** Container for the parameters to the <code><a>ListTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view are attached. */
	export interface ListTagsRequestFormProperties {
	}
	export function CreateListTagsRequestFormGroup() {
		return new FormGroup<ListTagsRequestFormProperties>({
		});

	}


	/** Retrieves information about each principal that is allowed to access a given Amazon OpenSearch Service domain through the use of an interface VPC endpoint */
	export interface ListVpcEndpointAccessRequest {
	}

	/** Retrieves information about each principal that is allowed to access a given Amazon OpenSearch Service domain through the use of an interface VPC endpoint */
	export interface ListVpcEndpointAccessRequestFormProperties {
	}
	export function CreateListVpcEndpointAccessRequestFormGroup() {
		return new FormGroup<ListVpcEndpointAccessRequestFormProperties>({
		});

	}


	/** Container for request parameters to the <code><a>ListVpcEndpointsForDomain</a></code> operation. Specifies the domain whose VPC endpoints will be listed. */
	export interface ListVpcEndpointsForDomainRequest {
	}

	/** Container for request parameters to the <code><a>ListVpcEndpointsForDomain</a></code> operation. Specifies the domain whose VPC endpoints will be listed. */
	export interface ListVpcEndpointsForDomainRequestFormProperties {
	}
	export function CreateListVpcEndpointsForDomainRequestFormGroup() {
		return new FormGroup<ListVpcEndpointsForDomainRequestFormProperties>({
		});

	}


	/** Container for request parameters to the <code><a>ListVpcEndpoints</a></code> operation. */
	export interface ListVpcEndpointsRequest {
	}

	/** Container for request parameters to the <code><a>ListVpcEndpoints</a></code> operation. */
	export interface ListVpcEndpointsRequestFormProperties {
	}
	export function CreateListVpcEndpointsRequestFormGroup() {
		return new FormGroup<ListVpcEndpointsRequestFormProperties>({
		});

	}


	/** Type of Log File, it can be one of the following: <ul> <li>INDEX_SLOW_LOGS: Index slow logs contain insert requests that took more time than configured index query log threshold to execute.</li> <li>SEARCH_SLOW_LOGS: Search slow logs contain search queries that took more time than configured search query log threshold to execute.</li> <li>ES_APPLICATION_LOGS: Elasticsearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.</li> <li>AUDIT_LOGS: Audit logs contain records of user requests for access from the domain.</li> </ul>  */
	export enum LogType { INDEX_SLOW_LOGS = 'INDEX_SLOW_LOGS', SEARCH_SLOW_LOGS = 'SEARCH_SLOW_LOGS', ES_APPLICATION_LOGS = 'ES_APPLICATION_LOGS', AUDIT_LOGS = 'AUDIT_LOGS' }


	/** Container for parameters to <code>PurchaseReservedElasticsearchInstanceOffering</code> */
	export interface PurchaseReservedElasticsearchInstanceOfferingRequest {

		/** Required */
		ReservedElasticsearchInstanceOfferingId: string;

		/** Required */
		ReservationName: string;
		InstanceCount?: number | null;
	}

	/** Container for parameters to <code>PurchaseReservedElasticsearchInstanceOffering</code> */
	export interface PurchaseReservedElasticsearchInstanceOfferingRequestFormProperties {

		/** Required */
		ReservedElasticsearchInstanceOfferingId: FormControl<string | null | undefined>,

		/** Required */
		ReservationName: FormControl<string | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
	}
	export function CreatePurchaseReservedElasticsearchInstanceOfferingRequestFormGroup() {
		return new FormGroup<PurchaseReservedElasticsearchInstanceOfferingRequestFormProperties>({
			ReservedElasticsearchInstanceOfferingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReservationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation. */
	export interface RejectInboundCrossClusterSearchConnectionRequest {
	}

	/** Container for the parameters to the <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation. */
	export interface RejectInboundCrossClusterSearchConnectionRequestFormProperties {
	}
	export function CreateRejectInboundCrossClusterSearchConnectionRequestFormGroup() {
		return new FormGroup<RejectInboundCrossClusterSearchConnectionRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code><a>RemoveTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain from which you want to remove the specified <code>TagKey</code>. */
	export interface RemoveTagsRequest {

		/** Required */
		ARN: string;

		/** Required */
		TagKeys: Array<string>;
	}

	/** Container for the parameters to the <code><a>RemoveTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain from which you want to remove the specified <code>TagKey</code>. */
	export interface RemoveTagsRequestFormProperties {

		/** Required */
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsRequestFormGroup() {
		return new FormGroup<RemoveTagsRequestFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Revokes access to an Amazon OpenSearch Service domain that was provided through an interface VPC endpoint. */
	export interface RevokeVpcEndpointAccessRequest {

		/** Required */
		Account: string;
	}

	/** Revokes access to an Amazon OpenSearch Service domain that was provided through an interface VPC endpoint. */
	export interface RevokeVpcEndpointAccessRequestFormProperties {

		/** Required */
		Account: FormControl<string | null | undefined>,
	}
	export function CreateRevokeVpcEndpointAccessRequestFormGroup() {
		return new FormGroup<RevokeVpcEndpointAccessRequestFormProperties>({
			Account: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for the parameters to the <code><a>StartElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to schedule a service software update on. */
	export interface StartElasticsearchServiceSoftwareUpdateRequest {

		/** Required */
		DomainName: string;
	}

	/** Container for the parameters to the <code><a>StartElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to schedule a service software update on. */
	export interface StartElasticsearchServiceSoftwareUpdateRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateStartElasticsearchServiceSoftwareUpdateRequestFormGroup() {
		return new FormGroup<StartElasticsearchServiceSoftwareUpdateRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster. */
	export interface UpdateElasticsearchDomainConfigRequest {
		ElasticsearchClusterConfig?: ElasticsearchClusterConfig;
		EBSOptions?: EBSOptions;
		SnapshotOptions?: SnapshotOptions;
		VPCOptions?: VPCOptions;
		CognitoOptions?: CognitoOptions;
		AdvancedOptions?: AdvancedOptions;
		AccessPolicies?: string;
		LogPublishingOptions?: LogPublishingOptions;
		DomainEndpointOptions?: DomainEndpointOptions;
		AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
		NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
		EncryptionAtRestOptions?: EncryptionAtRestOptions;
		AutoTuneOptions?: AutoTuneOptions;
		DryRun?: boolean | null;
	}

	/** Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster. */
	export interface UpdateElasticsearchDomainConfigRequestFormProperties {
		AccessPolicies: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigRequestFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigRequestFormProperties>({
			AccessPolicies: new FormControl<string | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Container for request parameters to <code> <a>UpdatePackage</a> </code> operation.  */
	export interface UpdatePackageRequest {

		/** Required */
		PackageID: string;

		/**
		 * The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code>
		 * Required
		 */
		PackageSource: PackageSource;
		PackageDescription?: string;
		CommitMessage?: string;
	}

	/**  Container for request parameters to <code> <a>UpdatePackage</a> </code> operation.  */
	export interface UpdatePackageRequestFormProperties {

		/** Required */
		PackageID: FormControl<string | null | undefined>,
		PackageDescription: FormControl<string | null | undefined>,
		CommitMessage: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePackageRequestFormGroup() {
		return new FormGroup<UpdatePackageRequestFormProperties>({
			PackageID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageDescription: new FormControl<string | null | undefined>(undefined),
			CommitMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Modifies an Amazon OpenSearch Service-managed interface VPC endpoint. */
	export interface UpdateVpcEndpointRequest {

		/** Required */
		VpcEndpointId: string;

		/** Required */
		VpcOptions: VPCOptions;
	}

	/** Modifies an Amazon OpenSearch Service-managed interface VPC endpoint. */
	export interface UpdateVpcEndpointRequestFormProperties {

		/** Required */
		VpcEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVpcEndpointRequestFormGroup() {
		return new FormGroup<UpdateVpcEndpointRequestFormProperties>({
			VpcEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Container for request parameters to <code> <a>UpgradeElasticsearchDomain</a> </code> operation.  */
	export interface UpgradeElasticsearchDomainRequest {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: string;

		/** Required */
		TargetVersion: string;
		PerformCheckOnly?: boolean | null;
	}

	/**  Container for request parameters to <code> <a>UpgradeElasticsearchDomain</a> </code> operation.  */
	export interface UpgradeElasticsearchDomainRequestFormProperties {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		TargetVersion: FormControl<string | null | undefined>,
		PerformCheckOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateUpgradeElasticsearchDomainRequestFormGroup() {
		return new FormGroup<UpgradeElasticsearchDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			TargetVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PerformCheckOnly: new FormControl<boolean | null | undefined>(undefined),
		});

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
		 * Provides access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint.
		 * Post 2015-01-01/es/domain/{DomainName}/authorizeVpcEndpointAccess
		 * @param {string} DomainName The name of the OpenSearch Service domain to provide access to.
		 * @return {AuthorizeVpcEndpointAccessResponse} Success
		 */
		AuthorizeVpcEndpointAccess(DomainName: string, requestBody: AuthorizeVpcEndpointAccessPostBody): Observable<AuthorizeVpcEndpointAccessResponse> {
			return this.http.post<AuthorizeVpcEndpointAccessResponse>(this.baseUri + '2015-01-01/es/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/authorizeVpcEndpointAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Creates an Amazon OpenSearch Service-managed VPC endpoint.
		 * Post 2015-01-01/es/vpcEndpoints
		 * @return {CreateVpcEndpointResponse} Success
		 */
		CreateVpcEndpoint(requestBody: CreateVpcEndpointPostBody): Observable<CreateVpcEndpointResponse> {
			return this.http.post<CreateVpcEndpointResponse>(this.baseUri + '2015-01-01/es/vpcEndpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all Amazon OpenSearch Service-managed VPC endpoints in the current account and Region.
		 * Get 2015-01-01/es/vpcEndpoints
		 * @param {string} nextToken Identifier to allow retrieval of paginated results.
		 * @return {ListVpcEndpointsResponse} Success
		 */
		ListVpcEndpoints(nextToken: string | null | undefined): Observable<ListVpcEndpointsResponse> {
			return this.http.get<ListVpcEndpointsResponse>(this.baseUri + '2015-01-01/es/vpcEndpoints?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
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
		 * Deletes an Amazon OpenSearch Service-managed interface VPC endpoint.
		 * Delete 2015-01-01/es/vpcEndpoints/{VpcEndpointId}
		 * @param {string} VpcEndpointId The unique identifier of the endpoint to be deleted.
		 * @return {DeleteVpcEndpointResponse} Success
		 */
		DeleteVpcEndpoint(VpcEndpointId: string): Observable<DeleteVpcEndpointResponse> {
			return this.http.delete<DeleteVpcEndpointResponse>(this.baseUri + '2015-01-01/es/vpcEndpoints/' + (VpcEndpointId == null ? '' : encodeURIComponent(VpcEndpointId)), {});
		}

		/**
		 * Provides scheduled Auto-Tune action details for the Elasticsearch domain, such as Auto-Tune action type, description, severity, and scheduled date.
		 * Get 2015-01-01/es/domain/{DomainName}/autoTunes
		 * @param {string} DomainName Specifies the domain name for which you want Auto-Tune action details.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeDomainAutoTunesResponse} Success
		 */
		DescribeDomainAutoTunes(DomainName: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<DescribeDomainAutoTunesResponse> {
			return this.http.get<DescribeDomainAutoTunesResponse>(this.baseUri + '2015-01-01/es/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/autoTunes&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns information about the current blue/green deployment happening on a domain, including a change ID, status, and progress stages.
		 * Get 2015-01-01/es/domain/{DomainName}/progress
		 * @param {string} DomainName The domain you want to get the progress information about.
		 * @param {string} changeid The specific change ID for which you want to get progress information. This is an optional parameter. If omitted, the service returns information about the most recent configuration change. 
		 * @return {DescribeDomainChangeProgressResponse} Success
		 */
		DescribeDomainChangeProgress(DomainName: string, changeid: string | null | undefined): Observable<DescribeDomainChangeProgressResponse> {
			return this.http.get<DescribeDomainChangeProgressResponse>(this.baseUri + '2015-01-01/es/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/progress&changeid=' + (changeid == null ? '' : encodeURIComponent(changeid)), {});
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
		 * @param {ESPartitionInstanceType} InstanceType  The instance type for an Elasticsearch cluster for which Elasticsearch <code> <a>Limits</a> </code> are needed. 
		 * @param {string} ElasticsearchVersion  Version of Elasticsearch for which <code> <a>Limits</a> </code> are needed. 
		 * @return {DescribeElasticsearchInstanceTypeLimitsResponse} Success
		 */
		DescribeElasticsearchInstanceTypeLimits(domainName: string | null | undefined, InstanceType: ESPartitionInstanceType, ElasticsearchVersion: string): Observable<DescribeElasticsearchInstanceTypeLimitsResponse> {
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
		 * Describes one or more Amazon OpenSearch Service-managed VPC endpoints.
		 * Post 2015-01-01/es/vpcEndpoints/describe
		 * @return {DescribeVpcEndpointsResponse} Success
		 */
		DescribeVpcEndpoints(requestBody: DescribeVpcEndpointsPostBody): Observable<DescribeVpcEndpointsResponse> {
			return this.http.post<DescribeVpcEndpointsResponse>(this.baseUri + '2015-01-01/es/vpcEndpoints/describe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Returns a list of versions of the package, along with their creation time and commit message.
		 * Get 2015-01-01/packages/{PackageID}/history
		 * @param {string} PackageID Returns an audit history of versions of the package.
		 * @param {number} maxResults Limits results to a maximum number of versions.
		 * @param {string} nextToken Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetPackageVersionHistoryResponse} Success
		 */
		GetPackageVersionHistory(PackageID: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetPackageVersionHistoryResponse> {
			return this.http.get<GetPackageVersionHistoryResponse>(this.baseUri + '2015-01-01/packages/' + (PackageID == null ? '' : encodeURIComponent(PackageID)) + '/history&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
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
		 * @param {EngineType} engineType  Optional parameter to filter the output by domain engine type. Acceptable values are 'Elasticsearch' and 'OpenSearch'. 
		 * @return {ListDomainNamesResponse} Success
		 */
		ListDomainNames(engineType: EngineType | null | undefined): Observable<ListDomainNamesResponse> {
			return this.http.get<ListDomainNamesResponse>(this.baseUri + '2015-01-01/domain?engineType=' + engineType, {});
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
		 * Retrieves information about each principal that is allowed to access a given Amazon OpenSearch Service domain through the use of an interface VPC endpoint.
		 * Get 2015-01-01/es/domain/{DomainName}/listVpcEndpointAccess
		 * @param {string} DomainName The name of the OpenSearch Service domain to retrieve access information for.
		 * @param {string} nextToken Provides an identifier to allow retrieval of paginated results.
		 * @return {ListVpcEndpointAccessResponse} Success
		 */
		ListVpcEndpointAccess(DomainName: string, nextToken: string | null | undefined): Observable<ListVpcEndpointAccessResponse> {
			return this.http.get<ListVpcEndpointAccessResponse>(this.baseUri + '2015-01-01/es/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/listVpcEndpointAccess&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Retrieves all Amazon OpenSearch Service-managed VPC endpoints associated with a particular domain.
		 * Get 2015-01-01/es/domain/{DomainName}/vpcEndpoints
		 * @param {string} DomainName Name of the ElasticSearch domain whose VPC endpoints are to be listed.
		 * @param {string} nextToken Provides an identifier to allow retrieval of paginated results.
		 * @return {ListVpcEndpointsForDomainResponse} Success
		 */
		ListVpcEndpointsForDomain(DomainName: string, nextToken: string | null | undefined): Observable<ListVpcEndpointsForDomainResponse> {
			return this.http.get<ListVpcEndpointsForDomainResponse>(this.baseUri + '2015-01-01/es/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/vpcEndpoints&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
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
		 * Revokes access to an Amazon OpenSearch Service domain that was provided through an interface VPC endpoint.
		 * Post 2015-01-01/es/domain/{DomainName}/revokeVpcEndpointAccess
		 * @param {string} DomainName The name of the OpenSearch Service domain.
		 * @return {RevokeVpcEndpointAccessResponse} Success
		 */
		RevokeVpcEndpointAccess(DomainName: string, requestBody: RevokeVpcEndpointAccessPostBody): Observable<RevokeVpcEndpointAccessResponse> {
			return this.http.post<RevokeVpcEndpointAccessResponse>(this.baseUri + '2015-01-01/es/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/revokeVpcEndpointAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Updates a package for use with Amazon ES domains.
		 * Post 2015-01-01/packages/update
		 * @return {UpdatePackageResponse} Success
		 */
		UpdatePackage(requestBody: UpdatePackagePostBody): Observable<UpdatePackageResponse> {
			return this.http.post<UpdatePackageResponse>(this.baseUri + '2015-01-01/packages/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies an Amazon OpenSearch Service-managed interface VPC endpoint.
		 * Post 2015-01-01/es/vpcEndpoints/update
		 * @return {UpdateVpcEndpointResponse} Success
		 */
		UpdateVpcEndpoint(requestBody: UpdateVpcEndpointPostBody): Observable<UpdateVpcEndpointResponse> {
			return this.http.post<UpdateVpcEndpointResponse>(this.baseUri + '2015-01-01/es/vpcEndpoints/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
	export interface AddTagsPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
		 * Required
		 */
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsPostBodyFormGroup() {
		return new FormGroup<AddTagsPostBodyFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AuthorizeVpcEndpointAccessPostBody {

		/**
		 * The account ID to grant access to.
		 * Required
		 */
		Account: string;
	}
	export interface AuthorizeVpcEndpointAccessPostBodyFormProperties {

		/**
		 * The account ID to grant access to.
		 * Required
		 */
		Account: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizeVpcEndpointAccessPostBodyFormGroup() {
		return new FormGroup<AuthorizeVpcEndpointAccessPostBodyFormProperties>({
			Account: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]+$')]),
		});

	}

	export interface CancelElasticsearchServiceSoftwareUpdatePostBody {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: string;
	}
	export interface CancelElasticsearchServiceSoftwareUpdatePostBodyFormProperties {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateCancelElasticsearchServiceSoftwareUpdatePostBodyFormGroup() {
		return new FormGroup<CancelElasticsearchServiceSoftwareUpdatePostBodyFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}

	export interface CreateElasticsearchDomainPostBody {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: string;

		/** String of format X.Y to specify version for the Elasticsearch domain eg. "1.5" or "2.3". For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. */
		ElasticsearchVersion?: string | null;

		/** Specifies the configuration for the domain cluster, such as the type and number of instances. */
		ElasticsearchClusterConfig?: CreateElasticsearchDomainPostBodyElasticsearchClusterConfig;

		/** Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
		EBSOptions?: CreateElasticsearchDomainPostBodyEBSOptions;

		/** Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies?: string | null;

		/** Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
		SnapshotOptions?: CreateElasticsearchDomainPostBodySnapshotOptions;

		/** Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
		VPCOptions?: CreateElasticsearchDomainPostBodyVPCOptions;

		/** Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
		CognitoOptions?: CreateElasticsearchDomainPostBodyCognitoOptions;

		/** Specifies the Encryption At Rest Options. */
		EncryptionAtRestOptions?: CreateElasticsearchDomainPostBodyEncryptionAtRestOptions;

		/** Specifies the node-to-node encryption options. */
		NodeToNodeEncryptionOptions?: CreateElasticsearchDomainPostBodyNodeToNodeEncryptionOptions;

		/** <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: {[id: string]: string };

		/** Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log. */
		LogPublishingOptions?: {[id: string]: LogPublishingOption };

		/** Options to configure endpoint for the Elasticsearch domain. */
		DomainEndpointOptions?: CreateElasticsearchDomainPostBodyDomainEndpointOptions;

		/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
		AdvancedSecurityOptions?: CreateElasticsearchDomainPostBodyAdvancedSecurityOptions;

		/** Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules. */
		AutoTuneOptions?: CreateElasticsearchDomainPostBodyAutoTuneOptions;

		/** A list of <code>Tag</code> */
		TagList?: Array<Tag>;
	}
	export interface CreateElasticsearchDomainPostBodyFormProperties {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: FormControl<string | null | undefined>,

		/** String of format X.Y to specify version for the Elasticsearch domain eg. "1.5" or "2.3". For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. */
		ElasticsearchVersion: FormControl<string | null | undefined>,

		/** Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies: FormControl<string | null | undefined>,

		/** <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions: FormControl<{[id: string]: string } | null | undefined>,

		/** Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log. */
		LogPublishingOptions: FormControl<{[id: string]: LogPublishingOption } | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainPostBodyFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodyFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			ElasticsearchVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{1}\.[0-9]{1,2}$|^OpenSearch_[0-9]{1,2}\.[0-9]{1,2}$|^OS_[0-9]{1,2}\.[0-9]{1,2}$')]),
			AccessPolicies: new FormControl<string | null | undefined>(undefined),
			AdvancedOptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			LogPublishingOptions: new FormControl<{[id: string]: LogPublishingOption } | null | undefined>(undefined),
		});

	}

	export interface CreateElasticsearchDomainPostBodyElasticsearchClusterConfig {
		InstanceType?: ESPartitionInstanceType;
		InstanceCount?: number | null;
		DedicatedMasterEnabled?: boolean | null;
		ZoneAwarenessEnabled?: boolean | null;
		ZoneAwarenessConfig?: ZoneAwarenessConfig;
		DedicatedMasterType?: ESPartitionInstanceType;
		DedicatedMasterCount?: number | null;
		WarmEnabled?: boolean | null;
		WarmType?: ESWarmPartitionInstanceType;
		WarmCount?: number | null;
		ColdStorageOptions?: ColdStorageOptions;
	}
	export interface CreateElasticsearchDomainPostBodyElasticsearchClusterConfigFormProperties {
		InstanceType: FormControl<ESPartitionInstanceType | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		DedicatedMasterEnabled: FormControl<boolean | null | undefined>,
		ZoneAwarenessEnabled: FormControl<boolean | null | undefined>,
		DedicatedMasterType: FormControl<ESPartitionInstanceType | null | undefined>,
		DedicatedMasterCount: FormControl<number | null | undefined>,
		WarmEnabled: FormControl<boolean | null | undefined>,
		WarmType: FormControl<ESWarmPartitionInstanceType | null | undefined>,
		WarmCount: FormControl<number | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainPostBodyElasticsearchClusterConfigFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodyElasticsearchClusterConfigFormProperties>({
			InstanceType: new FormControl<ESPartitionInstanceType | null | undefined>(undefined),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			DedicatedMasterEnabled: new FormControl<boolean | null | undefined>(undefined),
			ZoneAwarenessEnabled: new FormControl<boolean | null | undefined>(undefined),
			DedicatedMasterType: new FormControl<ESPartitionInstanceType | null | undefined>(undefined),
			DedicatedMasterCount: new FormControl<number | null | undefined>(undefined),
			WarmEnabled: new FormControl<boolean | null | undefined>(undefined),
			WarmType: new FormControl<ESWarmPartitionInstanceType | null | undefined>(undefined),
			WarmCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateElasticsearchDomainPostBodyEBSOptions {
		EBSEnabled?: boolean | null;
		VolumeType?: VolumeType;
		VolumeSize?: number | null;
		Iops?: number | null;
		Throughput?: number | null;
	}
	export interface CreateElasticsearchDomainPostBodyEBSOptionsFormProperties {
		EBSEnabled: FormControl<boolean | null | undefined>,
		VolumeType: FormControl<VolumeType | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		Throughput: FormControl<number | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainPostBodyEBSOptionsFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodyEBSOptionsFormProperties>({
			EBSEnabled: new FormControl<boolean | null | undefined>(undefined),
			VolumeType: new FormControl<VolumeType | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			Throughput: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateElasticsearchDomainPostBodySnapshotOptions {
		AutomatedSnapshotStartHour?: number | null;
	}
	export interface CreateElasticsearchDomainPostBodySnapshotOptionsFormProperties {
		AutomatedSnapshotStartHour: FormControl<number | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainPostBodySnapshotOptionsFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodySnapshotOptionsFormProperties>({
			AutomatedSnapshotStartHour: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateElasticsearchDomainPostBodyVPCOptions {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}
	export interface CreateElasticsearchDomainPostBodyVPCOptionsFormProperties {
	}
	export function CreateCreateElasticsearchDomainPostBodyVPCOptionsFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodyVPCOptionsFormProperties>({
		});

	}

	export interface CreateElasticsearchDomainPostBodyCognitoOptions {
		Enabled?: boolean | null;
		UserPoolId?: string;
		IdentityPoolId?: string;
		RoleArn?: string;
	}
	export interface CreateElasticsearchDomainPostBodyCognitoOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
		IdentityPoolId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainPostBodyCognitoOptionsFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodyCognitoOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateElasticsearchDomainPostBodyEncryptionAtRestOptions {
		Enabled?: boolean | null;
		KmsKeyId?: string;
	}
	export interface CreateElasticsearchDomainPostBodyEncryptionAtRestOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainPostBodyEncryptionAtRestOptionsFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodyEncryptionAtRestOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateElasticsearchDomainPostBodyNodeToNodeEncryptionOptions {
		Enabled?: boolean | null;
	}
	export interface CreateElasticsearchDomainPostBodyNodeToNodeEncryptionOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainPostBodyNodeToNodeEncryptionOptionsFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodyNodeToNodeEncryptionOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateElasticsearchDomainPostBodyDomainEndpointOptions {
		EnforceHTTPS?: boolean | null;
		TLSSecurityPolicy?: TLSSecurityPolicy;
		CustomEndpointEnabled?: boolean | null;
		CustomEndpoint?: string;
		CustomEndpointCertificateArn?: string;
	}
	export interface CreateElasticsearchDomainPostBodyDomainEndpointOptionsFormProperties {
		EnforceHTTPS: FormControl<boolean | null | undefined>,
		TLSSecurityPolicy: FormControl<TLSSecurityPolicy | null | undefined>,
		CustomEndpointEnabled: FormControl<boolean | null | undefined>,
		CustomEndpoint: FormControl<string | null | undefined>,
		CustomEndpointCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainPostBodyDomainEndpointOptionsFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodyDomainEndpointOptionsFormProperties>({
			EnforceHTTPS: new FormControl<boolean | null | undefined>(undefined),
			TLSSecurityPolicy: new FormControl<TLSSecurityPolicy | null | undefined>(undefined),
			CustomEndpointEnabled: new FormControl<boolean | null | undefined>(undefined),
			CustomEndpoint: new FormControl<string | null | undefined>(undefined),
			CustomEndpointCertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateElasticsearchDomainPostBodyAdvancedSecurityOptions {
		Enabled?: boolean | null;
		InternalUserDatabaseEnabled?: boolean | null;
		MasterUserOptions?: MasterUserOptions;
		SAMLOptions?: SAMLOptionsInput;
		AnonymousAuthEnabled?: boolean | null;
	}
	export interface CreateElasticsearchDomainPostBodyAdvancedSecurityOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		InternalUserDatabaseEnabled: FormControl<boolean | null | undefined>,
		AnonymousAuthEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainPostBodyAdvancedSecurityOptionsFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodyAdvancedSecurityOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			InternalUserDatabaseEnabled: new FormControl<boolean | null | undefined>(undefined),
			AnonymousAuthEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateElasticsearchDomainPostBodyAutoTuneOptions {
		DesiredState?: AutoTuneDesiredState;
		MaintenanceSchedules?: Array<AutoTuneMaintenanceSchedule>;
	}
	export interface CreateElasticsearchDomainPostBodyAutoTuneOptionsFormProperties {
		DesiredState: FormControl<AutoTuneDesiredState | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainPostBodyAutoTuneOptionsFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodyAutoTuneOptionsFormProperties>({
			DesiredState: new FormControl<AutoTuneDesiredState | null | undefined>(undefined),
		});

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
	export interface CreateOutboundCrossClusterSearchConnectionPostBodyFormProperties {

		/**
		 * Specifies the connection alias that will be used by the customer for this connection.
		 * Required
		 * Max length: 20
		 */
		ConnectionAlias: FormControl<string | null | undefined>,
	}
	export function CreateCreateOutboundCrossClusterSearchConnectionPostBodyFormGroup() {
		return new FormGroup<CreateOutboundCrossClusterSearchConnectionPostBodyFormProperties>({
			ConnectionAlias: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(20)]),
		});

	}

	export interface CreateOutboundCrossClusterSearchConnectionPostBodySourceDomainInfo {

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		OwnerId?: string | null;

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName?: string | null;
		Region?: string | null;
	}
	export interface CreateOutboundCrossClusterSearchConnectionPostBodySourceDomainInfoFormProperties {

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		OwnerId: FormControl<string | null | undefined>,

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
	}
	export function CreateCreateOutboundCrossClusterSearchConnectionPostBodySourceDomainInfoFormGroup() {
		return new FormGroup<CreateOutboundCrossClusterSearchConnectionPostBodySourceDomainInfoFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12)]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			Region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateOutboundCrossClusterSearchConnectionPostBodyDestinationDomainInfo {

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		OwnerId?: string | null;

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName?: string | null;
		Region?: string | null;
	}
	export interface CreateOutboundCrossClusterSearchConnectionPostBodyDestinationDomainInfoFormProperties {

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		OwnerId: FormControl<string | null | undefined>,

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
	}
	export function CreateCreateOutboundCrossClusterSearchConnectionPostBodyDestinationDomainInfoFormGroup() {
		return new FormGroup<CreateOutboundCrossClusterSearchConnectionPostBodyDestinationDomainInfoFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12)]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			Region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePackagePostBody {

		/**
		 * Unique identifier for the package.
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		PackageName: string;

		/**
		 * Type of package. Currently supports only TXT-DICTIONARY.
		 * Required
		 */
		PackageType: PackageType;

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
	export interface CreatePackagePostBodyFormProperties {

		/**
		 * Unique identifier for the package.
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		PackageName: FormControl<string | null | undefined>,

		/**
		 * Type of package. Currently supports only TXT-DICTIONARY.
		 * Required
		 */
		PackageType: FormControl<PackageType | null | undefined>,

		/**
		 * Description of the package.
		 * Max length: 1024
		 */
		PackageDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackagePostBodyFormGroup() {
		return new FormGroup<CreatePackagePostBodyFormProperties>({
			PackageName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			PackageType: new FormControl<PackageType | null | undefined>(undefined, [Validators.required]),
			PackageDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export interface CreatePackagePostBodyPackageSource {
		S3BucketName?: string;
		S3Key?: string;
	}
	export interface CreatePackagePostBodyPackageSourceFormProperties {
		S3BucketName: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackagePostBodyPackageSourceFormGroup() {
		return new FormGroup<CreatePackagePostBodyPackageSourceFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVpcEndpointPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the domain to grant access to.
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		DomainArn: string;

		/**
		 * Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.
		 * Required
		 */
		VpcOptions: CreateVpcEndpointPostBodyVpcOptions;

		/**
		 * Unique, case-sensitive identifier to ensure idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken?: string | null;
	}
	export interface CreateVpcEndpointPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the domain to grant access to.
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		DomainArn: FormControl<string | null | undefined>,

		/**
		 * Unique, case-sensitive identifier to ensure idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateVpcEndpointPostBodyFormGroup() {
		return new FormGroup<CreateVpcEndpointPostBodyFormProperties>({
			DomainArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:aws[a-z\-]*:[a-z]+:[a-z0-9\-]+:[0-9]+:domain\/[a-z0-9\-]+')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface CreateVpcEndpointPostBodyVpcOptions {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}
	export interface CreateVpcEndpointPostBodyVpcOptionsFormProperties {
	}
	export function CreateCreateVpcEndpointPostBodyVpcOptionsFormGroup() {
		return new FormGroup<CreateVpcEndpointPostBodyVpcOptionsFormProperties>({
		});

	}

	export interface UpdateElasticsearchDomainConfigPostBody {

		/** Specifies the configuration for the domain cluster, such as the type and number of instances. */
		ElasticsearchClusterConfig?: UpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfig;

		/** Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
		EBSOptions?: UpdateElasticsearchDomainConfigPostBodyEBSOptions;

		/** Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
		SnapshotOptions?: UpdateElasticsearchDomainConfigPostBodySnapshotOptions;

		/** Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
		VPCOptions?: UpdateElasticsearchDomainConfigPostBodyVPCOptions;

		/** Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
		CognitoOptions?: UpdateElasticsearchDomainConfigPostBodyCognitoOptions;

		/** <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: {[id: string]: string };

		/** Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies?: string | null;

		/** Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log. */
		LogPublishingOptions?: {[id: string]: LogPublishingOption };

		/** Options to configure endpoint for the Elasticsearch domain. */
		DomainEndpointOptions?: UpdateElasticsearchDomainConfigPostBodyDomainEndpointOptions;

		/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
		AdvancedSecurityOptions?: UpdateElasticsearchDomainConfigPostBodyAdvancedSecurityOptions;

		/** Specifies the node-to-node encryption options. */
		NodeToNodeEncryptionOptions?: UpdateElasticsearchDomainConfigPostBodyNodeToNodeEncryptionOptions;

		/** Specifies the Encryption At Rest Options. */
		EncryptionAtRestOptions?: UpdateElasticsearchDomainConfigPostBodyEncryptionAtRestOptions;

		/** Specifies the Auto-Tune options: the Auto-Tune desired state for the domain, rollback state when disabling Auto-Tune options and list of maintenance schedules. */
		AutoTuneOptions?: UpdateElasticsearchDomainConfigPostBodyAutoTuneOptions;

		/** This flag, when set to True, specifies whether the <code>UpdateElasticsearchDomain</code> request should return the results of validation checks without actually applying the change. This flag, when set to True, specifies the deployment mechanism through which the update shall be applied on the domain. This will not actually perform the Update. */
		DryRun?: boolean | null;
	}
	export interface UpdateElasticsearchDomainConfigPostBodyFormProperties {

		/** <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions: FormControl<{[id: string]: string } | null | undefined>,

		/** Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies: FormControl<string | null | undefined>,

		/** Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log. */
		LogPublishingOptions: FormControl<{[id: string]: LogPublishingOption } | null | undefined>,

		/** This flag, when set to True, specifies whether the <code>UpdateElasticsearchDomain</code> request should return the results of validation checks without actually applying the change. This flag, when set to True, specifies the deployment mechanism through which the update shall be applied on the domain. This will not actually perform the Update. */
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodyFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodyFormProperties>({
			AdvancedOptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			AccessPolicies: new FormControl<string | null | undefined>(undefined),
			LogPublishingOptions: new FormControl<{[id: string]: LogPublishingOption } | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfig {
		InstanceType?: ESPartitionInstanceType;
		InstanceCount?: number | null;
		DedicatedMasterEnabled?: boolean | null;
		ZoneAwarenessEnabled?: boolean | null;
		ZoneAwarenessConfig?: ZoneAwarenessConfig;
		DedicatedMasterType?: ESPartitionInstanceType;
		DedicatedMasterCount?: number | null;
		WarmEnabled?: boolean | null;
		WarmType?: ESWarmPartitionInstanceType;
		WarmCount?: number | null;
		ColdStorageOptions?: ColdStorageOptions;
	}
	export interface UpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfigFormProperties {
		InstanceType: FormControl<ESPartitionInstanceType | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		DedicatedMasterEnabled: FormControl<boolean | null | undefined>,
		ZoneAwarenessEnabled: FormControl<boolean | null | undefined>,
		DedicatedMasterType: FormControl<ESPartitionInstanceType | null | undefined>,
		DedicatedMasterCount: FormControl<number | null | undefined>,
		WarmEnabled: FormControl<boolean | null | undefined>,
		WarmType: FormControl<ESWarmPartitionInstanceType | null | undefined>,
		WarmCount: FormControl<number | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfigFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfigFormProperties>({
			InstanceType: new FormControl<ESPartitionInstanceType | null | undefined>(undefined),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			DedicatedMasterEnabled: new FormControl<boolean | null | undefined>(undefined),
			ZoneAwarenessEnabled: new FormControl<boolean | null | undefined>(undefined),
			DedicatedMasterType: new FormControl<ESPartitionInstanceType | null | undefined>(undefined),
			DedicatedMasterCount: new FormControl<number | null | undefined>(undefined),
			WarmEnabled: new FormControl<boolean | null | undefined>(undefined),
			WarmType: new FormControl<ESWarmPartitionInstanceType | null | undefined>(undefined),
			WarmCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateElasticsearchDomainConfigPostBodyEBSOptions {
		EBSEnabled?: boolean | null;
		VolumeType?: VolumeType;
		VolumeSize?: number | null;
		Iops?: number | null;
		Throughput?: number | null;
	}
	export interface UpdateElasticsearchDomainConfigPostBodyEBSOptionsFormProperties {
		EBSEnabled: FormControl<boolean | null | undefined>,
		VolumeType: FormControl<VolumeType | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		Throughput: FormControl<number | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodyEBSOptionsFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodyEBSOptionsFormProperties>({
			EBSEnabled: new FormControl<boolean | null | undefined>(undefined),
			VolumeType: new FormControl<VolumeType | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			Throughput: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateElasticsearchDomainConfigPostBodySnapshotOptions {
		AutomatedSnapshotStartHour?: number | null;
	}
	export interface UpdateElasticsearchDomainConfigPostBodySnapshotOptionsFormProperties {
		AutomatedSnapshotStartHour: FormControl<number | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodySnapshotOptionsFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodySnapshotOptionsFormProperties>({
			AutomatedSnapshotStartHour: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateElasticsearchDomainConfigPostBodyVPCOptions {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}
	export interface UpdateElasticsearchDomainConfigPostBodyVPCOptionsFormProperties {
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodyVPCOptionsFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodyVPCOptionsFormProperties>({
		});

	}

	export interface UpdateElasticsearchDomainConfigPostBodyCognitoOptions {
		Enabled?: boolean | null;
		UserPoolId?: string;
		IdentityPoolId?: string;
		RoleArn?: string;
	}
	export interface UpdateElasticsearchDomainConfigPostBodyCognitoOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
		IdentityPoolId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodyCognitoOptionsFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodyCognitoOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateElasticsearchDomainConfigPostBodyDomainEndpointOptions {
		EnforceHTTPS?: boolean | null;
		TLSSecurityPolicy?: TLSSecurityPolicy;
		CustomEndpointEnabled?: boolean | null;
		CustomEndpoint?: string;
		CustomEndpointCertificateArn?: string;
	}
	export interface UpdateElasticsearchDomainConfigPostBodyDomainEndpointOptionsFormProperties {
		EnforceHTTPS: FormControl<boolean | null | undefined>,
		TLSSecurityPolicy: FormControl<TLSSecurityPolicy | null | undefined>,
		CustomEndpointEnabled: FormControl<boolean | null | undefined>,
		CustomEndpoint: FormControl<string | null | undefined>,
		CustomEndpointCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodyDomainEndpointOptionsFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodyDomainEndpointOptionsFormProperties>({
			EnforceHTTPS: new FormControl<boolean | null | undefined>(undefined),
			TLSSecurityPolicy: new FormControl<TLSSecurityPolicy | null | undefined>(undefined),
			CustomEndpointEnabled: new FormControl<boolean | null | undefined>(undefined),
			CustomEndpoint: new FormControl<string | null | undefined>(undefined),
			CustomEndpointCertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateElasticsearchDomainConfigPostBodyAdvancedSecurityOptions {
		Enabled?: boolean | null;
		InternalUserDatabaseEnabled?: boolean | null;
		MasterUserOptions?: MasterUserOptions;
		SAMLOptions?: SAMLOptionsInput;
		AnonymousAuthEnabled?: boolean | null;
	}
	export interface UpdateElasticsearchDomainConfigPostBodyAdvancedSecurityOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		InternalUserDatabaseEnabled: FormControl<boolean | null | undefined>,
		AnonymousAuthEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodyAdvancedSecurityOptionsFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodyAdvancedSecurityOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			InternalUserDatabaseEnabled: new FormControl<boolean | null | undefined>(undefined),
			AnonymousAuthEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateElasticsearchDomainConfigPostBodyNodeToNodeEncryptionOptions {
		Enabled?: boolean | null;
	}
	export interface UpdateElasticsearchDomainConfigPostBodyNodeToNodeEncryptionOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodyNodeToNodeEncryptionOptionsFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodyNodeToNodeEncryptionOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateElasticsearchDomainConfigPostBodyEncryptionAtRestOptions {
		Enabled?: boolean | null;
		KmsKeyId?: string;
	}
	export interface UpdateElasticsearchDomainConfigPostBodyEncryptionAtRestOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodyEncryptionAtRestOptionsFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodyEncryptionAtRestOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateElasticsearchDomainConfigPostBodyAutoTuneOptions {
		DesiredState?: AutoTuneDesiredState;
		RollbackOnDisable?: RollbackOnDisable;
		MaintenanceSchedules?: Array<AutoTuneMaintenanceSchedule>;
	}
	export interface UpdateElasticsearchDomainConfigPostBodyAutoTuneOptionsFormProperties {
		DesiredState: FormControl<AutoTuneDesiredState | null | undefined>,
		RollbackOnDisable: FormControl<RollbackOnDisable | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodyAutoTuneOptionsFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodyAutoTuneOptionsFormProperties>({
			DesiredState: new FormControl<AutoTuneDesiredState | null | undefined>(undefined),
			RollbackOnDisable: new FormControl<RollbackOnDisable | null | undefined>(undefined),
		});

	}

	export interface DescribeElasticsearchDomainsPostBody {

		/**
		 * A list of Elasticsearch domain names.
		 * Required
		 */
		DomainNames: Array<string>;
	}
	export interface DescribeElasticsearchDomainsPostBodyFormProperties {
	}
	export function CreateDescribeElasticsearchDomainsPostBodyFormGroup() {
		return new FormGroup<DescribeElasticsearchDomainsPostBodyFormProperties>({
		});

	}

	export interface DescribeInboundCrossClusterSearchConnectionsPostBody {

		/** A list of filters used to match properties for inbound cross-cluster search connection. Available <code><a>Filter</a></code> names for this operation are: <ul> <li>cross-cluster-search-connection-id</li> <li>source-domain-info.domain-name</li> <li>source-domain-info.owner-id</li> <li>source-domain-info.region</li> <li>destination-domain-info.domain-name</li> </ul> */
		Filters?: Array<Filter>;

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}
	export interface DescribeInboundCrossClusterSearchConnectionsPostBodyFormProperties {

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInboundCrossClusterSearchConnectionsPostBodyFormGroup() {
		return new FormGroup<DescribeInboundCrossClusterSearchConnectionsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeOutboundCrossClusterSearchConnectionsPostBody {

		/** A list of filters used to match properties for outbound cross-cluster search connection. Available <code><a>Filter</a></code> names for this operation are: <ul> <li>cross-cluster-search-connection-id</li> <li>destination-domain-info.domain-name</li> <li>destination-domain-info.owner-id</li> <li>destination-domain-info.region</li> <li>source-domain-info.domain-name</li> </ul> */
		Filters?: Array<Filter>;

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}
	export interface DescribeOutboundCrossClusterSearchConnectionsPostBodyFormProperties {

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOutboundCrossClusterSearchConnectionsPostBodyFormGroup() {
		return new FormGroup<DescribeOutboundCrossClusterSearchConnectionsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePackagesPostBody {

		/** A list of <code>DescribePackagesFilter</code> to filter the packages included in a <code>DescribePackages</code> response. */
		Filters?: Array<DescribePackagesFilter>;

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}
	export interface DescribePackagesPostBodyFormProperties {

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePackagesPostBodyFormGroup() {
		return new FormGroup<DescribePackagesPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeVpcEndpointsPostBody {

		/**
		 * The unique identifiers of the endpoints to get information about.
		 * Required
		 */
		VpcEndpointIds: Array<string>;
	}
	export interface DescribeVpcEndpointsPostBodyFormProperties {
	}
	export function CreateDescribeVpcEndpointsPostBodyFormGroup() {
		return new FormGroup<DescribeVpcEndpointsPostBodyFormProperties>({
		});

	}

	export interface PurchaseReservedElasticsearchInstanceOfferingPostBody {

		/**
		 * The ID of the reserved Elasticsearch instance offering to purchase.
		 * Required
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
	export interface PurchaseReservedElasticsearchInstanceOfferingPostBodyFormProperties {

		/**
		 * The ID of the reserved Elasticsearch instance offering to purchase.
		 * Required
		 */
		ReservedElasticsearchInstanceOfferingId: FormControl<string | null | undefined>,

		/**
		 * A customer-specified identifier to track this reservation.
		 * Required
		 * Max length: 64
		 * Min length: 5
		 */
		ReservationName: FormControl<string | null | undefined>,

		/**
		 * Specifies the number of EC2 instances in the Elasticsearch domain.
		 * Minimum: 1
		 */
		InstanceCount: FormControl<number | null | undefined>,
	}
	export function CreatePurchaseReservedElasticsearchInstanceOfferingPostBodyFormGroup() {
		return new FormGroup<PurchaseReservedElasticsearchInstanceOfferingPostBodyFormProperties>({
			ReservedElasticsearchInstanceOfferingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('\p{XDigit}{8}-\p{XDigit}{4}-\p{XDigit}{4}-\p{XDigit}{4}-\p{XDigit}{12}')]),
			ReservationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(64)]),
			InstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

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
	export interface RemoveTagsPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
		 * Required
		 */
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsPostBodyFormGroup() {
		return new FormGroup<RemoveTagsPostBodyFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RevokeVpcEndpointAccessPostBody {

		/**
		 * The account ID to revoke access from.
		 * Required
		 */
		Account: string;
	}
	export interface RevokeVpcEndpointAccessPostBodyFormProperties {

		/**
		 * The account ID to revoke access from.
		 * Required
		 */
		Account: FormControl<string | null | undefined>,
	}
	export function CreateRevokeVpcEndpointAccessPostBodyFormGroup() {
		return new FormGroup<RevokeVpcEndpointAccessPostBodyFormProperties>({
			Account: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]+$')]),
		});

	}

	export interface StartElasticsearchServiceSoftwareUpdatePostBody {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: string;
	}
	export interface StartElasticsearchServiceSoftwareUpdatePostBodyFormProperties {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateStartElasticsearchServiceSoftwareUpdatePostBodyFormGroup() {
		return new FormGroup<StartElasticsearchServiceSoftwareUpdatePostBodyFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}

	export interface UpdatePackagePostBody {

		/**
		 * Unique identifier for the package.
		 * Required
		 */
		PackageID: string;

		/**
		 * The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code>
		 * Required
		 */
		PackageSource: UpdatePackagePostBodyPackageSource;

		/**
		 * New description of the package.
		 * Max length: 1024
		 */
		PackageDescription?: string | null;

		/**
		 * An info message for the new version which will be shown as part of <code>GetPackageVersionHistoryResponse</code>.
		 * Max length: 160
		 */
		CommitMessage?: string | null;
	}
	export interface UpdatePackagePostBodyFormProperties {

		/**
		 * Unique identifier for the package.
		 * Required
		 */
		PackageID: FormControl<string | null | undefined>,

		/**
		 * New description of the package.
		 * Max length: 1024
		 */
		PackageDescription: FormControl<string | null | undefined>,

		/**
		 * An info message for the new version which will be shown as part of <code>GetPackageVersionHistoryResponse</code>.
		 * Max length: 160
		 */
		CommitMessage: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePackagePostBodyFormGroup() {
		return new FormGroup<UpdatePackagePostBodyFormProperties>({
			PackageID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			CommitMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(160)]),
		});

	}

	export interface UpdatePackagePostBodyPackageSource {
		S3BucketName?: string;
		S3Key?: string;
	}
	export interface UpdatePackagePostBodyPackageSourceFormProperties {
		S3BucketName: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePackagePostBodyPackageSourceFormGroup() {
		return new FormGroup<UpdatePackagePostBodyPackageSourceFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVpcEndpointPostBody {

		/**
		 * Unique identifier of the VPC endpoint to be updated.
		 * Required
		 * Max length: 256
		 * Min length: 5
		 */
		VpcEndpointId: string;

		/**
		 * Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.
		 * Required
		 */
		VpcOptions: UpdateVpcEndpointPostBodyVpcOptions;
	}
	export interface UpdateVpcEndpointPostBodyFormProperties {

		/**
		 * Unique identifier of the VPC endpoint to be updated.
		 * Required
		 * Max length: 256
		 * Min length: 5
		 */
		VpcEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVpcEndpointPostBodyFormGroup() {
		return new FormGroup<UpdateVpcEndpointPostBodyFormProperties>({
			VpcEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(256), Validators.pattern('^aos-[a-zA-Z0-9]*$')]),
		});

	}

	export interface UpdateVpcEndpointPostBodyVpcOptions {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}
	export interface UpdateVpcEndpointPostBodyVpcOptionsFormProperties {
	}
	export function CreateUpdateVpcEndpointPostBodyVpcOptionsFormGroup() {
		return new FormGroup<UpdateVpcEndpointPostBodyVpcOptionsFormProperties>({
		});

	}

	export interface UpgradeElasticsearchDomainPostBody {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
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
	export interface UpgradeElasticsearchDomainPostBodyFormProperties {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: FormControl<string | null | undefined>,

		/**
		 * The version of Elasticsearch that you intend to upgrade the domain to.
		 * Required
		 */
		TargetVersion: FormControl<string | null | undefined>,

		/** This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed. This will not actually perform the Upgrade. */
		PerformCheckOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateUpgradeElasticsearchDomainPostBodyFormGroup() {
		return new FormGroup<UpgradeElasticsearchDomainPostBodyFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			TargetVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{1}\.[0-9]{1,2}$|^OpenSearch_[0-9]{1,2}\.[0-9]{1,2}$|^OS_[0-9]{1,2}\.[0-9]{1,2}$')]),
			PerformCheckOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

