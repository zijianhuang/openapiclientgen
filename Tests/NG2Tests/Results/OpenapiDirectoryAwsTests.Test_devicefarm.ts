import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the result of a create device pool request. */
	export interface CreateDevicePoolResult {

		/** Represents a collection of device types. */
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
		arn?: string | null;
		name?: string | null;
		description?: string | null;
		type?: DevicePoolType | null;
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

	export enum DevicePoolType { CURATED = 0, PRIVATE = 1 }


	/** Represents a condition for a device pool. */
	export interface Rule {
		attribute?: RuleAttribute | null;
		operator?: RuleOperator | null;
		value?: string | null;
	}

	/** Represents a condition for a device pool. */
	export interface RuleFormProperties {
		attribute: FormControl<RuleAttribute | null | undefined>,
		operator: FormControl<RuleOperator | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			attribute: new FormControl<RuleAttribute | null | undefined>(undefined),
			operator: new FormControl<RuleOperator | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RuleAttribute { ARN = 0, PLATFORM = 1, FORM_FACTOR = 2, MANUFACTURER = 3, REMOTE_ACCESS_ENABLED = 4, REMOTE_DEBUG_ENABLED = 5, APPIUM_VERSION = 6, INSTANCE_ARN = 7, INSTANCE_LABELS = 8, FLEET_TYPE = 9, OS_VERSION = 10, MODEL = 11, AVAILABILITY = 12 }

	export enum RuleOperator { EQUALS = 0, LESS_THAN = 1, LESS_THAN_OR_EQUALS = 2, GREATER_THAN = 3, GREATER_THAN_OR_EQUALS = 4, IN = 5, NOT_IN = 6, CONTAINS = 7 }


	/** Represents a request to the create device pool operation. */
	export interface CreateDevicePoolRequest {
		projectArn: string;
		name: string;
		description?: string | null;
		rules: Array<Rule>;
		maxDevices?: number | null;
	}

	/** Represents a request to the create device pool operation. */
	export interface CreateDevicePoolRequestFormProperties {
		projectArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		maxDevices: FormControl<number | null | undefined>,
	}
	export function CreateCreateDevicePoolRequestFormGroup() {
		return new FormGroup<CreateDevicePoolRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
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

		/** Represents the instance profile. */
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
		arn?: string | null;
		packageCleanup?: boolean | null;
		excludeAppPackagesFromCleanup?: Array<string>;
		rebootAfterUse?: boolean | null;
		name?: string | null;
		description?: string | null;
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
		name: string;
		description?: string | null;
		packageCleanup?: boolean | null;
		excludeAppPackagesFromCleanup?: Array<string>;
		rebootAfterUse?: boolean | null;
	}
	export interface CreateInstanceProfileRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		packageCleanup: FormControl<boolean | null | undefined>,
		rebootAfterUse: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateInstanceProfileRequestFormGroup() {
		return new FormGroup<CreateInstanceProfileRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			packageCleanup: new FormControl<boolean | null | undefined>(undefined),
			rebootAfterUse: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkProfileResult {

		/** An array of settings that describes characteristics of a network profile. */
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
		arn?: string | null;
		name?: string | null;
		description?: string | null;
		type?: DevicePoolType | null;
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
		projectArn: string;
		name: string;
		description?: string | null;
		type?: DevicePoolType | null;
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
		projectArn: FormControl<string | null | undefined>,
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
			projectArn: new FormControl<string | null | undefined>(undefined),
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


	/** Represents the result of a create project request. */
	export interface CreateProjectResult {

		/** Represents an operating-system neutral workspace for running and managing tests. */
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
		arn?: string | null;
		name?: string | null;
		defaultJobTimeoutMinutes?: number | null;
		created?: Date | null;
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


	/** Represents a request to the create project operation. */
	export interface CreateProjectRequest {
		name: string;
		defaultJobTimeoutMinutes?: number | null;
	}

	/** Represents a request to the create project operation. */
	export interface CreateProjectRequestFormProperties {
		name: FormControl<string | null | undefined>,
		defaultJobTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateCreateProjectRequestFormGroup() {
		return new FormGroup<CreateProjectRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
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

		/** Represents information about the remote access session. */
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
		arn?: string | null;
		name?: string | null;
		created?: Date | null;
		status?: RemoteAccessSessionStatus | null;
		result?: RemoteAccessSessionResult | null;
		message?: string | null;
		started?: Date | null;
		stopped?: Date | null;

		/** Represents a device type that an app is tested against. */
		device?: Device;
		instanceArn?: string | null;
		remoteDebugEnabled?: boolean | null;
		remoteRecordEnabled?: boolean | null;
		remoteRecordAppArn?: string | null;
		hostAddress?: string | null;
		clientId?: string | null;
		billingMethod?: RemoteAccessSessionBillingMethod | null;

		/** Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children. */
		deviceMinutes?: DeviceMinutes;
		endpoint?: string | null;
		deviceUdid?: string | null;
		interactionMode?: RemoteAccessSessionInteractionMode | null;
		skipAppResign?: boolean | null;
	}

	/** Represents information about the remote access session. */
	export interface RemoteAccessSessionFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		status: FormControl<RemoteAccessSessionStatus | null | undefined>,
		result: FormControl<RemoteAccessSessionResult | null | undefined>,
		message: FormControl<string | null | undefined>,
		started: FormControl<Date | null | undefined>,
		stopped: FormControl<Date | null | undefined>,
		instanceArn: FormControl<string | null | undefined>,
		remoteDebugEnabled: FormControl<boolean | null | undefined>,
		remoteRecordEnabled: FormControl<boolean | null | undefined>,
		remoteRecordAppArn: FormControl<string | null | undefined>,
		hostAddress: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		billingMethod: FormControl<RemoteAccessSessionBillingMethod | null | undefined>,
		endpoint: FormControl<string | null | undefined>,
		deviceUdid: FormControl<string | null | undefined>,
		interactionMode: FormControl<RemoteAccessSessionInteractionMode | null | undefined>,
		skipAppResign: FormControl<boolean | null | undefined>,
	}
	export function CreateRemoteAccessSessionFormGroup() {
		return new FormGroup<RemoteAccessSessionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<RemoteAccessSessionStatus | null | undefined>(undefined),
			result: new FormControl<RemoteAccessSessionResult | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
			stopped: new FormControl<Date | null | undefined>(undefined),
			instanceArn: new FormControl<string | null | undefined>(undefined),
			remoteDebugEnabled: new FormControl<boolean | null | undefined>(undefined),
			remoteRecordEnabled: new FormControl<boolean | null | undefined>(undefined),
			remoteRecordAppArn: new FormControl<string | null | undefined>(undefined),
			hostAddress: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			billingMethod: new FormControl<RemoteAccessSessionBillingMethod | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			deviceUdid: new FormControl<string | null | undefined>(undefined),
			interactionMode: new FormControl<RemoteAccessSessionInteractionMode | null | undefined>(undefined),
			skipAppResign: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum RemoteAccessSessionStatus { PENDING = 0, PENDING_CONCURRENCY = 1, PENDING_DEVICE = 2, PROCESSING = 3, SCHEDULING = 4, PREPARING = 5, RUNNING = 6, COMPLETED = 7, STOPPING = 8 }

	export enum RemoteAccessSessionResult { PENDING = 0, PASSED = 1, WARNED = 2, FAILED = 3, SKIPPED = 4, ERRORED = 5, STOPPED = 6 }


	/** Represents a device type that an app is tested against. */
	export interface Device {
		arn?: string | null;
		name?: string | null;
		manufacturer?: string | null;
		model?: string | null;
		modelId?: string | null;
		formFactor?: DeviceFormFactor | null;
		platform?: DevicePlatform | null;
		os?: string | null;

		/** Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide CPU usage. */
		cpu?: CPU;

		/** Represents the screen resolution of a device in height and width, expressed in pixels. */
		resolution?: Resolution;
		heapSize?: number | null;
		memory?: number | null;
		image?: string | null;
		carrier?: string | null;
		radio?: string | null;
		remoteAccessEnabled?: boolean | null;
		remoteDebugEnabled?: boolean | null;
		fleetType?: string | null;
		fleetName?: string | null;
		instances?: Array<DeviceInstance>;
		availability?: DeviceAvailability | null;
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

	export enum DeviceFormFactor { PHONE = 0, TABLET = 1 }

	export enum DevicePlatform { ANDROID = 0, IOS = 1 }


	/** Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide CPU usage. */
	export interface CPU {
		frequency?: string | null;
		architecture?: string | null;
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
		arn?: string | null;
		deviceArn?: string | null;
		labels?: Array<string>;
		status?: DeviceInstanceStatus | null;
		udid?: string | null;

		/** Represents the instance profile. */
		instanceProfile?: InstanceProfile;
	}

	/** Represents the device instance. */
	export interface DeviceInstanceFormProperties {
		arn: FormControl<string | null | undefined>,
		deviceArn: FormControl<string | null | undefined>,
		status: FormControl<DeviceInstanceStatus | null | undefined>,
		udid: FormControl<string | null | undefined>,
	}
	export function CreateDeviceInstanceFormGroup() {
		return new FormGroup<DeviceInstanceFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			deviceArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DeviceInstanceStatus | null | undefined>(undefined),
			udid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceInstanceStatus { IN_USE = 0, PREPARING = 1, AVAILABLE = 2, NOT_AVAILABLE = 3 }

	export enum DeviceAvailability { TEMPORARY_NOT_AVAILABLE = 0, BUSY = 1, AVAILABLE = 2, HIGHLY_AVAILABLE = 3 }

	export enum RemoteAccessSessionBillingMethod { METERED = 0, UNMETERED = 1 }


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

	export enum RemoteAccessSessionInteractionMode { INTERACTIVE = 0, NO_VIDEO = 1, VIDEO_ONLY = 2 }


	/** Creates and submits a request to start a remote access session. */
	export interface CreateRemoteAccessSessionRequest {
		projectArn: string;
		deviceArn: string;
		instanceArn?: string | null;
		sshPublicKey?: string | null;
		remoteDebugEnabled?: boolean | null;
		remoteRecordEnabled?: boolean | null;
		remoteRecordAppArn?: string | null;
		name?: string | null;
		clientId?: string | null;

		/** Configuration settings for a remote access session, including billing method. */
		configuration?: CreateRemoteAccessSessionConfiguration;
		interactionMode?: RemoteAccessSessionInteractionMode | null;
		skipAppResign?: boolean | null;
	}

	/** Creates and submits a request to start a remote access session. */
	export interface CreateRemoteAccessSessionRequestFormProperties {
		projectArn: FormControl<string | null | undefined>,
		deviceArn: FormControl<string | null | undefined>,
		instanceArn: FormControl<string | null | undefined>,
		sshPublicKey: FormControl<string | null | undefined>,
		remoteDebugEnabled: FormControl<boolean | null | undefined>,
		remoteRecordEnabled: FormControl<boolean | null | undefined>,
		remoteRecordAppArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		interactionMode: FormControl<RemoteAccessSessionInteractionMode | null | undefined>,
		skipAppResign: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateRemoteAccessSessionRequestFormGroup() {
		return new FormGroup<CreateRemoteAccessSessionRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined),
			deviceArn: new FormControl<string | null | undefined>(undefined),
			instanceArn: new FormControl<string | null | undefined>(undefined),
			sshPublicKey: new FormControl<string | null | undefined>(undefined),
			remoteDebugEnabled: new FormControl<boolean | null | undefined>(undefined),
			remoteRecordEnabled: new FormControl<boolean | null | undefined>(undefined),
			remoteRecordAppArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			interactionMode: new FormControl<RemoteAccessSessionInteractionMode | null | undefined>(undefined),
			skipAppResign: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration settings for a remote access session, including billing method. */
	export interface CreateRemoteAccessSessionConfiguration {
		billingMethod?: RemoteAccessSessionBillingMethod | null;
		vpceConfigurationArns?: Array<string>;
	}

	/** Configuration settings for a remote access session, including billing method. */
	export interface CreateRemoteAccessSessionConfigurationFormProperties {
		billingMethod: FormControl<RemoteAccessSessionBillingMethod | null | undefined>,
	}
	export function CreateCreateRemoteAccessSessionConfigurationFormGroup() {
		return new FormGroup<CreateRemoteAccessSessionConfigurationFormProperties>({
			billingMethod: new FormControl<RemoteAccessSessionBillingMethod | null | undefined>(undefined),
		});

	}

	export interface CreateTestGridProjectResult {

		/** A Selenium testing project. Projects are used to collect and collate sessions. */
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
		arn?: string | null;
		name?: string | null;
		description?: string | null;
		created?: Date | null;
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

	export interface CreateTestGridProjectRequest {
		name: string;
		description?: string | null;
	}
	export interface CreateTestGridProjectRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateTestGridProjectRequestFormGroup() {
		return new FormGroup<CreateTestGridProjectRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
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
		url?: string | null;
		expires?: Date | null;
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
		projectArn: string;
		expiresInSeconds: number;
	}
	export interface CreateTestGridUrlRequestFormProperties {
		projectArn: FormControl<string | null | undefined>,
		expiresInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateTestGridUrlRequestFormGroup() {
		return new FormGroup<CreateTestGridUrlRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined),
			expiresInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the result of a create upload request. */
	export interface CreateUploadResult {

		/** An app or a set of one or more tests to upload or that have been uploaded. */
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
		arn?: string | null;
		name?: string | null;
		created?: Date | null;
		type?: UploadType | null;
		status?: UploadStatus | null;
		url?: string | null;
		metadata?: string | null;
		contentType?: string | null;
		message?: string | null;
		category?: DevicePoolType | null;
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

	export enum UploadType { ANDROID_APP = 0, IOS_APP = 1, WEB_APP = 2, EXTERNAL_DATA = 3, APPIUM_JAVA_JUNIT_TEST_PACKAGE = 4, APPIUM_JAVA_TESTNG_TEST_PACKAGE = 5, APPIUM_PYTHON_TEST_PACKAGE = 6, APPIUM_NODE_TEST_PACKAGE = 7, APPIUM_RUBY_TEST_PACKAGE = 8, APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE = 9, APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE = 10, APPIUM_WEB_PYTHON_TEST_PACKAGE = 11, APPIUM_WEB_NODE_TEST_PACKAGE = 12, APPIUM_WEB_RUBY_TEST_PACKAGE = 13, CALABASH_TEST_PACKAGE = 14, INSTRUMENTATION_TEST_PACKAGE = 15, UIAUTOMATION_TEST_PACKAGE = 16, UIAUTOMATOR_TEST_PACKAGE = 17, XCTEST_TEST_PACKAGE = 18, XCTEST_UI_TEST_PACKAGE = 19, APPIUM_JAVA_JUNIT_TEST_SPEC = 20, APPIUM_JAVA_TESTNG_TEST_SPEC = 21, APPIUM_PYTHON_TEST_SPEC = 22, APPIUM_NODE_TEST_SPEC = 23, APPIUM_RUBY_TEST_SPEC = 24, APPIUM_WEB_JAVA_JUNIT_TEST_SPEC = 25, APPIUM_WEB_JAVA_TESTNG_TEST_SPEC = 26, APPIUM_WEB_PYTHON_TEST_SPEC = 27, APPIUM_WEB_NODE_TEST_SPEC = 28, APPIUM_WEB_RUBY_TEST_SPEC = 29, INSTRUMENTATION_TEST_SPEC = 30, XCTEST_UI_TEST_SPEC = 31 }

	export enum UploadStatus { INITIALIZED = 0, PROCESSING = 1, SUCCEEDED = 2, FAILED = 3 }


	/** Represents a request to the create upload operation. */
	export interface CreateUploadRequest {
		projectArn: string;
		name: string;
		type: UploadType;
		contentType?: string | null;
	}

	/** Represents a request to the create upload operation. */
	export interface CreateUploadRequestFormProperties {
		projectArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<UploadType | null | undefined>,
		contentType: FormControl<string | null | undefined>,
	}
	export function CreateCreateUploadRequestFormGroup() {
		return new FormGroup<CreateUploadRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<UploadType | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVPCEConfigurationResult {

		/** Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration. */
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
		arn?: string | null;
		vpceConfigurationName?: string | null;
		vpceServiceName?: string | null;
		serviceDnsName?: string | null;
		vpceConfigurationDescription?: string | null;
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
		vpceConfigurationName: string;
		vpceServiceName: string;
		serviceDnsName: string;
		vpceConfigurationDescription?: string | null;
	}
	export interface CreateVPCEConfigurationRequestFormProperties {
		vpceConfigurationName: FormControl<string | null | undefined>,
		vpceServiceName: FormControl<string | null | undefined>,
		serviceDnsName: FormControl<string | null | undefined>,
		vpceConfigurationDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateVPCEConfigurationRequestFormGroup() {
		return new FormGroup<CreateVPCEConfigurationRequestFormProperties>({
			vpceConfigurationName: new FormControl<string | null | undefined>(undefined),
			vpceServiceName: new FormControl<string | null | undefined>(undefined),
			serviceDnsName: new FormControl<string | null | undefined>(undefined),
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
		arn: string;
	}

	/** Represents a request to the delete device pool operation. */
	export interface DeleteDevicePoolRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDevicePoolRequestFormGroup() {
		return new FormGroup<DeleteDevicePoolRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
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
		arn: string;
	}
	export interface DeleteInstanceProfileRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInstanceProfileRequestFormGroup() {
		return new FormGroup<DeleteInstanceProfileRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
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
		arn: string;
	}
	export interface DeleteNetworkProfileRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNetworkProfileRequestFormGroup() {
		return new FormGroup<DeleteNetworkProfileRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
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
		arn: string;
	}

	/** Represents a request to the delete project operation. */
	export interface DeleteProjectRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProjectRequestFormGroup() {
		return new FormGroup<DeleteProjectRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
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
		arn: string;
	}

	/** Represents the request to delete the specified remote access session. */
	export interface DeleteRemoteAccessSessionRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRemoteAccessSessionRequestFormGroup() {
		return new FormGroup<DeleteRemoteAccessSessionRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
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
		arn: string;
	}

	/** Represents a request to the delete run operation. */
	export interface DeleteRunRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRunRequestFormGroup() {
		return new FormGroup<DeleteRunRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
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
		projectArn: string;
	}
	export interface DeleteTestGridProjectRequestFormProperties {
		projectArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTestGridProjectRequestFormGroup() {
		return new FormGroup<DeleteTestGridProjectRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined),
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
		arn: string;
	}

	/** Represents a request to the delete upload operation. */
	export interface DeleteUploadRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUploadRequestFormGroup() {
		return new FormGroup<DeleteUploadRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
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
		arn: string;
	}
	export interface DeleteVPCEConfigurationRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVPCEConfigurationRequestFormGroup() {
		return new FormGroup<DeleteVPCEConfigurationRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
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

		/** A container for account-level settings in AWS Device Farm. */
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
		awsAccountNumber?: string | null;
		unmeteredDevices?: PurchasedDevicesMap;
		unmeteredRemoteAccessDevices?: PurchasedDevicesMap;
		maxJobTimeoutMinutes?: number | null;

		/** Represents information about free trial device minutes for an AWS account. */
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

		/** Represents a device type that an app is tested against. */
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
		arn: string;
	}

	/** Represents a request to the get device request. */
	export interface GetDeviceRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetDeviceRequestFormGroup() {
		return new FormGroup<GetDeviceRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDeviceInstanceResult {

		/** Represents the device instance. */
		deviceInstance?: DeviceInstance;
	}
	export interface GetDeviceInstanceResultFormProperties {
	}
	export function CreateGetDeviceInstanceResultFormGroup() {
		return new FormGroup<GetDeviceInstanceResultFormProperties>({
		});

	}

	export interface GetDeviceInstanceRequest {
		arn: string;
	}
	export interface GetDeviceInstanceRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetDeviceInstanceRequestFormGroup() {
		return new FormGroup<GetDeviceInstanceRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a get device pool request. */
	export interface GetDevicePoolResult {

		/** Represents a collection of device types. */
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
		arn: string;
	}

	/** Represents a request to the get device pool operation. */
	export interface GetDevicePoolRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetDevicePoolRequestFormGroup() {
		return new FormGroup<GetDevicePoolRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
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

		/** Represents a device type that an app is tested against. */
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
		message?: string | null;
		type?: RuleAttribute | null;
	}

	/** Represents information about incompatibility. */
	export interface IncompatibilityMessageFormProperties {
		message: FormControl<string | null | undefined>,
		type: FormControl<RuleAttribute | null | undefined>,
	}
	export function CreateIncompatibilityMessageFormGroup() {
		return new FormGroup<IncompatibilityMessageFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<RuleAttribute | null | undefined>(undefined),
		});

	}


	/** Represents a request to the get device pool compatibility operation. */
	export interface GetDevicePoolCompatibilityRequest {
		devicePoolArn: string;
		appArn?: string | null;
		testType?: GetDevicePoolCompatibilityRequestTestType | null;

		/** Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>. */
		test?: ScheduleRunTest;

		/** Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles. */
		configuration?: ScheduleRunConfiguration;
	}

	/** Represents a request to the get device pool compatibility operation. */
	export interface GetDevicePoolCompatibilityRequestFormProperties {
		devicePoolArn: FormControl<string | null | undefined>,
		appArn: FormControl<string | null | undefined>,
		testType: FormControl<GetDevicePoolCompatibilityRequestTestType | null | undefined>,
	}
	export function CreateGetDevicePoolCompatibilityRequestFormGroup() {
		return new FormGroup<GetDevicePoolCompatibilityRequestFormProperties>({
			devicePoolArn: new FormControl<string | null | undefined>(undefined),
			appArn: new FormControl<string | null | undefined>(undefined),
			testType: new FormControl<GetDevicePoolCompatibilityRequestTestType | null | undefined>(undefined),
		});

	}

	export enum GetDevicePoolCompatibilityRequestTestType { BUILTIN_FUZZ = 0, BUILTIN_EXPLORER = 1, WEB_PERFORMANCE_PROFILE = 2, APPIUM_JAVA_JUNIT = 3, APPIUM_JAVA_TESTNG = 4, APPIUM_PYTHON = 5, APPIUM_NODE = 6, APPIUM_RUBY = 7, APPIUM_WEB_JAVA_JUNIT = 8, APPIUM_WEB_JAVA_TESTNG = 9, APPIUM_WEB_PYTHON = 10, APPIUM_WEB_NODE = 11, APPIUM_WEB_RUBY = 12, CALABASH = 13, INSTRUMENTATION = 14, UIAUTOMATION = 15, UIAUTOMATOR = 16, XCTEST = 17, XCTEST_UI = 18, REMOTE_ACCESS_RECORD = 19, REMOTE_ACCESS_REPLAY = 20 }


	/** Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>. */
	export interface ScheduleRunTest {
		type: GetDevicePoolCompatibilityRequestTestType;
		testPackageArn?: string | null;
		testSpecArn?: string | null;
		filter?: string | null;
		parameters?: TestParameters;
	}

	/** Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>. */
	export interface ScheduleRunTestFormProperties {
		type: FormControl<GetDevicePoolCompatibilityRequestTestType | null | undefined>,
		testPackageArn: FormControl<string | null | undefined>,
		testSpecArn: FormControl<string | null | undefined>,
		filter: FormControl<string | null | undefined>,
	}
	export function CreateScheduleRunTestFormGroup() {
		return new FormGroup<ScheduleRunTestFormProperties>({
			type: new FormControl<GetDevicePoolCompatibilityRequestTestType | null | undefined>(undefined),
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
		extraDataPackageArn?: string | null;
		networkProfileArn?: string | null;
		locale?: string | null;

		/** <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example, 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p> */
		location?: Location;
		vpceConfigurationArns?: Array<string>;

		/** <p>A JSON object that specifies the paths where the artifacts generated by the customer's tests, on the device or in the test environment, are pulled from.</p> <p>Specify <code>deviceHostPaths</code> and optionally specify either <code>iosPaths</code> or <code>androidPaths</code>.</p> <p>For web app tests, you can specify both <code>iosPaths</code> and <code>androidPaths</code>.</p> */
		customerArtifactPaths?: CustomerArtifactPaths;

		/** Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC. */
		radios?: Radios;
		auxiliaryApps?: Array<string>;
		billingMethod?: RemoteAccessSessionBillingMethod | null;
	}

	/** Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles. */
	export interface ScheduleRunConfigurationFormProperties {
		extraDataPackageArn: FormControl<string | null | undefined>,
		networkProfileArn: FormControl<string | null | undefined>,
		locale: FormControl<string | null | undefined>,
		billingMethod: FormControl<RemoteAccessSessionBillingMethod | null | undefined>,
	}
	export function CreateScheduleRunConfigurationFormGroup() {
		return new FormGroup<ScheduleRunConfigurationFormProperties>({
			extraDataPackageArn: new FormControl<string | null | undefined>(undefined),
			networkProfileArn: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			billingMethod: new FormControl<RemoteAccessSessionBillingMethod | null | undefined>(undefined),
		});

	}


	/** <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example, 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p> */
	export interface Location {
		latitude: number;
		longitude: number;
	}

	/** <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example, 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p> */
	export interface LocationFormProperties {
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
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

		/** Represents the instance profile. */
		instanceProfile?: InstanceProfile;
	}
	export interface GetInstanceProfileResultFormProperties {
	}
	export function CreateGetInstanceProfileResultFormGroup() {
		return new FormGroup<GetInstanceProfileResultFormProperties>({
		});

	}

	export interface GetInstanceProfileRequest {
		arn: string;
	}
	export interface GetInstanceProfileRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetInstanceProfileRequestFormGroup() {
		return new FormGroup<GetInstanceProfileRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a get job request. */
	export interface GetJobResult {

		/** Represents a device. */
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
		arn?: string | null;
		name?: string | null;
		type?: GetDevicePoolCompatibilityRequestTestType | null;
		created?: Date | null;
		status?: RemoteAccessSessionStatus | null;
		result?: RemoteAccessSessionResult | null;
		started?: Date | null;
		stopped?: Date | null;

		/** Represents entity counters. */
		counters?: Counters;
		message?: string | null;

		/** Represents a device type that an app is tested against. */
		device?: Device;
		instanceArn?: string | null;

		/** Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children. */
		deviceMinutes?: DeviceMinutes;
		videoEndpoint?: string | null;
		videoCapture?: boolean | null;
	}

	/** Represents a device. */
	export interface JobFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<GetDevicePoolCompatibilityRequestTestType | null | undefined>,
		created: FormControl<Date | null | undefined>,
		status: FormControl<RemoteAccessSessionStatus | null | undefined>,
		result: FormControl<RemoteAccessSessionResult | null | undefined>,
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
			type: new FormControl<GetDevicePoolCompatibilityRequestTestType | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<RemoteAccessSessionStatus | null | undefined>(undefined),
			result: new FormControl<RemoteAccessSessionResult | null | undefined>(undefined),
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
		arn: string;
	}

	/** Represents a request to the get job operation. */
	export interface GetJobRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetJobRequestFormGroup() {
		return new FormGroup<GetJobRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetNetworkProfileResult {

		/** An array of settings that describes characteristics of a network profile. */
		networkProfile?: NetworkProfile;
	}
	export interface GetNetworkProfileResultFormProperties {
	}
	export function CreateGetNetworkProfileResultFormGroup() {
		return new FormGroup<GetNetworkProfileResultFormProperties>({
		});

	}

	export interface GetNetworkProfileRequest {
		arn: string;
	}
	export interface GetNetworkProfileRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetNetworkProfileRequestFormGroup() {
		return new FormGroup<GetNetworkProfileRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns the status result for a device offering. */
	export interface GetOfferingStatusResult {
		current?: OfferingStatusMap;
		nextPeriod?: OfferingStatusMap;
		nextToken?: string | null;
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
		nextToken?: string | null;
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

		/** Represents an operating-system neutral workspace for running and managing tests. */
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
		arn: string;
	}

	/** Represents a request to the get project operation. */
	export interface GetProjectRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetProjectRequestFormGroup() {
		return new FormGroup<GetProjectRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server that lists detailed information about the remote access session. */
	export interface GetRemoteAccessSessionResult {

		/** Represents information about the remote access session. */
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
		arn: string;
	}

	/** Represents the request to get information about the specified remote access session. */
	export interface GetRemoteAccessSessionRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetRemoteAccessSessionRequestFormGroup() {
		return new FormGroup<GetRemoteAccessSessionRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a get run request. */
	export interface GetRunResult {

		/** Represents a test run on a set of devices with a given app package, test parameters, and so on. */
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
		arn?: string | null;
		name?: string | null;
		type?: GetDevicePoolCompatibilityRequestTestType | null;
		platform?: DevicePlatform | null;
		created?: Date | null;
		status?: RemoteAccessSessionStatus | null;
		result?: RemoteAccessSessionResult | null;
		started?: Date | null;
		stopped?: Date | null;

		/** Represents entity counters. */
		counters?: Counters;
		message?: string | null;
		totalJobs?: number | null;
		completedJobs?: number | null;
		billingMethod?: RemoteAccessSessionBillingMethod | null;

		/** Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children. */
		deviceMinutes?: DeviceMinutes;

		/** An array of settings that describes characteristics of a network profile. */
		networkProfile?: NetworkProfile;
		parsingResultUrl?: string | null;
		resultCode?: RunResultCode | null;
		seed?: number | null;
		appUpload?: string | null;
		eventCount?: number | null;
		jobTimeoutMinutes?: number | null;
		devicePoolArn?: string | null;
		locale?: string | null;

		/** Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC. */
		radios?: Radios;

		/** <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example, 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p> */
		location?: Location;

		/** <p>A JSON object that specifies the paths where the artifacts generated by the customer's tests, on the device or in the test environment, are pulled from.</p> <p>Specify <code>deviceHostPaths</code> and optionally specify either <code>iosPaths</code> or <code>androidPaths</code>.</p> <p>For web app tests, you can specify both <code>iosPaths</code> and <code>androidPaths</code>.</p> */
		customerArtifactPaths?: CustomerArtifactPaths;
		webUrl?: string | null;
		skipAppResign?: boolean | null;
		testSpecArn?: string | null;

		/** Contains the run results requested by the device selection configuration and how many devices were returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>. */
		deviceSelectionResult?: DeviceSelectionResult;
	}

	/** Represents a test run on a set of devices with a given app package, test parameters, and so on. */
	export interface RunFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<GetDevicePoolCompatibilityRequestTestType | null | undefined>,
		platform: FormControl<DevicePlatform | null | undefined>,
		created: FormControl<Date | null | undefined>,
		status: FormControl<RemoteAccessSessionStatus | null | undefined>,
		result: FormControl<RemoteAccessSessionResult | null | undefined>,
		started: FormControl<Date | null | undefined>,
		stopped: FormControl<Date | null | undefined>,
		message: FormControl<string | null | undefined>,
		totalJobs: FormControl<number | null | undefined>,
		completedJobs: FormControl<number | null | undefined>,
		billingMethod: FormControl<RemoteAccessSessionBillingMethod | null | undefined>,
		parsingResultUrl: FormControl<string | null | undefined>,
		resultCode: FormControl<RunResultCode | null | undefined>,
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
			type: new FormControl<GetDevicePoolCompatibilityRequestTestType | null | undefined>(undefined),
			platform: new FormControl<DevicePlatform | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<RemoteAccessSessionStatus | null | undefined>(undefined),
			result: new FormControl<RemoteAccessSessionResult | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
			stopped: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			totalJobs: new FormControl<number | null | undefined>(undefined),
			completedJobs: new FormControl<number | null | undefined>(undefined),
			billingMethod: new FormControl<RemoteAccessSessionBillingMethod | null | undefined>(undefined),
			parsingResultUrl: new FormControl<string | null | undefined>(undefined),
			resultCode: new FormControl<RunResultCode | null | undefined>(undefined),
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

	export enum RunResultCode { PARSING_FAILED = 0, VPC_ENDPOINT_SETUP_FAILED = 1 }


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
		attribute?: DeviceFilterAttribute | null;
		operator?: RuleOperator | null;
		values?: Array<string>;
	}

	/** <p>Represents a device filter used to select a set of devices to be included in a test run. This data structure is passed in as the <code>deviceSelectionConfiguration</code> parameter to <code>ScheduleRun</code>. For an example of the JSON request syntax, see <a>ScheduleRun</a>.</p> <p>It is also passed in as the <code>filters</code> parameter to <code>ListDevices</code>. For an example of the JSON request syntax, see <a>ListDevices</a>.</p> */
	export interface DeviceFilterFormProperties {
		attribute: FormControl<DeviceFilterAttribute | null | undefined>,
		operator: FormControl<RuleOperator | null | undefined>,
	}
	export function CreateDeviceFilterFormGroup() {
		return new FormGroup<DeviceFilterFormProperties>({
			attribute: new FormControl<DeviceFilterAttribute | null | undefined>(undefined),
			operator: new FormControl<RuleOperator | null | undefined>(undefined),
		});

	}

	export enum DeviceFilterAttribute { ARN = 0, PLATFORM = 1, OS_VERSION = 2, MODEL = 3, AVAILABILITY = 4, FORM_FACTOR = 5, MANUFACTURER = 6, REMOTE_ACCESS_ENABLED = 7, REMOTE_DEBUG_ENABLED = 8, INSTANCE_ARN = 9, INSTANCE_LABELS = 10, FLEET_TYPE = 11 }


	/** Represents a request to the get run operation. */
	export interface GetRunRequest {
		arn: string;
	}

	/** Represents a request to the get run operation. */
	export interface GetRunRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetRunRequestFormGroup() {
		return new FormGroup<GetRunRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a get suite request. */
	export interface GetSuiteResult {

		/** Represents a collection of one or more tests. */
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
		arn?: string | null;
		name?: string | null;
		type?: GetDevicePoolCompatibilityRequestTestType | null;
		created?: Date | null;
		status?: RemoteAccessSessionStatus | null;
		result?: RemoteAccessSessionResult | null;
		started?: Date | null;
		stopped?: Date | null;

		/** Represents entity counters. */
		counters?: Counters;
		message?: string | null;

		/** Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children. */
		deviceMinutes?: DeviceMinutes;
	}

	/** Represents a collection of one or more tests. */
	export interface SuiteFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<GetDevicePoolCompatibilityRequestTestType | null | undefined>,
		created: FormControl<Date | null | undefined>,
		status: FormControl<RemoteAccessSessionStatus | null | undefined>,
		result: FormControl<RemoteAccessSessionResult | null | undefined>,
		started: FormControl<Date | null | undefined>,
		stopped: FormControl<Date | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateSuiteFormGroup() {
		return new FormGroup<SuiteFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GetDevicePoolCompatibilityRequestTestType | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<RemoteAccessSessionStatus | null | undefined>(undefined),
			result: new FormControl<RemoteAccessSessionResult | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
			stopped: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to the get suite operation. */
	export interface GetSuiteRequest {
		arn: string;
	}

	/** Represents a request to the get suite operation. */
	export interface GetSuiteRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetSuiteRequestFormGroup() {
		return new FormGroup<GetSuiteRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a get test request. */
	export interface GetTestResult {

		/** Represents a condition that is evaluated. */
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
		arn?: string | null;
		name?: string | null;
		type?: GetDevicePoolCompatibilityRequestTestType | null;
		created?: Date | null;
		status?: RemoteAccessSessionStatus | null;
		result?: RemoteAccessSessionResult | null;
		started?: Date | null;
		stopped?: Date | null;

		/** Represents entity counters. */
		counters?: Counters;
		message?: string | null;

		/** Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children. */
		deviceMinutes?: DeviceMinutes;
	}

	/** Represents a condition that is evaluated. */
	export interface TestFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<GetDevicePoolCompatibilityRequestTestType | null | undefined>,
		created: FormControl<Date | null | undefined>,
		status: FormControl<RemoteAccessSessionStatus | null | undefined>,
		result: FormControl<RemoteAccessSessionResult | null | undefined>,
		started: FormControl<Date | null | undefined>,
		stopped: FormControl<Date | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateTestFormGroup() {
		return new FormGroup<TestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GetDevicePoolCompatibilityRequestTestType | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<RemoteAccessSessionStatus | null | undefined>(undefined),
			result: new FormControl<RemoteAccessSessionResult | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
			stopped: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to the get test operation. */
	export interface GetTestRequest {
		arn: string;
	}

	/** Represents a request to the get test operation. */
	export interface GetTestRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetTestRequestFormGroup() {
		return new FormGroup<GetTestRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTestGridProjectResult {

		/** A Selenium testing project. Projects are used to collect and collate sessions. */
		testGridProject?: TestGridProject;
	}
	export interface GetTestGridProjectResultFormProperties {
	}
	export function CreateGetTestGridProjectResultFormGroup() {
		return new FormGroup<GetTestGridProjectResultFormProperties>({
		});

	}

	export interface GetTestGridProjectRequest {
		projectArn: string;
	}
	export interface GetTestGridProjectRequestFormProperties {
		projectArn: FormControl<string | null | undefined>,
	}
	export function CreateGetTestGridProjectRequestFormGroup() {
		return new FormGroup<GetTestGridProjectRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTestGridSessionResult {

		/** A <a>TestGridSession</a> is a single instance of a browser launched from the URL provided by a call to <a>CreateTestGridUrl</a>. */
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
		arn?: string | null;
		status?: TestGridSessionStatus | null;
		created?: Date | null;
		ended?: Date | null;
		billingMinutes?: number | null;
		seleniumProperties?: string | null;
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

	export enum TestGridSessionStatus { ACTIVE = 0, CLOSED = 1, ERRORED = 2 }

	export interface GetTestGridSessionRequest {
		projectArn?: string | null;
		sessionId?: string | null;
		sessionArn?: string | null;
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

		/** An app or a set of one or more tests to upload or that have been uploaded. */
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
		arn: string;
	}

	/** Represents a request to the get upload operation. */
	export interface GetUploadRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetUploadRequestFormGroup() {
		return new FormGroup<GetUploadRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetVPCEConfigurationResult {

		/** Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration. */
		vpceConfiguration?: VPCEConfiguration;
	}
	export interface GetVPCEConfigurationResultFormProperties {
	}
	export function CreateGetVPCEConfigurationResultFormGroup() {
		return new FormGroup<GetVPCEConfigurationResultFormProperties>({
		});

	}

	export interface GetVPCEConfigurationRequest {
		arn: string;
	}
	export interface GetVPCEConfigurationRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetVPCEConfigurationRequestFormGroup() {
		return new FormGroup<GetVPCEConfigurationRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server after AWS Device Farm makes a request to install to a remote access session. */
	export interface InstallToRemoteAccessSessionResult {

		/** An app or a set of one or more tests to upload or that have been uploaded. */
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
		remoteAccessSessionArn: string;
		appArn: string;
	}

	/** Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session. */
	export interface InstallToRemoteAccessSessionRequestFormProperties {
		remoteAccessSessionArn: FormControl<string | null | undefined>,
		appArn: FormControl<string | null | undefined>,
	}
	export function CreateInstallToRemoteAccessSessionRequestFormGroup() {
		return new FormGroup<InstallToRemoteAccessSessionRequestFormProperties>({
			remoteAccessSessionArn: new FormControl<string | null | undefined>(undefined),
			appArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list artifacts operation. */
	export interface ListArtifactsResult {
		artifacts?: Array<Artifact>;
		nextToken?: string | null;
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
		arn?: string | null;
		name?: string | null;
		type?: ArtifactType | null;
		extension?: string | null;
		url?: string | null;
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

	export enum ArtifactType { UNKNOWN = 0, SCREENSHOT = 1, DEVICE_LOG = 2, MESSAGE_LOG = 3, VIDEO_LOG = 4, RESULT_LOG = 5, SERVICE_LOG = 6, WEBKIT_LOG = 7, INSTRUMENTATION_OUTPUT = 8, EXERCISER_MONKEY_OUTPUT = 9, CALABASH_JSON_OUTPUT = 10, CALABASH_PRETTY_OUTPUT = 11, CALABASH_STANDARD_OUTPUT = 12, CALABASH_JAVA_XML_OUTPUT = 13, AUTOMATION_OUTPUT = 14, APPIUM_SERVER_OUTPUT = 15, APPIUM_JAVA_OUTPUT = 16, APPIUM_JAVA_XML_OUTPUT = 17, APPIUM_PYTHON_OUTPUT = 18, APPIUM_PYTHON_XML_OUTPUT = 19, EXPLORER_EVENT_LOG = 20, EXPLORER_SUMMARY_LOG = 21, APPLICATION_CRASH_REPORT = 22, XCTEST_LOG = 23, VIDEO = 24, CUSTOMER_ARTIFACT = 25, CUSTOMER_ARTIFACT_LOG = 26, TESTSPEC_OUTPUT = 27 }


	/** Represents a request to the list artifacts operation. */
	export interface ListArtifactsRequest {
		arn: string;
		type: ListArtifactsRequestType;
		nextToken?: string | null;
	}

	/** Represents a request to the list artifacts operation. */
	export interface ListArtifactsRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		type: FormControl<ListArtifactsRequestType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListArtifactsRequestFormGroup() {
		return new FormGroup<ListArtifactsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ListArtifactsRequestType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ListArtifactsRequestType { SCREENSHOT = 0, FILE = 1, LOG = 2 }

	export interface ListDeviceInstancesResult {
		deviceInstances?: Array<DeviceInstance>;
		nextToken?: string | null;
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
		nextToken?: string | null;
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
		nextToken?: string | null;
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
		arn: string;
		type?: DevicePoolType | null;
		nextToken?: string | null;
	}

	/** Represents the result of a list device pools request. */
	export interface ListDevicePoolsRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		type: FormControl<DevicePoolType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicePoolsRequestFormGroup() {
		return new FormGroup<ListDevicePoolsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DevicePoolType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list devices operation. */
	export interface ListDevicesResult {
		devices?: Array<Device>;
		nextToken?: string | null;
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
		arn?: string | null;
		nextToken?: string | null;
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
		nextToken?: string | null;
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
		nextToken?: string | null;
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
		nextToken?: string | null;
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
		arn: string;
		nextToken?: string | null;
	}

	/** Represents a request to the list jobs operation. */
	export interface ListJobsRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsRequestFormGroup() {
		return new FormGroup<ListJobsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNetworkProfilesResult {
		networkProfiles?: Array<NetworkProfile>;
		nextToken?: string | null;
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
		arn: string;
		type?: DevicePoolType | null;
		nextToken?: string | null;
	}
	export interface ListNetworkProfilesRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		type: FormControl<DevicePoolType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworkProfilesRequestFormGroup() {
		return new FormGroup<ListNetworkProfilesRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DevicePoolType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOfferingPromotionsResult {
		offeringPromotions?: Array<OfferingPromotion>;
		nextToken?: string | null;
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
		id?: string | null;
		description?: string | null;
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
		nextToken?: string | null;
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
		nextToken?: string | null;
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

		/** The status of the offering. */
		offeringStatus?: OfferingStatus;
		transactionId?: string | null;
		offeringPromotionId?: string | null;
		createdOn?: Date | null;

		/** A number that represents the monetary amount for an offering or transaction. */
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
		type?: OfferingStatusType | null;

		/** Represents the metadata of a device offering. */
		offering?: Offering;
		quantity?: number | null;
		effectiveOn?: Date | null;
	}

	/** The status of the offering. */
	export interface OfferingStatusFormProperties {
		type: FormControl<OfferingStatusType | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		effectiveOn: FormControl<Date | null | undefined>,
	}
	export function CreateOfferingStatusFormGroup() {
		return new FormGroup<OfferingStatusFormProperties>({
			type: new FormControl<OfferingStatusType | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			effectiveOn: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OfferingStatusType { PURCHASE = 0, RENEW = 1, SYSTEM = 2 }


	/** Represents the metadata of a device offering. */
	export interface Offering {
		id?: string | null;
		description?: string | null;
		type?: OfferingType | null;
		platform?: DevicePlatform | null;
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

	export enum OfferingType { RECURRING = 0 }


	/** Specifies whether charges for devices are recurring. */
	export interface RecurringCharge {

		/** A number that represents the monetary amount for an offering or transaction. */
		cost?: MonetaryAmount;
		frequency?: RecurringChargeFrequency | null;
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
		currencyCode?: MonetaryAmountCurrencyCode | null;
	}

	/** A number that represents the monetary amount for an offering or transaction. */
	export interface MonetaryAmountFormProperties {
		amount: FormControl<number | null | undefined>,
		currencyCode: FormControl<MonetaryAmountCurrencyCode | null | undefined>,
	}
	export function CreateMonetaryAmountFormGroup() {
		return new FormGroup<MonetaryAmountFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<MonetaryAmountCurrencyCode | null | undefined>(undefined),
		});

	}

	export enum MonetaryAmountCurrencyCode { USD = 0 }

	export enum RecurringChargeFrequency { MONTHLY = 0 }


	/** Represents the request to list the offering transaction history. */
	export interface ListOfferingTransactionsRequest {
		nextToken?: string | null;
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
		nextToken?: string | null;
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
		nextToken?: string | null;
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
		nextToken?: string | null;
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
		arn?: string | null;
		nextToken?: string | null;
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
		nextToken?: string | null;
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
		arn: string;
		nextToken?: string | null;
	}

	/** Represents the request to return information about the remote access session. */
	export interface ListRemoteAccessSessionsRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRemoteAccessSessionsRequestFormGroup() {
		return new FormGroup<ListRemoteAccessSessionsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list runs request. */
	export interface ListRunsResult {
		runs?: Array<Run>;
		nextToken?: string | null;
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
		arn: string;
		nextToken?: string | null;
	}

	/** Represents a request to the list runs operation. */
	export interface ListRunsRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRunsRequestFormGroup() {
		return new FormGroup<ListRunsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list samples request. */
	export interface ListSamplesResult {
		samples?: Array<Sample>;
		nextToken?: string | null;
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
		arn?: string | null;
		type?: SampleType | null;
		url?: string | null;
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

	export enum SampleType { CPU = 0, MEMORY = 1, THREADS = 2, RX_RATE = 3, TX_RATE = 4, RX = 5, TX = 6, NATIVE_FRAMES = 7, NATIVE_FPS = 8, NATIVE_MIN_DRAWTIME = 9, NATIVE_AVG_DRAWTIME = 10, NATIVE_MAX_DRAWTIME = 11, OPENGL_FRAMES = 12, OPENGL_FPS = 13, OPENGL_MIN_DRAWTIME = 14, OPENGL_AVG_DRAWTIME = 15, OPENGL_MAX_DRAWTIME = 16 }


	/** Represents a request to the list samples operation. */
	export interface ListSamplesRequest {
		arn: string;
		nextToken?: string | null;
	}

	/** Represents a request to the list samples operation. */
	export interface ListSamplesRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSamplesRequestFormGroup() {
		return new FormGroup<ListSamplesRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list suites request. */
	export interface ListSuitesResult {
		suites?: Array<Suite>;
		nextToken?: string | null;
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
		arn: string;
		nextToken?: string | null;
	}

	/** Represents a request to the list suites operation. */
	export interface ListSuitesRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSuitesRequestFormGroup() {
		return new FormGroup<ListSuitesRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
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
		Key: string;
		Value: string;
	}

	/** The metadata that you apply to a resource to help you categorize and organize it. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters. Tag values can have a maximum length of 256 characters.  */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTestGridProjectsResult {
		testGridProjects?: Array<TestGridProject>;
		nextToken?: string | null;
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
		nextToken?: string | null;
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
		nextToken?: string | null;
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
		action?: string | null;
		started?: Date | null;
		duration?: number | null;
		statusCode?: string | null;
		requestMethod?: string | null;
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
		sessionArn: string;
		maxResult?: number | null;
		nextToken?: string | null;
	}
	export interface ListTestGridSessionActionsRequestFormProperties {
		sessionArn: FormControl<string | null | undefined>,
		maxResult: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestGridSessionActionsRequestFormGroup() {
		return new FormGroup<ListTestGridSessionActionsRequestFormProperties>({
			sessionArn: new FormControl<string | null | undefined>(undefined),
			maxResult: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTestGridSessionArtifactsResult {
		artifacts?: Array<TestGridSessionArtifact>;
		nextToken?: string | null;
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
		filename?: string | null;
		type?: TestGridSessionArtifactType | null;
		url?: string | null;
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

	export enum TestGridSessionArtifactType { UNKNOWN = 0, VIDEO = 1, SELENIUM_LOG = 2 }

	export interface ListTestGridSessionArtifactsRequest {
		sessionArn: string;
		type?: ListTestGridSessionArtifactsRequestType | null;
		maxResult?: number | null;
		nextToken?: string | null;
	}
	export interface ListTestGridSessionArtifactsRequestFormProperties {
		sessionArn: FormControl<string | null | undefined>,
		type: FormControl<ListTestGridSessionArtifactsRequestType | null | undefined>,
		maxResult: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestGridSessionArtifactsRequestFormGroup() {
		return new FormGroup<ListTestGridSessionArtifactsRequestFormProperties>({
			sessionArn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ListTestGridSessionArtifactsRequestType | null | undefined>(undefined),
			maxResult: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ListTestGridSessionArtifactsRequestType { VIDEO = 0, LOG = 1 }

	export interface ListTestGridSessionsResult {
		testGridSessions?: Array<TestGridSession>;
		nextToken?: string | null;
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
		projectArn: string;
		status?: TestGridSessionStatus | null;
		creationTimeAfter?: Date | null;
		creationTimeBefore?: Date | null;
		endTimeAfter?: Date | null;
		endTimeBefore?: Date | null;
		maxResult?: number | null;
		nextToken?: string | null;
	}
	export interface ListTestGridSessionsRequestFormProperties {
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
			projectArn: new FormControl<string | null | undefined>(undefined),
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
		nextToken?: string | null;
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
		arn: string;
		nextToken?: string | null;
	}

	/** Represents a request to the list tests operation. */
	export interface ListTestsRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTestsRequestFormGroup() {
		return new FormGroup<ListTestsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list unique problems request. */
	export interface ListUniqueProblemsResult {
		uniqueProblems?: UniqueProblemsByExecutionResultMap;
		nextToken?: string | null;
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
		arn: string;
		nextToken?: string | null;
	}

	/** Represents a request to the list unique problems operation. */
	export interface ListUniqueProblemsRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUniqueProblemsRequestFormGroup() {
		return new FormGroup<ListUniqueProblemsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a list uploads request. */
	export interface ListUploadsResult {
		uploads?: Array<Upload>;
		nextToken?: string | null;
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
		arn: string;
		type?: UploadType | null;
		nextToken?: string | null;
	}

	/** Represents a request to the list uploads operation. */
	export interface ListUploadsRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		type: FormControl<UploadType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUploadsRequestFormGroup() {
		return new FormGroup<ListUploadsRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<UploadType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVPCEConfigurationsResult {
		vpceConfigurations?: Array<VPCEConfiguration>;
		nextToken?: string | null;
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
		nextToken?: string | null;
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

		/** Represents the metadata of an offering transaction. */
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
		offeringId?: string | null;
		quantity?: number | null;
		offeringPromotionId?: string | null;
	}

	/** Represents a request for a purchase offering. */
	export interface PurchaseOfferingRequestFormProperties {
		offeringId: FormControl<string | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		offeringPromotionId: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseOfferingRequestFormGroup() {
		return new FormGroup<PurchaseOfferingRequestFormProperties>({
			offeringId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			offeringPromotionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a renewal offering. */
	export interface RenewOfferingResult {

		/** Represents the metadata of an offering transaction. */
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
		offeringId?: string | null;
		quantity?: number | null;
	}

	/** A request that represents an offering renewal. */
	export interface RenewOfferingRequestFormProperties {
		offeringId: FormControl<string | null | undefined>,
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateRenewOfferingRequestFormGroup() {
		return new FormGroup<RenewOfferingRequestFormProperties>({
			offeringId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the result of a schedule run request. */
	export interface ScheduleRunResult {

		/** Represents a test run on a set of devices with a given app package, test parameters, and so on. */
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
		projectArn: string;
		appArn?: string | null;
		devicePoolArn?: string | null;

		/** Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>. */
		deviceSelectionConfiguration?: DeviceSelectionConfiguration;
		name?: string | null;

		/**
		 * Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>.
		 * Required
		 */
		test: ScheduleRunTest;

		/** Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles. */
		configuration?: ScheduleRunConfiguration;

		/** Represents configuration information about a test run, such as the execution timeout (in minutes). */
		executionConfiguration?: ExecutionConfiguration;
	}

	/** Represents a request to the schedule run operation. */
	export interface ScheduleRunRequestFormProperties {
		projectArn: FormControl<string | null | undefined>,
		appArn: FormControl<string | null | undefined>,
		devicePoolArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateScheduleRunRequestFormGroup() {
		return new FormGroup<ScheduleRunRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined),
			appArn: new FormControl<string | null | undefined>(undefined),
			devicePoolArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>. */
	export interface DeviceSelectionConfiguration {
		filters: Array<DeviceFilter>;
		maxDevices: number;
	}

	/** Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>. */
	export interface DeviceSelectionConfigurationFormProperties {
		maxDevices: FormControl<number | null | undefined>,
	}
	export function CreateDeviceSelectionConfigurationFormGroup() {
		return new FormGroup<DeviceSelectionConfigurationFormProperties>({
			maxDevices: new FormControl<number | null | undefined>(undefined),
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

		/** Represents a device. */
		job?: Job;
	}
	export interface StopJobResultFormProperties {
	}
	export function CreateStopJobResultFormGroup() {
		return new FormGroup<StopJobResultFormProperties>({
		});

	}

	export interface StopJobRequest {
		arn: string;
	}
	export interface StopJobRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateStopJobRequestFormGroup() {
		return new FormGroup<StopJobRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server that describes the remote access session when AWS Device Farm stops the session. */
	export interface StopRemoteAccessSessionResult {

		/** Represents information about the remote access session. */
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
		arn: string;
	}

	/** Represents the request to stop the remote access session. */
	export interface StopRemoteAccessSessionRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateStopRemoteAccessSessionRequestFormGroup() {
		return new FormGroup<StopRemoteAccessSessionRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the results of your stop run attempt. */
	export interface StopRunResult {

		/** Represents a test run on a set of devices with a given app package, test parameters, and so on. */
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
		arn: string;
	}

	/** Represents the request to stop a specific run. */
	export interface StopRunRequestFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateStopRunRequestFormGroup() {
		return new FormGroup<StopRunRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
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
		ResourceARN: string;
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
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
		ResourceARN: string;
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDeviceInstanceResult {

		/** Represents the device instance. */
		deviceInstance?: DeviceInstance;
	}
	export interface UpdateDeviceInstanceResultFormProperties {
	}
	export function CreateUpdateDeviceInstanceResultFormGroup() {
		return new FormGroup<UpdateDeviceInstanceResultFormProperties>({
		});

	}

	export interface UpdateDeviceInstanceRequest {
		arn: string;
		profileArn?: string | null;
		labels?: Array<string>;
	}
	export interface UpdateDeviceInstanceRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		profileArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeviceInstanceRequestFormGroup() {
		return new FormGroup<UpdateDeviceInstanceRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			profileArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of an update device pool request. */
	export interface UpdateDevicePoolResult {

		/** Represents a collection of device types. */
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
		arn: string;
		name?: string | null;
		description?: string | null;
		rules?: Array<Rule>;
		maxDevices?: number | null;
		clearMaxDevices?: boolean | null;
	}

	/** Represents a request to the update device pool operation. */
	export interface UpdateDevicePoolRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		maxDevices: FormControl<number | null | undefined>,
		clearMaxDevices: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDevicePoolRequestFormGroup() {
		return new FormGroup<UpdateDevicePoolRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			maxDevices: new FormControl<number | null | undefined>(undefined),
			clearMaxDevices: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateInstanceProfileResult {

		/** Represents the instance profile. */
		instanceProfile?: InstanceProfile;
	}
	export interface UpdateInstanceProfileResultFormProperties {
	}
	export function CreateUpdateInstanceProfileResultFormGroup() {
		return new FormGroup<UpdateInstanceProfileResultFormProperties>({
		});

	}

	export interface UpdateInstanceProfileRequest {
		arn: string;
		name?: string | null;
		description?: string | null;
		packageCleanup?: boolean | null;
		excludeAppPackagesFromCleanup?: Array<string>;
		rebootAfterUse?: boolean | null;
	}
	export interface UpdateInstanceProfileRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		packageCleanup: FormControl<boolean | null | undefined>,
		rebootAfterUse: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateInstanceProfileRequestFormGroup() {
		return new FormGroup<UpdateInstanceProfileRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			packageCleanup: new FormControl<boolean | null | undefined>(undefined),
			rebootAfterUse: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkProfileResult {

		/** An array of settings that describes characteristics of a network profile. */
		networkProfile?: NetworkProfile;
	}
	export interface UpdateNetworkProfileResultFormProperties {
	}
	export function CreateUpdateNetworkProfileResultFormGroup() {
		return new FormGroup<UpdateNetworkProfileResultFormProperties>({
		});

	}

	export interface UpdateNetworkProfileRequest {
		arn: string;
		name?: string | null;
		description?: string | null;
		type?: DevicePoolType | null;
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


	/** Represents the result of an update project request. */
	export interface UpdateProjectResult {

		/** Represents an operating-system neutral workspace for running and managing tests. */
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
		arn: string;
		name?: string | null;
		defaultJobTimeoutMinutes?: number | null;
	}

	/** Represents a request to the update project operation. */
	export interface UpdateProjectRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		defaultJobTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateProjectRequestFormGroup() {
		return new FormGroup<UpdateProjectRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			defaultJobTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateTestGridProjectResult {

		/** A Selenium testing project. Projects are used to collect and collate sessions. */
		testGridProject?: TestGridProject;
	}
	export interface UpdateTestGridProjectResultFormProperties {
	}
	export function CreateUpdateTestGridProjectResultFormGroup() {
		return new FormGroup<UpdateTestGridProjectResultFormProperties>({
		});

	}

	export interface UpdateTestGridProjectRequest {
		projectArn: string;
		name?: string | null;
		description?: string | null;
	}
	export interface UpdateTestGridProjectRequestFormProperties {
		projectArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTestGridProjectRequestFormGroup() {
		return new FormGroup<UpdateTestGridProjectRequestFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateUploadResult {

		/** An app or a set of one or more tests to upload or that have been uploaded. */
		upload?: Upload;
	}
	export interface UpdateUploadResultFormProperties {
	}
	export function CreateUpdateUploadResultFormGroup() {
		return new FormGroup<UpdateUploadResultFormProperties>({
		});

	}

	export interface UpdateUploadRequest {
		arn: string;
		name?: string | null;
		contentType?: string | null;
		editContent?: boolean | null;
	}
	export interface UpdateUploadRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		contentType: FormControl<string | null | undefined>,
		editContent: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateUploadRequestFormGroup() {
		return new FormGroup<UpdateUploadRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			editContent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateVPCEConfigurationResult {

		/** Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration. */
		vpceConfiguration?: VPCEConfiguration;
	}
	export interface UpdateVPCEConfigurationResultFormProperties {
	}
	export function CreateUpdateVPCEConfigurationResultFormGroup() {
		return new FormGroup<UpdateVPCEConfigurationResultFormProperties>({
		});

	}

	export interface UpdateVPCEConfigurationRequest {
		arn: string;
		vpceConfigurationName?: string | null;
		vpceServiceName?: string | null;
		serviceDnsName?: string | null;
		vpceConfigurationDescription?: string | null;
	}
	export interface UpdateVPCEConfigurationRequestFormProperties {
		arn: FormControl<string | null | undefined>,
		vpceConfigurationName: FormControl<string | null | undefined>,
		vpceServiceName: FormControl<string | null | undefined>,
		serviceDnsName: FormControl<string | null | undefined>,
		vpceConfigurationDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVPCEConfigurationRequestFormGroup() {
		return new FormGroup<UpdateVPCEConfigurationRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			vpceConfigurationName: new FormControl<string | null | undefined>(undefined),
			vpceServiceName: new FormControl<string | null | undefined>(undefined),
			serviceDnsName: new FormControl<string | null | undefined>(undefined),
			vpceConfigurationDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ArtifactCategory { SCREENSHOT = 0, FILE = 1, LOG = 2 }

	export enum BillingMethod { METERED = 0, UNMETERED = 1 }

	export enum NetworkProfileType { CURATED = 0, PRIVATE = 1 }

	export enum InteractionMode { INTERACTIVE = 0, NO_VIDEO = 1, VIDEO_ONLY = 2 }

	export enum CurrencyCode { USD = 0 }

	export enum DeviceAttribute { ARN = 0, PLATFORM = 1, FORM_FACTOR = 2, MANUFACTURER = 3, REMOTE_ACCESS_ENABLED = 4, REMOTE_DEBUG_ENABLED = 5, APPIUM_VERSION = 6, INSTANCE_ARN = 7, INSTANCE_LABELS = 8, FLEET_TYPE = 9, OS_VERSION = 10, MODEL = 11, AVAILABILITY = 12 }

	export enum InstanceStatus { IN_USE = 0, PREPARING = 1, AVAILABLE = 2, NOT_AVAILABLE = 3 }

	export enum ExecutionResult { PENDING = 0, PASSED = 1, WARNED = 2, FAILED = 3, SKIPPED = 4, ERRORED = 5, STOPPED = 6 }

	export enum ExecutionResultCode { PARSING_FAILED = 0, VPC_ENDPOINT_SETUP_FAILED = 1 }

	export enum ExecutionStatus { PENDING = 0, PENDING_CONCURRENCY = 1, PENDING_DEVICE = 2, PROCESSING = 3, SCHEDULING = 4, PREPARING = 5, RUNNING = 6, COMPLETED = 7, STOPPING = 8 }

	export enum TestType { BUILTIN_FUZZ = 0, BUILTIN_EXPLORER = 1, WEB_PERFORMANCE_PROFILE = 2, APPIUM_JAVA_JUNIT = 3, APPIUM_JAVA_TESTNG = 4, APPIUM_PYTHON = 5, APPIUM_NODE = 6, APPIUM_RUBY = 7, APPIUM_WEB_JAVA_JUNIT = 8, APPIUM_WEB_JAVA_TESTNG = 9, APPIUM_WEB_PYTHON = 10, APPIUM_WEB_NODE = 11, APPIUM_WEB_RUBY = 12, CALABASH = 13, INSTRUMENTATION = 14, UIAUTOMATION = 15, UIAUTOMATOR = 16, XCTEST = 17, XCTEST_UI = 18, REMOTE_ACCESS_RECORD = 19, REMOTE_ACCESS_REPLAY = 20 }

	export enum TestGridSessionArtifactCategory { VIDEO = 0, LOG = 1 }

	export enum OfferingTransactionType { PURCHASE = 0, RENEW = 1, SYSTEM = 2 }


	/** Information about a problem detail. */
	export interface ProblemDetail {
		arn?: string | null;
		name?: string | null;
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

		/** Information about a problem detail. */
		run?: ProblemDetail;

		/** Information about a problem detail. */
		job?: ProblemDetail;

		/** Information about a problem detail. */
		suite?: ProblemDetail;

		/** Information about a problem detail. */
		test?: ProblemDetail;

		/** Represents a device type that an app is tested against. */
		device?: Device;
		result?: RemoteAccessSessionResult | null;
		message?: string | null;
	}

	/** Represents a specific warning or failure. */
	export interface ProblemFormProperties {
		result: FormControl<RemoteAccessSessionResult | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateProblemFormGroup() {
		return new FormGroup<ProblemFormProperties>({
			result: new FormControl<RemoteAccessSessionResult | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of one or more problems, grouped by their result. */
	export interface UniqueProblem {
		message?: string | null;
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

	export enum UploadCategory { CURATED = 0, PRIVATE = 1 }

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

	export enum CreateDevicePoolX_Amz_Target { DeviceFarm_20150623_CreateDevicePool = 0 }

	export enum CreateInstanceProfileX_Amz_Target { DeviceFarm_20150623_CreateInstanceProfile = 0 }

	export enum CreateNetworkProfileX_Amz_Target { DeviceFarm_20150623_CreateNetworkProfile = 0 }

	export enum CreateProjectX_Amz_Target { DeviceFarm_20150623_CreateProject = 0 }

	export enum CreateRemoteAccessSessionX_Amz_Target { DeviceFarm_20150623_CreateRemoteAccessSession = 0 }

	export enum CreateTestGridProjectX_Amz_Target { DeviceFarm_20150623_CreateTestGridProject = 0 }

	export enum CreateTestGridUrlX_Amz_Target { DeviceFarm_20150623_CreateTestGridUrl = 0 }

	export enum CreateUploadX_Amz_Target { DeviceFarm_20150623_CreateUpload = 0 }

	export enum CreateVPCEConfigurationX_Amz_Target { DeviceFarm_20150623_CreateVPCEConfiguration = 0 }

	export enum DeleteDevicePoolX_Amz_Target { DeviceFarm_20150623_DeleteDevicePool = 0 }

	export enum DeleteInstanceProfileX_Amz_Target { DeviceFarm_20150623_DeleteInstanceProfile = 0 }

	export enum DeleteNetworkProfileX_Amz_Target { DeviceFarm_20150623_DeleteNetworkProfile = 0 }

	export enum DeleteProjectX_Amz_Target { DeviceFarm_20150623_DeleteProject = 0 }

	export enum DeleteRemoteAccessSessionX_Amz_Target { DeviceFarm_20150623_DeleteRemoteAccessSession = 0 }

	export enum DeleteRunX_Amz_Target { DeviceFarm_20150623_DeleteRun = 0 }

	export enum DeleteTestGridProjectX_Amz_Target { DeviceFarm_20150623_DeleteTestGridProject = 0 }

	export enum DeleteUploadX_Amz_Target { DeviceFarm_20150623_DeleteUpload = 0 }

	export enum DeleteVPCEConfigurationX_Amz_Target { DeviceFarm_20150623_DeleteVPCEConfiguration = 0 }

	export enum GetAccountSettingsX_Amz_Target { DeviceFarm_20150623_GetAccountSettings = 0 }

	export enum GetDeviceX_Amz_Target { DeviceFarm_20150623_GetDevice = 0 }

	export enum GetDeviceInstanceX_Amz_Target { DeviceFarm_20150623_GetDeviceInstance = 0 }

	export enum GetDevicePoolX_Amz_Target { DeviceFarm_20150623_GetDevicePool = 0 }

	export enum GetDevicePoolCompatibilityX_Amz_Target { DeviceFarm_20150623_GetDevicePoolCompatibility = 0 }

	export enum GetInstanceProfileX_Amz_Target { DeviceFarm_20150623_GetInstanceProfile = 0 }

	export enum GetJobX_Amz_Target { DeviceFarm_20150623_GetJob = 0 }

	export enum GetNetworkProfileX_Amz_Target { DeviceFarm_20150623_GetNetworkProfile = 0 }

	export enum GetOfferingStatusX_Amz_Target { DeviceFarm_20150623_GetOfferingStatus = 0 }

	export enum GetProjectX_Amz_Target { DeviceFarm_20150623_GetProject = 0 }

	export enum GetRemoteAccessSessionX_Amz_Target { DeviceFarm_20150623_GetRemoteAccessSession = 0 }

	export enum GetRunX_Amz_Target { DeviceFarm_20150623_GetRun = 0 }

	export enum GetSuiteX_Amz_Target { DeviceFarm_20150623_GetSuite = 0 }

	export enum GetTestX_Amz_Target { DeviceFarm_20150623_GetTest = 0 }

	export enum GetTestGridProjectX_Amz_Target { DeviceFarm_20150623_GetTestGridProject = 0 }

	export enum GetTestGridSessionX_Amz_Target { DeviceFarm_20150623_GetTestGridSession = 0 }

	export enum GetUploadX_Amz_Target { DeviceFarm_20150623_GetUpload = 0 }

	export enum GetVPCEConfigurationX_Amz_Target { DeviceFarm_20150623_GetVPCEConfiguration = 0 }

	export enum InstallToRemoteAccessSessionX_Amz_Target { DeviceFarm_20150623_InstallToRemoteAccessSession = 0 }

	export enum ListArtifactsX_Amz_Target { DeviceFarm_20150623_ListArtifacts = 0 }

	export enum ListDeviceInstancesX_Amz_Target { DeviceFarm_20150623_ListDeviceInstances = 0 }

	export enum ListDevicePoolsX_Amz_Target { DeviceFarm_20150623_ListDevicePools = 0 }

	export enum ListDevicesX_Amz_Target { DeviceFarm_20150623_ListDevices = 0 }

	export enum ListInstanceProfilesX_Amz_Target { DeviceFarm_20150623_ListInstanceProfiles = 0 }

	export enum ListJobsX_Amz_Target { DeviceFarm_20150623_ListJobs = 0 }

	export enum ListNetworkProfilesX_Amz_Target { DeviceFarm_20150623_ListNetworkProfiles = 0 }

	export enum ListOfferingPromotionsX_Amz_Target { DeviceFarm_20150623_ListOfferingPromotions = 0 }

	export enum ListOfferingTransactionsX_Amz_Target { DeviceFarm_20150623_ListOfferingTransactions = 0 }

	export enum ListOfferingsX_Amz_Target { DeviceFarm_20150623_ListOfferings = 0 }

	export enum ListProjectsX_Amz_Target { DeviceFarm_20150623_ListProjects = 0 }

	export enum ListRemoteAccessSessionsX_Amz_Target { DeviceFarm_20150623_ListRemoteAccessSessions = 0 }

	export enum ListRunsX_Amz_Target { DeviceFarm_20150623_ListRuns = 0 }

	export enum ListSamplesX_Amz_Target { DeviceFarm_20150623_ListSamples = 0 }

	export enum ListSuitesX_Amz_Target { DeviceFarm_20150623_ListSuites = 0 }

	export enum ListTagsForResourceX_Amz_Target { DeviceFarm_20150623_ListTagsForResource = 0 }

	export enum ListTestGridProjectsX_Amz_Target { DeviceFarm_20150623_ListTestGridProjects = 0 }

	export enum ListTestGridSessionActionsX_Amz_Target { DeviceFarm_20150623_ListTestGridSessionActions = 0 }

	export enum ListTestGridSessionArtifactsX_Amz_Target { DeviceFarm_20150623_ListTestGridSessionArtifacts = 0 }

	export enum ListTestGridSessionsX_Amz_Target { DeviceFarm_20150623_ListTestGridSessions = 0 }

	export enum ListTestsX_Amz_Target { DeviceFarm_20150623_ListTests = 0 }

	export enum ListUniqueProblemsX_Amz_Target { DeviceFarm_20150623_ListUniqueProblems = 0 }

	export enum ListUploadsX_Amz_Target { DeviceFarm_20150623_ListUploads = 0 }

	export enum ListVPCEConfigurationsX_Amz_Target { DeviceFarm_20150623_ListVPCEConfigurations = 0 }

	export enum PurchaseOfferingX_Amz_Target { DeviceFarm_20150623_PurchaseOffering = 0 }

	export enum RenewOfferingX_Amz_Target { DeviceFarm_20150623_RenewOffering = 0 }

	export enum ScheduleRunX_Amz_Target { DeviceFarm_20150623_ScheduleRun = 0 }

	export enum StopJobX_Amz_Target { DeviceFarm_20150623_StopJob = 0 }

	export enum StopRemoteAccessSessionX_Amz_Target { DeviceFarm_20150623_StopRemoteAccessSession = 0 }

	export enum StopRunX_Amz_Target { DeviceFarm_20150623_StopRun = 0 }

	export enum TagResourceX_Amz_Target { DeviceFarm_20150623_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { DeviceFarm_20150623_UntagResource = 0 }

	export enum UpdateDeviceInstanceX_Amz_Target { DeviceFarm_20150623_UpdateDeviceInstance = 0 }

	export enum UpdateDevicePoolX_Amz_Target { DeviceFarm_20150623_UpdateDevicePool = 0 }

	export enum UpdateInstanceProfileX_Amz_Target { DeviceFarm_20150623_UpdateInstanceProfile = 0 }

	export enum UpdateNetworkProfileX_Amz_Target { DeviceFarm_20150623_UpdateNetworkProfile = 0 }

	export enum UpdateProjectX_Amz_Target { DeviceFarm_20150623_UpdateProject = 0 }

	export enum UpdateTestGridProjectX_Amz_Target { DeviceFarm_20150623_UpdateTestGridProject = 0 }

	export enum UpdateUploadX_Amz_Target { DeviceFarm_20150623_UpdateUpload = 0 }

	export enum UpdateVPCEConfigurationX_Amz_Target { DeviceFarm_20150623_UpdateVPCEConfiguration = 0 }

}

