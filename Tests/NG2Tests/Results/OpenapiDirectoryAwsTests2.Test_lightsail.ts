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
		id?: string | null;
		resourceName?: string | null;
		resourceType?: OperationResourceType | null;
		createdAt?: Date | null;

		/** Describes the resource location. */
		location?: ResourceLocation;
		isTerminal?: boolean | null;
		operationDetails?: string | null;
		operationType?: OperationOperationType | null;
		status?: OperationStatus | null;
		statusChangedAt?: Date | null;
		errorCode?: string | null;
		errorDetails?: string | null;
	}

	/** Describes the API operation. */
	export interface OperationFormProperties {
		id: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		isTerminal: FormControl<boolean | null | undefined>,
		operationDetails: FormControl<string | null | undefined>,
		operationType: FormControl<OperationOperationType | null | undefined>,
		status: FormControl<OperationStatus | null | undefined>,
		statusChangedAt: FormControl<Date | null | undefined>,
		errorCode: FormControl<string | null | undefined>,
		errorDetails: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			isTerminal: new FormControl<boolean | null | undefined>(undefined),
			operationDetails: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<OperationOperationType | null | undefined>(undefined),
			status: new FormControl<OperationStatus | null | undefined>(undefined),
			statusChangedAt: new FormControl<Date | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorDetails: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperationResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }


	/** Describes the resource location. */
	export interface ResourceLocation {
		availabilityZone?: string | null;
		regionName?: ResourceLocationRegionName | null;
	}

	/** Describes the resource location. */
	export interface ResourceLocationFormProperties {
		availabilityZone: FormControl<string | null | undefined>,
		regionName: FormControl<ResourceLocationRegionName | null | undefined>,
	}
	export function CreateResourceLocationFormGroup() {
		return new FormGroup<ResourceLocationFormProperties>({
			availabilityZone: new FormControl<string | null | undefined>(undefined),
			regionName: new FormControl<ResourceLocationRegionName | null | undefined>(undefined),
		});

	}

	export enum ResourceLocationRegionName { us_east_1 = 0, us_east_2 = 1, us_west_1 = 2, us_west_2 = 3, eu_west_1 = 4, eu_west_2 = 5, eu_west_3 = 6, eu_central_1 = 7, ca_central_1 = 8, ap_south_1 = 9, ap_southeast_1 = 10, ap_southeast_2 = 11, ap_northeast_1 = 12, ap_northeast_2 = 13 }

	export enum OperationOperationType { DeleteKnownHostKeys = 0, DeleteInstance = 1, CreateInstance = 2, StopInstance = 3, StartInstance = 4, RebootInstance = 5, OpenInstancePublicPorts = 6, PutInstancePublicPorts = 7, CloseInstancePublicPorts = 8, AllocateStaticIp = 9, ReleaseStaticIp = 10, AttachStaticIp = 11, DetachStaticIp = 12, UpdateDomainEntry = 13, DeleteDomainEntry = 14, CreateDomain = 15, DeleteDomain = 16, CreateInstanceSnapshot = 17, DeleteInstanceSnapshot = 18, CreateInstancesFromSnapshot = 19, CreateLoadBalancer = 20, DeleteLoadBalancer = 21, AttachInstancesToLoadBalancer = 22, DetachInstancesFromLoadBalancer = 23, UpdateLoadBalancerAttribute = 24, CreateLoadBalancerTlsCertificate = 25, DeleteLoadBalancerTlsCertificate = 26, AttachLoadBalancerTlsCertificate = 27, CreateDisk = 28, DeleteDisk = 29, AttachDisk = 30, DetachDisk = 31, CreateDiskSnapshot = 32, DeleteDiskSnapshot = 33, CreateDiskFromSnapshot = 34, CreateRelationalDatabase = 35, UpdateRelationalDatabase = 36, DeleteRelationalDatabase = 37, CreateRelationalDatabaseFromSnapshot = 38, CreateRelationalDatabaseSnapshot = 39, DeleteRelationalDatabaseSnapshot = 40, UpdateRelationalDatabaseParameters = 41, StartRelationalDatabase = 42, RebootRelationalDatabase = 43, StopRelationalDatabase = 44, EnableAddOn = 45, DisableAddOn = 46, PutAlarm = 47, GetAlarms = 48, DeleteAlarm = 49, TestAlarm = 50, CreateContactMethod = 51, GetContactMethods = 52, SendContactMethodVerification = 53, DeleteContactMethod = 54 }

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
	}
	export interface AttachDiskRequestFormProperties {

		/** Required */
		diskName: FormControl<string | null | undefined>,

		/** Required */
		instanceName: FormControl<string | null | undefined>,

		/** Required */
		diskPath: FormControl<string | null | undefined>,
	}
	export function CreateAttachDiskRequestFormGroup() {
		return new FormGroup<AttachDiskRequestFormProperties>({
			diskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			diskPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Describes the API operation. */
		operation?: Operation;
	}
	export interface CloseInstancePublicPortsResultFormProperties {
	}
	export function CreateCloseInstancePublicPortsResultFormGroup() {
		return new FormGroup<CloseInstancePublicPortsResultFormProperties>({
		});

	}

	export interface CloseInstancePublicPortsRequest {

		/**
		 * Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
		 * Required
		 */
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

		/**
		 * Minimum: -1
		 * Maximum: 65535
		 */
		fromPort?: number | null;

		/**
		 * Minimum: -1
		 * Maximum: 65535
		 */
		toPort?: number | null;
		protocol?: PortInfoProtocol | null;
		cidrs?: Array<string>;
		cidrListAliases?: Array<string>;
	}

	/** Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol. */
	export interface PortInfoFormProperties {

		/**
		 * Minimum: -1
		 * Maximum: 65535
		 */
		fromPort: FormControl<number | null | undefined>,

		/**
		 * Minimum: -1
		 * Maximum: 65535
		 */
		toPort: FormControl<number | null | undefined>,
		protocol: FormControl<PortInfoProtocol | null | undefined>,
	}
	export function CreatePortInfoFormGroup() {
		return new FormGroup<PortInfoFormProperties>({
			fromPort: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(65535)]),
			toPort: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(65535)]),
			protocol: new FormControl<PortInfoProtocol | null | undefined>(undefined),
		});

	}

	export enum PortInfoProtocol { tcp = 0, all = 1, udp = 2, icmp = 3 }

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
		sourceSnapshotName?: string | null;
		sourceResourceName?: string | null;
		restoreDate?: string | null;
		useLatestRestorableAutoSnapshot?: boolean | null;

		/** Required */
		targetSnapshotName: string;

		/** Required */
		sourceRegion: CopySnapshotRequestSourceRegion;
	}
	export interface CopySnapshotRequestFormProperties {
		sourceSnapshotName: FormControl<string | null | undefined>,
		sourceResourceName: FormControl<string | null | undefined>,
		restoreDate: FormControl<string | null | undefined>,
		useLatestRestorableAutoSnapshot: FormControl<boolean | null | undefined>,

		/** Required */
		targetSnapshotName: FormControl<string | null | undefined>,

		/** Required */
		sourceRegion: FormControl<CopySnapshotRequestSourceRegion | null | undefined>,
	}
	export function CreateCopySnapshotRequestFormGroup() {
		return new FormGroup<CopySnapshotRequestFormProperties>({
			sourceSnapshotName: new FormControl<string | null | undefined>(undefined),
			sourceResourceName: new FormControl<string | null | undefined>(undefined),
			restoreDate: new FormControl<string | null | undefined>(undefined),
			useLatestRestorableAutoSnapshot: new FormControl<boolean | null | undefined>(undefined),
			targetSnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceRegion: new FormControl<CopySnapshotRequestSourceRegion | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CopySnapshotRequestSourceRegion { us_east_1 = 0, us_east_2 = 1, us_west_1 = 2, us_west_2 = 3, eu_west_1 = 4, eu_west_2 = 5, eu_west_3 = 6, eu_central_1 = 7, ca_central_1 = 8, ap_south_1 = 9, ap_southeast_1 = 10, ap_southeast_2 = 11, ap_northeast_1 = 12, ap_northeast_2 = 13 }

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
		portInfoSource: InstanceEntryPortInfoSource;
		userData?: string | null;

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
		portInfoSource: FormControl<InstanceEntryPortInfoSource | null | undefined>,
		userData: FormControl<string | null | undefined>,

		/** Required */
		availabilityZone: FormControl<string | null | undefined>,
	}
	export function CreateInstanceEntryFormGroup() {
		return new FormGroup<InstanceEntryFormProperties>({
			sourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portInfoSource: new FormControl<InstanceEntryPortInfoSource | null | undefined>(undefined, [Validators.required]),
			userData: new FormControl<string | null | undefined>(undefined),
			availabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InstanceEntryPortInfoSource { DEFAULT = 0, INSTANCE = 1, NONE = 2, CLOSED = 3 }

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
		protocol: CreateContactMethodRequestProtocol;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		contactEndpoint: string;
	}
	export interface CreateContactMethodRequestFormProperties {

		/** Required */
		protocol: FormControl<CreateContactMethodRequestProtocol | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		contactEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactMethodRequestFormGroup() {
		return new FormGroup<CreateContactMethodRequestFormProperties>({
			protocol: new FormControl<CreateContactMethodRequestProtocol | null | undefined>(undefined, [Validators.required]),
			contactEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export enum CreateContactMethodRequestProtocol { Email = 0, SMS = 1 }

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


	/** <p>Describes a tag key and optional value assigned to an Amazon Lightsail resource.</p> <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p> */
	export interface Tag {
		key?: string | null;
		value?: string | null;
	}

	/** <p>Describes a tag key and optional value assigned to an Amazon Lightsail resource.</p> <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p> */
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


	/** <p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.</p> <note> <p>An additional cost may be associated with enabling add-ons. For more information, see the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing page</a>.</p> </note> */
	export interface AddOnRequest {

		/** Required */
		addOnType: AddOnRequestAddOnType;

		/** <p>Describes a request to enable or modify the automatic snapshot add-on for an Amazon Lightsail instance or disk.</p> <p>When you modify the automatic snapshot time for a resource, it is typically effective immediately except under the following conditions:</p> <ul> <li> <p>If an automatic snapshot has been created for the current day, and you change the snapshot time to a later time of day, then the new snapshot time will be effective the following day. This ensures that two snapshots are not created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to an earlier time of day, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to a time that is within 30 minutes from your current time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> <li> <p>If an automatic snapshot is scheduled to be created within 30 minutes from your current time and you change the snapshot time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> </ul> */
		autoSnapshotAddOnRequest?: AutoSnapshotAddOnRequest;
	}

	/** <p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.</p> <note> <p>An additional cost may be associated with enabling add-ons. For more information, see the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing page</a>.</p> </note> */
	export interface AddOnRequestFormProperties {

		/** Required */
		addOnType: FormControl<AddOnRequestAddOnType | null | undefined>,
	}
	export function CreateAddOnRequestFormGroup() {
		return new FormGroup<AddOnRequestFormProperties>({
			addOnType: new FormControl<AddOnRequestAddOnType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AddOnRequestAddOnType { AutoSnapshot = 0 }


	/** <p>Describes a request to enable or modify the automatic snapshot add-on for an Amazon Lightsail instance or disk.</p> <p>When you modify the automatic snapshot time for a resource, it is typically effective immediately except under the following conditions:</p> <ul> <li> <p>If an automatic snapshot has been created for the current day, and you change the snapshot time to a later time of day, then the new snapshot time will be effective the following day. This ensures that two snapshots are not created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to an earlier time of day, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to a time that is within 30 minutes from your current time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> <li> <p>If an automatic snapshot is scheduled to be created within 30 minutes from your current time and you change the snapshot time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> </ul> */
	export interface AutoSnapshotAddOnRequest {
		snapshotTimeOfDay?: string | null;
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
		diskSnapshotName?: string | null;

		/** Required */
		availabilityZone: string;

		/** Required */
		sizeInGb: number;
		tags?: Array<Tag>;
		addOns?: Array<AddOnRequest>;
		sourceDiskName?: string | null;
		restoreDate?: string | null;
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
		diskName?: string | null;

		/** Required */
		diskSnapshotName: string;
		instanceName?: string | null;
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

	export interface CreateDomainResult {

		/** Describes the API operation. */
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

		/** Describes the API operation. */
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

		/**
		 * Describes a domain recordset entry.
		 * Required
		 */
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
		id?: string | null;
		name?: string | null;
		target?: string | null;
		isAlias?: boolean | null;
		type?: string | null;
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
		customImageName?: string | null;

		/** Required */
		blueprintId: string;

		/** Required */
		bundleId: string;
		userData?: string | null;
		keyPairName?: string | null;
		tags?: Array<Tag>;
		addOns?: Array<AddOnRequest>;
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
	}
	export function CreateCreateInstancesRequestFormGroup() {
		return new FormGroup<CreateInstancesRequestFormProperties>({
			availabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			customImageName: new FormControl<string | null | undefined>(undefined),
			blueprintId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bundleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userData: new FormControl<string | null | undefined>(undefined),
			keyPairName: new FormControl<string | null | undefined>(undefined),
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
		instanceSnapshotName?: string | null;

		/** Required */
		bundleId: string;
		userData?: string | null;
		keyPairName?: string | null;
		tags?: Array<Tag>;
		addOns?: Array<AddOnRequest>;
		sourceInstanceName?: string | null;
		restoreDate?: string | null;
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

		/** Describes the SSH key pair. */
		keyPair?: KeyPair;
		publicKeyBase64?: string | null;
		privateKeyBase64?: string | null;

		/** Describes the API operation. */
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


	/** Describes the SSH key pair. */
	export interface KeyPair {
		name?: string | null;
		arn?: string | null;
		supportCode?: string | null;
		createdAt?: Date | null;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType | null;
		tags?: Array<Tag>;
		fingerprint?: string | null;
	}

	/** Describes the SSH key pair. */
	export interface KeyPairFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
		fingerprint: FormControl<string | null | undefined>,
	}
	export function CreateKeyPairFormGroup() {
		return new FormGroup<KeyPairFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
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

		/**
		 * Required
		 * Minimum: -1
		 * Maximum: 65535
		 */
		instancePort: number;
		healthCheckPath?: string | null;
		certificateName?: string | null;
		certificateDomainName?: string | null;
		certificateAlternativeNames?: Array<string>;
		tags?: Array<Tag>;
	}
	export interface CreateLoadBalancerRequestFormProperties {

		/** Required */
		loadBalancerName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: -1
		 * Maximum: 65535
		 */
		instancePort: FormControl<number | null | undefined>,
		healthCheckPath: FormControl<string | null | undefined>,
		certificateName: FormControl<string | null | undefined>,
		certificateDomainName: FormControl<string | null | undefined>,
	}
	export function CreateCreateLoadBalancerRequestFormGroup() {
		return new FormGroup<CreateLoadBalancerRequestFormProperties>({
			loadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instancePort: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-1), Validators.max(65535)]),
			healthCheckPath: new FormControl<string | null | undefined>(undefined),
			certificateName: new FormControl<string | null | undefined>(undefined),
			certificateDomainName: new FormControl<string | null | undefined>(undefined),
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
		availabilityZone?: string | null;

		/** Required */
		relationalDatabaseBlueprintId: string;

		/** Required */
		relationalDatabaseBundleId: string;

		/** Required */
		masterDatabaseName: string;

		/** Required */
		masterUsername: string;
		masterUserPassword?: string | null;
		preferredBackupWindow?: string | null;
		preferredMaintenanceWindow?: string | null;
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
		availabilityZone?: string | null;
		publiclyAccessible?: boolean | null;
		relationalDatabaseSnapshotName?: string | null;
		relationalDatabaseBundleId?: string | null;
		sourceRelationalDatabaseName?: string | null;
		restoreTime?: Date | null;
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
		protocol: CreateContactMethodRequestProtocol;
	}
	export interface DeleteContactMethodRequestFormProperties {

		/** Required */
		protocol: FormControl<CreateContactMethodRequestProtocol | null | undefined>,
	}
	export function CreateDeleteContactMethodRequestFormGroup() {
		return new FormGroup<DeleteContactMethodRequestFormProperties>({
			protocol: new FormControl<CreateContactMethodRequestProtocol | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteDomainResult {

		/** Describes the API operation. */
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

		/** Describes the API operation. */
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

		/**
		 * Describes a domain recordset entry.
		 * Required
		 */
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

		/** Describes the API operation. */
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
	}
	export interface DeleteKeyPairRequestFormProperties {

		/** Required */
		keyPairName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteKeyPairRequestFormGroup() {
		return new FormGroup<DeleteKeyPairRequestFormProperties>({
			keyPairName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		finalRelationalDatabaseSnapshotName?: string | null;
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
		addOnType: AddOnRequestAddOnType;

		/** Required */
		resourceName: string;
	}
	export interface DisableAddOnRequestFormProperties {

		/** Required */
		addOnType: FormControl<AddOnRequestAddOnType | null | undefined>,

		/** Required */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateDisableAddOnRequestFormGroup() {
		return new FormGroup<DisableAddOnRequestFormProperties>({
			addOnType: new FormControl<AddOnRequestAddOnType | null | undefined>(undefined, [Validators.required]),
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DownloadDefaultKeyPairResult {
		publicKeyBase64?: string | null;
		privateKeyBase64?: string | null;
	}
	export interface DownloadDefaultKeyPairResultFormProperties {
		publicKeyBase64: FormControl<string | null | undefined>,
		privateKeyBase64: FormControl<string | null | undefined>,
	}
	export function CreateDownloadDefaultKeyPairResultFormGroup() {
		return new FormGroup<DownloadDefaultKeyPairResultFormProperties>({
			publicKeyBase64: new FormControl<string | null | undefined>(undefined),
			privateKeyBase64: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * <p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.</p> <note> <p>An additional cost may be associated with enabling add-ons. For more information, see the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing page</a>.</p> </note>
		 * Required
		 */
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
		nextPageToken?: string | null;
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
		pageToken?: string | null;
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
		nextPageToken?: string | null;
	}
	export interface GetAlarmsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAlarmsResultFormGroup() {
		return new FormGroup<GetAlarmsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> */
	export interface Alarm {
		name?: string | null;
		arn?: string | null;
		createdAt?: Date | null;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType | null;
		supportCode?: string | null;

		/** <p>Describes resource being monitored by an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> */
		monitoredResourceInfo?: MonitoredResourceInfo;
		comparisonOperator?: AlarmComparisonOperator | null;
		evaluationPeriods?: number | null;

		/**
		 * Minimum: 60
		 * Maximum: 86400
		 */
		period?: number | null;
		threshold?: number | null;
		datapointsToAlarm?: number | null;
		treatMissingData?: AlarmTreatMissingData | null;
		statistic?: AlarmStatistic | null;
		metricName?: AlarmMetricName | null;
		state?: AlarmState | null;
		unit?: AlarmUnit | null;
		contactProtocols?: Array<ContactProtocol>;
		notificationTriggers?: Array<AlarmState>;
		notificationEnabled?: boolean | null;
	}

	/** <p>Describes an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> */
	export interface AlarmFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		comparisonOperator: FormControl<AlarmComparisonOperator | null | undefined>,
		evaluationPeriods: FormControl<number | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 86400
		 */
		period: FormControl<number | null | undefined>,
		threshold: FormControl<number | null | undefined>,
		datapointsToAlarm: FormControl<number | null | undefined>,
		treatMissingData: FormControl<AlarmTreatMissingData | null | undefined>,
		statistic: FormControl<AlarmStatistic | null | undefined>,
		metricName: FormControl<AlarmMetricName | null | undefined>,
		state: FormControl<AlarmState | null | undefined>,
		unit: FormControl<AlarmUnit | null | undefined>,
		notificationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAlarmFormGroup() {
		return new FormGroup<AlarmFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			comparisonOperator: new FormControl<AlarmComparisonOperator | null | undefined>(undefined),
			evaluationPeriods: new FormControl<number | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(86400)]),
			threshold: new FormControl<number | null | undefined>(undefined),
			datapointsToAlarm: new FormControl<number | null | undefined>(undefined),
			treatMissingData: new FormControl<AlarmTreatMissingData | null | undefined>(undefined),
			statistic: new FormControl<AlarmStatistic | null | undefined>(undefined),
			metricName: new FormControl<AlarmMetricName | null | undefined>(undefined),
			state: new FormControl<AlarmState | null | undefined>(undefined),
			unit: new FormControl<AlarmUnit | null | undefined>(undefined),
			notificationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Describes resource being monitored by an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> */
	export interface MonitoredResourceInfo {
		arn?: string | null;
		name?: string | null;
		resourceType?: OperationResourceType | null;
	}

	/** <p>Describes resource being monitored by an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> */
	export interface MonitoredResourceInfoFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
	}
	export function CreateMonitoredResourceInfoFormGroup() {
		return new FormGroup<MonitoredResourceInfoFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
		});

	}

	export enum AlarmComparisonOperator { GreaterThanOrEqualToThreshold = 0, GreaterThanThreshold = 1, LessThanThreshold = 2, LessThanOrEqualToThreshold = 3 }

	export enum AlarmTreatMissingData { breaching = 0, notBreaching = 1, ignore = 2, missing = 3 }

	export enum AlarmStatistic { Minimum = 0, Maximum = 1, Sum = 2, Average = 3, SampleCount = 4 }

	export enum AlarmMetricName { CPUUtilization = 0, NetworkIn = 1, NetworkOut = 2, StatusCheckFailed = 3, StatusCheckFailed_Instance = 4, StatusCheckFailed_System = 5, ClientTLSNegotiationErrorCount = 6, HealthyHostCount = 7, UnhealthyHostCount = 8, HTTPCode_LB_4XX_Count = 9, HTTPCode_LB_5XX_Count = 10, HTTPCode_Instance_2XX_Count = 11, HTTPCode_Instance_3XX_Count = 12, HTTPCode_Instance_4XX_Count = 13, HTTPCode_Instance_5XX_Count = 14, InstanceResponseTime = 15, RejectedConnectionCount = 16, RequestCount = 17, DatabaseConnections = 18, DiskQueueDepth = 19, FreeStorageSpace = 20, NetworkReceiveThroughput = 21, NetworkTransmitThroughput = 22, BurstCapacityTime = 23, BurstCapacityPercentage = 24 }

	export enum AlarmState { OK = 0, ALARM = 1, INSUFFICIENT_DATA = 2 }

	export enum AlarmUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export enum ContactProtocol { Email = 0, SMS = 1 }

	export interface GetAlarmsRequest {
		alarmName?: string | null;
		pageToken?: string | null;
		monitoredResourceName?: string | null;
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
		resourceName?: string | null;
		resourceType?: OperationResourceType | null;
		autoSnapshots?: Array<AutoSnapshotDetails>;
	}
	export interface GetAutoSnapshotsResultFormProperties {
		resourceName: FormControl<string | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
	}
	export function CreateGetAutoSnapshotsResultFormGroup() {
		return new FormGroup<GetAutoSnapshotsResultFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
		});

	}


	/** Describes an automatic snapshot. */
	export interface AutoSnapshotDetails {
		date?: string | null;
		createdAt?: Date | null;
		status?: AutoSnapshotDetailsStatus | null;
		fromAttachedDisks?: Array<AttachedDisk>;
	}

	/** Describes an automatic snapshot. */
	export interface AutoSnapshotDetailsFormProperties {
		date: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		status: FormControl<AutoSnapshotDetailsStatus | null | undefined>,
	}
	export function CreateAutoSnapshotDetailsFormGroup() {
		return new FormGroup<AutoSnapshotDetailsFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<AutoSnapshotDetailsStatus | null | undefined>(undefined),
		});

	}

	export enum AutoSnapshotDetailsStatus { Success = 0, Failed = 1, InProgress = 2, NotFound = 3 }


	/** Describes a block storage disk that is attached to an instance, and is included in an automatic snapshot. */
	export interface AttachedDisk {
		path?: string | null;
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
		nextPageToken?: string | null;
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
		blueprintId?: string | null;
		name?: string | null;
		group?: string | null;
		type?: BlueprintType | null;
		description?: string | null;
		isActive?: boolean | null;
		minPower?: number | null;
		version?: string | null;
		versionCode?: string | null;
		productUrl?: string | null;
		licenseUrl?: string | null;
		platform?: BlueprintPlatform | null;
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
		platform: FormControl<BlueprintPlatform | null | undefined>,
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
			platform: new FormControl<BlueprintPlatform | null | undefined>(undefined),
		});

	}

	export enum BlueprintType { os = 0, app = 1 }

	export enum BlueprintPlatform { LINUX_UNIX = 0, WINDOWS = 1 }

	export interface GetBlueprintsRequest {
		includeInactive?: boolean | null;
		pageToken?: string | null;
	}
	export interface GetBlueprintsRequestFormProperties {
		includeInactive: FormControl<boolean | null | undefined>,
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBlueprintsRequestFormGroup() {
		return new FormGroup<GetBlueprintsRequestFormProperties>({
			includeInactive: new FormControl<boolean | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBundlesResult {
		bundles?: Array<Bundle>;
		nextPageToken?: string | null;
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
		price?: number | null;
		cpuCount?: number | null;
		diskSizeInGb?: number | null;
		bundleId?: string | null;
		instanceType?: string | null;
		isActive?: boolean | null;
		name?: string | null;
		power?: number | null;
		ramSizeInGb?: number | null;
		transferPerMonthInGb?: number | null;
		supportedPlatforms?: Array<InstancePlatform>;
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

	export enum InstancePlatform { LINUX_UNIX = 0, WINDOWS = 1 }

	export interface GetBundlesRequest {
		includeInactive?: boolean | null;
		pageToken?: string | null;
	}
	export interface GetBundlesRequestFormProperties {
		includeInactive: FormControl<boolean | null | undefined>,
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBundlesRequestFormGroup() {
		return new FormGroup<GetBundlesRequestFormProperties>({
			includeInactive: new FormControl<boolean | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCloudFormationStackRecordsResult {
		cloudFormationStackRecords?: Array<CloudFormationStackRecord>;
		nextPageToken?: string | null;
	}
	export interface GetCloudFormationStackRecordsResultFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCloudFormationStackRecordsResultFormGroup() {
		return new FormGroup<GetCloudFormationStackRecordsResultFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes a CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p> */
	export interface CloudFormationStackRecord {
		name?: string | null;
		arn?: string | null;
		createdAt?: Date | null;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType | null;
		state?: CloudFormationStackRecordState | null;
		sourceInfo?: Array<CloudFormationStackRecordSourceInfo>;

		/** Describes the destination of a record. */
		destinationInfo?: DestinationInfo;
	}

	/** <p>Describes a CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p> */
	export interface CloudFormationStackRecordFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
		state: FormControl<CloudFormationStackRecordState | null | undefined>,
	}
	export function CreateCloudFormationStackRecordFormGroup() {
		return new FormGroup<CloudFormationStackRecordFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
			state: new FormControl<CloudFormationStackRecordState | null | undefined>(undefined),
		});

	}

	export enum CloudFormationStackRecordState { Started = 0, Succeeded = 1, Failed = 2 }


	/** Describes the source of a CloudFormation stack record (i.e., the export snapshot record). */
	export interface CloudFormationStackRecordSourceInfo {
		resourceType?: CloudFormationStackRecordSourceInfoResourceType | null;
		name?: string | null;
		arn?: string | null;
	}

	/** Describes the source of a CloudFormation stack record (i.e., the export snapshot record). */
	export interface CloudFormationStackRecordSourceInfoFormProperties {
		resourceType: FormControl<CloudFormationStackRecordSourceInfoResourceType | null | undefined>,
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCloudFormationStackRecordSourceInfoFormGroup() {
		return new FormGroup<CloudFormationStackRecordSourceInfoFormProperties>({
			resourceType: new FormControl<CloudFormationStackRecordSourceInfoResourceType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudFormationStackRecordSourceInfoResourceType { ExportSnapshotRecord = 0 }


	/** Describes the destination of a record. */
	export interface DestinationInfo {
		id?: string | null;
		service?: string | null;
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
		pageToken?: string | null;
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
		contactEndpoint?: string | null;
		status?: ContactMethodStatus | null;
		protocol?: CreateContactMethodRequestProtocol | null;
		name?: string | null;
		arn?: string | null;
		createdAt?: Date | null;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType | null;
		supportCode?: string | null;
	}

	/** <p>Describes a contact method.</p> <p>A contact method is a way to send you notifications. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> */
	export interface ContactMethodFormProperties {
		contactEndpoint: FormControl<string | null | undefined>,
		status: FormControl<ContactMethodStatus | null | undefined>,
		protocol: FormControl<CreateContactMethodRequestProtocol | null | undefined>,
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
	}
	export function CreateContactMethodFormGroup() {
		return new FormGroup<ContactMethodFormProperties>({
			contactEndpoint: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ContactMethodStatus | null | undefined>(undefined),
			protocol: new FormControl<CreateContactMethodRequestProtocol | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
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

	export interface GetDiskResult {

		/** Describes a system disk or a block storage disk. */
		disk?: Disk;
	}
	export interface GetDiskResultFormProperties {
	}
	export function CreateGetDiskResultFormGroup() {
		return new FormGroup<GetDiskResultFormProperties>({
		});

	}


	/** Describes a system disk or a block storage disk. */
	export interface Disk {
		name?: string | null;
		arn?: string | null;
		supportCode?: string | null;
		createdAt?: Date | null;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType | null;
		tags?: Array<Tag>;
		addOns?: Array<AddOn>;
		sizeInGb?: number | null;
		isSystemDisk?: boolean | null;
		iops?: number | null;
		path?: string | null;
		state?: DiskState | null;
		attachedTo?: string | null;
		isAttached?: boolean | null;
		attachmentState?: string | null;
		gbInUse?: number | null;
	}

	/** Describes a system disk or a block storage disk. */
	export interface DiskFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
		sizeInGb: FormControl<number | null | undefined>,
		isSystemDisk: FormControl<boolean | null | undefined>,
		iops: FormControl<number | null | undefined>,
		path: FormControl<string | null | undefined>,
		state: FormControl<DiskState | null | undefined>,
		attachedTo: FormControl<string | null | undefined>,
		isAttached: FormControl<boolean | null | undefined>,
		attachmentState: FormControl<string | null | undefined>,
		gbInUse: FormControl<number | null | undefined>,
	}
	export function CreateDiskFormGroup() {
		return new FormGroup<DiskFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
			sizeInGb: new FormControl<number | null | undefined>(undefined),
			isSystemDisk: new FormControl<boolean | null | undefined>(undefined),
			iops: new FormControl<number | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<DiskState | null | undefined>(undefined),
			attachedTo: new FormControl<string | null | undefined>(undefined),
			isAttached: new FormControl<boolean | null | undefined>(undefined),
			attachmentState: new FormControl<string | null | undefined>(undefined),
			gbInUse: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes an add-on that is enabled for an Amazon Lightsail resource. */
	export interface AddOn {
		name?: string | null;
		status?: string | null;
		snapshotTimeOfDay?: string | null;
		nextSnapshotTimeOfDay?: string | null;
	}

	/** Describes an add-on that is enabled for an Amazon Lightsail resource. */
	export interface AddOnFormProperties {
		name: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		snapshotTimeOfDay: FormControl<string | null | undefined>,
		nextSnapshotTimeOfDay: FormControl<string | null | undefined>,
	}
	export function CreateAddOnFormGroup() {
		return new FormGroup<AddOnFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			snapshotTimeOfDay: new FormControl<string | null | undefined>(undefined),
			nextSnapshotTimeOfDay: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DiskState { pending = 0, error = 1, available = 2, in_use = 3, unknown = 4 }

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

		/** Describes a block storage disk snapshot. */
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
		name?: string | null;
		arn?: string | null;
		supportCode?: string | null;
		createdAt?: Date | null;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType | null;
		tags?: Array<Tag>;
		sizeInGb?: number | null;
		state?: DiskSnapshotState | null;
		progress?: string | null;
		fromDiskName?: string | null;
		fromDiskArn?: string | null;
		fromInstanceName?: string | null;
		fromInstanceArn?: string | null;
		isFromAutoSnapshot?: boolean | null;
	}

	/** Describes a block storage disk snapshot. */
	export interface DiskSnapshotFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
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
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
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
		nextPageToken?: string | null;
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
		pageToken?: string | null;
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
		nextPageToken?: string | null;
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
		pageToken?: string | null;
	}
	export interface GetDisksRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDisksRequestFormGroup() {
		return new FormGroup<GetDisksRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDomainResult {

		/** Describes a domain where you are storing recordsets in Lightsail. */
		domain?: Domain;
	}
	export interface GetDomainResultFormProperties {
	}
	export function CreateGetDomainResultFormGroup() {
		return new FormGroup<GetDomainResultFormProperties>({
		});

	}


	/** Describes a domain where you are storing recordsets in Lightsail. */
	export interface Domain {
		name?: string | null;
		arn?: string | null;
		supportCode?: string | null;
		createdAt?: Date | null;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType | null;
		tags?: Array<Tag>;
		domainEntries?: Array<DomainEntry>;
	}

	/** Describes a domain where you are storing recordsets in Lightsail. */
	export interface DomainFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
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
		nextPageToken?: string | null;
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
		pageToken?: string | null;
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
		nextPageToken?: string | null;
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
		name?: string | null;
		arn?: string | null;
		createdAt?: Date | null;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType | null;
		state?: CloudFormationStackRecordState | null;

		/** Describes the source of an export snapshot record. */
		sourceInfo?: ExportSnapshotRecordSourceInfo;

		/** Describes the destination of a record. */
		destinationInfo?: DestinationInfo;
	}

	/** Describes an export snapshot record. */
	export interface ExportSnapshotRecordFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
		state: FormControl<CloudFormationStackRecordState | null | undefined>,
	}
	export function CreateExportSnapshotRecordFormGroup() {
		return new FormGroup<ExportSnapshotRecordFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
			state: new FormControl<CloudFormationStackRecordState | null | undefined>(undefined),
		});

	}


	/** Describes the source of an export snapshot record. */
	export interface ExportSnapshotRecordSourceInfo {
		resourceType?: ExportSnapshotRecordSourceInfoResourceType | null;
		createdAt?: Date | null;
		name?: string | null;
		arn?: string | null;
		fromResourceName?: string | null;
		fromResourceArn?: string | null;

		/** Describes an instance snapshot. */
		instanceSnapshotInfo?: InstanceSnapshotInfo;

		/** Describes a disk snapshot. */
		diskSnapshotInfo?: DiskSnapshotInfo;
	}

	/** Describes the source of an export snapshot record. */
	export interface ExportSnapshotRecordSourceInfoFormProperties {
		resourceType: FormControl<ExportSnapshotRecordSourceInfoResourceType | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		fromResourceName: FormControl<string | null | undefined>,
		fromResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateExportSnapshotRecordSourceInfoFormGroup() {
		return new FormGroup<ExportSnapshotRecordSourceInfoFormProperties>({
			resourceType: new FormControl<ExportSnapshotRecordSourceInfoResourceType | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			fromResourceName: new FormControl<string | null | undefined>(undefined),
			fromResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExportSnapshotRecordSourceInfoResourceType { InstanceSnapshot = 0, DiskSnapshot = 1 }


	/** Describes an instance snapshot. */
	export interface InstanceSnapshotInfo {
		fromBundleId?: string | null;
		fromBlueprintId?: string | null;
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
		name?: string | null;
		path?: string | null;
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
		pageToken?: string | null;
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

		/** Describes an instance (a virtual private server). */
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
		name?: string | null;
		arn?: string | null;
		supportCode?: string | null;
		createdAt?: Date | null;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType | null;
		tags?: Array<Tag>;
		blueprintId?: string | null;
		blueprintName?: string | null;
		bundleId?: string | null;
		addOns?: Array<AddOn>;
		isStaticIp?: boolean | null;
		privateIpAddress?: string | null;
		publicIpAddress?: string | null;
		ipv6Address?: string | null;

		/** Describes the hardware for the instance. */
		hardware?: InstanceHardware;

		/** Describes monthly data transfer rates and port information for an instance. */
		networking?: InstanceNetworking;

		/** Describes the virtual private server (or <i>instance</i>) status. */
		state?: InstanceState;
		username?: string | null;
		sshKeyName?: string | null;
	}

	/** Describes an instance (a virtual private server). */
	export interface InstanceFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
		blueprintId: FormControl<string | null | undefined>,
		blueprintName: FormControl<string | null | undefined>,
		bundleId: FormControl<string | null | undefined>,
		isStaticIp: FormControl<boolean | null | undefined>,
		privateIpAddress: FormControl<string | null | undefined>,
		publicIpAddress: FormControl<string | null | undefined>,
		ipv6Address: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
		sshKeyName: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
			blueprintId: new FormControl<string | null | undefined>(undefined),
			blueprintName: new FormControl<string | null | undefined>(undefined),
			bundleId: new FormControl<string | null | undefined>(undefined),
			isStaticIp: new FormControl<boolean | null | undefined>(undefined),
			privateIpAddress: new FormControl<string | null | undefined>(undefined),
			publicIpAddress: new FormControl<string | null | undefined>(undefined),
			ipv6Address: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			sshKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the hardware for the instance. */
	export interface InstanceHardware {
		cpuCount?: number | null;
		disks?: Array<Disk>;
		ramSizeInGb?: number | null;
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

		/** Describes the monthly data transfer in and out of your virtual private server (or <i>instance</i>). */
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

		/**
		 * Minimum: -1
		 * Maximum: 65535
		 */
		fromPort?: number | null;

		/**
		 * Minimum: -1
		 * Maximum: 65535
		 */
		toPort?: number | null;
		protocol?: PortInfoProtocol | null;
		accessFrom?: string | null;
		accessType?: InstancePortInfoAccessType | null;
		commonName?: string | null;
		accessDirection?: InstancePortInfoAccessDirection | null;
		cidrs?: Array<string>;
		cidrListAliases?: Array<string>;
	}

	/** Describes information about ports for an Amazon Lightsail instance. */
	export interface InstancePortInfoFormProperties {

		/**
		 * Minimum: -1
		 * Maximum: 65535
		 */
		fromPort: FormControl<number | null | undefined>,

		/**
		 * Minimum: -1
		 * Maximum: 65535
		 */
		toPort: FormControl<number | null | undefined>,
		protocol: FormControl<PortInfoProtocol | null | undefined>,
		accessFrom: FormControl<string | null | undefined>,
		accessType: FormControl<InstancePortInfoAccessType | null | undefined>,
		commonName: FormControl<string | null | undefined>,
		accessDirection: FormControl<InstancePortInfoAccessDirection | null | undefined>,
	}
	export function CreateInstancePortInfoFormGroup() {
		return new FormGroup<InstancePortInfoFormProperties>({
			fromPort: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(65535)]),
			toPort: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(65535)]),
			protocol: new FormControl<PortInfoProtocol | null | undefined>(undefined),
			accessFrom: new FormControl<string | null | undefined>(undefined),
			accessType: new FormControl<InstancePortInfoAccessType | null | undefined>(undefined),
			commonName: new FormControl<string | null | undefined>(undefined),
			accessDirection: new FormControl<InstancePortInfoAccessDirection | null | undefined>(undefined),
		});

	}

	export enum InstancePortInfoAccessType { Public = 0, Private = 1 }

	export enum InstancePortInfoAccessDirection { inbound = 0, outbound = 1 }


	/** Describes the virtual private server (or <i>instance</i>) status. */
	export interface InstanceState {
		code?: number | null;
		name?: string | null;
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

		/** The parameters for gaining temporary access to one of your Amazon Lightsail instances. */
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
		certKey?: string | null;
		expiresAt?: Date | null;
		ipAddress?: string | null;
		password?: string | null;

		/** The password data for the Windows Server-based instance, including the ciphertext and the key pair name. */
		passwordData?: PasswordData;
		privateKey?: string | null;
		protocol?: InstanceAccessDetailsProtocol | null;
		instanceName?: string | null;
		username?: string | null;
		hostKeys?: Array<HostKeyAttributes>;
	}

	/** The parameters for gaining temporary access to one of your Amazon Lightsail instances. */
	export interface InstanceAccessDetailsFormProperties {
		certKey: FormControl<string | null | undefined>,
		expiresAt: FormControl<Date | null | undefined>,
		ipAddress: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		privateKey: FormControl<string | null | undefined>,
		protocol: FormControl<InstanceAccessDetailsProtocol | null | undefined>,
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
			protocol: new FormControl<InstanceAccessDetailsProtocol | null | undefined>(undefined),
			instanceName: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The password data for the Windows Server-based instance, including the ciphertext and the key pair name. */
	export interface PasswordData {
		ciphertext?: string | null;
		keyPairName?: string | null;
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

	export enum InstanceAccessDetailsProtocol { ssh = 0, rdp = 1 }


	/** Describes the public SSH host keys or the RDP certificate. */
	export interface HostKeyAttributes {
		algorithm?: string | null;
		publicKey?: string | null;
		witnessedAt?: Date | null;
		fingerprintSHA1?: string | null;
		fingerprintSHA256?: string | null;
		notValidBefore?: Date | null;
		notValidAfter?: Date | null;
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
		protocol?: InstanceAccessDetailsProtocol | null;
	}
	export interface GetInstanceAccessDetailsRequestFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
		protocol: FormControl<InstanceAccessDetailsProtocol | null | undefined>,
	}
	export function CreateGetInstanceAccessDetailsRequestFormGroup() {
		return new FormGroup<GetInstanceAccessDetailsRequestFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<InstanceAccessDetailsProtocol | null | undefined>(undefined),
		});

	}

	export interface GetInstanceMetricDataResult {
		metricName?: GetInstanceMetricDataResultMetricName | null;
		metricData?: Array<MetricDatapoint>;
	}
	export interface GetInstanceMetricDataResultFormProperties {
		metricName: FormControl<GetInstanceMetricDataResultMetricName | null | undefined>,
	}
	export function CreateGetInstanceMetricDataResultFormGroup() {
		return new FormGroup<GetInstanceMetricDataResultFormProperties>({
			metricName: new FormControl<GetInstanceMetricDataResultMetricName | null | undefined>(undefined),
		});

	}

	export enum GetInstanceMetricDataResultMetricName { CPUUtilization = 0, NetworkIn = 1, NetworkOut = 2, StatusCheckFailed = 3, StatusCheckFailed_Instance = 4, StatusCheckFailed_System = 5, BurstCapacityTime = 6, BurstCapacityPercentage = 7 }


	/** Describes the metric data point. */
	export interface MetricDatapoint {
		average?: number | null;
		maximum?: number | null;
		minimum?: number | null;
		sampleCount?: number | null;
		sum?: number | null;
		timestamp?: Date | null;
		unit?: MetricDatapointUnit | null;
	}

	/** Describes the metric data point. */
	export interface MetricDatapointFormProperties {
		average: FormControl<number | null | undefined>,
		maximum: FormControl<number | null | undefined>,
		minimum: FormControl<number | null | undefined>,
		sampleCount: FormControl<number | null | undefined>,
		sum: FormControl<number | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		unit: FormControl<MetricDatapointUnit | null | undefined>,
	}
	export function CreateMetricDatapointFormGroup() {
		return new FormGroup<MetricDatapointFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			sampleCount: new FormControl<number | null | undefined>(undefined),
			sum: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			unit: new FormControl<MetricDatapointUnit | null | undefined>(undefined),
		});

	}

	export enum MetricDatapointUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export interface GetInstanceMetricDataRequest {

		/** Required */
		instanceName: string;

		/** Required */
		metricName: GetInstanceMetricDataResultMetricName;

		/**
		 * Required
		 * Minimum: 60
		 * Maximum: 86400
		 */
		period: number;

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;

		/** Required */
		unit: GetInstanceMetricDataRequestUnit;

		/** Required */
		statistics: Array<MetricStatistic>;
	}
	export interface GetInstanceMetricDataRequestFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,

		/** Required */
		metricName: FormControl<GetInstanceMetricDataResultMetricName | null | undefined>,

		/**
		 * Required
		 * Minimum: 60
		 * Maximum: 86400
		 */
		period: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		unit: FormControl<GetInstanceMetricDataRequestUnit | null | undefined>,
	}
	export function CreateGetInstanceMetricDataRequestFormGroup() {
		return new FormGroup<GetInstanceMetricDataRequestFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricName: new FormControl<GetInstanceMetricDataResultMetricName | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(60), Validators.max(86400)]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<GetInstanceMetricDataRequestUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GetInstanceMetricDataRequestUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export enum MetricStatistic { Minimum = 0, Maximum = 1, Sum = 2, Average = 3, SampleCount = 4 }

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

		/**
		 * Minimum: -1
		 * Maximum: 65535
		 */
		fromPort?: number | null;

		/**
		 * Minimum: -1
		 * Maximum: 65535
		 */
		toPort?: number | null;
		protocol?: PortInfoProtocol | null;
		state?: InstancePortStateState | null;
		cidrs?: Array<string>;
		cidrListAliases?: Array<string>;
	}

	/** Describes open ports on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol. */
	export interface InstancePortStateFormProperties {

		/**
		 * Minimum: -1
		 * Maximum: 65535
		 */
		fromPort: FormControl<number | null | undefined>,

		/**
		 * Minimum: -1
		 * Maximum: 65535
		 */
		toPort: FormControl<number | null | undefined>,
		protocol: FormControl<PortInfoProtocol | null | undefined>,
		state: FormControl<InstancePortStateState | null | undefined>,
	}
	export function CreateInstancePortStateFormGroup() {
		return new FormGroup<InstancePortStateFormProperties>({
			fromPort: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(65535)]),
			toPort: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(65535)]),
			protocol: new FormControl<PortInfoProtocol | null | undefined>(undefined),
			state: new FormControl<InstancePortStateState | null | undefined>(undefined),
		});

	}

	export enum InstancePortStateState { open = 0, closed = 1 }

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

		/** Describes an instance snapshot. */
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
		name?: string | null;
		arn?: string | null;
		supportCode?: string | null;
		createdAt?: Date | null;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType | null;
		tags?: Array<Tag>;
		state?: InstanceSnapshotState | null;
		progress?: string | null;
		fromAttachedDisks?: Array<Disk>;
		fromInstanceName?: string | null;
		fromInstanceArn?: string | null;
		fromBlueprintId?: string | null;
		fromBundleId?: string | null;
		isFromAutoSnapshot?: boolean | null;
		sizeInGb?: number | null;
	}

	/** Describes an instance snapshot. */
	export interface InstanceSnapshotFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
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
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
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
		nextPageToken?: string | null;
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
		pageToken?: string | null;
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

		/** Describes the virtual private server (or <i>instance</i>) status. */
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
		nextPageToken?: string | null;
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
		pageToken?: string | null;
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

		/** Describes the SSH key pair. */
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
		nextPageToken?: string | null;
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
		pageToken?: string | null;
	}
	export interface GetKeyPairsRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetKeyPairsRequestFormGroup() {
		return new FormGroup<GetKeyPairsRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLoadBalancerResult {

		/** Describes the Lightsail load balancer. */
		loadBalancer?: LoadBalancer;
	}
	export interface GetLoadBalancerResultFormProperties {
	}
	export function CreateGetLoadBalancerResultFormGroup() {
		return new FormGroup<GetLoadBalancerResultFormProperties>({
		});

	}


	/** Describes the Lightsail load balancer. */
	export interface LoadBalancer {
		name?: string | null;
		arn?: string | null;
		supportCode?: string | null;
		createdAt?: Date | null;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType | null;
		tags?: Array<Tag>;
		dnsName?: string | null;
		state?: LoadBalancerState | null;
		protocol?: LoadBalancerProtocol | null;
		publicPorts?: Array<number>;
		healthCheckPath?: string | null;
		instancePort?: number | null;
		instanceHealthSummary?: Array<InstanceHealthSummary>;
		tlsCertificateSummaries?: Array<LoadBalancerTlsCertificateSummary>;
		configurationOptions?: LoadBalancerConfigurationOptions;
	}

	/** Describes the Lightsail load balancer. */
	export interface LoadBalancerFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
		dnsName: FormControl<string | null | undefined>,
		state: FormControl<LoadBalancerState | null | undefined>,
		protocol: FormControl<LoadBalancerProtocol | null | undefined>,
		healthCheckPath: FormControl<string | null | undefined>,
		instancePort: FormControl<number | null | undefined>,
	}
	export function CreateLoadBalancerFormGroup() {
		return new FormGroup<LoadBalancerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			supportCode: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
			dnsName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<LoadBalancerState | null | undefined>(undefined),
			protocol: new FormControl<LoadBalancerProtocol | null | undefined>(undefined),
			healthCheckPath: new FormControl<string | null | undefined>(undefined),
			instancePort: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LoadBalancerState { active = 0, provisioning = 1, active_impaired = 2, failed = 3, unknown = 4 }

	export enum LoadBalancerProtocol { HTTP_HTTPS = 0, HTTP = 1 }


	/** Describes information about the health of the instance. */
	export interface InstanceHealthSummary {
		instanceName?: string | null;
		instanceHealth?: InstanceHealthSummaryInstanceHealth | null;
		instanceHealthReason?: InstanceHealthSummaryInstanceHealthReason | null;
	}

	/** Describes information about the health of the instance. */
	export interface InstanceHealthSummaryFormProperties {
		instanceName: FormControl<string | null | undefined>,
		instanceHealth: FormControl<InstanceHealthSummaryInstanceHealth | null | undefined>,
		instanceHealthReason: FormControl<InstanceHealthSummaryInstanceHealthReason | null | undefined>,
	}
	export function CreateInstanceHealthSummaryFormGroup() {
		return new FormGroup<InstanceHealthSummaryFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined),
			instanceHealth: new FormControl<InstanceHealthSummaryInstanceHealth | null | undefined>(undefined),
			instanceHealthReason: new FormControl<InstanceHealthSummaryInstanceHealthReason | null | undefined>(undefined),
		});

	}

	export enum InstanceHealthSummaryInstanceHealth { initial = 0, healthy = 1, unhealthy = 2, unused = 3, draining = 4, unavailable = 5 }

	export enum InstanceHealthSummaryInstanceHealthReason { Lb_RegistrationInProgress = 0, Lb_InitialHealthChecking = 1, Lb_InternalError = 2, Instance_ResponseCodeMismatch = 3, Instance_Timeout = 4, Instance_FailedHealthChecks = 5, Instance_NotRegistered = 6, Instance_NotInUse = 7, Instance_DeregistrationInProgress = 8, Instance_InvalidState = 9, Instance_IpUnusable = 10 }


	/** Provides a summary of SSL/TLS certificate metadata. */
	export interface LoadBalancerTlsCertificateSummary {
		name?: string | null;
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
		metricName?: GetLoadBalancerMetricDataResultMetricName | null;
		metricData?: Array<MetricDatapoint>;
	}
	export interface GetLoadBalancerMetricDataResultFormProperties {
		metricName: FormControl<GetLoadBalancerMetricDataResultMetricName | null | undefined>,
	}
	export function CreateGetLoadBalancerMetricDataResultFormGroup() {
		return new FormGroup<GetLoadBalancerMetricDataResultFormProperties>({
			metricName: new FormControl<GetLoadBalancerMetricDataResultMetricName | null | undefined>(undefined),
		});

	}

	export enum GetLoadBalancerMetricDataResultMetricName { ClientTLSNegotiationErrorCount = 0, HealthyHostCount = 1, UnhealthyHostCount = 2, HTTPCode_LB_4XX_Count = 3, HTTPCode_LB_5XX_Count = 4, HTTPCode_Instance_2XX_Count = 5, HTTPCode_Instance_3XX_Count = 6, HTTPCode_Instance_4XX_Count = 7, HTTPCode_Instance_5XX_Count = 8, InstanceResponseTime = 9, RejectedConnectionCount = 10, RequestCount = 11 }

	export interface GetLoadBalancerMetricDataRequest {

		/** Required */
		loadBalancerName: string;

		/** Required */
		metricName: GetLoadBalancerMetricDataResultMetricName;

		/**
		 * Required
		 * Minimum: 60
		 * Maximum: 86400
		 */
		period: number;

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;

		/** Required */
		unit: GetLoadBalancerMetricDataRequestUnit;

		/** Required */
		statistics: Array<MetricStatistic>;
	}
	export interface GetLoadBalancerMetricDataRequestFormProperties {

		/** Required */
		loadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		metricName: FormControl<GetLoadBalancerMetricDataResultMetricName | null | undefined>,

		/**
		 * Required
		 * Minimum: 60
		 * Maximum: 86400
		 */
		period: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		unit: FormControl<GetLoadBalancerMetricDataRequestUnit | null | undefined>,
	}
	export function CreateGetLoadBalancerMetricDataRequestFormGroup() {
		return new FormGroup<GetLoadBalancerMetricDataRequestFormProperties>({
			loadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricName: new FormControl<GetLoadBalancerMetricDataResultMetricName | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(60), Validators.max(86400)]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<GetLoadBalancerMetricDataRequestUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GetLoadBalancerMetricDataRequestUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

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
		name?: string | null;
		arn?: string | null;
		supportCode?: string | null;
		createdAt?: Date | null;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType | null;
		tags?: Array<Tag>;
		loadBalancerName?: string | null;
		isAttached?: boolean | null;
		status?: LoadBalancerTlsCertificateStatus | null;
		domainName?: string | null;
		domainValidationRecords?: Array<LoadBalancerTlsCertificateDomainValidationRecord>;
		failureReason?: LoadBalancerTlsCertificateFailureReason | null;
		issuedAt?: Date | null;
		issuer?: string | null;
		keyAlgorithm?: string | null;
		notAfter?: Date | null;
		notBefore?: Date | null;

		/** Contains information about the status of Lightsail's managed renewal for the certificate. */
		renewalSummary?: LoadBalancerTlsCertificateRenewalSummary;
		revocationReason?: LoadBalancerTlsCertificateRevocationReason | null;
		revokedAt?: Date | null;
		serial?: string | null;
		signatureAlgorithm?: string | null;
		subject?: string | null;
		subjectAlternativeNames?: Array<string>;
	}

	/** <p>Describes a load balancer SSL/TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> */
	export interface LoadBalancerTlsCertificateFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
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
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
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
		name?: string | null;
		type?: string | null;
		value?: string | null;
		validationStatus?: LoadBalancerTlsCertificateDomainValidationRecordValidationStatus | null;
		domainName?: string | null;
	}

	/** Describes the validation record of each domain name in the SSL/TLS certificate. */
	export interface LoadBalancerTlsCertificateDomainValidationRecordFormProperties {
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
		validationStatus: FormControl<LoadBalancerTlsCertificateDomainValidationRecordValidationStatus | null | undefined>,
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerTlsCertificateDomainValidationRecordFormGroup() {
		return new FormGroup<LoadBalancerTlsCertificateDomainValidationRecordFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			validationStatus: new FormControl<LoadBalancerTlsCertificateDomainValidationRecordValidationStatus | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LoadBalancerTlsCertificateDomainValidationRecordValidationStatus { PENDING_VALIDATION = 0, FAILED = 1, SUCCESS = 2 }

	export enum LoadBalancerTlsCertificateFailureReason { NO_AVAILABLE_CONTACTS = 0, ADDITIONAL_VERIFICATION_REQUIRED = 1, DOMAIN_NOT_ALLOWED = 2, INVALID_PUBLIC_DOMAIN = 3, OTHER = 4 }


	/** Contains information about the status of Lightsail's managed renewal for the certificate. */
	export interface LoadBalancerTlsCertificateRenewalSummary {
		renewalStatus?: LoadBalancerTlsCertificateRenewalSummaryRenewalStatus | null;
		domainValidationOptions?: Array<LoadBalancerTlsCertificateDomainValidationOption>;
	}

	/** Contains information about the status of Lightsail's managed renewal for the certificate. */
	export interface LoadBalancerTlsCertificateRenewalSummaryFormProperties {
		renewalStatus: FormControl<LoadBalancerTlsCertificateRenewalSummaryRenewalStatus | null | undefined>,
	}
	export function CreateLoadBalancerTlsCertificateRenewalSummaryFormGroup() {
		return new FormGroup<LoadBalancerTlsCertificateRenewalSummaryFormProperties>({
			renewalStatus: new FormControl<LoadBalancerTlsCertificateRenewalSummaryRenewalStatus | null | undefined>(undefined),
		});

	}

	export enum LoadBalancerTlsCertificateRenewalSummaryRenewalStatus { PENDING_AUTO_RENEWAL = 0, PENDING_VALIDATION = 1, SUCCESS = 2, FAILED = 3 }


	/** Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership. */
	export interface LoadBalancerTlsCertificateDomainValidationOption {
		domainName?: string | null;
		validationStatus?: LoadBalancerTlsCertificateDomainValidationRecordValidationStatus | null;
	}

	/** Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership. */
	export interface LoadBalancerTlsCertificateDomainValidationOptionFormProperties {
		domainName: FormControl<string | null | undefined>,
		validationStatus: FormControl<LoadBalancerTlsCertificateDomainValidationRecordValidationStatus | null | undefined>,
	}
	export function CreateLoadBalancerTlsCertificateDomainValidationOptionFormGroup() {
		return new FormGroup<LoadBalancerTlsCertificateDomainValidationOptionFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			validationStatus: new FormControl<LoadBalancerTlsCertificateDomainValidationRecordValidationStatus | null | undefined>(undefined),
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

	export interface GetLoadBalancersResult {
		loadBalancers?: Array<LoadBalancer>;
		nextPageToken?: string | null;
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
		pageToken?: string | null;
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

		/** Describes the API operation. */
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
		nextPageToken?: string | null;
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
		pageToken?: string | null;
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
		nextPageCount?: string | null;
		nextPageToken?: string | null;
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
		pageToken?: string | null;
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


	/** Describes the AWS Region. */
	export interface Region {
		continentCode?: string | null;
		description?: string | null;
		displayName?: string | null;
		name?: RegionName | null;
		availabilityZones?: Array<AvailabilityZone>;
		relationalDatabaseAvailabilityZones?: Array<AvailabilityZone>;
	}

	/** Describes the AWS Region. */
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

	export enum RegionName { us_east_1 = 0, us_east_2 = 1, us_west_1 = 2, us_west_2 = 3, eu_west_1 = 4, eu_west_2 = 5, eu_west_3 = 6, eu_central_1 = 7, ca_central_1 = 8, ap_south_1 = 9, ap_southeast_1 = 10, ap_southeast_2 = 11, ap_northeast_1 = 12, ap_northeast_2 = 13 }


	/** Describes an Availability Zone. */
	export interface AvailabilityZone {
		zoneName?: string | null;
		state?: string | null;
	}

	/** Describes an Availability Zone. */
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

		/** Describes a database. */
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
		name?: string | null;
		arn?: string | null;
		supportCode?: string | null;
		createdAt?: Date | null;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType | null;
		tags?: Array<Tag>;
		relationalDatabaseBlueprintId?: string | null;
		relationalDatabaseBundleId?: string | null;
		masterDatabaseName?: string | null;

		/** Describes the hardware of a database. */
		hardware?: RelationalDatabaseHardware;
		state?: string | null;
		secondaryAvailabilityZone?: string | null;
		backupRetentionEnabled?: boolean | null;

		/** Describes a pending database value modification. */
		pendingModifiedValues?: PendingModifiedRelationalDatabaseValues;
		engine?: string | null;
		engineVersion?: string | null;
		latestRestorableTime?: Date | null;
		masterUsername?: string | null;
		parameterApplyStatus?: string | null;
		preferredBackupWindow?: string | null;
		preferredMaintenanceWindow?: string | null;
		publiclyAccessible?: boolean | null;

		/** Describes an endpoint for a database. */
		masterEndpoint?: RelationalDatabaseEndpoint;
		pendingMaintenanceActions?: Array<PendingMaintenanceAction>;
		caCertificateIdentifier?: string | null;
	}

	/** Describes a database. */
	export interface RelationalDatabaseFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
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
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
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
		ramSizeInGb?: number | null;
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
		masterUserPassword?: string | null;
		engineVersion?: string | null;
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
		address?: string | null;
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
		action?: string | null;
		description?: string | null;
		currentApplyDate?: Date | null;
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
		nextPageToken?: string | null;
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
		blueprintId?: string | null;
		engine?: RelationalDatabaseBlueprintEngine | null;
		engineVersion?: string | null;
		engineDescription?: string | null;
		engineVersionDescription?: string | null;
		isEngineDefault?: boolean | null;
	}

	/** Describes a database image, or blueprint. A blueprint describes the major engine version of a database. */
	export interface RelationalDatabaseBlueprintFormProperties {
		blueprintId: FormControl<string | null | undefined>,
		engine: FormControl<RelationalDatabaseBlueprintEngine | null | undefined>,
		engineVersion: FormControl<string | null | undefined>,
		engineDescription: FormControl<string | null | undefined>,
		engineVersionDescription: FormControl<string | null | undefined>,
		isEngineDefault: FormControl<boolean | null | undefined>,
	}
	export function CreateRelationalDatabaseBlueprintFormGroup() {
		return new FormGroup<RelationalDatabaseBlueprintFormProperties>({
			blueprintId: new FormControl<string | null | undefined>(undefined),
			engine: new FormControl<RelationalDatabaseBlueprintEngine | null | undefined>(undefined),
			engineVersion: new FormControl<string | null | undefined>(undefined),
			engineDescription: new FormControl<string | null | undefined>(undefined),
			engineVersionDescription: new FormControl<string | null | undefined>(undefined),
			isEngineDefault: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum RelationalDatabaseBlueprintEngine { mysql = 0 }

	export interface GetRelationalDatabaseBlueprintsRequest {
		pageToken?: string | null;
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
		nextPageToken?: string | null;
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
		bundleId?: string | null;
		name?: string | null;
		price?: number | null;
		ramSizeInGb?: number | null;
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
		pageToken?: string | null;
	}
	export interface GetRelationalDatabaseBundlesRequestFormProperties {
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRelationalDatabaseBundlesRequestFormGroup() {
		return new FormGroup<GetRelationalDatabaseBundlesRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRelationalDatabaseEventsResult {
		relationalDatabaseEvents?: Array<RelationalDatabaseEvent>;
		nextPageToken?: string | null;
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
		resource?: string | null;
		createdAt?: Date | null;
		message?: string | null;
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
		pageToken?: string | null;
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
		nextBackwardToken?: string | null;
		nextForwardToken?: string | null;
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
		createdAt?: Date | null;
		message?: string | null;
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
		startTime?: Date | null;
		endTime?: Date | null;
		startFromHead?: boolean | null;
		pageToken?: string | null;
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
		masterUserPassword?: string | null;
		createdAt?: Date | null;
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
		passwordVersion?: GetRelationalDatabaseMasterUserPasswordRequestPasswordVersion | null;
	}
	export interface GetRelationalDatabaseMasterUserPasswordRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,
		passwordVersion: FormControl<GetRelationalDatabaseMasterUserPasswordRequestPasswordVersion | null | undefined>,
	}
	export function CreateGetRelationalDatabaseMasterUserPasswordRequestFormGroup() {
		return new FormGroup<GetRelationalDatabaseMasterUserPasswordRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			passwordVersion: new FormControl<GetRelationalDatabaseMasterUserPasswordRequestPasswordVersion | null | undefined>(undefined),
		});

	}

	export enum GetRelationalDatabaseMasterUserPasswordRequestPasswordVersion { CURRENT = 0, PREVIOUS = 1, PENDING = 2 }

	export interface GetRelationalDatabaseMetricDataResult {
		metricName?: GetRelationalDatabaseMetricDataResultMetricName | null;
		metricData?: Array<MetricDatapoint>;
	}
	export interface GetRelationalDatabaseMetricDataResultFormProperties {
		metricName: FormControl<GetRelationalDatabaseMetricDataResultMetricName | null | undefined>,
	}
	export function CreateGetRelationalDatabaseMetricDataResultFormGroup() {
		return new FormGroup<GetRelationalDatabaseMetricDataResultFormProperties>({
			metricName: new FormControl<GetRelationalDatabaseMetricDataResultMetricName | null | undefined>(undefined),
		});

	}

	export enum GetRelationalDatabaseMetricDataResultMetricName { CPUUtilization = 0, DatabaseConnections = 1, DiskQueueDepth = 2, FreeStorageSpace = 3, NetworkReceiveThroughput = 4, NetworkTransmitThroughput = 5 }

	export interface GetRelationalDatabaseMetricDataRequest {

		/** Required */
		relationalDatabaseName: string;

		/** Required */
		metricName: GetRelationalDatabaseMetricDataResultMetricName;

		/**
		 * Required
		 * Minimum: 60
		 * Maximum: 86400
		 */
		period: number;

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;

		/** Required */
		unit: GetRelationalDatabaseMetricDataRequestUnit;

		/** Required */
		statistics: Array<MetricStatistic>;
	}
	export interface GetRelationalDatabaseMetricDataRequestFormProperties {

		/** Required */
		relationalDatabaseName: FormControl<string | null | undefined>,

		/** Required */
		metricName: FormControl<GetRelationalDatabaseMetricDataResultMetricName | null | undefined>,

		/**
		 * Required
		 * Minimum: 60
		 * Maximum: 86400
		 */
		period: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		unit: FormControl<GetRelationalDatabaseMetricDataRequestUnit | null | undefined>,
	}
	export function CreateGetRelationalDatabaseMetricDataRequestFormGroup() {
		return new FormGroup<GetRelationalDatabaseMetricDataRequestFormProperties>({
			relationalDatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricName: new FormControl<GetRelationalDatabaseMetricDataResultMetricName | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(60), Validators.max(86400)]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<GetRelationalDatabaseMetricDataRequestUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GetRelationalDatabaseMetricDataRequestUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export interface GetRelationalDatabaseParametersResult {
		parameters?: Array<RelationalDatabaseParameter>;
		nextPageToken?: string | null;
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
		allowedValues?: string | null;
		applyMethod?: string | null;
		applyType?: string | null;
		dataType?: string | null;
		description?: string | null;
		isModifiable?: boolean | null;
		parameterName?: string | null;
		parameterValue?: string | null;
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
		pageToken?: string | null;
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

		/** Describes a database snapshot. */
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
		name?: string | null;
		arn?: string | null;
		supportCode?: string | null;
		createdAt?: Date | null;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType | null;
		tags?: Array<Tag>;
		engine?: string | null;
		engineVersion?: string | null;
		sizeInGb?: number | null;
		state?: string | null;
		fromRelationalDatabaseName?: string | null;
		fromRelationalDatabaseArn?: string | null;
		fromRelationalDatabaseBundleId?: string | null;
		fromRelationalDatabaseBlueprintId?: string | null;
	}

	/** Describes a database snapshot. */
	export interface RelationalDatabaseSnapshotFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
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
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
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
		nextPageToken?: string | null;
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
		pageToken?: string | null;
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
		nextPageToken?: string | null;
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
		pageToken?: string | null;
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

		/** Describes the static IP. */
		staticIp?: StaticIp;
	}
	export interface GetStaticIpResultFormProperties {
	}
	export function CreateGetStaticIpResultFormGroup() {
		return new FormGroup<GetStaticIpResultFormProperties>({
		});

	}


	/** Describes the static IP. */
	export interface StaticIp {
		name?: string | null;
		arn?: string | null;
		supportCode?: string | null;
		createdAt?: Date | null;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType | null;
		ipAddress?: string | null;
		attachedTo?: string | null;
		isAttached?: boolean | null;
	}

	/** Describes the static IP. */
	export interface StaticIpFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		supportCode: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		resourceType: FormControl<OperationResourceType | null | undefined>,
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
			resourceType: new FormControl<OperationResourceType | null | undefined>(undefined),
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
		nextPageToken?: string | null;
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
		pageToken?: string | null;
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

		/** Describes the API operation. */
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

		/** Describes the API operation. */
		operation?: Operation;
	}
	export interface OpenInstancePublicPortsResultFormProperties {
	}
	export function CreateOpenInstancePublicPortsResultFormGroup() {
		return new FormGroup<OpenInstancePublicPortsResultFormProperties>({
		});

	}

	export interface OpenInstancePublicPortsRequest {

		/**
		 * Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
		 * Required
		 */
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

		/** Describes the API operation. */
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
		metricName: AlarmMetricName;

		/** Required */
		monitoredResourceName: string;

		/** Required */
		comparisonOperator: AlarmComparisonOperator;

		/** Required */
		threshold: number;

		/** Required */
		evaluationPeriods: number;
		datapointsToAlarm?: number | null;
		treatMissingData?: AlarmTreatMissingData | null;
		contactProtocols?: Array<ContactProtocol>;
		notificationTriggers?: Array<AlarmState>;
		notificationEnabled?: boolean | null;
	}
	export interface PutAlarmRequestFormProperties {

		/** Required */
		alarmName: FormControl<string | null | undefined>,

		/** Required */
		metricName: FormControl<AlarmMetricName | null | undefined>,

		/** Required */
		monitoredResourceName: FormControl<string | null | undefined>,

		/** Required */
		comparisonOperator: FormControl<AlarmComparisonOperator | null | undefined>,

		/** Required */
		threshold: FormControl<number | null | undefined>,

		/** Required */
		evaluationPeriods: FormControl<number | null | undefined>,
		datapointsToAlarm: FormControl<number | null | undefined>,
		treatMissingData: FormControl<AlarmTreatMissingData | null | undefined>,
		notificationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutAlarmRequestFormGroup() {
		return new FormGroup<PutAlarmRequestFormProperties>({
			alarmName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricName: new FormControl<AlarmMetricName | null | undefined>(undefined, [Validators.required]),
			monitoredResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			comparisonOperator: new FormControl<AlarmComparisonOperator | null | undefined>(undefined, [Validators.required]),
			threshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			evaluationPeriods: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			datapointsToAlarm: new FormControl<number | null | undefined>(undefined),
			treatMissingData: new FormControl<AlarmTreatMissingData | null | undefined>(undefined),
			notificationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutInstancePublicPortsResult {

		/** Describes the API operation. */
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
		protocol: SendContactMethodVerificationRequestProtocol;
	}
	export interface SendContactMethodVerificationRequestFormProperties {

		/** Required */
		protocol: FormControl<SendContactMethodVerificationRequestProtocol | null | undefined>,
	}
	export function CreateSendContactMethodVerificationRequestFormGroup() {
		return new FormGroup<SendContactMethodVerificationRequestFormProperties>({
			protocol: new FormControl<SendContactMethodVerificationRequestProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SendContactMethodVerificationRequestProtocol { Email = 0 }

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
		relationalDatabaseSnapshotName?: string | null;
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
		resourceArn?: string | null;

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

		/** Describes the API operation. */
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
		resourceArn?: string | null;

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

		/**
		 * Describes a domain recordset entry.
		 * Required
		 */
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
		attributeName: UpdateLoadBalancerAttributeRequestAttributeName;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		attributeValue: string;
	}
	export interface UpdateLoadBalancerAttributeRequestFormProperties {

		/** Required */
		loadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		attributeName: FormControl<UpdateLoadBalancerAttributeRequestAttributeName | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		attributeValue: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLoadBalancerAttributeRequestFormGroup() {
		return new FormGroup<UpdateLoadBalancerAttributeRequestFormProperties>({
			loadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			attributeName: new FormControl<UpdateLoadBalancerAttributeRequestAttributeName | null | undefined>(undefined, [Validators.required]),
			attributeValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export enum UpdateLoadBalancerAttributeRequestAttributeName { HealthCheckPath = 0, SessionStickinessEnabled = 1, SessionStickiness_LB_CookieDurationSeconds = 2 }

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
		masterUserPassword?: string | null;
		rotateMasterUserPassword?: boolean | null;
		preferredBackupWindow?: string | null;
		preferredMaintenanceWindow?: string | null;
		enableBackupRetention?: boolean | null;
		disableBackupRetention?: boolean | null;
		publiclyAccessible?: boolean | null;
		applyImmediately?: boolean | null;
		caCertificateIdentifier?: string | null;
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

	export enum AccessDirection { inbound = 0, outbound = 1 }

	export enum AddOnType { AutoSnapshot = 0 }

	export enum ResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }

	export enum ComparisonOperator { GreaterThanOrEqualToThreshold = 0, GreaterThanThreshold = 1, LessThanThreshold = 2, LessThanOrEqualToThreshold = 3 }

	export enum TreatMissingData { breaching = 0, notBreaching = 1, ignore = 2, missing = 3 }

	export enum MetricName { CPUUtilization = 0, NetworkIn = 1, NetworkOut = 2, StatusCheckFailed = 3, StatusCheckFailed_Instance = 4, StatusCheckFailed_System = 5, ClientTLSNegotiationErrorCount = 6, HealthyHostCount = 7, UnhealthyHostCount = 8, HTTPCode_LB_4XX_Count = 9, HTTPCode_LB_5XX_Count = 10, HTTPCode_Instance_2XX_Count = 11, HTTPCode_Instance_3XX_Count = 12, HTTPCode_Instance_4XX_Count = 13, HTTPCode_Instance_5XX_Count = 14, InstanceResponseTime = 15, RejectedConnectionCount = 16, RequestCount = 17, DatabaseConnections = 18, DiskQueueDepth = 19, FreeStorageSpace = 20, NetworkReceiveThroughput = 21, NetworkTransmitThroughput = 22, BurstCapacityTime = 23, BurstCapacityPercentage = 24 }

	export enum MetricUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }


	/** Describes a block storage disk mapping. */
	export interface DiskMap {
		originalDiskPath?: string | null;
		newDiskName?: string | null;
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

	export enum AutoSnapshotStatus { Success = 0, Failed = 1, InProgress = 2, NotFound = 3 }

	export enum RecordState { Started = 0, Succeeded = 1, Failed = 2 }

	export enum CloudFormationStackRecordSourceType { ExportSnapshotRecord = 0 }

	export enum ContactMethodVerificationProtocol { Email = 0 }

	export enum ExportSnapshotRecordSourceType { InstanceSnapshot = 0, DiskSnapshot = 1 }

	export enum InstanceAccessProtocol { ssh = 0, rdp = 1 }

	export enum InstanceMetricName { CPUUtilization = 0, NetworkIn = 1, NetworkOut = 2, StatusCheckFailed = 3, StatusCheckFailed_Instance = 4, StatusCheckFailed_System = 5, BurstCapacityTime = 6, BurstCapacityPercentage = 7 }

	export enum LoadBalancerMetricName { ClientTLSNegotiationErrorCount = 0, HealthyHostCount = 1, UnhealthyHostCount = 2, HTTPCode_LB_4XX_Count = 3, HTTPCode_LB_5XX_Count = 4, HTTPCode_Instance_2XX_Count = 5, HTTPCode_Instance_3XX_Count = 6, HTTPCode_Instance_4XX_Count = 7, HTTPCode_Instance_5XX_Count = 8, InstanceResponseTime = 9, RejectedConnectionCount = 10, RequestCount = 11 }

	export enum RelationalDatabasePasswordVersion { CURRENT = 0, PREVIOUS = 1, PENDING = 2 }

	export enum RelationalDatabaseMetricName { CPUUtilization = 0, DatabaseConnections = 1, DiskQueueDepth = 2, FreeStorageSpace = 3, NetworkReceiveThroughput = 4, NetworkTransmitThroughput = 5 }

	export enum PortInfoSourceType { DEFAULT = 0, INSTANCE = 1, NONE = 2, CLOSED = 3 }

	export enum InstanceHealthReason { Lb_RegistrationInProgress = 0, Lb_InitialHealthChecking = 1, Lb_InternalError = 2, Instance_ResponseCodeMismatch = 3, Instance_Timeout = 4, Instance_FailedHealthChecks = 5, Instance_NotRegistered = 6, Instance_NotInUse = 7, Instance_DeregistrationInProgress = 8, Instance_InvalidState = 9, Instance_IpUnusable = 10 }

	export enum InstanceHealthState { initial = 0, healthy = 1, unhealthy = 2, unused = 3, draining = 4, unavailable = 5 }

	export enum NetworkProtocol { tcp = 0, all = 1, udp = 2, icmp = 3 }

	export enum PortAccessType { Public = 0, Private = 1 }

	export enum PortState { open = 0, closed = 1 }

	export enum LoadBalancerAttributeName { HealthCheckPath = 0, SessionStickinessEnabled = 1, SessionStickiness_LB_CookieDurationSeconds = 2 }

	export enum LoadBalancerTlsCertificateDomainStatus { PENDING_VALIDATION = 0, FAILED = 1, SUCCESS = 2 }

	export enum LoadBalancerTlsCertificateRenewalStatus { PENDING_AUTO_RENEWAL = 0, PENDING_VALIDATION = 1, SUCCESS = 2, FAILED = 3 }

	export enum OperationType { DeleteKnownHostKeys = 0, DeleteInstance = 1, CreateInstance = 2, StopInstance = 3, StartInstance = 4, RebootInstance = 5, OpenInstancePublicPorts = 6, PutInstancePublicPorts = 7, CloseInstancePublicPorts = 8, AllocateStaticIp = 9, ReleaseStaticIp = 10, AttachStaticIp = 11, DetachStaticIp = 12, UpdateDomainEntry = 13, DeleteDomainEntry = 14, CreateDomain = 15, DeleteDomain = 16, CreateInstanceSnapshot = 17, DeleteInstanceSnapshot = 18, CreateInstancesFromSnapshot = 19, CreateLoadBalancer = 20, DeleteLoadBalancer = 21, AttachInstancesToLoadBalancer = 22, DetachInstancesFromLoadBalancer = 23, UpdateLoadBalancerAttribute = 24, CreateLoadBalancerTlsCertificate = 25, DeleteLoadBalancerTlsCertificate = 26, AttachLoadBalancerTlsCertificate = 27, CreateDisk = 28, DeleteDisk = 29, AttachDisk = 30, DetachDisk = 31, CreateDiskSnapshot = 32, DeleteDiskSnapshot = 33, CreateDiskFromSnapshot = 34, CreateRelationalDatabase = 35, UpdateRelationalDatabase = 36, DeleteRelationalDatabase = 37, CreateRelationalDatabaseFromSnapshot = 38, CreateRelationalDatabaseSnapshot = 39, DeleteRelationalDatabaseSnapshot = 40, UpdateRelationalDatabaseParameters = 41, StartRelationalDatabase = 42, RebootRelationalDatabase = 43, StopRelationalDatabase = 44, EnableAddOn = 45, DisableAddOn = 46, PutAlarm = 47, GetAlarms = 48, DeleteAlarm = 49, TestAlarm = 50, CreateContactMethod = 51, GetContactMethods = 52, SendContactMethodVerification = 53, DeleteContactMethod = 54 }

	export enum RelationalDatabaseEngine { mysql = 0 }

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
		 * <p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name.</p> <p>The <code>attach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.AttachDisk
		 * @return {AttachDiskResult} Success
		 */
		AttachDisk(requestBody: AttachDiskRequest): Observable<AttachDiskResult> {
			return this.http.post<AttachDiskResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.AttachDisk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches one or more Lightsail instances to a load balancer.</p> <p>After some time, the instances are attached to the load balancer and the health check status is available.</p> <p>The <code>attach instances to load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer
		 * @return {AttachInstancesToLoadBalancerResult} Success
		 */
		AttachInstancesToLoadBalancer(requestBody: AttachInstancesToLoadBalancerRequest): Observable<AttachInstancesToLoadBalancerResult> {
			return this.http.post<AttachInstancesToLoadBalancerResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the <code>AttachLoadBalancerTlsCertificate</code> action with the non-attached certificate, and it will replace the existing one and become the attached certificate.</p> <p>The <code>AttachLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
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
		 * <p>Closes ports for a specific Amazon Lightsail instance.</p> <p>The <code>CloseInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts
		 * @return {CloseInstancePublicPortsResult} Success
		 */
		CloseInstancePublicPorts(requestBody: CloseInstancePublicPortsRequest): Observable<CloseInstancePublicPortsResult> {
			return this.http.post<CloseInstancePublicPortsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an automatic snapshot of an instance or disk as a manual snapshot. This operation can also be used to copy a manual or automatic snapshot of an instance or a disk from one AWS Region to another in Amazon Lightsail.</p> <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code> parameters.</p> <p>When copying an <i>automatic snapshot</i>, be sure to define the <code>source region</code>, <code>source resource name</code>, <code>target snapshot name</code>, and either the <code>restore date</code> or the <code>use latest restorable auto snapshot</code> parameters.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CopySnapshot
		 * @return {CopySnapshotResult} Success
		 */
		CopySnapshot(requestBody: CopySnapshotRequest): Observable<CopySnapshotResult> {
			return this.http.post<CopySnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CopySnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Creates an email or SMS text message contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each AWS Region. However, SMS text messaging is not supported in some AWS Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateContactMethod
		 * @return {CreateContactMethodResult} Success
		 */
		CreateContactMethod(requestBody: CreateContactMethodRequest): Observable<CreateContactMethodResult> {
			return this.http.post<CreateContactMethodResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateContactMethod', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateDisk
		 * @return {CreateDiskResult} Success
		 */
		CreateDisk(requestBody: CreateDiskRequest): Observable<CreateDiskResult> {
			return this.http.post<CreateDiskResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateDisk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot
		 * @return {CreateDiskFromSnapshotResult} Success
		 */
		CreateDiskFromSnapshot(requestBody: CreateDiskFromSnapshotRequest): Observable<CreateDiskFromSnapshotResult> {
			return this.http.post<CreateDiskFromSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance.</p> <p>You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending.</p> <p>You can also use this operation to create a snapshot of an instance's system volume. You might want to do this, for example, to recover data from the system volume of a botched instance or to create a backup of the system volume like you would for a block storage disk. To create a snapshot of a system volume, just define the <code>instance name</code> parameter when issuing the snapshot command, and a snapshot of the defined instance's system volume will be created. After the snapshot is available, you can create a block storage disk from the snapshot and attach it to a running instance to access the data on the disk.</p> <p>The <code>create disk snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot
		 * @return {CreateDiskSnapshotResult} Success
		 */
		CreateDiskSnapshot(requestBody: CreateDiskSnapshotRequest): Observable<CreateDiskSnapshotResult> {
			return this.http.post<CreateDiskSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a domain resource for the specified domain (e.g., example.com).</p> <p>The <code>create domain</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateDomain
		 * @return {CreateDomainResult} Success
		 */
		CreateDomain(requestBody: CreateDomainRequest): Observable<CreateDomainResult> {
			return this.http.post<CreateDomainResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates one of the following entry records associated with the domain: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).</p> <p>The <code>create domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateDomainEntry
		 * @return {CreateDomainEntryResult} Success
		 */
		CreateDomainEntry(requestBody: CreateDomainEntryRequest): Observable<CreateDomainEntryResult> {
			return this.http.post<CreateDomainEntryResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateDomainEntry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a snapshot of a specific virtual private server, or <i>instance</i>. You can use a snapshot to create a new instance that is based on that snapshot.</p> <p>The <code>create instance snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot
		 * @return {CreateInstanceSnapshotResult} Success
		 */
		CreateInstanceSnapshot(requestBody: CreateInstanceSnapshotRequest): Observable<CreateInstanceSnapshotResult> {
			return this.http.post<CreateInstanceSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates one or more Amazon Lightsail instances.</p> <p>The <code>create instances</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateInstances
		 * @return {CreateInstancesResult} Success
		 */
		CreateInstances(requestBody: CreateInstancesRequest): Observable<CreateInstancesResult> {
			return this.http.post<CreateInstancesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates one or more new instances from a manual or automatic snapshot of an instance.</p> <p>The <code>create instances from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot
		 * @return {CreateInstancesFromSnapshotResult} Success
		 */
		CreateInstancesFromSnapshot(requestBody: CreateInstancesFromSnapshotRequest): Observable<CreateInstancesFromSnapshotResult> {
			return this.http.post<CreateInstancesFromSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an SSH key pair.</p> <p>The <code>create key pair</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateKeyPair
		 * @return {CreateKeyPairResult} Success
		 */
		CreateKeyPair(requestBody: CreateKeyPairRequest): Observable<CreateKeyPairResult> {
			return this.http.post<CreateKeyPairResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/how-to/article/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5 load balancers per AWS Region in your account.</p> <p>When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code> operation.</p> <p>The <code>create load balancer</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateLoadBalancer
		 * @return {CreateLoadBalancerResult} Success
		 */
		CreateLoadBalancer(requestBody: CreateLoadBalancerRequest): Observable<CreateLoadBalancerResult> {
			return this.http.post<CreateLoadBalancerResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Lightsail load balancer TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>The <code>CreateLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate
		 * @return {CreateLoadBalancerTlsCertificateResult} Success
		 */
		CreateLoadBalancerTlsCertificate(requestBody: CreateLoadBalancerTlsCertificateRequest): Observable<CreateLoadBalancerTlsCertificateResult> {
			return this.http.post<CreateLoadBalancerTlsCertificateResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new database in Amazon Lightsail.</p> <p>The <code>create relational database</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase
		 * @return {CreateRelationalDatabaseResult} Success
		 */
		CreateRelationalDatabase(requestBody: CreateRelationalDatabaseRequest): Observable<CreateRelationalDatabaseResult> {
			return this.http.post<CreateRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p> <p>You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan.</p> <p>The <code>create relational database from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot
		 * @return {CreateRelationalDatabaseFromSnapshotResult} Success
		 */
		CreateRelationalDatabaseFromSnapshot(requestBody: CreateRelationalDatabaseFromSnapshotRequest): Observable<CreateRelationalDatabaseFromSnapshotResult> {
			return this.http.post<CreateRelationalDatabaseFromSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database.</p> <p>The <code>create relational database snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
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
		 * Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot
		 * @return {DeleteAutoSnapshotResult} Success
		 */
		DeleteAutoSnapshot(requestBody: DeleteAutoSnapshotRequest): Observable<DeleteAutoSnapshotResult> {
			return this.http.post<DeleteAutoSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each AWS Region. However, SMS text messaging is not supported in some AWS Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteContactMethod
		 * @return {DeleteContactMethodResult} Success
		 */
		DeleteContactMethod(requestBody: DeleteContactMethodRequest): Observable<DeleteContactMethodResult> {
			return this.http.post<DeleteContactMethodResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteContactMethod', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified block storage disk. The disk must be in the <code>available</code> state (not attached to a Lightsail instance).</p> <note> <p>The disk may remain in the <code>deleting</code> state for several minutes.</p> </note> <p>The <code>delete disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteDisk
		 * @return {DeleteDiskResult} Success
		 */
		DeleteDisk(requestBody: DeleteDiskRequest): Observable<DeleteDiskResult> {
			return this.http.post<DeleteDiskResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteDisk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified disk snapshot.</p> <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk.</p> <p>The <code>delete disk snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot
		 * @return {DeleteDiskSnapshotResult} Success
		 */
		DeleteDiskSnapshot(requestBody: DeleteDiskSnapshotRequest): Observable<DeleteDiskSnapshotResult> {
			return this.http.post<DeleteDiskSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified domain recordset and all of its domain records.</p> <p>The <code>delete domain</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteDomain
		 * @return {DeleteDomainResult} Success
		 */
		DeleteDomain(requestBody: DeleteDomainRequest): Observable<DeleteDomainResult> {
			return this.http.post<DeleteDomainResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a specific domain entry.</p> <p>The <code>delete domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteDomainEntry
		 * @return {DeleteDomainEntryResult} Success
		 */
		DeleteDomainEntry(requestBody: DeleteDomainEntryRequest): Observable<DeleteDomainEntryResult> {
			return this.http.post<DeleteDomainEntryResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an Amazon Lightsail instance.</p> <p>The <code>delete instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteInstance
		 * @return {DeleteInstanceResult} Success
		 */
		DeleteInstance(requestBody: DeleteInstanceRequest): Observable<DeleteInstanceResult> {
			return this.http.post<DeleteInstanceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a specific snapshot of a virtual private server (or <i>instance</i>).</p> <p>The <code>delete instance snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot
		 * @return {DeleteInstanceSnapshotResult} Success
		 */
		DeleteInstanceSnapshot(requestBody: DeleteInstanceSnapshotRequest): Observable<DeleteInstanceSnapshotResult> {
			return this.http.post<DeleteInstanceSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a specific SSH key pair.</p> <p>The <code>delete key pair</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>key pair name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteKeyPair
		 * @return {DeleteKeyPairResult} Success
		 */
		DeleteKeyPair(requestBody: DeleteKeyPairRequest): Observable<DeleteKeyPairResult> {
			return this.http.post<DeleteKeyPairResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance. This operation enables the Lightsail browser-based SSH or RDP clients to connect to the instance after a host key mismatch.</p> <important> <p>Perform this operation only if you were expecting the host key or certificate mismatch or if you are familiar with the new host key or certificate on the instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP client</a>.</p> </important>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys
		 * @return {DeleteKnownHostKeysResult} Success
		 */
		DeleteKnownHostKeys(requestBody: DeleteKnownHostKeysRequest): Observable<DeleteKnownHostKeysResult> {
			return this.http.post<DeleteKnownHostKeysResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again.</p> <p>The <code>delete load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer
		 * @return {DeleteLoadBalancerResult} Success
		 */
		DeleteLoadBalancer(requestBody: DeleteLoadBalancerRequest): Observable<DeleteLoadBalancerResult> {
			return this.http.post<DeleteLoadBalancerResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p> <p>The <code>DeleteLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate
		 * @return {DeleteLoadBalancerTlsCertificateResult} Success
		 */
		DeleteLoadBalancerTlsCertificate(requestBody: DeleteLoadBalancerTlsCertificateRequest): Observable<DeleteLoadBalancerTlsCertificateResult> {
			return this.http.post<DeleteLoadBalancerTlsCertificateResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a database in Amazon Lightsail.</p> <p>The <code>delete relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase
		 * @return {DeleteRelationalDatabaseResult} Success
		 */
		DeleteRelationalDatabase(requestBody: DeleteRelationalDatabaseRequest): Observable<DeleteRelationalDatabaseResult> {
			return this.http.post<DeleteRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a database snapshot in Amazon Lightsail.</p> <p>The <code>delete relational database snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot
		 * @return {DeleteRelationalDatabaseSnapshotResult} Success
		 */
		DeleteRelationalDatabaseSnapshot(requestBody: DeleteRelationalDatabaseSnapshotRequest): Observable<DeleteRelationalDatabaseSnapshotResult> {
			return this.http.post<DeleteRelationalDatabaseSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk.</p> <p>The <code>detach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DetachDisk
		 * @return {DetachDiskResult} Success
		 */
		DetachDisk(requestBody: DetachDiskRequest): Observable<DetachDiskResult> {
			return this.http.post<DetachDiskResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DetachDisk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detaches the specified instances from a Lightsail load balancer.</p> <p>This operation waits until the instances are no longer needed before they are detached from the load balancer.</p> <p>The <code>detach instances from load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
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
		 * Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.
		 * Post #X-Amz-Target=Lightsail_20161128.DisableAddOn
		 * @return {DisableAddOnResult} Success
		 */
		DisableAddOn(requestBody: DisableAddOnRequest): Observable<DisableAddOnResult> {
			return this.http.post<DisableAddOnResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DisableAddOn', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Downloads the default SSH key pair from the user's account.
		 * Post #X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair
		 * @return {DownloadDefaultKeyPairResult} Success
		 */
		DownloadDefaultKeyPair(requestBody: DownloadDefaultKeyPairRequest): Observable<DownloadDefaultKeyPairResult> {
			return this.http.post<DownloadDefaultKeyPairResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.
		 * Post #X-Amz-Target=Lightsail_20161128.EnableAddOn
		 * @return {EnableAddOnResult} Success
		 */
		EnableAddOn(requestBody: EnableAddOnRequest): Observable<EnableAddOnResult> {
			return this.http.post<EnableAddOnResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.EnableAddOn', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2). This operation results in an export snapshot record that can be used with the <code>create cloud formation stack</code> operation to create new Amazon EC2 instances.</p> <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the source Lightsail snapshot.</p> <p/> <p>The <code>export snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>source snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p> <note> <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code> operations to get a list of snapshots that you can export to Amazon EC2.</p> </note>
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
		 * Returns the available automatic snapshots for an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.
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
		 * Returns the list of bundles that are available for purchase. A bundle describes the specs for your virtual private server (or <i>instance</i>).
		 * Post #X-Amz-Target=Lightsail_20161128.GetBundles
		 * @return {GetBundlesResult} Success
		 */
		GetBundles(requestBody: GetBundlesRequest): Observable<GetBundlesResult> {
			return this.http.post<GetBundlesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetBundles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Returns information about the configured contact methods. Specify a protocol in your request to return information about a specific contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each AWS Region. However, SMS text messaging is not supported in some AWS Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetContactMethods
		 * @return {GetContactMethodsResult} Success
		 */
		GetContactMethods(requestBody: GetContactMethodsRequest): Observable<GetContactMethodsResult> {
			return this.http.post<GetContactMethodsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetContactMethods', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Returns the export snapshot record created as a result of the <code>export snapshot</code> operation.</p> <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related resources with the <code>create cloud formation stack</code> operation.</p>
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
		 * <p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or <i>instance</i>.</p> <p>The <code>get instance access details</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
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
		 * Returns information about a specific static IP.
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
		 * <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol.</p> <p>The <code>OpenInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts
		 * @return {OpenInstancePublicPortsResult} Success
		 */
		OpenInstancePublicPorts(requestBody: OpenInstancePublicPortsRequest): Observable<OpenInstancePublicPortsResult> {
			return this.http.post<OpenInstancePublicPortsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tries to peer the Lightsail VPC with the user's default VPC.
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
		 * <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol. This action also closes all currently open ports that are not included in the request. Include all of the ports and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open ports.</p> <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts
		 * @return {PutInstancePublicPortsResult} Success
		 */
		PutInstancePublicPorts(requestBody: PutInstancePublicPortsRequest): Observable<PutInstancePublicPortsResult> {
			return this.http.post<PutInstancePublicPortsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Restarts a specific instance.</p> <p>The <code>reboot instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.RebootInstance
		 * @return {RebootInstanceResult} Success
		 */
		RebootInstance(requestBody: RebootInstanceRequest): Observable<RebootInstanceResult> {
			return this.http.post<RebootInstanceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.RebootInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Restarts a specific database in Amazon Lightsail.</p> <p>The <code>reboot relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase
		 * @return {RebootRelationalDatabaseResult} Success
		 */
		RebootRelationalDatabase(requestBody: RebootRelationalDatabaseRequest): Observable<RebootRelationalDatabaseResult> {
			return this.http.post<RebootRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Sends a verification request to an email contact method to ensure it's owned by the requester. SMS contact methods don't need to be verified.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each AWS Region. However, SMS text messaging is not supported in some AWS Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> <p>A verification request is sent to the contact method when you initially create it. Use this action to send another verification request if a previous verification request was deleted, or has expired.</p> <important> <p>Notifications are not sent to an email contact method until after it is verified, and confirmed as valid.</p> </important>
		 * Post #X-Amz-Target=Lightsail_20161128.SendContactMethodVerification
		 * @return {SendContactMethodVerificationResult} Success
		 */
		SendContactMethodVerification(requestBody: SendContactMethodVerificationRequest): Observable<SendContactMethodVerificationResult> {
			return this.http.post<SendContactMethodVerificationResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the <code>reboot instance</code> operation.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/lightsail-create-static-ip">Lightsail Dev Guide</a>.</p> </note> <p>The <code>start instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.StartInstance
		 * @return {StartInstanceResult} Success
		 */
		StartInstance(requestBody: StartInstanceRequest): Observable<StartInstanceResult> {
			return this.http.post<StartInstanceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.StartInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the <code>reboot relational database</code> operation.</p> <p>The <code>start relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.StartRelationalDatabase
		 * @return {StartRelationalDatabaseResult} Success
		 */
		StartRelationalDatabase(requestBody: StartRelationalDatabaseRequest): Observable<StartRelationalDatabaseResult> {
			return this.http.post<StartRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a specific Amazon Lightsail instance that is currently running.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/lightsail-create-static-ip">Lightsail Dev Guide</a>.</p> </note> <p>The <code>stop instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.StopInstance
		 * @return {StopInstanceResult} Success
		 */
		StopInstance(requestBody: StopInstanceRequest): Observable<StopInstanceResult> {
			return this.http.post<StopInstanceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.StopInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a specific database that is currently running in Amazon Lightsail.</p> <p>The <code>stop relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.StopRelationalDatabase
		 * @return {StopRelationalDatabaseResult} Success
		 */
		StopRelationalDatabase(requestBody: StopRelationalDatabaseRequest): Observable<StopRelationalDatabaseResult> {
			return this.http.post<StopRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds one or more tags to the specified Amazon Lightsail resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p> <p>The <code>tag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
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
		 * Attempts to unpeer the Lightsail VPC from the user's default VPC.
		 * Post #X-Amz-Target=Lightsail_20161128.UnpeerVpc
		 * @return {UnpeerVpcResult} Success
		 */
		UnpeerVpc(requestBody: UnpeerVpcRequest): Observable<UnpeerVpcResult> {
			return this.http.post<UnpeerVpcResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UnpeerVpc', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified set of tag keys and their values from the specified Amazon Lightsail resource.</p> <p>The <code>untag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UntagResource
		 * @return {UntagResourceResult} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResult> {
			return this.http.post<UntagResourceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a domain recordset after it is created.</p> <p>The <code>update domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateDomainEntry
		 * @return {UpdateDomainEntryResult} Success
		 */
		UpdateDomainEntry(requestBody: UpdateDomainEntryRequest): Observable<UpdateDomainEntryResult> {
			return this.http.post<UpdateDomainEntryResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified attribute for a load balancer. You can only update one attribute at a time.</p> <p>The <code>update load balancer attribute</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute
		 * @return {UpdateLoadBalancerAttributeResult} Success
		 */
		UpdateLoadBalancerAttribute(requestBody: UpdateLoadBalancerAttributeRequest): Observable<UpdateLoadBalancerAttributeResult> {
			return this.http.post<UpdateLoadBalancerAttributeResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p> <p>Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database's predefined maintenance window.</p> <p>The <code>update relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase
		 * @return {UpdateRelationalDatabaseResult} Success
		 */
		UpdateRelationalDatabase(requestBody: UpdateRelationalDatabaseRequest): Observable<UpdateRelationalDatabaseResult> {
			return this.http.post<UpdateRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p> <p>Parameter updates don't cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which parameter updates are applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a <code>dynamic</code> apply type are applied immediately. Parameters marked with a <code>pending-reboot</code> apply type are applied only after the database is rebooted using the <code>reboot relational database</code> operation.</p> <p>The <code>update relational database parameters</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters
		 * @return {UpdateRelationalDatabaseParametersResult} Success
		 */
		UpdateRelationalDatabaseParameters(requestBody: UpdateRelationalDatabaseParametersRequest): Observable<UpdateRelationalDatabaseParametersResult> {
			return this.http.post<UpdateRelationalDatabaseParametersResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AllocateStaticIpX_Amz_Target { Lightsail_20161128_AllocateStaticIp = 0 }

	export enum AttachDiskX_Amz_Target { Lightsail_20161128_AttachDisk = 0 }

	export enum AttachInstancesToLoadBalancerX_Amz_Target { Lightsail_20161128_AttachInstancesToLoadBalancer = 0 }

	export enum AttachLoadBalancerTlsCertificateX_Amz_Target { Lightsail_20161128_AttachLoadBalancerTlsCertificate = 0 }

	export enum AttachStaticIpX_Amz_Target { Lightsail_20161128_AttachStaticIp = 0 }

	export enum CloseInstancePublicPortsX_Amz_Target { Lightsail_20161128_CloseInstancePublicPorts = 0 }

	export enum CopySnapshotX_Amz_Target { Lightsail_20161128_CopySnapshot = 0 }

	export enum CreateCloudFormationStackX_Amz_Target { Lightsail_20161128_CreateCloudFormationStack = 0 }

	export enum CreateContactMethodX_Amz_Target { Lightsail_20161128_CreateContactMethod = 0 }

	export enum CreateDiskX_Amz_Target { Lightsail_20161128_CreateDisk = 0 }

	export enum CreateDiskFromSnapshotX_Amz_Target { Lightsail_20161128_CreateDiskFromSnapshot = 0 }

	export enum CreateDiskSnapshotX_Amz_Target { Lightsail_20161128_CreateDiskSnapshot = 0 }

	export enum CreateDomainX_Amz_Target { Lightsail_20161128_CreateDomain = 0 }

	export enum CreateDomainEntryX_Amz_Target { Lightsail_20161128_CreateDomainEntry = 0 }

	export enum CreateInstanceSnapshotX_Amz_Target { Lightsail_20161128_CreateInstanceSnapshot = 0 }

	export enum CreateInstancesX_Amz_Target { Lightsail_20161128_CreateInstances = 0 }

	export enum CreateInstancesFromSnapshotX_Amz_Target { Lightsail_20161128_CreateInstancesFromSnapshot = 0 }

	export enum CreateKeyPairX_Amz_Target { Lightsail_20161128_CreateKeyPair = 0 }

	export enum CreateLoadBalancerX_Amz_Target { Lightsail_20161128_CreateLoadBalancer = 0 }

	export enum CreateLoadBalancerTlsCertificateX_Amz_Target { Lightsail_20161128_CreateLoadBalancerTlsCertificate = 0 }

	export enum CreateRelationalDatabaseX_Amz_Target { Lightsail_20161128_CreateRelationalDatabase = 0 }

	export enum CreateRelationalDatabaseFromSnapshotX_Amz_Target { Lightsail_20161128_CreateRelationalDatabaseFromSnapshot = 0 }

	export enum CreateRelationalDatabaseSnapshotX_Amz_Target { Lightsail_20161128_CreateRelationalDatabaseSnapshot = 0 }

	export enum DeleteAlarmX_Amz_Target { Lightsail_20161128_DeleteAlarm = 0 }

	export enum DeleteAutoSnapshotX_Amz_Target { Lightsail_20161128_DeleteAutoSnapshot = 0 }

	export enum DeleteContactMethodX_Amz_Target { Lightsail_20161128_DeleteContactMethod = 0 }

	export enum DeleteDiskX_Amz_Target { Lightsail_20161128_DeleteDisk = 0 }

	export enum DeleteDiskSnapshotX_Amz_Target { Lightsail_20161128_DeleteDiskSnapshot = 0 }

	export enum DeleteDomainX_Amz_Target { Lightsail_20161128_DeleteDomain = 0 }

	export enum DeleteDomainEntryX_Amz_Target { Lightsail_20161128_DeleteDomainEntry = 0 }

	export enum DeleteInstanceX_Amz_Target { Lightsail_20161128_DeleteInstance = 0 }

	export enum DeleteInstanceSnapshotX_Amz_Target { Lightsail_20161128_DeleteInstanceSnapshot = 0 }

	export enum DeleteKeyPairX_Amz_Target { Lightsail_20161128_DeleteKeyPair = 0 }

	export enum DeleteKnownHostKeysX_Amz_Target { Lightsail_20161128_DeleteKnownHostKeys = 0 }

	export enum DeleteLoadBalancerX_Amz_Target { Lightsail_20161128_DeleteLoadBalancer = 0 }

	export enum DeleteLoadBalancerTlsCertificateX_Amz_Target { Lightsail_20161128_DeleteLoadBalancerTlsCertificate = 0 }

	export enum DeleteRelationalDatabaseX_Amz_Target { Lightsail_20161128_DeleteRelationalDatabase = 0 }

	export enum DeleteRelationalDatabaseSnapshotX_Amz_Target { Lightsail_20161128_DeleteRelationalDatabaseSnapshot = 0 }

	export enum DetachDiskX_Amz_Target { Lightsail_20161128_DetachDisk = 0 }

	export enum DetachInstancesFromLoadBalancerX_Amz_Target { Lightsail_20161128_DetachInstancesFromLoadBalancer = 0 }

	export enum DetachStaticIpX_Amz_Target { Lightsail_20161128_DetachStaticIp = 0 }

	export enum DisableAddOnX_Amz_Target { Lightsail_20161128_DisableAddOn = 0 }

	export enum DownloadDefaultKeyPairX_Amz_Target { Lightsail_20161128_DownloadDefaultKeyPair = 0 }

	export enum EnableAddOnX_Amz_Target { Lightsail_20161128_EnableAddOn = 0 }

	export enum ExportSnapshotX_Amz_Target { Lightsail_20161128_ExportSnapshot = 0 }

	export enum GetActiveNamesX_Amz_Target { Lightsail_20161128_GetActiveNames = 0 }

	export enum GetAlarmsX_Amz_Target { Lightsail_20161128_GetAlarms = 0 }

	export enum GetAutoSnapshotsX_Amz_Target { Lightsail_20161128_GetAutoSnapshots = 0 }

	export enum GetBlueprintsX_Amz_Target { Lightsail_20161128_GetBlueprints = 0 }

	export enum GetBundlesX_Amz_Target { Lightsail_20161128_GetBundles = 0 }

	export enum GetCloudFormationStackRecordsX_Amz_Target { Lightsail_20161128_GetCloudFormationStackRecords = 0 }

	export enum GetContactMethodsX_Amz_Target { Lightsail_20161128_GetContactMethods = 0 }

	export enum GetDiskX_Amz_Target { Lightsail_20161128_GetDisk = 0 }

	export enum GetDiskSnapshotX_Amz_Target { Lightsail_20161128_GetDiskSnapshot = 0 }

	export enum GetDiskSnapshotsX_Amz_Target { Lightsail_20161128_GetDiskSnapshots = 0 }

	export enum GetDisksX_Amz_Target { Lightsail_20161128_GetDisks = 0 }

	export enum GetDomainX_Amz_Target { Lightsail_20161128_GetDomain = 0 }

	export enum GetDomainsX_Amz_Target { Lightsail_20161128_GetDomains = 0 }

	export enum GetExportSnapshotRecordsX_Amz_Target { Lightsail_20161128_GetExportSnapshotRecords = 0 }

	export enum GetInstanceX_Amz_Target { Lightsail_20161128_GetInstance = 0 }

	export enum GetInstanceAccessDetailsX_Amz_Target { Lightsail_20161128_GetInstanceAccessDetails = 0 }

	export enum GetInstanceMetricDataX_Amz_Target { Lightsail_20161128_GetInstanceMetricData = 0 }

	export enum GetInstancePortStatesX_Amz_Target { Lightsail_20161128_GetInstancePortStates = 0 }

	export enum GetInstanceSnapshotX_Amz_Target { Lightsail_20161128_GetInstanceSnapshot = 0 }

	export enum GetInstanceSnapshotsX_Amz_Target { Lightsail_20161128_GetInstanceSnapshots = 0 }

	export enum GetInstanceStateX_Amz_Target { Lightsail_20161128_GetInstanceState = 0 }

	export enum GetInstancesX_Amz_Target { Lightsail_20161128_GetInstances = 0 }

	export enum GetKeyPairX_Amz_Target { Lightsail_20161128_GetKeyPair = 0 }

	export enum GetKeyPairsX_Amz_Target { Lightsail_20161128_GetKeyPairs = 0 }

	export enum GetLoadBalancerX_Amz_Target { Lightsail_20161128_GetLoadBalancer = 0 }

	export enum GetLoadBalancerMetricDataX_Amz_Target { Lightsail_20161128_GetLoadBalancerMetricData = 0 }

	export enum GetLoadBalancerTlsCertificatesX_Amz_Target { Lightsail_20161128_GetLoadBalancerTlsCertificates = 0 }

	export enum GetLoadBalancersX_Amz_Target { Lightsail_20161128_GetLoadBalancers = 0 }

	export enum GetOperationX_Amz_Target { Lightsail_20161128_GetOperation = 0 }

	export enum GetOperationsX_Amz_Target { Lightsail_20161128_GetOperations = 0 }

	export enum GetOperationsForResourceX_Amz_Target { Lightsail_20161128_GetOperationsForResource = 0 }

	export enum GetRegionsX_Amz_Target { Lightsail_20161128_GetRegions = 0 }

	export enum GetRelationalDatabaseX_Amz_Target { Lightsail_20161128_GetRelationalDatabase = 0 }

	export enum GetRelationalDatabaseBlueprintsX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseBlueprints = 0 }

	export enum GetRelationalDatabaseBundlesX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseBundles = 0 }

	export enum GetRelationalDatabaseEventsX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseEvents = 0 }

	export enum GetRelationalDatabaseLogEventsX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseLogEvents = 0 }

	export enum GetRelationalDatabaseLogStreamsX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseLogStreams = 0 }

	export enum GetRelationalDatabaseMasterUserPasswordX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseMasterUserPassword = 0 }

	export enum GetRelationalDatabaseMetricDataX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseMetricData = 0 }

	export enum GetRelationalDatabaseParametersX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseParameters = 0 }

	export enum GetRelationalDatabaseSnapshotX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseSnapshot = 0 }

	export enum GetRelationalDatabaseSnapshotsX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseSnapshots = 0 }

	export enum GetRelationalDatabasesX_Amz_Target { Lightsail_20161128_GetRelationalDatabases = 0 }

	export enum GetStaticIpX_Amz_Target { Lightsail_20161128_GetStaticIp = 0 }

	export enum GetStaticIpsX_Amz_Target { Lightsail_20161128_GetStaticIps = 0 }

	export enum ImportKeyPairX_Amz_Target { Lightsail_20161128_ImportKeyPair = 0 }

	export enum IsVpcPeeredX_Amz_Target { Lightsail_20161128_IsVpcPeered = 0 }

	export enum OpenInstancePublicPortsX_Amz_Target { Lightsail_20161128_OpenInstancePublicPorts = 0 }

	export enum PeerVpcX_Amz_Target { Lightsail_20161128_PeerVpc = 0 }

	export enum PutAlarmX_Amz_Target { Lightsail_20161128_PutAlarm = 0 }

	export enum PutInstancePublicPortsX_Amz_Target { Lightsail_20161128_PutInstancePublicPorts = 0 }

	export enum RebootInstanceX_Amz_Target { Lightsail_20161128_RebootInstance = 0 }

	export enum RebootRelationalDatabaseX_Amz_Target { Lightsail_20161128_RebootRelationalDatabase = 0 }

	export enum ReleaseStaticIpX_Amz_Target { Lightsail_20161128_ReleaseStaticIp = 0 }

	export enum SendContactMethodVerificationX_Amz_Target { Lightsail_20161128_SendContactMethodVerification = 0 }

	export enum StartInstanceX_Amz_Target { Lightsail_20161128_StartInstance = 0 }

	export enum StartRelationalDatabaseX_Amz_Target { Lightsail_20161128_StartRelationalDatabase = 0 }

	export enum StopInstanceX_Amz_Target { Lightsail_20161128_StopInstance = 0 }

	export enum StopRelationalDatabaseX_Amz_Target { Lightsail_20161128_StopRelationalDatabase = 0 }

	export enum TagResourceX_Amz_Target { Lightsail_20161128_TagResource = 0 }

	export enum TestAlarmX_Amz_Target { Lightsail_20161128_TestAlarm = 0 }

	export enum UnpeerVpcX_Amz_Target { Lightsail_20161128_UnpeerVpc = 0 }

	export enum UntagResourceX_Amz_Target { Lightsail_20161128_UntagResource = 0 }

	export enum UpdateDomainEntryX_Amz_Target { Lightsail_20161128_UpdateDomainEntry = 0 }

	export enum UpdateLoadBalancerAttributeX_Amz_Target { Lightsail_20161128_UpdateLoadBalancerAttribute = 0 }

	export enum UpdateRelationalDatabaseX_Amz_Target { Lightsail_20161128_UpdateRelationalDatabase = 0 }

	export enum UpdateRelationalDatabaseParametersX_Amz_Target { Lightsail_20161128_UpdateRelationalDatabaseParameters = 0 }

}

