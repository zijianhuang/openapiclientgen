import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The result of a <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation. Contains details of accepted inbound connection. */
	export interface AcceptInboundCrossClusterSearchConnectionResponse {

		/** Specifies details of an inbound connection. */
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
		CrossClusterSearchConnectionId?: string | null;

		/** Specifies the coonection status of an inbound cross-cluster search connection. */
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
		StatusCode?: InboundCrossClusterSearchConnectionStatusStatusCode | null;
		Message?: string | null;
	}

	/** Specifies the coonection status of an inbound cross-cluster search connection. */
	export interface InboundCrossClusterSearchConnectionStatusFormProperties {
		StatusCode: FormControl<InboundCrossClusterSearchConnectionStatusStatusCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInboundCrossClusterSearchConnectionStatusFormGroup() {
		return new FormGroup<InboundCrossClusterSearchConnectionStatusFormProperties>({
			StatusCode: new FormControl<InboundCrossClusterSearchConnectionStatusStatusCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InboundCrossClusterSearchConnectionStatusStatusCode { PENDING_ACCEPTANCE = 0, APPROVED = 1, REJECTING = 2, REJECTED = 3, DELETING = 4, DELETED = 5 }

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

	/** Specifies a key value pair for a resource tag. */
	export interface TagFormProperties {

		/**
		 * A string of length from 1 to 128 characters that specifies the key for a Tag. Tag keys must be unique for the Elasticsearch domain to which they are attached.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * A string of length from 0 to 256 characters that specifies the value for a Tag. Tag values can be null and do not have to be unique in a tag set.
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
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

		/** Information on a package that is associated with a domain. */
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
		PackageID?: string | null;

		/**
		 * Max length: 28
		 * Min length: 3
		 */
		PackageName?: string | null;
		PackageType?: DomainPackageDetailsPackageType | null;
		LastUpdated?: Date | null;

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName?: string | null;
		DomainPackageStatus?: DomainPackageDetailsDomainPackageStatus | null;
		ReferencePath?: string | null;
		ErrorDetails?: ErrorDetails;
	}

	/** Information on a package that is associated with a domain. */
	export interface DomainPackageDetailsFormProperties {
		PackageID: FormControl<string | null | undefined>,

		/**
		 * Max length: 28
		 * Min length: 3
		 */
		PackageName: FormControl<string | null | undefined>,
		PackageType: FormControl<DomainPackageDetailsPackageType | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: FormControl<string | null | undefined>,
		DomainPackageStatus: FormControl<DomainPackageDetailsDomainPackageStatus | null | undefined>,
		ReferencePath: FormControl<string | null | undefined>,
	}
	export function CreateDomainPackageDetailsFormGroup() {
		return new FormGroup<DomainPackageDetailsFormProperties>({
			PackageID: new FormControl<string | null | undefined>(undefined),
			PackageName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			PackageType: new FormControl<DomainPackageDetailsPackageType | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			DomainPackageStatus: new FormControl<DomainPackageDetailsDomainPackageStatus | null | undefined>(undefined),
			ReferencePath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DomainPackageDetailsPackageType { 'TXT-DICTIONARY' = 0 }

	export enum DomainPackageDetailsDomainPackageStatus { ASSOCIATING = 0, ASSOCIATION_FAILED = 1, ACTIVE = 2, DISSOCIATING = 3, DISSOCIATION_FAILED = 4 }

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


	/** The result of a <code>CancelElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update. */
	export interface CancelElasticsearchServiceSoftwareUpdateResponse {

		/** The current options of an Elasticsearch domain service software options. */
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
		CurrentVersion?: string | null;
		NewVersion?: string | null;
		UpdateAvailable?: boolean | null;
		Cancellable?: boolean | null;
		UpdateStatus?: ServiceSoftwareOptionsUpdateStatus | null;
		Description?: string | null;
		AutomatedUpdateDate?: Date | null;
		OptionalDeployment?: boolean | null;
	}

	/** The current options of an Elasticsearch domain service software options. */
	export interface ServiceSoftwareOptionsFormProperties {
		CurrentVersion: FormControl<string | null | undefined>,
		NewVersion: FormControl<string | null | undefined>,
		UpdateAvailable: FormControl<boolean | null | undefined>,
		Cancellable: FormControl<boolean | null | undefined>,
		UpdateStatus: FormControl<ServiceSoftwareOptionsUpdateStatus | null | undefined>,
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
			UpdateStatus: new FormControl<ServiceSoftwareOptionsUpdateStatus | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			AutomatedUpdateDate: new FormControl<Date | null | undefined>(undefined),
			OptionalDeployment: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ServiceSoftwareOptionsUpdateStatus { PENDING_UPDATE = 0, IN_PROGRESS = 1, COMPLETED = 2, NOT_ELIGIBLE = 3, ELIGIBLE = 4 }


	/** The result of a <code>CreateElasticsearchDomain</code> operation. Contains the status of the newly created Elasticsearch domain. */
	export interface CreateElasticsearchDomainResponse {

		/** The current status of an Elasticsearch domain. */
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
		Endpoints?: EndpointsMap;
		Processing?: boolean | null;
		UpgradeProcessing?: boolean | null;
		ElasticsearchVersion?: string | null;

		/**
		 * Specifies the configuration for the domain cluster, such as the type and number of instances.
		 * Required
		 */
		ElasticsearchClusterConfig: ElasticsearchClusterConfig;

		/** Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
		EBSOptions?: EBSOptions;

		/** Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies?: string | null;

		/** Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
		SnapshotOptions?: SnapshotOptions;

		/** Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
		VPCOptions?: VPCDerivedInfo;

		/** Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
		CognitoOptions?: CognitoOptions;

		/** Specifies the Encryption At Rest Options. */
		EncryptionAtRestOptions?: EncryptionAtRestOptions;

		/** Specifies the node-to-node encryption options. */
		NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

		/** <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: AdvancedOptions;
		LogPublishingOptions?: LogPublishingOptions;

		/** The current options of an Elasticsearch domain service software options. */
		ServiceSoftwareOptions?: ServiceSoftwareOptions;

		/** Options to configure endpoint for the Elasticsearch domain. */
		DomainEndpointOptions?: DomainEndpointOptions;

		/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled. */
		AdvancedSecurityOptions?: AdvancedSecurityOptions;
	}

	/** The current status of an Elasticsearch domain. */
	export interface ElasticsearchDomainStatusFormProperties {

		/**
		 * Unique identifier for an Elasticsearch domain.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DomainId: FormControl<string | null | undefined>,

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
		 * Required
		 */
		ARN: FormControl<string | null | undefined>,
		Created: FormControl<boolean | null | undefined>,
		Deleted: FormControl<boolean | null | undefined>,

		/** The endpoint to which service requests are submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code>. */
		Endpoint: FormControl<string | null | undefined>,
		Processing: FormControl<boolean | null | undefined>,
		UpgradeProcessing: FormControl<boolean | null | undefined>,
		ElasticsearchVersion: FormControl<string | null | undefined>,

		/** Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies: FormControl<string | null | undefined>,
	}
	export function CreateElasticsearchDomainStatusFormGroup() {
		return new FormGroup<ElasticsearchDomainStatusFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Created: new FormControl<boolean | null | undefined>(undefined),
			Deleted: new FormControl<boolean | null | undefined>(undefined),
			Endpoint: new FormControl<string | null | undefined>(undefined),
			Processing: new FormControl<boolean | null | undefined>(undefined),
			UpgradeProcessing: new FormControl<boolean | null | undefined>(undefined),
			ElasticsearchVersion: new FormControl<string | null | undefined>(undefined),
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
		InstanceType?: ElasticsearchClusterConfigInstanceType | null;
		InstanceCount?: number | null;
		DedicatedMasterEnabled?: boolean | null;
		ZoneAwarenessEnabled?: boolean | null;

		/** Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones. */
		ZoneAwarenessConfig?: ZoneAwarenessConfig;
		DedicatedMasterType?: ElasticsearchClusterConfigInstanceType | null;
		DedicatedMasterCount?: number | null;
		WarmEnabled?: boolean | null;
		WarmType?: ElasticsearchClusterConfigWarmType | null;
		WarmCount?: number | null;
	}

	/** Specifies the configuration for the domain cluster, such as the type and number of instances. */
	export interface ElasticsearchClusterConfigFormProperties {
		InstanceType: FormControl<ElasticsearchClusterConfigInstanceType | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		DedicatedMasterEnabled: FormControl<boolean | null | undefined>,
		ZoneAwarenessEnabled: FormControl<boolean | null | undefined>,
		DedicatedMasterType: FormControl<ElasticsearchClusterConfigInstanceType | null | undefined>,
		DedicatedMasterCount: FormControl<number | null | undefined>,
		WarmEnabled: FormControl<boolean | null | undefined>,
		WarmType: FormControl<ElasticsearchClusterConfigWarmType | null | undefined>,
		WarmCount: FormControl<number | null | undefined>,
	}
	export function CreateElasticsearchClusterConfigFormGroup() {
		return new FormGroup<ElasticsearchClusterConfigFormProperties>({
			InstanceType: new FormControl<ElasticsearchClusterConfigInstanceType | null | undefined>(undefined),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			DedicatedMasterEnabled: new FormControl<boolean | null | undefined>(undefined),
			ZoneAwarenessEnabled: new FormControl<boolean | null | undefined>(undefined),
			DedicatedMasterType: new FormControl<ElasticsearchClusterConfigInstanceType | null | undefined>(undefined),
			DedicatedMasterCount: new FormControl<number | null | undefined>(undefined),
			WarmEnabled: new FormControl<boolean | null | undefined>(undefined),
			WarmType: new FormControl<ElasticsearchClusterConfigWarmType | null | undefined>(undefined),
			WarmCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ElasticsearchClusterConfigInstanceType { 'm3.medium.elasticsearch' = 0, 'm3.large.elasticsearch' = 1, 'm3.xlarge.elasticsearch' = 2, 'm3.2xlarge.elasticsearch' = 3, 'm4.large.elasticsearch' = 4, 'm4.xlarge.elasticsearch' = 5, 'm4.2xlarge.elasticsearch' = 6, 'm4.4xlarge.elasticsearch' = 7, 'm4.10xlarge.elasticsearch' = 8, 'm5.large.elasticsearch' = 9, 'm5.xlarge.elasticsearch' = 10, 'm5.2xlarge.elasticsearch' = 11, 'm5.4xlarge.elasticsearch' = 12, 'm5.12xlarge.elasticsearch' = 13, 'r5.large.elasticsearch' = 14, 'r5.xlarge.elasticsearch' = 15, 'r5.2xlarge.elasticsearch' = 16, 'r5.4xlarge.elasticsearch' = 17, 'r5.12xlarge.elasticsearch' = 18, 'c5.large.elasticsearch' = 19, 'c5.xlarge.elasticsearch' = 20, 'c5.2xlarge.elasticsearch' = 21, 'c5.4xlarge.elasticsearch' = 22, 'c5.9xlarge.elasticsearch' = 23, 'c5.18xlarge.elasticsearch' = 24, 'ultrawarm1.medium.elasticsearch' = 25, 'ultrawarm1.large.elasticsearch' = 26, 't2.micro.elasticsearch' = 27, 't2.small.elasticsearch' = 28, 't2.medium.elasticsearch' = 29, 'r3.large.elasticsearch' = 30, 'r3.xlarge.elasticsearch' = 31, 'r3.2xlarge.elasticsearch' = 32, 'r3.4xlarge.elasticsearch' = 33, 'r3.8xlarge.elasticsearch' = 34, 'i2.xlarge.elasticsearch' = 35, 'i2.2xlarge.elasticsearch' = 36, 'd2.xlarge.elasticsearch' = 37, 'd2.2xlarge.elasticsearch' = 38, 'd2.4xlarge.elasticsearch' = 39, 'd2.8xlarge.elasticsearch' = 40, 'c4.large.elasticsearch' = 41, 'c4.xlarge.elasticsearch' = 42, 'c4.2xlarge.elasticsearch' = 43, 'c4.4xlarge.elasticsearch' = 44, 'c4.8xlarge.elasticsearch' = 45, 'r4.large.elasticsearch' = 46, 'r4.xlarge.elasticsearch' = 47, 'r4.2xlarge.elasticsearch' = 48, 'r4.4xlarge.elasticsearch' = 49, 'r4.8xlarge.elasticsearch' = 50, 'r4.16xlarge.elasticsearch' = 51, 'i3.large.elasticsearch' = 52, 'i3.xlarge.elasticsearch' = 53, 'i3.2xlarge.elasticsearch' = 54, 'i3.4xlarge.elasticsearch' = 55, 'i3.8xlarge.elasticsearch' = 56, 'i3.16xlarge.elasticsearch' = 57 }


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

	export enum ElasticsearchClusterConfigWarmType { 'ultrawarm1.medium.elasticsearch' = 0, 'ultrawarm1.large.elasticsearch' = 1 }


	/** Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
	export interface EBSOptions {
		EBSEnabled?: boolean | null;

		/** The type of EBS volume, standard, gp2, or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information. */
		VolumeType?: EBSOptionsVolumeType | null;
		VolumeSize?: number | null;
		Iops?: number | null;
	}

	/** Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
	export interface EBSOptionsFormProperties {
		EBSEnabled: FormControl<boolean | null | undefined>,

		/** The type of EBS volume, standard, gp2, or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information. */
		VolumeType: FormControl<EBSOptionsVolumeType | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		Iops: FormControl<number | null | undefined>,
	}
	export function CreateEBSOptionsFormGroup() {
		return new FormGroup<EBSOptionsFormProperties>({
			EBSEnabled: new FormControl<boolean | null | undefined>(undefined),
			VolumeType: new FormControl<EBSOptionsVolumeType | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EBSOptionsVolumeType { standard = 0, gp2 = 1, io1 = 2 }


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
		VPCId?: string | null;
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

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId?: string | null;

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn?: string | null;
	}

	/** Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
	export interface CognitoOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCognitoOptionsFormGroup() {
		return new FormGroup<CognitoOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}


	/** Specifies the Encryption At Rest Options. */
	export interface EncryptionAtRestOptions {
		Enabled?: boolean | null;

		/**
		 * Max length: 500
		 * Min length: 1
		 */
		KmsKeyId?: string | null;
	}

	/** Specifies the Encryption At Rest Options. */
	export interface EncryptionAtRestOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 500
		 * Min length: 1
		 */
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionAtRestOptionsFormGroup() {
		return new FormGroup<EncryptionAtRestOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
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
		TLSSecurityPolicy?: DomainEndpointOptionsTLSSecurityPolicy | null;
	}

	/** Options to configure endpoint for the Elasticsearch domain. */
	export interface DomainEndpointOptionsFormProperties {
		EnforceHTTPS: FormControl<boolean | null | undefined>,
		TLSSecurityPolicy: FormControl<DomainEndpointOptionsTLSSecurityPolicy | null | undefined>,
	}
	export function CreateDomainEndpointOptionsFormGroup() {
		return new FormGroup<DomainEndpointOptionsFormProperties>({
			EnforceHTTPS: new FormControl<boolean | null | undefined>(undefined),
			TLSSecurityPolicy: new FormControl<DomainEndpointOptionsTLSSecurityPolicy | null | undefined>(undefined),
		});

	}

	export enum DomainEndpointOptionsTLSSecurityPolicy { 'Policy-Min-TLS-1-0-2019-07' = 0, 'Policy-Min-TLS-1-2-2019-07' = 1 }


	/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled. */
	export interface AdvancedSecurityOptions {
		Enabled?: boolean | null;
		InternalUserDatabaseEnabled?: boolean | null;
	}

	/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled. */
	export interface AdvancedSecurityOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		InternalUserDatabaseEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdvancedSecurityOptionsFormGroup() {
		return new FormGroup<AdvancedSecurityOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			InternalUserDatabaseEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ESPartitionInstanceType { 'm3.medium.elasticsearch' = 0, 'm3.large.elasticsearch' = 1, 'm3.xlarge.elasticsearch' = 2, 'm3.2xlarge.elasticsearch' = 3, 'm4.large.elasticsearch' = 4, 'm4.xlarge.elasticsearch' = 5, 'm4.2xlarge.elasticsearch' = 6, 'm4.4xlarge.elasticsearch' = 7, 'm4.10xlarge.elasticsearch' = 8, 'm5.large.elasticsearch' = 9, 'm5.xlarge.elasticsearch' = 10, 'm5.2xlarge.elasticsearch' = 11, 'm5.4xlarge.elasticsearch' = 12, 'm5.12xlarge.elasticsearch' = 13, 'r5.large.elasticsearch' = 14, 'r5.xlarge.elasticsearch' = 15, 'r5.2xlarge.elasticsearch' = 16, 'r5.4xlarge.elasticsearch' = 17, 'r5.12xlarge.elasticsearch' = 18, 'c5.large.elasticsearch' = 19, 'c5.xlarge.elasticsearch' = 20, 'c5.2xlarge.elasticsearch' = 21, 'c5.4xlarge.elasticsearch' = 22, 'c5.9xlarge.elasticsearch' = 23, 'c5.18xlarge.elasticsearch' = 24, 'ultrawarm1.medium.elasticsearch' = 25, 'ultrawarm1.large.elasticsearch' = 26, 't2.micro.elasticsearch' = 27, 't2.small.elasticsearch' = 28, 't2.medium.elasticsearch' = 29, 'r3.large.elasticsearch' = 30, 'r3.xlarge.elasticsearch' = 31, 'r3.2xlarge.elasticsearch' = 32, 'r3.4xlarge.elasticsearch' = 33, 'r3.8xlarge.elasticsearch' = 34, 'i2.xlarge.elasticsearch' = 35, 'i2.2xlarge.elasticsearch' = 36, 'd2.xlarge.elasticsearch' = 37, 'd2.2xlarge.elasticsearch' = 38, 'd2.4xlarge.elasticsearch' = 39, 'd2.8xlarge.elasticsearch' = 40, 'c4.large.elasticsearch' = 41, 'c4.xlarge.elasticsearch' = 42, 'c4.2xlarge.elasticsearch' = 43, 'c4.4xlarge.elasticsearch' = 44, 'c4.8xlarge.elasticsearch' = 45, 'r4.large.elasticsearch' = 46, 'r4.xlarge.elasticsearch' = 47, 'r4.2xlarge.elasticsearch' = 48, 'r4.4xlarge.elasticsearch' = 49, 'r4.8xlarge.elasticsearch' = 50, 'r4.16xlarge.elasticsearch' = 51, 'i3.large.elasticsearch' = 52, 'i3.xlarge.elasticsearch' = 53, 'i3.2xlarge.elasticsearch' = 54, 'i3.4xlarge.elasticsearch' = 55, 'i3.8xlarge.elasticsearch' = 56, 'i3.16xlarge.elasticsearch' = 57 }

	export enum ESWarmPartitionInstanceType { 'ultrawarm1.medium.elasticsearch' = 0, 'ultrawarm1.large.elasticsearch' = 1 }


	/**  The type of EBS volume, standard, gp2, or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information. */
	export enum VolumeType { standard = 0, gp2 = 1, io1 = 2 }


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

	export enum TLSSecurityPolicy { 'Policy-Min-TLS-1-0-2019-07' = 0, 'Policy-Min-TLS-1-2-2019-07' = 1 }


	/** Credentials for the master user: username and password, ARN, or both. */
	export interface MasterUserOptions {

		/** The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information. */
		MasterUserARN?: string | null;

		/** Min length: 1 */
		MasterUserName?: string | null;

		/** Min length: 8 */
		MasterUserPassword?: string | null;
	}

	/** Credentials for the master user: username and password, ARN, or both. */
	export interface MasterUserOptionsFormProperties {

		/** The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information. */
		MasterUserARN: FormControl<string | null | undefined>,

		/** Min length: 1 */
		MasterUserName: FormControl<string | null | undefined>,

		/** Min length: 8 */
		MasterUserPassword: FormControl<string | null | undefined>,
	}
	export function CreateMasterUserOptionsFormGroup() {
		return new FormGroup<MasterUserOptionsFormProperties>({
			MasterUserARN: new FormControl<string | null | undefined>(undefined),
			MasterUserName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			MasterUserPassword: new FormControl<string | null | undefined>(undefined, [Validators.minLength(8)]),
		});

	}

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

		/** Max length: 20 */
		ConnectionAlias?: string | null;

		/** Specifies the connection status of an outbound cross-cluster search connection. */
		ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus;
		CrossClusterSearchConnectionId?: string | null;
	}

	/** The result of a <code><a>CreateOutboundCrossClusterSearchConnection</a></code> request. Contains the details of the newly created cross-cluster search connection. */
	export interface CreateOutboundCrossClusterSearchConnectionResponseFormProperties {

		/** Max length: 20 */
		ConnectionAlias: FormControl<string | null | undefined>,
		CrossClusterSearchConnectionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateOutboundCrossClusterSearchConnectionResponseFormGroup() {
		return new FormGroup<CreateOutboundCrossClusterSearchConnectionResponseFormProperties>({
			ConnectionAlias: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(20)]),
			CrossClusterSearchConnectionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the connection status of an outbound cross-cluster search connection. */
	export interface OutboundCrossClusterSearchConnectionStatus {
		StatusCode?: OutboundCrossClusterSearchConnectionStatusStatusCode | null;
		Message?: string | null;
	}

	/** Specifies the connection status of an outbound cross-cluster search connection. */
	export interface OutboundCrossClusterSearchConnectionStatusFormProperties {
		StatusCode: FormControl<OutboundCrossClusterSearchConnectionStatusStatusCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateOutboundCrossClusterSearchConnectionStatusFormGroup() {
		return new FormGroup<OutboundCrossClusterSearchConnectionStatusFormProperties>({
			StatusCode: new FormControl<OutboundCrossClusterSearchConnectionStatusStatusCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OutboundCrossClusterSearchConnectionStatusStatusCode { PENDING_ACCEPTANCE = 0, VALIDATING = 1, VALIDATION_FAILED = 2, PROVISIONING = 3, ACTIVE = 4, REJECTED = 5, DELETING = 6, DELETED = 7 }


	/**  Container for response returned by <code> <a>CreatePackage</a> </code> operation.  */
	export interface CreatePackageResponse {

		/** Basic information about a package. */
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
		PackageID?: string | null;

		/**
		 * Max length: 28
		 * Min length: 3
		 */
		PackageName?: string | null;
		PackageType?: DomainPackageDetailsPackageType | null;

		/** Max length: 1024 */
		PackageDescription?: string | null;
		PackageStatus?: PackageDetailsPackageStatus | null;
		CreatedAt?: Date | null;
		ErrorDetails?: ErrorDetails;
	}

	/** Basic information about a package. */
	export interface PackageDetailsFormProperties {
		PackageID: FormControl<string | null | undefined>,

		/**
		 * Max length: 28
		 * Min length: 3
		 */
		PackageName: FormControl<string | null | undefined>,
		PackageType: FormControl<DomainPackageDetailsPackageType | null | undefined>,

		/** Max length: 1024 */
		PackageDescription: FormControl<string | null | undefined>,
		PackageStatus: FormControl<PackageDetailsPackageStatus | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
	}
	export function CreatePackageDetailsFormGroup() {
		return new FormGroup<PackageDetailsFormProperties>({
			PackageID: new FormControl<string | null | undefined>(undefined),
			PackageName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			PackageType: new FormControl<DomainPackageDetailsPackageType | null | undefined>(undefined),
			PackageDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			PackageStatus: new FormControl<PackageDetailsPackageStatus | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PackageDetailsPackageStatus { COPYING = 0, COPY_FAILED = 1, VALIDATING = 2, VALIDATION_FAILED = 3, AVAILABLE = 4, DELETING = 5, DELETED = 6, DELETE_FAILED = 7 }


	/** The result of a <code>DeleteElasticsearchDomain</code> request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted. */
	export interface DeleteElasticsearchDomainResponse {

		/** The current status of an Elasticsearch domain. */
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

		/** Specifies details of an inbound connection. */
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

		/** Specifies details of an outbound connection. */
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
		CrossClusterSearchConnectionId?: string | null;

		/** Max length: 20 */
		ConnectionAlias?: string | null;

		/** Specifies the connection status of an outbound cross-cluster search connection. */
		ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus;
	}

	/** Specifies details of an outbound connection. */
	export interface OutboundCrossClusterSearchConnectionFormProperties {
		CrossClusterSearchConnectionId: FormControl<string | null | undefined>,

		/** Max length: 20 */
		ConnectionAlias: FormControl<string | null | undefined>,
	}
	export function CreateOutboundCrossClusterSearchConnectionFormGroup() {
		return new FormGroup<OutboundCrossClusterSearchConnectionFormProperties>({
			CrossClusterSearchConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionAlias: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(20)]),
		});

	}


	/**  Container for response parameters to <code> <a>DeletePackage</a> </code> operation.  */
	export interface DeletePackageResponse {

		/** Basic information about a package. */
		PackageDetails?: PackageDetails;
	}

	/**  Container for response parameters to <code> <a>DeletePackage</a> </code> operation.  */
	export interface DeletePackageResponseFormProperties {
	}
	export function CreateDeletePackageResponseFormGroup() {
		return new FormGroup<DeletePackageResponseFormProperties>({
		});

	}


	/** The result of a <code>DescribeElasticsearchDomain</code> request. Contains the status of the domain specified in the request. */
	export interface DescribeElasticsearchDomainResponse {

		/**
		 * The current status of an Elasticsearch domain.
		 * Required
		 */
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

		/**
		 * The configuration of an Elasticsearch domain.
		 * Required
		 */
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

		/** Status of the Elasticsearch version options for the specified Elasticsearch domain. */
		ElasticsearchVersion?: ElasticsearchVersionStatus;

		/** Specifies the configuration status for the specified Elasticsearch domain. */
		ElasticsearchClusterConfig?: ElasticsearchClusterConfigStatus;

		/** Status of the EBS options for the specified Elasticsearch domain. */
		EBSOptions?: EBSOptionsStatus;

		/** The configured access rules for the domain's document and search endpoints, and the current status of those rules. */
		AccessPolicies?: AccessPoliciesStatus;

		/** Status of a daily automated snapshot. */
		SnapshotOptions?: SnapshotOptionsStatus;

		/** Status of the VPC options for the specified Elasticsearch domain. */
		VPCOptions?: VPCDerivedInfoStatus;

		/** Status of the Cognito options for the specified Elasticsearch domain. */
		CognitoOptions?: CognitoOptionsStatus;

		/** Status of the Encryption At Rest options for the specified Elasticsearch domain. */
		EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus;

		/** Status of the node-to-node encryption options for the specified Elasticsearch domain. */
		NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus;

		/** <p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: AdvancedOptionsStatus;

		/** The configured log publishing options for the domain and their current status. */
		LogPublishingOptions?: LogPublishingOptionsStatus;

		/** The configured endpoint options for the domain and their current status. */
		DomainEndpointOptions?: DomainEndpointOptionsStatus;

		/** Specifies the status of advanced security options for the specified Elasticsearch domain. */
		AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus;
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

		/**
		 * Provides the current status of the entity.
		 * Required
		 */
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

		/** Minimum: 0 */
		UpdateVersion?: number | null;

		/**
		 * <p>The state of a requested change. One of the following:</p> <ul> <li>Processing: The request change is still in-process.</li> <li>Active: The request change is processed and deployed to the Elasticsearch domain.</li> </ul>
		 * Required
		 */
		State: OptionStatusState;
		PendingDeletion?: boolean | null;
	}

	/** Provides the current status of the entity. */
	export interface OptionStatusFormProperties {

		/** Required */
		CreationDate: FormControl<Date | null | undefined>,

		/** Required */
		UpdateDate: FormControl<Date | null | undefined>,

		/** Minimum: 0 */
		UpdateVersion: FormControl<number | null | undefined>,

		/**
		 * <p>The state of a requested change. One of the following:</p> <ul> <li>Processing: The request change is still in-process.</li> <li>Active: The request change is processed and deployed to the Elasticsearch domain.</li> </ul>
		 * Required
		 */
		State: FormControl<OptionStatusState | null | undefined>,
		PendingDeletion: FormControl<boolean | null | undefined>,
	}
	export function CreateOptionStatusFormGroup() {
		return new FormGroup<OptionStatusFormProperties>({
			CreationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			UpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			UpdateVersion: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			State: new FormControl<OptionStatusState | null | undefined>(undefined, [Validators.required]),
			PendingDeletion: new FormControl<boolean | null | undefined>(undefined),
		});

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

	/**  Specifies the configuration status for the specified Elasticsearch domain. */
	export interface ElasticsearchClusterConfigStatusFormProperties {
	}
	export function CreateElasticsearchClusterConfigStatusFormGroup() {
		return new FormGroup<ElasticsearchClusterConfigStatusFormProperties>({
		});

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

	/**  Status of the EBS options for the specified Elasticsearch domain. */
	export interface EBSOptionsStatusFormProperties {
	}
	export function CreateEBSOptionsStatusFormGroup() {
		return new FormGroup<EBSOptionsStatusFormProperties>({
		});

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

	/** The configured access rules for the domain's document and search endpoints, and the current status of those rules. */
	export interface AccessPoliciesStatusFormProperties {

		/**
		 * Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB.
		 * Required
		 */
		Options: FormControl<string | null | undefined>,
	}
	export function CreateAccessPoliciesStatusFormGroup() {
		return new FormGroup<AccessPoliciesStatusFormProperties>({
			Options: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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

	/** Status of a daily automated snapshot. */
	export interface SnapshotOptionsStatusFormProperties {
	}
	export function CreateSnapshotOptionsStatusFormGroup() {
		return new FormGroup<SnapshotOptionsStatusFormProperties>({
		});

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

	/**  Status of the VPC options for the specified Elasticsearch domain. */
	export interface VPCDerivedInfoStatusFormProperties {
	}
	export function CreateVPCDerivedInfoStatusFormGroup() {
		return new FormGroup<VPCDerivedInfoStatusFormProperties>({
		});

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

	/** Status of the Cognito options for the specified Elasticsearch domain. */
	export interface CognitoOptionsStatusFormProperties {
	}
	export function CreateCognitoOptionsStatusFormGroup() {
		return new FormGroup<CognitoOptionsStatusFormProperties>({
		});

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

	/**  Status of the Encryption At Rest options for the specified Elasticsearch domain. */
	export interface EncryptionAtRestOptionsStatusFormProperties {
	}
	export function CreateEncryptionAtRestOptionsStatusFormGroup() {
		return new FormGroup<EncryptionAtRestOptionsStatusFormProperties>({
		});

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

	/** Status of the node-to-node encryption options for the specified Elasticsearch domain. */
	export interface NodeToNodeEncryptionOptionsStatusFormProperties {
	}
	export function CreateNodeToNodeEncryptionOptionsStatusFormGroup() {
		return new FormGroup<NodeToNodeEncryptionOptionsStatusFormProperties>({
		});

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

		/** Provides the current status of the entity. */
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

	/** The configured endpoint options for the domain and their current status. */
	export interface DomainEndpointOptionsStatusFormProperties {
	}
	export function CreateDomainEndpointOptionsStatusFormGroup() {
		return new FormGroup<DomainEndpointOptionsStatusFormProperties>({
		});

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

	/**  Specifies the status of advanced security options for the specified Elasticsearch domain. */
	export interface AdvancedSecurityOptionsStatusFormProperties {
	}
	export function CreateAdvancedSecurityOptionsStatusFormGroup() {
		return new FormGroup<AdvancedSecurityOptionsStatusFormProperties>({
		});

	}


	/** The result of a <code>DescribeElasticsearchDomains</code> request. Contains the status of the specified domains or all domains owned by the account. */
	export interface DescribeElasticsearchDomainsResponse {

		/**
		 * A list that contains the status of each requested Elasticsearch domain.
		 * Required
		 */
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

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}

	/** The result of a <code><a>DescribeInboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria. */
	export interface DescribeInboundCrossClusterSearchConnectionsResponseFormProperties {

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInboundCrossClusterSearchConnectionsResponseFormGroup() {
		return new FormGroup<DescribeInboundCrossClusterSearchConnectionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A filter used to limit results when describing inbound or outbound cross-cluster search connections. Multiple values can be specified per filter. A cross-cluster search connection must match at least one of the specified values for it to be returned from an operation.  */
	export interface Filter {

		/** Min length: 1 */
		Name?: string | null;

		/** Minimum items: 1 */
		Values?: Array<string>;
	}

	/**  A filter used to limit results when describing inbound or outbound cross-cluster search connections. Multiple values can be specified per filter. A cross-cluster search connection must match at least one of the specified values for it to be returned from an operation.  */
	export interface FilterFormProperties {

		/** Min length: 1 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
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

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}

	/** The result of a <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria. */
	export interface DescribeOutboundCrossClusterSearchConnectionsResponseFormProperties {

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
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
		Name?: DescribePackagesFilterName | null;
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

	export enum DescribePackagesFilterName { PackageID = 0, PackageName = 1, PackageStatus = 2 }


	/** Container for results from <code>DescribeReservedElasticsearchInstanceOfferings</code> */
	export interface DescribeReservedElasticsearchInstanceOfferingsResponse {

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
		ReservedElasticsearchInstanceOfferings?: Array<ReservedElasticsearchInstanceOffering>;
	}

	/** Container for results from <code>DescribeReservedElasticsearchInstanceOfferings</code> */
	export interface DescribeReservedElasticsearchInstanceOfferingsResponseFormProperties {

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReservedElasticsearchInstanceOfferingsResponseFormGroup() {
		return new FormGroup<DescribeReservedElasticsearchInstanceOfferingsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a reserved Elasticsearch instance offering. */
	export interface ReservedElasticsearchInstanceOffering {
		ReservedElasticsearchInstanceOfferingId?: string | null;
		ElasticsearchInstanceType?: ElasticsearchClusterConfigInstanceType | null;
		Duration?: number | null;
		FixedPrice?: number | null;
		UsagePrice?: number | null;
		CurrencyCode?: string | null;
		PaymentOption?: ReservedElasticsearchInstanceOfferingPaymentOption | null;
		RecurringCharges?: Array<RecurringCharge>;
	}

	/** Details of a reserved Elasticsearch instance offering. */
	export interface ReservedElasticsearchInstanceOfferingFormProperties {
		ReservedElasticsearchInstanceOfferingId: FormControl<string | null | undefined>,
		ElasticsearchInstanceType: FormControl<ElasticsearchClusterConfigInstanceType | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		UsagePrice: FormControl<number | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		PaymentOption: FormControl<ReservedElasticsearchInstanceOfferingPaymentOption | null | undefined>,
	}
	export function CreateReservedElasticsearchInstanceOfferingFormGroup() {
		return new FormGroup<ReservedElasticsearchInstanceOfferingFormProperties>({
			ReservedElasticsearchInstanceOfferingId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\p{XDigit}{8}-\p{XDigit}{4}-\p{XDigit}{4}-\p{XDigit}{4}-\p{XDigit}{12}')]),
			ElasticsearchInstanceType: new FormControl<ElasticsearchClusterConfigInstanceType | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			PaymentOption: new FormControl<ReservedElasticsearchInstanceOfferingPaymentOption | null | undefined>(undefined),
		});

	}

	export enum ReservedElasticsearchInstanceOfferingPaymentOption { ALL_UPFRONT = 0, PARTIAL_UPFRONT = 1, NO_UPFRONT = 2 }


	/** Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering. */
	export interface RecurringCharge {
		RecurringChargeAmount?: number | null;
		RecurringChargeFrequency?: string | null;
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
		NextToken?: string | null;
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

		/**
		 * Max length: 64
		 * Min length: 5
		 */
		ReservationName?: string | null;
		ReservedElasticsearchInstanceId?: string | null;
		ReservedElasticsearchInstanceOfferingId?: string | null;
		ElasticsearchInstanceType?: ElasticsearchClusterConfigInstanceType | null;
		StartTime?: Date | null;
		Duration?: number | null;
		FixedPrice?: number | null;
		UsagePrice?: number | null;
		CurrencyCode?: string | null;
		ElasticsearchInstanceCount?: number | null;
		State?: string | null;
		PaymentOption?: ReservedElasticsearchInstanceOfferingPaymentOption | null;
		RecurringCharges?: Array<RecurringCharge>;
	}

	/** Details of a reserved Elasticsearch instance. */
	export interface ReservedElasticsearchInstanceFormProperties {

		/**
		 * Max length: 64
		 * Min length: 5
		 */
		ReservationName: FormControl<string | null | undefined>,
		ReservedElasticsearchInstanceId: FormControl<string | null | undefined>,
		ReservedElasticsearchInstanceOfferingId: FormControl<string | null | undefined>,
		ElasticsearchInstanceType: FormControl<ElasticsearchClusterConfigInstanceType | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		UsagePrice: FormControl<number | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		ElasticsearchInstanceCount: FormControl<number | null | undefined>,
		State: FormControl<string | null | undefined>,
		PaymentOption: FormControl<ReservedElasticsearchInstanceOfferingPaymentOption | null | undefined>,
	}
	export function CreateReservedElasticsearchInstanceFormGroup() {
		return new FormGroup<ReservedElasticsearchInstanceFormProperties>({
			ReservationName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(64)]),
			ReservedElasticsearchInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\p{XDigit}{8}-\p{XDigit}{4}-\p{XDigit}{4}-\p{XDigit}{4}-\p{XDigit}{12}')]),
			ReservedElasticsearchInstanceOfferingId: new FormControl<string | null | undefined>(undefined),
			ElasticsearchInstanceType: new FormControl<ElasticsearchClusterConfigInstanceType | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			ElasticsearchInstanceCount: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			PaymentOption: new FormControl<ReservedElasticsearchInstanceOfferingPaymentOption | null | undefined>(undefined),
		});

	}


	/**  Container for response returned by <code> <a>DissociatePackage</a> </code> operation.  */
	export interface DissociatePackageResponse {

		/** Information on a package that is associated with a domain. */
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
		SourceVersion?: string | null;

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


	/**  Container for response returned by <code> <a>GetUpgradeHistory</a> </code> operation.  */
	export interface GetUpgradeHistoryResponse {
		UpgradeHistories?: Array<UpgradeHistory>;
		NextToken?: string | null;
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
		UpgradeName?: string | null;
		StartTimestamp?: Date | null;
		UpgradeStatus?: UpgradeHistoryUpgradeStatus | null;
		StepsList?: Array<UpgradeStepItem>;
	}

	/** History of the last 10 Upgrades and Upgrade Eligibility Checks. */
	export interface UpgradeHistoryFormProperties {
		UpgradeName: FormControl<string | null | undefined>,
		StartTimestamp: FormControl<Date | null | undefined>,
		UpgradeStatus: FormControl<UpgradeHistoryUpgradeStatus | null | undefined>,
	}
	export function CreateUpgradeHistoryFormGroup() {
		return new FormGroup<UpgradeHistoryFormProperties>({
			UpgradeName: new FormControl<string | null | undefined>(undefined),
			StartTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpgradeStatus: new FormControl<UpgradeHistoryUpgradeStatus | null | undefined>(undefined),
		});

	}

	export enum UpgradeHistoryUpgradeStatus { IN_PROGRESS = 0, SUCCEEDED = 1, SUCCEEDED_WITH_ISSUES = 2, FAILED = 3 }


	/** Represents a single step of the Upgrade or Upgrade Eligibility Check workflow. */
	export interface UpgradeStepItem {
		UpgradeStep?: UpgradeStepItemUpgradeStep | null;
		UpgradeStepStatus?: UpgradeHistoryUpgradeStatus | null;
		Issues?: Array<string>;
		ProgressPercent?: number | null;
	}

	/** Represents a single step of the Upgrade or Upgrade Eligibility Check workflow. */
	export interface UpgradeStepItemFormProperties {
		UpgradeStep: FormControl<UpgradeStepItemUpgradeStep | null | undefined>,
		UpgradeStepStatus: FormControl<UpgradeHistoryUpgradeStatus | null | undefined>,
		ProgressPercent: FormControl<number | null | undefined>,
	}
	export function CreateUpgradeStepItemFormGroup() {
		return new FormGroup<UpgradeStepItemFormProperties>({
			UpgradeStep: new FormControl<UpgradeStepItemUpgradeStep | null | undefined>(undefined),
			UpgradeStepStatus: new FormControl<UpgradeHistoryUpgradeStatus | null | undefined>(undefined),
			ProgressPercent: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum UpgradeStepItemUpgradeStep { PRE_UPGRADE_CHECK = 0, SNAPSHOT = 1, UPGRADE = 2 }


	/**  Container for response returned by <code> <a>GetUpgradeStatus</a> </code> operation.  */
	export interface GetUpgradeStatusResponse {
		UpgradeStep?: UpgradeStepItemUpgradeStep | null;
		StepStatus?: UpgradeHistoryUpgradeStatus | null;
		UpgradeName?: string | null;
	}

	/**  Container for response returned by <code> <a>GetUpgradeStatus</a> </code> operation.  */
	export interface GetUpgradeStatusResponseFormProperties {
		UpgradeStep: FormControl<UpgradeStepItemUpgradeStep | null | undefined>,
		StepStatus: FormControl<UpgradeHistoryUpgradeStatus | null | undefined>,
		UpgradeName: FormControl<string | null | undefined>,
	}
	export function CreateGetUpgradeStatusResponseFormGroup() {
		return new FormGroup<GetUpgradeStatusResponseFormProperties>({
			UpgradeStep: new FormControl<UpgradeStepItemUpgradeStep | null | undefined>(undefined),
			StepStatus: new FormControl<UpgradeHistoryUpgradeStatus | null | undefined>(undefined),
			UpgradeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a <code>ListDomainNames</code> operation. Contains the names of all Elasticsearch domains owned by this account. */
	export interface ListDomainNamesResponse {

		/** Contains the list of Elasticsearch domain information. */
		DomainNames?: Array<DomainInfo>;
	}

	/** The result of a <code>ListDomainNames</code> operation. Contains the names of all Elasticsearch domains owned by this account. */
	export interface ListDomainNamesResponseFormProperties {
	}
	export function CreateListDomainNamesResponseFormGroup() {
		return new FormGroup<ListDomainNamesResponseFormProperties>({
		});

	}

	export interface DomainInfo {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName?: string | null;
	}
	export interface DomainInfoFormProperties {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDomainInfoFormGroup() {
		return new FormGroup<DomainInfoFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}


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

		/** List of instance types supported by Amazon Elasticsearch service. */
		ElasticsearchInstanceTypes?: Array<ESPartitionInstanceType>;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}

	/**  Container for the parameters returned by <code> <a>ListElasticsearchInstanceTypes</a> </code> operation.  */
	export interface ListElasticsearchInstanceTypesResponseFormProperties {

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
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
		NextToken?: string | null;
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

		/** A list of <code>Tag</code> */
		TagList?: Array<Tag>;
	}

	/** The result of a <code>ListTags</code> operation. Contains tags for all requested Elasticsearch domains. */
	export interface ListTagsResponseFormProperties {
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
		});

	}


	/** Represents the output of a <code>PurchaseReservedElasticsearchInstanceOffering</code> operation. */
	export interface PurchaseReservedElasticsearchInstanceOfferingResponse {
		ReservedElasticsearchInstanceId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 5
		 */
		ReservationName?: string | null;
	}

	/** Represents the output of a <code>PurchaseReservedElasticsearchInstanceOffering</code> operation. */
	export interface PurchaseReservedElasticsearchInstanceOfferingResponseFormProperties {
		ReservedElasticsearchInstanceId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 5
		 */
		ReservationName: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseReservedElasticsearchInstanceOfferingResponseFormGroup() {
		return new FormGroup<PurchaseReservedElasticsearchInstanceOfferingResponseFormProperties>({
			ReservedElasticsearchInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\p{XDigit}{8}-\p{XDigit}{4}-\p{XDigit}{4}-\p{XDigit}{4}-\p{XDigit}{12}')]),
			ReservationName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(64)]),
		});

	}


	/** The result of a <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation. Contains details of rejected inbound connection. */
	export interface RejectInboundCrossClusterSearchConnectionResponse {

		/** Specifies details of an inbound connection. */
		CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
	}

	/** The result of a <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation. Contains details of rejected inbound connection. */
	export interface RejectInboundCrossClusterSearchConnectionResponseFormProperties {
	}
	export function CreateRejectInboundCrossClusterSearchConnectionResponseFormGroup() {
		return new FormGroup<RejectInboundCrossClusterSearchConnectionResponseFormProperties>({
		});

	}


	/** The result of a <code>StartElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update. */
	export interface StartElasticsearchServiceSoftwareUpdateResponse {

		/** The current options of an Elasticsearch domain service software options. */
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

		/**
		 * The configuration of an Elasticsearch domain.
		 * Required
		 */
		DomainConfig: ElasticsearchDomainConfig;
	}

	/** The result of an <code>UpdateElasticsearchDomain</code> request. Contains the status of the Elasticsearch domain being updated. */
	export interface UpdateElasticsearchDomainConfigResponseFormProperties {
	}
	export function CreateUpdateElasticsearchDomainConfigResponseFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigResponseFormProperties>({
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
		TargetVersion?: string | null;
		PerformCheckOnly?: boolean | null;
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

	/** Container for the parameters to the <code><a>AddTags</a></code> operation. Specify the tags that you want to attach to the Elasticsearch domain. */
	export interface AddTagsRequestFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
		 * Required
		 */
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsRequestFormGroup() {
		return new FormGroup<AddTagsRequestFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  List of limits that are specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> .  */
	export interface AdditionalLimit {
		LimitName?: string | null;
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

		/** Credentials for the master user: username and password, ARN, or both. */
		MasterUserOptions?: MasterUserOptions;
	}

	/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
	export interface AdvancedSecurityOptionsInputFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		InternalUserDatabaseEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdvancedSecurityOptionsInputFormGroup() {
		return new FormGroup<AdvancedSecurityOptionsInputFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			InternalUserDatabaseEnabled: new FormControl<boolean | null | undefined>(undefined),
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


	/** Container for the parameters to the <code><a>CancelElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to cancel a service software update on. */
	export interface CancelElasticsearchServiceSoftwareUpdateRequest {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: string;
	}

	/** Container for the parameters to the <code><a>CancelElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to cancel a service software update on. */
	export interface CancelElasticsearchServiceSoftwareUpdateRequestFormProperties {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateCancelElasticsearchServiceSoftwareUpdateRequestFormGroup() {
		return new FormGroup<CancelElasticsearchServiceSoftwareUpdateRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
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

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: string;
		ElasticsearchVersion?: string | null;

		/** Specifies the configuration for the domain cluster, such as the type and number of instances. */
		ElasticsearchClusterConfig?: ElasticsearchClusterConfig;

		/** Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
		EBSOptions?: EBSOptions;

		/** Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies?: string | null;

		/** Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
		SnapshotOptions?: SnapshotOptions;

		/** Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
		VPCOptions?: VPCOptions;

		/** Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
		CognitoOptions?: CognitoOptions;

		/** Specifies the Encryption At Rest Options. */
		EncryptionAtRestOptions?: EncryptionAtRestOptions;

		/** Specifies the node-to-node encryption options. */
		NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

		/** <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: AdvancedOptions;
		LogPublishingOptions?: LogPublishingOptions;

		/** Options to configure endpoint for the Elasticsearch domain. */
		DomainEndpointOptions?: DomainEndpointOptions;

		/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
		AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
	}
	export interface CreateElasticsearchDomainRequestFormProperties {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: FormControl<string | null | undefined>,
		ElasticsearchVersion: FormControl<string | null | undefined>,

		/** Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies: FormControl<string | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainRequestFormGroup() {
		return new FormGroup<CreateElasticsearchDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
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

		/**
		 * Required
		 * Max length: 20
		 */
		ConnectionAlias: string;
	}

	/** Container for the parameters to the <code><a>CreateOutboundCrossClusterSearchConnection</a></code> operation. */
	export interface CreateOutboundCrossClusterSearchConnectionRequestFormProperties {

		/**
		 * Required
		 * Max length: 20
		 */
		ConnectionAlias: FormControl<string | null | undefined>,
	}
	export function CreateCreateOutboundCrossClusterSearchConnectionRequestFormGroup() {
		return new FormGroup<CreateOutboundCrossClusterSearchConnectionRequestFormProperties>({
			ConnectionAlias: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(20)]),
		});

	}

	export enum PackageType { 'TXT-DICTIONARY' = 0 }


	/** The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code> */
	export interface PackageSource {

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		S3BucketName?: string | null;
		S3Key?: string | null;
	}

	/** The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code> */
	export interface PackageSourceFormProperties {

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		S3BucketName: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
	}
	export function CreatePackageSourceFormGroup() {
		return new FormGroup<PackageSourceFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(63)]),
			S3Key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Container for request parameters to <code> <a>CreatePackage</a> </code> operation.  */
	export interface CreatePackageRequest {

		/**
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		PackageName: string;

		/** Required */
		PackageType: DomainPackageDetailsPackageType;

		/** Max length: 1024 */
		PackageDescription?: string | null;

		/**
		 * The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code>
		 * Required
		 */
		PackageSource: PackageSource;
	}

	/**  Container for request parameters to <code> <a>CreatePackage</a> </code> operation.  */
	export interface CreatePackageRequestFormProperties {

		/**
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		PackageName: FormControl<string | null | undefined>,

		/** Required */
		PackageType: FormControl<DomainPackageDetailsPackageType | null | undefined>,

		/** Max length: 1024 */
		PackageDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackageRequestFormGroup() {
		return new FormGroup<CreatePackageRequestFormProperties>({
			PackageName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			PackageType: new FormControl<DomainPackageDetailsPackageType | null | undefined>(undefined, [Validators.required]),
			PackageDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
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

	export enum DeploymentStatus { PENDING_UPDATE = 0, IN_PROGRESS = 1, COMPLETED = 2, NOT_ELIGIBLE = 3, ELIGIBLE = 4 }


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

		/**
		 * A list of Elasticsearch domain names.
		 * Required
		 */
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

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}

	/** Container for the parameters to the <code><a>DescribeInboundCrossClusterSearchConnections</a></code> operation. */
	export interface DescribeInboundCrossClusterSearchConnectionsRequestFormProperties {

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInboundCrossClusterSearchConnectionsRequestFormGroup() {
		return new FormGroup<DescribeInboundCrossClusterSearchConnectionsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> operation. */
	export interface DescribeOutboundCrossClusterSearchConnectionsRequest {
		Filters?: Array<Filter>;

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken?: string | null;
	}

	/** Container for the parameters to the <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> operation. */
	export interface DescribeOutboundCrossClusterSearchConnectionsRequestFormProperties {

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOutboundCrossClusterSearchConnectionsRequestFormGroup() {
		return new FormGroup<DescribeOutboundCrossClusterSearchConnectionsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Container for request parameters to <code> <a>DescribePackage</a> </code> operation.  */
	export interface DescribePackagesRequest {

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

	/**  Container for request parameters to <code> <a>DescribePackage</a> </code> operation.  */
	export interface DescribePackagesRequestFormProperties {

		/**
		 * Set this value to limit the number of results returned.
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePackagesRequestFormGroup() {
		return new FormGroup<DescribePackagesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.max(100)]),
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

	export enum DomainPackageStatus { ASSOCIATING = 0, ASSOCIATION_FAILED = 1, ACTIVE = 2, DISSOCIATING = 3, DISSOCIATION_FAILED = 4 }


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

		/** SubType of the given storage type. List of available sub-storage options: For "instance" storageType we wont have any storageSubType, in case of "ebs" storageType we will have following valid storageSubTypes <ol> <li>standard</li> <li>gp2</li> <li>io1</li> </ol> Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options. */
		StorageSubTypeName?: string | null;
		StorageTypeLimits?: Array<StorageTypeLimit>;
	}

	/** StorageTypes represents the list of storage related types and their attributes that are available for given InstanceType.  */
	export interface StorageTypeFormProperties {

		/** Type of the storage. List of available storage options: <ol> <li>instance</li> Inbuilt storage available for the given Instance <li>ebs</li> Elastic block storage that would be attached to the given Instance </ol> */
		StorageTypeName: FormControl<string | null | undefined>,

		/** SubType of the given storage type. List of available sub-storage options: For "instance" storageType we wont have any storageSubType, in case of "ebs" storageType we will have following valid storageSubTypes <ol> <li>standard</li> <li>gp2</li> <li>io1</li> </ol> Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options. */
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
		LimitName?: string | null;
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


	/** Type of Log File, it can be one of the following: <ul> <li>INDEX_SLOW_LOGS: Index slow logs contain insert requests that took more time than configured index query log threshold to execute.</li> <li>SEARCH_SLOW_LOGS: Search slow logs contain search queries that took more time than configured search query log threshold to execute.</li> <li>ES_APPLICATION_LOGS: Elasticsearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.</li> </ul>  */
	export enum LogType { INDEX_SLOW_LOGS = 0, SEARCH_SLOW_LOGS = 1, ES_APPLICATION_LOGS = 2 }


	/** <p>The state of a requested change. One of the following:</p> <ul> <li>Processing: The request change is still in-process.</li> <li>Active: The request change is processed and deployed to the Elasticsearch domain.</li> </ul> */
	export enum OptionState { RequiresIndexDocuments = 0, Processing = 1, Active = 2 }

	export enum OutboundCrossClusterSearchConnectionStatusCode { PENDING_ACCEPTANCE = 0, VALIDATING = 1, VALIDATION_FAILED = 2, PROVISIONING = 3, ACTIVE = 4, REJECTED = 5, DELETING = 6, DELETED = 7 }

	export enum PackageStatus { COPYING = 0, COPY_FAILED = 1, VALIDATING = 2, VALIDATION_FAILED = 3, AVAILABLE = 4, DELETING = 5, DELETED = 6, DELETE_FAILED = 7 }


	/** Container for parameters to <code>PurchaseReservedElasticsearchInstanceOffering</code> */
	export interface PurchaseReservedElasticsearchInstanceOfferingRequest {

		/** Required */
		ReservedElasticsearchInstanceOfferingId: string;

		/**
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

	/** Container for parameters to <code>PurchaseReservedElasticsearchInstanceOffering</code> */
	export interface PurchaseReservedElasticsearchInstanceOfferingRequestFormProperties {

		/** Required */
		ReservedElasticsearchInstanceOfferingId: FormControl<string | null | undefined>,

		/**
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
	export function CreatePurchaseReservedElasticsearchInstanceOfferingRequestFormGroup() {
		return new FormGroup<PurchaseReservedElasticsearchInstanceOfferingRequestFormProperties>({
			ReservedElasticsearchInstanceOfferingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('\p{XDigit}{8}-\p{XDigit}{4}-\p{XDigit}{4}-\p{XDigit}{4}-\p{XDigit}{12}')]),
			ReservationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(64)]),
			InstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
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

		/**
		 * The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
		 * Required
		 */
		ARN: string;

		/** Required */
		TagKeys: Array<string>;
	}

	/** Container for the parameters to the <code><a>RemoveTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain from which you want to remove the specified <code>TagKey</code>. */
	export interface RemoveTagsRequestFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
		 * Required
		 */
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsRequestFormGroup() {
		return new FormGroup<RemoveTagsRequestFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReservedElasticsearchInstancePaymentOption { ALL_UPFRONT = 0, PARTIAL_UPFRONT = 1, NO_UPFRONT = 2 }


	/** Container for the parameters to the <code><a>StartElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to schedule a service software update on. */
	export interface StartElasticsearchServiceSoftwareUpdateRequest {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: string;
	}

	/** Container for the parameters to the <code><a>StartElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to schedule a service software update on. */
	export interface StartElasticsearchServiceSoftwareUpdateRequestFormProperties {

		/**
		 * The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateStartElasticsearchServiceSoftwareUpdateRequestFormGroup() {
		return new FormGroup<StartElasticsearchServiceSoftwareUpdateRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
		});

	}


	/** Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster. */
	export interface UpdateElasticsearchDomainConfigRequest {

		/** Specifies the configuration for the domain cluster, such as the type and number of instances. */
		ElasticsearchClusterConfig?: ElasticsearchClusterConfig;

		/** Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>. */
		EBSOptions?: EBSOptions;

		/** Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours. */
		SnapshotOptions?: SnapshotOptions;

		/** Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>. */
		VPCOptions?: VPCOptions;

		/** Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>. */
		CognitoOptions?: CognitoOptions;

		/** <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions?: AdvancedOptions;

		/** Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies?: string | null;
		LogPublishingOptions?: LogPublishingOptions;

		/** Options to configure endpoint for the Elasticsearch domain. */
		DomainEndpointOptions?: DomainEndpointOptions;

		/** Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled). */
		AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
	}

	/** Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster. */
	export interface UpdateElasticsearchDomainConfigRequestFormProperties {

		/** Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies: FormControl<string | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigRequestFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigRequestFormProperties>({
			AccessPolicies: new FormControl<string | null | undefined>(undefined),
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
			ElasticsearchVersion: new FormControl<string | null | undefined>(undefined),
			AccessPolicies: new FormControl<string | null | undefined>(undefined),
			AdvancedOptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			LogPublishingOptions: new FormControl<{[id: string]: LogPublishingOption } | null | undefined>(undefined),
		});

	}

	export interface CreateElasticsearchDomainPostBodyElasticsearchClusterConfig {
		InstanceType?: ElasticsearchClusterConfigInstanceType | null;
		InstanceCount?: number | null;
		DedicatedMasterEnabled?: boolean | null;
		ZoneAwarenessEnabled?: boolean | null;

		/** Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones. */
		ZoneAwarenessConfig?: ZoneAwarenessConfig;
		DedicatedMasterType?: ElasticsearchClusterConfigInstanceType | null;
		DedicatedMasterCount?: number | null;
		WarmEnabled?: boolean | null;
		WarmType?: ElasticsearchClusterConfigWarmType | null;
		WarmCount?: number | null;
	}
	export interface CreateElasticsearchDomainPostBodyElasticsearchClusterConfigFormProperties {
		InstanceType: FormControl<ElasticsearchClusterConfigInstanceType | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		DedicatedMasterEnabled: FormControl<boolean | null | undefined>,
		ZoneAwarenessEnabled: FormControl<boolean | null | undefined>,
		DedicatedMasterType: FormControl<ElasticsearchClusterConfigInstanceType | null | undefined>,
		DedicatedMasterCount: FormControl<number | null | undefined>,
		WarmEnabled: FormControl<boolean | null | undefined>,
		WarmType: FormControl<ElasticsearchClusterConfigWarmType | null | undefined>,
		WarmCount: FormControl<number | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainPostBodyElasticsearchClusterConfigFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodyElasticsearchClusterConfigFormProperties>({
			InstanceType: new FormControl<ElasticsearchClusterConfigInstanceType | null | undefined>(undefined),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			DedicatedMasterEnabled: new FormControl<boolean | null | undefined>(undefined),
			ZoneAwarenessEnabled: new FormControl<boolean | null | undefined>(undefined),
			DedicatedMasterType: new FormControl<ElasticsearchClusterConfigInstanceType | null | undefined>(undefined),
			DedicatedMasterCount: new FormControl<number | null | undefined>(undefined),
			WarmEnabled: new FormControl<boolean | null | undefined>(undefined),
			WarmType: new FormControl<ElasticsearchClusterConfigWarmType | null | undefined>(undefined),
			WarmCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateElasticsearchDomainPostBodyEBSOptions {
		EBSEnabled?: boolean | null;

		/** The type of EBS volume, standard, gp2, or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information. */
		VolumeType?: EBSOptionsVolumeType | null;
		VolumeSize?: number | null;
		Iops?: number | null;
	}
	export interface CreateElasticsearchDomainPostBodyEBSOptionsFormProperties {
		EBSEnabled: FormControl<boolean | null | undefined>,

		/** The type of EBS volume, standard, gp2, or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information. */
		VolumeType: FormControl<EBSOptionsVolumeType | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		Iops: FormControl<number | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainPostBodyEBSOptionsFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodyEBSOptionsFormProperties>({
			EBSEnabled: new FormControl<boolean | null | undefined>(undefined),
			VolumeType: new FormControl<EBSOptionsVolumeType | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
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

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId?: string | null;

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn?: string | null;
	}
	export interface CreateElasticsearchDomainPostBodyCognitoOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainPostBodyCognitoOptionsFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodyCognitoOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface CreateElasticsearchDomainPostBodyEncryptionAtRestOptions {
		Enabled?: boolean | null;

		/**
		 * Max length: 500
		 * Min length: 1
		 */
		KmsKeyId?: string | null;
	}
	export interface CreateElasticsearchDomainPostBodyEncryptionAtRestOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 500
		 * Min length: 1
		 */
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainPostBodyEncryptionAtRestOptionsFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodyEncryptionAtRestOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
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
		TLSSecurityPolicy?: DomainEndpointOptionsTLSSecurityPolicy | null;
	}
	export interface CreateElasticsearchDomainPostBodyDomainEndpointOptionsFormProperties {
		EnforceHTTPS: FormControl<boolean | null | undefined>,
		TLSSecurityPolicy: FormControl<DomainEndpointOptionsTLSSecurityPolicy | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainPostBodyDomainEndpointOptionsFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodyDomainEndpointOptionsFormProperties>({
			EnforceHTTPS: new FormControl<boolean | null | undefined>(undefined),
			TLSSecurityPolicy: new FormControl<DomainEndpointOptionsTLSSecurityPolicy | null | undefined>(undefined),
		});

	}

	export interface CreateElasticsearchDomainPostBodyAdvancedSecurityOptions {
		Enabled?: boolean | null;
		InternalUserDatabaseEnabled?: boolean | null;

		/** Credentials for the master user: username and password, ARN, or both. */
		MasterUserOptions?: MasterUserOptions;
	}
	export interface CreateElasticsearchDomainPostBodyAdvancedSecurityOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		InternalUserDatabaseEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateElasticsearchDomainPostBodyAdvancedSecurityOptionsFormGroup() {
		return new FormGroup<CreateElasticsearchDomainPostBodyAdvancedSecurityOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			InternalUserDatabaseEnabled: new FormControl<boolean | null | undefined>(undefined),
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
		PackageType: DomainPackageDetailsPackageType;

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
		PackageType: FormControl<DomainPackageDetailsPackageType | null | undefined>,

		/**
		 * Description of the package.
		 * Max length: 1024
		 */
		PackageDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackagePostBodyFormGroup() {
		return new FormGroup<CreatePackagePostBodyFormProperties>({
			PackageName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			PackageType: new FormControl<DomainPackageDetailsPackageType | null | undefined>(undefined, [Validators.required]),
			PackageDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export interface CreatePackagePostBodyPackageSource {

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		S3BucketName?: string | null;
		S3Key?: string | null;
	}
	export interface CreatePackagePostBodyPackageSourceFormProperties {

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		S3BucketName: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackagePostBodyPackageSourceFormGroup() {
		return new FormGroup<CreatePackagePostBodyPackageSourceFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(63)]),
			S3Key: new FormControl<string | null | undefined>(undefined),
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
	}
	export interface UpdateElasticsearchDomainConfigPostBodyFormProperties {

		/** <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p> */
		AdvancedOptions: FormControl<{[id: string]: string } | null | undefined>,

		/** Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB. */
		AccessPolicies: FormControl<string | null | undefined>,

		/** Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log. */
		LogPublishingOptions: FormControl<{[id: string]: LogPublishingOption } | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodyFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodyFormProperties>({
			AdvancedOptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			AccessPolicies: new FormControl<string | null | undefined>(undefined),
			LogPublishingOptions: new FormControl<{[id: string]: LogPublishingOption } | null | undefined>(undefined),
		});

	}

	export interface UpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfig {
		InstanceType?: ElasticsearchClusterConfigInstanceType | null;
		InstanceCount?: number | null;
		DedicatedMasterEnabled?: boolean | null;
		ZoneAwarenessEnabled?: boolean | null;

		/** Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones. */
		ZoneAwarenessConfig?: ZoneAwarenessConfig;
		DedicatedMasterType?: ElasticsearchClusterConfigInstanceType | null;
		DedicatedMasterCount?: number | null;
		WarmEnabled?: boolean | null;
		WarmType?: ElasticsearchClusterConfigWarmType | null;
		WarmCount?: number | null;
	}
	export interface UpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfigFormProperties {
		InstanceType: FormControl<ElasticsearchClusterConfigInstanceType | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		DedicatedMasterEnabled: FormControl<boolean | null | undefined>,
		ZoneAwarenessEnabled: FormControl<boolean | null | undefined>,
		DedicatedMasterType: FormControl<ElasticsearchClusterConfigInstanceType | null | undefined>,
		DedicatedMasterCount: FormControl<number | null | undefined>,
		WarmEnabled: FormControl<boolean | null | undefined>,
		WarmType: FormControl<ElasticsearchClusterConfigWarmType | null | undefined>,
		WarmCount: FormControl<number | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfigFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodyElasticsearchClusterConfigFormProperties>({
			InstanceType: new FormControl<ElasticsearchClusterConfigInstanceType | null | undefined>(undefined),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			DedicatedMasterEnabled: new FormControl<boolean | null | undefined>(undefined),
			ZoneAwarenessEnabled: new FormControl<boolean | null | undefined>(undefined),
			DedicatedMasterType: new FormControl<ElasticsearchClusterConfigInstanceType | null | undefined>(undefined),
			DedicatedMasterCount: new FormControl<number | null | undefined>(undefined),
			WarmEnabled: new FormControl<boolean | null | undefined>(undefined),
			WarmType: new FormControl<ElasticsearchClusterConfigWarmType | null | undefined>(undefined),
			WarmCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateElasticsearchDomainConfigPostBodyEBSOptions {
		EBSEnabled?: boolean | null;

		/** The type of EBS volume, standard, gp2, or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information. */
		VolumeType?: EBSOptionsVolumeType | null;
		VolumeSize?: number | null;
		Iops?: number | null;
	}
	export interface UpdateElasticsearchDomainConfigPostBodyEBSOptionsFormProperties {
		EBSEnabled: FormControl<boolean | null | undefined>,

		/** The type of EBS volume, standard, gp2, or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information. */
		VolumeType: FormControl<EBSOptionsVolumeType | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		Iops: FormControl<number | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodyEBSOptionsFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodyEBSOptionsFormProperties>({
			EBSEnabled: new FormControl<boolean | null | undefined>(undefined),
			VolumeType: new FormControl<EBSOptionsVolumeType | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
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

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId?: string | null;

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn?: string | null;
	}
	export interface UpdateElasticsearchDomainConfigPostBodyCognitoOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodyCognitoOptionsFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodyCognitoOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface UpdateElasticsearchDomainConfigPostBodyDomainEndpointOptions {
		EnforceHTTPS?: boolean | null;
		TLSSecurityPolicy?: DomainEndpointOptionsTLSSecurityPolicy | null;
	}
	export interface UpdateElasticsearchDomainConfigPostBodyDomainEndpointOptionsFormProperties {
		EnforceHTTPS: FormControl<boolean | null | undefined>,
		TLSSecurityPolicy: FormControl<DomainEndpointOptionsTLSSecurityPolicy | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodyDomainEndpointOptionsFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodyDomainEndpointOptionsFormProperties>({
			EnforceHTTPS: new FormControl<boolean | null | undefined>(undefined),
			TLSSecurityPolicy: new FormControl<DomainEndpointOptionsTLSSecurityPolicy | null | undefined>(undefined),
		});

	}

	export interface UpdateElasticsearchDomainConfigPostBodyAdvancedSecurityOptions {
		Enabled?: boolean | null;
		InternalUserDatabaseEnabled?: boolean | null;

		/** Credentials for the master user: username and password, ARN, or both. */
		MasterUserOptions?: MasterUserOptions;
	}
	export interface UpdateElasticsearchDomainConfigPostBodyAdvancedSecurityOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		InternalUserDatabaseEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateElasticsearchDomainConfigPostBodyAdvancedSecurityOptionsFormGroup() {
		return new FormGroup<UpdateElasticsearchDomainConfigPostBodyAdvancedSecurityOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			InternalUserDatabaseEnabled: new FormControl<boolean | null | undefined>(undefined),
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

	export enum DescribeElasticsearchInstanceTypeLimitsInstanceType { 'm3.medium.elasticsearch' = 0, 'm3.large.elasticsearch' = 1, 'm3.xlarge.elasticsearch' = 2, 'm3.2xlarge.elasticsearch' = 3, 'm4.large.elasticsearch' = 4, 'm4.xlarge.elasticsearch' = 5, 'm4.2xlarge.elasticsearch' = 6, 'm4.4xlarge.elasticsearch' = 7, 'm4.10xlarge.elasticsearch' = 8, 'm5.large.elasticsearch' = 9, 'm5.xlarge.elasticsearch' = 10, 'm5.2xlarge.elasticsearch' = 11, 'm5.4xlarge.elasticsearch' = 12, 'm5.12xlarge.elasticsearch' = 13, 'r5.large.elasticsearch' = 14, 'r5.xlarge.elasticsearch' = 15, 'r5.2xlarge.elasticsearch' = 16, 'r5.4xlarge.elasticsearch' = 17, 'r5.12xlarge.elasticsearch' = 18, 'c5.large.elasticsearch' = 19, 'c5.xlarge.elasticsearch' = 20, 'c5.2xlarge.elasticsearch' = 21, 'c5.4xlarge.elasticsearch' = 22, 'c5.9xlarge.elasticsearch' = 23, 'c5.18xlarge.elasticsearch' = 24, 'ultrawarm1.medium.elasticsearch' = 25, 'ultrawarm1.large.elasticsearch' = 26, 't2.micro.elasticsearch' = 27, 't2.small.elasticsearch' = 28, 't2.medium.elasticsearch' = 29, 'r3.large.elasticsearch' = 30, 'r3.xlarge.elasticsearch' = 31, 'r3.2xlarge.elasticsearch' = 32, 'r3.4xlarge.elasticsearch' = 33, 'r3.8xlarge.elasticsearch' = 34, 'i2.xlarge.elasticsearch' = 35, 'i2.2xlarge.elasticsearch' = 36, 'd2.xlarge.elasticsearch' = 37, 'd2.2xlarge.elasticsearch' = 38, 'd2.4xlarge.elasticsearch' = 39, 'd2.8xlarge.elasticsearch' = 40, 'c4.large.elasticsearch' = 41, 'c4.xlarge.elasticsearch' = 42, 'c4.2xlarge.elasticsearch' = 43, 'c4.4xlarge.elasticsearch' = 44, 'c4.8xlarge.elasticsearch' = 45, 'r4.large.elasticsearch' = 46, 'r4.xlarge.elasticsearch' = 47, 'r4.2xlarge.elasticsearch' = 48, 'r4.4xlarge.elasticsearch' = 49, 'r4.8xlarge.elasticsearch' = 50, 'r4.16xlarge.elasticsearch' = 51, 'i3.large.elasticsearch' = 52, 'i3.xlarge.elasticsearch' = 53, 'i3.2xlarge.elasticsearch' = 54, 'i3.4xlarge.elasticsearch' = 55, 'i3.8xlarge.elasticsearch' = 56, 'i3.16xlarge.elasticsearch' = 57 }

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
			TargetVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PerformCheckOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

