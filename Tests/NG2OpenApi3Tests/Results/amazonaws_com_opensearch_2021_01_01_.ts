import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains details about the accepted inbound connection. */
	export interface AcceptInboundConnectionResponse {
		Connection?: InboundConnection;
	}

	/** Contains details about the accepted inbound connection. */
	export interface AcceptInboundConnectionResponseFormProperties {
	}
	export function CreateAcceptInboundConnectionResponseFormGroup() {
		return new FormGroup<AcceptInboundConnectionResponseFormProperties>({
		});

	}


	/** Describes an inbound cross-cluster connection for Amazon OpenSearch Service. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search for Amazon OpenSearch Service</a>. */
	export interface InboundConnection {
		LocalDomainInfo?: DomainInformationContainer;
		RemoteDomainInfo?: DomainInformationContainer;
		ConnectionId?: string;
		ConnectionStatus?: InboundConnectionStatus;
		ConnectionMode?: ConnectionMode;
	}

	/** Describes an inbound cross-cluster connection for Amazon OpenSearch Service. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search for Amazon OpenSearch Service</a>. */
	export interface InboundConnectionFormProperties {
		ConnectionId: FormControl<string | null | undefined>,
		ConnectionMode: FormControl<ConnectionMode | null | undefined>,
	}
	export function CreateInboundConnectionFormGroup() {
		return new FormGroup<InboundConnectionFormProperties>({
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionMode: new FormControl<ConnectionMode | null | undefined>(undefined),
		});

	}


	/** Container for information about an OpenSearch Service domain. */
	export interface DomainInformationContainer {
		AWSDomainInformation?: AWSDomainInformation;
	}

	/** Container for information about an OpenSearch Service domain. */
	export interface DomainInformationContainerFormProperties {
	}
	export function CreateDomainInformationContainerFormGroup() {
		return new FormGroup<DomainInformationContainerFormProperties>({
		});

	}


	/** Information about an Amazon OpenSearch Service domain. */
	export interface AWSDomainInformation {
		OwnerId?: string;

		/** Required */
		DomainName: string;
		Region?: string;
	}

	/** Information about an Amazon OpenSearch Service domain. */
	export interface AWSDomainInformationFormProperties {
		OwnerId: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
	}
	export function CreateAWSDomainInformationFormGroup() {
		return new FormGroup<AWSDomainInformationFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of an inbound cross-cluster connection for OpenSearch Service. */
	export interface InboundConnectionStatus {
		StatusCode?: InboundConnectionStatusCode;
		Message?: string;
	}

	/** The status of an inbound cross-cluster connection for OpenSearch Service. */
	export interface InboundConnectionStatusFormProperties {
		StatusCode: FormControl<InboundConnectionStatusCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInboundConnectionStatusFormGroup() {
		return new FormGroup<InboundConnectionStatusFormProperties>({
			StatusCode: new FormControl<InboundConnectionStatusCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InboundConnectionStatusCode { PENDING_ACCEPTANCE = 'PENDING_ACCEPTANCE', APPROVED = 'APPROVED', PROVISIONING = 'PROVISIONING', ACTIVE = 'ACTIVE', REJECTING = 'REJECTING', REJECTED = 'REJECTED', DELETING = 'DELETING', DELETED = 'DELETED' }


	/** <p>The connection mode for the cross-cluster connection.</p> <ul> <li> <p> <b>DIRECT</b> - Used for cross-cluster search or cross-cluster replication.</p> </li> <li> <p> <b>VPC_ENDPOINT</b> - Used for remote reindex between Amazon OpenSearch Service VPC domains.</p> </li> </ul> */
	export enum ConnectionMode { DIRECT = 'DIRECT', VPC_ENDPOINT = 'VPC_ENDPOINT' }

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


	/** A tag (key-value pair) for an Amazon OpenSearch Service resource. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A tag (key-value pair) for an Amazon OpenSearch Service resource. */
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


	/** Container for the response returned by the <code>AssociatePackage</code> operation. */
	export interface AssociatePackageResponse {
		DomainPackageDetails?: DomainPackageDetails;
	}

	/** Container for the response returned by the <code>AssociatePackage</code> operation. */
	export interface AssociatePackageResponseFormProperties {
	}
	export function CreateAssociatePackageResponseFormGroup() {
		return new FormGroup<AssociatePackageResponseFormProperties>({
		});

	}


	/** Information about a package that is associated with a domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>. */
	export interface DomainPackageDetails {
		PackageID?: string;
		PackageName?: string;
		PackageType?: PackageType;
		LastUpdated?: Date;
		DomainName?: string;
		DomainPackageStatus?: DomainPackageStatus;
		PackageVersion?: string;
		ReferencePath?: string;
		ErrorDetails?: ErrorDetails;
	}

	/** Information about a package that is associated with a domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>. */
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


	/** Additional information if the package is in an error state. Null otherwise. */
	export interface ErrorDetails {
		ErrorType?: string;
		ErrorMessage?: string;
	}

	/** Additional information if the package is in an error state. Null otherwise. */
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

	export interface AuthorizeVpcEndpointAccessResponse {

		/** Required */
		AuthorizedPrincipal: AuthorizedPrincipal;
	}
	export interface AuthorizeVpcEndpointAccessResponseFormProperties {
	}
	export function CreateAuthorizeVpcEndpointAccessResponseFormGroup() {
		return new FormGroup<AuthorizeVpcEndpointAccessResponseFormProperties>({
		});

	}


	/** Information about an Amazon Web Services account or service that has access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint. */
	export interface AuthorizedPrincipal {
		PrincipalType?: PrincipalType;
		Principal?: string;
	}

	/** Information about an Amazon Web Services account or service that has access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint. */
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

	export enum PrincipalType { AWS_ACCOUNT = 'AWS_ACCOUNT', AWS_SERVICE = 'AWS_SERVICE' }


	/** Container for the response to a <code>CancelServiceSoftwareUpdate</code> operation. Contains the status of the update. */
	export interface CancelServiceSoftwareUpdateResponse {
		ServiceSoftwareOptions?: ServiceSoftwareOptions;
	}

	/** Container for the response to a <code>CancelServiceSoftwareUpdate</code> operation. Contains the status of the update. */
	export interface CancelServiceSoftwareUpdateResponseFormProperties {
	}
	export function CreateCancelServiceSoftwareUpdateResponseFormGroup() {
		return new FormGroup<CancelServiceSoftwareUpdateResponseFormProperties>({
		});

	}


	/** The current status of the service software for an Amazon OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">Service software updates in Amazon OpenSearch Service</a>. */
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

	/** The current status of the service software for an Amazon OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">Service software updates in Amazon OpenSearch Service</a>. */
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


	/** The result of a <code>CreateDomain</code> operation. Contains the status of the newly created domain. */
	export interface CreateDomainResponse {
		DomainStatus?: DomainStatus;
	}

	/** The result of a <code>CreateDomain</code> operation. Contains the status of the newly created domain. */
	export interface CreateDomainResponseFormProperties {
	}
	export function CreateCreateDomainResponseFormGroup() {
		return new FormGroup<CreateDomainResponseFormProperties>({
		});

	}


	/** The current status of an OpenSearch Service domain. */
	export interface DomainStatus {

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
		EngineVersion?: string;

		/** Required */
		ClusterConfig: ClusterConfig;
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
		OffPeakWindowOptions?: OffPeakWindowOptions;
		SoftwareUpdateOptions?: SoftwareUpdateOptions;
	}

	/** The current status of an OpenSearch Service domain. */
	export interface DomainStatusFormProperties {

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
		EngineVersion: FormControl<string | null | undefined>,
		AccessPolicies: FormControl<string | null | undefined>,
	}
	export function CreateDomainStatusFormGroup() {
		return new FormGroup<DomainStatusFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Created: new FormControl<boolean | null | undefined>(undefined),
			Deleted: new FormControl<boolean | null | undefined>(undefined),
			Endpoint: new FormControl<string | null | undefined>(undefined),
			Processing: new FormControl<boolean | null | undefined>(undefined),
			UpgradeProcessing: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
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


	/** Container for the cluster configuration of an OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html">Creating and managing Amazon OpenSearch Service domains</a>. */
	export interface ClusterConfig {
		InstanceType?: OpenSearchPartitionInstanceType;
		InstanceCount?: number | null;
		DedicatedMasterEnabled?: boolean | null;
		ZoneAwarenessEnabled?: boolean | null;
		ZoneAwarenessConfig?: ZoneAwarenessConfig;
		DedicatedMasterType?: OpenSearchPartitionInstanceType;
		DedicatedMasterCount?: number | null;
		WarmEnabled?: boolean | null;
		WarmType?: OpenSearchWarmPartitionInstanceType;
		WarmCount?: number | null;
		ColdStorageOptions?: ColdStorageOptions;
		MultiAZWithStandbyEnabled?: boolean | null;
	}

	/** Container for the cluster configuration of an OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html">Creating and managing Amazon OpenSearch Service domains</a>. */
	export interface ClusterConfigFormProperties {
		InstanceType: FormControl<OpenSearchPartitionInstanceType | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		DedicatedMasterEnabled: FormControl<boolean | null | undefined>,
		ZoneAwarenessEnabled: FormControl<boolean | null | undefined>,
		DedicatedMasterType: FormControl<OpenSearchPartitionInstanceType | null | undefined>,
		DedicatedMasterCount: FormControl<number | null | undefined>,
		WarmEnabled: FormControl<boolean | null | undefined>,
		WarmType: FormControl<OpenSearchWarmPartitionInstanceType | null | undefined>,
		WarmCount: FormControl<number | null | undefined>,
		MultiAZWithStandbyEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateClusterConfigFormGroup() {
		return new FormGroup<ClusterConfigFormProperties>({
			InstanceType: new FormControl<OpenSearchPartitionInstanceType | null | undefined>(undefined),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			DedicatedMasterEnabled: new FormControl<boolean | null | undefined>(undefined),
			ZoneAwarenessEnabled: new FormControl<boolean | null | undefined>(undefined),
			DedicatedMasterType: new FormControl<OpenSearchPartitionInstanceType | null | undefined>(undefined),
			DedicatedMasterCount: new FormControl<number | null | undefined>(undefined),
			WarmEnabled: new FormControl<boolean | null | undefined>(undefined),
			WarmType: new FormControl<OpenSearchWarmPartitionInstanceType | null | undefined>(undefined),
			WarmCount: new FormControl<number | null | undefined>(undefined),
			MultiAZWithStandbyEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum OpenSearchPartitionInstanceType { 'm3.medium.search' = 'm3.medium.search', 'm3.large.search' = 'm3.large.search', 'm3.xlarge.search' = 'm3.xlarge.search', 'm3.2xlarge.search' = 'm3.2xlarge.search', 'm4.large.search' = 'm4.large.search', 'm4.xlarge.search' = 'm4.xlarge.search', 'm4.2xlarge.search' = 'm4.2xlarge.search', 'm4.4xlarge.search' = 'm4.4xlarge.search', 'm4.10xlarge.search' = 'm4.10xlarge.search', 'm5.large.search' = 'm5.large.search', 'm5.xlarge.search' = 'm5.xlarge.search', 'm5.2xlarge.search' = 'm5.2xlarge.search', 'm5.4xlarge.search' = 'm5.4xlarge.search', 'm5.12xlarge.search' = 'm5.12xlarge.search', 'm5.24xlarge.search' = 'm5.24xlarge.search', 'r5.large.search' = 'r5.large.search', 'r5.xlarge.search' = 'r5.xlarge.search', 'r5.2xlarge.search' = 'r5.2xlarge.search', 'r5.4xlarge.search' = 'r5.4xlarge.search', 'r5.12xlarge.search' = 'r5.12xlarge.search', 'r5.24xlarge.search' = 'r5.24xlarge.search', 'c5.large.search' = 'c5.large.search', 'c5.xlarge.search' = 'c5.xlarge.search', 'c5.2xlarge.search' = 'c5.2xlarge.search', 'c5.4xlarge.search' = 'c5.4xlarge.search', 'c5.9xlarge.search' = 'c5.9xlarge.search', 'c5.18xlarge.search' = 'c5.18xlarge.search', 't3.nano.search' = 't3.nano.search', 't3.micro.search' = 't3.micro.search', 't3.small.search' = 't3.small.search', 't3.medium.search' = 't3.medium.search', 't3.large.search' = 't3.large.search', 't3.xlarge.search' = 't3.xlarge.search', 't3.2xlarge.search' = 't3.2xlarge.search', 'ultrawarm1.medium.search' = 'ultrawarm1.medium.search', 'ultrawarm1.large.search' = 'ultrawarm1.large.search', 'ultrawarm1.xlarge.search' = 'ultrawarm1.xlarge.search', 't2.micro.search' = 't2.micro.search', 't2.small.search' = 't2.small.search', 't2.medium.search' = 't2.medium.search', 'r3.large.search' = 'r3.large.search', 'r3.xlarge.search' = 'r3.xlarge.search', 'r3.2xlarge.search' = 'r3.2xlarge.search', 'r3.4xlarge.search' = 'r3.4xlarge.search', 'r3.8xlarge.search' = 'r3.8xlarge.search', 'i2.xlarge.search' = 'i2.xlarge.search', 'i2.2xlarge.search' = 'i2.2xlarge.search', 'd2.xlarge.search' = 'd2.xlarge.search', 'd2.2xlarge.search' = 'd2.2xlarge.search', 'd2.4xlarge.search' = 'd2.4xlarge.search', 'd2.8xlarge.search' = 'd2.8xlarge.search', 'c4.large.search' = 'c4.large.search', 'c4.xlarge.search' = 'c4.xlarge.search', 'c4.2xlarge.search' = 'c4.2xlarge.search', 'c4.4xlarge.search' = 'c4.4xlarge.search', 'c4.8xlarge.search' = 'c4.8xlarge.search', 'r4.large.search' = 'r4.large.search', 'r4.xlarge.search' = 'r4.xlarge.search', 'r4.2xlarge.search' = 'r4.2xlarge.search', 'r4.4xlarge.search' = 'r4.4xlarge.search', 'r4.8xlarge.search' = 'r4.8xlarge.search', 'r4.16xlarge.search' = 'r4.16xlarge.search', 'i3.large.search' = 'i3.large.search', 'i3.xlarge.search' = 'i3.xlarge.search', 'i3.2xlarge.search' = 'i3.2xlarge.search', 'i3.4xlarge.search' = 'i3.4xlarge.search', 'i3.8xlarge.search' = 'i3.8xlarge.search', 'i3.16xlarge.search' = 'i3.16xlarge.search', 'r6g.large.search' = 'r6g.large.search', 'r6g.xlarge.search' = 'r6g.xlarge.search', 'r6g.2xlarge.search' = 'r6g.2xlarge.search', 'r6g.4xlarge.search' = 'r6g.4xlarge.search', 'r6g.8xlarge.search' = 'r6g.8xlarge.search', 'r6g.12xlarge.search' = 'r6g.12xlarge.search', 'm6g.large.search' = 'm6g.large.search', 'm6g.xlarge.search' = 'm6g.xlarge.search', 'm6g.2xlarge.search' = 'm6g.2xlarge.search', 'm6g.4xlarge.search' = 'm6g.4xlarge.search', 'm6g.8xlarge.search' = 'm6g.8xlarge.search', 'm6g.12xlarge.search' = 'm6g.12xlarge.search', 'c6g.large.search' = 'c6g.large.search', 'c6g.xlarge.search' = 'c6g.xlarge.search', 'c6g.2xlarge.search' = 'c6g.2xlarge.search', 'c6g.4xlarge.search' = 'c6g.4xlarge.search', 'c6g.8xlarge.search' = 'c6g.8xlarge.search', 'c6g.12xlarge.search' = 'c6g.12xlarge.search', 'r6gd.large.search' = 'r6gd.large.search', 'r6gd.xlarge.search' = 'r6gd.xlarge.search', 'r6gd.2xlarge.search' = 'r6gd.2xlarge.search', 'r6gd.4xlarge.search' = 'r6gd.4xlarge.search', 'r6gd.8xlarge.search' = 'r6gd.8xlarge.search', 'r6gd.12xlarge.search' = 'r6gd.12xlarge.search', 'r6gd.16xlarge.search' = 'r6gd.16xlarge.search', 't4g.small.search' = 't4g.small.search', 't4g.medium.search' = 't4g.medium.search' }


	/** The zone awareness configuration for an Amazon OpenSearch Service domain. */
	export interface ZoneAwarenessConfig {
		AvailabilityZoneCount?: number | null;
	}

	/** The zone awareness configuration for an Amazon OpenSearch Service domain. */
	export interface ZoneAwarenessConfigFormProperties {
		AvailabilityZoneCount: FormControl<number | null | undefined>,
	}
	export function CreateZoneAwarenessConfigFormGroup() {
		return new FormGroup<ZoneAwarenessConfigFormProperties>({
			AvailabilityZoneCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OpenSearchWarmPartitionInstanceType { 'ultrawarm1.medium.search' = 'ultrawarm1.medium.search', 'ultrawarm1.large.search' = 'ultrawarm1.large.search', 'ultrawarm1.xlarge.search' = 'ultrawarm1.xlarge.search' }


	/** Container for the parameters required to enable cold storage for an OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cold-storage.html">Cold storage for Amazon OpenSearch Service</a>. */
	export interface ColdStorageOptions {

		/** Required */
		Enabled: boolean;
	}

	/** Container for the parameters required to enable cold storage for an OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cold-storage.html">Cold storage for Amazon OpenSearch Service</a>. */
	export interface ColdStorageOptionsFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateColdStorageOptionsFormGroup() {
		return new FormGroup<ColdStorageOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for the parameters required to enable EBS-based storage for an OpenSearch Service domain. */
	export interface EBSOptions {
		EBSEnabled?: boolean | null;
		VolumeType?: VolumeType;
		VolumeSize?: number | null;
		Iops?: number | null;
		Throughput?: number | null;
	}

	/** Container for the parameters required to enable EBS-based storage for an OpenSearch Service domain. */
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


	/** The type of EBS volume that a domain uses. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/opensearch-createupdatedomains.html#opensearch-createdomain-configure-ebs">Configuring EBS-based storage</a>. */
	export enum VolumeType { standard = 'standard', gp2 = 'gp2', io1 = 'io1', gp3 = 'gp3' }


	/** The time, in UTC format, when OpenSearch Service takes a daily automated snapshot of the specified domain. Default is <code>0</code> hours. */
	export interface SnapshotOptions {
		AutomatedSnapshotStartHour?: number | null;
	}

	/** The time, in UTC format, when OpenSearch Service takes a daily automated snapshot of the specified domain. Default is <code>0</code> hours. */
	export interface SnapshotOptionsFormProperties {
		AutomatedSnapshotStartHour: FormControl<number | null | undefined>,
	}
	export function CreateSnapshotOptionsFormGroup() {
		return new FormGroup<SnapshotOptionsFormProperties>({
			AutomatedSnapshotStartHour: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the subnets and security groups for an Amazon OpenSearch Service domain provisioned within a virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching your Amazon OpenSearch Service domains using a VPC</a>. This information only exists if the domain was created with <code>VPCOptions</code>. */
	export interface VPCDerivedInfo {
		VPCId?: string;
		SubnetIds?: Array<string>;
		AvailabilityZones?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}

	/** Information about the subnets and security groups for an Amazon OpenSearch Service domain provisioned within a virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching your Amazon OpenSearch Service domains using a VPC</a>. This information only exists if the domain was created with <code>VPCOptions</code>. */
	export interface VPCDerivedInfoFormProperties {
		VPCId: FormControl<string | null | undefined>,
	}
	export function CreateVPCDerivedInfoFormGroup() {
		return new FormGroup<VPCDerivedInfoFormProperties>({
			VPCId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for the parameters required to enable Cognito authentication for an OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html">Configuring Amazon Cognito authentication for OpenSearch Dashboards</a>. */
	export interface CognitoOptions {
		Enabled?: boolean | null;
		UserPoolId?: string;
		IdentityPoolId?: string;
		RoleArn?: string;
	}

	/** Container for the parameters required to enable Cognito authentication for an OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html">Configuring Amazon Cognito authentication for OpenSearch Dashboards</a>. */
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


	/** Specifies whether the domain should encrypt data at rest, and if so, the Key Management Service (KMS) key to use. Can be used only to create a new domain, not update an existing one. */
	export interface EncryptionAtRestOptions {
		Enabled?: boolean | null;
		KmsKeyId?: string;
	}

	/** Specifies whether the domain should encrypt data at rest, and if so, the Key Management Service (KMS) key to use. Can be used only to create a new domain, not update an existing one. */
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


	/** Enables or disables node-to-node encryption. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ntn.html">Node-to-node encryption for Amazon OpenSearch Service</a>. */
	export interface NodeToNodeEncryptionOptions {
		Enabled?: boolean | null;
	}

	/** Enables or disables node-to-node encryption. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ntn.html">Node-to-node encryption for Amazon OpenSearch Service</a>. */
	export interface NodeToNodeEncryptionOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateNodeToNodeEncryptionOptionsFormGroup() {
		return new FormGroup<NodeToNodeEncryptionOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Exposes native OpenSearch configuration values from <code>opensearch.yml</code>. The following advanced options are available: </p> <ul> <li> <p>Allows references to indexes in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. Default is <code>true</code>.</p> </li> <li> <p>Specifies the percentage of heap space allocated to field data. Default is unbounded.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced cluster parameters</a>.</p> */
	export interface AdvancedOptions {
	}

	/** <p>Exposes native OpenSearch configuration values from <code>opensearch.yml</code>. The following advanced options are available: </p> <ul> <li> <p>Allows references to indexes in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. Default is <code>true</code>.</p> </li> <li> <p>Specifies the percentage of heap space allocated to field data. Default is unbounded.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced cluster parameters</a>.</p> */
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


	/** Options to configure a custom endpoint for an OpenSearch Service domain. */
	export interface DomainEndpointOptions {
		EnforceHTTPS?: boolean | null;
		TLSSecurityPolicy?: TLSSecurityPolicy;
		CustomEndpointEnabled?: boolean | null;
		CustomEndpoint?: string;
		CustomEndpointCertificateArn?: string;
	}

	/** Options to configure a custom endpoint for an OpenSearch Service domain. */
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


	/** Container for fine-grained access control settings. */
	export interface AdvancedSecurityOptions {
		Enabled?: boolean | null;
		InternalUserDatabaseEnabled?: boolean | null;
		SAMLOptions?: SAMLOptionsOutput;
		AnonymousAuthDisableDate?: Date;
		AnonymousAuthEnabled?: boolean | null;
	}

	/** Container for fine-grained access control settings. */
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


	/** The SAML identity povider information. */
	export interface SAMLIdp {

		/** Required */
		MetadataContent: string;

		/** Required */
		EntityId: string;
	}

	/** The SAML identity povider information. */
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


	/** The Auto-Tune settings for a domain, displayed when enabling or disabling Auto-Tune. */
	export interface AutoTuneOptionsOutput {
		State?: AutoTuneState;
		ErrorMessage?: string;
		UseOffPeakWindow?: boolean | null;
	}

	/** The Auto-Tune settings for a domain, displayed when enabling or disabling Auto-Tune. */
	export interface AutoTuneOptionsOutputFormProperties {
		State: FormControl<AutoTuneState | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		UseOffPeakWindow: FormControl<boolean | null | undefined>,
	}
	export function CreateAutoTuneOptionsOutputFormGroup() {
		return new FormGroup<AutoTuneOptionsOutputFormProperties>({
			State: new FormControl<AutoTuneState | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			UseOffPeakWindow: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The Auto-Tune state for the domain. For valid states see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>.  */
	export enum AutoTuneState { ENABLED = 'ENABLED', DISABLED = 'DISABLED', ENABLE_IN_PROGRESS = 'ENABLE_IN_PROGRESS', DISABLE_IN_PROGRESS = 'DISABLE_IN_PROGRESS', DISABLED_AND_ROLLBACK_SCHEDULED = 'DISABLED_AND_ROLLBACK_SCHEDULED', DISABLED_AND_ROLLBACK_IN_PROGRESS = 'DISABLED_AND_ROLLBACK_IN_PROGRESS', DISABLED_AND_ROLLBACK_COMPLETE = 'DISABLED_AND_ROLLBACK_COMPLETE', DISABLED_AND_ROLLBACK_ERROR = 'DISABLED_AND_ROLLBACK_ERROR', ERROR = 'ERROR' }


	/** Container for information about a configuration change happening on a domain. */
	export interface ChangeProgressDetails {
		ChangeId?: string;
		Message?: string;
	}

	/** Container for information about a configuration change happening on a domain. */
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


	/** Options for a domain's <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html">off-peak window</a>, during which OpenSearch Service can perform mandatory configuration changes on the domain. */
	export interface OffPeakWindowOptions {
		Enabled?: boolean | null;
		OffPeakWindow?: OffPeakWindow;
	}

	/** Options for a domain's <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html">off-peak window</a>, during which OpenSearch Service can perform mandatory configuration changes on the domain. */
	export interface OffPeakWindowOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateOffPeakWindowOptionsFormGroup() {
		return new FormGroup<OffPeakWindowOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>A custom 10-hour, low-traffic window during which OpenSearch Service can perform mandatory configuration changes on the domain. These actions can include scheduled service software updates and blue/green Auto-Tune enhancements. OpenSearch Service will schedule these actions during the window that you specify.</p> <p>If you don't specify a window start time, it defaults to 10:00 P.M. local time.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html">Defining off-peak maintenance windows for Amazon OpenSearch Service</a>.</p> */
	export interface OffPeakWindow {
		WindowStartTime?: WindowStartTime;
	}

	/** <p>A custom 10-hour, low-traffic window during which OpenSearch Service can perform mandatory configuration changes on the domain. These actions can include scheduled service software updates and blue/green Auto-Tune enhancements. OpenSearch Service will schedule these actions during the window that you specify.</p> <p>If you don't specify a window start time, it defaults to 10:00 P.M. local time.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html">Defining off-peak maintenance windows for Amazon OpenSearch Service</a>.</p> */
	export interface OffPeakWindowFormProperties {
	}
	export function CreateOffPeakWindowFormGroup() {
		return new FormGroup<OffPeakWindowFormProperties>({
		});

	}


	/** The desired start time for an <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html">off-peak maintenance window</a>. */
	export interface WindowStartTime {

		/** Required */
		Hours: number;

		/** Required */
		Minutes: number;
	}

	/** The desired start time for an <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html">off-peak maintenance window</a>. */
	export interface WindowStartTimeFormProperties {

		/** Required */
		Hours: FormControl<number | null | undefined>,

		/** Required */
		Minutes: FormControl<number | null | undefined>,
	}
	export function CreateWindowStartTimeFormGroup() {
		return new FormGroup<WindowStartTimeFormProperties>({
			Hours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Minutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Options for configuring service software updates for a domain. */
	export interface SoftwareUpdateOptions {
		AutoSoftwareUpdateEnabled?: boolean | null;
	}

	/** Options for configuring service software updates for a domain. */
	export interface SoftwareUpdateOptionsFormProperties {
		AutoSoftwareUpdateEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSoftwareUpdateOptionsFormGroup() {
		return new FormGroup<SoftwareUpdateOptionsFormProperties>({
			AutoSoftwareUpdateEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Specifies whether the Amazon OpenSearch Service domain publishes the OpenSearch application and slow logs to Amazon CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createdomain-configure-slow-logs.html">Monitoring OpenSearch logs with Amazon CloudWatch Logs</a>.</p> <note> <p>After you enable log publishing, you still have to enable the collection of slow logs using the OpenSearch REST API.</p> </note> */
	export interface LogPublishingOption {
		CloudWatchLogsLogGroupArn?: string;
		Enabled?: boolean | null;
	}

	/** <p>Specifies whether the Amazon OpenSearch Service domain publishes the OpenSearch application and slow logs to Amazon CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createdomain-configure-slow-logs.html">Monitoring OpenSearch logs with Amazon CloudWatch Logs</a>.</p> <note> <p>After you enable log publishing, you still have to enable the collection of slow logs using the OpenSearch REST API.</p> </note> */
	export interface LogPublishingOptionFormProperties {
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLogPublishingOptionFormGroup() {
		return new FormGroup<LogPublishingOptionFormProperties>({
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Credentials for the master user for a domain. */
	export interface MasterUserOptions {
		MasterUserARN?: string;
		MasterUserName?: string;
		MasterUserPassword?: string;
	}

	/** Credentials for the master user for a domain. */
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


	/** The SAML authentication configuration for an Amazon OpenSearch Service domain. */
	export interface SAMLOptionsInput {
		Enabled?: boolean | null;
		Idp?: SAMLIdp;
		MasterUserName?: string;
		MasterBackendRole?: string;
		SubjectKey?: string;
		RolesKey?: string;
		SessionTimeoutMinutes?: number | null;
	}

	/** The SAML authentication configuration for an Amazon OpenSearch Service domain. */
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


	/** The Auto-Tune desired state. Valid values are ENABLED and DISABLED. */
	export enum AutoTuneDesiredState { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** <note> <p>This object is deprecated. Use the domain's <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html">off-peak window</a> to schedule Auto-Tune optimizations. For migration instructions, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html#off-peak-migrate">Migrating from Auto-Tune maintenance windows</a>.</p> </note> <p>The Auto-Tune maintenance schedule. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>.</p> */
	export interface AutoTuneMaintenanceSchedule {
		StartAt?: Date;
		Duration?: Duration;
		CronExpressionForRecurrence?: string;
	}

	/** <note> <p>This object is deprecated. Use the domain's <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html">off-peak window</a> to schedule Auto-Tune optimizations. For migration instructions, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html#off-peak-migrate">Migrating from Auto-Tune maintenance windows</a>.</p> </note> <p>The Auto-Tune maintenance schedule. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>.</p> */
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


	/** The duration of a maintenance schedule. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>. */
	export interface Duration {
		Value?: number | null;
		Unit?: TimeUnit;
	}

	/** The duration of a maintenance schedule. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>. */
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


	/** The unit of a maintenance schedule duration. Valid value is <code>HOUR</code>. */
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


	/** The result of a <code>CreateOutboundConnection</code> request. Contains details about the newly created cross-cluster connection. */
	export interface CreateOutboundConnectionResponse {
		LocalDomainInfo?: DomainInformationContainer;
		RemoteDomainInfo?: DomainInformationContainer;
		ConnectionAlias?: string;
		ConnectionStatus?: OutboundConnectionStatus;
		ConnectionId?: string;
		ConnectionMode?: ConnectionMode;
		ConnectionProperties?: ConnectionProperties;
	}

	/** The result of a <code>CreateOutboundConnection</code> request. Contains details about the newly created cross-cluster connection. */
	export interface CreateOutboundConnectionResponseFormProperties {
		ConnectionAlias: FormControl<string | null | undefined>,
		ConnectionId: FormControl<string | null | undefined>,
		ConnectionMode: FormControl<ConnectionMode | null | undefined>,
	}
	export function CreateCreateOutboundConnectionResponseFormGroup() {
		return new FormGroup<CreateOutboundConnectionResponseFormProperties>({
			ConnectionAlias: new FormControl<string | null | undefined>(undefined),
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionMode: new FormControl<ConnectionMode | null | undefined>(undefined),
		});

	}


	/** The status of an outbound cross-cluster connection. */
	export interface OutboundConnectionStatus {
		StatusCode?: OutboundConnectionStatusCode;
		Message?: string;
	}

	/** The status of an outbound cross-cluster connection. */
	export interface OutboundConnectionStatusFormProperties {
		StatusCode: FormControl<OutboundConnectionStatusCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateOutboundConnectionStatusFormGroup() {
		return new FormGroup<OutboundConnectionStatusFormProperties>({
			StatusCode: new FormControl<OutboundConnectionStatusCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OutboundConnectionStatusCode { VALIDATING = 'VALIDATING', VALIDATION_FAILED = 'VALIDATION_FAILED', PENDING_ACCEPTANCE = 'PENDING_ACCEPTANCE', APPROVED = 'APPROVED', PROVISIONING = 'PROVISIONING', ACTIVE = 'ACTIVE', REJECTING = 'REJECTING', REJECTED = 'REJECTED', DELETING = 'DELETING', DELETED = 'DELETED' }


	/** The connection properties of an outbound connection. */
	export interface ConnectionProperties {
		Endpoint?: string;
		CrossClusterSearch?: CrossClusterSearchConnectionProperties;
	}

	/** The connection properties of an outbound connection. */
	export interface ConnectionPropertiesFormProperties {
		Endpoint: FormControl<string | null | undefined>,
	}
	export function CreateConnectionPropertiesFormGroup() {
		return new FormGroup<ConnectionPropertiesFormProperties>({
			Endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cross cluster search specific connection properties. */
	export interface CrossClusterSearchConnectionProperties {
		SkipUnavailable?: AutoTuneDesiredState;
	}

	/** Cross cluster search specific connection properties. */
	export interface CrossClusterSearchConnectionPropertiesFormProperties {
		SkipUnavailable: FormControl<AutoTuneDesiredState | null | undefined>,
	}
	export function CreateCrossClusterSearchConnectionPropertiesFormGroup() {
		return new FormGroup<CrossClusterSearchConnectionPropertiesFormProperties>({
			SkipUnavailable: new FormControl<AutoTuneDesiredState | null | undefined>(undefined),
		});

	}


	/** Container for the response returned by the <code>CreatePackage</code> operation. */
	export interface CreatePackageResponse {
		PackageDetails?: PackageDetails;
	}

	/** Container for the response returned by the <code>CreatePackage</code> operation. */
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
		LastUpdatedAt?: Date;
		AvailablePackageVersion?: string;
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

	export interface CreateVpcEndpointResponse {

		/** Required */
		VpcEndpoint: VpcEndpoint;
	}
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

	export enum VpcEndpointStatus { CREATING = 'CREATING', CREATE_FAILED = 'CREATE_FAILED', ACTIVE = 'ACTIVE', UPDATING = 'UPDATING', UPDATE_FAILED = 'UPDATE_FAILED', DELETING = 'DELETING', DELETE_FAILED = 'DELETE_FAILED' }


	/** The results of a <code>DeleteDomain</code> request. Contains the status of the pending deletion, or a "domain not found" error if the domain and all of its resources have been deleted. */
	export interface DeleteDomainResponse {
		DomainStatus?: DomainStatus;
	}

	/** The results of a <code>DeleteDomain</code> request. Contains the status of the pending deletion, or a "domain not found" error if the domain and all of its resources have been deleted. */
	export interface DeleteDomainResponseFormProperties {
	}
	export function CreateDeleteDomainResponseFormGroup() {
		return new FormGroup<DeleteDomainResponseFormProperties>({
		});

	}


	/** The results of a <code>DeleteInboundConnection</code> operation. Contains details about the deleted inbound connection. */
	export interface DeleteInboundConnectionResponse {
		Connection?: InboundConnection;
	}

	/** The results of a <code>DeleteInboundConnection</code> operation. Contains details about the deleted inbound connection. */
	export interface DeleteInboundConnectionResponseFormProperties {
	}
	export function CreateDeleteInboundConnectionResponseFormGroup() {
		return new FormGroup<DeleteInboundConnectionResponseFormProperties>({
		});

	}


	/** Details about the deleted outbound connection. */
	export interface DeleteOutboundConnectionResponse {
		Connection?: OutboundConnection;
	}

	/** Details about the deleted outbound connection. */
	export interface DeleteOutboundConnectionResponseFormProperties {
	}
	export function CreateDeleteOutboundConnectionResponseFormGroup() {
		return new FormGroup<DeleteOutboundConnectionResponseFormProperties>({
		});

	}


	/** Specifies details about an outbound cross-cluster connection. */
	export interface OutboundConnection {
		LocalDomainInfo?: DomainInformationContainer;
		RemoteDomainInfo?: DomainInformationContainer;
		ConnectionId?: string;
		ConnectionAlias?: string;
		ConnectionStatus?: OutboundConnectionStatus;
		ConnectionMode?: ConnectionMode;
		ConnectionProperties?: ConnectionProperties;
	}

	/** Specifies details about an outbound cross-cluster connection. */
	export interface OutboundConnectionFormProperties {
		ConnectionId: FormControl<string | null | undefined>,
		ConnectionAlias: FormControl<string | null | undefined>,
		ConnectionMode: FormControl<ConnectionMode | null | undefined>,
	}
	export function CreateOutboundConnectionFormGroup() {
		return new FormGroup<OutboundConnectionFormProperties>({
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionAlias: new FormControl<string | null | undefined>(undefined),
			ConnectionMode: new FormControl<ConnectionMode | null | undefined>(undefined),
		});

	}


	/** Container for the response parameters to the <code>DeletePackage</code> operation. */
	export interface DeletePackageResponse {
		PackageDetails?: PackageDetails;
	}

	/** Container for the response parameters to the <code>DeletePackage</code> operation. */
	export interface DeletePackageResponseFormProperties {
	}
	export function CreateDeletePackageResponseFormGroup() {
		return new FormGroup<DeletePackageResponseFormProperties>({
		});

	}

	export interface DeleteVpcEndpointResponse {

		/** Required */
		VpcEndpointSummary: VpcEndpointSummary;
	}
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


	/** Contains the status of the domain specified in the request. */
	export interface DescribeDomainResponse {

		/** Required */
		DomainStatus: DomainStatus;
	}

	/** Contains the status of the domain specified in the request. */
	export interface DescribeDomainResponseFormProperties {
	}
	export function CreateDescribeDomainResponseFormGroup() {
		return new FormGroup<DescribeDomainResponseFormProperties>({
		});

	}


	/** The result of a <code>DescribeDomainAutoTunes</code> request. */
	export interface DescribeDomainAutoTunesResponse {
		AutoTunes?: Array<AutoTune>;
		NextToken?: string;
	}

	/** The result of a <code>DescribeDomainAutoTunes</code> request. */
	export interface DescribeDomainAutoTunesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDomainAutoTunesResponseFormGroup() {
		return new FormGroup<DescribeDomainAutoTunesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an Auto-Tune action. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>. */
	export interface AutoTune {
		AutoTuneType?: AutoTuneType;
		AutoTuneDetails?: AutoTuneDetails;
	}

	/** Information about an Auto-Tune action. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>. */
	export interface AutoTuneFormProperties {
		AutoTuneType: FormControl<AutoTuneType | null | undefined>,
	}
	export function CreateAutoTuneFormGroup() {
		return new FormGroup<AutoTuneFormProperties>({
			AutoTuneType: new FormControl<AutoTuneType | null | undefined>(undefined),
		});

	}


	/** Specifies the Auto-Tune type. Valid value is SCHEDULED_ACTION. */
	export enum AutoTuneType { SCHEDULED_ACTION = 'SCHEDULED_ACTION' }


	/** Specifies details about a scheduled Auto-Tune action. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>. */
	export interface AutoTuneDetails {
		ScheduledAutoTuneDetails?: ScheduledAutoTuneDetails;
	}

	/** Specifies details about a scheduled Auto-Tune action. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>. */
	export interface AutoTuneDetailsFormProperties {
	}
	export function CreateAutoTuneDetailsFormGroup() {
		return new FormGroup<AutoTuneDetailsFormProperties>({
		});

	}


	/** Specifies details about a scheduled Auto-Tune action. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>. */
	export interface ScheduledAutoTuneDetails {
		Date?: Date;
		ActionType?: ScheduledAutoTuneActionType;
		Action?: string;
		Severity?: ScheduledAutoTuneSeverityType;
	}

	/** Specifies details about a scheduled Auto-Tune action. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>. */
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


	/** The Auto-Tune action type. */
	export enum ScheduledAutoTuneActionType { JVM_HEAP_SIZE_TUNING = 'JVM_HEAP_SIZE_TUNING', JVM_YOUNG_GEN_TUNING = 'JVM_YOUNG_GEN_TUNING' }


	/** The Auto-Tune action severity. */
	export enum ScheduledAutoTuneSeverityType { LOW = 'LOW', MEDIUM = 'MEDIUM', HIGH = 'HIGH' }


	/** The result of a <code>DescribeDomainChangeProgress</code> request. Contains progress information for the requested domain change. */
	export interface DescribeDomainChangeProgressResponse {
		ChangeProgressStatus?: ChangeProgressStatusDetails;
	}

	/** The result of a <code>DescribeDomainChangeProgress</code> request. Contains progress information for the requested domain change. */
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


	/** Progress details for each stage of a domain update. */
	export interface ChangeProgressStage {
		Name?: string;
		Status?: string;
		Description?: string;
		LastUpdated?: Date;
	}

	/** Progress details for each stage of a domain update. */
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


	/** Contains the configuration information of the requested domain. */
	export interface DescribeDomainConfigResponse {

		/** Required */
		DomainConfig: DomainConfig;
	}

	/** Contains the configuration information of the requested domain. */
	export interface DescribeDomainConfigResponseFormProperties {
	}
	export function CreateDescribeDomainConfigResponseFormGroup() {
		return new FormGroup<DescribeDomainConfigResponseFormProperties>({
		});

	}


	/** Container for the configuration of an OpenSearch Service domain. */
	export interface DomainConfig {
		EngineVersion?: VersionStatus;
		ClusterConfig?: ClusterConfigStatus;
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
		OffPeakWindowOptions?: OffPeakWindowOptionsStatus;
		SoftwareUpdateOptions?: SoftwareUpdateOptionsStatus;
	}

	/** Container for the configuration of an OpenSearch Service domain. */
	export interface DomainConfigFormProperties {
	}
	export function CreateDomainConfigFormGroup() {
		return new FormGroup<DomainConfigFormProperties>({
		});

	}


	/** The status of the the OpenSearch or Elasticsearch version options for the specified Amazon OpenSearch Service domain. */
	export interface VersionStatus {

		/** Required */
		Options: string;

		/** Required */
		Status: OptionStatus;
	}

	/** The status of the the OpenSearch or Elasticsearch version options for the specified Amazon OpenSearch Service domain. */
	export interface VersionStatusFormProperties {

		/** Required */
		Options: FormControl<string | null | undefined>,
	}
	export function CreateVersionStatusFormGroup() {
		return new FormGroup<VersionStatusFormProperties>({
			Options: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the current status of an entity. */
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

	/** Provides the current status of an entity. */
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


	/** <p>The state of a requested domain configuration change. Can be one of the following:</p> <ul> <li> <p> <b>Processing</b> - The requested change is still in progress.</p> </li> <li> <p> <b>Active</b> - The requested change is processed and deployed to the domain.</p> </li> </ul> */
	export enum OptionState { RequiresIndexDocuments = 'RequiresIndexDocuments', Processing = 'Processing', Active = 'Active' }


	/** The cluster configuration status for a domain. */
	export interface ClusterConfigStatus {

		/** Required */
		Options: ClusterConfig;

		/** Required */
		Status: OptionStatus;
	}

	/** The cluster configuration status for a domain. */
	export interface ClusterConfigStatusFormProperties {
	}
	export function CreateClusterConfigStatusFormGroup() {
		return new FormGroup<ClusterConfigStatusFormProperties>({
		});

	}


	/** The status of the EBS options for the specified OpenSearch Service domain. */
	export interface EBSOptionsStatus {

		/** Required */
		Options: EBSOptions;

		/** Required */
		Status: OptionStatus;
	}

	/** The status of the EBS options for the specified OpenSearch Service domain. */
	export interface EBSOptionsStatusFormProperties {
	}
	export function CreateEBSOptionsStatusFormGroup() {
		return new FormGroup<EBSOptionsStatusFormProperties>({
		});

	}


	/** The configured access rules for the domain's search endpoint, and the current status of those rules. */
	export interface AccessPoliciesStatus {

		/** Required */
		Options: string;

		/** Required */
		Status: OptionStatus;
	}

	/** The configured access rules for the domain's search endpoint, and the current status of those rules. */
	export interface AccessPoliciesStatusFormProperties {

		/** Required */
		Options: FormControl<string | null | undefined>,
	}
	export function CreateAccessPoliciesStatusFormGroup() {
		return new FormGroup<AccessPoliciesStatusFormProperties>({
			Options: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for information about a daily automated snapshot for an OpenSearch Service domain. */
	export interface SnapshotOptionsStatus {

		/** Required */
		Options: SnapshotOptions;

		/** Required */
		Status: OptionStatus;
	}

	/** Container for information about a daily automated snapshot for an OpenSearch Service domain. */
	export interface SnapshotOptionsStatusFormProperties {
	}
	export function CreateSnapshotOptionsStatusFormGroup() {
		return new FormGroup<SnapshotOptionsStatusFormProperties>({
		});

	}


	/** Status of the VPC options for a specified domain. */
	export interface VPCDerivedInfoStatus {

		/** Required */
		Options: VPCDerivedInfo;

		/** Required */
		Status: OptionStatus;
	}

	/** Status of the VPC options for a specified domain. */
	export interface VPCDerivedInfoStatusFormProperties {
	}
	export function CreateVPCDerivedInfoStatusFormGroup() {
		return new FormGroup<VPCDerivedInfoStatusFormProperties>({
		});

	}


	/** The status of the Cognito options for the specified domain. */
	export interface CognitoOptionsStatus {

		/** Required */
		Options: CognitoOptions;

		/** Required */
		Status: OptionStatus;
	}

	/** The status of the Cognito options for the specified domain. */
	export interface CognitoOptionsStatusFormProperties {
	}
	export function CreateCognitoOptionsStatusFormGroup() {
		return new FormGroup<CognitoOptionsStatusFormProperties>({
		});

	}


	/** Status of the encryption at rest options for the specified OpenSearch Service domain. */
	export interface EncryptionAtRestOptionsStatus {

		/** Required */
		Options: EncryptionAtRestOptions;

		/** Required */
		Status: OptionStatus;
	}

	/** Status of the encryption at rest options for the specified OpenSearch Service domain. */
	export interface EncryptionAtRestOptionsStatusFormProperties {
	}
	export function CreateEncryptionAtRestOptionsStatusFormGroup() {
		return new FormGroup<EncryptionAtRestOptionsStatusFormProperties>({
		});

	}


	/** Status of the node-to-node encryption options for the specified domain. */
	export interface NodeToNodeEncryptionOptionsStatus {

		/** Required */
		Options: NodeToNodeEncryptionOptions;

		/** Required */
		Status: OptionStatus;
	}

	/** Status of the node-to-node encryption options for the specified domain. */
	export interface NodeToNodeEncryptionOptionsStatusFormProperties {
	}
	export function CreateNodeToNodeEncryptionOptionsStatusFormGroup() {
		return new FormGroup<NodeToNodeEncryptionOptionsStatusFormProperties>({
		});

	}


	/** <p>Status of the advanced options for the specified domain. The following options are available: </p> <ul> <li> <p> <code>"rest.action.multi.allow_explicit_index": "true" | "false"</code> - Note the use of a string rather than a boolean. Specifies whether explicit references to indexes are allowed inside the body of HTTP requests. If you want to configure access policies for domain sub-resources, such as specific indexes and domain APIs, you must disable this property. Default is true.</p> </li> <li> <p> <code>"indices.fielddata.cache.size": "80" </code> - Note the use of a string rather than a boolean. Specifies the percentage of heap space allocated to field data. Default is unbounded.</p> </li> <li> <p> <code>"indices.query.bool.max_clause_count": "1024"</code> - Note the use of a string rather than a boolean. Specifies the maximum number of clauses allowed in a Lucene boolean query. Default is 1,024. Queries with more than the permitted number of clauses result in a <code>TooManyClauses</code> error.</p> </li> <li> <p> <code>"override_main_response_version": "true" | "false"</code> - Note the use of a string rather than a boolean. Specifies whether the domain reports its version as 7.10 to allow Elasticsearch OSS clients and plugins to continue working with it. Default is false when creating a domain and true when upgrading a domain.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced cluster parameters</a>.</p> */
	export interface AdvancedOptionsStatus {

		/** Required */
		Options: AdvancedOptions;

		/** Required */
		Status: OptionStatus;
	}

	/** <p>Status of the advanced options for the specified domain. The following options are available: </p> <ul> <li> <p> <code>"rest.action.multi.allow_explicit_index": "true" | "false"</code> - Note the use of a string rather than a boolean. Specifies whether explicit references to indexes are allowed inside the body of HTTP requests. If you want to configure access policies for domain sub-resources, such as specific indexes and domain APIs, you must disable this property. Default is true.</p> </li> <li> <p> <code>"indices.fielddata.cache.size": "80" </code> - Note the use of a string rather than a boolean. Specifies the percentage of heap space allocated to field data. Default is unbounded.</p> </li> <li> <p> <code>"indices.query.bool.max_clause_count": "1024"</code> - Note the use of a string rather than a boolean. Specifies the maximum number of clauses allowed in a Lucene boolean query. Default is 1,024. Queries with more than the permitted number of clauses result in a <code>TooManyClauses</code> error.</p> </li> <li> <p> <code>"override_main_response_version": "true" | "false"</code> - Note the use of a string rather than a boolean. Specifies whether the domain reports its version as 7.10 to allow Elasticsearch OSS clients and plugins to continue working with it. Default is false when creating a domain and true when upgrading a domain.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced cluster parameters</a>.</p> */
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


	/** The configured endpoint options for a domain and their current status. */
	export interface DomainEndpointOptionsStatus {

		/** Required */
		Options: DomainEndpointOptions;

		/** Required */
		Status: OptionStatus;
	}

	/** The configured endpoint options for a domain and their current status. */
	export interface DomainEndpointOptionsStatusFormProperties {
	}
	export function CreateDomainEndpointOptionsStatusFormGroup() {
		return new FormGroup<DomainEndpointOptionsStatusFormProperties>({
		});

	}


	/** The status of fine-grained access control settings for a domain. */
	export interface AdvancedSecurityOptionsStatus {

		/** Required */
		Options: AdvancedSecurityOptions;

		/** Required */
		Status: OptionStatus;
	}

	/** The status of fine-grained access control settings for a domain. */
	export interface AdvancedSecurityOptionsStatusFormProperties {
	}
	export function CreateAdvancedSecurityOptionsStatusFormGroup() {
		return new FormGroup<AdvancedSecurityOptionsStatusFormProperties>({
		});

	}


	/** The Auto-Tune status for the domain. */
	export interface AutoTuneOptionsStatus {
		Options?: AutoTuneOptions;
		Status?: AutoTuneStatus;
	}

	/** The Auto-Tune status for the domain. */
	export interface AutoTuneOptionsStatusFormProperties {
	}
	export function CreateAutoTuneOptionsStatusFormGroup() {
		return new FormGroup<AutoTuneOptionsStatusFormProperties>({
		});

	}


	/** Auto-Tune settings when updating a domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>. */
	export interface AutoTuneOptions {
		DesiredState?: AutoTuneDesiredState;
		RollbackOnDisable?: RollbackOnDisable;
		MaintenanceSchedules?: Array<AutoTuneMaintenanceSchedule>;
		UseOffPeakWindow?: boolean | null;
	}

	/** Auto-Tune settings when updating a domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>. */
	export interface AutoTuneOptionsFormProperties {
		DesiredState: FormControl<AutoTuneDesiredState | null | undefined>,
		RollbackOnDisable: FormControl<RollbackOnDisable | null | undefined>,
		UseOffPeakWindow: FormControl<boolean | null | undefined>,
	}
	export function CreateAutoTuneOptionsFormGroup() {
		return new FormGroup<AutoTuneOptionsFormProperties>({
			DesiredState: new FormControl<AutoTuneDesiredState | null | undefined>(undefined),
			RollbackOnDisable: new FormControl<RollbackOnDisable | null | undefined>(undefined),
			UseOffPeakWindow: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The rollback state while disabling Auto-Tune for the domain. */
	export enum RollbackOnDisable { NO_ROLLBACK = 'NO_ROLLBACK', DEFAULT_ROLLBACK = 'DEFAULT_ROLLBACK' }


	/** The current status of Auto-Tune for the domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>. */
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

	/** The current status of Auto-Tune for the domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>. */
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


	/** The status of <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html">off-peak window</a> options for a domain. */
	export interface OffPeakWindowOptionsStatus {
		Options?: OffPeakWindowOptions;
		Status?: OptionStatus;
	}

	/** The status of <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html">off-peak window</a> options for a domain. */
	export interface OffPeakWindowOptionsStatusFormProperties {
	}
	export function CreateOffPeakWindowOptionsStatusFormGroup() {
		return new FormGroup<OffPeakWindowOptionsStatusFormProperties>({
		});

	}


	/** The status of the service software options for a domain. */
	export interface SoftwareUpdateOptionsStatus {
		Options?: SoftwareUpdateOptions;
		Status?: OptionStatus;
	}

	/** The status of the service software options for a domain. */
	export interface SoftwareUpdateOptionsStatusFormProperties {
	}
	export function CreateSoftwareUpdateOptionsStatusFormGroup() {
		return new FormGroup<SoftwareUpdateOptionsStatusFormProperties>({
		});

	}


	/** The result of a <code>DescribeDomainHealth</code> request. Contains health information for the requested domain. */
	export interface DescribeDomainHealthResponse {
		DomainState?: DomainState;
		AvailabilityZoneCount?: string;
		ActiveAvailabilityZoneCount?: string;
		StandByAvailabilityZoneCount?: string;
		DataNodeCount?: string;
		DedicatedMaster?: boolean | null;
		MasterEligibleNodeCount?: string;
		WarmNodeCount?: string;
		MasterNode?: MasterNodeStatus;
		ClusterHealth?: DomainHealth;
		TotalShards?: string;
		TotalUnAssignedShards?: string;
		EnvironmentInformation?: Array<EnvironmentInfo>;
	}

	/** The result of a <code>DescribeDomainHealth</code> request. Contains health information for the requested domain. */
	export interface DescribeDomainHealthResponseFormProperties {
		DomainState: FormControl<DomainState | null | undefined>,
		AvailabilityZoneCount: FormControl<string | null | undefined>,
		ActiveAvailabilityZoneCount: FormControl<string | null | undefined>,
		StandByAvailabilityZoneCount: FormControl<string | null | undefined>,
		DataNodeCount: FormControl<string | null | undefined>,
		DedicatedMaster: FormControl<boolean | null | undefined>,
		MasterEligibleNodeCount: FormControl<string | null | undefined>,
		WarmNodeCount: FormControl<string | null | undefined>,
		MasterNode: FormControl<MasterNodeStatus | null | undefined>,
		ClusterHealth: FormControl<DomainHealth | null | undefined>,
		TotalShards: FormControl<string | null | undefined>,
		TotalUnAssignedShards: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDomainHealthResponseFormGroup() {
		return new FormGroup<DescribeDomainHealthResponseFormProperties>({
			DomainState: new FormControl<DomainState | null | undefined>(undefined),
			AvailabilityZoneCount: new FormControl<string | null | undefined>(undefined),
			ActiveAvailabilityZoneCount: new FormControl<string | null | undefined>(undefined),
			StandByAvailabilityZoneCount: new FormControl<string | null | undefined>(undefined),
			DataNodeCount: new FormControl<string | null | undefined>(undefined),
			DedicatedMaster: new FormControl<boolean | null | undefined>(undefined),
			MasterEligibleNodeCount: new FormControl<string | null | undefined>(undefined),
			WarmNodeCount: new FormControl<string | null | undefined>(undefined),
			MasterNode: new FormControl<MasterNodeStatus | null | undefined>(undefined),
			ClusterHealth: new FormControl<DomainHealth | null | undefined>(undefined),
			TotalShards: new FormControl<string | null | undefined>(undefined),
			TotalUnAssignedShards: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DomainState { Active = 'Active', Processing = 'Processing', NotAvailable = 'NotAvailable' }

	export enum MasterNodeStatus { Available = 'Available', UnAvailable = 'UnAvailable' }

	export enum DomainHealth { Red = 'Red', Yellow = 'Yellow', Green = 'Green', NotAvailable = 'NotAvailable' }


	/** Information about the active domain environment. */
	export interface EnvironmentInfo {
		AvailabilityZoneInformation?: Array<AvailabilityZoneInfo>;
	}

	/** Information about the active domain environment. */
	export interface EnvironmentInfoFormProperties {
	}
	export function CreateEnvironmentInfoFormGroup() {
		return new FormGroup<EnvironmentInfoFormProperties>({
		});

	}


	/** Information about an Availability Zone on a domain. */
	export interface AvailabilityZoneInfo {
		AvailabilityZoneName?: string;
		ZoneStatus?: ZoneStatus;
		ConfiguredDataNodeCount?: string;
		AvailableDataNodeCount?: string;
		TotalShards?: string;
		TotalUnAssignedShards?: string;
	}

	/** Information about an Availability Zone on a domain. */
	export interface AvailabilityZoneInfoFormProperties {
		AvailabilityZoneName: FormControl<string | null | undefined>,
		ZoneStatus: FormControl<ZoneStatus | null | undefined>,
		ConfiguredDataNodeCount: FormControl<string | null | undefined>,
		AvailableDataNodeCount: FormControl<string | null | undefined>,
		TotalShards: FormControl<string | null | undefined>,
		TotalUnAssignedShards: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityZoneInfoFormGroup() {
		return new FormGroup<AvailabilityZoneInfoFormProperties>({
			AvailabilityZoneName: new FormControl<string | null | undefined>(undefined),
			ZoneStatus: new FormControl<ZoneStatus | null | undefined>(undefined),
			ConfiguredDataNodeCount: new FormControl<string | null | undefined>(undefined),
			AvailableDataNodeCount: new FormControl<string | null | undefined>(undefined),
			TotalShards: new FormControl<string | null | undefined>(undefined),
			TotalUnAssignedShards: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ZoneStatus { Active = 'Active', StandBy = 'StandBy', NotAvailable = 'NotAvailable' }


	/** The result of a <code>DescribeDomainNodes</code> request. Contains information about the nodes on the requested domain.  */
	export interface DescribeDomainNodesResponse {
		DomainNodesStatusList?: Array<DomainNodesStatus>;
	}

	/** The result of a <code>DescribeDomainNodes</code> request. Contains information about the nodes on the requested domain.  */
	export interface DescribeDomainNodesResponseFormProperties {
	}
	export function CreateDescribeDomainNodesResponseFormGroup() {
		return new FormGroup<DescribeDomainNodesResponseFormProperties>({
		});

	}


	/** Container for information about nodes on the domain. */
	export interface DomainNodesStatus {
		NodeId?: string;
		NodeType?: NodeType;
		AvailabilityZone?: string;
		InstanceType?: OpenSearchPartitionInstanceType;
		NodeStatus?: ZoneStatus;
		StorageType?: string;
		StorageVolumeType?: VolumeType;
		StorageSize?: string;
	}

	/** Container for information about nodes on the domain. */
	export interface DomainNodesStatusFormProperties {
		NodeId: FormControl<string | null | undefined>,
		NodeType: FormControl<NodeType | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		InstanceType: FormControl<OpenSearchPartitionInstanceType | null | undefined>,
		NodeStatus: FormControl<ZoneStatus | null | undefined>,
		StorageType: FormControl<string | null | undefined>,
		StorageVolumeType: FormControl<VolumeType | null | undefined>,
		StorageSize: FormControl<string | null | undefined>,
	}
	export function CreateDomainNodesStatusFormGroup() {
		return new FormGroup<DomainNodesStatusFormProperties>({
			NodeId: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<NodeType | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<OpenSearchPartitionInstanceType | null | undefined>(undefined),
			NodeStatus: new FormControl<ZoneStatus | null | undefined>(undefined),
			StorageType: new FormControl<string | null | undefined>(undefined),
			StorageVolumeType: new FormControl<VolumeType | null | undefined>(undefined),
			StorageSize: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NodeType { Data = 'Data', Ultrawarm = 'Ultrawarm', Master = 'Master' }

	export interface DependencyFailureException {
	}
	export interface DependencyFailureExceptionFormProperties {
	}
	export function CreateDependencyFailureExceptionFormGroup() {
		return new FormGroup<DependencyFailureExceptionFormProperties>({
		});

	}


	/** Contains the status of the specified domains or all domains owned by the account. */
	export interface DescribeDomainsResponse {

		/** Required */
		DomainStatusList: Array<DomainStatus>;
	}

	/** Contains the status of the specified domains or all domains owned by the account. */
	export interface DescribeDomainsResponseFormProperties {
	}
	export function CreateDescribeDomainsResponseFormGroup() {
		return new FormGroup<DescribeDomainsResponseFormProperties>({
		});

	}

	export interface DescribeDryRunProgressResponse {
		DryRunProgressStatus?: DryRunProgressStatus;
		DryRunConfig?: DomainStatus;
		DryRunResults?: DryRunResults;
	}
	export interface DescribeDryRunProgressResponseFormProperties {
	}
	export function CreateDescribeDryRunProgressResponseFormGroup() {
		return new FormGroup<DescribeDryRunProgressResponseFormProperties>({
		});

	}


	/** Information about the progress of a pre-upgrade dry run analysis. */
	export interface DryRunProgressStatus {

		/** Required */
		DryRunId: string;

		/** Required */
		DryRunStatus: string;

		/** Required */
		CreationDate: string;

		/** Required */
		UpdateDate: string;
		ValidationFailures?: Array<ValidationFailure>;
	}

	/** Information about the progress of a pre-upgrade dry run analysis. */
	export interface DryRunProgressStatusFormProperties {

		/** Required */
		DryRunId: FormControl<string | null | undefined>,

		/** Required */
		DryRunStatus: FormControl<string | null | undefined>,

		/** Required */
		CreationDate: FormControl<string | null | undefined>,

		/** Required */
		UpdateDate: FormControl<string | null | undefined>,
	}
	export function CreateDryRunProgressStatusFormGroup() {
		return new FormGroup<DryRunProgressStatusFormProperties>({
			DryRunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DryRunStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A validation failure that occurred as the result of a pre-update validation check (verbose dry run) on a domain. */
	export interface ValidationFailure {
		Code?: string;
		Message?: string;
	}

	/** A validation failure that occurred as the result of a pre-update validation check (verbose dry run) on a domain. */
	export interface ValidationFailureFormProperties {
		Code: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateValidationFailureFormGroup() {
		return new FormGroup<ValidationFailureFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of a dry run performed in an update domain request. */
	export interface DryRunResults {
		DeploymentType?: string;
		Message?: string;
	}

	/** Results of a dry run performed in an update domain request. */
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


	/** Contains a list of connections matching the filter criteria. */
	export interface DescribeInboundConnectionsResponse {
		Connections?: Array<InboundConnection>;
		NextToken?: string;
	}

	/** Contains a list of connections matching the filter criteria. */
	export interface DescribeInboundConnectionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInboundConnectionsResponseFormGroup() {
		return new FormGroup<DescribeInboundConnectionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter used to limit results when describing inbound or outbound cross-cluster connections. You can specify multiple values per filter. A cross-cluster connection must match at least one of the specified values for it to be returned from an operation. */
	export interface Filter {
		Name?: string;
		Values?: Array<string>;
	}

	/** A filter used to limit results when describing inbound or outbound cross-cluster connections. You can specify multiple values per filter. A cross-cluster connection must match at least one of the specified values for it to be returned from an operation. */
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


	/** Container for the parameters received from the <code>DescribeInstanceTypeLimits</code> operation. */
	export interface DescribeInstanceTypeLimitsResponse {
		LimitsByRole?: LimitsByRole;
	}

	/** Container for the parameters received from the <code>DescribeInstanceTypeLimits</code> operation. */
	export interface DescribeInstanceTypeLimitsResponseFormProperties {
	}
	export function CreateDescribeInstanceTypeLimitsResponseFormGroup() {
		return new FormGroup<DescribeInstanceTypeLimitsResponseFormProperties>({
		});

	}


	/** <p> The role of a given instance and all applicable limits. The role performed by a given OpenSearch instance can be one of the following: </p> <ul> <li> <p> <b>data</b> - A data node.</p> </li> <li> <p> <b>master</b> - A dedicated master node.</p> </li> <li> <p> <b>ultra_warm</b> - An UltraWarm node.</p> </li> </ul> */
	export interface LimitsByRole {
	}

	/** <p> The role of a given instance and all applicable limits. The role performed by a given OpenSearch instance can be one of the following: </p> <ul> <li> <p> <b>data</b> - A data node.</p> </li> <li> <p> <b>master</b> - A dedicated master node.</p> </li> <li> <p> <b>ultra_warm</b> - An UltraWarm node.</p> </li> </ul> */
	export interface LimitsByRoleFormProperties {
	}
	export function CreateLimitsByRoleFormGroup() {
		return new FormGroup<LimitsByRoleFormProperties>({
		});

	}


	/** Contains a list of connections matching the filter criteria. */
	export interface DescribeOutboundConnectionsResponse {
		Connections?: Array<OutboundConnection>;
		NextToken?: string;
	}

	/** Contains a list of connections matching the filter criteria. */
	export interface DescribeOutboundConnectionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOutboundConnectionsResponseFormGroup() {
		return new FormGroup<DescribeOutboundConnectionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for the response returned by the <code>DescribePackages</code> operation. */
	export interface DescribePackagesResponse {
		PackageDetailsList?: Array<PackageDetails>;
		NextToken?: string;
	}

	/** Container for the response returned by the <code>DescribePackages</code> operation. */
	export interface DescribePackagesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePackagesResponseFormGroup() {
		return new FormGroup<DescribePackagesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter to apply to the <code>DescribePackage</code> response. */
	export interface DescribePackagesFilter {
		Name?: DescribePackagesFilterName;
		Value?: Array<string>;
	}

	/** A filter to apply to the <code>DescribePackage</code> response. */
	export interface DescribePackagesFilterFormProperties {
		Name: FormControl<DescribePackagesFilterName | null | undefined>,
	}
	export function CreateDescribePackagesFilterFormGroup() {
		return new FormGroup<DescribePackagesFilterFormProperties>({
			Name: new FormControl<DescribePackagesFilterName | null | undefined>(undefined),
		});

	}

	export enum DescribePackagesFilterName { PackageID = 'PackageID', PackageName = 'PackageName', PackageStatus = 'PackageStatus' }


	/** Container for results of a <code>DescribeReservedInstanceOfferings</code> request. */
	export interface DescribeReservedInstanceOfferingsResponse {
		NextToken?: string;
		ReservedInstanceOfferings?: Array<ReservedInstanceOffering>;
	}

	/** Container for results of a <code>DescribeReservedInstanceOfferings</code> request. */
	export interface DescribeReservedInstanceOfferingsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReservedInstanceOfferingsResponseFormGroup() {
		return new FormGroup<DescribeReservedInstanceOfferingsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of an OpenSearch Reserved Instance offering. */
	export interface ReservedInstanceOffering {
		ReservedInstanceOfferingId?: string;
		InstanceType?: OpenSearchPartitionInstanceType;
		Duration?: number | null;
		FixedPrice?: number | null;
		UsagePrice?: number | null;
		CurrencyCode?: string;
		PaymentOption?: ReservedInstancePaymentOption;
		RecurringCharges?: Array<RecurringCharge>;
	}

	/** Details of an OpenSearch Reserved Instance offering. */
	export interface ReservedInstanceOfferingFormProperties {
		ReservedInstanceOfferingId: FormControl<string | null | undefined>,
		InstanceType: FormControl<OpenSearchPartitionInstanceType | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		UsagePrice: FormControl<number | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		PaymentOption: FormControl<ReservedInstancePaymentOption | null | undefined>,
	}
	export function CreateReservedInstanceOfferingFormGroup() {
		return new FormGroup<ReservedInstanceOfferingFormProperties>({
			ReservedInstanceOfferingId: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<OpenSearchPartitionInstanceType | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			PaymentOption: new FormControl<ReservedInstancePaymentOption | null | undefined>(undefined),
		});

	}

	export enum ReservedInstancePaymentOption { ALL_UPFRONT = 'ALL_UPFRONT', PARTIAL_UPFRONT = 'PARTIAL_UPFRONT', NO_UPFRONT = 'NO_UPFRONT' }


	/** Contains the specific price and frequency of a recurring charges for an OpenSearch Reserved Instance, or for a Reserved Instance offering. */
	export interface RecurringCharge {
		RecurringChargeAmount?: number | null;
		RecurringChargeFrequency?: string;
	}

	/** Contains the specific price and frequency of a recurring charges for an OpenSearch Reserved Instance, or for a Reserved Instance offering. */
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


	/** Container for results from <code>DescribeReservedInstances</code>  */
	export interface DescribeReservedInstancesResponse {
		NextToken?: string;
		ReservedInstances?: Array<ReservedInstance>;
	}

	/** Container for results from <code>DescribeReservedInstances</code>  */
	export interface DescribeReservedInstancesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReservedInstancesResponseFormGroup() {
		return new FormGroup<DescribeReservedInstancesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of an OpenSearch Reserved Instance. */
	export interface ReservedInstance {
		ReservationName?: string;
		ReservedInstanceId?: string;
		BillingSubscriptionId?: number | null;
		ReservedInstanceOfferingId?: string;
		InstanceType?: OpenSearchPartitionInstanceType;
		StartTime?: Date;
		Duration?: number | null;
		FixedPrice?: number | null;
		UsagePrice?: number | null;
		CurrencyCode?: string;
		InstanceCount?: number | null;
		State?: string;
		PaymentOption?: ReservedInstancePaymentOption;
		RecurringCharges?: Array<RecurringCharge>;
	}

	/** Details of an OpenSearch Reserved Instance. */
	export interface ReservedInstanceFormProperties {
		ReservationName: FormControl<string | null | undefined>,
		ReservedInstanceId: FormControl<string | null | undefined>,
		BillingSubscriptionId: FormControl<number | null | undefined>,
		ReservedInstanceOfferingId: FormControl<string | null | undefined>,
		InstanceType: FormControl<OpenSearchPartitionInstanceType | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		UsagePrice: FormControl<number | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		State: FormControl<string | null | undefined>,
		PaymentOption: FormControl<ReservedInstancePaymentOption | null | undefined>,
	}
	export function CreateReservedInstanceFormGroup() {
		return new FormGroup<ReservedInstanceFormProperties>({
			ReservationName: new FormControl<string | null | undefined>(undefined),
			ReservedInstanceId: new FormControl<string | null | undefined>(undefined),
			BillingSubscriptionId: new FormControl<number | null | undefined>(undefined),
			ReservedInstanceOfferingId: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<OpenSearchPartitionInstanceType | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			PaymentOption: new FormControl<ReservedInstancePaymentOption | null | undefined>(undefined),
		});

	}

	export interface DescribeVpcEndpointsResponse {

		/** Required */
		VpcEndpoints: Array<VpcEndpoint>;

		/** Required */
		VpcEndpointErrors: Array<VpcEndpointError>;
	}
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

	export enum VpcEndpointErrorCode { ENDPOINT_NOT_FOUND = 'ENDPOINT_NOT_FOUND', SERVER_ERROR = 'SERVER_ERROR' }


	/** Container for the response returned by an <code>DissociatePackage</code> operation. */
	export interface DissociatePackageResponse {
		DomainPackageDetails?: DomainPackageDetails;
	}

	/** Container for the response returned by an <code>DissociatePackage</code> operation. */
	export interface DissociatePackageResponseFormProperties {
	}
	export function CreateDissociatePackageResponseFormGroup() {
		return new FormGroup<DissociatePackageResponseFormProperties>({
		});

	}


	/** Container for the response returned by the <code>GetCompatibleVersions</code> operation. */
	export interface GetCompatibleVersionsResponse {
		CompatibleVersions?: Array<CompatibleVersionsMap>;
	}

	/** Container for the response returned by the <code>GetCompatibleVersions</code> operation. */
	export interface GetCompatibleVersionsResponseFormProperties {
	}
	export function CreateGetCompatibleVersionsResponseFormGroup() {
		return new FormGroup<GetCompatibleVersionsResponseFormProperties>({
		});

	}


	/** A map of OpenSearch or Elasticsearch versions and the versions you can upgrade them to. */
	export interface CompatibleVersionsMap {
		SourceVersion?: string;
		TargetVersions?: Array<string>;
	}

	/** A map of OpenSearch or Elasticsearch versions and the versions you can upgrade them to. */
	export interface CompatibleVersionsMapFormProperties {
		SourceVersion: FormControl<string | null | undefined>,
	}
	export function CreateCompatibleVersionsMapFormGroup() {
		return new FormGroup<CompatibleVersionsMapFormProperties>({
			SourceVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for response returned by <code>GetPackageVersionHistory</code> operation. */
	export interface GetPackageVersionHistoryResponse {
		PackageID?: string;
		PackageVersionHistoryList?: Array<PackageVersionHistory>;
		NextToken?: string;
	}

	/** Container for response returned by <code>GetPackageVersionHistory</code> operation. */
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


	/** Details about a package version. */
	export interface PackageVersionHistory {
		PackageVersion?: string;
		CommitMessage?: string;
		CreatedAt?: Date;
	}

	/** Details about a package version. */
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


	/** Container for the response returned by the <code>GetUpgradeHistory</code> operation. */
	export interface GetUpgradeHistoryResponse {
		UpgradeHistories?: Array<UpgradeHistory>;
		NextToken?: string;
	}

	/** Container for the response returned by the <code>GetUpgradeHistory</code> operation. */
	export interface GetUpgradeHistoryResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetUpgradeHistoryResponseFormGroup() {
		return new FormGroup<GetUpgradeHistoryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** History of the last 10 upgrades and upgrade eligibility checks for an Amazon OpenSearch Service domain. */
	export interface UpgradeHistory {
		UpgradeName?: string;
		StartTimestamp?: Date;
		UpgradeStatus?: UpgradeStatus;
		StepsList?: Array<UpgradeStepItem>;
	}

	/** History of the last 10 upgrades and upgrade eligibility checks for an Amazon OpenSearch Service domain. */
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


	/** Represents a single step of an upgrade or upgrade eligibility check workflow. */
	export interface UpgradeStepItem {
		UpgradeStep?: UpgradeStep;
		UpgradeStepStatus?: UpgradeStatus;
		Issues?: Array<string>;
		ProgressPercent?: number | null;
	}

	/** Represents a single step of an upgrade or upgrade eligibility check workflow. */
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


	/** Container for the response returned by the <code>GetUpgradeStatus</code> operation. */
	export interface GetUpgradeStatusResponse {
		UpgradeStep?: UpgradeStep;
		StepStatus?: UpgradeStatus;
		UpgradeName?: string;
	}

	/** Container for the response returned by the <code>GetUpgradeStatus</code> operation. */
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


	/** The results of a <code>ListDomainNames</code> operation. Contains the names of all domains owned by this account and their respective engine types. */
	export interface ListDomainNamesResponse {
		DomainNames?: Array<DomainInfo>;
	}

	/** The results of a <code>ListDomainNames</code> operation. Contains the names of all domains owned by this account and their respective engine types. */
	export interface ListDomainNamesResponseFormProperties {
	}
	export function CreateListDomainNamesResponseFormGroup() {
		return new FormGroup<ListDomainNamesResponseFormProperties>({
		});

	}


	/** Information about an OpenSearch Service domain. */
	export interface DomainInfo {
		DomainName?: string;
		EngineType?: EngineType;
	}

	/** Information about an OpenSearch Service domain. */
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


	/** Container for the response parameters to the <code>ListDomainsForPackage</code> operation. */
	export interface ListDomainsForPackageResponse {
		DomainPackageDetailsList?: Array<DomainPackageDetails>;
		NextToken?: string;
	}

	/** Container for the response parameters to the <code>ListDomainsForPackage</code> operation. */
	export interface ListDomainsForPackageResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsForPackageResponseFormGroup() {
		return new FormGroup<ListDomainsForPackageResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInstanceTypeDetailsResponse {
		InstanceTypeDetails?: Array<InstanceTypeDetails>;
		NextToken?: string;
	}
	export interface ListInstanceTypeDetailsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstanceTypeDetailsResponseFormGroup() {
		return new FormGroup<ListInstanceTypeDetailsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lists all instance types and available features for a given OpenSearch or Elasticsearch version. */
	export interface InstanceTypeDetails {
		InstanceType?: OpenSearchPartitionInstanceType;
		EncryptionEnabled?: boolean | null;
		CognitoEnabled?: boolean | null;
		AppLogsEnabled?: boolean | null;
		AdvancedSecurityEnabled?: boolean | null;
		WarmEnabled?: boolean | null;
		InstanceRole?: Array<string>;
		AvailabilityZones?: Array<string>;
	}

	/** Lists all instance types and available features for a given OpenSearch or Elasticsearch version. */
	export interface InstanceTypeDetailsFormProperties {
		InstanceType: FormControl<OpenSearchPartitionInstanceType | null | undefined>,
		EncryptionEnabled: FormControl<boolean | null | undefined>,
		CognitoEnabled: FormControl<boolean | null | undefined>,
		AppLogsEnabled: FormControl<boolean | null | undefined>,
		AdvancedSecurityEnabled: FormControl<boolean | null | undefined>,
		WarmEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateInstanceTypeDetailsFormGroup() {
		return new FormGroup<InstanceTypeDetailsFormProperties>({
			InstanceType: new FormControl<OpenSearchPartitionInstanceType | null | undefined>(undefined),
			EncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			CognitoEnabled: new FormControl<boolean | null | undefined>(undefined),
			AppLogsEnabled: new FormControl<boolean | null | undefined>(undefined),
			AdvancedSecurityEnabled: new FormControl<boolean | null | undefined>(undefined),
			WarmEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Container for the response parameters to the <code>ListPackagesForDomain</code> operation. */
	export interface ListPackagesForDomainResponse {
		DomainPackageDetailsList?: Array<DomainPackageDetails>;
		NextToken?: string;
	}

	/** Container for the response parameters to the <code>ListPackagesForDomain</code> operation. */
	export interface ListPackagesForDomainResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPackagesForDomainResponseFormGroup() {
		return new FormGroup<ListPackagesForDomainResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListScheduledActionsResponse {
		ScheduledActions?: Array<ScheduledAction>;
		NextToken?: string;
	}
	export interface ListScheduledActionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListScheduledActionsResponseFormGroup() {
		return new FormGroup<ListScheduledActionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a scheduled configuration change for an OpenSearch Service domain. This actions can be a <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">service software update</a> or a <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html#auto-tune-types">blue/green Auto-Tune enhancement</a>. */
	export interface ScheduledAction {

		/** Required */
		Id: string;

		/** Required */
		Type: ActionType;

		/** Required */
		Severity: ActionSeverity;

		/** Required */
		ScheduledTime: number;
		Description?: string;
		ScheduledBy?: ScheduledBy;
		Status?: ActionStatus;
		Mandatory?: boolean | null;
		Cancellable?: boolean | null;
	}

	/** Information about a scheduled configuration change for an OpenSearch Service domain. This actions can be a <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">service software update</a> or a <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html#auto-tune-types">blue/green Auto-Tune enhancement</a>. */
	export interface ScheduledActionFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ActionType | null | undefined>,

		/** Required */
		Severity: FormControl<ActionSeverity | null | undefined>,

		/** Required */
		ScheduledTime: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ScheduledBy: FormControl<ScheduledBy | null | undefined>,
		Status: FormControl<ActionStatus | null | undefined>,
		Mandatory: FormControl<boolean | null | undefined>,
		Cancellable: FormControl<boolean | null | undefined>,
	}
	export function CreateScheduledActionFormGroup() {
		return new FormGroup<ScheduledActionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ActionType | null | undefined>(undefined, [Validators.required]),
			Severity: new FormControl<ActionSeverity | null | undefined>(undefined, [Validators.required]),
			ScheduledTime: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ScheduledBy: new FormControl<ScheduledBy | null | undefined>(undefined),
			Status: new FormControl<ActionStatus | null | undefined>(undefined),
			Mandatory: new FormControl<boolean | null | undefined>(undefined),
			Cancellable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ActionType { SERVICE_SOFTWARE_UPDATE = 'SERVICE_SOFTWARE_UPDATE', JVM_HEAP_SIZE_TUNING = 'JVM_HEAP_SIZE_TUNING', JVM_YOUNG_GEN_TUNING = 'JVM_YOUNG_GEN_TUNING' }

	export enum ActionSeverity { HIGH = 'HIGH', MEDIUM = 'MEDIUM', LOW = 'LOW' }

	export enum ScheduledBy { CUSTOMER = 'CUSTOMER', SYSTEM = 'SYSTEM' }

	export enum ActionStatus { PENDING_UPDATE = 'PENDING_UPDATE', IN_PROGRESS = 'IN_PROGRESS', FAILED = 'FAILED', COMPLETED = 'COMPLETED', NOT_ELIGIBLE = 'NOT_ELIGIBLE', ELIGIBLE = 'ELIGIBLE' }


	/** The results of a <code>ListTags</code> operation. */
	export interface ListTagsResponse {
		TagList?: Array<Tag>;
	}

	/** The results of a <code>ListTags</code> operation. */
	export interface ListTagsResponseFormProperties {
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
		});

	}


	/** Container for the parameters for response received from the <code>ListVersions</code> operation. */
	export interface ListVersionsResponse {
		Versions?: Array<string>;
		NextToken?: string;
	}

	/** Container for the parameters for response received from the <code>ListVersions</code> operation. */
	export interface ListVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVersionsResponseFormGroup() {
		return new FormGroup<ListVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVpcEndpointAccessResponse {

		/** Required */
		AuthorizedPrincipalList: Array<AuthorizedPrincipal>;

		/** Required */
		NextToken: string;
	}
	export interface ListVpcEndpointAccessResponseFormProperties {

		/** Required */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVpcEndpointAccessResponseFormGroup() {
		return new FormGroup<ListVpcEndpointAccessResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListVpcEndpointsResponse {

		/** Required */
		VpcEndpointSummaryList: Array<VpcEndpointSummary>;

		/** Required */
		NextToken: string;
	}
	export interface ListVpcEndpointsResponseFormProperties {

		/** Required */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVpcEndpointsResponseFormGroup() {
		return new FormGroup<ListVpcEndpointsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListVpcEndpointsForDomainResponse {

		/** Required */
		VpcEndpointSummaryList: Array<VpcEndpointSummary>;

		/** Required */
		NextToken: string;
	}
	export interface ListVpcEndpointsForDomainResponseFormProperties {

		/** Required */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVpcEndpointsForDomainResponseFormGroup() {
		return new FormGroup<ListVpcEndpointsForDomainResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>PurchaseReservedInstanceOffering</code> operation. */
	export interface PurchaseReservedInstanceOfferingResponse {
		ReservedInstanceId?: string;
		ReservationName?: string;
	}

	/** Represents the output of a <code>PurchaseReservedInstanceOffering</code> operation. */
	export interface PurchaseReservedInstanceOfferingResponseFormProperties {
		ReservedInstanceId: FormControl<string | null | undefined>,
		ReservationName: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseReservedInstanceOfferingResponseFormGroup() {
		return new FormGroup<PurchaseReservedInstanceOfferingResponseFormProperties>({
			ReservedInstanceId: new FormControl<string | null | undefined>(undefined),
			ReservationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>RejectInboundConnection</code> operation. */
	export interface RejectInboundConnectionResponse {
		Connection?: InboundConnection;
	}

	/** Represents the output of a <code>RejectInboundConnection</code> operation. */
	export interface RejectInboundConnectionResponseFormProperties {
	}
	export function CreateRejectInboundConnectionResponseFormGroup() {
		return new FormGroup<RejectInboundConnectionResponseFormProperties>({
		});

	}

	export interface RevokeVpcEndpointAccessResponse {
	}
	export interface RevokeVpcEndpointAccessResponseFormProperties {
	}
	export function CreateRevokeVpcEndpointAccessResponseFormGroup() {
		return new FormGroup<RevokeVpcEndpointAccessResponseFormProperties>({
		});

	}


	/** Represents the output of a <code>StartServiceSoftwareUpdate</code> operation. Contains the status of the update. */
	export interface StartServiceSoftwareUpdateResponse {
		ServiceSoftwareOptions?: ServiceSoftwareOptions;
	}

	/** Represents the output of a <code>StartServiceSoftwareUpdate</code> operation. Contains the status of the update. */
	export interface StartServiceSoftwareUpdateResponseFormProperties {
	}
	export function CreateStartServiceSoftwareUpdateResponseFormGroup() {
		return new FormGroup<StartServiceSoftwareUpdateResponseFormProperties>({
		});

	}


	/** The results of an <code>UpdateDomain</code> request. Contains the status of the domain being updated. */
	export interface UpdateDomainConfigResponse {

		/** Required */
		DomainConfig: DomainConfig;
		DryRunResults?: DryRunResults;
		DryRunProgressStatus?: DryRunProgressStatus;
	}

	/** The results of an <code>UpdateDomain</code> request. Contains the status of the domain being updated. */
	export interface UpdateDomainConfigResponseFormProperties {
	}
	export function CreateUpdateDomainConfigResponseFormGroup() {
		return new FormGroup<UpdateDomainConfigResponseFormProperties>({
		});

	}


	/** Container for the response returned by the <code>UpdatePackage</code> operation. */
	export interface UpdatePackageResponse {
		PackageDetails?: PackageDetails;
	}

	/** Container for the response returned by the <code>UpdatePackage</code> operation. */
	export interface UpdatePackageResponseFormProperties {
	}
	export function CreateUpdatePackageResponseFormGroup() {
		return new FormGroup<UpdatePackageResponseFormProperties>({
		});

	}

	export interface UpdateScheduledActionResponse {
		ScheduledAction?: ScheduledAction;
	}
	export interface UpdateScheduledActionResponseFormProperties {
	}
	export function CreateUpdateScheduledActionResponseFormGroup() {
		return new FormGroup<UpdateScheduledActionResponseFormProperties>({
		});

	}

	export interface SlotNotAvailableException {
	}
	export interface SlotNotAvailableExceptionFormProperties {
	}
	export function CreateSlotNotAvailableExceptionFormGroup() {
		return new FormGroup<SlotNotAvailableExceptionFormProperties>({
		});

	}

	export interface UpdateVpcEndpointResponse {

		/** Required */
		VpcEndpoint: VpcEndpoint;
	}
	export interface UpdateVpcEndpointResponseFormProperties {
	}
	export function CreateUpdateVpcEndpointResponseFormGroup() {
		return new FormGroup<UpdateVpcEndpointResponseFormProperties>({
		});

	}


	/** Container for the response returned by <code>UpgradeDomain</code> operation. */
	export interface UpgradeDomainResponse {
		UpgradeId?: string;
		DomainName?: string;
		TargetVersion?: string;
		PerformCheckOnly?: boolean | null;
		AdvancedOptions?: AdvancedOptions;
		ChangeProgressDetails?: ChangeProgressDetails;
	}

	/** Container for the response returned by <code>UpgradeDomain</code> operation. */
	export interface UpgradeDomainResponseFormProperties {
		UpgradeId: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		TargetVersion: FormControl<string | null | undefined>,
		PerformCheckOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateUpgradeDomainResponseFormGroup() {
		return new FormGroup<UpgradeDomainResponseFormProperties>({
			UpgradeId: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			TargetVersion: new FormControl<string | null | undefined>(undefined),
			PerformCheckOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code>AcceptInboundConnection</code> operation. */
	export interface AcceptInboundConnectionRequest {
	}

	/** Container for the parameters to the <code>AcceptInboundConnection</code> operation. */
	export interface AcceptInboundConnectionRequestFormProperties {
	}
	export function CreateAcceptInboundConnectionRequestFormGroup() {
		return new FormGroup<AcceptInboundConnectionRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code>AddTags</code> operation. Specifies the tags to attach to the domain. */
	export interface AddTagsRequest {

		/** Required */
		ARN: string;

		/** Required */
		TagList: Array<Tag>;
	}

	/** Container for the parameters to the <code>AddTags</code> operation. Specifies the tags to attach to the domain. */
	export interface AddTagsRequestFormProperties {

		/** Required */
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsRequestFormGroup() {
		return new FormGroup<AddTagsRequestFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  List of limits that are specific to a given instance type. */
	export interface AdditionalLimit {
		LimitName?: string;
		LimitValues?: Array<string>;
	}

	/**  List of limits that are specific to a given instance type. */
	export interface AdditionalLimitFormProperties {
		LimitName: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalLimitFormGroup() {
		return new FormGroup<AdditionalLimitFormProperties>({
			LimitName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for enabling and configuring fine-grained access control. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html">Fine-grained access control in Amazon OpenSearch Service</a>. */
	export interface AdvancedSecurityOptionsInput {
		Enabled?: boolean | null;
		InternalUserDatabaseEnabled?: boolean | null;
		MasterUserOptions?: MasterUserOptions;
		SAMLOptions?: SAMLOptionsInput;
		AnonymousAuthEnabled?: boolean | null;
	}

	/** Options for enabling and configuring fine-grained access control. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html">Fine-grained access control in Amazon OpenSearch Service</a>. */
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


	/** Container for the request parameters to the <code>AssociatePackage</code> operation. */
	export interface AssociatePackageRequest {
	}

	/** Container for the request parameters to the <code>AssociatePackage</code> operation. */
	export interface AssociatePackageRequestFormProperties {
	}
	export function CreateAssociatePackageRequestFormGroup() {
		return new FormGroup<AssociatePackageRequestFormProperties>({
		});

	}

	export interface AuthorizeVpcEndpointAccessRequest {

		/** Required */
		Account: string;
	}
	export interface AuthorizeVpcEndpointAccessRequestFormProperties {

		/** Required */
		Account: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizeVpcEndpointAccessRequestFormGroup() {
		return new FormGroup<AuthorizeVpcEndpointAccessRequestFormProperties>({
			Account: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Options for configuring Auto-Tune. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>  */
	export interface AutoTuneOptionsInput {
		DesiredState?: AutoTuneDesiredState;
		MaintenanceSchedules?: Array<AutoTuneMaintenanceSchedule>;
		UseOffPeakWindow?: boolean | null;
	}

	/** Options for configuring Auto-Tune. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>  */
	export interface AutoTuneOptionsInputFormProperties {
		DesiredState: FormControl<AutoTuneDesiredState | null | undefined>,
		UseOffPeakWindow: FormControl<boolean | null | undefined>,
	}
	export function CreateAutoTuneOptionsInputFormGroup() {
		return new FormGroup<AutoTuneOptionsInputFormProperties>({
			DesiredState: new FormControl<AutoTuneDesiredState | null | undefined>(undefined),
			UseOffPeakWindow: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Container for the request parameters to cancel a service software update. */
	export interface CancelServiceSoftwareUpdateRequest {

		/** Required */
		DomainName: string;
	}

	/** Container for the request parameters to cancel a service software update. */
	export interface CancelServiceSoftwareUpdateRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateCancelServiceSoftwareUpdateRequestFormGroup() {
		return new FormGroup<CancelServiceSoftwareUpdateRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching your Amazon OpenSearch Service domains using a VPC</a>. */
	export interface VPCOptions {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}

	/** Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching your Amazon OpenSearch Service domains using a VPC</a>. */
	export interface VPCOptionsFormProperties {
	}
	export function CreateVPCOptionsFormGroup() {
		return new FormGroup<VPCOptionsFormProperties>({
		});

	}

	export interface CreateDomainRequest {

		/** Required */
		DomainName: string;
		EngineVersion?: string;
		ClusterConfig?: ClusterConfig;
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
		TagList?: Array<Tag>;
		AutoTuneOptions?: AutoTuneOptionsInput;
		OffPeakWindowOptions?: OffPeakWindowOptions;
		SoftwareUpdateOptions?: SoftwareUpdateOptions;
	}
	export interface CreateDomainRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AccessPolicies: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainRequestFormGroup() {
		return new FormGroup<CreateDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AccessPolicies: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code>CreateOutboundConnection</code> operation. */
	export interface CreateOutboundConnectionRequest {

		/** Required */
		LocalDomainInfo: DomainInformationContainer;

		/** Required */
		RemoteDomainInfo: DomainInformationContainer;

		/** Required */
		ConnectionAlias: string;
		ConnectionMode?: ConnectionMode;
		ConnectionProperties?: ConnectionProperties;
	}

	/** Container for the parameters to the <code>CreateOutboundConnection</code> operation. */
	export interface CreateOutboundConnectionRequestFormProperties {

		/** Required */
		ConnectionAlias: FormControl<string | null | undefined>,
		ConnectionMode: FormControl<ConnectionMode | null | undefined>,
	}
	export function CreateCreateOutboundConnectionRequestFormGroup() {
		return new FormGroup<CreateOutboundConnectionRequestFormProperties>({
			ConnectionAlias: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionMode: new FormControl<ConnectionMode | null | undefined>(undefined),
		});

	}


	/** The Amazon S3 location to import the package from. */
	export interface PackageSource {
		S3BucketName?: string;
		S3Key?: string;
	}

	/** The Amazon S3 location to import the package from. */
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


	/** Container for request parameters to the <code>CreatePackage</code> operation. */
	export interface CreatePackageRequest {

		/** Required */
		PackageName: string;

		/** Required */
		PackageType: PackageType;
		PackageDescription?: string;

		/** Required */
		PackageSource: PackageSource;
	}

	/** Container for request parameters to the <code>CreatePackage</code> operation. */
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

	export interface CreateVpcEndpointRequest {

		/** Required */
		DomainArn: string;

		/** Required */
		VpcOptions: VPCOptions;
		ClientToken?: string;
	}
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


	/** <p>Status of SkipUnavailable param for outbound connection.</p> <ul> <li> <p> <b>ENABLED</b> - The SkipUnavailable param is enabled for the connection.</p> </li> <li> <p> <b>DISABLED</b> - The SkipUnavailable param is disabled for the connection.</p> </li> </ul> */
	export enum SkipUnavailableStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** Container for the parameters to the <code>DeleteDomain</code> operation. */
	export interface DeleteDomainRequest {
	}

	/** Container for the parameters to the <code>DeleteDomain</code> operation. */
	export interface DeleteDomainRequestFormProperties {
	}
	export function CreateDeleteDomainRequestFormGroup() {
		return new FormGroup<DeleteDomainRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code>DeleteInboundConnection</code> operation. */
	export interface DeleteInboundConnectionRequest {
	}

	/** Container for the parameters to the <code>DeleteInboundConnection</code> operation. */
	export interface DeleteInboundConnectionRequestFormProperties {
	}
	export function CreateDeleteInboundConnectionRequestFormGroup() {
		return new FormGroup<DeleteInboundConnectionRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code>DeleteOutboundConnection</code> operation. */
	export interface DeleteOutboundConnectionRequest {
	}

	/** Container for the parameters to the <code>DeleteOutboundConnection</code> operation. */
	export interface DeleteOutboundConnectionRequestFormProperties {
	}
	export function CreateDeleteOutboundConnectionRequestFormGroup() {
		return new FormGroup<DeleteOutboundConnectionRequestFormProperties>({
		});

	}


	/** Deletes a package from OpenSearch Service. The package can't be associated with any OpenSearch Service domain. */
	export interface DeletePackageRequest {
	}

	/** Deletes a package from OpenSearch Service. The package can't be associated with any OpenSearch Service domain. */
	export interface DeletePackageRequestFormProperties {
	}
	export function CreateDeletePackageRequestFormGroup() {
		return new FormGroup<DeletePackageRequestFormProperties>({
		});

	}

	export interface DeleteVpcEndpointRequest {
	}
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


	/** Container for the parameters to the <code>DescribeDomainChangeProgress</code> operation. */
	export interface DescribeDomainChangeProgressRequest {
	}

	/** Container for the parameters to the <code>DescribeDomainChangeProgress</code> operation. */
	export interface DescribeDomainChangeProgressRequestFormProperties {
	}
	export function CreateDescribeDomainChangeProgressRequestFormGroup() {
		return new FormGroup<DescribeDomainChangeProgressRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code>DescribeDomainConfig</code> operation. */
	export interface DescribeDomainConfigRequest {
	}

	/** Container for the parameters to the <code>DescribeDomainConfig</code> operation. */
	export interface DescribeDomainConfigRequestFormProperties {
	}
	export function CreateDescribeDomainConfigRequestFormGroup() {
		return new FormGroup<DescribeDomainConfigRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code>DescribeDomainHealth</code> operation. */
	export interface DescribeDomainHealthRequest {
	}

	/** Container for the parameters to the <code>DescribeDomainHealth</code> operation. */
	export interface DescribeDomainHealthRequestFormProperties {
	}
	export function CreateDescribeDomainHealthRequestFormGroup() {
		return new FormGroup<DescribeDomainHealthRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code>DescribeDomainNodes</code> operation. */
	export interface DescribeDomainNodesRequest {
	}

	/** Container for the parameters to the <code>DescribeDomainNodes</code> operation. */
	export interface DescribeDomainNodesRequestFormProperties {
	}
	export function CreateDescribeDomainNodesRequestFormGroup() {
		return new FormGroup<DescribeDomainNodesRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code>DescribeDomain</code> operation. */
	export interface DescribeDomainRequest {
	}

	/** Container for the parameters to the <code>DescribeDomain</code> operation. */
	export interface DescribeDomainRequestFormProperties {
	}
	export function CreateDescribeDomainRequestFormGroup() {
		return new FormGroup<DescribeDomainRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code>DescribeDomains</code> operation. */
	export interface DescribeDomainsRequest {

		/** Required */
		DomainNames: Array<string>;
	}

	/** Container for the parameters to the <code>DescribeDomains</code> operation. */
	export interface DescribeDomainsRequestFormProperties {
	}
	export function CreateDescribeDomainsRequestFormGroup() {
		return new FormGroup<DescribeDomainsRequestFormProperties>({
		});

	}

	export interface DescribeDryRunProgressRequest {
	}
	export interface DescribeDryRunProgressRequestFormProperties {
	}
	export function CreateDescribeDryRunProgressRequestFormGroup() {
		return new FormGroup<DescribeDryRunProgressRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code>DescribeInboundConnections</code> operation. */
	export interface DescribeInboundConnectionsRequest {
		Filters?: Array<Filter>;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** Container for the parameters to the <code>DescribeInboundConnections</code> operation. */
	export interface DescribeInboundConnectionsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInboundConnectionsRequestFormGroup() {
		return new FormGroup<DescribeInboundConnectionsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code>DescribeInstanceTypeLimits</code> operation. */
	export interface DescribeInstanceTypeLimitsRequest {
	}

	/** Container for the parameters to the <code>DescribeInstanceTypeLimits</code> operation. */
	export interface DescribeInstanceTypeLimitsRequestFormProperties {
	}
	export function CreateDescribeInstanceTypeLimitsRequestFormGroup() {
		return new FormGroup<DescribeInstanceTypeLimitsRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code>DescribeOutboundConnections</code> operation. */
	export interface DescribeOutboundConnectionsRequest {
		Filters?: Array<Filter>;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** Container for the parameters to the <code>DescribeOutboundConnections</code> operation. */
	export interface DescribeOutboundConnectionsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOutboundConnectionsRequestFormGroup() {
		return new FormGroup<DescribeOutboundConnectionsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for the request parameters to the <code>DescribePackage</code> operation. */
	export interface DescribePackagesRequest {
		Filters?: Array<DescribePackagesFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** Container for the request parameters to the <code>DescribePackage</code> operation. */
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


	/** Container for the request parameters to a <code>DescribeReservedInstanceOfferings</code> operation. */
	export interface DescribeReservedInstanceOfferingsRequest {
	}

	/** Container for the request parameters to a <code>DescribeReservedInstanceOfferings</code> operation. */
	export interface DescribeReservedInstanceOfferingsRequestFormProperties {
	}
	export function CreateDescribeReservedInstanceOfferingsRequestFormGroup() {
		return new FormGroup<DescribeReservedInstanceOfferingsRequestFormProperties>({
		});

	}


	/** Container for the request parameters to the <code>DescribeReservedInstances</code> operation. */
	export interface DescribeReservedInstancesRequest {
	}

	/** Container for the request parameters to the <code>DescribeReservedInstances</code> operation. */
	export interface DescribeReservedInstancesRequestFormProperties {
	}
	export function CreateDescribeReservedInstancesRequestFormGroup() {
		return new FormGroup<DescribeReservedInstancesRequestFormProperties>({
		});

	}

	export interface DescribeVpcEndpointsRequest {

		/** Required */
		VpcEndpointIds: Array<string>;
	}
	export interface DescribeVpcEndpointsRequestFormProperties {
	}
	export function CreateDescribeVpcEndpointsRequestFormGroup() {
		return new FormGroup<DescribeVpcEndpointsRequestFormProperties>({
		});

	}


	/** Container for the request parameters to the <code>DissociatePackage</code> operation. */
	export interface DissociatePackageRequest {
	}

	/** Container for the request parameters to the <code>DissociatePackage</code> operation. */
	export interface DissociatePackageRequestFormProperties {
	}
	export function CreateDissociatePackageRequestFormGroup() {
		return new FormGroup<DissociatePackageRequestFormProperties>({
		});

	}

	export enum NodeStatus { Active = 'Active', StandBy = 'StandBy', NotAvailable = 'NotAvailable' }

	export enum DryRunMode { Basic = 'Basic', Verbose = 'Verbose' }


	/** Container for the request parameters to <code>GetCompatibleVersions</code> operation. */
	export interface GetCompatibleVersionsRequest {
	}

	/** Container for the request parameters to <code>GetCompatibleVersions</code> operation. */
	export interface GetCompatibleVersionsRequestFormProperties {
	}
	export function CreateGetCompatibleVersionsRequestFormGroup() {
		return new FormGroup<GetCompatibleVersionsRequestFormProperties>({
		});

	}


	/** Container for the request parameters to the <code>GetPackageVersionHistory</code> operation. */
	export interface GetPackageVersionHistoryRequest {
	}

	/** Container for the request parameters to the <code>GetPackageVersionHistory</code> operation. */
	export interface GetPackageVersionHistoryRequestFormProperties {
	}
	export function CreateGetPackageVersionHistoryRequestFormGroup() {
		return new FormGroup<GetPackageVersionHistoryRequestFormProperties>({
		});

	}


	/** Container for the request parameters to the <code>GetUpgradeHistory</code> operation. */
	export interface GetUpgradeHistoryRequest {
	}

	/** Container for the request parameters to the <code>GetUpgradeHistory</code> operation. */
	export interface GetUpgradeHistoryRequestFormProperties {
	}
	export function CreateGetUpgradeHistoryRequestFormGroup() {
		return new FormGroup<GetUpgradeHistoryRequestFormProperties>({
		});

	}


	/** Container for the request parameters to the <code>GetUpgradeStatus</code> operation. */
	export interface GetUpgradeStatusRequest {
	}

	/** Container for the request parameters to the <code>GetUpgradeStatus</code> operation. */
	export interface GetUpgradeStatusRequestFormProperties {
	}
	export function CreateGetUpgradeStatusRequestFormGroup() {
		return new FormGroup<GetUpgradeStatusRequestFormProperties>({
		});

	}


	/** Limits on the number of instances that can be created in OpenSearch Service for a given instance type. */
	export interface InstanceCountLimits {
		MinimumInstanceCount?: number | null;
		MaximumInstanceCount?: number | null;
	}

	/** Limits on the number of instances that can be created in OpenSearch Service for a given instance type. */
	export interface InstanceCountLimitsFormProperties {
		MinimumInstanceCount: FormControl<number | null | undefined>,
		MaximumInstanceCount: FormControl<number | null | undefined>,
	}
	export function CreateInstanceCountLimitsFormGroup() {
		return new FormGroup<InstanceCountLimitsFormProperties>({
			MinimumInstanceCount: new FormControl<number | null | undefined>(undefined),
			MaximumInstanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Instance-related attributes that are available for a given instance type. */
	export interface InstanceLimits {
		InstanceCountLimits?: InstanceCountLimits;
	}

	/** Instance-related attributes that are available for a given instance type. */
	export interface InstanceLimitsFormProperties {
	}
	export function CreateInstanceLimitsFormGroup() {
		return new FormGroup<InstanceLimitsFormProperties>({
		});

	}


	/** A list of storage types for an Amazon OpenSearch Service domain that are available for a given intance type. */
	export interface StorageType {
		StorageTypeName?: string;
		StorageSubTypeName?: string;
		StorageTypeLimits?: Array<StorageTypeLimit>;
	}

	/** A list of storage types for an Amazon OpenSearch Service domain that are available for a given intance type. */
	export interface StorageTypeFormProperties {
		StorageTypeName: FormControl<string | null | undefined>,
		StorageSubTypeName: FormControl<string | null | undefined>,
	}
	export function CreateStorageTypeFormGroup() {
		return new FormGroup<StorageTypeFormProperties>({
			StorageTypeName: new FormControl<string | null | undefined>(undefined),
			StorageSubTypeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Limits that are applicable for the given Amazon OpenSearch Service storage type. */
	export interface StorageTypeLimit {
		LimitName?: string;
		LimitValues?: Array<string>;
	}

	/** Limits that are applicable for the given Amazon OpenSearch Service storage type. */
	export interface StorageTypeLimitFormProperties {
		LimitName: FormControl<string | null | undefined>,
	}
	export function CreateStorageTypeLimitFormGroup() {
		return new FormGroup<StorageTypeLimitFormProperties>({
			LimitName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Limits for a given instance type and for each of its roles. */
	export interface Limits {
		StorageTypes?: Array<StorageType>;
		InstanceLimits?: InstanceLimits;
		AdditionalLimits?: Array<AdditionalLimit>;
	}

	/** Limits for a given instance type and for each of its roles. */
	export interface LimitsFormProperties {
	}
	export function CreateLimitsFormGroup() {
		return new FormGroup<LimitsFormProperties>({
		});

	}


	/** Container for the parameters to the <code>ListDomainNames</code> operation. */
	export interface ListDomainNamesRequest {
	}

	/** Container for the parameters to the <code>ListDomainNames</code> operation. */
	export interface ListDomainNamesRequestFormProperties {
	}
	export function CreateListDomainNamesRequestFormGroup() {
		return new FormGroup<ListDomainNamesRequestFormProperties>({
		});

	}


	/** Container for the request parameters to the <code>ListDomainsForPackage</code> operation. */
	export interface ListDomainsForPackageRequest {
	}

	/** Container for the request parameters to the <code>ListDomainsForPackage</code> operation. */
	export interface ListDomainsForPackageRequestFormProperties {
	}
	export function CreateListDomainsForPackageRequestFormGroup() {
		return new FormGroup<ListDomainsForPackageRequestFormProperties>({
		});

	}

	export interface ListInstanceTypeDetailsRequest {
	}
	export interface ListInstanceTypeDetailsRequestFormProperties {
	}
	export function CreateListInstanceTypeDetailsRequestFormGroup() {
		return new FormGroup<ListInstanceTypeDetailsRequestFormProperties>({
		});

	}


	/** Container for the request parameters to the <code>ListPackagesForDomain</code> operation. */
	export interface ListPackagesForDomainRequest {
	}

	/** Container for the request parameters to the <code>ListPackagesForDomain</code> operation. */
	export interface ListPackagesForDomainRequestFormProperties {
	}
	export function CreateListPackagesForDomainRequestFormGroup() {
		return new FormGroup<ListPackagesForDomainRequestFormProperties>({
		});

	}

	export interface ListScheduledActionsRequest {
	}
	export interface ListScheduledActionsRequestFormProperties {
	}
	export function CreateListScheduledActionsRequestFormGroup() {
		return new FormGroup<ListScheduledActionsRequestFormProperties>({
		});

	}


	/** Container for the parameters to the <code>ListTags</code> operation. */
	export interface ListTagsRequest {
	}

	/** Container for the parameters to the <code>ListTags</code> operation. */
	export interface ListTagsRequestFormProperties {
	}
	export function CreateListTagsRequestFormGroup() {
		return new FormGroup<ListTagsRequestFormProperties>({
		});

	}


	/** Container for the request parameters to the <code>ListVersions</code> operation. */
	export interface ListVersionsRequest {
	}

	/** Container for the request parameters to the <code>ListVersions</code> operation. */
	export interface ListVersionsRequestFormProperties {
	}
	export function CreateListVersionsRequestFormGroup() {
		return new FormGroup<ListVersionsRequestFormProperties>({
		});

	}

	export interface ListVpcEndpointAccessRequest {
	}
	export interface ListVpcEndpointAccessRequestFormProperties {
	}
	export function CreateListVpcEndpointAccessRequestFormGroup() {
		return new FormGroup<ListVpcEndpointAccessRequestFormProperties>({
		});

	}

	export interface ListVpcEndpointsForDomainRequest {
	}
	export interface ListVpcEndpointsForDomainRequestFormProperties {
	}
	export function CreateListVpcEndpointsForDomainRequestFormGroup() {
		return new FormGroup<ListVpcEndpointsForDomainRequestFormProperties>({
		});

	}

	export interface ListVpcEndpointsRequest {
	}
	export interface ListVpcEndpointsRequestFormProperties {
	}
	export function CreateListVpcEndpointsRequestFormGroup() {
		return new FormGroup<ListVpcEndpointsRequestFormProperties>({
		});

	}


	/** <p>The type of log file. Can be one of the following:</p> <ul> <li> <p> <b>INDEX_SLOW_LOGS</b> - Index slow logs contain insert requests that took more time than the configured index query log threshold to execute.</p> </li> <li> <p> <b>SEARCH_SLOW_LOGS</b> - Search slow logs contain search queries that took more time than the configured search query log threshold to execute.</p> </li> <li> <p> <b>ES_APPLICATION_LOGS</b> - OpenSearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.</p> </li> <li> <p> <b>AUDIT_LOGS</b> - Audit logs contain records of user requests for access to the domain.</p> </li> </ul> */
	export enum LogType { INDEX_SLOW_LOGS = 'INDEX_SLOW_LOGS', SEARCH_SLOW_LOGS = 'SEARCH_SLOW_LOGS', ES_APPLICATION_LOGS = 'ES_APPLICATION_LOGS', AUDIT_LOGS = 'AUDIT_LOGS' }


	/** Container for request parameters to the <code>PurchaseReservedInstanceOffering</code> operation. */
	export interface PurchaseReservedInstanceOfferingRequest {

		/** Required */
		ReservedInstanceOfferingId: string;

		/** Required */
		ReservationName: string;
		InstanceCount?: number | null;
	}

	/** Container for request parameters to the <code>PurchaseReservedInstanceOffering</code> operation. */
	export interface PurchaseReservedInstanceOfferingRequestFormProperties {

		/** Required */
		ReservedInstanceOfferingId: FormControl<string | null | undefined>,

		/** Required */
		ReservationName: FormControl<string | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
	}
	export function CreatePurchaseReservedInstanceOfferingRequestFormGroup() {
		return new FormGroup<PurchaseReservedInstanceOfferingRequestFormProperties>({
			ReservedInstanceOfferingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReservationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Container for the request parameters to the <code>RejectInboundConnection</code> operation. */
	export interface RejectInboundConnectionRequest {
	}

	/** Container for the request parameters to the <code>RejectInboundConnection</code> operation. */
	export interface RejectInboundConnectionRequestFormProperties {
	}
	export function CreateRejectInboundConnectionRequestFormGroup() {
		return new FormGroup<RejectInboundConnectionRequestFormProperties>({
		});

	}


	/** Container for the request parameters to the <code>RemoveTags</code> operation. */
	export interface RemoveTagsRequest {

		/** Required */
		ARN: string;

		/** Required */
		TagKeys: Array<string>;
	}

	/** Container for the request parameters to the <code>RemoveTags</code> operation. */
	export interface RemoveTagsRequestFormProperties {

		/** Required */
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsRequestFormGroup() {
		return new FormGroup<RemoveTagsRequestFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RevokeVpcEndpointAccessRequest {

		/** Required */
		Account: string;
	}
	export interface RevokeVpcEndpointAccessRequestFormProperties {

		/** Required */
		Account: FormControl<string | null | undefined>,
	}
	export function CreateRevokeVpcEndpointAccessRequestFormGroup() {
		return new FormGroup<RevokeVpcEndpointAccessRequestFormProperties>({
			Account: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScheduleAt { NOW = 'NOW', TIMESTAMP = 'TIMESTAMP', OFF_PEAK_WINDOW = 'OFF_PEAK_WINDOW' }


	/** Container for the request parameters to the <code>StartServiceSoftwareUpdate</code> operation. */
	export interface StartServiceSoftwareUpdateRequest {

		/** Required */
		DomainName: string;
		ScheduleAt?: ScheduleAt;
		DesiredStartTime?: number | null;
	}

	/** Container for the request parameters to the <code>StartServiceSoftwareUpdate</code> operation. */
	export interface StartServiceSoftwareUpdateRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		ScheduleAt: FormControl<ScheduleAt | null | undefined>,
		DesiredStartTime: FormControl<number | null | undefined>,
	}
	export function CreateStartServiceSoftwareUpdateRequestFormGroup() {
		return new FormGroup<StartServiceSoftwareUpdateRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScheduleAt: new FormControl<ScheduleAt | null | undefined>(undefined),
			DesiredStartTime: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Container for the request parameters to the <code>UpdateDomain</code> operation. */
	export interface UpdateDomainConfigRequest {
		ClusterConfig?: ClusterConfig;
		EBSOptions?: EBSOptions;
		SnapshotOptions?: SnapshotOptions;
		VPCOptions?: VPCOptions;
		CognitoOptions?: CognitoOptions;
		AdvancedOptions?: AdvancedOptions;
		AccessPolicies?: string;
		LogPublishingOptions?: LogPublishingOptions;
		EncryptionAtRestOptions?: EncryptionAtRestOptions;
		DomainEndpointOptions?: DomainEndpointOptions;
		NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
		AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
		AutoTuneOptions?: AutoTuneOptions;
		DryRun?: boolean | null;
		DryRunMode?: DryRunMode;
		OffPeakWindowOptions?: OffPeakWindowOptions;
		SoftwareUpdateOptions?: SoftwareUpdateOptions;
	}

	/** Container for the request parameters to the <code>UpdateDomain</code> operation. */
	export interface UpdateDomainConfigRequestFormProperties {
		AccessPolicies: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
		DryRunMode: FormControl<DryRunMode | null | undefined>,
	}
	export function CreateUpdateDomainConfigRequestFormGroup() {
		return new FormGroup<UpdateDomainConfigRequestFormProperties>({
			AccessPolicies: new FormControl<string | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
			DryRunMode: new FormControl<DryRunMode | null | undefined>(undefined),
		});

	}


	/** Container for request parameters to the <code>UpdatePackage</code> operation. */
	export interface UpdatePackageRequest {

		/** Required */
		PackageID: string;

		/** Required */
		PackageSource: PackageSource;
		PackageDescription?: string;
		CommitMessage?: string;
	}

	/** Container for request parameters to the <code>UpdatePackage</code> operation. */
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

	export interface UpdateScheduledActionRequest {

		/** Required */
		ActionID: string;

		/** Required */
		ActionType: ActionType;

		/** Required */
		ScheduleAt: ScheduleAt;
		DesiredStartTime?: number | null;
	}
	export interface UpdateScheduledActionRequestFormProperties {

		/** Required */
		ActionID: FormControl<string | null | undefined>,

		/** Required */
		ActionType: FormControl<ActionType | null | undefined>,

		/** Required */
		ScheduleAt: FormControl<ScheduleAt | null | undefined>,
		DesiredStartTime: FormControl<number | null | undefined>,
	}
	export function CreateUpdateScheduledActionRequestFormGroup() {
		return new FormGroup<UpdateScheduledActionRequestFormProperties>({
			ActionID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ActionType: new FormControl<ActionType | null | undefined>(undefined, [Validators.required]),
			ScheduleAt: new FormControl<ScheduleAt | null | undefined>(undefined, [Validators.required]),
			DesiredStartTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateVpcEndpointRequest {

		/** Required */
		VpcEndpointId: string;

		/** Required */
		VpcOptions: VPCOptions;
	}
	export interface UpdateVpcEndpointRequestFormProperties {

		/** Required */
		VpcEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVpcEndpointRequestFormGroup() {
		return new FormGroup<UpdateVpcEndpointRequestFormProperties>({
			VpcEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for the request parameters to the <code>UpgradeDomain</code> operation. */
	export interface UpgradeDomainRequest {

		/** Required */
		DomainName: string;

		/** Required */
		TargetVersion: string;
		PerformCheckOnly?: boolean | null;
		AdvancedOptions?: AdvancedOptions;
	}

	/** Container for the request parameters to the <code>UpgradeDomain</code> operation. */
	export interface UpgradeDomainRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		TargetVersion: FormControl<string | null | undefined>,
		PerformCheckOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateUpgradeDomainRequestFormGroup() {
		return new FormGroup<UpgradeDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PerformCheckOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Allows the destination Amazon OpenSearch Service domain owner to accept an inbound cross-cluster search connection request. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search for Amazon OpenSearch Service</a>.
		 * Put 2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}/accept
		 * @param {string} ConnectionId The ID of the inbound connection to accept.
		 *     Min length: 10    Max length: 256
		 * @return {AcceptInboundConnectionResponse} Success
		 */
		AcceptInboundConnection(ConnectionId: string): Observable<AcceptInboundConnectionResponse> {
			return this.http.put<AcceptInboundConnectionResponse>(this.baseUri + '2021-01-01/opensearch/cc/inboundConnection/' + (ConnectionId == null ? '' : encodeURIComponent(ConnectionId)) + '/accept', null, {});
		}

		/**
		 * Attaches tags to an existing Amazon OpenSearch Service domain. Tags are a set of case-sensitive key-value pairs. A domain can have up to 10 tags. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-awsresourcetagging.html">Tagging Amazon OpenSearch Service domains</a>.
		 * Post 2021-01-01/tags
		 * @return {void} Success
		 */
		AddTags(requestBody: AddTagsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2021-01-01/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates a package with an Amazon OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.
		 * Post 2021-01-01/packages/associate/{PackageID}/{DomainName}
		 * @param {string} PackageID Internal ID of the package to associate with a domain. Use <code>DescribePackages</code> to find this value. 
		 * @param {string} DomainName Name of the domain to associate the package with.
		 *     Min length: 3    Max length: 28
		 * @return {AssociatePackageResponse} Success
		 */
		AssociatePackage(PackageID: string, DomainName: string): Observable<AssociatePackageResponse> {
			return this.http.post<AssociatePackageResponse>(this.baseUri + '2021-01-01/packages/associate/' + (PackageID == null ? '' : encodeURIComponent(PackageID)) + '/' + (DomainName == null ? '' : encodeURIComponent(DomainName)), null, {});
		}

		/**
		 * Provides access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint.
		 * Post 2021-01-01/opensearch/domain/{DomainName}/authorizeVpcEndpointAccess
		 * @param {string} DomainName The name of the OpenSearch Service domain to provide access to.
		 *     Min length: 3    Max length: 28
		 * @return {AuthorizeVpcEndpointAccessResponse} Success
		 */
		AuthorizeVpcEndpointAccess(DomainName: string, requestBody: AuthorizeVpcEndpointAccessPostBody): Observable<AuthorizeVpcEndpointAccessResponse> {
			return this.http.post<AuthorizeVpcEndpointAccessResponse>(this.baseUri + '2021-01-01/opensearch/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/authorizeVpcEndpointAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a scheduled service software update for an Amazon OpenSearch Service domain. You can only perform this operation before the <code>AutomatedUpdateDate</code> and when the domain's <code>UpdateStatus</code> is <code>PENDING_UPDATE</code>. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">Service software updates in Amazon OpenSearch Service</a>.
		 * Post 2021-01-01/opensearch/serviceSoftwareUpdate/cancel
		 * @return {CancelServiceSoftwareUpdateResponse} Success
		 */
		CancelServiceSoftwareUpdate(requestBody: CancelServiceSoftwareUpdatePostBody): Observable<CancelServiceSoftwareUpdateResponse> {
			return this.http.post<CancelServiceSoftwareUpdateResponse>(this.baseUri + '2021-01-01/opensearch/serviceSoftwareUpdate/cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an Amazon OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html">Creating and managing Amazon OpenSearch Service domains</a>.
		 * Post 2021-01-01/opensearch/domain
		 * @return {CreateDomainResponse} Success
		 */
		CreateDomain(requestBody: CreateDomainPostBody): Observable<CreateDomainResponse> {
			return this.http.post<CreateDomainResponse>(this.baseUri + '2021-01-01/opensearch/domain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new cross-cluster search connection from a source Amazon OpenSearch Service domain to a destination domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search for Amazon OpenSearch Service</a>.
		 * Post 2021-01-01/opensearch/cc/outboundConnection
		 * @return {CreateOutboundConnectionResponse} Success
		 */
		CreateOutboundConnection(requestBody: CreateOutboundConnectionPostBody): Observable<CreateOutboundConnectionResponse> {
			return this.http.post<CreateOutboundConnectionResponse>(this.baseUri + '2021-01-01/opensearch/cc/outboundConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a package for use with Amazon OpenSearch Service domains. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.
		 * Post 2021-01-01/packages
		 * @return {CreatePackageResponse} Success
		 */
		CreatePackage(requestBody: CreatePackagePostBody): Observable<CreatePackageResponse> {
			return this.http.post<CreatePackageResponse>(this.baseUri + '2021-01-01/packages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an Amazon OpenSearch Service-managed VPC endpoint.
		 * Post 2021-01-01/opensearch/vpcEndpoints
		 * @return {CreateVpcEndpointResponse} Success
		 */
		CreateVpcEndpoint(requestBody: CreateVpcEndpointPostBody): Observable<CreateVpcEndpointResponse> {
			return this.http.post<CreateVpcEndpointResponse>(this.baseUri + '2021-01-01/opensearch/vpcEndpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all Amazon OpenSearch Service-managed VPC endpoints in the current Amazon Web Services account and Region.
		 * Get 2021-01-01/opensearch/vpcEndpoints
		 * @param {string} nextToken If your initial <code>ListVpcEndpoints</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>ListVpcEndpoints</code> operations, which returns results in the next page.
		 * @return {ListVpcEndpointsResponse} Success
		 */
		ListVpcEndpoints(nextToken: string | null | undefined): Observable<ListVpcEndpointsResponse> {
			return this.http.get<ListVpcEndpointsResponse>(this.baseUri + '2021-01-01/opensearch/vpcEndpoints?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Deletes an Amazon OpenSearch Service domain and all of its data. You can't recover a domain after you delete it.
		 * Delete 2021-01-01/opensearch/domain/{DomainName}
		 * @param {string} DomainName The name of the domain you want to permanently delete.
		 *     Min length: 3    Max length: 28
		 * @return {DeleteDomainResponse} Success
		 */
		DeleteDomain(DomainName: string): Observable<DeleteDomainResponse> {
			return this.http.delete<DeleteDomainResponse>(this.baseUri + '2021-01-01/opensearch/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)), {});
		}

		/**
		 * Describes the domain configuration for the specified Amazon OpenSearch Service domain, including the domain ID, domain service endpoint, and domain ARN.
		 * Get 2021-01-01/opensearch/domain/{DomainName}
		 * @param {string} DomainName The name of the domain that you want information about.
		 *     Min length: 3    Max length: 28
		 * @return {DescribeDomainResponse} Success
		 */
		DescribeDomain(DomainName: string): Observable<DescribeDomainResponse> {
			return this.http.get<DescribeDomainResponse>(this.baseUri + '2021-01-01/opensearch/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)), {});
		}

		/**
		 * Allows the destination Amazon OpenSearch Service domain owner to delete an existing inbound cross-cluster search connection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search for Amazon OpenSearch Service</a>.
		 * Delete 2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}
		 * @param {string} ConnectionId The ID of the inbound connection to permanently delete.
		 *     Min length: 10    Max length: 256
		 * @return {DeleteInboundConnectionResponse} Success
		 */
		DeleteInboundConnection(ConnectionId: string): Observable<DeleteInboundConnectionResponse> {
			return this.http.delete<DeleteInboundConnectionResponse>(this.baseUri + '2021-01-01/opensearch/cc/inboundConnection/' + (ConnectionId == null ? '' : encodeURIComponent(ConnectionId)), {});
		}

		/**
		 * Allows the source Amazon OpenSearch Service domain owner to delete an existing outbound cross-cluster search connection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search for Amazon OpenSearch Service</a>.
		 * Delete 2021-01-01/opensearch/cc/outboundConnection/{ConnectionId}
		 * @param {string} ConnectionId The ID of the outbound connection you want to permanently delete.
		 *     Min length: 10    Max length: 256
		 * @return {DeleteOutboundConnectionResponse} Success
		 */
		DeleteOutboundConnection(ConnectionId: string): Observable<DeleteOutboundConnectionResponse> {
			return this.http.delete<DeleteOutboundConnectionResponse>(this.baseUri + '2021-01-01/opensearch/cc/outboundConnection/' + (ConnectionId == null ? '' : encodeURIComponent(ConnectionId)), {});
		}

		/**
		 * Deletes an Amazon OpenSearch Service package. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.
		 * Delete 2021-01-01/packages/{PackageID}
		 * @param {string} PackageID The internal ID of the package you want to delete. Use <code>DescribePackages</code> to find this value.
		 * @return {DeletePackageResponse} Success
		 */
		DeletePackage(PackageID: string): Observable<DeletePackageResponse> {
			return this.http.delete<DeletePackageResponse>(this.baseUri + '2021-01-01/packages/' + (PackageID == null ? '' : encodeURIComponent(PackageID)), {});
		}

		/**
		 * Deletes an Amazon OpenSearch Service-managed interface VPC endpoint.
		 * Delete 2021-01-01/opensearch/vpcEndpoints/{VpcEndpointId}
		 * @param {string} VpcEndpointId The unique identifier of the endpoint.
		 *     Min length: 5    Max length: 256
		 * @return {DeleteVpcEndpointResponse} Success
		 */
		DeleteVpcEndpoint(VpcEndpointId: string): Observable<DeleteVpcEndpointResponse> {
			return this.http.delete<DeleteVpcEndpointResponse>(this.baseUri + '2021-01-01/opensearch/vpcEndpoints/' + (VpcEndpointId == null ? '' : encodeURIComponent(VpcEndpointId)), {});
		}

		/**
		 * Returns the list of optimizations that Auto-Tune has made to an Amazon OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>.
		 * Get 2021-01-01/opensearch/domain/{DomainName}/autoTunes
		 * @param {string} DomainName Name of the domain that you want Auto-Tune details about.
		 *     Min length: 3    Max length: 28
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeDomainAutoTunesResponse} Success
		 */
		DescribeDomainAutoTunes(DomainName: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<DescribeDomainAutoTunesResponse> {
			return this.http.get<DescribeDomainAutoTunesResponse>(this.baseUri + '2021-01-01/opensearch/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/autoTunes&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns information about the current blue/green deployment happening on an Amazon OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-configuration-changes.html">Making configuration changes in Amazon OpenSearch Service</a>.
		 * Get 2021-01-01/opensearch/domain/{DomainName}/progress
		 * @param {string} DomainName The name of the domain to get progress information for.
		 *     Min length: 3    Max length: 28
		 * @param {string} changeid The specific change ID for which you want to get progress information. If omitted, the request returns information about the most recent configuration change.
		 *     Min length: 36    Max length: 36
		 * @return {DescribeDomainChangeProgressResponse} Success
		 */
		DescribeDomainChangeProgress(DomainName: string, changeid: string | null | undefined): Observable<DescribeDomainChangeProgressResponse> {
			return this.http.get<DescribeDomainChangeProgressResponse>(this.baseUri + '2021-01-01/opensearch/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/progress&changeid=' + (changeid == null ? '' : encodeURIComponent(changeid)), {});
		}

		/**
		 * Returns the configuration of an Amazon OpenSearch Service domain.
		 * Get 2021-01-01/opensearch/domain/{DomainName}/config
		 * @param {string} DomainName Name of the OpenSearch Service domain configuration that you want to describe.
		 *     Min length: 3    Max length: 28
		 * @return {DescribeDomainConfigResponse} Success
		 */
		DescribeDomainConfig(DomainName: string): Observable<DescribeDomainConfigResponse> {
			return this.http.get<DescribeDomainConfigResponse>(this.baseUri + '2021-01-01/opensearch/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/config', {});
		}

		/**
		 * Modifies the cluster configuration of the specified Amazon OpenSearch Service domain.sl
		 * Post 2021-01-01/opensearch/domain/{DomainName}/config
		 * @param {string} DomainName The name of the domain that you're updating.
		 *     Min length: 3    Max length: 28
		 * @return {UpdateDomainConfigResponse} Success
		 */
		UpdateDomainConfig(DomainName: string, requestBody: UpdateDomainConfigPostBody): Observable<UpdateDomainConfigResponse> {
			return this.http.post<UpdateDomainConfigResponse>(this.baseUri + '2021-01-01/opensearch/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about domain and node health, the standby Availability Zone, number of nodes per Availability Zone, and shard count per node.
		 * Get 2021-01-01/opensearch/domain/{DomainName}/health
		 * @param {string} DomainName The name of the domain.
		 *     Min length: 3    Max length: 28
		 * @return {DescribeDomainHealthResponse} Success
		 */
		DescribeDomainHealth(DomainName: string): Observable<DescribeDomainHealthResponse> {
			return this.http.get<DescribeDomainHealthResponse>(this.baseUri + '2021-01-01/opensearch/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/health', {});
		}

		/**
		 * Returns information about domain and nodes, including data nodes, master nodes, ultrawarm nodes, Availability Zone(s), standby nodes, node configurations, and node states.
		 * Get 2021-01-01/opensearch/domain/{DomainName}/nodes
		 * @param {string} DomainName The name of the domain.
		 *     Min length: 3    Max length: 28
		 * @return {DescribeDomainNodesResponse} Success
		 */
		DescribeDomainNodes(DomainName: string): Observable<DescribeDomainNodesResponse> {
			return this.http.get<DescribeDomainNodesResponse>(this.baseUri + '2021-01-01/opensearch/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/nodes', {});
		}

		/**
		 * Returns domain configuration information about the specified Amazon OpenSearch Service domains.
		 * Post 2021-01-01/opensearch/domain-info
		 * @return {DescribeDomainsResponse} Success
		 */
		DescribeDomains(requestBody: DescribeDomainsPostBody): Observable<DescribeDomainsResponse> {
			return this.http.post<DescribeDomainsResponse>(this.baseUri + '2021-01-01/opensearch/domain-info', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the progress of a pre-update dry run analysis on an Amazon OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-configuration-changes#dryrun">Determining whether a change will cause a blue/green deployment</a>.
		 * Get 2021-01-01/opensearch/domain/{DomainName}/dryRun
		 * @param {string} DomainName The name of the domain.
		 *     Min length: 3    Max length: 28
		 * @param {string} dryRunId The unique identifier of the dry run.
		 *     Min length: 36    Max length: 36
		 * @param {boolean} loadDryRunConfig Whether to include the configuration of the dry run in the response. The configuration specifies the updates that you're planning to make on the domain.
		 * @return {DescribeDryRunProgressResponse} Success
		 */
		DescribeDryRunProgress(DomainName: string, dryRunId: string | null | undefined, loadDryRunConfig: boolean | null | undefined): Observable<DescribeDryRunProgressResponse> {
			return this.http.get<DescribeDryRunProgressResponse>(this.baseUri + '2021-01-01/opensearch/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/dryRun&dryRunId=' + (dryRunId == null ? '' : encodeURIComponent(dryRunId)) + '&loadDryRunConfig=' + loadDryRunConfig, {});
		}

		/**
		 * Lists all the inbound cross-cluster search connections for a destination (remote) Amazon OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search for Amazon OpenSearch Service</a>.
		 * Post 2021-01-01/opensearch/cc/inboundConnection/search
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeInboundConnectionsResponse} Success
		 */
		DescribeInboundConnections(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeInboundConnectionsPostBody): Observable<DescribeInboundConnectionsResponse> {
			return this.http.post<DescribeInboundConnectionsResponse>(this.baseUri + '2021-01-01/opensearch/cc/inboundConnection/search?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the instance count, storage, and master node limits for a given OpenSearch or Elasticsearch version and instance type.
		 * Get 2021-01-01/opensearch/instanceTypeLimits/{EngineVersion}/{InstanceType}
		 * @param {string} domainName The name of the domain. Only specify if you need the limits for an existing domain.
		 *     Min length: 3    Max length: 28
		 * @param {OpenSearchPartitionInstanceType} InstanceType The OpenSearch Service instance type for which you need limit information.
		 * @param {string} EngineVersion Version of OpenSearch or Elasticsearch, in the format Elasticsearch_X.Y or OpenSearch_X.Y. Defaults to the latest version of OpenSearch.
		 *     Min length: 14    Max length: 18
		 * @return {DescribeInstanceTypeLimitsResponse} Success
		 */
		DescribeInstanceTypeLimits(domainName: string | null | undefined, InstanceType: OpenSearchPartitionInstanceType, EngineVersion: string): Observable<DescribeInstanceTypeLimitsResponse> {
			return this.http.get<DescribeInstanceTypeLimitsResponse>(this.baseUri + '2021-01-01/opensearch/instanceTypeLimits/' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '/' + InstanceType + '?domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)), {});
		}

		/**
		 * Lists all the outbound cross-cluster connections for a local (source) Amazon OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search for Amazon OpenSearch Service</a>.
		 * Post 2021-01-01/opensearch/cc/outboundConnection/search
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeOutboundConnectionsResponse} Success
		 */
		DescribeOutboundConnections(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeOutboundConnectionsPostBody): Observable<DescribeOutboundConnectionsResponse> {
			return this.http.post<DescribeOutboundConnectionsResponse>(this.baseUri + '2021-01-01/opensearch/cc/outboundConnection/search?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes all packages available to OpenSearch Service. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.
		 * Post 2021-01-01/packages/describe
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribePackagesResponse} Success
		 */
		DescribePackages(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribePackagesPostBody): Observable<DescribePackagesResponse> {
			return this.http.post<DescribePackagesResponse>(this.baseUri + '2021-01-01/packages/describe?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the available Amazon OpenSearch Service Reserved Instance offerings for a given Region. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ri.html">Reserved Instances in Amazon OpenSearch Service</a>.
		 * Get 2021-01-01/opensearch/reservedInstanceOfferings
		 * @param {string} offeringId The Reserved Instance identifier filter value. Use this parameter to show only the available instance types that match the specified reservation identifier.
		 *     Min length: 36    Max length: 36
		 * @param {number} maxResults An optional parameter that specifies the maximum number of results to return. You can use <code>nextToken</code> to get the next page of results.
		 *     Maximum: 100
		 * @param {string} nextToken If your initial <code>DescribeReservedInstanceOfferings</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>DescribeReservedInstanceOfferings</code> operations, which returns results in the next page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeReservedInstanceOfferingsResponse} Success
		 */
		DescribeReservedInstanceOfferings(offeringId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<DescribeReservedInstanceOfferingsResponse> {
			return this.http.get<DescribeReservedInstanceOfferingsResponse>(this.baseUri + '2021-01-01/opensearch/reservedInstanceOfferings?offeringId=' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Describes the Amazon OpenSearch Service instances that you have reserved in a given Region. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ri.html">Reserved Instances in Amazon OpenSearch Service</a>.
		 * Get 2021-01-01/opensearch/reservedInstances
		 * @param {string} reservationId The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the specified reserved OpenSearch instance ID.
		 *     Min length: 36    Max length: 36
		 * @param {number} maxResults An optional parameter that specifies the maximum number of results to return. You can use <code>nextToken</code> to get the next page of results.
		 *     Maximum: 100
		 * @param {string} nextToken If your initial <code>DescribeReservedInstances</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>DescribeReservedInstances</code> operations, which returns results in the next page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeReservedInstancesResponse} Success
		 */
		DescribeReservedInstances(reservationId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<DescribeReservedInstancesResponse> {
			return this.http.get<DescribeReservedInstancesResponse>(this.baseUri + '2021-01-01/opensearch/reservedInstances?reservationId=' + (reservationId == null ? '' : encodeURIComponent(reservationId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Describes one or more Amazon OpenSearch Service-managed VPC endpoints.
		 * Post 2021-01-01/opensearch/vpcEndpoints/describe
		 * @return {DescribeVpcEndpointsResponse} Success
		 */
		DescribeVpcEndpoints(requestBody: DescribeVpcEndpointsPostBody): Observable<DescribeVpcEndpointsResponse> {
			return this.http.post<DescribeVpcEndpointsResponse>(this.baseUri + '2021-01-01/opensearch/vpcEndpoints/describe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a package from the specified Amazon OpenSearch Service domain. The package can't be in use with any OpenSearch index for the dissociation to succeed. The package is still available in OpenSearch Service for association later. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.
		 * Post 2021-01-01/packages/dissociate/{PackageID}/{DomainName}
		 * @param {string} PackageID Internal ID of the package to dissociate from the domain. Use <code>ListPackagesForDomain</code> to find this value.
		 * @param {string} DomainName Name of the domain to dissociate the package from.
		 *     Min length: 3    Max length: 28
		 * @return {DissociatePackageResponse} Success
		 */
		DissociatePackage(PackageID: string, DomainName: string): Observable<DissociatePackageResponse> {
			return this.http.post<DissociatePackageResponse>(this.baseUri + '2021-01-01/packages/dissociate/' + (PackageID == null ? '' : encodeURIComponent(PackageID)) + '/' + (DomainName == null ? '' : encodeURIComponent(DomainName)), null, {});
		}

		/**
		 * Returns a map of OpenSearch or Elasticsearch versions and the versions you can upgrade them to.
		 * Get 2021-01-01/opensearch/compatibleVersions
		 * @param {string} domainName The name of an existing domain. Provide this parameter to limit the results to a single domain.
		 *     Min length: 3    Max length: 28
		 * @return {GetCompatibleVersionsResponse} Success
		 */
		GetCompatibleVersions(domainName: string | null | undefined): Observable<GetCompatibleVersionsResponse> {
			return this.http.get<GetCompatibleVersionsResponse>(this.baseUri + '2021-01-01/opensearch/compatibleVersions?domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)), {});
		}

		/**
		 * Returns a list of Amazon OpenSearch Service package versions, along with their creation time, commit message, and plugin properties (if the package is a zip plugin package). For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.
		 * Get 2021-01-01/packages/{PackageID}/history
		 * @param {string} PackageID The unique identifier of the package.
		 * @param {number} maxResults An optional parameter that specifies the maximum number of results to return. You can use <code>nextToken</code> to get the next page of results.
		 *     Maximum: 100
		 * @param {string} nextToken If your initial <code>GetPackageVersionHistory</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>GetPackageVersionHistory</code> operations, which returns results in the next page. 
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetPackageVersionHistoryResponse} Success
		 */
		GetPackageVersionHistory(PackageID: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetPackageVersionHistoryResponse> {
			return this.http.get<GetPackageVersionHistoryResponse>(this.baseUri + '2021-01-01/packages/' + (PackageID == null ? '' : encodeURIComponent(PackageID)) + '/history&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Retrieves the complete history of the last 10 upgrades performed on an Amazon OpenSearch Service domain.
		 * Get 2021-01-01/opensearch/upgradeDomain/{DomainName}/history
		 * @param {string} DomainName The name of an existing domain.
		 *     Min length: 3    Max length: 28
		 * @param {number} maxResults An optional parameter that specifies the maximum number of results to return. You can use <code>nextToken</code> to get the next page of results.
		 *     Maximum: 100
		 * @param {string} nextToken If your initial <code>GetUpgradeHistory</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>GetUpgradeHistory</code> operations, which returns results in the next page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetUpgradeHistoryResponse} Success
		 */
		GetUpgradeHistory(DomainName: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetUpgradeHistoryResponse> {
			return this.http.get<GetUpgradeHistoryResponse>(this.baseUri + '2021-01-01/opensearch/upgradeDomain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/history&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns the most recent status of the last upgrade or upgrade eligibility check performed on an Amazon OpenSearch Service domain.
		 * Get 2021-01-01/opensearch/upgradeDomain/{DomainName}/status
		 * @param {string} DomainName The domain of the domain to get upgrade status information for.
		 *     Min length: 3    Max length: 28
		 * @return {GetUpgradeStatusResponse} Success
		 */
		GetUpgradeStatus(DomainName: string): Observable<GetUpgradeStatusResponse> {
			return this.http.get<GetUpgradeStatusResponse>(this.baseUri + '2021-01-01/opensearch/upgradeDomain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/status', {});
		}

		/**
		 * Returns the names of all Amazon OpenSearch Service domains owned by the current user in the active Region.
		 * Get 2021-01-01/domain
		 * @param {EngineType} engineType Filters the output by domain engine type.
		 * @return {ListDomainNamesResponse} Success
		 */
		ListDomainNames(engineType: EngineType | null | undefined): Observable<ListDomainNamesResponse> {
			return this.http.get<ListDomainNamesResponse>(this.baseUri + '2021-01-01/domain?engineType=' + engineType, {});
		}

		/**
		 * Lists all Amazon OpenSearch Service domains associated with a given package. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.
		 * Get 2021-01-01/packages/{PackageID}/domains
		 * @param {string} PackageID The unique identifier of the package for which to list associated domains.
		 * @param {number} maxResults An optional parameter that specifies the maximum number of results to return. You can use <code>nextToken</code> to get the next page of results.
		 *     Maximum: 100
		 * @param {string} nextToken If your initial <code>ListDomainsForPackage</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>ListDomainsForPackage</code> operations, which returns results in the next page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDomainsForPackageResponse} Success
		 */
		ListDomainsForPackage(PackageID: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDomainsForPackageResponse> {
			return this.http.get<ListDomainsForPackageResponse>(this.baseUri + '2021-01-01/packages/' + (PackageID == null ? '' : encodeURIComponent(PackageID)) + '/domains&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists all instance types and available features for a given OpenSearch or Elasticsearch version.
		 * Get 2021-01-01/opensearch/instanceTypeDetails/{EngineVersion}
		 * @param {string} EngineVersion The version of OpenSearch or Elasticsearch, in the format Elasticsearch_X.Y or OpenSearch_X.Y. Defaults to the latest version of OpenSearch.
		 *     Min length: 14    Max length: 18
		 * @param {string} domainName The name of the domain.
		 *     Min length: 3    Max length: 28
		 * @param {number} maxResults An optional parameter that specifies the maximum number of results to return. You can use <code>nextToken</code> to get the next page of results.
		 *     Maximum: 100
		 * @param {string} nextToken If your initial <code>ListInstanceTypeDetails</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>ListInstanceTypeDetails</code> operations, which returns results in the next page.
		 * @param {boolean} retrieveAZs An optional parameter that specifies the Availability Zones for the domain.
		 * @param {string} instanceType An optional parameter that lists information for a given instance type.
		 *     Min length: 10    Max length: 40
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInstanceTypeDetailsResponse} Success
		 */
		ListInstanceTypeDetails(EngineVersion: string, domainName: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, retrieveAZs: boolean | null | undefined, instanceType: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListInstanceTypeDetailsResponse> {
			return this.http.get<ListInstanceTypeDetailsResponse>(this.baseUri + '2021-01-01/opensearch/instanceTypeDetails/' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&retrieveAZs=' + retrieveAZs + '&instanceType=' + (instanceType == null ? '' : encodeURIComponent(instanceType)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists all packages associated with an Amazon OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.
		 * Get 2021-01-01/domain/{DomainName}/packages
		 * @param {string} DomainName The name of the domain for which you want to list associated packages.
		 *     Min length: 3    Max length: 28
		 * @param {number} maxResults An optional parameter that specifies the maximum number of results to return. You can use <code>nextToken</code> to get the next page of results.
		 *     Maximum: 100
		 * @param {string} nextToken If your initial <code>ListPackagesForDomain</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>ListPackagesForDomain</code> operations, which returns results in the next page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPackagesForDomainResponse} Success
		 */
		ListPackagesForDomain(DomainName: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPackagesForDomainResponse> {
			return this.http.get<ListPackagesForDomainResponse>(this.baseUri + '2021-01-01/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/packages&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Retrieves a list of configuration changes that are scheduled for a domain. These changes can be <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">service software updates</a> or <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html#auto-tune-types">blue/green Auto-Tune enhancements</a>.
		 * Get 2021-01-01/opensearch/domain/{DomainName}/scheduledActions
		 * @param {string} DomainName The name of the domain.
		 *     Min length: 3    Max length: 28
		 * @param {number} maxResults An optional parameter that specifies the maximum number of results to return. You can use <code>nextToken</code> to get the next page of results.
		 *     Maximum: 100
		 * @param {string} nextToken If your initial <code>ListScheduledActions</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>ListScheduledActions</code> operations, which returns results in the next page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListScheduledActionsResponse} Success
		 */
		ListScheduledActions(DomainName: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListScheduledActionsResponse> {
			return this.http.get<ListScheduledActionsResponse>(this.baseUri + '2021-01-01/opensearch/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/scheduledActions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns all resource tags for an Amazon OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-awsresourcetagging.html">Tagging Amazon OpenSearch Service domains</a>.
		 * Get 2021-01-01/tags/#arn
		 * @param {string} arn Amazon Resource Name (ARN) for the domain to view tags for.
		 *     Min length: 20    Max length: 2048
		 * @return {ListTagsResponse} Success
		 */
		ListTags(arn: string): Observable<ListTagsResponse> {
			return this.http.get<ListTagsResponse>(this.baseUri + '2021-01-01/tags/#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * Lists all versions of OpenSearch and Elasticsearch that Amazon OpenSearch Service supports.
		 * Get 2021-01-01/opensearch/versions
		 * @param {number} maxResults An optional parameter that specifies the maximum number of results to return. You can use <code>nextToken</code> to get the next page of results.
		 *     Maximum: 100
		 * @param {string} nextToken If your initial <code>ListVersions</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>ListVersions</code> operations, which returns results in the next page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVersionsResponse} Success
		 */
		ListVersions(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListVersionsResponse> {
			return this.http.get<ListVersionsResponse>(this.baseUri + '2021-01-01/opensearch/versions?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Retrieves information about each Amazon Web Services principal that is allowed to access a given Amazon OpenSearch Service domain through the use of an interface VPC endpoint.
		 * Get 2021-01-01/opensearch/domain/{DomainName}/listVpcEndpointAccess
		 * @param {string} DomainName The name of the OpenSearch Service domain to retrieve access information for.
		 *     Min length: 3    Max length: 28
		 * @param {string} nextToken If your initial <code>ListVpcEndpointAccess</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>ListVpcEndpointAccess</code> operations, which returns results in the next page.
		 * @return {ListVpcEndpointAccessResponse} Success
		 */
		ListVpcEndpointAccess(DomainName: string, nextToken: string | null | undefined): Observable<ListVpcEndpointAccessResponse> {
			return this.http.get<ListVpcEndpointAccessResponse>(this.baseUri + '2021-01-01/opensearch/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/listVpcEndpointAccess&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Retrieves all Amazon OpenSearch Service-managed VPC endpoints associated with a particular domain.
		 * Get 2021-01-01/opensearch/domain/{DomainName}/vpcEndpoints
		 * @param {string} DomainName The name of the domain to list associated VPC endpoints for.
		 *     Min length: 3    Max length: 28
		 * @param {string} nextToken If your initial <code>ListEndpointsForDomain</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>ListEndpointsForDomain</code> operations, which returns results in the next page.
		 * @return {ListVpcEndpointsForDomainResponse} Success
		 */
		ListVpcEndpointsForDomain(DomainName: string, nextToken: string | null | undefined): Observable<ListVpcEndpointsForDomainResponse> {
			return this.http.get<ListVpcEndpointsForDomainResponse>(this.baseUri + '2021-01-01/opensearch/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/vpcEndpoints&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Allows you to purchase Amazon OpenSearch Service Reserved Instances.
		 * Post 2021-01-01/opensearch/purchaseReservedInstanceOffering
		 * @return {PurchaseReservedInstanceOfferingResponse} Success
		 */
		PurchaseReservedInstanceOffering(requestBody: PurchaseReservedInstanceOfferingPostBody): Observable<PurchaseReservedInstanceOfferingResponse> {
			return this.http.post<PurchaseReservedInstanceOfferingResponse>(this.baseUri + '2021-01-01/opensearch/purchaseReservedInstanceOffering', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows the remote Amazon OpenSearch Service domain owner to reject an inbound cross-cluster connection request.
		 * Put 2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}/reject
		 * @param {string} ConnectionId The unique identifier of the inbound connection to reject.
		 *     Min length: 10    Max length: 256
		 * @return {RejectInboundConnectionResponse} Success
		 */
		RejectInboundConnection(ConnectionId: string): Observable<RejectInboundConnectionResponse> {
			return this.http.put<RejectInboundConnectionResponse>(this.baseUri + '2021-01-01/opensearch/cc/inboundConnection/' + (ConnectionId == null ? '' : encodeURIComponent(ConnectionId)) + '/reject', null, {});
		}

		/**
		 * Removes the specified set of tags from an Amazon OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains.html#managedomains-awsresorcetagging"> Tagging Amazon OpenSearch Service domains</a>.
		 * Post 2021-01-01/tags-removal
		 * @return {void} Success
		 */
		RemoveTags(requestBody: RemoveTagsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2021-01-01/tags-removal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Revokes access to an Amazon OpenSearch Service domain that was provided through an interface VPC endpoint.
		 * Post 2021-01-01/opensearch/domain/{DomainName}/revokeVpcEndpointAccess
		 * @param {string} DomainName The name of the OpenSearch Service domain.
		 *     Min length: 3    Max length: 28
		 * @return {RevokeVpcEndpointAccessResponse} Success
		 */
		RevokeVpcEndpointAccess(DomainName: string, requestBody: RevokeVpcEndpointAccessPostBody): Observable<RevokeVpcEndpointAccessResponse> {
			return this.http.post<RevokeVpcEndpointAccessResponse>(this.baseUri + '2021-01-01/opensearch/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/revokeVpcEndpointAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Schedules a service software update for an Amazon OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">Service software updates in Amazon OpenSearch Service</a>.
		 * Post 2021-01-01/opensearch/serviceSoftwareUpdate/start
		 * @return {StartServiceSoftwareUpdateResponse} Success
		 */
		StartServiceSoftwareUpdate(requestBody: StartServiceSoftwareUpdatePostBody): Observable<StartServiceSoftwareUpdateResponse> {
			return this.http.post<StartServiceSoftwareUpdateResponse>(this.baseUri + '2021-01-01/opensearch/serviceSoftwareUpdate/start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a package for use with Amazon OpenSearch Service domains. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.
		 * Post 2021-01-01/packages/update
		 * @return {UpdatePackageResponse} Success
		 */
		UpdatePackage(requestBody: UpdatePackagePostBody): Observable<UpdatePackageResponse> {
			return this.http.post<UpdatePackageResponse>(this.baseUri + '2021-01-01/packages/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reschedules a planned domain configuration change for a later time. This change can be a scheduled <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">service software update</a> or a <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html#auto-tune-types">blue/green Auto-Tune enhancement</a>.
		 * Put 2021-01-01/opensearch/domain/{DomainName}/scheduledAction/update
		 * @param {string} DomainName The name of the domain to reschedule an action for.
		 *     Min length: 3    Max length: 28
		 * @return {UpdateScheduledActionResponse} Success
		 */
		UpdateScheduledAction(DomainName: string, requestBody: UpdateScheduledActionPutBody): Observable<UpdateScheduledActionResponse> {
			return this.http.put<UpdateScheduledActionResponse>(this.baseUri + '2021-01-01/opensearch/domain/' + (DomainName == null ? '' : encodeURIComponent(DomainName)) + '/scheduledAction/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies an Amazon OpenSearch Service-managed interface VPC endpoint.
		 * Post 2021-01-01/opensearch/vpcEndpoints/update
		 * @return {UpdateVpcEndpointResponse} Success
		 */
		UpdateVpcEndpoint(requestBody: UpdateVpcEndpointPostBody): Observable<UpdateVpcEndpointResponse> {
			return this.http.post<UpdateVpcEndpointResponse>(this.baseUri + '2021-01-01/opensearch/vpcEndpoints/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to either upgrade your Amazon OpenSearch Service domain or perform an upgrade eligibility check to a compatible version of OpenSearch or Elasticsearch.
		 * Post 2021-01-01/opensearch/upgradeDomain
		 * @return {UpgradeDomainResponse} Success
		 */
		UpgradeDomain(requestBody: UpgradeDomainPostBody): Observable<UpgradeDomainResponse> {
			return this.http.post<UpgradeDomainResponse>(this.baseUri + '2021-01-01/opensearch/upgradeDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AddTagsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the domain. See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html">Identifiers for IAM Entities </a> in <i>Using AWS Identity and Access Management</i> for more information.
		 * Required
		 * Min length: 20
		 * Max length: 2048
		 */
		ARN: string;

		/**
		 * A list of tags attached to a domain.
		 * Required
		 */
		TagList: Array<Tag>;
	}
	export interface AddTagsPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the domain. See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html">Identifiers for IAM Entities </a> in <i>Using AWS Identity and Access Management</i> for more information.
		 * Required
		 * Min length: 20
		 * Max length: 2048
		 */
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsPostBodyFormGroup() {
		return new FormGroup<AddTagsPostBodyFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}

	export interface AuthorizeVpcEndpointAccessPostBody {

		/**
		 * The Amazon Web Services account ID to grant access to.
		 * Required
		 */
		Account: string;
	}
	export interface AuthorizeVpcEndpointAccessPostBodyFormProperties {

		/**
		 * The Amazon Web Services account ID to grant access to.
		 * Required
		 */
		Account: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizeVpcEndpointAccessPostBodyFormGroup() {
		return new FormGroup<AuthorizeVpcEndpointAccessPostBodyFormProperties>({
			Account: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]+$')]),
		});

	}

	export interface CancelServiceSoftwareUpdatePostBody {

		/**
		 * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;
	}
	export interface CancelServiceSoftwareUpdatePostBodyFormProperties {

		/**
		 * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateCancelServiceSoftwareUpdatePostBodyFormGroup() {
		return new FormGroup<CancelServiceSoftwareUpdatePostBodyFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}

	export interface CreateDomainPostBody {

		/**
		 * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/**
		 * String of format Elasticsearch_X.Y or OpenSearch_X.Y to specify the engine version for the OpenSearch Service domain. For example, <code>OpenSearch_1.0</code> or <code>Elasticsearch_7.9</code>. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomains">Creating and managing Amazon OpenSearch Service domains</a>.
		 * Min length: 14
		 * Max length: 18
		 */
		EngineVersion?: string | null;

		/** Container for the cluster configuration of an OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html">Creating and managing Amazon OpenSearch Service domains</a>. */
		ClusterConfig?: CreateDomainPostBodyClusterConfig;

		/** Container for the parameters required to enable EBS-based storage for an OpenSearch Service domain. */
		EBSOptions?: CreateDomainPostBodyEBSOptions;

		/**
		 * Access policy rules for an Amazon OpenSearch Service domain endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-access-policies">Configuring access policies</a>. The maximum size of a policy document is 100 KB.
		 * Min length: 0
		 * Max length: 102400
		 */
		AccessPolicies?: string | null;

		/** The time, in UTC format, when OpenSearch Service takes a daily automated snapshot of the specified domain. Default is <code>0</code> hours. */
		SnapshotOptions?: CreateDomainPostBodySnapshotOptions;

		/** Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching your Amazon OpenSearch Service domains using a VPC</a>. */
		VPCOptions?: CreateDomainPostBodyVPCOptions;

		/** Container for the parameters required to enable Cognito authentication for an OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html">Configuring Amazon Cognito authentication for OpenSearch Dashboards</a>. */
		CognitoOptions?: CreateDomainPostBodyCognitoOptions;

		/** Specifies whether the domain should encrypt data at rest, and if so, the Key Management Service (KMS) key to use. Can be used only to create a new domain, not update an existing one. */
		EncryptionAtRestOptions?: CreateDomainPostBodyEncryptionAtRestOptions;

		/** Enables or disables node-to-node encryption. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ntn.html">Node-to-node encryption for Amazon OpenSearch Service</a>. */
		NodeToNodeEncryptionOptions?: CreateDomainPostBodyNodeToNodeEncryptionOptions;

		/** <p>Exposes native OpenSearch configuration values from <code>opensearch.yml</code>. The following advanced options are available: </p> <ul> <li> <p>Allows references to indexes in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. Default is <code>true</code>.</p> </li> <li> <p>Specifies the percentage of heap space allocated to field data. Default is unbounded.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced cluster parameters</a>.</p> */
		AdvancedOptions?: {[id: string]: string };

		/** Key-value pairs to configure log publishing. */
		LogPublishingOptions?: {[id: string]: LogPublishingOption };

		/** Options to configure a custom endpoint for an OpenSearch Service domain. */
		DomainEndpointOptions?: CreateDomainPostBodyDomainEndpointOptions;

		/** Options for enabling and configuring fine-grained access control. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html">Fine-grained access control in Amazon OpenSearch Service</a>. */
		AdvancedSecurityOptions?: CreateDomainPostBodyAdvancedSecurityOptions;

		/** A list of tags attached to a domain. */
		TagList?: Array<Tag>;

		/** Options for configuring Auto-Tune. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a> */
		AutoTuneOptions?: CreateDomainPostBodyAutoTuneOptions;

		/** Options for a domain's <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html">off-peak window</a>, during which OpenSearch Service can perform mandatory configuration changes on the domain. */
		OffPeakWindowOptions?: CreateDomainPostBodyOffPeakWindowOptions;

		/** Options for configuring service software updates for a domain. */
		SoftwareUpdateOptions?: CreateDomainPostBodySoftwareUpdateOptions;
	}
	export interface CreateDomainPostBodyFormProperties {

		/**
		 * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/**
		 * String of format Elasticsearch_X.Y or OpenSearch_X.Y to specify the engine version for the OpenSearch Service domain. For example, <code>OpenSearch_1.0</code> or <code>Elasticsearch_7.9</code>. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomains">Creating and managing Amazon OpenSearch Service domains</a>.
		 * Min length: 14
		 * Max length: 18
		 */
		EngineVersion: FormControl<string | null | undefined>,

		/**
		 * Access policy rules for an Amazon OpenSearch Service domain endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-access-policies">Configuring access policies</a>. The maximum size of a policy document is 100 KB.
		 * Min length: 0
		 * Max length: 102400
		 */
		AccessPolicies: FormControl<string | null | undefined>,

		/** <p>Exposes native OpenSearch configuration values from <code>opensearch.yml</code>. The following advanced options are available: </p> <ul> <li> <p>Allows references to indexes in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. Default is <code>true</code>.</p> </li> <li> <p>Specifies the percentage of heap space allocated to field data. Default is unbounded.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced cluster parameters</a>.</p> */
		AdvancedOptions: FormControl<{[id: string]: string } | null | undefined>,

		/** Key-value pairs to configure log publishing. */
		LogPublishingOptions: FormControl<{[id: string]: LogPublishingOption } | null | undefined>,
	}
	export function CreateCreateDomainPostBodyFormGroup() {
		return new FormGroup<CreateDomainPostBodyFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			EngineVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(14), Validators.maxLength(18), Validators.pattern('^Elasticsearch_[0-9]{1}\.[0-9]{1,2}$|^OpenSearch_[0-9]{1,2}\.[0-9]{1,2}$')]),
			AccessPolicies: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(102400), Validators.pattern('.*')]),
			AdvancedOptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			LogPublishingOptions: new FormControl<{[id: string]: LogPublishingOption } | null | undefined>(undefined),
		});

	}

	export interface CreateDomainPostBodyClusterConfig {
		InstanceType?: OpenSearchPartitionInstanceType;
		InstanceCount?: number | null;
		DedicatedMasterEnabled?: boolean | null;
		ZoneAwarenessEnabled?: boolean | null;
		ZoneAwarenessConfig?: ZoneAwarenessConfig;
		DedicatedMasterType?: OpenSearchPartitionInstanceType;
		DedicatedMasterCount?: number | null;
		WarmEnabled?: boolean | null;
		WarmType?: OpenSearchWarmPartitionInstanceType;
		WarmCount?: number | null;
		ColdStorageOptions?: ColdStorageOptions;
		MultiAZWithStandbyEnabled?: boolean | null;
	}
	export interface CreateDomainPostBodyClusterConfigFormProperties {
		InstanceType: FormControl<OpenSearchPartitionInstanceType | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		DedicatedMasterEnabled: FormControl<boolean | null | undefined>,
		ZoneAwarenessEnabled: FormControl<boolean | null | undefined>,
		DedicatedMasterType: FormControl<OpenSearchPartitionInstanceType | null | undefined>,
		DedicatedMasterCount: FormControl<number | null | undefined>,
		WarmEnabled: FormControl<boolean | null | undefined>,
		WarmType: FormControl<OpenSearchWarmPartitionInstanceType | null | undefined>,
		WarmCount: FormControl<number | null | undefined>,
		MultiAZWithStandbyEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDomainPostBodyClusterConfigFormGroup() {
		return new FormGroup<CreateDomainPostBodyClusterConfigFormProperties>({
			InstanceType: new FormControl<OpenSearchPartitionInstanceType | null | undefined>(undefined),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			DedicatedMasterEnabled: new FormControl<boolean | null | undefined>(undefined),
			ZoneAwarenessEnabled: new FormControl<boolean | null | undefined>(undefined),
			DedicatedMasterType: new FormControl<OpenSearchPartitionInstanceType | null | undefined>(undefined),
			DedicatedMasterCount: new FormControl<number | null | undefined>(undefined),
			WarmEnabled: new FormControl<boolean | null | undefined>(undefined),
			WarmType: new FormControl<OpenSearchWarmPartitionInstanceType | null | undefined>(undefined),
			WarmCount: new FormControl<number | null | undefined>(undefined),
			MultiAZWithStandbyEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDomainPostBodyEBSOptions {
		EBSEnabled?: boolean | null;
		VolumeType?: VolumeType;
		VolumeSize?: number | null;
		Iops?: number | null;
		Throughput?: number | null;
	}
	export interface CreateDomainPostBodyEBSOptionsFormProperties {
		EBSEnabled: FormControl<boolean | null | undefined>,
		VolumeType: FormControl<VolumeType | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		Throughput: FormControl<number | null | undefined>,
	}
	export function CreateCreateDomainPostBodyEBSOptionsFormGroup() {
		return new FormGroup<CreateDomainPostBodyEBSOptionsFormProperties>({
			EBSEnabled: new FormControl<boolean | null | undefined>(undefined),
			VolumeType: new FormControl<VolumeType | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			Throughput: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateDomainPostBodySnapshotOptions {
		AutomatedSnapshotStartHour?: number | null;
	}
	export interface CreateDomainPostBodySnapshotOptionsFormProperties {
		AutomatedSnapshotStartHour: FormControl<number | null | undefined>,
	}
	export function CreateCreateDomainPostBodySnapshotOptionsFormGroup() {
		return new FormGroup<CreateDomainPostBodySnapshotOptionsFormProperties>({
			AutomatedSnapshotStartHour: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateDomainPostBodyVPCOptions {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}
	export interface CreateDomainPostBodyVPCOptionsFormProperties {
	}
	export function CreateCreateDomainPostBodyVPCOptionsFormGroup() {
		return new FormGroup<CreateDomainPostBodyVPCOptionsFormProperties>({
		});

	}

	export interface CreateDomainPostBodyCognitoOptions {
		Enabled?: boolean | null;
		UserPoolId?: string;
		IdentityPoolId?: string;
		RoleArn?: string;
	}
	export interface CreateDomainPostBodyCognitoOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
		IdentityPoolId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainPostBodyCognitoOptionsFormGroup() {
		return new FormGroup<CreateDomainPostBodyCognitoOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDomainPostBodyEncryptionAtRestOptions {
		Enabled?: boolean | null;
		KmsKeyId?: string;
	}
	export interface CreateDomainPostBodyEncryptionAtRestOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainPostBodyEncryptionAtRestOptionsFormGroup() {
		return new FormGroup<CreateDomainPostBodyEncryptionAtRestOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDomainPostBodyNodeToNodeEncryptionOptions {
		Enabled?: boolean | null;
	}
	export interface CreateDomainPostBodyNodeToNodeEncryptionOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDomainPostBodyNodeToNodeEncryptionOptionsFormGroup() {
		return new FormGroup<CreateDomainPostBodyNodeToNodeEncryptionOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDomainPostBodyDomainEndpointOptions {
		EnforceHTTPS?: boolean | null;
		TLSSecurityPolicy?: TLSSecurityPolicy;
		CustomEndpointEnabled?: boolean | null;
		CustomEndpoint?: string;
		CustomEndpointCertificateArn?: string;
	}
	export interface CreateDomainPostBodyDomainEndpointOptionsFormProperties {
		EnforceHTTPS: FormControl<boolean | null | undefined>,
		TLSSecurityPolicy: FormControl<TLSSecurityPolicy | null | undefined>,
		CustomEndpointEnabled: FormControl<boolean | null | undefined>,
		CustomEndpoint: FormControl<string | null | undefined>,
		CustomEndpointCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainPostBodyDomainEndpointOptionsFormGroup() {
		return new FormGroup<CreateDomainPostBodyDomainEndpointOptionsFormProperties>({
			EnforceHTTPS: new FormControl<boolean | null | undefined>(undefined),
			TLSSecurityPolicy: new FormControl<TLSSecurityPolicy | null | undefined>(undefined),
			CustomEndpointEnabled: new FormControl<boolean | null | undefined>(undefined),
			CustomEndpoint: new FormControl<string | null | undefined>(undefined),
			CustomEndpointCertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDomainPostBodyAdvancedSecurityOptions {
		Enabled?: boolean | null;
		InternalUserDatabaseEnabled?: boolean | null;
		MasterUserOptions?: MasterUserOptions;
		SAMLOptions?: SAMLOptionsInput;
		AnonymousAuthEnabled?: boolean | null;
	}
	export interface CreateDomainPostBodyAdvancedSecurityOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		InternalUserDatabaseEnabled: FormControl<boolean | null | undefined>,
		AnonymousAuthEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDomainPostBodyAdvancedSecurityOptionsFormGroup() {
		return new FormGroup<CreateDomainPostBodyAdvancedSecurityOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			InternalUserDatabaseEnabled: new FormControl<boolean | null | undefined>(undefined),
			AnonymousAuthEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDomainPostBodyAutoTuneOptions {
		DesiredState?: AutoTuneDesiredState;
		MaintenanceSchedules?: Array<AutoTuneMaintenanceSchedule>;
		UseOffPeakWindow?: boolean | null;
	}
	export interface CreateDomainPostBodyAutoTuneOptionsFormProperties {
		DesiredState: FormControl<AutoTuneDesiredState | null | undefined>,
		UseOffPeakWindow: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDomainPostBodyAutoTuneOptionsFormGroup() {
		return new FormGroup<CreateDomainPostBodyAutoTuneOptionsFormProperties>({
			DesiredState: new FormControl<AutoTuneDesiredState | null | undefined>(undefined),
			UseOffPeakWindow: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDomainPostBodyOffPeakWindowOptions {
		Enabled?: boolean | null;
		OffPeakWindow?: OffPeakWindow;
	}
	export interface CreateDomainPostBodyOffPeakWindowOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDomainPostBodyOffPeakWindowOptionsFormGroup() {
		return new FormGroup<CreateDomainPostBodyOffPeakWindowOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDomainPostBodySoftwareUpdateOptions {
		AutoSoftwareUpdateEnabled?: boolean | null;
	}
	export interface CreateDomainPostBodySoftwareUpdateOptionsFormProperties {
		AutoSoftwareUpdateEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDomainPostBodySoftwareUpdateOptionsFormGroup() {
		return new FormGroup<CreateDomainPostBodySoftwareUpdateOptionsFormProperties>({
			AutoSoftwareUpdateEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateOutboundConnectionPostBody {

		/**
		 * Container for information about an OpenSearch Service domain.
		 * Required
		 */
		LocalDomainInfo: CreateOutboundConnectionPostBodyLocalDomainInfo;

		/**
		 * Container for information about an OpenSearch Service domain.
		 * Required
		 */
		RemoteDomainInfo: CreateOutboundConnectionPostBodyRemoteDomainInfo;

		/**
		 * Name of the connection.
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		ConnectionAlias: string;

		/** <p>The connection mode for the cross-cluster connection.</p> <ul> <li> <p> <b>DIRECT</b> - Used for cross-cluster search or cross-cluster replication.</p> </li> <li> <p> <b>VPC_ENDPOINT</b> - Used for remote reindex between Amazon OpenSearch Service VPC domains.</p> </li> </ul> */
		ConnectionMode?: ConnectionMode | null;

		/** The connection properties of an outbound connection. */
		ConnectionProperties?: CreateOutboundConnectionPostBodyConnectionProperties;
	}
	export interface CreateOutboundConnectionPostBodyFormProperties {

		/**
		 * Name of the connection.
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		ConnectionAlias: FormControl<string | null | undefined>,

		/** <p>The connection mode for the cross-cluster connection.</p> <ul> <li> <p> <b>DIRECT</b> - Used for cross-cluster search or cross-cluster replication.</p> </li> <li> <p> <b>VPC_ENDPOINT</b> - Used for remote reindex between Amazon OpenSearch Service VPC domains.</p> </li> </ul> */
		ConnectionMode: FormControl<ConnectionMode | null | undefined>,
	}
	export function CreateCreateOutboundConnectionPostBodyFormGroup() {
		return new FormGroup<CreateOutboundConnectionPostBodyFormProperties>({
			ConnectionAlias: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100), Validators.pattern('[a-zA-Z][a-zA-Z0-9\-\_]+')]),
			ConnectionMode: new FormControl<ConnectionMode | null | undefined>(undefined),
		});

	}

	export interface CreateOutboundConnectionPostBodyLocalDomainInfo {
		AWSDomainInformation?: AWSDomainInformation;
	}
	export interface CreateOutboundConnectionPostBodyLocalDomainInfoFormProperties {
	}
	export function CreateCreateOutboundConnectionPostBodyLocalDomainInfoFormGroup() {
		return new FormGroup<CreateOutboundConnectionPostBodyLocalDomainInfoFormProperties>({
		});

	}

	export interface CreateOutboundConnectionPostBodyRemoteDomainInfo {
		AWSDomainInformation?: AWSDomainInformation;
	}
	export interface CreateOutboundConnectionPostBodyRemoteDomainInfoFormProperties {
	}
	export function CreateCreateOutboundConnectionPostBodyRemoteDomainInfoFormGroup() {
		return new FormGroup<CreateOutboundConnectionPostBodyRemoteDomainInfoFormProperties>({
		});

	}

	export interface CreateOutboundConnectionPostBodyConnectionProperties {
		Endpoint?: string;
		CrossClusterSearch?: CrossClusterSearchConnectionProperties;
	}
	export interface CreateOutboundConnectionPostBodyConnectionPropertiesFormProperties {
		Endpoint: FormControl<string | null | undefined>,
	}
	export function CreateCreateOutboundConnectionPostBodyConnectionPropertiesFormGroup() {
		return new FormGroup<CreateOutboundConnectionPostBodyConnectionPropertiesFormProperties>({
			Endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePackagePostBody {

		/**
		 * Unique name for the package.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		PackageName: string;

		/**
		 * The type of package.
		 * Required
		 */
		PackageType: PackageType;

		/**
		 * Description of the package.
		 * Max length: 1024
		 */
		PackageDescription?: string | null;

		/**
		 * The Amazon S3 location to import the package from.
		 * Required
		 */
		PackageSource: CreatePackagePostBodyPackageSource;
	}
	export interface CreatePackagePostBodyFormProperties {

		/**
		 * Unique name for the package.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		PackageName: FormControl<string | null | undefined>,

		/**
		 * The type of package.
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
		 * The Amazon Resource Name (ARN) of the domain to create the endpoint for.
		 * Required
		 * Min length: 1
		 * Max length: 512
		 */
		DomainArn: string;

		/**
		 * Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching your Amazon OpenSearch Service domains using a VPC</a>.
		 * Required
		 */
		VpcOptions: CreateVpcEndpointPostBodyVpcOptions;

		/**
		 * Unique, case-sensitive identifier to ensure idempotency of the request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientToken?: string | null;
	}
	export interface CreateVpcEndpointPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the domain to create the endpoint for.
		 * Required
		 * Min length: 1
		 * Max length: 512
		 */
		DomainArn: FormControl<string | null | undefined>,

		/**
		 * Unique, case-sensitive identifier to ensure idempotency of the request.
		 * Min length: 1
		 * Max length: 64
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

	export interface UpdateDomainConfigPostBody {

		/** Container for the cluster configuration of an OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html">Creating and managing Amazon OpenSearch Service domains</a>. */
		ClusterConfig?: UpdateDomainConfigPostBodyClusterConfig;

		/** Container for the parameters required to enable EBS-based storage for an OpenSearch Service domain. */
		EBSOptions?: UpdateDomainConfigPostBodyEBSOptions;

		/** The time, in UTC format, when OpenSearch Service takes a daily automated snapshot of the specified domain. Default is <code>0</code> hours. */
		SnapshotOptions?: UpdateDomainConfigPostBodySnapshotOptions;

		/** Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching your Amazon OpenSearch Service domains using a VPC</a>. */
		VPCOptions?: UpdateDomainConfigPostBodyVPCOptions;

		/** Container for the parameters required to enable Cognito authentication for an OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html">Configuring Amazon Cognito authentication for OpenSearch Dashboards</a>. */
		CognitoOptions?: UpdateDomainConfigPostBodyCognitoOptions;

		/** <p>Exposes native OpenSearch configuration values from <code>opensearch.yml</code>. The following advanced options are available: </p> <ul> <li> <p>Allows references to indexes in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. Default is <code>true</code>.</p> </li> <li> <p>Specifies the percentage of heap space allocated to field data. Default is unbounded.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced cluster parameters</a>.</p> */
		AdvancedOptions?: {[id: string]: string };

		/**
		 * Access policy rules for an Amazon OpenSearch Service domain endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-access-policies">Configuring access policies</a>. The maximum size of a policy document is 100 KB.
		 * Min length: 0
		 * Max length: 102400
		 */
		AccessPolicies?: string | null;

		/** Options to publish OpenSearch logs to Amazon CloudWatch Logs. */
		LogPublishingOptions?: {[id: string]: LogPublishingOption };

		/** Specifies whether the domain should encrypt data at rest, and if so, the Key Management Service (KMS) key to use. Can be used only to create a new domain, not update an existing one. */
		EncryptionAtRestOptions?: UpdateDomainConfigPostBodyEncryptionAtRestOptions;

		/** Options to configure a custom endpoint for an OpenSearch Service domain. */
		DomainEndpointOptions?: UpdateDomainConfigPostBodyDomainEndpointOptions;

		/** Enables or disables node-to-node encryption. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ntn.html">Node-to-node encryption for Amazon OpenSearch Service</a>. */
		NodeToNodeEncryptionOptions?: UpdateDomainConfigPostBodyNodeToNodeEncryptionOptions;

		/** Options for enabling and configuring fine-grained access control. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html">Fine-grained access control in Amazon OpenSearch Service</a>. */
		AdvancedSecurityOptions?: UpdateDomainConfigPostBodyAdvancedSecurityOptions;

		/** Auto-Tune settings when updating a domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch Service</a>. */
		AutoTuneOptions?: UpdateDomainConfigPostBodyAutoTuneOptions;

		/** This flag, when set to True, specifies whether the <code>UpdateDomain</code> request should return the results of a dry run analysis without actually applying the change. A dry run determines what type of deployment the update will cause. */
		DryRun?: boolean | null;

		/** <p>The type of dry run to perform.</p> <ul> <li> <p> <code>Basic</code> only returns the type of deployment (blue/green or dynamic) that the update will cause.</p> </li> <li> <p> <code>Verbose</code> runs an additional check to validate the changes you're making. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-configuration-changes#validation-check">Validating a domain update</a>.</p> </li> </ul> */
		DryRunMode?: DryRunMode | null;

		/** Options for a domain's <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html">off-peak window</a>, during which OpenSearch Service can perform mandatory configuration changes on the domain. */
		OffPeakWindowOptions?: UpdateDomainConfigPostBodyOffPeakWindowOptions;

		/** Options for configuring service software updates for a domain. */
		SoftwareUpdateOptions?: UpdateDomainConfigPostBodySoftwareUpdateOptions;
	}
	export interface UpdateDomainConfigPostBodyFormProperties {

		/** <p>Exposes native OpenSearch configuration values from <code>opensearch.yml</code>. The following advanced options are available: </p> <ul> <li> <p>Allows references to indexes in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. Default is <code>true</code>.</p> </li> <li> <p>Specifies the percentage of heap space allocated to field data. Default is unbounded.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced cluster parameters</a>.</p> */
		AdvancedOptions: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Access policy rules for an Amazon OpenSearch Service domain endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-access-policies">Configuring access policies</a>. The maximum size of a policy document is 100 KB.
		 * Min length: 0
		 * Max length: 102400
		 */
		AccessPolicies: FormControl<string | null | undefined>,

		/** Options to publish OpenSearch logs to Amazon CloudWatch Logs. */
		LogPublishingOptions: FormControl<{[id: string]: LogPublishingOption } | null | undefined>,

		/** This flag, when set to True, specifies whether the <code>UpdateDomain</code> request should return the results of a dry run analysis without actually applying the change. A dry run determines what type of deployment the update will cause. */
		DryRun: FormControl<boolean | null | undefined>,

		/** <p>The type of dry run to perform.</p> <ul> <li> <p> <code>Basic</code> only returns the type of deployment (blue/green or dynamic) that the update will cause.</p> </li> <li> <p> <code>Verbose</code> runs an additional check to validate the changes you're making. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-configuration-changes#validation-check">Validating a domain update</a>.</p> </li> </ul> */
		DryRunMode: FormControl<DryRunMode | null | undefined>,
	}
	export function CreateUpdateDomainConfigPostBodyFormGroup() {
		return new FormGroup<UpdateDomainConfigPostBodyFormProperties>({
			AdvancedOptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			AccessPolicies: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(102400), Validators.pattern('.*')]),
			LogPublishingOptions: new FormControl<{[id: string]: LogPublishingOption } | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
			DryRunMode: new FormControl<DryRunMode | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigPostBodyClusterConfig {
		InstanceType?: OpenSearchPartitionInstanceType;
		InstanceCount?: number | null;
		DedicatedMasterEnabled?: boolean | null;
		ZoneAwarenessEnabled?: boolean | null;
		ZoneAwarenessConfig?: ZoneAwarenessConfig;
		DedicatedMasterType?: OpenSearchPartitionInstanceType;
		DedicatedMasterCount?: number | null;
		WarmEnabled?: boolean | null;
		WarmType?: OpenSearchWarmPartitionInstanceType;
		WarmCount?: number | null;
		ColdStorageOptions?: ColdStorageOptions;
		MultiAZWithStandbyEnabled?: boolean | null;
	}
	export interface UpdateDomainConfigPostBodyClusterConfigFormProperties {
		InstanceType: FormControl<OpenSearchPartitionInstanceType | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		DedicatedMasterEnabled: FormControl<boolean | null | undefined>,
		ZoneAwarenessEnabled: FormControl<boolean | null | undefined>,
		DedicatedMasterType: FormControl<OpenSearchPartitionInstanceType | null | undefined>,
		DedicatedMasterCount: FormControl<number | null | undefined>,
		WarmEnabled: FormControl<boolean | null | undefined>,
		WarmType: FormControl<OpenSearchWarmPartitionInstanceType | null | undefined>,
		WarmCount: FormControl<number | null | undefined>,
		MultiAZWithStandbyEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainConfigPostBodyClusterConfigFormGroup() {
		return new FormGroup<UpdateDomainConfigPostBodyClusterConfigFormProperties>({
			InstanceType: new FormControl<OpenSearchPartitionInstanceType | null | undefined>(undefined),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			DedicatedMasterEnabled: new FormControl<boolean | null | undefined>(undefined),
			ZoneAwarenessEnabled: new FormControl<boolean | null | undefined>(undefined),
			DedicatedMasterType: new FormControl<OpenSearchPartitionInstanceType | null | undefined>(undefined),
			DedicatedMasterCount: new FormControl<number | null | undefined>(undefined),
			WarmEnabled: new FormControl<boolean | null | undefined>(undefined),
			WarmType: new FormControl<OpenSearchWarmPartitionInstanceType | null | undefined>(undefined),
			WarmCount: new FormControl<number | null | undefined>(undefined),
			MultiAZWithStandbyEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigPostBodyEBSOptions {
		EBSEnabled?: boolean | null;
		VolumeType?: VolumeType;
		VolumeSize?: number | null;
		Iops?: number | null;
		Throughput?: number | null;
	}
	export interface UpdateDomainConfigPostBodyEBSOptionsFormProperties {
		EBSEnabled: FormControl<boolean | null | undefined>,
		VolumeType: FormControl<VolumeType | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		Throughput: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDomainConfigPostBodyEBSOptionsFormGroup() {
		return new FormGroup<UpdateDomainConfigPostBodyEBSOptionsFormProperties>({
			EBSEnabled: new FormControl<boolean | null | undefined>(undefined),
			VolumeType: new FormControl<VolumeType | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			Throughput: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigPostBodySnapshotOptions {
		AutomatedSnapshotStartHour?: number | null;
	}
	export interface UpdateDomainConfigPostBodySnapshotOptionsFormProperties {
		AutomatedSnapshotStartHour: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDomainConfigPostBodySnapshotOptionsFormGroup() {
		return new FormGroup<UpdateDomainConfigPostBodySnapshotOptionsFormProperties>({
			AutomatedSnapshotStartHour: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigPostBodyVPCOptions {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}
	export interface UpdateDomainConfigPostBodyVPCOptionsFormProperties {
	}
	export function CreateUpdateDomainConfigPostBodyVPCOptionsFormGroup() {
		return new FormGroup<UpdateDomainConfigPostBodyVPCOptionsFormProperties>({
		});

	}

	export interface UpdateDomainConfigPostBodyCognitoOptions {
		Enabled?: boolean | null;
		UserPoolId?: string;
		IdentityPoolId?: string;
		RoleArn?: string;
	}
	export interface UpdateDomainConfigPostBodyCognitoOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
		IdentityPoolId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainConfigPostBodyCognitoOptionsFormGroup() {
		return new FormGroup<UpdateDomainConfigPostBodyCognitoOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigPostBodyEncryptionAtRestOptions {
		Enabled?: boolean | null;
		KmsKeyId?: string;
	}
	export interface UpdateDomainConfigPostBodyEncryptionAtRestOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainConfigPostBodyEncryptionAtRestOptionsFormGroup() {
		return new FormGroup<UpdateDomainConfigPostBodyEncryptionAtRestOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigPostBodyDomainEndpointOptions {
		EnforceHTTPS?: boolean | null;
		TLSSecurityPolicy?: TLSSecurityPolicy;
		CustomEndpointEnabled?: boolean | null;
		CustomEndpoint?: string;
		CustomEndpointCertificateArn?: string;
	}
	export interface UpdateDomainConfigPostBodyDomainEndpointOptionsFormProperties {
		EnforceHTTPS: FormControl<boolean | null | undefined>,
		TLSSecurityPolicy: FormControl<TLSSecurityPolicy | null | undefined>,
		CustomEndpointEnabled: FormControl<boolean | null | undefined>,
		CustomEndpoint: FormControl<string | null | undefined>,
		CustomEndpointCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainConfigPostBodyDomainEndpointOptionsFormGroup() {
		return new FormGroup<UpdateDomainConfigPostBodyDomainEndpointOptionsFormProperties>({
			EnforceHTTPS: new FormControl<boolean | null | undefined>(undefined),
			TLSSecurityPolicy: new FormControl<TLSSecurityPolicy | null | undefined>(undefined),
			CustomEndpointEnabled: new FormControl<boolean | null | undefined>(undefined),
			CustomEndpoint: new FormControl<string | null | undefined>(undefined),
			CustomEndpointCertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigPostBodyNodeToNodeEncryptionOptions {
		Enabled?: boolean | null;
	}
	export interface UpdateDomainConfigPostBodyNodeToNodeEncryptionOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainConfigPostBodyNodeToNodeEncryptionOptionsFormGroup() {
		return new FormGroup<UpdateDomainConfigPostBodyNodeToNodeEncryptionOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigPostBodyAdvancedSecurityOptions {
		Enabled?: boolean | null;
		InternalUserDatabaseEnabled?: boolean | null;
		MasterUserOptions?: MasterUserOptions;
		SAMLOptions?: SAMLOptionsInput;
		AnonymousAuthEnabled?: boolean | null;
	}
	export interface UpdateDomainConfigPostBodyAdvancedSecurityOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		InternalUserDatabaseEnabled: FormControl<boolean | null | undefined>,
		AnonymousAuthEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainConfigPostBodyAdvancedSecurityOptionsFormGroup() {
		return new FormGroup<UpdateDomainConfigPostBodyAdvancedSecurityOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			InternalUserDatabaseEnabled: new FormControl<boolean | null | undefined>(undefined),
			AnonymousAuthEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigPostBodyAutoTuneOptions {
		DesiredState?: AutoTuneDesiredState;
		RollbackOnDisable?: RollbackOnDisable;
		MaintenanceSchedules?: Array<AutoTuneMaintenanceSchedule>;
		UseOffPeakWindow?: boolean | null;
	}
	export interface UpdateDomainConfigPostBodyAutoTuneOptionsFormProperties {
		DesiredState: FormControl<AutoTuneDesiredState | null | undefined>,
		RollbackOnDisable: FormControl<RollbackOnDisable | null | undefined>,
		UseOffPeakWindow: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainConfigPostBodyAutoTuneOptionsFormGroup() {
		return new FormGroup<UpdateDomainConfigPostBodyAutoTuneOptionsFormProperties>({
			DesiredState: new FormControl<AutoTuneDesiredState | null | undefined>(undefined),
			RollbackOnDisable: new FormControl<RollbackOnDisable | null | undefined>(undefined),
			UseOffPeakWindow: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigPostBodyOffPeakWindowOptions {
		Enabled?: boolean | null;
		OffPeakWindow?: OffPeakWindow;
	}
	export interface UpdateDomainConfigPostBodyOffPeakWindowOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainConfigPostBodyOffPeakWindowOptionsFormGroup() {
		return new FormGroup<UpdateDomainConfigPostBodyOffPeakWindowOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigPostBodySoftwareUpdateOptions {
		AutoSoftwareUpdateEnabled?: boolean | null;
	}
	export interface UpdateDomainConfigPostBodySoftwareUpdateOptionsFormProperties {
		AutoSoftwareUpdateEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainConfigPostBodySoftwareUpdateOptionsFormGroup() {
		return new FormGroup<UpdateDomainConfigPostBodySoftwareUpdateOptionsFormProperties>({
			AutoSoftwareUpdateEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeDomainsPostBody {

		/**
		 * A list of OpenSearch Service domain names.
		 * Required
		 */
		DomainNames: Array<string>;
	}
	export interface DescribeDomainsPostBodyFormProperties {
	}
	export function CreateDescribeDomainsPostBodyFormGroup() {
		return new FormGroup<DescribeDomainsPostBodyFormProperties>({
		});

	}

	export interface DescribeInboundConnectionsPostBody {

		/** A list of filters used to match properties for inbound cross-cluster connections. */
		Filters?: Array<Filter>;

		/**
		 * An optional parameter that specifies the maximum number of results to return for a given request.
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** When <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. */
		NextToken?: string | null;
	}
	export interface DescribeInboundConnectionsPostBodyFormProperties {

		/**
		 * An optional parameter that specifies the maximum number of results to return for a given request.
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** When <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInboundConnectionsPostBodyFormGroup() {
		return new FormGroup<DescribeInboundConnectionsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeOutboundConnectionsPostBody {

		/** List of filter names and values that you can use for requests. */
		Filters?: Array<Filter>;

		/**
		 * An optional parameter that specifies the maximum number of results to return for a given request.
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** When <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. */
		NextToken?: string | null;
	}
	export interface DescribeOutboundConnectionsPostBodyFormProperties {

		/**
		 * An optional parameter that specifies the maximum number of results to return for a given request.
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** When <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOutboundConnectionsPostBodyFormGroup() {
		return new FormGroup<DescribeOutboundConnectionsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePackagesPostBody {

		/** A list of <code>DescribePackagesFilter</code> to filter the packages included in a <code>DescribePackages</code> response. */
		Filters?: Array<DescribePackagesFilter>;

		/**
		 * An optional parameter that specifies the maximum number of results to return for a given request.
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** When <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. */
		NextToken?: string | null;
	}
	export interface DescribePackagesPostBodyFormProperties {

		/**
		 * An optional parameter that specifies the maximum number of results to return for a given request.
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** When <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. */
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

	export interface PurchaseReservedInstanceOfferingPostBody {

		/**
		 * The ID of the Reserved Instance offering to purchase.
		 * Required
		 * Min length: 36
		 * Max length: 36
		 */
		ReservedInstanceOfferingId: string;

		/**
		 * A customer-specified identifier to track this reservation.
		 * Required
		 * Min length: 5
		 * Max length: 64
		 */
		ReservationName: string;

		/**
		 * Number of instances in an OpenSearch Service cluster.
		 * Minimum: 1
		 */
		InstanceCount?: number | null;
	}
	export interface PurchaseReservedInstanceOfferingPostBodyFormProperties {

		/**
		 * The ID of the Reserved Instance offering to purchase.
		 * Required
		 * Min length: 36
		 * Max length: 36
		 */
		ReservedInstanceOfferingId: FormControl<string | null | undefined>,

		/**
		 * A customer-specified identifier to track this reservation.
		 * Required
		 * Min length: 5
		 * Max length: 64
		 */
		ReservationName: FormControl<string | null | undefined>,

		/**
		 * Number of instances in an OpenSearch Service cluster.
		 * Minimum: 1
		 */
		InstanceCount: FormControl<number | null | undefined>,
	}
	export function CreatePurchaseReservedInstanceOfferingPostBodyFormGroup() {
		return new FormGroup<PurchaseReservedInstanceOfferingPostBodyFormProperties>({
			ReservedInstanceOfferingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('\p{XDigit}{8}-\p{XDigit}{4}-\p{XDigit}{4}-\p{XDigit}{4}-\p{XDigit}{12}')]),
			ReservationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(64), Validators.pattern('.*')]),
			InstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface RemoveTagsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the domain. See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html">Identifiers for IAM Entities </a> in <i>Using AWS Identity and Access Management</i> for more information.
		 * Required
		 * Min length: 20
		 * Max length: 2048
		 */
		ARN: string;

		/**
		 * The list of tag keys to remove from the domain.
		 * Required
		 */
		TagKeys: Array<string>;
	}
	export interface RemoveTagsPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the domain. See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html">Identifiers for IAM Entities </a> in <i>Using AWS Identity and Access Management</i> for more information.
		 * Required
		 * Min length: 20
		 * Max length: 2048
		 */
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsPostBodyFormGroup() {
		return new FormGroup<RemoveTagsPostBodyFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('.*')]),
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

	export interface StartServiceSoftwareUpdatePostBody {

		/**
		 * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/** <p>When to start the service software update.</p> <ul> <li> <p> <code>NOW</code> - Immediately schedules the update to happen in the current hour if there's capacity available.</p> </li> <li> <p> <code>TIMESTAMP</code> - Lets you specify a custom date and time to apply the update. If you specify this value, you must also provide a value for <code>DesiredStartTime</code>.</p> </li> <li> <p> <code>OFF_PEAK_WINDOW</code> - Marks the update to be picked up during an upcoming off-peak window. There's no guarantee that the update will happen during the next immediate window. Depending on capacity, it might happen in subsequent days.</p> </li> </ul> <p>Default: <code>NOW</code> if you don't specify a value for <code>DesiredStartTime</code>, and <code>TIMESTAMP</code> if you do.</p> */
		ScheduleAt?: ScheduleAt | null;

		/**
		 * The Epoch timestamp when you want the service software update to start. You only need to specify this parameter if you set <code>ScheduleAt</code> to <code>TIMESTAMP</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DesiredStartTime?: number | null;
	}
	export interface StartServiceSoftwareUpdatePostBodyFormProperties {

		/**
		 * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/** <p>When to start the service software update.</p> <ul> <li> <p> <code>NOW</code> - Immediately schedules the update to happen in the current hour if there's capacity available.</p> </li> <li> <p> <code>TIMESTAMP</code> - Lets you specify a custom date and time to apply the update. If you specify this value, you must also provide a value for <code>DesiredStartTime</code>.</p> </li> <li> <p> <code>OFF_PEAK_WINDOW</code> - Marks the update to be picked up during an upcoming off-peak window. There's no guarantee that the update will happen during the next immediate window. Depending on capacity, it might happen in subsequent days.</p> </li> </ul> <p>Default: <code>NOW</code> if you don't specify a value for <code>DesiredStartTime</code>, and <code>TIMESTAMP</code> if you do.</p> */
		ScheduleAt: FormControl<ScheduleAt | null | undefined>,

		/**
		 * The Epoch timestamp when you want the service software update to start. You only need to specify this parameter if you set <code>ScheduleAt</code> to <code>TIMESTAMP</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DesiredStartTime: FormControl<number | null | undefined>,
	}
	export function CreateStartServiceSoftwareUpdatePostBodyFormGroup() {
		return new FormGroup<StartServiceSoftwareUpdatePostBodyFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			ScheduleAt: new FormControl<ScheduleAt | null | undefined>(undefined),
			DesiredStartTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdatePackagePostBody {

		/**
		 * The unique identifier for the package.
		 * Required
		 */
		PackageID: string;

		/**
		 * The Amazon S3 location to import the package from.
		 * Required
		 */
		PackageSource: UpdatePackagePostBodyPackageSource;

		/**
		 * A new description of the package.
		 * Max length: 1024
		 */
		PackageDescription?: string | null;

		/**
		 * Commit message for the updated file, which is shown as part of <code>GetPackageVersionHistoryResponse</code>.
		 * Max length: 160
		 */
		CommitMessage?: string | null;
	}
	export interface UpdatePackagePostBodyFormProperties {

		/**
		 * The unique identifier for the package.
		 * Required
		 */
		PackageID: FormControl<string | null | undefined>,

		/**
		 * A new description of the package.
		 * Max length: 1024
		 */
		PackageDescription: FormControl<string | null | undefined>,

		/**
		 * Commit message for the updated file, which is shown as part of <code>GetPackageVersionHistoryResponse</code>.
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

	export interface UpdateScheduledActionPutBody {

		/**
		 * The unique identifier of the action to reschedule. To retrieve this ID, send a <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListScheduledActions.html">ListScheduledActions</a> request.
		 * Required
		 */
		ActionID: string;

		/**
		 * The type of action to reschedule. Can be one of <code>SERVICE_SOFTWARE_UPDATE</code>, <code>JVM_HEAP_SIZE_TUNING</code>, or <code>JVM_YOUNG_GEN_TUNING</code>. To retrieve this value, send a <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListScheduledActions.html">ListScheduledActions</a> request.
		 * Required
		 */
		ActionType: ActionType;

		/**
		 * <p>When to schedule the action.</p> <ul> <li> <p> <code>NOW</code> - Immediately schedules the update to happen in the current hour if there's capacity available.</p> </li> <li> <p> <code>TIMESTAMP</code> - Lets you specify a custom date and time to apply the update. If you specify this value, you must also provide a value for <code>DesiredStartTime</code>.</p> </li> <li> <p> <code>OFF_PEAK_WINDOW</code> - Marks the action to be picked up during an upcoming off-peak window. There's no guarantee that the change will be implemented during the next immediate window. Depending on capacity, it might happen in subsequent days.</p> </li> </ul>
		 * Required
		 */
		ScheduleAt: ScheduleAt;

		/**
		 * The time to implement the change, in Coordinated Universal Time (UTC). Only specify this parameter if you set <code>ScheduleAt</code> to <code>TIMESTAMP</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DesiredStartTime?: number | null;
	}
	export interface UpdateScheduledActionPutBodyFormProperties {

		/**
		 * The unique identifier of the action to reschedule. To retrieve this ID, send a <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListScheduledActions.html">ListScheduledActions</a> request.
		 * Required
		 */
		ActionID: FormControl<string | null | undefined>,

		/**
		 * The type of action to reschedule. Can be one of <code>SERVICE_SOFTWARE_UPDATE</code>, <code>JVM_HEAP_SIZE_TUNING</code>, or <code>JVM_YOUNG_GEN_TUNING</code>. To retrieve this value, send a <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListScheduledActions.html">ListScheduledActions</a> request.
		 * Required
		 */
		ActionType: FormControl<ActionType | null | undefined>,

		/**
		 * <p>When to schedule the action.</p> <ul> <li> <p> <code>NOW</code> - Immediately schedules the update to happen in the current hour if there's capacity available.</p> </li> <li> <p> <code>TIMESTAMP</code> - Lets you specify a custom date and time to apply the update. If you specify this value, you must also provide a value for <code>DesiredStartTime</code>.</p> </li> <li> <p> <code>OFF_PEAK_WINDOW</code> - Marks the action to be picked up during an upcoming off-peak window. There's no guarantee that the change will be implemented during the next immediate window. Depending on capacity, it might happen in subsequent days.</p> </li> </ul>
		 * Required
		 */
		ScheduleAt: FormControl<ScheduleAt | null | undefined>,

		/**
		 * The time to implement the change, in Coordinated Universal Time (UTC). Only specify this parameter if you set <code>ScheduleAt</code> to <code>TIMESTAMP</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DesiredStartTime: FormControl<number | null | undefined>,
	}
	export function CreateUpdateScheduledActionPutBodyFormGroup() {
		return new FormGroup<UpdateScheduledActionPutBodyFormProperties>({
			ActionID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ActionType: new FormControl<ActionType | null | undefined>(undefined, [Validators.required]),
			ScheduleAt: new FormControl<ScheduleAt | null | undefined>(undefined, [Validators.required]),
			DesiredStartTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateVpcEndpointPostBody {

		/**
		 * The unique identifier of the endpoint.
		 * Required
		 * Min length: 5
		 * Max length: 256
		 */
		VpcEndpointId: string;

		/**
		 * Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching your Amazon OpenSearch Service domains using a VPC</a>.
		 * Required
		 */
		VpcOptions: UpdateVpcEndpointPostBodyVpcOptions;
	}
	export interface UpdateVpcEndpointPostBodyFormProperties {

		/**
		 * The unique identifier of the endpoint.
		 * Required
		 * Min length: 5
		 * Max length: 256
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

	export interface UpgradeDomainPostBody {

		/**
		 * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: string;

		/**
		 * OpenSearch or Elasticsearch version to which you want to upgrade, in the format Opensearch_X.Y or Elasticsearch_X.Y.
		 * Required
		 * Min length: 14
		 * Max length: 18
		 */
		TargetVersion: string;

		/** When true, indicates that an upgrade eligibility check needs to be performed. Does not actually perform the upgrade. */
		PerformCheckOnly?: boolean | null;

		/** <p>Exposes native OpenSearch configuration values from <code>opensearch.yml</code>. The following advanced options are available: </p> <ul> <li> <p>Allows references to indexes in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. Default is <code>true</code>.</p> </li> <li> <p>Specifies the percentage of heap space allocated to field data. Default is unbounded.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced cluster parameters</a>.</p> */
		AdvancedOptions?: {[id: string]: string };
	}
	export interface UpgradeDomainPostBodyFormProperties {

		/**
		 * The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
		 * Required
		 * Min length: 3
		 * Max length: 28
		 */
		DomainName: FormControl<string | null | undefined>,

		/**
		 * OpenSearch or Elasticsearch version to which you want to upgrade, in the format Opensearch_X.Y or Elasticsearch_X.Y.
		 * Required
		 * Min length: 14
		 * Max length: 18
		 */
		TargetVersion: FormControl<string | null | undefined>,

		/** When true, indicates that an upgrade eligibility check needs to be performed. Does not actually perform the upgrade. */
		PerformCheckOnly: FormControl<boolean | null | undefined>,

		/** <p>Exposes native OpenSearch configuration values from <code>opensearch.yml</code>. The following advanced options are available: </p> <ul> <li> <p>Allows references to indexes in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. Default is <code>true</code>.</p> </li> <li> <p>Specifies the percentage of heap space allocated to field data. Default is unbounded.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced cluster parameters</a>.</p> */
		AdvancedOptions: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpgradeDomainPostBodyFormGroup() {
		return new FormGroup<UpgradeDomainPostBodyFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			TargetVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(14), Validators.maxLength(18), Validators.pattern('^Elasticsearch_[0-9]{1}\.[0-9]{1,2}$|^OpenSearch_[0-9]{1,2}\.[0-9]{1,2}$')]),
			PerformCheckOnly: new FormControl<boolean | null | undefined>(undefined),
			AdvancedOptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

}

