import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AllocateStaticIpResult {
		operations?: Array<Operation>;
	}
	export interface AllocateStaticIpResultFormProperties {
	}
	export function CreateAllocateStaticIpResultFormGroup() {
		return new FormGroup<AllocateStaticIpResultFormProperties>({
		});

	}


	/** Describes the API operation. */
	export interface Operation {
		id?: string;
		resourceName?: string;
		resourceType?: ResourceType;
		createdAt?: Date;
		location?: ResourceLocation;
		isTerminal?: boolean | null;
		operationDetails?: string;
		operationType?: OperationType;
		status?: OperationStatus;
		statusChangedAt?: Date;
		errorCode?: string;
		errorDetails?: string;
	}

	/** Describes the API operation. */
	export interface OperationFormProperties {
		id: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		isTerminal: FormControl<boolean | null | undefined>,
		operationDetails: FormControl<string | null | undefined>,
		operationType: FormControl<OperationType | null | undefined>,
		status: FormControl<OperationStatus | null | undefined>,
		statusChangedAt: FormControl<Date | null | undefined>,
		errorCode: FormControl<string | null | undefined>,
		errorDetails: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			isTerminal: new FormControl<boolean | null | undefined>(undefined),
			operationDetails: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<OperationType | null | undefined>(undefined),
			status: new FormControl<OperationStatus | null | undefined>(undefined),
			statusChangedAt: new FormControl<Date | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorDetails: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceType { ContainerService = 0, Instance = 1, StaticIp = 2, KeyPair = 3, InstanceSnapshot = 4, Domain = 5, PeeredVpc = 6, LoadBalancer = 7, LoadBalancerTlsCertificate = 8, Disk = 9, DiskSnapshot = 10, RelationalDatabase = 11, RelationalDatabaseSnapshot = 12, ExportSnapshotRecord = 13, CloudFormationStackRecord = 14, Alarm = 15, ContactMethod = 16, Distribution = 17, Certificate = 18, Bucket = 19 }


	/** Describes the resource location. */
	export interface ResourceLocation {
		availabilityZone?: string;
		regionName?: RegionName;
	}

	/** Describes the resource location. */
	export interface ResourceLocationFormProperties {
		availabilityZone: FormControl<string | null | undefined>,
		regionName: FormControl<RegionName | null | undefined>,
	}
	export function CreateResourceLocationFormGroup() {
		return new FormGroup<ResourceLocationFormProperties>({
			availabilityZone: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<RegionName | null | undefined>(undefined),
		});

	}

	export enum RegionName { 'us-east-1' = 0, 'us-east-2' = 1, 'us-west-1' = 2, 'us-west-2' = 3, 'eu-west-1' = 4, 'eu-west-2' = 5, 'eu-west-3' = 6, 'eu-central-1' = 7, 'ca-central-1' = 8, 'ap-south-1' = 9, 'ap-southeast-1' = 10, 'ap-southeast-2' = 11, 'ap-northeast-1' = 12, 'ap-northeast-2' = 13, 'eu-north-1' = 14 }

	export enum OperationType { DeleteKnownHostKeys = 0, DeleteInstance = 1, CreateInstance = 2, StopInstance = 3, StartInstance = 4, RebootInstance = 5, OpenInstancePublicPorts = 6, PutInstancePublicPorts = 7, CloseInstancePublicPorts = 8, AllocateStaticIp = 9, ReleaseStaticIp = 10, AttachStaticIp = 11, DetachStaticIp = 12, UpdateDomainEntry = 13, DeleteDomainEntry = 14, CreateDomain = 15, DeleteDomain = 16, CreateInstanceSnapshot = 17, DeleteInstanceSnapshot = 18, CreateInstancesFromSnapshot = 19, CreateLoadBalancer = 20, DeleteLoadBalancer = 21, AttachInstancesToLoadBalancer = 22, DetachInstancesFromLoadBalancer = 23, UpdateLoadBalancerAttribute = 24, CreateLoadBalancerTlsCertificate = 25, DeleteLoadBalancerTlsCertificate = 26, AttachLoadBalancerTlsCertificate = 27, CreateDisk = 28, DeleteDisk = 29, AttachDisk = 30, DetachDisk = 31, CreateDiskSnapshot = 32, DeleteDiskSnapshot = 33, CreateDiskFromSnapshot = 34, CreateRelationalDatabase = 35, UpdateRelationalDatabase = 36, DeleteRelationalDatabase = 37, CreateRelationalDatabaseFromSnapshot = 38, CreateRelationalDatabaseSnapshot = 39, DeleteRelationalDatabaseSnapshot = 40, UpdateRelationalDatabaseParameters = 41, StartRelationalDatabase = 42, RebootRelationalDatabase = 43, StopRelationalDatabase = 44, EnableAddOn = 45, DisableAddOn = 46, PutAlarm = 47, GetAlarms = 48, DeleteAlarm = 49, TestAlarm = 50, CreateContactMethod = 51, GetContactMethods = 52, SendContactMethodVerification = 53, DeleteContactMethod = 54, CreateDistribution = 55, UpdateDistribution = 56, DeleteDistribution = 57, ResetDistributionCache = 58, AttachCertificateToDistribution = 59, DetachCertificateFromDistribution = 60, UpdateDistributionBundle = 61, SetIpAddressType = 62, CreateCertificate = 63, DeleteCertificate = 64, CreateContainerService = 65, UpdateContainerService = 66, DeleteContainerService = 67, CreateContainerServiceDeployment = 68, CreateContainerServiceRegistryLogin = 69, RegisterContainerImage = 70, DeleteContainerImage = 71, CreateBucket = 72, DeleteBucket = 73, CreateBucketAccessKey = 74, DeleteBucketAccessKey = 75, UpdateBucketBundle = 76, UpdateBucket = 77, SetResourceAccessForBucket = 78, UpdateInstanceMetadataOptions = 79, StartGUISession = 80, StopGUISession = 81 }

	export enum OperationStatus { NotStarted = 0, Started = 1, Failed = 2, Completed = 3, Succeeded = 4 }

	export interface AllocateStaticIpRequest {

		/** Required */
		staticIpName: string;
	}
	export interface AllocateStaticIpRequestFormProperties {

		/** Required */
		staticIpName: FormControl<string | null | undefined>,
	}
	export function CreateAllocateStaticIpRequestFormGroup() {
		return new FormGroup<AllocateStaticIpRequestFormProperties>({
			staticIpName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceException {
	}
	export interface ServiceExceptionFormProperties {
	}
	export function CreateServiceExceptionFormGroup() {
		return new FormGroup<ServiceExceptionFormProperties>({
		});

	}

	export interface InvalidInputException {
	}
	export interface InvalidInputExceptionFormProperties {
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
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

	export interface OperationFailureException {
	}
	export interface OperationFailureExceptionFormProperties {
	}
	export function CreateOperationFailureExceptionFormGroup() {
		return new FormGroup<OperationFailureExceptionFormProperties>({
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

	export interface AccountSetupInProgressException {
	}
	export interface AccountSetupInProgressExceptionFormProperties {
	}
	export function CreateAccountSetupInProgressExceptionFormGroup() {
		return new FormGroup<AccountSetupInProgressExceptionFormProperties>({
		});

	}

	export interface UnauthenticatedException {
	}
	export interface UnauthenticatedExceptionFormProperties {
	}
	export function CreateUnauthenticatedExceptionFormGroup() {
		return new FormGroup<UnauthenticatedExceptionFormProperties>({
		});

	}

	export interface AttachCertificateToDistributionResult {
		operation?: Operation;
	}
	export interface AttachCertificateToDistributionResultFormProperties {
	}
	export function CreateAttachCertificateToDistributionResultFormGroup() {
		return new FormGroup<AttachCertificateToDistributionResultFormProperties>({
		});

	}

	export interface AttachCertificateToDistributionRequest {

		/** Required */
		distributionName: string;

		/** Required */
		certificateName: string;
	}
	export interface AttachCertificateToDistributionRequestFormProperties {

		/** Required */
		distributionName: FormControl<string | null | undefined>,

		/** Required */
		certificateName: FormControl<string | null | undefined>,
	}
	export function CreateAttachCertificateToDistributionRequestFormGroup() {
		return new FormGroup<AttachCertificateToDistributionRequestFormProperties>({
			distributionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certificateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AttachDiskResult {
		operations?: Array<Operation>;
	}
	export interface AttachDiskResultFormProperties {
	}
	export function CreateAttachDiskResultFormGroup() {
		return new FormGroup<AttachDiskResultFormProperties>({
		});

	}

	export interface AttachDiskRequest {

		/** Required */
		diskName: string;

		/** Required */
		instanceName: string;

		/** Required */
		diskPath: string;
		autoMounting?: boolean | null;
	}
	export interface AttachDiskRequestFormProperties {

		/** Required */
		diskName: FormControl<string | null | undefined>,

		/** Required */
		instanceName: FormControl<string | null | undefined>,

		/** Required */
		diskPath: FormControl<string | null | undefined>,
		autoMounting: FormControl<boolean | null | undefined>,
	}
	export function CreateAttachDiskRequestFormGroup() {
		return new FormGroup<AttachDiskRequestFormProperties>({
			diskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			diskPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			autoMounting: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AttachInstancesToLoadBalancerResult {
		operations?: Array<Operation>;
	}
	export interface AttachInstancesToLoadBalancerResultFormProperties {
	}
	export function CreateAttachInstancesToLoadBalancerResultFormGroup() {
		return new FormGroup<AttachInstancesToLoadBalancerResultFormProperties>({
		});

	}

	export interface AttachInstancesToLoadBalancerRequest {

		/** Required */
		loadBalancerName: string;

		/** Required */
		instanceNames: Array<string>;
	}
	export interface AttachInstancesToLoadBalancerRequestFormProperties {

		/** Required */
		loadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateAttachInstancesToLoadBalancerRequestFormGroup() {
		return new FormGroup<AttachInstancesToLoadBalancerRequestFormProperties>({
			loadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AttachLoadBalancerTlsCertificateResult {
		operations?: Array<Operation>;
	}
	export interface AttachLoadBalancerTlsCertificateResultFormProperties {
	}
	export function CreateAttachLoadBalancerTlsCertificateResultFormGroup() {
		return new FormGroup<AttachLoadBalancerTlsCertificateResultFormProperties>({
		});

	}

	export interface AttachLoadBalancerTlsCertificateRequest {

		/** Required */
		loadBalancerName: string;

		/** Required */
		certificateName: string;
	}
	export interface AttachLoadBalancerTlsCertificateRequestFormProperties {

		/** Required */
		loadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		certificateName: FormControl<string | null | undefined>,
	}
	export function CreateAttachLoadBalancerTlsCertificateRequestFormGroup() {
		return new FormGroup<AttachLoadBalancerTlsCertificateRequestFormProperties>({
			loadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certificateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AttachStaticIpResult {
		operations?: Array<Operation>;
	}
	export interface AttachStaticIpResultFormProperties {
	}
	export function CreateAttachStaticIpResultFormGroup() {
		return new FormGroup<AttachStaticIpResultFormProperties>({
		});

	}

	export interface AttachStaticIpRequest {

		/** Required */
		staticIpName: string;

		/** Required */
		instanceName: string;
	}
	export interface AttachStaticIpRequestFormProperties {

		/** Required */
		staticIpName: FormControl<string | null | undefined>,

		/** Required */
		instanceName: FormControl<string | null | undefined>,
	}
	export function CreateAttachStaticIpRequestFormGroup() {
		return new FormGroup<AttachStaticIpRequestFormProperties>({
			staticIpName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CloseInstancePublicPortsResult {
		operation?: Operation;
	}
	export interface CloseInstancePublicPortsResultFormProperties {
	}
	export function CreateCloseInstancePublicPortsResultFormGroup() {
		return new FormGroup<CloseInstancePublicPortsResultFormProperties>({
		});

	}

	export interface CloseInstancePublicPortsRequest {

		/** Required */
		portInfo: PortInfo;

		/** Required */
		instanceName: string;
	}
	export interface CloseInstancePublicPortsRequestFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
	}
	export function CreateCloseInstancePublicPortsRequestFormGroup() {
		return new FormGroup<CloseInstancePublicPortsRequestFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol. */
	export interface PortInfo {
		fromPort?: number | null;
		toPort?: number | null;
		protocol?: NetworkProtocol;
		cidrs?: Array<string>;
		ipv6Cidrs?: Array<string>;
		cidrListAliases?: Array<string>;
	}

	/** Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol. */
	export interface PortInfoFormProperties {
		fromPort: FormControl<number | null | undefined>,
		toPort: FormControl<number | null | undefined>,
		protocol: FormControl<NetworkProtocol | null | undefined>,
	}
	export function CreatePortInfoFormGroup() {
		return new FormGroup<PortInfoFormProperties>({
			fromPort: new FormControl<number | null | undefined>(undefined),
			toPort: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<NetworkProtocol | null | undefined>(undefined),
		});

	}

	export enum NetworkProtocol { tcp = 0, all = 1, udp = 2, icmp = 3 }

	export interface CopySnapshotResult {
		operations?: Array<Operation>;
	}
	export interface CopySnapshotResultFormProperties {
	}
	export function CreateCopySnapshotResultFormGroup() {
		return new FormGroup<CopySnapshotResultFormProperties>({
		});

	}

	export interface CopySnapshotRequest {
		sourceSnapshotName?: string;
		sourceResourceName?: string;
		restoreDate?: string;
		useLatestRestorableAutoSnapshot?: boolean | null;

		/** Required */
		targetSnapshotName: string;

		/** Required */
		sourceRegion: RegionName;
	}
	export interface CopySnapshotRequestFormProperties {
		sourceSnapshotName: FormControl<string | null | undefined>,
		sourceResourceName: FormControl<string | null | undefined>,
		restoreDate: FormControl<string | null | undefined>,
		useLatestRestorableAutoSnapshot: FormControl<boolean | null | undefined>,

		/** Required */
		targetSnapshotName: FormControl<string | null | undefined>,

		/** Required */
		sourceRegion: FormControl<RegionName | null | undefined>,
	}
	export function CreateCopySnapshotRequestFormGroup() {
		return new FormGroup<CopySnapshotRequestFormProperties>({
			sourceSnapshotName: new FormControl<string | null | undefined>(undefined),
			sourceResourceName: new FormControl<string | null | undefined>(undefined),
			restoreDate: new FormControl<string | null | undefined>(undefined),
			useLatestRestorableAutoSnapshot: new FormControl<boolean | null | undefined>(undefined),
			targetSnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceRegion: new FormControl<RegionName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBucketResult {
		bucket?: Bucket;
		operations?: Array<Operation>;
	}
	export interface CreateBucketResultFormProperties {
	}
	export function CreateCreateBucketResultFormGroup() {
		return new FormGroup<CreateBucketResultFormProperties>({
		});

	}


	/** Describes an Amazon Lightsail bucket. */
	export interface Bucket {
		resourceType?: string;
		accessRules?: AccessRules;
		arn?: string;
		bundleId?: string;
		createdAt?: Date;
		url?: string;
		location?: ResourceLocation;
		name?: string;
		supportCode?: string;
		tags?: Array<Tag>;
		objectVersioning?: string;
		ableToUpdateBundle?: boolean | null;
		readonlyAccessAccounts?: Array<string>;
		resourcesReceivingAccess?: Array<ResourceReceivingAccess>;
		state?: BucketState;
		accessLogConfig?: BucketAccessLogConfig;
	}

	/** Describes an Amazon Lightsail bucket. */
	export interface BucketFormProperties {
		resourceType: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		bundleId: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		url: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		objectVersioning: FormControl<string | null | undefined>,
		ableToUpdateBundle: FormControl<boolean | null | undefined>,
	}
	export function CreateBucketFormGroup() {
		return new FormGroup<BucketFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			bundleId: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			objectVersioning: new FormControl<string | null | undefined>(undefined),
			ableToUpdateBundle: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Describes the anonymous access permissions for an Amazon Lightsail bucket and its objects.</p> <p>For more information about bucket access permissions, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-understanding-bucket-permissions">Understanding bucket permissions in Amazon Lightsail</a> in the </p> <p> <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface AccessRules {
		getObject?: AccessType;
		allowPublicOverrides?: boolean | null;
	}

	/** <p>Describes the anonymous access permissions for an Amazon Lightsail bucket and its objects.</p> <p>For more information about bucket access permissions, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-understanding-bucket-permissions">Understanding bucket permissions in Amazon Lightsail</a> in the </p> <p> <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface AccessRulesFormProperties {
		getObject: FormControl<AccessType | null | undefined>,
		allowPublicOverrides: FormControl<boolean | null | undefined>,
	}
	export function CreateAccessRulesFormGroup() {
		return new FormGroup<AccessRulesFormProperties>({
			getObject: new FormControl<AccessType | null | undefined>(undefined),
			allowPublicOverrides: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AccessType { public = 0, private = 1 }


	/** <p>Describes a tag key and optional value assigned to an Amazon Lightsail resource.</p> <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p> */
	export interface Tag {
		key?: string;
		value?: string;
	}

	/** <p>Describes a tag key and optional value assigned to an Amazon Lightsail resource.</p> <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p> */
	export interface TagFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Amazon Lightsail instance that has access to a Lightsail bucket. */
	export interface ResourceReceivingAccess {
		name?: string;
		resourceType?: string;
	}

	/** Describes an Amazon Lightsail instance that has access to a Lightsail bucket. */
	export interface ResourceReceivingAccessFormProperties {
		name: FormControl<string | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateResourceReceivingAccessFormGroup() {
		return new FormGroup<ResourceReceivingAccessFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the state of an Amazon Lightsail bucket. */
	export interface BucketState {
		code?: string;
		message?: string;
	}

	/** Describes the state of an Amazon Lightsail bucket. */
	export interface BucketStateFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateBucketStateFormGroup() {
		return new FormGroup<BucketStateFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes the access log configuration for a bucket in the Amazon Lightsail object storage service.</p> <p>For more information about bucket access logs, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-bucket-access-logs">Logging bucket requests using access logging in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface BucketAccessLogConfig {

		/** Required */
		enabled: boolean;
		destination?: string;
		prefix?: string;
	}

	/** <p>Describes the access log configuration for a bucket in the Amazon Lightsail object storage service.</p> <p>For more information about bucket access logs, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-bucket-access-logs">Logging bucket requests using access logging in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface BucketAccessLogConfigFormProperties {

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
		destination: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateBucketAccessLogConfigFormGroup() {
		return new FormGroup<BucketAccessLogConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			destination: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBucketRequest {

		/** Required */
		bucketName: string;

		/** Required */
		bundleId: string;
		tags?: Array<Tag>;
		enableObjectVersioning?: boolean | null;
	}
	export interface CreateBucketRequestFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,

		/** Required */
		bundleId: FormControl<string | null | undefined>,
		enableObjectVersioning: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateBucketRequestFormGroup() {
		return new FormGroup<CreateBucketRequestFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bundleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enableObjectVersioning: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateBucketAccessKeyResult {
		accessKey?: AccessKey;
		operations?: Array<Operation>;
	}
	export interface CreateBucketAccessKeyResultFormProperties {
	}
	export function CreateCreateBucketAccessKeyResultFormGroup() {
		return new FormGroup<CreateBucketAccessKeyResultFormProperties>({
		});

	}


	/** <p>Describes an access key for an Amazon Lightsail bucket.</p> <p>Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action to create an access key for a specific bucket. For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> <important> <p>The <code>secretAccessKey</code> value is returned only in response to the <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</p> </important> */
	export interface AccessKey {
		accessKeyId?: string;
		secretAccessKey?: string;
		status?: StatusType;
		createdAt?: Date;
		lastUsed?: AccessKeyLastUsed;
	}

	/** <p>Describes an access key for an Amazon Lightsail bucket.</p> <p>Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action to create an access key for a specific bucket. For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> <important> <p>The <code>secretAccessKey</code> value is returned only in response to the <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</p> </important> */
	export interface AccessKeyFormProperties {
		accessKeyId: FormControl<string | null | undefined>,
		secretAccessKey: FormControl<string | null | undefined>,
		status: FormControl<StatusType | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateAccessKeyFormGroup() {
		return new FormGroup<AccessKeyFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined),
			secretAccessKey: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<StatusType | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum StatusType { Active = 0, Inactive = 1 }


	/** <p>Describes the last time an access key was used.</p> <note> <p>This object does not include data in the response of a <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action.</p> </note> */
	export interface AccessKeyLastUsed {
		lastUsedDate?: Date;
		region?: string;
		serviceName?: string;
	}

	/** <p>Describes the last time an access key was used.</p> <note> <p>This object does not include data in the response of a <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action.</p> </note> */
	export interface AccessKeyLastUsedFormProperties {
		lastUsedDate: FormControl<Date | null | undefined>,
		region: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateAccessKeyLastUsedFormGroup() {
		return new FormGroup<AccessKeyLastUsedFormProperties>({
			lastUsedDate: new FormControl<Date | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBucketAccessKeyRequest {

		/** Required */
		bucketName: string;
	}
	export interface CreateBucketAccessKeyRequestFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,
	}
	export function CreateCreateBucketAccessKeyRequestFormGroup() {
		return new FormGroup<CreateBucketAccessKeyRequestFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCertificateResult {
		certificate?: CertificateSummary;
		operations?: Array<Operation>;
	}
	export interface CreateCertificateResultFormProperties {
	}
	export function CreateCreateCertificateResultFormGroup() {
		return new FormGroup<CreateCertificateResultFormProperties>({
		});

	}


	/** Describes an Amazon Lightsail SSL/TLS certificate. */
	export interface CertificateSummary {
		certificateArn?: string;
		certificateName?: string;
		domainName?: string;
		certificateDetail?: Certificate;
		tags?: Array<Tag>;
	}

	/** Describes an Amazon Lightsail SSL/TLS certificate. */
	export interface CertificateSummaryFormProperties {
		certificateArn: FormControl<string | null | undefined>,
		certificateName: FormControl<string | null | undefined>,
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateCertificateSummaryFormGroup() {
		return new FormGroup<CertificateSummaryFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateName: new FormControl<string | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes the full details of an Amazon Lightsail SSL/TLS certificate.</p> <note> <p>To get a summary of a certificate, use the <code>GetCertificates</code> action and omit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note> */
	export interface Certificate {
		arn?: string;
		name?: string;
		domainName?: string;
		status?: CertificateStatus;
		serialNumber?: string;
		subjectAlternativeNames?: Array<string>;
		domainValidationRecords?: Array<DomainValidationRecord>;
		requestFailureReason?: string;
		inUseResourceCount?: number | null;
		keyAlgorithm?: string;
		createdAt?: Date;
		issuedAt?: Date;
		issuerCA?: string;
		notBefore?: Date;
		notAfter?: Date;
		eligibleToRenew?: string;
		renewalSummary?: RenewalSummary;
		revokedAt?: Date;
		revocationReason?: string;
		tags?: Array<Tag>;
		supportCode?: string;
	}

	/** <p>Describes the full details of an Amazon Lightsail SSL/TLS certificate.</p> <note> <p>To get a summary of a certificate, use the <code>GetCertificates</code> action and omit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note> */
	export interface CertificateFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		domainName: FormControl<string | null | undefined>,
		status: FormControl<CertificateStatus | null | undefined>,
		serialNumber: FormControl<string | null | undefined>,
		requestFailureReason: FormControl<string | null | undefined>,
		inUseResourceCount: FormControl<number | null | undefined>,
		keyAlgorithm: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		issuedAt: FormControl<Date | null | undefined>,
		issuerCA: FormControl<string | null | undefined>,
		notBefore: FormControl<Date | null | undefined>,
		notAfter: FormControl<Date | null | undefined>,
		eligibleToRenew: FormControl<string | null | undefined>,
		revokedAt: FormControl<Date | null | undefined>,
		revocationReason: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CertificateStatus | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			requestFailureReason: new FormControl<string | null | undefined>(undefined),
			inUseResourceCount: new FormControl<number | null | undefined>(undefined),
			keyAlgorithm: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			issuedAt: new FormControl<Date | null | undefined>(undefined),
			issuerCA: new FormControl<string | null | undefined>(undefined),
			notBefore: new FormControl<Date | null | undefined>(undefined),
			notAfter: new FormControl<Date | null | undefined>(undefined),
			eligibleToRenew: new FormControl<string | null | undefined>(undefined),
			revokedAt: new FormControl<Date | null | undefined>(undefined),
			revocationReason: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificateStatus { PENDING_VALIDATION = 0, ISSUED = 1, INACTIVE = 2, EXPIRED = 3, VALIDATION_TIMED_OUT = 4, REVOKED = 5, FAILED = 6 }


	/** Describes the domain name system (DNS) records that you must add to the DNS of your registered domain to validate ownership for an Amazon Lightsail SSL/TLS certificate. */
	export interface DomainValidationRecord {
		domainName?: string;
		resourceRecord?: ResourceRecord;
		dnsRecordCreationState?: DnsRecordCreationState;
		validationStatus?: CertificateDomainValidationStatus;
	}

	/** Describes the domain name system (DNS) records that you must add to the DNS of your registered domain to validate ownership for an Amazon Lightsail SSL/TLS certificate. */
	export interface DomainValidationRecordFormProperties {
		domainName: FormControl<string | null | undefined>,
		validationStatus: FormControl<CertificateDomainValidationStatus | null | undefined>,
	}
	export function CreateDomainValidationRecordFormGroup() {
		return new FormGroup<DomainValidationRecordFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			validationStatus: new FormControl<CertificateDomainValidationStatus | null | undefined>(undefined),
		});

	}


	/** Describes the domain name system (DNS) records to add to your domain's DNS to validate it for an Amazon Lightsail certificate. */
	export interface ResourceRecord {
		name?: string;
		type?: string;
		value?: string;
	}

	/** Describes the domain name system (DNS) records to add to your domain's DNS to validate it for an Amazon Lightsail certificate. */
	export interface ResourceRecordFormProperties {
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateResourceRecordFormGroup() {
		return new FormGroup<ResourceRecordFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes the creation state of the canonical name (CNAME) records that are automatically added by Amazon Lightsail to the DNS of a domain to validate domain ownership for an SSL/TLS certificate.</p> <p>When you create an SSL/TLS certificate for a Lightsail resource, you must add a set of CNAME records to the DNS of the domains for the certificate to validate that you own the domains. Lightsail can automatically add the CNAME records to the DNS of the domain if the DNS zone for the domain exists within your Lightsail account. If automatic record addition fails, or if you manage the DNS of your domain using a third-party service, then you must manually add the CNAME records to the DNS of your domain. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/verify-tls-ssl-certificate-using-dns-cname-https">Verify an SSL/TLS certificate in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface DnsRecordCreationState {
		code?: DnsRecordCreationStateCode;
		message?: string;
	}

	/** <p>Describes the creation state of the canonical name (CNAME) records that are automatically added by Amazon Lightsail to the DNS of a domain to validate domain ownership for an SSL/TLS certificate.</p> <p>When you create an SSL/TLS certificate for a Lightsail resource, you must add a set of CNAME records to the DNS of the domains for the certificate to validate that you own the domains. Lightsail can automatically add the CNAME records to the DNS of the domain if the DNS zone for the domain exists within your Lightsail account. If automatic record addition fails, or if you manage the DNS of your domain using a third-party service, then you must manually add the CNAME records to the DNS of your domain. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/verify-tls-ssl-certificate-using-dns-cname-https">Verify an SSL/TLS certificate in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface DnsRecordCreationStateFormProperties {
		code: FormControl<DnsRecordCreationStateCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateDnsRecordCreationStateFormGroup() {
		return new FormGroup<DnsRecordCreationStateFormProperties>({
			code: new FormControl<DnsRecordCreationStateCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DnsRecordCreationStateCode { SUCCEEDED = 0, STARTED = 1, FAILED = 2 }

	export enum CertificateDomainValidationStatus { PENDING_VALIDATION = 0, FAILED = 1, SUCCESS = 2 }


	/** Describes the status of a SSL/TLS certificate renewal managed by Amazon Lightsail. */
	export interface RenewalSummary {
		domainValidationRecords?: Array<DomainValidationRecord>;
		renewalStatus?: RenewalStatus;
		renewalStatusReason?: string;
		updatedAt?: Date;
	}

	/** Describes the status of a SSL/TLS certificate renewal managed by Amazon Lightsail. */
	export interface RenewalSummaryFormProperties {
		renewalStatus: FormControl<RenewalStatus | null | undefined>,
		renewalStatusReason: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateRenewalSummaryFormGroup() {
		return new FormGroup<RenewalSummaryFormProperties>({
			renewalStatus: new FormControl<RenewalStatus | null | undefined>(undefined),
			renewalStatusReason: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RenewalStatus { PendingAutoRenewal = 0, PendingValidation = 1, Success = 2, Failed = 3 }

	export interface CreateCertificateRequest {

		/** Required */
		certificateName: string;

		/** Required */
		domainName: string;
		subjectAlternativeNames?: Array<string>;
		tags?: Array<Tag>;
	}
	export interface CreateCertificateRequestFormProperties {

		/** Required */
		certificateName: FormControl<string | null | undefined>,

		/** Required */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateCreateCertificateRequestFormGroup() {
		return new FormGroup<CreateCertificateRequestFormProperties>({
			certificateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCloudFormationStackResult {
		operations?: Array<Operation>;
	}
	export interface CreateCloudFormationStackResultFormProperties {
	}
	export function CreateCreateCloudFormationStackResultFormGroup() {
		return new FormGroup<CreateCloudFormationStackResultFormProperties>({
		});

	}

	export interface CreateCloudFormationStackRequest {

		/** Required */
		instances: Array<InstanceEntry>;
	}
	export interface CreateCloudFormationStackRequestFormProperties {
	}
	export function CreateCreateCloudFormationStackRequestFormGroup() {
		return new FormGroup<CreateCloudFormationStackRequestFormProperties>({
		});

	}


	/** Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the <code>create cloud formation stack</code> operation. */
	export interface InstanceEntry {

		/** Required */
		sourceName: string;

		/** Required */
		instanceType: string;

		/** Required */
		portInfoSource: PortInfoSourceType;
		userData?: string;

		/** Required */
		availabilityZone: string;
	}

	/** Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the <code>create cloud formation stack</code> operation. */
	export interface InstanceEntryFormProperties {

		/** Required */
		sourceName: FormControl<string | null | undefined>,

		/** Required */
		instanceType: FormControl<string | null | undefined>,

		/** Required */
		portInfoSource: FormControl<PortInfoSourceType | null | undefined>,
		userData: FormControl<string | null | undefined>,

		/** Required */
		availabilityZone: FormControl<string | null | undefined>,
	}
	export function CreateInstanceEntryFormGroup() {
		return new FormGroup<InstanceEntryFormProperties>({
			sourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portInfoSource: new FormControl<PortInfoSourceType | null | undefined>(undefined, [Validators.required]),
			userData: new FormControl<string | null | undefined>(undefined),
			availabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PortInfoSourceType { DEFAULT = 0, INSTANCE = 1, NONE = 2, CLOSED = 3 }

	export interface CreateContactMethodResult {
		operations?: Array<Operation>;
	}
	export interface CreateContactMethodResultFormProperties {
	}
	export function CreateCreateContactMethodResultFormGroup() {
		return new FormGroup<CreateContactMethodResultFormProperties>({
		});

	}

	export interface CreateContactMethodRequest {

		/** Required */
		protocol: ContactProtocol;

		/** Required */
		contactEndpoint: string;
	}
	export interface CreateContactMethodRequestFormProperties {

		/** Required */
		protocol: FormControl<ContactProtocol | null | undefined>,

		/** Required */
		contactEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactMethodRequestFormGroup() {
		return new FormGroup<CreateContactMethodRequestFormProperties>({
			protocol: new FormControl<ContactProtocol | null | undefined>(undefined, [Validators.required]),
			contactEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContactProtocol { Email = 0, SMS = 1 }

	export interface CreateContainerServiceResult {
		containerService?: ContainerService;
	}
	export interface CreateContainerServiceResultFormProperties {
	}
	export function CreateCreateContainerServiceResultFormGroup() {
		return new FormGroup<CreateContainerServiceResultFormProperties>({
		});

	}


	/** Describes an Amazon Lightsail container service. */
	export interface ContainerService {
		containerServiceName?: string;
		arn?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		tags?: Array<Tag>;
		power?: ContainerServicePowerName;
		powerId?: string;
		state?: ContainerServiceState;
		stateDetail?: ContainerServiceStateDetail;
		scale?: number | null;
		currentDeployment?: ContainerServiceDeployment;
		nextDeployment?: ContainerServiceDeployment;
		isDisabled?: boolean | null;
		principalArn?: string;
		privateDomainName?: string;
		publicDomainNames?: ContainerServicePublicDomains;
		url?: string;
		privateRegistryAccess?: PrivateRegistryAccess;
	}

	/** Describes an Amazon Lightsail container service. */
	export interface ContainerServiceFormProperties {
		containerServiceName: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		power: FormControl<ContainerServicePowerName | null | undefined>,
		powerId: FormControl<string | null | undefined>,
		state: FormControl<ContainerServiceState | null | undefined>,
		scale: FormControl<number | null | undefined>,
		isDisabled: FormControl<boolean | null | undefined>,
		principalArn: FormControl<string | null | undefined>,
		privateDomainName: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateContainerServiceFormGroup() {
		return new FormGroup<ContainerServiceFormProperties>({
			containerServiceName: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			power: new FormControl<ContainerServicePowerName | null | undefined>(undefined),
			powerId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ContainerServiceState | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
			isDisabled: new FormControl<boolean | null | undefined>(undefined),
			principalArn: new FormControl<string | null | undefined>(undefined),
			privateDomainName: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContainerServicePowerName { nano = 0, micro = 1, small = 2, medium = 3, large = 4, xlarge = 5 }

	export enum ContainerServiceState { PENDING = 0, READY = 1, RUNNING = 2, UPDATING = 3, DELETING = 4, DISABLED = 5, DEPLOYING = 6 }


	/** Describes the current state of a container service. */
	export interface ContainerServiceStateDetail {
		code?: ContainerServiceStateDetailCode;
		message?: string;
	}

	/** Describes the current state of a container service. */
	export interface ContainerServiceStateDetailFormProperties {
		code: FormControl<ContainerServiceStateDetailCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateContainerServiceStateDetailFormGroup() {
		return new FormGroup<ContainerServiceStateDetailFormProperties>({
			code: new FormControl<ContainerServiceStateDetailCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContainerServiceStateDetailCode { CREATING_SYSTEM_RESOURCES = 0, CREATING_NETWORK_INFRASTRUCTURE = 1, PROVISIONING_CERTIFICATE = 2, PROVISIONING_SERVICE = 3, CREATING_DEPLOYMENT = 4, EVALUATING_HEALTH_CHECK = 5, ACTIVATING_DEPLOYMENT = 6, CERTIFICATE_LIMIT_EXCEEDED = 7, UNKNOWN_ERROR = 8 }


	/** <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p> */
	export interface ContainerServiceDeployment {
		version?: number | null;
		state?: ContainerServiceDeploymentState;
		containers?: ContainerMap;
		publicEndpoint?: ContainerServiceEndpoint;
		createdAt?: Date;
	}

	/** <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p> */
	export interface ContainerServiceDeploymentFormProperties {
		version: FormControl<number | null | undefined>,
		state: FormControl<ContainerServiceDeploymentState | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateContainerServiceDeploymentFormGroup() {
		return new FormGroup<ContainerServiceDeploymentFormProperties>({
			version: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<ContainerServiceDeploymentState | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ContainerServiceDeploymentState { ACTIVATING = 0, ACTIVE = 1, INACTIVE = 2, FAILED = 3 }

	export interface ContainerMap {
	}
	export interface ContainerMapFormProperties {
	}
	export function CreateContainerMapFormGroup() {
		return new FormGroup<ContainerMapFormProperties>({
		});

	}


	/** Describes the public endpoint configuration of a deployment of an Amazon Lightsail container service. */
	export interface ContainerServiceEndpoint {
		containerName?: string;
		containerPort?: number | null;
		healthCheck?: ContainerServiceHealthCheckConfig;
	}

	/** Describes the public endpoint configuration of a deployment of an Amazon Lightsail container service. */
	export interface ContainerServiceEndpointFormProperties {
		containerName: FormControl<string | null | undefined>,
		containerPort: FormControl<number | null | undefined>,
	}
	export function CreateContainerServiceEndpointFormGroup() {
		return new FormGroup<ContainerServiceEndpointFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined),
			containerPort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the health check configuration of an Amazon Lightsail container service. */
	export interface ContainerServiceHealthCheckConfig {
		healthyThreshold?: number | null;
		unhealthyThreshold?: number | null;
		timeoutSeconds?: number | null;
		intervalSeconds?: number | null;
		path?: string;
		successCodes?: string;
	}

	/** Describes the health check configuration of an Amazon Lightsail container service. */
	export interface ContainerServiceHealthCheckConfigFormProperties {
		healthyThreshold: FormControl<number | null | undefined>,
		unhealthyThreshold: FormControl<number | null | undefined>,
		timeoutSeconds: FormControl<number | null | undefined>,
		intervalSeconds: FormControl<number | null | undefined>,
		path: FormControl<string | null | undefined>,
		successCodes: FormControl<string | null | undefined>,
	}
	export function CreateContainerServiceHealthCheckConfigFormGroup() {
		return new FormGroup<ContainerServiceHealthCheckConfigFormProperties>({
			healthyThreshold: new FormControl<number | null | undefined>(undefined),
			unhealthyThreshold: new FormControl<number | null | undefined>(undefined),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined),
			intervalSeconds: new FormControl<number | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			successCodes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainerServicePublicDomains {
	}
	export interface ContainerServicePublicDomainsFormProperties {
	}
	export function CreateContainerServicePublicDomainsFormGroup() {
		return new FormGroup<ContainerServicePublicDomainsFormProperties>({
		});

	}


	/** <p>Describes the configuration for an Amazon Lightsail container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface PrivateRegistryAccess {
		ecrImagePullerRole?: ContainerServiceECRImagePullerRole;
	}

	/** <p>Describes the configuration for an Amazon Lightsail container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface PrivateRegistryAccessFormProperties {
	}
	export function CreatePrivateRegistryAccessFormGroup() {
		return new FormGroup<PrivateRegistryAccessFormProperties>({
		});

	}


	/** <p>Describes the activation status of the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>When activated, Lightsail creates an Identity and Access Management (IAM) role for the specified Lightsail container service. You can use the ARN of the role to create a trust relationship between your Lightsail container service and an Amazon ECR private repository in your Amazon Web Services account. This allows your container service to pull images from Amazon ECR private repositories. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface ContainerServiceECRImagePullerRole {
		isActive?: boolean | null;
		principalArn?: string;
	}

	/** <p>Describes the activation status of the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>When activated, Lightsail creates an Identity and Access Management (IAM) role for the specified Lightsail container service. You can use the ARN of the role to create a trust relationship between your Lightsail container service and an Amazon ECR private repository in your Amazon Web Services account. This allows your container service to pull images from Amazon ECR private repositories. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface ContainerServiceECRImagePullerRoleFormProperties {
		isActive: FormControl<boolean | null | undefined>,
		principalArn: FormControl<string | null | undefined>,
	}
	export function CreateContainerServiceECRImagePullerRoleFormGroup() {
		return new FormGroup<ContainerServiceECRImagePullerRoleFormProperties>({
			isActive: new FormControl<boolean | null | undefined>(undefined),
			principalArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateContainerServiceRequest {

		/** Required */
		serviceName: string;

		/** Required */
		power: ContainerServicePowerName;

		/** Required */
		scale: number;
		tags?: Array<Tag>;
		publicDomainNames?: ContainerServicePublicDomains;
		deployment?: ContainerServiceDeploymentRequest;
		privateRegistryAccess?: PrivateRegistryAccessRequest;
	}
	export interface CreateContainerServiceRequestFormProperties {

		/** Required */
		serviceName: FormControl<string | null | undefined>,

		/** Required */
		power: FormControl<ContainerServicePowerName | null | undefined>,

		/** Required */
		scale: FormControl<number | null | undefined>,
	}
	export function CreateCreateContainerServiceRequestFormGroup() {
		return new FormGroup<CreateContainerServiceRequestFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			power: new FormControl<ContainerServicePowerName | null | undefined>(undefined, [Validators.required]),
			scale: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p> */
	export interface ContainerServiceDeploymentRequest {
		containers?: ContainerMap;
		publicEndpoint?: EndpointRequest;
	}

	/** <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p> */
	export interface ContainerServiceDeploymentRequestFormProperties {
	}
	export function CreateContainerServiceDeploymentRequestFormGroup() {
		return new FormGroup<ContainerServiceDeploymentRequestFormProperties>({
		});

	}


	/** Describes the settings of a public endpoint for an Amazon Lightsail container service. */
	export interface EndpointRequest {

		/** Required */
		containerName: string;

		/** Required */
		containerPort: number;
		healthCheck?: ContainerServiceHealthCheckConfig;
	}

	/** Describes the settings of a public endpoint for an Amazon Lightsail container service. */
	export interface EndpointRequestFormProperties {

		/** Required */
		containerName: FormControl<string | null | undefined>,

		/** Required */
		containerPort: FormControl<number | null | undefined>,
	}
	export function CreateEndpointRequestFormGroup() {
		return new FormGroup<EndpointRequestFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			containerPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Describes a request to configure an Amazon Lightsail container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface PrivateRegistryAccessRequest {
		ecrImagePullerRole?: ContainerServiceECRImagePullerRoleRequest;
	}

	/** <p>Describes a request to configure an Amazon Lightsail container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface PrivateRegistryAccessRequestFormProperties {
	}
	export function CreatePrivateRegistryAccessRequestFormGroup() {
		return new FormGroup<PrivateRegistryAccessRequestFormProperties>({
		});

	}


	/** <p>Describes a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>When activated, Lightsail creates an Identity and Access Management (IAM) role for the specified Lightsail container service. You can use the ARN of the role to create a trust relationship between your Lightsail container service and an Amazon ECR private repository in your Amazon Web Services account. This allows your container service to pull images from Amazon ECR private repositories. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface ContainerServiceECRImagePullerRoleRequest {
		isActive?: boolean | null;
	}

	/** <p>Describes a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>When activated, Lightsail creates an Identity and Access Management (IAM) role for the specified Lightsail container service. You can use the ARN of the role to create a trust relationship between your Lightsail container service and an Amazon ECR private repository in your Amazon Web Services account. This allows your container service to pull images from Amazon ECR private repositories. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface ContainerServiceECRImagePullerRoleRequestFormProperties {
		isActive: FormControl<boolean | null | undefined>,
	}
	export function CreateContainerServiceECRImagePullerRoleRequestFormGroup() {
		return new FormGroup<ContainerServiceECRImagePullerRoleRequestFormProperties>({
			isActive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateContainerServiceDeploymentResult {
		containerService?: ContainerService;
	}
	export interface CreateContainerServiceDeploymentResultFormProperties {
	}
	export function CreateCreateContainerServiceDeploymentResultFormGroup() {
		return new FormGroup<CreateContainerServiceDeploymentResultFormProperties>({
		});

	}

	export interface CreateContainerServiceDeploymentRequest {

		/** Required */
		serviceName: string;
		containers?: ContainerMap;
		publicEndpoint?: EndpointRequest;
	}
	export interface CreateContainerServiceDeploymentRequestFormProperties {

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateContainerServiceDeploymentRequestFormGroup() {
		return new FormGroup<CreateContainerServiceDeploymentRequestFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateContainerServiceRegistryLoginResult {
		registryLogin?: ContainerServiceRegistryLogin;
	}
	export interface CreateContainerServiceRegistryLoginResultFormProperties {
	}
	export function CreateCreateContainerServiceRegistryLoginResultFormGroup() {
		return new FormGroup<CreateContainerServiceRegistryLoginResultFormProperties>({
		});

	}


	/** Describes the sign-in credentials for the container image registry of an Amazon Lightsail account. */
	export interface ContainerServiceRegistryLogin {
		username?: string;
		password?: string;
		expiresAt?: Date;
		registry?: string;
	}

	/** Describes the sign-in credentials for the container image registry of an Amazon Lightsail account. */
	export interface ContainerServiceRegistryLoginFormProperties {
		username: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		expiresAt: FormControl<Date | null | undefined>,
		registry: FormControl<string | null | undefined>,
	}
	export function CreateContainerServiceRegistryLoginFormGroup() {
		return new FormGroup<ContainerServiceRegistryLoginFormProperties>({
			username: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			expiresAt: new FormControl<Date | null | undefined>(undefined),
			registry: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateContainerServiceRegistryLoginRequest {
	}
	export interface CreateContainerServiceRegistryLoginRequestFormProperties {
	}
	export function CreateCreateContainerServiceRegistryLoginRequestFormGroup() {
		return new FormGroup<CreateContainerServiceRegistryLoginRequestFormProperties>({
		});

	}

	export interface CreateDiskResult {
		operations?: Array<Operation>;
	}
	export interface CreateDiskResultFormProperties {
	}
	export function CreateCreateDiskResultFormGroup() {
		return new FormGroup<CreateDiskResultFormProperties>({
		});

	}

	export interface CreateDiskRequest {

		/** Required */
		diskName: string;

		/** Required */
		availabilityZone: string;

		/** Required */
		sizeInGb: number;
		tags?: Array<Tag>;
		addOns?: Array<AddOnRequest>;
	}
	export interface CreateDiskRequestFormProperties {

		/** Required */
		diskName: FormControl<string | null | undefined>,

		/** Required */
		availabilityZone: FormControl<string | null | undefined>,

		/** Required */
		sizeInGb: FormControl<number | null | undefined>,
	}
	export function CreateCreateDiskRequestFormGroup() {
		return new FormGroup<CreateDiskRequestFormProperties>({
			diskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			availabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sizeInGb: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.</p> <note> <p>An additional cost may be associated with enabling add-ons. For more information, see the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing page</a>.</p> </note> */
	export interface AddOnRequest {

		/** Required */
		addOnType: AddOnType;
		autoSnapshotAddOnRequest?: AutoSnapshotAddOnRequest;
		stopInstanceOnIdleRequest?: StopInstanceOnIdleRequest;
	}

	/** <p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.</p> <note> <p>An additional cost may be associated with enabling add-ons. For more information, see the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing page</a>.</p> </note> */
	export interface AddOnRequestFormProperties {

		/** Required */
		addOnType: FormControl<AddOnType | null | undefined>,
	}
	export function CreateAddOnRequestFormGroup() {
		return new FormGroup<AddOnRequestFormProperties>({
			addOnType: new FormControl<AddOnType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddOnType { AutoSnapshot = 0, StopInstanceOnIdle = 1 }


	/** <p>Describes a request to enable or modify the automatic snapshot add-on for an Amazon Lightsail instance or disk.</p> <p>When you modify the automatic snapshot time for a resource, it is typically effective immediately except under the following conditions:</p> <ul> <li> <p>If an automatic snapshot has been created for the current day, and you change the snapshot time to a later time of day, then the new snapshot time will be effective the following day. This ensures that two snapshots are not created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to an earlier time of day, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to a time that is within 30 minutes from your current time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> <li> <p>If an automatic snapshot is scheduled to be created within 30 minutes from your current time and you change the snapshot time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> </ul> */
	export interface AutoSnapshotAddOnRequest {
		snapshotTimeOfDay?: string;
	}

	/** <p>Describes a request to enable or modify the automatic snapshot add-on for an Amazon Lightsail instance or disk.</p> <p>When you modify the automatic snapshot time for a resource, it is typically effective immediately except under the following conditions:</p> <ul> <li> <p>If an automatic snapshot has been created for the current day, and you change the snapshot time to a later time of day, then the new snapshot time will be effective the following day. This ensures that two snapshots are not created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to an earlier time of day, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to a time that is within 30 minutes from your current time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> <li> <p>If an automatic snapshot is scheduled to be created within 30 minutes from your current time and you change the snapshot time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> </ul> */
	export interface AutoSnapshotAddOnRequestFormProperties {
		snapshotTimeOfDay: FormControl<string | null | undefined>,
	}
	export function CreateAutoSnapshotAddOnRequestFormGroup() {
		return new FormGroup<AutoSnapshotAddOnRequestFormProperties>({
			snapshotTimeOfDay: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes a request to create or edit the <code>StopInstanceOnIdle</code> add-on.</p> <important> <p>This add-on only applies to Lightsail for Research resources.</p> </important> */
	export interface StopInstanceOnIdleRequest {
		threshold?: string;
		duration?: string;
	}

	/** <p>Describes a request to create or edit the <code>StopInstanceOnIdle</code> add-on.</p> <important> <p>This add-on only applies to Lightsail for Research resources.</p> </important> */
	export interface StopInstanceOnIdleRequestFormProperties {
		threshold: FormControl<string | null | undefined>,
		duration: FormControl<string | null | undefined>,
	}
	export function CreateStopInstanceOnIdleRequestFormGroup() {
		return new FormGroup<StopInstanceOnIdleRequestFormProperties>({
			threshold: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDiskFromSnapshotResult {
		operations?: Array<Operation>;
	}
	export interface CreateDiskFromSnapshotResultFormProperties {
	}
	export function CreateCreateDiskFromSnapshotResultFormGroup() {
		return new FormGroup<CreateDiskFromSnapshotResultFormProperties>({
		});

	}

	export interface CreateDiskFromSnapshotRequest {

		/** Required */
		diskName: string;
		diskSnapshotName?: string;

		/** Required */
		availabilityZone: string;

		/** Required */
		sizeInGb: number;
		tags?: Array<Tag>;
		addOns?: Array<AddOnRequest>;
		sourceDiskName?: string;
		restoreDate?: string;
		useLatestRestorableAutoSnapshot?: boolean | null;
	}
	export interface CreateDiskFromSnapshotRequestFormProperties {

		/** Required */
		diskName: FormControl<string | null | undefined>,
		diskSnapshotName: FormControl<string | null | undefined>,

		/** Required */
		availabilityZone: FormControl<string | null | undefined>,

		/** Required */
		sizeInGb: FormControl<number | null | undefined>,
		sourceDiskName: FormControl<string | null | undefined>,
		restoreDate: FormControl<string | null | undefined>,
		useLatestRestorableAutoSnapshot: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDiskFromSnapshotRequestFormGroup() {
		return new FormGroup<CreateDiskFromSnapshotRequestFormProperties>({
			diskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			diskSnapshotName: new FormControl<string | null | undefined>(undefined),
			availabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sizeInGb: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sourceDiskName: new FormControl<string | null | undefined>(undefined),
			restoreDate: new FormControl<string | null | undefined>(undefined),
			useLatestRestorableAutoSnapshot: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDiskSnapshotResult {
		operations?: Array<Operation>;
	}
	export interface CreateDiskSnapshotResultFormProperties {
	}
	export function CreateCreateDiskSnapshotResultFormGroup() {
		return new FormGroup<CreateDiskSnapshotResultFormProperties>({
		});

	}

	export interface CreateDiskSnapshotRequest {
		diskName?: string;

		/** Required */
		diskSnapshotName: string;
		instanceName?: string;
		tags?: Array<Tag>;
	}
	export interface CreateDiskSnapshotRequestFormProperties {
		diskName: FormControl<string | null | undefined>,

		/** Required */
		diskSnapshotName: FormControl<string | null | undefined>,
		instanceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDiskSnapshotRequestFormGroup() {
		return new FormGroup<CreateDiskSnapshotRequestFormProperties>({
			diskName: new FormControl<string | null | undefined>(undefined),
			diskSnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instanceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDistributionResult {
		distribution?: LightsailDistribution;
		operation?: Operation;
	}
	export interface CreateDistributionResultFormProperties {
	}
	export function CreateCreateDistributionResultFormGroup() {
		return new FormGroup<CreateDistributionResultFormProperties>({
		});

	}


	/** Describes an Amazon Lightsail content delivery network (CDN) distribution. */
	export interface LightsailDistribution {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		alternativeDomainNames?: Array<string>;
		status?: string;
		isEnabled?: boolean | null;
		domainName?: string;
		bundleId?: string;
		certificateName?: string;
		origin?: Origin;
		originPublicDNS?: string;
		defaultCacheBehavior?: CacheBehavior;
		cacheBehaviorSettings?: CacheSettings;
		cacheBehaviors?: Array<CacheBehaviorPerPath>;
		ableToUpdateBundle?: boolean | null;
		ipAddressType?: IpAddressType;
		tags?: Array<Tag>;
	}

	/** Describes an Amazon Lightsail content delivery network (CDN) distribution. */
	export interface LightsailDistributionFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		status: FormControl<string | null | undefined>,
		isEnabled: FormControl<boolean | null | undefined>,
		domainName: FormControl<string | null | undefined>,
		bundleId: FormControl<string | null | undefined>,
		certificateName: FormControl<string | null | undefined>,
		originPublicDNS: FormControl<string | null | undefined>,
		ableToUpdateBundle: FormControl<boolean | null | undefined>,
		ipAddressType: FormControl<IpAddressType | null | undefined>,
	}
	export function CreateLightsailDistributionFormGroup() {
		return new FormGroup<LightsailDistributionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
			bundleId: new FormControl<string | null | undefined>(undefined),
			certificateName: new FormControl<string | null | undefined>(undefined),
			originPublicDNS: new FormControl<string | null | undefined>(undefined),
			ableToUpdateBundle: new FormControl<boolean | null | undefined>(undefined),
			ipAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
		});

	}


	/** <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>An origin can be a Lightsail instance, bucket, or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.</p> */
	export interface Origin {
		name?: string;
		resourceType?: ResourceType;
		regionName?: RegionName;
		protocolPolicy?: OriginProtocolPolicyEnum;
	}

	/** <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>An origin can be a Lightsail instance, bucket, or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.</p> */
	export interface OriginFormProperties {
		name: FormControl<string | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		regionName: FormControl<RegionName | null | undefined>,
		protocolPolicy: FormControl<OriginProtocolPolicyEnum | null | undefined>,
	}
	export function CreateOriginFormGroup() {
		return new FormGroup<OriginFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			regionName: new FormControl<RegionName | null | undefined>(undefined),
			protocolPolicy: new FormControl<OriginProtocolPolicyEnum | null | undefined>(undefined),
		});

	}

	export enum OriginProtocolPolicyEnum { 'http-only' = 0, 'https-only' = 1 }


	/** Describes the default cache behavior of an Amazon Lightsail content delivery network (CDN) distribution. */
	export interface CacheBehavior {
		behavior?: BehaviorEnum;
	}

	/** Describes the default cache behavior of an Amazon Lightsail content delivery network (CDN) distribution. */
	export interface CacheBehaviorFormProperties {
		behavior: FormControl<BehaviorEnum | null | undefined>,
	}
	export function CreateCacheBehaviorFormGroup() {
		return new FormGroup<CacheBehaviorFormProperties>({
			behavior: new FormControl<BehaviorEnum | null | undefined>(undefined),
		});

	}

	export enum BehaviorEnum { 'dont-cache' = 0, cache = 1 }


	/** <p>Describes the cache settings of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>These settings apply only to your distribution's <code>cacheBehaviors</code> (including the <code>defaultCacheBehavior</code>) that have a <code>behavior</code> of <code>cache</code>.</p> */
	export interface CacheSettings {
		defaultTTL?: number | null;
		minimumTTL?: number | null;
		maximumTTL?: number | null;
		allowedHTTPMethods?: string;
		cachedHTTPMethods?: string;
		forwardedCookies?: CookieObject;
		forwardedHeaders?: HeaderObject;
		forwardedQueryStrings?: QueryStringObject;
	}

	/** <p>Describes the cache settings of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>These settings apply only to your distribution's <code>cacheBehaviors</code> (including the <code>defaultCacheBehavior</code>) that have a <code>behavior</code> of <code>cache</code>.</p> */
	export interface CacheSettingsFormProperties {
		defaultTTL: FormControl<number | null | undefined>,
		minimumTTL: FormControl<number | null | undefined>,
		maximumTTL: FormControl<number | null | undefined>,
		allowedHTTPMethods: FormControl<string | null | undefined>,
		cachedHTTPMethods: FormControl<string | null | undefined>,
	}
	export function CreateCacheSettingsFormGroup() {
		return new FormGroup<CacheSettingsFormProperties>({
			defaultTTL: new FormControl<number | null | undefined>(undefined),
			minimumTTL: new FormControl<number | null | undefined>(undefined),
			maximumTTL: new FormControl<number | null | undefined>(undefined),
			allowedHTTPMethods: new FormControl<string | null | undefined>(undefined),
			cachedHTTPMethods: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes whether an Amazon Lightsail content delivery network (CDN) distribution forwards cookies to the origin and, if so, which ones.</p> <p>For the cookies that you specify, your distribution caches separate versions of the specified content based on the cookie values in viewer requests.</p> */
	export interface CookieObject {
		option?: ForwardValues;
		cookiesAllowList?: Array<string>;
	}

	/** <p>Describes whether an Amazon Lightsail content delivery network (CDN) distribution forwards cookies to the origin and, if so, which ones.</p> <p>For the cookies that you specify, your distribution caches separate versions of the specified content based on the cookie values in viewer requests.</p> */
	export interface CookieObjectFormProperties {
		option: FormControl<ForwardValues | null | undefined>,
	}
	export function CreateCookieObjectFormGroup() {
		return new FormGroup<CookieObjectFormProperties>({
			option: new FormControl<ForwardValues | null | undefined>(undefined),
		});

	}

	export enum ForwardValues { none = 0, 'allow-list' = 1, all = 2 }


	/** <p>Describes the request headers that a Lightsail distribution bases caching on.</p> <p>For the headers that you specify, your distribution caches separate versions of the specified content based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of either <code>acme</code> or <code>apex</code>, and you configure your distribution to cache your content based on values in the <code>product</code> header. Your distribution forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. </p> */
	export interface HeaderObject {
		option?: ForwardValues;
		headersAllowList?: Array<HeaderEnum>;
	}

	/** <p>Describes the request headers that a Lightsail distribution bases caching on.</p> <p>For the headers that you specify, your distribution caches separate versions of the specified content based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of either <code>acme</code> or <code>apex</code>, and you configure your distribution to cache your content based on values in the <code>product</code> header. Your distribution forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. </p> */
	export interface HeaderObjectFormProperties {
		option: FormControl<ForwardValues | null | undefined>,
	}
	export function CreateHeaderObjectFormGroup() {
		return new FormGroup<HeaderObjectFormProperties>({
			option: new FormControl<ForwardValues | null | undefined>(undefined),
		});

	}

	export enum HeaderEnum { Accept = 0, 'Accept-Charset' = 1, 'Accept-Datetime' = 2, 'Accept-Encoding' = 3, 'Accept-Language' = 4, Authorization = 5, 'CloudFront-Forwarded-Proto' = 6, 'CloudFront-Is-Desktop-Viewer' = 7, 'CloudFront-Is-Mobile-Viewer' = 8, 'CloudFront-Is-SmartTV-Viewer' = 9, 'CloudFront-Is-Tablet-Viewer' = 10, 'CloudFront-Viewer-Country' = 11, Host = 12, Origin = 13, Referer = 14 }


	/** <p>Describes the query string parameters that an Amazon Lightsail content delivery network (CDN) distribution to bases caching on.</p> <p>For the query strings that you specify, your distribution caches separate versions of the specified content based on the query string values in viewer requests.</p> */
	export interface QueryStringObject {
		option?: boolean | null;
		queryStringsAllowList?: Array<string>;
	}

	/** <p>Describes the query string parameters that an Amazon Lightsail content delivery network (CDN) distribution to bases caching on.</p> <p>For the query strings that you specify, your distribution caches separate versions of the specified content based on the query string values in viewer requests.</p> */
	export interface QueryStringObjectFormProperties {
		option: FormControl<boolean | null | undefined>,
	}
	export function CreateQueryStringObjectFormGroup() {
		return new FormGroup<QueryStringObjectFormProperties>({
			option: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Describes the per-path cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A per-path cache behavior is used to override, or add an exception to, the default cache behavior of a distribution. For example, if the <code>cacheBehavior</code> is set to <code>cache</code>, then a per-path cache behavior can be used to specify a directory, file, or file type that your distribution will cache. Alternately, if the distribution's <code>cacheBehavior</code> is <code>dont-cache</code>, then a per-path cache behavior can be used to specify a directory, file, or file type that your distribution will not cache.</p> */
	export interface CacheBehaviorPerPath {
		path?: string;
		behavior?: BehaviorEnum;
	}

	/** <p>Describes the per-path cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A per-path cache behavior is used to override, or add an exception to, the default cache behavior of a distribution. For example, if the <code>cacheBehavior</code> is set to <code>cache</code>, then a per-path cache behavior can be used to specify a directory, file, or file type that your distribution will cache. Alternately, if the distribution's <code>cacheBehavior</code> is <code>dont-cache</code>, then a per-path cache behavior can be used to specify a directory, file, or file type that your distribution will not cache.</p> */
	export interface CacheBehaviorPerPathFormProperties {
		path: FormControl<string | null | undefined>,
		behavior: FormControl<BehaviorEnum | null | undefined>,
	}
	export function CreateCacheBehaviorPerPathFormGroup() {
		return new FormGroup<CacheBehaviorPerPathFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			behavior: new FormControl<BehaviorEnum | null | undefined>(undefined),
		});

	}

	export enum IpAddressType { dualstack = 0, ipv4 = 1 }

	export interface CreateDistributionRequest {

		/** Required */
		distributionName: string;

		/** Required */
		origin: InputOrigin;

		/** Required */
		defaultCacheBehavior: CacheBehavior;
		cacheBehaviorSettings?: CacheSettings;
		cacheBehaviors?: Array<CacheBehaviorPerPath>;

		/** Required */
		bundleId: string;
		ipAddressType?: IpAddressType;
		tags?: Array<Tag>;
	}
	export interface CreateDistributionRequestFormProperties {

		/** Required */
		distributionName: FormControl<string | null | undefined>,

		/** Required */
		bundleId: FormControl<string | null | undefined>,
		ipAddressType: FormControl<IpAddressType | null | undefined>,
	}
	export function CreateCreateDistributionRequestFormGroup() {
		return new FormGroup<CreateDistributionRequestFormProperties>({
			distributionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bundleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ipAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
		});

	}


	/** <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>An origin can be a Lightsail instance, bucket, or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.</p> */
	export interface InputOrigin {
		name?: string;
		regionName?: RegionName;
		protocolPolicy?: OriginProtocolPolicyEnum;
	}

	/** <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>An origin can be a Lightsail instance, bucket, or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.</p> */
	export interface InputOriginFormProperties {
		name: FormControl<string | null | undefined>,
		regionName: FormControl<RegionName | null | undefined>,
		protocolPolicy: FormControl<OriginProtocolPolicyEnum | null | undefined>,
	}
	export function CreateInputOriginFormGroup() {
		return new FormGroup<InputOriginFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<RegionName | null | undefined>(undefined),
			protocolPolicy: new FormControl<OriginProtocolPolicyEnum | null | undefined>(undefined),
		});

	}

	export interface CreateDomainResult {
		operation?: Operation;
	}
	export interface CreateDomainResultFormProperties {
	}
	export function CreateCreateDomainResultFormGroup() {
		return new FormGroup<CreateDomainResultFormProperties>({
		});

	}

	export interface CreateDomainRequest {

		/** Required */
		domainName: string;
		tags?: Array<Tag>;
	}
	export interface CreateDomainRequestFormProperties {

		/** Required */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainRequestFormGroup() {
		return new FormGroup<CreateDomainRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDomainEntryResult {
		operation?: Operation;
	}
	export interface CreateDomainEntryResultFormProperties {
	}
	export function CreateCreateDomainEntryResultFormGroup() {
		return new FormGroup<CreateDomainEntryResultFormProperties>({
		});

	}

	export interface CreateDomainEntryRequest {

		/** Required */
		domainName: string;

		/** Required */
		domainEntry: DomainEntry;
	}
	export interface CreateDomainEntryRequestFormProperties {

		/** Required */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainEntryRequestFormGroup() {
		return new FormGroup<CreateDomainEntryRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a domain recordset entry. */
	export interface DomainEntry {
		id?: string;
		name?: string;
		target?: string;
		isAlias?: boolean | null;
		type?: string;
		options?: DomainEntryOptions;
	}

	/** Describes a domain recordset entry. */
	export interface DomainEntryFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		target: FormControl<string | null | undefined>,
		isAlias: FormControl<boolean | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateDomainEntryFormGroup() {
		return new FormGroup<DomainEntryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			isAlias: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainEntryOptions {
	}
	export interface DomainEntryOptionsFormProperties {
	}
	export function CreateDomainEntryOptionsFormGroup() {
		return new FormGroup<DomainEntryOptionsFormProperties>({
		});

	}

	export interface CreateGUISessionAccessDetailsResult {
		resourceName?: string;
		status?: Status;
		percentageComplete?: number | null;
		failureReason?: string;
		sessions?: Array<Session>;
	}
	export interface CreateGUISessionAccessDetailsResultFormProperties {
		resourceName: FormControl<string | null | undefined>,
		status: FormControl<Status | null | undefined>,
		percentageComplete: FormControl<number | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateCreateGUISessionAccessDetailsResultFormGroup() {
		return new FormGroup<CreateGUISessionAccessDetailsResultFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<Status | null | undefined>(undefined),
			percentageComplete: new FormControl<number | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Status { startExpired = 0, notStarted = 1, started = 2, starting = 3, stopped = 4, stopping = 5, settingUpInstance = 6, failedInstanceCreation = 7, failedStartingGUISession = 8, failedStoppingGUISession = 9 }


	/** Describes a web-based, remote graphical user interface (GUI), NICE DCV session. The session is used to access a virtual computer’s operating system or application. */
	export interface Session {
		name?: string;
		url?: string;
		isPrimary?: boolean | null;
	}

	/** Describes a web-based, remote graphical user interface (GUI), NICE DCV session. The session is used to access a virtual computer’s operating system or application. */
	export interface SessionFormProperties {
		name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		isPrimary: FormControl<boolean | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			isPrimary: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateGUISessionAccessDetailsRequest {

		/** Required */
		resourceName: string;
	}
	export interface CreateGUISessionAccessDetailsRequestFormProperties {

		/** Required */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateGUISessionAccessDetailsRequestFormGroup() {
		return new FormGroup<CreateGUISessionAccessDetailsRequestFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateInstanceSnapshotResult {
		operations?: Array<Operation>;
	}
	export interface CreateInstanceSnapshotResultFormProperties {
	}
	export function CreateCreateInstanceSnapshotResultFormGroup() {
		return new FormGroup<CreateInstanceSnapshotResultFormProperties>({
		});

	}

	export interface CreateInstanceSnapshotRequest {

		/** Required */
		instanceSnapshotName: string;

		/** Required */
		instanceName: string;
		tags?: Array<Tag>;
	}
	export interface CreateInstanceSnapshotRequestFormProperties {

		/** Required */
		instanceSnapshotName: FormControl<string | null | undefined>,

		/** Required */
		instanceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateInstanceSnapshotRequestFormGroup() {
		return new FormGroup<CreateInstanceSnapshotRequestFormProperties>({
			instanceSnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateInstancesResult {
		operations?: Array<Operation>;
	}
	export interface CreateInstancesResultFormProperties {
	}
	export function CreateCreateInstancesResultFormGroup() {
		return new FormGroup<CreateInstancesResultFormProperties>({
		});

	}

	export interface CreateInstancesRequest {

		/** Required */
		instanceNames: Array<string>;

		/** Required */
		availabilityZone: string;
		customImageName?: string;

		/** Required */
		blueprintId: string;

		/** Required */
		bundleId: string;
		userData?: string;
		keyPairName?: string;
		tags?: Array<Tag>;
		addOns?: Array<AddOnRequest>;
		ipAddressType?: IpAddressType;
	}
	export interface CreateInstancesRequestFormProperties {

		/** Required */
		availabilityZone: FormControl<string | null | undefined>,
		customImageName: FormControl<string | null | undefined>,

		/** Required */
		blueprintId: FormControl<string | null | undefined>,

		/** Required */
		bundleId: FormControl<string | null | undefined>,
		userData: FormControl<string | null | undefined>,
		keyPairName: FormControl<string | null | undefined>,
		ipAddressType: FormControl<IpAddressType | null | undefined>,
	}
	export function CreateCreateInstancesRequestFormGroup() {
		return new FormGroup<CreateInstancesRequestFormProperties>({
			availabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			customImageName: new FormControl<string | null | undefined>(undefined),
			blueprintId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bundleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userData: new FormControl<string | null | undefined>(undefined),
			keyPairName: new FormControl<string | null | undefined>(undefined),
			ipAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
		});

	}

	export interface CreateInstancesFromSnapshotResult {
		operations?: Array<Operation>;
	}
	export interface CreateInstancesFromSnapshotResultFormProperties {
	}
	export function CreateCreateInstancesFromSnapshotResultFormGroup() {
		return new FormGroup<CreateInstancesFromSnapshotResultFormProperties>({
		});

	}

	export interface CreateInstancesFromSnapshotRequest {

		/** Required */
		instanceNames: Array<string>;
		attachedDiskMapping?: AttachedDiskMap;

		/** Required */
		availabilityZone: string;
		instanceSnapshotName?: string;

		/** Required */
		bundleId: string;
		userData?: string;
		keyPairName?: string;
		tags?: Array<Tag>;
		addOns?: Array<AddOnRequest>;
		ipAddressType?: IpAddressType;
		sourceInstanceName?: string;
		restoreDate?: string;
		useLatestRestorableAutoSnapshot?: boolean | null;
	}
	export interface CreateInstancesFromSnapshotRequestFormProperties {

		/** Required */
		availabilityZone: FormControl<string | null | undefined>,
		instanceSnapshotName: FormControl<string | null | undefined>,

		/** Required */
		bundleId: FormControl<string | null | undefined>,
		userData: FormControl<string | null | undefined>,
		keyPairName: FormControl<string | null | undefined>,
		ipAddressType: FormControl<IpAddressType | null | undefined>,
		sourceInstanceName: FormControl<string | null | undefined>,
		restoreDate: FormControl<string | null | undefined>,
		useLatestRestorableAutoSnapshot: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateInstancesFromSnapshotRequestFormGroup() {
		return new FormGroup<CreateInstancesFromSnapshotRequestFormProperties>({
			availabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instanceSnapshotName: new FormControl<string | null | undefined>(undefined),
			bundleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userData: new FormControl<string | null | undefined>(undefined),
			keyPairName: new FormControl<string | null | undefined>(undefined),
			ipAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
			sourceInstanceName: new FormControl<string | null | undefined>(undefined),
			restoreDate: new FormControl<string | null | undefined>(undefined),
			useLatestRestorableAutoSnapshot: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AttachedDiskMap {
	}
	export interface AttachedDiskMapFormProperties {
	}
	export function CreateAttachedDiskMapFormGroup() {
		return new FormGroup<AttachedDiskMapFormProperties>({
		});

	}

	export interface CreateKeyPairResult {
		keyPair?: KeyPair;
		publicKeyBase64?: string;
		privateKeyBase64?: string;
		operation?: Operation;
	}
	export interface CreateKeyPairResultFormProperties {
		publicKeyBase64: FormControl<string | null | undefined>,
		privateKeyBase64: FormControl<string | null | undefined>,
	}
	export function CreateCreateKeyPairResultFormGroup() {
		return new FormGroup<CreateKeyPairResultFormProperties>({
			publicKeyBase64: new FormControl<string | null | undefined>(undefined),
			privateKeyBase64: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an SSH key pair. */
	export interface KeyPair {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		tags?: Array<Tag>;
		fingerprint?: string;
	}

	/** Describes an SSH key pair. */
	export interface KeyPairFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		fingerprint: FormControl<string | null | undefined>,
	}
	export function CreateKeyPairFormGroup() {
		return new FormGroup<KeyPairFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateKeyPairRequest {

		/** Required */
		keyPairName: string;
		tags?: Array<Tag>;
	}
	export interface CreateKeyPairRequestFormProperties {

		/** Required */
		keyPairName: FormControl<string | null | undefined>,
	}
	export function CreateCreateKeyPairRequestFormGroup() {
		return new FormGroup<CreateKeyPairRequestFormProperties>({
			keyPairName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLoadBalancerResult {
		operations?: Array<Operation>;
	}
	export interface CreateLoadBalancerResultFormProperties {
	}
	export function CreateCreateLoadBalancerResultFormGroup() {
		return new FormGroup<CreateLoadBalancerResultFormProperties>({
		});

	}

	export interface CreateLoadBalancerRequest {

		/** Required */
		loadBalancerName: string;

		/** Required */
		instancePort: number;
		healthCheckPath?: string;
		certificateName?: string;
		certificateDomainName?: string;
		certificateAlternativeNames?: Array<string>;
		tags?: Array<Tag>;
		ipAddressType?: IpAddressType;
		tlsPolicyName?: string;
	}
	export interface CreateLoadBalancerRequestFormProperties {

		/** Required */
		loadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		instancePort: FormControl<number | null | undefined>,
		healthCheckPath: FormControl<string | null | undefined>,
		certificateName: FormControl<string | null | undefined>,
		certificateDomainName: FormControl<string | null | undefined>,
		ipAddressType: FormControl<IpAddressType | null | undefined>,
		tlsPolicyName: FormControl<string | null | undefined>,
	}
	export function CreateCreateLoadBalancerRequestFormGroup() {
		return new FormGroup<CreateLoadBalancerRequestFormProperties>({
			loadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instancePort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			healthCheckPath: new FormControl<string | null | undefined>(undefined),
			certificateName: new FormControl<string | null | undefined>(undefined),
			certificateDomainName: new FormControl<string | null | undefined>(undefined),
			ipAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
			tlsPolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLoadBalancerTlsCertificateResult {
		operations?: Array<Operation>;
	}
	export interface CreateLoadBalancerTlsCertificateResultFormProperties {
	}
	export function CreateCreateLoadBalancerTlsCertificateResultFormGroup() {
		return new FormGroup<CreateLoadBalancerTlsCertificateResultFormProperties>({
		});

	}

	export interface CreateLoadBalancerTlsCertificateRequest {

		/** Required */
		loadBalancerName: string;

		/** Required */
		certificateName: string;

		/** Required */
		certificateDomainName: string;
		certificateAlternativeNames?: Array<string>;
		tags?: Array<Tag>;
	}
	export interface CreateLoadBalancerTlsCertificateRequestFormProperties {

		/** Required */
		loadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		certificateName: FormControl<string | null | undefined>,

		/** Required */
		certificateDomainName: FormControl<string | null | undefined>,
	}
	export function CreateCreateLoadBalancerTlsCertificateRequestFormGroup() {
		return new FormGroup<CreateLoadBalancerTlsCertificateRequestFormProperties>({
			loadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certificateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certificateDomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRelationalDatabaseResult {
		operations?: Array<Operation>;
	}
	export interface CreateRelationalDatabaseResultFormProperties {
	}
	export function CreateCreateRelationalDatabaseResultFormGroup() {
		return new FormGroup<CreateRelationalDatabaseResultFormProperties>({
		});

	}

	export interface CreateRelationalDatabaseRequest {

		/** Required */
		relationalDatabaseName: string;
		availabilityZone?: string;

		/** Required */
		relationalDatabaseBlueprintId: string;

		/** Required */
		relationalDatabaseBundleId: string;

		/** Required */
		masterDatabaseName: string;

		/** Required */
		masterUsername: string;
		masterUserPassword?: string;
		preferredBackupWindow?: string;
		preferredMaintenanceWindow?: string;
		publiclyAccessible?: boolean | null;
		tags?: Array<Tag>;
	}
	export interface CreateRelationalDatabaseRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,
		availabilityZone: FormControl<string | null | undefined>,

		/** Required */
		relationalDatabaseBlueprintId: FormControl<string | null | undefined>,

		/** Required */
		relationalDatabaseBundleId: FormControl<string | null | undefined>,

		/** Required */
		masterDatabaseName: FormControl<string | null | undefined>,

		/** Required */
		masterUsername: FormControl<string | null | undefined>,
		masterUserPassword: FormControl<string | null | undefined>,
		preferredBackupWindow: FormControl<string | null | undefined>,
		preferredMaintenanceWindow: FormControl<string | null | undefined>,
		publiclyAccessible: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateRelationalDatabaseRequestFormGroup() {
		return new FormGroup<CreateRelationalDatabaseRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			availabilityZone: new FormControl<string | null | undefined>(undefined),
			relationalDatabaseBlueprintId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relationalDatabaseBundleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			masterDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			masterUsername: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			masterUserPassword: new FormControl<string | null | undefined>(undefined),
			preferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			preferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			publiclyAccessible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateRelationalDatabaseFromSnapshotResult {
		operations?: Array<Operation>;
	}
	export interface CreateRelationalDatabaseFromSnapshotResultFormProperties {
	}
	export function CreateCreateRelationalDatabaseFromSnapshotResultFormGroup() {
		return new FormGroup<CreateRelationalDatabaseFromSnapshotResultFormProperties>({
		});

	}

	export interface CreateRelationalDatabaseFromSnapshotRequest {

		/** Required */
		relationalDatabaseName: string;
		availabilityZone?: string;
		publiclyAccessible?: boolean | null;
		relationalDatabaseSnapshotName?: string;
		relationalDatabaseBundleId?: string;
		sourceRelationalDatabaseName?: string;
		restoreTime?: Date;
		useLatestRestorableTime?: boolean | null;
		tags?: Array<Tag>;
	}
	export interface CreateRelationalDatabaseFromSnapshotRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,
		availabilityZone: FormControl<string | null | undefined>,
		publiclyAccessible: FormControl<boolean | null | undefined>,
		relationalDatabaseSnapshotName: FormControl<string | null | undefined>,
		relationalDatabaseBundleId: FormControl<string | null | undefined>,
		sourceRelationalDatabaseName: FormControl<string | null | undefined>,
		restoreTime: FormControl<Date | null | undefined>,
		useLatestRestorableTime: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateRelationalDatabaseFromSnapshotRequestFormGroup() {
		return new FormGroup<CreateRelationalDatabaseFromSnapshotRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			availabilityZone: new FormControl<string | null | undefined>(undefined),
			publiclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			relationalDatabaseSnapshotName: new FormControl<string | null | undefined>(undefined),
			relationalDatabaseBundleId: new FormControl<string | null | undefined>(undefined),
			sourceRelationalDatabaseName: new FormControl<string | null | undefined>(undefined),
			restoreTime: new FormControl<Date | null | undefined>(undefined),
			useLatestRestorableTime: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateRelationalDatabaseSnapshotResult {
		operations?: Array<Operation>;
	}
	export interface CreateRelationalDatabaseSnapshotResultFormProperties {
	}
	export function CreateCreateRelationalDatabaseSnapshotResultFormGroup() {
		return new FormGroup<CreateRelationalDatabaseSnapshotResultFormProperties>({
		});

	}

	export interface CreateRelationalDatabaseSnapshotRequest {

		/** Required */
		relationalDatabaseName: string;

		/** Required */
		relationalDatabaseSnapshotName: string;
		tags?: Array<Tag>;
	}
	export interface CreateRelationalDatabaseSnapshotRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,

		/** Required */
		relationalDatabaseSnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateCreateRelationalDatabaseSnapshotRequestFormGroup() {
		return new FormGroup<CreateRelationalDatabaseSnapshotRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relationalDatabaseSnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAlarmResult {
		operations?: Array<Operation>;
	}
	export interface DeleteAlarmResultFormProperties {
	}
	export function CreateDeleteAlarmResultFormGroup() {
		return new FormGroup<DeleteAlarmResultFormProperties>({
		});

	}

	export interface DeleteAlarmRequest {

		/** Required */
		alarmName: string;
	}
	export interface DeleteAlarmRequestFormProperties {

		/** Required */
		alarmName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAlarmRequestFormGroup() {
		return new FormGroup<DeleteAlarmRequestFormProperties>({
			alarmName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAutoSnapshotResult {
		operations?: Array<Operation>;
	}
	export interface DeleteAutoSnapshotResultFormProperties {
	}
	export function CreateDeleteAutoSnapshotResultFormGroup() {
		return new FormGroup<DeleteAutoSnapshotResultFormProperties>({
		});

	}

	export interface DeleteAutoSnapshotRequest {

		/** Required */
		resourceName: string;

		/** Required */
		date: string;
	}
	export interface DeleteAutoSnapshotRequestFormProperties {

		/** Required */
		resourceName: FormControl<string | null | undefined>,

		/** Required */
		date: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAutoSnapshotRequestFormGroup() {
		return new FormGroup<DeleteAutoSnapshotRequestFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteBucketResult {
		operations?: Array<Operation>;
	}
	export interface DeleteBucketResultFormProperties {
	}
	export function CreateDeleteBucketResultFormGroup() {
		return new FormGroup<DeleteBucketResultFormProperties>({
		});

	}

	export interface DeleteBucketRequest {

		/** Required */
		bucketName: string;
		forceDelete?: boolean | null;
	}
	export interface DeleteBucketRequestFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,
		forceDelete: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteBucketRequestFormGroup() {
		return new FormGroup<DeleteBucketRequestFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			forceDelete: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteBucketAccessKeyResult {
		operations?: Array<Operation>;
	}
	export interface DeleteBucketAccessKeyResultFormProperties {
	}
	export function CreateDeleteBucketAccessKeyResultFormGroup() {
		return new FormGroup<DeleteBucketAccessKeyResultFormProperties>({
		});

	}

	export interface DeleteBucketAccessKeyRequest {

		/** Required */
		bucketName: string;

		/** Required */
		accessKeyId: string;
	}
	export interface DeleteBucketAccessKeyRequestFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,

		/** Required */
		accessKeyId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBucketAccessKeyRequestFormGroup() {
		return new FormGroup<DeleteBucketAccessKeyRequestFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accessKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteCertificateResult {
		operations?: Array<Operation>;
	}
	export interface DeleteCertificateResultFormProperties {
	}
	export function CreateDeleteCertificateResultFormGroup() {
		return new FormGroup<DeleteCertificateResultFormProperties>({
		});

	}

	export interface DeleteCertificateRequest {

		/** Required */
		certificateName: string;
	}
	export interface DeleteCertificateRequestFormProperties {

		/** Required */
		certificateName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCertificateRequestFormGroup() {
		return new FormGroup<DeleteCertificateRequestFormProperties>({
			certificateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteContactMethodResult {
		operations?: Array<Operation>;
	}
	export interface DeleteContactMethodResultFormProperties {
	}
	export function CreateDeleteContactMethodResultFormGroup() {
		return new FormGroup<DeleteContactMethodResultFormProperties>({
		});

	}

	export interface DeleteContactMethodRequest {

		/** Required */
		protocol: ContactProtocol;
	}
	export interface DeleteContactMethodRequestFormProperties {

		/** Required */
		protocol: FormControl<ContactProtocol | null | undefined>,
	}
	export function CreateDeleteContactMethodRequestFormGroup() {
		return new FormGroup<DeleteContactMethodRequestFormProperties>({
			protocol: new FormControl<ContactProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteContainerImageResult {
	}
	export interface DeleteContainerImageResultFormProperties {
	}
	export function CreateDeleteContainerImageResultFormGroup() {
		return new FormGroup<DeleteContainerImageResultFormProperties>({
		});

	}

	export interface DeleteContainerImageRequest {

		/** Required */
		serviceName: string;

		/** Required */
		image: string;
	}
	export interface DeleteContainerImageRequestFormProperties {

		/** Required */
		serviceName: FormControl<string | null | undefined>,

		/** Required */
		image: FormControl<string | null | undefined>,
	}
	export function CreateDeleteContainerImageRequestFormGroup() {
		return new FormGroup<DeleteContainerImageRequestFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteContainerServiceResult {
	}
	export interface DeleteContainerServiceResultFormProperties {
	}
	export function CreateDeleteContainerServiceResultFormGroup() {
		return new FormGroup<DeleteContainerServiceResultFormProperties>({
		});

	}

	export interface DeleteContainerServiceRequest {

		/** Required */
		serviceName: string;
	}
	export interface DeleteContainerServiceRequestFormProperties {

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteContainerServiceRequestFormGroup() {
		return new FormGroup<DeleteContainerServiceRequestFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDiskResult {
		operations?: Array<Operation>;
	}
	export interface DeleteDiskResultFormProperties {
	}
	export function CreateDeleteDiskResultFormGroup() {
		return new FormGroup<DeleteDiskResultFormProperties>({
		});

	}

	export interface DeleteDiskRequest {

		/** Required */
		diskName: string;
		forceDeleteAddOns?: boolean | null;
	}
	export interface DeleteDiskRequestFormProperties {

		/** Required */
		diskName: FormControl<string | null | undefined>,
		forceDeleteAddOns: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteDiskRequestFormGroup() {
		return new FormGroup<DeleteDiskRequestFormProperties>({
			diskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			forceDeleteAddOns: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteDiskSnapshotResult {
		operations?: Array<Operation>;
	}
	export interface DeleteDiskSnapshotResultFormProperties {
	}
	export function CreateDeleteDiskSnapshotResultFormGroup() {
		return new FormGroup<DeleteDiskSnapshotResultFormProperties>({
		});

	}

	export interface DeleteDiskSnapshotRequest {

		/** Required */
		diskSnapshotName: string;
	}
	export interface DeleteDiskSnapshotRequestFormProperties {

		/** Required */
		diskSnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDiskSnapshotRequestFormGroup() {
		return new FormGroup<DeleteDiskSnapshotRequestFormProperties>({
			diskSnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDistributionResult {
		operation?: Operation;
	}
	export interface DeleteDistributionResultFormProperties {
	}
	export function CreateDeleteDistributionResultFormGroup() {
		return new FormGroup<DeleteDistributionResultFormProperties>({
		});

	}

	export interface DeleteDistributionRequest {
		distributionName?: string;
	}
	export interface DeleteDistributionRequestFormProperties {
		distributionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDistributionRequestFormGroup() {
		return new FormGroup<DeleteDistributionRequestFormProperties>({
			distributionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDomainResult {
		operation?: Operation;
	}
	export interface DeleteDomainResultFormProperties {
	}
	export function CreateDeleteDomainResultFormGroup() {
		return new FormGroup<DeleteDomainResultFormProperties>({
		});

	}

	export interface DeleteDomainRequest {

		/** Required */
		domainName: string;
	}
	export interface DeleteDomainRequestFormProperties {

		/** Required */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDomainRequestFormGroup() {
		return new FormGroup<DeleteDomainRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDomainEntryResult {
		operation?: Operation;
	}
	export interface DeleteDomainEntryResultFormProperties {
	}
	export function CreateDeleteDomainEntryResultFormGroup() {
		return new FormGroup<DeleteDomainEntryResultFormProperties>({
		});

	}

	export interface DeleteDomainEntryRequest {

		/** Required */
		domainName: string;

		/** Required */
		domainEntry: DomainEntry;
	}
	export interface DeleteDomainEntryRequestFormProperties {

		/** Required */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDomainEntryRequestFormGroup() {
		return new FormGroup<DeleteDomainEntryRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteInstanceResult {
		operations?: Array<Operation>;
	}
	export interface DeleteInstanceResultFormProperties {
	}
	export function CreateDeleteInstanceResultFormGroup() {
		return new FormGroup<DeleteInstanceResultFormProperties>({
		});

	}

	export interface DeleteInstanceRequest {

		/** Required */
		instanceName: string;
		forceDeleteAddOns?: boolean | null;
	}
	export interface DeleteInstanceRequestFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
		forceDeleteAddOns: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteInstanceRequestFormGroup() {
		return new FormGroup<DeleteInstanceRequestFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			forceDeleteAddOns: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteInstanceSnapshotResult {
		operations?: Array<Operation>;
	}
	export interface DeleteInstanceSnapshotResultFormProperties {
	}
	export function CreateDeleteInstanceSnapshotResultFormGroup() {
		return new FormGroup<DeleteInstanceSnapshotResultFormProperties>({
		});

	}

	export interface DeleteInstanceSnapshotRequest {

		/** Required */
		instanceSnapshotName: string;
	}
	export interface DeleteInstanceSnapshotRequestFormProperties {

		/** Required */
		instanceSnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInstanceSnapshotRequestFormGroup() {
		return new FormGroup<DeleteInstanceSnapshotRequestFormProperties>({
			instanceSnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteKeyPairResult {
		operation?: Operation;
	}
	export interface DeleteKeyPairResultFormProperties {
	}
	export function CreateDeleteKeyPairResultFormGroup() {
		return new FormGroup<DeleteKeyPairResultFormProperties>({
		});

	}

	export interface DeleteKeyPairRequest {

		/** Required */
		keyPairName: string;
		expectedFingerprint?: string;
	}
	export interface DeleteKeyPairRequestFormProperties {

		/** Required */
		keyPairName: FormControl<string | null | undefined>,
		expectedFingerprint: FormControl<string | null | undefined>,
	}
	export function CreateDeleteKeyPairRequestFormGroup() {
		return new FormGroup<DeleteKeyPairRequestFormProperties>({
			keyPairName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expectedFingerprint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteKnownHostKeysResult {
		operations?: Array<Operation>;
	}
	export interface DeleteKnownHostKeysResultFormProperties {
	}
	export function CreateDeleteKnownHostKeysResultFormGroup() {
		return new FormGroup<DeleteKnownHostKeysResultFormProperties>({
		});

	}

	export interface DeleteKnownHostKeysRequest {

		/** Required */
		instanceName: string;
	}
	export interface DeleteKnownHostKeysRequestFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteKnownHostKeysRequestFormGroup() {
		return new FormGroup<DeleteKnownHostKeysRequestFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLoadBalancerResult {
		operations?: Array<Operation>;
	}
	export interface DeleteLoadBalancerResultFormProperties {
	}
	export function CreateDeleteLoadBalancerResultFormGroup() {
		return new FormGroup<DeleteLoadBalancerResultFormProperties>({
		});

	}

	export interface DeleteLoadBalancerRequest {

		/** Required */
		loadBalancerName: string;
	}
	export interface DeleteLoadBalancerRequestFormProperties {

		/** Required */
		loadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLoadBalancerRequestFormGroup() {
		return new FormGroup<DeleteLoadBalancerRequestFormProperties>({
			loadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLoadBalancerTlsCertificateResult {
		operations?: Array<Operation>;
	}
	export interface DeleteLoadBalancerTlsCertificateResultFormProperties {
	}
	export function CreateDeleteLoadBalancerTlsCertificateResultFormGroup() {
		return new FormGroup<DeleteLoadBalancerTlsCertificateResultFormProperties>({
		});

	}

	export interface DeleteLoadBalancerTlsCertificateRequest {

		/** Required */
		loadBalancerName: string;

		/** Required */
		certificateName: string;
		force?: boolean | null;
	}
	export interface DeleteLoadBalancerTlsCertificateRequestFormProperties {

		/** Required */
		loadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		certificateName: FormControl<string | null | undefined>,
		force: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteLoadBalancerTlsCertificateRequestFormGroup() {
		return new FormGroup<DeleteLoadBalancerTlsCertificateRequestFormProperties>({
			loadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certificateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			force: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteRelationalDatabaseResult {
		operations?: Array<Operation>;
	}
	export interface DeleteRelationalDatabaseResultFormProperties {
	}
	export function CreateDeleteRelationalDatabaseResultFormGroup() {
		return new FormGroup<DeleteRelationalDatabaseResultFormProperties>({
		});

	}

	export interface DeleteRelationalDatabaseRequest {

		/** Required */
		relationalDatabaseName: string;
		skipFinalSnapshot?: boolean | null;
		finalRelationalDatabaseSnapshotName?: string;
	}
	export interface DeleteRelationalDatabaseRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,
		skipFinalSnapshot: FormControl<boolean | null | undefined>,
		finalRelationalDatabaseSnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRelationalDatabaseRequestFormGroup() {
		return new FormGroup<DeleteRelationalDatabaseRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			skipFinalSnapshot: new FormControl<boolean | null | undefined>(undefined),
			finalRelationalDatabaseSnapshotName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRelationalDatabaseSnapshotResult {
		operations?: Array<Operation>;
	}
	export interface DeleteRelationalDatabaseSnapshotResultFormProperties {
	}
	export function CreateDeleteRelationalDatabaseSnapshotResultFormGroup() {
		return new FormGroup<DeleteRelationalDatabaseSnapshotResultFormProperties>({
		});

	}

	export interface DeleteRelationalDatabaseSnapshotRequest {

		/** Required */
		relationalDatabaseSnapshotName: string;
	}
	export interface DeleteRelationalDatabaseSnapshotRequestFormProperties {

		/** Required */
		relationalDatabaseSnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRelationalDatabaseSnapshotRequestFormGroup() {
		return new FormGroup<DeleteRelationalDatabaseSnapshotRequestFormProperties>({
			relationalDatabaseSnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetachCertificateFromDistributionResult {
		operation?: Operation;
	}
	export interface DetachCertificateFromDistributionResultFormProperties {
	}
	export function CreateDetachCertificateFromDistributionResultFormGroup() {
		return new FormGroup<DetachCertificateFromDistributionResultFormProperties>({
		});

	}

	export interface DetachCertificateFromDistributionRequest {

		/** Required */
		distributionName: string;
	}
	export interface DetachCertificateFromDistributionRequestFormProperties {

		/** Required */
		distributionName: FormControl<string | null | undefined>,
	}
	export function CreateDetachCertificateFromDistributionRequestFormGroup() {
		return new FormGroup<DetachCertificateFromDistributionRequestFormProperties>({
			distributionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetachDiskResult {
		operations?: Array<Operation>;
	}
	export interface DetachDiskResultFormProperties {
	}
	export function CreateDetachDiskResultFormGroup() {
		return new FormGroup<DetachDiskResultFormProperties>({
		});

	}

	export interface DetachDiskRequest {

		/** Required */
		diskName: string;
	}
	export interface DetachDiskRequestFormProperties {

		/** Required */
		diskName: FormControl<string | null | undefined>,
	}
	export function CreateDetachDiskRequestFormGroup() {
		return new FormGroup<DetachDiskRequestFormProperties>({
			diskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetachInstancesFromLoadBalancerResult {
		operations?: Array<Operation>;
	}
	export interface DetachInstancesFromLoadBalancerResultFormProperties {
	}
	export function CreateDetachInstancesFromLoadBalancerResultFormGroup() {
		return new FormGroup<DetachInstancesFromLoadBalancerResultFormProperties>({
		});

	}

	export interface DetachInstancesFromLoadBalancerRequest {

		/** Required */
		loadBalancerName: string;

		/** Required */
		instanceNames: Array<string>;
	}
	export interface DetachInstancesFromLoadBalancerRequestFormProperties {

		/** Required */
		loadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateDetachInstancesFromLoadBalancerRequestFormGroup() {
		return new FormGroup<DetachInstancesFromLoadBalancerRequestFormProperties>({
			loadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetachStaticIpResult {
		operations?: Array<Operation>;
	}
	export interface DetachStaticIpResultFormProperties {
	}
	export function CreateDetachStaticIpResultFormGroup() {
		return new FormGroup<DetachStaticIpResultFormProperties>({
		});

	}

	export interface DetachStaticIpRequest {

		/** Required */
		staticIpName: string;
	}
	export interface DetachStaticIpRequestFormProperties {

		/** Required */
		staticIpName: FormControl<string | null | undefined>,
	}
	export function CreateDetachStaticIpRequestFormGroup() {
		return new FormGroup<DetachStaticIpRequestFormProperties>({
			staticIpName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisableAddOnResult {
		operations?: Array<Operation>;
	}
	export interface DisableAddOnResultFormProperties {
	}
	export function CreateDisableAddOnResultFormGroup() {
		return new FormGroup<DisableAddOnResultFormProperties>({
		});

	}

	export interface DisableAddOnRequest {

		/** Required */
		addOnType: AddOnType;

		/** Required */
		resourceName: string;
	}
	export interface DisableAddOnRequestFormProperties {

		/** Required */
		addOnType: FormControl<AddOnType | null | undefined>,

		/** Required */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateDisableAddOnRequestFormGroup() {
		return new FormGroup<DisableAddOnRequestFormProperties>({
			addOnType: new FormControl<AddOnType | null | undefined>(undefined, [Validators.required]),
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DownloadDefaultKeyPairResult {
		publicKeyBase64?: string;
		privateKeyBase64?: string;
		createdAt?: Date;
	}
	export interface DownloadDefaultKeyPairResultFormProperties {
		publicKeyBase64: FormControl<string | null | undefined>,
		privateKeyBase64: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateDownloadDefaultKeyPairResultFormGroup() {
		return new FormGroup<DownloadDefaultKeyPairResultFormProperties>({
			publicKeyBase64: new FormControl<string | null | undefined>(undefined),
			privateKeyBase64: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DownloadDefaultKeyPairRequest {
	}
	export interface DownloadDefaultKeyPairRequestFormProperties {
	}
	export function CreateDownloadDefaultKeyPairRequestFormGroup() {
		return new FormGroup<DownloadDefaultKeyPairRequestFormProperties>({
		});

	}

	export interface EnableAddOnResult {
		operations?: Array<Operation>;
	}
	export interface EnableAddOnResultFormProperties {
	}
	export function CreateEnableAddOnResultFormGroup() {
		return new FormGroup<EnableAddOnResultFormProperties>({
		});

	}

	export interface EnableAddOnRequest {

		/** Required */
		resourceName: string;

		/** Required */
		addOnRequest: AddOnRequest;
	}
	export interface EnableAddOnRequestFormProperties {

		/** Required */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateEnableAddOnRequestFormGroup() {
		return new FormGroup<EnableAddOnRequestFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExportSnapshotResult {
		operations?: Array<Operation>;
	}
	export interface ExportSnapshotResultFormProperties {
	}
	export function CreateExportSnapshotResultFormGroup() {
		return new FormGroup<ExportSnapshotResultFormProperties>({
		});

	}

	export interface ExportSnapshotRequest {

		/** Required */
		sourceSnapshotName: string;
	}
	export interface ExportSnapshotRequestFormProperties {

		/** Required */
		sourceSnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateExportSnapshotRequestFormGroup() {
		return new FormGroup<ExportSnapshotRequestFormProperties>({
			sourceSnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetActiveNamesResult {
		activeNames?: Array<string>;
		nextPageToken?: string;
	}
	export interface GetActiveNamesResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetActiveNamesResultFormGroup() {
		return new FormGroup<GetActiveNamesResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetActiveNamesRequest {
		pageToken?: string;
	}
	export interface GetActiveNamesRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetActiveNamesRequestFormGroup() {
		return new FormGroup<GetActiveNamesRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAlarmsResult {
		alarms?: Array<Alarm>;
		nextPageToken?: string;
	}
	export interface GetAlarmsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAlarmsResultFormGroup() {
		return new FormGroup<GetAlarmsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes an alarm.</p> <p>An alarm is a way to monitor your Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> */
	export interface Alarm {
		name?: string;
		arn?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		supportCode?: string;
		monitoredResourceInfo?: MonitoredResourceInfo;
		comparisonOperator?: ComparisonOperator;
		evaluationPeriods?: number | null;
		period?: number | null;
		threshold?: number | null;
		datapointsToAlarm?: number | null;
		treatMissingData?: TreatMissingData;
		statistic?: MetricStatistic;
		metricName?: MetricName;
		state?: AlarmState;
		unit?: MetricUnit;
		contactProtocols?: Array<ContactProtocol>;
		notificationTriggers?: Array<AlarmState>;
		notificationEnabled?: boolean | null;
	}

	/** <p>Describes an alarm.</p> <p>An alarm is a way to monitor your Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> */
	export interface AlarmFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		comparisonOperator: FormControl<ComparisonOperator | null | undefined>,
		evaluationPeriods: FormControl<number | null | undefined>,
		period: FormControl<number | null | undefined>,
		threshold: FormControl<number | null | undefined>,
		datapointsToAlarm: FormControl<number | null | undefined>,
		treatMissingData: FormControl<TreatMissingData | null | undefined>,
		statistic: FormControl<MetricStatistic | null | undefined>,
		metricName: FormControl<MetricName | null | undefined>,
		state: FormControl<AlarmState | null | undefined>,
		unit: FormControl<MetricUnit | null | undefined>,
		notificationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAlarmFormGroup() {
		return new FormGroup<AlarmFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			comparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined),
			evaluationPeriods: new FormControl<number | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined),
			threshold: new FormControl<number | null | undefined>(undefined),
			datapointsToAlarm: new FormControl<number | null | undefined>(undefined),
			treatMissingData: new FormControl<TreatMissingData | null | undefined>(undefined),
			statistic: new FormControl<MetricStatistic | null | undefined>(undefined),
			metricName: new FormControl<MetricName | null | undefined>(undefined),
			state: new FormControl<AlarmState | null | undefined>(undefined),
			unit: new FormControl<MetricUnit | null | undefined>(undefined),
			notificationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Describes resource being monitored by an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> */
	export interface MonitoredResourceInfo {
		arn?: string;
		name?: string;
		resourceType?: ResourceType;
	}

	/** <p>Describes resource being monitored by an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> */
	export interface MonitoredResourceInfoFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateMonitoredResourceInfoFormGroup() {
		return new FormGroup<MonitoredResourceInfoFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
		});

	}

	export enum ComparisonOperator { GreaterThanOrEqualToThreshold = 0, GreaterThanThreshold = 1, LessThanThreshold = 2, LessThanOrEqualToThreshold = 3 }

	export enum TreatMissingData { breaching = 0, notBreaching = 1, ignore = 2, missing = 3 }

	export enum MetricStatistic { Minimum = 0, Maximum = 1, Sum = 2, Average = 3, SampleCount = 4 }

	export enum MetricName { CPUUtilization = 0, NetworkIn = 1, NetworkOut = 2, StatusCheckFailed = 3, StatusCheckFailed_Instance = 4, StatusCheckFailed_System = 5, ClientTLSNegotiationErrorCount = 6, HealthyHostCount = 7, UnhealthyHostCount = 8, HTTPCode_LB_4XX_Count = 9, HTTPCode_LB_5XX_Count = 10, HTTPCode_Instance_2XX_Count = 11, HTTPCode_Instance_3XX_Count = 12, HTTPCode_Instance_4XX_Count = 13, HTTPCode_Instance_5XX_Count = 14, InstanceResponseTime = 15, RejectedConnectionCount = 16, RequestCount = 17, DatabaseConnections = 18, DiskQueueDepth = 19, FreeStorageSpace = 20, NetworkReceiveThroughput = 21, NetworkTransmitThroughput = 22, BurstCapacityTime = 23, BurstCapacityPercentage = 24 }

	export enum AlarmState { OK = 0, ALARM = 1, INSUFFICIENT_DATA = 2 }

	export enum MetricUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, 'Bytes/Second' = 15, 'Kilobytes/Second' = 16, 'Megabytes/Second' = 17, 'Gigabytes/Second' = 18, 'Terabytes/Second' = 19, 'Bits/Second' = 20, 'Kilobits/Second' = 21, 'Megabits/Second' = 22, 'Gigabits/Second' = 23, 'Terabits/Second' = 24, 'Count/Second' = 25, None = 26 }

	export interface GetAlarmsRequest {
		alarmName?: string;
		pageToken?: string;
		monitoredResourceName?: string;
	}
	export interface GetAlarmsRequestFormProperties {
		alarmName: FormControl<string | null | undefined>,
		pageToken: FormControl<string | null | undefined>,
		monitoredResourceName: FormControl<string | null | undefined>,
	}
	export function CreateGetAlarmsRequestFormGroup() {
		return new FormGroup<GetAlarmsRequestFormProperties>({
			alarmName: new FormControl<string | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			monitoredResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAutoSnapshotsResult {
		resourceName?: string;
		resourceType?: ResourceType;
		autoSnapshots?: Array<AutoSnapshotDetails>;
	}
	export interface GetAutoSnapshotsResultFormProperties {
		resourceName: FormControl<string | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateGetAutoSnapshotsResultFormGroup() {
		return new FormGroup<GetAutoSnapshotsResultFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
		});

	}


	/** Describes an automatic snapshot. */
	export interface AutoSnapshotDetails {
		date?: string;
		createdAt?: Date;
		status?: AutoSnapshotStatus;
		fromAttachedDisks?: Array<AttachedDisk>;
	}

	/** Describes an automatic snapshot. */
	export interface AutoSnapshotDetailsFormProperties {
		date: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		status: FormControl<AutoSnapshotStatus | null | undefined>,
	}
	export function CreateAutoSnapshotDetailsFormGroup() {
		return new FormGroup<AutoSnapshotDetailsFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<AutoSnapshotStatus | null | undefined>(undefined),
		});

	}

	export enum AutoSnapshotStatus { Success = 0, Failed = 1, InProgress = 2, NotFound = 3 }


	/** Describes a block storage disk that is attached to an instance, and is included in an automatic snapshot. */
	export interface AttachedDisk {
		path?: string;
		sizeInGb?: number | null;
	}

	/** Describes a block storage disk that is attached to an instance, and is included in an automatic snapshot. */
	export interface AttachedDiskFormProperties {
		path: FormControl<string | null | undefined>,
		sizeInGb: FormControl<number | null | undefined>,
	}
	export function CreateAttachedDiskFormGroup() {
		return new FormGroup<AttachedDiskFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			sizeInGb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAutoSnapshotsRequest {

		/** Required */
		resourceName: string;
	}
	export interface GetAutoSnapshotsRequestFormProperties {

		/** Required */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGetAutoSnapshotsRequestFormGroup() {
		return new FormGroup<GetAutoSnapshotsRequestFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBlueprintsResult {
		blueprints?: Array<Blueprint>;
		nextPageToken?: string;
	}
	export interface GetBlueprintsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBlueprintsResultFormGroup() {
		return new FormGroup<GetBlueprintsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a blueprint (a virtual private server image). */
	export interface Blueprint {
		blueprintId?: string;
		name?: string;
		group?: string;
		type?: BlueprintType;
		description?: string;
		isActive?: boolean | null;
		minPower?: number | null;
		version?: string;
		versionCode?: string;
		productUrl?: string;
		licenseUrl?: string;
		platform?: InstancePlatform;
		appCategory?: AppCategory;
	}

	/** Describes a blueprint (a virtual private server image). */
	export interface BlueprintFormProperties {
		blueprintId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		group: FormControl<string | null | undefined>,
		type: FormControl<BlueprintType | null | undefined>,
		description: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		minPower: FormControl<number | null | undefined>,
		version: FormControl<string | null | undefined>,
		versionCode: FormControl<string | null | undefined>,
		productUrl: FormControl<string | null | undefined>,
		licenseUrl: FormControl<string | null | undefined>,
		platform: FormControl<InstancePlatform | null | undefined>,
		appCategory: FormControl<AppCategory | null | undefined>,
	}
	export function CreateBlueprintFormGroup() {
		return new FormGroup<BlueprintFormProperties>({
			blueprintId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BlueprintType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			minPower: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			versionCode: new FormControl<string | null | undefined>(undefined),
			productUrl: new FormControl<string | null | undefined>(undefined),
			licenseUrl: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<InstancePlatform | null | undefined>(undefined),
			appCategory: new FormControl<AppCategory | null | undefined>(undefined),
		});

	}

	export enum BlueprintType { os = 0, app = 1 }

	export enum InstancePlatform { LINUX_UNIX = 0, WINDOWS = 1 }

	export enum AppCategory { LfR = 0 }

	export interface GetBlueprintsRequest {
		includeInactive?: boolean | null;
		pageToken?: string;
		appCategory?: AppCategory;
	}
	export interface GetBlueprintsRequestFormProperties {
		includeInactive: FormControl<boolean | null | undefined>,
		pageToken: FormControl<string | null | undefined>,
		appCategory: FormControl<AppCategory | null | undefined>,
	}
	export function CreateGetBlueprintsRequestFormGroup() {
		return new FormGroup<GetBlueprintsRequestFormProperties>({
			includeInactive: new FormControl<boolean | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			appCategory: new FormControl<AppCategory | null | undefined>(undefined),
		});

	}

	export interface GetBucketAccessKeysResult {
		accessKeys?: Array<AccessKey>;
	}
	export interface GetBucketAccessKeysResultFormProperties {
	}
	export function CreateGetBucketAccessKeysResultFormGroup() {
		return new FormGroup<GetBucketAccessKeysResultFormProperties>({
		});

	}

	export interface GetBucketAccessKeysRequest {

		/** Required */
		bucketName: string;
	}
	export interface GetBucketAccessKeysRequestFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,
	}
	export function CreateGetBucketAccessKeysRequestFormGroup() {
		return new FormGroup<GetBucketAccessKeysRequestFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBucketBundlesResult {
		bundles?: Array<BucketBundle>;
	}
	export interface GetBucketBundlesResultFormProperties {
	}
	export function CreateGetBucketBundlesResultFormGroup() {
		return new FormGroup<GetBucketBundlesResultFormProperties>({
		});

	}


	/** <p>Describes the specifications of a bundle that can be applied to an Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.</p> */
	export interface BucketBundle {
		bundleId?: string;
		name?: string;
		price?: number;
		storagePerMonthInGb?: number | null;
		transferPerMonthInGb?: number | null;
		isActive?: boolean | null;
	}

	/** <p>Describes the specifications of a bundle that can be applied to an Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.</p> */
	export interface BucketBundleFormProperties {
		bundleId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		price: FormControl<number | null | undefined>,
		storagePerMonthInGb: FormControl<number | null | undefined>,
		transferPerMonthInGb: FormControl<number | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
	}
	export function CreateBucketBundleFormGroup() {
		return new FormGroup<BucketBundleFormProperties>({
			bundleId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			storagePerMonthInGb: new FormControl<number | null | undefined>(undefined),
			transferPerMonthInGb: new FormControl<number | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetBucketBundlesRequest {
		includeInactive?: boolean | null;
	}
	export interface GetBucketBundlesRequestFormProperties {
		includeInactive: FormControl<boolean | null | undefined>,
	}
	export function CreateGetBucketBundlesRequestFormGroup() {
		return new FormGroup<GetBucketBundlesRequestFormProperties>({
			includeInactive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetBucketMetricDataResult {
		metricName?: BucketMetricName;
		metricData?: Array<MetricDatapoint>;
	}
	export interface GetBucketMetricDataResultFormProperties {
		metricName: FormControl<BucketMetricName | null | undefined>,
	}
	export function CreateGetBucketMetricDataResultFormGroup() {
		return new FormGroup<GetBucketMetricDataResultFormProperties>({
			metricName: new FormControl<BucketMetricName | null | undefined>(undefined),
		});

	}

	export enum BucketMetricName { BucketSizeBytes = 0, NumberOfObjects = 1 }


	/** Describes the metric data point. */
	export interface MetricDatapoint {
		average?: number | null;
		maximum?: number | null;
		minimum?: number | null;
		sampleCount?: number | null;
		sum?: number | null;
		timestamp?: Date;
		unit?: MetricUnit;
	}

	/** Describes the metric data point. */
	export interface MetricDatapointFormProperties {
		average: FormControl<number | null | undefined>,
		maximum: FormControl<number | null | undefined>,
		minimum: FormControl<number | null | undefined>,
		sampleCount: FormControl<number | null | undefined>,
		sum: FormControl<number | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		unit: FormControl<MetricUnit | null | undefined>,
	}
	export function CreateMetricDatapointFormGroup() {
		return new FormGroup<MetricDatapointFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			sampleCount: new FormControl<number | null | undefined>(undefined),
			sum: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			unit: new FormControl<MetricUnit | null | undefined>(undefined),
		});

	}

	export interface GetBucketMetricDataRequest {

		/** Required */
		bucketName: string;

		/** Required */
		metricName: BucketMetricName;

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;

		/** Required */
		period: number;

		/** Required */
		statistics: Array<MetricStatistic>;

		/** Required */
		unit: MetricUnit;
	}
	export interface GetBucketMetricDataRequestFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,

		/** Required */
		metricName: FormControl<BucketMetricName | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		period: FormControl<number | null | undefined>,

		/** Required */
		unit: FormControl<MetricUnit | null | undefined>,
	}
	export function CreateGetBucketMetricDataRequestFormGroup() {
		return new FormGroup<GetBucketMetricDataRequestFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricName: new FormControl<BucketMetricName | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<MetricUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBucketsResult {
		buckets?: Array<Bucket>;
		nextPageToken?: string;
		accountLevelBpaSync?: AccountLevelBpaSync;
	}
	export interface GetBucketsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBucketsResultFormGroup() {
		return new FormGroup<GetBucketsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes the synchronization status of the Amazon Simple Storage Service (Amazon S3) account-level block public access (BPA) feature for your Lightsail buckets.</p> <p>The account-level BPA feature of Amazon S3 provides centralized controls to limit public access to all Amazon S3 buckets in an account. BPA can make all Amazon S3 buckets in an Amazon Web Services account private regardless of the individual bucket and object permissions that are configured. Lightsail buckets take into account the Amazon S3 account-level BPA configuration when allowing or denying public access. To do this, Lightsail periodically fetches the account-level BPA configuration from Amazon S3. When the account-level BPA status is <code>InSync</code>, the Amazon S3 account-level BPA configuration is synchronized and it applies to your Lightsail buckets. For more information about Amazon Simple Storage Service account-level BPA and how it affects Lightsail buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-block-public-access-for-buckets">Block public access for buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface AccountLevelBpaSync {
		status?: AccountLevelBpaSyncStatus;
		lastSyncedAt?: Date;
		message?: BPAStatusMessage;
		bpaImpactsLightsail?: boolean | null;
	}

	/** <p>Describes the synchronization status of the Amazon Simple Storage Service (Amazon S3) account-level block public access (BPA) feature for your Lightsail buckets.</p> <p>The account-level BPA feature of Amazon S3 provides centralized controls to limit public access to all Amazon S3 buckets in an account. BPA can make all Amazon S3 buckets in an Amazon Web Services account private regardless of the individual bucket and object permissions that are configured. Lightsail buckets take into account the Amazon S3 account-level BPA configuration when allowing or denying public access. To do this, Lightsail periodically fetches the account-level BPA configuration from Amazon S3. When the account-level BPA status is <code>InSync</code>, the Amazon S3 account-level BPA configuration is synchronized and it applies to your Lightsail buckets. For more information about Amazon Simple Storage Service account-level BPA and how it affects Lightsail buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-block-public-access-for-buckets">Block public access for buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface AccountLevelBpaSyncFormProperties {
		status: FormControl<AccountLevelBpaSyncStatus | null | undefined>,
		lastSyncedAt: FormControl<Date | null | undefined>,
		message: FormControl<BPAStatusMessage | null | undefined>,
		bpaImpactsLightsail: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountLevelBpaSyncFormGroup() {
		return new FormGroup<AccountLevelBpaSyncFormProperties>({
			status: new FormControl<AccountLevelBpaSyncStatus | null | undefined>(undefined),
			lastSyncedAt: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<BPAStatusMessage | null | undefined>(undefined),
			bpaImpactsLightsail: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AccountLevelBpaSyncStatus { InSync = 0, Failed = 1, NeverSynced = 2, Defaulted = 3 }

	export enum BPAStatusMessage { DEFAULTED_FOR_SLR_MISSING = 0, SYNC_ON_HOLD = 1, DEFAULTED_FOR_SLR_MISSING_ON_HOLD = 2, Unknown = 3 }

	export interface GetBucketsRequest {
		bucketName?: string;
		pageToken?: string;
		includeConnectedResources?: boolean | null;
	}
	export interface GetBucketsRequestFormProperties {
		bucketName: FormControl<string | null | undefined>,
		pageToken: FormControl<string | null | undefined>,
		includeConnectedResources: FormControl<boolean | null | undefined>,
	}
	export function CreateGetBucketsRequestFormGroup() {
		return new FormGroup<GetBucketsRequestFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			includeConnectedResources: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetBundlesResult {
		bundles?: Array<Bundle>;
		nextPageToken?: string;
	}
	export interface GetBundlesResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBundlesResultFormGroup() {
		return new FormGroup<GetBundlesResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a bundle, which is a set of specs describing your virtual private server (or <i>instance</i>). */
	export interface Bundle {
		price?: number;
		cpuCount?: number | null;
		diskSizeInGb?: number | null;
		bundleId?: string;
		instanceType?: string;
		isActive?: boolean | null;
		name?: string;
		power?: number | null;
		ramSizeInGb?: number;
		transferPerMonthInGb?: number | null;
		supportedPlatforms?: Array<InstancePlatform>;
		supportedAppCategories?: Array<AppCategory>;
	}

	/** Describes a bundle, which is a set of specs describing your virtual private server (or <i>instance</i>). */
	export interface BundleFormProperties {
		price: FormControl<number | null | undefined>,
		cpuCount: FormControl<number | null | undefined>,
		diskSizeInGb: FormControl<number | null | undefined>,
		bundleId: FormControl<string | null | undefined>,
		instanceType: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		power: FormControl<number | null | undefined>,
		ramSizeInGb: FormControl<number | null | undefined>,
		transferPerMonthInGb: FormControl<number | null | undefined>,
	}
	export function CreateBundleFormGroup() {
		return new FormGroup<BundleFormProperties>({
			price: new FormControl<number | null | undefined>(undefined),
			cpuCount: new FormControl<number | null | undefined>(undefined),
			diskSizeInGb: new FormControl<number | null | undefined>(undefined),
			bundleId: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			power: new FormControl<number | null | undefined>(undefined),
			ramSizeInGb: new FormControl<number | null | undefined>(undefined),
			transferPerMonthInGb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetBundlesRequest {
		includeInactive?: boolean | null;
		pageToken?: string;
		appCategory?: AppCategory;
	}
	export interface GetBundlesRequestFormProperties {
		includeInactive: FormControl<boolean | null | undefined>,
		pageToken: FormControl<string | null | undefined>,
		appCategory: FormControl<AppCategory | null | undefined>,
	}
	export function CreateGetBundlesRequestFormGroup() {
		return new FormGroup<GetBundlesRequestFormProperties>({
			includeInactive: new FormControl<boolean | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			appCategory: new FormControl<AppCategory | null | undefined>(undefined),
		});

	}

	export interface GetCertificatesResult {
		certificates?: Array<CertificateSummary>;
		nextPageToken?: string;
	}
	export interface GetCertificatesResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCertificatesResultFormGroup() {
		return new FormGroup<GetCertificatesResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCertificatesRequest {
		certificateStatuses?: Array<CertificateStatus>;
		includeCertificateDetails?: boolean | null;
		certificateName?: string;
		pageToken?: string;
	}
	export interface GetCertificatesRequestFormProperties {
		includeCertificateDetails: FormControl<boolean | null | undefined>,
		certificateName: FormControl<string | null | undefined>,
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCertificatesRequestFormGroup() {
		return new FormGroup<GetCertificatesRequestFormProperties>({
			includeCertificateDetails: new FormControl<boolean | null | undefined>(undefined),
			certificateName: new FormControl<string | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCloudFormationStackRecordsResult {
		cloudFormationStackRecords?: Array<CloudFormationStackRecord>;
		nextPageToken?: string;
	}
	export interface GetCloudFormationStackRecordsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCloudFormationStackRecordsResultFormGroup() {
		return new FormGroup<GetCloudFormationStackRecordsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes a CloudFormation stack record created as a result of the <code>create cloud formation stack</code> action.</p> <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p> */
	export interface CloudFormationStackRecord {
		name?: string;
		arn?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		state?: RecordState;
		sourceInfo?: Array<CloudFormationStackRecordSourceInfo>;
		destinationInfo?: DestinationInfo;
	}

	/** <p>Describes a CloudFormation stack record created as a result of the <code>create cloud formation stack</code> action.</p> <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p> */
	export interface CloudFormationStackRecordFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		state: FormControl<RecordState | null | undefined>,
	}
	export function CreateCloudFormationStackRecordFormGroup() {
		return new FormGroup<CloudFormationStackRecordFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			state: new FormControl<RecordState | null | undefined>(undefined),
		});

	}

	export enum RecordState { Started = 0, Succeeded = 1, Failed = 2 }


	/** Describes the source of a CloudFormation stack record (i.e., the export snapshot record). */
	export interface CloudFormationStackRecordSourceInfo {
		resourceType?: CloudFormationStackRecordSourceType;
		name?: string;
		arn?: string;
	}

	/** Describes the source of a CloudFormation stack record (i.e., the export snapshot record). */
	export interface CloudFormationStackRecordSourceInfoFormProperties {
		resourceType: FormControl<CloudFormationStackRecordSourceType | null | undefined>,
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCloudFormationStackRecordSourceInfoFormGroup() {
		return new FormGroup<CloudFormationStackRecordSourceInfoFormProperties>({
			resourceType: new FormControl<CloudFormationStackRecordSourceType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudFormationStackRecordSourceType { ExportSnapshotRecord = 0 }


	/** Describes the destination of a record. */
	export interface DestinationInfo {
		id?: string;
		service?: string;
	}

	/** Describes the destination of a record. */
	export interface DestinationInfoFormProperties {
		id: FormControl<string | null | undefined>,
		service: FormControl<string | null | undefined>,
	}
	export function CreateDestinationInfoFormGroup() {
		return new FormGroup<DestinationInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCloudFormationStackRecordsRequest {
		pageToken?: string;
	}
	export interface GetCloudFormationStackRecordsRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCloudFormationStackRecordsRequestFormGroup() {
		return new FormGroup<GetCloudFormationStackRecordsRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetContactMethodsResult {
		contactMethods?: Array<ContactMethod>;
	}
	export interface GetContactMethodsResultFormProperties {
	}
	export function CreateGetContactMethodsResultFormGroup() {
		return new FormGroup<GetContactMethodsResultFormProperties>({
		});

	}


	/** <p>Describes a contact method.</p> <p>A contact method is a way to send you notifications. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> */
	export interface ContactMethod {
		contactEndpoint?: string;
		status?: ContactMethodStatus;
		protocol?: ContactProtocol;
		name?: string;
		arn?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		supportCode?: string;
	}

	/** <p>Describes a contact method.</p> <p>A contact method is a way to send you notifications. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> */
	export interface ContactMethodFormProperties {
		contactEndpoint: FormControl<string | null | undefined>,
		status: FormControl<ContactMethodStatus | null | undefined>,
		protocol: FormControl<ContactProtocol | null | undefined>,
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
	}
	export function CreateContactMethodFormGroup() {
		return new FormGroup<ContactMethodFormProperties>({
			contactEndpoint: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ContactMethodStatus | null | undefined>(undefined),
			protocol: new FormControl<ContactProtocol | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContactMethodStatus { PendingVerification = 0, Valid = 1, Invalid = 2 }

	export interface GetContactMethodsRequest {
		protocols?: Array<ContactProtocol>;
	}
	export interface GetContactMethodsRequestFormProperties {
	}
	export function CreateGetContactMethodsRequestFormGroup() {
		return new FormGroup<GetContactMethodsRequestFormProperties>({
		});

	}

	export interface GetContainerAPIMetadataResult {
		metadata?: Array<ContainerServiceMetadataEntry>;
	}
	export interface GetContainerAPIMetadataResultFormProperties {
	}
	export function CreateGetContainerAPIMetadataResultFormGroup() {
		return new FormGroup<GetContainerAPIMetadataResultFormProperties>({
		});

	}

	export interface ContainerServiceMetadataEntry {
	}
	export interface ContainerServiceMetadataEntryFormProperties {
	}
	export function CreateContainerServiceMetadataEntryFormGroup() {
		return new FormGroup<ContainerServiceMetadataEntryFormProperties>({
		});

	}

	export interface GetContainerAPIMetadataRequest {
	}
	export interface GetContainerAPIMetadataRequestFormProperties {
	}
	export function CreateGetContainerAPIMetadataRequestFormGroup() {
		return new FormGroup<GetContainerAPIMetadataRequestFormProperties>({
		});

	}

	export interface GetContainerImagesResult {
		containerImages?: Array<ContainerImage>;
	}
	export interface GetContainerImagesResultFormProperties {
	}
	export function CreateGetContainerImagesResultFormGroup() {
		return new FormGroup<GetContainerImagesResultFormProperties>({
		});

	}


	/** Describes a container image that is registered to an Amazon Lightsail container service. */
	export interface ContainerImage {
		image?: string;
		digest?: string;
		createdAt?: Date;
	}

	/** Describes a container image that is registered to an Amazon Lightsail container service. */
	export interface ContainerImageFormProperties {
		image: FormControl<string | null | undefined>,
		digest: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateContainerImageFormGroup() {
		return new FormGroup<ContainerImageFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			digest: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetContainerImagesRequest {

		/** Required */
		serviceName: string;
	}
	export interface GetContainerImagesRequestFormProperties {

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateGetContainerImagesRequestFormGroup() {
		return new FormGroup<GetContainerImagesRequestFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetContainerLogResult {
		logEvents?: Array<ContainerServiceLogEvent>;
		nextPageToken?: string;
	}
	export interface GetContainerLogResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetContainerLogResultFormGroup() {
		return new FormGroup<GetContainerLogResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the log events of a container of an Amazon Lightsail container service. */
	export interface ContainerServiceLogEvent {
		createdAt?: Date;
		message?: string;
	}

	/** Describes the log events of a container of an Amazon Lightsail container service. */
	export interface ContainerServiceLogEventFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateContainerServiceLogEventFormGroup() {
		return new FormGroup<ContainerServiceLogEventFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetContainerLogRequest {

		/** Required */
		serviceName: string;

		/** Required */
		containerName: string;
		startTime?: Date;
		endTime?: Date;
		filterPattern?: string;
		pageToken?: string;
	}
	export interface GetContainerLogRequestFormProperties {

		/** Required */
		serviceName: FormControl<string | null | undefined>,

		/** Required */
		containerName: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		filterPattern: FormControl<string | null | undefined>,
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetContainerLogRequestFormGroup() {
		return new FormGroup<GetContainerLogRequestFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			filterPattern: new FormControl<string | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetContainerServiceDeploymentsResult {
		deployments?: Array<ContainerServiceDeployment>;
	}
	export interface GetContainerServiceDeploymentsResultFormProperties {
	}
	export function CreateGetContainerServiceDeploymentsResultFormGroup() {
		return new FormGroup<GetContainerServiceDeploymentsResultFormProperties>({
		});

	}

	export interface GetContainerServiceDeploymentsRequest {

		/** Required */
		serviceName: string;
	}
	export interface GetContainerServiceDeploymentsRequestFormProperties {

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateGetContainerServiceDeploymentsRequestFormGroup() {
		return new FormGroup<GetContainerServiceDeploymentsRequestFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetContainerServiceMetricDataResult {
		metricName?: ContainerServiceMetricName;
		metricData?: Array<MetricDatapoint>;
	}
	export interface GetContainerServiceMetricDataResultFormProperties {
		metricName: FormControl<ContainerServiceMetricName | null | undefined>,
	}
	export function CreateGetContainerServiceMetricDataResultFormGroup() {
		return new FormGroup<GetContainerServiceMetricDataResultFormProperties>({
			metricName: new FormControl<ContainerServiceMetricName | null | undefined>(undefined),
		});

	}

	export enum ContainerServiceMetricName { CPUUtilization = 0, MemoryUtilization = 1 }

	export interface GetContainerServiceMetricDataRequest {

		/** Required */
		serviceName: string;

		/** Required */
		metricName: ContainerServiceMetricName;

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;

		/** Required */
		period: number;

		/** Required */
		statistics: Array<MetricStatistic>;
	}
	export interface GetContainerServiceMetricDataRequestFormProperties {

		/** Required */
		serviceName: FormControl<string | null | undefined>,

		/** Required */
		metricName: FormControl<ContainerServiceMetricName | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		period: FormControl<number | null | undefined>,
	}
	export function CreateGetContainerServiceMetricDataRequestFormGroup() {
		return new FormGroup<GetContainerServiceMetricDataRequestFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricName: new FormControl<ContainerServiceMetricName | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetContainerServicePowersResult {
		powers?: Array<ContainerServicePower>;
	}
	export interface GetContainerServicePowersResultFormProperties {
	}
	export function CreateGetContainerServicePowersResultFormGroup() {
		return new FormGroup<GetContainerServicePowersResultFormProperties>({
		});

	}


	/** <p>Describes the powers that can be specified for an Amazon Lightsail container service.</p> <p>The power specifies the amount of RAM, the number of vCPUs, and the base price of the container service.</p> */
	export interface ContainerServicePower {
		powerId?: string;
		price?: number;
		cpuCount?: number;
		ramSizeInGb?: number;
		name?: string;
		isActive?: boolean | null;
	}

	/** <p>Describes the powers that can be specified for an Amazon Lightsail container service.</p> <p>The power specifies the amount of RAM, the number of vCPUs, and the base price of the container service.</p> */
	export interface ContainerServicePowerFormProperties {
		powerId: FormControl<string | null | undefined>,
		price: FormControl<number | null | undefined>,
		cpuCount: FormControl<number | null | undefined>,
		ramSizeInGb: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
	}
	export function CreateContainerServicePowerFormGroup() {
		return new FormGroup<ContainerServicePowerFormProperties>({
			powerId: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			cpuCount: new FormControl<number | null | undefined>(undefined),
			ramSizeInGb: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetContainerServicePowersRequest {
	}
	export interface GetContainerServicePowersRequestFormProperties {
	}
	export function CreateGetContainerServicePowersRequestFormGroup() {
		return new FormGroup<GetContainerServicePowersRequestFormProperties>({
		});

	}

	export interface ContainerServicesListResult {
		containerServices?: Array<ContainerService>;
	}
	export interface ContainerServicesListResultFormProperties {
	}
	export function CreateContainerServicesListResultFormGroup() {
		return new FormGroup<ContainerServicesListResultFormProperties>({
		});

	}

	export interface GetContainerServicesRequest {
		serviceName?: string;
	}
	export interface GetContainerServicesRequestFormProperties {
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateGetContainerServicesRequestFormGroup() {
		return new FormGroup<GetContainerServicesRequestFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCostEstimateResult {
		resourcesBudgetEstimate?: Array<ResourceBudgetEstimate>;
	}
	export interface GetCostEstimateResultFormProperties {
	}
	export function CreateGetCostEstimateResultFormGroup() {
		return new FormGroup<GetCostEstimateResultFormProperties>({
		});

	}


	/** Describes the estimated cost or usage that a budget tracks. */
	export interface ResourceBudgetEstimate {
		resourceName?: string;
		resourceType?: ResourceType;
		costEstimates?: Array<CostEstimate>;
		startTime?: Date;
		endTime?: Date;
	}

	/** Describes the estimated cost or usage that a budget tracks. */
	export interface ResourceBudgetEstimateFormProperties {
		resourceName: FormControl<string | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateResourceBudgetEstimateFormGroup() {
		return new FormGroup<ResourceBudgetEstimateFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the estimated cost for resources in your Lightsail for Research account. */
	export interface CostEstimate {
		usageType?: string;
		resultsByTime?: Array<EstimateByTime>;
	}

	/** Describes the estimated cost for resources in your Lightsail for Research account. */
	export interface CostEstimateFormProperties {
		usageType: FormControl<string | null | undefined>,
	}
	export function CreateCostEstimateFormGroup() {
		return new FormGroup<CostEstimateFormProperties>({
			usageType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An estimate that's associated with a time period.  */
	export interface EstimateByTime {
		usageCost?: number | null;
		pricingUnit?: PricingUnit;
		unit?: number | null;
		currency?: Currency;
		timePeriod?: TimePeriod;
	}

	/** An estimate that's associated with a time period.  */
	export interface EstimateByTimeFormProperties {
		usageCost: FormControl<number | null | undefined>,
		pricingUnit: FormControl<PricingUnit | null | undefined>,
		unit: FormControl<number | null | undefined>,
		currency: FormControl<Currency | null | undefined>,
	}
	export function CreateEstimateByTimeFormGroup() {
		return new FormGroup<EstimateByTimeFormProperties>({
			usageCost: new FormControl<number | null | undefined>(undefined),
			pricingUnit: new FormControl<PricingUnit | null | undefined>(undefined),
			unit: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<Currency | null | undefined>(undefined),
		});

	}

	export enum PricingUnit { GB = 0, Hrs = 1, 'GB-Mo' = 2, Bundles = 3, Queries = 4 }

	export enum Currency { USD = 0 }


	/** Sets the start date and end date for retrieving a cost estimate. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>. */
	export interface TimePeriod {
		start?: Date;
		end?: Date;
	}

	/** Sets the start date and end date for retrieving a cost estimate. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>. */
	export interface TimePeriodFormProperties {
		start: FormControl<Date | null | undefined>,
		end: FormControl<Date | null | undefined>,
	}
	export function CreateTimePeriodFormGroup() {
		return new FormGroup<TimePeriodFormProperties>({
			start: new FormControl<Date | null | undefined>(undefined),
			end: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetCostEstimateRequest {

		/** Required */
		resourceName: string;

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;
	}
	export interface GetCostEstimateRequestFormProperties {

		/** Required */
		resourceName: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetCostEstimateRequestFormGroup() {
		return new FormGroup<GetCostEstimateRequestFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDiskResult {
		disk?: Disk;
	}
	export interface GetDiskResultFormProperties {
	}
	export function CreateGetDiskResultFormGroup() {
		return new FormGroup<GetDiskResultFormProperties>({
		});

	}


	/** Describes a block storage disk. */
	export interface Disk {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		tags?: Array<Tag>;
		addOns?: Array<AddOn>;
		sizeInGb?: number | null;
		isSystemDisk?: boolean | null;
		iops?: number | null;
		path?: string;
		state?: DiskState;
		attachedTo?: string;
		isAttached?: boolean | null;
		attachmentState?: string;
		gbInUse?: number | null;
		autoMountStatus?: AutoMountStatus;
	}

	/** Describes a block storage disk. */
	export interface DiskFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		sizeInGb: FormControl<number | null | undefined>,
		isSystemDisk: FormControl<boolean | null | undefined>,
		iops: FormControl<number | null | undefined>,
		path: FormControl<string | null | undefined>,
		state: FormControl<DiskState | null | undefined>,
		attachedTo: FormControl<string | null | undefined>,
		isAttached: FormControl<boolean | null | undefined>,
		attachmentState: FormControl<string | null | undefined>,
		gbInUse: FormControl<number | null | undefined>,
		autoMountStatus: FormControl<AutoMountStatus | null | undefined>,
	}
	export function CreateDiskFormGroup() {
		return new FormGroup<DiskFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			sizeInGb: new FormControl<number | null | undefined>(undefined),
			isSystemDisk: new FormControl<boolean | null | undefined>(undefined),
			iops: new FormControl<number | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<DiskState | null | undefined>(undefined),
			attachedTo: new FormControl<string | null | undefined>(undefined),
			isAttached: new FormControl<boolean | null | undefined>(undefined),
			attachmentState: new FormControl<string | null | undefined>(undefined),
			gbInUse: new FormControl<number | null | undefined>(undefined),
			autoMountStatus: new FormControl<AutoMountStatus | null | undefined>(undefined),
		});

	}


	/** Describes an add-on that is enabled for an Amazon Lightsail resource. */
	export interface AddOn {
		name?: string;
		status?: string;
		snapshotTimeOfDay?: string;
		nextSnapshotTimeOfDay?: string;
		threshold?: string;
		duration?: string;
	}

	/** Describes an add-on that is enabled for an Amazon Lightsail resource. */
	export interface AddOnFormProperties {
		name: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		snapshotTimeOfDay: FormControl<string | null | undefined>,
		nextSnapshotTimeOfDay: FormControl<string | null | undefined>,
		threshold: FormControl<string | null | undefined>,
		duration: FormControl<string | null | undefined>,
	}
	export function CreateAddOnFormGroup() {
		return new FormGroup<AddOnFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			snapshotTimeOfDay: new FormControl<string | null | undefined>(undefined),
			nextSnapshotTimeOfDay: new FormControl<string | null | undefined>(undefined),
			threshold: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DiskState { pending = 0, error = 1, available = 2, 'in-use' = 3, unknown = 4 }

	export enum AutoMountStatus { Failed = 0, Pending = 1, Mounted = 2, NotMounted = 3 }

	export interface GetDiskRequest {

		/** Required */
		diskName: string;
	}
	export interface GetDiskRequestFormProperties {

		/** Required */
		diskName: FormControl<string | null | undefined>,
	}
	export function CreateGetDiskRequestFormGroup() {
		return new FormGroup<GetDiskRequestFormProperties>({
			diskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDiskSnapshotResult {
		diskSnapshot?: DiskSnapshot;
	}
	export interface GetDiskSnapshotResultFormProperties {
	}
	export function CreateGetDiskSnapshotResultFormGroup() {
		return new FormGroup<GetDiskSnapshotResultFormProperties>({
		});

	}


	/** Describes a block storage disk snapshot. */
	export interface DiskSnapshot {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		tags?: Array<Tag>;
		sizeInGb?: number | null;
		state?: DiskSnapshotState;
		progress?: string;
		fromDiskName?: string;
		fromDiskArn?: string;
		fromInstanceName?: string;
		fromInstanceArn?: string;
		isFromAutoSnapshot?: boolean | null;
	}

	/** Describes a block storage disk snapshot. */
	export interface DiskSnapshotFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		sizeInGb: FormControl<number | null | undefined>,
		state: FormControl<DiskSnapshotState | null | undefined>,
		progress: FormControl<string | null | undefined>,
		fromDiskName: FormControl<string | null | undefined>,
		fromDiskArn: FormControl<string | null | undefined>,
		fromInstanceName: FormControl<string | null | undefined>,
		fromInstanceArn: FormControl<string | null | undefined>,
		isFromAutoSnapshot: FormControl<boolean | null | undefined>,
	}
	export function CreateDiskSnapshotFormGroup() {
		return new FormGroup<DiskSnapshotFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			sizeInGb: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<DiskSnapshotState | null | undefined>(undefined),
			progress: new FormControl<string | null | undefined>(undefined),
			fromDiskName: new FormControl<string | null | undefined>(undefined),
			fromDiskArn: new FormControl<string | null | undefined>(undefined),
			fromInstanceName: new FormControl<string | null | undefined>(undefined),
			fromInstanceArn: new FormControl<string | null | undefined>(undefined),
			isFromAutoSnapshot: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DiskSnapshotState { pending = 0, completed = 1, error = 2, unknown = 3 }

	export interface GetDiskSnapshotRequest {

		/** Required */
		diskSnapshotName: string;
	}
	export interface GetDiskSnapshotRequestFormProperties {

		/** Required */
		diskSnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateGetDiskSnapshotRequestFormGroup() {
		return new FormGroup<GetDiskSnapshotRequestFormProperties>({
			diskSnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDiskSnapshotsResult {
		diskSnapshots?: Array<DiskSnapshot>;
		nextPageToken?: string;
	}
	export interface GetDiskSnapshotsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDiskSnapshotsResultFormGroup() {
		return new FormGroup<GetDiskSnapshotsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDiskSnapshotsRequest {
		pageToken?: string;
	}
	export interface GetDiskSnapshotsRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDiskSnapshotsRequestFormGroup() {
		return new FormGroup<GetDiskSnapshotsRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDisksResult {
		disks?: Array<Disk>;
		nextPageToken?: string;
	}
	export interface GetDisksResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDisksResultFormGroup() {
		return new FormGroup<GetDisksResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDisksRequest {
		pageToken?: string;
	}
	export interface GetDisksRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDisksRequestFormGroup() {
		return new FormGroup<GetDisksRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDistributionBundlesResult {
		bundles?: Array<DistributionBundle>;
	}
	export interface GetDistributionBundlesResultFormProperties {
	}
	export function CreateGetDistributionBundlesResultFormGroup() {
		return new FormGroup<GetDistributionBundlesResultFormProperties>({
		});

	}


	/** Describes the specifications of a distribution bundle. */
	export interface DistributionBundle {
		bundleId?: string;
		name?: string;
		price?: number;
		transferPerMonthInGb?: number | null;
		isActive?: boolean | null;
	}

	/** Describes the specifications of a distribution bundle. */
	export interface DistributionBundleFormProperties {
		bundleId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		price: FormControl<number | null | undefined>,
		transferPerMonthInGb: FormControl<number | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
	}
	export function CreateDistributionBundleFormGroup() {
		return new FormGroup<DistributionBundleFormProperties>({
			bundleId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			transferPerMonthInGb: new FormControl<number | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetDistributionBundlesRequest {
	}
	export interface GetDistributionBundlesRequestFormProperties {
	}
	export function CreateGetDistributionBundlesRequestFormGroup() {
		return new FormGroup<GetDistributionBundlesRequestFormProperties>({
		});

	}

	export interface GetDistributionLatestCacheResetResult {
		status?: string;
		createTime?: Date;
	}
	export interface GetDistributionLatestCacheResetResultFormProperties {
		status: FormControl<string | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetDistributionLatestCacheResetResultFormGroup() {
		return new FormGroup<GetDistributionLatestCacheResetResultFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetDistributionLatestCacheResetRequest {
		distributionName?: string;
	}
	export interface GetDistributionLatestCacheResetRequestFormProperties {
		distributionName: FormControl<string | null | undefined>,
	}
	export function CreateGetDistributionLatestCacheResetRequestFormGroup() {
		return new FormGroup<GetDistributionLatestCacheResetRequestFormProperties>({
			distributionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDistributionMetricDataResult {
		metricName?: DistributionMetricName;
		metricData?: Array<MetricDatapoint>;
	}
	export interface GetDistributionMetricDataResultFormProperties {
		metricName: FormControl<DistributionMetricName | null | undefined>,
	}
	export function CreateGetDistributionMetricDataResultFormGroup() {
		return new FormGroup<GetDistributionMetricDataResultFormProperties>({
			metricName: new FormControl<DistributionMetricName | null | undefined>(undefined),
		});

	}

	export enum DistributionMetricName { Requests = 0, BytesDownloaded = 1, BytesUploaded = 2, TotalErrorRate = 3, Http4xxErrorRate = 4, Http5xxErrorRate = 5 }

	export interface GetDistributionMetricDataRequest {

		/** Required */
		distributionName: string;

		/** Required */
		metricName: DistributionMetricName;

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;

		/** Required */
		period: number;

		/** Required */
		unit: MetricUnit;

		/** Required */
		statistics: Array<MetricStatistic>;
	}
	export interface GetDistributionMetricDataRequestFormProperties {

		/** Required */
		distributionName: FormControl<string | null | undefined>,

		/** Required */
		metricName: FormControl<DistributionMetricName | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		period: FormControl<number | null | undefined>,

		/** Required */
		unit: FormControl<MetricUnit | null | undefined>,
	}
	export function CreateGetDistributionMetricDataRequestFormGroup() {
		return new FormGroup<GetDistributionMetricDataRequestFormProperties>({
			distributionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricName: new FormControl<DistributionMetricName | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<MetricUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDistributionsResult {
		distributions?: Array<LightsailDistribution>;
		nextPageToken?: string;
	}
	export interface GetDistributionsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDistributionsResultFormGroup() {
		return new FormGroup<GetDistributionsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDistributionsRequest {
		distributionName?: string;
		pageToken?: string;
	}
	export interface GetDistributionsRequestFormProperties {
		distributionName: FormControl<string | null | undefined>,
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDistributionsRequestFormGroup() {
		return new FormGroup<GetDistributionsRequestFormProperties>({
			distributionName: new FormControl<string | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDomainResult {
		domain?: Domain;
	}
	export interface GetDomainResultFormProperties {
	}
	export function CreateGetDomainResultFormGroup() {
		return new FormGroup<GetDomainResultFormProperties>({
		});

	}


	/** Describes a domain where you are storing recordsets. */
	export interface Domain {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		tags?: Array<Tag>;
		domainEntries?: Array<DomainEntry>;
		registeredDomainDelegationInfo?: RegisteredDomainDelegationInfo;
	}

	/** Describes a domain where you are storing recordsets. */
	export interface DomainFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
		});

	}


	/** <p>Describes the delegation state of an Amazon Route 53 registered domain to Amazon Lightsail.</p> <p>When you delegate an Amazon Route 53 registered domain to Lightsail, you can manage the DNS of the domain using a Lightsail DNS zone. You no longer use the Route 53 hosted zone to manage the DNS of the domain. To delegate the domain, Lightsail automatically updates the domain's name servers in Route 53 to the name servers of the Lightsail DNS zone. Then, Lightsail automatically deletes the Route 53 hosted zone for the domain.</p> <p>All of the following conditions must be true for automatic domain delegation to be successful:</p> <ul> <li> <p>The registered domain must be in the same Amazon Web Services account as the Lightsail account making the request.</p> </li> <li> <p>The user or entity making the request must have permission to manage domains in Route 53.</p> </li> <li> <p>The Route 53 hosted zone for the domain must be empty. It cannot contain DNS records other than start of authority (SOA) and name server records.</p> </li> </ul> <p>If automatic domain delegation fails, or if you manage the DNS of your domain using a service other than Route 53, then you must manually add the Lightsail DNS zone name servers to your domain in order to delegate management of its DNS to Lightsail. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-create-dns-entry">Creating a DNS zone to manage your domain’s records in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface RegisteredDomainDelegationInfo {
		nameServersUpdateState?: NameServersUpdateState;
		r53HostedZoneDeletionState?: R53HostedZoneDeletionState;
	}

	/** <p>Describes the delegation state of an Amazon Route 53 registered domain to Amazon Lightsail.</p> <p>When you delegate an Amazon Route 53 registered domain to Lightsail, you can manage the DNS of the domain using a Lightsail DNS zone. You no longer use the Route 53 hosted zone to manage the DNS of the domain. To delegate the domain, Lightsail automatically updates the domain's name servers in Route 53 to the name servers of the Lightsail DNS zone. Then, Lightsail automatically deletes the Route 53 hosted zone for the domain.</p> <p>All of the following conditions must be true for automatic domain delegation to be successful:</p> <ul> <li> <p>The registered domain must be in the same Amazon Web Services account as the Lightsail account making the request.</p> </li> <li> <p>The user or entity making the request must have permission to manage domains in Route 53.</p> </li> <li> <p>The Route 53 hosted zone for the domain must be empty. It cannot contain DNS records other than start of authority (SOA) and name server records.</p> </li> </ul> <p>If automatic domain delegation fails, or if you manage the DNS of your domain using a service other than Route 53, then you must manually add the Lightsail DNS zone name servers to your domain in order to delegate management of its DNS to Lightsail. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-create-dns-entry">Creating a DNS zone to manage your domain’s records in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface RegisteredDomainDelegationInfoFormProperties {
	}
	export function CreateRegisteredDomainDelegationInfoFormGroup() {
		return new FormGroup<RegisteredDomainDelegationInfoFormProperties>({
		});

	}


	/** <p>Describes the state of the name server records update made by Amazon Lightsail to an Amazon Route 53 registered domain.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/understanding-dns-in-amazon-lightsail">DNS in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface NameServersUpdateState {
		code?: NameServersUpdateStateCode;
		message?: string;
	}

	/** <p>Describes the state of the name server records update made by Amazon Lightsail to an Amazon Route 53 registered domain.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/understanding-dns-in-amazon-lightsail">DNS in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface NameServersUpdateStateFormProperties {
		code: FormControl<NameServersUpdateStateCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateNameServersUpdateStateFormGroup() {
		return new FormGroup<NameServersUpdateStateFormProperties>({
			code: new FormControl<NameServersUpdateStateCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NameServersUpdateStateCode { SUCCEEDED = 0, PENDING = 1, FAILED = 2, STARTED = 3 }


	/** Describes the deletion state of an Amazon Route 53 hosted zone for a domain that is being automatically delegated to an Amazon Lightsail DNS zone. */
	export interface R53HostedZoneDeletionState {
		code?: NameServersUpdateStateCode;
		message?: string;
	}

	/** Describes the deletion state of an Amazon Route 53 hosted zone for a domain that is being automatically delegated to an Amazon Lightsail DNS zone. */
	export interface R53HostedZoneDeletionStateFormProperties {
		code: FormControl<NameServersUpdateStateCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateR53HostedZoneDeletionStateFormGroup() {
		return new FormGroup<R53HostedZoneDeletionStateFormProperties>({
			code: new FormControl<NameServersUpdateStateCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDomainRequest {

		/** Required */
		domainName: string;
	}
	export interface GetDomainRequestFormProperties {

		/** Required */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateGetDomainRequestFormGroup() {
		return new FormGroup<GetDomainRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDomainsResult {
		domains?: Array<Domain>;
		nextPageToken?: string;
	}
	export interface GetDomainsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDomainsResultFormGroup() {
		return new FormGroup<GetDomainsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDomainsRequest {
		pageToken?: string;
	}
	export interface GetDomainsRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDomainsRequestFormGroup() {
		return new FormGroup<GetDomainsRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetExportSnapshotRecordsResult {
		exportSnapshotRecords?: Array<ExportSnapshotRecord>;
		nextPageToken?: string;
	}
	export interface GetExportSnapshotRecordsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetExportSnapshotRecordsResultFormGroup() {
		return new FormGroup<GetExportSnapshotRecordsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an export snapshot record. */
	export interface ExportSnapshotRecord {
		name?: string;
		arn?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		state?: RecordState;
		sourceInfo?: ExportSnapshotRecordSourceInfo;
		destinationInfo?: DestinationInfo;
	}

	/** Describes an export snapshot record. */
	export interface ExportSnapshotRecordFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		state: FormControl<RecordState | null | undefined>,
	}
	export function CreateExportSnapshotRecordFormGroup() {
		return new FormGroup<ExportSnapshotRecordFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			state: new FormControl<RecordState | null | undefined>(undefined),
		});

	}


	/** Describes the source of an export snapshot record. */
	export interface ExportSnapshotRecordSourceInfo {
		resourceType?: ExportSnapshotRecordSourceType;
		createdAt?: Date;
		name?: string;
		arn?: string;
		fromResourceName?: string;
		fromResourceArn?: string;
		instanceSnapshotInfo?: InstanceSnapshotInfo;
		diskSnapshotInfo?: DiskSnapshotInfo;
	}

	/** Describes the source of an export snapshot record. */
	export interface ExportSnapshotRecordSourceInfoFormProperties {
		resourceType: FormControl<ExportSnapshotRecordSourceType | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		fromResourceName: FormControl<string | null | undefined>,
		fromResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateExportSnapshotRecordSourceInfoFormGroup() {
		return new FormGroup<ExportSnapshotRecordSourceInfoFormProperties>({
			resourceType: new FormControl<ExportSnapshotRecordSourceType | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			fromResourceName: new FormControl<string | null | undefined>(undefined),
			fromResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExportSnapshotRecordSourceType { InstanceSnapshot = 0, DiskSnapshot = 1 }


	/** Describes an instance snapshot. */
	export interface InstanceSnapshotInfo {
		fromBundleId?: string;
		fromBlueprintId?: string;
		fromDiskInfo?: Array<DiskInfo>;
	}

	/** Describes an instance snapshot. */
	export interface InstanceSnapshotInfoFormProperties {
		fromBundleId: FormControl<string | null | undefined>,
		fromBlueprintId: FormControl<string | null | undefined>,
	}
	export function CreateInstanceSnapshotInfoFormGroup() {
		return new FormGroup<InstanceSnapshotInfoFormProperties>({
			fromBundleId: new FormControl<string | null | undefined>(undefined),
			fromBlueprintId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a disk. */
	export interface DiskInfo {
		name?: string;
		path?: string;
		sizeInGb?: number | null;
		isSystemDisk?: boolean | null;
	}

	/** Describes a disk. */
	export interface DiskInfoFormProperties {
		name: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		sizeInGb: FormControl<number | null | undefined>,
		isSystemDisk: FormControl<boolean | null | undefined>,
	}
	export function CreateDiskInfoFormGroup() {
		return new FormGroup<DiskInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			sizeInGb: new FormControl<number | null | undefined>(undefined),
			isSystemDisk: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a disk snapshot. */
	export interface DiskSnapshotInfo {
		sizeInGb?: number | null;
	}

	/** Describes a disk snapshot. */
	export interface DiskSnapshotInfoFormProperties {
		sizeInGb: FormControl<number | null | undefined>,
	}
	export function CreateDiskSnapshotInfoFormGroup() {
		return new FormGroup<DiskSnapshotInfoFormProperties>({
			sizeInGb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetExportSnapshotRecordsRequest {
		pageToken?: string;
	}
	export interface GetExportSnapshotRecordsRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetExportSnapshotRecordsRequestFormGroup() {
		return new FormGroup<GetExportSnapshotRecordsRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInstanceResult {
		instance?: Instance;
	}
	export interface GetInstanceResultFormProperties {
	}
	export function CreateGetInstanceResultFormGroup() {
		return new FormGroup<GetInstanceResultFormProperties>({
		});

	}


	/** Describes an instance (a virtual private server). */
	export interface Instance {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		tags?: Array<Tag>;
		blueprintId?: string;
		blueprintName?: string;
		bundleId?: string;
		addOns?: Array<AddOn>;
		isStaticIp?: boolean | null;
		privateIpAddress?: string;
		publicIpAddress?: string;
		ipv6Addresses?: Array<string>;
		ipAddressType?: IpAddressType;
		hardware?: InstanceHardware;
		networking?: InstanceNetworking;
		state?: InstanceState;
		username?: string;
		sshKeyName?: string;
		metadataOptions?: InstanceMetadataOptions;
	}

	/** Describes an instance (a virtual private server). */
	export interface InstanceFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		blueprintId: FormControl<string | null | undefined>,
		blueprintName: FormControl<string | null | undefined>,
		bundleId: FormControl<string | null | undefined>,
		isStaticIp: FormControl<boolean | null | undefined>,
		privateIpAddress: FormControl<string | null | undefined>,
		publicIpAddress: FormControl<string | null | undefined>,
		ipAddressType: FormControl<IpAddressType | null | undefined>,
		username: FormControl<string | null | undefined>,
		sshKeyName: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			blueprintId: new FormControl<string | null | undefined>(undefined),
			blueprintName: new FormControl<string | null | undefined>(undefined),
			bundleId: new FormControl<string | null | undefined>(undefined),
			isStaticIp: new FormControl<boolean | null | undefined>(undefined),
			privateIpAddress: new FormControl<string | null | undefined>(undefined),
			publicIpAddress: new FormControl<string | null | undefined>(undefined),
			ipAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			sshKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the hardware for the instance. */
	export interface InstanceHardware {
		cpuCount?: number | null;
		disks?: Array<Disk>;
		ramSizeInGb?: number;
	}

	/** Describes the hardware for the instance. */
	export interface InstanceHardwareFormProperties {
		cpuCount: FormControl<number | null | undefined>,
		ramSizeInGb: FormControl<number | null | undefined>,
	}
	export function CreateInstanceHardwareFormGroup() {
		return new FormGroup<InstanceHardwareFormProperties>({
			cpuCount: new FormControl<number | null | undefined>(undefined),
			ramSizeInGb: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes monthly data transfer rates and port information for an instance. */
	export interface InstanceNetworking {
		monthlyTransfer?: MonthlyTransfer;
		ports?: Array<InstancePortInfo>;
	}

	/** Describes monthly data transfer rates and port information for an instance. */
	export interface InstanceNetworkingFormProperties {
	}
	export function CreateInstanceNetworkingFormGroup() {
		return new FormGroup<InstanceNetworkingFormProperties>({
		});

	}


	/** Describes the monthly data transfer in and out of your virtual private server (or <i>instance</i>). */
	export interface MonthlyTransfer {
		gbPerMonthAllocated?: number | null;
	}

	/** Describes the monthly data transfer in and out of your virtual private server (or <i>instance</i>). */
	export interface MonthlyTransferFormProperties {
		gbPerMonthAllocated: FormControl<number | null | undefined>,
	}
	export function CreateMonthlyTransferFormGroup() {
		return new FormGroup<MonthlyTransferFormProperties>({
			gbPerMonthAllocated: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes information about ports for an Amazon Lightsail instance. */
	export interface InstancePortInfo {
		fromPort?: number | null;
		toPort?: number | null;
		protocol?: NetworkProtocol;
		accessFrom?: string;
		accessType?: PortAccessType;
		commonName?: string;
		accessDirection?: AccessDirection;
		cidrs?: Array<string>;
		ipv6Cidrs?: Array<string>;
		cidrListAliases?: Array<string>;
	}

	/** Describes information about ports for an Amazon Lightsail instance. */
	export interface InstancePortInfoFormProperties {
		fromPort: FormControl<number | null | undefined>,
		toPort: FormControl<number | null | undefined>,
		protocol: FormControl<NetworkProtocol | null | undefined>,
		accessFrom: FormControl<string | null | undefined>,
		accessType: FormControl<PortAccessType | null | undefined>,
		commonName: FormControl<string | null | undefined>,
		accessDirection: FormControl<AccessDirection | null | undefined>,
	}
	export function CreateInstancePortInfoFormGroup() {
		return new FormGroup<InstancePortInfoFormProperties>({
			fromPort: new FormControl<number | null | undefined>(undefined),
			toPort: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<NetworkProtocol | null | undefined>(undefined),
			accessFrom: new FormControl<string | null | undefined>(undefined),
			accessType: new FormControl<PortAccessType | null | undefined>(undefined),
			commonName: new FormControl<string | null | undefined>(undefined),
			accessDirection: new FormControl<AccessDirection | null | undefined>(undefined),
		});

	}

	export enum PortAccessType { Public = 0, Private = 1 }

	export enum AccessDirection { inbound = 0, outbound = 1 }


	/** Describes the virtual private server (or <i>instance</i>) status. */
	export interface InstanceState {
		code?: number | null;
		name?: string;
	}

	/** Describes the virtual private server (or <i>instance</i>) status. */
	export interface InstanceStateFormProperties {
		code: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateInstanceStateFormGroup() {
		return new FormGroup<InstanceStateFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata options for the instance. */
	export interface InstanceMetadataOptions {
		state?: InstanceMetadataState;
		httpTokens?: HttpTokens;
		httpEndpoint?: HttpEndpoint;
		httpPutResponseHopLimit?: number | null;
		httpProtocolIpv6?: HttpEndpoint;
	}

	/** The metadata options for the instance. */
	export interface InstanceMetadataOptionsFormProperties {
		state: FormControl<InstanceMetadataState | null | undefined>,
		httpTokens: FormControl<HttpTokens | null | undefined>,
		httpEndpoint: FormControl<HttpEndpoint | null | undefined>,
		httpPutResponseHopLimit: FormControl<number | null | undefined>,
		httpProtocolIpv6: FormControl<HttpEndpoint | null | undefined>,
	}
	export function CreateInstanceMetadataOptionsFormGroup() {
		return new FormGroup<InstanceMetadataOptionsFormProperties>({
			state: new FormControl<InstanceMetadataState | null | undefined>(undefined),
			httpTokens: new FormControl<HttpTokens | null | undefined>(undefined),
			httpEndpoint: new FormControl<HttpEndpoint | null | undefined>(undefined),
			httpPutResponseHopLimit: new FormControl<number | null | undefined>(undefined),
			httpProtocolIpv6: new FormControl<HttpEndpoint | null | undefined>(undefined),
		});

	}

	export enum InstanceMetadataState { pending = 0, applied = 1 }

	export enum HttpTokens { optional = 0, required = 1 }

	export enum HttpEndpoint { disabled = 0, enabled = 1 }

	export interface GetInstanceRequest {

		/** Required */
		instanceName: string;
	}
	export interface GetInstanceRequestFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
	}
	export function CreateGetInstanceRequestFormGroup() {
		return new FormGroup<GetInstanceRequestFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetInstanceAccessDetailsResult {
		accessDetails?: InstanceAccessDetails;
	}
	export interface GetInstanceAccessDetailsResultFormProperties {
	}
	export function CreateGetInstanceAccessDetailsResultFormGroup() {
		return new FormGroup<GetInstanceAccessDetailsResultFormProperties>({
		});

	}


	/** The parameters for gaining temporary access to one of your Amazon Lightsail instances. */
	export interface InstanceAccessDetails {
		certKey?: string;
		expiresAt?: Date;
		ipAddress?: string;
		password?: string;
		passwordData?: PasswordData;
		privateKey?: string;
		protocol?: InstanceAccessProtocol;
		instanceName?: string;
		username?: string;
		hostKeys?: Array<HostKeyAttributes>;
	}

	/** The parameters for gaining temporary access to one of your Amazon Lightsail instances. */
	export interface InstanceAccessDetailsFormProperties {
		certKey: FormControl<string | null | undefined>,
		expiresAt: FormControl<Date | null | undefined>,
		ipAddress: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		privateKey: FormControl<string | null | undefined>,
		protocol: FormControl<InstanceAccessProtocol | null | undefined>,
		instanceName: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateInstanceAccessDetailsFormGroup() {
		return new FormGroup<InstanceAccessDetailsFormProperties>({
			certKey: new FormControl<string | null | undefined>(undefined),
			expiresAt: new FormControl<Date | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			privateKey: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<InstanceAccessProtocol | null | undefined>(undefined),
			instanceName: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The password data for the Windows Server-based instance, including the ciphertext and the key pair name. */
	export interface PasswordData {
		ciphertext?: string;
		keyPairName?: string;
	}

	/** The password data for the Windows Server-based instance, including the ciphertext and the key pair name. */
	export interface PasswordDataFormProperties {
		ciphertext: FormControl<string | null | undefined>,
		keyPairName: FormControl<string | null | undefined>,
	}
	export function CreatePasswordDataFormGroup() {
		return new FormGroup<PasswordDataFormProperties>({
			ciphertext: new FormControl<string | null | undefined>(undefined),
			keyPairName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceAccessProtocol { ssh = 0, rdp = 1 }


	/** Describes the public SSH host keys or the RDP certificate. */
	export interface HostKeyAttributes {
		algorithm?: string;
		publicKey?: string;
		witnessedAt?: Date;
		fingerprintSHA1?: string;
		fingerprintSHA256?: string;
		notValidBefore?: Date;
		notValidAfter?: Date;
	}

	/** Describes the public SSH host keys or the RDP certificate. */
	export interface HostKeyAttributesFormProperties {
		algorithm: FormControl<string | null | undefined>,
		publicKey: FormControl<string | null | undefined>,
		witnessedAt: FormControl<Date | null | undefined>,
		fingerprintSHA1: FormControl<string | null | undefined>,
		fingerprintSHA256: FormControl<string | null | undefined>,
		notValidBefore: FormControl<Date | null | undefined>,
		notValidAfter: FormControl<Date | null | undefined>,
	}
	export function CreateHostKeyAttributesFormGroup() {
		return new FormGroup<HostKeyAttributesFormProperties>({
			algorithm: new FormControl<string | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined),
			witnessedAt: new FormControl<Date | null | undefined>(undefined),
			fingerprintSHA1: new FormControl<string | null | undefined>(undefined),
			fingerprintSHA256: new FormControl<string | null | undefined>(undefined),
			notValidBefore: new FormControl<Date | null | undefined>(undefined),
			notValidAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetInstanceAccessDetailsRequest {

		/** Required */
		instanceName: string;
		protocol?: InstanceAccessProtocol;
	}
	export interface GetInstanceAccessDetailsRequestFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
		protocol: FormControl<InstanceAccessProtocol | null | undefined>,
	}
	export function CreateGetInstanceAccessDetailsRequestFormGroup() {
		return new FormGroup<GetInstanceAccessDetailsRequestFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<InstanceAccessProtocol | null | undefined>(undefined),
		});

	}

	export interface GetInstanceMetricDataResult {
		metricName?: InstanceMetricName;
		metricData?: Array<MetricDatapoint>;
	}
	export interface GetInstanceMetricDataResultFormProperties {
		metricName: FormControl<InstanceMetricName | null | undefined>,
	}
	export function CreateGetInstanceMetricDataResultFormGroup() {
		return new FormGroup<GetInstanceMetricDataResultFormProperties>({
			metricName: new FormControl<InstanceMetricName | null | undefined>(undefined),
		});

	}

	export enum InstanceMetricName { CPUUtilization = 0, NetworkIn = 1, NetworkOut = 2, StatusCheckFailed = 3, StatusCheckFailed_Instance = 4, StatusCheckFailed_System = 5, BurstCapacityTime = 6, BurstCapacityPercentage = 7, MetadataNoToken = 8 }

	export interface GetInstanceMetricDataRequest {

		/** Required */
		instanceName: string;

		/** Required */
		metricName: InstanceMetricName;

		/** Required */
		period: number;

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;

		/** Required */
		unit: MetricUnit;

		/** Required */
		statistics: Array<MetricStatistic>;
	}
	export interface GetInstanceMetricDataRequestFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,

		/** Required */
		metricName: FormControl<InstanceMetricName | null | undefined>,

		/** Required */
		period: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		unit: FormControl<MetricUnit | null | undefined>,
	}
	export function CreateGetInstanceMetricDataRequestFormGroup() {
		return new FormGroup<GetInstanceMetricDataRequestFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricName: new FormControl<InstanceMetricName | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<MetricUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetInstancePortStatesResult {
		portStates?: Array<InstancePortState>;
	}
	export interface GetInstancePortStatesResultFormProperties {
	}
	export function CreateGetInstancePortStatesResultFormGroup() {
		return new FormGroup<GetInstancePortStatesResultFormProperties>({
		});

	}


	/** Describes open ports on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol. */
	export interface InstancePortState {
		fromPort?: number | null;
		toPort?: number | null;
		protocol?: NetworkProtocol;
		state?: PortState;
		cidrs?: Array<string>;
		ipv6Cidrs?: Array<string>;
		cidrListAliases?: Array<string>;
	}

	/** Describes open ports on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol. */
	export interface InstancePortStateFormProperties {
		fromPort: FormControl<number | null | undefined>,
		toPort: FormControl<number | null | undefined>,
		protocol: FormControl<NetworkProtocol | null | undefined>,
		state: FormControl<PortState | null | undefined>,
	}
	export function CreateInstancePortStateFormGroup() {
		return new FormGroup<InstancePortStateFormProperties>({
			fromPort: new FormControl<number | null | undefined>(undefined),
			toPort: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<NetworkProtocol | null | undefined>(undefined),
			state: new FormControl<PortState | null | undefined>(undefined),
		});

	}

	export enum PortState { open = 0, closed = 1 }

	export interface GetInstancePortStatesRequest {

		/** Required */
		instanceName: string;
	}
	export interface GetInstancePortStatesRequestFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
	}
	export function CreateGetInstancePortStatesRequestFormGroup() {
		return new FormGroup<GetInstancePortStatesRequestFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetInstanceSnapshotResult {
		instanceSnapshot?: InstanceSnapshot;
	}
	export interface GetInstanceSnapshotResultFormProperties {
	}
	export function CreateGetInstanceSnapshotResultFormGroup() {
		return new FormGroup<GetInstanceSnapshotResultFormProperties>({
		});

	}


	/** Describes an instance snapshot. */
	export interface InstanceSnapshot {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		tags?: Array<Tag>;
		state?: InstanceSnapshotState;
		progress?: string;
		fromAttachedDisks?: Array<Disk>;
		fromInstanceName?: string;
		fromInstanceArn?: string;
		fromBlueprintId?: string;
		fromBundleId?: string;
		isFromAutoSnapshot?: boolean | null;
		sizeInGb?: number | null;
	}

	/** Describes an instance snapshot. */
	export interface InstanceSnapshotFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		state: FormControl<InstanceSnapshotState | null | undefined>,
		progress: FormControl<string | null | undefined>,
		fromInstanceName: FormControl<string | null | undefined>,
		fromInstanceArn: FormControl<string | null | undefined>,
		fromBlueprintId: FormControl<string | null | undefined>,
		fromBundleId: FormControl<string | null | undefined>,
		isFromAutoSnapshot: FormControl<boolean | null | undefined>,
		sizeInGb: FormControl<number | null | undefined>,
	}
	export function CreateInstanceSnapshotFormGroup() {
		return new FormGroup<InstanceSnapshotFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			state: new FormControl<InstanceSnapshotState | null | undefined>(undefined),
			progress: new FormControl<string | null | undefined>(undefined),
			fromInstanceName: new FormControl<string | null | undefined>(undefined),
			fromInstanceArn: new FormControl<string | null | undefined>(undefined),
			fromBlueprintId: new FormControl<string | null | undefined>(undefined),
			fromBundleId: new FormControl<string | null | undefined>(undefined),
			isFromAutoSnapshot: new FormControl<boolean | null | undefined>(undefined),
			sizeInGb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InstanceSnapshotState { pending = 0, error = 1, available = 2 }

	export interface GetInstanceSnapshotRequest {

		/** Required */
		instanceSnapshotName: string;
	}
	export interface GetInstanceSnapshotRequestFormProperties {

		/** Required */
		instanceSnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateGetInstanceSnapshotRequestFormGroup() {
		return new FormGroup<GetInstanceSnapshotRequestFormProperties>({
			instanceSnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetInstanceSnapshotsResult {
		instanceSnapshots?: Array<InstanceSnapshot>;
		nextPageToken?: string;
	}
	export interface GetInstanceSnapshotsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInstanceSnapshotsResultFormGroup() {
		return new FormGroup<GetInstanceSnapshotsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInstanceSnapshotsRequest {
		pageToken?: string;
	}
	export interface GetInstanceSnapshotsRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInstanceSnapshotsRequestFormGroup() {
		return new FormGroup<GetInstanceSnapshotsRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInstanceStateResult {
		state?: InstanceState;
	}
	export interface GetInstanceStateResultFormProperties {
	}
	export function CreateGetInstanceStateResultFormGroup() {
		return new FormGroup<GetInstanceStateResultFormProperties>({
		});

	}

	export interface GetInstanceStateRequest {

		/** Required */
		instanceName: string;
	}
	export interface GetInstanceStateRequestFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
	}
	export function CreateGetInstanceStateRequestFormGroup() {
		return new FormGroup<GetInstanceStateRequestFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetInstancesResult {
		instances?: Array<Instance>;
		nextPageToken?: string;
	}
	export interface GetInstancesResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInstancesResultFormGroup() {
		return new FormGroup<GetInstancesResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInstancesRequest {
		pageToken?: string;
	}
	export interface GetInstancesRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInstancesRequestFormGroup() {
		return new FormGroup<GetInstancesRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetKeyPairResult {
		keyPair?: KeyPair;
	}
	export interface GetKeyPairResultFormProperties {
	}
	export function CreateGetKeyPairResultFormGroup() {
		return new FormGroup<GetKeyPairResultFormProperties>({
		});

	}

	export interface GetKeyPairRequest {

		/** Required */
		keyPairName: string;
	}
	export interface GetKeyPairRequestFormProperties {

		/** Required */
		keyPairName: FormControl<string | null | undefined>,
	}
	export function CreateGetKeyPairRequestFormGroup() {
		return new FormGroup<GetKeyPairRequestFormProperties>({
			keyPairName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetKeyPairsResult {
		keyPairs?: Array<KeyPair>;
		nextPageToken?: string;
	}
	export interface GetKeyPairsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetKeyPairsResultFormGroup() {
		return new FormGroup<GetKeyPairsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetKeyPairsRequest {
		pageToken?: string;
		includeDefaultKeyPair?: boolean | null;
	}
	export interface GetKeyPairsRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
		includeDefaultKeyPair: FormControl<boolean | null | undefined>,
	}
	export function CreateGetKeyPairsRequestFormGroup() {
		return new FormGroup<GetKeyPairsRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
			includeDefaultKeyPair: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetLoadBalancerResult {
		loadBalancer?: LoadBalancer;
	}
	export interface GetLoadBalancerResultFormProperties {
	}
	export function CreateGetLoadBalancerResultFormGroup() {
		return new FormGroup<GetLoadBalancerResultFormProperties>({
		});

	}


	/** Describes a load balancer. */
	export interface LoadBalancer {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		tags?: Array<Tag>;
		dnsName?: string;
		state?: LoadBalancerState;
		protocol?: LoadBalancerProtocol;
		publicPorts?: Array<number> | null;
		healthCheckPath?: string;
		instancePort?: number | null;
		instanceHealthSummary?: Array<InstanceHealthSummary>;
		tlsCertificateSummaries?: Array<LoadBalancerTlsCertificateSummary>;
		configurationOptions?: LoadBalancerConfigurationOptions;
		ipAddressType?: IpAddressType;
		httpsRedirectionEnabled?: boolean | null;
		tlsPolicyName?: string;
	}

	/** Describes a load balancer. */
	export interface LoadBalancerFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		dnsName: FormControl<string | null | undefined>,
		state: FormControl<LoadBalancerState | null | undefined>,
		protocol: FormControl<LoadBalancerProtocol | null | undefined>,
		healthCheckPath: FormControl<string | null | undefined>,
		instancePort: FormControl<number | null | undefined>,
		ipAddressType: FormControl<IpAddressType | null | undefined>,
		httpsRedirectionEnabled: FormControl<boolean | null | undefined>,
		tlsPolicyName: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerFormGroup() {
		return new FormGroup<LoadBalancerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			dnsName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<LoadBalancerState | null | undefined>(undefined),
			protocol: new FormControl<LoadBalancerProtocol | null | undefined>(undefined),
			healthCheckPath: new FormControl<string | null | undefined>(undefined),
			instancePort: new FormControl<number | null | undefined>(undefined),
			ipAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
			httpsRedirectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			tlsPolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LoadBalancerState { active = 0, provisioning = 1, active_impaired = 2, failed = 3, unknown = 4 }

	export enum LoadBalancerProtocol { HTTP_HTTPS = 0, HTTP = 1 }


	/** Describes information about the health of the instance. */
	export interface InstanceHealthSummary {
		instanceName?: string;
		instanceHealth?: InstanceHealthState;
		instanceHealthReason?: InstanceHealthReason;
	}

	/** Describes information about the health of the instance. */
	export interface InstanceHealthSummaryFormProperties {
		instanceName: FormControl<string | null | undefined>,
		instanceHealth: FormControl<InstanceHealthState | null | undefined>,
		instanceHealthReason: FormControl<InstanceHealthReason | null | undefined>,
	}
	export function CreateInstanceHealthSummaryFormGroup() {
		return new FormGroup<InstanceHealthSummaryFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined),
			instanceHealth: new FormControl<InstanceHealthState | null | undefined>(undefined),
			instanceHealthReason: new FormControl<InstanceHealthReason | null | undefined>(undefined),
		});

	}

	export enum InstanceHealthState { initial = 0, healthy = 1, unhealthy = 2, unused = 3, draining = 4, unavailable = 5 }

	export enum InstanceHealthReason { 'Lb.RegistrationInProgress' = 0, 'Lb.InitialHealthChecking' = 1, 'Lb.InternalError' = 2, 'Instance.ResponseCodeMismatch' = 3, 'Instance.Timeout' = 4, 'Instance.FailedHealthChecks' = 5, 'Instance.NotRegistered' = 6, 'Instance.NotInUse' = 7, 'Instance.DeregistrationInProgress' = 8, 'Instance.InvalidState' = 9, 'Instance.IpUnusable' = 10 }


	/** Provides a summary of SSL/TLS certificate metadata. */
	export interface LoadBalancerTlsCertificateSummary {
		name?: string;
		isAttached?: boolean | null;
	}

	/** Provides a summary of SSL/TLS certificate metadata. */
	export interface LoadBalancerTlsCertificateSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		isAttached: FormControl<boolean | null | undefined>,
	}
	export function CreateLoadBalancerTlsCertificateSummaryFormGroup() {
		return new FormGroup<LoadBalancerTlsCertificateSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			isAttached: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface LoadBalancerConfigurationOptions {
	}
	export interface LoadBalancerConfigurationOptionsFormProperties {
	}
	export function CreateLoadBalancerConfigurationOptionsFormGroup() {
		return new FormGroup<LoadBalancerConfigurationOptionsFormProperties>({
		});

	}

	export interface GetLoadBalancerRequest {

		/** Required */
		loadBalancerName: string;
	}
	export interface GetLoadBalancerRequestFormProperties {

		/** Required */
		loadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateGetLoadBalancerRequestFormGroup() {
		return new FormGroup<GetLoadBalancerRequestFormProperties>({
			loadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLoadBalancerMetricDataResult {
		metricName?: LoadBalancerMetricName;
		metricData?: Array<MetricDatapoint>;
	}
	export interface GetLoadBalancerMetricDataResultFormProperties {
		metricName: FormControl<LoadBalancerMetricName | null | undefined>,
	}
	export function CreateGetLoadBalancerMetricDataResultFormGroup() {
		return new FormGroup<GetLoadBalancerMetricDataResultFormProperties>({
			metricName: new FormControl<LoadBalancerMetricName | null | undefined>(undefined),
		});

	}

	export enum LoadBalancerMetricName { ClientTLSNegotiationErrorCount = 0, HealthyHostCount = 1, UnhealthyHostCount = 2, HTTPCode_LB_4XX_Count = 3, HTTPCode_LB_5XX_Count = 4, HTTPCode_Instance_2XX_Count = 5, HTTPCode_Instance_3XX_Count = 6, HTTPCode_Instance_4XX_Count = 7, HTTPCode_Instance_5XX_Count = 8, InstanceResponseTime = 9, RejectedConnectionCount = 10, RequestCount = 11 }

	export interface GetLoadBalancerMetricDataRequest {

		/** Required */
		loadBalancerName: string;

		/** Required */
		metricName: LoadBalancerMetricName;

		/** Required */
		period: number;

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;

		/** Required */
		unit: MetricUnit;

		/** Required */
		statistics: Array<MetricStatistic>;
	}
	export interface GetLoadBalancerMetricDataRequestFormProperties {

		/** Required */
		loadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		metricName: FormControl<LoadBalancerMetricName | null | undefined>,

		/** Required */
		period: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		unit: FormControl<MetricUnit | null | undefined>,
	}
	export function CreateGetLoadBalancerMetricDataRequestFormGroup() {
		return new FormGroup<GetLoadBalancerMetricDataRequestFormProperties>({
			loadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricName: new FormControl<LoadBalancerMetricName | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<MetricUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLoadBalancerTlsCertificatesResult {
		tlsCertificates?: Array<LoadBalancerTlsCertificate>;
	}
	export interface GetLoadBalancerTlsCertificatesResultFormProperties {
	}
	export function CreateGetLoadBalancerTlsCertificatesResultFormGroup() {
		return new FormGroup<GetLoadBalancerTlsCertificatesResultFormProperties>({
		});

	}


	/** <p>Describes a load balancer SSL/TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> */
	export interface LoadBalancerTlsCertificate {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		tags?: Array<Tag>;
		loadBalancerName?: string;
		isAttached?: boolean | null;
		status?: LoadBalancerTlsCertificateStatus;
		domainName?: string;
		domainValidationRecords?: Array<LoadBalancerTlsCertificateDomainValidationRecord>;
		failureReason?: LoadBalancerTlsCertificateFailureReason;
		issuedAt?: Date;
		issuer?: string;
		keyAlgorithm?: string;
		notAfter?: Date;
		notBefore?: Date;
		renewalSummary?: LoadBalancerTlsCertificateRenewalSummary;
		revocationReason?: LoadBalancerTlsCertificateRevocationReason;
		revokedAt?: Date;
		serial?: string;
		signatureAlgorithm?: string;
		subject?: string;
		subjectAlternativeNames?: Array<string>;
	}

	/** <p>Describes a load balancer SSL/TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> */
	export interface LoadBalancerTlsCertificateFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		loadBalancerName: FormControl<string | null | undefined>,
		isAttached: FormControl<boolean | null | undefined>,
		status: FormControl<LoadBalancerTlsCertificateStatus | null | undefined>,
		domainName: FormControl<string | null | undefined>,
		failureReason: FormControl<LoadBalancerTlsCertificateFailureReason | null | undefined>,
		issuedAt: FormControl<Date | null | undefined>,
		issuer: FormControl<string | null | undefined>,
		keyAlgorithm: FormControl<string | null | undefined>,
		notAfter: FormControl<Date | null | undefined>,
		notBefore: FormControl<Date | null | undefined>,
		revocationReason: FormControl<LoadBalancerTlsCertificateRevocationReason | null | undefined>,
		revokedAt: FormControl<Date | null | undefined>,
		serial: FormControl<string | null | undefined>,
		signatureAlgorithm: FormControl<string | null | undefined>,
		subject: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerTlsCertificateFormGroup() {
		return new FormGroup<LoadBalancerTlsCertificateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			loadBalancerName: new FormControl<string | null | undefined>(undefined),
			isAttached: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<LoadBalancerTlsCertificateStatus | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<LoadBalancerTlsCertificateFailureReason | null | undefined>(undefined),
			issuedAt: new FormControl<Date | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined),
			keyAlgorithm: new FormControl<string | null | undefined>(undefined),
			notAfter: new FormControl<Date | null | undefined>(undefined),
			notBefore: new FormControl<Date | null | undefined>(undefined),
			revocationReason: new FormControl<LoadBalancerTlsCertificateRevocationReason | null | undefined>(undefined),
			revokedAt: new FormControl<Date | null | undefined>(undefined),
			serial: new FormControl<string | null | undefined>(undefined),
			signatureAlgorithm: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LoadBalancerTlsCertificateStatus { PENDING_VALIDATION = 0, ISSUED = 1, INACTIVE = 2, EXPIRED = 3, VALIDATION_TIMED_OUT = 4, REVOKED = 5, FAILED = 6, UNKNOWN = 7 }


	/** Describes the validation record of each domain name in the SSL/TLS certificate. */
	export interface LoadBalancerTlsCertificateDomainValidationRecord {
		name?: string;
		type?: string;
		value?: string;
		validationStatus?: CertificateDomainValidationStatus;
		domainName?: string;
		dnsRecordCreationState?: LoadBalancerTlsCertificateDnsRecordCreationState;
	}

	/** Describes the validation record of each domain name in the SSL/TLS certificate. */
	export interface LoadBalancerTlsCertificateDomainValidationRecordFormProperties {
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
		validationStatus: FormControl<CertificateDomainValidationStatus | null | undefined>,
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerTlsCertificateDomainValidationRecordFormGroup() {
		return new FormGroup<LoadBalancerTlsCertificateDomainValidationRecordFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			validationStatus: new FormControl<CertificateDomainValidationStatus | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that describes the state of the canonical name (CNAME) records that are automatically added by Lightsail to the DNS of the domain to validate domain ownership. */
	export interface LoadBalancerTlsCertificateDnsRecordCreationState {
		code?: DnsRecordCreationStateCode;
		message?: string;
	}

	/** An object that describes the state of the canonical name (CNAME) records that are automatically added by Lightsail to the DNS of the domain to validate domain ownership. */
	export interface LoadBalancerTlsCertificateDnsRecordCreationStateFormProperties {
		code: FormControl<DnsRecordCreationStateCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerTlsCertificateDnsRecordCreationStateFormGroup() {
		return new FormGroup<LoadBalancerTlsCertificateDnsRecordCreationStateFormProperties>({
			code: new FormControl<DnsRecordCreationStateCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LoadBalancerTlsCertificateFailureReason { NO_AVAILABLE_CONTACTS = 0, ADDITIONAL_VERIFICATION_REQUIRED = 1, DOMAIN_NOT_ALLOWED = 2, INVALID_PUBLIC_DOMAIN = 3, OTHER = 4 }


	/** <p>Contains information about the status of Lightsail's managed renewal for the certificate.</p> <p>The renewal status of the certificate.</p> <p>The following renewal status are possible:</p> <ul> <li> <p> <b> <code>PendingAutoRenewal</code> </b> - Lightsail is attempting to automatically validate the domain names in the certificate. No further action is required. </p> </li> <li> <p> <b> <code>PendingValidation</code> </b> - Lightsail couldn't automatically validate one or more domain names in the certificate. You must take action to validate these domain names or the certificate won't be renewed. If you used DNS validation, check to make sure your certificate's domain validation records exist in your domain's DNS, and that your certificate remains in use.</p> </li> <li> <p> <b> <code>Success</code> </b> - All domain names in the certificate are validated, and Lightsail renewed the certificate. No further action is required. </p> </li> <li> <p> <b> <code>Failed</code> </b> - One or more domain names were not validated before the certificate expired, and Lightsail did not renew the certificate. You can request a new certificate using the <code>CreateCertificate</code> action.</p> </li> </ul> */
	export interface LoadBalancerTlsCertificateRenewalSummary {
		renewalStatus?: LoadBalancerTlsCertificateRenewalStatus;
		domainValidationOptions?: Array<LoadBalancerTlsCertificateDomainValidationOption>;
	}

	/** <p>Contains information about the status of Lightsail's managed renewal for the certificate.</p> <p>The renewal status of the certificate.</p> <p>The following renewal status are possible:</p> <ul> <li> <p> <b> <code>PendingAutoRenewal</code> </b> - Lightsail is attempting to automatically validate the domain names in the certificate. No further action is required. </p> </li> <li> <p> <b> <code>PendingValidation</code> </b> - Lightsail couldn't automatically validate one or more domain names in the certificate. You must take action to validate these domain names or the certificate won't be renewed. If you used DNS validation, check to make sure your certificate's domain validation records exist in your domain's DNS, and that your certificate remains in use.</p> </li> <li> <p> <b> <code>Success</code> </b> - All domain names in the certificate are validated, and Lightsail renewed the certificate. No further action is required. </p> </li> <li> <p> <b> <code>Failed</code> </b> - One or more domain names were not validated before the certificate expired, and Lightsail did not renew the certificate. You can request a new certificate using the <code>CreateCertificate</code> action.</p> </li> </ul> */
	export interface LoadBalancerTlsCertificateRenewalSummaryFormProperties {
		renewalStatus: FormControl<LoadBalancerTlsCertificateRenewalStatus | null | undefined>,
	}
	export function CreateLoadBalancerTlsCertificateRenewalSummaryFormGroup() {
		return new FormGroup<LoadBalancerTlsCertificateRenewalSummaryFormProperties>({
			renewalStatus: new FormControl<LoadBalancerTlsCertificateRenewalStatus | null | undefined>(undefined),
		});

	}

	export enum LoadBalancerTlsCertificateRenewalStatus { PENDING_AUTO_RENEWAL = 0, PENDING_VALIDATION = 1, SUCCESS = 2, FAILED = 3 }


	/** Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership. */
	export interface LoadBalancerTlsCertificateDomainValidationOption {
		domainName?: string;
		validationStatus?: CertificateDomainValidationStatus;
	}

	/** Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership. */
	export interface LoadBalancerTlsCertificateDomainValidationOptionFormProperties {
		domainName: FormControl<string | null | undefined>,
		validationStatus: FormControl<CertificateDomainValidationStatus | null | undefined>,
	}
	export function CreateLoadBalancerTlsCertificateDomainValidationOptionFormGroup() {
		return new FormGroup<LoadBalancerTlsCertificateDomainValidationOptionFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			validationStatus: new FormControl<CertificateDomainValidationStatus | null | undefined>(undefined),
		});

	}

	export enum LoadBalancerTlsCertificateRevocationReason { UNSPECIFIED = 0, KEY_COMPROMISE = 1, CA_COMPROMISE = 2, AFFILIATION_CHANGED = 3, SUPERCEDED = 4, CESSATION_OF_OPERATION = 5, CERTIFICATE_HOLD = 6, REMOVE_FROM_CRL = 7, PRIVILEGE_WITHDRAWN = 8, A_A_COMPROMISE = 9 }

	export interface GetLoadBalancerTlsCertificatesRequest {

		/** Required */
		loadBalancerName: string;
	}
	export interface GetLoadBalancerTlsCertificatesRequestFormProperties {

		/** Required */
		loadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateGetLoadBalancerTlsCertificatesRequestFormGroup() {
		return new FormGroup<GetLoadBalancerTlsCertificatesRequestFormProperties>({
			loadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLoadBalancerTlsPoliciesResult {
		tlsPolicies?: Array<LoadBalancerTlsPolicy>;
		nextPageToken?: string;
	}
	export interface GetLoadBalancerTlsPoliciesResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetLoadBalancerTlsPoliciesResultFormGroup() {
		return new FormGroup<GetLoadBalancerTlsPoliciesResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes the TLS security policies that are available for Lightsail load balancers.</p> <p>For more information about load balancer TLS security policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface LoadBalancerTlsPolicy {
		name?: string;
		isDefault?: boolean | null;
		description?: string;
		protocols?: Array<string>;
		ciphers?: Array<string>;
	}

	/** <p>Describes the TLS security policies that are available for Lightsail load balancers.</p> <p>For more information about load balancer TLS security policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> */
	export interface LoadBalancerTlsPolicyFormProperties {
		name: FormControl<string | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerTlsPolicyFormGroup() {
		return new FormGroup<LoadBalancerTlsPolicyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLoadBalancerTlsPoliciesRequest {
		pageToken?: string;
	}
	export interface GetLoadBalancerTlsPoliciesRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetLoadBalancerTlsPoliciesRequestFormGroup() {
		return new FormGroup<GetLoadBalancerTlsPoliciesRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLoadBalancersResult {
		loadBalancers?: Array<LoadBalancer>;
		nextPageToken?: string;
	}
	export interface GetLoadBalancersResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetLoadBalancersResultFormGroup() {
		return new FormGroup<GetLoadBalancersResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLoadBalancersRequest {
		pageToken?: string;
	}
	export interface GetLoadBalancersRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetLoadBalancersRequestFormGroup() {
		return new FormGroup<GetLoadBalancersRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOperationResult {
		operation?: Operation;
	}
	export interface GetOperationResultFormProperties {
	}
	export function CreateGetOperationResultFormGroup() {
		return new FormGroup<GetOperationResultFormProperties>({
		});

	}

	export interface GetOperationRequest {

		/** Required */
		operationId: string;
	}
	export interface GetOperationRequestFormProperties {

		/** Required */
		operationId: FormControl<string | null | undefined>,
	}
	export function CreateGetOperationRequestFormGroup() {
		return new FormGroup<GetOperationRequestFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetOperationsResult {
		operations?: Array<Operation>;
		nextPageToken?: string;
	}
	export interface GetOperationsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOperationsResultFormGroup() {
		return new FormGroup<GetOperationsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOperationsRequest {
		pageToken?: string;
	}
	export interface GetOperationsRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOperationsRequestFormGroup() {
		return new FormGroup<GetOperationsRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOperationsForResourceResult {
		operations?: Array<Operation>;
		nextPageCount?: string;
		nextPageToken?: string;
	}
	export interface GetOperationsForResourceResultFormProperties {
		nextPageCount: FormControl<string | null | undefined>,
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOperationsForResourceResultFormGroup() {
		return new FormGroup<GetOperationsForResourceResultFormProperties>({
			nextPageCount: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOperationsForResourceRequest {

		/** Required */
		resourceName: string;
		pageToken?: string;
	}
	export interface GetOperationsForResourceRequestFormProperties {

		/** Required */
		resourceName: FormControl<string | null | undefined>,
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOperationsForResourceRequestFormGroup() {
		return new FormGroup<GetOperationsForResourceRequestFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRegionsResult {
		regions?: Array<Region>;
	}
	export interface GetRegionsResultFormProperties {
	}
	export function CreateGetRegionsResultFormGroup() {
		return new FormGroup<GetRegionsResultFormProperties>({
		});

	}


	/** Describes the Amazon Web Services Region. */
	export interface Region {
		continentCode?: string;
		description?: string;
		displayName?: string;
		name?: RegionName;
		availabilityZones?: Array<AvailabilityZone>;
		relationalDatabaseAvailabilityZones?: Array<AvailabilityZone>;
	}

	/** Describes the Amazon Web Services Region. */
	export interface RegionFormProperties {
		continentCode: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		name: FormControl<RegionName | null | undefined>,
	}
	export function CreateRegionFormGroup() {
		return new FormGroup<RegionFormProperties>({
			continentCode: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<RegionName | null | undefined>(undefined),
		});

	}


	/** Describes an Availability Zone. This is returned only as part of a <code>GetRegions</code> request. */
	export interface AvailabilityZone {
		zoneName?: string;
		state?: string;
	}

	/** Describes an Availability Zone. This is returned only as part of a <code>GetRegions</code> request. */
	export interface AvailabilityZoneFormProperties {
		zoneName: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityZoneFormGroup() {
		return new FormGroup<AvailabilityZoneFormProperties>({
			zoneName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRegionsRequest {
		includeAvailabilityZones?: boolean | null;
		includeRelationalDatabaseAvailabilityZones?: boolean | null;
	}
	export interface GetRegionsRequestFormProperties {
		includeAvailabilityZones: FormControl<boolean | null | undefined>,
		includeRelationalDatabaseAvailabilityZones: FormControl<boolean | null | undefined>,
	}
	export function CreateGetRegionsRequestFormGroup() {
		return new FormGroup<GetRegionsRequestFormProperties>({
			includeAvailabilityZones: new FormControl<boolean | null | undefined>(undefined),
			includeRelationalDatabaseAvailabilityZones: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabaseResult {
		relationalDatabase?: RelationalDatabase;
	}
	export interface GetRelationalDatabaseResultFormProperties {
	}
	export function CreateGetRelationalDatabaseResultFormGroup() {
		return new FormGroup<GetRelationalDatabaseResultFormProperties>({
		});

	}


	/** Describes a database. */
	export interface RelationalDatabase {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		tags?: Array<Tag>;
		relationalDatabaseBlueprintId?: string;
		relationalDatabaseBundleId?: string;
		masterDatabaseName?: string;
		hardware?: RelationalDatabaseHardware;
		state?: string;
		secondaryAvailabilityZone?: string;
		backupRetentionEnabled?: boolean | null;
		pendingModifiedValues?: PendingModifiedRelationalDatabaseValues;
		engine?: string;
		engineVersion?: string;
		latestRestorableTime?: Date;
		masterUsername?: string;
		parameterApplyStatus?: string;
		preferredBackupWindow?: string;
		preferredMaintenanceWindow?: string;
		publiclyAccessible?: boolean | null;
		masterEndpoint?: RelationalDatabaseEndpoint;
		pendingMaintenanceActions?: Array<PendingMaintenanceAction>;
		caCertificateIdentifier?: string;
	}

	/** Describes a database. */
	export interface RelationalDatabaseFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		relationalDatabaseBlueprintId: FormControl<string | null | undefined>,
		relationalDatabaseBundleId: FormControl<string | null | undefined>,
		masterDatabaseName: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		secondaryAvailabilityZone: FormControl<string | null | undefined>,
		backupRetentionEnabled: FormControl<boolean | null | undefined>,
		engine: FormControl<string | null | undefined>,
		engineVersion: FormControl<string | null | undefined>,
		latestRestorableTime: FormControl<Date | null | undefined>,
		masterUsername: FormControl<string | null | undefined>,
		parameterApplyStatus: FormControl<string | null | undefined>,
		preferredBackupWindow: FormControl<string | null | undefined>,
		preferredMaintenanceWindow: FormControl<string | null | undefined>,
		publiclyAccessible: FormControl<boolean | null | undefined>,
		caCertificateIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateRelationalDatabaseFormGroup() {
		return new FormGroup<RelationalDatabaseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			relationalDatabaseBlueprintId: new FormControl<string | null | undefined>(undefined),
			relationalDatabaseBundleId: new FormControl<string | null | undefined>(undefined),
			masterDatabaseName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			secondaryAvailabilityZone: new FormControl<string | null | undefined>(undefined),
			backupRetentionEnabled: new FormControl<boolean | null | undefined>(undefined),
			engine: new FormControl<string | null | undefined>(undefined),
			engineVersion: new FormControl<string | null | undefined>(undefined),
			latestRestorableTime: new FormControl<Date | null | undefined>(undefined),
			masterUsername: new FormControl<string | null | undefined>(undefined),
			parameterApplyStatus: new FormControl<string | null | undefined>(undefined),
			preferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			preferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			publiclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			caCertificateIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the hardware of a database. */
	export interface RelationalDatabaseHardware {
		cpuCount?: number | null;
		diskSizeInGb?: number | null;
		ramSizeInGb?: number;
	}

	/** Describes the hardware of a database. */
	export interface RelationalDatabaseHardwareFormProperties {
		cpuCount: FormControl<number | null | undefined>,
		diskSizeInGb: FormControl<number | null | undefined>,
		ramSizeInGb: FormControl<number | null | undefined>,
	}
	export function CreateRelationalDatabaseHardwareFormGroup() {
		return new FormGroup<RelationalDatabaseHardwareFormProperties>({
			cpuCount: new FormControl<number | null | undefined>(undefined),
			diskSizeInGb: new FormControl<number | null | undefined>(undefined),
			ramSizeInGb: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a pending database value modification. */
	export interface PendingModifiedRelationalDatabaseValues {
		masterUserPassword?: string;
		engineVersion?: string;
		backupRetentionEnabled?: boolean | null;
	}

	/** Describes a pending database value modification. */
	export interface PendingModifiedRelationalDatabaseValuesFormProperties {
		masterUserPassword: FormControl<string | null | undefined>,
		engineVersion: FormControl<string | null | undefined>,
		backupRetentionEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePendingModifiedRelationalDatabaseValuesFormGroup() {
		return new FormGroup<PendingModifiedRelationalDatabaseValuesFormProperties>({
			masterUserPassword: new FormControl<string | null | undefined>(undefined),
			engineVersion: new FormControl<string | null | undefined>(undefined),
			backupRetentionEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes an endpoint for a database. */
	export interface RelationalDatabaseEndpoint {
		port?: number | null;
		address?: string;
	}

	/** Describes an endpoint for a database. */
	export interface RelationalDatabaseEndpointFormProperties {
		port: FormControl<number | null | undefined>,
		address: FormControl<string | null | undefined>,
	}
	export function CreateRelationalDatabaseEndpointFormGroup() {
		return new FormGroup<RelationalDatabaseEndpointFormProperties>({
			port: new FormControl<number | null | undefined>(undefined),
			address: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a pending database maintenance action. */
	export interface PendingMaintenanceAction {
		action?: string;
		description?: string;
		currentApplyDate?: Date;
	}

	/** Describes a pending database maintenance action. */
	export interface PendingMaintenanceActionFormProperties {
		action: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		currentApplyDate: FormControl<Date | null | undefined>,
	}
	export function CreatePendingMaintenanceActionFormGroup() {
		return new FormGroup<PendingMaintenanceActionFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			currentApplyDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabaseRequest {

		/** Required */
		relationalDatabaseName: string;
	}
	export interface GetRelationalDatabaseRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabaseRequestFormGroup() {
		return new FormGroup<GetRelationalDatabaseRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRelationalDatabaseBlueprintsResult {
		blueprints?: Array<RelationalDatabaseBlueprint>;
		nextPageToken?: string;
	}
	export interface GetRelationalDatabaseBlueprintsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabaseBlueprintsResultFormGroup() {
		return new FormGroup<GetRelationalDatabaseBlueprintsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a database image, or blueprint. A blueprint describes the major engine version of a database. */
	export interface RelationalDatabaseBlueprint {
		blueprintId?: string;
		engine?: RelationalDatabaseEngine;
		engineVersion?: string;
		engineDescription?: string;
		engineVersionDescription?: string;
		isEngineDefault?: boolean | null;
	}

	/** Describes a database image, or blueprint. A blueprint describes the major engine version of a database. */
	export interface RelationalDatabaseBlueprintFormProperties {
		blueprintId: FormControl<string | null | undefined>,
		engine: FormControl<RelationalDatabaseEngine | null | undefined>,
		engineVersion: FormControl<string | null | undefined>,
		engineDescription: FormControl<string | null | undefined>,
		engineVersionDescription: FormControl<string | null | undefined>,
		isEngineDefault: FormControl<boolean | null | undefined>,
	}
	export function CreateRelationalDatabaseBlueprintFormGroup() {
		return new FormGroup<RelationalDatabaseBlueprintFormProperties>({
			blueprintId: new FormControl<string | null | undefined>(undefined),
			engine: new FormControl<RelationalDatabaseEngine | null | undefined>(undefined),
			engineVersion: new FormControl<string | null | undefined>(undefined),
			engineDescription: new FormControl<string | null | undefined>(undefined),
			engineVersionDescription: new FormControl<string | null | undefined>(undefined),
			isEngineDefault: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum RelationalDatabaseEngine { mysql = 0 }

	export interface GetRelationalDatabaseBlueprintsRequest {
		pageToken?: string;
	}
	export interface GetRelationalDatabaseBlueprintsRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabaseBlueprintsRequestFormGroup() {
		return new FormGroup<GetRelationalDatabaseBlueprintsRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabaseBundlesResult {
		bundles?: Array<RelationalDatabaseBundle>;
		nextPageToken?: string;
	}
	export interface GetRelationalDatabaseBundlesResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabaseBundlesResultFormGroup() {
		return new FormGroup<GetRelationalDatabaseBundlesResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a database bundle. A bundle describes the performance specifications of the database. */
	export interface RelationalDatabaseBundle {
		bundleId?: string;
		name?: string;
		price?: number;
		ramSizeInGb?: number;
		diskSizeInGb?: number | null;
		transferPerMonthInGb?: number | null;
		cpuCount?: number | null;
		isEncrypted?: boolean | null;
		isActive?: boolean | null;
	}

	/** Describes a database bundle. A bundle describes the performance specifications of the database. */
	export interface RelationalDatabaseBundleFormProperties {
		bundleId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		price: FormControl<number | null | undefined>,
		ramSizeInGb: FormControl<number | null | undefined>,
		diskSizeInGb: FormControl<number | null | undefined>,
		transferPerMonthInGb: FormControl<number | null | undefined>,
		cpuCount: FormControl<number | null | undefined>,
		isEncrypted: FormControl<boolean | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
	}
	export function CreateRelationalDatabaseBundleFormGroup() {
		return new FormGroup<RelationalDatabaseBundleFormProperties>({
			bundleId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			ramSizeInGb: new FormControl<number | null | undefined>(undefined),
			diskSizeInGb: new FormControl<number | null | undefined>(undefined),
			transferPerMonthInGb: new FormControl<number | null | undefined>(undefined),
			cpuCount: new FormControl<number | null | undefined>(undefined),
			isEncrypted: new FormControl<boolean | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabaseBundlesRequest {
		pageToken?: string;
		includeInactive?: boolean | null;
	}
	export interface GetRelationalDatabaseBundlesRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
		includeInactive: FormControl<boolean | null | undefined>,
	}
	export function CreateGetRelationalDatabaseBundlesRequestFormGroup() {
		return new FormGroup<GetRelationalDatabaseBundlesRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
			includeInactive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabaseEventsResult {
		relationalDatabaseEvents?: Array<RelationalDatabaseEvent>;
		nextPageToken?: string;
	}
	export interface GetRelationalDatabaseEventsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabaseEventsResultFormGroup() {
		return new FormGroup<GetRelationalDatabaseEventsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an event for a database. */
	export interface RelationalDatabaseEvent {
		resource?: string;
		createdAt?: Date;
		message?: string;
		eventCategories?: Array<string>;
	}

	/** Describes an event for a database. */
	export interface RelationalDatabaseEventFormProperties {
		resource: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateRelationalDatabaseEventFormGroup() {
		return new FormGroup<RelationalDatabaseEventFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabaseEventsRequest {

		/** Required */
		relationalDatabaseName: string;
		durationInMinutes?: number | null;
		pageToken?: string;
	}
	export interface GetRelationalDatabaseEventsRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,
		durationInMinutes: FormControl<number | null | undefined>,
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabaseEventsRequestFormGroup() {
		return new FormGroup<GetRelationalDatabaseEventsRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			durationInMinutes: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabaseLogEventsResult {
		resourceLogEvents?: Array<LogEvent>;
		nextBackwardToken?: string;
		nextForwardToken?: string;
	}
	export interface GetRelationalDatabaseLogEventsResultFormProperties {
		nextBackwardToken: FormControl<string | null | undefined>,
		nextForwardToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabaseLogEventsResultFormGroup() {
		return new FormGroup<GetRelationalDatabaseLogEventsResultFormProperties>({
			nextBackwardToken: new FormControl<string | null | undefined>(undefined),
			nextForwardToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a database log event. */
	export interface LogEvent {
		createdAt?: Date;
		message?: string;
	}

	/** Describes a database log event. */
	export interface LogEventFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateLogEventFormGroup() {
		return new FormGroup<LogEventFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabaseLogEventsRequest {

		/** Required */
		relationalDatabaseName: string;

		/** Required */
		logStreamName: string;
		startTime?: Date;
		endTime?: Date;
		startFromHead?: boolean | null;
		pageToken?: string;
	}
	export interface GetRelationalDatabaseLogEventsRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,

		/** Required */
		logStreamName: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		startFromHead: FormControl<boolean | null | undefined>,
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabaseLogEventsRequestFormGroup() {
		return new FormGroup<GetRelationalDatabaseLogEventsRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			startFromHead: new FormControl<boolean | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabaseLogStreamsResult {
		logStreams?: Array<string>;
	}
	export interface GetRelationalDatabaseLogStreamsResultFormProperties {
	}
	export function CreateGetRelationalDatabaseLogStreamsResultFormGroup() {
		return new FormGroup<GetRelationalDatabaseLogStreamsResultFormProperties>({
		});

	}

	export interface GetRelationalDatabaseLogStreamsRequest {

		/** Required */
		relationalDatabaseName: string;
	}
	export interface GetRelationalDatabaseLogStreamsRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabaseLogStreamsRequestFormGroup() {
		return new FormGroup<GetRelationalDatabaseLogStreamsRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRelationalDatabaseMasterUserPasswordResult {
		masterUserPassword?: string;
		createdAt?: Date;
	}
	export interface GetRelationalDatabaseMasterUserPasswordResultFormProperties {
		masterUserPassword: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetRelationalDatabaseMasterUserPasswordResultFormGroup() {
		return new FormGroup<GetRelationalDatabaseMasterUserPasswordResultFormProperties>({
			masterUserPassword: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabaseMasterUserPasswordRequest {

		/** Required */
		relationalDatabaseName: string;
		passwordVersion?: RelationalDatabasePasswordVersion;
	}
	export interface GetRelationalDatabaseMasterUserPasswordRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,
		passwordVersion: FormControl<RelationalDatabasePasswordVersion | null | undefined>,
	}
	export function CreateGetRelationalDatabaseMasterUserPasswordRequestFormGroup() {
		return new FormGroup<GetRelationalDatabaseMasterUserPasswordRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			passwordVersion: new FormControl<RelationalDatabasePasswordVersion | null | undefined>(undefined),
		});

	}

	export enum RelationalDatabasePasswordVersion { CURRENT = 0, PREVIOUS = 1, PENDING = 2 }

	export interface GetRelationalDatabaseMetricDataResult {
		metricName?: RelationalDatabaseMetricName;
		metricData?: Array<MetricDatapoint>;
	}
	export interface GetRelationalDatabaseMetricDataResultFormProperties {
		metricName: FormControl<RelationalDatabaseMetricName | null | undefined>,
	}
	export function CreateGetRelationalDatabaseMetricDataResultFormGroup() {
		return new FormGroup<GetRelationalDatabaseMetricDataResultFormProperties>({
			metricName: new FormControl<RelationalDatabaseMetricName | null | undefined>(undefined),
		});

	}

	export enum RelationalDatabaseMetricName { CPUUtilization = 0, DatabaseConnections = 1, DiskQueueDepth = 2, FreeStorageSpace = 3, NetworkReceiveThroughput = 4, NetworkTransmitThroughput = 5 }

	export interface GetRelationalDatabaseMetricDataRequest {

		/** Required */
		relationalDatabaseName: string;

		/** Required */
		metricName: RelationalDatabaseMetricName;

		/** Required */
		period: number;

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;

		/** Required */
		unit: MetricUnit;

		/** Required */
		statistics: Array<MetricStatistic>;
	}
	export interface GetRelationalDatabaseMetricDataRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,

		/** Required */
		metricName: FormControl<RelationalDatabaseMetricName | null | undefined>,

		/** Required */
		period: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		unit: FormControl<MetricUnit | null | undefined>,
	}
	export function CreateGetRelationalDatabaseMetricDataRequestFormGroup() {
		return new FormGroup<GetRelationalDatabaseMetricDataRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricName: new FormControl<RelationalDatabaseMetricName | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<MetricUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRelationalDatabaseParametersResult {
		parameters?: Array<RelationalDatabaseParameter>;
		nextPageToken?: string;
	}
	export interface GetRelationalDatabaseParametersResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabaseParametersResultFormGroup() {
		return new FormGroup<GetRelationalDatabaseParametersResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the parameters of a database. */
	export interface RelationalDatabaseParameter {
		allowedValues?: string;
		applyMethod?: string;
		applyType?: string;
		dataType?: string;
		description?: string;
		isModifiable?: boolean | null;
		parameterName?: string;
		parameterValue?: string;
	}

	/** Describes the parameters of a database. */
	export interface RelationalDatabaseParameterFormProperties {
		allowedValues: FormControl<string | null | undefined>,
		applyMethod: FormControl<string | null | undefined>,
		applyType: FormControl<string | null | undefined>,
		dataType: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		isModifiable: FormControl<boolean | null | undefined>,
		parameterName: FormControl<string | null | undefined>,
		parameterValue: FormControl<string | null | undefined>,
	}
	export function CreateRelationalDatabaseParameterFormGroup() {
		return new FormGroup<RelationalDatabaseParameterFormProperties>({
			allowedValues: new FormControl<string | null | undefined>(undefined),
			applyMethod: new FormControl<string | null | undefined>(undefined),
			applyType: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			isModifiable: new FormControl<boolean | null | undefined>(undefined),
			parameterName: new FormControl<string | null | undefined>(undefined),
			parameterValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabaseParametersRequest {

		/** Required */
		relationalDatabaseName: string;
		pageToken?: string;
	}
	export interface GetRelationalDatabaseParametersRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabaseParametersRequestFormGroup() {
		return new FormGroup<GetRelationalDatabaseParametersRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabaseSnapshotResult {
		relationalDatabaseSnapshot?: RelationalDatabaseSnapshot;
	}
	export interface GetRelationalDatabaseSnapshotResultFormProperties {
	}
	export function CreateGetRelationalDatabaseSnapshotResultFormGroup() {
		return new FormGroup<GetRelationalDatabaseSnapshotResultFormProperties>({
		});

	}


	/** Describes a database snapshot. */
	export interface RelationalDatabaseSnapshot {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		tags?: Array<Tag>;
		engine?: string;
		engineVersion?: string;
		sizeInGb?: number | null;
		state?: string;
		fromRelationalDatabaseName?: string;
		fromRelationalDatabaseArn?: string;
		fromRelationalDatabaseBundleId?: string;
		fromRelationalDatabaseBlueprintId?: string;
	}

	/** Describes a database snapshot. */
	export interface RelationalDatabaseSnapshotFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		engine: FormControl<string | null | undefined>,
		engineVersion: FormControl<string | null | undefined>,
		sizeInGb: FormControl<number | null | undefined>,
		state: FormControl<string | null | undefined>,
		fromRelationalDatabaseName: FormControl<string | null | undefined>,
		fromRelationalDatabaseArn: FormControl<string | null | undefined>,
		fromRelationalDatabaseBundleId: FormControl<string | null | undefined>,
		fromRelationalDatabaseBlueprintId: FormControl<string | null | undefined>,
	}
	export function CreateRelationalDatabaseSnapshotFormGroup() {
		return new FormGroup<RelationalDatabaseSnapshotFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			engine: new FormControl<string | null | undefined>(undefined),
			engineVersion: new FormControl<string | null | undefined>(undefined),
			sizeInGb: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			fromRelationalDatabaseName: new FormControl<string | null | undefined>(undefined),
			fromRelationalDatabaseArn: new FormControl<string | null | undefined>(undefined),
			fromRelationalDatabaseBundleId: new FormControl<string | null | undefined>(undefined),
			fromRelationalDatabaseBlueprintId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabaseSnapshotRequest {

		/** Required */
		relationalDatabaseSnapshotName: string;
	}
	export interface GetRelationalDatabaseSnapshotRequestFormProperties {

		/** Required */
		relationalDatabaseSnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabaseSnapshotRequestFormGroup() {
		return new FormGroup<GetRelationalDatabaseSnapshotRequestFormProperties>({
			relationalDatabaseSnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRelationalDatabaseSnapshotsResult {
		relationalDatabaseSnapshots?: Array<RelationalDatabaseSnapshot>;
		nextPageToken?: string;
	}
	export interface GetRelationalDatabaseSnapshotsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabaseSnapshotsResultFormGroup() {
		return new FormGroup<GetRelationalDatabaseSnapshotsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabaseSnapshotsRequest {
		pageToken?: string;
	}
	export interface GetRelationalDatabaseSnapshotsRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabaseSnapshotsRequestFormGroup() {
		return new FormGroup<GetRelationalDatabaseSnapshotsRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabasesResult {
		relationalDatabases?: Array<RelationalDatabase>;
		nextPageToken?: string;
	}
	export interface GetRelationalDatabasesResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabasesResultFormGroup() {
		return new FormGroup<GetRelationalDatabasesResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabasesRequest {
		pageToken?: string;
	}
	export interface GetRelationalDatabasesRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabasesRequestFormGroup() {
		return new FormGroup<GetRelationalDatabasesRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetStaticIpResult {
		staticIp?: StaticIp;
	}
	export interface GetStaticIpResultFormProperties {
	}
	export function CreateGetStaticIpResultFormGroup() {
		return new FormGroup<GetStaticIpResultFormProperties>({
		});

	}


	/** Describes a static IP. */
	export interface StaticIp {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;
		location?: ResourceLocation;
		resourceType?: ResourceType;
		ipAddress?: string;
		attachedTo?: string;
		isAttached?: boolean | null;
	}

	/** Describes a static IP. */
	export interface StaticIpFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		ipAddress: FormControl<string | null | undefined>,
		attachedTo: FormControl<string | null | undefined>,
		isAttached: FormControl<boolean | null | undefined>,
	}
	export function CreateStaticIpFormGroup() {
		return new FormGroup<StaticIpFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			attachedTo: new FormControl<string | null | undefined>(undefined),
			isAttached: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetStaticIpRequest {

		/** Required */
		staticIpName: string;
	}
	export interface GetStaticIpRequestFormProperties {

		/** Required */
		staticIpName: FormControl<string | null | undefined>,
	}
	export function CreateGetStaticIpRequestFormGroup() {
		return new FormGroup<GetStaticIpRequestFormProperties>({
			staticIpName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetStaticIpsResult {
		staticIps?: Array<StaticIp>;
		nextPageToken?: string;
	}
	export interface GetStaticIpsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetStaticIpsResultFormGroup() {
		return new FormGroup<GetStaticIpsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetStaticIpsRequest {
		pageToken?: string;
	}
	export interface GetStaticIpsRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetStaticIpsRequestFormGroup() {
		return new FormGroup<GetStaticIpsRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportKeyPairResult {
		operation?: Operation;
	}
	export interface ImportKeyPairResultFormProperties {
	}
	export function CreateImportKeyPairResultFormGroup() {
		return new FormGroup<ImportKeyPairResultFormProperties>({
		});

	}

	export interface ImportKeyPairRequest {

		/** Required */
		keyPairName: string;

		/** Required */
		publicKeyBase64: string;
	}
	export interface ImportKeyPairRequestFormProperties {

		/** Required */
		keyPairName: FormControl<string | null | undefined>,

		/** Required */
		publicKeyBase64: FormControl<string | null | undefined>,
	}
	export function CreateImportKeyPairRequestFormGroup() {
		return new FormGroup<ImportKeyPairRequestFormProperties>({
			keyPairName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publicKeyBase64: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IsVpcPeeredResult {
		isPeered?: boolean | null;
	}
	export interface IsVpcPeeredResultFormProperties {
		isPeered: FormControl<boolean | null | undefined>,
	}
	export function CreateIsVpcPeeredResultFormGroup() {
		return new FormGroup<IsVpcPeeredResultFormProperties>({
			isPeered: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface IsVpcPeeredRequest {
	}
	export interface IsVpcPeeredRequestFormProperties {
	}
	export function CreateIsVpcPeeredRequestFormGroup() {
		return new FormGroup<IsVpcPeeredRequestFormProperties>({
		});

	}

	export interface OpenInstancePublicPortsResult {
		operation?: Operation;
	}
	export interface OpenInstancePublicPortsResultFormProperties {
	}
	export function CreateOpenInstancePublicPortsResultFormGroup() {
		return new FormGroup<OpenInstancePublicPortsResultFormProperties>({
		});

	}

	export interface OpenInstancePublicPortsRequest {

		/** Required */
		portInfo: PortInfo;

		/** Required */
		instanceName: string;
	}
	export interface OpenInstancePublicPortsRequestFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
	}
	export function CreateOpenInstancePublicPortsRequestFormGroup() {
		return new FormGroup<OpenInstancePublicPortsRequestFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PeerVpcResult {
		operation?: Operation;
	}
	export interface PeerVpcResultFormProperties {
	}
	export function CreatePeerVpcResultFormGroup() {
		return new FormGroup<PeerVpcResultFormProperties>({
		});

	}

	export interface PeerVpcRequest {
	}
	export interface PeerVpcRequestFormProperties {
	}
	export function CreatePeerVpcRequestFormGroup() {
		return new FormGroup<PeerVpcRequestFormProperties>({
		});

	}

	export interface PutAlarmResult {
		operations?: Array<Operation>;
	}
	export interface PutAlarmResultFormProperties {
	}
	export function CreatePutAlarmResultFormGroup() {
		return new FormGroup<PutAlarmResultFormProperties>({
		});

	}

	export interface PutAlarmRequest {

		/** Required */
		alarmName: string;

		/** Required */
		metricName: MetricName;

		/** Required */
		monitoredResourceName: string;

		/** Required */
		comparisonOperator: ComparisonOperator;

		/** Required */
		threshold: number;

		/** Required */
		evaluationPeriods: number;
		datapointsToAlarm?: number | null;
		treatMissingData?: TreatMissingData;
		contactProtocols?: Array<ContactProtocol>;
		notificationTriggers?: Array<AlarmState>;
		notificationEnabled?: boolean | null;
	}
	export interface PutAlarmRequestFormProperties {

		/** Required */
		alarmName: FormControl<string | null | undefined>,

		/** Required */
		metricName: FormControl<MetricName | null | undefined>,

		/** Required */
		monitoredResourceName: FormControl<string | null | undefined>,

		/** Required */
		comparisonOperator: FormControl<ComparisonOperator | null | undefined>,

		/** Required */
		threshold: FormControl<number | null | undefined>,

		/** Required */
		evaluationPeriods: FormControl<number | null | undefined>,
		datapointsToAlarm: FormControl<number | null | undefined>,
		treatMissingData: FormControl<TreatMissingData | null | undefined>,
		notificationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutAlarmRequestFormGroup() {
		return new FormGroup<PutAlarmRequestFormProperties>({
			alarmName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricName: new FormControl<MetricName | null | undefined>(undefined, [Validators.required]),
			monitoredResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			comparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined, [Validators.required]),
			threshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			evaluationPeriods: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			datapointsToAlarm: new FormControl<number | null | undefined>(undefined),
			treatMissingData: new FormControl<TreatMissingData | null | undefined>(undefined),
			notificationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutInstancePublicPortsResult {
		operation?: Operation;
	}
	export interface PutInstancePublicPortsResultFormProperties {
	}
	export function CreatePutInstancePublicPortsResultFormGroup() {
		return new FormGroup<PutInstancePublicPortsResultFormProperties>({
		});

	}

	export interface PutInstancePublicPortsRequest {

		/** Required */
		portInfos: Array<PortInfo>;

		/** Required */
		instanceName: string;
	}
	export interface PutInstancePublicPortsRequestFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
	}
	export function CreatePutInstancePublicPortsRequestFormGroup() {
		return new FormGroup<PutInstancePublicPortsRequestFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RebootInstanceResult {
		operations?: Array<Operation>;
	}
	export interface RebootInstanceResultFormProperties {
	}
	export function CreateRebootInstanceResultFormGroup() {
		return new FormGroup<RebootInstanceResultFormProperties>({
		});

	}

	export interface RebootInstanceRequest {

		/** Required */
		instanceName: string;
	}
	export interface RebootInstanceRequestFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
	}
	export function CreateRebootInstanceRequestFormGroup() {
		return new FormGroup<RebootInstanceRequestFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RebootRelationalDatabaseResult {
		operations?: Array<Operation>;
	}
	export interface RebootRelationalDatabaseResultFormProperties {
	}
	export function CreateRebootRelationalDatabaseResultFormGroup() {
		return new FormGroup<RebootRelationalDatabaseResultFormProperties>({
		});

	}

	export interface RebootRelationalDatabaseRequest {

		/** Required */
		relationalDatabaseName: string;
	}
	export interface RebootRelationalDatabaseRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateRebootRelationalDatabaseRequestFormGroup() {
		return new FormGroup<RebootRelationalDatabaseRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterContainerImageResult {
		containerImage?: ContainerImage;
	}
	export interface RegisterContainerImageResultFormProperties {
	}
	export function CreateRegisterContainerImageResultFormGroup() {
		return new FormGroup<RegisterContainerImageResultFormProperties>({
		});

	}

	export interface RegisterContainerImageRequest {

		/** Required */
		serviceName: string;

		/** Required */
		label: string;

		/** Required */
		digest: string;
	}
	export interface RegisterContainerImageRequestFormProperties {

		/** Required */
		serviceName: FormControl<string | null | undefined>,

		/** Required */
		label: FormControl<string | null | undefined>,

		/** Required */
		digest: FormControl<string | null | undefined>,
	}
	export function CreateRegisterContainerImageRequestFormGroup() {
		return new FormGroup<RegisterContainerImageRequestFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			digest: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReleaseStaticIpResult {
		operations?: Array<Operation>;
	}
	export interface ReleaseStaticIpResultFormProperties {
	}
	export function CreateReleaseStaticIpResultFormGroup() {
		return new FormGroup<ReleaseStaticIpResultFormProperties>({
		});

	}

	export interface ReleaseStaticIpRequest {

		/** Required */
		staticIpName: string;
	}
	export interface ReleaseStaticIpRequestFormProperties {

		/** Required */
		staticIpName: FormControl<string | null | undefined>,
	}
	export function CreateReleaseStaticIpRequestFormGroup() {
		return new FormGroup<ReleaseStaticIpRequestFormProperties>({
			staticIpName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResetDistributionCacheResult {
		status?: string;
		createTime?: Date;
		operation?: Operation;
	}
	export interface ResetDistributionCacheResultFormProperties {
		status: FormControl<string | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
	}
	export function CreateResetDistributionCacheResultFormGroup() {
		return new FormGroup<ResetDistributionCacheResultFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ResetDistributionCacheRequest {
		distributionName?: string;
	}
	export interface ResetDistributionCacheRequestFormProperties {
		distributionName: FormControl<string | null | undefined>,
	}
	export function CreateResetDistributionCacheRequestFormGroup() {
		return new FormGroup<ResetDistributionCacheRequestFormProperties>({
			distributionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendContactMethodVerificationResult {
		operations?: Array<Operation>;
	}
	export interface SendContactMethodVerificationResultFormProperties {
	}
	export function CreateSendContactMethodVerificationResultFormGroup() {
		return new FormGroup<SendContactMethodVerificationResultFormProperties>({
		});

	}

	export interface SendContactMethodVerificationRequest {

		/** Required */
		protocol: ContactMethodVerificationProtocol;
	}
	export interface SendContactMethodVerificationRequestFormProperties {

		/** Required */
		protocol: FormControl<ContactMethodVerificationProtocol | null | undefined>,
	}
	export function CreateSendContactMethodVerificationRequestFormGroup() {
		return new FormGroup<SendContactMethodVerificationRequestFormProperties>({
			protocol: new FormControl<ContactMethodVerificationProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContactMethodVerificationProtocol { Email = 0 }

	export interface SetIpAddressTypeResult {
		operations?: Array<Operation>;
	}
	export interface SetIpAddressTypeResultFormProperties {
	}
	export function CreateSetIpAddressTypeResultFormGroup() {
		return new FormGroup<SetIpAddressTypeResultFormProperties>({
		});

	}

	export interface SetIpAddressTypeRequest {

		/** Required */
		resourceType: ResourceType;

		/** Required */
		resourceName: string;

		/** Required */
		ipAddressType: IpAddressType;
	}
	export interface SetIpAddressTypeRequestFormProperties {

		/** Required */
		resourceType: FormControl<ResourceType | null | undefined>,

		/** Required */
		resourceName: FormControl<string | null | undefined>,

		/** Required */
		ipAddressType: FormControl<IpAddressType | null | undefined>,
	}
	export function CreateSetIpAddressTypeRequestFormGroup() {
		return new FormGroup<SetIpAddressTypeRequestFormProperties>({
			resourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ipAddressType: new FormControl<IpAddressType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetResourceAccessForBucketResult {
		operations?: Array<Operation>;
	}
	export interface SetResourceAccessForBucketResultFormProperties {
	}
	export function CreateSetResourceAccessForBucketResultFormGroup() {
		return new FormGroup<SetResourceAccessForBucketResultFormProperties>({
		});

	}

	export interface SetResourceAccessForBucketRequest {

		/** Required */
		resourceName: string;

		/** Required */
		bucketName: string;

		/** Required */
		access: ResourceBucketAccess;
	}
	export interface SetResourceAccessForBucketRequestFormProperties {

		/** Required */
		resourceName: FormControl<string | null | undefined>,

		/** Required */
		bucketName: FormControl<string | null | undefined>,

		/** Required */
		access: FormControl<ResourceBucketAccess | null | undefined>,
	}
	export function CreateSetResourceAccessForBucketRequestFormGroup() {
		return new FormGroup<SetResourceAccessForBucketRequestFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			access: new FormControl<ResourceBucketAccess | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceBucketAccess { allow = 0, deny = 1 }

	export interface StartGUISessionResult {
		operations?: Array<Operation>;
	}
	export interface StartGUISessionResultFormProperties {
	}
	export function CreateStartGUISessionResultFormGroup() {
		return new FormGroup<StartGUISessionResultFormProperties>({
		});

	}

	export interface StartGUISessionRequest {

		/** Required */
		resourceName: string;
	}
	export interface StartGUISessionRequestFormProperties {

		/** Required */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateStartGUISessionRequestFormGroup() {
		return new FormGroup<StartGUISessionRequestFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartInstanceResult {
		operations?: Array<Operation>;
	}
	export interface StartInstanceResultFormProperties {
	}
	export function CreateStartInstanceResultFormGroup() {
		return new FormGroup<StartInstanceResultFormProperties>({
		});

	}

	export interface StartInstanceRequest {

		/** Required */
		instanceName: string;
	}
	export interface StartInstanceRequestFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
	}
	export function CreateStartInstanceRequestFormGroup() {
		return new FormGroup<StartInstanceRequestFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartRelationalDatabaseResult {
		operations?: Array<Operation>;
	}
	export interface StartRelationalDatabaseResultFormProperties {
	}
	export function CreateStartRelationalDatabaseResultFormGroup() {
		return new FormGroup<StartRelationalDatabaseResultFormProperties>({
		});

	}

	export interface StartRelationalDatabaseRequest {

		/** Required */
		relationalDatabaseName: string;
	}
	export interface StartRelationalDatabaseRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateStartRelationalDatabaseRequestFormGroup() {
		return new FormGroup<StartRelationalDatabaseRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopGUISessionResult {
		operations?: Array<Operation>;
	}
	export interface StopGUISessionResultFormProperties {
	}
	export function CreateStopGUISessionResultFormGroup() {
		return new FormGroup<StopGUISessionResultFormProperties>({
		});

	}

	export interface StopGUISessionRequest {

		/** Required */
		resourceName: string;
	}
	export interface StopGUISessionRequestFormProperties {

		/** Required */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateStopGUISessionRequestFormGroup() {
		return new FormGroup<StopGUISessionRequestFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopInstanceResult {
		operations?: Array<Operation>;
	}
	export interface StopInstanceResultFormProperties {
	}
	export function CreateStopInstanceResultFormGroup() {
		return new FormGroup<StopInstanceResultFormProperties>({
		});

	}

	export interface StopInstanceRequest {

		/** Required */
		instanceName: string;
		force?: boolean | null;
	}
	export interface StopInstanceRequestFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
		force: FormControl<boolean | null | undefined>,
	}
	export function CreateStopInstanceRequestFormGroup() {
		return new FormGroup<StopInstanceRequestFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			force: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StopRelationalDatabaseResult {
		operations?: Array<Operation>;
	}
	export interface StopRelationalDatabaseResultFormProperties {
	}
	export function CreateStopRelationalDatabaseResultFormGroup() {
		return new FormGroup<StopRelationalDatabaseResultFormProperties>({
		});

	}

	export interface StopRelationalDatabaseRequest {

		/** Required */
		relationalDatabaseName: string;
		relationalDatabaseSnapshotName?: string;
	}
	export interface StopRelationalDatabaseRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,
		relationalDatabaseSnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateStopRelationalDatabaseRequestFormGroup() {
		return new FormGroup<StopRelationalDatabaseRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relationalDatabaseSnapshotName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceResult {
		operations?: Array<Operation>;
	}
	export interface TagResourceResultFormProperties {
	}
	export function CreateTagResourceResultFormGroup() {
		return new FormGroup<TagResourceResultFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		resourceName: string;
		resourceArn?: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceName: FormControl<string | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestAlarmResult {
		operations?: Array<Operation>;
	}
	export interface TestAlarmResultFormProperties {
	}
	export function CreateTestAlarmResultFormGroup() {
		return new FormGroup<TestAlarmResultFormProperties>({
		});

	}

	export interface TestAlarmRequest {

		/** Required */
		alarmName: string;

		/** Required */
		state: AlarmState;
	}
	export interface TestAlarmRequestFormProperties {

		/** Required */
		alarmName: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<AlarmState | null | undefined>,
	}
	export function CreateTestAlarmRequestFormGroup() {
		return new FormGroup<TestAlarmRequestFormProperties>({
			alarmName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<AlarmState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnpeerVpcResult {
		operation?: Operation;
	}
	export interface UnpeerVpcResultFormProperties {
	}
	export function CreateUnpeerVpcResultFormGroup() {
		return new FormGroup<UnpeerVpcResultFormProperties>({
		});

	}

	export interface UnpeerVpcRequest {
	}
	export interface UnpeerVpcRequestFormProperties {
	}
	export function CreateUnpeerVpcRequestFormGroup() {
		return new FormGroup<UnpeerVpcRequestFormProperties>({
		});

	}

	export interface UntagResourceResult {
		operations?: Array<Operation>;
	}
	export interface UntagResourceResultFormProperties {
	}
	export function CreateUntagResourceResultFormGroup() {
		return new FormGroup<UntagResourceResultFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		resourceName: string;
		resourceArn?: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		resourceName: FormControl<string | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBucketResult {
		bucket?: Bucket;
		operations?: Array<Operation>;
	}
	export interface UpdateBucketResultFormProperties {
	}
	export function CreateUpdateBucketResultFormGroup() {
		return new FormGroup<UpdateBucketResultFormProperties>({
		});

	}

	export interface UpdateBucketRequest {

		/** Required */
		bucketName: string;
		accessRules?: AccessRules;
		versioning?: string;
		readonlyAccessAccounts?: Array<string>;
		accessLogConfig?: BucketAccessLogConfig;
	}
	export interface UpdateBucketRequestFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,
		versioning: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBucketRequestFormGroup() {
		return new FormGroup<UpdateBucketRequestFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			versioning: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBucketBundleResult {
		operations?: Array<Operation>;
	}
	export interface UpdateBucketBundleResultFormProperties {
	}
	export function CreateUpdateBucketBundleResultFormGroup() {
		return new FormGroup<UpdateBucketBundleResultFormProperties>({
		});

	}

	export interface UpdateBucketBundleRequest {

		/** Required */
		bucketName: string;

		/** Required */
		bundleId: string;
	}
	export interface UpdateBucketBundleRequestFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,

		/** Required */
		bundleId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBucketBundleRequestFormGroup() {
		return new FormGroup<UpdateBucketBundleRequestFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bundleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateContainerServiceResult {
		containerService?: ContainerService;
	}
	export interface UpdateContainerServiceResultFormProperties {
	}
	export function CreateUpdateContainerServiceResultFormGroup() {
		return new FormGroup<UpdateContainerServiceResultFormProperties>({
		});

	}

	export interface UpdateContainerServiceRequest {

		/** Required */
		serviceName: string;
		power?: ContainerServicePowerName;
		scale?: number | null;
		isDisabled?: boolean | null;
		publicDomainNames?: ContainerServicePublicDomains;
		privateRegistryAccess?: PrivateRegistryAccessRequest;
	}
	export interface UpdateContainerServiceRequestFormProperties {

		/** Required */
		serviceName: FormControl<string | null | undefined>,
		power: FormControl<ContainerServicePowerName | null | undefined>,
		scale: FormControl<number | null | undefined>,
		isDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateContainerServiceRequestFormGroup() {
		return new FormGroup<UpdateContainerServiceRequestFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			power: new FormControl<ContainerServicePowerName | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
			isDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateDistributionResult {
		operation?: Operation;
	}
	export interface UpdateDistributionResultFormProperties {
	}
	export function CreateUpdateDistributionResultFormGroup() {
		return new FormGroup<UpdateDistributionResultFormProperties>({
		});

	}

	export interface UpdateDistributionRequest {

		/** Required */
		distributionName: string;
		origin?: InputOrigin;
		defaultCacheBehavior?: CacheBehavior;
		cacheBehaviorSettings?: CacheSettings;
		cacheBehaviors?: Array<CacheBehaviorPerPath>;
		isEnabled?: boolean | null;
	}
	export interface UpdateDistributionRequestFormProperties {

		/** Required */
		distributionName: FormControl<string | null | undefined>,
		isEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDistributionRequestFormGroup() {
		return new FormGroup<UpdateDistributionRequestFormProperties>({
			distributionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateDistributionBundleResult {
		operation?: Operation;
	}
	export interface UpdateDistributionBundleResultFormProperties {
	}
	export function CreateUpdateDistributionBundleResultFormGroup() {
		return new FormGroup<UpdateDistributionBundleResultFormProperties>({
		});

	}

	export interface UpdateDistributionBundleRequest {
		distributionName?: string;
		bundleId?: string;
	}
	export interface UpdateDistributionBundleRequestFormProperties {
		distributionName: FormControl<string | null | undefined>,
		bundleId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDistributionBundleRequestFormGroup() {
		return new FormGroup<UpdateDistributionBundleRequestFormProperties>({
			distributionName: new FormControl<string | null | undefined>(undefined),
			bundleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainEntryResult {
		operations?: Array<Operation>;
	}
	export interface UpdateDomainEntryResultFormProperties {
	}
	export function CreateUpdateDomainEntryResultFormGroup() {
		return new FormGroup<UpdateDomainEntryResultFormProperties>({
		});

	}

	export interface UpdateDomainEntryRequest {

		/** Required */
		domainName: string;

		/** Required */
		domainEntry: DomainEntry;
	}
	export interface UpdateDomainEntryRequestFormProperties {

		/** Required */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainEntryRequestFormGroup() {
		return new FormGroup<UpdateDomainEntryRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInstanceMetadataOptionsResult {
		operation?: Operation;
	}
	export interface UpdateInstanceMetadataOptionsResultFormProperties {
	}
	export function CreateUpdateInstanceMetadataOptionsResultFormGroup() {
		return new FormGroup<UpdateInstanceMetadataOptionsResultFormProperties>({
		});

	}

	export interface UpdateInstanceMetadataOptionsRequest {

		/** Required */
		instanceName: string;
		httpTokens?: HttpTokens;
		httpEndpoint?: HttpEndpoint;
		httpPutResponseHopLimit?: number | null;
		httpProtocolIpv6?: HttpEndpoint;
	}
	export interface UpdateInstanceMetadataOptionsRequestFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
		httpTokens: FormControl<HttpTokens | null | undefined>,
		httpEndpoint: FormControl<HttpEndpoint | null | undefined>,
		httpPutResponseHopLimit: FormControl<number | null | undefined>,
		httpProtocolIpv6: FormControl<HttpEndpoint | null | undefined>,
	}
	export function CreateUpdateInstanceMetadataOptionsRequestFormGroup() {
		return new FormGroup<UpdateInstanceMetadataOptionsRequestFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			httpTokens: new FormControl<HttpTokens | null | undefined>(undefined),
			httpEndpoint: new FormControl<HttpEndpoint | null | undefined>(undefined),
			httpPutResponseHopLimit: new FormControl<number | null | undefined>(undefined),
			httpProtocolIpv6: new FormControl<HttpEndpoint | null | undefined>(undefined),
		});

	}

	export interface UpdateLoadBalancerAttributeResult {
		operations?: Array<Operation>;
	}
	export interface UpdateLoadBalancerAttributeResultFormProperties {
	}
	export function CreateUpdateLoadBalancerAttributeResultFormGroup() {
		return new FormGroup<UpdateLoadBalancerAttributeResultFormProperties>({
		});

	}

	export interface UpdateLoadBalancerAttributeRequest {

		/** Required */
		loadBalancerName: string;

		/** Required */
		attributeName: LoadBalancerAttributeName;

		/** Required */
		attributeValue: string;
	}
	export interface UpdateLoadBalancerAttributeRequestFormProperties {

		/** Required */
		loadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		attributeName: FormControl<LoadBalancerAttributeName | null | undefined>,

		/** Required */
		attributeValue: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLoadBalancerAttributeRequestFormGroup() {
		return new FormGroup<UpdateLoadBalancerAttributeRequestFormProperties>({
			loadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			attributeName: new FormControl<LoadBalancerAttributeName | null | undefined>(undefined, [Validators.required]),
			attributeValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LoadBalancerAttributeName { HealthCheckPath = 0, SessionStickinessEnabled = 1, SessionStickiness_LB_CookieDurationSeconds = 2, HttpsRedirectionEnabled = 3, TlsPolicyName = 4 }

	export interface UpdateRelationalDatabaseResult {
		operations?: Array<Operation>;
	}
	export interface UpdateRelationalDatabaseResultFormProperties {
	}
	export function CreateUpdateRelationalDatabaseResultFormGroup() {
		return new FormGroup<UpdateRelationalDatabaseResultFormProperties>({
		});

	}

	export interface UpdateRelationalDatabaseRequest {

		/** Required */
		relationalDatabaseName: string;
		masterUserPassword?: string;
		rotateMasterUserPassword?: boolean | null;
		preferredBackupWindow?: string;
		preferredMaintenanceWindow?: string;
		enableBackupRetention?: boolean | null;
		disableBackupRetention?: boolean | null;
		publiclyAccessible?: boolean | null;
		applyImmediately?: boolean | null;
		caCertificateIdentifier?: string;
	}
	export interface UpdateRelationalDatabaseRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,
		masterUserPassword: FormControl<string | null | undefined>,
		rotateMasterUserPassword: FormControl<boolean | null | undefined>,
		preferredBackupWindow: FormControl<string | null | undefined>,
		preferredMaintenanceWindow: FormControl<string | null | undefined>,
		enableBackupRetention: FormControl<boolean | null | undefined>,
		disableBackupRetention: FormControl<boolean | null | undefined>,
		publiclyAccessible: FormControl<boolean | null | undefined>,
		applyImmediately: FormControl<boolean | null | undefined>,
		caCertificateIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRelationalDatabaseRequestFormGroup() {
		return new FormGroup<UpdateRelationalDatabaseRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			masterUserPassword: new FormControl<string | null | undefined>(undefined),
			rotateMasterUserPassword: new FormControl<boolean | null | undefined>(undefined),
			preferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			preferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			enableBackupRetention: new FormControl<boolean | null | undefined>(undefined),
			disableBackupRetention: new FormControl<boolean | null | undefined>(undefined),
			publiclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			applyImmediately: new FormControl<boolean | null | undefined>(undefined),
			caCertificateIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRelationalDatabaseParametersResult {
		operations?: Array<Operation>;
	}
	export interface UpdateRelationalDatabaseParametersResultFormProperties {
	}
	export function CreateUpdateRelationalDatabaseParametersResultFormGroup() {
		return new FormGroup<UpdateRelationalDatabaseParametersResultFormProperties>({
		});

	}

	export interface UpdateRelationalDatabaseParametersRequest {

		/** Required */
		relationalDatabaseName: string;

		/** Required */
		parameters: Array<RelationalDatabaseParameter>;
	}
	export interface UpdateRelationalDatabaseParametersRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRelationalDatabaseParametersRequestFormGroup() {
		return new FormGroup<UpdateRelationalDatabaseParametersRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a block storage disk mapping. */
	export interface DiskMap {
		originalDiskPath?: string;
		newDiskName?: string;
	}

	/** Describes a block storage disk mapping. */
	export interface DiskMapFormProperties {
		originalDiskPath: FormControl<string | null | undefined>,
		newDiskName: FormControl<string | null | undefined>,
	}
	export function CreateDiskMapFormGroup() {
		return new FormGroup<DiskMapFormProperties>({
			originalDiskPath: new FormControl<string | null | undefined>(undefined),
			newDiskName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Environment {
	}
	export interface EnvironmentFormProperties {
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
		});

	}

	export interface PortMap {
	}
	export interface PortMapFormProperties {
	}
	export function CreatePortMapFormGroup() {
		return new FormGroup<PortMapFormProperties>({
		});

	}


	/** Describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service. */
	export interface Container {
		image?: string;
		command?: Array<string>;
		environment?: Environment;
		ports?: PortMap;
	}

	/** Describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service. */
	export interface ContainerFormProperties {
		image: FormControl<string | null | undefined>,
	}
	export function CreateContainerFormGroup() {
		return new FormGroup<ContainerFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContainerServiceProtocol { HTTP = 0, HTTPS = 1, TCP = 2, UDP = 3 }

	export enum HttpProtocolIpv6 { disabled = 0, enabled = 1 }

	export enum LoadBalancerTlsCertificateDnsRecordCreationStateCode { SUCCEEDED = 0, STARTED = 1, FAILED = 2 }

	export enum LoadBalancerTlsCertificateDomainStatus { PENDING_VALIDATION = 0, FAILED = 1, SUCCESS = 2 }

	export enum R53HostedZoneDeletionStateCode { SUCCEEDED = 0, PENDING = 1, FAILED = 2, STARTED = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Allocates a static IP address.
		 * Post #X-Amz-Target=Lightsail_20161128.AllocateStaticIp
		 * @return {AllocateStaticIpResult} Success
		 */
		AllocateStaticIp(requestBody: AllocateStaticIpRequest): Observable<AllocateStaticIpResult> {
			return this.http.post<AllocateStaticIpResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.AllocateStaticIp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is attached, your distribution accepts HTTPS traffic for all of the domains that are associated with the certificate.</p> <p>Use the <code>CreateCertificate</code> action to create a certificate that you can attach to your distribution.</p> <important> <p>Only certificates created in the <code>us-east-1</code> Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>
		 * Post #X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution
		 * @return {AttachCertificateToDistributionResult} Success
		 */
		AttachCertificateToDistribution(requestBody: AttachCertificateToDistributionRequest): Observable<AttachCertificateToDistributionResult> {
			return this.http.post<AttachCertificateToDistributionResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.AttachCertificateToDistribution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name.</p> <p>The <code>attach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.AttachDisk
		 * @return {AttachDiskResult} Success
		 */
		AttachDisk(requestBody: AttachDiskRequest): Observable<AttachDiskResult> {
			return this.http.post<AttachDiskResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.AttachDisk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches one or more Lightsail instances to a load balancer.</p> <p>After some time, the instances are attached to the load balancer and the health check status is available.</p> <p>The <code>attach instances to load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer
		 * @return {AttachInstancesToLoadBalancerResult} Success
		 */
		AttachInstancesToLoadBalancer(requestBody: AttachInstancesToLoadBalancerRequest): Observable<AttachInstancesToLoadBalancerResult> {
			return this.http.post<AttachInstancesToLoadBalancerResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the <code>AttachLoadBalancerTlsCertificate</code> action with the non-attached certificate, and it will replace the existing one and become the attached certificate.</p> <p>The <code>AttachLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate
		 * @return {AttachLoadBalancerTlsCertificateResult} Success
		 */
		AttachLoadBalancerTlsCertificate(requestBody: AttachLoadBalancerTlsCertificateRequest): Observable<AttachLoadBalancerTlsCertificateResult> {
			return this.http.post<AttachLoadBalancerTlsCertificateResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attaches a static IP address to a specific Amazon Lightsail instance.
		 * Post #X-Amz-Target=Lightsail_20161128.AttachStaticIp
		 * @return {AttachStaticIpResult} Success
		 */
		AttachStaticIp(requestBody: AttachStaticIpRequest): Observable<AttachStaticIpResult> {
			return this.http.post<AttachStaticIpResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.AttachStaticIp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Closes ports for a specific Amazon Lightsail instance.</p> <p>The <code>CloseInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts
		 * @return {CloseInstancePublicPortsResult} Success
		 */
		CloseInstancePublicPorts(requestBody: CloseInstancePublicPortsRequest): Observable<CloseInstancePublicPortsResult> {
			return this.http.post<CloseInstancePublicPortsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an automatic snapshot of an instance or disk as a manual snapshot. This operation can also be used to copy a manual or automatic snapshot of an instance or a disk from one Amazon Web Services Region to another in Amazon Lightsail.</p> <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code> parameters.</p> <p>When copying an <i>automatic snapshot</i>, be sure to define the <code>source region</code>, <code>source resource name</code>, <code>target snapshot name</code>, and either the <code>restore date</code> or the <code>use latest restorable auto snapshot</code> parameters.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CopySnapshot
		 * @return {CopySnapshotResult} Success
		 */
		CopySnapshot(requestBody: CopySnapshotRequest): Observable<CopySnapshotResult> {
			return this.http.post<CopySnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CopySnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Amazon Lightsail bucket.</p> <p>A bucket is a cloud storage resource available in the Lightsail object storage service. Use buckets to store objects such as data and its descriptive metadata. For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateBucket
		 * @return {CreateBucketResult} Success
		 */
		CreateBucket(requestBody: CreateBucketRequest): Observable<CreateBucketResult> {
			return this.http.post<CreateBucketResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateBucket', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new access key for the specified Amazon Lightsail bucket. Access keys consist of an access key ID and corresponding secret access key.</p> <p>Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketAccessKeys.html">GetBucketAccessKeys</a> action to get a list of current access keys for a specific bucket. For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> <important> <p>The <code>secretAccessKey</code> value is returned only in response to the <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</p> </important>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey
		 * @return {CreateBucketAccessKeyResult} Success
		 */
		CreateBucketAccessKey(requestBody: CreateBucketAccessKeyRequest): Observable<CreateBucketAccessKeyResult> {
			return this.http.post<CreateBucketAccessKeyResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateBucketAccessKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an SSL/TLS certificate for an Amazon Lightsail content delivery network (CDN) distribution and a container service.</p> <p>After the certificate is valid, use the <code>AttachCertificateToDistribution</code> action to use the certificate and its domains with your distribution. Or use the <code>UpdateContainerService</code> action to use the certificate and its domains with your container service.</p> <important> <p>Only certificates created in the <code>us-east-1</code> Amazon Web Services Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any Amazon Web Services Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateCertificate
		 * @return {CreateCertificateResult} Success
		 */
		CreateCertificate(requestBody: CreateCertificateRequest): Observable<CreateCertificateResult> {
			return this.http.post<CreateCertificateResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack records</code> operation to get a list of the CloudFormation stacks created.</p> <important> <p>Wait until after your new Amazon EC2 instance is created before running the <code>create cloud formation stack</code> operation again with the same export snapshot record.</p> </important>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack
		 * @return {CreateCloudFormationStackResult} Success
		 */
		CreateCloudFormationStack(requestBody: CreateCloudFormationStackRequest): Observable<CreateCloudFormationStackResult> {
			return this.http.post<CreateCloudFormationStackResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an email or SMS text message contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateContactMethod
		 * @return {CreateContactMethodResult} Success
		 */
		CreateContactMethod(requestBody: CreateContactMethodRequest): Observable<CreateContactMethodResult> {
			return this.http.post<CreateContactMethodResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateContactMethod', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Amazon Lightsail container service.</p> <p>A Lightsail container service is a compute resource to which you can deploy containers. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-services">Container services in Amazon Lightsail</a> in the <i>Lightsail Dev Guide</i>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateContainerService
		 * @return {CreateContainerServiceResult} Success
		 */
		CreateContainerService(requestBody: CreateContainerServiceRequest): Observable<CreateContainerServiceResult> {
			return this.http.post<CreateContainerServiceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateContainerService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a deployment for your Amazon Lightsail container service.</p> <p>A deployment specifies the containers that will be launched on the container service and their settings, such as the ports to open, the environment variables to apply, and the launch command to run. It also specifies the container that will serve as the public endpoint of the deployment and its settings, such as the HTTP or HTTPS port to use, and the health check configuration.</p> <p>You can deploy containers to your container service using container images from a public registry such as Amazon ECR Public, or from your local machine. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-container-images">Creating container images for your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment
		 * @return {CreateContainerServiceDeploymentResult} Success
		 */
		CreateContainerServiceDeployment(requestBody: CreateContainerServiceDeploymentRequest): Observable<CreateContainerServiceDeploymentResult> {
			return this.http.post<CreateContainerServiceDeploymentResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateContainerServiceDeployment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a temporary set of log in credentials that you can use to log in to the Docker process on your local machine. After you're logged in, you can use the native Docker commands to push your local container images to the container image registry of your Amazon Lightsail account so that you can use them with your Lightsail container service. The log in credentials expire 12 hours after they are created, at which point you will need to create a new set of log in credentials.</p> <note> <p>You can only push container images to the container service registry of your Lightsail account. You cannot pull container images or perform any other container image management actions on the container service registry.</p> </note> <p>After you push your container images to the container image registry of your Lightsail account, use the <code>RegisterContainerImage</code> action to register the pushed images to a specific Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin
		 * @return {CreateContainerServiceRegistryLoginResult} Success
		 */
		CreateContainerServiceRegistryLogin(requestBody: CreateContainerServiceRegistryLoginRequest): Observable<CreateContainerServiceRegistryLoginResult> {
			return this.http.post<CreateContainerServiceRegistryLoginResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateContainerServiceRegistryLogin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateDisk
		 * @return {CreateDiskResult} Success
		 */
		CreateDisk(requestBody: CreateDiskRequest): Observable<CreateDiskResult> {
			return this.http.post<CreateDiskResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateDisk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot
		 * @return {CreateDiskFromSnapshotResult} Success
		 */
		CreateDiskFromSnapshot(requestBody: CreateDiskFromSnapshotRequest): Observable<CreateDiskFromSnapshotResult> {
			return this.http.post<CreateDiskFromSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance.</p> <p>You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending.</p> <p>You can also use this operation to create a snapshot of an instance's system volume. You might want to do this, for example, to recover data from the system volume of a botched instance or to create a backup of the system volume like you would for a block storage disk. To create a snapshot of a system volume, just define the <code>instance name</code> parameter when issuing the snapshot command, and a snapshot of the defined instance's system volume will be created. After the snapshot is available, you can create a block storage disk from the snapshot and attach it to a running instance to access the data on the disk.</p> <p>The <code>create disk snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot
		 * @return {CreateDiskSnapshotResult} Success
		 */
		CreateDiskSnapshot(requestBody: CreateDiskSnapshotRequest): Observable<CreateDiskSnapshotResult> {
			return this.http.post<CreateDiskSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution is a globally distributed network of caching servers that improve the performance of your website or web application hosted on a Lightsail instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-content-delivery-network-distributions">Content delivery networks in Amazon Lightsail</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateDistribution
		 * @return {CreateDistributionResult} Success
		 */
		CreateDistribution(requestBody: CreateDistributionRequest): Observable<CreateDistributionResult> {
			return this.http.post<CreateDistributionResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateDistribution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a domain resource for the specified domain (e.g., example.com).</p> <p>The <code>create domain</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateDomain
		 * @return {CreateDomainResult} Success
		 */
		CreateDomain(requestBody: CreateDomainRequest): Observable<CreateDomainResult> {
			return this.http.post<CreateDomainResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates one of the following domain name system (DNS) records in a domain DNS zone: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).</p> <p>The <code>create domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateDomainEntry
		 * @return {CreateDomainEntryResult} Success
		 */
		CreateDomainEntry(requestBody: CreateDomainEntryRequest): Observable<CreateDomainEntryResult> {
			return this.http.post<CreateDomainEntryResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateDomainEntry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates two URLs that are used to access a virtual computer’s graphical user interface (GUI) session. The primary URL initiates a web-based NICE DCV session to the virtual computer's application. The secondary URL initiates a web-based NICE DCV session to the virtual computer's operating session. </p> <p>Use <code>StartGUISession</code> to open the session.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails
		 * @return {CreateGUISessionAccessDetailsResult} Success
		 */
		CreateGUISessionAccessDetails(requestBody: CreateGUISessionAccessDetailsRequest): Observable<CreateGUISessionAccessDetailsResult> {
			return this.http.post<CreateGUISessionAccessDetailsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateGUISessionAccessDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a snapshot of a specific virtual private server, or <i>instance</i>. You can use a snapshot to create a new instance that is based on that snapshot.</p> <p>The <code>create instance snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot
		 * @return {CreateInstanceSnapshotResult} Success
		 */
		CreateInstanceSnapshot(requestBody: CreateInstanceSnapshotRequest): Observable<CreateInstanceSnapshotResult> {
			return this.http.post<CreateInstanceSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates one or more Amazon Lightsail instances.</p> <p>The <code>create instances</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateInstances
		 * @return {CreateInstancesResult} Success
		 */
		CreateInstances(requestBody: CreateInstancesRequest): Observable<CreateInstancesResult> {
			return this.http.post<CreateInstancesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates one or more new instances from a manual or automatic snapshot of an instance.</p> <p>The <code>create instances from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot
		 * @return {CreateInstancesFromSnapshotResult} Success
		 */
		CreateInstancesFromSnapshot(requestBody: CreateInstancesFromSnapshotRequest): Observable<CreateInstancesFromSnapshotResult> {
			return this.http.post<CreateInstancesFromSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a custom SSH key pair that you can use with an Amazon Lightsail instance.</p> <note> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> action to create a Lightsail default key pair in an Amazon Web Services Region where a default key pair does not currently exist.</p> </note> <p>The <code>create key pair</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateKeyPair
		 * @return {CreateKeyPairResult} Success
		 */
		CreateKeyPair(requestBody: CreateKeyPairRequest): Observable<CreateKeyPairResult> {
			return this.http.post<CreateKeyPairResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5 load balancers per AWS Region in your account.</p> <p>When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code> operation.</p> <p>The <code>create load balancer</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateLoadBalancer
		 * @return {CreateLoadBalancerResult} Success
		 */
		CreateLoadBalancer(requestBody: CreateLoadBalancerRequest): Observable<CreateLoadBalancerResult> {
			return this.http.post<CreateLoadBalancerResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an SSL/TLS certificate for an Amazon Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>The <code>CreateLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate
		 * @return {CreateLoadBalancerTlsCertificateResult} Success
		 */
		CreateLoadBalancerTlsCertificate(requestBody: CreateLoadBalancerTlsCertificateRequest): Observable<CreateLoadBalancerTlsCertificateResult> {
			return this.http.post<CreateLoadBalancerTlsCertificateResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new database in Amazon Lightsail.</p> <p>The <code>create relational database</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase
		 * @return {CreateRelationalDatabaseResult} Success
		 */
		CreateRelationalDatabase(requestBody: CreateRelationalDatabaseRequest): Observable<CreateRelationalDatabaseResult> {
			return this.http.post<CreateRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p> <p>You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan.</p> <p>The <code>create relational database from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot
		 * @return {CreateRelationalDatabaseFromSnapshotResult} Success
		 */
		CreateRelationalDatabaseFromSnapshot(requestBody: CreateRelationalDatabaseFromSnapshotRequest): Observable<CreateRelationalDatabaseFromSnapshotResult> {
			return this.http.post<CreateRelationalDatabaseFromSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database.</p> <p>The <code>create relational database snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot
		 * @return {CreateRelationalDatabaseSnapshotResult} Success
		 */
		CreateRelationalDatabaseSnapshot(requestBody: CreateRelationalDatabaseSnapshotRequest): Observable<CreateRelationalDatabaseSnapshotResult> {
			return this.http.post<CreateRelationalDatabaseSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteAlarm
		 * @return {DeleteAlarmResult} Success
		 */
		DeleteAlarm(requestBody: DeleteAlarmRequest): Observable<DeleteAlarmResult> {
			return this.http.post<DeleteAlarmResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteAlarm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot
		 * @return {DeleteAutoSnapshotResult} Success
		 */
		DeleteAutoSnapshot(requestBody: DeleteAutoSnapshotRequest): Observable<DeleteAutoSnapshotResult> {
			return this.http.post<DeleteAutoSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a Amazon Lightsail bucket.</p> <note> <p>When you delete your bucket, the bucket name is released and can be reused for a new bucket in your account or another Amazon Web Services account.</p> </note>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteBucket
		 * @return {DeleteBucketResult} Success
		 */
		DeleteBucket(requestBody: DeleteBucketRequest): Observable<DeleteBucketResult> {
			return this.http.post<DeleteBucketResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteBucket', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an access key for the specified Amazon Lightsail bucket.</p> <p>We recommend that you delete an access key if the secret access key is compromised.</p> <p>For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey
		 * @return {DeleteBucketAccessKeyResult} Success
		 */
		DeleteBucketAccessKey(requestBody: DeleteBucketAccessKeyRequest): Observable<DeleteBucketAccessKeyResult> {
			return this.http.post<DeleteBucketAccessKeyResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteBucketAccessKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an SSL/TLS certificate for your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Certificates that are currently attached to a distribution cannot be deleted. Use the <code>DetachCertificateFromDistribution</code> action to detach a certificate from a distribution.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteCertificate
		 * @return {DeleteCertificateResult} Success
		 */
		DeleteCertificate(requestBody: DeleteCertificateRequest): Observable<DeleteCertificateResult> {
			return this.http.post<DeleteCertificateResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteContactMethod
		 * @return {DeleteContactMethodResult} Success
		 */
		DeleteContactMethod(requestBody: DeleteContactMethodRequest): Observable<DeleteContactMethodResult> {
			return this.http.post<DeleteContactMethodResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteContactMethod', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a container image that is registered to your Amazon Lightsail container service.
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteContainerImage
		 * @return {DeleteContainerImageResult} Success
		 */
		DeleteContainerImage(requestBody: DeleteContainerImageRequest): Observable<DeleteContainerImageResult> {
			return this.http.post<DeleteContainerImageResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteContainerImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes your Amazon Lightsail container service.
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteContainerService
		 * @return {DeleteContainerServiceResult} Success
		 */
		DeleteContainerService(requestBody: DeleteContainerServiceRequest): Observable<DeleteContainerServiceResult> {
			return this.http.post<DeleteContainerServiceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteContainerService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified block storage disk. The disk must be in the <code>available</code> state (not attached to a Lightsail instance).</p> <note> <p>The disk may remain in the <code>deleting</code> state for several minutes.</p> </note> <p>The <code>delete disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteDisk
		 * @return {DeleteDiskResult} Success
		 */
		DeleteDisk(requestBody: DeleteDiskRequest): Observable<DeleteDiskResult> {
			return this.http.post<DeleteDiskResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteDisk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified disk snapshot.</p> <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk.</p> <p>The <code>delete disk snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot
		 * @return {DeleteDiskSnapshotResult} Success
		 */
		DeleteDiskSnapshot(requestBody: DeleteDiskSnapshotRequest): Observable<DeleteDiskSnapshotResult> {
			return this.http.post<DeleteDiskSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes your Amazon Lightsail content delivery network (CDN) distribution.
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteDistribution
		 * @return {DeleteDistributionResult} Success
		 */
		DeleteDistribution(requestBody: DeleteDistributionRequest): Observable<DeleteDistributionResult> {
			return this.http.post<DeleteDistributionResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteDistribution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified domain recordset and all of its domain records.</p> <p>The <code>delete domain</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteDomain
		 * @return {DeleteDomainResult} Success
		 */
		DeleteDomain(requestBody: DeleteDomainRequest): Observable<DeleteDomainResult> {
			return this.http.post<DeleteDomainResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a specific domain entry.</p> <p>The <code>delete domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteDomainEntry
		 * @return {DeleteDomainEntryResult} Success
		 */
		DeleteDomainEntry(requestBody: DeleteDomainEntryRequest): Observable<DeleteDomainEntryResult> {
			return this.http.post<DeleteDomainEntryResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an Amazon Lightsail instance.</p> <p>The <code>delete instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteInstance
		 * @return {DeleteInstanceResult} Success
		 */
		DeleteInstance(requestBody: DeleteInstanceRequest): Observable<DeleteInstanceResult> {
			return this.http.post<DeleteInstanceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a specific snapshot of a virtual private server (or <i>instance</i>).</p> <p>The <code>delete instance snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot
		 * @return {DeleteInstanceSnapshotResult} Success
		 */
		DeleteInstanceSnapshot(requestBody: DeleteInstanceSnapshotRequest): Observable<DeleteInstanceSnapshotResult> {
			return this.http.post<DeleteInstanceSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified key pair by removing the public key from Amazon Lightsail.</p> <p>You can delete key pairs that were created using the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html">ImportKeyPair</a> and <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateKeyPair.html">CreateKeyPair</a> actions, as well as the Lightsail default key pair. A new default key pair will not be created unless you launch an instance without specifying a custom key pair, or you call the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> API. </p> <p>The <code>delete key pair</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>key pair name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteKeyPair
		 * @return {DeleteKeyPairResult} Success
		 */
		DeleteKeyPair(requestBody: DeleteKeyPairRequest): Observable<DeleteKeyPairResult> {
			return this.http.post<DeleteKeyPairResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance. This operation enables the Lightsail browser-based SSH or RDP clients to connect to the instance after a host key mismatch.</p> <important> <p>Perform this operation only if you were expecting the host key or certificate mismatch or if you are familiar with the new host key or certificate on the instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP client</a>.</p> </important>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys
		 * @return {DeleteKnownHostKeysResult} Success
		 */
		DeleteKnownHostKeys(requestBody: DeleteKnownHostKeysRequest): Observable<DeleteKnownHostKeysResult> {
			return this.http.post<DeleteKnownHostKeysResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again.</p> <p>The <code>delete load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer
		 * @return {DeleteLoadBalancerResult} Success
		 */
		DeleteLoadBalancer(requestBody: DeleteLoadBalancerRequest): Observable<DeleteLoadBalancerResult> {
			return this.http.post<DeleteLoadBalancerResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p> <p>The <code>DeleteLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate
		 * @return {DeleteLoadBalancerTlsCertificateResult} Success
		 */
		DeleteLoadBalancerTlsCertificate(requestBody: DeleteLoadBalancerTlsCertificateRequest): Observable<DeleteLoadBalancerTlsCertificateResult> {
			return this.http.post<DeleteLoadBalancerTlsCertificateResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a database in Amazon Lightsail.</p> <p>The <code>delete relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase
		 * @return {DeleteRelationalDatabaseResult} Success
		 */
		DeleteRelationalDatabase(requestBody: DeleteRelationalDatabaseRequest): Observable<DeleteRelationalDatabaseResult> {
			return this.http.post<DeleteRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a database snapshot in Amazon Lightsail.</p> <p>The <code>delete relational database snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot
		 * @return {DeleteRelationalDatabaseSnapshotResult} Success
		 */
		DeleteRelationalDatabaseSnapshot(requestBody: DeleteRelationalDatabaseSnapshotRequest): Observable<DeleteRelationalDatabaseSnapshotResult> {
			return this.http.post<DeleteRelationalDatabaseSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detaches an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is detached, your distribution stops accepting traffic for all of the domains that are associated with the certificate.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution
		 * @return {DetachCertificateFromDistributionResult} Success
		 */
		DetachCertificateFromDistribution(requestBody: DetachCertificateFromDistributionRequest): Observable<DetachCertificateFromDistributionResult> {
			return this.http.post<DetachCertificateFromDistributionResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DetachCertificateFromDistribution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk.</p> <p>The <code>detach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DetachDisk
		 * @return {DetachDiskResult} Success
		 */
		DetachDisk(requestBody: DetachDiskRequest): Observable<DetachDiskResult> {
			return this.http.post<DetachDiskResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DetachDisk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detaches the specified instances from a Lightsail load balancer.</p> <p>This operation waits until the instances are no longer needed before they are detached from the load balancer.</p> <p>The <code>detach instances from load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer
		 * @return {DetachInstancesFromLoadBalancerResult} Success
		 */
		DetachInstancesFromLoadBalancer(requestBody: DetachInstancesFromLoadBalancerRequest): Observable<DetachInstancesFromLoadBalancerResult> {
			return this.http.post<DetachInstancesFromLoadBalancerResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detaches a static IP from the Amazon Lightsail instance to which it is attached.
		 * Post #X-Amz-Target=Lightsail_20161128.DetachStaticIp
		 * @return {DetachStaticIpResult} Success
		 */
		DetachStaticIp(requestBody: DetachStaticIpRequest): Observable<DetachStaticIpResult> {
			return this.http.post<DetachStaticIpResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DetachStaticIp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.
		 * Post #X-Amz-Target=Lightsail_20161128.DisableAddOn
		 * @return {DisableAddOnResult} Success
		 */
		DisableAddOn(requestBody: DisableAddOnRequest): Observable<DisableAddOnResult> {
			return this.http.post<DisableAddOnResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DisableAddOn', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Downloads the regional Amazon Lightsail default key pair.</p> <p>This action also creates a Lightsail default key pair if a default key pair does not currently exist in the Amazon Web Services Region.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair
		 * @return {DownloadDefaultKeyPairResult} Success
		 */
		DownloadDefaultKeyPair(requestBody: DownloadDefaultKeyPairRequest): Observable<DownloadDefaultKeyPairResult> {
			return this.http.post<DownloadDefaultKeyPairResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.
		 * Post #X-Amz-Target=Lightsail_20161128.EnableAddOn
		 * @return {EnableAddOnResult} Success
		 */
		EnableAddOn(requestBody: EnableAddOnRequest): Observable<EnableAddOnResult> {
			return this.http.post<EnableAddOnResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.EnableAddOn', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2). This operation results in an export snapshot record that can be used with the <code>create cloud formation stack</code> operation to create new Amazon EC2 instances.</p> <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the source Lightsail snapshot.</p> <p/> <p>The <code>export snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>source snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p> <note> <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code> operations to get a list of snapshots that you can export to Amazon EC2.</p> </note>
		 * Post #X-Amz-Target=Lightsail_20161128.ExportSnapshot
		 * @return {ExportSnapshotResult} Success
		 */
		ExportSnapshot(requestBody: ExportSnapshotRequest): Observable<ExportSnapshotResult> {
			return this.http.post<ExportSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.ExportSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the names of all active (not deleted) resources.
		 * Post #X-Amz-Target=Lightsail_20161128.GetActiveNames
		 * @return {GetActiveNamesResult} Success
		 */
		GetActiveNames(requestBody: GetActiveNamesRequest): Observable<GetActiveNamesResult> {
			return this.http.post<GetActiveNamesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetActiveNames', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the configured alarms. Specify an alarm name in your request to return information about a specific alarm, or specify a monitored resource name to return information about all alarms for a specific resource.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetAlarms
		 * @return {GetAlarmsResult} Success
		 */
		GetAlarms(requestBody: GetAlarmsRequest): Observable<GetAlarmsResult> {
			return this.http.post<GetAlarmsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetAlarms', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the available automatic snapshots for an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.
		 * Post #X-Amz-Target=Lightsail_20161128.GetAutoSnapshots
		 * @return {GetAutoSnapshotsResult} Success
		 */
		GetAutoSnapshots(requestBody: GetAutoSnapshotsRequest): Observable<GetAutoSnapshotsResult> {
			return this.http.post<GetAutoSnapshotsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the list of available instance images, or <i>blueprints</i>. You can use a blueprint to create a new instance already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.</p> <note> <p>Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.</p> </note>
		 * Post #X-Amz-Target=Lightsail_20161128.GetBlueprints
		 * @return {GetBlueprintsResult} Success
		 */
		GetBlueprints(requestBody: GetBlueprintsRequest): Observable<GetBlueprintsResult> {
			return this.http.post<GetBlueprintsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetBlueprints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the existing access key IDs for the specified Amazon Lightsail bucket.</p> <important> <p>This action does not return the secret access key value of an access key. You can get a secret access key only when you create it from the response of the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action. If you lose the secret access key, you must create a new access key.</p> </important>
		 * Post #X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys
		 * @return {GetBucketAccessKeysResult} Success
		 */
		GetBucketAccessKeys(requestBody: GetBucketAccessKeysRequest): Observable<GetBucketAccessKeysResult> {
			return this.http.post<GetBucketAccessKeysResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetBucketAccessKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the bundles that you can apply to a Amazon Lightsail bucket.</p> <p>The bucket bundle specifies the monthly cost, storage quota, and data transfer quota for a bucket.</p> <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to update the bundle for a bucket.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetBucketBundles
		 * @return {GetBucketBundlesResult} Success
		 */
		GetBucketBundles(requestBody: GetBucketBundlesRequest): Observable<GetBucketBundlesResult> {
			return this.http.post<GetBucketBundlesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetBucketBundles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the data points of a specific metric for an Amazon Lightsail bucket.</p> <p>Metrics report the utilization of a bucket. View and collect metric data regularly to monitor the number of objects stored in a bucket (including object versions) and the storage space used by those objects.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetBucketMetricData
		 * @return {GetBucketMetricDataResult} Success
		 */
		GetBucketMetricData(requestBody: GetBucketMetricDataRequest): Observable<GetBucketMetricDataResult> {
			return this.http.post<GetBucketMetricDataResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetBucketMetricData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about one or more Amazon Lightsail buckets. The information returned includes the synchronization status of the Amazon Simple Storage Service (Amazon S3) account-level block public access feature for your Lightsail buckets.</p> <p>For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetBuckets
		 * @return {GetBucketsResult} Success
		 */
		GetBuckets(requestBody: GetBucketsRequest): Observable<GetBucketsResult> {
			return this.http.post<GetBucketsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetBuckets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the bundles that you can apply to an Amazon Lightsail instance when you create it.</p> <p>A bundle describes the specifications of an instance, such as the monthly cost, amount of memory, the number of vCPUs, amount of storage space, and monthly network data transfer quota.</p> <note> <p>Bundles are referred to as <i>instance plans</i> in the Lightsail console.</p> </note>
		 * Post #X-Amz-Target=Lightsail_20161128.GetBundles
		 * @return {GetBundlesResult} Success
		 */
		GetBundles(requestBody: GetBundlesRequest): Observable<GetBundlesResult> {
			return this.http.post<GetBundlesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetBundles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about one or more Amazon Lightsail SSL/TLS certificates.</p> <note> <p>To get a summary of a certificate, omit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>
		 * Post #X-Amz-Target=Lightsail_20161128.GetCertificates
		 * @return {GetCertificatesResult} Success
		 */
		GetCertificates(requestBody: GetCertificatesRequest): Observable<GetCertificatesResult> {
			return this.http.post<GetCertificatesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetCertificates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail snapshot.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords
		 * @return {GetCloudFormationStackRecordsResult} Success
		 */
		GetCloudFormationStackRecords(requestBody: GetCloudFormationStackRecordsRequest): Observable<GetCloudFormationStackRecordsResult> {
			return this.http.post<GetCloudFormationStackRecordsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the configured contact methods. Specify a protocol in your request to return information about a specific contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetContactMethods
		 * @return {GetContactMethodsResult} Success
		 */
		GetContactMethods(requestBody: GetContactMethodsRequest): Observable<GetContactMethodsResult> {
			return this.http.post<GetContactMethodsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetContactMethods', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about Amazon Lightsail containers, such as the current version of the Lightsail Control (lightsailctl) plugin.
		 * Post #X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata
		 * @return {GetContainerAPIMetadataResult} Success
		 */
		GetContainerAPIMetadata(requestBody: GetContainerAPIMetadataRequest): Observable<GetContainerAPIMetadataResult> {
			return this.http.post<GetContainerAPIMetadataResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetContainerAPIMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the container images that are registered to your Amazon Lightsail container service.</p> <note> <p>If you created a deployment on your Lightsail container service that uses container images from a public registry like Docker Hub, those images are not returned as part of this action. Those images are not registered to your Lightsail container service.</p> </note>
		 * Post #X-Amz-Target=Lightsail_20161128.GetContainerImages
		 * @return {GetContainerImagesResult} Success
		 */
		GetContainerImages(requestBody: GetContainerImagesRequest): Observable<GetContainerImagesResult> {
			return this.http.post<GetContainerImagesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetContainerImages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the log events of a container of your Amazon Lightsail container service.</p> <p>If your container service has more than one node (i.e., a scale greater than 1), then the log events that are returned for the specified container are merged from all nodes on your container service.</p> <note> <p>Container logs are retained for a certain amount of time. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>
		 * Post #X-Amz-Target=Lightsail_20161128.GetContainerLog
		 * @return {GetContainerLogResult} Success
		 */
		GetContainerLog(requestBody: GetContainerLogRequest): Observable<GetContainerLogResult> {
			return this.http.post<GetContainerLogResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetContainerLog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the deployments for your Amazon Lightsail container service</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p> <p>The deployments are ordered by version in ascending order. The newest version is listed at the top of the response.</p> <note> <p>A set number of deployments are kept before the oldest one is replaced with the newest one. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>
		 * Post #X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments
		 * @return {GetContainerServiceDeploymentsResult} Success
		 */
		GetContainerServiceDeployments(requestBody: GetContainerServiceDeploymentsRequest): Observable<GetContainerServiceDeploymentsResult> {
			return this.http.post<GetContainerServiceDeploymentsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetContainerServiceDeployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the data points of a specific metric of your Amazon Lightsail container service.</p> <p>Metrics report the utilization of your resources. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData
		 * @return {GetContainerServiceMetricDataResult} Success
		 */
		GetContainerServiceMetricData(requestBody: GetContainerServiceMetricDataRequest): Observable<GetContainerServiceMetricDataResult> {
			return this.http.post<GetContainerServiceMetricDataResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetContainerServiceMetricData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the list of powers that can be specified for your Amazon Lightsail container services.</p> <p>The power specifies the amount of memory, the number of vCPUs, and the base price of the container service.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetContainerServicePowers
		 * @return {GetContainerServicePowersResult} Success
		 */
		GetContainerServicePowers(requestBody: GetContainerServicePowersRequest): Observable<GetContainerServicePowersResult> {
			return this.http.post<GetContainerServicePowersResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetContainerServicePowers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about one or more of your Amazon Lightsail container services.
		 * Post #X-Amz-Target=Lightsail_20161128.GetContainerServices
		 * @return {ContainerServicesListResult} Success
		 */
		GetContainerServices(requestBody: GetContainerServicesRequest): Observable<ContainerServicesListResult> {
			return this.http.post<ContainerServicesListResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetContainerServices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the cost estimate for a specified resource. A cost estimate will not generate for a resource that has been deleted.
		 * Post #X-Amz-Target=Lightsail_20161128.GetCostEstimate
		 * @return {GetCostEstimateResult} Success
		 */
		GetCostEstimate(requestBody: GetCostEstimateRequest): Observable<GetCostEstimateResult> {
			return this.http.post<GetCostEstimateResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetCostEstimate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific block storage disk.
		 * Post #X-Amz-Target=Lightsail_20161128.GetDisk
		 * @return {GetDiskResult} Success
		 */
		GetDisk(requestBody: GetDiskRequest): Observable<GetDiskResult> {
			return this.http.post<GetDiskResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetDisk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific block storage disk snapshot.
		 * Post #X-Amz-Target=Lightsail_20161128.GetDiskSnapshot
		 * @return {GetDiskSnapshotResult} Success
		 */
		GetDiskSnapshot(requestBody: GetDiskSnapshotRequest): Observable<GetDiskSnapshotResult> {
			return this.http.post<GetDiskSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all block storage disk snapshots in your AWS account and region.
		 * Post #X-Amz-Target=Lightsail_20161128.GetDiskSnapshots
		 * @return {GetDiskSnapshotsResult} Success
		 */
		GetDiskSnapshots(requestBody: GetDiskSnapshotsRequest): Observable<GetDiskSnapshotsResult> {
			return this.http.post<GetDiskSnapshotsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all block storage disks in your AWS account and region.
		 * Post #X-Amz-Target=Lightsail_20161128.GetDisks
		 * @return {GetDisksResult} Success
		 */
		GetDisks(requestBody: GetDisksRequest): Observable<GetDisksResult> {
			return this.http.post<GetDisksResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetDisks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the bundles that can be applied to your Amazon Lightsail content delivery network (CDN) distributions.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetDistributionBundles
		 * @return {GetDistributionBundlesResult} Success
		 */
		GetDistributionBundles(requestBody: GetDistributionBundlesRequest): Observable<GetDistributionBundlesResult> {
			return this.http.post<GetDistributionBundlesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetDistributionBundles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail content delivery network (CDN) distribution.
		 * Post #X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset
		 * @return {GetDistributionLatestCacheResetResult} Success
		 */
		GetDistributionLatestCacheReset(requestBody: GetDistributionLatestCacheResetRequest): Observable<GetDistributionLatestCacheResetResult> {
			return this.http.post<GetDistributionLatestCacheResetResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetDistributionLatestCacheReset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the data points of a specific metric for an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetDistributionMetricData
		 * @return {GetDistributionMetricDataResult} Success
		 */
		GetDistributionMetricData(requestBody: GetDistributionMetricDataRequest): Observable<GetDistributionMetricDataResult> {
			return this.http.post<GetDistributionMetricDataResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetDistributionMetricData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about one or more of your Amazon Lightsail content delivery network (CDN) distributions.
		 * Post #X-Amz-Target=Lightsail_20161128.GetDistributions
		 * @return {GetDistributionsResult} Success
		 */
		GetDistributions(requestBody: GetDistributionsRequest): Observable<GetDistributionsResult> {
			return this.http.post<GetDistributionsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetDistributions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific domain recordset.
		 * Post #X-Amz-Target=Lightsail_20161128.GetDomain
		 * @return {GetDomainResult} Success
		 */
		GetDomain(requestBody: GetDomainRequest): Observable<GetDomainResult> {
			return this.http.post<GetDomainResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all domains in the user's account.
		 * Post #X-Amz-Target=Lightsail_20161128.GetDomains
		 * @return {GetDomainsResult} Success
		 */
		GetDomains(requestBody: GetDomainsRequest): Observable<GetDomainsResult> {
			return this.http.post<GetDomainsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetDomains', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all export snapshot records created as a result of the <code>export snapshot</code> operation.</p> <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related resources with the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html">CreateCloudFormationStack</a> action.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords
		 * @return {GetExportSnapshotRecordsResult} Success
		 */
		GetExportSnapshotRecords(requestBody: GetExportSnapshotRecordsRequest): Observable<GetExportSnapshotRecordsResult> {
			return this.http.post<GetExportSnapshotRecordsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific Amazon Lightsail instance, which is a virtual private server.
		 * Post #X-Amz-Target=Lightsail_20161128.GetInstance
		 * @return {GetInstanceResult} Success
		 */
		GetInstance(requestBody: GetInstanceRequest): Observable<GetInstanceResult> {
			return this.http.post<GetInstanceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or <i>instance</i>.</p> <p>The <code>get instance access details</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails
		 * @return {GetInstanceAccessDetailsResult} Success
		 */
		GetInstanceAccessDetails(requestBody: GetInstanceAccessDetailsRequest): Observable<GetInstanceAccessDetailsResult> {
			return this.http.post<GetInstanceAccessDetailsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetInstanceMetricData
		 * @return {GetInstanceMetricDataResult} Success
		 */
		GetInstanceMetricData(requestBody: GetInstanceMetricDataRequest): Observable<GetInstanceMetricDataResult> {
			return this.http.post<GetInstanceMetricDataResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the firewall port states for a specific Amazon Lightsail instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
		 * Post #X-Amz-Target=Lightsail_20161128.GetInstancePortStates
		 * @return {GetInstancePortStatesResult} Success
		 */
		GetInstancePortStates(requestBody: GetInstancePortStatesRequest): Observable<GetInstancePortStatesResult> {
			return this.http.post<GetInstancePortStatesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetInstancePortStates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific instance snapshot.
		 * Post #X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot
		 * @return {GetInstanceSnapshotResult} Success
		 */
		GetInstanceSnapshot(requestBody: GetInstanceSnapshotRequest): Observable<GetInstanceSnapshotResult> {
			return this.http.post<GetInstanceSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all instance snapshots for the user's account.
		 * Post #X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots
		 * @return {GetInstanceSnapshotsResult} Success
		 */
		GetInstanceSnapshots(requestBody: GetInstanceSnapshotsRequest): Observable<GetInstanceSnapshotsResult> {
			return this.http.post<GetInstanceSnapshotsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the state of a specific instance. Works on one instance at a time.
		 * Post #X-Amz-Target=Lightsail_20161128.GetInstanceState
		 * @return {GetInstanceStateResult} Success
		 */
		GetInstanceState(requestBody: GetInstanceStateRequest): Observable<GetInstanceStateResult> {
			return this.http.post<GetInstanceStateResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetInstanceState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all Amazon Lightsail virtual private servers, or <i>instances</i>.
		 * Post #X-Amz-Target=Lightsail_20161128.GetInstances
		 * @return {GetInstancesResult} Success
		 */
		GetInstances(requestBody: GetInstancesRequest): Observable<GetInstancesResult> {
			return this.http.post<GetInstancesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific key pair.
		 * Post #X-Amz-Target=Lightsail_20161128.GetKeyPair
		 * @return {GetKeyPairResult} Success
		 */
		GetKeyPair(requestBody: GetKeyPairRequest): Observable<GetKeyPairResult> {
			return this.http.post<GetKeyPairResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all key pairs in the user's account.
		 * Post #X-Amz-Target=Lightsail_20161128.GetKeyPairs
		 * @return {GetKeyPairsResult} Success
		 */
		GetKeyPairs(requestBody: GetKeyPairsRequest): Observable<GetKeyPairsResult> {
			return this.http.post<GetKeyPairsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetKeyPairs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the specified Lightsail load balancer.
		 * Post #X-Amz-Target=Lightsail_20161128.GetLoadBalancer
		 * @return {GetLoadBalancerResult} Success
		 */
		GetLoadBalancer(requestBody: GetLoadBalancerRequest): Observable<GetLoadBalancerResult> {
			return this.http.post<GetLoadBalancerResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetLoadBalancer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about health metrics for your Lightsail load balancer.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData
		 * @return {GetLoadBalancerMetricDataResult} Success
		 */
		GetLoadBalancerMetricData(requestBody: GetLoadBalancerMetricDataRequest): Observable<GetLoadBalancerMetricDataResult> {
			return this.http.post<GetLoadBalancerMetricDataResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the TLS certificates that are associated with the specified Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates
		 * @return {GetLoadBalancerTlsCertificatesResult} Success
		 */
		GetLoadBalancerTlsCertificates(requestBody: GetLoadBalancerTlsCertificatesRequest): Observable<GetLoadBalancerTlsCertificatesResult> {
			return this.http.post<GetLoadBalancerTlsCertificatesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of TLS security policies that you can apply to Lightsail load balancers.</p> <p>For more information about load balancer TLS security policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies
		 * @return {GetLoadBalancerTlsPoliciesResult} Success
		 */
		GetLoadBalancerTlsPolicies(requestBody: GetLoadBalancerTlsPoliciesRequest): Observable<GetLoadBalancerTlsPoliciesResult> {
			return this.http.post<GetLoadBalancerTlsPoliciesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsPolicies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all load balancers in an account.
		 * Post #X-Amz-Target=Lightsail_20161128.GetLoadBalancers
		 * @return {GetLoadBalancersResult} Success
		 */
		GetLoadBalancers(requestBody: GetLoadBalancersRequest): Observable<GetLoadBalancersResult> {
			return this.http.post<GetLoadBalancersResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetLoadBalancers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.
		 * Post #X-Amz-Target=Lightsail_20161128.GetOperation
		 * @return {GetOperationResult} Success
		 */
		GetOperation(requestBody: GetOperationRequest): Observable<GetOperationResult> {
			return this.http.post<GetOperationResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetOperation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about all operations.</p> <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to <code>GetOperations</code> use the maximum (last) <code>statusChangedAt</code> value from the previous request.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetOperations
		 * @return {GetOperationsResult} Success
		 */
		GetOperations(requestBody: GetOperationsRequest): Observable<GetOperationsResult> {
			return this.http.post<GetOperationsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetOperations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets operations for a specific resource (e.g., an instance or a static IP).
		 * Post #X-Amz-Target=Lightsail_20161128.GetOperationsForResource
		 * @return {GetOperationsForResourceResult} Success
		 */
		GetOperationsForResource(requestBody: GetOperationsForResourceRequest): Observable<GetOperationsForResourceResult> {
			return this.http.post<GetOperationsForResourceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetOperationsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all valid regions for Amazon Lightsail. Use the <code>include availability zones</code> parameter to also return the Availability Zones in a region.
		 * Post #X-Amz-Target=Lightsail_20161128.GetRegions
		 * @return {GetRegionsResult} Success
		 */
		GetRegions(requestBody: GetRegionsRequest): Observable<GetRegionsResult> {
			return this.http.post<GetRegionsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRegions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific database in Amazon Lightsail.
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabase
		 * @return {GetRelationalDatabaseResult} Success
		 */
		GetRelationalDatabase(requestBody: GetRelationalDatabaseRequest): Observable<GetRelationalDatabaseResult> {
			return this.http.post<GetRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes the major engine version of a database.</p> <p>You can use a blueprint ID to create a new database that runs a specific database engine.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints
		 * @return {GetRelationalDatabaseBlueprintsResult} Success
		 */
		GetRelationalDatabaseBlueprints(requestBody: GetRelationalDatabaseBlueprintsRequest): Observable<GetRelationalDatabaseBlueprintsResult> {
			return this.http.post<GetRelationalDatabaseBlueprintsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database.</p> <p>You can use a bundle ID to create a new database with explicit performance specifications.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles
		 * @return {GetRelationalDatabaseBundlesResult} Success
		 */
		GetRelationalDatabaseBundles(requestBody: GetRelationalDatabaseBundlesRequest): Observable<GetRelationalDatabaseBundlesResult> {
			return this.http.post<GetRelationalDatabaseBundlesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of events for a specific database in Amazon Lightsail.
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents
		 * @return {GetRelationalDatabaseEventsResult} Success
		 */
		GetRelationalDatabaseEvents(requestBody: GetRelationalDatabaseEventsRequest): Observable<GetRelationalDatabaseEventsResult> {
			return this.http.post<GetRelationalDatabaseEventsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of log events for a database in Amazon Lightsail.
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents
		 * @return {GetRelationalDatabaseLogEventsResult} Success
		 */
		GetRelationalDatabaseLogEvents(requestBody: GetRelationalDatabaseLogEventsRequest): Observable<GetRelationalDatabaseLogEventsResult> {
			return this.http.post<GetRelationalDatabaseLogEventsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of available log streams for a specific database in Amazon Lightsail.
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams
		 * @return {GetRelationalDatabaseLogStreamsResult} Success
		 */
		GetRelationalDatabaseLogStreams(requestBody: GetRelationalDatabaseLogStreamsRequest): Observable<GetRelationalDatabaseLogStreamsResult> {
			return this.http.post<GetRelationalDatabaseLogStreamsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the current, previous, or pending versions of the master user password for a Lightsail database.</p> <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword
		 * @return {GetRelationalDatabaseMasterUserPasswordResult} Success
		 */
		GetRelationalDatabaseMasterUserPassword(requestBody: GetRelationalDatabaseMasterUserPasswordRequest): Observable<GetRelationalDatabaseMasterUserPasswordResult> {
			return this.http.post<GetRelationalDatabaseMasterUserPasswordResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the data points of the specified metric for a database in Amazon Lightsail.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData
		 * @return {GetRelationalDatabaseMetricDataResult} Success
		 */
		GetRelationalDatabaseMetricData(requestBody: GetRelationalDatabaseMetricDataRequest): Observable<GetRelationalDatabaseMetricDataResult> {
			return this.http.post<GetRelationalDatabaseMetricDataResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail.</p> <p>In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters
		 * @return {GetRelationalDatabaseParametersResult} Success
		 */
		GetRelationalDatabaseParameters(requestBody: GetRelationalDatabaseParametersRequest): Observable<GetRelationalDatabaseParametersResult> {
			return this.http.post<GetRelationalDatabaseParametersResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific database snapshot in Amazon Lightsail.
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot
		 * @return {GetRelationalDatabaseSnapshotResult} Success
		 */
		GetRelationalDatabaseSnapshot(requestBody: GetRelationalDatabaseSnapshotRequest): Observable<GetRelationalDatabaseSnapshotResult> {
			return this.http.post<GetRelationalDatabaseSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all of your database snapshots in Amazon Lightsail.
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots
		 * @return {GetRelationalDatabaseSnapshotsResult} Success
		 */
		GetRelationalDatabaseSnapshots(requestBody: GetRelationalDatabaseSnapshotsRequest): Observable<GetRelationalDatabaseSnapshotsResult> {
			return this.http.post<GetRelationalDatabaseSnapshotsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all of your databases in Amazon Lightsail.
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabases
		 * @return {GetRelationalDatabasesResult} Success
		 */
		GetRelationalDatabases(requestBody: GetRelationalDatabasesRequest): Observable<GetRelationalDatabasesResult> {
			return this.http.post<GetRelationalDatabasesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about an Amazon Lightsail static IP.
		 * Post #X-Amz-Target=Lightsail_20161128.GetStaticIp
		 * @return {GetStaticIpResult} Success
		 */
		GetStaticIp(requestBody: GetStaticIpRequest): Observable<GetStaticIpResult> {
			return this.http.post<GetStaticIpResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetStaticIp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all static IPs in the user's account.
		 * Post #X-Amz-Target=Lightsail_20161128.GetStaticIps
		 * @return {GetStaticIpsResult} Success
		 */
		GetStaticIps(requestBody: GetStaticIpsRequest): Observable<GetStaticIpsResult> {
			return this.http.post<GetStaticIpsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetStaticIps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports a public SSH key from a specific key pair.
		 * Post #X-Amz-Target=Lightsail_20161128.ImportKeyPair
		 * @return {ImportKeyPairResult} Success
		 */
		ImportKeyPair(requestBody: ImportKeyPairRequest): Observable<ImportKeyPairResult> {
			return this.http.post<ImportKeyPairResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.ImportKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a Boolean value indicating whether your Lightsail VPC is peered.
		 * Post #X-Amz-Target=Lightsail_20161128.IsVpcPeered
		 * @return {IsVpcPeeredResult} Success
		 */
		IsVpcPeered(requestBody: IsVpcPeeredRequest): Observable<IsVpcPeeredResult> {
			return this.http.post<IsVpcPeeredResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.IsVpcPeered', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol.</p> <p>The <code>OpenInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts
		 * @return {OpenInstancePublicPortsResult} Success
		 */
		OpenInstancePublicPorts(requestBody: OpenInstancePublicPortsRequest): Observable<OpenInstancePublicPortsResult> {
			return this.http.post<OpenInstancePublicPortsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Peers the Lightsail VPC with the user's default VPC.
		 * Post #X-Amz-Target=Lightsail_20161128.PeerVpc
		 * @return {PeerVpcResult} Success
		 */
		PeerVpc(requestBody: PeerVpcRequest): Observable<PeerVpcResult> {
			return this.http.post<PeerVpcResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.PeerVpc', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates an alarm, and associates it with the specified metric.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> <p>When this action creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. The alarm is then evaluated with the updated configuration.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.PutAlarm
		 * @return {PutAlarmResult} Success
		 */
		PutAlarm(requestBody: PutAlarmRequest): Observable<PutAlarmResult> {
			return this.http.post<PutAlarmResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.PutAlarm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol. This action also closes all currently open ports that are not included in the request. Include all of the ports and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open ports.</p> <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts
		 * @return {PutInstancePublicPortsResult} Success
		 */
		PutInstancePublicPorts(requestBody: PutInstancePublicPortsRequest): Observable<PutInstancePublicPortsResult> {
			return this.http.post<PutInstancePublicPortsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Restarts a specific instance.</p> <p>The <code>reboot instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.RebootInstance
		 * @return {RebootInstanceResult} Success
		 */
		RebootInstance(requestBody: RebootInstanceRequest): Observable<RebootInstanceResult> {
			return this.http.post<RebootInstanceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.RebootInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Restarts a specific database in Amazon Lightsail.</p> <p>The <code>reboot relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase
		 * @return {RebootRelationalDatabaseResult} Success
		 */
		RebootRelationalDatabase(requestBody: RebootRelationalDatabaseRequest): Observable<RebootRelationalDatabaseResult> {
			return this.http.post<RebootRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers a container image to your Amazon Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>
		 * Post #X-Amz-Target=Lightsail_20161128.RegisterContainerImage
		 * @return {RegisterContainerImageResult} Success
		 */
		RegisterContainerImage(requestBody: RegisterContainerImageRequest): Observable<RegisterContainerImageResult> {
			return this.http.post<RegisterContainerImageResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.RegisterContainerImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specific static IP from your account.
		 * Post #X-Amz-Target=Lightsail_20161128.ReleaseStaticIp
		 * @return {ReleaseStaticIpResult} Success
		 */
		ReleaseStaticIp(requestBody: ReleaseStaticIpRequest): Observable<ReleaseStaticIpResult> {
			return this.http.post<ReleaseStaticIpResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes currently cached content from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After resetting the cache, the next time a content request is made, your distribution pulls, serves, and caches it from the origin.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.ResetDistributionCache
		 * @return {ResetDistributionCacheResult} Success
		 */
		ResetDistributionCache(requestBody: ResetDistributionCacheRequest): Observable<ResetDistributionCacheResult> {
			return this.http.post<ResetDistributionCacheResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.ResetDistributionCache', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends a verification request to an email contact method to ensure it's owned by the requester. SMS contact methods don't need to be verified.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> <p>A verification request is sent to the contact method when you initially create it. Use this action to send another verification request if a previous verification request was deleted, or has expired.</p> <important> <p>Notifications are not sent to an email contact method until after it is verified, and confirmed as valid.</p> </important>
		 * Post #X-Amz-Target=Lightsail_20161128.SendContactMethodVerification
		 * @return {SendContactMethodVerificationResult} Success
		 */
		SendContactMethodVerification(requestBody: SendContactMethodVerificationRequest): Observable<SendContactMethodVerificationResult> {
			return this.http.post<SendContactMethodVerificationResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the IP address type for an Amazon Lightsail resource.</p> <p>Use this action to enable dual-stack for a resource, which enables IPv4 and IPv6 for the specified resource. Alternately, you can use this action to disable dual-stack, and enable IPv4 only.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.SetIpAddressType
		 * @return {SetIpAddressTypeResult} Success
		 */
		SetIpAddressType(requestBody: SetIpAddressTypeRequest): Observable<SetIpAddressTypeResult> {
			return this.http.post<SetIpAddressTypeResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.SetIpAddressType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the Amazon Lightsail resources that can access the specified Lightsail bucket.</p> <p>Lightsail buckets currently support setting access for Lightsail instances in the same Amazon Web Services Region.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket
		 * @return {SetResourceAccessForBucketResult} Success
		 */
		SetResourceAccessForBucket(requestBody: SetResourceAccessForBucketRequest): Observable<SetResourceAccessForBucketResult> {
			return this.http.post<SetResourceAccessForBucketResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.SetResourceAccessForBucket', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates a graphical user interface (GUI) session that’s used to access a virtual computer’s operating system and application. The session will be active for 1 hour. Use this action to resume the session after it expires.
		 * Post #X-Amz-Target=Lightsail_20161128.StartGUISession
		 * @return {StartGUISessionResult} Success
		 */
		StartGUISession(requestBody: StartGUISessionRequest): Observable<StartGUISessionResult> {
			return this.http.post<StartGUISessionResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.StartGUISession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the <code>reboot instance</code> operation.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>start instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.StartInstance
		 * @return {StartInstanceResult} Success
		 */
		StartInstance(requestBody: StartInstanceRequest): Observable<StartInstanceResult> {
			return this.http.post<StartInstanceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.StartInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the <code>reboot relational database</code> operation.</p> <p>The <code>start relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.StartRelationalDatabase
		 * @return {StartRelationalDatabaseResult} Success
		 */
		StartRelationalDatabase(requestBody: StartRelationalDatabaseRequest): Observable<StartRelationalDatabaseResult> {
			return this.http.post<StartRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Terminates a web-based NICE DCV session that’s used to access a virtual computer’s operating system or application. The session will close and any unsaved data will be lost.
		 * Post #X-Amz-Target=Lightsail_20161128.StopGUISession
		 * @return {StopGUISessionResult} Success
		 */
		StopGUISession(requestBody: StopGUISessionRequest): Observable<StopGUISessionResult> {
			return this.http.post<StopGUISessionResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.StopGUISession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a specific Amazon Lightsail instance that is currently running.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>stop instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.StopInstance
		 * @return {StopInstanceResult} Success
		 */
		StopInstance(requestBody: StopInstanceRequest): Observable<StopInstanceResult> {
			return this.http.post<StopInstanceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.StopInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a specific database that is currently running in Amazon Lightsail.</p> <p>The <code>stop relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.StopRelationalDatabase
		 * @return {StopRelationalDatabaseResult} Success
		 */
		StopRelationalDatabase(requestBody: StopRelationalDatabaseRequest): Observable<StopRelationalDatabaseResult> {
			return this.http.post<StopRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds one or more tags to the specified Amazon Lightsail resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p> <p>The <code>tag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.TagResource
		 * @return {TagResourceResult} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResult> {
			return this.http.post<TagResourceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Tests an alarm by displaying a banner on the Amazon Lightsail console. If a notification trigger is configured for the specified alarm, the test also sends a notification to the notification protocol (<code>Email</code> and/or <code>SMS</code>) configured for the alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.TestAlarm
		 * @return {TestAlarmResult} Success
		 */
		TestAlarm(requestBody: TestAlarmRequest): Observable<TestAlarmResult> {
			return this.http.post<TestAlarmResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.TestAlarm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unpeers the Lightsail VPC from the user's default VPC.
		 * Post #X-Amz-Target=Lightsail_20161128.UnpeerVpc
		 * @return {UnpeerVpcResult} Success
		 */
		UnpeerVpc(requestBody: UnpeerVpcRequest): Observable<UnpeerVpcResult> {
			return this.http.post<UnpeerVpcResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UnpeerVpc', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified set of tag keys and their values from the specified Amazon Lightsail resource.</p> <p>The <code>untag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UntagResource
		 * @return {UntagResourceResult} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResult> {
			return this.http.post<UntagResourceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an existing Amazon Lightsail bucket.</p> <p>Use this action to update the configuration of an existing bucket, such as versioning, public accessibility, and the Amazon Web Services accounts that can access the bucket.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateBucket
		 * @return {UpdateBucketResult} Success
		 */
		UpdateBucket(requestBody: UpdateBucketRequest): Observable<UpdateBucketResult> {
			return this.http.post<UpdateBucketResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateBucket', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the bundle, or storage plan, of an existing Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket. You can update a bucket's bundle only one time within a monthly Amazon Web Services billing cycle. To determine if you can update a bucket's bundle, use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBuckets.html">GetBuckets</a> action. The <code>ableToUpdateBundle</code> parameter in the response will indicate whether you can currently update a bucket's bundle.</p> <p>Update a bucket's bundle if it's consistently going over its storage space or data transfer quota, or if a bucket's usage is consistently in the lower range of its storage space or data transfer quota. Due to the unpredictable usage fluctuations that a bucket might experience, we strongly recommend that you update a bucket's bundle only as a long-term strategy, instead of as a short-term, monthly cost-cutting measure. Choose a bucket bundle that will provide the bucket with ample storage space and data transfer for a long time to come.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateBucketBundle
		 * @return {UpdateBucketBundleResult} Success
		 */
		UpdateBucketBundle(requestBody: UpdateBucketBundleRequest): Observable<UpdateBucketBundleResult> {
			return this.http.post<UpdateBucketBundleResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateBucketBundle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the configuration of your Amazon Lightsail container service, such as its power, scale, and public domain names.
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateContainerService
		 * @return {UpdateContainerServiceResult} Success
		 */
		UpdateContainerService(requestBody: UpdateContainerServiceRequest): Observable<UpdateContainerServiceResult> {
			return this.http.post<UpdateContainerServiceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateContainerService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an existing Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Use this action to update the configuration of your existing distribution.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateDistribution
		 * @return {UpdateDistributionResult} Success
		 */
		UpdateDistribution(requestBody: UpdateDistributionRequest): Observable<UpdateDistributionResult> {
			return this.http.post<UpdateDistributionResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateDistribution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the bundle of your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your distribution.</p> <p>Update your distribution's bundle if your distribution is going over its monthly network transfer quota and is incurring an overage fee.</p> <p>You can update your distribution's bundle only one time within your monthly Amazon Web Services billing cycle. To determine if you can update your distribution's bundle, use the <code>GetDistributions</code> action. The <code>ableToUpdateBundle</code> parameter in the result will indicate whether you can currently update your distribution's bundle.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle
		 * @return {UpdateDistributionBundleResult} Success
		 */
		UpdateDistributionBundle(requestBody: UpdateDistributionBundleRequest): Observable<UpdateDistributionBundleResult> {
			return this.http.post<UpdateDistributionBundleResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateDistributionBundle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a domain recordset after it is created.</p> <p>The <code>update domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateDomainEntry
		 * @return {UpdateDomainEntryResult} Success
		 */
		UpdateDomainEntry(requestBody: UpdateDomainEntryRequest): Observable<UpdateDomainEntryResult> {
			return this.http.post<UpdateDomainEntryResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the Amazon Lightsail instance metadata parameters on a running or stopped instance. When you modify the parameters on a running instance, the <code>GetInstance</code> or <code>GetInstances</code> API operation initially responds with a state of <code>pending</code>. After the parameter modifications are successfully applied, the state changes to <code>applied</code> in subsequent <code>GetInstance</code> or <code>GetInstances</code> API calls. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-instance-metadata-service">Use IMDSv2 with an Amazon Lightsail instance</a> in the <i>Amazon Lightsail Developer Guide</i>.
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions
		 * @return {UpdateInstanceMetadataOptionsResult} Success
		 */
		UpdateInstanceMetadataOptions(requestBody: UpdateInstanceMetadataOptionsRequest): Observable<UpdateInstanceMetadataOptionsResult> {
			return this.http.post<UpdateInstanceMetadataOptionsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateInstanceMetadataOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified attribute for a load balancer. You can only update one attribute at a time.</p> <p>The <code>update load balancer attribute</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute
		 * @return {UpdateLoadBalancerAttributeResult} Success
		 */
		UpdateLoadBalancerAttribute(requestBody: UpdateLoadBalancerAttributeRequest): Observable<UpdateLoadBalancerAttributeResult> {
			return this.http.post<UpdateLoadBalancerAttributeResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p> <p>Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database's predefined maintenance window.</p> <p>The <code>update relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase
		 * @return {UpdateRelationalDatabaseResult} Success
		 */
		UpdateRelationalDatabase(requestBody: UpdateRelationalDatabaseRequest): Observable<UpdateRelationalDatabaseResult> {
			return this.http.post<UpdateRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p> <p>Parameter updates don't cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which parameter updates are applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a <code>dynamic</code> apply type are applied immediately. Parameters marked with a <code>pending-reboot</code> apply type are applied only after the database is rebooted using the <code>reboot relational database</code> operation.</p> <p>The <code>update relational database parameters</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters
		 * @return {UpdateRelationalDatabaseParametersResult} Success
		 */
		UpdateRelationalDatabaseParameters(requestBody: UpdateRelationalDatabaseParametersRequest): Observable<UpdateRelationalDatabaseParametersResult> {
			return this.http.post<UpdateRelationalDatabaseParametersResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AllocateStaticIpX_Amz_Target { 'Lightsail_20161128.AllocateStaticIp' = 0 }

	export enum AttachCertificateToDistributionX_Amz_Target { 'Lightsail_20161128.AttachCertificateToDistribution' = 0 }

	export enum AttachDiskX_Amz_Target { 'Lightsail_20161128.AttachDisk' = 0 }

	export enum AttachInstancesToLoadBalancerX_Amz_Target { 'Lightsail_20161128.AttachInstancesToLoadBalancer' = 0 }

	export enum AttachLoadBalancerTlsCertificateX_Amz_Target { 'Lightsail_20161128.AttachLoadBalancerTlsCertificate' = 0 }

	export enum AttachStaticIpX_Amz_Target { 'Lightsail_20161128.AttachStaticIp' = 0 }

	export enum CloseInstancePublicPortsX_Amz_Target { 'Lightsail_20161128.CloseInstancePublicPorts' = 0 }

	export enum CopySnapshotX_Amz_Target { 'Lightsail_20161128.CopySnapshot' = 0 }

	export enum CreateBucketX_Amz_Target { 'Lightsail_20161128.CreateBucket' = 0 }

	export enum CreateBucketAccessKeyX_Amz_Target { 'Lightsail_20161128.CreateBucketAccessKey' = 0 }

	export enum CreateCertificateX_Amz_Target { 'Lightsail_20161128.CreateCertificate' = 0 }

	export enum CreateCloudFormationStackX_Amz_Target { 'Lightsail_20161128.CreateCloudFormationStack' = 0 }

	export enum CreateContactMethodX_Amz_Target { 'Lightsail_20161128.CreateContactMethod' = 0 }

	export enum CreateContainerServiceX_Amz_Target { 'Lightsail_20161128.CreateContainerService' = 0 }

	export enum CreateContainerServiceDeploymentX_Amz_Target { 'Lightsail_20161128.CreateContainerServiceDeployment' = 0 }

	export enum CreateContainerServiceRegistryLoginX_Amz_Target { 'Lightsail_20161128.CreateContainerServiceRegistryLogin' = 0 }

	export enum CreateDiskX_Amz_Target { 'Lightsail_20161128.CreateDisk' = 0 }

	export enum CreateDiskFromSnapshotX_Amz_Target { 'Lightsail_20161128.CreateDiskFromSnapshot' = 0 }

	export enum CreateDiskSnapshotX_Amz_Target { 'Lightsail_20161128.CreateDiskSnapshot' = 0 }

	export enum CreateDistributionX_Amz_Target { 'Lightsail_20161128.CreateDistribution' = 0 }

	export enum CreateDomainX_Amz_Target { 'Lightsail_20161128.CreateDomain' = 0 }

	export enum CreateDomainEntryX_Amz_Target { 'Lightsail_20161128.CreateDomainEntry' = 0 }

	export enum CreateGUISessionAccessDetailsX_Amz_Target { 'Lightsail_20161128.CreateGUISessionAccessDetails' = 0 }

	export enum CreateInstanceSnapshotX_Amz_Target { 'Lightsail_20161128.CreateInstanceSnapshot' = 0 }

	export enum CreateInstancesX_Amz_Target { 'Lightsail_20161128.CreateInstances' = 0 }

	export enum CreateInstancesFromSnapshotX_Amz_Target { 'Lightsail_20161128.CreateInstancesFromSnapshot' = 0 }

	export enum CreateKeyPairX_Amz_Target { 'Lightsail_20161128.CreateKeyPair' = 0 }

	export enum CreateLoadBalancerX_Amz_Target { 'Lightsail_20161128.CreateLoadBalancer' = 0 }

	export enum CreateLoadBalancerTlsCertificateX_Amz_Target { 'Lightsail_20161128.CreateLoadBalancerTlsCertificate' = 0 }

	export enum CreateRelationalDatabaseX_Amz_Target { 'Lightsail_20161128.CreateRelationalDatabase' = 0 }

	export enum CreateRelationalDatabaseFromSnapshotX_Amz_Target { 'Lightsail_20161128.CreateRelationalDatabaseFromSnapshot' = 0 }

	export enum CreateRelationalDatabaseSnapshotX_Amz_Target { 'Lightsail_20161128.CreateRelationalDatabaseSnapshot' = 0 }

	export enum DeleteAlarmX_Amz_Target { 'Lightsail_20161128.DeleteAlarm' = 0 }

	export enum DeleteAutoSnapshotX_Amz_Target { 'Lightsail_20161128.DeleteAutoSnapshot' = 0 }

	export enum DeleteBucketX_Amz_Target { 'Lightsail_20161128.DeleteBucket' = 0 }

	export enum DeleteBucketAccessKeyX_Amz_Target { 'Lightsail_20161128.DeleteBucketAccessKey' = 0 }

	export enum DeleteCertificateX_Amz_Target { 'Lightsail_20161128.DeleteCertificate' = 0 }

	export enum DeleteContactMethodX_Amz_Target { 'Lightsail_20161128.DeleteContactMethod' = 0 }

	export enum DeleteContainerImageX_Amz_Target { 'Lightsail_20161128.DeleteContainerImage' = 0 }

	export enum DeleteContainerServiceX_Amz_Target { 'Lightsail_20161128.DeleteContainerService' = 0 }

	export enum DeleteDiskX_Amz_Target { 'Lightsail_20161128.DeleteDisk' = 0 }

	export enum DeleteDiskSnapshotX_Amz_Target { 'Lightsail_20161128.DeleteDiskSnapshot' = 0 }

	export enum DeleteDistributionX_Amz_Target { 'Lightsail_20161128.DeleteDistribution' = 0 }

	export enum DeleteDomainX_Amz_Target { 'Lightsail_20161128.DeleteDomain' = 0 }

	export enum DeleteDomainEntryX_Amz_Target { 'Lightsail_20161128.DeleteDomainEntry' = 0 }

	export enum DeleteInstanceX_Amz_Target { 'Lightsail_20161128.DeleteInstance' = 0 }

	export enum DeleteInstanceSnapshotX_Amz_Target { 'Lightsail_20161128.DeleteInstanceSnapshot' = 0 }

	export enum DeleteKeyPairX_Amz_Target { 'Lightsail_20161128.DeleteKeyPair' = 0 }

	export enum DeleteKnownHostKeysX_Amz_Target { 'Lightsail_20161128.DeleteKnownHostKeys' = 0 }

	export enum DeleteLoadBalancerX_Amz_Target { 'Lightsail_20161128.DeleteLoadBalancer' = 0 }

	export enum DeleteLoadBalancerTlsCertificateX_Amz_Target { 'Lightsail_20161128.DeleteLoadBalancerTlsCertificate' = 0 }

	export enum DeleteRelationalDatabaseX_Amz_Target { 'Lightsail_20161128.DeleteRelationalDatabase' = 0 }

	export enum DeleteRelationalDatabaseSnapshotX_Amz_Target { 'Lightsail_20161128.DeleteRelationalDatabaseSnapshot' = 0 }

	export enum DetachCertificateFromDistributionX_Amz_Target { 'Lightsail_20161128.DetachCertificateFromDistribution' = 0 }

	export enum DetachDiskX_Amz_Target { 'Lightsail_20161128.DetachDisk' = 0 }

	export enum DetachInstancesFromLoadBalancerX_Amz_Target { 'Lightsail_20161128.DetachInstancesFromLoadBalancer' = 0 }

	export enum DetachStaticIpX_Amz_Target { 'Lightsail_20161128.DetachStaticIp' = 0 }

	export enum DisableAddOnX_Amz_Target { 'Lightsail_20161128.DisableAddOn' = 0 }

	export enum DownloadDefaultKeyPairX_Amz_Target { 'Lightsail_20161128.DownloadDefaultKeyPair' = 0 }

	export enum EnableAddOnX_Amz_Target { 'Lightsail_20161128.EnableAddOn' = 0 }

	export enum ExportSnapshotX_Amz_Target { 'Lightsail_20161128.ExportSnapshot' = 0 }

	export enum GetActiveNamesX_Amz_Target { 'Lightsail_20161128.GetActiveNames' = 0 }

	export enum GetAlarmsX_Amz_Target { 'Lightsail_20161128.GetAlarms' = 0 }

	export enum GetAutoSnapshotsX_Amz_Target { 'Lightsail_20161128.GetAutoSnapshots' = 0 }

	export enum GetBlueprintsX_Amz_Target { 'Lightsail_20161128.GetBlueprints' = 0 }

	export enum GetBucketAccessKeysX_Amz_Target { 'Lightsail_20161128.GetBucketAccessKeys' = 0 }

	export enum GetBucketBundlesX_Amz_Target { 'Lightsail_20161128.GetBucketBundles' = 0 }

	export enum GetBucketMetricDataX_Amz_Target { 'Lightsail_20161128.GetBucketMetricData' = 0 }

	export enum GetBucketsX_Amz_Target { 'Lightsail_20161128.GetBuckets' = 0 }

	export enum GetBundlesX_Amz_Target { 'Lightsail_20161128.GetBundles' = 0 }

	export enum GetCertificatesX_Amz_Target { 'Lightsail_20161128.GetCertificates' = 0 }

	export enum GetCloudFormationStackRecordsX_Amz_Target { 'Lightsail_20161128.GetCloudFormationStackRecords' = 0 }

	export enum GetContactMethodsX_Amz_Target { 'Lightsail_20161128.GetContactMethods' = 0 }

	export enum GetContainerAPIMetadataX_Amz_Target { 'Lightsail_20161128.GetContainerAPIMetadata' = 0 }

	export enum GetContainerImagesX_Amz_Target { 'Lightsail_20161128.GetContainerImages' = 0 }

	export enum GetContainerLogX_Amz_Target { 'Lightsail_20161128.GetContainerLog' = 0 }

	export enum GetContainerServiceDeploymentsX_Amz_Target { 'Lightsail_20161128.GetContainerServiceDeployments' = 0 }

	export enum GetContainerServiceMetricDataX_Amz_Target { 'Lightsail_20161128.GetContainerServiceMetricData' = 0 }

	export enum GetContainerServicePowersX_Amz_Target { 'Lightsail_20161128.GetContainerServicePowers' = 0 }

	export enum GetContainerServicesX_Amz_Target { 'Lightsail_20161128.GetContainerServices' = 0 }

	export enum GetCostEstimateX_Amz_Target { 'Lightsail_20161128.GetCostEstimate' = 0 }

	export enum GetDiskX_Amz_Target { 'Lightsail_20161128.GetDisk' = 0 }

	export enum GetDiskSnapshotX_Amz_Target { 'Lightsail_20161128.GetDiskSnapshot' = 0 }

	export enum GetDiskSnapshotsX_Amz_Target { 'Lightsail_20161128.GetDiskSnapshots' = 0 }

	export enum GetDisksX_Amz_Target { 'Lightsail_20161128.GetDisks' = 0 }

	export enum GetDistributionBundlesX_Amz_Target { 'Lightsail_20161128.GetDistributionBundles' = 0 }

	export enum GetDistributionLatestCacheResetX_Amz_Target { 'Lightsail_20161128.GetDistributionLatestCacheReset' = 0 }

	export enum GetDistributionMetricDataX_Amz_Target { 'Lightsail_20161128.GetDistributionMetricData' = 0 }

	export enum GetDistributionsX_Amz_Target { 'Lightsail_20161128.GetDistributions' = 0 }

	export enum GetDomainX_Amz_Target { 'Lightsail_20161128.GetDomain' = 0 }

	export enum GetDomainsX_Amz_Target { 'Lightsail_20161128.GetDomains' = 0 }

	export enum GetExportSnapshotRecordsX_Amz_Target { 'Lightsail_20161128.GetExportSnapshotRecords' = 0 }

	export enum GetInstanceX_Amz_Target { 'Lightsail_20161128.GetInstance' = 0 }

	export enum GetInstanceAccessDetailsX_Amz_Target { 'Lightsail_20161128.GetInstanceAccessDetails' = 0 }

	export enum GetInstanceMetricDataX_Amz_Target { 'Lightsail_20161128.GetInstanceMetricData' = 0 }

	export enum GetInstancePortStatesX_Amz_Target { 'Lightsail_20161128.GetInstancePortStates' = 0 }

	export enum GetInstanceSnapshotX_Amz_Target { 'Lightsail_20161128.GetInstanceSnapshot' = 0 }

	export enum GetInstanceSnapshotsX_Amz_Target { 'Lightsail_20161128.GetInstanceSnapshots' = 0 }

	export enum GetInstanceStateX_Amz_Target { 'Lightsail_20161128.GetInstanceState' = 0 }

	export enum GetInstancesX_Amz_Target { 'Lightsail_20161128.GetInstances' = 0 }

	export enum GetKeyPairX_Amz_Target { 'Lightsail_20161128.GetKeyPair' = 0 }

	export enum GetKeyPairsX_Amz_Target { 'Lightsail_20161128.GetKeyPairs' = 0 }

	export enum GetLoadBalancerX_Amz_Target { 'Lightsail_20161128.GetLoadBalancer' = 0 }

	export enum GetLoadBalancerMetricDataX_Amz_Target { 'Lightsail_20161128.GetLoadBalancerMetricData' = 0 }

	export enum GetLoadBalancerTlsCertificatesX_Amz_Target { 'Lightsail_20161128.GetLoadBalancerTlsCertificates' = 0 }

	export enum GetLoadBalancerTlsPoliciesX_Amz_Target { 'Lightsail_20161128.GetLoadBalancerTlsPolicies' = 0 }

	export enum GetLoadBalancersX_Amz_Target { 'Lightsail_20161128.GetLoadBalancers' = 0 }

	export enum GetOperationX_Amz_Target { 'Lightsail_20161128.GetOperation' = 0 }

	export enum GetOperationsX_Amz_Target { 'Lightsail_20161128.GetOperations' = 0 }

	export enum GetOperationsForResourceX_Amz_Target { 'Lightsail_20161128.GetOperationsForResource' = 0 }

	export enum GetRegionsX_Amz_Target { 'Lightsail_20161128.GetRegions' = 0 }

	export enum GetRelationalDatabaseX_Amz_Target { 'Lightsail_20161128.GetRelationalDatabase' = 0 }

	export enum GetRelationalDatabaseBlueprintsX_Amz_Target { 'Lightsail_20161128.GetRelationalDatabaseBlueprints' = 0 }

	export enum GetRelationalDatabaseBundlesX_Amz_Target { 'Lightsail_20161128.GetRelationalDatabaseBundles' = 0 }

	export enum GetRelationalDatabaseEventsX_Amz_Target { 'Lightsail_20161128.GetRelationalDatabaseEvents' = 0 }

	export enum GetRelationalDatabaseLogEventsX_Amz_Target { 'Lightsail_20161128.GetRelationalDatabaseLogEvents' = 0 }

	export enum GetRelationalDatabaseLogStreamsX_Amz_Target { 'Lightsail_20161128.GetRelationalDatabaseLogStreams' = 0 }

	export enum GetRelationalDatabaseMasterUserPasswordX_Amz_Target { 'Lightsail_20161128.GetRelationalDatabaseMasterUserPassword' = 0 }

	export enum GetRelationalDatabaseMetricDataX_Amz_Target { 'Lightsail_20161128.GetRelationalDatabaseMetricData' = 0 }

	export enum GetRelationalDatabaseParametersX_Amz_Target { 'Lightsail_20161128.GetRelationalDatabaseParameters' = 0 }

	export enum GetRelationalDatabaseSnapshotX_Amz_Target { 'Lightsail_20161128.GetRelationalDatabaseSnapshot' = 0 }

	export enum GetRelationalDatabaseSnapshotsX_Amz_Target { 'Lightsail_20161128.GetRelationalDatabaseSnapshots' = 0 }

	export enum GetRelationalDatabasesX_Amz_Target { 'Lightsail_20161128.GetRelationalDatabases' = 0 }

	export enum GetStaticIpX_Amz_Target { 'Lightsail_20161128.GetStaticIp' = 0 }

	export enum GetStaticIpsX_Amz_Target { 'Lightsail_20161128.GetStaticIps' = 0 }

	export enum ImportKeyPairX_Amz_Target { 'Lightsail_20161128.ImportKeyPair' = 0 }

	export enum IsVpcPeeredX_Amz_Target { 'Lightsail_20161128.IsVpcPeered' = 0 }

	export enum OpenInstancePublicPortsX_Amz_Target { 'Lightsail_20161128.OpenInstancePublicPorts' = 0 }

	export enum PeerVpcX_Amz_Target { 'Lightsail_20161128.PeerVpc' = 0 }

	export enum PutAlarmX_Amz_Target { 'Lightsail_20161128.PutAlarm' = 0 }

	export enum PutInstancePublicPortsX_Amz_Target { 'Lightsail_20161128.PutInstancePublicPorts' = 0 }

	export enum RebootInstanceX_Amz_Target { 'Lightsail_20161128.RebootInstance' = 0 }

	export enum RebootRelationalDatabaseX_Amz_Target { 'Lightsail_20161128.RebootRelationalDatabase' = 0 }

	export enum RegisterContainerImageX_Amz_Target { 'Lightsail_20161128.RegisterContainerImage' = 0 }

	export enum ReleaseStaticIpX_Amz_Target { 'Lightsail_20161128.ReleaseStaticIp' = 0 }

	export enum ResetDistributionCacheX_Amz_Target { 'Lightsail_20161128.ResetDistributionCache' = 0 }

	export enum SendContactMethodVerificationX_Amz_Target { 'Lightsail_20161128.SendContactMethodVerification' = 0 }

	export enum SetIpAddressTypeX_Amz_Target { 'Lightsail_20161128.SetIpAddressType' = 0 }

	export enum SetResourceAccessForBucketX_Amz_Target { 'Lightsail_20161128.SetResourceAccessForBucket' = 0 }

	export enum StartGUISessionX_Amz_Target { 'Lightsail_20161128.StartGUISession' = 0 }

	export enum StartInstanceX_Amz_Target { 'Lightsail_20161128.StartInstance' = 0 }

	export enum StartRelationalDatabaseX_Amz_Target { 'Lightsail_20161128.StartRelationalDatabase' = 0 }

	export enum StopGUISessionX_Amz_Target { 'Lightsail_20161128.StopGUISession' = 0 }

	export enum StopInstanceX_Amz_Target { 'Lightsail_20161128.StopInstance' = 0 }

	export enum StopRelationalDatabaseX_Amz_Target { 'Lightsail_20161128.StopRelationalDatabase' = 0 }

	export enum TagResourceX_Amz_Target { 'Lightsail_20161128.TagResource' = 0 }

	export enum TestAlarmX_Amz_Target { 'Lightsail_20161128.TestAlarm' = 0 }

	export enum UnpeerVpcX_Amz_Target { 'Lightsail_20161128.UnpeerVpc' = 0 }

	export enum UntagResourceX_Amz_Target { 'Lightsail_20161128.UntagResource' = 0 }

	export enum UpdateBucketX_Amz_Target { 'Lightsail_20161128.UpdateBucket' = 0 }

	export enum UpdateBucketBundleX_Amz_Target { 'Lightsail_20161128.UpdateBucketBundle' = 0 }

	export enum UpdateContainerServiceX_Amz_Target { 'Lightsail_20161128.UpdateContainerService' = 0 }

	export enum UpdateDistributionX_Amz_Target { 'Lightsail_20161128.UpdateDistribution' = 0 }

	export enum UpdateDistributionBundleX_Amz_Target { 'Lightsail_20161128.UpdateDistributionBundle' = 0 }

	export enum UpdateDomainEntryX_Amz_Target { 'Lightsail_20161128.UpdateDomainEntry' = 0 }

	export enum UpdateInstanceMetadataOptionsX_Amz_Target { 'Lightsail_20161128.UpdateInstanceMetadataOptions' = 0 }

	export enum UpdateLoadBalancerAttributeX_Amz_Target { 'Lightsail_20161128.UpdateLoadBalancerAttribute' = 0 }

	export enum UpdateRelationalDatabaseX_Amz_Target { 'Lightsail_20161128.UpdateRelationalDatabase' = 0 }

	export enum UpdateRelationalDatabaseParametersX_Amz_Target { 'Lightsail_20161128.UpdateRelationalDatabaseParameters' = 0 }

}

