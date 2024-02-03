import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Carries information about an accelerator that can be attached to a VM. */
	export interface Accelerator {

		/** How many accelerators of this type to attach. */
		count?: string | null;

		/** The accelerator type string (for example, "nvidia-tesla-k80"). Only NVIDIA GPU accelerators are currently supported. If an NVIDIA GPU is attached, the required runtime libraries will be made available to all containers under `/usr/local/nvidia`. The driver version to install must be specified using the NVIDIA driver version parameter on the virtual machine specification. Note that attaching a GPU increases the worker VM startup time by a few minutes. */
		type?: string | null;
	}

	/** Carries information about an accelerator that can be attached to a VM. */
	export interface AcceleratorFormProperties {

		/** How many accelerators of this type to attach. */
		count: FormControl<string | null | undefined>,

		/** The accelerator type string (for example, "nvidia-tesla-k80"). Only NVIDIA GPU accelerators are currently supported. If an NVIDIA GPU is attached, the required runtime libraries will be made available to all containers under `/usr/local/nvidia`. The driver version to install must be specified using the NVIDIA driver version parameter on the virtual machine specification. Note that attaching a GPU increases the worker VM startup time by a few minutes. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAcceleratorFormGroup() {
		return new FormGroup<AcceleratorFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a single action that runs a Docker container. */
	export interface Action {

		/** By default, after an action fails, no further actions are run. This flag indicates that this action must be run even if the pipeline has already failed. This is useful for actions that copy output files off of the VM or for debugging. Note that no actions will be run if image prefetching fails. */
		alwaysRun?: boolean | null;

		/** Prevents the container from accessing the external network. */
		blockExternalNetwork?: boolean | null;

		/** If specified, overrides the `CMD` specified in the container. If the container also has an `ENTRYPOINT` the values are used as entrypoint arguments. Otherwise, they are used as a command and arguments to run inside the container. */
		commands?: Array<string>;

		/** An optional name for the container. The container hostname will be set to this name, making it useful for inter-container communication. The name must contain only upper and lowercase alphanumeric characters and hyphens and cannot start with a hyphen. */
		containerName?: string | null;

		/** Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline. */
		credentials?: Secret;

		/** All container images are typically downloaded before any actions are executed. This helps prevent typos in URIs or issues like lack of disk space from wasting large amounts of compute resources. If set, this flag prevents the worker from downloading the image until just before the action is executed. */
		disableImagePrefetch?: boolean | null;

		/** A small portion of the container's standard error stream is typically captured and returned inside the `ContainerStoppedEvent`. Setting this flag disables this functionality. */
		disableStandardErrorCapture?: boolean | null;

		/** Enable access to the FUSE device for this action. Filesystems can then be mounted into disks shared with other actions. The other actions do not need the `enable_fuse` flag to access the mounted filesystem. This has the effect of causing the container to be executed with `CAP_SYS_ADMIN` and exposes `/dev/fuse` to the container, so use it only for containers you trust. */
		enableFuse?: boolean | null;

		/** Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline. */
		encryptedEnvironment?: Secret;

		/** If specified, overrides the `ENTRYPOINT` specified in the container. */
		entrypoint?: string | null;

		/** The environment to pass into the container. This environment is merged with values specified in the google.cloud.lifesciences.v2beta.Pipeline message, overwriting any duplicate values. In addition to the values passed here, a few other values are automatically injected into the environment. These cannot be hidden or overwritten. `GOOGLE_PIPELINE_FAILED` will be set to "1" if the pipeline failed because an action has exited with a non-zero status (and did not have the `IGNORE_EXIT_STATUS` flag set). This can be used to determine if additional debug or logging actions should execute. `GOOGLE_LAST_EXIT_STATUS` will be set to the exit status of the last non-background action that executed. This can be used by workflow engine authors to determine whether an individual action has succeeded or failed. */
		environment?: {[id: string]: string };

		/** Normally, a non-zero exit status causes the pipeline to fail. This flag allows execution of other actions to continue instead. */
		ignoreExitStatus?: boolean | null;

		/** Required. The URI to pull the container image from. Note that all images referenced by actions in the pipeline are pulled before the first action runs. If multiple actions reference the same image, it is only pulled once, ensuring that the same image is used for all actions in a single pipeline. The image URI can be either a complete host and image specification (e.g., quay.io/biocontainers/samtools), a library and image name (e.g., google/cloud-sdk) or a bare image name ('bash') to pull from the default library. No schema is required in any of these cases. If the specified image is not public, the service account specified for the Virtual Machine must have access to pull the images from GCR, or appropriate credentials must be specified in the google.cloud.lifesciences.v2beta.Action.credentials field. */
		imageUri?: string | null;

		/** Labels to associate with the action. This field is provided to assist workflow engine authors in identifying actions (for example, to indicate what sort of action they perform, such as localization or debugging). They are returned in the operation metadata, but are otherwise ignored. */
		labels?: {[id: string]: string };

		/** A list of mounts to make available to the action. In addition to the values specified here, every action has a special virtual disk mounted under `/google` that contains log files and other operational components. - /google/logs All logs written during the pipeline execution. - /google/logs/output The combined standard output and standard error of all actions run as part of the pipeline execution. - /google/logs/action/stdout The complete contents of each individual action's standard output. - /google/logs/action/stderr The complete contents of each individual action's standard error output. */
		mounts?: Array<Mount>;

		/** An optional identifier for a PID namespace to run the action inside. Multiple actions should use the same string to share a namespace. If unspecified, a separate isolated namespace is used. */
		pidNamespace?: string | null;

		/** A map of containers to host port mappings for this container. If the container already specifies exposed ports, use the `PUBLISH_EXPOSED_PORTS` flag instead. The host port number must be less than 65536. If it is zero, an unused random port is assigned. To determine the resulting port number, consult the `ContainerStartedEvent` in the operation metadata. */
		portMappings?: {[id: string]: number };

		/** Exposes all ports specified by `EXPOSE` statements in the container. To discover the host side port numbers, consult the `ACTION_STARTED` event in the operation metadata. */
		publishExposedPorts?: boolean | null;

		/** This flag allows an action to continue running in the background while executing subsequent actions. This is useful to provide services to other actions (or to provide debugging support tools like SSH servers). */
		runInBackground?: boolean | null;

		/** The maximum amount of time to give the action to complete. If the action fails to complete before the timeout, it will be terminated and the exit status will be non-zero. The pipeline will continue or terminate based on the rules defined by the `ALWAYS_RUN` and `IGNORE_EXIT_STATUS` flags. */
		timeout?: string | null;
	}

	/** Specifies a single action that runs a Docker container. */
	export interface ActionFormProperties {

		/** By default, after an action fails, no further actions are run. This flag indicates that this action must be run even if the pipeline has already failed. This is useful for actions that copy output files off of the VM or for debugging. Note that no actions will be run if image prefetching fails. */
		alwaysRun: FormControl<boolean | null | undefined>,

		/** Prevents the container from accessing the external network. */
		blockExternalNetwork: FormControl<boolean | null | undefined>,

		/** An optional name for the container. The container hostname will be set to this name, making it useful for inter-container communication. The name must contain only upper and lowercase alphanumeric characters and hyphens and cannot start with a hyphen. */
		containerName: FormControl<string | null | undefined>,

		/** All container images are typically downloaded before any actions are executed. This helps prevent typos in URIs or issues like lack of disk space from wasting large amounts of compute resources. If set, this flag prevents the worker from downloading the image until just before the action is executed. */
		disableImagePrefetch: FormControl<boolean | null | undefined>,

		/** A small portion of the container's standard error stream is typically captured and returned inside the `ContainerStoppedEvent`. Setting this flag disables this functionality. */
		disableStandardErrorCapture: FormControl<boolean | null | undefined>,

		/** Enable access to the FUSE device for this action. Filesystems can then be mounted into disks shared with other actions. The other actions do not need the `enable_fuse` flag to access the mounted filesystem. This has the effect of causing the container to be executed with `CAP_SYS_ADMIN` and exposes `/dev/fuse` to the container, so use it only for containers you trust. */
		enableFuse: FormControl<boolean | null | undefined>,

		/** If specified, overrides the `ENTRYPOINT` specified in the container. */
		entrypoint: FormControl<string | null | undefined>,

		/** The environment to pass into the container. This environment is merged with values specified in the google.cloud.lifesciences.v2beta.Pipeline message, overwriting any duplicate values. In addition to the values passed here, a few other values are automatically injected into the environment. These cannot be hidden or overwritten. `GOOGLE_PIPELINE_FAILED` will be set to "1" if the pipeline failed because an action has exited with a non-zero status (and did not have the `IGNORE_EXIT_STATUS` flag set). This can be used to determine if additional debug or logging actions should execute. `GOOGLE_LAST_EXIT_STATUS` will be set to the exit status of the last non-background action that executed. This can be used by workflow engine authors to determine whether an individual action has succeeded or failed. */
		environment: FormControl<{[id: string]: string } | null | undefined>,

		/** Normally, a non-zero exit status causes the pipeline to fail. This flag allows execution of other actions to continue instead. */
		ignoreExitStatus: FormControl<boolean | null | undefined>,

		/** Required. The URI to pull the container image from. Note that all images referenced by actions in the pipeline are pulled before the first action runs. If multiple actions reference the same image, it is only pulled once, ensuring that the same image is used for all actions in a single pipeline. The image URI can be either a complete host and image specification (e.g., quay.io/biocontainers/samtools), a library and image name (e.g., google/cloud-sdk) or a bare image name ('bash') to pull from the default library. No schema is required in any of these cases. If the specified image is not public, the service account specified for the Virtual Machine must have access to pull the images from GCR, or appropriate credentials must be specified in the google.cloud.lifesciences.v2beta.Action.credentials field. */
		imageUri: FormControl<string | null | undefined>,

		/** Labels to associate with the action. This field is provided to assist workflow engine authors in identifying actions (for example, to indicate what sort of action they perform, such as localization or debugging). They are returned in the operation metadata, but are otherwise ignored. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** An optional identifier for a PID namespace to run the action inside. Multiple actions should use the same string to share a namespace. If unspecified, a separate isolated namespace is used. */
		pidNamespace: FormControl<string | null | undefined>,

		/** A map of containers to host port mappings for this container. If the container already specifies exposed ports, use the `PUBLISH_EXPOSED_PORTS` flag instead. The host port number must be less than 65536. If it is zero, an unused random port is assigned. To determine the resulting port number, consult the `ContainerStartedEvent` in the operation metadata. */
		portMappings: FormControl<{[id: string]: number } | null | undefined>,

		/** Exposes all ports specified by `EXPOSE` statements in the container. To discover the host side port numbers, consult the `ACTION_STARTED` event in the operation metadata. */
		publishExposedPorts: FormControl<boolean | null | undefined>,

		/** This flag allows an action to continue running in the background while executing subsequent actions. This is useful to provide services to other actions (or to provide debugging support tools like SSH servers). */
		runInBackground: FormControl<boolean | null | undefined>,

		/** The maximum amount of time to give the action to complete. If the action fails to complete before the timeout, it will be terminated and the exit status will be non-zero. The pipeline will continue or terminate based on the rules defined by the `ALWAYS_RUN` and `IGNORE_EXIT_STATUS` flags. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			alwaysRun: new FormControl<boolean | null | undefined>(undefined),
			blockExternalNetwork: new FormControl<boolean | null | undefined>(undefined),
			containerName: new FormControl<string | null | undefined>(undefined),
			disableImagePrefetch: new FormControl<boolean | null | undefined>(undefined),
			disableStandardErrorCapture: new FormControl<boolean | null | undefined>(undefined),
			enableFuse: new FormControl<boolean | null | undefined>(undefined),
			entrypoint: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			ignoreExitStatus: new FormControl<boolean | null | undefined>(undefined),
			imageUri: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			pidNamespace: new FormControl<string | null | undefined>(undefined),
			portMappings: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			publishExposedPorts: new FormControl<boolean | null | undefined>(undefined),
			runInBackground: new FormControl<boolean | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline. */
	export interface Secret {

		/** The value of the cipherText response from the `encrypt` method. This field is intentionally unaudited. */
		cipherText?: string | null;

		/** The name of the Cloud KMS key that will be used to decrypt the secret value. The VM service account must have the required permissions and authentication scopes to invoke the `decrypt` method on the specified key. */
		keyName?: string | null;
	}

	/** Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline. */
	export interface SecretFormProperties {

		/** The value of the cipherText response from the `encrypt` method. This field is intentionally unaudited. */
		cipherText: FormControl<string | null | undefined>,

		/** The name of the Cloud KMS key that will be used to decrypt the secret value. The VM service account must have the required permissions and authentication scopes to invoke the `decrypt` method on the specified key. */
		keyName: FormControl<string | null | undefined>,
	}
	export function CreateSecretFormGroup() {
		return new FormGroup<SecretFormProperties>({
			cipherText: new FormControl<string | null | undefined>(undefined),
			keyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Carries information about a particular disk mount inside a container. */
	export interface Mount {

		/** The name of the disk to mount, as specified in the resources section. */
		disk?: string | null;

		/** The path to mount the disk inside the container. */
		path?: string | null;

		/** If true, the disk is mounted read-only inside the container. */
		readOnly?: boolean | null;
	}

	/** Carries information about a particular disk mount inside a container. */
	export interface MountFormProperties {

		/** The name of the disk to mount, as specified in the resources section. */
		disk: FormControl<string | null | undefined>,

		/** The path to mount the disk inside the container. */
		path: FormControl<string | null | undefined>,

		/** If true, the disk is mounted read-only inside the container. */
		readOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateMountFormGroup() {
		return new FormGroup<MountFormProperties>({
			disk: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** An event generated when a container is forcibly terminated by the worker. Currently, this only occurs when the container outlives the timeout specified by the user. */
	export interface ContainerKilledEvent {

		/** The numeric ID of the action that started the container. */
		actionId?: number | null;
	}

	/** An event generated when a container is forcibly terminated by the worker. Currently, this only occurs when the container outlives the timeout specified by the user. */
	export interface ContainerKilledEventFormProperties {

		/** The numeric ID of the action that started the container. */
		actionId: FormControl<number | null | undefined>,
	}
	export function CreateContainerKilledEventFormGroup() {
		return new FormGroup<ContainerKilledEventFormProperties>({
			actionId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An event generated when a container starts. */
	export interface ContainerStartedEvent {

		/** The numeric ID of the action that started this container. */
		actionId?: number | null;

		/** The public IP address that can be used to connect to the container. This field is only populated when at least one port mapping is present. If the instance was created with a private address, this field will be empty even if port mappings exist. */
		ipAddress?: string | null;

		/** The container-to-host port mappings installed for this container. This set will contain any ports exposed using the `PUBLISH_EXPOSED_PORTS` flag as well as any specified in the `Action` definition. */
		portMappings?: {[id: string]: number };
	}

	/** An event generated when a container starts. */
	export interface ContainerStartedEventFormProperties {

		/** The numeric ID of the action that started this container. */
		actionId: FormControl<number | null | undefined>,

		/** The public IP address that can be used to connect to the container. This field is only populated when at least one port mapping is present. If the instance was created with a private address, this field will be empty even if port mappings exist. */
		ipAddress: FormControl<string | null | undefined>,

		/** The container-to-host port mappings installed for this container. This set will contain any ports exposed using the `PUBLISH_EXPOSED_PORTS` flag as well as any specified in the `Action` definition. */
		portMappings: FormControl<{[id: string]: number } | null | undefined>,
	}
	export function CreateContainerStartedEventFormGroup() {
		return new FormGroup<ContainerStartedEventFormProperties>({
			actionId: new FormControl<number | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			portMappings: new FormControl<{[id: string]: number } | null | undefined>(undefined),
		});

	}


	/** An event generated when a container exits. */
	export interface ContainerStoppedEvent {

		/** The numeric ID of the action that started this container. */
		actionId?: number | null;

		/** The exit status of the container. */
		exitStatus?: number | null;

		/** The tail end of any content written to standard error by the container. If the content emits large amounts of debugging noise or contains sensitive information, you can prevent the content from being printed by setting the `DISABLE_STANDARD_ERROR_CAPTURE` flag. Note that only a small amount of the end of the stream is captured here. The entire stream is stored in the `/google/logs` directory mounted into each action, and can be copied off the machine as described elsewhere. */
		stderr?: string | null;
	}

	/** An event generated when a container exits. */
	export interface ContainerStoppedEventFormProperties {

		/** The numeric ID of the action that started this container. */
		actionId: FormControl<number | null | undefined>,

		/** The exit status of the container. */
		exitStatus: FormControl<number | null | undefined>,

		/** The tail end of any content written to standard error by the container. If the content emits large amounts of debugging noise or contains sensitive information, you can prevent the content from being printed by setting the `DISABLE_STANDARD_ERROR_CAPTURE` flag. Note that only a small amount of the end of the stream is captured here. The entire stream is stored in the `/google/logs` directory mounted into each action, and can be copied off the machine as described elsewhere. */
		stderr: FormControl<string | null | undefined>,
	}
	export function CreateContainerStoppedEventFormGroup() {
		return new FormGroup<ContainerStoppedEventFormProperties>({
			actionId: new FormControl<number | null | undefined>(undefined),
			exitStatus: new FormControl<number | null | undefined>(undefined),
			stderr: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event generated whenever a resource limitation or transient error delays execution of a pipeline that was otherwise ready to run. */
	export interface DelayedEvent {

		/** A textual description of the cause of the delay. The string can change without notice because it is often generated by another service (such as Compute Engine). */
		cause?: string | null;

		/** If the delay was caused by a resource shortage, this field lists the Compute Engine metrics that are preventing this operation from running (for example, `CPUS` or `INSTANCES`). If the particular metric is not known, a single `UNKNOWN` metric will be present. */
		metrics?: Array<string>;
	}

	/** An event generated whenever a resource limitation or transient error delays execution of a pipeline that was otherwise ready to run. */
	export interface DelayedEventFormProperties {

		/** A textual description of the cause of the delay. The string can change without notice because it is often generated by another service (such as Compute Engine). */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateDelayedEventFormGroup() {
		return new FormGroup<DelayedEventFormProperties>({
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Carries information about a disk that can be attached to a VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations. Specify either `Volume` or `Disk`, but not both. */
	export interface Disk {

		/** A user-supplied name for the disk. Used when mounting the disk into actions. The name must contain only upper and lowercase alphanumeric characters and hyphens and cannot start with a hyphen. */
		name?: string | null;

		/** The size, in GB, of the disk to attach. If the size is not specified, a default is chosen to ensure reasonable I/O performance. If the disk type is specified as `local-ssd`, multiple local drives are automatically combined to provide the requested size. Note, however, that each physical SSD is 375GB in size, and no more than 8 drives can be attached to a single instance. */
		sizeGb?: number | null;

		/** An optional image to put on the disk before attaching it to the VM. */
		sourceImage?: string | null;

		/** The Compute Engine disk type. If unspecified, `pd-standard` is used. */
		type?: string | null;
	}

	/** Carries information about a disk that can be attached to a VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations. Specify either `Volume` or `Disk`, but not both. */
	export interface DiskFormProperties {

		/** A user-supplied name for the disk. Used when mounting the disk into actions. The name must contain only upper and lowercase alphanumeric characters and hyphens and cannot start with a hyphen. */
		name: FormControl<string | null | undefined>,

		/** The size, in GB, of the disk to attach. If the size is not specified, a default is chosen to ensure reasonable I/O performance. If the disk type is specified as `local-ssd`, multiple local drives are automatically combined to provide the requested size. Note, however, that each physical SSD is 375GB in size, and no more than 8 drives can be attached to a single instance. */
		sizeGb: FormControl<number | null | undefined>,

		/** An optional image to put on the disk before attaching it to the VM. */
		sourceImage: FormControl<string | null | undefined>,

		/** The Compute Engine disk type. If unspecified, `pd-standard` is used. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDiskFormGroup() {
		return new FormGroup<DiskFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			sizeGb: new FormControl<number | null | undefined>(undefined),
			sourceImage: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Carries information about events that occur during pipeline execution. */
	export interface Event {

		/** An event generated when a container is forcibly terminated by the worker. Currently, this only occurs when the container outlives the timeout specified by the user. */
		containerKilled?: ContainerKilledEvent;

		/** An event generated when a container starts. */
		containerStarted?: ContainerStartedEvent;

		/** An event generated when a container exits. */
		containerStopped?: ContainerStoppedEvent;

		/** An event generated whenever a resource limitation or transient error delays execution of a pipeline that was otherwise ready to run. */
		delayed?: DelayedEvent;

		/** A human-readable description of the event. Note that these strings can change at any time without notice. Any application logic must use the information in the `details` field. */
		description?: string | null;

		/** An event generated when the execution of a pipeline has failed. Note that other events can continue to occur after this event. */
		failed?: FailedEvent;

		/** An event generated when the worker starts pulling an image. */
		pullStarted?: PullStartedEvent;

		/** An event generated when the worker stops pulling an image. */
		pullStopped?: PullStoppedEvent;

		/** The time at which the event occurred. */
		timestamp?: string | null;

		/** An event generated when the execution of a container results in a non-zero exit status that was not otherwise ignored. Execution will continue, but only actions that are flagged as `ALWAYS_RUN` will be executed. Other actions will be skipped. */
		unexpectedExitStatus?: UnexpectedExitStatusEvent;

		/** An event generated after a worker VM has been assigned to run the pipeline. */
		workerAssigned?: WorkerAssignedEvent;

		/** An event generated when the worker VM that was assigned to the pipeline has been released (deleted). */
		workerReleased?: WorkerReleasedEvent;
	}

	/** Carries information about events that occur during pipeline execution. */
	export interface EventFormProperties {

		/** A human-readable description of the event. Note that these strings can change at any time without notice. Any application logic must use the information in the `details` field. */
		description: FormControl<string | null | undefined>,

		/** The time at which the event occurred. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event generated when the execution of a pipeline has failed. Note that other events can continue to occur after this event. */
	export interface FailedEvent {

		/** The human-readable description of the cause of the failure. */
		cause?: string | null;

		/** The Google standard error code that best describes this failure. */
		code?: FailedEventCode | null;
	}

	/** An event generated when the execution of a pipeline has failed. Note that other events can continue to occur after this event. */
	export interface FailedEventFormProperties {

		/** The human-readable description of the cause of the failure. */
		cause: FormControl<string | null | undefined>,

		/** The Google standard error code that best describes this failure. */
		code: FormControl<FailedEventCode | null | undefined>,
	}
	export function CreateFailedEventFormGroup() {
		return new FormGroup<FailedEventFormProperties>({
			cause: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<FailedEventCode | null | undefined>(undefined),
		});

	}

	export enum FailedEventCode { OK = 'OK', CANCELLED = 'CANCELLED', UNKNOWN = 'UNKNOWN', INVALID_ARGUMENT = 'INVALID_ARGUMENT', DEADLINE_EXCEEDED = 'DEADLINE_EXCEEDED', NOT_FOUND = 'NOT_FOUND', ALREADY_EXISTS = 'ALREADY_EXISTS', PERMISSION_DENIED = 'PERMISSION_DENIED', UNAUTHENTICATED = 'UNAUTHENTICATED', RESOURCE_EXHAUSTED = 'RESOURCE_EXHAUSTED', FAILED_PRECONDITION = 'FAILED_PRECONDITION', ABORTED = 'ABORTED', OUT_OF_RANGE = 'OUT_OF_RANGE', UNIMPLEMENTED = 'UNIMPLEMENTED', INTERNAL = 'INTERNAL', UNAVAILABLE = 'UNAVAILABLE', DATA_LOSS = 'DATA_LOSS' }


	/** An event generated when the worker starts pulling an image. */
	export interface PullStartedEvent {

		/** The URI of the image that was pulled. */
		imageUri?: string | null;
	}

	/** An event generated when the worker starts pulling an image. */
	export interface PullStartedEventFormProperties {

		/** The URI of the image that was pulled. */
		imageUri: FormControl<string | null | undefined>,
	}
	export function CreatePullStartedEventFormGroup() {
		return new FormGroup<PullStartedEventFormProperties>({
			imageUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event generated when the worker stops pulling an image. */
	export interface PullStoppedEvent {

		/** The URI of the image that was pulled. */
		imageUri?: string | null;
	}

	/** An event generated when the worker stops pulling an image. */
	export interface PullStoppedEventFormProperties {

		/** The URI of the image that was pulled. */
		imageUri: FormControl<string | null | undefined>,
	}
	export function CreatePullStoppedEventFormGroup() {
		return new FormGroup<PullStoppedEventFormProperties>({
			imageUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event generated when the execution of a container results in a non-zero exit status that was not otherwise ignored. Execution will continue, but only actions that are flagged as `ALWAYS_RUN` will be executed. Other actions will be skipped. */
	export interface UnexpectedExitStatusEvent {

		/** The numeric ID of the action that started the container. */
		actionId?: number | null;

		/** The exit status of the container. */
		exitStatus?: number | null;
	}

	/** An event generated when the execution of a container results in a non-zero exit status that was not otherwise ignored. Execution will continue, but only actions that are flagged as `ALWAYS_RUN` will be executed. Other actions will be skipped. */
	export interface UnexpectedExitStatusEventFormProperties {

		/** The numeric ID of the action that started the container. */
		actionId: FormControl<number | null | undefined>,

		/** The exit status of the container. */
		exitStatus: FormControl<number | null | undefined>,
	}
	export function CreateUnexpectedExitStatusEventFormGroup() {
		return new FormGroup<UnexpectedExitStatusEventFormProperties>({
			actionId: new FormControl<number | null | undefined>(undefined),
			exitStatus: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An event generated after a worker VM has been assigned to run the pipeline. */
	export interface WorkerAssignedEvent {

		/** The worker's instance name. */
		instance?: string | null;

		/** The machine type that was assigned for the worker. */
		machineType?: string | null;

		/** The zone the worker is running in. */
		zone?: string | null;
	}

	/** An event generated after a worker VM has been assigned to run the pipeline. */
	export interface WorkerAssignedEventFormProperties {

		/** The worker's instance name. */
		instance: FormControl<string | null | undefined>,

		/** The machine type that was assigned for the worker. */
		machineType: FormControl<string | null | undefined>,

		/** The zone the worker is running in. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateWorkerAssignedEventFormGroup() {
		return new FormGroup<WorkerAssignedEventFormProperties>({
			instance: new FormControl<string | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event generated when the worker VM that was assigned to the pipeline has been released (deleted). */
	export interface WorkerReleasedEvent {

		/** The worker's instance name. */
		instance?: string | null;

		/** The zone the worker was running in. */
		zone?: string | null;
	}

	/** An event generated when the worker VM that was assigned to the pipeline has been released (deleted). */
	export interface WorkerReleasedEventFormProperties {

		/** The worker's instance name. */
		instance: FormControl<string | null | undefined>,

		/** The zone the worker was running in. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateWorkerReleasedEventFormGroup() {
		return new FormGroup<WorkerReleasedEventFormProperties>({
			instance: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for an existing disk to be attached to the VM. */
	export interface ExistingDisk {

		/** If `disk` contains slashes, the Cloud Life Sciences API assumes that it is a complete URL for the disk. If `disk` does not contain slashes, the Cloud Life Sciences API assumes that the disk is a zonal disk and a URL will be generated of the form `zones//disks/`, where `` is the zone in which the instance is allocated. The disk must be ext4 formatted. If all `Mount` references to this disk have the `read_only` flag set to true, the disk will be attached in `read-only` mode and can be shared with other instances. Otherwise, the disk will be available for writing but cannot be shared. */
		disk?: string | null;
	}

	/** Configuration for an existing disk to be attached to the VM. */
	export interface ExistingDiskFormProperties {

		/** If `disk` contains slashes, the Cloud Life Sciences API assumes that it is a complete URL for the disk. If `disk` does not contain slashes, the Cloud Life Sciences API assumes that the disk is a zonal disk and a URL will be generated of the form `zones//disks/`, where `` is the zone in which the instance is allocated. The disk must be ext4 formatted. If all `Mount` references to this disk have the `read_only` flag set to true, the disk will be attached in `read-only` mode and can be shared with other instances. Otherwise, the disk will be available for writing but cannot be shared. */
		disk: FormControl<string | null | undefined>,
	}
	export function CreateExistingDiskFormGroup() {
		return new FormGroup<ExistingDiskFormProperties>({
			disk: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** An Metadata object. This will always be returned with the Operation. */
		metadata?: {[id: string]: any };

		/** The server-assigned name for the operation. This may be passed to the other operation methods to retrieve information about the operation's status. */
		name?: string | null;

		/** An Empty object. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** An Metadata object. This will always be returned with the Operation. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name for the operation. This may be passed to the other operation methods to retrieve information about the operation's status. */
		name: FormControl<string | null | undefined>,

		/** An Empty object. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Carries information about the pipeline execution that is returned in the long running operation's metadata field. */
	export interface Metadata {

		/** The time at which the operation was created by the API. */
		createTime?: string | null;

		/** The time at which execution was completed and resources were cleaned up. */
		endTime?: string | null;

		/** The list of events that have happened so far during the execution of this operation. */
		events?: Array<Event>;

		/** The user-defined labels associated with this operation. */
		labels?: {[id: string]: string };

		/** Specifies a series of actions to execute, expressed as Docker containers. */
		pipeline?: Pipeline;

		/** The name of the Cloud Pub/Sub topic where notifications of operation status changes are sent. */
		pubSubTopic?: string | null;

		/** The first time at which resources were allocated to execute the pipeline. */
		startTime?: string | null;
	}

	/** Carries information about the pipeline execution that is returned in the long running operation's metadata field. */
	export interface MetadataFormProperties {

		/** The time at which the operation was created by the API. */
		createTime: FormControl<string | null | undefined>,

		/** The time at which execution was completed and resources were cleaned up. */
		endTime: FormControl<string | null | undefined>,

		/** The user-defined labels associated with this operation. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of the Cloud Pub/Sub topic where notifications of operation status changes are sent. */
		pubSubTopic: FormControl<string | null | undefined>,

		/** The first time at which resources were allocated to execute the pipeline. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			pubSubTopic: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a series of actions to execute, expressed as Docker containers. */
	export interface Pipeline {

		/** The list of actions to execute, in the order they are specified. */
		actions?: Array<Action>;

		/** Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline. */
		encryptedEnvironment?: Secret;

		/** The environment to pass into every action. Each action can also specify additional environment variables but cannot delete an entry from this map (though they can overwrite it with a different value). */
		environment?: {[id: string]: string };

		/** The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail. */
		resources?: Resources;

		/** The maximum amount of time to give the pipeline to complete. This includes the time spent waiting for a worker to be allocated. If the pipeline fails to complete before the timeout, it will be cancelled and the error code will be set to DEADLINE_EXCEEDED. If unspecified, it will default to 7 days. */
		timeout?: string | null;
	}

	/** Specifies a series of actions to execute, expressed as Docker containers. */
	export interface PipelineFormProperties {

		/** The environment to pass into every action. Each action can also specify additional environment variables but cannot delete an entry from this map (though they can overwrite it with a different value). */
		environment: FormControl<{[id: string]: string } | null | undefined>,

		/** The maximum amount of time to give the pipeline to complete. This includes the time spent waiting for a worker to be allocated. If the pipeline fails to complete before the timeout, it will be cancelled and the error code will be set to DEADLINE_EXCEEDED. If unspecified, it will default to 7 days. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreatePipelineFormGroup() {
		return new FormGroup<PipelineFormProperties>({
			environment: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail. */
	export interface Resources {

		/** The list of regions allowed for VM allocation. If set, the `zones` field must not be set. */
		regions?: Array<string>;

		/** Carries information about a Compute Engine VM resource. */
		virtualMachine?: VirtualMachine;

		/** The list of zones allowed for VM allocation. If set, the `regions` field must not be set. */
		zones?: Array<string>;
	}

	/** The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail. */
	export interface ResourcesFormProperties {
	}
	export function CreateResourcesFormGroup() {
		return new FormGroup<ResourcesFormProperties>({
		});

	}


	/** Carries information about a Compute Engine VM resource. */
	export interface VirtualMachine {

		/** The list of accelerators to attach to the VM. */
		accelerators?: Array<Accelerator>;

		/** The size of the boot disk, in GB. The boot disk must be large enough to accommodate all of the Docker images from each action in the pipeline at the same time. If not specified, a small but reasonable default value is used. */
		bootDiskSizeGb?: number | null;

		/** The host operating system image to use. Currently, only Container-Optimized OS images can be used. The default value is `projects/cos-cloud/global/images/family/cos-stable`, which selects the latest stable release of Container-Optimized OS. This option is provided to allow testing against the beta release of the operating system to ensure that the new version does not interact negatively with production pipelines. To test a pipeline against the beta release of Container-Optimized OS, use the value `projects/cos-cloud/global/images/family/cos-beta`. */
		bootImage?: string | null;

		/** The CPU platform to request. An instance based on a newer platform can be allocated, but never one with fewer capabilities. The value of this parameter must be a valid Compute Engine CPU platform name (such as "Intel Skylake"). This parameter is only useful for carefully optimized work loads where the CPU platform has a significant impact. For more information about the effect of this parameter, see https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform. */
		cpuPlatform?: string | null;

		/** The list of disks to create and attach to the VM. Specify either the `volumes[]` field or the `disks[]` field, but not both. */
		disks?: Array<Disk>;

		/** The Compute Engine Disk Images to use as a Docker cache. The disks will be mounted into the Docker folder in a way that the images present in the cache will not need to be pulled. The digests of the cached images must match those of the tags used or the latest version will still be pulled. The root directory of the ext4 image must contain `image` and `overlay2` directories copied from the Docker directory of a VM where the desired Docker images have already been pulled. Any images pulled that are not cached will be stored on the first cache disk instead of the boot disk. Only a single image is supported. */
		dockerCacheImages?: Array<string>;

		/** Whether Stackdriver monitoring should be enabled on the VM. */
		enableStackdriverMonitoring?: boolean | null;

		/** Optional set of labels to apply to the VM and any attached disk resources. These labels must adhere to the [name and value restrictions](https://cloud.google.com/compute/docs/labeling-resources) on VM labels imposed by Compute Engine. Labels keys with the prefix 'google-' are reserved for use by Google. Labels applied at creation time to the VM. Applied on a best-effort basis to attached disk resources shortly after VM creation. */
		labels?: {[id: string]: string };

		/** Required. The machine type of the virtual machine to create. Must be the short name of a standard machine type (such as "n1-standard-1") or a custom machine type (such as "custom-1-4096", where "1" indicates the number of vCPUs and "4096" indicates the memory in MB). See [Creating an instance with a custom machine type](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#create) for more specifications on creating a custom machine type. */
		machineType?: string | null;

		/** VM networking options. */
		network?: Network;

		/** The NVIDIA driver version to use when attaching an NVIDIA GPU accelerator. The version specified here must be compatible with the GPU libraries contained in the container being executed, and must be one of the drivers hosted in the `nvidia-drivers-us-public` bucket on Google Cloud Storage. */
		nvidiaDriverVersion?: string | null;

		/** If true, allocate a preemptible VM. */
		preemptible?: boolean | null;

		/** If specified, the VM will only be allocated inside the matching reservation. It will fail if the VM parameters don't match the reservation. */
		reservation?: string | null;

		/** Carries information about a Google Cloud service account. */
		serviceAccount?: ServiceAccount;

		/** The list of disks and other storage to create or attach to the VM. Specify either the `volumes[]` field or the `disks[]` field, but not both. */
		volumes?: Array<Volume>;
	}

	/** Carries information about a Compute Engine VM resource. */
	export interface VirtualMachineFormProperties {

		/** The size of the boot disk, in GB. The boot disk must be large enough to accommodate all of the Docker images from each action in the pipeline at the same time. If not specified, a small but reasonable default value is used. */
		bootDiskSizeGb: FormControl<number | null | undefined>,

		/** The host operating system image to use. Currently, only Container-Optimized OS images can be used. The default value is `projects/cos-cloud/global/images/family/cos-stable`, which selects the latest stable release of Container-Optimized OS. This option is provided to allow testing against the beta release of the operating system to ensure that the new version does not interact negatively with production pipelines. To test a pipeline against the beta release of Container-Optimized OS, use the value `projects/cos-cloud/global/images/family/cos-beta`. */
		bootImage: FormControl<string | null | undefined>,

		/** The CPU platform to request. An instance based on a newer platform can be allocated, but never one with fewer capabilities. The value of this parameter must be a valid Compute Engine CPU platform name (such as "Intel Skylake"). This parameter is only useful for carefully optimized work loads where the CPU platform has a significant impact. For more information about the effect of this parameter, see https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform. */
		cpuPlatform: FormControl<string | null | undefined>,

		/** Whether Stackdriver monitoring should be enabled on the VM. */
		enableStackdriverMonitoring: FormControl<boolean | null | undefined>,

		/** Optional set of labels to apply to the VM and any attached disk resources. These labels must adhere to the [name and value restrictions](https://cloud.google.com/compute/docs/labeling-resources) on VM labels imposed by Compute Engine. Labels keys with the prefix 'google-' are reserved for use by Google. Labels applied at creation time to the VM. Applied on a best-effort basis to attached disk resources shortly after VM creation. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The machine type of the virtual machine to create. Must be the short name of a standard machine type (such as "n1-standard-1") or a custom machine type (such as "custom-1-4096", where "1" indicates the number of vCPUs and "4096" indicates the memory in MB). See [Creating an instance with a custom machine type](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#create) for more specifications on creating a custom machine type. */
		machineType: FormControl<string | null | undefined>,

		/** The NVIDIA driver version to use when attaching an NVIDIA GPU accelerator. The version specified here must be compatible with the GPU libraries contained in the container being executed, and must be one of the drivers hosted in the `nvidia-drivers-us-public` bucket on Google Cloud Storage. */
		nvidiaDriverVersion: FormControl<string | null | undefined>,

		/** If true, allocate a preemptible VM. */
		preemptible: FormControl<boolean | null | undefined>,

		/** If specified, the VM will only be allocated inside the matching reservation. It will fail if the VM parameters don't match the reservation. */
		reservation: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineFormGroup() {
		return new FormGroup<VirtualMachineFormProperties>({
			bootDiskSizeGb: new FormControl<number | null | undefined>(undefined),
			bootImage: new FormControl<string | null | undefined>(undefined),
			cpuPlatform: new FormControl<string | null | undefined>(undefined),
			enableStackdriverMonitoring: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			nvidiaDriverVersion: new FormControl<string | null | undefined>(undefined),
			preemptible: new FormControl<boolean | null | undefined>(undefined),
			reservation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VM networking options. */
	export interface Network {

		/** The network name to attach the VM's network interface to. The value will be prefixed with `global/networks/` unless it contains a `/`, in which case it is assumed to be a fully specified network resource URL. If unspecified, the global default network is used. */
		network?: string | null;

		/** If the specified network is configured for custom subnet creation, the name of the subnetwork to attach the instance to must be specified here. The value is prefixed with `regions/subnetworks/` unless it contains a `/`, in which case it is assumed to be a fully specified subnetwork resource URL. If the `*` character appears in the value, it is replaced with the region that the virtual machine has been allocated in. */
		subnetwork?: string | null;

		/** If set to true, do not attach a public IP address to the VM. Note that without a public IP address, additional configuration is required to allow the VM to access Google services. See https://cloud.google.com/vpc/docs/configure-private-google-access for more information. */
		usePrivateAddress?: boolean | null;
	}

	/** VM networking options. */
	export interface NetworkFormProperties {

		/** The network name to attach the VM's network interface to. The value will be prefixed with `global/networks/` unless it contains a `/`, in which case it is assumed to be a fully specified network resource URL. If unspecified, the global default network is used. */
		network: FormControl<string | null | undefined>,

		/** If the specified network is configured for custom subnet creation, the name of the subnetwork to attach the instance to must be specified here. The value is prefixed with `regions/subnetworks/` unless it contains a `/`, in which case it is assumed to be a fully specified subnetwork resource URL. If the `*` character appears in the value, it is replaced with the region that the virtual machine has been allocated in. */
		subnetwork: FormControl<string | null | undefined>,

		/** If set to true, do not attach a public IP address to the VM. Note that without a public IP address, additional configuration is required to allow the VM to access Google services. See https://cloud.google.com/vpc/docs/configure-private-google-access for more information. */
		usePrivateAddress: FormControl<boolean | null | undefined>,
	}
	export function CreateNetworkFormGroup() {
		return new FormGroup<NetworkFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
			usePrivateAddress: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Carries information about a Google Cloud service account. */
	export interface ServiceAccount {

		/** Email address of the service account. If not specified, the default Compute Engine service account for the project will be used. */
		email?: string | null;

		/** List of scopes to be enabled for this service account on the VM, in addition to the cloud-platform API scope that will be added by default. */
		scopes?: Array<string>;
	}

	/** Carries information about a Google Cloud service account. */
	export interface ServiceAccountFormProperties {

		/** Email address of the service account. If not specified, the default Compute Engine service account for the project will be used. */
		email: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccountFormGroup() {
		return new FormGroup<ServiceAccountFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Carries information about storage that can be attached to a VM. Specify either `Volume` or `Disk`, but not both. */
	export interface Volume {

		/** Configuration for an existing disk to be attached to the VM. */
		existingDisk?: ExistingDisk;

		/** Configuration for an `NFSMount` to be attached to the VM. */
		nfsMount?: NFSMount;

		/** Configuration for a persistent disk to be attached to the VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations. */
		persistentDisk?: PersistentDisk;

		/** A user-supplied name for the volume. Used when mounting the volume into `Actions`. The name must contain only upper and lowercase alphanumeric characters and hyphens and cannot start with a hyphen. */
		volume?: string | null;
	}

	/** Carries information about storage that can be attached to a VM. Specify either `Volume` or `Disk`, but not both. */
	export interface VolumeFormProperties {

		/** A user-supplied name for the volume. Used when mounting the volume into `Actions`. The name must contain only upper and lowercase alphanumeric characters and hyphens and cannot start with a hyphen. */
		volume: FormControl<string | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			volume: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for an `NFSMount` to be attached to the VM. */
	export interface NFSMount {

		/** A target NFS mount. The target must be specified as `address:/mount". */
		target?: string | null;
	}

	/** Configuration for an `NFSMount` to be attached to the VM. */
	export interface NFSMountFormProperties {

		/** A target NFS mount. The target must be specified as `address:/mount". */
		target: FormControl<string | null | undefined>,
	}
	export function CreateNFSMountFormGroup() {
		return new FormGroup<NFSMountFormProperties>({
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for a persistent disk to be attached to the VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations. */
	export interface PersistentDisk {

		/** The size, in GB, of the disk to attach. If the size is not specified, a default is chosen to ensure reasonable I/O performance. If the disk type is specified as `local-ssd`, multiple local drives are automatically combined to provide the requested size. Note, however, that each physical SSD is 375GB in size, and no more than 8 drives can be attached to a single instance. */
		sizeGb?: number | null;

		/** An image to put on the disk before attaching it to the VM. */
		sourceImage?: string | null;

		/** The Compute Engine disk type. If unspecified, `pd-standard` is used. */
		type?: string | null;
	}

	/** Configuration for a persistent disk to be attached to the VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations. */
	export interface PersistentDiskFormProperties {

		/** The size, in GB, of the disk to attach. If the size is not specified, a default is chosen to ensure reasonable I/O performance. If the disk type is specified as `local-ssd`, multiple local drives are automatically combined to provide the requested size. Note, however, that each physical SSD is 375GB in size, and no more than 8 drives can be attached to a single instance. */
		sizeGb: FormControl<number | null | undefined>,

		/** An image to put on the disk before attaching it to the VM. */
		sourceImage: FormControl<string | null | undefined>,

		/** The Compute Engine disk type. If unspecified, `pd-standard` is used. */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePersistentDiskFormGroup() {
		return new FormGroup<PersistentDiskFormProperties>({
			sizeGb: new FormControl<number | null | undefined>(undefined),
			sourceImage: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The arguments to the `RunPipeline` method. The requesting user must have the `iam.serviceAccounts.actAs` permission for the Cloud Life Sciences service account or the request will fail. */
	export interface RunPipelineRequest {

		/** User-defined labels to associate with the returned operation. These labels are not propagated to any Google Cloud Platform resources used by the operation, and can be modified at any time. To associate labels with resources created while executing the operation, see the appropriate resource message (for example, `VirtualMachine`). */
		labels?: {[id: string]: string };

		/** Specifies a series of actions to execute, expressed as Docker containers. */
		pipeline?: Pipeline;

		/** The name of an existing Pub/Sub topic. The server will publish messages to this topic whenever the status of the operation changes. The Life Sciences Service Agent account must have publisher permissions to the specified topic or notifications will not be sent. */
		pubSubTopic?: string | null;
	}

	/** The arguments to the `RunPipeline` method. The requesting user must have the `iam.serviceAccounts.actAs` permission for the Cloud Life Sciences service account or the request will fail. */
	export interface RunPipelineRequestFormProperties {

		/** User-defined labels to associate with the returned operation. These labels are not propagated to any Google Cloud Platform resources used by the operation, and can be modified at any time. To associate labels with resources created while executing the operation, see the appropriate resource message (for example, `VirtualMachine`). */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of an existing Pub/Sub topic. The server will publish messages to this topic whenever the status of the operation changes. The Life Sciences Service Agent account must have publisher permissions to the specified topic or notifications will not be sent. */
		pubSubTopic: FormControl<string | null | undefined>,
	}
	export function CreateRunPipelineRequestFormGroup() {
		return new FormGroup<RunPipelineRequestFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			pubSubTopic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to the RunPipeline method, returned in the operation's result field on success. */
	export interface RunPipelineResponse {
	}

	/** The response to the RunPipeline method, returned in the operation's result field on success. */
	export interface RunPipelineResponseFormProperties {
	}
	export function CreateRunPipelineResponseFormGroup() {
		return new FormGroup<RunPipelineResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.get`
		 * Get v2beta/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Lifesciences_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v2beta/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Lifesciences_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.list`
		 * Get v2beta/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter A string for filtering Operations. The following filter fields are supported: * createTime: The time this job was created * events: The set of event (names) that have occurred while running the pipeline. The : operator can be used to determine if a particular event has occurred. * error: If the pipeline is running, this value is NULL. Once the pipeline finishes, the value is the standard Google error code. * labels.key or labels."key with space" where key is a label key. * done: If the pipeline is running, this value is false. Once the pipeline finishes, the value is true.
		 * @param {number} pageSize The maximum number of results to return. The maximum value is 256.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Lifesciences_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.cancel`
		 * Post v2beta/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Lifesciences_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs a pipeline. The returned Operation's metadata field will contain a google.cloud.lifesciences.v2beta.Metadata object describing the status of the pipeline execution. The response field will contain a google.cloud.lifesciences.v2beta.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the *Life Sciences Service Agent* must have access to your project. This is done automatically when the Cloud Life Sciences API is first enabled, but if you delete this permission you must disable and re-enable the API to grant the Life Sciences Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `lifesciences.workflows.run`
		 * Post v2beta/{parent}/pipelines:run
		 * @param {string} parent The project and location that this request should be executed against.
		 * @return {Operation} Successful response
		 */
		Lifesciences_projects_locations_pipelines_run(parent: string, requestBody: RunPipelineRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/pipelines:run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

