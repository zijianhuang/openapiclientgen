import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Application {
		applicationAggregatedStatus?: ApplicationAggregatedStatus;
		applicationID?: string;
		arn?: string;
		creationDateTime?: string;
		description?: string;
		isArchived?: boolean | null;
		lastModifiedDateTime?: string;
		name?: string;
		tags?: TagsMap;
		waveID?: string;
	}
	export interface ApplicationFormProperties {
		applicationID: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		isArchived: FormControl<boolean | null | undefined>,
		lastModifiedDateTime: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		waveID: FormControl<string | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			applicationID: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			isArchived: new FormControl<boolean | null | undefined>(undefined),
			lastModifiedDateTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			waveID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Application aggregated status. */
	export interface ApplicationAggregatedStatus {
		healthStatus?: ApplicationHealthStatus;
		lastUpdateDateTime?: string;
		progressStatus?: ApplicationProgressStatus;
		totalSourceServers?: number | null;
	}

	/** Application aggregated status. */
	export interface ApplicationAggregatedStatusFormProperties {
		healthStatus: FormControl<ApplicationHealthStatus | null | undefined>,
		lastUpdateDateTime: FormControl<string | null | undefined>,
		progressStatus: FormControl<ApplicationProgressStatus | null | undefined>,
		totalSourceServers: FormControl<number | null | undefined>,
	}
	export function CreateApplicationAggregatedStatusFormGroup() {
		return new FormGroup<ApplicationAggregatedStatusFormProperties>({
			healthStatus: new FormControl<ApplicationHealthStatus | null | undefined>(undefined),
			lastUpdateDateTime: new FormControl<string | null | undefined>(undefined),
			progressStatus: new FormControl<ApplicationProgressStatus | null | undefined>(undefined),
			totalSourceServers: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ApplicationHealthStatus { HEALTHY = 0, LAGGING = 1, ERROR = 2 }

	export enum ApplicationProgressStatus { NOT_STARTED = 0, IN_PROGRESS = 1, COMPLETED = 2 }

	export interface TagsMap {
	}
	export interface TagsMapFormProperties {
	}
	export function CreateTagsMapFormGroup() {
		return new FormGroup<TagsMapFormProperties>({
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface Wave {
		arn?: string;
		creationDateTime?: string;
		description?: string;
		isArchived?: boolean | null;
		lastModifiedDateTime?: string;
		name?: string;
		tags?: TagsMap;
		waveAggregatedStatus?: WaveAggregatedStatus;
		waveID?: string;
	}
	export interface WaveFormProperties {
		arn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		isArchived: FormControl<boolean | null | undefined>,
		lastModifiedDateTime: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		waveID: FormControl<string | null | undefined>,
	}
	export function CreateWaveFormGroup() {
		return new FormGroup<WaveFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			isArchived: new FormControl<boolean | null | undefined>(undefined),
			lastModifiedDateTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			waveID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Wave aggregated status. */
	export interface WaveAggregatedStatus {
		healthStatus?: ApplicationHealthStatus;
		lastUpdateDateTime?: string;
		progressStatus?: ApplicationProgressStatus;
		replicationStartedDateTime?: string;
		totalApplications?: number | null;
	}

	/** Wave aggregated status. */
	export interface WaveAggregatedStatusFormProperties {
		healthStatus: FormControl<ApplicationHealthStatus | null | undefined>,
		lastUpdateDateTime: FormControl<string | null | undefined>,
		progressStatus: FormControl<ApplicationProgressStatus | null | undefined>,
		replicationStartedDateTime: FormControl<string | null | undefined>,
		totalApplications: FormControl<number | null | undefined>,
	}
	export function CreateWaveAggregatedStatusFormGroup() {
		return new FormGroup<WaveAggregatedStatusFormProperties>({
			healthStatus: new FormControl<ApplicationHealthStatus | null | undefined>(undefined),
			lastUpdateDateTime: new FormControl<string | null | undefined>(undefined),
			progressStatus: new FormControl<ApplicationProgressStatus | null | undefined>(undefined),
			replicationStartedDateTime: new FormControl<string | null | undefined>(undefined),
			totalApplications: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AssociateApplicationsResponse {
	}
	export interface AssociateApplicationsResponseFormProperties {
	}
	export function CreateAssociateApplicationsResponseFormGroup() {
		return new FormGroup<AssociateApplicationsResponseFormProperties>({
		});

	}

	export interface AssociateSourceServersResponse {
	}
	export interface AssociateSourceServersResponseFormProperties {
	}
	export function CreateAssociateSourceServersResponseFormGroup() {
		return new FormGroup<AssociateSourceServersResponseFormProperties>({
		});

	}

	export interface SourceServer {
		applicationID?: string;
		arn?: string;
		dataReplicationInfo?: DataReplicationInfo;
		fqdnForActionFramework?: string;
		isArchived?: boolean | null;
		launchedInstance?: LaunchedInstance;
		lifeCycle?: LifeCycle;
		replicationType?: ReplicationType;
		sourceProperties?: SourceProperties;
		sourceServerID?: string;
		tags?: TagsMap;
		userProvidedID?: string;
		vcenterClientID?: string;
	}
	export interface SourceServerFormProperties {
		applicationID: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		fqdnForActionFramework: FormControl<string | null | undefined>,
		isArchived: FormControl<boolean | null | undefined>,
		replicationType: FormControl<ReplicationType | null | undefined>,
		sourceServerID: FormControl<string | null | undefined>,
		userProvidedID: FormControl<string | null | undefined>,
		vcenterClientID: FormControl<string | null | undefined>,
	}
	export function CreateSourceServerFormGroup() {
		return new FormGroup<SourceServerFormProperties>({
			applicationID: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			fqdnForActionFramework: new FormControl<string | null | undefined>(undefined),
			isArchived: new FormControl<boolean | null | undefined>(undefined),
			replicationType: new FormControl<ReplicationType | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined),
			userProvidedID: new FormControl<string | null | undefined>(undefined),
			vcenterClientID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request data replication info. */
	export interface DataReplicationInfo {
		dataReplicationError?: DataReplicationError;
		dataReplicationInitiation?: DataReplicationInitiation;
		dataReplicationState?: DataReplicationState;
		etaDateTime?: string;
		lagDuration?: string;
		lastSnapshotDateTime?: string;
		replicatedDisks?: Array<DataReplicationInfoReplicatedDisk>;
	}

	/** Request data replication info. */
	export interface DataReplicationInfoFormProperties {
		dataReplicationState: FormControl<DataReplicationState | null | undefined>,
		etaDateTime: FormControl<string | null | undefined>,
		lagDuration: FormControl<string | null | undefined>,
		lastSnapshotDateTime: FormControl<string | null | undefined>,
	}
	export function CreateDataReplicationInfoFormGroup() {
		return new FormGroup<DataReplicationInfoFormProperties>({
			dataReplicationState: new FormControl<DataReplicationState | null | undefined>(undefined),
			etaDateTime: new FormControl<string | null | undefined>(undefined),
			lagDuration: new FormControl<string | null | undefined>(undefined),
			lastSnapshotDateTime: new FormControl<string | null | undefined>(undefined),
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

	export enum DataReplicationErrorString { AGENT_NOT_SEEN = 0, SNAPSHOTS_FAILURE = 1, NOT_CONVERGING = 2, UNSTABLE_NETWORK = 3, FAILED_TO_CREATE_SECURITY_GROUP = 4, FAILED_TO_LAUNCH_REPLICATION_SERVER = 5, FAILED_TO_BOOT_REPLICATION_SERVER = 6, FAILED_TO_AUTHENTICATE_WITH_SERVICE = 7, FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE = 8, FAILED_TO_CREATE_STAGING_DISKS = 9, FAILED_TO_ATTACH_STAGING_DISKS = 10, FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT = 11, FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER = 12, FAILED_TO_START_DATA_TRANSFER = 13, UNSUPPORTED_VM_CONFIGURATION = 14, LAST_SNAPSHOT_JOB_FAILED = 15 }


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

	export enum DataReplicationState { STOPPED = 0, INITIATING = 1, INITIAL_SYNC = 2, BACKLOG = 3, CREATING_SNAPSHOT = 4, CONTINUOUS = 5, PAUSED = 6, RESCAN = 7, STALLED = 8, DISCONNECTED = 9, PENDING_SNAPSHOT_SHIPPING = 10, SHIPPING_SNAPSHOT = 11 }


	/** Request to query disks replicated. */
	export interface DataReplicationInfoReplicatedDisk {
		backloggedStorageBytes?: number | null;
		deviceName?: string;
		replicatedStorageBytes?: number | null;
		rescannedStorageBytes?: number | null;
		totalStorageBytes?: number | null;
	}

	/** Request to query disks replicated. */
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


	/** Launched instance. */
	export interface LaunchedInstance {
		ec2InstanceID?: string;
		firstBoot?: FirstBoot;
		jobID?: string;
	}

	/** Launched instance. */
	export interface LaunchedInstanceFormProperties {
		ec2InstanceID: FormControl<string | null | undefined>,
		firstBoot: FormControl<FirstBoot | null | undefined>,
		jobID: FormControl<string | null | undefined>,
	}
	export function CreateLaunchedInstanceFormGroup() {
		return new FormGroup<LaunchedInstanceFormProperties>({
			ec2InstanceID: new FormControl<string | null | undefined>(undefined),
			firstBoot: new FormControl<FirstBoot | null | undefined>(undefined),
			jobID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FirstBoot { WAITING = 0, SUCCEEDED = 1, UNKNOWN = 2, STOPPED = 3 }


	/** Lifecycle. */
	export interface LifeCycle {
		addedToServiceDateTime?: string;
		elapsedReplicationDuration?: string;
		firstByteDateTime?: string;
		lastCutover?: LifeCycleLastCutover;
		lastSeenByServiceDateTime?: string;
		lastTest?: LifeCycleLastTest;
		state?: LifeCycleState;
	}

	/** Lifecycle. */
	export interface LifeCycleFormProperties {
		addedToServiceDateTime: FormControl<string | null | undefined>,
		elapsedReplicationDuration: FormControl<string | null | undefined>,
		firstByteDateTime: FormControl<string | null | undefined>,
		lastSeenByServiceDateTime: FormControl<string | null | undefined>,
		state: FormControl<LifeCycleState | null | undefined>,
	}
	export function CreateLifeCycleFormGroup() {
		return new FormGroup<LifeCycleFormProperties>({
			addedToServiceDateTime: new FormControl<string | null | undefined>(undefined),
			elapsedReplicationDuration: new FormControl<string | null | undefined>(undefined),
			firstByteDateTime: new FormControl<string | null | undefined>(undefined),
			lastSeenByServiceDateTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<LifeCycleState | null | undefined>(undefined),
		});

	}


	/** Lifecycle last Cutover . */
	export interface LifeCycleLastCutover {
		finalized?: LifeCycleLastCutoverFinalized;
		initiated?: LifeCycleLastCutoverInitiated;
		reverted?: LifeCycleLastCutoverReverted;
	}

	/** Lifecycle last Cutover . */
	export interface LifeCycleLastCutoverFormProperties {
	}
	export function CreateLifeCycleLastCutoverFormGroup() {
		return new FormGroup<LifeCycleLastCutoverFormProperties>({
		});

	}


	/** Lifecycle Cutover finalized */
	export interface LifeCycleLastCutoverFinalized {
		apiCallDateTime?: string;
	}

	/** Lifecycle Cutover finalized */
	export interface LifeCycleLastCutoverFinalizedFormProperties {
		apiCallDateTime: FormControl<string | null | undefined>,
	}
	export function CreateLifeCycleLastCutoverFinalizedFormGroup() {
		return new FormGroup<LifeCycleLastCutoverFinalizedFormProperties>({
			apiCallDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lifecycle last Cutover initiated. */
	export interface LifeCycleLastCutoverInitiated {
		apiCallDateTime?: string;
		jobID?: string;
	}

	/** Lifecycle last Cutover initiated. */
	export interface LifeCycleLastCutoverInitiatedFormProperties {
		apiCallDateTime: FormControl<string | null | undefined>,
		jobID: FormControl<string | null | undefined>,
	}
	export function CreateLifeCycleLastCutoverInitiatedFormGroup() {
		return new FormGroup<LifeCycleLastCutoverInitiatedFormProperties>({
			apiCallDateTime: new FormControl<string | null | undefined>(undefined),
			jobID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lifecycle last Cutover reverted. */
	export interface LifeCycleLastCutoverReverted {
		apiCallDateTime?: string;
	}

	/** Lifecycle last Cutover reverted. */
	export interface LifeCycleLastCutoverRevertedFormProperties {
		apiCallDateTime: FormControl<string | null | undefined>,
	}
	export function CreateLifeCycleLastCutoverRevertedFormGroup() {
		return new FormGroup<LifeCycleLastCutoverRevertedFormProperties>({
			apiCallDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lifecycle last Test. */
	export interface LifeCycleLastTest {
		finalized?: LifeCycleLastTestFinalized;
		initiated?: LifeCycleLastTestInitiated;
		reverted?: LifeCycleLastTestReverted;
	}

	/** Lifecycle last Test. */
	export interface LifeCycleLastTestFormProperties {
	}
	export function CreateLifeCycleLastTestFormGroup() {
		return new FormGroup<LifeCycleLastTestFormProperties>({
		});

	}


	/** Lifecycle last Test finalized. */
	export interface LifeCycleLastTestFinalized {
		apiCallDateTime?: string;
	}

	/** Lifecycle last Test finalized. */
	export interface LifeCycleLastTestFinalizedFormProperties {
		apiCallDateTime: FormControl<string | null | undefined>,
	}
	export function CreateLifeCycleLastTestFinalizedFormGroup() {
		return new FormGroup<LifeCycleLastTestFinalizedFormProperties>({
			apiCallDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lifecycle last Test initiated. */
	export interface LifeCycleLastTestInitiated {
		apiCallDateTime?: string;
		jobID?: string;
	}

	/** Lifecycle last Test initiated. */
	export interface LifeCycleLastTestInitiatedFormProperties {
		apiCallDateTime: FormControl<string | null | undefined>,
		jobID: FormControl<string | null | undefined>,
	}
	export function CreateLifeCycleLastTestInitiatedFormGroup() {
		return new FormGroup<LifeCycleLastTestInitiatedFormProperties>({
			apiCallDateTime: new FormControl<string | null | undefined>(undefined),
			jobID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lifecycle last Test reverted. */
	export interface LifeCycleLastTestReverted {
		apiCallDateTime?: string;
	}

	/** Lifecycle last Test reverted. */
	export interface LifeCycleLastTestRevertedFormProperties {
		apiCallDateTime: FormControl<string | null | undefined>,
	}
	export function CreateLifeCycleLastTestRevertedFormGroup() {
		return new FormGroup<LifeCycleLastTestRevertedFormProperties>({
			apiCallDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LifeCycleState { STOPPED = 0, NOT_READY = 1, READY_FOR_TEST = 2, TESTING = 3, READY_FOR_CUTOVER = 4, CUTTING_OVER = 5, CUTOVER = 6, DISCONNECTED = 7, DISCOVERED = 8, PENDING_INSTALLATION = 9 }

	export enum ReplicationType { AGENT_BASED = 0, SNAPSHOT_SHIPPING = 1 }


	/** Source server properties. */
	export interface SourceProperties {
		cpus?: Array<CPU>;
		disks?: Array<Disk>;
		identificationHints?: IdentificationHints;
		lastUpdatedDateTime?: string;
		networkInterfaces?: Array<NetworkInterface>;
		os?: OS;
		ramBytes?: number | null;
		recommendedInstanceType?: string;
	}

	/** Source server properties. */
	export interface SourcePropertiesFormProperties {
		lastUpdatedDateTime: FormControl<string | null | undefined>,
		ramBytes: FormControl<number | null | undefined>,
		recommendedInstanceType: FormControl<string | null | undefined>,
	}
	export function CreateSourcePropertiesFormGroup() {
		return new FormGroup<SourcePropertiesFormProperties>({
			lastUpdatedDateTime: new FormControl<string | null | undefined>(undefined),
			ramBytes: new FormControl<number | null | undefined>(undefined),
			recommendedInstanceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Source server CPU information. */
	export interface CPU {
		cores?: number | null;
		modelName?: string;
	}

	/** Source server CPU information. */
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


	/** The disk identifier. */
	export interface Disk {
		bytes?: number | null;
		deviceName?: string;
	}

	/** The disk identifier. */
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


	/** Identification hints. */
	export interface IdentificationHints {
		awsInstanceID?: string;
		fqdn?: string;
		hostname?: string;
		vmPath?: string;
		vmWareUuid?: string;
	}

	/** Identification hints. */
	export interface IdentificationHintsFormProperties {
		awsInstanceID: FormControl<string | null | undefined>,
		fqdn: FormControl<string | null | undefined>,
		hostname: FormControl<string | null | undefined>,
		vmPath: FormControl<string | null | undefined>,
		vmWareUuid: FormControl<string | null | undefined>,
	}
	export function CreateIdentificationHintsFormGroup() {
		return new FormGroup<IdentificationHintsFormProperties>({
			awsInstanceID: new FormControl<string | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			vmPath: new FormControl<string | null | undefined>(undefined),
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

	export enum ChangeServerLifeCycleStateSourceServerLifecycleState { READY_FOR_TEST = 0, READY_FOR_CUTOVER = 1, CUTOVER = 2 }

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface LaunchConfigurationTemplate {
		arn?: string;
		associatePublicIpAddress?: boolean | null;
		bootMode?: BootMode;
		copyPrivateIp?: boolean | null;
		copyTags?: boolean | null;
		ec2LaunchTemplateID?: string;
		enableMapAutoTagging?: boolean | null;
		largeVolumeConf?: LaunchTemplateDiskConf;

		/** Required */
		launchConfigurationTemplateID: string;
		launchDisposition?: LaunchDisposition;

		/** Configure Licensing. */
		licensing?: Licensing;
		mapAutoTaggingMpeID?: string;
		postLaunchActions?: PostLaunchActions;
		smallVolumeConf?: LaunchTemplateDiskConf;
		smallVolumeMaxSize?: number | null;
		tags?: TagsMap;
		targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
	}
	export interface LaunchConfigurationTemplateFormProperties {
		arn: FormControl<string | null | undefined>,
		associatePublicIpAddress: FormControl<boolean | null | undefined>,
		bootMode: FormControl<BootMode | null | undefined>,
		copyPrivateIp: FormControl<boolean | null | undefined>,
		copyTags: FormControl<boolean | null | undefined>,
		ec2LaunchTemplateID: FormControl<string | null | undefined>,
		enableMapAutoTagging: FormControl<boolean | null | undefined>,

		/** Required */
		launchConfigurationTemplateID: FormControl<string | null | undefined>,
		launchDisposition: FormControl<LaunchDisposition | null | undefined>,
		mapAutoTaggingMpeID: FormControl<string | null | undefined>,
		smallVolumeMaxSize: FormControl<number | null | undefined>,
		targetInstanceTypeRightSizingMethod: FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>,
	}
	export function CreateLaunchConfigurationTemplateFormGroup() {
		return new FormGroup<LaunchConfigurationTemplateFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			associatePublicIpAddress: new FormControl<boolean | null | undefined>(undefined),
			bootMode: new FormControl<BootMode | null | undefined>(undefined),
			copyPrivateIp: new FormControl<boolean | null | undefined>(undefined),
			copyTags: new FormControl<boolean | null | undefined>(undefined),
			ec2LaunchTemplateID: new FormControl<string | null | undefined>(undefined),
			enableMapAutoTagging: new FormControl<boolean | null | undefined>(undefined),
			launchConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			launchDisposition: new FormControl<LaunchDisposition | null | undefined>(undefined),
			mapAutoTaggingMpeID: new FormControl<string | null | undefined>(undefined),
			smallVolumeMaxSize: new FormControl<number | null | undefined>(undefined),
			targetInstanceTypeRightSizingMethod: new FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>(undefined),
		});

	}

	export enum BootMode { LEGACY_BIOS = 0, UEFI = 1 }


	/** Launch template disk configuration. */
	export interface LaunchTemplateDiskConf {
		iops?: number | null;
		throughput?: number | null;
		volumeType?: VolumeType;
	}

	/** Launch template disk configuration. */
	export interface LaunchTemplateDiskConfFormProperties {
		iops: FormControl<number | null | undefined>,
		throughput: FormControl<number | null | undefined>,
		volumeType: FormControl<VolumeType | null | undefined>,
	}
	export function CreateLaunchTemplateDiskConfFormGroup() {
		return new FormGroup<LaunchTemplateDiskConfFormProperties>({
			iops: new FormControl<number | null | undefined>(undefined),
			throughput: new FormControl<number | null | undefined>(undefined),
			volumeType: new FormControl<VolumeType | null | undefined>(undefined),
		});

	}

	export enum VolumeType { io1 = 0, io2 = 1, gp3 = 2, gp2 = 3, st1 = 4, sc1 = 5, standard = 6 }

	export enum LaunchDisposition { STOPPED = 0, STARTED = 1 }


	/** Configure Licensing. */
	export interface Licensing {
		osByol?: boolean | null;
	}

	/** Configure Licensing. */
	export interface LicensingFormProperties {
		osByol: FormControl<boolean | null | undefined>,
	}
	export function CreateLicensingFormGroup() {
		return new FormGroup<LicensingFormProperties>({
			osByol: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Post Launch Actions to executed on the Test or Cutover instance. */
	export interface PostLaunchActions {
		cloudWatchLogGroupName?: string;
		deployment?: PostLaunchActionsDeploymentType;
		s3LogBucket?: string;
		s3OutputKeyPrefix?: string;
		ssmDocuments?: Array<SsmDocument>;
	}

	/** Post Launch Actions to executed on the Test or Cutover instance. */
	export interface PostLaunchActionsFormProperties {
		cloudWatchLogGroupName: FormControl<string | null | undefined>,
		deployment: FormControl<PostLaunchActionsDeploymentType | null | undefined>,
		s3LogBucket: FormControl<string | null | undefined>,
		s3OutputKeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreatePostLaunchActionsFormGroup() {
		return new FormGroup<PostLaunchActionsFormProperties>({
			cloudWatchLogGroupName: new FormControl<string | null | undefined>(undefined),
			deployment: new FormControl<PostLaunchActionsDeploymentType | null | undefined>(undefined),
			s3LogBucket: new FormControl<string | null | undefined>(undefined),
			s3OutputKeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PostLaunchActionsDeploymentType { TEST_AND_CUTOVER = 0, CUTOVER_ONLY = 1, TEST_ONLY = 2 }


	/** AWS Systems Manager Document. */
	export interface SsmDocument {

		/** Required */
		actionName: string;
		externalParameters?: SsmDocumentExternalParameters;
		mustSucceedForCutover?: boolean | null;
		parameters?: SsmDocumentParameters;

		/** Required */
		ssmDocumentName: string;
		timeoutSeconds?: number | null;
	}

	/** AWS Systems Manager Document. */
	export interface SsmDocumentFormProperties {

		/** Required */
		actionName: FormControl<string | null | undefined>,
		mustSucceedForCutover: FormControl<boolean | null | undefined>,

		/** Required */
		ssmDocumentName: FormControl<string | null | undefined>,
		timeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateSsmDocumentFormGroup() {
		return new FormGroup<SsmDocumentFormProperties>({
			actionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mustSucceedForCutover: new FormControl<boolean | null | undefined>(undefined),
			ssmDocumentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SsmDocumentExternalParameters {
	}
	export interface SsmDocumentExternalParametersFormProperties {
	}
	export function CreateSsmDocumentExternalParametersFormGroup() {
		return new FormGroup<SsmDocumentExternalParametersFormProperties>({
		});

	}

	export interface SsmDocumentParameters {
	}
	export interface SsmDocumentParametersFormProperties {
	}
	export function CreateSsmDocumentParametersFormGroup() {
		return new FormGroup<SsmDocumentParametersFormProperties>({
		});

	}

	export enum TargetInstanceTypeRightSizingMethod { NONE = 0, BASIC = 1 }

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ReplicationConfigurationTemplate {
		arn?: string;
		associateDefaultSecurityGroup?: boolean | null;
		bandwidthThrottling?: number | null;
		createPublicIP?: boolean | null;
		dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
		defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
		ebsEncryption?: ReplicationConfigurationEbsEncryption;
		ebsEncryptionKeyArn?: string;

		/** Required */
		replicationConfigurationTemplateID: string;
		replicationServerInstanceType?: string;
		replicationServersSecurityGroupsIDs?: Array<string>;
		stagingAreaSubnetId?: string;
		stagingAreaTags?: TagsMap;
		tags?: TagsMap;
		useDedicatedReplicationServer?: boolean | null;
		useFipsEndpoint?: boolean | null;
	}
	export interface ReplicationConfigurationTemplateFormProperties {
		arn: FormControl<string | null | undefined>,
		associateDefaultSecurityGroup: FormControl<boolean | null | undefined>,
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
		useFipsEndpoint: FormControl<boolean | null | undefined>,
	}
	export function CreateReplicationConfigurationTemplateFormGroup() {
		return new FormGroup<ReplicationConfigurationTemplateFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			associateDefaultSecurityGroup: new FormControl<boolean | null | undefined>(undefined),
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
			useFipsEndpoint: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ReplicationConfigurationDataPlaneRouting { PRIVATE_IP = 0, PUBLIC_IP = 1 }

	export enum ReplicationConfigurationDefaultLargeStagingDiskType { GP2 = 0, ST1 = 1, GP3 = 2 }

	export enum ReplicationConfigurationEbsEncryption { DEFAULT = 0, CUSTOM = 1 }

	export interface DeleteApplicationResponse {
	}
	export interface DeleteApplicationResponseFormProperties {
	}
	export function CreateDeleteApplicationResponseFormGroup() {
		return new FormGroup<DeleteApplicationResponseFormProperties>({
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

	export interface DeleteSourceServerResponse {
	}
	export interface DeleteSourceServerResponseFormProperties {
	}
	export function CreateDeleteSourceServerResponseFormGroup() {
		return new FormGroup<DeleteSourceServerResponseFormProperties>({
		});

	}

	export interface DeleteWaveResponse {
	}
	export interface DeleteWaveResponseFormProperties {
	}
	export function CreateDeleteWaveResponseFormGroup() {
		return new FormGroup<DeleteWaveResponseFormProperties>({
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


	/** Job log. */
	export interface JobLog {
		event?: JobLogEvent;
		eventData?: JobLogEventData;
		logDateTime?: string;
	}

	/** Job log. */
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

	export enum JobLogEvent { JOB_START = 0, SERVER_SKIPPED = 1, CLEANUP_START = 2, CLEANUP_END = 3, CLEANUP_FAIL = 4, SNAPSHOT_START = 5, SNAPSHOT_END = 6, SNAPSHOT_FAIL = 7, USING_PREVIOUS_SNAPSHOT = 8, CONVERSION_START = 9, CONVERSION_END = 10, CONVERSION_FAIL = 11, LAUNCH_START = 12, LAUNCH_FAILED = 13, JOB_CANCEL = 14, JOB_END = 15 }


	/** Job log data */
	export interface JobLogEventData {
		conversionServerID?: string;
		rawError?: string;
		sourceServerID?: string;
		targetInstanceID?: string;
	}

	/** Job log data */
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


	/** Job. */
	export interface Job {
		arn?: string;
		creationDateTime?: string;
		endDateTime?: string;
		initiatedBy?: InitiatedBy;

		/** Required */
		jobID: string;
		participatingServers?: Array<ParticipatingServer>;
		status?: JobStatus;
		tags?: TagsMap;
		type?: JobType;
	}

	/** Job. */
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

	export enum InitiatedBy { START_TEST = 0, START_CUTOVER = 1, DIAGNOSTIC = 2, TERMINATE = 3 }


	/** Server participating in Job. */
	export interface ParticipatingServer {
		launchStatus?: LaunchStatus;
		launchedEc2InstanceID?: string;
		postLaunchActionsStatus?: PostLaunchActionsStatus;

		/** Required */
		sourceServerID: string;
	}

	/** Server participating in Job. */
	export interface ParticipatingServerFormProperties {
		launchStatus: FormControl<LaunchStatus | null | undefined>,
		launchedEc2InstanceID: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateParticipatingServerFormGroup() {
		return new FormGroup<ParticipatingServerFormProperties>({
			launchStatus: new FormControl<LaunchStatus | null | undefined>(undefined),
			launchedEc2InstanceID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LaunchStatus { PENDING = 0, IN_PROGRESS = 1, LAUNCHED = 2, FAILED = 3, TERMINATED = 4 }


	/** Status of the Post Launch Actions running on the Test or Cutover instance. */
	export interface PostLaunchActionsStatus {
		postLaunchActionsLaunchStatusList?: Array<JobPostLaunchActionsLaunchStatus>;
		ssmAgentDiscoveryDatetime?: string;
	}

	/** Status of the Post Launch Actions running on the Test or Cutover instance. */
	export interface PostLaunchActionsStatusFormProperties {
		ssmAgentDiscoveryDatetime: FormControl<string | null | undefined>,
	}
	export function CreatePostLaunchActionsStatusFormGroup() {
		return new FormGroup<PostLaunchActionsStatusFormProperties>({
			ssmAgentDiscoveryDatetime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Launch Status of the Job Post Launch Actions. */
	export interface JobPostLaunchActionsLaunchStatus {
		executionID?: string;
		executionStatus?: PostLaunchActionExecutionStatus;
		failureReason?: string;
		ssmDocument?: SsmDocument;
		ssmDocumentType?: SsmDocumentType;
	}

	/** Launch Status of the Job Post Launch Actions. */
	export interface JobPostLaunchActionsLaunchStatusFormProperties {
		executionID: FormControl<string | null | undefined>,
		executionStatus: FormControl<PostLaunchActionExecutionStatus | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		ssmDocumentType: FormControl<SsmDocumentType | null | undefined>,
	}
	export function CreateJobPostLaunchActionsLaunchStatusFormGroup() {
		return new FormGroup<JobPostLaunchActionsLaunchStatusFormProperties>({
			executionID: new FormControl<string | null | undefined>(undefined),
			executionStatus: new FormControl<PostLaunchActionExecutionStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			ssmDocumentType: new FormControl<SsmDocumentType | null | undefined>(undefined),
		});

	}

	export enum PostLaunchActionExecutionStatus { IN_PROGRESS = 0, SUCCESS = 1, FAILED = 2 }

	export enum SsmDocumentType { AUTOMATION = 0, COMMAND = 1 }

	export enum JobStatus { PENDING = 0, STARTED = 1, COMPLETED = 2 }

	export enum JobType { LAUNCH = 0, TERMINATE = 1 }

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

	export interface DescribeVcenterClientsResponse {
		items?: Array<VcenterClient>;
		nextToken?: string;
	}
	export interface DescribeVcenterClientsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeVcenterClientsResponseFormGroup() {
		return new FormGroup<DescribeVcenterClientsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** vCenter client. */
	export interface VcenterClient {
		arn?: string;
		datacenterName?: string;
		hostname?: string;
		lastSeenDatetime?: string;
		sourceServerTags?: TagsMap;
		tags?: TagsMap;
		vcenterClientID?: string;
		vcenterUUID?: string;
	}

	/** vCenter client. */
	export interface VcenterClientFormProperties {
		arn: FormControl<string | null | undefined>,
		datacenterName: FormControl<string | null | undefined>,
		hostname: FormControl<string | null | undefined>,
		lastSeenDatetime: FormControl<string | null | undefined>,
		vcenterClientID: FormControl<string | null | undefined>,
		vcenterUUID: FormControl<string | null | undefined>,
	}
	export function CreateVcenterClientFormGroup() {
		return new FormGroup<VcenterClientFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			datacenterName: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			lastSeenDatetime: new FormControl<string | null | undefined>(undefined),
			vcenterClientID: new FormControl<string | null | undefined>(undefined),
			vcenterUUID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateApplicationsResponse {
	}
	export interface DisassociateApplicationsResponseFormProperties {
	}
	export function CreateDisassociateApplicationsResponseFormGroup() {
		return new FormGroup<DisassociateApplicationsResponseFormProperties>({
		});

	}

	export interface DisassociateSourceServersResponse {
	}
	export interface DisassociateSourceServersResponseFormProperties {
	}
	export function CreateDisassociateSourceServersResponseFormGroup() {
		return new FormGroup<DisassociateSourceServersResponseFormProperties>({
		});

	}

	export interface LaunchConfiguration {
		bootMode?: BootMode;
		copyPrivateIp?: boolean | null;
		copyTags?: boolean | null;
		ec2LaunchTemplateID?: string;
		enableMapAutoTagging?: boolean | null;
		launchDisposition?: LaunchDisposition;
		licensing?: Licensing;
		mapAutoTaggingMpeID?: string;
		name?: string;

		/** Post Launch Actions to executed on the Test or Cutover instance. */
		postLaunchActions?: PostLaunchActions;
		sourceServerID?: string;
		targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
	}
	export interface LaunchConfigurationFormProperties {
		bootMode: FormControl<BootMode | null | undefined>,
		copyPrivateIp: FormControl<boolean | null | undefined>,
		copyTags: FormControl<boolean | null | undefined>,
		ec2LaunchTemplateID: FormControl<string | null | undefined>,
		enableMapAutoTagging: FormControl<boolean | null | undefined>,
		launchDisposition: FormControl<LaunchDisposition | null | undefined>,
		mapAutoTaggingMpeID: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		sourceServerID: FormControl<string | null | undefined>,
		targetInstanceTypeRightSizingMethod: FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>,
	}
	export function CreateLaunchConfigurationFormGroup() {
		return new FormGroup<LaunchConfigurationFormProperties>({
			bootMode: new FormControl<BootMode | null | undefined>(undefined),
			copyPrivateIp: new FormControl<boolean | null | undefined>(undefined),
			copyTags: new FormControl<boolean | null | undefined>(undefined),
			ec2LaunchTemplateID: new FormControl<string | null | undefined>(undefined),
			enableMapAutoTagging: new FormControl<boolean | null | undefined>(undefined),
			launchDisposition: new FormControl<LaunchDisposition | null | undefined>(undefined),
			mapAutoTaggingMpeID: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined),
			targetInstanceTypeRightSizingMethod: new FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>(undefined),
		});

	}

	export interface ReplicationConfiguration {
		associateDefaultSecurityGroup?: boolean | null;
		bandwidthThrottling?: number | null;
		createPublicIP?: boolean | null;
		dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
		defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
		ebsEncryption?: ReplicationConfigurationEbsEncryption;
		ebsEncryptionKeyArn?: string;
		name?: string;
		replicatedDisks?: Array<ReplicationConfigurationReplicatedDisk>;
		replicationServerInstanceType?: string;
		replicationServersSecurityGroupsIDs?: Array<string>;
		sourceServerID?: string;
		stagingAreaSubnetId?: string;
		stagingAreaTags?: TagsMap;
		useDedicatedReplicationServer?: boolean | null;
		useFipsEndpoint?: boolean | null;
	}
	export interface ReplicationConfigurationFormProperties {
		associateDefaultSecurityGroup: FormControl<boolean | null | undefined>,
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
		useFipsEndpoint: FormControl<boolean | null | undefined>,
	}
	export function CreateReplicationConfigurationFormGroup() {
		return new FormGroup<ReplicationConfigurationFormProperties>({
			associateDefaultSecurityGroup: new FormControl<boolean | null | undefined>(undefined),
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
			useFipsEndpoint: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Replication Configuration replicated disk. */
	export interface ReplicationConfigurationReplicatedDisk {
		deviceName?: string;
		iops?: number | null;
		isBootDisk?: boolean | null;
		stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType;
		throughput?: number | null;
	}

	/** Replication Configuration replicated disk. */
	export interface ReplicationConfigurationReplicatedDiskFormProperties {
		deviceName: FormControl<string | null | undefined>,
		iops: FormControl<number | null | undefined>,
		isBootDisk: FormControl<boolean | null | undefined>,
		stagingDiskType: FormControl<ReplicationConfigurationReplicatedDiskStagingDiskType | null | undefined>,
		throughput: FormControl<number | null | undefined>,
	}
	export function CreateReplicationConfigurationReplicatedDiskFormGroup() {
		return new FormGroup<ReplicationConfigurationReplicatedDiskFormProperties>({
			deviceName: new FormControl<string | null | undefined>(undefined),
			iops: new FormControl<number | null | undefined>(undefined),
			isBootDisk: new FormControl<boolean | null | undefined>(undefined),
			stagingDiskType: new FormControl<ReplicationConfigurationReplicatedDiskStagingDiskType | null | undefined>(undefined),
			throughput: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ReplicationConfigurationReplicatedDiskStagingDiskType { AUTO = 0, GP2 = 1, IO1 = 2, SC1 = 3, ST1 = 4, STANDARD = 5, GP3 = 6, IO2 = 7 }

	export interface InitializeServiceResponse {
	}
	export interface InitializeServiceResponseFormProperties {
	}
	export function CreateInitializeServiceResponseFormGroup() {
		return new FormGroup<InitializeServiceResponseFormProperties>({
		});

	}

	export interface ListApplicationsResponse {
		items?: Array<Application>;
		nextToken?: string;
	}
	export interface ListApplicationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsResponseFormGroup() {
		return new FormGroup<ListApplicationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List export errors response. */
	export interface ListExportErrorsResponse {
		items?: Array<ExportTaskError>;
		nextToken?: string;
	}

	/** List export errors response. */
	export interface ListExportErrorsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExportErrorsResponseFormGroup() {
		return new FormGroup<ListExportErrorsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Export task error. */
	export interface ExportTaskError {
		errorData?: ExportErrorData;
		errorDateTime?: string;
	}

	/** Export task error. */
	export interface ExportTaskErrorFormProperties {
		errorDateTime: FormControl<string | null | undefined>,
	}
	export function CreateExportTaskErrorFormGroup() {
		return new FormGroup<ExportTaskErrorFormProperties>({
			errorDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Export errors data. */
	export interface ExportErrorData {
		rawError?: string;
	}

	/** Export errors data. */
	export interface ExportErrorDataFormProperties {
		rawError: FormControl<string | null | undefined>,
	}
	export function CreateExportErrorDataFormGroup() {
		return new FormGroup<ExportErrorDataFormProperties>({
			rawError: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List export response. */
	export interface ListExportsResponse {
		items?: Array<ExportTask>;
		nextToken?: string;
	}

	/** List export response. */
	export interface ListExportsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExportsResponseFormGroup() {
		return new FormGroup<ListExportsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Export task. */
	export interface ExportTask {
		creationDateTime?: string;
		endDateTime?: string;
		exportID?: string;
		progressPercentage?: number;
		s3Bucket?: string;
		s3BucketOwner?: string;
		s3Key?: string;
		status?: ExportStatus;
		summary?: ExportTaskSummary;
	}

	/** Export task. */
	export interface ExportTaskFormProperties {
		creationDateTime: FormControl<string | null | undefined>,
		endDateTime: FormControl<string | null | undefined>,
		exportID: FormControl<string | null | undefined>,
		progressPercentage: FormControl<number | null | undefined>,
		s3Bucket: FormControl<string | null | undefined>,
		s3BucketOwner: FormControl<string | null | undefined>,
		s3Key: FormControl<string | null | undefined>,
		status: FormControl<ExportStatus | null | undefined>,
	}
	export function CreateExportTaskFormGroup() {
		return new FormGroup<ExportTaskFormProperties>({
			creationDateTime: new FormControl<string | null | undefined>(undefined),
			endDateTime: new FormControl<string | null | undefined>(undefined),
			exportID: new FormControl<string | null | undefined>(undefined),
			progressPercentage: new FormControl<number | null | undefined>(undefined),
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			s3BucketOwner: new FormControl<string | null | undefined>(undefined),
			s3Key: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ExportStatus | null | undefined>(undefined),
		});

	}

	export enum ExportStatus { PENDING = 0, STARTED = 1, FAILED = 2, SUCCEEDED = 3 }


	/** Export task summary. */
	export interface ExportTaskSummary {
		applicationsCount?: number | null;
		serversCount?: number | null;
		wavesCount?: number | null;
	}

	/** Export task summary. */
	export interface ExportTaskSummaryFormProperties {
		applicationsCount: FormControl<number | null | undefined>,
		serversCount: FormControl<number | null | undefined>,
		wavesCount: FormControl<number | null | undefined>,
	}
	export function CreateExportTaskSummaryFormGroup() {
		return new FormGroup<ExportTaskSummaryFormProperties>({
			applicationsCount: new FormControl<number | null | undefined>(undefined),
			serversCount: new FormControl<number | null | undefined>(undefined),
			wavesCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List imports errors response. */
	export interface ListImportErrorsResponse {
		items?: Array<ImportTaskError>;
		nextToken?: string;
	}

	/** List imports errors response. */
	export interface ListImportErrorsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportErrorsResponseFormGroup() {
		return new FormGroup<ListImportErrorsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Import task error. */
	export interface ImportTaskError {
		errorData?: ImportErrorData;
		errorDateTime?: string;
		errorType?: ImportErrorType;
	}

	/** Import task error. */
	export interface ImportTaskErrorFormProperties {
		errorDateTime: FormControl<string | null | undefined>,
		errorType: FormControl<ImportErrorType | null | undefined>,
	}
	export function CreateImportTaskErrorFormGroup() {
		return new FormGroup<ImportTaskErrorFormProperties>({
			errorDateTime: new FormControl<string | null | undefined>(undefined),
			errorType: new FormControl<ImportErrorType | null | undefined>(undefined),
		});

	}


	/** Import error data. */
	export interface ImportErrorData {
		accountID?: string;
		applicationID?: string;
		ec2LaunchTemplateID?: string;
		rawError?: string;
		rowNumber?: number | null;
		sourceServerID?: string;
		waveID?: string;
	}

	/** Import error data. */
	export interface ImportErrorDataFormProperties {
		accountID: FormControl<string | null | undefined>,
		applicationID: FormControl<string | null | undefined>,
		ec2LaunchTemplateID: FormControl<string | null | undefined>,
		rawError: FormControl<string | null | undefined>,
		rowNumber: FormControl<number | null | undefined>,
		sourceServerID: FormControl<string | null | undefined>,
		waveID: FormControl<string | null | undefined>,
	}
	export function CreateImportErrorDataFormGroup() {
		return new FormGroup<ImportErrorDataFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			applicationID: new FormControl<string | null | undefined>(undefined),
			ec2LaunchTemplateID: new FormControl<string | null | undefined>(undefined),
			rawError: new FormControl<string | null | undefined>(undefined),
			rowNumber: new FormControl<number | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined),
			waveID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImportErrorType { VALIDATION_ERROR = 0, PROCESSING_ERROR = 1 }


	/** List import response. */
	export interface ListImportsResponse {
		items?: Array<ImportTask>;
		nextToken?: string;
	}

	/** List import response. */
	export interface ListImportsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportsResponseFormGroup() {
		return new FormGroup<ListImportsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Import task. */
	export interface ImportTask {
		creationDateTime?: string;
		endDateTime?: string;
		importID?: string;
		progressPercentage?: number;
		s3BucketSource?: S3BucketSource;
		status?: ExportStatus;
		summary?: ImportTaskSummary;
	}

	/** Import task. */
	export interface ImportTaskFormProperties {
		creationDateTime: FormControl<string | null | undefined>,
		endDateTime: FormControl<string | null | undefined>,
		importID: FormControl<string | null | undefined>,
		progressPercentage: FormControl<number | null | undefined>,
		status: FormControl<ExportStatus | null | undefined>,
	}
	export function CreateImportTaskFormGroup() {
		return new FormGroup<ImportTaskFormProperties>({
			creationDateTime: new FormControl<string | null | undefined>(undefined),
			endDateTime: new FormControl<string | null | undefined>(undefined),
			importID: new FormControl<string | null | undefined>(undefined),
			progressPercentage: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<ExportStatus | null | undefined>(undefined),
		});

	}


	/** S3 bucket source. */
	export interface S3BucketSource {

		/** Required */
		s3Bucket: string;
		s3BucketOwner?: string;

		/** Required */
		s3Key: string;
	}

	/** S3 bucket source. */
	export interface S3BucketSourceFormProperties {

		/** Required */
		s3Bucket: FormControl<string | null | undefined>,
		s3BucketOwner: FormControl<string | null | undefined>,

		/** Required */
		s3Key: FormControl<string | null | undefined>,
	}
	export function CreateS3BucketSourceFormGroup() {
		return new FormGroup<S3BucketSourceFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			s3BucketOwner: new FormControl<string | null | undefined>(undefined),
			s3Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Import task summary. */
	export interface ImportTaskSummary {
		applications?: ImportTaskSummaryApplications;
		servers?: ImportTaskSummaryServers;
		waves?: ImportTaskSummaryWaves;
	}

	/** Import task summary. */
	export interface ImportTaskSummaryFormProperties {
	}
	export function CreateImportTaskSummaryFormGroup() {
		return new FormGroup<ImportTaskSummaryFormProperties>({
		});

	}


	/** Import task summary applications. */
	export interface ImportTaskSummaryApplications {
		createdCount?: number | null;
		modifiedCount?: number | null;
	}

	/** Import task summary applications. */
	export interface ImportTaskSummaryApplicationsFormProperties {
		createdCount: FormControl<number | null | undefined>,
		modifiedCount: FormControl<number | null | undefined>,
	}
	export function CreateImportTaskSummaryApplicationsFormGroup() {
		return new FormGroup<ImportTaskSummaryApplicationsFormProperties>({
			createdCount: new FormControl<number | null | undefined>(undefined),
			modifiedCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Import task summary servers. */
	export interface ImportTaskSummaryServers {
		createdCount?: number | null;
		modifiedCount?: number | null;
	}

	/** Import task summary servers. */
	export interface ImportTaskSummaryServersFormProperties {
		createdCount: FormControl<number | null | undefined>,
		modifiedCount: FormControl<number | null | undefined>,
	}
	export function CreateImportTaskSummaryServersFormGroup() {
		return new FormGroup<ImportTaskSummaryServersFormProperties>({
			createdCount: new FormControl<number | null | undefined>(undefined),
			modifiedCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Import task summery waves. */
	export interface ImportTaskSummaryWaves {
		createdCount?: number | null;
		modifiedCount?: number | null;
	}

	/** Import task summery waves. */
	export interface ImportTaskSummaryWavesFormProperties {
		createdCount: FormControl<number | null | undefined>,
		modifiedCount: FormControl<number | null | undefined>,
	}
	export function CreateImportTaskSummaryWavesFormGroup() {
		return new FormGroup<ImportTaskSummaryWavesFormProperties>({
			createdCount: new FormControl<number | null | undefined>(undefined),
			modifiedCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List managed accounts response. */
	export interface ListManagedAccountsResponse {

		/** Required */
		items: Array<ManagedAccount>;
		nextToken?: string;
	}

	/** List managed accounts response. */
	export interface ListManagedAccountsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListManagedAccountsResponseFormGroup() {
		return new FormGroup<ListManagedAccountsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Managed account. */
	export interface ManagedAccount {
		accountId?: string;
	}

	/** Managed account. */
	export interface ManagedAccountFormProperties {
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateManagedAccountFormGroup() {
		return new FormGroup<ManagedAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSourceServerActionsResponse {
		items?: Array<SourceServerActionDocument>;
		nextToken?: string;
	}
	export interface ListSourceServerActionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSourceServerActionsResponseFormGroup() {
		return new FormGroup<ListSourceServerActionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SourceServerActionDocument {
		actionID?: string;
		actionName?: string;
		active?: boolean | null;
		category?: ActionCategory;
		description?: string;
		documentIdentifier?: string;
		documentVersion?: string;
		externalParameters?: SsmDocumentExternalParameters;
		mustSucceedForCutover?: boolean | null;
		order?: number | null;
		parameters?: SsmDocumentParameters;
		timeoutSeconds?: number | null;
	}
	export interface SourceServerActionDocumentFormProperties {
		actionID: FormControl<string | null | undefined>,
		actionName: FormControl<string | null | undefined>,
		active: FormControl<boolean | null | undefined>,
		category: FormControl<ActionCategory | null | undefined>,
		description: FormControl<string | null | undefined>,
		documentIdentifier: FormControl<string | null | undefined>,
		documentVersion: FormControl<string | null | undefined>,
		mustSucceedForCutover: FormControl<boolean | null | undefined>,
		order: FormControl<number | null | undefined>,
		timeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateSourceServerActionDocumentFormGroup() {
		return new FormGroup<SourceServerActionDocumentFormProperties>({
			actionID: new FormControl<string | null | undefined>(undefined),
			actionName: new FormControl<string | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			category: new FormControl<ActionCategory | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			documentIdentifier: new FormControl<string | null | undefined>(undefined),
			documentVersion: new FormControl<string | null | undefined>(undefined),
			mustSucceedForCutover: new FormControl<boolean | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ActionCategory { DISASTER_RECOVERY = 0, OPERATING_SYSTEM = 1, LICENSE_AND_SUBSCRIPTION = 2, VALIDATION = 3, OBSERVABILITY = 4, SECURITY = 5, NETWORKING = 6, CONFIGURATION = 7, BACKUP = 8, OTHER = 9 }

	export interface ListTagsForResourceResponse {
		tags?: TagsMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ListTemplateActionsResponse {
		items?: Array<TemplateActionDocument>;
		nextToken?: string;
	}
	export interface ListTemplateActionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTemplateActionsResponseFormGroup() {
		return new FormGroup<ListTemplateActionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateActionDocument {
		actionID?: string;
		actionName?: string;
		active?: boolean | null;
		category?: ActionCategory;
		description?: string;
		documentIdentifier?: string;
		documentVersion?: string;
		externalParameters?: SsmDocumentExternalParameters;
		mustSucceedForCutover?: boolean | null;
		operatingSystem?: string;
		order?: number | null;
		parameters?: SsmDocumentParameters;
		timeoutSeconds?: number | null;
	}
	export interface TemplateActionDocumentFormProperties {
		actionID: FormControl<string | null | undefined>,
		actionName: FormControl<string | null | undefined>,
		active: FormControl<boolean | null | undefined>,
		category: FormControl<ActionCategory | null | undefined>,
		description: FormControl<string | null | undefined>,
		documentIdentifier: FormControl<string | null | undefined>,
		documentVersion: FormControl<string | null | undefined>,
		mustSucceedForCutover: FormControl<boolean | null | undefined>,
		operatingSystem: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		timeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateTemplateActionDocumentFormGroup() {
		return new FormGroup<TemplateActionDocumentFormProperties>({
			actionID: new FormControl<string | null | undefined>(undefined),
			actionName: new FormControl<string | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			category: new FormControl<ActionCategory | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			documentIdentifier: new FormControl<string | null | undefined>(undefined),
			documentVersion: new FormControl<string | null | undefined>(undefined),
			mustSucceedForCutover: new FormControl<boolean | null | undefined>(undefined),
			operatingSystem: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListWavesResponse {
		items?: Array<Wave>;
		nextToken?: string;
	}
	export interface ListWavesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWavesResponseFormGroup() {
		return new FormGroup<ListWavesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AWS Systems Manager Document external parameter. */
	export interface SsmExternalParameter {
		dynamicPath?: string;
	}

	/** AWS Systems Manager Document external parameter. */
	export interface SsmExternalParameterFormProperties {
		dynamicPath: FormControl<string | null | undefined>,
	}
	export function CreateSsmExternalParameterFormGroup() {
		return new FormGroup<SsmExternalParameterFormProperties>({
			dynamicPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AWS Systems Manager Parameter Store parameter. */
	export interface SsmParameterStoreParameter {

		/** Required */
		parameterName: string;

		/** Required */
		parameterType: SsmParameterStoreParameterType;
	}

	/** AWS Systems Manager Parameter Store parameter. */
	export interface SsmParameterStoreParameterFormProperties {

		/** Required */
		parameterName: FormControl<string | null | undefined>,

		/** Required */
		parameterType: FormControl<SsmParameterStoreParameterType | null | undefined>,
	}
	export function CreateSsmParameterStoreParameterFormGroup() {
		return new FormGroup<SsmParameterStoreParameterFormProperties>({
			parameterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameterType: new FormControl<SsmParameterStoreParameterType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SsmParameterStoreParameterType { STRING = 0 }

	export interface RemoveSourceServerActionResponse {
	}
	export interface RemoveSourceServerActionResponseFormProperties {
	}
	export function CreateRemoveSourceServerActionResponseFormGroup() {
		return new FormGroup<RemoveSourceServerActionResponseFormProperties>({
		});

	}

	export interface RemoveTemplateActionResponse {
	}
	export interface RemoveTemplateActionResponseFormProperties {
	}
	export function CreateRemoveTemplateActionResponseFormGroup() {
		return new FormGroup<RemoveTemplateActionResponseFormProperties>({
		});

	}

	export interface StartCutoverResponse {
		job?: Job;
	}
	export interface StartCutoverResponseFormProperties {
	}
	export function CreateStartCutoverResponseFormGroup() {
		return new FormGroup<StartCutoverResponseFormProperties>({
		});

	}


	/** Start export response. */
	export interface StartExportResponse {
		exportTask?: ExportTask;
	}

	/** Start export response. */
	export interface StartExportResponseFormProperties {
	}
	export function CreateStartExportResponseFormGroup() {
		return new FormGroup<StartExportResponseFormProperties>({
		});

	}


	/** Start import response. */
	export interface StartImportResponse {
		importTask?: ImportTask;
	}

	/** Start import response. */
	export interface StartImportResponseFormProperties {
	}
	export function CreateStartImportResponseFormGroup() {
		return new FormGroup<StartImportResponseFormProperties>({
		});

	}

	export interface StartTestResponse {
		job?: Job;
	}
	export interface StartTestResponseFormProperties {
	}
	export function CreateStartTestResponseFormGroup() {
		return new FormGroup<StartTestResponseFormProperties>({
		});

	}

	export interface TerminateTargetInstancesResponse {
		job?: Job;
	}
	export interface TerminateTargetInstancesResponseFormProperties {
	}
	export function CreateTerminateTargetInstancesResponseFormGroup() {
		return new FormGroup<TerminateTargetInstancesResponseFormProperties>({
		});

	}

	export interface ArchiveApplicationRequest {
		accountID?: string;

		/** Required */
		applicationID: string;
	}
	export interface ArchiveApplicationRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		applicationID: FormControl<string | null | undefined>,
	}
	export function CreateArchiveApplicationRequestFormGroup() {
		return new FormGroup<ArchiveApplicationRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			applicationID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArchiveWaveRequest {
		accountID?: string;

		/** Required */
		waveID: string;
	}
	export interface ArchiveWaveRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		waveID: FormControl<string | null | undefined>,
	}
	export function CreateArchiveWaveRequestFormGroup() {
		return new FormGroup<ArchiveWaveRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			waveID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateApplicationsRequest {
		accountID?: string;

		/** Required */
		applicationIDs: Array<string>;

		/** Required */
		waveID: string;
	}
	export interface AssociateApplicationsRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		waveID: FormControl<string | null | undefined>,
	}
	export function CreateAssociateApplicationsRequestFormGroup() {
		return new FormGroup<AssociateApplicationsRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			waveID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateSourceServersRequest {
		accountID?: string;

		/** Required */
		applicationID: string;

		/** Required */
		sourceServerIDs: Array<string>;
	}
	export interface AssociateSourceServersRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		applicationID: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSourceServersRequestFormGroup() {
		return new FormGroup<AssociateSourceServersRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			applicationID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request to change the source server migration lifecycle state. */
	export interface ChangeServerLifeCycleStateSourceServerLifecycle {

		/** Required */
		state: ChangeServerLifeCycleStateSourceServerLifecycleState;
	}

	/** The request to change the source server migration lifecycle state. */
	export interface ChangeServerLifeCycleStateSourceServerLifecycleFormProperties {

		/** Required */
		state: FormControl<ChangeServerLifeCycleStateSourceServerLifecycleState | null | undefined>,
	}
	export function CreateChangeServerLifeCycleStateSourceServerLifecycleFormGroup() {
		return new FormGroup<ChangeServerLifeCycleStateSourceServerLifecycleFormProperties>({
			state: new FormControl<ChangeServerLifeCycleStateSourceServerLifecycleState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ChangeServerLifeCycleStateRequest {
		accountID?: string;

		/** Required */
		lifeCycle: ChangeServerLifeCycleStateSourceServerLifecycle;

		/** Required */
		sourceServerID: string;
	}
	export interface ChangeServerLifeCycleStateRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateChangeServerLifeCycleStateRequestFormGroup() {
		return new FormGroup<ChangeServerLifeCycleStateRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateApplicationRequest {
		accountID?: string;
		description?: string;

		/** Required */
		name: string;
		tags?: TagsMap;
	}
	export interface CreateApplicationRequestFormProperties {
		accountID: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLaunchConfigurationTemplateRequest {
		associatePublicIpAddress?: boolean | null;
		bootMode?: BootMode;
		copyPrivateIp?: boolean | null;
		copyTags?: boolean | null;
		enableMapAutoTagging?: boolean | null;
		largeVolumeConf?: LaunchTemplateDiskConf;
		launchDisposition?: LaunchDisposition;

		/** Configure Licensing. */
		licensing?: Licensing;
		mapAutoTaggingMpeID?: string;
		postLaunchActions?: PostLaunchActions;
		smallVolumeConf?: LaunchTemplateDiskConf;
		smallVolumeMaxSize?: number | null;
		tags?: TagsMap;
		targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
	}
	export interface CreateLaunchConfigurationTemplateRequestFormProperties {
		associatePublicIpAddress: FormControl<boolean | null | undefined>,
		bootMode: FormControl<BootMode | null | undefined>,
		copyPrivateIp: FormControl<boolean | null | undefined>,
		copyTags: FormControl<boolean | null | undefined>,
		enableMapAutoTagging: FormControl<boolean | null | undefined>,
		launchDisposition: FormControl<LaunchDisposition | null | undefined>,
		mapAutoTaggingMpeID: FormControl<string | null | undefined>,
		smallVolumeMaxSize: FormControl<number | null | undefined>,
		targetInstanceTypeRightSizingMethod: FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>,
	}
	export function CreateCreateLaunchConfigurationTemplateRequestFormGroup() {
		return new FormGroup<CreateLaunchConfigurationTemplateRequestFormProperties>({
			associatePublicIpAddress: new FormControl<boolean | null | undefined>(undefined),
			bootMode: new FormControl<BootMode | null | undefined>(undefined),
			copyPrivateIp: new FormControl<boolean | null | undefined>(undefined),
			copyTags: new FormControl<boolean | null | undefined>(undefined),
			enableMapAutoTagging: new FormControl<boolean | null | undefined>(undefined),
			launchDisposition: new FormControl<LaunchDisposition | null | undefined>(undefined),
			mapAutoTaggingMpeID: new FormControl<string | null | undefined>(undefined),
			smallVolumeMaxSize: new FormControl<number | null | undefined>(undefined),
			targetInstanceTypeRightSizingMethod: new FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>(undefined),
		});

	}

	export interface CreateReplicationConfigurationTemplateRequest {

		/** Required */
		associateDefaultSecurityGroup: boolean;

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
		useFipsEndpoint?: boolean | null;
	}
	export interface CreateReplicationConfigurationTemplateRequestFormProperties {

		/** Required */
		associateDefaultSecurityGroup: FormControl<boolean | null | undefined>,

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
		useFipsEndpoint: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateReplicationConfigurationTemplateRequestFormGroup() {
		return new FormGroup<CreateReplicationConfigurationTemplateRequestFormProperties>({
			associateDefaultSecurityGroup: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			bandwidthThrottling: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			createPublicIP: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			dataPlaneRouting: new FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>(undefined, [Validators.required]),
			defaultLargeStagingDiskType: new FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>(undefined, [Validators.required]),
			ebsEncryption: new FormControl<ReplicationConfigurationEbsEncryption | null | undefined>(undefined, [Validators.required]),
			ebsEncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			replicationServerInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stagingAreaSubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useDedicatedReplicationServer: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			useFipsEndpoint: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateWaveRequest {
		accountID?: string;
		description?: string;

		/** Required */
		name: string;
		tags?: TagsMap;
	}
	export interface CreateWaveRequestFormProperties {
		accountID: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateWaveRequestFormGroup() {
		return new FormGroup<CreateWaveRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteApplicationRequest {
		accountID?: string;

		/** Required */
		applicationID: string;
	}
	export interface DeleteApplicationRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		applicationID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationRequestFormGroup() {
		return new FormGroup<DeleteApplicationRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			applicationID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteJobRequest {
		accountID?: string;

		/** Required */
		jobID: string;
	}
	export interface DeleteJobRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		jobID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteJobRequestFormGroup() {
		return new FormGroup<DeleteJobRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
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

	export interface DeleteSourceServerRequest {
		accountID?: string;

		/** Required */
		sourceServerID: string;
	}
	export interface DeleteSourceServerRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSourceServerRequestFormGroup() {
		return new FormGroup<DeleteSourceServerRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteVcenterClientRequest {

		/** Required */
		vcenterClientID: string;
	}
	export interface DeleteVcenterClientRequestFormProperties {

		/** Required */
		vcenterClientID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVcenterClientRequestFormGroup() {
		return new FormGroup<DeleteVcenterClientRequestFormProperties>({
			vcenterClientID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWaveRequest {
		accountID?: string;

		/** Required */
		waveID: string;
	}
	export interface DeleteWaveRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		waveID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWaveRequestFormGroup() {
		return new FormGroup<DeleteWaveRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			waveID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeJobLogItemsRequest {
		accountID?: string;

		/** Required */
		jobID: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeJobLogItemsRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		jobID: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobLogItemsRequestFormGroup() {
		return new FormGroup<DescribeJobLogItemsRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			jobID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to describe Job log filters. */
	export interface DescribeJobsRequestFilters {
		fromDate?: string;
		jobIDs?: Array<string>;
		toDate?: string;
	}

	/** Request to describe Job log filters. */
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
		accountID?: string;
		filters?: DescribeJobsRequestFilters;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeJobsRequestFormProperties {
		accountID: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobsRequestFormGroup() {
		return new FormGroup<DescribeJobsRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
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


	/** Request to filter Source Servers list. */
	export interface DescribeSourceServersRequestFilters {
		applicationIDs?: Array<string>;
		isArchived?: boolean | null;
		lifeCycleStates?: Array<LifeCycleState>;
		replicationTypes?: Array<ReplicationType>;
		sourceServerIDs?: Array<string>;
	}

	/** Request to filter Source Servers list. */
	export interface DescribeSourceServersRequestFiltersFormProperties {
		isArchived: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeSourceServersRequestFiltersFormGroup() {
		return new FormGroup<DescribeSourceServersRequestFiltersFormProperties>({
			isArchived: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeSourceServersRequest {
		accountID?: string;
		filters?: DescribeSourceServersRequestFilters;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeSourceServersRequestFormProperties {
		accountID: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSourceServersRequestFormGroup() {
		return new FormGroup<DescribeSourceServersRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeVcenterClientsRequest {
	}
	export interface DescribeVcenterClientsRequestFormProperties {
	}
	export function CreateDescribeVcenterClientsRequestFormGroup() {
		return new FormGroup<DescribeVcenterClientsRequestFormProperties>({
		});

	}

	export interface DisassociateApplicationsRequest {
		accountID?: string;

		/** Required */
		applicationIDs: Array<string>;

		/** Required */
		waveID: string;
	}
	export interface DisassociateApplicationsRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		waveID: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateApplicationsRequestFormGroup() {
		return new FormGroup<DisassociateApplicationsRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			waveID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateSourceServersRequest {
		accountID?: string;

		/** Required */
		applicationID: string;

		/** Required */
		sourceServerIDs: Array<string>;
	}
	export interface DisassociateSourceServersRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		applicationID: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateSourceServersRequestFormGroup() {
		return new FormGroup<DisassociateSourceServersRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			applicationID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisconnectFromServiceRequest {
		accountID?: string;

		/** Required */
		sourceServerID: string;
	}
	export interface DisconnectFromServiceRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectFromServiceRequestFormGroup() {
		return new FormGroup<DisconnectFromServiceRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FinalizeCutoverRequest {
		accountID?: string;

		/** Required */
		sourceServerID: string;
	}
	export interface FinalizeCutoverRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateFinalizeCutoverRequestFormGroup() {
		return new FormGroup<FinalizeCutoverRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLaunchConfigurationRequest {
		accountID?: string;

		/** Required */
		sourceServerID: string;
	}
	export interface GetLaunchConfigurationRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateGetLaunchConfigurationRequestFormGroup() {
		return new FormGroup<GetLaunchConfigurationRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetReplicationConfigurationRequest {
		accountID?: string;

		/** Required */
		sourceServerID: string;
	}
	export interface GetReplicationConfigurationRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateGetReplicationConfigurationRequestFormGroup() {
		return new FormGroup<GetReplicationConfigurationRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ImportStatus { PENDING = 0, STARTED = 1, FAILED = 2, SUCCEEDED = 3 }

	export interface InitializeServiceRequest {
	}
	export interface InitializeServiceRequestFormProperties {
	}
	export function CreateInitializeServiceRequestFormGroup() {
		return new FormGroup<InitializeServiceRequestFormProperties>({
		});

	}


	/** Applications list filters. */
	export interface ListApplicationsRequestFilters {
		applicationIDs?: Array<string>;
		isArchived?: boolean | null;
		waveIDs?: Array<string>;
	}

	/** Applications list filters. */
	export interface ListApplicationsRequestFiltersFormProperties {
		isArchived: FormControl<boolean | null | undefined>,
	}
	export function CreateListApplicationsRequestFiltersFormGroup() {
		return new FormGroup<ListApplicationsRequestFiltersFormProperties>({
			isArchived: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListApplicationsRequest {
		accountID?: string;
		filters?: ListApplicationsRequestFilters;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListApplicationsRequestFormProperties {
		accountID: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsRequestFormGroup() {
		return new FormGroup<ListApplicationsRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List export errors request. */
	export interface ListExportErrorsRequest {

		/** Required */
		exportID: string;
		maxResults?: number | null;
		nextToken?: string;
	}

	/** List export errors request. */
	export interface ListExportErrorsRequestFormProperties {

		/** Required */
		exportID: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExportErrorsRequestFormGroup() {
		return new FormGroup<ListExportErrorsRequestFormProperties>({
			exportID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List exports request filters. */
	export interface ListExportsRequestFilters {
		exportIDs?: Array<string>;
	}

	/** List exports request filters. */
	export interface ListExportsRequestFiltersFormProperties {
	}
	export function CreateListExportsRequestFiltersFormGroup() {
		return new FormGroup<ListExportsRequestFiltersFormProperties>({
		});

	}


	/** List export request. */
	export interface ListExportsRequest {

		/** List exports request filters. */
		filters?: ListExportsRequestFilters;
		maxResults?: number | null;
		nextToken?: string;
	}

	/** List export request. */
	export interface ListExportsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExportsRequestFormGroup() {
		return new FormGroup<ListExportsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List import errors request. */
	export interface ListImportErrorsRequest {

		/** Required */
		importID: string;
		maxResults?: number | null;
		nextToken?: string;
	}

	/** List import errors request. */
	export interface ListImportErrorsRequestFormProperties {

		/** Required */
		importID: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportErrorsRequestFormGroup() {
		return new FormGroup<ListImportErrorsRequestFormProperties>({
			importID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List imports request filters. */
	export interface ListImportsRequestFilters {
		importIDs?: Array<string>;
	}

	/** List imports request filters. */
	export interface ListImportsRequestFiltersFormProperties {
	}
	export function CreateListImportsRequestFiltersFormGroup() {
		return new FormGroup<ListImportsRequestFiltersFormProperties>({
		});

	}


	/** List imports request. */
	export interface ListImportsRequest {
		filters?: ListImportsRequestFilters;
		maxResults?: number | null;
		nextToken?: string;
	}

	/** List imports request. */
	export interface ListImportsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportsRequestFormGroup() {
		return new FormGroup<ListImportsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List managed accounts request. */
	export interface ListManagedAccountsRequest {
		maxResults?: number | null;
		nextToken?: string;
	}

	/** List managed accounts request. */
	export interface ListManagedAccountsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListManagedAccountsRequestFormGroup() {
		return new FormGroup<ListManagedAccountsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Source server post migration custom action filters. */
	export interface SourceServerActionsRequestFilters {
		actionIDs?: Array<string>;
	}

	/** Source server post migration custom action filters. */
	export interface SourceServerActionsRequestFiltersFormProperties {
	}
	export function CreateSourceServerActionsRequestFiltersFormGroup() {
		return new FormGroup<SourceServerActionsRequestFiltersFormProperties>({
		});

	}

	export interface ListSourceServerActionsRequest {
		accountID?: string;
		filters?: SourceServerActionsRequestFilters;
		maxResults?: number | null;
		nextToken?: string;

		/** Required */
		sourceServerID: string;
	}
	export interface ListSourceServerActionsRequestFormProperties {
		accountID: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateListSourceServerActionsRequestFormGroup() {
		return new FormGroup<ListSourceServerActionsRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/** Template post migration custom action filters. */
	export interface TemplateActionsRequestFilters {
		actionIDs?: Array<string>;
	}

	/** Template post migration custom action filters. */
	export interface TemplateActionsRequestFiltersFormProperties {
	}
	export function CreateTemplateActionsRequestFiltersFormGroup() {
		return new FormGroup<TemplateActionsRequestFiltersFormProperties>({
		});

	}

	export interface ListTemplateActionsRequest {
		filters?: TemplateActionsRequestFilters;

		/** Required */
		launchConfigurationTemplateID: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListTemplateActionsRequestFormProperties {

		/** Required */
		launchConfigurationTemplateID: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTemplateActionsRequestFormGroup() {
		return new FormGroup<ListTemplateActionsRequestFormProperties>({
			launchConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Waves list filters. */
	export interface ListWavesRequestFilters {
		isArchived?: boolean | null;
		waveIDs?: Array<string>;
	}

	/** Waves list filters. */
	export interface ListWavesRequestFiltersFormProperties {
		isArchived: FormControl<boolean | null | undefined>,
	}
	export function CreateListWavesRequestFiltersFormGroup() {
		return new FormGroup<ListWavesRequestFiltersFormProperties>({
			isArchived: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListWavesRequest {
		accountID?: string;
		filters?: ListWavesRequestFilters;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListWavesRequestFormProperties {
		accountID: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWavesRequestFormGroup() {
		return new FormGroup<ListWavesRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MarkAsArchivedRequest {
		accountID?: string;

		/** Required */
		sourceServerID: string;
	}
	export interface MarkAsArchivedRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateMarkAsArchivedRequestFormGroup() {
		return new FormGroup<MarkAsArchivedRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PauseReplicationRequest {
		accountID?: string;

		/** Required */
		sourceServerID: string;
	}
	export interface PauseReplicationRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreatePauseReplicationRequestFormGroup() {
		return new FormGroup<PauseReplicationRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutSourceServerActionRequest {
		accountID?: string;

		/** Required */
		actionID: string;

		/** Required */
		actionName: string;
		active?: boolean | null;
		category?: ActionCategory;
		description?: string;

		/** Required */
		documentIdentifier: string;
		documentVersion?: string;
		externalParameters?: SsmDocumentExternalParameters;
		mustSucceedForCutover?: boolean | null;

		/** Required */
		order: number;
		parameters?: SsmDocumentParameters;

		/** Required */
		sourceServerID: string;
		timeoutSeconds?: number | null;
	}
	export interface PutSourceServerActionRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		actionID: FormControl<string | null | undefined>,

		/** Required */
		actionName: FormControl<string | null | undefined>,
		active: FormControl<boolean | null | undefined>,
		category: FormControl<ActionCategory | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		documentIdentifier: FormControl<string | null | undefined>,
		documentVersion: FormControl<string | null | undefined>,
		mustSucceedForCutover: FormControl<boolean | null | undefined>,

		/** Required */
		order: FormControl<number | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
		timeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreatePutSourceServerActionRequestFormGroup() {
		return new FormGroup<PutSourceServerActionRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			actionID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			actionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			active: new FormControl<boolean | null | undefined>(undefined),
			category: new FormControl<ActionCategory | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			documentIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentVersion: new FormControl<string | null | undefined>(undefined),
			mustSucceedForCutover: new FormControl<boolean | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutTemplateActionRequest {

		/** Required */
		actionID: string;

		/** Required */
		actionName: string;
		active?: boolean | null;
		category?: ActionCategory;
		description?: string;

		/** Required */
		documentIdentifier: string;
		documentVersion?: string;
		externalParameters?: SsmDocumentExternalParameters;

		/** Required */
		launchConfigurationTemplateID: string;
		mustSucceedForCutover?: boolean | null;
		operatingSystem?: string;

		/** Required */
		order: number;
		parameters?: SsmDocumentParameters;
		timeoutSeconds?: number | null;
	}
	export interface PutTemplateActionRequestFormProperties {

		/** Required */
		actionID: FormControl<string | null | undefined>,

		/** Required */
		actionName: FormControl<string | null | undefined>,
		active: FormControl<boolean | null | undefined>,
		category: FormControl<ActionCategory | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		documentIdentifier: FormControl<string | null | undefined>,
		documentVersion: FormControl<string | null | undefined>,

		/** Required */
		launchConfigurationTemplateID: FormControl<string | null | undefined>,
		mustSucceedForCutover: FormControl<boolean | null | undefined>,
		operatingSystem: FormControl<string | null | undefined>,

		/** Required */
		order: FormControl<number | null | undefined>,
		timeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreatePutTemplateActionRequestFormGroup() {
		return new FormGroup<PutTemplateActionRequestFormProperties>({
			actionID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			actionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			active: new FormControl<boolean | null | undefined>(undefined),
			category: new FormControl<ActionCategory | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			documentIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentVersion: new FormControl<string | null | undefined>(undefined),
			launchConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mustSucceedForCutover: new FormControl<boolean | null | undefined>(undefined),
			operatingSystem: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RemoveSourceServerActionRequest {
		accountID?: string;

		/** Required */
		actionID: string;

		/** Required */
		sourceServerID: string;
	}
	export interface RemoveSourceServerActionRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		actionID: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateRemoveSourceServerActionRequestFormGroup() {
		return new FormGroup<RemoveSourceServerActionRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			actionID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveTemplateActionRequest {

		/** Required */
		actionID: string;

		/** Required */
		launchConfigurationTemplateID: string;
	}
	export interface RemoveTemplateActionRequestFormProperties {

		/** Required */
		actionID: FormControl<string | null | undefined>,

		/** Required */
		launchConfigurationTemplateID: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTemplateActionRequestFormGroup() {
		return new FormGroup<RemoveTemplateActionRequestFormProperties>({
			actionID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			launchConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResumeReplicationRequest {
		accountID?: string;

		/** Required */
		sourceServerID: string;
	}
	export interface ResumeReplicationRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateResumeReplicationRequestFormGroup() {
		return new FormGroup<ResumeReplicationRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RetryDataReplicationRequest {
		accountID?: string;

		/** Required */
		sourceServerID: string;
	}
	export interface RetryDataReplicationRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateRetryDataReplicationRequestFormGroup() {
		return new FormGroup<RetryDataReplicationRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartCutoverRequest {
		accountID?: string;

		/** Required */
		sourceServerIDs: Array<string>;
		tags?: TagsMap;
	}
	export interface StartCutoverRequestFormProperties {
		accountID: FormControl<string | null | undefined>,
	}
	export function CreateStartCutoverRequestFormGroup() {
		return new FormGroup<StartCutoverRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Start export request. */
	export interface StartExportRequest {

		/** Required */
		s3Bucket: string;
		s3BucketOwner?: string;

		/** Required */
		s3Key: string;
	}

	/** Start export request. */
	export interface StartExportRequestFormProperties {

		/** Required */
		s3Bucket: FormControl<string | null | undefined>,
		s3BucketOwner: FormControl<string | null | undefined>,

		/** Required */
		s3Key: FormControl<string | null | undefined>,
	}
	export function CreateStartExportRequestFormGroup() {
		return new FormGroup<StartExportRequestFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			s3BucketOwner: new FormControl<string | null | undefined>(undefined),
			s3Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Start import request. */
	export interface StartImportRequest {
		clientToken?: string;

		/** Required */
		s3BucketSource: S3BucketSource;
	}

	/** Start import request. */
	export interface StartImportRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartImportRequestFormGroup() {
		return new FormGroup<StartImportRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartReplicationRequest {
		accountID?: string;

		/** Required */
		sourceServerID: string;
	}
	export interface StartReplicationRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateStartReplicationRequestFormGroup() {
		return new FormGroup<StartReplicationRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartTestRequest {
		accountID?: string;

		/** Required */
		sourceServerIDs: Array<string>;
		tags?: TagsMap;
	}
	export interface StartTestRequestFormProperties {
		accountID: FormControl<string | null | undefined>,
	}
	export function CreateStartTestRequestFormGroup() {
		return new FormGroup<StartTestRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopReplicationRequest {
		accountID?: string;

		/** Required */
		sourceServerID: string;
	}
	export interface StopReplicationRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateStopReplicationRequestFormGroup() {
		return new FormGroup<StopReplicationRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface TerminateTargetInstancesRequest {
		accountID?: string;

		/** Required */
		sourceServerIDs: Array<string>;
		tags?: TagsMap;
	}
	export interface TerminateTargetInstancesRequestFormProperties {
		accountID: FormControl<string | null | undefined>,
	}
	export function CreateTerminateTargetInstancesRequestFormGroup() {
		return new FormGroup<TerminateTargetInstancesRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnarchiveApplicationRequest {
		accountID?: string;

		/** Required */
		applicationID: string;
	}
	export interface UnarchiveApplicationRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		applicationID: FormControl<string | null | undefined>,
	}
	export function CreateUnarchiveApplicationRequestFormGroup() {
		return new FormGroup<UnarchiveApplicationRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			applicationID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnarchiveWaveRequest {
		accountID?: string;

		/** Required */
		waveID: string;
	}
	export interface UnarchiveWaveRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		waveID: FormControl<string | null | undefined>,
	}
	export function CreateUnarchiveWaveRequestFormGroup() {
		return new FormGroup<UnarchiveWaveRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			waveID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateApplicationRequest {
		accountID?: string;

		/** Required */
		applicationID: string;
		description?: string;
		name?: string;
	}
	export interface UpdateApplicationRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		applicationID: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationRequestFormGroup() {
		return new FormGroup<UpdateApplicationRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			applicationID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLaunchConfigurationRequest {
		accountID?: string;
		bootMode?: BootMode;
		copyPrivateIp?: boolean | null;
		copyTags?: boolean | null;
		enableMapAutoTagging?: boolean | null;
		launchDisposition?: LaunchDisposition;
		licensing?: Licensing;
		mapAutoTaggingMpeID?: string;
		name?: string;

		/** Post Launch Actions to executed on the Test or Cutover instance. */
		postLaunchActions?: PostLaunchActions;

		/** Required */
		sourceServerID: string;
		targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
	}
	export interface UpdateLaunchConfigurationRequestFormProperties {
		accountID: FormControl<string | null | undefined>,
		bootMode: FormControl<BootMode | null | undefined>,
		copyPrivateIp: FormControl<boolean | null | undefined>,
		copyTags: FormControl<boolean | null | undefined>,
		enableMapAutoTagging: FormControl<boolean | null | undefined>,
		launchDisposition: FormControl<LaunchDisposition | null | undefined>,
		mapAutoTaggingMpeID: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
		targetInstanceTypeRightSizingMethod: FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>,
	}
	export function CreateUpdateLaunchConfigurationRequestFormGroup() {
		return new FormGroup<UpdateLaunchConfigurationRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			bootMode: new FormControl<BootMode | null | undefined>(undefined),
			copyPrivateIp: new FormControl<boolean | null | undefined>(undefined),
			copyTags: new FormControl<boolean | null | undefined>(undefined),
			enableMapAutoTagging: new FormControl<boolean | null | undefined>(undefined),
			launchDisposition: new FormControl<LaunchDisposition | null | undefined>(undefined),
			mapAutoTaggingMpeID: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetInstanceTypeRightSizingMethod: new FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>(undefined),
		});

	}

	export interface UpdateLaunchConfigurationTemplateRequest {
		associatePublicIpAddress?: boolean | null;
		bootMode?: BootMode;
		copyPrivateIp?: boolean | null;
		copyTags?: boolean | null;
		enableMapAutoTagging?: boolean | null;
		largeVolumeConf?: LaunchTemplateDiskConf;

		/** Required */
		launchConfigurationTemplateID: string;
		launchDisposition?: LaunchDisposition;

		/** Configure Licensing. */
		licensing?: Licensing;
		mapAutoTaggingMpeID?: string;
		postLaunchActions?: PostLaunchActions;
		smallVolumeConf?: LaunchTemplateDiskConf;
		smallVolumeMaxSize?: number | null;
		targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
	}
	export interface UpdateLaunchConfigurationTemplateRequestFormProperties {
		associatePublicIpAddress: FormControl<boolean | null | undefined>,
		bootMode: FormControl<BootMode | null | undefined>,
		copyPrivateIp: FormControl<boolean | null | undefined>,
		copyTags: FormControl<boolean | null | undefined>,
		enableMapAutoTagging: FormControl<boolean | null | undefined>,

		/** Required */
		launchConfigurationTemplateID: FormControl<string | null | undefined>,
		launchDisposition: FormControl<LaunchDisposition | null | undefined>,
		mapAutoTaggingMpeID: FormControl<string | null | undefined>,
		smallVolumeMaxSize: FormControl<number | null | undefined>,
		targetInstanceTypeRightSizingMethod: FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>,
	}
	export function CreateUpdateLaunchConfigurationTemplateRequestFormGroup() {
		return new FormGroup<UpdateLaunchConfigurationTemplateRequestFormProperties>({
			associatePublicIpAddress: new FormControl<boolean | null | undefined>(undefined),
			bootMode: new FormControl<BootMode | null | undefined>(undefined),
			copyPrivateIp: new FormControl<boolean | null | undefined>(undefined),
			copyTags: new FormControl<boolean | null | undefined>(undefined),
			enableMapAutoTagging: new FormControl<boolean | null | undefined>(undefined),
			launchConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			launchDisposition: new FormControl<LaunchDisposition | null | undefined>(undefined),
			mapAutoTaggingMpeID: new FormControl<string | null | undefined>(undefined),
			smallVolumeMaxSize: new FormControl<number | null | undefined>(undefined),
			targetInstanceTypeRightSizingMethod: new FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>(undefined),
		});

	}

	export interface UpdateReplicationConfigurationRequest {
		accountID?: string;
		associateDefaultSecurityGroup?: boolean | null;
		bandwidthThrottling?: number | null;
		createPublicIP?: boolean | null;
		dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
		defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
		ebsEncryption?: ReplicationConfigurationEbsEncryption;
		ebsEncryptionKeyArn?: string;
		name?: string;
		replicatedDisks?: Array<ReplicationConfigurationReplicatedDisk>;
		replicationServerInstanceType?: string;
		replicationServersSecurityGroupsIDs?: Array<string>;

		/** Required */
		sourceServerID: string;
		stagingAreaSubnetId?: string;
		stagingAreaTags?: TagsMap;
		useDedicatedReplicationServer?: boolean | null;
		useFipsEndpoint?: boolean | null;
	}
	export interface UpdateReplicationConfigurationRequestFormProperties {
		accountID: FormControl<string | null | undefined>,
		associateDefaultSecurityGroup: FormControl<boolean | null | undefined>,
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
		useFipsEndpoint: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateReplicationConfigurationRequestFormGroup() {
		return new FormGroup<UpdateReplicationConfigurationRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			associateDefaultSecurityGroup: new FormControl<boolean | null | undefined>(undefined),
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
			useFipsEndpoint: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateReplicationConfigurationTemplateRequest {
		arn?: string;
		associateDefaultSecurityGroup?: boolean | null;
		bandwidthThrottling?: number | null;
		createPublicIP?: boolean | null;
		dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
		defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
		ebsEncryption?: ReplicationConfigurationEbsEncryption;
		ebsEncryptionKeyArn?: string;

		/** Required */
		replicationConfigurationTemplateID: string;
		replicationServerInstanceType?: string;
		replicationServersSecurityGroupsIDs?: Array<string>;
		stagingAreaSubnetId?: string;
		stagingAreaTags?: TagsMap;
		useDedicatedReplicationServer?: boolean | null;
		useFipsEndpoint?: boolean | null;
	}
	export interface UpdateReplicationConfigurationTemplateRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		associateDefaultSecurityGroup: FormControl<boolean | null | undefined>,
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
		useFipsEndpoint: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateReplicationConfigurationTemplateRequestFormGroup() {
		return new FormGroup<UpdateReplicationConfigurationTemplateRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			associateDefaultSecurityGroup: new FormControl<boolean | null | undefined>(undefined),
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
			useFipsEndpoint: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateSourceServerReplicationTypeRequest {
		accountID?: string;

		/** Required */
		replicationType: ReplicationType;

		/** Required */
		sourceServerID: string;
	}
	export interface UpdateSourceServerReplicationTypeRequestFormProperties {
		accountID: FormControl<string | null | undefined>,

		/** Required */
		replicationType: FormControl<ReplicationType | null | undefined>,

		/** Required */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSourceServerReplicationTypeRequestFormGroup() {
		return new FormGroup<UpdateSourceServerReplicationTypeRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			replicationType: new FormControl<ReplicationType | null | undefined>(undefined, [Validators.required]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateWaveRequest {
		accountID?: string;
		description?: string;
		name?: string;

		/** Required */
		waveID: string;
	}
	export interface UpdateWaveRequestFormProperties {
		accountID: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		waveID: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWaveRequestFormGroup() {
		return new FormGroup<UpdateWaveRequestFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			waveID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WaveHealthStatus { HEALTHY = 0, LAGGING = 1, ERROR = 2 }

	export enum WaveProgressStatus { NOT_STARTED = 0, IN_PROGRESS = 1, COMPLETED = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Archive application.
		 * Post ArchiveApplication
		 * @return {Application} Success
		 */
		ArchiveApplication(requestBody: ArchiveApplicationPostBody): Observable<Application> {
			return this.http.post<Application>(this.baseUri + 'ArchiveApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Archive wave.
		 * Post ArchiveWave
		 * @return {Wave} Success
		 */
		ArchiveWave(requestBody: ArchiveWavePostBody): Observable<Wave> {
			return this.http.post<Wave>(this.baseUri + 'ArchiveWave', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associate applications to wave.
		 * Post AssociateApplications
		 * @return {AssociateApplicationsResponse} Success
		 */
		AssociateApplications(requestBody: AssociateApplicationsPostBody): Observable<AssociateApplicationsResponse> {
			return this.http.post<AssociateApplicationsResponse>(this.baseUri + 'AssociateApplications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associate source servers to application.
		 * Post AssociateSourceServers
		 * @return {AssociateSourceServersResponse} Success
		 */
		AssociateSourceServers(requestBody: AssociateSourceServersPostBody): Observable<AssociateSourceServersResponse> {
			return this.http.post<AssociateSourceServersResponse>(this.baseUri + 'AssociateSourceServers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)
		 * Post ChangeServerLifeCycleState
		 * @return {SourceServer} Success
		 */
		ChangeServerLifeCycleState(requestBody: ChangeServerLifeCycleStatePostBody): Observable<SourceServer> {
			return this.http.post<SourceServer>(this.baseUri + 'ChangeServerLifeCycleState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create application.
		 * Post CreateApplication
		 * @return {void} 
		 */
		CreateApplication(requestBody: CreateApplicationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'CreateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Create wave.
		 * Post CreateWave
		 * @return {void} 
		 */
		CreateWave(requestBody: CreateWavePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'CreateWave', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete application.
		 * Post DeleteApplication
		 * @return {void} 
		 */
		DeleteApplication(requestBody: DeleteApplicationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DeleteApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Deletes a single Replication Configuration Template by ID
		 * Post DeleteReplicationConfigurationTemplate
		 * @return {void} 
		 */
		DeleteReplicationConfigurationTemplate(requestBody: DeleteReplicationConfigurationTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DeleteReplicationConfigurationTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a single source server by ID.
		 * Post DeleteSourceServer
		 * @return {void} 
		 */
		DeleteSourceServer(requestBody: DeleteSourceServerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DeleteSourceServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a given vCenter client by ID.
		 * Post DeleteVcenterClient
		 * @return {void} 
		 */
		DeleteVcenterClient(requestBody: DeleteVcenterClientPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DeleteVcenterClient', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete wave.
		 * Post DeleteWave
		 * @return {void} 
		 */
		DeleteWave(requestBody: DeleteWavePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DeleteWave', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves detailed job log items with paging.
		 * Post DescribeJobLogItems
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeJobLogItemsResponse} Success
		 */
		DescribeJobLogItems(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeJobLogItemsPostBody): Observable<DescribeJobLogItemsResponse> {
			return this.http.post<DescribeJobLogItemsResponse>(this.baseUri + 'DescribeJobLogItems?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
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
		 * Retrieves all SourceServers or multiple SourceServers by ID.
		 * Post DescribeSourceServers
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeSourceServersResponse} Success
		 */
		DescribeSourceServers(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeSourceServersPostBody): Observable<DescribeSourceServersResponse> {
			return this.http.post<DescribeSourceServersResponse>(this.baseUri + 'DescribeSourceServers?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the installed vCenter clients.
		 * Get DescribeVcenterClients
		 * @param {number} maxResults Maximum results to be returned in DescribeVcenterClients.
		 * @param {string} nextToken Next pagination token to be provided for DescribeVcenterClients.
		 * @return {DescribeVcenterClientsResponse} Success
		 */
		DescribeVcenterClients(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<DescribeVcenterClientsResponse> {
			return this.http.get<DescribeVcenterClientsResponse>(this.baseUri + 'DescribeVcenterClients?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Disassociate applications from wave.
		 * Post DisassociateApplications
		 * @return {DisassociateApplicationsResponse} Success
		 */
		DisassociateApplications(requestBody: DisassociateApplicationsPostBody): Observable<DisassociateApplicationsResponse> {
			return this.http.post<DisassociateApplicationsResponse>(this.baseUri + 'DisassociateApplications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociate source servers from application.
		 * Post DisassociateSourceServers
		 * @return {DisassociateSourceServersResponse} Success
		 */
		DisassociateSourceServers(requestBody: DisassociateSourceServersPostBody): Observable<DisassociateSourceServersResponse> {
			return this.http.post<DisassociateSourceServersResponse>(this.baseUri + 'DisassociateSourceServers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
		 * Post DisconnectFromService
		 * @return {SourceServer} Success
		 */
		DisconnectFromService(requestBody: DisconnectFromServicePostBody): Observable<SourceServer> {
			return this.http.post<SourceServer>(this.baseUri + 'DisconnectFromService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
		 * Post FinalizeCutover
		 * @return {SourceServer} Success
		 */
		FinalizeCutover(requestBody: FinalizeCutoverPostBody): Observable<SourceServer> {
			return this.http.post<SourceServer>(this.baseUri + 'FinalizeCutover', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all LaunchConfigurations available, filtered by Source Server IDs.
		 * Post GetLaunchConfiguration
		 * @return {LaunchConfiguration} Success
		 */
		GetLaunchConfiguration(requestBody: GetLaunchConfigurationPostBody): Observable<LaunchConfiguration> {
			return this.http.post<LaunchConfiguration>(this.baseUri + 'GetLaunchConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all ReplicationConfigurations, filtered by Source Server ID.
		 * Post GetReplicationConfiguration
		 * @return {ReplicationConfiguration} Success
		 */
		GetReplicationConfiguration(requestBody: GetReplicationConfigurationPostBody): Observable<ReplicationConfiguration> {
			return this.http.post<ReplicationConfiguration>(this.baseUri + 'GetReplicationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initialize Application Migration Service.
		 * Post InitializeService
		 * @return {void} 
		 */
		InitializeService(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'InitializeService', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves all applications or multiple applications by ID.
		 * Post ListApplications
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListApplicationsResponse} Success
		 */
		ListApplications(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListApplicationsPostBody): Observable<ListApplicationsResponse> {
			return this.http.post<ListApplicationsResponse>(this.baseUri + 'ListApplications?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List export errors.
		 * Post ListExportErrors
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListExportErrorsResponse} Success
		 */
		ListExportErrors(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListExportErrorsPostBody): Observable<ListExportErrorsResponse> {
			return this.http.post<ListExportErrorsResponse>(this.baseUri + 'ListExportErrors?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List exports.
		 * Post ListExports
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListExportsResponse} Success
		 */
		ListExports(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListExportsPostBody): Observable<ListExportsResponse> {
			return this.http.post<ListExportsResponse>(this.baseUri + 'ListExports?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List import errors.
		 * Post ListImportErrors
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImportErrorsResponse} Success
		 */
		ListImportErrors(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListImportErrorsPostBody): Observable<ListImportErrorsResponse> {
			return this.http.post<ListImportErrorsResponse>(this.baseUri + 'ListImportErrors?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List imports.
		 * Post ListImports
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListImportsResponse} Success
		 */
		ListImports(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListImportsPostBody): Observable<ListImportsResponse> {
			return this.http.post<ListImportsResponse>(this.baseUri + 'ListImports?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Managed Accounts.
		 * Post ListManagedAccounts
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListManagedAccountsResponse} Success
		 */
		ListManagedAccounts(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListManagedAccountsPostBody): Observable<ListManagedAccountsResponse> {
			return this.http.post<ListManagedAccountsResponse>(this.baseUri + 'ListManagedAccounts?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List source server post migration custom actions.
		 * Post ListSourceServerActions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSourceServerActionsResponse} Success
		 */
		ListSourceServerActions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSourceServerActionsPostBody): Observable<ListSourceServerActionsResponse> {
			return this.http.post<ListSourceServerActionsResponse>(this.baseUri + 'ListSourceServerActions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all tags for your Application Migration Service resources.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn List tags for resource request by ARN.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn Tag resource by ARN.
		 * @return {void} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List template post migration custom actions.
		 * Post ListTemplateActions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTemplateActionsResponse} Success
		 */
		ListTemplateActions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTemplateActionsPostBody): Observable<ListTemplateActionsResponse> {
			return this.http.post<ListTemplateActionsResponse>(this.baseUri + 'ListTemplateActions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all waves or multiple waves by ID.
		 * Post ListWaves
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListWavesResponse} Success
		 */
		ListWaves(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListWavesPostBody): Observable<ListWavesResponse> {
			return this.http.post<ListWavesResponse>(this.baseUri + 'ListWaves?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.
		 * Post MarkAsArchived
		 * @return {SourceServer} Success
		 */
		MarkAsArchived(requestBody: MarkAsArchivedPostBody): Observable<SourceServer> {
			return this.http.post<SourceServer>(this.baseUri + 'MarkAsArchived', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Pause Replication.
		 * Post PauseReplication
		 * @return {SourceServer} Success
		 */
		PauseReplication(requestBody: PauseReplicationPostBody): Observable<SourceServer> {
			return this.http.post<SourceServer>(this.baseUri + 'PauseReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Put source server post migration custom action.
		 * Post PutSourceServerAction
		 * @return {SourceServerActionDocument} Success
		 */
		PutSourceServerAction(requestBody: PutSourceServerActionPostBody): Observable<SourceServerActionDocument> {
			return this.http.post<SourceServerActionDocument>(this.baseUri + 'PutSourceServerAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Put template post migration custom action.
		 * Post PutTemplateAction
		 * @return {TemplateActionDocument} Success
		 */
		PutTemplateAction(requestBody: PutTemplateActionPostBody): Observable<TemplateActionDocument> {
			return this.http.post<TemplateActionDocument>(this.baseUri + 'PutTemplateAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove source server post migration custom action.
		 * Post RemoveSourceServerAction
		 * @return {void} 
		 */
		RemoveSourceServerAction(requestBody: RemoveSourceServerActionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'RemoveSourceServerAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove template post migration custom action.
		 * Post RemoveTemplateAction
		 * @return {void} 
		 */
		RemoveTemplateAction(requestBody: RemoveTemplateActionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'RemoveTemplateAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resume Replication.
		 * Post ResumeReplication
		 * @return {SourceServer} Success
		 */
		ResumeReplication(requestBody: ResumeReplicationPostBody): Observable<SourceServer> {
			return this.http.post<SourceServer>(this.baseUri + 'ResumeReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.
		 * Post RetryDataReplication
		 * @return {SourceServer} Success
		 */
		RetryDataReplication(requestBody: RetryDataReplicationPostBody): Observable<SourceServer> {
			return this.http.post<SourceServer>(this.baseUri + 'RetryDataReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.
		 * Post StartCutover
		 * @return {void} 
		 */
		StartCutover(requestBody: StartCutoverPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'StartCutover', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Start export.
		 * Post StartExport
		 * @return {void} 
		 */
		StartExport(requestBody: StartExportPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'StartExport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Start import.
		 * Post StartImport
		 * @return {void} 
		 */
		StartImport(requestBody: StartImportPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'StartImport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts replication for SNAPSHOT_SHIPPING agents.
		 * Post StartReplication
		 * @return {SourceServer} Success
		 */
		StartReplication(requestBody: StartReplicationPostBody): Observable<SourceServer> {
			return this.http.post<SourceServer>(this.baseUri + 'StartReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.
		 * Post StartTest
		 * @return {void} 
		 */
		StartTest(requestBody: StartTestPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'StartTest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop Replication.
		 * Post StopReplication
		 * @return {SourceServer} Success
		 */
		StopReplication(requestBody: StopReplicationPostBody): Observable<SourceServer> {
			return this.http.post<SourceServer>(this.baseUri + 'StopReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.
		 * Post TerminateTargetInstances
		 * @return {void} 
		 */
		TerminateTargetInstances(requestBody: TerminateTargetInstancesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'TerminateTargetInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unarchive application.
		 * Post UnarchiveApplication
		 * @return {Application} Success
		 */
		UnarchiveApplication(requestBody: UnarchiveApplicationPostBody): Observable<Application> {
			return this.http.post<Application>(this.baseUri + 'UnarchiveApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unarchive wave.
		 * Post UnarchiveWave
		 * @return {Wave} Success
		 */
		UnarchiveWave(requestBody: UnarchiveWavePostBody): Observable<Wave> {
			return this.http.post<Wave>(this.baseUri + 'UnarchiveWave', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified set of tags from the specified set of Application Migration Service resources.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn Untag resource by ARN.
		 * @param {Array<string>} tagKeys Untag resource by Keys.
		 * @return {void} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update application.
		 * Post UpdateApplication
		 * @return {Application} Success
		 */
		UpdateApplication(requestBody: UpdateApplicationPostBody): Observable<Application> {
			return this.http.post<Application>(this.baseUri + 'UpdateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates multiple LaunchConfigurations by Source Server ID.
		 * Post UpdateLaunchConfiguration
		 * @return {LaunchConfiguration} Success
		 */
		UpdateLaunchConfiguration(requestBody: UpdateLaunchConfigurationPostBody): Observable<LaunchConfiguration> {
			return this.http.post<LaunchConfiguration>(this.baseUri + 'UpdateLaunchConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing Launch Configuration Template by ID.
		 * Post UpdateLaunchConfigurationTemplate
		 * @return {LaunchConfigurationTemplate} Success
		 */
		UpdateLaunchConfigurationTemplate(requestBody: UpdateLaunchConfigurationTemplatePostBody): Observable<LaunchConfigurationTemplate> {
			return this.http.post<LaunchConfigurationTemplate>(this.baseUri + 'UpdateLaunchConfigurationTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to update multiple ReplicationConfigurations by Source Server ID.
		 * Post UpdateReplicationConfiguration
		 * @return {ReplicationConfiguration} Success
		 */
		UpdateReplicationConfiguration(requestBody: UpdateReplicationConfigurationPostBody): Observable<ReplicationConfiguration> {
			return this.http.post<ReplicationConfiguration>(this.baseUri + 'UpdateReplicationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates multiple ReplicationConfigurationTemplates by ID.
		 * Post UpdateReplicationConfigurationTemplate
		 * @return {ReplicationConfigurationTemplate} Success
		 */
		UpdateReplicationConfigurationTemplate(requestBody: UpdateReplicationConfigurationTemplatePostBody): Observable<ReplicationConfigurationTemplate> {
			return this.http.post<ReplicationConfigurationTemplate>(this.baseUri + 'UpdateReplicationConfigurationTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.
		 * Post UpdateSourceServerReplicationType
		 * @return {SourceServer} Success
		 */
		UpdateSourceServerReplicationType(requestBody: UpdateSourceServerReplicationTypePostBody): Observable<SourceServer> {
			return this.http.post<SourceServer>(this.baseUri + 'UpdateSourceServerReplicationType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update wave.
		 * Post UpdateWave
		 * @return {Wave} Success
		 */
		UpdateWave(requestBody: UpdateWavePostBody): Observable<Wave> {
			return this.http.post<Wave>(this.baseUri + 'UpdateWave', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface ArchiveApplicationPostBody {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Application ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		applicationID: string;
	}
	export interface ArchiveApplicationPostBodyFormProperties {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Application ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		applicationID: FormControl<string | null | undefined>,
	}
	export function CreateArchiveApplicationPostBodyFormGroup() {
		return new FormGroup<ArchiveApplicationPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			applicationID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^app-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface ArchiveWavePostBody {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Wave ID.
		 * Required
		 * Max length: 22
		 * Min length: 22
		 */
		waveID: string;
	}
	export interface ArchiveWavePostBodyFormProperties {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Wave ID.
		 * Required
		 * Max length: 22
		 * Min length: 22
		 */
		waveID: FormControl<string | null | undefined>,
	}
	export function CreateArchiveWavePostBodyFormGroup() {
		return new FormGroup<ArchiveWavePostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			waveID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(22), Validators.maxLength(22), Validators.pattern('^wave-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface AssociateApplicationsPostBody {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Application IDs list.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		applicationIDs: Array<string>;

		/**
		 * Wave ID.
		 * Required
		 * Max length: 22
		 * Min length: 22
		 */
		waveID: string;
	}
	export interface AssociateApplicationsPostBodyFormProperties {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Wave ID.
		 * Required
		 * Max length: 22
		 * Min length: 22
		 */
		waveID: FormControl<string | null | undefined>,
	}
	export function CreateAssociateApplicationsPostBodyFormGroup() {
		return new FormGroup<AssociateApplicationsPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			waveID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(22), Validators.maxLength(22), Validators.pattern('^wave-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface AssociateSourceServersPostBody {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Application ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		applicationID: string;

		/**
		 * Source server IDs list.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		sourceServerIDs: Array<string>;
	}
	export interface AssociateSourceServersPostBodyFormProperties {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Application ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		applicationID: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSourceServersPostBodyFormGroup() {
		return new FormGroup<AssociateSourceServersPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			applicationID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^app-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface ChangeServerLifeCycleStatePostBody {

		/**
		 * The request to change the source server migration account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * The request to change the source server migration lifecycle state.
		 * Required
		 */
		lifeCycle: ChangeServerLifeCycleStatePostBodyLifeCycle;

		/**
		 * The request to change the source server migration lifecycle state by source server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface ChangeServerLifeCycleStatePostBodyFormProperties {

		/**
		 * The request to change the source server migration account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * The request to change the source server migration lifecycle state by source server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateChangeServerLifeCycleStatePostBodyFormGroup() {
		return new FormGroup<ChangeServerLifeCycleStatePostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface ChangeServerLifeCycleStatePostBodyLifeCycle {
		state?: ChangeServerLifeCycleStateSourceServerLifecycleState;
	}
	export interface ChangeServerLifeCycleStatePostBodyLifeCycleFormProperties {
		state: FormControl<ChangeServerLifeCycleStateSourceServerLifecycleState | null | undefined>,
	}
	export function CreateChangeServerLifeCycleStatePostBodyLifeCycleFormGroup() {
		return new FormGroup<ChangeServerLifeCycleStatePostBodyLifeCycleFormProperties>({
			state: new FormControl<ChangeServerLifeCycleStateSourceServerLifecycleState | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationPostBody {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Application description.
		 * Max length: 600
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Application name.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;

		/** Application tags. */
		tags?: {[id: string]: string };
	}
	export interface CreateApplicationPostBodyFormProperties {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Application description.
		 * Max length: 600
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Application name.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Application tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateApplicationPostBodyFormGroup() {
		return new FormGroup<CreateApplicationPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(600), Validators.pattern('^[^\x00]*$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[^\s\x00]( *[^\s\x00])*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateLaunchConfigurationTemplatePostBody {

		/** Associate public Ip address. */
		associatePublicIpAddress?: boolean | null;

		/** Launch configuration template boot mode. */
		bootMode?: BootMode | null;

		/** Copy private Ip. */
		copyPrivateIp?: boolean | null;

		/** Copy tags. */
		copyTags?: boolean | null;

		/** Enable map auto tagging. */
		enableMapAutoTagging?: boolean | null;

		/** Launch template disk configuration. */
		largeVolumeConf?: CreateLaunchConfigurationTemplatePostBodyLargeVolumeConf;

		/** Launch disposition. */
		launchDisposition?: LaunchDisposition | null;

		/** Configure Licensing. */
		licensing?: CreateLaunchConfigurationTemplatePostBodyLicensing;

		/**
		 * Launch configuration template map auto tagging MPE ID.
		 * Max length: 256
		 * Min length: 0
		 */
		mapAutoTaggingMpeID?: string | null;

		/** Post Launch Actions to executed on the Test or Cutover instance. */
		postLaunchActions?: CreateLaunchConfigurationTemplatePostBodyPostLaunchActions;

		/** Launch template disk configuration. */
		smallVolumeConf?: CreateLaunchConfigurationTemplatePostBodySmallVolumeConf;

		/**
		 * Small volume maximum size.
		 * Minimum: 0
		 */
		smallVolumeMaxSize?: number | null;

		/** Request to associate tags during creation of a Launch Configuration Template. */
		tags?: {[id: string]: string };

		/** Target instance type right-sizing method. */
		targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | null;
	}
	export interface CreateLaunchConfigurationTemplatePostBodyFormProperties {

		/** Associate public Ip address. */
		associatePublicIpAddress: FormControl<boolean | null | undefined>,

		/** Launch configuration template boot mode. */
		bootMode: FormControl<BootMode | null | undefined>,

		/** Copy private Ip. */
		copyPrivateIp: FormControl<boolean | null | undefined>,

		/** Copy tags. */
		copyTags: FormControl<boolean | null | undefined>,

		/** Enable map auto tagging. */
		enableMapAutoTagging: FormControl<boolean | null | undefined>,

		/** Launch disposition. */
		launchDisposition: FormControl<LaunchDisposition | null | undefined>,

		/**
		 * Launch configuration template map auto tagging MPE ID.
		 * Max length: 256
		 * Min length: 0
		 */
		mapAutoTaggingMpeID: FormControl<string | null | undefined>,

		/**
		 * Small volume maximum size.
		 * Minimum: 0
		 */
		smallVolumeMaxSize: FormControl<number | null | undefined>,

		/** Request to associate tags during creation of a Launch Configuration Template. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Target instance type right-sizing method. */
		targetInstanceTypeRightSizingMethod: FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>,
	}
	export function CreateCreateLaunchConfigurationTemplatePostBodyFormGroup() {
		return new FormGroup<CreateLaunchConfigurationTemplatePostBodyFormProperties>({
			associatePublicIpAddress: new FormControl<boolean | null | undefined>(undefined),
			bootMode: new FormControl<BootMode | null | undefined>(undefined),
			copyPrivateIp: new FormControl<boolean | null | undefined>(undefined),
			copyTags: new FormControl<boolean | null | undefined>(undefined),
			enableMapAutoTagging: new FormControl<boolean | null | undefined>(undefined),
			launchDisposition: new FormControl<LaunchDisposition | null | undefined>(undefined),
			mapAutoTaggingMpeID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			smallVolumeMaxSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			targetInstanceTypeRightSizingMethod: new FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>(undefined),
		});

	}

	export interface CreateLaunchConfigurationTemplatePostBodyLargeVolumeConf {
		iops?: number | null;
		throughput?: number | null;
		volumeType?: VolumeType;
	}
	export interface CreateLaunchConfigurationTemplatePostBodyLargeVolumeConfFormProperties {
		iops: FormControl<number | null | undefined>,
		throughput: FormControl<number | null | undefined>,
		volumeType: FormControl<VolumeType | null | undefined>,
	}
	export function CreateCreateLaunchConfigurationTemplatePostBodyLargeVolumeConfFormGroup() {
		return new FormGroup<CreateLaunchConfigurationTemplatePostBodyLargeVolumeConfFormProperties>({
			iops: new FormControl<number | null | undefined>(undefined),
			throughput: new FormControl<number | null | undefined>(undefined),
			volumeType: new FormControl<VolumeType | null | undefined>(undefined),
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

	export interface CreateLaunchConfigurationTemplatePostBodyPostLaunchActions {
		cloudWatchLogGroupName?: string;
		deployment?: PostLaunchActionsDeploymentType;
		s3LogBucket?: string;
		s3OutputKeyPrefix?: string;
		ssmDocuments?: Array<SsmDocument>;
	}
	export interface CreateLaunchConfigurationTemplatePostBodyPostLaunchActionsFormProperties {
		cloudWatchLogGroupName: FormControl<string | null | undefined>,
		deployment: FormControl<PostLaunchActionsDeploymentType | null | undefined>,
		s3LogBucket: FormControl<string | null | undefined>,
		s3OutputKeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateCreateLaunchConfigurationTemplatePostBodyPostLaunchActionsFormGroup() {
		return new FormGroup<CreateLaunchConfigurationTemplatePostBodyPostLaunchActionsFormProperties>({
			cloudWatchLogGroupName: new FormControl<string | null | undefined>(undefined),
			deployment: new FormControl<PostLaunchActionsDeploymentType | null | undefined>(undefined),
			s3LogBucket: new FormControl<string | null | undefined>(undefined),
			s3OutputKeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLaunchConfigurationTemplatePostBodySmallVolumeConf {
		iops?: number | null;
		throughput?: number | null;
		volumeType?: VolumeType;
	}
	export interface CreateLaunchConfigurationTemplatePostBodySmallVolumeConfFormProperties {
		iops: FormControl<number | null | undefined>,
		throughput: FormControl<number | null | undefined>,
		volumeType: FormControl<VolumeType | null | undefined>,
	}
	export function CreateCreateLaunchConfigurationTemplatePostBodySmallVolumeConfFormGroup() {
		return new FormGroup<CreateLaunchConfigurationTemplatePostBodySmallVolumeConfFormProperties>({
			iops: new FormControl<number | null | undefined>(undefined),
			throughput: new FormControl<number | null | undefined>(undefined),
			volumeType: new FormControl<VolumeType | null | undefined>(undefined),
		});

	}

	export interface CreateReplicationConfigurationTemplatePostBody {

		/**
		 * Request to associate the default Application Migration Service Security group with the Replication Settings template.
		 * Required
		 */
		associateDefaultSecurityGroup: boolean;

		/**
		 * Request to configure bandwidth throttling during Replication Settings template creation.
		 * Required
		 * Minimum: 0
		 * Maximum: 10000
		 */
		bandwidthThrottling: number;

		/**
		 * Request to create Public IP during Replication Settings template creation.
		 * Required
		 */
		createPublicIP: boolean;

		/**
		 * Request to configure data plane routing during Replication Settings template creation.
		 * Required
		 */
		dataPlaneRouting: ReplicationConfigurationDataPlaneRouting;

		/**
		 * Request to configure the default large staging disk EBS volume type during Replication Settings template creation.
		 * Required
		 */
		defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskType;

		/**
		 * Request to configure EBS encryption during Replication Settings template creation.
		 * Required
		 */
		ebsEncryption: ReplicationConfigurationEbsEncryption;

		/**
		 * Request to configure an EBS encryption key during Replication Settings template creation.
		 * Max length: 2048
		 * Min length: 20
		 */
		ebsEncryptionKeyArn?: string | null;

		/**
		 * Request to configure the Replication Server instance type during Replication Settings template creation.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		replicationServerInstanceType: string;

		/**
		 * Request to configure the Replication Server Security group ID during Replication Settings template creation.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 32
		 */
		replicationServersSecurityGroupsIDs: Array<string>;

		/**
		 * Request to configure the Staging Area subnet ID during Replication Settings template creation.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		stagingAreaSubnetId: string;

		/**
		 * Request to configure Staging Area tags during Replication Settings template creation.
		 * Required
		 */
		stagingAreaTags: {[id: string]: string };

		/** Request to configure tags during Replication Settings template creation. */
		tags?: {[id: string]: string };

		/**
		 * Request to use Dedicated Replication Servers during Replication Settings template creation.
		 * Required
		 */
		useDedicatedReplicationServer: boolean;

		/** Request to use Fips Endpoint during Replication Settings template creation. */
		useFipsEndpoint?: boolean | null;
	}
	export interface CreateReplicationConfigurationTemplatePostBodyFormProperties {

		/**
		 * Request to associate the default Application Migration Service Security group with the Replication Settings template.
		 * Required
		 */
		associateDefaultSecurityGroup: FormControl<boolean | null | undefined>,

		/**
		 * Request to configure bandwidth throttling during Replication Settings template creation.
		 * Required
		 * Minimum: 0
		 * Maximum: 10000
		 */
		bandwidthThrottling: FormControl<number | null | undefined>,

		/**
		 * Request to create Public IP during Replication Settings template creation.
		 * Required
		 */
		createPublicIP: FormControl<boolean | null | undefined>,

		/**
		 * Request to configure data plane routing during Replication Settings template creation.
		 * Required
		 */
		dataPlaneRouting: FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>,

		/**
		 * Request to configure the default large staging disk EBS volume type during Replication Settings template creation.
		 * Required
		 */
		defaultLargeStagingDiskType: FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>,

		/**
		 * Request to configure EBS encryption during Replication Settings template creation.
		 * Required
		 */
		ebsEncryption: FormControl<ReplicationConfigurationEbsEncryption | null | undefined>,

		/**
		 * Request to configure an EBS encryption key during Replication Settings template creation.
		 * Max length: 2048
		 * Min length: 20
		 */
		ebsEncryptionKeyArn: FormControl<string | null | undefined>,

		/**
		 * Request to configure the Replication Server instance type during Replication Settings template creation.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		replicationServerInstanceType: FormControl<string | null | undefined>,

		/**
		 * Request to configure the Staging Area subnet ID during Replication Settings template creation.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		stagingAreaSubnetId: FormControl<string | null | undefined>,

		/**
		 * Request to configure Staging Area tags during Replication Settings template creation.
		 * Required
		 */
		stagingAreaTags: FormControl<{[id: string]: string } | null | undefined>,

		/** Request to configure tags during Replication Settings template creation. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Request to use Dedicated Replication Servers during Replication Settings template creation.
		 * Required
		 */
		useDedicatedReplicationServer: FormControl<boolean | null | undefined>,

		/** Request to use Fips Endpoint during Replication Settings template creation. */
		useFipsEndpoint: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateReplicationConfigurationTemplatePostBodyFormGroup() {
		return new FormGroup<CreateReplicationConfigurationTemplatePostBodyFormProperties>({
			associateDefaultSecurityGroup: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			bandwidthThrottling: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(10000)]),
			createPublicIP: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			dataPlaneRouting: new FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>(undefined, [Validators.required]),
			defaultLargeStagingDiskType: new FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>(undefined, [Validators.required]),
			ebsEncryption: new FormControl<ReplicationConfigurationEbsEncryption | null | undefined>(undefined, [Validators.required]),
			ebsEncryptionKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			replicationServerInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
			stagingAreaSubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255), Validators.pattern('^subnet-[0-9a-fA-F]{8,}$')]),
			stagingAreaTags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			useDedicatedReplicationServer: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			useFipsEndpoint: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateWavePostBody {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Wave description.
		 * Max length: 600
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Wave name.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;

		/** Wave tags. */
		tags?: {[id: string]: string };
	}
	export interface CreateWavePostBodyFormProperties {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Wave description.
		 * Max length: 600
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Wave name.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Wave tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateWavePostBodyFormGroup() {
		return new FormGroup<CreateWavePostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(600), Validators.pattern('^[^\x00]*$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[^\s\x00]( *[^\s\x00])*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface DeleteApplicationPostBody {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Application ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		applicationID: string;
	}
	export interface DeleteApplicationPostBodyFormProperties {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Application ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		applicationID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationPostBodyFormGroup() {
		return new FormGroup<DeleteApplicationPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			applicationID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^app-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface DeleteJobPostBody {

		/**
		 * Request to delete Job from service by Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Request to delete Job from service by Job ID.
		 * Required
		 * Max length: 24
		 * Min length: 24
		 */
		jobID: string;
	}
	export interface DeleteJobPostBodyFormProperties {

		/**
		 * Request to delete Job from service by Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Request to delete Job from service by Job ID.
		 * Required
		 * Max length: 24
		 * Min length: 24
		 */
		jobID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteJobPostBodyFormGroup() {
		return new FormGroup<DeleteJobPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			jobID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(24), Validators.maxLength(24), Validators.pattern('^mgnjob-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface DeleteLaunchConfigurationTemplatePostBody {

		/**
		 * ID of resource to be deleted.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		launchConfigurationTemplateID: string;
	}
	export interface DeleteLaunchConfigurationTemplatePostBodyFormProperties {

		/**
		 * ID of resource to be deleted.
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

	export interface DeleteReplicationConfigurationTemplatePostBody {

		/**
		 * Request to delete Replication Configuration Template from service by Replication Configuration Template ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		replicationConfigurationTemplateID: string;
	}
	export interface DeleteReplicationConfigurationTemplatePostBodyFormProperties {

		/**
		 * Request to delete Replication Configuration Template from service by Replication Configuration Template ID.
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

	export interface DeleteSourceServerPostBody {

		/**
		 * Request to delete Source Server from service by Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Request to delete Source Server from service by Server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface DeleteSourceServerPostBodyFormProperties {

		/**
		 * Request to delete Source Server from service by Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Request to delete Source Server from service by Server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSourceServerPostBodyFormGroup() {
		return new FormGroup<DeleteSourceServerPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface DeleteVcenterClientPostBody {

		/**
		 * ID of resource to be deleted.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		vcenterClientID: string;
	}
	export interface DeleteVcenterClientPostBodyFormProperties {

		/**
		 * ID of resource to be deleted.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		vcenterClientID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVcenterClientPostBodyFormGroup() {
		return new FormGroup<DeleteVcenterClientPostBodyFormProperties>({
			vcenterClientID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^vcc-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface DeleteWavePostBody {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Wave ID.
		 * Required
		 * Max length: 22
		 * Min length: 22
		 */
		waveID: string;
	}
	export interface DeleteWavePostBodyFormProperties {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Wave ID.
		 * Required
		 * Max length: 22
		 * Min length: 22
		 */
		waveID: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWavePostBodyFormGroup() {
		return new FormGroup<DeleteWavePostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			waveID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(22), Validators.maxLength(22), Validators.pattern('^wave-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface DescribeJobLogItemsPostBody {

		/**
		 * Request to describe Job log Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Request to describe Job log job ID.
		 * Required
		 * Max length: 24
		 * Min length: 24
		 */
		jobID: string;

		/**
		 * Request to describe Job log item maximum results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * Request to describe Job log next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface DescribeJobLogItemsPostBodyFormProperties {

		/**
		 * Request to describe Job log Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Request to describe Job log job ID.
		 * Required
		 * Max length: 24
		 * Min length: 24
		 */
		jobID: FormControl<string | null | undefined>,

		/**
		 * Request to describe Job log item maximum results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Request to describe Job log next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobLogItemsPostBodyFormGroup() {
		return new FormGroup<DescribeJobLogItemsPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			jobID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(24), Validators.maxLength(24), Validators.pattern('^mgnjob-[0-9a-zA-Z]{17}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeJobsPostBody {

		/**
		 * Request to describe job log items by Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/** Request to describe Job log filters. */
		filters?: DescribeJobsPostBodyFilters;

		/**
		 * Request to describe job log items by max results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * Request to describe job log items by next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface DescribeJobsPostBodyFormProperties {

		/**
		 * Request to describe job log items by Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Request to describe job log items by max results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Request to describe job log items by next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobsPostBodyFormGroup() {
		return new FormGroup<DescribeJobsPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
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
		 * Maximum items: 200
		 */
		launchConfigurationTemplateIDs?: Array<string>;

		/**
		 * Maximum results to be returned in DescribeLaunchConfigurationTemplates.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * Next pagination token returned from DescribeLaunchConfigurationTemplates.
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
		 * Next pagination token returned from DescribeLaunchConfigurationTemplates.
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

	export interface DescribeReplicationConfigurationTemplatesPostBody {

		/**
		 * Request to describe Replication Configuration template by max results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * Request to describe Replication Configuration template by next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;

		/**
		 * Request to describe Replication Configuration template by template IDs.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		replicationConfigurationTemplateIDs?: Array<string>;
	}
	export interface DescribeReplicationConfigurationTemplatesPostBodyFormProperties {

		/**
		 * Request to describe Replication Configuration template by max results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Request to describe Replication Configuration template by next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationConfigurationTemplatesPostBodyFormGroup() {
		return new FormGroup<DescribeReplicationConfigurationTemplatesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeSourceServersPostBody {

		/**
		 * Request to filter Source Servers list by Accoun ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/** Request to filter Source Servers list. */
		filters?: DescribeSourceServersPostBodyFilters;

		/**
		 * Request to filter Source Servers list by maximum results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * Request to filter Source Servers list by next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface DescribeSourceServersPostBodyFormProperties {

		/**
		 * Request to filter Source Servers list by Accoun ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Request to filter Source Servers list by maximum results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Request to filter Source Servers list by next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSourceServersPostBodyFormGroup() {
		return new FormGroup<DescribeSourceServersPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeSourceServersPostBodyFilters {
		applicationIDs?: Array<string>;
		isArchived?: boolean | null;
		lifeCycleStates?: Array<LifeCycleState>;
		replicationTypes?: Array<ReplicationType>;
		sourceServerIDs?: Array<string>;
	}
	export interface DescribeSourceServersPostBodyFiltersFormProperties {
		isArchived: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeSourceServersPostBodyFiltersFormGroup() {
		return new FormGroup<DescribeSourceServersPostBodyFiltersFormProperties>({
			isArchived: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DisassociateApplicationsPostBody {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Application IDs list.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		applicationIDs: Array<string>;

		/**
		 * Wave ID.
		 * Required
		 * Max length: 22
		 * Min length: 22
		 */
		waveID: string;
	}
	export interface DisassociateApplicationsPostBodyFormProperties {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Wave ID.
		 * Required
		 * Max length: 22
		 * Min length: 22
		 */
		waveID: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateApplicationsPostBodyFormGroup() {
		return new FormGroup<DisassociateApplicationsPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			waveID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(22), Validators.maxLength(22), Validators.pattern('^wave-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface DisassociateSourceServersPostBody {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Application ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		applicationID: string;

		/**
		 * Source server IDs list.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		sourceServerIDs: Array<string>;
	}
	export interface DisassociateSourceServersPostBodyFormProperties {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Application ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		applicationID: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateSourceServersPostBodyFormGroup() {
		return new FormGroup<DisassociateSourceServersPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			applicationID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^app-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface DisconnectFromServicePostBody {

		/**
		 * Request to disconnect Source Server from service by Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Request to disconnect Source Server from service by Server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface DisconnectFromServicePostBodyFormProperties {

		/**
		 * Request to disconnect Source Server from service by Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Request to disconnect Source Server from service by Server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectFromServicePostBodyFormGroup() {
		return new FormGroup<DisconnectFromServicePostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface FinalizeCutoverPostBody {

		/**
		 * Request to finalize Cutover by Source Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Request to finalize Cutover by Source Server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface FinalizeCutoverPostBodyFormProperties {

		/**
		 * Request to finalize Cutover by Source Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Request to finalize Cutover by Source Server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateFinalizeCutoverPostBodyFormGroup() {
		return new FormGroup<FinalizeCutoverPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface GetLaunchConfigurationPostBody {

		/**
		 * Request to get Launch Configuration information by Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Request to get Launch Configuration information by Source Server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface GetLaunchConfigurationPostBodyFormProperties {

		/**
		 * Request to get Launch Configuration information by Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Request to get Launch Configuration information by Source Server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateGetLaunchConfigurationPostBodyFormGroup() {
		return new FormGroup<GetLaunchConfigurationPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface GetReplicationConfigurationPostBody {

		/**
		 * Request to get Replication Configuration by Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Request to get Replication Configuration by Source Server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface GetReplicationConfigurationPostBodyFormProperties {

		/**
		 * Request to get Replication Configuration by Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Request to get Replication Configuration by Source Server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateGetReplicationConfigurationPostBodyFormGroup() {
		return new FormGroup<GetReplicationConfigurationPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface ListApplicationsPostBody {

		/**
		 * Applications list Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/** Applications list filters. */
		filters?: ListApplicationsPostBodyFilters;

		/**
		 * Maximum results to return when listing applications.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * Request next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListApplicationsPostBodyFormProperties {

		/**
		 * Applications list Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Maximum results to return when listing applications.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Request next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsPostBodyFormGroup() {
		return new FormGroup<ListApplicationsPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface ListApplicationsPostBodyFilters {
		applicationIDs?: Array<string>;
		isArchived?: boolean | null;
		waveIDs?: Array<string>;
	}
	export interface ListApplicationsPostBodyFiltersFormProperties {
		isArchived: FormControl<boolean | null | undefined>,
	}
	export function CreateListApplicationsPostBodyFiltersFormGroup() {
		return new FormGroup<ListApplicationsPostBodyFiltersFormProperties>({
			isArchived: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListExportErrorsPostBody {

		/**
		 * List export errors request export id.
		 * Required
		 * Max length: 24
		 * Min length: 24
		 */
		exportID: string;

		/**
		 * List export errors request max results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * List export errors request next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListExportErrorsPostBodyFormProperties {

		/**
		 * List export errors request export id.
		 * Required
		 * Max length: 24
		 * Min length: 24
		 */
		exportID: FormControl<string | null | undefined>,

		/**
		 * List export errors request max results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * List export errors request next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExportErrorsPostBodyFormGroup() {
		return new FormGroup<ListExportErrorsPostBodyFormProperties>({
			exportID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(24), Validators.maxLength(24), Validators.pattern('^export-[0-9a-zA-Z]{17}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface ListExportsPostBody {

		/** List exports request filters. */
		filters?: ListExportsPostBodyFilters;

		/**
		 * List export request max results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * List export request next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListExportsPostBodyFormProperties {

		/**
		 * List export request max results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * List export request next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExportsPostBodyFormGroup() {
		return new FormGroup<ListExportsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface ListExportsPostBodyFilters {
		exportIDs?: Array<string>;
	}
	export interface ListExportsPostBodyFiltersFormProperties {
	}
	export function CreateListExportsPostBodyFiltersFormGroup() {
		return new FormGroup<ListExportsPostBodyFiltersFormProperties>({
		});

	}

	export interface ListImportErrorsPostBody {

		/**
		 * List import errors request import id.
		 * Required
		 * Max length: 24
		 * Min length: 24
		 */
		importID: string;

		/**
		 * List import errors request max results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * List import errors request next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListImportErrorsPostBodyFormProperties {

		/**
		 * List import errors request import id.
		 * Required
		 * Max length: 24
		 * Min length: 24
		 */
		importID: FormControl<string | null | undefined>,

		/**
		 * List import errors request max results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * List import errors request next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportErrorsPostBodyFormGroup() {
		return new FormGroup<ListImportErrorsPostBodyFormProperties>({
			importID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(24), Validators.maxLength(24), Validators.pattern('^import-[0-9a-zA-Z]{17}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface ListImportsPostBody {

		/** List imports request filters. */
		filters?: ListImportsPostBodyFilters;

		/**
		 * List imports request max results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * List imports request next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListImportsPostBodyFormProperties {

		/**
		 * List imports request max results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * List imports request next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportsPostBodyFormGroup() {
		return new FormGroup<ListImportsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface ListImportsPostBodyFilters {
		importIDs?: Array<string>;
	}
	export interface ListImportsPostBodyFiltersFormProperties {
	}
	export function CreateListImportsPostBodyFiltersFormGroup() {
		return new FormGroup<ListImportsPostBodyFiltersFormProperties>({
		});

	}

	export interface ListManagedAccountsPostBody {

		/**
		 * List managed accounts request max results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * List managed accounts request next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListManagedAccountsPostBodyFormProperties {

		/**
		 * List managed accounts request max results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * List managed accounts request next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListManagedAccountsPostBodyFormGroup() {
		return new FormGroup<ListManagedAccountsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface ListSourceServerActionsPostBody {

		/**
		 * Account ID to return when listing source server post migration custom actions.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/** Source server post migration custom action filters. */
		filters?: ListSourceServerActionsPostBodyFilters;

		/**
		 * Maximum amount of items to return when listing source server post migration custom actions.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * Next token to use when listing source server post migration custom actions.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;

		/**
		 * Source server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface ListSourceServerActionsPostBodyFormProperties {

		/**
		 * Account ID to return when listing source server post migration custom actions.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Maximum amount of items to return when listing source server post migration custom actions.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Next token to use when listing source server post migration custom actions.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Source server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateListSourceServerActionsPostBodyFormGroup() {
		return new FormGroup<ListSourceServerActionsPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface ListSourceServerActionsPostBodyFilters {
		actionIDs?: Array<string>;
	}
	export interface ListSourceServerActionsPostBodyFiltersFormProperties {
	}
	export function CreateListSourceServerActionsPostBodyFiltersFormGroup() {
		return new FormGroup<ListSourceServerActionsPostBodyFiltersFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Tag resource by Tags.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Tag resource by Tags.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTemplateActionsPostBody {

		/** Template post migration custom action filters. */
		filters?: ListTemplateActionsPostBodyFilters;

		/**
		 * Launch configuration template ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		launchConfigurationTemplateID: string;

		/**
		 * Maximum amount of items to return when listing template post migration custom actions.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * Next token to use when listing template post migration custom actions.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListTemplateActionsPostBodyFormProperties {

		/**
		 * Launch configuration template ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		launchConfigurationTemplateID: FormControl<string | null | undefined>,

		/**
		 * Maximum amount of items to return when listing template post migration custom actions.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Next token to use when listing template post migration custom actions.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTemplateActionsPostBodyFormGroup() {
		return new FormGroup<ListTemplateActionsPostBodyFormProperties>({
			launchConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^lct-[0-9a-zA-Z]{17}$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface ListTemplateActionsPostBodyFilters {
		actionIDs?: Array<string>;
	}
	export interface ListTemplateActionsPostBodyFiltersFormProperties {
	}
	export function CreateListTemplateActionsPostBodyFiltersFormGroup() {
		return new FormGroup<ListTemplateActionsPostBodyFiltersFormProperties>({
		});

	}

	export interface ListWavesPostBody {

		/**
		 * Request account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/** Waves list filters. */
		filters?: ListWavesPostBodyFilters;

		/**
		 * Maximum results to return when listing waves.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * Request next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListWavesPostBodyFormProperties {

		/**
		 * Request account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Maximum results to return when listing waves.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Request next token.
		 * Max length: 2048
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWavesPostBodyFormGroup() {
		return new FormGroup<ListWavesPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
		});

	}

	export interface ListWavesPostBodyFilters {
		isArchived?: boolean | null;
		waveIDs?: Array<string>;
	}
	export interface ListWavesPostBodyFiltersFormProperties {
		isArchived: FormControl<boolean | null | undefined>,
	}
	export function CreateListWavesPostBodyFiltersFormGroup() {
		return new FormGroup<ListWavesPostBodyFiltersFormProperties>({
			isArchived: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MarkAsArchivedPostBody {

		/**
		 * Mark as archived by Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Mark as archived by Source Server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface MarkAsArchivedPostBodyFormProperties {

		/**
		 * Mark as archived by Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Mark as archived by Source Server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateMarkAsArchivedPostBodyFormGroup() {
		return new FormGroup<MarkAsArchivedPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface PauseReplicationPostBody {

		/**
		 * Pause Replication Request account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Pause Replication Request source server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface PauseReplicationPostBodyFormProperties {

		/**
		 * Pause Replication Request account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Pause Replication Request source server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreatePauseReplicationPostBodyFormGroup() {
		return new FormGroup<PauseReplicationPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface PutSourceServerActionPostBody {

		/**
		 * Source server post migration custom account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Source server post migration custom action ID.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		actionID: string;

		/**
		 * Source server post migration custom action name.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		actionName: string;

		/** Source server post migration custom action active status. */
		active?: boolean | null;

		/** Source server post migration custom action category. */
		category?: ActionCategory | null;

		/**
		 * Source server post migration custom action description.
		 * Max length: 256
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Source server post migration custom action document identifier.
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		documentIdentifier: string;

		/** Source server post migration custom action document version. */
		documentVersion?: string | null;

		/** Source server post migration custom action external parameters. */
		externalParameters?: {[id: string]: SsmExternalParameter };

		/** Source server post migration custom action must succeed for cutover. */
		mustSucceedForCutover?: boolean | null;

		/**
		 * Source server post migration custom action order.
		 * Required
		 * Minimum: 1001
		 * Maximum: 10000
		 */
		order: number;

		/** Source server post migration custom action parameters. */
		parameters?: {[id: string]: Array<SsmParameterStoreParameter> };

		/**
		 * Source server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;

		/**
		 * Source server post migration custom action timeout in seconds.
		 * Minimum: 1
		 */
		timeoutSeconds?: number | null;
	}
	export interface PutSourceServerActionPostBodyFormProperties {

		/**
		 * Source server post migration custom account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Source server post migration custom action ID.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		actionID: FormControl<string | null | undefined>,

		/**
		 * Source server post migration custom action name.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		actionName: FormControl<string | null | undefined>,

		/** Source server post migration custom action active status. */
		active: FormControl<boolean | null | undefined>,

		/** Source server post migration custom action category. */
		category: FormControl<ActionCategory | null | undefined>,

		/**
		 * Source server post migration custom action description.
		 * Max length: 256
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Source server post migration custom action document identifier.
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		documentIdentifier: FormControl<string | null | undefined>,

		/** Source server post migration custom action document version. */
		documentVersion: FormControl<string | null | undefined>,

		/** Source server post migration custom action external parameters. */
		externalParameters: FormControl<{[id: string]: SsmExternalParameter } | null | undefined>,

		/** Source server post migration custom action must succeed for cutover. */
		mustSucceedForCutover: FormControl<boolean | null | undefined>,

		/**
		 * Source server post migration custom action order.
		 * Required
		 * Minimum: 1001
		 * Maximum: 10000
		 */
		order: FormControl<number | null | undefined>,

		/** Source server post migration custom action parameters. */
		parameters: FormControl<{[id: string]: Array<SsmParameterStoreParameter> } | null | undefined>,

		/**
		 * Source server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,

		/**
		 * Source server post migration custom action timeout in seconds.
		 * Minimum: 1
		 */
		timeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreatePutSourceServerActionPostBodyFormGroup() {
		return new FormGroup<PutSourceServerActionPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			actionID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[0-9a-zA-Z]$')]),
			actionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[^\s\x00]( *[^\s\x00])*$')]),
			active: new FormControl<boolean | null | undefined>(undefined),
			category: new FormControl<ActionCategory | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('^[0-9a-zA-Z ():/.,\'-_#*; ]*$')]),
			documentIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			documentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\$DEFAULT|\$LATEST|[0-9]+)$')]),
			externalParameters: new FormControl<{[id: string]: SsmExternalParameter } | null | undefined>(undefined),
			mustSucceedForCutover: new FormControl<boolean | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1001), Validators.max(10000)]),
			parameters: new FormControl<{[id: string]: Array<SsmParameterStoreParameter> } | null | undefined>(undefined),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface PutTemplateActionPostBody {

		/**
		 * Template post migration custom action ID.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		actionID: string;

		/**
		 * Template post migration custom action name.
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		actionName: string;

		/** Template post migration custom action active status. */
		active?: boolean | null;

		/** Template post migration custom action category. */
		category?: ActionCategory | null;

		/**
		 * Template post migration custom action description.
		 * Max length: 256
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Template post migration custom action document identifier.
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		documentIdentifier: string;

		/** Template post migration custom action document version. */
		documentVersion?: string | null;

		/** Template post migration custom action external parameters. */
		externalParameters?: {[id: string]: SsmExternalParameter };

		/**
		 * Launch configuration template ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		launchConfigurationTemplateID: string;

		/** Template post migration custom action must succeed for cutover. */
		mustSucceedForCutover?: boolean | null;

		/** Operating system eligible for this template post migration custom action. */
		operatingSystem?: string | null;

		/**
		 * Template post migration custom action order.
		 * Required
		 * Minimum: 1001
		 * Maximum: 10000
		 */
		order: number;

		/** Template post migration custom action parameters. */
		parameters?: {[id: string]: Array<SsmParameterStoreParameter> };

		/**
		 * Template post migration custom action timeout in seconds.
		 * Minimum: 1
		 */
		timeoutSeconds?: number | null;
	}
	export interface PutTemplateActionPostBodyFormProperties {

		/**
		 * Template post migration custom action ID.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		actionID: FormControl<string | null | undefined>,

		/**
		 * Template post migration custom action name.
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		actionName: FormControl<string | null | undefined>,

		/** Template post migration custom action active status. */
		active: FormControl<boolean | null | undefined>,

		/** Template post migration custom action category. */
		category: FormControl<ActionCategory | null | undefined>,

		/**
		 * Template post migration custom action description.
		 * Max length: 256
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Template post migration custom action document identifier.
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		documentIdentifier: FormControl<string | null | undefined>,

		/** Template post migration custom action document version. */
		documentVersion: FormControl<string | null | undefined>,

		/** Template post migration custom action external parameters. */
		externalParameters: FormControl<{[id: string]: SsmExternalParameter } | null | undefined>,

		/**
		 * Launch configuration template ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		launchConfigurationTemplateID: FormControl<string | null | undefined>,

		/** Template post migration custom action must succeed for cutover. */
		mustSucceedForCutover: FormControl<boolean | null | undefined>,

		/** Operating system eligible for this template post migration custom action. */
		operatingSystem: FormControl<string | null | undefined>,

		/**
		 * Template post migration custom action order.
		 * Required
		 * Minimum: 1001
		 * Maximum: 10000
		 */
		order: FormControl<number | null | undefined>,

		/** Template post migration custom action parameters. */
		parameters: FormControl<{[id: string]: Array<SsmParameterStoreParameter> } | null | undefined>,

		/**
		 * Template post migration custom action timeout in seconds.
		 * Minimum: 1
		 */
		timeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreatePutTemplateActionPostBodyFormGroup() {
		return new FormGroup<PutTemplateActionPostBodyFormProperties>({
			actionID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[0-9a-zA-Z]$')]),
			actionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			active: new FormControl<boolean | null | undefined>(undefined),
			category: new FormControl<ActionCategory | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('^[0-9a-zA-Z ():/.,\'-_#*; ]*$')]),
			documentIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			documentVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\$DEFAULT|\$LATEST|[0-9]+)$')]),
			externalParameters: new FormControl<{[id: string]: SsmExternalParameter } | null | undefined>(undefined),
			launchConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^lct-[0-9a-zA-Z]{17}$')]),
			mustSucceedForCutover: new FormControl<boolean | null | undefined>(undefined),
			operatingSystem: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(linux|windows)$')]),
			order: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1001), Validators.max(10000)]),
			parameters: new FormControl<{[id: string]: Array<SsmParameterStoreParameter> } | null | undefined>(undefined),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface RemoveSourceServerActionPostBody {

		/**
		 * Source server post migration account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Source server post migration custom action ID to remove.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		actionID: string;

		/**
		 * Source server ID of the post migration custom action to remove.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface RemoveSourceServerActionPostBodyFormProperties {

		/**
		 * Source server post migration account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Source server post migration custom action ID to remove.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		actionID: FormControl<string | null | undefined>,

		/**
		 * Source server ID of the post migration custom action to remove.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateRemoveSourceServerActionPostBodyFormGroup() {
		return new FormGroup<RemoveSourceServerActionPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			actionID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[0-9a-zA-Z]$')]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface RemoveTemplateActionPostBody {

		/**
		 * Template post migration custom action ID to remove.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		actionID: string;

		/**
		 * Launch configuration template ID of the post migration custom action to remove.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		launchConfigurationTemplateID: string;
	}
	export interface RemoveTemplateActionPostBodyFormProperties {

		/**
		 * Template post migration custom action ID to remove.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		actionID: FormControl<string | null | undefined>,

		/**
		 * Launch configuration template ID of the post migration custom action to remove.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		launchConfigurationTemplateID: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTemplateActionPostBodyFormGroup() {
		return new FormGroup<RemoveTemplateActionPostBodyFormProperties>({
			actionID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[0-9a-zA-Z]$')]),
			launchConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^lct-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface ResumeReplicationPostBody {

		/**
		 * Resume Replication Request account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Resume Replication Request source server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface ResumeReplicationPostBodyFormProperties {

		/**
		 * Resume Replication Request account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Resume Replication Request source server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateResumeReplicationPostBodyFormGroup() {
		return new FormGroup<ResumeReplicationPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface RetryDataReplicationPostBody {

		/**
		 * Retry data replication for Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Retry data replication for Source Server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface RetryDataReplicationPostBodyFormProperties {

		/**
		 * Retry data replication for Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Retry data replication for Source Server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateRetryDataReplicationPostBodyFormGroup() {
		return new FormGroup<RetryDataReplicationPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface StartCutoverPostBody {

		/**
		 * Start Cutover by Account IDs
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Start Cutover by Source Server IDs.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		sourceServerIDs: Array<string>;

		/** Start Cutover by Tags. */
		tags?: {[id: string]: string };
	}
	export interface StartCutoverPostBodyFormProperties {

		/**
		 * Start Cutover by Account IDs
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/** Start Cutover by Tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartCutoverPostBodyFormGroup() {
		return new FormGroup<StartCutoverPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartExportPostBody {

		/**
		 * Start export request s3 bucket.
		 * Required
		 */
		s3Bucket: string;

		/**
		 * Start export request s3 bucket owner.
		 * Max length: 12
		 * Min length: 12
		 */
		s3BucketOwner?: string | null;

		/**
		 * Start export request s3key.
		 * Required
		 */
		s3Key: string;
	}
	export interface StartExportPostBodyFormProperties {

		/**
		 * Start export request s3 bucket.
		 * Required
		 */
		s3Bucket: FormControl<string | null | undefined>,

		/**
		 * Start export request s3 bucket owner.
		 * Max length: 12
		 * Min length: 12
		 */
		s3BucketOwner: FormControl<string | null | undefined>,

		/**
		 * Start export request s3key.
		 * Required
		 */
		s3Key: FormControl<string | null | undefined>,
	}
	export function CreateStartExportPostBodyFormGroup() {
		return new FormGroup<StartExportPostBodyFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9.\-_]{1,255}$')]),
			s3BucketOwner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			s3Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[^\x00]{1,1020}\.csv$')]),
		});

	}

	export interface StartImportPostBody {

		/**
		 * Start import request client token.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string | null;

		/**
		 * S3 bucket source.
		 * Required
		 */
		s3BucketSource: StartImportPostBodyS3BucketSource;
	}
	export interface StartImportPostBodyFormProperties {

		/**
		 * Start import request client token.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartImportPostBodyFormGroup() {
		return new FormGroup<StartImportPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
		});

	}

	export interface StartImportPostBodyS3BucketSource {
		s3Bucket?: string;
		s3BucketOwner?: string;
		s3Key?: string;
	}
	export interface StartImportPostBodyS3BucketSourceFormProperties {
		s3Bucket: FormControl<string | null | undefined>,
		s3BucketOwner: FormControl<string | null | undefined>,
		s3Key: FormControl<string | null | undefined>,
	}
	export function CreateStartImportPostBodyS3BucketSourceFormGroup() {
		return new FormGroup<StartImportPostBodyS3BucketSourceFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			s3BucketOwner: new FormControl<string | null | undefined>(undefined),
			s3Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartReplicationPostBody {

		/**
		 * Account ID on which to start replication.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * ID of source server on which to start replication.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface StartReplicationPostBodyFormProperties {

		/**
		 * Account ID on which to start replication.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * ID of source server on which to start replication.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateStartReplicationPostBodyFormGroup() {
		return new FormGroup<StartReplicationPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface StartTestPostBody {

		/**
		 * Start Test for Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Start Test for Source Server IDs.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		sourceServerIDs: Array<string>;

		/** Start Test by Tags. */
		tags?: {[id: string]: string };
	}
	export interface StartTestPostBodyFormProperties {

		/**
		 * Start Test for Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/** Start Test by Tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartTestPostBodyFormGroup() {
		return new FormGroup<StartTestPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StopReplicationPostBody {

		/**
		 * Stop Replication Request account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Stop Replication Request source server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface StopReplicationPostBodyFormProperties {

		/**
		 * Stop Replication Request account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Stop Replication Request source server ID.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateStopReplicationPostBodyFormGroup() {
		return new FormGroup<StopReplicationPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface TerminateTargetInstancesPostBody {

		/**
		 * Terminate Target instance by Account ID
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Terminate Target instance by Source Server IDs.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		sourceServerIDs: Array<string>;

		/** Terminate Target instance by Tags. */
		tags?: {[id: string]: string };
	}
	export interface TerminateTargetInstancesPostBodyFormProperties {

		/**
		 * Terminate Target instance by Account ID
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/** Terminate Target instance by Tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTerminateTargetInstancesPostBodyFormGroup() {
		return new FormGroup<TerminateTargetInstancesPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UnarchiveApplicationPostBody {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Application ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		applicationID: string;
	}
	export interface UnarchiveApplicationPostBodyFormProperties {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Application ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		applicationID: FormControl<string | null | undefined>,
	}
	export function CreateUnarchiveApplicationPostBodyFormGroup() {
		return new FormGroup<UnarchiveApplicationPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			applicationID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^app-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface UnarchiveWavePostBody {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Wave ID.
		 * Required
		 * Max length: 22
		 * Min length: 22
		 */
		waveID: string;
	}
	export interface UnarchiveWavePostBodyFormProperties {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Wave ID.
		 * Required
		 * Max length: 22
		 * Min length: 22
		 */
		waveID: FormControl<string | null | undefined>,
	}
	export function CreateUnarchiveWavePostBodyFormGroup() {
		return new FormGroup<UnarchiveWavePostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			waveID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(22), Validators.maxLength(22), Validators.pattern('^wave-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface UpdateApplicationPostBody {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Application ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		applicationID: string;

		/**
		 * Application description.
		 * Max length: 600
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Application name.
		 * Max length: 256
		 * Min length: 1
		 */
		name?: string | null;
	}
	export interface UpdateApplicationPostBodyFormProperties {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Application ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		applicationID: FormControl<string | null | undefined>,

		/**
		 * Application description.
		 * Max length: 600
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Application name.
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationPostBodyFormGroup() {
		return new FormGroup<UpdateApplicationPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			applicationID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^app-[0-9a-zA-Z]{17}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(600), Validators.pattern('^[^\x00]*$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[^\s\x00]( *[^\s\x00])*$')]),
		});

	}

	export interface UpdateLaunchConfigurationPostBody {

		/**
		 * Update Launch configuration Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/** Update Launch configuration boot mode request. */
		bootMode?: BootMode | null;

		/** Update Launch configuration copy Private IP request. */
		copyPrivateIp?: boolean | null;

		/** Update Launch configuration copy Tags request. */
		copyTags?: boolean | null;

		/** Enable map auto tagging. */
		enableMapAutoTagging?: boolean | null;

		/** Update Launch configuration launch disposition request. */
		launchDisposition?: LaunchDisposition | null;

		/** Configure Licensing. */
		licensing?: UpdateLaunchConfigurationPostBodyLicensing;

		/**
		 * Launch configuration map auto tagging MPE ID.
		 * Max length: 256
		 * Min length: 0
		 */
		mapAutoTaggingMpeID?: string | null;

		/**
		 * Update Launch configuration name request.
		 * Max length: 128
		 * Min length: 0
		 */
		name?: string | null;

		/** Post Launch Actions to executed on the Test or Cutover instance. */
		postLaunchActions?: UpdateLaunchConfigurationPostBodyPostLaunchActions;

		/**
		 * Update Launch configuration by Source Server ID request.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;

		/** Update Launch configuration Target instance right sizing request. */
		targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | null;
	}
	export interface UpdateLaunchConfigurationPostBodyFormProperties {

		/**
		 * Update Launch configuration Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/** Update Launch configuration boot mode request. */
		bootMode: FormControl<BootMode | null | undefined>,

		/** Update Launch configuration copy Private IP request. */
		copyPrivateIp: FormControl<boolean | null | undefined>,

		/** Update Launch configuration copy Tags request. */
		copyTags: FormControl<boolean | null | undefined>,

		/** Enable map auto tagging. */
		enableMapAutoTagging: FormControl<boolean | null | undefined>,

		/** Update Launch configuration launch disposition request. */
		launchDisposition: FormControl<LaunchDisposition | null | undefined>,

		/**
		 * Launch configuration map auto tagging MPE ID.
		 * Max length: 256
		 * Min length: 0
		 */
		mapAutoTaggingMpeID: FormControl<string | null | undefined>,

		/**
		 * Update Launch configuration name request.
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Update Launch configuration by Source Server ID request.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,

		/** Update Launch configuration Target instance right sizing request. */
		targetInstanceTypeRightSizingMethod: FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>,
	}
	export function CreateUpdateLaunchConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateLaunchConfigurationPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			bootMode: new FormControl<BootMode | null | undefined>(undefined),
			copyPrivateIp: new FormControl<boolean | null | undefined>(undefined),
			copyTags: new FormControl<boolean | null | undefined>(undefined),
			enableMapAutoTagging: new FormControl<boolean | null | undefined>(undefined),
			launchDisposition: new FormControl<LaunchDisposition | null | undefined>(undefined),
			mapAutoTaggingMpeID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
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

	export interface UpdateLaunchConfigurationPostBodyPostLaunchActions {
		cloudWatchLogGroupName?: string;
		deployment?: PostLaunchActionsDeploymentType;
		s3LogBucket?: string;
		s3OutputKeyPrefix?: string;
		ssmDocuments?: Array<SsmDocument>;
	}
	export interface UpdateLaunchConfigurationPostBodyPostLaunchActionsFormProperties {
		cloudWatchLogGroupName: FormControl<string | null | undefined>,
		deployment: FormControl<PostLaunchActionsDeploymentType | null | undefined>,
		s3LogBucket: FormControl<string | null | undefined>,
		s3OutputKeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLaunchConfigurationPostBodyPostLaunchActionsFormGroup() {
		return new FormGroup<UpdateLaunchConfigurationPostBodyPostLaunchActionsFormProperties>({
			cloudWatchLogGroupName: new FormControl<string | null | undefined>(undefined),
			deployment: new FormControl<PostLaunchActionsDeploymentType | null | undefined>(undefined),
			s3LogBucket: new FormControl<string | null | undefined>(undefined),
			s3OutputKeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLaunchConfigurationTemplatePostBody {

		/** Associate public Ip address. */
		associatePublicIpAddress?: boolean | null;

		/** Launch configuration template boot mode. */
		bootMode?: BootMode | null;

		/** Copy private Ip. */
		copyPrivateIp?: boolean | null;

		/** Copy tags. */
		copyTags?: boolean | null;

		/** Enable map auto tagging. */
		enableMapAutoTagging?: boolean | null;

		/** Launch template disk configuration. */
		largeVolumeConf?: UpdateLaunchConfigurationTemplatePostBodyLargeVolumeConf;

		/**
		 * Launch Configuration Template ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		launchConfigurationTemplateID: string;

		/** Launch disposition. */
		launchDisposition?: LaunchDisposition | null;

		/** Configure Licensing. */
		licensing?: UpdateLaunchConfigurationTemplatePostBodyLicensing;

		/**
		 * Launch configuration template map auto tagging MPE ID.
		 * Max length: 256
		 * Min length: 0
		 */
		mapAutoTaggingMpeID?: string | null;

		/** Post Launch Actions to executed on the Test or Cutover instance. */
		postLaunchActions?: UpdateLaunchConfigurationTemplatePostBodyPostLaunchActions;

		/** Launch template disk configuration. */
		smallVolumeConf?: UpdateLaunchConfigurationTemplatePostBodySmallVolumeConf;

		/**
		 * Small volume maximum size.
		 * Minimum: 0
		 */
		smallVolumeMaxSize?: number | null;

		/** Target instance type right-sizing method. */
		targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | null;
	}
	export interface UpdateLaunchConfigurationTemplatePostBodyFormProperties {

		/** Associate public Ip address. */
		associatePublicIpAddress: FormControl<boolean | null | undefined>,

		/** Launch configuration template boot mode. */
		bootMode: FormControl<BootMode | null | undefined>,

		/** Copy private Ip. */
		copyPrivateIp: FormControl<boolean | null | undefined>,

		/** Copy tags. */
		copyTags: FormControl<boolean | null | undefined>,

		/** Enable map auto tagging. */
		enableMapAutoTagging: FormControl<boolean | null | undefined>,

		/**
		 * Launch Configuration Template ID.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		launchConfigurationTemplateID: FormControl<string | null | undefined>,

		/** Launch disposition. */
		launchDisposition: FormControl<LaunchDisposition | null | undefined>,

		/**
		 * Launch configuration template map auto tagging MPE ID.
		 * Max length: 256
		 * Min length: 0
		 */
		mapAutoTaggingMpeID: FormControl<string | null | undefined>,

		/**
		 * Small volume maximum size.
		 * Minimum: 0
		 */
		smallVolumeMaxSize: FormControl<number | null | undefined>,

		/** Target instance type right-sizing method. */
		targetInstanceTypeRightSizingMethod: FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>,
	}
	export function CreateUpdateLaunchConfigurationTemplatePostBodyFormGroup() {
		return new FormGroup<UpdateLaunchConfigurationTemplatePostBodyFormProperties>({
			associatePublicIpAddress: new FormControl<boolean | null | undefined>(undefined),
			bootMode: new FormControl<BootMode | null | undefined>(undefined),
			copyPrivateIp: new FormControl<boolean | null | undefined>(undefined),
			copyTags: new FormControl<boolean | null | undefined>(undefined),
			enableMapAutoTagging: new FormControl<boolean | null | undefined>(undefined),
			launchConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^lct-[0-9a-zA-Z]{17}$')]),
			launchDisposition: new FormControl<LaunchDisposition | null | undefined>(undefined),
			mapAutoTaggingMpeID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			smallVolumeMaxSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			targetInstanceTypeRightSizingMethod: new FormControl<TargetInstanceTypeRightSizingMethod | null | undefined>(undefined),
		});

	}

	export interface UpdateLaunchConfigurationTemplatePostBodyLargeVolumeConf {
		iops?: number | null;
		throughput?: number | null;
		volumeType?: VolumeType;
	}
	export interface UpdateLaunchConfigurationTemplatePostBodyLargeVolumeConfFormProperties {
		iops: FormControl<number | null | undefined>,
		throughput: FormControl<number | null | undefined>,
		volumeType: FormControl<VolumeType | null | undefined>,
	}
	export function CreateUpdateLaunchConfigurationTemplatePostBodyLargeVolumeConfFormGroup() {
		return new FormGroup<UpdateLaunchConfigurationTemplatePostBodyLargeVolumeConfFormProperties>({
			iops: new FormControl<number | null | undefined>(undefined),
			throughput: new FormControl<number | null | undefined>(undefined),
			volumeType: new FormControl<VolumeType | null | undefined>(undefined),
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

	export interface UpdateLaunchConfigurationTemplatePostBodyPostLaunchActions {
		cloudWatchLogGroupName?: string;
		deployment?: PostLaunchActionsDeploymentType;
		s3LogBucket?: string;
		s3OutputKeyPrefix?: string;
		ssmDocuments?: Array<SsmDocument>;
	}
	export interface UpdateLaunchConfigurationTemplatePostBodyPostLaunchActionsFormProperties {
		cloudWatchLogGroupName: FormControl<string | null | undefined>,
		deployment: FormControl<PostLaunchActionsDeploymentType | null | undefined>,
		s3LogBucket: FormControl<string | null | undefined>,
		s3OutputKeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLaunchConfigurationTemplatePostBodyPostLaunchActionsFormGroup() {
		return new FormGroup<UpdateLaunchConfigurationTemplatePostBodyPostLaunchActionsFormProperties>({
			cloudWatchLogGroupName: new FormControl<string | null | undefined>(undefined),
			deployment: new FormControl<PostLaunchActionsDeploymentType | null | undefined>(undefined),
			s3LogBucket: new FormControl<string | null | undefined>(undefined),
			s3OutputKeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLaunchConfigurationTemplatePostBodySmallVolumeConf {
		iops?: number | null;
		throughput?: number | null;
		volumeType?: VolumeType;
	}
	export interface UpdateLaunchConfigurationTemplatePostBodySmallVolumeConfFormProperties {
		iops: FormControl<number | null | undefined>,
		throughput: FormControl<number | null | undefined>,
		volumeType: FormControl<VolumeType | null | undefined>,
	}
	export function CreateUpdateLaunchConfigurationTemplatePostBodySmallVolumeConfFormGroup() {
		return new FormGroup<UpdateLaunchConfigurationTemplatePostBodySmallVolumeConfFormProperties>({
			iops: new FormControl<number | null | undefined>(undefined),
			throughput: new FormControl<number | null | undefined>(undefined),
			volumeType: new FormControl<VolumeType | null | undefined>(undefined),
		});

	}

	export interface UpdateReplicationConfigurationPostBody {

		/**
		 * Update replication configuration Account ID request.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/** Update replication configuration associate default Application Migration Service Security group request. */
		associateDefaultSecurityGroup?: boolean | null;

		/**
		 * Update replication configuration bandwidth throttling request.
		 * Minimum: 0
		 * Maximum: 10000
		 */
		bandwidthThrottling?: number | null;

		/** Update replication configuration create Public IP request. */
		createPublicIP?: boolean | null;

		/** Update replication configuration data plane routing request. */
		dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | null;

		/** Update replication configuration use default large Staging Disk type request. */
		defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | null;

		/** Update replication configuration EBS encryption request. */
		ebsEncryption?: ReplicationConfigurationEbsEncryption | null;

		/**
		 * Update replication configuration EBS encryption key ARN request.
		 * Max length: 2048
		 * Min length: 20
		 */
		ebsEncryptionKeyArn?: string | null;

		/**
		 * Update replication configuration name request.
		 * Max length: 128
		 * Min length: 0
		 */
		name?: string | null;

		/**
		 * Update replication configuration replicated disks request.
		 * Minimum items: 0
		 * Maximum items: 60
		 */
		replicatedDisks?: Array<ReplicationConfigurationReplicatedDisk>;

		/**
		 * Update replication configuration Replication Server instance type request.
		 * Max length: 255
		 * Min length: 0
		 */
		replicationServerInstanceType?: string | null;

		/**
		 * Update replication configuration Replication Server Security Groups IDs request.
		 * Minimum items: 0
		 * Maximum items: 32
		 */
		replicationServersSecurityGroupsIDs?: Array<string>;

		/**
		 * Update replication configuration Source Server ID request.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;

		/**
		 * Update replication configuration Staging Area subnet request.
		 * Max length: 255
		 * Min length: 0
		 */
		stagingAreaSubnetId?: string | null;

		/** Update replication configuration Staging Area Tags request. */
		stagingAreaTags?: {[id: string]: string };

		/** Update replication configuration use dedicated Replication Server request. */
		useDedicatedReplicationServer?: boolean | null;

		/** Update replication configuration use Fips Endpoint. */
		useFipsEndpoint?: boolean | null;
	}
	export interface UpdateReplicationConfigurationPostBodyFormProperties {

		/**
		 * Update replication configuration Account ID request.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/** Update replication configuration associate default Application Migration Service Security group request. */
		associateDefaultSecurityGroup: FormControl<boolean | null | undefined>,

		/**
		 * Update replication configuration bandwidth throttling request.
		 * Minimum: 0
		 * Maximum: 10000
		 */
		bandwidthThrottling: FormControl<number | null | undefined>,

		/** Update replication configuration create Public IP request. */
		createPublicIP: FormControl<boolean | null | undefined>,

		/** Update replication configuration data plane routing request. */
		dataPlaneRouting: FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>,

		/** Update replication configuration use default large Staging Disk type request. */
		defaultLargeStagingDiskType: FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>,

		/** Update replication configuration EBS encryption request. */
		ebsEncryption: FormControl<ReplicationConfigurationEbsEncryption | null | undefined>,

		/**
		 * Update replication configuration EBS encryption key ARN request.
		 * Max length: 2048
		 * Min length: 20
		 */
		ebsEncryptionKeyArn: FormControl<string | null | undefined>,

		/**
		 * Update replication configuration name request.
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Update replication configuration Replication Server instance type request.
		 * Max length: 255
		 * Min length: 0
		 */
		replicationServerInstanceType: FormControl<string | null | undefined>,

		/**
		 * Update replication configuration Source Server ID request.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,

		/**
		 * Update replication configuration Staging Area subnet request.
		 * Max length: 255
		 * Min length: 0
		 */
		stagingAreaSubnetId: FormControl<string | null | undefined>,

		/** Update replication configuration Staging Area Tags request. */
		stagingAreaTags: FormControl<{[id: string]: string } | null | undefined>,

		/** Update replication configuration use dedicated Replication Server request. */
		useDedicatedReplicationServer: FormControl<boolean | null | undefined>,

		/** Update replication configuration use Fips Endpoint. */
		useFipsEndpoint: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateReplicationConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateReplicationConfigurationPostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			associateDefaultSecurityGroup: new FormControl<boolean | null | undefined>(undefined),
			bandwidthThrottling: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10000)]),
			createPublicIP: new FormControl<boolean | null | undefined>(undefined),
			dataPlaneRouting: new FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>(undefined),
			defaultLargeStagingDiskType: new FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>(undefined),
			ebsEncryption: new FormControl<ReplicationConfigurationEbsEncryption | null | undefined>(undefined),
			ebsEncryptionKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			replicationServerInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
			stagingAreaSubnetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('^subnet-[0-9a-fA-F]{8,}$')]),
			stagingAreaTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			useDedicatedReplicationServer: new FormControl<boolean | null | undefined>(undefined),
			useFipsEndpoint: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateReplicationConfigurationTemplatePostBody {

		/**
		 * Update replication configuration template ARN request.
		 * Max length: 2048
		 * Min length: 20
		 */
		arn?: string | null;

		/** Update replication configuration template associate default Application Migration Service Security group request. */
		associateDefaultSecurityGroup?: boolean | null;

		/**
		 * Update replication configuration template bandwidth throttling request.
		 * Minimum: 0
		 * Maximum: 10000
		 */
		bandwidthThrottling?: number | null;

		/** Update replication configuration template create Public IP request. */
		createPublicIP?: boolean | null;

		/** Update replication configuration template data plane routing request. */
		dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | null;

		/** Update replication configuration template use default large Staging Disk type request. */
		defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | null;

		/** Update replication configuration template EBS encryption request. */
		ebsEncryption?: ReplicationConfigurationEbsEncryption | null;

		/**
		 * Update replication configuration template EBS encryption key ARN request.
		 * Max length: 2048
		 * Min length: 20
		 */
		ebsEncryptionKeyArn?: string | null;

		/**
		 * Update replication configuration template template ID request.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		replicationConfigurationTemplateID: string;

		/**
		 * Update replication configuration template Replication Server instance type request.
		 * Max length: 255
		 * Min length: 0
		 */
		replicationServerInstanceType?: string | null;

		/**
		 * Update replication configuration template Replication Server Security groups IDs request.
		 * Minimum items: 0
		 * Maximum items: 32
		 */
		replicationServersSecurityGroupsIDs?: Array<string>;

		/**
		 * Update replication configuration template Staging Area subnet ID request.
		 * Max length: 255
		 * Min length: 0
		 */
		stagingAreaSubnetId?: string | null;

		/** Update replication configuration template Staging Area Tags request. */
		stagingAreaTags?: {[id: string]: string };

		/** Update replication configuration template use dedicated Replication Server request. */
		useDedicatedReplicationServer?: boolean | null;

		/** Update replication configuration template use Fips Endpoint request. */
		useFipsEndpoint?: boolean | null;
	}
	export interface UpdateReplicationConfigurationTemplatePostBodyFormProperties {

		/**
		 * Update replication configuration template ARN request.
		 * Max length: 2048
		 * Min length: 20
		 */
		arn: FormControl<string | null | undefined>,

		/** Update replication configuration template associate default Application Migration Service Security group request. */
		associateDefaultSecurityGroup: FormControl<boolean | null | undefined>,

		/**
		 * Update replication configuration template bandwidth throttling request.
		 * Minimum: 0
		 * Maximum: 10000
		 */
		bandwidthThrottling: FormControl<number | null | undefined>,

		/** Update replication configuration template create Public IP request. */
		createPublicIP: FormControl<boolean | null | undefined>,

		/** Update replication configuration template data plane routing request. */
		dataPlaneRouting: FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>,

		/** Update replication configuration template use default large Staging Disk type request. */
		defaultLargeStagingDiskType: FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>,

		/** Update replication configuration template EBS encryption request. */
		ebsEncryption: FormControl<ReplicationConfigurationEbsEncryption | null | undefined>,

		/**
		 * Update replication configuration template EBS encryption key ARN request.
		 * Max length: 2048
		 * Min length: 20
		 */
		ebsEncryptionKeyArn: FormControl<string | null | undefined>,

		/**
		 * Update replication configuration template template ID request.
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		replicationConfigurationTemplateID: FormControl<string | null | undefined>,

		/**
		 * Update replication configuration template Replication Server instance type request.
		 * Max length: 255
		 * Min length: 0
		 */
		replicationServerInstanceType: FormControl<string | null | undefined>,

		/**
		 * Update replication configuration template Staging Area subnet ID request.
		 * Max length: 255
		 * Min length: 0
		 */
		stagingAreaSubnetId: FormControl<string | null | undefined>,

		/** Update replication configuration template Staging Area Tags request. */
		stagingAreaTags: FormControl<{[id: string]: string } | null | undefined>,

		/** Update replication configuration template use dedicated Replication Server request. */
		useDedicatedReplicationServer: FormControl<boolean | null | undefined>,

		/** Update replication configuration template use Fips Endpoint request. */
		useFipsEndpoint: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateReplicationConfigurationTemplatePostBodyFormGroup() {
		return new FormGroup<UpdateReplicationConfigurationTemplatePostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			associateDefaultSecurityGroup: new FormControl<boolean | null | undefined>(undefined),
			bandwidthThrottling: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10000)]),
			createPublicIP: new FormControl<boolean | null | undefined>(undefined),
			dataPlaneRouting: new FormControl<ReplicationConfigurationDataPlaneRouting | null | undefined>(undefined),
			defaultLargeStagingDiskType: new FormControl<ReplicationConfigurationDefaultLargeStagingDiskType | null | undefined>(undefined),
			ebsEncryption: new FormControl<ReplicationConfigurationEbsEncryption | null | undefined>(undefined),
			ebsEncryptionKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			replicationConfigurationTemplateID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^rct-[0-9a-zA-Z]{17}$')]),
			replicationServerInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			stagingAreaSubnetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('^subnet-[0-9a-fA-F]{8,}$')]),
			stagingAreaTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			useDedicatedReplicationServer: new FormControl<boolean | null | undefined>(undefined),
			useFipsEndpoint: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateSourceServerReplicationTypePostBody {

		/**
		 * Account ID on which to update replication type.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Replication type to which to update source server.
		 * Required
		 */
		replicationType: ReplicationType;

		/**
		 * ID of source server on which to update replication type.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: string;
	}
	export interface UpdateSourceServerReplicationTypePostBodyFormProperties {

		/**
		 * Account ID on which to update replication type.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Replication type to which to update source server.
		 * Required
		 */
		replicationType: FormControl<ReplicationType | null | undefined>,

		/**
		 * ID of source server on which to update replication type.
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		sourceServerID: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSourceServerReplicationTypePostBodyFormGroup() {
		return new FormGroup<UpdateSourceServerReplicationTypePostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			replicationType: new FormControl<ReplicationType | null | undefined>(undefined, [Validators.required]),
			sourceServerID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(19), Validators.maxLength(19), Validators.pattern('^s-[0-9a-zA-Z]{17}$')]),
		});

	}

	export interface UpdateWavePostBody {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID?: string | null;

		/**
		 * Wave description.
		 * Max length: 600
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Wave name.
		 * Max length: 256
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * Wave ID.
		 * Required
		 * Max length: 22
		 * Min length: 22
		 */
		waveID: string;
	}
	export interface UpdateWavePostBodyFormProperties {

		/**
		 * Account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		accountID: FormControl<string | null | undefined>,

		/**
		 * Wave description.
		 * Max length: 600
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Wave name.
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Wave ID.
		 * Required
		 * Max length: 22
		 * Min length: 22
		 */
		waveID: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWavePostBodyFormGroup() {
		return new FormGroup<UpdateWavePostBodyFormProperties>({
			accountID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12,}')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(600), Validators.pattern('^[^\x00]*$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[^\s\x00]( *[^\s\x00])*$')]),
			waveID: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(22), Validators.maxLength(22), Validators.pattern('^wave-[0-9a-zA-Z]{17}$')]),
		});

	}

}

