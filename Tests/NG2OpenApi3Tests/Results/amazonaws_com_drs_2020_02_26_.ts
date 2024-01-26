import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateSourceNetworkStackResponse {
		job?: Job;
	}
	export interface AssociateSourceNetworkStackResponseFormProperties {
	}
	export function CreateAssociateSourceNetworkStackResponseFormGroup() {
		return new FormGroup<AssociateSourceNetworkStackResponseFormProperties>({
		});

	}


	/** A job is an asynchronous workflow. */
	export interface Job {
		arn?: string;
		creationDateTime?: string;
		endDateTime?: string;
		initiatedBy?: InitiatedBy;

		/** Required */
		jobID: string;
		participatingResources?: Array<ParticipatingResource>;
		participatingServers?: Array<ParticipatingServer>;
		status?: JobStatus;
		tags?: TagsMap;
		type?: JobType;
	}

	/** A job is an asynchronous workflow. */
	export interface JobFormProperties {
		arn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<string | null | undefined>,
		endDateTime: FormControl<string | null | undefined>,
		initiatedBy: FormControl<InitiatedBy | null | undefined>,

		/** Required */
		jobID: FormControl<string | null | undefined>,
		status: FormControl<JobStatus | null | undefined>,
		type: FormControl<JobType | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<string | null | undefined>(undefined),
			endDateTime: new FormControl<string | null | undefined>(undefined),
			initiatedBy: new FormControl<InitiatedBy | null | undefined>(undefined),
			jobID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<JobStatus | null | undefined>(undefined),
			type: new FormControl<JobType | null | undefined>(undefined),
		});

	}

	export enum InitiatedBy { START_RECOVERY = 0, START_DRILL = 1, FAILBACK = 2, DIAGNOSTIC = 3, TERMINATE_RECOVERY_INSTANCES = 4, TARGET_ACCOUNT = 5, CREATE_NETWORK_RECOVERY = 6, UPDATE_NETWORK_RECOVERY = 7, ASSOCIATE_NETWORK_RECOVERY = 8 }


	/** Represents a resource participating in an asynchronous Job. */
	export interface ParticipatingResource {
		launchStatus?: LaunchStatus;
		participatingResourceID?: ParticipatingResourceID;
	}

	/** Represents a resource participating in an asynchronous Job. */
	export interface ParticipatingResourceFormProperties {
		launchStatus: FormControl<LaunchStatus | null | undefined>,
	}
	export function CreateParticipatingResourceFormGroup() {
		return new FormGroup<ParticipatingResourceFormProperties>({
			launchStatus: new FormControl<LaunchStatus | null | undefined>(undefined),
		});

	}

	export enum LaunchStatus { PENDING = 0, IN_PROGRESS = 1, LAUNCHED = 2, FAILED = 3, TERMINATED = 4 }


	/** ID of a resource participating in an asynchronous Job. */
	export interface ParticipatingResourceID {
		sourceNetworkID?: string;
	}

	/** ID of a resource participating in an asynchronous Job. */
	export interface ParticipatingResourceIDFormProperties {
		sourceNetworkID: FormControl<string | null | undefined>,
	}
	export function CreateParticipatingResourceIDFormGroup() {
		return new FormGroup<ParticipatingResourceIDFormProperties>({
			sourceNetworkID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a server participating in an asynchronous Job. */
	export interface ParticipatingServer {
		launchStatus?: LaunchStatus;
		recoveryInstanceID?: string;
		sourceServerID?: string;
	}

	/** Represents a server participating in an asynchronous Job. */
	export interface ParticipatingServerFormProperties {
		launchStatus: FormControl<LaunchStatus | null | undefined>,
		recoveryInstanceID: FormControl<string | null | undefined>,
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateParticipatingServerFormGroup() {
		return new FormGroup<ParticipatingServerFormProperties>({
			launchStatus: new FormControl<LaunchStatus | null | undefined>(undefined),
			recoveryInstanceID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobStatus { PENDING = 0, STARTED = 1, COMPLETED = 2 }

	export interface TagsMap {
	}
	export interface TagsMapFormProperties {
	}
	export function CreateTagsMapFormGroup() {
		return new FormGroup<TagsMapFormProperties>({
		});

	}

	export enum JobType { LAUNCH = 0, TERMINATE = 1, CREATE_CONVERTED_SNAPSHOT = 2 }

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface UninitializedAccountException {
	}
	export interface UninitializedAccountExceptionFormProperties {
	}
	export function CreateUninitializedAccountExceptionFormGroup() {
		return new FormGroup<UninitializedAccountExceptionFormProperties>({
		});

	}

	export interface CreateExtendedSourceServerResponse {
		sourceServer?: SourceServer;
	}
	export interface CreateExtendedSourceServerResponseFormProperties {
	}
	export function CreateCreateExtendedSourceServerResponseFormGroup() {
		return new FormGroup<CreateExtendedSourceServerResponseFormProperties>({
		});

	}

	export interface SourceServer {
		arn?: string;
		dataReplicationInfo?: DataReplicationInfo;
		lastLaunchResult?: LastLaunchResult;
		lifeCycle?: LifeCycle;
		recoveryInstanceId?: string;
		replicationDirection?: ReplicationDirection;
		reversedDirectionSourceServerArn?: string;
		sourceCloudProperties?: SourceCloudProperties;
		sourceNetworkID?: string;
		sourceProperties?: SourceProperties;
		sourceServerID?: string;
		stagingArea?: StagingArea;
		tags?: TagsMap;
	}
	export interface SourceServerFormProperties {
		arn: FormControl<string | null | undefined>,
		lastLaunchResult: FormControl<LastLaunchResult | null | undefined>,
		recoveryInstanceId: FormControl<string | null | undefined>,
		replicationDirection: FormControl<ReplicationDirection | null | undefined>,
		reversedDirectionSourceServerArn: FormControl<string | null | undefined>,
		sourceNetworkID: FormControl<string | null | undefined>,
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateSourceServerFormGroup() {
		return new FormGroup<SourceServerFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			lastLaunchResult: new FormControl<LastLaunchResult | null | undefined>(undefined),
			recoveryInstanceId: new FormControl<string | null | undefined>(undefined),
			replicationDirection: new FormControl<ReplicationDirection | null | undefined>(undefined),
			reversedDirectionSourceServerArn: new FormControl<string | null | undefined>(undefined),
			sourceNetworkID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about Data Replication */
	export interface DataReplicationInfo {
		dataReplicationError?: DataReplicationError;
		dataReplicationInitiation?: DataReplicationInitiation;
		dataReplicationState?: DataReplicationState;
		etaDateTime?: string;
		lagDuration?: string;
		replicatedDisks?: Array<DataReplicationInfoReplicatedDisk>;
		stagingAvailabilityZone?: string;
	}

	/** Information about Data Replication */
	export interface DataReplicationInfoFormProperties {
		dataReplicationState: FormControl<DataReplicationState | null | undefined>,
		etaDateTime: FormControl<string | null | undefined>,
		lagDuration: FormControl<string | null | undefined>,
		stagingAvailabilityZone: FormControl<string | null | undefined>,
	}
	export function CreateDataReplicationInfoFormGroup() {
		return new FormGroup<DataReplicationInfoFormProperties>({
			dataReplicationState: new FormControl<DataReplicationState | null | undefined>(undefined),
			etaDateTime: new FormControl<string | null | undefined>(undefined),
			lagDuration: new FormControl<string | null | undefined>(undefined),
			stagingAvailabilityZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error in data replication. */
	export interface DataReplicationError {
		error?: DataReplicationErrorString;
		rawError?: string;
	}

	/** Error in data replication. */
	export interface DataReplicationErrorFormProperties {
		error: FormControl<DataReplicationErrorString | null | undefined>,
		rawError: FormControl<string | null | undefined>,
	}
	export function CreateDataReplicationErrorFormGroup() {
		return new FormGroup<DataReplicationErrorFormProperties>({
			error: new FormControl<DataReplicationErrorString | null | undefined>(undefined),
			rawError: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataReplicationErrorString { AGENT_NOT_SEEN = 0, SNAPSHOTS_FAILURE = 1, NOT_CONVERGING = 2, UNSTABLE_NETWORK = 3, FAILED_TO_CREATE_SECURITY_GROUP = 4, FAILED_TO_LAUNCH_REPLICATION_SERVER = 5, FAILED_TO_BOOT_REPLICATION_SERVER = 6, FAILED_TO_AUTHENTICATE_WITH_SERVICE = 7, FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE = 8, FAILED_TO_CREATE_STAGING_DISKS = 9, FAILED_TO_ATTACH_STAGING_DISKS = 10, FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT = 11, FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER = 12, FAILED_TO_START_DATA_TRANSFER = 13 }


	/** Data replication initiation. */
	export interface DataReplicationInitiation {
		nextAttemptDateTime?: string;
		startDateTime?: string;
		steps?: Array<DataReplicationInitiationStep>;
	}

	/** Data replication initiation. */
	export interface DataReplicationInitiationFormProperties {
		nextAttemptDateTime: FormControl<string | null | undefined>,
		startDateTime: FormControl<string | null | undefined>,
	}
	export function CreateDataReplicationInitiationFormGroup() {
		return new FormGroup<DataReplicationInitiationFormProperties>({
			nextAttemptDateTime: new FormControl<string | null | undefined>(undefined),
			startDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data replication initiation step. */
	export interface DataReplicationInitiationStep {
		name?: DataReplicationInitiationStepName;
		status?: DataReplicationInitiationStepStatus;
	}

	/** Data replication initiation step. */
	export interface DataReplicationInitiationStepFormProperties {
		name: FormControl<DataReplicationInitiationStepName | null | undefined>,
		status: FormControl<DataReplicationInitiationStepStatus | null | undefined>,
	}
	export function CreateDataReplicationInitiationStepFormGroup() {
		return new FormGroup<DataReplicationInitiationStepFormProperties>({
			name: new FormControl<DataReplicationInitiationStepName | null | undefined>(undefined),
			status: new FormControl<DataReplicationInitiationStepStatus | null | undefined>(undefined),
		});

	}

	export enum DataReplicationInitiationStepName { WAIT = 0, CREATE_SECURITY_GROUP = 1, LAUNCH_REPLICATION_SERVER = 2, BOOT_REPLICATION_SERVER = 3, AUTHENTICATE_WITH_SERVICE = 4, DOWNLOAD_REPLICATION_SOFTWARE = 5, CREATE_STAGING_DISKS = 6, ATTACH_STAGING_DISKS = 7, PAIR_REPLICATION_SERVER_WITH_AGENT = 8, CONNECT_AGENT_TO_REPLICATION_SERVER = 9, START_DATA_TRANSFER = 10 }

	export enum DataReplicationInitiationStepStatus { NOT_STARTED = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3, SKIPPED = 4 }

	export enum DataReplicationState { STOPPED = 0, INITIATING = 1, INITIAL_SYNC = 2, BACKLOG = 3, CREATING_SNAPSHOT = 4, CONTINUOUS = 5, PAUSED = 6, RESCAN = 7, STALLED = 8, DISCONNECTED = 9 }


	/** A disk that should be replicated. */
	export interface DataReplicationInfoReplicatedDisk {
		backloggedStorageBytes?: number | null;
		deviceName?: string;
		replicatedStorageBytes?: number | null;
		rescannedStorageBytes?: number | null;
		totalStorageBytes?: number | null;
	}

	/** A disk that should be replicated. */
	export interface DataReplicationInfoReplicatedDiskFormProperties {
		backloggedStorageBytes: FormControl<number | null | undefined>,
		deviceName: FormControl<string | null | undefined>,
		replicatedStorageBytes: FormControl<number | null | undefined>,
		rescannedStorageBytes: FormControl<number | null | undefined>,
		totalStorageBytes: FormControl<number | null | undefined>,
	}
	export function CreateDataReplicationInfoReplicatedDiskFormGroup() {
		return new FormGroup<DataReplicationInfoReplicatedDiskFormProperties>({
			backloggedStorageBytes: new FormControl<number | null | undefined>(undefined),
			deviceName: new FormControl<string | null | undefined>(undefined),
			replicatedStorageBytes: new FormControl<number | null | undefined>(undefined),
			rescannedStorageBytes: new FormControl<number | null | undefined>(undefined),
			totalStorageBytes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LastLaunchResult { NOT_STARTED = 0, PENDING = 1, SUCCEEDED = 2, FAILED = 3 }


	/** An object representing the Source Server Lifecycle. */
	export interface LifeCycle {
		addedToServiceDateTime?: string;
		elapsedReplicationDuration?: string;
		firstByteDateTime?: string;
		lastLaunch?: LifeCycleLastLaunch;
		lastSeenByServiceDateTime?: string;
	}

	/** An object representing the Source Server Lifecycle. */
	export interface LifeCycleFormProperties {
		addedToServiceDateTime: FormControl<string | null | undefined>,
		elapsedReplicationDuration: FormControl<string | null | undefined>,
		firstByteDateTime: FormControl<string | null | undefined>,
		lastSeenByServiceDateTime: FormControl<string | null | undefined>,
	}
	export function CreateLifeCycleFormGroup() {
		return new FormGroup<LifeCycleFormProperties>({
			addedToServiceDateTime: new FormControl<string | null | undefined>(undefined),
			elapsedReplicationDuration: new FormControl<string | null | undefined>(undefined),
			firstByteDateTime: new FormControl<string | null | undefined>(undefined),
			lastSeenByServiceDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object containing information regarding the last launch of a Source Server. */
	export interface LifeCycleLastLaunch {
		initiated?: LifeCycleLastLaunchInitiated;
		status?: LaunchStatus;
	}

	/** An object containing information regarding the last launch of a Source Server. */
	export interface LifeCycleLastLaunchFormProperties {
		status: FormControl<LaunchStatus | null | undefined>,
	}
	export function CreateLifeCycleLastLaunchFormGroup() {
		return new FormGroup<LifeCycleLastLaunchFormProperties>({
			status: new FormControl<LaunchStatus | null | undefined>(undefined),
		});

	}


	/** An object containing information regarding the initiation of the last launch of a Source Server. */
	export interface LifeCycleLastLaunchInitiated {
		apiCallDateTime?: string;
		jobID?: string;
		type?: LastLaunchType;
	}

	/** An object containing information regarding the initiation of the last launch of a Source Server. */
	export interface LifeCycleLastLaunchInitiatedFormProperties {
		apiCallDateTime: FormControl<string | null | undefined>,
		jobID: FormControl<string | null | undefined>,
		type: FormControl<LastLaunchType | null | undefined>,
	}
	export function CreateLifeCycleLastLaunchInitiatedFormGroup() {
		return new FormGroup<LifeCycleLastLaunchInitiatedFormProperties>({
			apiCallDateTime: new FormControl<string | null | undefined>(undefined),
			jobID: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<LastLaunchType | null | undefined>(undefined),
		});

	}

	export enum LastLaunchType { RECOVERY = 0, DRILL = 1 }


	/** Replication direction designates if this is a failover replication, or a failback replication. When a DRS agent is installed on an instance, the replication direction is failover. In cases where a recovery launch was made in the recovery location and a new recovery instance was created, and then a failback replication was initiated from that recovery instance back to the origin location, then the replication direction will be failback. */
	export enum ReplicationDirection { FAILOVER = 0, FAILBACK = 1 }


	/** Properties of the cloud environment where this Source Server originated from. */
	export interface SourceCloudProperties {
		originAccountID?: string;
		originAvailabilityZone?: string;
		originRegion?: string;
	}

	/** Properties of the cloud environment where this Source Server originated from. */
	export interface SourceCloudPropertiesFormProperties {
		originAccountID: FormControl<string | null | undefined>,
		originAvailabilityZone: FormControl<string | null | undefined>,
		originRegion: FormControl<string | null | undefined>,
	}
	export function CreateSourceCloudPropertiesFormGroup() {
		return new FormGroup<SourceCloudPropertiesFormProperties>({
			originAccountID: new FormControl<string | null | undefined>(undefined),
			originAvailabilityZone: new FormControl<string | null | undefined>(undefined),
			originRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the Source Server machine. */
	export interface SourceProperties {
		cpus?: Array<CPU>;
		disks?: Array<Disk>;
		identificationHints?: IdentificationHints;
		lastUpdatedDateTime?: string;
		networkInterfaces?: Array<NetworkInterface>;
		os?: OS;
		ramBytes?: number | null;
		recommendedInstanceType?: string;
		supportsNitroInstances?: boolean | null;
	}

	/** Properties of the Source Server machine. */
	export interface SourcePropertiesFormProperties {
		lastUpdatedDateTime: FormControl<string | null | undefined>,
		ramBytes: FormControl<number | null | undefined>,
		recommendedInstanceType: FormControl<string | null | undefined>,
		supportsNitroInstances: FormControl<boolean | null | undefined>,
	}
	export function CreateSourcePropertiesFormGroup() {
		return new FormGroup<SourcePropertiesFormProperties>({
			lastUpdatedDateTime: new FormControl<string | null | undefined>(undefined),
			ramBytes: new FormControl<number | null | undefined>(undefined),
			recommendedInstanceType: new FormControl<string | null | undefined>(undefined),
			supportsNitroInstances: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about a server's CPU. */
	export interface CPU {
		cores?: number | null;
		modelName?: string;
	}

	/** Information about a server's CPU. */
	export interface CPUFormProperties {
		cores: FormControl<number | null | undefined>,
		modelName: FormControl<string | null | undefined>,
	}
	export function CreateCPUFormGroup() {
		return new FormGroup<CPUFormProperties>({
			cores: new FormControl<number | null | undefined>(undefined),
			modelName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing a data storage device on a server. */
	export interface Disk {
		bytes?: number | null;
		deviceName?: string;
	}

	/** An object representing a data storage device on a server. */
	export interface DiskFormProperties {
		bytes: FormControl<number | null | undefined>,
		deviceName: FormControl<string | null | undefined>,
	}
	export function CreateDiskFormGroup() {
		return new FormGroup<DiskFormProperties>({
			bytes: new FormControl<number | null | undefined>(undefined),
			deviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Hints used to uniquely identify a machine. */
	export interface IdentificationHints {
		awsInstanceID?: string;
		fqdn?: string;
		hostname?: string;
		vmWareUuid?: string;
	}

	/** Hints used to uniquely identify a machine. */
	export interface IdentificationHintsFormProperties {
		awsInstanceID: FormControl<string | null | undefined>,
		fqdn: FormControl<string | null | undefined>,
		hostname: FormControl<string | null | undefined>,
		vmWareUuid: FormControl<string | null | undefined>,
	}
	export function CreateIdentificationHintsFormGroup() {
		return new FormGroup<IdentificationHintsFormProperties>({
			awsInstanceID: new FormControl<string | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			vmWareUuid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Network interface. */
	export interface NetworkInterface {
		ips?: Array<string>;
		isPrimary?: boolean | null;
		macAddress?: string;
	}

	/** Network interface. */
	export interface NetworkInterfaceFormProperties {
		isPrimary: FormControl<boolean | null | undefined>,
		macAddress: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			isPrimary: new FormControl<boolean | null | undefined>(undefined),
			macAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operating System. */
	export interface OS {
		fullString?: string;
	}

	/** Operating System. */
	export interface OSFormProperties {
		fullString: FormControl<string | null | undefined>,
	}
	export function CreateOSFormGroup() {
		return new FormGroup<OSFormProperties>({
			fullString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Staging information related to source server. */
	export interface StagingArea {
		errorMessage?: string;
		stagingAccountID?: string;
		stagingSourceServerArn?: string;
		status?: ExtensionStatus;
	}

	/** Staging information related to source server. */
	export interface StagingAreaFormProperties {
		errorMessage: FormControl<string | null | undefined>,
		stagingAccountID: FormControl<string | null | undefined>,
		stagingSourceServerArn: FormControl<string | null | undefined>,
		status: FormControl<ExtensionStatus | null | undefined>,
	}
	export function CreateStagingAreaFormGroup() {
		return new FormGroup<StagingAreaFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			stagingAccountID: new FormControl<string | null | undefined>(undefined),
			stagingSourceServerArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ExtensionStatus | null | undefined>(undefined),
		});

	}

	export enum ExtensionStatus { EXTENDED = 0, EXTENSION_ERROR = 1, NOT_EXTENDED = 2 }

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface CreateLaunchConfigurationTemplateResponse {
		launchConfigurationTemplate?: LaunchConfigurationTemplate;
	}
	export interface CreateLaunchConfigurationTemplateResponseFormProperties {
	}
	export function CreateCreateLaunchConfigurationTemplateResponseFormGroup() {
		return new FormGroup<CreateLaunchConfigurationTemplateResponseFormProperties>({
		});

	}


	/** Account level Launch Configuration Template. */
	export interface LaunchConfigurationTemplate {
		arn?: string;
		copyPrivateIp?: boolean | null;
		copyTags?: boolean | null;
		exportBucketArn?: string;
		launchConfigurationTemplateID?: string;
		launchDisposition?: LaunchDisposition;
		licensing?: Licensing;
		tags?: TagsMap;
		targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
	}

	/** Account level Launch Configuration Template. */
	export interface LaunchConfigurationTemplateFormProperties {
		arn: FormControl<string | null | undefined>,
		copyPrivateIp: FormControl<boolean | null | undefined>,
		copyTags: FormControl<boolean | null | undefined>,
		exportBucketArn: FormControl<string | null | undefined>,
		launchConfigurationTemplateID: FormControl<string | null | undefined>,
		launchDisposition: FormControl<LaunchDisposition | null | undefined>,
		targetInstanceTypeRightSizingMethod: FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>,
	}
	export function CreateLaunchConfigurationTemplateFormGroup() {
		return new FormGroup<LaunchConfigurationTemplateFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			copyPrivateIp: new FormControl<boolean | null | undefined>(undefined),
			copyTags: new FormControl<boolean | null | undefined>(undefined),
			exportBucketArn: new FormControl<string | null | undefined>(undefined),
			launchConfigurationTemplateID: new FormControl<string | null | undefined>(undefined),
			launchDisposition: new FormControl<LaunchDisposition | null | undefined>(undefined),
			targetInstanceTypeRightSizingMethod: new FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>(undefined),
		});

	}

	export enum LaunchDisposition { STOPPED = 0, STARTED = 1 }


	/** Configuration of a machine's license. */
	export interface Licensing {
		osByol?: boolean | null;
	}

	/** Configuration of a machine's license. */
	export interface LicensingFormProperties {
		osByol: FormControl<boolean | null | undefined>,
	}
	export function CreateLicensingFormGroup() {
		return new FormGroup<LicensingFormProperties>({
			osByol: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum TargetInstanceTypeRightSizingMethod { NONE = 0, BASIC = 1, IN_AWS = 2 }

	export interface ReplicationConfigurationTemplate {
		arn?: string;
		associateDefaultSecurityGroup?: boolean | null;
		autoReplicateNewDisks?: boolean | null;
		bandwidthThrottling?: number | null;
		createPublicIP?: boolean | null;
		dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
		defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
		ebsEncryption?: ReplicationConfigurationEbsEncryption;
		ebsEncryptionKeyArn?: string;
		pitPolicy?: Array<PITPolicyRule>;

		/** Required */
		replicationConfigurationTemplateID: string;
		replicationServerInstanceType?: string;
		replicationServersSecurityGroupsIDs?: Array<string>;
		stagingAreaSubnetId?: string;
		stagingAreaTags?: TagsMap;
		tags?: TagsMap;
		useDedicatedReplicationServer?: boolean | null;
	}
	export interface ReplicationConfigurationTemplateFormProperties {
		arn: FormControl<string | null | undefined>,
		associateDefaultSecurityGroup: FormControl<boolean | null | undefined>,
		autoReplicateNewDisks: FormControl<boolean | null | undefined>,
		bandwidthThrottling: FormControl<number | null | undefined>,
		createPublicIP: FormControl<boolean | null | undefined>,
		dataPlaneRouting: FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>,
		defaultLargeStagingDiskType: FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>,
		ebsEncryption: FormControl<ReplicationConfigurationEbsEncryption | null | undefined>,
		ebsEncryptionKeyArn: FormControl<string | null | undefined>,

		/** Required */
		replicationConfigurationTemplateID: FormControl<string | null | undefined>,
		replicationServerInstanceType: FormControl<string | null | undefined>,
		stagingAreaSubnetId: FormControl<string | null | undefined>,
		useDedicatedReplicationServer: FormControl<boolean | null | undefined>,
	}
	export function CreateReplicationConfigurationTemplateFormGroup() {
		return new FormGroup<ReplicationConfigurationTemplateFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			associateDefaultSecurityGroup: new FormControl<boolean | null | undefined>(undefined),
			autoReplicateNewDisks: new FormControl<boolean | null | undefined>(undefined),
			bandwidthThrottling: new FormControl<number | null | undefined>(undefined),
			createPublicIP: new FormControl<boolean | null | undefined>(undefined),
			dataPlaneRouting: new FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>(undefined),
			defaultLargeStagingDiskType: new FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>(undefined),
			ebsEncryption: new FormControl<ReplicationConfigurationEbsEncryption | null | undefined>(undefined),
			ebsEncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			replicationConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replicationServerInstanceType: new FormControl<string | null | undefined>(undefined),
			stagingAreaSubnetId: new FormControl<string | null | undefined>(undefined),
			useDedicatedReplicationServer: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ReplicationConfigurationDataPlaneRouting { PRIVATE_IP = 0, PUBLIC_IP = 1 }

	export enum ReplicationConfigurationDefaultLargeStagingDiskType { GP2 = 0, GP3 = 1, ST1 = 2, AUTO = 3 }

	export enum ReplicationConfigurationEbsEncryption { DEFAULT = 0, CUSTOM = 1, NONE = 2 }


	/** A rule in the Point in Time (PIT) policy representing when to take snapshots and how long to retain them for. */
	export interface PITPolicyRule {
		enabled?: boolean | null;

		/** Required */
		interval: number;

		/** Required */
		retentionDuration: number;
		ruleID?: number | null;

		/** Required */
		units: PITPolicyRuleUnits;
	}

	/** A rule in the Point in Time (PIT) policy representing when to take snapshots and how long to retain them for. */
	export interface PITPolicyRuleFormProperties {
		enabled: FormControl<boolean | null | undefined>,

		/** Required */
		interval: FormControl<number | null | undefined>,

		/** Required */
		retentionDuration: FormControl<number | null | undefined>,
		ruleID: FormControl<number | null | undefined>,

		/** Required */
		units: FormControl<PITPolicyRuleUnits | null | undefined>,
	}
	export function CreatePITPolicyRuleFormGroup() {
		return new FormGroup<PITPolicyRuleFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			retentionDuration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ruleID: new FormControl<number | null | undefined>(undefined),
			units: new FormControl<PITPolicyRuleUnits | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PITPolicyRuleUnits { MINUTE = 0, HOUR = 1, DAY = 2 }

	export interface CreateSourceNetworkResponse {
		sourceNetworkID?: string;
	}
	export interface CreateSourceNetworkResponseFormProperties {
		sourceNetworkID: FormControl<string | null | undefined>,
	}
	export function CreateCreateSourceNetworkResponseFormGroup() {
		return new FormGroup<CreateSourceNetworkResponseFormProperties>({
			sourceNetworkID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteJobResponse {
	}
	export interface DeleteJobResponseFormProperties {
	}
	export function CreateDeleteJobResponseFormGroup() {
		return new FormGroup<DeleteJobResponseFormProperties>({
		});

	}

	export interface DeleteLaunchConfigurationTemplateResponse {
	}
	export interface DeleteLaunchConfigurationTemplateResponseFormProperties {
	}
	export function CreateDeleteLaunchConfigurationTemplateResponseFormGroup() {
		return new FormGroup<DeleteLaunchConfigurationTemplateResponseFormProperties>({
		});

	}

	export interface DeleteReplicationConfigurationTemplateResponse {
	}
	export interface DeleteReplicationConfigurationTemplateResponseFormProperties {
	}
	export function CreateDeleteReplicationConfigurationTemplateResponseFormGroup() {
		return new FormGroup<DeleteReplicationConfigurationTemplateResponseFormProperties>({
		});

	}

	export interface DeleteSourceNetworkResponse {
	}
	export interface DeleteSourceNetworkResponseFormProperties {
	}
	export function CreateDeleteSourceNetworkResponseFormGroup() {
		return new FormGroup<DeleteSourceNetworkResponseFormProperties>({
		});

	}

	export interface DeleteSourceServerResponse {
	}
	export interface DeleteSourceServerResponseFormProperties {
	}
	export function CreateDeleteSourceServerResponseFormGroup() {
		return new FormGroup<DeleteSourceServerResponseFormProperties>({
		});

	}

	export interface DescribeJobLogItemsResponse {
		items?: Array<JobLog>;
		nextToken?: string;
	}
	export interface DescribeJobLogItemsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobLogItemsResponseFormGroup() {
		return new FormGroup<DescribeJobLogItemsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A log outputted by a Job. */
	export interface JobLog {
		event?: JobLogEvent;
		eventData?: JobLogEventData;
		logDateTime?: string;
	}

	/** A log outputted by a Job. */
	export interface JobLogFormProperties {
		event: FormControl<JobLogEvent | null | undefined>,
		logDateTime: FormControl<string | null | undefined>,
	}
	export function CreateJobLogFormGroup() {
		return new FormGroup<JobLogFormProperties>({
			event: new FormControl<JobLogEvent | null | undefined>(undefined),
			logDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobLogEvent { JOB_START = 0, SERVER_SKIPPED = 1, CLEANUP_START = 2, CLEANUP_END = 3, CLEANUP_FAIL = 4, SNAPSHOT_START = 5, SNAPSHOT_END = 6, SNAPSHOT_FAIL = 7, USING_PREVIOUS_SNAPSHOT = 8, USING_PREVIOUS_SNAPSHOT_FAILED = 9, CONVERSION_START = 10, CONVERSION_END = 11, CONVERSION_FAIL = 12, LAUNCH_START = 13, LAUNCH_FAILED = 14, JOB_CANCEL = 15, JOB_END = 16, DEPLOY_NETWORK_CONFIGURATION_START = 17, DEPLOY_NETWORK_CONFIGURATION_END = 18, DEPLOY_NETWORK_CONFIGURATION_FAILED = 19, UPDATE_NETWORK_CONFIGURATION_START = 20, UPDATE_NETWORK_CONFIGURATION_END = 21, UPDATE_NETWORK_CONFIGURATION_FAILED = 22, UPDATE_LAUNCH_TEMPLATE_START = 23, UPDATE_LAUNCH_TEMPLATE_END = 24, UPDATE_LAUNCH_TEMPLATE_FAILED = 25, NETWORK_RECOVERY_FAIL = 26 }


	/** Metadata associated with a Job log. */
	export interface JobLogEventData {
		conversionProperties?: ConversionProperties;
		conversionServerID?: string;
		eventResourceData?: EventResourceData;
		rawError?: string;
		sourceServerID?: string;
		targetInstanceID?: string;
	}

	/** Metadata associated with a Job log. */
	export interface JobLogEventDataFormProperties {
		conversionServerID: FormControl<string | null | undefined>,
		rawError: FormControl<string | null | undefined>,
		sourceServerID: FormControl<string | null | undefined>,
		targetInstanceID: FormControl<string | null | undefined>,
	}
	export function CreateJobLogEventDataFormGroup() {
		return new FormGroup<JobLogEventDataFormProperties>({
			conversionServerID: new FormControl<string | null | undefined>(undefined),
			rawError: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined),
			targetInstanceID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a conversion job */
	export interface ConversionProperties {
		dataTimestamp?: string;
		forceUefi?: boolean | null;
		rootVolumeName?: string;
		volumeToConversionMap?: VolumeToConversionMap;
		volumeToVolumeSize?: VolumeToSizeMap;
	}

	/** Properties of a conversion job */
	export interface ConversionPropertiesFormProperties {
		dataTimestamp: FormControl<string | null | undefined>,
		forceUefi: FormControl<boolean | null | undefined>,
		rootVolumeName: FormControl<string | null | undefined>,
	}
	export function CreateConversionPropertiesFormGroup() {
		return new FormGroup<ConversionPropertiesFormProperties>({
			dataTimestamp: new FormControl<string | null | undefined>(undefined),
			forceUefi: new FormControl<boolean | null | undefined>(undefined),
			rootVolumeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeToConversionMap {
	}
	export interface VolumeToConversionMapFormProperties {
	}
	export function CreateVolumeToConversionMapFormGroup() {
		return new FormGroup<VolumeToConversionMapFormProperties>({
		});

	}

	export interface VolumeToSizeMap {
	}
	export interface VolumeToSizeMapFormProperties {
	}
	export function CreateVolumeToSizeMapFormGroup() {
		return new FormGroup<VolumeToSizeMapFormProperties>({
		});

	}


	/** Properties of resource related to a job event. */
	export interface EventResourceData {
		sourceNetworkData?: SourceNetworkData;
	}

	/** Properties of resource related to a job event. */
	export interface EventResourceDataFormProperties {
	}
	export function CreateEventResourceDataFormGroup() {
		return new FormGroup<EventResourceDataFormProperties>({
		});

	}


	/** Properties of Source Network related to a job event. */
	export interface SourceNetworkData {
		sourceNetworkID?: string;
		sourceVpc?: string;
		stackName?: string;
		targetVpc?: string;
	}

	/** Properties of Source Network related to a job event. */
	export interface SourceNetworkDataFormProperties {
		sourceNetworkID: FormControl<string | null | undefined>,
		sourceVpc: FormControl<string | null | undefined>,
		stackName: FormControl<string | null | undefined>,
		targetVpc: FormControl<string | null | undefined>,
	}
	export function CreateSourceNetworkDataFormGroup() {
		return new FormGroup<SourceNetworkDataFormProperties>({
			sourceNetworkID: new FormControl<string | null | undefined>(undefined),
			sourceVpc: new FormControl<string | null | undefined>(undefined),
			stackName: new FormControl<string | null | undefined>(undefined),
			targetVpc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeJobsResponse {
		items?: Array<Job>;
		nextToken?: string;
	}
	export interface DescribeJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobsResponseFormGroup() {
		return new FormGroup<DescribeJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLaunchConfigurationTemplatesResponse {
		items?: Array<LaunchConfigurationTemplate>;
		nextToken?: string;
	}
	export interface DescribeLaunchConfigurationTemplatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLaunchConfigurationTemplatesResponseFormGroup() {
		return new FormGroup<DescribeLaunchConfigurationTemplatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRecoveryInstancesResponse {
		items?: Array<RecoveryInstance>;
		nextToken?: string;
	}
	export interface DescribeRecoveryInstancesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecoveryInstancesResponseFormGroup() {
		return new FormGroup<DescribeRecoveryInstancesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Recovery Instance is a replica of a Source Server running on EC2. */
	export interface RecoveryInstance {
		arn?: string;
		dataReplicationInfo?: RecoveryInstanceDataReplicationInfo;
		ec2InstanceID?: string;
		ec2InstanceState?: EC2InstanceState;
		failback?: RecoveryInstanceFailback;
		isDrill?: boolean | null;
		jobID?: string;
		originAvailabilityZone?: string;
		originEnvironment?: OriginEnvironment;
		pointInTimeSnapshotDateTime?: string;
		recoveryInstanceID?: string;
		recoveryInstanceProperties?: RecoveryInstanceProperties;
		sourceServerID?: string;
		tags?: TagsMap;
	}

	/** A Recovery Instance is a replica of a Source Server running on EC2. */
	export interface RecoveryInstanceFormProperties {
		arn: FormControl<string | null | undefined>,
		ec2InstanceID: FormControl<string | null | undefined>,
		ec2InstanceState: FormControl<EC2InstanceState | null | undefined>,
		isDrill: FormControl<boolean | null | undefined>,
		jobID: FormControl<string | null | undefined>,
		originAvailabilityZone: FormControl<string | null | undefined>,
		originEnvironment: FormControl<OriginEnvironment | null | undefined>,
		pointInTimeSnapshotDateTime: FormControl<string | null | undefined>,
		recoveryInstanceID: FormControl<string | null | undefined>,
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateRecoveryInstanceFormGroup() {
		return new FormGroup<RecoveryInstanceFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			ec2InstanceID: new FormControl<string | null | undefined>(undefined),
			ec2InstanceState: new FormControl<EC2InstanceState | null | undefined>(undefined),
			isDrill: new FormControl<boolean | null | undefined>(undefined),
			jobID: new FormControl<string | null | undefined>(undefined),
			originAvailabilityZone: new FormControl<string | null | undefined>(undefined),
			originEnvironment: new FormControl<OriginEnvironment | null | undefined>(undefined),
			pointInTimeSnapshotDateTime: new FormControl<string | null | undefined>(undefined),
			recoveryInstanceID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about Data Replication */
	export interface RecoveryInstanceDataReplicationInfo {
		dataReplicationError?: RecoveryInstanceDataReplicationError;
		dataReplicationInitiation?: RecoveryInstanceDataReplicationInitiation;
		dataReplicationState?: RecoveryInstanceDataReplicationState;
		etaDateTime?: string;
		lagDuration?: string;
		replicatedDisks?: Array<RecoveryInstanceDataReplicationInfoReplicatedDisk>;
		stagingAvailabilityZone?: string;
	}

	/** Information about Data Replication */
	export interface RecoveryInstanceDataReplicationInfoFormProperties {
		dataReplicationState: FormControl<RecoveryInstanceDataReplicationState | null | undefined>,
		etaDateTime: FormControl<string | null | undefined>,
		lagDuration: FormControl<string | null | undefined>,
		stagingAvailabilityZone: FormControl<string | null | undefined>,
	}
	export function CreateRecoveryInstanceDataReplicationInfoFormGroup() {
		return new FormGroup<RecoveryInstanceDataReplicationInfoFormProperties>({
			dataReplicationState: new FormControl<RecoveryInstanceDataReplicationState | null | undefined>(undefined),
			etaDateTime: new FormControl<string | null | undefined>(undefined),
			lagDuration: new FormControl<string | null | undefined>(undefined),
			stagingAvailabilityZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error in data replication. */
	export interface RecoveryInstanceDataReplicationError {
		error?: FailbackReplicationError;
		rawError?: string;
	}

	/** Error in data replication. */
	export interface RecoveryInstanceDataReplicationErrorFormProperties {
		error: FormControl<FailbackReplicationError | null | undefined>,
		rawError: FormControl<string | null | undefined>,
	}
	export function CreateRecoveryInstanceDataReplicationErrorFormGroup() {
		return new FormGroup<RecoveryInstanceDataReplicationErrorFormProperties>({
			error: new FormControl<FailbackReplicationError | null | undefined>(undefined),
			rawError: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FailbackReplicationError { AGENT_NOT_SEEN = 0, FAILBACK_CLIENT_NOT_SEEN = 1, NOT_CONVERGING = 2, UNSTABLE_NETWORK = 3, FAILED_TO_ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION = 4, FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT = 5, FAILED_TO_CONFIGURE_REPLICATION_SOFTWARE = 6, FAILED_TO_PAIR_AGENT_WITH_REPLICATION_SOFTWARE = 7, FAILED_TO_ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION = 8, FAILED_GETTING_REPLICATION_STATE = 9, SNAPSHOTS_FAILURE = 10, FAILED_TO_CREATE_SECURITY_GROUP = 11, FAILED_TO_LAUNCH_REPLICATION_SERVER = 12, FAILED_TO_BOOT_REPLICATION_SERVER = 13, FAILED_TO_AUTHENTICATE_WITH_SERVICE = 14, FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE = 15, FAILED_TO_CREATE_STAGING_DISKS = 16, FAILED_TO_ATTACH_STAGING_DISKS = 17, FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT = 18, FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER = 19, FAILED_TO_START_DATA_TRANSFER = 20 }


	/** Data replication initiation. */
	export interface RecoveryInstanceDataReplicationInitiation {
		startDateTime?: string;
		steps?: Array<RecoveryInstanceDataReplicationInitiationStep>;
	}

	/** Data replication initiation. */
	export interface RecoveryInstanceDataReplicationInitiationFormProperties {
		startDateTime: FormControl<string | null | undefined>,
	}
	export function CreateRecoveryInstanceDataReplicationInitiationFormGroup() {
		return new FormGroup<RecoveryInstanceDataReplicationInitiationFormProperties>({
			startDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data replication initiation step. */
	export interface RecoveryInstanceDataReplicationInitiationStep {
		name?: RecoveryInstanceDataReplicationInitiationStepName;
		status?: DataReplicationInitiationStepStatus;
	}

	/** Data replication initiation step. */
	export interface RecoveryInstanceDataReplicationInitiationStepFormProperties {
		name: FormControl<RecoveryInstanceDataReplicationInitiationStepName | null | undefined>,
		status: FormControl<DataReplicationInitiationStepStatus | null | undefined>,
	}
	export function CreateRecoveryInstanceDataReplicationInitiationStepFormGroup() {
		return new FormGroup<RecoveryInstanceDataReplicationInitiationStepFormProperties>({
			name: new FormControl<RecoveryInstanceDataReplicationInitiationStepName | null | undefined>(undefined),
			status: new FormControl<DataReplicationInitiationStepStatus | null | undefined>(undefined),
		});

	}

	export enum RecoveryInstanceDataReplicationInitiationStepName { LINK_FAILBACK_CLIENT_WITH_RECOVERY_INSTANCE = 0, COMPLETE_VOLUME_MAPPING = 1, ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION = 2, DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT = 3, CONFIGURE_REPLICATION_SOFTWARE = 4, PAIR_AGENT_WITH_REPLICATION_SOFTWARE = 5, ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION = 6, WAIT = 7, CREATE_SECURITY_GROUP = 8, LAUNCH_REPLICATION_SERVER = 9, BOOT_REPLICATION_SERVER = 10, AUTHENTICATE_WITH_SERVICE = 11, DOWNLOAD_REPLICATION_SOFTWARE = 12, CREATE_STAGING_DISKS = 13, ATTACH_STAGING_DISKS = 14, PAIR_REPLICATION_SERVER_WITH_AGENT = 15, CONNECT_AGENT_TO_REPLICATION_SERVER = 16, START_DATA_TRANSFER = 17 }

	export enum RecoveryInstanceDataReplicationState { STOPPED = 0, INITIATING = 1, INITIAL_SYNC = 2, BACKLOG = 3, CREATING_SNAPSHOT = 4, CONTINUOUS = 5, PAUSED = 6, RESCAN = 7, STALLED = 8, DISCONNECTED = 9, REPLICATION_STATE_NOT_AVAILABLE = 10, NOT_STARTED = 11 }


	/** A disk that should be replicated. */
	export interface RecoveryInstanceDataReplicationInfoReplicatedDisk {
		backloggedStorageBytes?: number | null;
		deviceName?: string;
		replicatedStorageBytes?: number | null;
		rescannedStorageBytes?: number | null;
		totalStorageBytes?: number | null;
	}

	/** A disk that should be replicated. */
	export interface RecoveryInstanceDataReplicationInfoReplicatedDiskFormProperties {
		backloggedStorageBytes: FormControl<number | null | undefined>,
		deviceName: FormControl<string | null | undefined>,
		replicatedStorageBytes: FormControl<number | null | undefined>,
		rescannedStorageBytes: FormControl<number | null | undefined>,
		totalStorageBytes: FormControl<number | null | undefined>,
	}
	export function CreateRecoveryInstanceDataReplicationInfoReplicatedDiskFormGroup() {
		return new FormGroup<RecoveryInstanceDataReplicationInfoReplicatedDiskFormProperties>({
			backloggedStorageBytes: new FormControl<number | null | undefined>(undefined),
			deviceName: new FormControl<string | null | undefined>(undefined),
			replicatedStorageBytes: new FormControl<number | null | undefined>(undefined),
			rescannedStorageBytes: new FormControl<number | null | undefined>(undefined),
			totalStorageBytes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EC2InstanceState { PENDING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3, 'SHUTTING-DOWN' = 4, TERMINATED = 5, NOT_FOUND = 6 }


	/** An object representing failback related information of the Recovery Instance. */
	export interface RecoveryInstanceFailback {
		agentLastSeenByServiceDateTime?: string;
		elapsedReplicationDuration?: string;
		failbackClientID?: string;
		failbackClientLastSeenByServiceDateTime?: string;
		failbackInitiationTime?: string;
		failbackJobID?: string;
		failbackLaunchType?: LastLaunchType;
		failbackToOriginalServer?: boolean | null;
		firstByteDateTime?: string;
		state?: FailbackState;
	}

	/** An object representing failback related information of the Recovery Instance. */
	export interface RecoveryInstanceFailbackFormProperties {
		agentLastSeenByServiceDateTime: FormControl<string | null | undefined>,
		elapsedReplicationDuration: FormControl<string | null | undefined>,
		failbackClientID: FormControl<string | null | undefined>,
		failbackClientLastSeenByServiceDateTime: FormControl<string | null | undefined>,
		failbackInitiationTime: FormControl<string | null | undefined>,
		failbackJobID: FormControl<string | null | undefined>,
		failbackLaunchType: FormControl<LastLaunchType | null | undefined>,
		failbackToOriginalServer: FormControl<boolean | null | undefined>,
		firstByteDateTime: FormControl<string | null | undefined>,
		state: FormControl<FailbackState | null | undefined>,
	}
	export function CreateRecoveryInstanceFailbackFormGroup() {
		return new FormGroup<RecoveryInstanceFailbackFormProperties>({
			agentLastSeenByServiceDateTime: new FormControl<string | null | undefined>(undefined),
			elapsedReplicationDuration: new FormControl<string | null | undefined>(undefined),
			failbackClientID: new FormControl<string | null | undefined>(undefined),
			failbackClientLastSeenByServiceDateTime: new FormControl<string | null | undefined>(undefined),
			failbackInitiationTime: new FormControl<string | null | undefined>(undefined),
			failbackJobID: new FormControl<string | null | undefined>(undefined),
			failbackLaunchType: new FormControl<LastLaunchType | null | undefined>(undefined),
			failbackToOriginalServer: new FormControl<boolean | null | undefined>(undefined),
			firstByteDateTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<FailbackState | null | undefined>(undefined),
		});

	}

	export enum FailbackState { FAILBACK_NOT_STARTED = 0, FAILBACK_IN_PROGRESS = 1, FAILBACK_READY_FOR_LAUNCH = 2, FAILBACK_COMPLETED = 3, FAILBACK_ERROR = 4, FAILBACK_NOT_READY_FOR_LAUNCH = 5, FAILBACK_LAUNCH_STATE_NOT_AVAILABLE = 6 }

	export enum OriginEnvironment { ON_PREMISES = 0, AWS = 1 }


	/** Properties of the Recovery Instance machine. */
	export interface RecoveryInstanceProperties {
		cpus?: Array<CPU>;
		disks?: Array<RecoveryInstanceDisk>;
		identificationHints?: IdentificationHints;
		lastUpdatedDateTime?: string;
		networkInterfaces?: Array<NetworkInterface>;
		os?: OS;
		ramBytes?: number | null;
	}

	/** Properties of the Recovery Instance machine. */
	export interface RecoveryInstancePropertiesFormProperties {
		lastUpdatedDateTime: FormControl<string | null | undefined>,
		ramBytes: FormControl<number | null | undefined>,
	}
	export function CreateRecoveryInstancePropertiesFormGroup() {
		return new FormGroup<RecoveryInstancePropertiesFormProperties>({
			lastUpdatedDateTime: new FormControl<string | null | undefined>(undefined),
			ramBytes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object representing a block storage device on the Recovery Instance. */
	export interface RecoveryInstanceDisk {
		bytes?: number | null;
		ebsVolumeID?: string;
		internalDeviceName?: string;
	}

	/** An object representing a block storage device on the Recovery Instance. */
	export interface RecoveryInstanceDiskFormProperties {
		bytes: FormControl<number | null | undefined>,
		ebsVolumeID: FormControl<string | null | undefined>,
		internalDeviceName: FormControl<string | null | undefined>,
	}
	export function CreateRecoveryInstanceDiskFormGroup() {
		return new FormGroup<RecoveryInstanceDiskFormProperties>({
			bytes: new FormControl<number | null | undefined>(undefined),
			ebsVolumeID: new FormControl<string | null | undefined>(undefined),
			internalDeviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRecoverySnapshotsResponse {
		items?: Array<RecoverySnapshot>;
		nextToken?: string;
	}
	export interface DescribeRecoverySnapshotsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecoverySnapshotsResponseFormGroup() {
		return new FormGroup<DescribeRecoverySnapshotsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A snapshot of a Source Server used during recovery. */
	export interface RecoverySnapshot {
		ebsSnapshots?: Array<string>;

		/** Required */
		expectedTimestamp: string;

		/** Required */
		snapshotID: string;

		/** Required */
		sourceServerID: string;
		timestamp?: string;
	}

	/** A snapshot of a Source Server used during recovery. */
	export interface RecoverySnapshotFormProperties {

		/** Required */
		expectedTimestamp: FormControl<string | null | undefined>,

		/** Required */
		snapshotID: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateRecoverySnapshotFormGroup() {
		return new FormGroup<RecoverySnapshotFormProperties>({
			expectedTimestamp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			snapshotID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeReplicationConfigurationTemplatesResponse {
		items?: Array<ReplicationConfigurationTemplate>;
		nextToken?: string;
	}
	export interface DescribeReplicationConfigurationTemplatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationConfigurationTemplatesResponseFormGroup() {
		return new FormGroup<DescribeReplicationConfigurationTemplatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSourceNetworksResponse {
		items?: Array<SourceNetwork>;
		nextToken?: string;
	}
	export interface DescribeSourceNetworksResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSourceNetworksResponseFormGroup() {
		return new FormGroup<DescribeSourceNetworksResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ARN of the Source Network. */
	export interface SourceNetwork {
		arn?: string;
		cfnStackName?: string;
		lastRecovery?: RecoveryLifeCycle;
		launchedVpcID?: string;
		replicationStatus?: ReplicationStatus;
		replicationStatusDetails?: string;
		sourceAccountID?: string;
		sourceNetworkID?: string;
		sourceRegion?: string;
		sourceVpcID?: string;
		tags?: TagsMap;
	}

	/** The ARN of the Source Network. */
	export interface SourceNetworkFormProperties {
		arn: FormControl<string | null | undefined>,
		cfnStackName: FormControl<string | null | undefined>,
		launchedVpcID: FormControl<string | null | undefined>,
		replicationStatus: FormControl<ReplicationStatus | null | undefined>,
		replicationStatusDetails: FormControl<string | null | undefined>,
		sourceAccountID: FormControl<string | null | undefined>,
		sourceNetworkID: FormControl<string | null | undefined>,
		sourceRegion: FormControl<string | null | undefined>,
		sourceVpcID: FormControl<string | null | undefined>,
	}
	export function CreateSourceNetworkFormGroup() {
		return new FormGroup<SourceNetworkFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			cfnStackName: new FormControl<string | null | undefined>(undefined),
			launchedVpcID: new FormControl<string | null | undefined>(undefined),
			replicationStatus: new FormControl<ReplicationStatus | null | undefined>(undefined),
			replicationStatusDetails: new FormControl<string | null | undefined>(undefined),
			sourceAccountID: new FormControl<string | null | undefined>(undefined),
			sourceNetworkID: new FormControl<string | null | undefined>(undefined),
			sourceRegion: new FormControl<string | null | undefined>(undefined),
			sourceVpcID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing the Source Network recovery Lifecycle. */
	export interface RecoveryLifeCycle {
		apiCallDateTime?: Date;
		jobID?: string;
		lastRecoveryResult?: RecoveryResult;
	}

	/** An object representing the Source Network recovery Lifecycle. */
	export interface RecoveryLifeCycleFormProperties {
		apiCallDateTime: FormControl<Date | null | undefined>,
		jobID: FormControl<string | null | undefined>,
		lastRecoveryResult: FormControl<RecoveryResult | null | undefined>,
	}
	export function CreateRecoveryLifeCycleFormGroup() {
		return new FormGroup<RecoveryLifeCycleFormProperties>({
			apiCallDateTime: new FormControl<Date | null | undefined>(undefined),
			jobID: new FormControl<string | null | undefined>(undefined),
			lastRecoveryResult: new FormControl<RecoveryResult | null | undefined>(undefined),
		});

	}

	export enum RecoveryResult { NOT_STARTED = 0, IN_PROGRESS = 1, SUCCESS = 2, FAIL = 3, PARTIAL_SUCCESS = 4, ASSOCIATE_SUCCESS = 5, ASSOCIATE_FAIL = 6 }

	export enum ReplicationStatus { STOPPED = 0, IN_PROGRESS = 1, PROTECTED = 2, ERROR = 3 }

	export interface DescribeSourceServersResponse {
		items?: Array<SourceServer>;
		nextToken?: string;
	}
	export interface DescribeSourceServersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSourceServersResponseFormGroup() {
		return new FormGroup<DescribeSourceServersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportSourceNetworkCfnTemplateResponse {
		s3DestinationUrl?: string;
	}
	export interface ExportSourceNetworkCfnTemplateResponseFormProperties {
		s3DestinationUrl: FormControl<string | null | undefined>,
	}
	export function CreateExportSourceNetworkCfnTemplateResponseFormGroup() {
		return new FormGroup<ExportSourceNetworkCfnTemplateResponseFormProperties>({
			s3DestinationUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFailbackReplicationConfigurationResponse {
		bandwidthThrottling?: number | null;
		name?: string;

		/** Required */
		recoveryInstanceID: string;
		usePrivateIP?: boolean | null;
	}
	export interface GetFailbackReplicationConfigurationResponseFormProperties {
		bandwidthThrottling: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		recoveryInstanceID: FormControl<string | null | undefined>,
		usePrivateIP: FormControl<boolean | null | undefined>,
	}
	export function CreateGetFailbackReplicationConfigurationResponseFormGroup() {
		return new FormGroup<GetFailbackReplicationConfigurationResponseFormProperties>({
			bandwidthThrottling: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			recoveryInstanceID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			usePrivateIP: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface LaunchConfiguration {
		copyPrivateIp?: boolean | null;
		copyTags?: boolean | null;
		ec2LaunchTemplateID?: string;
		launchDisposition?: LaunchDisposition;
		licensing?: Licensing;
		name?: string;
		sourceServerID?: string;
		targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
	}
	export interface LaunchConfigurationFormProperties {
		copyPrivateIp: FormControl<boolean | null | undefined>,
		copyTags: FormControl<boolean | null | undefined>,
		ec2LaunchTemplateID: FormControl<string | null | undefined>,
		launchDisposition: FormControl<LaunchDisposition | null | undefined>,
		name: FormControl<string | null | undefined>,
		sourceServerID: FormControl<string | null | undefined>,
		targetInstanceTypeRightSizingMethod: FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>,
	}
	export function CreateLaunchConfigurationFormGroup() {
		return new FormGroup<LaunchConfigurationFormProperties>({
			copyPrivateIp: new FormControl<boolean | null | undefined>(undefined),
			copyTags: new FormControl<boolean | null | undefined>(undefined),
			ec2LaunchTemplateID: new FormControl<string | null | undefined>(undefined),
			launchDisposition: new FormControl<LaunchDisposition | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined),
			targetInstanceTypeRightSizingMethod: new FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>(undefined),
		});

	}

	export interface ReplicationConfiguration {
		associateDefaultSecurityGroup?: boolean | null;
		autoReplicateNewDisks?: boolean | null;
		bandwidthThrottling?: number | null;
		createPublicIP?: boolean | null;
		dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
		defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
		ebsEncryption?: ReplicationConfigurationEbsEncryption;
		ebsEncryptionKeyArn?: string;
		name?: string;
		pitPolicy?: Array<PITPolicyRule>;
		replicatedDisks?: Array<ReplicationConfigurationReplicatedDisk>;
		replicationServerInstanceType?: string;
		replicationServersSecurityGroupsIDs?: Array<string>;
		sourceServerID?: string;
		stagingAreaSubnetId?: string;
		stagingAreaTags?: TagsMap;
		useDedicatedReplicationServer?: boolean | null;
	}
	export interface ReplicationConfigurationFormProperties {
		associateDefaultSecurityGroup: FormControl<boolean | null | undefined>,
		autoReplicateNewDisks: FormControl<boolean | null | undefined>,
		bandwidthThrottling: FormControl<number | null | undefined>,
		createPublicIP: FormControl<boolean | null | undefined>,
		dataPlaneRouting: FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>,
		defaultLargeStagingDiskType: FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>,
		ebsEncryption: FormControl<ReplicationConfigurationEbsEncryption | null | undefined>,
		ebsEncryptionKeyArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		replicationServerInstanceType: FormControl<string | null | undefined>,
		sourceServerID: FormControl<string | null | undefined>,
		stagingAreaSubnetId: FormControl<string | null | undefined>,
		useDedicatedReplicationServer: FormControl<boolean | null | undefined>,
	}
	export function CreateReplicationConfigurationFormGroup() {
		return new FormGroup<ReplicationConfigurationFormProperties>({
			associateDefaultSecurityGroup: new FormControl<boolean | null | undefined>(undefined),
			autoReplicateNewDisks: new FormControl<boolean | null | undefined>(undefined),
			bandwidthThrottling: new FormControl<number | null | undefined>(undefined),
			createPublicIP: new FormControl<boolean | null | undefined>(undefined),
			dataPlaneRouting: new FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>(undefined),
			defaultLargeStagingDiskType: new FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>(undefined),
			ebsEncryption: new FormControl<ReplicationConfigurationEbsEncryption | null | undefined>(undefined),
			ebsEncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			replicationServerInstanceType: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined),
			stagingAreaSubnetId: new FormControl<string | null | undefined>(undefined),
			useDedicatedReplicationServer: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The configuration of a disk of the Source Server to be replicated. */
	export interface ReplicationConfigurationReplicatedDisk {
		deviceName?: string;
		iops?: number | null;
		isBootDisk?: boolean | null;
		optimizedStagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType;
		stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType;
		throughput?: number | null;
	}

	/** The configuration of a disk of the Source Server to be replicated. */
	export interface ReplicationConfigurationReplicatedDiskFormProperties {
		deviceName: FormControl<string | null | undefined>,
		iops: FormControl<number | null | undefined>,
		isBootDisk: FormControl<boolean | null | undefined>,
		optimizedStagingDiskType: FormControl<ReplicationConfigurationReplicatedDiskStagingDiskType | null | undefined>,
		stagingDiskType: FormControl<ReplicationConfigurationReplicatedDiskStagingDiskType | null | undefined>,
		throughput: FormControl<number | null | undefined>,
	}
	export function CreateReplicationConfigurationReplicatedDiskFormGroup() {
		return new FormGroup<ReplicationConfigurationReplicatedDiskFormProperties>({
			deviceName: new FormControl<string | null | undefined>(undefined),
			iops: new FormControl<number | null | undefined>(undefined),
			isBootDisk: new FormControl<boolean | null | undefined>(undefined),
			optimizedStagingDiskType: new FormControl<ReplicationConfigurationReplicatedDiskStagingDiskType | null | undefined>(undefined),
			stagingDiskType: new FormControl<ReplicationConfigurationReplicatedDiskStagingDiskType | null | undefined>(undefined),
			throughput: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ReplicationConfigurationReplicatedDiskStagingDiskType { AUTO = 0, GP2 = 1, GP3 = 2, IO1 = 3, SC1 = 4, ST1 = 5, STANDARD = 6 }

	export interface InitializeServiceResponse {
	}
	export interface InitializeServiceResponseFormProperties {
	}
	export function CreateInitializeServiceResponseFormGroup() {
		return new FormGroup<InitializeServiceResponseFormProperties>({
		});

	}

	export interface ListExtensibleSourceServersResponse {
		items?: Array<StagingSourceServer>;
		nextToken?: string;
	}
	export interface ListExtensibleSourceServersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExtensibleSourceServersResponseFormGroup() {
		return new FormGroup<ListExtensibleSourceServersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Source server in staging account that extended source server connected to. */
	export interface StagingSourceServer {
		arn?: string;
		hostname?: string;
		tags?: TagsMap;
	}

	/** Source server in staging account that extended source server connected to. */
	export interface StagingSourceServerFormProperties {
		arn: FormControl<string | null | undefined>,
		hostname: FormControl<string | null | undefined>,
	}
	export function CreateStagingSourceServerFormGroup() {
		return new FormGroup<StagingSourceServerFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStagingAccountsResponse {
		accounts?: Array<Account>;
		nextToken?: string;
	}
	export interface ListStagingAccountsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStagingAccountsResponseFormGroup() {
		return new FormGroup<ListStagingAccountsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AWS account. */
	export interface Account {
		accountID?: string;
	}

	/** AWS account. */
	export interface AccountFormProperties {
		accountID: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagsMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ReverseReplicationResponse {
		reversedDirectionSourceServerArn?: string;
	}
	export interface ReverseReplicationResponseFormProperties {
		reversedDirectionSourceServerArn: FormControl<string | null | undefined>,
	}
	export function CreateReverseReplicationResponseFormGroup() {
		return new FormGroup<ReverseReplicationResponseFormProperties>({
			reversedDirectionSourceServerArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartFailbackLaunchResponse {
		job?: Job;
	}
	export interface StartFailbackLaunchResponseFormProperties {
	}
	export function CreateStartFailbackLaunchResponseFormGroup() {
		return new FormGroup<StartFailbackLaunchResponseFormProperties>({
		});

	}

	export interface StartRecoveryResponse {
		job?: Job;
	}
	export interface StartRecoveryResponseFormProperties {
	}
	export function CreateStartRecoveryResponseFormGroup() {
		return new FormGroup<StartRecoveryResponseFormProperties>({
		});

	}


	/** An object representing the Source Server to recover. */
	export interface StartRecoveryRequestSourceServer {
		recoverySnapshotID?: string;

		/** Required */
		sourceServerID: string;
	}

	/** An object representing the Source Server to recover. */
	export interface StartRecoveryRequestSourceServerFormProperties {
		recoverySnapshotID: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateStartRecoveryRequestSourceServerFormGroup() {
		return new FormGroup<StartRecoveryRequestSourceServerFormProperties>({
			recoverySnapshotID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartReplicationResponse {
		sourceServer?: SourceServer;
	}
	export interface StartReplicationResponseFormProperties {
	}
	export function CreateStartReplicationResponseFormGroup() {
		return new FormGroup<StartReplicationResponseFormProperties>({
		});

	}

	export interface StartSourceNetworkRecoveryResponse {
		job?: Job;
	}
	export interface StartSourceNetworkRecoveryResponseFormProperties {
	}
	export function CreateStartSourceNetworkRecoveryResponseFormGroup() {
		return new FormGroup<StartSourceNetworkRecoveryResponseFormProperties>({
		});

	}


	/** An object representing the Source Network to recover. */
	export interface StartSourceNetworkRecoveryRequestNetworkEntry {
		cfnStackName?: string;

		/** Required */
		sourceNetworkID: string;
	}

	/** An object representing the Source Network to recover. */
	export interface StartSourceNetworkRecoveryRequestNetworkEntryFormProperties {
		cfnStackName: FormControl<string | null | undefined>,

		/** Required */
		sourceNetworkID: FormControl<string | null | undefined>,
	}
	export function CreateStartSourceNetworkRecoveryRequestNetworkEntryFormGroup() {
		return new FormGroup<StartSourceNetworkRecoveryRequestNetworkEntryFormProperties>({
			cfnStackName: new FormControl<string | null | undefined>(undefined),
			sourceNetworkID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartSourceNetworkReplicationResponse {
		sourceNetwork?: SourceNetwork;
	}
	export interface StartSourceNetworkReplicationResponseFormProperties {
	}
	export function CreateStartSourceNetworkReplicationResponseFormGroup() {
		return new FormGroup<StartSourceNetworkReplicationResponseFormProperties>({
		});

	}

	export interface StopReplicationResponse {
		sourceServer?: SourceServer;
	}
	export interface StopReplicationResponseFormProperties {
	}
	export function CreateStopReplicationResponseFormGroup() {
		return new FormGroup<StopReplicationResponseFormProperties>({
		});

	}

	export interface StopSourceNetworkReplicationResponse {
		sourceNetwork?: SourceNetwork;
	}
	export interface StopSourceNetworkReplicationResponseFormProperties {
	}
	export function CreateStopSourceNetworkReplicationResponseFormGroup() {
		return new FormGroup<StopSourceNetworkReplicationResponseFormProperties>({
		});

	}

	export interface TerminateRecoveryInstancesResponse {
		job?: Job;
	}
	export interface TerminateRecoveryInstancesResponseFormProperties {
	}
	export function CreateTerminateRecoveryInstancesResponseFormGroup() {
		return new FormGroup<TerminateRecoveryInstancesResponseFormProperties>({
		});

	}

	export interface UpdateLaunchConfigurationTemplateResponse {
		launchConfigurationTemplate?: LaunchConfigurationTemplate;
	}
	export interface UpdateLaunchConfigurationTemplateResponseFormProperties {
	}
	export function CreateUpdateLaunchConfigurationTemplateResponseFormGroup() {
		return new FormGroup<UpdateLaunchConfigurationTemplateResponseFormProperties>({
		});

	}

	export interface AssociateSourceNetworkStackRequest {

		/** Required */
		cfnStackName: string;

		/** Required */
		sourceNetworkID: string;
	}
	export interface AssociateSourceNetworkStackRequestFormProperties {

		/** Required */
		cfnStackName: FormControl<string | null | undefined>,

		/** Required */
		sourceNetworkID: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSourceNetworkStackRequestFormGroup() {
		return new FormGroup<AssociateSourceNetworkStackRequestFormProperties>({
			cfnStackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceNetworkID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConversionMap {
	}
	export interface ConversionMapFormProperties {
	}
	export function CreateConversionMapFormGroup() {
		return new FormGroup<ConversionMapFormProperties>({
		});

	}

	export interface CreateExtendedSourceServerRequest {

		/** Required */
		sourceServerArn: string;
		tags?: TagsMap;
	}
	export interface CreateExtendedSourceServerRequestFormProperties {

		/** Required */
		sourceServerArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateExtendedSourceServerRequestFormGroup() {
		return new FormGroup<CreateExtendedSourceServerRequestFormProperties>({
			sourceServerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLaunchConfigurationTemplateRequest {
		copyPrivateIp?: boolean | null;
		copyTags?: boolean | null;
		exportBucketArn?: string;
		launchDisposition?: LaunchDisposition;
		licensing?: Licensing;
		tags?: TagsMap;
		targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
	}
	export interface CreateLaunchConfigurationTemplateRequestFormProperties {
		copyPrivateIp: FormControl<boolean | null | undefined>,
		copyTags: FormControl<boolean | null | undefined>,
		exportBucketArn: FormControl<string | null | undefined>,
		launchDisposition: FormControl<LaunchDisposition | null | undefined>,
		targetInstanceTypeRightSizingMethod: FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>,
	}
	export function CreateCreateLaunchConfigurationTemplateRequestFormGroup() {
		return new FormGroup<CreateLaunchConfigurationTemplateRequestFormProperties>({
			copyPrivateIp: new FormControl<boolean | null | undefined>(undefined),
			copyTags: new FormControl<boolean | null | undefined>(undefined),
			exportBucketArn: new FormControl<string | null | undefined>(undefined),
			launchDisposition: new FormControl<LaunchDisposition | null | undefined>(undefined),
			targetInstanceTypeRightSizingMethod: new FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>(undefined),
		});

	}

	export interface CreateReplicationConfigurationTemplateRequest {

		/** Required */
		associateDefaultSecurityGroup: boolean;
		autoReplicateNewDisks?: boolean | null;

		/** Required */
		bandwidthThrottling: number;

		/** Required */
		createPublicIP: boolean;

		/** Required */
		dataPlaneRouting: ReplicationConfigurationDataPlaneRouting;

		/** Required */
		defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskType;

		/** Required */
		ebsEncryption: ReplicationConfigurationEbsEncryption;
		ebsEncryptionKeyArn?: string;

		/** Required */
		pitPolicy: Array<PITPolicyRule>;

		/** Required */
		replicationServerInstanceType: string;

		/** Required */
		replicationServersSecurityGroupsIDs: Array<string>;

		/** Required */
		stagingAreaSubnetId: string;

		/** Required */
		stagingAreaTags: TagsMap;
		tags?: TagsMap;

		/** Required */
		useDedicatedReplicationServer: boolean;
	}
	export interface CreateReplicationConfigurationTemplateRequestFormProperties {

		/** Required */
		associateDefaultSecurityGroup: FormControl<boolean | null | undefined>,
		autoReplicateNewDisks: FormControl<boolean | null | undefined>,

		/** Required */
		bandwidthThrottling: FormControl<number | null | undefined>,

		/** Required */
		createPublicIP: FormControl<boolean | null | undefined>,

		/** Required */
		dataPlaneRouting: FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>,

		/** Required */
		defaultLargeStagingDiskType: FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>,

		/** Required */
		ebsEncryption: FormControl<ReplicationConfigurationEbsEncryption | null | undefined>,
		ebsEncryptionKeyArn: FormControl<string | null | undefined>,

		/** Required */
		replicationServerInstanceType: FormControl<string | null | undefined>,

		/** Required */
		stagingAreaSubnetId: FormControl<string | null | undefined>,

		/** Required */
		useDedicatedReplicationServer: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateReplicationConfigurationTemplateRequestFormGroup() {
		return new FormGroup<CreateReplicationConfigurationTemplateRequestFormProperties>({
			associateDefaultSecurityGroup: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			autoReplicateNewDisks: new FormControl<boolean | null | undefined>(undefined),
			bandwidthThrottling: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			createPublicIP: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			dataPlaneRouting: new FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>(undefined, [Validators.required]),
			defaultLargeStagingDiskType: new FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>(undefined, [Validators.required]),
			ebsEncryption: new FormControl<ReplicationConfigurationEbsEncryption | null | undefined>(undefined, [Validators.required]),
			ebsEncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			replicationServerInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stagingAreaSubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useDedicatedReplicationServer: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSourceNetworkRequest {

		/** Required */
		originAccountID: string;

		/** Required */
		originRegion: string;
		tags?: TagsMap;

		/** Required */
		vpcID: string;
	}
	export interface CreateSourceNetworkRequestFormProperties {

		/** Required */
		originAccountID: FormControl<string | null | undefined>,

		/** Required */
		originRegion: FormControl<string | null | undefined>,

		/** Required */
		vpcID: FormControl<string | null | undefined>,
	}
	export function CreateCreateSourceNetworkRequestFormGroup() {
		return new FormGroup<CreateSourceNetworkRequestFormProperties>({
			originAccountID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			originRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vpcID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteJobRequest {

		/** Required */
		jobID: string;
	}
	export interface DeleteJobRequestFormProperties {

		/** Required */
		jobID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteJobRequestFormGroup() {
		return new FormGroup<DeleteJobRequestFormProperties>({
			jobID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLaunchConfigurationTemplateRequest {

		/** Required */
		launchConfigurationTemplateID: string;
	}
	export interface DeleteLaunchConfigurationTemplateRequestFormProperties {

		/** Required */
		launchConfigurationTemplateID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLaunchConfigurationTemplateRequestFormGroup() {
		return new FormGroup<DeleteLaunchConfigurationTemplateRequestFormProperties>({
			launchConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRecoveryInstanceRequest {

		/** Required */
		recoveryInstanceID: string;
	}
	export interface DeleteRecoveryInstanceRequestFormProperties {

		/** Required */
		recoveryInstanceID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRecoveryInstanceRequestFormGroup() {
		return new FormGroup<DeleteRecoveryInstanceRequestFormProperties>({
			recoveryInstanceID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteReplicationConfigurationTemplateRequest {

		/** Required */
		replicationConfigurationTemplateID: string;
	}
	export interface DeleteReplicationConfigurationTemplateRequestFormProperties {

		/** Required */
		replicationConfigurationTemplateID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReplicationConfigurationTemplateRequestFormGroup() {
		return new FormGroup<DeleteReplicationConfigurationTemplateRequestFormProperties>({
			replicationConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSourceNetworkRequest {

		/** Required */
		sourceNetworkID: string;
	}
	export interface DeleteSourceNetworkRequestFormProperties {

		/** Required */
		sourceNetworkID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSourceNetworkRequestFormGroup() {
		return new FormGroup<DeleteSourceNetworkRequestFormProperties>({
			sourceNetworkID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSourceServerRequest {

		/** Required */
		sourceServerID: string;
	}
	export interface DeleteSourceServerRequestFormProperties {

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSourceServerRequestFormGroup() {
		return new FormGroup<DeleteSourceServerRequestFormProperties>({
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeJobLogItemsRequest {

		/** Required */
		jobID: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeJobLogItemsRequestFormProperties {

		/** Required */
		jobID: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobLogItemsRequestFormGroup() {
		return new FormGroup<DescribeJobLogItemsRequestFormProperties>({
			jobID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of filters by which to return Jobs. */
	export interface DescribeJobsRequestFilters {
		fromDate?: string;
		jobIDs?: Array<string>;
		toDate?: string;
	}

	/** A set of filters by which to return Jobs. */
	export interface DescribeJobsRequestFiltersFormProperties {
		fromDate: FormControl<string | null | undefined>,
		toDate: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobsRequestFiltersFormGroup() {
		return new FormGroup<DescribeJobsRequestFiltersFormProperties>({
			fromDate: new FormControl<string | null | undefined>(undefined),
			toDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeJobsRequest {
		filters?: DescribeJobsRequestFilters;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeJobsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobsRequestFormGroup() {
		return new FormGroup<DescribeJobsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLaunchConfigurationTemplatesRequest {
		launchConfigurationTemplateIDs?: Array<string>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeLaunchConfigurationTemplatesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLaunchConfigurationTemplatesRequestFormGroup() {
		return new FormGroup<DescribeLaunchConfigurationTemplatesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of filters by which to return Recovery Instances. */
	export interface DescribeRecoveryInstancesRequestFilters {
		recoveryInstanceIDs?: Array<string>;
		sourceServerIDs?: Array<string>;
	}

	/** A set of filters by which to return Recovery Instances. */
	export interface DescribeRecoveryInstancesRequestFiltersFormProperties {
	}
	export function CreateDescribeRecoveryInstancesRequestFiltersFormGroup() {
		return new FormGroup<DescribeRecoveryInstancesRequestFiltersFormProperties>({
		});

	}

	export interface DescribeRecoveryInstancesRequest {
		filters?: DescribeRecoveryInstancesRequestFilters;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeRecoveryInstancesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecoveryInstancesRequestFormGroup() {
		return new FormGroup<DescribeRecoveryInstancesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of filters by which to return Recovery Snapshots. */
	export interface DescribeRecoverySnapshotsRequestFilters {
		fromDateTime?: string;
		toDateTime?: string;
	}

	/** A set of filters by which to return Recovery Snapshots. */
	export interface DescribeRecoverySnapshotsRequestFiltersFormProperties {
		fromDateTime: FormControl<string | null | undefined>,
		toDateTime: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecoverySnapshotsRequestFiltersFormGroup() {
		return new FormGroup<DescribeRecoverySnapshotsRequestFiltersFormProperties>({
			fromDateTime: new FormControl<string | null | undefined>(undefined),
			toDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RecoverySnapshotsOrder { ASC = 0, DESC = 1 }

	export interface DescribeRecoverySnapshotsRequest {
		filters?: DescribeRecoverySnapshotsRequestFilters;
		maxResults?: number | null;
		nextToken?: string;
		order?: RecoverySnapshotsOrder;

		/** Required */
		sourceServerID: string;
	}
	export interface DescribeRecoverySnapshotsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		order: FormControl<RecoverySnapshotsOrder | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecoverySnapshotsRequestFormGroup() {
		return new FormGroup<DescribeRecoverySnapshotsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<RecoverySnapshotsOrder | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeReplicationConfigurationTemplatesRequest {
		maxResults?: number | null;
		nextToken?: string;
		replicationConfigurationTemplateIDs?: Array<string>;
	}
	export interface DescribeReplicationConfigurationTemplatesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationConfigurationTemplatesRequestFormGroup() {
		return new FormGroup<DescribeReplicationConfigurationTemplatesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of filters by which to return Source Networks. */
	export interface DescribeSourceNetworksRequestFilters {
		originAccountID?: string;
		originRegion?: string;
		sourceNetworkIDs?: Array<string>;
	}

	/** A set of filters by which to return Source Networks. */
	export interface DescribeSourceNetworksRequestFiltersFormProperties {
		originAccountID: FormControl<string | null | undefined>,
		originRegion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSourceNetworksRequestFiltersFormGroup() {
		return new FormGroup<DescribeSourceNetworksRequestFiltersFormProperties>({
			originAccountID: new FormControl<string | null | undefined>(undefined),
			originRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSourceNetworksRequest {
		filters?: DescribeSourceNetworksRequestFilters;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeSourceNetworksRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSourceNetworksRequestFormGroup() {
		return new FormGroup<DescribeSourceNetworksRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of filters by which to return Source Servers. */
	export interface DescribeSourceServersRequestFilters {
		hardwareId?: string;
		sourceServerIDs?: Array<string>;
		stagingAccountIDs?: Array<string>;
	}

	/** A set of filters by which to return Source Servers. */
	export interface DescribeSourceServersRequestFiltersFormProperties {
		hardwareId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSourceServersRequestFiltersFormGroup() {
		return new FormGroup<DescribeSourceServersRequestFiltersFormProperties>({
			hardwareId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSourceServersRequest {
		filters?: DescribeSourceServersRequestFilters;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeSourceServersRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSourceServersRequestFormGroup() {
		return new FormGroup<DescribeSourceServersRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisconnectRecoveryInstanceRequest {

		/** Required */
		recoveryInstanceID: string;
	}
	export interface DisconnectRecoveryInstanceRequestFormProperties {

		/** Required */
		recoveryInstanceID: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectRecoveryInstanceRequestFormGroup() {
		return new FormGroup<DisconnectRecoveryInstanceRequestFormProperties>({
			recoveryInstanceID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisconnectSourceServerRequest {

		/** Required */
		sourceServerID: string;
	}
	export interface DisconnectSourceServerRequestFormProperties {

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectSourceServerRequestFormGroup() {
		return new FormGroup<DisconnectSourceServerRequestFormProperties>({
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExportSourceNetworkCfnTemplateRequest {

		/** Required */
		sourceNetworkID: string;
	}
	export interface ExportSourceNetworkCfnTemplateRequestFormProperties {

		/** Required */
		sourceNetworkID: FormControl<string | null | undefined>,
	}
	export function CreateExportSourceNetworkCfnTemplateRequestFormGroup() {
		return new FormGroup<ExportSourceNetworkCfnTemplateRequestFormProperties>({
			sourceNetworkID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FailbackLaunchType { RECOVERY = 0, DRILL = 1 }

	export interface GetFailbackReplicationConfigurationRequest {

		/** Required */
		recoveryInstanceID: string;
	}
	export interface GetFailbackReplicationConfigurationRequestFormProperties {

		/** Required */
		recoveryInstanceID: FormControl<string | null | undefined>,
	}
	export function CreateGetFailbackReplicationConfigurationRequestFormGroup() {
		return new FormGroup<GetFailbackReplicationConfigurationRequestFormProperties>({
			recoveryInstanceID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLaunchConfigurationRequest {

		/** Required */
		sourceServerID: string;
	}
	export interface GetLaunchConfigurationRequestFormProperties {

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateGetLaunchConfigurationRequestFormGroup() {
		return new FormGroup<GetLaunchConfigurationRequestFormProperties>({
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetReplicationConfigurationRequest {

		/** Required */
		sourceServerID: string;
	}
	export interface GetReplicationConfigurationRequestFormProperties {

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateGetReplicationConfigurationRequestFormGroup() {
		return new FormGroup<GetReplicationConfigurationRequestFormProperties>({
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InitializeServiceRequest {
	}
	export interface InitializeServiceRequestFormProperties {
	}
	export function CreateInitializeServiceRequestFormGroup() {
		return new FormGroup<InitializeServiceRequestFormProperties>({
		});

	}

	export interface ListExtensibleSourceServersRequest {
		maxResults?: number | null;
		nextToken?: string;

		/** Required */
		stagingAccountID: string;
	}
	export interface ListExtensibleSourceServersRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		stagingAccountID: FormControl<string | null | undefined>,
	}
	export function CreateListExtensibleSourceServersRequestFormGroup() {
		return new FormGroup<ListExtensibleSourceServersRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			stagingAccountID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListStagingAccountsRequest {
	}
	export interface ListStagingAccountsRequestFormProperties {
	}
	export function CreateListStagingAccountsRequestFormGroup() {
		return new FormGroup<ListStagingAccountsRequestFormProperties>({
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

	export enum RecoveryInstanceDataReplicationInitiationStepStatus { NOT_STARTED = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3, SKIPPED = 4 }


	/** WARNING: RetryDataReplication is deprecated */
	export interface RetryDataReplicationRequest {

		/** Required */
		sourceServerID: string;
	}

	/** WARNING: RetryDataReplication is deprecated */
	export interface RetryDataReplicationRequestFormProperties {

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateRetryDataReplicationRequestFormGroup() {
		return new FormGroup<RetryDataReplicationRequestFormProperties>({
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReverseReplicationRequest {

		/** Required */
		recoveryInstanceID: string;
	}
	export interface ReverseReplicationRequestFormProperties {

		/** Required */
		recoveryInstanceID: FormControl<string | null | undefined>,
	}
	export function CreateReverseReplicationRequestFormGroup() {
		return new FormGroup<ReverseReplicationRequestFormProperties>({
			recoveryInstanceID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartFailbackLaunchRequest {

		/** Required */
		recoveryInstanceIDs: Array<string>;
		tags?: TagsMap;
	}
	export interface StartFailbackLaunchRequestFormProperties {
	}
	export function CreateStartFailbackLaunchRequestFormGroup() {
		return new FormGroup<StartFailbackLaunchRequestFormProperties>({
		});

	}

	export interface StartRecoveryRequest {
		isDrill?: boolean | null;

		/** Required */
		sourceServers: Array<StartRecoveryRequestSourceServer>;
		tags?: TagsMap;
	}
	export interface StartRecoveryRequestFormProperties {
		isDrill: FormControl<boolean | null | undefined>,
	}
	export function CreateStartRecoveryRequestFormGroup() {
		return new FormGroup<StartRecoveryRequestFormProperties>({
			isDrill: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartReplicationRequest {

		/** Required */
		sourceServerID: string;
	}
	export interface StartReplicationRequestFormProperties {

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateStartReplicationRequestFormGroup() {
		return new FormGroup<StartReplicationRequestFormProperties>({
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartSourceNetworkRecoveryRequest {
		deployAsNew?: boolean | null;

		/** Required */
		sourceNetworks: Array<StartSourceNetworkRecoveryRequestNetworkEntry>;
		tags?: TagsMap;
	}
	export interface StartSourceNetworkRecoveryRequestFormProperties {
		deployAsNew: FormControl<boolean | null | undefined>,
	}
	export function CreateStartSourceNetworkRecoveryRequestFormGroup() {
		return new FormGroup<StartSourceNetworkRecoveryRequestFormProperties>({
			deployAsNew: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartSourceNetworkReplicationRequest {

		/** Required */
		sourceNetworkID: string;
	}
	export interface StartSourceNetworkReplicationRequestFormProperties {

		/** Required */
		sourceNetworkID: FormControl<string | null | undefined>,
	}
	export function CreateStartSourceNetworkReplicationRequestFormGroup() {
		return new FormGroup<StartSourceNetworkReplicationRequestFormProperties>({
			sourceNetworkID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopFailbackRequest {

		/** Required */
		recoveryInstanceID: string;
	}
	export interface StopFailbackRequestFormProperties {

		/** Required */
		recoveryInstanceID: FormControl<string | null | undefined>,
	}
	export function CreateStopFailbackRequestFormGroup() {
		return new FormGroup<StopFailbackRequestFormProperties>({
			recoveryInstanceID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopReplicationRequest {

		/** Required */
		sourceServerID: string;
	}
	export interface StopReplicationRequestFormProperties {

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateStopReplicationRequestFormGroup() {
		return new FormGroup<StopReplicationRequestFormProperties>({
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopSourceNetworkReplicationRequest {

		/** Required */
		sourceNetworkID: string;
	}
	export interface StopSourceNetworkReplicationRequestFormProperties {

		/** Required */
		sourceNetworkID: FormControl<string | null | undefined>,
	}
	export function CreateStopSourceNetworkReplicationRequestFormGroup() {
		return new FormGroup<StopSourceNetworkReplicationRequestFormProperties>({
			sourceNetworkID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagsMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface TerminateRecoveryInstancesRequest {

		/** Required */
		recoveryInstanceIDs: Array<string>;
	}
	export interface TerminateRecoveryInstancesRequestFormProperties {
	}
	export function CreateTerminateRecoveryInstancesRequestFormGroup() {
		return new FormGroup<TerminateRecoveryInstancesRequestFormProperties>({
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

	export interface UpdateFailbackReplicationConfigurationRequest {
		bandwidthThrottling?: number | null;
		name?: string;

		/** Required */
		recoveryInstanceID: string;
		usePrivateIP?: boolean | null;
	}
	export interface UpdateFailbackReplicationConfigurationRequestFormProperties {
		bandwidthThrottling: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		recoveryInstanceID: FormControl<string | null | undefined>,
		usePrivateIP: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateFailbackReplicationConfigurationRequestFormGroup() {
		return new FormGroup<UpdateFailbackReplicationConfigurationRequestFormProperties>({
			bandwidthThrottling: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			recoveryInstanceID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			usePrivateIP: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateLaunchConfigurationRequest {
		copyPrivateIp?: boolean | null;
		copyTags?: boolean | null;
		launchDisposition?: LaunchDisposition;
		licensing?: Licensing;
		name?: string;

		/** Required */
		sourceServerID: string;
		targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
	}
	export interface UpdateLaunchConfigurationRequestFormProperties {
		copyPrivateIp: FormControl<boolean | null | undefined>,
		copyTags: FormControl<boolean | null | undefined>,
		launchDisposition: FormControl<LaunchDisposition | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
		targetInstanceTypeRightSizingMethod: FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>,
	}
	export function CreateUpdateLaunchConfigurationRequestFormGroup() {
		return new FormGroup<UpdateLaunchConfigurationRequestFormProperties>({
			copyPrivateIp: new FormControl<boolean | null | undefined>(undefined),
			copyTags: new FormControl<boolean | null | undefined>(undefined),
			launchDisposition: new FormControl<LaunchDisposition | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetInstanceTypeRightSizingMethod: new FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>(undefined),
		});

	}

	export interface UpdateLaunchConfigurationTemplateRequest {
		copyPrivateIp?: boolean | null;
		copyTags?: boolean | null;
		exportBucketArn?: string;

		/** Required */
		launchConfigurationTemplateID: string;
		launchDisposition?: LaunchDisposition;
		licensing?: Licensing;
		targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
	}
	export interface UpdateLaunchConfigurationTemplateRequestFormProperties {
		copyPrivateIp: FormControl<boolean | null | undefined>,
		copyTags: FormControl<boolean | null | undefined>,
		exportBucketArn: FormControl<string | null | undefined>,

		/** Required */
		launchConfigurationTemplateID: FormControl<string | null | undefined>,
		launchDisposition: FormControl<LaunchDisposition | null | undefined>,
		targetInstanceTypeRightSizingMethod: FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>,
	}
	export function CreateUpdateLaunchConfigurationTemplateRequestFormGroup() {
		return new FormGroup<UpdateLaunchConfigurationTemplateRequestFormProperties>({
			copyPrivateIp: new FormControl<boolean | null | undefined>(undefined),
			copyTags: new FormControl<boolean | null | undefined>(undefined),
			exportBucketArn: new FormControl<string | null | undefined>(undefined),
			launchConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			launchDisposition: new FormControl<LaunchDisposition | null | undefined>(undefined),
			targetInstanceTypeRightSizingMethod: new FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>(undefined),
		});

	}

	export interface UpdateReplicationConfigurationRequest {
		associateDefaultSecurityGroup?: boolean | null;
		autoReplicateNewDisks?: boolean | null;
		bandwidthThrottling?: number | null;
		createPublicIP?: boolean | null;
		dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
		defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
		ebsEncryption?: ReplicationConfigurationEbsEncryption;
		ebsEncryptionKeyArn?: string;
		name?: string;
		pitPolicy?: Array<PITPolicyRule>;
		replicatedDisks?: Array<ReplicationConfigurationReplicatedDisk>;
		replicationServerInstanceType?: string;
		replicationServersSecurityGroupsIDs?: Array<string>;

		/** Required */
		sourceServerID: string;
		stagingAreaSubnetId?: string;
		stagingAreaTags?: TagsMap;
		useDedicatedReplicationServer?: boolean | null;
	}
	export interface UpdateReplicationConfigurationRequestFormProperties {
		associateDefaultSecurityGroup: FormControl<boolean | null | undefined>,
		autoReplicateNewDisks: FormControl<boolean | null | undefined>,
		bandwidthThrottling: FormControl<number | null | undefined>,
		createPublicIP: FormControl<boolean | null | undefined>,
		dataPlaneRouting: FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>,
		defaultLargeStagingDiskType: FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>,
		ebsEncryption: FormControl<ReplicationConfigurationEbsEncryption | null | undefined>,
		ebsEncryptionKeyArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		replicationServerInstanceType: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
		stagingAreaSubnetId: FormControl<string | null | undefined>,
		useDedicatedReplicationServer: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateReplicationConfigurationRequestFormGroup() {
		return new FormGroup<UpdateReplicationConfigurationRequestFormProperties>({
			associateDefaultSecurityGroup: new FormControl<boolean | null | undefined>(undefined),
			autoReplicateNewDisks: new FormControl<boolean | null | undefined>(undefined),
			bandwidthThrottling: new FormControl<number | null | undefined>(undefined),
			createPublicIP: new FormControl<boolean | null | undefined>(undefined),
			dataPlaneRouting: new FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>(undefined),
			defaultLargeStagingDiskType: new FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>(undefined),
			ebsEncryption: new FormControl<ReplicationConfigurationEbsEncryption | null | undefined>(undefined),
			ebsEncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			replicationServerInstanceType: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stagingAreaSubnetId: new FormControl<string | null | undefined>(undefined),
			useDedicatedReplicationServer: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateReplicationConfigurationTemplateRequest {
		arn?: string;
		associateDefaultSecurityGroup?: boolean | null;
		autoReplicateNewDisks?: boolean | null;
		bandwidthThrottling?: number | null;
		createPublicIP?: boolean | null;
		dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
		defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
		ebsEncryption?: ReplicationConfigurationEbsEncryption;
		ebsEncryptionKeyArn?: string;
		pitPolicy?: Array<PITPolicyRule>;

		/** Required */
		replicationConfigurationTemplateID: string;
		replicationServerInstanceType?: string;
		replicationServersSecurityGroupsIDs?: Array<string>;
		stagingAreaSubnetId?: string;
		stagingAreaTags?: TagsMap;
		useDedicatedReplicationServer?: boolean | null;
	}
	export interface UpdateReplicationConfigurationTemplateRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		associateDefaultSecurityGroup: FormControl<boolean | null | undefined>,
		autoReplicateNewDisks: FormControl<boolean | null | undefined>,
		bandwidthThrottling: FormControl<number | null | undefined>,
		createPublicIP: FormControl<boolean | null | undefined>,
		dataPlaneRouting: FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>,
		defaultLargeStagingDiskType: FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>,
		ebsEncryption: FormControl<ReplicationConfigurationEbsEncryption | null | undefined>,
		ebsEncryptionKeyArn: FormControl<string | null | undefined>,

		/** Required */
		replicationConfigurationTemplateID: FormControl<string | null | undefined>,
		replicationServerInstanceType: FormControl<string | null | undefined>,
		stagingAreaSubnetId: FormControl<string | null | undefined>,
		useDedicatedReplicationServer: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateReplicationConfigurationTemplateRequestFormGroup() {
		return new FormGroup<UpdateReplicationConfigurationTemplateRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			associateDefaultSecurityGroup: new FormControl<boolean | null | undefined>(undefined),
			autoReplicateNewDisks: new FormControl<boolean | null | undefined>(undefined),
			bandwidthThrottling: new FormControl<number | null | undefined>(undefined),
			createPublicIP: new FormControl<boolean | null | undefined>(undefined),
			dataPlaneRouting: new FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>(undefined),
			defaultLargeStagingDiskType: new FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>(undefined),
			ebsEncryption: new FormControl<ReplicationConfigurationEbsEncryption | null | undefined>(undefined),
			ebsEncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			replicationConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replicationServerInstanceType: new FormControl<string | null | undefined>(undefined),
			stagingAreaSubnetId: new FormControl<string | null | undefined>(undefined),
			useDedicatedReplicationServer: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associate a Source Network to an existing CloudFormation Stack and modify launch templates to use this network. Can be used for reverting to previously deployed CloudFormation stacks.
		 * Post AssociateSourceNetworkStack
		 * @return {void} 
		 */
		AssociateSourceNetworkStack(requestBody: AssociateSourceNetworkStackPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'AssociateSourceNetworkStack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create an extended source server in the target Account based on the source server in staging account.
		 * Post CreateExtendedSourceServer
		 * @return {void} 
		 */
		CreateExtendedSourceServer(requestBody: CreateExtendedSourceServerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'CreateExtendedSourceServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new Launch Configuration Template.
		 * Post CreateLaunchConfigurationTemplate
		 * @return {void} 
		 */
		CreateLaunchConfigurationTemplate(requestBody: CreateLaunchConfigurationTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'CreateLaunchConfigurationTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new ReplicationConfigurationTemplate.
		 * Post CreateReplicationConfigurationTemplate
		 * @return {void} 
		 */
		CreateReplicationConfigurationTemplate(requestBody: CreateReplicationConfigurationTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'CreateReplicationConfigurationTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new Source Network resource for a provided VPC ID.
		 * Post CreateSourceNetwork
		 * @return {void} 
		 */
		CreateSourceNetwork(requestBody: CreateSourceNetworkPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'CreateSourceNetwork', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a single Job by ID.
		 * Post DeleteJob
		 * @return {void} 
		 */
		DeleteJob(requestBody: DeleteJobPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DeleteJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a single Launch Configuration Template by ID.
		 * Post DeleteLaunchConfigurationTemplate
		 * @return {void} 
		 */
		DeleteLaunchConfigurationTemplate(requestBody: DeleteLaunchConfigurationTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DeleteLaunchConfigurationTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.
		 * Post DeleteRecoveryInstance
		 * @return {void} Success
		 */
		DeleteRecoveryInstance(requestBody: DeleteRecoveryInstancePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DeleteRecoveryInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a single Replication Configuration Template by ID
		 * Post DeleteReplicationConfigurationTemplate
		 * @return {void} 
		 */
		DeleteReplicationConfigurationTemplate(requestBody: DeleteReplicationConfigurationTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DeleteReplicationConfigurationTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Source Network resource.
		 * Post DeleteSourceNetwork
		 * @return {void} 
		 */
		DeleteSourceNetwork(requestBody: DeleteSourceNetworkPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DeleteSourceNetwork', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a single Source Server by ID. The Source Server must be disconnected first.
		 * Post DeleteSourceServer
		 * @return {void} 
		 */
		DeleteSourceServer(requestBody: DeleteSourceServerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DeleteSourceServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a detailed Job log with pagination.
		 * Post DescribeJobLogItems
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeJobLogItemsResponse} Success
		 */
		DescribeJobLogItems(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeJobLogItemsPostBody): Observable<DescribeJobLogItemsResponse> {
			return this.http.post<DescribeJobLogItemsResponse>(this.baseUri + 'DescribeJobLogItems?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
		 * Post DescribeJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeJobsResponse} Success
		 */
		DescribeJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeJobsPostBody): Observable<DescribeJobsResponse> {
			return this.http.post<DescribeJobsResponse>(this.baseUri + 'DescribeJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs
		 * Post DescribeLaunchConfigurationTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeLaunchConfigurationTemplatesResponse} Success
		 */
		DescribeLaunchConfigurationTemplates(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeLaunchConfigurationTemplatesPostBody): Observable<DescribeLaunchConfigurationTemplatesResponse> {
			return this.http.post<DescribeLaunchConfigurationTemplatesResponse>(this.baseUri + 'DescribeLaunchConfigurationTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Recovery Instances or multiple Recovery Instances by ID.
		 * Post DescribeRecoveryInstances
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeRecoveryInstancesResponse} Success
		 */
		DescribeRecoveryInstances(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeRecoveryInstancesPostBody): Observable<DescribeRecoveryInstancesResponse> {
			return this.http.post<DescribeRecoveryInstancesResponse>(this.baseUri + 'DescribeRecoveryInstances?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Recovery Snapshots for a single Source Server.
		 * Post DescribeRecoverySnapshots
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeRecoverySnapshotsResponse} Success
		 */
		DescribeRecoverySnapshots(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeRecoverySnapshotsPostBody): Observable<DescribeRecoverySnapshotsResponse> {
			return this.http.post<DescribeRecoverySnapshotsResponse>(this.baseUri + 'DescribeRecoverySnapshots?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
		 * Post DescribeReplicationConfigurationTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeReplicationConfigurationTemplatesResponse} Success
		 */
		DescribeReplicationConfigurationTemplates(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeReplicationConfigurationTemplatesPostBody): Observable<DescribeReplicationConfigurationTemplatesResponse> {
			return this.http.post<DescribeReplicationConfigurationTemplatesResponse>(this.baseUri + 'DescribeReplicationConfigurationTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Source Networks or multiple Source Networks filtered by ID.
		 * Post DescribeSourceNetworks
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeSourceNetworksResponse} Success
		 */
		DescribeSourceNetworks(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeSourceNetworksPostBody): Observable<DescribeSourceNetworksResponse> {
			return this.http.post<DescribeSourceNetworksResponse>(this.baseUri + 'DescribeSourceNetworks?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Source Servers or multiple Source Servers filtered by ID.
		 * Post DescribeSourceServers
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeSourceServersResponse} Success
		 */
		DescribeSourceServers(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeSourceServersPostBody): Observable<DescribeSourceServersResponse> {
			return this.http.post<DescribeSourceServersResponse>(this.baseUri + 'DescribeSourceServers?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
		 * Post DisconnectRecoveryInstance
		 * @return {void} Success
		 */
		DisconnectRecoveryInstance(requestBody: DisconnectRecoveryInstancePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DisconnectRecoveryInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
		 * Post DisconnectSourceServer
		 * @return {SourceServer} Success
		 */
		DisconnectSourceServer(requestBody: DisconnectSourceServerPostBody): Observable<SourceServer> {
			return this.http.post<SourceServer>(this.baseUri + 'DisconnectSourceServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Export the Source Network CloudFormation template to an S3 bucket.
		 * Post ExportSourceNetworkCfnTemplate
		 * @return {ExportSourceNetworkCfnTemplateResponse} Success
		 */
		ExportSourceNetworkCfnTemplate(requestBody: ExportSourceNetworkCfnTemplatePostBody): Observable<ExportSourceNetworkCfnTemplateResponse> {
			return this.http.post<ExportSourceNetworkCfnTemplateResponse>(this.baseUri + 'ExportSourceNetworkCfnTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.
		 * Post GetFailbackReplicationConfiguration
		 * @return {GetFailbackReplicationConfigurationResponse} Success
		 */
		GetFailbackReplicationConfiguration(requestBody: GetFailbackReplicationConfigurationPostBody): Observable<GetFailbackReplicationConfigurationResponse> {
			return this.http.post<GetFailbackReplicationConfigurationResponse>(this.baseUri + 'GetFailbackReplicationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a LaunchConfiguration, filtered by Source Server IDs.
		 * Post GetLaunchConfiguration
		 * @return {LaunchConfiguration} Success
		 */
		GetLaunchConfiguration(requestBody: GetLaunchConfigurationPostBody): Observable<LaunchConfiguration> {
			return this.http.post<LaunchConfiguration>(this.baseUri + 'GetLaunchConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a ReplicationConfiguration, filtered by Source Server ID.
		 * Post GetReplicationConfiguration
		 * @return {ReplicationConfiguration} Success
		 */
		GetReplicationConfiguration(requestBody: GetReplicationConfigurationPostBody): Observable<ReplicationConfiguration> {
			return this.http.post<ReplicationConfiguration>(this.baseUri + 'GetReplicationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initialize Elastic Disaster Recovery.
		 * Post InitializeService
		 * @return {void} 
		 */
		InitializeService(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'InitializeService', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of source servers on a staging account that are extensible, which means that: a. The source server is not already extended into this Account. b. The source server on the Account we’re reading from is not an extension of another source server.
		 * Post ListExtensibleSourceServers
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListExtensibleSourceServersResponse} Success
		 */
		ListExtensibleSourceServers(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListExtensibleSourceServersPostBody): Observable<ListExtensibleSourceServersResponse> {
			return this.http.post<ListExtensibleSourceServersResponse>(this.baseUri + 'ListExtensibleSourceServers?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of staging accounts for existing extended source servers.
		 * Get ListStagingAccounts
		 * @param {number} maxResults The maximum number of staging Accounts to retrieve.
		 * @param {string} nextToken The token of the next staging Account to retrieve.
		 * @return {ListStagingAccountsResponse} Success
		 */
		ListStagingAccounts(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListStagingAccountsResponse> {
			return this.http.get<ListStagingAccountsResponse>(this.baseUri + 'ListStagingAccounts?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * List all tags for your Elastic Disaster Recovery resources.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource whose tags should be returned.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn ARN of the resource for which tags are to be added or updated.
		 * @return {void} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * WARNING: RetryDataReplication is deprecated. Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.
		 * Post RetryDataReplication
		 * @return {SourceServer} Success
		 */
		RetryDataReplication(requestBody: RetryDataReplicationPostBody): Observable<SourceServer> {
			return this.http.post<SourceServer>(this.baseUri + 'RetryDataReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them.
		 * Post ReverseReplication
		 * @return {ReverseReplicationResponse} Success
		 */
		ReverseReplication(requestBody: ReverseReplicationPostBody): Observable<ReverseReplicationResponse> {
			return this.http.post<ReverseReplicationResponse>(this.baseUri + 'ReverseReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.
		 * Post StartFailbackLaunch
		 * @return {StartFailbackLaunchResponse} Success
		 */
		StartFailbackLaunch(requestBody: StartFailbackLaunchPostBody): Observable<StartFailbackLaunchResponse> {
			return this.http.post<StartFailbackLaunchResponse>(this.baseUri + 'StartFailbackLaunch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.
		 * Post StartRecovery
		 * @return {void} 
		 */
		StartRecovery(requestBody: StartRecoveryPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'StartRecovery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.
		 * Post StartReplication
		 * @return {StartReplicationResponse} Success
		 */
		StartReplication(requestBody: StartReplicationPostBody): Observable<StartReplicationResponse> {
			return this.http.post<StartReplicationResponse>(this.baseUri + 'StartReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deploy VPC for the specified Source Network and modify launch templates to use this network. The VPC will be deployed using a dedicated CloudFormation stack.
		 * Post StartSourceNetworkRecovery
		 * @return {void} 
		 */
		StartSourceNetworkRecovery(requestBody: StartSourceNetworkRecoveryPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'StartSourceNetworkRecovery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts replication for a Source Network. This action would make the Source Network protected.
		 * Post StartSourceNetworkReplication
		 * @return {StartSourceNetworkReplicationResponse} Success
		 */
		StartSourceNetworkReplication(requestBody: StartSourceNetworkReplicationPostBody): Observable<StartSourceNetworkReplicationResponse> {
			return this.http.post<StartSourceNetworkReplicationResponse>(this.baseUri + 'StartSourceNetworkReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.
		 * Post StopFailback
		 * @return {void} Success
		 */
		StopFailback(requestBody: StopFailbackPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'StopFailback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.
		 * Post StopReplication
		 * @return {StopReplicationResponse} Success
		 */
		StopReplication(requestBody: StopReplicationPostBody): Observable<StopReplicationResponse> {
			return this.http.post<StopReplicationResponse>(this.baseUri + 'StopReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops replication for a Source Network. This action would make the Source Network unprotected.
		 * Post StopSourceNetworkReplication
		 * @return {StopSourceNetworkReplicationResponse} Success
		 */
		StopSourceNetworkReplication(requestBody: StopSourceNetworkReplicationPostBody): Observable<StopSourceNetworkReplicationResponse> {
			return this.http.post<StopSourceNetworkReplicationResponse>(this.baseUri + 'StopSourceNetworkReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.
		 * Post TerminateRecoveryInstances
		 * @return {TerminateRecoveryInstancesResponse} Success
		 */
		TerminateRecoveryInstances(requestBody: TerminateRecoveryInstancesPostBody): Observable<TerminateRecoveryInstancesResponse> {
			return this.http.post<TerminateRecoveryInstancesResponse>(this.baseUri + 'TerminateRecoveryInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn ARN of the resource for which tags are to be removed.
		 * @param {Array<string>} tagKeys Array of tags to be removed.
		 * @return {void} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to update the failback replication configuration of a Recovery Instance by ID.
		 * Post UpdateFailbackReplicationConfiguration
		 * @return {void} Success
		 */
		UpdateFailbackReplicationConfiguration(requestBody: UpdateFailbackReplicationConfigurationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'UpdateFailbackReplicationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a LaunchConfiguration by Source Server ID.
		 * Post UpdateLaunchConfiguration
		 * @return {LaunchConfiguration} Success
		 */
		UpdateLaunchConfiguration(requestBody: UpdateLaunchConfigurationPostBody): Observable<LaunchConfiguration> {
			return this.http.post<LaunchConfiguration>(this.baseUri + 'UpdateLaunchConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing Launch Configuration Template by ID.
		 * Post UpdateLaunchConfigurationTemplate
		 * @return {UpdateLaunchConfigurationTemplateResponse} Success
		 */
		UpdateLaunchConfigurationTemplate(requestBody: UpdateLaunchConfigurationTemplatePostBody): Observable<UpdateLaunchConfigurationTemplateResponse> {
			return this.http.post<UpdateLaunchConfigurationTemplateResponse>(this.baseUri + 'UpdateLaunchConfigurationTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to update a ReplicationConfiguration by Source Server ID.
		 * Post UpdateReplicationConfiguration
		 * @return {ReplicationConfiguration} Success
		 */
		UpdateReplicationConfiguration(requestBody: UpdateReplicationConfigurationPostBody): Observable<ReplicationConfiguration> {
			return this.http.post<ReplicationConfiguration>(this.baseUri + 'UpdateReplicationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a ReplicationConfigurationTemplate by ID.
		 * Post UpdateReplicationConfigurationTemplate
		 * @return {ReplicationConfigurationTemplate} Success
		 */
		UpdateReplicationConfigurationTemplate(requestBody: UpdateReplicationConfigurationTemplatePostBody): Observable<ReplicationConfigurationTemplate> {
			return this.http.post<ReplicationConfigurationTemplate>(this.baseUri + 'UpdateReplicationConfigurationTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AssociateSourceNetworkStackPostBody {

		/**
		 * CloudFormation template to associate with a Source Network.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		cfnStackName: string;

		/**
		 * The Source Network ID to associate with CloudFormation template.
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		sourceNetworkID: string;
	}
	export interface AssociateSourceNetworkStackPostBodyFormProperties {

		/**
		 * CloudFormation template to associate with a Source Network.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		cfnStackName: FormControl<string | null | undefined>,

		/**
		 * The Source Network ID to associate with CloudFormation template.
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		sourceNetworkID: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSourceNetworkStackPostBodyFormGroup() {
		return new FormGroup<AssociateSourceNetworkStackPostBodyFormProperties>({
			cfnStackName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^[a-zA-Z][-a-zA-Z0-9]*$')]),
			sourceNetworkID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^sn-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface CreateExtendedSourceServerPostBody {

		/**
		 * This defines the ARN of the source server in staging Account based on which you want to create an extended source server.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		sourceServerArn: string;

		/** A list of tags associated with the extended source server. */
		tags?: {[id: string]: string };
	}
	export interface CreateExtendedSourceServerPostBodyFormProperties {

		/**
		 * This defines the ARN of the source server in staging Account based on which you want to create an extended source server.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		sourceServerArn: FormControl<string | null | undefined>,

		/** A list of tags associated with the extended source server. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateExtendedSourceServerPostBodyFormGroup() {
		return new FormGroup<CreateExtendedSourceServerPostBodyFormProperties>({
			sourceServerArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:(?:[0-9a-zA-Z_-]+:){3}([0-9]{12,}):source-server/(s-[0-9a-zA-Z]{17})$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateLaunchConfigurationTemplatePostBody {

		/** Copy private IP. */
		copyPrivateIp?: boolean | null;

		/** Copy tags. */
		copyTags?: boolean | null;

		/**
		 * S3 bucket ARN to export Source Network templates.
		 * Max length: 2048
		 * Min length: 20
		 */
		exportBucketArn?: string | null;

		/** Launch disposition. */
		launchDisposition?: LaunchDisposition | null;

		/** Configuration of a machine's license. */
		licensing?: CreateLaunchConfigurationTemplatePostBodyLicensing;

		/** Request to associate tags during creation of a Launch Configuration Template. */
		tags?: {[id: string]: string };

		/** Target instance type right-sizing method. */
		targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | null;
	}
	export interface CreateLaunchConfigurationTemplatePostBodyFormProperties {

		/** Copy private IP. */
		copyPrivateIp: FormControl<boolean | null | undefined>,

		/** Copy tags. */
		copyTags: FormControl<boolean | null | undefined>,

		/**
		 * S3 bucket ARN to export Source Network templates.
		 * Max length: 2048
		 * Min length: 20
		 */
		exportBucketArn: FormControl<string | null | undefined>,

		/** Launch disposition. */
		launchDisposition: FormControl<LaunchDisposition | null | undefined>,

		/** Request to associate tags during creation of a Launch Configuration Template. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Target instance type right-sizing method. */
		targetInstanceTypeRightSizingMethod: FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>,
	}
	export function CreateCreateLaunchConfigurationTemplatePostBodyFormGroup() {
		return new FormGroup<CreateLaunchConfigurationTemplatePostBodyFormProperties>({
			copyPrivateIp: new FormControl<boolean | null | undefined>(undefined),
			copyTags: new FormControl<boolean | null | undefined>(undefined),
			exportBucketArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:.{16,2044}$')]),
			launchDisposition: new FormControl<LaunchDisposition | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			targetInstanceTypeRightSizingMethod: new FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>(undefined),
		});

	}

	export interface CreateLaunchConfigurationTemplatePostBodyLicensing {
		osByol?: boolean | null;
	}
	export interface CreateLaunchConfigurationTemplatePostBodyLicensingFormProperties {
		osByol: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateLaunchConfigurationTemplatePostBodyLicensingFormGroup() {
		return new FormGroup<CreateLaunchConfigurationTemplatePostBodyLicensingFormProperties>({
			osByol: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateReplicationConfigurationTemplatePostBody {

		/**
		 * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.
		 * Required
		 */
		associateDefaultSecurityGroup: boolean;

		/** Whether to allow the AWS replication agent to automatically replicate newly added disks. */
		autoReplicateNewDisks?: boolean | null;

		/**
		 * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
		 * Required
		 * Minimum: 0
		 */
		bandwidthThrottling: number;

		/**
		 * Whether to create a Public IP for the Recovery Instance by default.
		 * Required
		 */
		createPublicIP: boolean;

		/**
		 * The data plane routing mechanism that will be used for replication.
		 * Required
		 */
		dataPlaneRouting: ReplicationConfigurationDataPlaneRouting;

		/**
		 * The Staging Disk EBS volume type to be used during replication.
		 * Required
		 */
		defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskType;

		/**
		 * The type of EBS encryption to be used during replication.
		 * Required
		 */
		ebsEncryption: ReplicationConfigurationEbsEncryption;

		/**
		 * The ARN of the EBS encryption key to be used during replication.
		 * Max length: 2048
		 * Min length: 20
		 */
		ebsEncryptionKeyArn?: string | null;

		/**
		 * The Point in time (PIT) policy to manage snapshots taken during replication.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		pitPolicy: Array<PITPolicyRule>;

		/**
		 * The instance type to be used for the replication server.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		replicationServerInstanceType: string;

		/**
		 * The security group IDs that will be used by the replication server.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 32
		 */
		replicationServersSecurityGroupsIDs: Array<string>;

		/**
		 * The subnet to be used by the replication staging area.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		stagingAreaSubnetId: string;

		/**
		 * A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
		 * Required
		 */
		stagingAreaTags: {[id: string]: string };

		/** A set of tags to be associated with the Replication Configuration Template resource. */
		tags?: {[id: string]: string };

		/**
		 * Whether to use a dedicated Replication Server in the replication staging area.
		 * Required
		 */
		useDedicatedReplicationServer: boolean;
	}
	export interface CreateReplicationConfigurationTemplatePostBodyFormProperties {

		/**
		 * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.
		 * Required
		 */
		associateDefaultSecurityGroup: FormControl<boolean | null | undefined>,

		/** Whether to allow the AWS replication agent to automatically replicate newly added disks. */
		autoReplicateNewDisks: FormControl<boolean | null | undefined>,

		/**
		 * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
		 * Required
		 * Minimum: 0
		 */
		bandwidthThrottling: FormControl<number | null | undefined>,

		/**
		 * Whether to create a Public IP for the Recovery Instance by default.
		 * Required
		 */
		createPublicIP: FormControl<boolean | null | undefined>,

		/**
		 * The data plane routing mechanism that will be used for replication.
		 * Required
		 */
		dataPlaneRouting: FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>,

		/**
		 * The Staging Disk EBS volume type to be used during replication.
		 * Required
		 */
		defaultLargeStagingDiskType: FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>,

		/**
		 * The type of EBS encryption to be used during replication.
		 * Required
		 */
		ebsEncryption: FormControl<ReplicationConfigurationEbsEncryption | null | undefined>,

		/**
		 * The ARN of the EBS encryption key to be used during replication.
		 * Max length: 2048
		 * Min length: 20
		 */
		ebsEncryptionKeyArn: FormControl<string | null | undefined>,

		/**
		 * The instance type to be used for the replication server.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		replicationServerInstanceType: FormControl<string | null | undefined>,

		/**
		 * The subnet to be used by the replication staging area.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		stagingAreaSubnetId: FormControl<string | null | undefined>,

		/**
		 * A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
		 * Required
		 */
		stagingAreaTags: FormControl<{[id: string]: string } | null | undefined>,

		/** A set of tags to be associated with the Replication Configuration Template resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Whether to use a dedicated Replication Server in the replication staging area.
		 * Required
		 */
		useDedicatedReplicationServer: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateReplicationConfigurationTemplatePostBodyFormGroup() {
		return new FormGroup<CreateReplicationConfigurationTemplatePostBodyFormProperties>({
			associateDefaultSecurityGroup: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			autoReplicateNewDisks: new FormControl<boolean | null | undefined>(undefined),
			bandwidthThrottling: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			createPublicIP: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			dataPlaneRouting: new FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>(undefined, [Validators.required]),
			defaultLargeStagingDiskType: new FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>(undefined, [Validators.required]),
			ebsEncryption: new FormControl<ReplicationConfigurationEbsEncryption | null | undefined>(undefined, [Validators.required]),
			ebsEncryptionKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:.{16,2044}$')]),
			replicationServerInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
			stagingAreaSubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255), Validators.pattern('^subnet-[0-9a-fA-F]{8,}$')]),
			stagingAreaTags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			useDedicatedReplicationServer: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSourceNetworkPostBody {

		/**
		 * Account containing the VPC to protect.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		originAccountID: string;

		/**
		 * Region containing the VPC to protect.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		originRegion: string;

		/** A set of tags to be associated with the Source Network resource. */
		tags?: {[id: string]: string };

		/**
		 * Which VPC ID to protect.
		 * Required
		 * Max length: 21
		 * Min length: 12
		 */
		vpcID: string;
	}
	export interface CreateSourceNetworkPostBodyFormProperties {

		/**
		 * Account containing the VPC to protect.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		originAccountID: FormControl<string | null | undefined>,

		/**
		 * Region containing the VPC to protect.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		originRegion: FormControl<string | null | undefined>,

		/** A set of tags to be associated with the Source Network resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Which VPC ID to protect.
		 * Required
		 * Max length: 21
		 * Min length: 12
		 */
		vpcID: FormControl<string | null | undefined>,
	}
	export function CreateCreateSourceNetworkPostBodyFormGroup() {
		return new FormGroup<CreateSourceNetworkPostBodyFormProperties>({
			originAccountID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			originRegion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255), Validators.pattern('^(us(-gov)?|ap|ca|cn|eu|sa|af|me)-(central|north|(north(?:east|west))|south|south(?:east|west)|east|west)-[0-9]$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			vpcID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(21), Validators.pattern('^vpc-[0-9a-fA-F]{8,}$')]),
		});

	}

	export interface DeleteJobPostBody {

		/**
		 * The ID of the Job to be deleted.
		 * Required
		 * Max length: 24
		 * Min length: 24
		 */
		jobID: string;
	}
	export interface DeleteJobPostBodyFormProperties {

		/**
		 * The ID of the Job to be deleted.
		 * Required
		 * Max length: 24
		 * Min length: 24
		 */
		jobID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteJobPostBodyFormGroup() {
		return new FormGroup<DeleteJobPostBodyFormProperties>({
			jobID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(24), Validators.maxLength(24), Validators.pattern('^drsjob-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface DeleteLaunchConfigurationTemplatePostBody {

		/**
		 * The ID of the Launch Configuration Template to be deleted.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		launchConfigurationTemplateID: string;
	}
	export interface DeleteLaunchConfigurationTemplatePostBodyFormProperties {

		/**
		 * The ID of the Launch Configuration Template to be deleted.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		launchConfigurationTemplateID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLaunchConfigurationTemplatePostBodyFormGroup() {
		return new FormGroup<DeleteLaunchConfigurationTemplatePostBodyFormProperties>({
			launchConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^lct-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface DeleteRecoveryInstancePostBody {

		/**
		 * The ID of the Recovery Instance to be deleted.
		 * Required
		 * Max length: 19
		 * Min length: 10
		 */
		recoveryInstanceID: string;
	}
	export interface DeleteRecoveryInstancePostBodyFormProperties {

		/**
		 * The ID of the Recovery Instance to be deleted.
		 * Required
		 * Max length: 19
		 * Min length: 10
		 */
		recoveryInstanceID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRecoveryInstancePostBodyFormGroup() {
		return new FormGroup<DeleteRecoveryInstancePostBodyFormProperties>({
			recoveryInstanceID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(19), Validators.pattern('^i-[0-9a-fA-F]{8,}$')]),
		});

	}

	export interface DeleteReplicationConfigurationTemplatePostBody {

		/**
		 * The ID of the Replication Configuration Template to be deleted.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		replicationConfigurationTemplateID: string;
	}
	export interface DeleteReplicationConfigurationTemplatePostBodyFormProperties {

		/**
		 * The ID of the Replication Configuration Template to be deleted.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		replicationConfigurationTemplateID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReplicationConfigurationTemplatePostBodyFormGroup() {
		return new FormGroup<DeleteReplicationConfigurationTemplatePostBodyFormProperties>({
			replicationConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^rct-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface DeleteSourceNetworkPostBody {

		/**
		 * ID of the Source Network to delete.
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		sourceNetworkID: string;
	}
	export interface DeleteSourceNetworkPostBodyFormProperties {

		/**
		 * ID of the Source Network to delete.
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		sourceNetworkID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSourceNetworkPostBodyFormGroup() {
		return new FormGroup<DeleteSourceNetworkPostBodyFormProperties>({
			sourceNetworkID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^sn-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface DeleteSourceServerPostBody {

		/**
		 * The ID of the Source Server to be deleted.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface DeleteSourceServerPostBodyFormProperties {

		/**
		 * The ID of the Source Server to be deleted.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSourceServerPostBodyFormGroup() {
		return new FormGroup<DeleteSourceServerPostBodyFormProperties>({
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface DescribeJobLogItemsPostBody {

		/**
		 * The ID of the Job for which Job log items will be retrieved.
		 * Required
		 * Max length: 24
		 * Min length: 24
		 */
		jobID: string;

		/**
		 * Maximum number of Job log items to retrieve.
		 * Minimum: 1
		 */
		maxResults?: number | null;

		/**
		 * The token of the next Job log items to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface DescribeJobLogItemsPostBodyFormProperties {

		/**
		 * The ID of the Job for which Job log items will be retrieved.
		 * Required
		 * Max length: 24
		 * Min length: 24
		 */
		jobID: FormControl<string | null | undefined>,

		/**
		 * Maximum number of Job log items to retrieve.
		 * Minimum: 1
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token of the next Job log items to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobLogItemsPostBodyFormGroup() {
		return new FormGroup<DescribeJobLogItemsPostBodyFormProperties>({
			jobID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(24), Validators.maxLength(24), Validators.pattern('^drsjob-[0-9a-zA-Z]{17}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeJobsPostBody {

		/** A set of filters by which to return Jobs. */
		filters?: DescribeJobsPostBodyFilters;

		/**
		 * Maximum number of Jobs to retrieve.
		 * Minimum: 1
		 */
		maxResults?: number | null;

		/**
		 * The token of the next Job to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface DescribeJobsPostBodyFormProperties {

		/**
		 * Maximum number of Jobs to retrieve.
		 * Minimum: 1
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token of the next Job to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobsPostBodyFormGroup() {
		return new FormGroup<DescribeJobsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeJobsPostBodyFilters {
		fromDate?: string;
		jobIDs?: Array<string>;
		toDate?: string;
	}
	export interface DescribeJobsPostBodyFiltersFormProperties {
		fromDate: FormControl<string | null | undefined>,
		toDate: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobsPostBodyFiltersFormGroup() {
		return new FormGroup<DescribeJobsPostBodyFiltersFormProperties>({
			fromDate: new FormControl<string | null | undefined>(undefined),
			toDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLaunchConfigurationTemplatesPostBody {

		/**
		 * Request to filter Launch Configuration Templates list by Launch Configuration Template ID.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		launchConfigurationTemplateIDs?: Array<string>;

		/**
		 * Maximum results to be returned in DescribeLaunchConfigurationTemplates.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * The token of the next Launch Configuration Template to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface DescribeLaunchConfigurationTemplatesPostBodyFormProperties {

		/**
		 * Maximum results to be returned in DescribeLaunchConfigurationTemplates.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token of the next Launch Configuration Template to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLaunchConfigurationTemplatesPostBodyFormGroup() {
		return new FormGroup<DescribeLaunchConfigurationTemplatesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeRecoveryInstancesPostBody {

		/** A set of filters by which to return Recovery Instances. */
		filters?: DescribeRecoveryInstancesPostBodyFilters;

		/**
		 * Maximum number of Recovery Instances to retrieve.
		 * Minimum: 1
		 */
		maxResults?: number | null;

		/**
		 * The token of the next Recovery Instance to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface DescribeRecoveryInstancesPostBodyFormProperties {

		/**
		 * Maximum number of Recovery Instances to retrieve.
		 * Minimum: 1
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token of the next Recovery Instance to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecoveryInstancesPostBodyFormGroup() {
		return new FormGroup<DescribeRecoveryInstancesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeRecoveryInstancesPostBodyFilters {
		recoveryInstanceIDs?: Array<string>;
		sourceServerIDs?: Array<string>;
	}
	export interface DescribeRecoveryInstancesPostBodyFiltersFormProperties {
	}
	export function CreateDescribeRecoveryInstancesPostBodyFiltersFormGroup() {
		return new FormGroup<DescribeRecoveryInstancesPostBodyFiltersFormProperties>({
		});

	}

	export interface DescribeRecoverySnapshotsPostBody {

		/** A set of filters by which to return Recovery Snapshots. */
		filters?: DescribeRecoverySnapshotsPostBodyFilters;

		/**
		 * Maximum number of Recovery Snapshots to retrieve.
		 * Minimum: 1
		 */
		maxResults?: number | null;

		/**
		 * The token of the next Recovery Snapshot to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;

		/** The sorted ordering by which to return Recovery Snapshots. */
		order?: RecoverySnapshotsOrder | null;

		/**
		 * Filter Recovery Snapshots by Source Server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface DescribeRecoverySnapshotsPostBodyFormProperties {

		/**
		 * Maximum number of Recovery Snapshots to retrieve.
		 * Minimum: 1
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token of the next Recovery Snapshot to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,

		/** The sorted ordering by which to return Recovery Snapshots. */
		order: FormControl<RecoverySnapshotsOrder | null | undefined>,

		/**
		 * Filter Recovery Snapshots by Source Server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecoverySnapshotsPostBodyFormGroup() {
		return new FormGroup<DescribeRecoverySnapshotsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			order: new FormControl<RecoverySnapshotsOrder | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface DescribeRecoverySnapshotsPostBodyFilters {
		fromDateTime?: string;
		toDateTime?: string;
	}
	export interface DescribeRecoverySnapshotsPostBodyFiltersFormProperties {
		fromDateTime: FormControl<string | null | undefined>,
		toDateTime: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecoverySnapshotsPostBodyFiltersFormGroup() {
		return new FormGroup<DescribeRecoverySnapshotsPostBodyFiltersFormProperties>({
			fromDateTime: new FormControl<string | null | undefined>(undefined),
			toDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeReplicationConfigurationTemplatesPostBody {

		/**
		 * Maximum number of Replication Configuration Templates to retrieve.
		 * Minimum: 1
		 */
		maxResults?: number | null;

		/**
		 * The token of the next Replication Configuration Template to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;

		/**
		 * The IDs of the Replication Configuration Templates to retrieve. An empty list means all Replication Configuration Templates.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		replicationConfigurationTemplateIDs?: Array<string>;
	}
	export interface DescribeReplicationConfigurationTemplatesPostBodyFormProperties {

		/**
		 * Maximum number of Replication Configuration Templates to retrieve.
		 * Minimum: 1
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token of the next Replication Configuration Template to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationConfigurationTemplatesPostBodyFormGroup() {
		return new FormGroup<DescribeReplicationConfigurationTemplatesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeSourceNetworksPostBody {

		/** A set of filters by which to return Source Networks. */
		filters?: DescribeSourceNetworksPostBodyFilters;

		/**
		 * Maximum number of Source Networks to retrieve.
		 * Minimum: 1
		 */
		maxResults?: number | null;

		/**
		 * The token of the next Source Networks to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface DescribeSourceNetworksPostBodyFormProperties {

		/**
		 * Maximum number of Source Networks to retrieve.
		 * Minimum: 1
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token of the next Source Networks to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSourceNetworksPostBodyFormGroup() {
		return new FormGroup<DescribeSourceNetworksPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeSourceNetworksPostBodyFilters {
		originAccountID?: string;
		originRegion?: string;
		sourceNetworkIDs?: Array<string>;
	}
	export interface DescribeSourceNetworksPostBodyFiltersFormProperties {
		originAccountID: FormControl<string | null | undefined>,
		originRegion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSourceNetworksPostBodyFiltersFormGroup() {
		return new FormGroup<DescribeSourceNetworksPostBodyFiltersFormProperties>({
			originAccountID: new FormControl<string | null | undefined>(undefined),
			originRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSourceServersPostBody {

		/** A set of filters by which to return Source Servers. */
		filters?: DescribeSourceServersPostBodyFilters;

		/**
		 * Maximum number of Source Servers to retrieve.
		 * Minimum: 1
		 */
		maxResults?: number | null;

		/**
		 * The token of the next Source Server to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface DescribeSourceServersPostBodyFormProperties {

		/**
		 * Maximum number of Source Servers to retrieve.
		 * Minimum: 1
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token of the next Source Server to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSourceServersPostBodyFormGroup() {
		return new FormGroup<DescribeSourceServersPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeSourceServersPostBodyFilters {
		hardwareId?: string;
		sourceServerIDs?: Array<string>;
		stagingAccountIDs?: Array<string>;
	}
	export interface DescribeSourceServersPostBodyFiltersFormProperties {
		hardwareId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSourceServersPostBodyFiltersFormGroup() {
		return new FormGroup<DescribeSourceServersPostBodyFiltersFormProperties>({
			hardwareId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisconnectRecoveryInstancePostBody {

		/**
		 * The ID of the Recovery Instance to disconnect.
		 * Required
		 * Max length: 19
		 * Min length: 10
		 */
		recoveryInstanceID: string;
	}
	export interface DisconnectRecoveryInstancePostBodyFormProperties {

		/**
		 * The ID of the Recovery Instance to disconnect.
		 * Required
		 * Max length: 19
		 * Min length: 10
		 */
		recoveryInstanceID: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectRecoveryInstancePostBodyFormGroup() {
		return new FormGroup<DisconnectRecoveryInstancePostBodyFormProperties>({
			recoveryInstanceID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(19), Validators.pattern('^i-[0-9a-fA-F]{8,}$')]),
		});

	}

	export interface DisconnectSourceServerPostBody {

		/**
		 * The ID of the Source Server to disconnect.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface DisconnectSourceServerPostBodyFormProperties {

		/**
		 * The ID of the Source Server to disconnect.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectSourceServerPostBodyFormGroup() {
		return new FormGroup<DisconnectSourceServerPostBodyFormProperties>({
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface ExportSourceNetworkCfnTemplatePostBody {

		/**
		 * The Source Network ID to export its CloudFormation template to an S3 bucket.
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		sourceNetworkID: string;
	}
	export interface ExportSourceNetworkCfnTemplatePostBodyFormProperties {

		/**
		 * The Source Network ID to export its CloudFormation template to an S3 bucket.
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		sourceNetworkID: FormControl<string | null | undefined>,
	}
	export function CreateExportSourceNetworkCfnTemplatePostBodyFormGroup() {
		return new FormGroup<ExportSourceNetworkCfnTemplatePostBodyFormProperties>({
			sourceNetworkID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^sn-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface GetFailbackReplicationConfigurationPostBody {

		/**
		 * The ID of the Recovery Instance whose failback replication configuration should be returned.
		 * Required
		 * Max length: 19
		 * Min length: 10
		 */
		recoveryInstanceID: string;
	}
	export interface GetFailbackReplicationConfigurationPostBodyFormProperties {

		/**
		 * The ID of the Recovery Instance whose failback replication configuration should be returned.
		 * Required
		 * Max length: 19
		 * Min length: 10
		 */
		recoveryInstanceID: FormControl<string | null | undefined>,
	}
	export function CreateGetFailbackReplicationConfigurationPostBodyFormGroup() {
		return new FormGroup<GetFailbackReplicationConfigurationPostBodyFormProperties>({
			recoveryInstanceID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(19), Validators.pattern('^i-[0-9a-fA-F]{8,}$')]),
		});

	}

	export interface GetLaunchConfigurationPostBody {

		/**
		 * The ID of the Source Server that we want to retrieve a Launch Configuration for.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface GetLaunchConfigurationPostBodyFormProperties {

		/**
		 * The ID of the Source Server that we want to retrieve a Launch Configuration for.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateGetLaunchConfigurationPostBodyFormGroup() {
		return new FormGroup<GetLaunchConfigurationPostBodyFormProperties>({
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface GetReplicationConfigurationPostBody {

		/**
		 * The ID of the Source Serve for this Replication Configuration.r
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface GetReplicationConfigurationPostBodyFormProperties {

		/**
		 * The ID of the Source Serve for this Replication Configuration.r
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateGetReplicationConfigurationPostBodyFormGroup() {
		return new FormGroup<GetReplicationConfigurationPostBodyFormProperties>({
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface ListExtensibleSourceServersPostBody {

		/**
		 * The maximum number of extensible source servers to retrieve.
		 * Minimum: 1
		 * Maximum: 300
		 */
		maxResults?: number | null;

		/**
		 * The token of the next extensible source server to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;

		/**
		 * The Id of the staging Account to retrieve extensible source servers from.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		stagingAccountID: string;
	}
	export interface ListExtensibleSourceServersPostBodyFormProperties {

		/**
		 * The maximum number of extensible source servers to retrieve.
		 * Minimum: 1
		 * Maximum: 300
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token of the next extensible source server to retrieve.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The Id of the staging Account to retrieve extensible source servers from.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		stagingAccountID: FormControl<string | null | undefined>,
	}
	export function CreateListExtensibleSourceServersPostBodyFormGroup() {
		return new FormGroup<ListExtensibleSourceServersPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(300)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			stagingAccountID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Array of tags to be added or updated.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Array of tags to be added or updated.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RetryDataReplicationPostBody {

		/**
		 * The ID of the Source Server whose data replication should be retried.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface RetryDataReplicationPostBodyFormProperties {

		/**
		 * The ID of the Source Server whose data replication should be retried.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateRetryDataReplicationPostBodyFormGroup() {
		return new FormGroup<RetryDataReplicationPostBodyFormProperties>({
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface ReverseReplicationPostBody {

		/**
		 * The ID of the Recovery Instance that we want to reverse the replication for.
		 * Required
		 * Max length: 19
		 * Min length: 10
		 */
		recoveryInstanceID: string;
	}
	export interface ReverseReplicationPostBodyFormProperties {

		/**
		 * The ID of the Recovery Instance that we want to reverse the replication for.
		 * Required
		 * Max length: 19
		 * Min length: 10
		 */
		recoveryInstanceID: FormControl<string | null | undefined>,
	}
	export function CreateReverseReplicationPostBodyFormGroup() {
		return new FormGroup<ReverseReplicationPostBodyFormProperties>({
			recoveryInstanceID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(19), Validators.pattern('^i-[0-9a-fA-F]{8,}$')]),
		});

	}

	export interface StartFailbackLaunchPostBody {

		/**
		 * The IDs of the Recovery Instance whose failback launch we want to request.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		recoveryInstanceIDs: Array<string>;

		/** The tags to be associated with the failback launch Job. */
		tags?: {[id: string]: string };
	}
	export interface StartFailbackLaunchPostBodyFormProperties {

		/** The tags to be associated with the failback launch Job. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartFailbackLaunchPostBodyFormGroup() {
		return new FormGroup<StartFailbackLaunchPostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartRecoveryPostBody {

		/** Whether this Source Server Recovery operation is a drill or not. */
		isDrill?: boolean | null;

		/**
		 * The Source Servers that we want to start a Recovery Job for.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		sourceServers: Array<StartRecoveryRequestSourceServer>;

		/** The tags to be associated with the Recovery Job. */
		tags?: {[id: string]: string };
	}
	export interface StartRecoveryPostBodyFormProperties {

		/** Whether this Source Server Recovery operation is a drill or not. */
		isDrill: FormControl<boolean | null | undefined>,

		/** The tags to be associated with the Recovery Job. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartRecoveryPostBodyFormGroup() {
		return new FormGroup<StartRecoveryPostBodyFormProperties>({
			isDrill: new FormControl<boolean | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartReplicationPostBody {

		/**
		 * The ID of the Source Server to start replication for.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface StartReplicationPostBodyFormProperties {

		/**
		 * The ID of the Source Server to start replication for.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateStartReplicationPostBodyFormGroup() {
		return new FormGroup<StartReplicationPostBodyFormProperties>({
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface StartSourceNetworkRecoveryPostBody {

		/** Don't update existing CloudFormation Stack, recover the network using a new stack. */
		deployAsNew?: boolean | null;

		/**
		 * The Source Networks that we want to start a Recovery Job for.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		sourceNetworks: Array<StartSourceNetworkRecoveryRequestNetworkEntry>;

		/** The tags to be associated with the Source Network recovery Job. */
		tags?: {[id: string]: string };
	}
	export interface StartSourceNetworkRecoveryPostBodyFormProperties {

		/** Don't update existing CloudFormation Stack, recover the network using a new stack. */
		deployAsNew: FormControl<boolean | null | undefined>,

		/** The tags to be associated with the Source Network recovery Job. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartSourceNetworkRecoveryPostBodyFormGroup() {
		return new FormGroup<StartSourceNetworkRecoveryPostBodyFormProperties>({
			deployAsNew: new FormControl<boolean | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartSourceNetworkReplicationPostBody {

		/**
		 * ID of the Source Network to replicate.
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		sourceNetworkID: string;
	}
	export interface StartSourceNetworkReplicationPostBodyFormProperties {

		/**
		 * ID of the Source Network to replicate.
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		sourceNetworkID: FormControl<string | null | undefined>,
	}
	export function CreateStartSourceNetworkReplicationPostBodyFormGroup() {
		return new FormGroup<StartSourceNetworkReplicationPostBodyFormProperties>({
			sourceNetworkID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^sn-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface StopFailbackPostBody {

		/**
		 * The ID of the Recovery Instance we want to stop failback for.
		 * Required
		 * Max length: 19
		 * Min length: 10
		 */
		recoveryInstanceID: string;
	}
	export interface StopFailbackPostBodyFormProperties {

		/**
		 * The ID of the Recovery Instance we want to stop failback for.
		 * Required
		 * Max length: 19
		 * Min length: 10
		 */
		recoveryInstanceID: FormControl<string | null | undefined>,
	}
	export function CreateStopFailbackPostBodyFormGroup() {
		return new FormGroup<StopFailbackPostBodyFormProperties>({
			recoveryInstanceID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(19), Validators.pattern('^i-[0-9a-fA-F]{8,}$')]),
		});

	}

	export interface StopReplicationPostBody {

		/**
		 * The ID of the Source Server to stop replication for.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface StopReplicationPostBodyFormProperties {

		/**
		 * The ID of the Source Server to stop replication for.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateStopReplicationPostBodyFormGroup() {
		return new FormGroup<StopReplicationPostBodyFormProperties>({
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface StopSourceNetworkReplicationPostBody {

		/**
		 * ID of the Source Network to stop replication.
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		sourceNetworkID: string;
	}
	export interface StopSourceNetworkReplicationPostBodyFormProperties {

		/**
		 * ID of the Source Network to stop replication.
		 * Required
		 * Max length: 20
		 * Min length: 20
		 */
		sourceNetworkID: FormControl<string | null | undefined>,
	}
	export function CreateStopSourceNetworkReplicationPostBodyFormGroup() {
		return new FormGroup<StopSourceNetworkReplicationPostBodyFormProperties>({
			sourceNetworkID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('^sn-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface TerminateRecoveryInstancesPostBody {

		/**
		 * The IDs of the Recovery Instances that should be terminated.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		recoveryInstanceIDs: Array<string>;
	}
	export interface TerminateRecoveryInstancesPostBodyFormProperties {
	}
	export function CreateTerminateRecoveryInstancesPostBodyFormGroup() {
		return new FormGroup<TerminateRecoveryInstancesPostBodyFormProperties>({
		});

	}

	export interface UpdateFailbackReplicationConfigurationPostBody {

		/**
		 * Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.
		 * Minimum: 0
		 */
		bandwidthThrottling?: number | null;

		/**
		 * The name of the Failback Replication Configuration.
		 * Max length: 256
		 * Min length: 0
		 */
		name?: string | null;

		/**
		 * The ID of the Recovery Instance.
		 * Required
		 * Max length: 19
		 * Min length: 10
		 */
		recoveryInstanceID: string;

		/** Whether to use Private IP for the failback replication of the Recovery Instance. */
		usePrivateIP?: boolean | null;
	}
	export interface UpdateFailbackReplicationConfigurationPostBodyFormProperties {

		/**
		 * Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.
		 * Minimum: 0
		 */
		bandwidthThrottling: FormControl<number | null | undefined>,

		/**
		 * The name of the Failback Replication Configuration.
		 * Max length: 256
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The ID of the Recovery Instance.
		 * Required
		 * Max length: 19
		 * Min length: 10
		 */
		recoveryInstanceID: FormControl<string | null | undefined>,

		/** Whether to use Private IP for the failback replication of the Recovery Instance. */
		usePrivateIP: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateFailbackReplicationConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateFailbackReplicationConfigurationPostBodyFormProperties>({
			bandwidthThrottling: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			recoveryInstanceID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(19), Validators.pattern('^i-[0-9a-fA-F]{8,}$')]),
			usePrivateIP: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateLaunchConfigurationPostBody {

		/** Whether we should copy the Private IP of the Source Server to the Recovery Instance. */
		copyPrivateIp?: boolean | null;

		/** Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance. */
		copyTags?: boolean | null;

		/** The state of the Recovery Instance in EC2 after the recovery operation. */
		launchDisposition?: LaunchDisposition | null;

		/** Configuration of a machine's license. */
		licensing?: UpdateLaunchConfigurationPostBodyLicensing;

		/**
		 * The name of the launch configuration.
		 * Max length: 128
		 * Min length: 0
		 */
		name?: string | null;

		/**
		 * The ID of the Source Server that we want to retrieve a Launch Configuration for.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;

		/** Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server. */
		targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | null;
	}
	export interface UpdateLaunchConfigurationPostBodyFormProperties {

		/** Whether we should copy the Private IP of the Source Server to the Recovery Instance. */
		copyPrivateIp: FormControl<boolean | null | undefined>,

		/** Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance. */
		copyTags: FormControl<boolean | null | undefined>,

		/** The state of the Recovery Instance in EC2 after the recovery operation. */
		launchDisposition: FormControl<LaunchDisposition | null | undefined>,

		/**
		 * The name of the launch configuration.
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The ID of the Source Server that we want to retrieve a Launch Configuration for.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,

		/** Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server. */
		targetInstanceTypeRightSizingMethod: FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>,
	}
	export function CreateUpdateLaunchConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateLaunchConfigurationPostBodyFormProperties>({
			copyPrivateIp: new FormControl<boolean | null | undefined>(undefined),
			copyTags: new FormControl<boolean | null | undefined>(undefined),
			launchDisposition: new FormControl<LaunchDisposition | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
			targetInstanceTypeRightSizingMethod: new FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>(undefined),
		});

	}

	export interface UpdateLaunchConfigurationPostBodyLicensing {
		osByol?: boolean | null;
	}
	export interface UpdateLaunchConfigurationPostBodyLicensingFormProperties {
		osByol: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateLaunchConfigurationPostBodyLicensingFormGroup() {
		return new FormGroup<UpdateLaunchConfigurationPostBodyLicensingFormProperties>({
			osByol: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateLaunchConfigurationTemplatePostBody {

		/** Copy private IP. */
		copyPrivateIp?: boolean | null;

		/** Copy tags. */
		copyTags?: boolean | null;

		/**
		 * S3 bucket ARN to export Source Network templates.
		 * Max length: 2048
		 * Min length: 20
		 */
		exportBucketArn?: string | null;

		/**
		 * Launch Configuration Template ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		launchConfigurationTemplateID: string;

		/** Launch disposition. */
		launchDisposition?: LaunchDisposition | null;

		/** Configuration of a machine's license. */
		licensing?: UpdateLaunchConfigurationTemplatePostBodyLicensing;

		/** Target instance type right-sizing method. */
		targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | null;
	}
	export interface UpdateLaunchConfigurationTemplatePostBodyFormProperties {

		/** Copy private IP. */
		copyPrivateIp: FormControl<boolean | null | undefined>,

		/** Copy tags. */
		copyTags: FormControl<boolean | null | undefined>,

		/**
		 * S3 bucket ARN to export Source Network templates.
		 * Max length: 2048
		 * Min length: 20
		 */
		exportBucketArn: FormControl<string | null | undefined>,

		/**
		 * Launch Configuration Template ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		launchConfigurationTemplateID: FormControl<string | null | undefined>,

		/** Launch disposition. */
		launchDisposition: FormControl<LaunchDisposition | null | undefined>,

		/** Target instance type right-sizing method. */
		targetInstanceTypeRightSizingMethod: FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>,
	}
	export function CreateUpdateLaunchConfigurationTemplatePostBodyFormGroup() {
		return new FormGroup<UpdateLaunchConfigurationTemplatePostBodyFormProperties>({
			copyPrivateIp: new FormControl<boolean | null | undefined>(undefined),
			copyTags: new FormControl<boolean | null | undefined>(undefined),
			exportBucketArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:.{16,2044}$')]),
			launchConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^lct-[0-9a-zA-Z]{17}$')]),
			launchDisposition: new FormControl<LaunchDisposition | null | undefined>(undefined),
			targetInstanceTypeRightSizingMethod: new FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>(undefined),
		});

	}

	export interface UpdateLaunchConfigurationTemplatePostBodyLicensing {
		osByol?: boolean | null;
	}
	export interface UpdateLaunchConfigurationTemplatePostBodyLicensingFormProperties {
		osByol: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateLaunchConfigurationTemplatePostBodyLicensingFormGroup() {
		return new FormGroup<UpdateLaunchConfigurationTemplatePostBodyLicensingFormProperties>({
			osByol: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateReplicationConfigurationPostBody {

		/** Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration. */
		associateDefaultSecurityGroup?: boolean | null;

		/** Whether to allow the AWS replication agent to automatically replicate newly added disks. */
		autoReplicateNewDisks?: boolean | null;

		/**
		 * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
		 * Minimum: 0
		 */
		bandwidthThrottling?: number | null;

		/** Whether to create a Public IP for the Recovery Instance by default. */
		createPublicIP?: boolean | null;

		/** The data plane routing mechanism that will be used for replication. */
		dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | null;

		/** The Staging Disk EBS volume type to be used during replication. */
		defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | null;

		/** The type of EBS encryption to be used during replication. */
		ebsEncryption?: ReplicationConfigurationEbsEncryption | null;

		/**
		 * The ARN of the EBS encryption key to be used during replication.
		 * Max length: 2048
		 * Min length: 20
		 */
		ebsEncryptionKeyArn?: string | null;

		/**
		 * The name of the Replication Configuration.
		 * Max length: 128
		 * Min length: 0
		 */
		name?: string | null;

		/**
		 * The Point in time (PIT) policy to manage snapshots taken during replication.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		pitPolicy?: Array<PITPolicyRule>;

		/**
		 * The configuration of the disks of the Source Server to be replicated.
		 * Minimum items: 0
		 * Maximum items: 60
		 */
		replicatedDisks?: Array<ReplicationConfigurationReplicatedDisk>;

		/**
		 * The instance type to be used for the replication server.
		 * Max length: 255
		 * Min length: 0
		 */
		replicationServerInstanceType?: string | null;

		/**
		 * The security group IDs that will be used by the replication server.
		 * Minimum items: 0
		 * Maximum items: 32
		 */
		replicationServersSecurityGroupsIDs?: Array<string>;

		/**
		 * The ID of the Source Server for this Replication Configuration.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;

		/**
		 * The subnet to be used by the replication staging area.
		 * Max length: 255
		 * Min length: 0
		 */
		stagingAreaSubnetId?: string | null;

		/** A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc. */
		stagingAreaTags?: {[id: string]: string };

		/** Whether to use a dedicated Replication Server in the replication staging area. */
		useDedicatedReplicationServer?: boolean | null;
	}
	export interface UpdateReplicationConfigurationPostBodyFormProperties {

		/** Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration. */
		associateDefaultSecurityGroup: FormControl<boolean | null | undefined>,

		/** Whether to allow the AWS replication agent to automatically replicate newly added disks. */
		autoReplicateNewDisks: FormControl<boolean | null | undefined>,

		/**
		 * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
		 * Minimum: 0
		 */
		bandwidthThrottling: FormControl<number | null | undefined>,

		/** Whether to create a Public IP for the Recovery Instance by default. */
		createPublicIP: FormControl<boolean | null | undefined>,

		/** The data plane routing mechanism that will be used for replication. */
		dataPlaneRouting: FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>,

		/** The Staging Disk EBS volume type to be used during replication. */
		defaultLargeStagingDiskType: FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>,

		/** The type of EBS encryption to be used during replication. */
		ebsEncryption: FormControl<ReplicationConfigurationEbsEncryption | null | undefined>,

		/**
		 * The ARN of the EBS encryption key to be used during replication.
		 * Max length: 2048
		 * Min length: 20
		 */
		ebsEncryptionKeyArn: FormControl<string | null | undefined>,

		/**
		 * The name of the Replication Configuration.
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The instance type to be used for the replication server.
		 * Max length: 255
		 * Min length: 0
		 */
		replicationServerInstanceType: FormControl<string | null | undefined>,

		/**
		 * The ID of the Source Server for this Replication Configuration.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,

		/**
		 * The subnet to be used by the replication staging area.
		 * Max length: 255
		 * Min length: 0
		 */
		stagingAreaSubnetId: FormControl<string | null | undefined>,

		/** A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc. */
		stagingAreaTags: FormControl<{[id: string]: string } | null | undefined>,

		/** Whether to use a dedicated Replication Server in the replication staging area. */
		useDedicatedReplicationServer: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateReplicationConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateReplicationConfigurationPostBodyFormProperties>({
			associateDefaultSecurityGroup: new FormControl<boolean | null | undefined>(undefined),
			autoReplicateNewDisks: new FormControl<boolean | null | undefined>(undefined),
			bandwidthThrottling: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			createPublicIP: new FormControl<boolean | null | undefined>(undefined),
			dataPlaneRouting: new FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>(undefined),
			defaultLargeStagingDiskType: new FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>(undefined),
			ebsEncryption: new FormControl<ReplicationConfigurationEbsEncryption | null | undefined>(undefined),
			ebsEncryptionKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:.{16,2044}$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			replicationServerInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
			stagingAreaSubnetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('^subnet-[0-9a-fA-F]{8,}$')]),
			stagingAreaTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			useDedicatedReplicationServer: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateReplicationConfigurationTemplatePostBody {

		/**
		 * The Replication Configuration Template ARN.
		 * Max length: 2048
		 * Min length: 20
		 */
		arn?: string | null;

		/** Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template. */
		associateDefaultSecurityGroup?: boolean | null;

		/** Whether to allow the AWS replication agent to automatically replicate newly added disks. */
		autoReplicateNewDisks?: boolean | null;

		/**
		 * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
		 * Minimum: 0
		 */
		bandwidthThrottling?: number | null;

		/** Whether to create a Public IP for the Recovery Instance by default. */
		createPublicIP?: boolean | null;

		/** The data plane routing mechanism that will be used for replication. */
		dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | null;

		/** The Staging Disk EBS volume type to be used during replication. */
		defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | null;

		/** The type of EBS encryption to be used during replication. */
		ebsEncryption?: ReplicationConfigurationEbsEncryption | null;

		/**
		 * The ARN of the EBS encryption key to be used during replication.
		 * Max length: 2048
		 * Min length: 20
		 */
		ebsEncryptionKeyArn?: string | null;

		/**
		 * The Point in time (PIT) policy to manage snapshots taken during replication.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		pitPolicy?: Array<PITPolicyRule>;

		/**
		 * The Replication Configuration Template ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		replicationConfigurationTemplateID: string;

		/**
		 * The instance type to be used for the replication server.
		 * Max length: 255
		 * Min length: 0
		 */
		replicationServerInstanceType?: string | null;

		/**
		 * The security group IDs that will be used by the replication server.
		 * Minimum items: 0
		 * Maximum items: 32
		 */
		replicationServersSecurityGroupsIDs?: Array<string>;

		/**
		 * The subnet to be used by the replication staging area.
		 * Max length: 255
		 * Min length: 0
		 */
		stagingAreaSubnetId?: string | null;

		/** A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc. */
		stagingAreaTags?: {[id: string]: string };

		/** Whether to use a dedicated Replication Server in the replication staging area. */
		useDedicatedReplicationServer?: boolean | null;
	}
	export interface UpdateReplicationConfigurationTemplatePostBodyFormProperties {

		/**
		 * The Replication Configuration Template ARN.
		 * Max length: 2048
		 * Min length: 20
		 */
		arn: FormControl<string | null | undefined>,

		/** Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template. */
		associateDefaultSecurityGroup: FormControl<boolean | null | undefined>,

		/** Whether to allow the AWS replication agent to automatically replicate newly added disks. */
		autoReplicateNewDisks: FormControl<boolean | null | undefined>,

		/**
		 * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
		 * Minimum: 0
		 */
		bandwidthThrottling: FormControl<number | null | undefined>,

		/** Whether to create a Public IP for the Recovery Instance by default. */
		createPublicIP: FormControl<boolean | null | undefined>,

		/** The data plane routing mechanism that will be used for replication. */
		dataPlaneRouting: FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>,

		/** The Staging Disk EBS volume type to be used during replication. */
		defaultLargeStagingDiskType: FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>,

		/** The type of EBS encryption to be used during replication. */
		ebsEncryption: FormControl<ReplicationConfigurationEbsEncryption | null | undefined>,

		/**
		 * The ARN of the EBS encryption key to be used during replication.
		 * Max length: 2048
		 * Min length: 20
		 */
		ebsEncryptionKeyArn: FormControl<string | null | undefined>,

		/**
		 * The Replication Configuration Template ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		replicationConfigurationTemplateID: FormControl<string | null | undefined>,

		/**
		 * The instance type to be used for the replication server.
		 * Max length: 255
		 * Min length: 0
		 */
		replicationServerInstanceType: FormControl<string | null | undefined>,

		/**
		 * The subnet to be used by the replication staging area.
		 * Max length: 255
		 * Min length: 0
		 */
		stagingAreaSubnetId: FormControl<string | null | undefined>,

		/** A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc. */
		stagingAreaTags: FormControl<{[id: string]: string } | null | undefined>,

		/** Whether to use a dedicated Replication Server in the replication staging area. */
		useDedicatedReplicationServer: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateReplicationConfigurationTemplatePostBodyFormGroup() {
		return new FormGroup<UpdateReplicationConfigurationTemplatePostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:.{16,2044}$')]),
			associateDefaultSecurityGroup: new FormControl<boolean | null | undefined>(undefined),
			autoReplicateNewDisks: new FormControl<boolean | null | undefined>(undefined),
			bandwidthThrottling: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			createPublicIP: new FormControl<boolean | null | undefined>(undefined),
			dataPlaneRouting: new FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>(undefined),
			defaultLargeStagingDiskType: new FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>(undefined),
			ebsEncryption: new FormControl<ReplicationConfigurationEbsEncryption | null | undefined>(undefined),
			ebsEncryptionKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:.{16,2044}$')]),
			replicationConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^rct-[0-9a-zA-Z]{17}$')]),
			replicationServerInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			stagingAreaSubnetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('^subnet-[0-9a-fA-F]{8,}$')]),
			stagingAreaTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			useDedicatedReplicationServer: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

