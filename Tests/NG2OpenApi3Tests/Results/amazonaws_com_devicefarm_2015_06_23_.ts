import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the result of a create device pool request. */
	export interface CreateDevicePoolResult {
		devicePool?: DevicePool;
	}

	/** Represents the result of a create device pool request. */
	export interface CreateDevicePoolResultFormProperties {
	}
	export function CreateCreateDevicePoolResultFormGroup() {
		return new FormGroup<CreateDevicePoolResultFormProperties>({
		});

	}


	/** Represents a collection of device types. */
	export interface DevicePool {
		arn?: string;
		name?: string;
		description?: string;
		type?: DevicePoolType;
		rules?: Array<Rule>;
		maxDevices?: number | null;
	}

	/** Represents a collection of device types. */
	export interface DevicePoolFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		type: FormControl<DevicePoolType | null | undefined>,
		maxDevices: FormControl<number | null | undefined>,
	}
	export function CreateDevicePoolFormGroup() {
		return new FormGroup<DevicePoolFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DevicePoolType | null | undefined>(undefined),
			maxDevices: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DevicePoolType { CURATED = 'CURATED', PRIVATE = 'PRIVATE' }


	/** Represents a condition for a device pool. */
	export interface Rule {
		attribute?: DeviceAttribute;
		operator?: RuleOperator;
		value?: string;
	}

	/** Represents a condition for a device pool. */
	export interface RuleFormProperties {
		attribute: FormControl<DeviceAttribute | null | undefined>,
		operator: FormControl<RuleOperator | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			attribute: new FormControl<DeviceAttribute | null | undefined>(undefined),
			operator: new FormControl<RuleOperator | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceAttribute { ARN = 'ARN', PLATFORM = 'PLATFORM', FORM_FACTOR = 'FORM_FACTOR', MANUFACTURER = 'MANUFACTURER', REMOTE_ACCESS_ENABLED = 'REMOTE_ACCESS_ENABLED', REMOTE_DEBUG_ENABLED = 'REMOTE_DEBUG_ENABLED', APPIUM_VERSION = 'APPIUM_VERSION', INSTANCE_ARN = 'INSTANCE_ARN', INSTANCE_LABELS = 'INSTANCE_LABELS', FLEET_TYPE = 'FLEET_TYPE', OS_VERSION = 'OS_VERSION', MODEL = 'MODEL', AVAILABILITY = 'AVAILABILITY' }

	export enum RuleOperator { EQUALS = 'EQUALS', LESS_THAN = 'LESS_THAN', LESS_THAN_OR_EQUALS = 'LESS_THAN_OR_EQUALS', GREATER_THAN = 'GREATER_THAN', GREATER_THAN_OR_EQUALS = 'GREATER_THAN_OR_EQUALS', IN = 'IN', NOT_IN = 'NOT_IN', CONTAINS = 'CONTAINS' }


	/** Represents a request to the create device pool operation. */
	export interface CreateDevicePoolRequest {

		/** Required */
		projectArn: string;

		/** Required */
		name: string;
		description?: string;

		/** Required */
		rules: Array<Rule>;
		maxDevices?: number | null;
	}

	/** Represents a request to the create device pool operation. */
	export interface CreateDevicePoolRequestFormProperties {

		/** Required */
		projectArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		maxDevices: FormControl<number | null | undefined>,
	}
	export function CreateCreateDevicePoolRequestFormGroup() {
		return new FormGroup<CreateDevicePoolRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			maxDevices: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ArgumentException {
	}
	export interface ArgumentExceptionFormProperties {
	}
	export function CreateArgumentExceptionFormGroup() {
		return new FormGroup<ArgumentExceptionFormProperties>({
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface ServiceAccountException {
	}
	export interface ServiceAccountExceptionFormProperties {
	}
	export function CreateServiceAccountExceptionFormGroup() {
		return new FormGroup<ServiceAccountExceptionFormProperties>({
		});

	}

	export interface CreateInstanceProfileResult {
		instanceProfile?: InstanceProfile;
	}
	export interface CreateInstanceProfileResultFormProperties {
	}
	export function CreateCreateInstanceProfileResultFormGroup() {
		return new FormGroup<CreateInstanceProfileResultFormProperties>({
		});

	}


	/** Represents the instance profile. */
	export interface InstanceProfile {
		arn?: string;
		packageCleanup?: boolean | null;
		excludeAppPackagesFromCleanup?: Array<string>;
		rebootAfterUse?: boolean | null;
		name?: string;
		description?: string;
	}

	/** Represents the instance profile. */
	export interface InstanceProfileFormProperties {
		arn: FormControl<string | null | undefined>,
		packageCleanup: FormControl<boolean | null | undefined>,
		rebootAfterUse: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateInstanceProfileFormGroup() {
		return new FormGroup<InstanceProfileFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			packageCleanup: new FormControl<boolean | null | undefined>(undefined),
			rebootAfterUse: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateInstanceProfileRequest {

		/** Required */
		name: string;
		description?: string;
		packageCleanup?: boolean | null;
		excludeAppPackagesFromCleanup?: Array<string>;
		rebootAfterUse?: boolean | null;
	}
	export interface CreateInstanceProfileRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		packageCleanup: FormControl<boolean | null | undefined>,
		rebootAfterUse: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateInstanceProfileRequestFormGroup() {
		return new FormGroup<CreateInstanceProfileRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			packageCleanup: new FormControl<boolean | null | undefined>(undefined),
			rebootAfterUse: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkProfileResult {
		networkProfile?: NetworkProfile;
	}
	export interface CreateNetworkProfileResultFormProperties {
	}
	export function CreateCreateNetworkProfileResultFormGroup() {
		return new FormGroup<CreateNetworkProfileResultFormProperties>({
		});

	}


	/** An array of settings that describes characteristics of a network profile. */
	export interface NetworkProfile {
		arn?: string;
		name?: string;
		description?: string;
		type?: DevicePoolType;
		uplinkBandwidthBits?: number | null;
		downlinkBandwidthBits?: number | null;
		uplinkDelayMs?: number | null;
		downlinkDelayMs?: number | null;
		uplinkJitterMs?: number | null;
		downlinkJitterMs?: number | null;
		uplinkLossPercent?: number | null;
		downlinkLossPercent?: number | null;
	}

	/** An array of settings that describes characteristics of a network profile. */
	export interface NetworkProfileFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		type: FormControl<DevicePoolType | null | undefined>,
		uplinkBandwidthBits: FormControl<number | null | undefined>,
		downlinkBandwidthBits: FormControl<number | null | undefined>,
		uplinkDelayMs: FormControl<number | null | undefined>,
		downlinkDelayMs: FormControl<number | null | undefined>,
		uplinkJitterMs: FormControl<number | null | undefined>,
		downlinkJitterMs: FormControl<number | null | undefined>,
		uplinkLossPercent: FormControl<number | null | undefined>,
		downlinkLossPercent: FormControl<number | null | undefined>,
	}
	export function CreateNetworkProfileFormGroup() {
		return new FormGroup<NetworkProfileFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DevicePoolType | null | undefined>(undefined),
			uplinkBandwidthBits: new FormControl<number | null | undefined>(undefined),
			downlinkBandwidthBits: new FormControl<number | null | undefined>(undefined),
			uplinkDelayMs: new FormControl<number | null | undefined>(undefined),
			downlinkDelayMs: new FormControl<number | null | undefined>(undefined),
			uplinkJitterMs: new FormControl<number | null | undefined>(undefined),
			downlinkJitterMs: new FormControl<number | null | undefined>(undefined),
			uplinkLossPercent: new FormControl<number | null | undefined>(undefined),
			downlinkLossPercent: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkProfileRequest {

		/** Required */
		projectArn: string;

		/** Required */
		name: string;
		description?: string;
		type?: DevicePoolType;
		uplinkBandwidthBits?: number | null;
		downlinkBandwidthBits?: number | null;
		uplinkDelayMs?: number | null;
		downlinkDelayMs?: number | null;
		uplinkJitterMs?: number | null;
		downlinkJitterMs?: number | null;
		uplinkLossPercent?: number | null;
		downlinkLossPercent?: number | null;
	}
	export interface CreateNetworkProfileRequestFormProperties {

		/** Required */
		projectArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		type: FormControl<DevicePoolType | null | undefined>,
		uplinkBandwidthBits: FormControl<number | null | undefined>,
		downlinkBandwidthBits: FormControl<number | null | undefined>,
		uplinkDelayMs: FormControl<number | null | undefined>,
		downlinkDelayMs: FormControl<number | null | undefined>,
		uplinkJitterMs: FormControl<number | null | undefined>,
		downlinkJitterMs: FormControl<number | null | undefined>,
		uplinkLossPercent: FormControl<number | null | undefined>,
		downlinkLossPercent: FormControl<number | null | undefined>,
	}
	export function CreateCreateNetworkProfileRequestFormGroup() {
		return new FormGroup<CreateNetworkProfileRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DevicePoolType | null | undefined>(undefined),
			uplinkBandwidthBits: new FormControl<number | null | undefined>(undefined),
			downlinkBandwidthBits: new FormControl<number | null | undefined>(undefined),
			uplinkDelayMs: new FormControl<number | null | undefined>(undefined),
			downlinkDelayMs: new FormControl<number | null | undefined>(undefined),
			uplinkJitterMs: new FormControl<number | null | undefined>(undefined),
			downlinkJitterMs: new FormControl<number | null | undefined>(undefined),
			uplinkLossPercent: new FormControl<number | null | undefined>(undefined),
			downlinkLossPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the result of a create project request. */
	export interface CreateProjectResult {
		project?: Project;
	}

	/** Represents the result of a create project request. */
	export interface CreateProjectResultFormProperties {
	}
	export function CreateCreateProjectResultFormGroup() {
		return new FormGroup<CreateProjectResultFormProperties>({
		});

	}


	/** Represents an operating-system neutral workspace for running and managing tests. */
	export interface Project {
		arn?: string;
		name?: string;
		defaultJobTimeoutMinutes?: number | null;
		created?: Date;
		vpcConfig?: VpcConfig;
	}

	/** Represents an operating-system neutral workspace for running and managing tests. */
	export interface ProjectFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		defaultJobTimeoutMinutes: FormControl<number | null | undefined>,
		created: FormControl<Date | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			defaultJobTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains the VPC configuration data necessary to interface with AWS Device Farm's services. */
	export interface VpcConfig {

		/** Required */
		securityGroupIds: Array<string>;

		/** Required */
		subnetIds: Array<string>;

		/** Required */
		vpcId: string;
	}

	/** Contains the VPC configuration data necessary to interface with AWS Device Farm's services. */
	export interface VpcConfigFormProperties {

		/** Required */
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigFormGroup() {
		return new FormGroup<VpcConfigFormProperties>({
			vpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a request to the create project operation. */
	export interface CreateProjectRequest {

		/** Required */
		name: string;
		defaultJobTimeoutMinutes?: number | null;
		vpcConfig?: VpcConfig;
	}

	/** Represents a request to the create project operation. */
	export interface CreateProjectRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		defaultJobTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateCreateProjectRequestFormGroup() {
		return new FormGroup<CreateProjectRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			defaultJobTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagOperationException {
	}
	export interface TagOperationExceptionFormProperties {
	}
	export function CreateTagOperationExceptionFormGroup() {
		return new FormGroup<TagOperationExceptionFormProperties>({
		});

	}


	/** Represents the server response from a request to create a remote access session. */
	export interface CreateRemoteAccessSessionResult {
		remoteAccessSession?: RemoteAccessSession;
	}

	/** Represents the server response from a request to create a remote access session. */
	export interface CreateRemoteAccessSessionResultFormProperties {
	}
	export function CreateCreateRemoteAccessSessionResultFormGroup() {
		return new FormGroup<CreateRemoteAccessSessionResultFormProperties>({
		});

	}


	/** Represents information about the remote access session. */
	export interface RemoteAccessSession {
		arn?: string;
		name?: string;
		created?: Date;
		status?: ExecutionStatus;
		result?: ExecutionResult;
		message?: string;
		started?: Date;
		stopped?: Date;
		device?: Device;
		instanceArn?: string;
		remoteDebugEnabled?: boolean | null;
		remoteRecordEnabled?: boolean | null;
		remoteRecordAppArn?: string;
		hostAddress?: string;
		clientId?: string;
		billingMethod?: BillingMethod;
		deviceMinutes?: DeviceMinutes;
		endpoint?: string;
		deviceUdid?: string;
		interactionMode?: InteractionMode;
		skipAppResign?: boolean | null;
		vpcConfig?: VpcConfig;
	}

	/** Represents information about the remote access session. */
	export interface RemoteAccessSessionFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		status: FormControl<ExecutionStatus | null | undefined>,
		result: FormControl<ExecutionResult | null | undefined>,
		message: FormControl<string | null | undefined>,
		started: FormControl<Date | null | undefined>,
		stopped: FormControl<Date | null | undefined>,
		instanceArn: FormControl<string | null | undefined>,
		remoteDebugEnabled: FormControl<boolean | null | undefined>,
		remoteRecordEnabled: FormControl<boolean | null | undefined>,
		remoteRecordAppArn: FormControl<string | null | undefined>,
		hostAddress: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		billingMethod: FormControl<BillingMethod | null | undefined>,
		endpoint: FormControl<string | null | undefined>,
		deviceUdid: FormControl<string | null | undefined>,
		interactionMode: FormControl<InteractionMode | null | undefined>,
		skipAppResign: FormControl<boolean | null | undefined>,
	}
	export function CreateRemoteAccessSessionFormGroup() {
		return new FormGroup<RemoteAccessSessionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ExecutionStatus | null | undefined>(undefined),
			result: new FormControl<ExecutionResult | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
			stopped: new FormControl<Date | null | undefined>(undefined),
			instanceArn: new FormControl<string | null | undefined>(undefined),
			remoteDebugEnabled: new FormControl<boolean | null | undefined>(undefined),
			remoteRecordEnabled: new FormControl<boolean | null | undefined>(undefined),
			remoteRecordAppArn: new FormControl<string | null | undefined>(undefined),
			hostAddress: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			billingMethod: new FormControl<BillingMethod | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			deviceUdid: new FormControl<string | null | undefined>(undefined),
			interactionMode: new FormControl<InteractionMode | null | undefined>(undefined),
			skipAppResign: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ExecutionStatus { PENDING = 'PENDING', PENDING_CONCURRENCY = 'PENDING_CONCURRENCY', PENDING_DEVICE = 'PENDING_DEVICE', PROCESSING = 'PROCESSING', SCHEDULING = 'SCHEDULING', PREPARING = 'PREPARING', RUNNING = 'RUNNING', COMPLETED = 'COMPLETED', STOPPING = 'STOPPING' }

	export enum ExecutionResult { PENDING = 'PENDING', PASSED = 'PASSED', WARNED = 'WARNED', FAILED = 'FAILED', SKIPPED = 'SKIPPED', ERRORED = 'ERRORED', STOPPED = 'STOPPED' }


	/** Represents a device type that an app is tested against. */
	export interface Device {
		arn?: string;
		name?: string;
		manufacturer?: string;
		model?: string;
		modelId?: string;
		formFactor?: DeviceFormFactor;
		platform?: DevicePlatform;
		os?: string;
		cpu?: CPU;
		resolution?: Resolution;
		heapSize?: number | null;
		memory?: number | null;
		image?: string;
		carrier?: string;
		radio?: string;
		remoteAccessEnabled?: boolean | null;
		remoteDebugEnabled?: boolean | null;
		fleetType?: string;
		fleetName?: string;
		instances?: Array<DeviceInstance>;
		availability?: DeviceAvailability;
	}

	/** Represents a device type that an app is tested against. */
	export interface DeviceFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		manufacturer: FormControl<string | null | undefined>,
		model: FormControl<string | null | undefined>,
		modelId: FormControl<string | null | undefined>,
		formFactor: FormControl<DeviceFormFactor | null | undefined>,
		platform: FormControl<DevicePlatform | null | undefined>,
		os: FormControl<string | null | undefined>,
		heapSize: FormControl<number | null | undefined>,
		memory: FormControl<number | null | undefined>,
		image: FormControl<string | null | undefined>,
		carrier: FormControl<string | null | undefined>,
		radio: FormControl<string | null | undefined>,
		remoteAccessEnabled: FormControl<boolean | null | undefined>,
		remoteDebugEnabled: FormControl<boolean | null | undefined>,
		fleetType: FormControl<string | null | undefined>,
		fleetName: FormControl<string | null | undefined>,
		availability: FormControl<DeviceAvailability | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			modelId: new FormControl<string | null | undefined>(undefined),
			formFactor: new FormControl<DeviceFormFactor | null | undefined>(undefined),
			platform: new FormControl<DevicePlatform | null | undefined>(undefined),
			os: new FormControl<string | null | undefined>(undefined),
			heapSize: new FormControl<number | null | undefined>(undefined),
			memory: new FormControl<number | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			carrier: new FormControl<string | null | undefined>(undefined),
			radio: new FormControl<string | null | undefined>(undefined),
			remoteAccessEnabled: new FormControl<boolean | null | undefined>(undefined),
			remoteDebugEnabled: new FormControl<boolean | null | undefined>(undefined),
			fleetType: new FormControl<string | null | undefined>(undefined),
			fleetName: new FormControl<string | null | undefined>(undefined),
			availability: new FormControl<DeviceAvailability | null | undefined>(undefined),
		});

	}

	export enum DeviceFormFactor { PHONE = 'PHONE', TABLET = 'TABLET' }

	export enum DevicePlatform { ANDROID = 'ANDROID', IOS = 'IOS' }


	/** Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide CPU usage. */
	export interface CPU {
		frequency?: string;
		architecture?: string;
		clock?: number | null;
	}

	/** Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide CPU usage. */
	export interface CPUFormProperties {
		frequency: FormControl<string | null | undefined>,
		architecture: FormControl<string | null | undefined>,
		clock: FormControl<number | null | undefined>,
	}
	export function CreateCPUFormGroup() {
		return new FormGroup<CPUFormProperties>({
			frequency: new FormControl<string | null | undefined>(undefined),
			architecture: new FormControl<string | null | undefined>(undefined),
			clock: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the screen resolution of a device in height and width, expressed in pixels. */
	export interface Resolution {
		width?: number | null;
		height?: number | null;
	}

	/** Represents the screen resolution of a device in height and width, expressed in pixels. */
	export interface ResolutionFormProperties {
		width: FormControl<number | null | undefined>,
		height: FormControl<number | null | undefined>,
	}
	export function CreateResolutionFormGroup() {
		return new FormGroup<ResolutionFormProperties>({
			width: new FormControl<number | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the device instance. */
	export interface DeviceInstance {
		arn?: string;
		deviceArn?: string;
		labels?: Array<string>;
		status?: InstanceStatus;
		udid?: string;
		instanceProfile?: InstanceProfile;
	}

	/** Represents the device instance. */
	export interface DeviceInstanceFormProperties {
		arn: FormControl<string | null | undefined>,
		deviceArn: FormControl<string | null | undefined>,
		status: FormControl<InstanceStatus | null | undefined>,
		udid: FormControl<string | null | undefined>,
	}
	export function CreateDeviceInstanceFormGroup() {
		return new FormGroup<DeviceInstanceFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			deviceArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<InstanceStatus | null | undefined>(undefined),
			udid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceStatus { IN_USE = 'IN_USE', PREPARING = 'PREPARING', AVAILABLE = 'AVAILABLE', NOT_AVAILABLE = 'NOT_AVAILABLE' }

	export enum DeviceAvailability { TEMPORARY_NOT_AVAILABLE = 'TEMPORARY_NOT_AVAILABLE', BUSY = 'BUSY', AVAILABLE = 'AVAILABLE', HIGHLY_AVAILABLE = 'HIGHLY_AVAILABLE' }

	export enum BillingMethod { METERED = 'METERED', UNMETERED = 'UNMETERED' }


	/** Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children. */
	export interface DeviceMinutes {
		total?: number | null;
		metered?: number | null;
		unmetered?: number | null;
	}

	/** Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children. */
	export interface DeviceMinutesFormProperties {
		total: FormControl<number | null | undefined>,
		metered: FormControl<number | null | undefined>,
		unmetered: FormControl<number | null | undefined>,
	}
	export function CreateDeviceMinutesFormGroup() {
		return new FormGroup<DeviceMinutesFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
			metered: new FormControl<number | null | undefined>(undefined),
			unmetered: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InteractionMode { INTERACTIVE = 'INTERACTIVE', NO_VIDEO = 'NO_VIDEO', VIDEO_ONLY = 'VIDEO_ONLY' }


	/** Creates and submits a request to start a remote access session. */
	export interface CreateRemoteAccessSessionRequest {

		/** Required */
		projectArn: string;

		/** Required */
		deviceArn: string;
		instanceArn?: string;
		sshPublicKey?: string;
		remoteDebugEnabled?: boolean | null;
		remoteRecordEnabled?: boolean | null;
		remoteRecordAppArn?: string;
		name?: string;
		clientId?: string;
		configuration?: CreateRemoteAccessSessionConfiguration;
		interactionMode?: InteractionMode;
		skipAppResign?: boolean | null;
	}

	/** Creates and submits a request to start a remote access session. */
	export interface CreateRemoteAccessSessionRequestFormProperties {

		/** Required */
		projectArn: FormControl<string | null | undefined>,

		/** Required */
		deviceArn: FormControl<string | null | undefined>,
		instanceArn: FormControl<string | null | undefined>,
		sshPublicKey: FormControl<string | null | undefined>,
		remoteDebugEnabled: FormControl<boolean | null | undefined>,
		remoteRecordEnabled: FormControl<boolean | null | undefined>,
		remoteRecordAppArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		interactionMode: FormControl<InteractionMode | null | undefined>,
		skipAppResign: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateRemoteAccessSessionRequestFormGroup() {
		return new FormGroup<CreateRemoteAccessSessionRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instanceArn: new FormControl<string | null | undefined>(undefined),
			sshPublicKey: new FormControl<string | null | undefined>(undefined),
			remoteDebugEnabled: new FormControl<boolean | null | undefined>(undefined),
			remoteRecordEnabled: new FormControl<boolean | null | undefined>(undefined),
			remoteRecordAppArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			interactionMode: new FormControl<InteractionMode | null | undefined>(undefined),
			skipAppResign: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration settings for a remote access session, including billing method. */
	export interface CreateRemoteAccessSessionConfiguration {
		billingMethod?: BillingMethod;
		vpceConfigurationArns?: Array<string>;
	}

	/** Configuration settings for a remote access session, including billing method. */
	export interface CreateRemoteAccessSessionConfigurationFormProperties {
		billingMethod: FormControl<BillingMethod | null | undefined>,
	}
	export function CreateCreateRemoteAccessSessionConfigurationFormGroup() {
		return new FormGroup<CreateRemoteAccessSessionConfigurationFormProperties>({
			billingMethod: new FormControl<BillingMethod | null | undefined>(undefined),
		});

	}

	export interface CreateTestGridProjectResult {
		testGridProject?: TestGridProject;
	}
	export interface CreateTestGridProjectResultFormProperties {
	}
	export function CreateCreateTestGridProjectResultFormGroup() {
		return new FormGroup<CreateTestGridProjectResultFormProperties>({
		});

	}


	/** A Selenium testing project. Projects are used to collect and collate sessions. */
	export interface TestGridProject {
		arn?: string;
		name?: string;
		description?: string;
		vpcConfig?: TestGridVpcConfig;
		created?: Date;
	}

	/** A Selenium testing project. Projects are used to collect and collate sessions. */
	export interface TestGridProjectFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
	}
	export function CreateTestGridProjectFormGroup() {
		return new FormGroup<TestGridProjectFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The VPC security groups and subnets that are attached to a project. */
	export interface TestGridVpcConfig {

		/** Required */
		securityGroupIds: Array<string>;

		/** Required */
		subnetIds: Array<string>;

		/** Required */
		vpcId: string;
	}

	/** The VPC security groups and subnets that are attached to a project. */
	export interface TestGridVpcConfigFormProperties {

		/** Required */
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateTestGridVpcConfigFormGroup() {
		return new FormGroup<TestGridVpcConfigFormProperties>({
			vpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTestGridProjectRequest {

		/** Required */
		name: string;
		description?: string;
		vpcConfig?: TestGridVpcConfig;
	}
	export interface CreateTestGridProjectRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateTestGridProjectRequestFormGroup() {
		return new FormGroup<CreateTestGridProjectRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InternalServiceException {
	}
	export interface InternalServiceExceptionFormProperties {
	}
	export function CreateInternalServiceExceptionFormGroup() {
		return new FormGroup<InternalServiceExceptionFormProperties>({
		});

	}

	export interface CreateTestGridUrlResult {
		url?: string;
		expires?: Date;
	}
	export interface CreateTestGridUrlResultFormProperties {
		url: FormControl<string | null | undefined>,
		expires: FormControl<Date | null | undefined>,
	}
	export function CreateCreateTestGridUrlResultFormGroup() {
		return new FormGroup<CreateTestGridUrlResultFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
			expires: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateTestGridUrlRequest {

		/** Required */
		projectArn: string;

		/** Required */
		expiresInSeconds: number;
	}
	export interface CreateTestGridUrlRequestFormProperties {

		/** Required */
		projectArn: FormControl<string | null | undefined>,

		/** Required */
		expiresInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateTestGridUrlRequestFormGroup() {
		return new FormGroup<CreateTestGridUrlRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiresInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the result of a create upload request. */
	export interface CreateUploadResult {
		upload?: Upload;
	}

	/** Represents the result of a create upload request. */
	export interface CreateUploadResultFormProperties {
	}
	export function CreateCreateUploadResultFormGroup() {
		return new FormGroup<CreateUploadResultFormProperties>({
		});

	}


	/** An app or a set of one or more tests to upload or that have been uploaded. */
	export interface Upload {
		arn?: string;
		name?: string;
		created?: Date;
		type?: UploadType;
		status?: UploadStatus;
		url?: string;
		metadata?: string;
		contentType?: string;
		message?: string;
		category?: DevicePoolType;
	}

	/** An app or a set of one or more tests to upload or that have been uploaded. */
	export interface UploadFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		type: FormControl<UploadType | null | undefined>,
		status: FormControl<UploadStatus | null | undefined>,
		url: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,
		contentType: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		category: FormControl<DevicePoolType | null | undefined>,
	}
	export function CreateUploadFormGroup() {
		return new FormGroup<UploadFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<UploadType | null | undefined>(undefined),
			status: new FormControl<UploadStatus | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<DevicePoolType | null | undefined>(undefined),
		});

	}

	export enum UploadType { ANDROID_APP = 'ANDROID_APP', IOS_APP = 'IOS_APP', WEB_APP = 'WEB_APP', EXTERNAL_DATA = 'EXTERNAL_DATA', APPIUM_JAVA_JUNIT_TEST_PACKAGE = 'APPIUM_JAVA_JUNIT_TEST_PACKAGE', APPIUM_JAVA_TESTNG_TEST_PACKAGE = 'APPIUM_JAVA_TESTNG_TEST_PACKAGE', APPIUM_PYTHON_TEST_PACKAGE = 'APPIUM_PYTHON_TEST_PACKAGE', APPIUM_NODE_TEST_PACKAGE = 'APPIUM_NODE_TEST_PACKAGE', APPIUM_RUBY_TEST_PACKAGE = 'APPIUM_RUBY_TEST_PACKAGE', APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE = 'APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE', APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE = 'APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE', APPIUM_WEB_PYTHON_TEST_PACKAGE = 'APPIUM_WEB_PYTHON_TEST_PACKAGE', APPIUM_WEB_NODE_TEST_PACKAGE = 'APPIUM_WEB_NODE_TEST_PACKAGE', APPIUM_WEB_RUBY_TEST_PACKAGE = 'APPIUM_WEB_RUBY_TEST_PACKAGE', CALABASH_TEST_PACKAGE = 'CALABASH_TEST_PACKAGE', INSTRUMENTATION_TEST_PACKAGE = 'INSTRUMENTATION_TEST_PACKAGE', UIAUTOMATION_TEST_PACKAGE = 'UIAUTOMATION_TEST_PACKAGE', UIAUTOMATOR_TEST_PACKAGE = 'UIAUTOMATOR_TEST_PACKAGE', XCTEST_TEST_PACKAGE = 'XCTEST_TEST_PACKAGE', XCTEST_UI_TEST_PACKAGE = 'XCTEST_UI_TEST_PACKAGE', APPIUM_JAVA_JUNIT_TEST_SPEC = 'APPIUM_JAVA_JUNIT_TEST_SPEC', APPIUM_JAVA_TESTNG_TEST_SPEC = 'APPIUM_JAVA_TESTNG_TEST_SPEC', APPIUM_PYTHON_TEST_SPEC = 'APPIUM_PYTHON_TEST_SPEC', APPIUM_NODE_TEST_SPEC = 'APPIUM_NODE_TEST_SPEC', APPIUM_RUBY_TEST_SPEC = 'APPIUM_RUBY_TEST_SPEC', APPIUM_WEB_JAVA_JUNIT_TEST_SPEC = 'APPIUM_WEB_JAVA_JUNIT_TEST_SPEC', APPIUM_WEB_JAVA_TESTNG_TEST_SPEC = 'APPIUM_WEB_JAVA_TESTNG_TEST_SPEC', APPIUM_WEB_PYTHON_TEST_SPEC = 'APPIUM_WEB_PYTHON_TEST_SPEC', APPIUM_WEB_NODE_TEST_SPEC = 'APPIUM_WEB_NODE_TEST_SPEC', APPIUM_WEB_RUBY_TEST_SPEC = 'APPIUM_WEB_RUBY_TEST_SPEC', INSTRUMENTATION_TEST_SPEC = 'INSTRUMENTATION_TEST_SPEC', XCTEST_UI_TEST_SPEC = 'XCTEST_UI_TEST_SPEC' }

	export enum UploadStatus { INITIALIZED = 'INITIALIZED', PROCESSING = 'PROCESSING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }


	/** Represents a request to the create upload operation. */
	export interface CreateUploadRequest {

		/** Required */
		projectArn: string;

		/** Required */
		name: string;

		/** Required */
		type: UploadType;
		contentType?: string;
	}

	/** Represents a request to the create upload operation. */
	export interface CreateUploadRequestFormProperties {

		/** Required */
		projectArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<UploadType | null | undefined>,
		contentType: FormControl<string | null | undefined>,
	}
	export function CreateCreateUploadRequestFormGroup() {
		return new FormGroup<CreateUploadRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<UploadType | null | undefined>(undefined, [Validators.required]),
			contentType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVPCEConfigurationResult {
		vpceConfiguration?: VPCEConfiguration;
	}
	export interface CreateVPCEConfigurationResultFormProperties {
	}
	export function CreateCreateVPCEConfigurationResultFormGroup() {
		return new FormGroup<CreateVPCEConfigurationResultFormProperties>({
		});

	}


	/** Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration. */
	export interface VPCEConfiguration {
		arn?: string;
		vpceConfigurationName?: string;
		vpceServiceName?: string;
		serviceDnsName?: string;
		vpceConfigurationDescription?: string;
	}

	/** Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration. */
	export interface VPCEConfigurationFormProperties {
		arn: FormControl<string | null | undefined>,
		vpceConfigurationName: FormControl<string | null | undefined>,
		vpceServiceName: FormControl<string | null | undefined>,
		serviceDnsName: FormControl<string | null | undefined>,
		vpceConfigurationDescription: FormControl<string | null | undefined>,
	}
	export function CreateVPCEConfigurationFormGroup() {
		return new FormGroup<VPCEConfigurationFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			vpceConfigurationName: new FormControl<string | null | undefined>(undefined),
			vpceServiceName: new FormControl<string | null | undefined>(undefined),
			serviceDnsName: new FormControl<string | null | undefined>(undefined),
			vpceConfigurationDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVPCEConfigurationRequest {

		/** Required */
		vpceConfigurationName: string;

		/** Required */
		vpceServiceName: string;

		/** Required */
		serviceDnsName: string;
		vpceConfigurationDescription?: string;
	}
	export interface CreateVPCEConfigurationRequestFormProperties {

		/** Required */
		vpceConfigurationName: FormControl<string | null | undefined>,

		/** Required */
		vpceServiceName: FormControl<string | null | undefined>,

		/** Required */
		serviceDnsName: FormControl<string | null | undefined>,
		vpceConfigurationDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateVPCEConfigurationRequestFormGroup() {
		return new FormGroup<CreateVPCEConfigurationRequestFormProperties>({
			vpceConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vpceServiceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceDnsName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vpceConfigurationDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a delete device pool request. */
	export interface DeleteDevicePoolResult {
	}

	/** Represents the result of a delete device pool request. */
	export interface DeleteDevicePoolResultFormProperties {
	}
	export function CreateDeleteDevicePoolResultFormGroup() {
		return new FormGroup<DeleteDevicePoolResultFormProperties>({
		});

	}


	/** Represents a request to the delete device pool operation. */
	export interface DeleteDevicePoolRequest {

		/** Required */
		arn: string;
	}

	/** Represents a request to the delete device pool operation. */
	export interface DeleteDevicePoolRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDevicePoolRequestFormGroup() {
		return new FormGroup<DeleteDevicePoolRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteInstanceProfileResult {
	}
	export interface DeleteInstanceProfileResultFormProperties {
	}
	export function CreateDeleteInstanceProfileResultFormGroup() {
		return new FormGroup<DeleteInstanceProfileResultFormProperties>({
		});

	}

	export interface DeleteInstanceProfileRequest {

		/** Required */
		arn: string;
	}
	export interface DeleteInstanceProfileRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInstanceProfileRequestFormGroup() {
		return new FormGroup<DeleteInstanceProfileRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteNetworkProfileResult {
	}
	export interface DeleteNetworkProfileResultFormProperties {
	}
	export function CreateDeleteNetworkProfileResultFormGroup() {
		return new FormGroup<DeleteNetworkProfileResultFormProperties>({
		});

	}

	export interface DeleteNetworkProfileRequest {

		/** Required */
		arn: string;
	}
	export interface DeleteNetworkProfileRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNetworkProfileRequestFormGroup() {
		return new FormGroup<DeleteNetworkProfileRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the result of a delete project request. */
	export interface DeleteProjectResult {
	}

	/** Represents the result of a delete project request. */
	export interface DeleteProjectResultFormProperties {
	}
	export function CreateDeleteProjectResultFormGroup() {
		return new FormGroup<DeleteProjectResultFormProperties>({
		});

	}


	/** Represents a request to the delete project operation. */
	export interface DeleteProjectRequest {

		/** Required */
		arn: string;
	}

	/** Represents a request to the delete project operation. */
	export interface DeleteProjectRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProjectRequestFormGroup() {
		return new FormGroup<DeleteProjectRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response from the server when a request is made to delete the remote access session. */
	export interface DeleteRemoteAccessSessionResult {
	}

	/** The response from the server when a request is made to delete the remote access session. */
	export interface DeleteRemoteAccessSessionResultFormProperties {
	}
	export function CreateDeleteRemoteAccessSessionResultFormGroup() {
		return new FormGroup<DeleteRemoteAccessSessionResultFormProperties>({
		});

	}


	/** Represents the request to delete the specified remote access session. */
	export interface DeleteRemoteAccessSessionRequest {

		/** Required */
		arn: string;
	}

	/** Represents the request to delete the specified remote access session. */
	export interface DeleteRemoteAccessSessionRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRemoteAccessSessionRequestFormGroup() {
		return new FormGroup<DeleteRemoteAccessSessionRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the result of a delete run request. */
	export interface DeleteRunResult {
	}

	/** Represents the result of a delete run request. */
	export interface DeleteRunResultFormProperties {
	}
	export function CreateDeleteRunResultFormGroup() {
		return new FormGroup<DeleteRunResultFormProperties>({
		});

	}


	/** Represents a request to the delete run operation. */
	export interface DeleteRunRequest {

		/** Required */
		arn: string;
	}

	/** Represents a request to the delete run operation. */
	export interface DeleteRunRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRunRequestFormGroup() {
		return new FormGroup<DeleteRunRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTestGridProjectResult {
	}
	export interface DeleteTestGridProjectResultFormProperties {
	}
	export function CreateDeleteTestGridProjectResultFormGroup() {
		return new FormGroup<DeleteTestGridProjectResultFormProperties>({
		});

	}

	export interface DeleteTestGridProjectRequest {

		/** Required */
		projectArn: string;
	}
	export interface DeleteTestGridProjectRequestFormProperties {

		/** Required */
		projectArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTestGridProjectRequestFormGroup() {
		return new FormGroup<DeleteTestGridProjectRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CannotDeleteException {
	}
	export interface CannotDeleteExceptionFormProperties {
	}
	export function CreateCannotDeleteExceptionFormGroup() {
		return new FormGroup<CannotDeleteExceptionFormProperties>({
		});

	}


	/** Represents the result of a delete upload request. */
	export interface DeleteUploadResult {
	}

	/** Represents the result of a delete upload request. */
	export interface DeleteUploadResultFormProperties {
	}
	export function CreateDeleteUploadResultFormGroup() {
		return new FormGroup<DeleteUploadResultFormProperties>({
		});

	}


	/** Represents a request to the delete upload operation. */
	export interface DeleteUploadRequest {

		/** Required */
		arn: string;
	}

	/** Represents a request to the delete upload operation. */
	export interface DeleteUploadRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUploadRequestFormGroup() {
		return new FormGroup<DeleteUploadRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteVPCEConfigurationResult {
	}
	export interface DeleteVPCEConfigurationResultFormProperties {
	}
	export function CreateDeleteVPCEConfigurationResultFormGroup() {
		return new FormGroup<DeleteVPCEConfigurationResultFormProperties>({
		});

	}

	export interface DeleteVPCEConfigurationRequest {

		/** Required */
		arn: string;
	}
	export interface DeleteVPCEConfigurationRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVPCEConfigurationRequestFormGroup() {
		return new FormGroup<DeleteVPCEConfigurationRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidOperationException {
	}
	export interface InvalidOperationExceptionFormProperties {
	}
	export function CreateInvalidOperationExceptionFormGroup() {
		return new FormGroup<InvalidOperationExceptionFormProperties>({
		});

	}


	/** Represents the account settings return values from the <code>GetAccountSettings</code> request. */
	export interface GetAccountSettingsResult {
		accountSettings?: AccountSettings;
	}

	/** Represents the account settings return values from the <code>GetAccountSettings</code> request. */
	export interface GetAccountSettingsResultFormProperties {
	}
	export function CreateGetAccountSettingsResultFormGroup() {
		return new FormGroup<GetAccountSettingsResultFormProperties>({
		});

	}


	/** A container for account-level settings in AWS Device Farm. */
	export interface AccountSettings {
		awsAccountNumber?: string;
		unmeteredDevices?: PurchasedDevicesMap;
		unmeteredRemoteAccessDevices?: PurchasedDevicesMap;
		maxJobTimeoutMinutes?: number | null;
		trialMinutes?: TrialMinutes;
		maxSlots?: MaxSlotMap;
		defaultJobTimeoutMinutes?: number | null;
		skipAppResign?: boolean | null;
	}

	/** A container for account-level settings in AWS Device Farm. */
	export interface AccountSettingsFormProperties {
		awsAccountNumber: FormControl<string | null | undefined>,
		maxJobTimeoutMinutes: FormControl<number | null | undefined>,
		defaultJobTimeoutMinutes: FormControl<number | null | undefined>,
		skipAppResign: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountSettingsFormGroup() {
		return new FormGroup<AccountSettingsFormProperties>({
			awsAccountNumber: new FormControl<string | null | undefined>(undefined),
			maxJobTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
			defaultJobTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
			skipAppResign: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PurchasedDevicesMap {
	}
	export interface PurchasedDevicesMapFormProperties {
	}
	export function CreatePurchasedDevicesMapFormGroup() {
		return new FormGroup<PurchasedDevicesMapFormProperties>({
		});

	}


	/** Represents information about free trial device minutes for an AWS account. */
	export interface TrialMinutes {
		total?: number | null;
		remaining?: number | null;
	}

	/** Represents information about free trial device minutes for an AWS account. */
	export interface TrialMinutesFormProperties {
		total: FormControl<number | null | undefined>,
		remaining: FormControl<number | null | undefined>,
	}
	export function CreateTrialMinutesFormGroup() {
		return new FormGroup<TrialMinutesFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
			remaining: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MaxSlotMap {
	}
	export interface MaxSlotMapFormProperties {
	}
	export function CreateMaxSlotMapFormGroup() {
		return new FormGroup<MaxSlotMapFormProperties>({
		});

	}


	/** Represents the request sent to retrieve the account settings. */
	export interface GetAccountSettingsRequest {
	}

	/** Represents the request sent to retrieve the account settings. */
	export interface GetAccountSettingsRequestFormProperties {
	}
	export function CreateGetAccountSettingsRequestFormGroup() {
		return new FormGroup<GetAccountSettingsRequestFormProperties>({
		});

	}


	/** Represents the result of a get device request. */
	export interface GetDeviceResult {
		device?: Device;
	}

	/** Represents the result of a get device request. */
	export interface GetDeviceResultFormProperties {
	}
	export function CreateGetDeviceResultFormGroup() {
		return new FormGroup<GetDeviceResultFormProperties>({
		});

	}


	/** Represents a request to the get device request. */
	export interface GetDeviceRequest {

		/** Required */
		arn: string;
	}

	/** Represents a request to the get device request. */
	export interface GetDeviceRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetDeviceRequestFormGroup() {
		return new FormGroup<GetDeviceRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDeviceInstanceResult {
		deviceInstance?: DeviceInstance;
	}
	export interface GetDeviceInstanceResultFormProperties {
	}
	export function CreateGetDeviceInstanceResultFormGroup() {
		return new FormGroup<GetDeviceInstanceResultFormProperties>({
		});

	}

	export interface GetDeviceInstanceRequest {

		/** Required */
		arn: string;
	}
	export interface GetDeviceInstanceRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetDeviceInstanceRequestFormGroup() {
		return new FormGroup<GetDeviceInstanceRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the result of a get device pool request. */
	export interface GetDevicePoolResult {
		devicePool?: DevicePool;
	}

	/** Represents the result of a get device pool request. */
	export interface GetDevicePoolResultFormProperties {
	}
	export function CreateGetDevicePoolResultFormGroup() {
		return new FormGroup<GetDevicePoolResultFormProperties>({
		});

	}


	/** Represents a request to the get device pool operation. */
	export interface GetDevicePoolRequest {

		/** Required */
		arn: string;
	}

	/** Represents a request to the get device pool operation. */
	export interface GetDevicePoolRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetDevicePoolRequestFormGroup() {
		return new FormGroup<GetDevicePoolRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the result of describe device pool compatibility request. */
	export interface GetDevicePoolCompatibilityResult {
		compatibleDevices?: Array<DevicePoolCompatibilityResult>;
		incompatibleDevices?: Array<DevicePoolCompatibilityResult>;
	}

	/** Represents the result of describe device pool compatibility request. */
	export interface GetDevicePoolCompatibilityResultFormProperties {
	}
	export function CreateGetDevicePoolCompatibilityResultFormGroup() {
		return new FormGroup<GetDevicePoolCompatibilityResultFormProperties>({
		});

	}


	/** Represents a device pool compatibility result. */
	export interface DevicePoolCompatibilityResult {
		device?: Device;
		compatible?: boolean | null;
		incompatibilityMessages?: Array<IncompatibilityMessage>;
	}

	/** Represents a device pool compatibility result. */
	export interface DevicePoolCompatibilityResultFormProperties {
		compatible: FormControl<boolean | null | undefined>,
	}
	export function CreateDevicePoolCompatibilityResultFormGroup() {
		return new FormGroup<DevicePoolCompatibilityResultFormProperties>({
			compatible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents information about incompatibility. */
	export interface IncompatibilityMessage {
		message?: string;
		type?: DeviceAttribute;
	}

	/** Represents information about incompatibility. */
	export interface IncompatibilityMessageFormProperties {
		message: FormControl<string | null | undefined>,
		type: FormControl<DeviceAttribute | null | undefined>,
	}
	export function CreateIncompatibilityMessageFormGroup() {
		return new FormGroup<IncompatibilityMessageFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DeviceAttribute | null | undefined>(undefined),
		});

	}


	/** Represents a request to the get device pool compatibility operation. */
	export interface GetDevicePoolCompatibilityRequest {

		/** Required */
		devicePoolArn: string;
		appArn?: string;
		testType?: TestType;
		test?: ScheduleRunTest;
		configuration?: ScheduleRunConfiguration;
	}

	/** Represents a request to the get device pool compatibility operation. */
	export interface GetDevicePoolCompatibilityRequestFormProperties {

		/** Required */
		devicePoolArn: FormControl<string | null | undefined>,
		appArn: FormControl<string | null | undefined>,
		testType: FormControl<TestType | null | undefined>,
	}
	export function CreateGetDevicePoolCompatibilityRequestFormGroup() {
		return new FormGroup<GetDevicePoolCompatibilityRequestFormProperties>({
			devicePoolArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appArn: new FormControl<string | null | undefined>(undefined),
			testType: new FormControl<TestType | null | undefined>(undefined),
		});

	}

	export enum TestType { BUILTIN_FUZZ = 'BUILTIN_FUZZ', BUILTIN_EXPLORER = 'BUILTIN_EXPLORER', WEB_PERFORMANCE_PROFILE = 'WEB_PERFORMANCE_PROFILE', APPIUM_JAVA_JUNIT = 'APPIUM_JAVA_JUNIT', APPIUM_JAVA_TESTNG = 'APPIUM_JAVA_TESTNG', APPIUM_PYTHON = 'APPIUM_PYTHON', APPIUM_NODE = 'APPIUM_NODE', APPIUM_RUBY = 'APPIUM_RUBY', APPIUM_WEB_JAVA_JUNIT = 'APPIUM_WEB_JAVA_JUNIT', APPIUM_WEB_JAVA_TESTNG = 'APPIUM_WEB_JAVA_TESTNG', APPIUM_WEB_PYTHON = 'APPIUM_WEB_PYTHON', APPIUM_WEB_NODE = 'APPIUM_WEB_NODE', APPIUM_WEB_RUBY = 'APPIUM_WEB_RUBY', CALABASH = 'CALABASH', INSTRUMENTATION = 'INSTRUMENTATION', UIAUTOMATION = 'UIAUTOMATION', UIAUTOMATOR = 'UIAUTOMATOR', XCTEST = 'XCTEST', XCTEST_UI = 'XCTEST_UI', REMOTE_ACCESS_RECORD = 'REMOTE_ACCESS_RECORD', REMOTE_ACCESS_REPLAY = 'REMOTE_ACCESS_REPLAY' }


	/** Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>. */
	export interface ScheduleRunTest {

		/** Required */
		type: TestType;
		testPackageArn?: string;
		testSpecArn?: string;
		filter?: string;
		parameters?: TestParameters;
	}

	/** Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>. */
	export interface ScheduleRunTestFormProperties {

		/** Required */
		type: FormControl<TestType | null | undefined>,
		testPackageArn: FormControl<string | null | undefined>,
		testSpecArn: FormControl<string | null | undefined>,
		filter: FormControl<string | null | undefined>,
	}
	export function CreateScheduleRunTestFormGroup() {
		return new FormGroup<ScheduleRunTestFormProperties>({
			type: new FormControl<TestType | null | undefined>(undefined, [Validators.required]),
			testPackageArn: new FormControl<string | null | undefined>(undefined),
			testSpecArn: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestParameters {
	}
	export interface TestParametersFormProperties {
	}
	export function CreateTestParametersFormGroup() {
		return new FormGroup<TestParametersFormProperties>({
		});

	}


	/** Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles. */
	export interface ScheduleRunConfiguration {
		extraDataPackageArn?: string;
		networkProfileArn?: string;
		locale?: string;
		location?: Location;
		vpceConfigurationArns?: Array<string>;
		customerArtifactPaths?: CustomerArtifactPaths;
		radios?: Radios;
		auxiliaryApps?: Array<string>;
		billingMethod?: BillingMethod;
	}

	/** Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles. */
	export interface ScheduleRunConfigurationFormProperties {
		extraDataPackageArn: FormControl<string | null | undefined>,
		networkProfileArn: FormControl<string | null | undefined>,
		locale: FormControl<string | null | undefined>,
		billingMethod: FormControl<BillingMethod | null | undefined>,
	}
	export function CreateScheduleRunConfigurationFormGroup() {
		return new FormGroup<ScheduleRunConfigurationFormProperties>({
			extraDataPackageArn: new FormControl<string | null | undefined>(undefined),
			networkProfileArn: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			billingMethod: new FormControl<BillingMethod | null | undefined>(undefined),
		});

	}


	/** <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example, 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p> */
	export interface Location {

		/** Required */
		latitude: number;

		/** Required */
		longitude: number;
	}

	/** <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example, 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p> */
	export interface LocationFormProperties {

		/** Required */
		latitude: FormControl<number | null | undefined>,

		/** Required */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A JSON object that specifies the paths where the artifacts generated by the customer's tests, on the device or in the test environment, are pulled from.</p> <p>Specify <code>deviceHostPaths</code> and optionally specify either <code>iosPaths</code> or <code>androidPaths</code>.</p> <p>For web app tests, you can specify both <code>iosPaths</code> and <code>androidPaths</code>.</p> */
	export interface CustomerArtifactPaths {
		iosPaths?: Array<string>;
		androidPaths?: Array<string>;
		deviceHostPaths?: Array<string>;
	}

	/** <p>A JSON object that specifies the paths where the artifacts generated by the customer's tests, on the device or in the test environment, are pulled from.</p> <p>Specify <code>deviceHostPaths</code> and optionally specify either <code>iosPaths</code> or <code>androidPaths</code>.</p> <p>For web app tests, you can specify both <code>iosPaths</code> and <code>androidPaths</code>.</p> */
	export interface CustomerArtifactPathsFormProperties {
	}
	export function CreateCustomerArtifactPathsFormGroup() {
		return new FormGroup<CustomerArtifactPathsFormProperties>({
		});

	}


	/** Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC. */
	export interface Radios {
		wifi?: boolean | null;
		bluetooth?: boolean | null;
		nfc?: boolean | null;
		gps?: boolean | null;
	}

	/** Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC. */
	export interface RadiosFormProperties {
		wifi: FormControl<boolean | null | undefined>,
		bluetooth: FormControl<boolean | null | undefined>,
		nfc: FormControl<boolean | null | undefined>,
		gps: FormControl<boolean | null | undefined>,
	}
	export function CreateRadiosFormGroup() {
		return new FormGroup<RadiosFormProperties>({
			wifi: new FormControl<boolean | null | undefined>(undefined),
			bluetooth: new FormControl<boolean | null | undefined>(undefined),
			nfc: new FormControl<boolean | null | undefined>(undefined),
			gps: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetInstanceProfileResult {
		instanceProfile?: InstanceProfile;
	}
	export interface GetInstanceProfileResultFormProperties {
	}
	export function CreateGetInstanceProfileResultFormGroup() {
		return new FormGroup<GetInstanceProfileResultFormProperties>({
		});

	}

	export interface GetInstanceProfileRequest {

		/** Required */
		arn: string;
	}
	export interface GetInstanceProfileRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetInstanceProfileRequestFormGroup() {
		return new FormGroup<GetInstanceProfileRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the result of a get job request. */
	export interface GetJobResult {
		job?: Job;
	}

	/** Represents the result of a get job request. */
	export interface GetJobResultFormProperties {
	}
	export function CreateGetJobResultFormGroup() {
		return new FormGroup<GetJobResultFormProperties>({
		});

	}


	/** Represents a device. */
	export interface Job {
		arn?: string;
		name?: string;
		type?: TestType;
		created?: Date;
		status?: ExecutionStatus;
		result?: ExecutionResult;
		started?: Date;
		stopped?: Date;
		counters?: Counters;
		message?: string;
		device?: Device;
		instanceArn?: string;
		deviceMinutes?: DeviceMinutes;
		videoEndpoint?: string;
		videoCapture?: boolean | null;
	}

	/** Represents a device. */
	export interface JobFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<TestType | null | undefined>,
		created: FormControl<Date | null | undefined>,
		status: FormControl<ExecutionStatus | null | undefined>,
		result: FormControl<ExecutionResult | null | undefined>,
		started: FormControl<Date | null | undefined>,
		stopped: FormControl<Date | null | undefined>,
		message: FormControl<string | null | undefined>,
		instanceArn: FormControl<string | null | undefined>,
		videoEndpoint: FormControl<string | null | undefined>,
		videoCapture: FormControl<boolean | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TestType | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ExecutionStatus | null | undefined>(undefined),
			result: new FormControl<ExecutionResult | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
			stopped: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			instanceArn: new FormControl<string | null | undefined>(undefined),
			videoEndpoint: new FormControl<string | null | undefined>(undefined),
			videoCapture: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents entity counters. */
	export interface Counters {
		total?: number | null;
		passed?: number | null;
		failed?: number | null;
		warned?: number | null;
		errored?: number | null;
		stopped?: number | null;
		skipped?: number | null;
	}

	/** Represents entity counters. */
	export interface CountersFormProperties {
		total: FormControl<number | null | undefined>,
		passed: FormControl<number | null | undefined>,
		failed: FormControl<number | null | undefined>,
		warned: FormControl<number | null | undefined>,
		errored: FormControl<number | null | undefined>,
		stopped: FormControl<number | null | undefined>,
		skipped: FormControl<number | null | undefined>,
	}
	export function CreateCountersFormGroup() {
		return new FormGroup<CountersFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
			passed: new FormControl<number | null | undefined>(undefined),
			failed: new FormControl<number | null | undefined>(undefined),
			warned: new FormControl<number | null | undefined>(undefined),
			errored: new FormControl<number | null | undefined>(undefined),
			stopped: new FormControl<number | null | undefined>(undefined),
			skipped: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a request to the get job operation. */
	export interface GetJobRequest {

		/** Required */
		arn: string;
	}

	/** Represents a request to the get job operation. */
	export interface GetJobRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetJobRequestFormGroup() {
		return new FormGroup<GetJobRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetNetworkProfileResult {
		networkProfile?: NetworkProfile;
	}
	export interface GetNetworkProfileResultFormProperties {
	}
	export function CreateGetNetworkProfileResultFormGroup() {
		return new FormGroup<GetNetworkProfileResultFormProperties>({
		});

	}

	export interface GetNetworkProfileRequest {

		/** Required */
		arn: string;
	}
	export interface GetNetworkProfileRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetNetworkProfileRequestFormGroup() {
		return new FormGroup<GetNetworkProfileRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returns the status result for a device offering. */
	export interface GetOfferingStatusResult {
		current?: OfferingStatusMap;
		nextPeriod?: OfferingStatusMap;
		nextToken?: string;
	}

	/** Returns the status result for a device offering. */
	export interface GetOfferingStatusResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOfferingStatusResultFormGroup() {
		return new FormGroup<GetOfferingStatusResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OfferingStatusMap {
	}
	export interface OfferingStatusMapFormProperties {
	}
	export function CreateOfferingStatusMapFormGroup() {
		return new FormGroup<OfferingStatusMapFormProperties>({
		});

	}


	/** Represents the request to retrieve the offering status for the specified customer or account. */
	export interface GetOfferingStatusRequest {
		nextToken?: string;
	}

	/** Represents the request to retrieve the offering status for the specified customer or account. */
	export interface GetOfferingStatusRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOfferingStatusRequestFormGroup() {
		return new FormGroup<GetOfferingStatusRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotEligibleException {
	}
	export interface NotEligibleExceptionFormProperties {
	}
	export function CreateNotEligibleExceptionFormGroup() {
		return new FormGroup<NotEligibleExceptionFormProperties>({
		});

	}


	/** Represents the result of a get project request. */
	export interface GetProjectResult {
		project?: Project;
	}

	/** Represents the result of a get project request. */
	export interface GetProjectResultFormProperties {
	}
	export function CreateGetProjectResultFormGroup() {
		return new FormGroup<GetProjectResultFormProperties>({
		});

	}


	/** Represents a request to the get project operation. */
	export interface GetProjectRequest {

		/** Required */
		arn: string;
	}

	/** Represents a request to the get project operation. */
	export interface GetProjectRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetProjectRequestFormGroup() {
		return new FormGroup<GetProjectRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response from the server that lists detailed information about the remote access session. */
	export interface GetRemoteAccessSessionResult {
		remoteAccessSession?: RemoteAccessSession;
	}

	/** Represents the response from the server that lists detailed information about the remote access session. */
	export interface GetRemoteAccessSessionResultFormProperties {
	}
	export function CreateGetRemoteAccessSessionResultFormGroup() {
		return new FormGroup<GetRemoteAccessSessionResultFormProperties>({
		});

	}


	/** Represents the request to get information about the specified remote access session. */
	export interface GetRemoteAccessSessionRequest {

		/** Required */
		arn: string;
	}

	/** Represents the request to get information about the specified remote access session. */
	export interface GetRemoteAccessSessionRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetRemoteAccessSessionRequestFormGroup() {
		return new FormGroup<GetRemoteAccessSessionRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the result of a get run request. */
	export interface GetRunResult {
		run?: Run;
	}

	/** Represents the result of a get run request. */
	export interface GetRunResultFormProperties {
	}
	export function CreateGetRunResultFormGroup() {
		return new FormGroup<GetRunResultFormProperties>({
		});

	}


	/** Represents a test run on a set of devices with a given app package, test parameters, and so on. */
	export interface Run {
		arn?: string;
		name?: string;
		type?: TestType;
		platform?: DevicePlatform;
		created?: Date;
		status?: ExecutionStatus;
		result?: ExecutionResult;
		started?: Date;
		stopped?: Date;
		counters?: Counters;
		message?: string;
		totalJobs?: number | null;
		completedJobs?: number | null;
		billingMethod?: BillingMethod;
		deviceMinutes?: DeviceMinutes;
		networkProfile?: NetworkProfile;
		parsingResultUrl?: string;
		resultCode?: ExecutionResultCode;
		seed?: number | null;
		appUpload?: string;
		eventCount?: number | null;
		jobTimeoutMinutes?: number | null;
		devicePoolArn?: string;
		locale?: string;
		radios?: Radios;
		location?: Location;
		customerArtifactPaths?: CustomerArtifactPaths;
		webUrl?: string;
		skipAppResign?: boolean | null;
		testSpecArn?: string;
		deviceSelectionResult?: DeviceSelectionResult;
		vpcConfig?: VpcConfig;
	}

	/** Represents a test run on a set of devices with a given app package, test parameters, and so on. */
	export interface RunFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<TestType | null | undefined>,
		platform: FormControl<DevicePlatform | null | undefined>,
		created: FormControl<Date | null | undefined>,
		status: FormControl<ExecutionStatus | null | undefined>,
		result: FormControl<ExecutionResult | null | undefined>,
		started: FormControl<Date | null | undefined>,
		stopped: FormControl<Date | null | undefined>,
		message: FormControl<string | null | undefined>,
		totalJobs: FormControl<number | null | undefined>,
		completedJobs: FormControl<number | null | undefined>,
		billingMethod: FormControl<BillingMethod | null | undefined>,
		parsingResultUrl: FormControl<string | null | undefined>,
		resultCode: FormControl<ExecutionResultCode | null | undefined>,
		seed: FormControl<number | null | undefined>,
		appUpload: FormControl<string | null | undefined>,
		eventCount: FormControl<number | null | undefined>,
		jobTimeoutMinutes: FormControl<number | null | undefined>,
		devicePoolArn: FormControl<string | null | undefined>,
		locale: FormControl<string | null | undefined>,
		webUrl: FormControl<string | null | undefined>,
		skipAppResign: FormControl<boolean | null | undefined>,
		testSpecArn: FormControl<string | null | undefined>,
	}
	export function CreateRunFormGroup() {
		return new FormGroup<RunFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TestType | null | undefined>(undefined),
			platform: new FormControl<DevicePlatform | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ExecutionStatus | null | undefined>(undefined),
			result: new FormControl<ExecutionResult | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
			stopped: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			totalJobs: new FormControl<number | null | undefined>(undefined),
			completedJobs: new FormControl<number | null | undefined>(undefined),
			billingMethod: new FormControl<BillingMethod | null | undefined>(undefined),
			parsingResultUrl: new FormControl<string | null | undefined>(undefined),
			resultCode: new FormControl<ExecutionResultCode | null | undefined>(undefined),
			seed: new FormControl<number | null | undefined>(undefined),
			appUpload: new FormControl<string | null | undefined>(undefined),
			eventCount: new FormControl<number | null | undefined>(undefined),
			jobTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
			devicePoolArn: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			webUrl: new FormControl<string | null | undefined>(undefined),
			skipAppResign: new FormControl<boolean | null | undefined>(undefined),
			testSpecArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExecutionResultCode { PARSING_FAILED = 'PARSING_FAILED', VPC_ENDPOINT_SETUP_FAILED = 'VPC_ENDPOINT_SETUP_FAILED' }


	/** Contains the run results requested by the device selection configuration and how many devices were returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>. */
	export interface DeviceSelectionResult {
		filters?: Array<DeviceFilter>;
		matchedDevicesCount?: number | null;
		maxDevices?: number | null;
	}

	/** Contains the run results requested by the device selection configuration and how many devices were returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>. */
	export interface DeviceSelectionResultFormProperties {
		matchedDevicesCount: FormControl<number | null | undefined>,
		maxDevices: FormControl<number | null | undefined>,
	}
	export function CreateDeviceSelectionResultFormGroup() {
		return new FormGroup<DeviceSelectionResultFormProperties>({
			matchedDevicesCount: new FormControl<number | null | undefined>(undefined),
			maxDevices: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Represents a device filter used to select a set of devices to be included in a test run. This data structure is passed in as the <code>deviceSelectionConfiguration</code> parameter to <code>ScheduleRun</code>. For an example of the JSON request syntax, see <a>ScheduleRun</a>.</p> <p>It is also passed in as the <code>filters</code> parameter to <code>ListDevices</code>. For an example of the JSON request syntax, see <a>ListDevices</a>.</p> */
	export interface DeviceFilter {

		/** Required */
		attribute: DeviceFilterAttribute;

		/** Required */
		operator: RuleOperator;

		/** Required */
		values: Array<string>;
	}

	/** <p>Represents a device filter used to select a set of devices to be included in a test run. This data structure is passed in as the <code>deviceSelectionConfiguration</code> parameter to <code>ScheduleRun</code>. For an example of the JSON request syntax, see <a>ScheduleRun</a>.</p> <p>It is also passed in as the <code>filters</code> parameter to <code>ListDevices</code>. For an example of the JSON request syntax, see <a>ListDevices</a>.</p> */
	export interface DeviceFilterFormProperties {

		/** Required */
		attribute: FormControl<DeviceFilterAttribute | null | undefined>,

		/** Required */
		operator: FormControl<RuleOperator | null | undefined>,
	}
	export function CreateDeviceFilterFormGroup() {
		return new FormGroup<DeviceFilterFormProperties>({
			attribute: new FormControl<DeviceFilterAttribute | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<RuleOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeviceFilterAttribute { ARN = 'ARN', PLATFORM = 'PLATFORM', OS_VERSION = 'OS_VERSION', MODEL = 'MODEL', AVAILABILITY = 'AVAILABILITY', FORM_FACTOR = 'FORM_FACTOR', MANUFACTURER = 'MANUFACTURER', REMOTE_ACCESS_ENABLED = 'REMOTE_ACCESS_ENABLED', REMOTE_DEBUG_ENABLED = 'REMOTE_DEBUG_ENABLED', INSTANCE_ARN = 'INSTANCE_ARN', INSTANCE_LABELS = 'INSTANCE_LABELS', FLEET_TYPE = 'FLEET_TYPE' }


	/** Represents a request to the get run operation. */
	export interface GetRunRequest {

		/** Required */
		arn: string;
	}

	/** Represents a request to the get run operation. */
	export interface GetRunRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetRunRequestFormGroup() {
		return new FormGroup<GetRunRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the result of a get suite request. */
	export interface GetSuiteResult {
		suite?: Suite;
	}

	/** Represents the result of a get suite request. */
	export interface GetSuiteResultFormProperties {
	}
	export function CreateGetSuiteResultFormGroup() {
		return new FormGroup<GetSuiteResultFormProperties>({
		});

	}


	/** Represents a collection of one or more tests. */
	export interface Suite {
		arn?: string;
		name?: string;
		type?: TestType;
		created?: Date;
		status?: ExecutionStatus;
		result?: ExecutionResult;
		started?: Date;
		stopped?: Date;
		counters?: Counters;
		message?: string;
		deviceMinutes?: DeviceMinutes;
	}

	/** Represents a collection of one or more tests. */
	export interface SuiteFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<TestType | null | undefined>,
		created: FormControl<Date | null | undefined>,
		status: FormControl<ExecutionStatus | null | undefined>,
		result: FormControl<ExecutionResult | null | undefined>,
		started: FormControl<Date | null | undefined>,
		stopped: FormControl<Date | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateSuiteFormGroup() {
		return new FormGroup<SuiteFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TestType | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ExecutionStatus | null | undefined>(undefined),
			result: new FormControl<ExecutionResult | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
			stopped: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to the get suite operation. */
	export interface GetSuiteRequest {

		/** Required */
		arn: string;
	}

	/** Represents a request to the get suite operation. */
	export interface GetSuiteRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetSuiteRequestFormGroup() {
		return new FormGroup<GetSuiteRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the result of a get test request. */
	export interface GetTestResult {
		test?: Test;
	}

	/** Represents the result of a get test request. */
	export interface GetTestResultFormProperties {
	}
	export function CreateGetTestResultFormGroup() {
		return new FormGroup<GetTestResultFormProperties>({
		});

	}


	/** Represents a condition that is evaluated. */
	export interface Test {
		arn?: string;
		name?: string;
		type?: TestType;
		created?: Date;
		status?: ExecutionStatus;
		result?: ExecutionResult;
		started?: Date;
		stopped?: Date;
		counters?: Counters;
		message?: string;
		deviceMinutes?: DeviceMinutes;
	}

	/** Represents a condition that is evaluated. */
	export interface TestFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<TestType | null | undefined>,
		created: FormControl<Date | null | undefined>,
		status: FormControl<ExecutionStatus | null | undefined>,
		result: FormControl<ExecutionResult | null | undefined>,
		started: FormControl<Date | null | undefined>,
		stopped: FormControl<Date | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateTestFormGroup() {
		return new FormGroup<TestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TestType | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ExecutionStatus | null | undefined>(undefined),
			result: new FormControl<ExecutionResult | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
			stopped: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to the get test operation. */
	export interface GetTestRequest {

		/** Required */
		arn: string;
	}

	/** Represents a request to the get test operation. */
	export interface GetTestRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetTestRequestFormGroup() {
		return new FormGroup<GetTestRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTestGridProjectResult {
		testGridProject?: TestGridProject;
	}
	export interface GetTestGridProjectResultFormProperties {
	}
	export function CreateGetTestGridProjectResultFormGroup() {
		return new FormGroup<GetTestGridProjectResultFormProperties>({
		});

	}

	export interface GetTestGridProjectRequest {

		/** Required */
		projectArn: string;
	}
	export interface GetTestGridProjectRequestFormProperties {

		/** Required */
		projectArn: FormControl<string | null | undefined>,
	}
	export function CreateGetTestGridProjectRequestFormGroup() {
		return new FormGroup<GetTestGridProjectRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTestGridSessionResult {
		testGridSession?: TestGridSession;
	}
	export interface GetTestGridSessionResultFormProperties {
	}
	export function CreateGetTestGridSessionResultFormGroup() {
		return new FormGroup<GetTestGridSessionResultFormProperties>({
		});

	}


	/** A <a>TestGridSession</a> is a single instance of a browser launched from the URL provided by a call to <a>CreateTestGridUrl</a>. */
	export interface TestGridSession {
		arn?: string;
		status?: TestGridSessionStatus;
		created?: Date;
		ended?: Date;
		billingMinutes?: number | null;
		seleniumProperties?: string;
	}

	/** A <a>TestGridSession</a> is a single instance of a browser launched from the URL provided by a call to <a>CreateTestGridUrl</a>. */
	export interface TestGridSessionFormProperties {
		arn: FormControl<string | null | undefined>,
		status: FormControl<TestGridSessionStatus | null | undefined>,
		created: FormControl<Date | null | undefined>,
		ended: FormControl<Date | null | undefined>,
		billingMinutes: FormControl<number | null | undefined>,
		seleniumProperties: FormControl<string | null | undefined>,
	}
	export function CreateTestGridSessionFormGroup() {
		return new FormGroup<TestGridSessionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TestGridSessionStatus | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			ended: new FormControl<Date | null | undefined>(undefined),
			billingMinutes: new FormControl<number | null | undefined>(undefined),
			seleniumProperties: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TestGridSessionStatus { ACTIVE = 'ACTIVE', CLOSED = 'CLOSED', ERRORED = 'ERRORED' }

	export interface GetTestGridSessionRequest {
		projectArn?: string;
		sessionId?: string;
		sessionArn?: string;
	}
	export interface GetTestGridSessionRequestFormProperties {
		projectArn: FormControl<string | null | undefined>,
		sessionId: FormControl<string | null | undefined>,
		sessionArn: FormControl<string | null | undefined>,
	}
	export function CreateGetTestGridSessionRequestFormGroup() {
		return new FormGroup<GetTestGridSessionRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			sessionArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a get upload request. */
	export interface GetUploadResult {
		upload?: Upload;
	}

	/** Represents the result of a get upload request. */
	export interface GetUploadResultFormProperties {
	}
	export function CreateGetUploadResultFormGroup() {
		return new FormGroup<GetUploadResultFormProperties>({
		});

	}


	/** Represents a request to the get upload operation. */
	export interface GetUploadRequest {

		/** Required */
		arn: string;
	}

	/** Represents a request to the get upload operation. */
	export interface GetUploadRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetUploadRequestFormGroup() {
		return new FormGroup<GetUploadRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetVPCEConfigurationResult {
		vpceConfiguration?: VPCEConfiguration;
	}
	export interface GetVPCEConfigurationResultFormProperties {
	}
	export function CreateGetVPCEConfigurationResultFormGroup() {
		return new FormGroup<GetVPCEConfigurationResultFormProperties>({
		});

	}

	export interface GetVPCEConfigurationRequest {

		/** Required */
		arn: string;
	}
	export interface GetVPCEConfigurationRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetVPCEConfigurationRequestFormGroup() {
		return new FormGroup<GetVPCEConfigurationRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response from the server after AWS Device Farm makes a request to install to a remote access session. */
	export interface InstallToRemoteAccessSessionResult {
		appUpload?: Upload;
	}

	/** Represents the response from the server after AWS Device Farm makes a request to install to a remote access session. */
	export interface InstallToRemoteAccessSessionResultFormProperties {
	}
	export function CreateInstallToRemoteAccessSessionResultFormGroup() {
		return new FormGroup<InstallToRemoteAccessSessionResultFormProperties>({
		});

	}


	/** Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session. */
	export interface InstallToRemoteAccessSessionRequest {

		/** Required */
		remoteAccessSessionArn: string;

		/** Required */
		appArn: string;
	}

	/** Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session. */
	export interface InstallToRemoteAccessSessionRequestFormProperties {

		/** Required */
		remoteAccessSessionArn: FormControl<string | null | undefined>,

		/** Required */
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateInstallToRemoteAccessSessionRequestFormGroup() {
		return new FormGroup<InstallToRemoteAccessSessionRequestFormProperties>({
			remoteAccessSessionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the result of a list artifacts operation. */
	export interface ListArtifactsResult {
		artifacts?: Array<Artifact>;
		nextToken?: string;
	}

	/** Represents the result of a list artifacts operation. */
	export interface ListArtifactsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListArtifactsResultFormGroup() {
		return new FormGroup<ListArtifactsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a test. Examples of artifacts include logs and screenshots. */
	export interface Artifact {
		arn?: string;
		name?: string;
		type?: ArtifactType;
		extension?: string;
		url?: string;
	}

	/** Represents the output of a test. Examples of artifacts include logs and screenshots. */
	export interface ArtifactFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<ArtifactType | null | undefined>,
		extension: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateArtifactFormGroup() {
		return new FormGroup<ArtifactFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ArtifactType | null | undefined>(undefined),
			extension: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ArtifactType { UNKNOWN = 'UNKNOWN', SCREENSHOT = 'SCREENSHOT', DEVICE_LOG = 'DEVICE_LOG', MESSAGE_LOG = 'MESSAGE_LOG', VIDEO_LOG = 'VIDEO_LOG', RESULT_LOG = 'RESULT_LOG', SERVICE_LOG = 'SERVICE_LOG', WEBKIT_LOG = 'WEBKIT_LOG', INSTRUMENTATION_OUTPUT = 'INSTRUMENTATION_OUTPUT', EXERCISER_MONKEY_OUTPUT = 'EXERCISER_MONKEY_OUTPUT', CALABASH_JSON_OUTPUT = 'CALABASH_JSON_OUTPUT', CALABASH_PRETTY_OUTPUT = 'CALABASH_PRETTY_OUTPUT', CALABASH_STANDARD_OUTPUT = 'CALABASH_STANDARD_OUTPUT', CALABASH_JAVA_XML_OUTPUT = 'CALABASH_JAVA_XML_OUTPUT', AUTOMATION_OUTPUT = 'AUTOMATION_OUTPUT', APPIUM_SERVER_OUTPUT = 'APPIUM_SERVER_OUTPUT', APPIUM_JAVA_OUTPUT = 'APPIUM_JAVA_OUTPUT', APPIUM_JAVA_XML_OUTPUT = 'APPIUM_JAVA_XML_OUTPUT', APPIUM_PYTHON_OUTPUT = 'APPIUM_PYTHON_OUTPUT', APPIUM_PYTHON_XML_OUTPUT = 'APPIUM_PYTHON_XML_OUTPUT', EXPLORER_EVENT_LOG = 'EXPLORER_EVENT_LOG', EXPLORER_SUMMARY_LOG = 'EXPLORER_SUMMARY_LOG', APPLICATION_CRASH_REPORT = 'APPLICATION_CRASH_REPORT', XCTEST_LOG = 'XCTEST_LOG', VIDEO = 'VIDEO', CUSTOMER_ARTIFACT = 'CUSTOMER_ARTIFACT', CUSTOMER_ARTIFACT_LOG = 'CUSTOMER_ARTIFACT_LOG', TESTSPEC_OUTPUT = 'TESTSPEC_OUTPUT' }


	/** Represents a request to the list artifacts operation. */
	export interface ListArtifactsRequest {

		/** Required */
		arn: string;

		/** Required */
		type: ArtifactCategory;
		nextToken?: string;
	}

	/** Represents a request to the list artifacts operation. */
	export interface ListArtifactsRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ArtifactCategory | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListArtifactsRequestFormGroup() {
		return new FormGroup<ListArtifactsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ArtifactCategory | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ArtifactCategory { SCREENSHOT = 'SCREENSHOT', FILE = 'FILE', LOG = 'LOG' }

	export interface ListDeviceInstancesResult {
		deviceInstances?: Array<DeviceInstance>;
		nextToken?: string;
	}
	export interface ListDeviceInstancesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceInstancesResultFormGroup() {
		return new FormGroup<ListDeviceInstancesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDeviceInstancesRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListDeviceInstancesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceInstancesRequestFormGroup() {
		return new FormGroup<ListDeviceInstancesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list device pools request. */
	export interface ListDevicePoolsResult {
		devicePools?: Array<DevicePool>;
		nextToken?: string;
	}

	/** Represents the result of a list device pools request. */
	export interface ListDevicePoolsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicePoolsResultFormGroup() {
		return new FormGroup<ListDevicePoolsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list device pools request. */
	export interface ListDevicePoolsRequest {

		/** Required */
		arn: string;
		type?: DevicePoolType;
		nextToken?: string;
	}

	/** Represents the result of a list device pools request. */
	export interface ListDevicePoolsRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		type: FormControl<DevicePoolType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicePoolsRequestFormGroup() {
		return new FormGroup<ListDevicePoolsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DevicePoolType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list devices operation. */
	export interface ListDevicesResult {
		devices?: Array<Device>;
		nextToken?: string;
	}

	/** Represents the result of a list devices operation. */
	export interface ListDevicesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicesResultFormGroup() {
		return new FormGroup<ListDevicesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list devices request. */
	export interface ListDevicesRequest {
		arn?: string;
		nextToken?: string;
		filters?: Array<DeviceFilter>;
	}

	/** Represents the result of a list devices request. */
	export interface ListDevicesRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicesRequestFormGroup() {
		return new FormGroup<ListDevicesRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInstanceProfilesResult {
		instanceProfiles?: Array<InstanceProfile>;
		nextToken?: string;
	}
	export interface ListInstanceProfilesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstanceProfilesResultFormGroup() {
		return new FormGroup<ListInstanceProfilesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInstanceProfilesRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListInstanceProfilesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstanceProfilesRequestFormGroup() {
		return new FormGroup<ListInstanceProfilesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list jobs request. */
	export interface ListJobsResult {
		jobs?: Array<Job>;
		nextToken?: string;
	}

	/** Represents the result of a list jobs request. */
	export interface ListJobsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResultFormGroup() {
		return new FormGroup<ListJobsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to the list jobs operation. */
	export interface ListJobsRequest {

		/** Required */
		arn: string;
		nextToken?: string;
	}

	/** Represents a request to the list jobs operation. */
	export interface ListJobsRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsRequestFormGroup() {
		return new FormGroup<ListJobsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNetworkProfilesResult {
		networkProfiles?: Array<NetworkProfile>;
		nextToken?: string;
	}
	export interface ListNetworkProfilesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworkProfilesResultFormGroup() {
		return new FormGroup<ListNetworkProfilesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNetworkProfilesRequest {

		/** Required */
		arn: string;
		type?: DevicePoolType;
		nextToken?: string;
	}
	export interface ListNetworkProfilesRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		type: FormControl<DevicePoolType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworkProfilesRequestFormGroup() {
		return new FormGroup<ListNetworkProfilesRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DevicePoolType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOfferingPromotionsResult {
		offeringPromotions?: Array<OfferingPromotion>;
		nextToken?: string;
	}
	export interface ListOfferingPromotionsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOfferingPromotionsResultFormGroup() {
		return new FormGroup<ListOfferingPromotionsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about an offering promotion. */
	export interface OfferingPromotion {
		id?: string;
		description?: string;
	}

	/** Represents information about an offering promotion. */
	export interface OfferingPromotionFormProperties {
		id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateOfferingPromotionFormGroup() {
		return new FormGroup<OfferingPromotionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOfferingPromotionsRequest {
		nextToken?: string;
	}
	export interface ListOfferingPromotionsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOfferingPromotionsRequestFormGroup() {
		return new FormGroup<ListOfferingPromotionsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns the transaction log of the specified offerings. */
	export interface ListOfferingTransactionsResult {
		offeringTransactions?: Array<OfferingTransaction>;
		nextToken?: string;
	}

	/** Returns the transaction log of the specified offerings. */
	export interface ListOfferingTransactionsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOfferingTransactionsResultFormGroup() {
		return new FormGroup<ListOfferingTransactionsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of an offering transaction. */
	export interface OfferingTransaction {
		offeringStatus?: OfferingStatus;
		transactionId?: string;
		offeringPromotionId?: string;
		createdOn?: Date;
		cost?: MonetaryAmount;
	}

	/** Represents the metadata of an offering transaction. */
	export interface OfferingTransactionFormProperties {
		transactionId: FormControl<string | null | undefined>,
		offeringPromotionId: FormControl<string | null | undefined>,
		createdOn: FormControl<Date | null | undefined>,
	}
	export function CreateOfferingTransactionFormGroup() {
		return new FormGroup<OfferingTransactionFormProperties>({
			transactionId: new FormControl<string | null | undefined>(undefined),
			offeringPromotionId: new FormControl<string | null | undefined>(undefined),
			createdOn: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The status of the offering. */
	export interface OfferingStatus {
		type?: OfferingTransactionType;
		offering?: Offering;
		quantity?: number | null;
		effectiveOn?: Date;
	}

	/** The status of the offering. */
	export interface OfferingStatusFormProperties {
		type: FormControl<OfferingTransactionType | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		effectiveOn: FormControl<Date | null | undefined>,
	}
	export function CreateOfferingStatusFormGroup() {
		return new FormGroup<OfferingStatusFormProperties>({
			type: new FormControl<OfferingTransactionType | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			effectiveOn: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OfferingTransactionType { PURCHASE = 'PURCHASE', RENEW = 'RENEW', SYSTEM = 'SYSTEM' }


	/** Represents the metadata of a device offering. */
	export interface Offering {
		id?: string;
		description?: string;
		type?: OfferingType;
		platform?: DevicePlatform;
		recurringCharges?: Array<RecurringCharge>;
	}

	/** Represents the metadata of a device offering. */
	export interface OfferingFormProperties {
		id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		type: FormControl<OfferingType | null | undefined>,
		platform: FormControl<DevicePlatform | null | undefined>,
	}
	export function CreateOfferingFormGroup() {
		return new FormGroup<OfferingFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<OfferingType | null | undefined>(undefined),
			platform: new FormControl<DevicePlatform | null | undefined>(undefined),
		});

	}

	export enum OfferingType { RECURRING = 'RECURRING' }


	/** Specifies whether charges for devices are recurring. */
	export interface RecurringCharge {
		cost?: MonetaryAmount;
		frequency?: RecurringChargeFrequency;
	}

	/** Specifies whether charges for devices are recurring. */
	export interface RecurringChargeFormProperties {
		frequency: FormControl<RecurringChargeFrequency | null | undefined>,
	}
	export function CreateRecurringChargeFormGroup() {
		return new FormGroup<RecurringChargeFormProperties>({
			frequency: new FormControl<RecurringChargeFrequency | null | undefined>(undefined),
		});

	}


	/** A number that represents the monetary amount for an offering or transaction. */
	export interface MonetaryAmount {
		amount?: number | null;
		currencyCode?: CurrencyCode;
	}

	/** A number that represents the monetary amount for an offering or transaction. */
	export interface MonetaryAmountFormProperties {
		amount: FormControl<number | null | undefined>,
		currencyCode: FormControl<CurrencyCode | null | undefined>,
	}
	export function CreateMonetaryAmountFormGroup() {
		return new FormGroup<MonetaryAmountFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<CurrencyCode | null | undefined>(undefined),
		});

	}

	export enum CurrencyCode { USD = 'USD' }

	export enum RecurringChargeFrequency { MONTHLY = 'MONTHLY' }


	/** Represents the request to list the offering transaction history. */
	export interface ListOfferingTransactionsRequest {
		nextToken?: string;
	}

	/** Represents the request to list the offering transaction history. */
	export interface ListOfferingTransactionsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOfferingTransactionsRequestFormGroup() {
		return new FormGroup<ListOfferingTransactionsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the return values of the list of offerings. */
	export interface ListOfferingsResult {
		offerings?: Array<Offering>;
		nextToken?: string;
	}

	/** Represents the return values of the list of offerings. */
	export interface ListOfferingsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOfferingsResultFormGroup() {
		return new FormGroup<ListOfferingsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to list all offerings. */
	export interface ListOfferingsRequest {
		nextToken?: string;
	}

	/** Represents the request to list all offerings. */
	export interface ListOfferingsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOfferingsRequestFormGroup() {
		return new FormGroup<ListOfferingsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list projects request. */
	export interface ListProjectsResult {
		projects?: Array<Project>;
		nextToken?: string;
	}

	/** Represents the result of a list projects request. */
	export interface ListProjectsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsResultFormGroup() {
		return new FormGroup<ListProjectsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to the list projects operation. */
	export interface ListProjectsRequest {
		arn?: string;
		nextToken?: string;
	}

	/** Represents a request to the list projects operation. */
	export interface ListProjectsRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsRequestFormGroup() {
		return new FormGroup<ListProjectsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session. */
	export interface ListRemoteAccessSessionsResult {
		remoteAccessSessions?: Array<RemoteAccessSession>;
		nextToken?: string;
	}

	/** Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session. */
	export interface ListRemoteAccessSessionsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRemoteAccessSessionsResultFormGroup() {
		return new FormGroup<ListRemoteAccessSessionsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to return information about the remote access session. */
	export interface ListRemoteAccessSessionsRequest {

		/** Required */
		arn: string;
		nextToken?: string;
	}

	/** Represents the request to return information about the remote access session. */
	export interface ListRemoteAccessSessionsRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRemoteAccessSessionsRequestFormGroup() {
		return new FormGroup<ListRemoteAccessSessionsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list runs request. */
	export interface ListRunsResult {
		runs?: Array<Run>;
		nextToken?: string;
	}

	/** Represents the result of a list runs request. */
	export interface ListRunsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRunsResultFormGroup() {
		return new FormGroup<ListRunsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to the list runs operation. */
	export interface ListRunsRequest {

		/** Required */
		arn: string;
		nextToken?: string;
	}

	/** Represents a request to the list runs operation. */
	export interface ListRunsRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRunsRequestFormGroup() {
		return new FormGroup<ListRunsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list samples request. */
	export interface ListSamplesResult {
		samples?: Array<Sample>;
		nextToken?: string;
	}

	/** Represents the result of a list samples request. */
	export interface ListSamplesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSamplesResultFormGroup() {
		return new FormGroup<ListSamplesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a sample of performance data. */
	export interface Sample {
		arn?: string;
		type?: SampleType;
		url?: string;
	}

	/** Represents a sample of performance data. */
	export interface SampleFormProperties {
		arn: FormControl<string | null | undefined>,
		type: FormControl<SampleType | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSampleFormGroup() {
		return new FormGroup<SampleFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SampleType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SampleType { CPU = 'CPU', MEMORY = 'MEMORY', THREADS = 'THREADS', RX_RATE = 'RX_RATE', TX_RATE = 'TX_RATE', RX = 'RX', TX = 'TX', NATIVE_FRAMES = 'NATIVE_FRAMES', NATIVE_FPS = 'NATIVE_FPS', NATIVE_MIN_DRAWTIME = 'NATIVE_MIN_DRAWTIME', NATIVE_AVG_DRAWTIME = 'NATIVE_AVG_DRAWTIME', NATIVE_MAX_DRAWTIME = 'NATIVE_MAX_DRAWTIME', OPENGL_FRAMES = 'OPENGL_FRAMES', OPENGL_FPS = 'OPENGL_FPS', OPENGL_MIN_DRAWTIME = 'OPENGL_MIN_DRAWTIME', OPENGL_AVG_DRAWTIME = 'OPENGL_AVG_DRAWTIME', OPENGL_MAX_DRAWTIME = 'OPENGL_MAX_DRAWTIME' }


	/** Represents a request to the list samples operation. */
	export interface ListSamplesRequest {

		/** Required */
		arn: string;
		nextToken?: string;
	}

	/** Represents a request to the list samples operation. */
	export interface ListSamplesRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSamplesRequestFormGroup() {
		return new FormGroup<ListSamplesRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list suites request. */
	export interface ListSuitesResult {
		suites?: Array<Suite>;
		nextToken?: string;
	}

	/** Represents the result of a list suites request. */
	export interface ListSuitesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSuitesResultFormGroup() {
		return new FormGroup<ListSuitesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to the list suites operation. */
	export interface ListSuitesRequest {

		/** Required */
		arn: string;
		nextToken?: string;
	}

	/** Represents a request to the list suites operation. */
	export interface ListSuitesRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSuitesRequestFormGroup() {
		return new FormGroup<ListSuitesRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** The metadata that you apply to a resource to help you categorize and organize it. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters. Tag values can have a maximum length of 256 characters.  */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** The metadata that you apply to a resource to help you categorize and organize it. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters. Tag values can have a maximum length of 256 characters.  */
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

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTestGridProjectsResult {
		testGridProjects?: Array<TestGridProject>;
		nextToken?: string;
	}
	export interface ListTestGridProjectsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestGridProjectsResultFormGroup() {
		return new FormGroup<ListTestGridProjectsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTestGridProjectsRequest {
		maxResult?: number | null;
		nextToken?: string;
	}
	export interface ListTestGridProjectsRequestFormProperties {
		maxResult: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestGridProjectsRequestFormGroup() {
		return new FormGroup<ListTestGridProjectsRequestFormProperties>({
			maxResult: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTestGridSessionActionsResult {
		actions?: Array<TestGridSessionAction>;
		nextToken?: string;
	}
	export interface ListTestGridSessionActionsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestGridSessionActionsResultFormGroup() {
		return new FormGroup<ListTestGridSessionActionsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An action taken by a <a>TestGridSession</a> browser instance. */
	export interface TestGridSessionAction {
		action?: string;
		started?: Date;
		duration?: number | null;
		statusCode?: string;
		requestMethod?: string;
	}

	/** An action taken by a <a>TestGridSession</a> browser instance. */
	export interface TestGridSessionActionFormProperties {
		action: FormControl<string | null | undefined>,
		started: FormControl<Date | null | undefined>,
		duration: FormControl<number | null | undefined>,
		statusCode: FormControl<string | null | undefined>,
		requestMethod: FormControl<string | null | undefined>,
	}
	export function CreateTestGridSessionActionFormGroup() {
		return new FormGroup<TestGridSessionActionFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			statusCode: new FormControl<string | null | undefined>(undefined),
			requestMethod: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTestGridSessionActionsRequest {

		/** Required */
		sessionArn: string;
		maxResult?: number | null;
		nextToken?: string;
	}
	export interface ListTestGridSessionActionsRequestFormProperties {

		/** Required */
		sessionArn: FormControl<string | null | undefined>,
		maxResult: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestGridSessionActionsRequestFormGroup() {
		return new FormGroup<ListTestGridSessionActionsRequestFormProperties>({
			sessionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResult: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTestGridSessionArtifactsResult {
		artifacts?: Array<TestGridSessionArtifact>;
		nextToken?: string;
	}
	export interface ListTestGridSessionArtifactsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestGridSessionArtifactsResultFormGroup() {
		return new FormGroup<ListTestGridSessionArtifactsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Artifacts are video and other files that are produced in the process of running a browser in an automated context. </p> <note> <p>Video elements might be broken up into multiple artifacts as they grow in size during creation. </p> </note> */
	export interface TestGridSessionArtifact {
		filename?: string;
		type?: TestGridSessionArtifactType;
		url?: string;
	}

	/** <p>Artifacts are video and other files that are produced in the process of running a browser in an automated context. </p> <note> <p>Video elements might be broken up into multiple artifacts as they grow in size during creation. </p> </note> */
	export interface TestGridSessionArtifactFormProperties {
		filename: FormControl<string | null | undefined>,
		type: FormControl<TestGridSessionArtifactType | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateTestGridSessionArtifactFormGroup() {
		return new FormGroup<TestGridSessionArtifactFormProperties>({
			filename: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TestGridSessionArtifactType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TestGridSessionArtifactType { UNKNOWN = 'UNKNOWN', VIDEO = 'VIDEO', SELENIUM_LOG = 'SELENIUM_LOG' }

	export interface ListTestGridSessionArtifactsRequest {

		/** Required */
		sessionArn: string;
		type?: TestGridSessionArtifactCategory;
		maxResult?: number | null;
		nextToken?: string;
	}
	export interface ListTestGridSessionArtifactsRequestFormProperties {

		/** Required */
		sessionArn: FormControl<string | null | undefined>,
		type: FormControl<TestGridSessionArtifactCategory | null | undefined>,
		maxResult: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestGridSessionArtifactsRequestFormGroup() {
		return new FormGroup<ListTestGridSessionArtifactsRequestFormProperties>({
			sessionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<TestGridSessionArtifactCategory | null | undefined>(undefined),
			maxResult: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TestGridSessionArtifactCategory { VIDEO = 'VIDEO', LOG = 'LOG' }

	export interface ListTestGridSessionsResult {
		testGridSessions?: Array<TestGridSession>;
		nextToken?: string;
	}
	export interface ListTestGridSessionsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestGridSessionsResultFormGroup() {
		return new FormGroup<ListTestGridSessionsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTestGridSessionsRequest {

		/** Required */
		projectArn: string;
		status?: TestGridSessionStatus;
		creationTimeAfter?: Date;
		creationTimeBefore?: Date;
		endTimeAfter?: Date;
		endTimeBefore?: Date;
		maxResult?: number | null;
		nextToken?: string;
	}
	export interface ListTestGridSessionsRequestFormProperties {

		/** Required */
		projectArn: FormControl<string | null | undefined>,
		status: FormControl<TestGridSessionStatus | null | undefined>,
		creationTimeAfter: FormControl<Date | null | undefined>,
		creationTimeBefore: FormControl<Date | null | undefined>,
		endTimeAfter: FormControl<Date | null | undefined>,
		endTimeBefore: FormControl<Date | null | undefined>,
		maxResult: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestGridSessionsRequestFormGroup() {
		return new FormGroup<ListTestGridSessionsRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<TestGridSessionStatus | null | undefined>(undefined),
			creationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			creationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			endTimeAfter: new FormControl<Date | null | undefined>(undefined),
			endTimeBefore: new FormControl<Date | null | undefined>(undefined),
			maxResult: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list tests request. */
	export interface ListTestsResult {
		tests?: Array<Test>;
		nextToken?: string;
	}

	/** Represents the result of a list tests request. */
	export interface ListTestsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestsResultFormGroup() {
		return new FormGroup<ListTestsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to the list tests operation. */
	export interface ListTestsRequest {

		/** Required */
		arn: string;
		nextToken?: string;
	}

	/** Represents a request to the list tests operation. */
	export interface ListTestsRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestsRequestFormGroup() {
		return new FormGroup<ListTestsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list unique problems request. */
	export interface ListUniqueProblemsResult {
		uniqueProblems?: UniqueProblemsByExecutionResultMap;
		nextToken?: string;
	}

	/** Represents the result of a list unique problems request. */
	export interface ListUniqueProblemsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUniqueProblemsResultFormGroup() {
		return new FormGroup<ListUniqueProblemsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UniqueProblemsByExecutionResultMap {
	}
	export interface UniqueProblemsByExecutionResultMapFormProperties {
	}
	export function CreateUniqueProblemsByExecutionResultMapFormGroup() {
		return new FormGroup<UniqueProblemsByExecutionResultMapFormProperties>({
		});

	}


	/** Represents a request to the list unique problems operation. */
	export interface ListUniqueProblemsRequest {

		/** Required */
		arn: string;
		nextToken?: string;
	}

	/** Represents a request to the list unique problems operation. */
	export interface ListUniqueProblemsRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUniqueProblemsRequestFormGroup() {
		return new FormGroup<ListUniqueProblemsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list uploads request. */
	export interface ListUploadsResult {
		uploads?: Array<Upload>;
		nextToken?: string;
	}

	/** Represents the result of a list uploads request. */
	export interface ListUploadsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUploadsResultFormGroup() {
		return new FormGroup<ListUploadsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to the list uploads operation. */
	export interface ListUploadsRequest {

		/** Required */
		arn: string;
		type?: UploadType;
		nextToken?: string;
	}

	/** Represents a request to the list uploads operation. */
	export interface ListUploadsRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		type: FormControl<UploadType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUploadsRequestFormGroup() {
		return new FormGroup<ListUploadsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<UploadType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVPCEConfigurationsResult {
		vpceConfigurations?: Array<VPCEConfiguration>;
		nextToken?: string;
	}
	export interface ListVPCEConfigurationsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVPCEConfigurationsResultFormGroup() {
		return new FormGroup<ListVPCEConfigurationsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVPCEConfigurationsRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListVPCEConfigurationsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVPCEConfigurationsRequestFormGroup() {
		return new FormGroup<ListVPCEConfigurationsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of the purchase offering (for example, success or failure). */
	export interface PurchaseOfferingResult {
		offeringTransaction?: OfferingTransaction;
	}

	/** The result of the purchase offering (for example, success or failure). */
	export interface PurchaseOfferingResultFormProperties {
	}
	export function CreatePurchaseOfferingResultFormGroup() {
		return new FormGroup<PurchaseOfferingResultFormProperties>({
		});

	}


	/** Represents a request for a purchase offering. */
	export interface PurchaseOfferingRequest {

		/** Required */
		offeringId: string;

		/** Required */
		quantity: number;
		offeringPromotionId?: string;
	}

	/** Represents a request for a purchase offering. */
	export interface PurchaseOfferingRequestFormProperties {

		/** Required */
		offeringId: FormControl<string | null | undefined>,

		/** Required */
		quantity: FormControl<number | null | undefined>,
		offeringPromotionId: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseOfferingRequestFormGroup() {
		return new FormGroup<PurchaseOfferingRequestFormProperties>({
			offeringId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offeringPromotionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a renewal offering. */
	export interface RenewOfferingResult {
		offeringTransaction?: OfferingTransaction;
	}

	/** The result of a renewal offering. */
	export interface RenewOfferingResultFormProperties {
	}
	export function CreateRenewOfferingResultFormGroup() {
		return new FormGroup<RenewOfferingResultFormProperties>({
		});

	}


	/** A request that represents an offering renewal. */
	export interface RenewOfferingRequest {

		/** Required */
		offeringId: string;

		/** Required */
		quantity: number;
	}

	/** A request that represents an offering renewal. */
	export interface RenewOfferingRequestFormProperties {

		/** Required */
		offeringId: FormControl<string | null | undefined>,

		/** Required */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateRenewOfferingRequestFormGroup() {
		return new FormGroup<RenewOfferingRequestFormProperties>({
			offeringId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the result of a schedule run request. */
	export interface ScheduleRunResult {
		run?: Run;
	}

	/** Represents the result of a schedule run request. */
	export interface ScheduleRunResultFormProperties {
	}
	export function CreateScheduleRunResultFormGroup() {
		return new FormGroup<ScheduleRunResultFormProperties>({
		});

	}


	/** Represents a request to the schedule run operation. */
	export interface ScheduleRunRequest {

		/** Required */
		projectArn: string;
		appArn?: string;
		devicePoolArn?: string;
		deviceSelectionConfiguration?: DeviceSelectionConfiguration;
		name?: string;

		/** Required */
		test: ScheduleRunTest;
		configuration?: ScheduleRunConfiguration;
		executionConfiguration?: ExecutionConfiguration;
	}

	/** Represents a request to the schedule run operation. */
	export interface ScheduleRunRequestFormProperties {

		/** Required */
		projectArn: FormControl<string | null | undefined>,
		appArn: FormControl<string | null | undefined>,
		devicePoolArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateScheduleRunRequestFormGroup() {
		return new FormGroup<ScheduleRunRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appArn: new FormControl<string | null | undefined>(undefined),
			devicePoolArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>. */
	export interface DeviceSelectionConfiguration {

		/** Required */
		filters: Array<DeviceFilter>;

		/** Required */
		maxDevices: number;
	}

	/** Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>. */
	export interface DeviceSelectionConfigurationFormProperties {

		/** Required */
		maxDevices: FormControl<number | null | undefined>,
	}
	export function CreateDeviceSelectionConfigurationFormGroup() {
		return new FormGroup<DeviceSelectionConfigurationFormProperties>({
			maxDevices: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents configuration information about a test run, such as the execution timeout (in minutes). */
	export interface ExecutionConfiguration {
		jobTimeoutMinutes?: number | null;
		accountsCleanup?: boolean | null;
		appPackagesCleanup?: boolean | null;
		videoCapture?: boolean | null;
		skipAppResign?: boolean | null;
	}

	/** Represents configuration information about a test run, such as the execution timeout (in minutes). */
	export interface ExecutionConfigurationFormProperties {
		jobTimeoutMinutes: FormControl<number | null | undefined>,
		accountsCleanup: FormControl<boolean | null | undefined>,
		appPackagesCleanup: FormControl<boolean | null | undefined>,
		videoCapture: FormControl<boolean | null | undefined>,
		skipAppResign: FormControl<boolean | null | undefined>,
	}
	export function CreateExecutionConfigurationFormGroup() {
		return new FormGroup<ExecutionConfigurationFormProperties>({
			jobTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
			accountsCleanup: new FormControl<boolean | null | undefined>(undefined),
			appPackagesCleanup: new FormControl<boolean | null | undefined>(undefined),
			videoCapture: new FormControl<boolean | null | undefined>(undefined),
			skipAppResign: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface IdempotencyException {
	}
	export interface IdempotencyExceptionFormProperties {
	}
	export function CreateIdempotencyExceptionFormGroup() {
		return new FormGroup<IdempotencyExceptionFormProperties>({
		});

	}

	export interface StopJobResult {
		job?: Job;
	}
	export interface StopJobResultFormProperties {
	}
	export function CreateStopJobResultFormGroup() {
		return new FormGroup<StopJobResultFormProperties>({
		});

	}

	export interface StopJobRequest {

		/** Required */
		arn: string;
	}
	export interface StopJobRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateStopJobRequestFormGroup() {
		return new FormGroup<StopJobRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response from the server that describes the remote access session when AWS Device Farm stops the session. */
	export interface StopRemoteAccessSessionResult {
		remoteAccessSession?: RemoteAccessSession;
	}

	/** Represents the response from the server that describes the remote access session when AWS Device Farm stops the session. */
	export interface StopRemoteAccessSessionResultFormProperties {
	}
	export function CreateStopRemoteAccessSessionResultFormGroup() {
		return new FormGroup<StopRemoteAccessSessionResultFormProperties>({
		});

	}


	/** Represents the request to stop the remote access session. */
	export interface StopRemoteAccessSessionRequest {

		/** Required */
		arn: string;
	}

	/** Represents the request to stop the remote access session. */
	export interface StopRemoteAccessSessionRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateStopRemoteAccessSessionRequestFormGroup() {
		return new FormGroup<StopRemoteAccessSessionRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the results of your stop run attempt. */
	export interface StopRunResult {
		run?: Run;
	}

	/** Represents the results of your stop run attempt. */
	export interface StopRunResultFormProperties {
	}
	export function CreateStopRunResultFormGroup() {
		return new FormGroup<StopRunResultFormProperties>({
		});

	}


	/** Represents the request to stop a specific run. */
	export interface StopRunRequest {

		/** Required */
		arn: string;
	}

	/** Represents the request to stop a specific run. */
	export interface StopRunRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateStopRunRequestFormGroup() {
		return new FormGroup<StopRunRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface TagPolicyException {
	}
	export interface TagPolicyExceptionFormProperties {
	}
	export function CreateTagPolicyExceptionFormGroup() {
		return new FormGroup<TagPolicyExceptionFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDeviceInstanceResult {
		deviceInstance?: DeviceInstance;
	}
	export interface UpdateDeviceInstanceResultFormProperties {
	}
	export function CreateUpdateDeviceInstanceResultFormGroup() {
		return new FormGroup<UpdateDeviceInstanceResultFormProperties>({
		});

	}

	export interface UpdateDeviceInstanceRequest {

		/** Required */
		arn: string;
		profileArn?: string;
		labels?: Array<string>;
	}
	export interface UpdateDeviceInstanceRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		profileArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeviceInstanceRequestFormGroup() {
		return new FormGroup<UpdateDeviceInstanceRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			profileArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of an update device pool request. */
	export interface UpdateDevicePoolResult {
		devicePool?: DevicePool;
	}

	/** Represents the result of an update device pool request. */
	export interface UpdateDevicePoolResultFormProperties {
	}
	export function CreateUpdateDevicePoolResultFormGroup() {
		return new FormGroup<UpdateDevicePoolResultFormProperties>({
		});

	}


	/** Represents a request to the update device pool operation. */
	export interface UpdateDevicePoolRequest {

		/** Required */
		arn: string;
		name?: string;
		description?: string;
		rules?: Array<Rule>;
		maxDevices?: number | null;
		clearMaxDevices?: boolean | null;
	}

	/** Represents a request to the update device pool operation. */
	export interface UpdateDevicePoolRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		maxDevices: FormControl<number | null | undefined>,
		clearMaxDevices: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDevicePoolRequestFormGroup() {
		return new FormGroup<UpdateDevicePoolRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			maxDevices: new FormControl<number | null | undefined>(undefined),
			clearMaxDevices: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateInstanceProfileResult {
		instanceProfile?: InstanceProfile;
	}
	export interface UpdateInstanceProfileResultFormProperties {
	}
	export function CreateUpdateInstanceProfileResultFormGroup() {
		return new FormGroup<UpdateInstanceProfileResultFormProperties>({
		});

	}

	export interface UpdateInstanceProfileRequest {

		/** Required */
		arn: string;
		name?: string;
		description?: string;
		packageCleanup?: boolean | null;
		excludeAppPackagesFromCleanup?: Array<string>;
		rebootAfterUse?: boolean | null;
	}
	export interface UpdateInstanceProfileRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		packageCleanup: FormControl<boolean | null | undefined>,
		rebootAfterUse: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateInstanceProfileRequestFormGroup() {
		return new FormGroup<UpdateInstanceProfileRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			packageCleanup: new FormControl<boolean | null | undefined>(undefined),
			rebootAfterUse: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkProfileResult {
		networkProfile?: NetworkProfile;
	}
	export interface UpdateNetworkProfileResultFormProperties {
	}
	export function CreateUpdateNetworkProfileResultFormGroup() {
		return new FormGroup<UpdateNetworkProfileResultFormProperties>({
		});

	}

	export interface UpdateNetworkProfileRequest {

		/** Required */
		arn: string;
		name?: string;
		description?: string;
		type?: DevicePoolType;
		uplinkBandwidthBits?: number | null;
		downlinkBandwidthBits?: number | null;
		uplinkDelayMs?: number | null;
		downlinkDelayMs?: number | null;
		uplinkJitterMs?: number | null;
		downlinkJitterMs?: number | null;
		uplinkLossPercent?: number | null;
		downlinkLossPercent?: number | null;
	}
	export interface UpdateNetworkProfileRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		type: FormControl<DevicePoolType | null | undefined>,
		uplinkBandwidthBits: FormControl<number | null | undefined>,
		downlinkBandwidthBits: FormControl<number | null | undefined>,
		uplinkDelayMs: FormControl<number | null | undefined>,
		downlinkDelayMs: FormControl<number | null | undefined>,
		uplinkJitterMs: FormControl<number | null | undefined>,
		downlinkJitterMs: FormControl<number | null | undefined>,
		uplinkLossPercent: FormControl<number | null | undefined>,
		downlinkLossPercent: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkProfileRequestFormGroup() {
		return new FormGroup<UpdateNetworkProfileRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DevicePoolType | null | undefined>(undefined),
			uplinkBandwidthBits: new FormControl<number | null | undefined>(undefined),
			downlinkBandwidthBits: new FormControl<number | null | undefined>(undefined),
			uplinkDelayMs: new FormControl<number | null | undefined>(undefined),
			downlinkDelayMs: new FormControl<number | null | undefined>(undefined),
			uplinkJitterMs: new FormControl<number | null | undefined>(undefined),
			downlinkJitterMs: new FormControl<number | null | undefined>(undefined),
			uplinkLossPercent: new FormControl<number | null | undefined>(undefined),
			downlinkLossPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the result of an update project request. */
	export interface UpdateProjectResult {
		project?: Project;
	}

	/** Represents the result of an update project request. */
	export interface UpdateProjectResultFormProperties {
	}
	export function CreateUpdateProjectResultFormGroup() {
		return new FormGroup<UpdateProjectResultFormProperties>({
		});

	}


	/** Represents a request to the update project operation. */
	export interface UpdateProjectRequest {

		/** Required */
		arn: string;
		name?: string;
		defaultJobTimeoutMinutes?: number | null;
		vpcConfig?: VpcConfig;
	}

	/** Represents a request to the update project operation. */
	export interface UpdateProjectRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		defaultJobTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateProjectRequestFormGroup() {
		return new FormGroup<UpdateProjectRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			defaultJobTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateTestGridProjectResult {
		testGridProject?: TestGridProject;
	}
	export interface UpdateTestGridProjectResultFormProperties {
	}
	export function CreateUpdateTestGridProjectResultFormGroup() {
		return new FormGroup<UpdateTestGridProjectResultFormProperties>({
		});

	}

	export interface UpdateTestGridProjectRequest {

		/** Required */
		projectArn: string;
		name?: string;
		description?: string;
		vpcConfig?: TestGridVpcConfig;
	}
	export interface UpdateTestGridProjectRequestFormProperties {

		/** Required */
		projectArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTestGridProjectRequestFormGroup() {
		return new FormGroup<UpdateTestGridProjectRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateUploadResult {
		upload?: Upload;
	}
	export interface UpdateUploadResultFormProperties {
	}
	export function CreateUpdateUploadResultFormGroup() {
		return new FormGroup<UpdateUploadResultFormProperties>({
		});

	}

	export interface UpdateUploadRequest {

		/** Required */
		arn: string;
		name?: string;
		contentType?: string;
		editContent?: boolean | null;
	}
	export interface UpdateUploadRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		contentType: FormControl<string | null | undefined>,
		editContent: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateUploadRequestFormGroup() {
		return new FormGroup<UpdateUploadRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			editContent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateVPCEConfigurationResult {
		vpceConfiguration?: VPCEConfiguration;
	}
	export interface UpdateVPCEConfigurationResultFormProperties {
	}
	export function CreateUpdateVPCEConfigurationResultFormGroup() {
		return new FormGroup<UpdateVPCEConfigurationResultFormProperties>({
		});

	}

	export interface UpdateVPCEConfigurationRequest {

		/** Required */
		arn: string;
		vpceConfigurationName?: string;
		vpceServiceName?: string;
		serviceDnsName?: string;
		vpceConfigurationDescription?: string;
	}
	export interface UpdateVPCEConfigurationRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		vpceConfigurationName: FormControl<string | null | undefined>,
		vpceServiceName: FormControl<string | null | undefined>,
		serviceDnsName: FormControl<string | null | undefined>,
		vpceConfigurationDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVPCEConfigurationRequestFormGroup() {
		return new FormGroup<UpdateVPCEConfigurationRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vpceConfigurationName: new FormControl<string | null | undefined>(undefined),
			vpceServiceName: new FormControl<string | null | undefined>(undefined),
			serviceDnsName: new FormControl<string | null | undefined>(undefined),
			vpceConfigurationDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetworkProfileType { CURATED = 'CURATED', PRIVATE = 'PRIVATE' }


	/** Information about a problem detail. */
	export interface ProblemDetail {
		arn?: string;
		name?: string;
	}

	/** Information about a problem detail. */
	export interface ProblemDetailFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateProblemDetailFormGroup() {
		return new FormGroup<ProblemDetailFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a specific warning or failure. */
	export interface Problem {
		run?: ProblemDetail;
		job?: ProblemDetail;
		suite?: ProblemDetail;
		test?: ProblemDetail;
		device?: Device;
		result?: ExecutionResult;
		message?: string;
	}

	/** Represents a specific warning or failure. */
	export interface ProblemFormProperties {
		result: FormControl<ExecutionResult | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateProblemFormGroup() {
		return new FormGroup<ProblemFormProperties>({
			result: new FormControl<ExecutionResult | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of one or more problems, grouped by their result. */
	export interface UniqueProblem {
		message?: string;
		problems?: Array<Problem>;
	}

	/** A collection of one or more problems, grouped by their result. */
	export interface UniqueProblemFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateUniqueProblemFormGroup() {
		return new FormGroup<UniqueProblemFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UploadCategory { CURATED = 'CURATED', PRIVATE = 'PRIVATE' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a device pool.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateDevicePool
		 * @return {CreateDevicePoolResult} Success
		 */
		CreateDevicePool(requestBody: CreateDevicePoolRequest): Observable<CreateDevicePoolResult> {
			return this.http.post<CreateDevicePoolResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a profile that can be applied to one or more private fleet device instances.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile
		 * @return {CreateInstanceProfileResult} Success
		 */
		CreateInstanceProfile(requestBody: CreateInstanceProfileRequest): Observable<CreateInstanceProfileResult> {
			return this.http.post<CreateInstanceProfileResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a network profile.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile
		 * @return {CreateNetworkProfileResult} Success
		 */
		CreateNetworkProfile(requestBody: CreateNetworkProfileRequest): Observable<CreateNetworkProfileResult> {
			return this.http.post<CreateNetworkProfileResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a project.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateProject
		 * @return {CreateProjectResult} Success
		 */
		CreateProject(requestBody: CreateProjectRequest): Observable<CreateProjectResult> {
			return this.http.post<CreateProjectResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Specifies and starts a remote access session.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession
		 * @return {CreateRemoteAccessSessionResult} Success
		 */
		CreateRemoteAccessSession(requestBody: CreateRemoteAccessSessionRequest): Observable<CreateRemoteAccessSessionResult> {
			return this.http.post<CreateRemoteAccessSessionResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a> instances.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject
		 * @return {CreateTestGridProjectResult} Success
		 */
		CreateTestGridProject(requestBody: CreateTestGridProjectRequest): Observable<CreateTestGridProjectResult> {
			return this.http.post<CreateTestGridProjectResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code> constructor.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl
		 * @return {CreateTestGridUrlResult} Success
		 */
		CreateTestGridUrl(requestBody: CreateTestGridUrlRequest): Observable<CreateTestGridUrlResult> {
			return this.http.post<CreateTestGridUrlResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Uploads an app or test scripts.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateUpload
		 * @return {CreateUploadResult} Success
		 */
		CreateUpload(requestBody: CreateUploadRequest): Observable<CreateUploadResult> {
			return this.http.post<CreateUploadResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.
		 * Post #X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration
		 * @return {CreateVPCEConfigurationResult} Success
		 */
		CreateVPCEConfiguration(requestBody: CreateVPCEConfigurationRequest): Observable<CreateVPCEConfigurationResult> {
			return this.http.post<CreateVPCEConfigurationResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool
		 * @return {DeleteDevicePoolResult} Success
		 */
		DeleteDevicePool(requestBody: DeleteDevicePoolRequest): Observable<DeleteDevicePoolResult> {
			return this.http.post<DeleteDevicePoolResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a profile that can be applied to one or more private device instances.
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile
		 * @return {DeleteInstanceProfileResult} Success
		 */
		DeleteInstanceProfile(requestBody: DeleteInstanceProfileRequest): Observable<DeleteInstanceProfileResult> {
			return this.http.post<DeleteInstanceProfileResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a network profile.
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile
		 * @return {DeleteNetworkProfileResult} Success
		 */
		DeleteNetworkProfile(requestBody: DeleteNetworkProfileRequest): Observable<DeleteNetworkProfileResult> {
			return this.http.post<DeleteNetworkProfileResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteProject
		 * @return {DeleteProjectResult} Success
		 */
		DeleteProject(requestBody: DeleteProjectRequest): Observable<DeleteProjectResult> {
			return this.http.post<DeleteProjectResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a completed remote access session and its results.
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession
		 * @return {DeleteRemoteAccessSessionResult} Success
		 */
		DeleteRemoteAccessSession(requestBody: DeleteRemoteAccessSessionRequest): Observable<DeleteRemoteAccessSessionResult> {
			return this.http.post<DeleteRemoteAccessSessionResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the run, given the run ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteRun
		 * @return {DeleteRunResult} Success
		 */
		DeleteRun(requestBody: DeleteRunRequest): Observable<DeleteRunResult> {
			return this.http.post<DeleteRunResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Deletes a Selenium testing project and all content generated under it. </p> <important> <p>You cannot undo this operation.</p> </important> <note> <p>You cannot delete a project if it has active sessions.</p> </note>
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject
		 * @return {DeleteTestGridProjectResult} Success
		 */
		DeleteTestGridProject(requestBody: DeleteTestGridProjectRequest): Observable<DeleteTestGridProjectResult> {
			return this.http.post<DeleteTestGridProjectResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an upload given the upload ARN.
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteUpload
		 * @return {DeleteUploadResult} Success
		 */
		DeleteUpload(requestBody: DeleteUploadRequest): Observable<DeleteUploadResult> {
			return this.http.post<DeleteUploadResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.
		 * Post #X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration
		 * @return {DeleteVPCEConfigurationResult} Success
		 */
		DeleteVPCEConfiguration(requestBody: DeleteVPCEConfigurationRequest): Observable<DeleteVPCEConfigurationResult> {
			return this.http.post<DeleteVPCEConfigurationResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetAccountSettings
		 * @return {GetAccountSettingsResult} Success
		 */
		GetAccountSettings(requestBody: GetAccountSettingsRequest): Observable<GetAccountSettingsResult> {
			return this.http.post<GetAccountSettingsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a unique device type.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetDevice
		 * @return {GetDeviceResult} Success
		 */
		GetDevice(requestBody: GetDeviceRequest): Observable<GetDeviceResult> {
			return this.http.post<GetDeviceResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a device instance that belongs to a private device fleet.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance
		 * @return {GetDeviceInstanceResult} Success
		 */
		GetDeviceInstance(requestBody: GetDeviceInstanceRequest): Observable<GetDeviceInstanceResult> {
			return this.http.post<GetDeviceInstanceResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a device pool.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetDevicePool
		 * @return {GetDevicePoolResult} Success
		 */
		GetDevicePool(requestBody: GetDevicePoolRequest): Observable<GetDevicePoolResult> {
			return this.http.post<GetDevicePoolResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetDevicePool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about compatibility with a device pool.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility
		 * @return {GetDevicePoolCompatibilityResult} Success
		 */
		GetDevicePoolCompatibility(requestBody: GetDevicePoolCompatibilityRequest): Observable<GetDevicePoolCompatibilityResult> {
			return this.http.post<GetDevicePoolCompatibilityResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the specified instance profile.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile
		 * @return {GetInstanceProfileResult} Success
		 */
		GetInstanceProfile(requestBody: GetInstanceProfileRequest): Observable<GetInstanceProfileResult> {
			return this.http.post<GetInstanceProfileResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a job.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetJob
		 * @return {GetJobResult} Success
		 */
		GetJob(requestBody: GetJobRequest): Observable<GetJobResult> {
			return this.http.post<GetJobResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a network profile.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile
		 * @return {GetNetworkProfileResult} Success
		 */
		GetNetworkProfile(requestBody: GetNetworkProfileRequest): Observable<GetNetworkProfileResult> {
			return this.http.post<GetNetworkProfileResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus
		 * @param {string} nextToken Pagination token
		 * @return {GetOfferingStatusResult} Success
		 */
		GetOfferingStatus(nextToken: string | null | undefined, requestBody: GetOfferingStatusRequest): Observable<GetOfferingStatusResult> {
			return this.http.post<GetOfferingStatusResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a project.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetProject
		 * @return {GetProjectResult} Success
		 */
		GetProject(requestBody: GetProjectRequest): Observable<GetProjectResult> {
			return this.http.post<GetProjectResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a link to a currently running remote access session.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession
		 * @return {GetRemoteAccessSessionResult} Success
		 */
		GetRemoteAccessSession(requestBody: GetRemoteAccessSessionRequest): Observable<GetRemoteAccessSessionResult> {
			return this.http.post<GetRemoteAccessSessionResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a run.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetRun
		 * @return {GetRunResult} Success
		 */
		GetRun(requestBody: GetRunRequest): Observable<GetRunResult> {
			return this.http.post<GetRunResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a suite.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetSuite
		 * @return {GetSuiteResult} Success
		 */
		GetSuite(requestBody: GetSuiteRequest): Observable<GetSuiteResult> {
			return this.http.post<GetSuiteResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetSuite', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a test.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetTest
		 * @return {GetTestResult} Success
		 */
		GetTest(requestBody: GetTestRequest): Observable<GetTestResult> {
			return this.http.post<GetTestResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetTest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a Selenium testing project.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetTestGridProject
		 * @return {GetTestGridProjectResult} Success
		 */
		GetTestGridProject(requestBody: GetTestGridProjectRequest): Observable<GetTestGridProjectResult> {
			return this.http.post<GetTestGridProjectResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p> <ul> <li> <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p> </li> <li> <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p> </li> </ul> <p/>
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetTestGridSession
		 * @return {GetTestGridSessionResult} Success
		 */
		GetTestGridSession(requestBody: GetTestGridSessionRequest): Observable<GetTestGridSessionResult> {
			return this.http.post<GetTestGridSessionResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about an upload.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetUpload
		 * @return {GetUploadResult} Success
		 */
		GetUpload(requestBody: GetUploadRequest): Observable<GetUploadResult> {
			return this.http.post<GetUploadResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.
		 * Post #X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration
		 * @return {GetVPCEConfigurationResult} Success
		 */
		GetVPCEConfiguration(requestBody: GetVPCEConfigurationRequest): Observable<GetVPCEConfigurationResult> {
			return this.http.post<GetVPCEConfigurationResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.
		 * Post #X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession
		 * @return {InstallToRemoteAccessSessionResult} Success
		 */
		InstallToRemoteAccessSession(requestBody: InstallToRemoteAccessSessionRequest): Observable<InstallToRemoteAccessSessionResult> {
			return this.http.post<InstallToRemoteAccessSessionResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about artifacts.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListArtifacts
		 * @param {string} nextToken Pagination token
		 * @return {ListArtifactsResult} Success
		 */
		ListArtifacts(nextToken: string | null | undefined, requestBody: ListArtifactsRequest): Observable<ListArtifactsResult> {
			return this.http.post<ListArtifactsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListArtifacts?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the private device instances associated with one or more AWS accounts.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances
		 * @return {ListDeviceInstancesResult} Success
		 */
		ListDeviceInstances(requestBody: ListDeviceInstancesRequest): Observable<ListDeviceInstancesResult> {
			return this.http.post<ListDeviceInstancesResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about device pools.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListDevicePools
		 * @param {string} nextToken Pagination token
		 * @return {ListDevicePoolsResult} Success
		 */
		ListDevicePools(nextToken: string | null | undefined, requestBody: ListDevicePoolsRequest): Observable<ListDevicePoolsResult> {
			return this.http.post<ListDevicePoolsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListDevicePools?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about unique device types.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListDevices
		 * @param {string} nextToken Pagination token
		 * @return {ListDevicesResult} Success
		 */
		ListDevices(nextToken: string | null | undefined, requestBody: ListDevicesRequest): Observable<ListDevicesResult> {
			return this.http.post<ListDevicesResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListDevices?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all the instance profiles in an AWS account.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles
		 * @return {ListInstanceProfilesResult} Success
		 */
		ListInstanceProfiles(requestBody: ListInstanceProfilesRequest): Observable<ListInstanceProfilesResult> {
			return this.http.post<ListInstanceProfilesResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about jobs for a given test run.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListJobs
		 * @param {string} nextToken Pagination token
		 * @return {ListJobsResult} Success
		 */
		ListJobs(nextToken: string | null | undefined, requestBody: ListJobsRequest): Observable<ListJobsResult> {
			return this.http.post<ListJobsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListJobs?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of available network profiles.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles
		 * @return {ListNetworkProfilesResult} Success
		 */
		ListNetworkProfiles(requestBody: ListNetworkProfilesRequest): Observable<ListNetworkProfilesResult> {
			return this.http.post<ListNetworkProfilesResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions
		 * @return {ListOfferingPromotionsResult} Success
		 */
		ListOfferingPromotions(requestBody: ListOfferingPromotionsRequest): Observable<ListOfferingPromotionsResult> {
			return this.http.post<ListOfferingPromotionsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions
		 * @param {string} nextToken Pagination token
		 * @return {ListOfferingTransactionsResult} Success
		 */
		ListOfferingTransactions(nextToken: string | null | undefined, requestBody: ListOfferingTransactionsRequest): Observable<ListOfferingTransactionsResult> {
			return this.http.post<ListOfferingTransactionsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListOfferings
		 * @param {string} nextToken Pagination token
		 * @return {ListOfferingsResult} Success
		 */
		ListOfferings(nextToken: string | null | undefined, requestBody: ListOfferingsRequest): Observable<ListOfferingsResult> {
			return this.http.post<ListOfferingsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListOfferings?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about projects.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListProjects
		 * @param {string} nextToken Pagination token
		 * @return {ListProjectsResult} Success
		 */
		ListProjects(nextToken: string | null | undefined, requestBody: ListProjectsRequest): Observable<ListProjectsResult> {
			return this.http.post<ListProjectsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListProjects?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all currently running remote access sessions.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions
		 * @return {ListRemoteAccessSessionsResult} Success
		 */
		ListRemoteAccessSessions(requestBody: ListRemoteAccessSessionsRequest): Observable<ListRemoteAccessSessionsResult> {
			return this.http.post<ListRemoteAccessSessionsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about runs, given an AWS Device Farm project ARN.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListRuns
		 * @param {string} nextToken Pagination token
		 * @return {ListRunsResult} Success
		 */
		ListRuns(nextToken: string | null | undefined, requestBody: ListRunsRequest): Observable<ListRunsResult> {
			return this.http.post<ListRunsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListRuns?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about samples, given an AWS Device Farm job ARN.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListSamples
		 * @param {string} nextToken Pagination token
		 * @return {ListSamplesResult} Success
		 */
		ListSamples(nextToken: string | null | undefined, requestBody: ListSamplesRequest): Observable<ListSamplesResult> {
			return this.http.post<ListSamplesResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListSamples?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about test suites for a given job.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListSuites
		 * @param {string} nextToken Pagination token
		 * @return {ListSuitesResult} Success
		 */
		ListSuites(nextToken: string | null | undefined, requestBody: ListSuitesRequest): Observable<ListSuitesResult> {
			return this.http.post<ListSuitesResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListSuites?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the tags for an AWS Device Farm resource.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of all Selenium testing projects in your account.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects
		 * @param {string} maxResult Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTestGridProjectsResult} Success
		 */
		ListTestGridProjects(maxResult: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTestGridProjectsRequest): Observable<ListTestGridProjectsResult> {
			return this.http.post<ListTestGridProjectsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects?maxResult=' + (maxResult == null ? '' : encodeURIComponent(maxResult)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the actions taken in a <a>TestGridSession</a>.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions
		 * @param {string} maxResult Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTestGridSessionActionsResult} Success
		 */
		ListTestGridSessionActions(maxResult: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTestGridSessionActionsRequest): Observable<ListTestGridSessionActionsResult> {
			return this.http.post<ListTestGridSessionActionsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions?maxResult=' + (maxResult == null ? '' : encodeURIComponent(maxResult)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of artifacts created during the session.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts
		 * @param {string} maxResult Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTestGridSessionArtifactsResult} Success
		 */
		ListTestGridSessionArtifacts(maxResult: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTestGridSessionArtifactsRequest): Observable<ListTestGridSessionArtifactsResult> {
			return this.http.post<ListTestGridSessionArtifactsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts?maxResult=' + (maxResult == null ? '' : encodeURIComponent(maxResult)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of sessions for a <a>TestGridProject</a>.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions
		 * @param {string} maxResult Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTestGridSessionsResult} Success
		 */
		ListTestGridSessions(maxResult: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTestGridSessionsRequest): Observable<ListTestGridSessionsResult> {
			return this.http.post<ListTestGridSessionsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions?maxResult=' + (maxResult == null ? '' : encodeURIComponent(maxResult)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about tests in a given test suite.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListTests
		 * @param {string} nextToken Pagination token
		 * @return {ListTestsResult} Success
		 */
		ListTests(nextToken: string | null | undefined, requestBody: ListTestsRequest): Observable<ListTestsResult> {
			return this.http.post<ListTestsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListTests?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about unique problems, such as exceptions or crashes.</p> <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (<code>OutOfBoundsException in MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many individual entries for that exception.</p>
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems
		 * @param {string} nextToken Pagination token
		 * @return {ListUniqueProblemsResult} Success
		 */
		ListUniqueProblems(nextToken: string | null | undefined, requestBody: ListUniqueProblemsRequest): Observable<ListUniqueProblemsResult> {
			return this.http.post<ListUniqueProblemsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about uploads, given an AWS Device Farm project ARN.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListUploads
		 * @param {string} nextToken Pagination token
		 * @return {ListUploadsResult} Success
		 */
		ListUploads(nextToken: string | null | undefined, requestBody: ListUploadsRequest): Observable<ListUploadsResult> {
			return this.http.post<ListUploadsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListUploads?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations
		 * @return {ListVPCEConfigurationsResult} Success
		 */
		ListVPCEConfigurations(requestBody: ListVPCEConfigurationsRequest): Observable<ListVPCEConfigurationsResult> {
			return this.http.post<ListVPCEConfigurationsResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
		 * Post #X-Amz-Target=DeviceFarm_20150623.PurchaseOffering
		 * @return {PurchaseOfferingResult} Success
		 */
		PurchaseOffering(requestBody: PurchaseOfferingRequest): Observable<PurchaseOfferingResult> {
			return this.http.post<PurchaseOfferingResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
		 * Post #X-Amz-Target=DeviceFarm_20150623.RenewOffering
		 * @return {RenewOfferingResult} Success
		 */
		RenewOffering(requestBody: RenewOfferingRequest): Observable<RenewOfferingResult> {
			return this.http.post<RenewOfferingResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.RenewOffering', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Schedules a run.
		 * Post #X-Amz-Target=DeviceFarm_20150623.ScheduleRun
		 * @return {ScheduleRunResult} Success
		 */
		ScheduleRun(requestBody: ScheduleRunRequest): Observable<ScheduleRunResult> {
			return this.http.post<ScheduleRunResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.ScheduleRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device where tests have not started. You are not billed for this device. On the device where tests have started, setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown, and any tests that were in progress or already completed.
		 * Post #X-Amz-Target=DeviceFarm_20150623.StopJob
		 * @return {StopJobResult} Success
		 */
		StopJob(requestBody: StopJobRequest): Observable<StopJobResult> {
			return this.http.post<StopJobResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.StopJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Ends a specified remote access session.
		 * Post #X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession
		 * @return {StopRemoteAccessSessionResult} Success
		 */
		StopRemoteAccessSession(requestBody: StopRemoteAccessSessionRequest): Observable<StopRemoteAccessSessionResult> {
			return this.http.post<StopRemoteAccessSessionResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices where tests have not started. You are not billed for these devices. On devices where tests have started executing, setup suite and teardown suite tests run to completion on those devices. You are billed for setup, teardown, and any tests that were in progress or already completed.
		 * Post #X-Amz-Target=DeviceFarm_20150623.StopRun
		 * @return {StopRunResult} Success
		 */
		StopRun(requestBody: StopRunRequest): Observable<StopRunResult> {
			return this.http.post<StopRunResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.StopRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
		 * Post #X-Amz-Target=DeviceFarm_20150623.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified tags from a resource.
		 * Post #X-Amz-Target=DeviceFarm_20150623.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates information about a private device instance.
		 * Post #X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance
		 * @return {UpdateDeviceInstanceResult} Success
		 */
		UpdateDeviceInstance(requestBody: UpdateDeviceInstanceRequest): Observable<UpdateDeviceInstanceResult> {
			return this.http.post<UpdateDeviceInstanceResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).
		 * Post #X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool
		 * @return {UpdateDevicePoolResult} Success
		 */
		UpdateDevicePool(requestBody: UpdateDevicePoolRequest): Observable<UpdateDevicePoolResult> {
			return this.http.post<UpdateDevicePoolResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates information about an existing private device instance profile.
		 * Post #X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile
		 * @return {UpdateInstanceProfileResult} Success
		 */
		UpdateInstanceProfile(requestBody: UpdateInstanceProfileRequest): Observable<UpdateInstanceProfileResult> {
			return this.http.post<UpdateInstanceProfileResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the network profile.
		 * Post #X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile
		 * @return {UpdateNetworkProfileResult} Success
		 */
		UpdateNetworkProfile(requestBody: UpdateNetworkProfileRequest): Observable<UpdateNetworkProfileResult> {
			return this.http.post<UpdateNetworkProfileResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the specified project name, given the project ARN and a new name.
		 * Post #X-Amz-Target=DeviceFarm_20150623.UpdateProject
		 * @return {UpdateProjectResult} Success
		 */
		UpdateProject(requestBody: UpdateProjectRequest): Observable<UpdateProjectResult> {
			return this.http.post<UpdateProjectResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UpdateProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Change details of a project.
		 * Post #X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject
		 * @return {UpdateTestGridProjectResult} Success
		 */
		UpdateTestGridProject(requestBody: UpdateTestGridProjectRequest): Observable<UpdateTestGridProjectResult> {
			return this.http.post<UpdateTestGridProjectResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an uploaded test spec.
		 * Post #X-Amz-Target=DeviceFarm_20150623.UpdateUpload
		 * @return {UpdateUploadResult} Success
		 */
		UpdateUpload(requestBody: UpdateUploadRequest): Observable<UpdateUploadResult> {
			return this.http.post<UpdateUploadResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UpdateUpload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.
		 * Post #X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration
		 * @return {UpdateVPCEConfigurationResult} Success
		 */
		UpdateVPCEConfiguration(requestBody: UpdateVPCEConfigurationRequest): Observable<UpdateVPCEConfigurationResult> {
			return this.http.post<UpdateVPCEConfigurationResult>(this.baseUri + '#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateDevicePoolX_Amz_Target { 'DeviceFarm_20150623.CreateDevicePool' = 'DeviceFarm_20150623.CreateDevicePool' }

	export enum CreateInstanceProfileX_Amz_Target { 'DeviceFarm_20150623.CreateInstanceProfile' = 'DeviceFarm_20150623.CreateInstanceProfile' }

	export enum CreateNetworkProfileX_Amz_Target { 'DeviceFarm_20150623.CreateNetworkProfile' = 'DeviceFarm_20150623.CreateNetworkProfile' }

	export enum CreateProjectX_Amz_Target { 'DeviceFarm_20150623.CreateProject' = 'DeviceFarm_20150623.CreateProject' }

	export enum CreateRemoteAccessSessionX_Amz_Target { 'DeviceFarm_20150623.CreateRemoteAccessSession' = 'DeviceFarm_20150623.CreateRemoteAccessSession' }

	export enum CreateTestGridProjectX_Amz_Target { 'DeviceFarm_20150623.CreateTestGridProject' = 'DeviceFarm_20150623.CreateTestGridProject' }

	export enum CreateTestGridUrlX_Amz_Target { 'DeviceFarm_20150623.CreateTestGridUrl' = 'DeviceFarm_20150623.CreateTestGridUrl' }

	export enum CreateUploadX_Amz_Target { 'DeviceFarm_20150623.CreateUpload' = 'DeviceFarm_20150623.CreateUpload' }

	export enum CreateVPCEConfigurationX_Amz_Target { 'DeviceFarm_20150623.CreateVPCEConfiguration' = 'DeviceFarm_20150623.CreateVPCEConfiguration' }

	export enum DeleteDevicePoolX_Amz_Target { 'DeviceFarm_20150623.DeleteDevicePool' = 'DeviceFarm_20150623.DeleteDevicePool' }

	export enum DeleteInstanceProfileX_Amz_Target { 'DeviceFarm_20150623.DeleteInstanceProfile' = 'DeviceFarm_20150623.DeleteInstanceProfile' }

	export enum DeleteNetworkProfileX_Amz_Target { 'DeviceFarm_20150623.DeleteNetworkProfile' = 'DeviceFarm_20150623.DeleteNetworkProfile' }

	export enum DeleteProjectX_Amz_Target { 'DeviceFarm_20150623.DeleteProject' = 'DeviceFarm_20150623.DeleteProject' }

	export enum DeleteRemoteAccessSessionX_Amz_Target { 'DeviceFarm_20150623.DeleteRemoteAccessSession' = 'DeviceFarm_20150623.DeleteRemoteAccessSession' }

	export enum DeleteRunX_Amz_Target { 'DeviceFarm_20150623.DeleteRun' = 'DeviceFarm_20150623.DeleteRun' }

	export enum DeleteTestGridProjectX_Amz_Target { 'DeviceFarm_20150623.DeleteTestGridProject' = 'DeviceFarm_20150623.DeleteTestGridProject' }

	export enum DeleteUploadX_Amz_Target { 'DeviceFarm_20150623.DeleteUpload' = 'DeviceFarm_20150623.DeleteUpload' }

	export enum DeleteVPCEConfigurationX_Amz_Target { 'DeviceFarm_20150623.DeleteVPCEConfiguration' = 'DeviceFarm_20150623.DeleteVPCEConfiguration' }

	export enum GetAccountSettingsX_Amz_Target { 'DeviceFarm_20150623.GetAccountSettings' = 'DeviceFarm_20150623.GetAccountSettings' }

	export enum GetDeviceX_Amz_Target { 'DeviceFarm_20150623.GetDevice' = 'DeviceFarm_20150623.GetDevice' }

	export enum GetDeviceInstanceX_Amz_Target { 'DeviceFarm_20150623.GetDeviceInstance' = 'DeviceFarm_20150623.GetDeviceInstance' }

	export enum GetDevicePoolX_Amz_Target { 'DeviceFarm_20150623.GetDevicePool' = 'DeviceFarm_20150623.GetDevicePool' }

	export enum GetDevicePoolCompatibilityX_Amz_Target { 'DeviceFarm_20150623.GetDevicePoolCompatibility' = 'DeviceFarm_20150623.GetDevicePoolCompatibility' }

	export enum GetInstanceProfileX_Amz_Target { 'DeviceFarm_20150623.GetInstanceProfile' = 'DeviceFarm_20150623.GetInstanceProfile' }

	export enum GetJobX_Amz_Target { 'DeviceFarm_20150623.GetJob' = 'DeviceFarm_20150623.GetJob' }

	export enum GetNetworkProfileX_Amz_Target { 'DeviceFarm_20150623.GetNetworkProfile' = 'DeviceFarm_20150623.GetNetworkProfile' }

	export enum GetOfferingStatusX_Amz_Target { 'DeviceFarm_20150623.GetOfferingStatus' = 'DeviceFarm_20150623.GetOfferingStatus' }

	export enum GetProjectX_Amz_Target { 'DeviceFarm_20150623.GetProject' = 'DeviceFarm_20150623.GetProject' }

	export enum GetRemoteAccessSessionX_Amz_Target { 'DeviceFarm_20150623.GetRemoteAccessSession' = 'DeviceFarm_20150623.GetRemoteAccessSession' }

	export enum GetRunX_Amz_Target { 'DeviceFarm_20150623.GetRun' = 'DeviceFarm_20150623.GetRun' }

	export enum GetSuiteX_Amz_Target { 'DeviceFarm_20150623.GetSuite' = 'DeviceFarm_20150623.GetSuite' }

	export enum GetTestX_Amz_Target { 'DeviceFarm_20150623.GetTest' = 'DeviceFarm_20150623.GetTest' }

	export enum GetTestGridProjectX_Amz_Target { 'DeviceFarm_20150623.GetTestGridProject' = 'DeviceFarm_20150623.GetTestGridProject' }

	export enum GetTestGridSessionX_Amz_Target { 'DeviceFarm_20150623.GetTestGridSession' = 'DeviceFarm_20150623.GetTestGridSession' }

	export enum GetUploadX_Amz_Target { 'DeviceFarm_20150623.GetUpload' = 'DeviceFarm_20150623.GetUpload' }

	export enum GetVPCEConfigurationX_Amz_Target { 'DeviceFarm_20150623.GetVPCEConfiguration' = 'DeviceFarm_20150623.GetVPCEConfiguration' }

	export enum InstallToRemoteAccessSessionX_Amz_Target { 'DeviceFarm_20150623.InstallToRemoteAccessSession' = 'DeviceFarm_20150623.InstallToRemoteAccessSession' }

	export enum ListArtifactsX_Amz_Target { 'DeviceFarm_20150623.ListArtifacts' = 'DeviceFarm_20150623.ListArtifacts' }

	export enum ListDeviceInstancesX_Amz_Target { 'DeviceFarm_20150623.ListDeviceInstances' = 'DeviceFarm_20150623.ListDeviceInstances' }

	export enum ListDevicePoolsX_Amz_Target { 'DeviceFarm_20150623.ListDevicePools' = 'DeviceFarm_20150623.ListDevicePools' }

	export enum ListDevicesX_Amz_Target { 'DeviceFarm_20150623.ListDevices' = 'DeviceFarm_20150623.ListDevices' }

	export enum ListInstanceProfilesX_Amz_Target { 'DeviceFarm_20150623.ListInstanceProfiles' = 'DeviceFarm_20150623.ListInstanceProfiles' }

	export enum ListJobsX_Amz_Target { 'DeviceFarm_20150623.ListJobs' = 'DeviceFarm_20150623.ListJobs' }

	export enum ListNetworkProfilesX_Amz_Target { 'DeviceFarm_20150623.ListNetworkProfiles' = 'DeviceFarm_20150623.ListNetworkProfiles' }

	export enum ListOfferingPromotionsX_Amz_Target { 'DeviceFarm_20150623.ListOfferingPromotions' = 'DeviceFarm_20150623.ListOfferingPromotions' }

	export enum ListOfferingTransactionsX_Amz_Target { 'DeviceFarm_20150623.ListOfferingTransactions' = 'DeviceFarm_20150623.ListOfferingTransactions' }

	export enum ListOfferingsX_Amz_Target { 'DeviceFarm_20150623.ListOfferings' = 'DeviceFarm_20150623.ListOfferings' }

	export enum ListProjectsX_Amz_Target { 'DeviceFarm_20150623.ListProjects' = 'DeviceFarm_20150623.ListProjects' }

	export enum ListRemoteAccessSessionsX_Amz_Target { 'DeviceFarm_20150623.ListRemoteAccessSessions' = 'DeviceFarm_20150623.ListRemoteAccessSessions' }

	export enum ListRunsX_Amz_Target { 'DeviceFarm_20150623.ListRuns' = 'DeviceFarm_20150623.ListRuns' }

	export enum ListSamplesX_Amz_Target { 'DeviceFarm_20150623.ListSamples' = 'DeviceFarm_20150623.ListSamples' }

	export enum ListSuitesX_Amz_Target { 'DeviceFarm_20150623.ListSuites' = 'DeviceFarm_20150623.ListSuites' }

	export enum ListTagsForResourceX_Amz_Target { 'DeviceFarm_20150623.ListTagsForResource' = 'DeviceFarm_20150623.ListTagsForResource' }

	export enum ListTestGridProjectsX_Amz_Target { 'DeviceFarm_20150623.ListTestGridProjects' = 'DeviceFarm_20150623.ListTestGridProjects' }

	export enum ListTestGridSessionActionsX_Amz_Target { 'DeviceFarm_20150623.ListTestGridSessionActions' = 'DeviceFarm_20150623.ListTestGridSessionActions' }

	export enum ListTestGridSessionArtifactsX_Amz_Target { 'DeviceFarm_20150623.ListTestGridSessionArtifacts' = 'DeviceFarm_20150623.ListTestGridSessionArtifacts' }

	export enum ListTestGridSessionsX_Amz_Target { 'DeviceFarm_20150623.ListTestGridSessions' = 'DeviceFarm_20150623.ListTestGridSessions' }

	export enum ListTestsX_Amz_Target { 'DeviceFarm_20150623.ListTests' = 'DeviceFarm_20150623.ListTests' }

	export enum ListUniqueProblemsX_Amz_Target { 'DeviceFarm_20150623.ListUniqueProblems' = 'DeviceFarm_20150623.ListUniqueProblems' }

	export enum ListUploadsX_Amz_Target { 'DeviceFarm_20150623.ListUploads' = 'DeviceFarm_20150623.ListUploads' }

	export enum ListVPCEConfigurationsX_Amz_Target { 'DeviceFarm_20150623.ListVPCEConfigurations' = 'DeviceFarm_20150623.ListVPCEConfigurations' }

	export enum PurchaseOfferingX_Amz_Target { 'DeviceFarm_20150623.PurchaseOffering' = 'DeviceFarm_20150623.PurchaseOffering' }

	export enum RenewOfferingX_Amz_Target { 'DeviceFarm_20150623.RenewOffering' = 'DeviceFarm_20150623.RenewOffering' }

	export enum ScheduleRunX_Amz_Target { 'DeviceFarm_20150623.ScheduleRun' = 'DeviceFarm_20150623.ScheduleRun' }

	export enum StopJobX_Amz_Target { 'DeviceFarm_20150623.StopJob' = 'DeviceFarm_20150623.StopJob' }

	export enum StopRemoteAccessSessionX_Amz_Target { 'DeviceFarm_20150623.StopRemoteAccessSession' = 'DeviceFarm_20150623.StopRemoteAccessSession' }

	export enum StopRunX_Amz_Target { 'DeviceFarm_20150623.StopRun' = 'DeviceFarm_20150623.StopRun' }

	export enum TagResourceX_Amz_Target { 'DeviceFarm_20150623.TagResource' = 'DeviceFarm_20150623.TagResource' }

	export enum UntagResourceX_Amz_Target { 'DeviceFarm_20150623.UntagResource' = 'DeviceFarm_20150623.UntagResource' }

	export enum UpdateDeviceInstanceX_Amz_Target { 'DeviceFarm_20150623.UpdateDeviceInstance' = 'DeviceFarm_20150623.UpdateDeviceInstance' }

	export enum UpdateDevicePoolX_Amz_Target { 'DeviceFarm_20150623.UpdateDevicePool' = 'DeviceFarm_20150623.UpdateDevicePool' }

	export enum UpdateInstanceProfileX_Amz_Target { 'DeviceFarm_20150623.UpdateInstanceProfile' = 'DeviceFarm_20150623.UpdateInstanceProfile' }

	export enum UpdateNetworkProfileX_Amz_Target { 'DeviceFarm_20150623.UpdateNetworkProfile' = 'DeviceFarm_20150623.UpdateNetworkProfile' }

	export enum UpdateProjectX_Amz_Target { 'DeviceFarm_20150623.UpdateProject' = 'DeviceFarm_20150623.UpdateProject' }

	export enum UpdateTestGridProjectX_Amz_Target { 'DeviceFarm_20150623.UpdateTestGridProject' = 'DeviceFarm_20150623.UpdateTestGridProject' }

	export enum UpdateUploadX_Amz_Target { 'DeviceFarm_20150623.UpdateUpload' = 'DeviceFarm_20150623.UpdateUpload' }

	export enum UpdateVPCEConfigurationX_Amz_Target { 'DeviceFarm_20150623.UpdateVPCEConfiguration' = 'DeviceFarm_20150623.UpdateVPCEConfiguration' }

}

