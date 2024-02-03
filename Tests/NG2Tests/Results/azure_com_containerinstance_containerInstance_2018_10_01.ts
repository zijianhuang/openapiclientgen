import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The properties of the Azure File volume. Azure File shares are mounted as volumes. */
	export interface AzureFileVolume {

		/** The flag indicating whether the Azure File shared mounted as a volume is read-only. */
		readOnly?: boolean | null;

		/**
		 * The name of the Azure File share to be mounted as a volume.
		 * Required
		 */
		shareName: string;

		/** The storage account access key used to access the Azure File share. */
		storageAccountKey?: string | null;

		/**
		 * The name of the storage account that contains the Azure File share.
		 * Required
		 */
		storageAccountName: string;
	}

	/** The properties of the Azure File volume. Azure File shares are mounted as volumes. */
	export interface AzureFileVolumeFormProperties {

		/** The flag indicating whether the Azure File shared mounted as a volume is read-only. */
		readOnly: FormControl<boolean | null | undefined>,

		/**
		 * The name of the Azure File share to be mounted as a volume.
		 * Required
		 */
		shareName: FormControl<string | null | undefined>,

		/** The storage account access key used to access the Azure File share. */
		storageAccountKey: FormControl<string | null | undefined>,

		/**
		 * The name of the storage account that contains the Azure File share.
		 * Required
		 */
		storageAccountName: FormControl<string | null | undefined>,
	}
	export function CreateAzureFileVolumeFormGroup() {
		return new FormGroup<AzureFileVolumeFormProperties>({
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			shareName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storageAccountKey: new FormControl<string | null | undefined>(undefined),
			storageAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response containing cached images. */
	export interface CachedImagesListResult {

		/** The URI to fetch the next page of cached images. */
		nextLink?: string | null;

		/** The list of cached images. */
		value?: Array<CachedImages>;
	}

	/** The response containing cached images. */
	export interface CachedImagesListResultFormProperties {

		/** The URI to fetch the next page of cached images. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCachedImagesListResultFormGroup() {
		return new FormGroup<CachedImagesListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The cached image and OS type. */
	export interface CachedImages {

		/** The resource Id of the cached image. */
		id?: string | null;

		/**
		 * The cached image name.
		 * Required
		 */
		image: string;

		/**
		 * The OS type of the cached image.
		 * Required
		 */
		osType: string;
	}

	/** The cached image and OS type. */
	export interface CachedImagesFormProperties {

		/** The resource Id of the cached image. */
		id: FormControl<string | null | undefined>,

		/**
		 * The cached image name.
		 * Required
		 */
		image: FormControl<string | null | undefined>,

		/**
		 * The OS type of the cached image.
		 * Required
		 */
		osType: FormControl<string | null | undefined>,
	}
	export function CreateCachedImagesFormGroup() {
		return new FormGroup<CachedImagesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			osType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The regional capabilities. */
	export interface Capabilities {

		/** The supported capabilities. */
		capabilities?: CapabilitiesCapabilities;

		/** The GPU sku that this capability describes. */
		gpu?: string | null;

		/** The ip address type that this capability describes. */
		ipAddressType?: string | null;

		/** The resource location. */
		location?: string | null;

		/** The OS type that this capability describes. */
		osType?: string | null;

		/** The resource type that this capability describes. */
		resourceType?: string | null;
	}

	/** The regional capabilities. */
	export interface CapabilitiesFormProperties {

		/** The GPU sku that this capability describes. */
		gpu: FormControl<string | null | undefined>,

		/** The ip address type that this capability describes. */
		ipAddressType: FormControl<string | null | undefined>,

		/** The resource location. */
		location: FormControl<string | null | undefined>,

		/** The OS type that this capability describes. */
		osType: FormControl<string | null | undefined>,

		/** The resource type that this capability describes. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateCapabilitiesFormGroup() {
		return new FormGroup<CapabilitiesFormProperties>({
			gpu: new FormControl<string | null | undefined>(undefined),
			ipAddressType: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CapabilitiesCapabilities {

		/** The maximum allowed CPU request in cores. */
		maxCpu?: number | null;

		/** The maximum allowed GPU count. */
		maxGpuCount?: number | null;

		/** The maximum allowed memory request in GB. */
		maxMemoryInGB?: number | null;
	}
	export interface CapabilitiesCapabilitiesFormProperties {

		/** The maximum allowed CPU request in cores. */
		maxCpu: FormControl<number | null | undefined>,

		/** The maximum allowed GPU count. */
		maxGpuCount: FormControl<number | null | undefined>,

		/** The maximum allowed memory request in GB. */
		maxMemoryInGB: FormControl<number | null | undefined>,
	}
	export function CreateCapabilitiesCapabilitiesFormGroup() {
		return new FormGroup<CapabilitiesCapabilitiesFormProperties>({
			maxCpu: new FormControl<number | null | undefined>(undefined),
			maxGpuCount: new FormControl<number | null | undefined>(undefined),
			maxMemoryInGB: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response containing list of capabilities. */
	export interface CapabilitiesListResult {

		/** The URI to fetch the next page of capabilities. */
		nextLink?: string | null;

		/** The list of capabilities. */
		value?: Array<Capabilities>;
	}

	/** The response containing list of capabilities. */
	export interface CapabilitiesListResultFormProperties {

		/** The URI to fetch the next page of capabilities. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCapabilitiesListResultFormGroup() {
		return new FormGroup<CapabilitiesListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error response from the Batch service. */
	export interface CloudError {

		/** An error response from the Batch service. */
		error?: CloudErrorBody;
	}

	/** An error response from the Batch service. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** An error response from the Batch service. */
	export interface CloudErrorBody {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A list of additional details about the error. */
		details?: Array<CloudErrorBody>;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;

		/** The target of the particular error. For example, the name of the property in error. */
		target?: string | null;
	}

	/** An error response from the Batch service. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. For example, the name of the property in error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container instance. */
	export interface Container {

		/**
		 * The user-provided name of the container instance.
		 * Required
		 */
		name: string;

		/**
		 * The container instance properties.
		 * Required
		 */
		properties: ContainerProperties;
	}

	/** A container instance. */
	export interface ContainerFormProperties {

		/**
		 * The user-provided name of the container instance.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateContainerFormGroup() {
		return new FormGroup<ContainerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The container instance properties. */
	export interface ContainerProperties {

		/** The commands to execute within the container instance in exec form. */
		command?: Array<string>;

		/** The environment variables to set in the container instance. */
		environmentVariables?: Array<EnvironmentVariable>;

		/**
		 * The name of the image used to create the container instance.
		 * Required
		 */
		image: string;

		/** The instance view of the container instance. Only valid in response. */
		instanceView?: ContainerPropertiesInstanceView;

		/** The container probe, for liveness or readiness */
		livenessProbe?: ContainerProbe;

		/** The exposed ports on the container instance. */
		ports?: Array<ContainerPort>;

		/** The container probe, for liveness or readiness */
		readinessProbe?: ContainerProbe;

		/**
		 * The resource requirements.
		 * Required
		 */
		resources: ResourceRequirements;

		/** The volume mounts available to the container instance. */
		volumeMounts?: Array<VolumeMount>;
	}

	/** The container instance properties. */
	export interface ContainerPropertiesFormProperties {

		/**
		 * The name of the image used to create the container instance.
		 * Required
		 */
		image: FormControl<string | null | undefined>,
	}
	export function CreateContainerPropertiesFormGroup() {
		return new FormGroup<ContainerPropertiesFormProperties>({
			image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The environment variable to set within the container instance. */
	export interface EnvironmentVariable {

		/**
		 * The name of the environment variable.
		 * Required
		 */
		name: string;

		/** The value of the secure environment variable. */
		secureValue?: string | null;

		/** The value of the environment variable. */
		value?: string | null;
	}

	/** The environment variable to set within the container instance. */
	export interface EnvironmentVariableFormProperties {

		/**
		 * The name of the environment variable.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The value of the secure environment variable. */
		secureValue: FormControl<string | null | undefined>,

		/** The value of the environment variable. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentVariableFormGroup() {
		return new FormGroup<EnvironmentVariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secureValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainerPropertiesInstanceView {

		/** The container instance state. */
		currentState?: ContainerState;

		/** The events of the container instance. */
		events?: Array<Event>;

		/** The container instance state. */
		previousState?: ContainerState;

		/** The number of times that the container instance has been restarted. */
		restartCount?: number | null;
	}
	export interface ContainerPropertiesInstanceViewFormProperties {

		/** The number of times that the container instance has been restarted. */
		restartCount: FormControl<number | null | undefined>,
	}
	export function CreateContainerPropertiesInstanceViewFormGroup() {
		return new FormGroup<ContainerPropertiesInstanceViewFormProperties>({
			restartCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The container instance state. */
	export interface ContainerState {

		/** The human-readable status of the container instance state. */
		detailStatus?: string | null;

		/** The container instance exit codes correspond to those from the `docker run` command. */
		exitCode?: number | null;

		/** The date-time when the container instance state finished. */
		finishTime?: Date | null;

		/** The date-time when the container instance state started. */
		startTime?: Date | null;

		/** The state of the container instance. */
		state?: string | null;
	}

	/** The container instance state. */
	export interface ContainerStateFormProperties {

		/** The human-readable status of the container instance state. */
		detailStatus: FormControl<string | null | undefined>,

		/** The container instance exit codes correspond to those from the `docker run` command. */
		exitCode: FormControl<number | null | undefined>,

		/** The date-time when the container instance state finished. */
		finishTime: FormControl<Date | null | undefined>,

		/** The date-time when the container instance state started. */
		startTime: FormControl<Date | null | undefined>,

		/** The state of the container instance. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateContainerStateFormGroup() {
		return new FormGroup<ContainerStateFormProperties>({
			detailStatus: new FormControl<string | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			finishTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container group or container instance event. */
	export interface Event {

		/** The count of the event. */
		count?: number | null;

		/** The date-time of the earliest logged event. */
		firstTimestamp?: Date | null;

		/** The date-time of the latest logged event. */
		lastTimestamp?: Date | null;

		/** The event message. */
		message?: string | null;

		/** The event name. */
		name?: string | null;

		/** The event type. */
		type?: string | null;
	}

	/** A container group or container instance event. */
	export interface EventFormProperties {

		/** The count of the event. */
		count: FormControl<number | null | undefined>,

		/** The date-time of the earliest logged event. */
		firstTimestamp: FormControl<Date | null | undefined>,

		/** The date-time of the latest logged event. */
		lastTimestamp: FormControl<Date | null | undefined>,

		/** The event message. */
		message: FormControl<string | null | undefined>,

		/** The event name. */
		name: FormControl<string | null | undefined>,

		/** The event type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			firstTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastTimestamp: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The container probe, for liveness or readiness */
	export interface ContainerProbe {

		/** The container execution command, for liveness or readiness probe */
		exec?: ContainerExec;

		/** The failure threshold. */
		failureThreshold?: number | null;

		/** The container Http Get settings, for liveness or readiness probe */
		httpGet?: ContainerHttpGet;

		/** The initial delay seconds. */
		initialDelaySeconds?: number | null;

		/** The period seconds. */
		periodSeconds?: number | null;

		/** The success threshold. */
		successThreshold?: number | null;

		/** The timeout seconds. */
		timeoutSeconds?: number | null;
	}

	/** The container probe, for liveness or readiness */
	export interface ContainerProbeFormProperties {

		/** The failure threshold. */
		failureThreshold: FormControl<number | null | undefined>,

		/** The initial delay seconds. */
		initialDelaySeconds: FormControl<number | null | undefined>,

		/** The period seconds. */
		periodSeconds: FormControl<number | null | undefined>,

		/** The success threshold. */
		successThreshold: FormControl<number | null | undefined>,

		/** The timeout seconds. */
		timeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateContainerProbeFormGroup() {
		return new FormGroup<ContainerProbeFormProperties>({
			failureThreshold: new FormControl<number | null | undefined>(undefined),
			initialDelaySeconds: new FormControl<number | null | undefined>(undefined),
			periodSeconds: new FormControl<number | null | undefined>(undefined),
			successThreshold: new FormControl<number | null | undefined>(undefined),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The container execution command, for liveness or readiness probe */
	export interface ContainerExec {

		/** The commands to execute within the container. */
		command?: Array<string>;
	}

	/** The container execution command, for liveness or readiness probe */
	export interface ContainerExecFormProperties {
	}
	export function CreateContainerExecFormGroup() {
		return new FormGroup<ContainerExecFormProperties>({
		});

	}


	/** The container Http Get settings, for liveness or readiness probe */
	export interface ContainerHttpGet {

		/** The path to probe. */
		path?: string | null;

		/**
		 * The port number to probe.
		 * Required
		 */
		port: number;

		/** The scheme. */
		scheme?: ContainerHttpGetScheme | null;
	}

	/** The container Http Get settings, for liveness or readiness probe */
	export interface ContainerHttpGetFormProperties {

		/** The path to probe. */
		path: FormControl<string | null | undefined>,

		/**
		 * The port number to probe.
		 * Required
		 */
		port: FormControl<number | null | undefined>,

		/** The scheme. */
		scheme: FormControl<ContainerHttpGetScheme | null | undefined>,
	}
	export function CreateContainerHttpGetFormGroup() {
		return new FormGroup<ContainerHttpGetFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			scheme: new FormControl<ContainerHttpGetScheme | null | undefined>(undefined),
		});

	}

	export enum ContainerHttpGetScheme { http = 'http', https = 'https' }


	/** The port exposed on the container instance. */
	export interface ContainerPort {

		/**
		 * The port number exposed within the container group.
		 * Required
		 */
		port: number;

		/** The protocol associated with the port. */
		protocol?: ContainerPortProtocol | null;
	}

	/** The port exposed on the container instance. */
	export interface ContainerPortFormProperties {

		/**
		 * The port number exposed within the container group.
		 * Required
		 */
		port: FormControl<number | null | undefined>,

		/** The protocol associated with the port. */
		protocol: FormControl<ContainerPortProtocol | null | undefined>,
	}
	export function CreateContainerPortFormGroup() {
		return new FormGroup<ContainerPortFormProperties>({
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<ContainerPortProtocol | null | undefined>(undefined),
		});

	}

	export enum ContainerPortProtocol { TCP = 'TCP', UDP = 'UDP' }


	/** The resource requirements. */
	export interface ResourceRequirements {

		/** The resource limits. */
		limits?: ResourceLimits;

		/**
		 * The resource requests.
		 * Required
		 */
		requests: ResourceRequests;
	}

	/** The resource requirements. */
	export interface ResourceRequirementsFormProperties {
	}
	export function CreateResourceRequirementsFormGroup() {
		return new FormGroup<ResourceRequirementsFormProperties>({
		});

	}


	/** The resource limits. */
	export interface ResourceLimits {

		/** The CPU limit of this container instance. */
		cpu?: number | null;

		/** The GPU resource. */
		gpu?: GpuResource;

		/** The memory limit in GB of this container instance. */
		memoryInGB?: number | null;
	}

	/** The resource limits. */
	export interface ResourceLimitsFormProperties {

		/** The CPU limit of this container instance. */
		cpu: FormControl<number | null | undefined>,

		/** The memory limit in GB of this container instance. */
		memoryInGB: FormControl<number | null | undefined>,
	}
	export function CreateResourceLimitsFormGroup() {
		return new FormGroup<ResourceLimitsFormProperties>({
			cpu: new FormControl<number | null | undefined>(undefined),
			memoryInGB: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The GPU resource. */
	export interface GpuResource {

		/**
		 * The count of the GPU resource.
		 * Required
		 */
		count: number;

		/**
		 * The SKU of the GPU resource.
		 * Required
		 */
		sku: GpuResourceSku;
	}

	/** The GPU resource. */
	export interface GpuResourceFormProperties {

		/**
		 * The count of the GPU resource.
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The SKU of the GPU resource.
		 * Required
		 */
		sku: FormControl<GpuResourceSku | null | undefined>,
	}
	export function CreateGpuResourceFormGroup() {
		return new FormGroup<GpuResourceFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sku: new FormControl<GpuResourceSku | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GpuResourceSku { K80 = 'K80', P100 = 'P100', V100 = 'V100' }


	/** The resource requests. */
	export interface ResourceRequests {

		/**
		 * The CPU request of this container instance.
		 * Required
		 */
		cpu: number;

		/** The GPU resource. */
		gpu?: GpuResource;

		/**
		 * The memory request in GB of this container instance.
		 * Required
		 */
		memoryInGB: number;
	}

	/** The resource requests. */
	export interface ResourceRequestsFormProperties {

		/**
		 * The CPU request of this container instance.
		 * Required
		 */
		cpu: FormControl<number | null | undefined>,

		/**
		 * The memory request in GB of this container instance.
		 * Required
		 */
		memoryInGB: FormControl<number | null | undefined>,
	}
	export function CreateResourceRequestsFormGroup() {
		return new FormGroup<ResourceRequestsFormProperties>({
			cpu: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			memoryInGB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of the volume mount. */
	export interface VolumeMount {

		/**
		 * The path within the container where the volume should be mounted. Must not contain colon (:).
		 * Required
		 */
		mountPath: string;

		/**
		 * The name of the volume mount.
		 * Required
		 */
		name: string;

		/** The flag indicating whether the volume mount is read-only. */
		readOnly?: boolean | null;
	}

	/** The properties of the volume mount. */
	export interface VolumeMountFormProperties {

		/**
		 * The path within the container where the volume should be mounted. Must not contain colon (:).
		 * Required
		 */
		mountPath: FormControl<string | null | undefined>,

		/**
		 * The name of the volume mount.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The flag indicating whether the volume mount is read-only. */
		readOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateVolumeMountFormGroup() {
		return new FormGroup<VolumeMountFormProperties>({
			mountPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The container exec request. */
	export interface ContainerExecRequest {

		/** The command to be executed. */
		command?: string | null;

		/** The size of the terminal. */
		terminalSize?: ContainerExecRequestTerminalSize;
	}

	/** The container exec request. */
	export interface ContainerExecRequestFormProperties {

		/** The command to be executed. */
		command: FormControl<string | null | undefined>,
	}
	export function CreateContainerExecRequestFormGroup() {
		return new FormGroup<ContainerExecRequestFormProperties>({
			command: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainerExecRequestTerminalSize {

		/** The column size of the terminal */
		cols?: number | null;

		/** The row size of the terminal */
		rows?: number | null;
	}
	export interface ContainerExecRequestTerminalSizeFormProperties {

		/** The column size of the terminal */
		cols: FormControl<number | null | undefined>,

		/** The row size of the terminal */
		rows: FormControl<number | null | undefined>,
	}
	export function CreateContainerExecRequestTerminalSizeFormGroup() {
		return new FormGroup<ContainerExecRequestTerminalSizeFormProperties>({
			cols: new FormControl<number | null | undefined>(undefined),
			rows: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The information for the container exec command. */
	export interface ContainerExecResponse {

		/** The password to start the exec command. */
		password?: string | null;

		/** The uri for the exec websocket. */
		webSocketUri?: string | null;
	}

	/** The information for the container exec command. */
	export interface ContainerExecResponseFormProperties {

		/** The password to start the exec command. */
		password: FormControl<string | null | undefined>,

		/** The uri for the exec websocket. */
		webSocketUri: FormControl<string | null | undefined>,
	}
	export function CreateContainerExecResponseFormGroup() {
		return new FormGroup<ContainerExecResponseFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			webSocketUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container group. */
	export interface ContainerGroup extends Resource {

		/** Identity for the container group. */
		identity?: ContainerGroupIdentity;

		/** Required */
		properties: ContainerGroupProperties;
	}

	/** A container group. */
	export interface ContainerGroupFormProperties extends ResourceFormProperties {
	}
	export function CreateContainerGroupFormGroup() {
		return new FormGroup<ContainerGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainerGroupProperties {

		/**
		 * The containers within the container group.
		 * Required
		 */
		containers: Array<Container>;

		/** Container group diagnostic information. */
		diagnostics?: ContainerGroupDiagnostics;

		/** DNS configuration for the container group. */
		dnsConfig?: DnsConfiguration;

		/** The image registry credentials by which the container group is created from. */
		imageRegistryCredentials?: Array<ImageRegistryCredential>;

		/** The instance view of the container group. Only valid in response. */
		instanceView?: ContainerGroupPropertiesInstanceView;

		/** IP address for the container group. */
		ipAddress?: IpAddress;

		/** Container group network profile information. */
		networkProfile?: ContainerGroupNetworkProfile;

		/**
		 * The operating system type required by the containers in the container group.
		 * Required
		 */
		osType: ContainerGroupPropertiesOsType;

		/** The provisioning state of the container group. This only appears in the response. */
		provisioningState?: string | null;

		/**
		 * Restart policy for all containers within the container group.
		 * - `Always` Always restart
		 * - `OnFailure` Restart on failure
		 * - `Never` Never restart
		 */
		restartPolicy?: ContainerGroupPropertiesRestartPolicy | null;

		/** The list of volumes that can be mounted by containers in this container group. */
		volumes?: Array<Volume>;
	}
	export interface ContainerGroupPropertiesFormProperties {

		/**
		 * The operating system type required by the containers in the container group.
		 * Required
		 */
		osType: FormControl<ContainerGroupPropertiesOsType | null | undefined>,

		/** The provisioning state of the container group. This only appears in the response. */
		provisioningState: FormControl<string | null | undefined>,

		/**
		 * Restart policy for all containers within the container group.
		 * - `Always` Always restart
		 * - `OnFailure` Restart on failure
		 * - `Never` Never restart
		 */
		restartPolicy: FormControl<ContainerGroupPropertiesRestartPolicy | null | undefined>,
	}
	export function CreateContainerGroupPropertiesFormGroup() {
		return new FormGroup<ContainerGroupPropertiesFormProperties>({
			osType: new FormControl<ContainerGroupPropertiesOsType | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			restartPolicy: new FormControl<ContainerGroupPropertiesRestartPolicy | null | undefined>(undefined),
		});

	}


	/** Container group diagnostic information. */
	export interface ContainerGroupDiagnostics {

		/** Container group log analytics information. */
		logAnalytics?: LogAnalytics;
	}

	/** Container group diagnostic information. */
	export interface ContainerGroupDiagnosticsFormProperties {
	}
	export function CreateContainerGroupDiagnosticsFormGroup() {
		return new FormGroup<ContainerGroupDiagnosticsFormProperties>({
		});

	}


	/** Container group log analytics information. */
	export interface LogAnalytics {

		/** The log type to be used. */
		logType?: LogAnalyticsLogType | null;

		/** Metadata for log analytics. */
		metadata?: {[id: string]: string };

		/**
		 * The workspace id for log analytics
		 * Required
		 */
		workspaceId: string;

		/**
		 * The workspace key for log analytics
		 * Required
		 */
		workspaceKey: string;
	}

	/** Container group log analytics information. */
	export interface LogAnalyticsFormProperties {

		/** The log type to be used. */
		logType: FormControl<LogAnalyticsLogType | null | undefined>,

		/** Metadata for log analytics. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The workspace id for log analytics
		 * Required
		 */
		workspaceId: FormControl<string | null | undefined>,

		/**
		 * The workspace key for log analytics
		 * Required
		 */
		workspaceKey: FormControl<string | null | undefined>,
	}
	export function CreateLogAnalyticsFormGroup() {
		return new FormGroup<LogAnalyticsFormProperties>({
			logType: new FormControl<LogAnalyticsLogType | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LogAnalyticsLogType { ContainerInsights = 'ContainerInsights', ContainerInstanceLogs = 'ContainerInstanceLogs' }


	/** DNS configuration for the container group. */
	export interface DnsConfiguration {

		/**
		 * The DNS servers for the container group.
		 * Required
		 */
		nameServers: Array<string>;

		/** The DNS options for the container group. */
		options?: string | null;

		/** The DNS search domains for hostname lookup in the container group. */
		searchDomains?: string | null;
	}

	/** DNS configuration for the container group. */
	export interface DnsConfigurationFormProperties {

		/** The DNS options for the container group. */
		options: FormControl<string | null | undefined>,

		/** The DNS search domains for hostname lookup in the container group. */
		searchDomains: FormControl<string | null | undefined>,
	}
	export function CreateDnsConfigurationFormGroup() {
		return new FormGroup<DnsConfigurationFormProperties>({
			options: new FormControl<string | null | undefined>(undefined),
			searchDomains: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Image registry credential. */
	export interface ImageRegistryCredential {

		/** The password for the private registry. */
		password?: string | null;

		/**
		 * The Docker image registry server without a protocol such as "http" and "https".
		 * Required
		 */
		server: string;

		/**
		 * The username for the private registry.
		 * Required
		 */
		username: string;
	}

	/** Image registry credential. */
	export interface ImageRegistryCredentialFormProperties {

		/** The password for the private registry. */
		password: FormControl<string | null | undefined>,

		/**
		 * The Docker image registry server without a protocol such as "http" and "https".
		 * Required
		 */
		server: FormControl<string | null | undefined>,

		/**
		 * The username for the private registry.
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateImageRegistryCredentialFormGroup() {
		return new FormGroup<ImageRegistryCredentialFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ContainerGroupPropertiesInstanceView {

		/** The events of this container group. */
		events?: Array<Event>;

		/** The state of the container group. Only valid in response. */
		state?: string | null;
	}
	export interface ContainerGroupPropertiesInstanceViewFormProperties {

		/** The state of the container group. Only valid in response. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateContainerGroupPropertiesInstanceViewFormGroup() {
		return new FormGroup<ContainerGroupPropertiesInstanceViewFormProperties>({
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IP address for the container group. */
	export interface IpAddress {

		/** The Dns name label for the IP. */
		dnsNameLabel?: string | null;

		/** The FQDN for the IP. */
		fqdn?: string | null;

		/** The IP exposed to the public internet. */
		ip?: string | null;

		/**
		 * The list of ports exposed on the container group.
		 * Required
		 */
		ports: Array<Port>;

		/**
		 * Specifies if the IP is exposed to the public internet or private VNET.
		 * Required
		 */
		type: IpAddressType;
	}

	/** IP address for the container group. */
	export interface IpAddressFormProperties {

		/** The Dns name label for the IP. */
		dnsNameLabel: FormControl<string | null | undefined>,

		/** The FQDN for the IP. */
		fqdn: FormControl<string | null | undefined>,

		/** The IP exposed to the public internet. */
		ip: FormControl<string | null | undefined>,

		/**
		 * Specifies if the IP is exposed to the public internet or private VNET.
		 * Required
		 */
		type: FormControl<IpAddressType | null | undefined>,
	}
	export function CreateIpAddressFormGroup() {
		return new FormGroup<IpAddressFormProperties>({
			dnsNameLabel: new FormControl<string | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IpAddressType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The port exposed on the container group. */
	export interface Port {

		/**
		 * The port number.
		 * Required
		 */
		port: number;

		/** The protocol associated with the port. */
		protocol?: ContainerPortProtocol | null;
	}

	/** The port exposed on the container group. */
	export interface PortFormProperties {

		/**
		 * The port number.
		 * Required
		 */
		port: FormControl<number | null | undefined>,

		/** The protocol associated with the port. */
		protocol: FormControl<ContainerPortProtocol | null | undefined>,
	}
	export function CreatePortFormGroup() {
		return new FormGroup<PortFormProperties>({
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<ContainerPortProtocol | null | undefined>(undefined),
		});

	}

	export enum IpAddressType { Public = 'Public', Private = 'Private' }


	/** Container group network profile information. */
	export interface ContainerGroupNetworkProfile {

		/**
		 * The identifier for a network profile.
		 * Required
		 */
		id: string;
	}

	/** Container group network profile information. */
	export interface ContainerGroupNetworkProfileFormProperties {

		/**
		 * The identifier for a network profile.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateContainerGroupNetworkProfileFormGroup() {
		return new FormGroup<ContainerGroupNetworkProfileFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContainerGroupPropertiesOsType { Windows = 'Windows', Linux = 'Linux' }

	export enum ContainerGroupPropertiesRestartPolicy { Always = 'Always', OnFailure = 'OnFailure', Never = 'Never' }


	/** The properties of the volume. */
	export interface Volume {

		/** The properties of the Azure File volume. Azure File shares are mounted as volumes. */
		azureFile?: AzureFileVolume;

		/** The empty directory volume. */
		emptyDir?: EmptyDirVolume;

		/** Represents a volume that is populated with the contents of a git repository */
		gitRepo?: GitRepoVolume;

		/**
		 * The name of the volume.
		 * Required
		 */
		name: string;

		/** The secret volume. */
		secret?: SecretVolume;
	}

	/** The properties of the volume. */
	export interface VolumeFormProperties {

		/**
		 * The name of the volume.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The empty directory volume. */
	export interface EmptyDirVolume {
	}

	/** The empty directory volume. */
	export interface EmptyDirVolumeFormProperties {
	}
	export function CreateEmptyDirVolumeFormGroup() {
		return new FormGroup<EmptyDirVolumeFormProperties>({
		});

	}


	/** The secret volume. */
	export interface SecretVolume {
	}

	/** The secret volume. */
	export interface SecretVolumeFormProperties {
	}
	export function CreateSecretVolumeFormGroup() {
		return new FormGroup<SecretVolumeFormProperties>({
		});

	}


	/** Identity for the container group. */
	export interface ContainerGroupIdentity {

		/** The principal id of the container group identity. This property will only be provided for a system assigned identity. */
		principalId?: string | null;

		/** The tenant id associated with the container group. This property will only be provided for a system assigned identity. */
		tenantId?: string | null;

		/** The type of identity used for the container group. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the container group. */
		type?: ContainerGroupIdentityType | null;

		/** The list of user identities associated with the container group. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities?: {[id: string]: ContainerGroupIdentityUserAssignedIdentities };
	}

	/** Identity for the container group. */
	export interface ContainerGroupIdentityFormProperties {

		/** The principal id of the container group identity. This property will only be provided for a system assigned identity. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant id associated with the container group. This property will only be provided for a system assigned identity. */
		tenantId: FormControl<string | null | undefined>,

		/** The type of identity used for the container group. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the container group. */
		type: FormControl<ContainerGroupIdentityType | null | undefined>,

		/** The list of user identities associated with the container group. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities: FormControl<{[id: string]: ContainerGroupIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateContainerGroupIdentityFormGroup() {
		return new FormGroup<ContainerGroupIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ContainerGroupIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: ContainerGroupIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export enum ContainerGroupIdentityType { SystemAssigned = 'SystemAssigned', UserAssigned = 'UserAssigned', 'SystemAssigned, UserAssigned' = 'SystemAssigned, UserAssigned', None = 'None' }

	export interface ContainerGroupIdentityUserAssignedIdentities {

		/** The client id of user assigned identity. */
		clientId?: string | null;

		/** The principal id of user assigned identity. */
		principalId?: string | null;
	}
	export interface ContainerGroupIdentityUserAssignedIdentitiesFormProperties {

		/** The client id of user assigned identity. */
		clientId: FormControl<string | null | undefined>,

		/** The principal id of user assigned identity. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateContainerGroupIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<ContainerGroupIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The container group list response that contains the container group properties. */
	export interface ContainerGroupListResult {

		/** The URI to fetch the next page of container groups. */
		nextLink?: string | null;

		/** The list of container groups. */
		value?: Array<ContainerGroup>;
	}

	/** The container group list response that contains the container group properties. */
	export interface ContainerGroupListResultFormProperties {

		/** The URI to fetch the next page of container groups. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateContainerGroupListResultFormGroup() {
		return new FormGroup<ContainerGroupListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a volume that is populated with the contents of a git repository */
	export interface GitRepoVolume {

		/** Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
		directory?: string | null;

		/**
		 * Repository URL
		 * Required
		 */
		repository: string;

		/** Commit hash for the specified revision. */
		revision?: string | null;
	}

	/** Represents a volume that is populated with the contents of a git repository */
	export interface GitRepoVolumeFormProperties {

		/** Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
		directory: FormControl<string | null | undefined>,

		/**
		 * Repository URL
		 * Required
		 */
		repository: FormControl<string | null | undefined>,

		/** Commit hash for the specified revision. */
		revision: FormControl<string | null | undefined>,
	}
	export function CreateGitRepoVolumeFormGroup() {
		return new FormGroup<GitRepoVolumeFormProperties>({
			directory: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revision: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The logs. */
	export interface Logs {

		/** The content of the log. */
		content?: string | null;
	}

	/** The logs. */
	export interface LogsFormProperties {

		/** The content of the log. */
		content: FormControl<string | null | undefined>,
	}
	export function CreateLogsFormGroup() {
		return new FormGroup<LogsFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An operation for Azure Container Instance service. */
	export interface Operation {

		/**
		 * The display information of the operation.
		 * Required
		 */
		display: OperationDisplay;

		/**
		 * The name of the operation.
		 * Required
		 */
		name: string;

		/** The intended executor of the operation. */
		origin?: OperationOrigin | null;

		/** The additional properties. */
		properties?: string | null;
	}

	/** An operation for Azure Container Instance service. */
	export interface OperationFormProperties {

		/**
		 * The name of the operation.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The intended executor of the operation. */
		origin: FormControl<OperationOrigin | null | undefined>,

		/** The additional properties. */
		properties: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			origin: new FormControl<OperationOrigin | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OperationDisplay {

		/** The description of the operation. */
		description?: string | null;

		/** The friendly name of the operation. */
		operation?: string | null;

		/** The name of the provider of the operation. */
		provider?: string | null;

		/** The name of the resource type of the operation. */
		resource?: string | null;
	}
	export interface OperationDisplayFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The friendly name of the operation. */
		operation: FormControl<string | null | undefined>,

		/** The name of the provider of the operation. */
		provider: FormControl<string | null | undefined>,

		/** The name of the resource type of the operation. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayFormGroup() {
		return new FormGroup<OperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperationOrigin { User = 'User', System = 'System' }


	/** The operation list response that contains all operations for Azure Container Instance service. */
	export interface OperationListResult {

		/** The URI to fetch the next page of operations. */
		nextLink?: string | null;

		/** The list of operations. */
		value?: Array<Operation>;
	}

	/** The operation list response that contains all operations for Azure Container Instance service. */
	export interface OperationListResultFormProperties {

		/** The URI to fetch the next page of operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Resource model definition. */
	export interface Resource {

		/** The resource id. */
		id?: string | null;

		/** The resource location. */
		location?: string | null;

		/** The resource name. */
		name?: string | null;

		/** The resource tags. */
		tags?: {[id: string]: string };

		/** The resource type. */
		type?: string | null;
	}

	/** The Resource model definition. */
	export interface ResourceFormProperties {

		/** The resource id. */
		id: FormControl<string | null | undefined>,

		/** The resource location. */
		location: FormControl<string | null | undefined>,

		/** The resource name. */
		name: FormControl<string | null | undefined>,

		/** The resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single usage result */
	export interface Usage {

		/** The current usage of the resource */
		currentValue?: number | null;

		/** The maximum permitted usage of the resource. */
		limit?: number | null;

		/** The name object of the resource */
		name?: UsageName;

		/** Unit of the usage result */
		unit?: string | null;
	}

	/** A single usage result */
	export interface UsageFormProperties {

		/** The current usage of the resource */
		currentValue: FormControl<number | null | undefined>,

		/** The maximum permitted usage of the resource. */
		limit: FormControl<number | null | undefined>,

		/** Unit of the usage result */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UsageName {

		/** The localized name of the resource */
		localizedValue?: string | null;

		/** The name of the resource */
		value?: string | null;
	}
	export interface UsageNameFormProperties {

		/** The localized name of the resource */
		localizedValue: FormControl<string | null | undefined>,

		/** The name of the resource */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUsageNameFormGroup() {
		return new FormGroup<UsageNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response containing the usage data */
	export interface UsageListResult {
		value?: Array<Usage>;
	}

	/** The response containing the usage data */
	export interface UsageListResultFormProperties {
	}
	export function CreateUsageListResultFormGroup() {
		return new FormGroup<UsageListResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List the operations for Azure Container Instance service.
		 * Get providers/Microsoft.ContainerInstance/operations
		 * @param {string} api_version Client API version
		 * @return {OperationListResult} OK
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.ContainerInstance/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a list of container groups in the specified subscription.
		 * Get a list of container groups in the specified subscription. This operation returns properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/containerGroups
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version
		 * @return {ContainerGroupListResult} OK
		 */
		ContainerGroups_List(subscriptionId: string, api_version: string): Observable<ContainerGroupListResult> {
			return this.http.get<ContainerGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ContainerInstance/containerGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the list of cached images.
		 * Get the list of cached images on specific OS type for a subscription in a region.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/locations/{location}/cachedImages
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location The identifier for the physical azure location.
		 * @param {string} api_version Client API version
		 * @return {CachedImagesListResult} OK
		 */
		ListCachedImages(subscriptionId: string, location: string, api_version: string): Observable<CachedImagesListResult> {
			return this.http.get<CachedImagesListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ContainerInstance/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/cachedImages&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the list of capabilities of the location.
		 * Get the list of CPU/memory/GPU capabilities of a region.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/locations/{location}/capabilities
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location The identifier for the physical azure location.
		 * @param {string} api_version Client API version
		 * @return {CapabilitiesListResult} OK
		 */
		ListCapabilities(subscriptionId: string, location: string, api_version: string): Observable<CapabilitiesListResult> {
			return this.http.get<CapabilitiesListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ContainerInstance/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/capabilities&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the usage for a subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/locations/{location}/usages
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location The identifier for the physical azure location.
		 * @param {string} api_version Client API version
		 * @return {UsageListResult} OK
		 */
		ContainerGroupUsage_List(subscriptionId: string, location: string, api_version: string): Observable<UsageListResult> {
			return this.http.get<UsageListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ContainerInstance/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/usages&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a list of container groups in the specified subscription and resource group.
		 * Get a list of container groups in a specified subscription and resource group. This operation returns properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version
		 * @param {string} resourceGroupName The name of the resource group.
		 * @return {ContainerGroupListResult} OK
		 */
		ContainerGroups_ListByResourceGroup(subscriptionId: string, api_version: string, resourceGroupName: string): Observable<ContainerGroupListResult> {
			return this.http.get<ContainerGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerInstance/containerGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the properties of the specified container group.
		 * Gets the properties of the specified container group in the specified subscription and resource group. The operation returns the properties of each container group including containers, image registry credentials, restart policy, IP address type, OS type, state, and volumes.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} containerGroupName The name of the container group.
		 * @return {ContainerGroup} OK
		 */
		ContainerGroups_Get(subscriptionId: string, api_version: string, resourceGroupName: string, containerGroupName: string): Observable<ContainerGroup> {
			return this.http.get<ContainerGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerInstance/containerGroups/' + (containerGroupName == null ? '' : encodeURIComponent(containerGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update container groups.
		 * Create or update container groups with specified configurations.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} containerGroupName The name of the container group.
		 * @param {ContainerGroup} requestBody The properties of the container group to be created or updated.
		 * @return {ContainerGroup} OK
		 */
		ContainerGroups_CreateOrUpdate(subscriptionId: string, api_version: string, resourceGroupName: string, containerGroupName: string, requestBody: ContainerGroup): Observable<ContainerGroup> {
			return this.http.put<ContainerGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerInstance/containerGroups/' + (containerGroupName == null ? '' : encodeURIComponent(containerGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the specified container group.
		 * Delete the specified container group in the specified subscription and resource group. The operation does not delete other resources provided by the user, such as volumes.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} containerGroupName The name of the container group.
		 * @return {ContainerGroup} OK
		 */
		ContainerGroups_Delete(subscriptionId: string, api_version: string, resourceGroupName: string, containerGroupName: string): Observable<ContainerGroup> {
			return this.http.delete<ContainerGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerInstance/containerGroups/' + (containerGroupName == null ? '' : encodeURIComponent(containerGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update container groups.
		 * Updates container group tags with specified values.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} containerGroupName The name of the container group.
		 * @param {Resource} requestBody The container group resource with just the tags to be updated.
		 * @return {ContainerGroup} OK
		 */
		ContainerGroups_Update(subscriptionId: string, api_version: string, resourceGroupName: string, containerGroupName: string, requestBody: Resource): Observable<ContainerGroup> {
			return this.http.patch<ContainerGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerInstance/containerGroups/' + (containerGroupName == null ? '' : encodeURIComponent(containerGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Executes a command in a specific container instance.
		 * Executes a command for a specific container instance in a specified resource group and container group.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/containers/{containerName}/exec
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} containerGroupName The name of the container group.
		 * @param {string} containerName The name of the container instance.
		 * @param {ContainerExecRequest} requestBody The request for the exec command.
		 * @return {ContainerExecResponse} OK
		 */
		Container_ExecuteCommand(subscriptionId: string, api_version: string, resourceGroupName: string, containerGroupName: string, containerName: string, requestBody: ContainerExecRequest): Observable<ContainerExecResponse> {
			return this.http.post<ContainerExecResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerInstance/containerGroups/' + (containerGroupName == null ? '' : encodeURIComponent(containerGroupName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/exec&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the logs for a specified container instance.
		 * Get the logs for a specified container instance in a specified resource group and container group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/containers/{containerName}/logs
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} containerGroupName The name of the container group.
		 * @param {string} containerName The name of the container instance.
		 * @param {number} tail The number of lines to show from the tail of the container instance log. If not provided, all available logs are shown up to 4mb.
		 * @return {Logs} OK
		 */
		Container_ListLogs(subscriptionId: string, api_version: string, resourceGroupName: string, containerGroupName: string, containerName: string, tail: number | null | undefined): Observable<Logs> {
			return this.http.get<Logs>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerInstance/containerGroups/' + (containerGroupName == null ? '' : encodeURIComponent(containerGroupName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/logs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&tail=' + tail, {});
		}

		/**
		 * Restarts all containers in a container group.
		 * Restarts all containers in a container group in place. If container image has updates, new image will be downloaded.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/restart
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} containerGroupName The name of the container group.
		 * @return {void} 
		 */
		ContainerGroups_Restart(subscriptionId: string, api_version: string, resourceGroupName: string, containerGroupName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerInstance/containerGroups/' + (containerGroupName == null ? '' : encodeURIComponent(containerGroupName)) + '/restart&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts all containers in a container group.
		 * Starts all containers in a container group.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/start
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} containerGroupName The name of the container group.
		 * @return {void} 
		 */
		ContainerGroups_Start(subscriptionId: string, api_version: string, resourceGroupName: string, containerGroupName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerInstance/containerGroups/' + (containerGroupName == null ? '' : encodeURIComponent(containerGroupName)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops all containers in a container group.
		 * Stops all containers in a container group. Compute resources will be deallocated and billing will stop.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroups/{containerGroupName}/stop
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} containerGroupName The name of the container group.
		 * @return {void} 
		 */
		ContainerGroups_Stop(subscriptionId: string, api_version: string, resourceGroupName: string, containerGroupName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerInstance/containerGroups/' + (containerGroupName == null ? '' : encodeURIComponent(containerGroupName)) + '/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the container instance service association link for the subnet.
		 * Delete the container instance service association link for the subnet. This operation unblocks user from deleting subnet.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}/providers/Microsoft.ContainerInstance/serviceAssociationLinks/default
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} virtualNetworkName The name of the virtual network.
		 * @param {string} subnetName The name of the subnet.
		 * @return {void} OK
		 */
		ServiceAssociationLink_Delete(subscriptionId: string, api_version: string, resourceGroupName: string, virtualNetworkName: string, subnetName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/virtualNetworks/' + (virtualNetworkName == null ? '' : encodeURIComponent(virtualNetworkName)) + '/subnets/' + (subnetName == null ? '' : encodeURIComponent(subnetName)) + '/providers/Microsoft.ContainerInstance/serviceAssociationLinks/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

