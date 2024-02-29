import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. See [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported. */
	export interface AcceleratorConfig {

		/** Count of cores of this accelerator. */
		coreCount?: string | null;

		/** Type of this accelerator. */
		type?: AcceleratorConfigType | null;
	}

	/** Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. See [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported. */
	export interface AcceleratorConfigFormProperties {

		/** Count of cores of this accelerator. */
		coreCount: FormControl<string | null | undefined>,

		/** Type of this accelerator. */
		type: FormControl<AcceleratorConfigType | null | undefined>,
	}
	export function CreateAcceleratorConfigFormGroup() {
		return new FormGroup<AcceleratorConfigFormProperties>({
			coreCount: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AcceleratorConfigType | null | undefined>(undefined),
		});

	}

	export enum AcceleratorConfigType { ACCELERATOR_TYPE_UNSPECIFIED = 'ACCELERATOR_TYPE_UNSPECIFIED', NVIDIA_TESLA_K80 = 'NVIDIA_TESLA_K80', NVIDIA_TESLA_P100 = 'NVIDIA_TESLA_P100', NVIDIA_TESLA_V100 = 'NVIDIA_TESLA_V100', NVIDIA_TESLA_P4 = 'NVIDIA_TESLA_P4', NVIDIA_TESLA_T4 = 'NVIDIA_TESLA_T4', NVIDIA_TESLA_A100 = 'NVIDIA_TESLA_A100', NVIDIA_L4 = 'NVIDIA_L4', NVIDIA_TESLA_T4_VWS = 'NVIDIA_TESLA_T4_VWS', NVIDIA_TESLA_P100_VWS = 'NVIDIA_TESLA_P100_VWS', NVIDIA_TESLA_P4_VWS = 'NVIDIA_TESLA_P4_VWS', TPU_V2 = 'TPU_V2', TPU_V3 = 'TPU_V3' }


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface Expr {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression?: string | null;

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface ExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateExprFormGroup() {
		return new FormGroup<ExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the boot image used by the Runtime. Used to facilitate runtime upgradeability. */
	export interface BootImage {
	}

	/** Definition of the boot image used by the Runtime. Used to facilitate runtime upgradeability. */
	export interface BootImageFormProperties {
	}
	export function CreateBootImageFormGroup() {
		return new FormGroup<BootImageFormProperties>({
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


	/** Definition of a container image for starting a notebook instance with the environment installed in a container. */
	export interface ContainerImage {

		/** Required. The path to the container image repository. For example: `gcr.io/{project_id}/{image_name}` */
		repository?: string | null;

		/** The tag of the container image. If not specified, this defaults to the latest tag. */
		tag?: string | null;
	}

	/** Definition of a container image for starting a notebook instance with the environment installed in a container. */
	export interface ContainerImageFormProperties {

		/** Required. The path to the container image repository. For example: `gcr.io/{project_id}/{image_name}` */
		repository: FormControl<string | null | undefined>,

		/** The tag of the container image. If not specified, this defaults to the latest tag. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateContainerImageFormGroup() {
		return new FormGroup<ContainerImageFormProperties>({
			repository: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters used in Dataproc JobType executions. */
	export interface DataprocParameters {

		/** URI for cluster used to run Dataproc execution. Format: `projects/{PROJECT_ID}/regions/{REGION}/clusters/{CLUSTER_NAME}` */
		cluster?: string | null;
	}

	/** Parameters used in Dataproc JobType executions. */
	export interface DataprocParametersFormProperties {

		/** URI for cluster used to run Dataproc execution. Format: `projects/{PROJECT_ID}/regions/{REGION}/clusters/{CLUSTER_NAME}` */
		cluster: FormControl<string | null | undefined>,
	}
	export function CreateDataprocParametersFormGroup() {
		return new FormGroup<DataprocParametersFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for creating a notebook instance diagnostic file. */
	export interface DiagnoseInstanceRequest {

		/** Defines flags that are used to run the diagnostic tool */
		diagnosticConfig?: DiagnosticConfig;

		/**
		 * Optional. Maxmium amount of time in minutes before the operation times out.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeoutMinutes?: number | null;
	}

	/** Request for creating a notebook instance diagnostic file. */
	export interface DiagnoseInstanceRequestFormProperties {

		/**
		 * Optional. Maxmium amount of time in minutes before the operation times out.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateDiagnoseInstanceRequestFormGroup() {
		return new FormGroup<DiagnoseInstanceRequestFormProperties>({
			timeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines flags that are used to run the diagnostic tool */
	export interface DiagnosticConfig {

		/** Optional. Enables flag to copy all `/home/jupyter` folder contents */
		copyHomeFilesFlagEnabled?: boolean | null;

		/** Required. User Cloud Storage bucket location (REQUIRED). Must be formatted with path prefix (`gs://$GCS_BUCKET`). Permissions: User Managed Notebooks: - storage.buckets.writer: Must be given to the project's service account attached to VM. Google Managed Notebooks: - storage.buckets.writer: Must be given to the project's service account or user credentials attached to VM depending on authentication mode. Cloud Storage bucket Log file will be written to `gs://$GCS_BUCKET/$RELATIVE_PATH/$VM_DATE_$TIME.tar.gz` */
		gcsBucket?: string | null;

		/** Optional. Enables flag to capture packets from the instance for 30 seconds */
		packetCaptureFlagEnabled?: boolean | null;

		/** Optional. Defines the relative storage path in the Cloud Storage bucket where the diagnostic logs will be written: Default path will be the root directory of the Cloud Storage bucket (`gs://$GCS_BUCKET/$DATE_$TIME.tar.gz`) Example of full path where Log file will be written: `gs://$GCS_BUCKET/$RELATIVE_PATH/` */
		relativePath?: string | null;

		/** Optional. Enables flag to repair service for instance */
		repairFlagEnabled?: boolean | null;
	}

	/** Defines flags that are used to run the diagnostic tool */
	export interface DiagnosticConfigFormProperties {

		/** Optional. Enables flag to copy all `/home/jupyter` folder contents */
		copyHomeFilesFlagEnabled: FormControl<boolean | null | undefined>,

		/** Required. User Cloud Storage bucket location (REQUIRED). Must be formatted with path prefix (`gs://$GCS_BUCKET`). Permissions: User Managed Notebooks: - storage.buckets.writer: Must be given to the project's service account attached to VM. Google Managed Notebooks: - storage.buckets.writer: Must be given to the project's service account or user credentials attached to VM depending on authentication mode. Cloud Storage bucket Log file will be written to `gs://$GCS_BUCKET/$RELATIVE_PATH/$VM_DATE_$TIME.tar.gz` */
		gcsBucket: FormControl<string | null | undefined>,

		/** Optional. Enables flag to capture packets from the instance for 30 seconds */
		packetCaptureFlagEnabled: FormControl<boolean | null | undefined>,

		/** Optional. Defines the relative storage path in the Cloud Storage bucket where the diagnostic logs will be written: Default path will be the root directory of the Cloud Storage bucket (`gs://$GCS_BUCKET/$DATE_$TIME.tar.gz`) Example of full path where Log file will be written: `gs://$GCS_BUCKET/$RELATIVE_PATH/` */
		relativePath: FormControl<string | null | undefined>,

		/** Optional. Enables flag to repair service for instance */
		repairFlagEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDiagnosticConfigFormGroup() {
		return new FormGroup<DiagnosticConfigFormProperties>({
			copyHomeFilesFlagEnabled: new FormControl<boolean | null | undefined>(undefined),
			gcsBucket: new FormControl<string | null | undefined>(undefined),
			packetCaptureFlagEnabled: new FormControl<boolean | null | undefined>(undefined),
			relativePath: new FormControl<string | null | undefined>(undefined),
			repairFlagEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request for creating a notebook instance diagnostic file. */
	export interface DiagnoseRuntimeRequest {

		/** Defines flags that are used to run the diagnostic tool */
		diagnosticConfig?: DiagnosticConfig;

		/**
		 * Optional. Maxmium amount of time in minutes before the operation times out.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeoutMinutes?: number | null;
	}

	/** Request for creating a notebook instance diagnostic file. */
	export interface DiagnoseRuntimeRequestFormProperties {

		/**
		 * Optional. Maxmium amount of time in minutes before the operation times out.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateDiagnoseRuntimeRequestFormGroup() {
		return new FormGroup<DiagnoseRuntimeRequestFormProperties>({
			timeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An instance-attached disk resource. */
	export interface Disk {

		/** Indicates whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance). */
		autoDelete?: boolean | null;

		/** Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem. */
		boot?: boolean | null;

		/** Indicates a unique device name of your choice that is reflected into the `/dev/disk/by-id/google-*` tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine.This field is only applicable for persistent disks. */
		deviceName?: string | null;

		/** Indicates the size of the disk in base-2 GB. */
		diskSizeGb?: string | null;

		/** Indicates a list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options. */
		guestOsFeatures?: Array<GuestOsFeature>;

		/** A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would have a unique index number. */
		index?: string | null;

		/** Indicates the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance. Valid values: * `NVME` * `SCSI` */
		interface?: string | null;

		/** Type of the resource. Always compute#attachedDisk for attached disks. */
		kind?: string | null;

		/** A list of publicly visible licenses. Reserved for Google's use. A License represents billing and aggregate usage data for public and marketplace images. */
		licenses?: Array<string>;

		/** The mode in which to attach this disk, either `READ_WRITE` or `READ_ONLY`. If not specified, the default is to attach the disk in `READ_WRITE` mode. Valid values: * `READ_ONLY` * `READ_WRITE` */
		mode?: string | null;

		/** Indicates a valid partial or full URL to an existing Persistent Disk resource. */
		source?: string | null;

		/** Indicates the type of the disk, either `SCRATCH` or `PERSISTENT`. Valid values: * `PERSISTENT` * `SCRATCH` */
		type?: string | null;
	}

	/** An instance-attached disk resource. */
	export interface DiskFormProperties {

		/** Indicates whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance). */
		autoDelete: FormControl<boolean | null | undefined>,

		/** Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem. */
		boot: FormControl<boolean | null | undefined>,

		/** Indicates a unique device name of your choice that is reflected into the `/dev/disk/by-id/google-*` tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine.This field is only applicable for persistent disks. */
		deviceName: FormControl<string | null | undefined>,

		/** Indicates the size of the disk in base-2 GB. */
		diskSizeGb: FormControl<string | null | undefined>,

		/** A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would have a unique index number. */
		index: FormControl<string | null | undefined>,

		/** Indicates the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance. Valid values: * `NVME` * `SCSI` */
		interface: FormControl<string | null | undefined>,

		/** Type of the resource. Always compute#attachedDisk for attached disks. */
		kind: FormControl<string | null | undefined>,

		/** The mode in which to attach this disk, either `READ_WRITE` or `READ_ONLY`. If not specified, the default is to attach the disk in `READ_WRITE` mode. Valid values: * `READ_ONLY` * `READ_WRITE` */
		mode: FormControl<string | null | undefined>,

		/** Indicates a valid partial or full URL to an existing Persistent Disk resource. */
		source: FormControl<string | null | undefined>,

		/** Indicates the type of the disk, either `SCRATCH` or `PERSISTENT`. Valid values: * `PERSISTENT` * `SCRATCH` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDiskFormGroup() {
		return new FormGroup<DiskFormProperties>({
			autoDelete: new FormControl<boolean | null | undefined>(undefined),
			boot: new FormControl<boolean | null | undefined>(undefined),
			deviceName: new FormControl<string | null | undefined>(undefined),
			diskSizeGb: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<string | null | undefined>(undefined),
			interface: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Guest OS features for boot disk. */
	export interface GuestOsFeature {

		/** The ID of a supported feature. Read Enabling guest operating system features to see a list of available options. Valid values: * `FEATURE_TYPE_UNSPECIFIED` * `MULTI_IP_SUBNET` * `SECURE_BOOT` * `UEFI_COMPATIBLE` * `VIRTIO_SCSI_MULTIQUEUE` * `WINDOWS` */
		type?: string | null;
	}

	/** Guest OS features for boot disk. */
	export interface GuestOsFeatureFormProperties {

		/** The ID of a supported feature. Read Enabling guest operating system features to see a list of available options. Valid values: * `FEATURE_TYPE_UNSPECIFIED` * `MULTI_IP_SUBNET` * `SECURE_BOOT` * `UEFI_COMPATIBLE` * `VIRTIO_SCSI_MULTIQUEUE` * `WINDOWS` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGuestOsFeatureFormGroup() {
		return new FormGroup<GuestOsFeatureFormProperties>({
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


	/** Represents a custom encryption key configuration that can be applied to a resource. This will encrypt all disks in Virtual Machine. */
	export interface EncryptionConfig {

		/** The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a disks. It has the following format: `projects/{PROJECT_ID}/locations/{REGION}/keyRings/{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}` */
		kmsKey?: string | null;
	}

	/** Represents a custom encryption key configuration that can be applied to a resource. This will encrypt all disks in Virtual Machine. */
	export interface EncryptionConfigFormProperties {

		/** The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a disks. It has the following format: `projects/{PROJECT_ID}/locations/{REGION}/keyRings/{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}` */
		kmsKey: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			kmsKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of a software environment that is used to start a notebook instance. */
	export interface Environment {

		/** Definition of a container image for starting a notebook instance with the environment installed in a container. */
		containerImage?: ContainerImage;

		/** Output only. The time at which this environment was created. */
		createTime?: string | null;

		/** A brief description of this environment. */
		description?: string | null;

		/** Display name of this environment for the UI. */
		displayName?: string | null;

		/** Output only. Name of this environment. Format: `projects/{project_id}/locations/{location}/environments/{environment_id}` */
		name?: string | null;

		/** Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path. Example: `"gs://path-to-file/file-name"` */
		postStartupScript?: string | null;

		/** Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM. */
		vmImage?: VmImage;
	}

	/** Definition of a software environment that is used to start a notebook instance. */
	export interface EnvironmentFormProperties {

		/** Output only. The time at which this environment was created. */
		createTime: FormControl<string | null | undefined>,

		/** A brief description of this environment. */
		description: FormControl<string | null | undefined>,

		/** Display name of this environment for the UI. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Name of this environment. Format: `projects/{project_id}/locations/{location}/environments/{environment_id}` */
		name: FormControl<string | null | undefined>,

		/** Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path. Example: `"gs://path-to-file/file-name"` */
		postStartupScript: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postStartupScript: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM. */
	export interface VmImage {

		/** Use this VM image family to find the image; the newest image in this family will be used. */
		imageFamily?: string | null;

		/** Use VM image name to find the image. */
		imageName?: string | null;

		/** Required. The name of the Google Cloud project that this VM image belongs to. Format: `{project_id}` */
		project?: string | null;
	}

	/** Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM. */
	export interface VmImageFormProperties {

		/** Use this VM image family to find the image; the newest image in this family will be used. */
		imageFamily: FormControl<string | null | undefined>,

		/** Use VM image name to find the image. */
		imageName: FormControl<string | null | undefined>,

		/** Required. The name of the Google Cloud project that this VM image belongs to. Format: `{project_id}` */
		project: FormControl<string | null | undefined>,
	}
	export function CreateVmImageFormGroup() {
		return new FormGroup<VmImageFormProperties>({
			imageFamily: new FormControl<string | null | undefined>(undefined),
			imageName: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of an Event for a managed / semi-managed notebook instance. */
	export interface Event {

		/** Optional. Event details. This field is used to pass event information. */
		details?: {[id: string]: string };

		/** Event report time. */
		reportTime?: string | null;

		/** Event type. */
		type?: EventType | null;
	}

	/** The definition of an Event for a managed / semi-managed notebook instance. */
	export interface EventFormProperties {

		/** Optional. Event details. This field is used to pass event information. */
		details: FormControl<{[id: string]: string } | null | undefined>,

		/** Event report time. */
		reportTime: FormControl<string | null | undefined>,

		/** Event type. */
		type: FormControl<EventType | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			details: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			reportTime: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EventType | null | undefined>(undefined),
		});

	}

	export enum EventType { EVENT_TYPE_UNSPECIFIED = 'EVENT_TYPE_UNSPECIFIED', IDLE = 'IDLE', HEARTBEAT = 'HEARTBEAT', HEALTH = 'HEALTH', MAINTENANCE = 'MAINTENANCE' }


	/** The definition of a single executed notebook. */
	export interface Execution {

		/** Output only. Time the Execution was instantiated. */
		createTime?: string | null;

		/** A brief description of this execution. */
		description?: string | null;

		/** Output only. Name used for UI purposes. Name can only contain alphanumeric characters and underscores '_'. */
		displayName?: string | null;

		/** The description a notebook execution workload. */
		executionTemplate?: ExecutionTemplate;

		/** Output only. The URI of the external job used to execute the notebook. */
		jobUri?: string | null;

		/** Output only. The resource name of the execute. Format: `projects/{project_id}/locations/{location}/executions/{execution_id}` */
		name?: string | null;

		/** Output notebook file generated by this execution */
		outputNotebookFile?: string | null;

		/** Output only. State of the underlying AI Platform job. */
		state?: ExecutionState | null;

		/** Output only. Time the Execution was last updated. */
		updateTime?: string | null;
	}

	/** The definition of a single executed notebook. */
	export interface ExecutionFormProperties {

		/** Output only. Time the Execution was instantiated. */
		createTime: FormControl<string | null | undefined>,

		/** A brief description of this execution. */
		description: FormControl<string | null | undefined>,

		/** Output only. Name used for UI purposes. Name can only contain alphanumeric characters and underscores '_'. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The URI of the external job used to execute the notebook. */
		jobUri: FormControl<string | null | undefined>,

		/** Output only. The resource name of the execute. Format: `projects/{project_id}/locations/{location}/executions/{execution_id}` */
		name: FormControl<string | null | undefined>,

		/** Output notebook file generated by this execution */
		outputNotebookFile: FormControl<string | null | undefined>,

		/** Output only. State of the underlying AI Platform job. */
		state: FormControl<ExecutionState | null | undefined>,

		/** Output only. Time the Execution was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateExecutionFormGroup() {
		return new FormGroup<ExecutionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			jobUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			outputNotebookFile: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ExecutionState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description a notebook execution workload. */
	export interface ExecutionTemplate {

		/** Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. See [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus) to find a valid combination. TPUs are not supported. */
		acceleratorConfig?: SchedulerAcceleratorConfig;

		/** Container Image URI to a DLVM Example: 'gcr.io/deeplearning-platform-release/base-cu100' More examples can be found at: https://cloud.google.com/ai-platform/deep-learning-containers/docs/choosing-container */
		containerImageUri?: string | null;

		/** Parameters used in Dataproc JobType executions. */
		dataprocParameters?: DataprocParameters;

		/** Path to the notebook file to execute. Must be in a Google Cloud Storage bucket. Format: `gs://{bucket_name}/{folder}/{notebook_file_name}` Ex: `gs://notebook_user/scheduled_notebooks/sentiment_notebook.ipynb` */
		inputNotebookFile?: string | null;

		/** The type of Job to be used on this execution. */
		jobType?: ExecutionTemplateJobType | null;

		/** Name of the kernel spec to use. This must be specified if the kernel spec name on the execution target does not match the name in the input notebook file. */
		kernelSpec?: string | null;

		/** Labels for execution. If execution is scheduled, a field included will be 'nbs-scheduled'. Otherwise, it is an immediate execution, and an included field will be 'nbs-immediate'. Use fields to efficiently index between various types of executions. */
		labels?: {[id: string]: string };

		/** Specifies the type of virtual machine to use for your training job's master worker. You must specify this field when `scaleTier` is set to `CUSTOM`. You can use certain Compute Engine machine types directly in this field. The following types are supported: - `n1-standard-4` - `n1-standard-8` - `n1-standard-16` - `n1-standard-32` - `n1-standard-64` - `n1-standard-96` - `n1-highmem-2` - `n1-highmem-4` - `n1-highmem-8` - `n1-highmem-16` - `n1-highmem-32` - `n1-highmem-64` - `n1-highmem-96` - `n1-highcpu-16` - `n1-highcpu-32` - `n1-highcpu-64` - `n1-highcpu-96` Alternatively, you can use the following legacy machine types: - `standard` - `large_model` - `complex_model_s` - `complex_model_m` - `complex_model_l` - `standard_gpu` - `complex_model_m_gpu` - `complex_model_l_gpu` - `standard_p100` - `complex_model_m_p100` - `standard_v100` - `large_model_v100` - `complex_model_m_v100` - `complex_model_l_v100` Finally, if you want to use a TPU for training, specify `cloud_tpu` in this field. Learn more about the [special configuration options for training with TPU](https://cloud.google.com/ai-platform/training/docs/using-tpus#configuring_a_custom_tpu_machine). */
		masterType?: string | null;

		/** Path to the notebook folder to write to. Must be in a Google Cloud Storage bucket path. Format: `gs://{bucket_name}/{folder}` Ex: `gs://notebook_user/scheduled_notebooks` */
		outputNotebookFolder?: string | null;

		/** Parameters used within the 'input_notebook_file' notebook. */
		parameters?: string | null;

		/** Parameters to be overridden in the notebook during execution. Ref https://papermill.readthedocs.io/en/latest/usage-parameterize.html on how to specifying parameters in the input notebook and pass them here in an YAML file. Ex: `gs://notebook_user/scheduled_notebooks/sentiment_notebook_params.yaml` */
		paramsYamlFile?: string | null;

		/** Required. Scale tier of the hardware used for notebook execution. DEPRECATED Will be discontinued. As right now only CUSTOM is supported. */
		scaleTier?: ExecutionTemplateScaleTier | null;

		/** The email address of a service account to use when running the execution. You must have the `iam.serviceAccounts.actAs` permission for the specified service account. */
		serviceAccount?: string | null;

		/** The name of a Vertex AI [Tensorboard] resource to which this execution will upload Tensorboard logs. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}` */
		tensorboard?: string | null;

		/** Parameters used in Vertex AI JobType executions. */
		vertexAiParameters?: VertexAIParameters;
	}

	/** The description a notebook execution workload. */
	export interface ExecutionTemplateFormProperties {

		/** Container Image URI to a DLVM Example: 'gcr.io/deeplearning-platform-release/base-cu100' More examples can be found at: https://cloud.google.com/ai-platform/deep-learning-containers/docs/choosing-container */
		containerImageUri: FormControl<string | null | undefined>,

		/** Path to the notebook file to execute. Must be in a Google Cloud Storage bucket. Format: `gs://{bucket_name}/{folder}/{notebook_file_name}` Ex: `gs://notebook_user/scheduled_notebooks/sentiment_notebook.ipynb` */
		inputNotebookFile: FormControl<string | null | undefined>,

		/** The type of Job to be used on this execution. */
		jobType: FormControl<ExecutionTemplateJobType | null | undefined>,

		/** Name of the kernel spec to use. This must be specified if the kernel spec name on the execution target does not match the name in the input notebook file. */
		kernelSpec: FormControl<string | null | undefined>,

		/** Labels for execution. If execution is scheduled, a field included will be 'nbs-scheduled'. Otherwise, it is an immediate execution, and an included field will be 'nbs-immediate'. Use fields to efficiently index between various types of executions. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Specifies the type of virtual machine to use for your training job's master worker. You must specify this field when `scaleTier` is set to `CUSTOM`. You can use certain Compute Engine machine types directly in this field. The following types are supported: - `n1-standard-4` - `n1-standard-8` - `n1-standard-16` - `n1-standard-32` - `n1-standard-64` - `n1-standard-96` - `n1-highmem-2` - `n1-highmem-4` - `n1-highmem-8` - `n1-highmem-16` - `n1-highmem-32` - `n1-highmem-64` - `n1-highmem-96` - `n1-highcpu-16` - `n1-highcpu-32` - `n1-highcpu-64` - `n1-highcpu-96` Alternatively, you can use the following legacy machine types: - `standard` - `large_model` - `complex_model_s` - `complex_model_m` - `complex_model_l` - `standard_gpu` - `complex_model_m_gpu` - `complex_model_l_gpu` - `standard_p100` - `complex_model_m_p100` - `standard_v100` - `large_model_v100` - `complex_model_m_v100` - `complex_model_l_v100` Finally, if you want to use a TPU for training, specify `cloud_tpu` in this field. Learn more about the [special configuration options for training with TPU](https://cloud.google.com/ai-platform/training/docs/using-tpus#configuring_a_custom_tpu_machine). */
		masterType: FormControl<string | null | undefined>,

		/** Path to the notebook folder to write to. Must be in a Google Cloud Storage bucket path. Format: `gs://{bucket_name}/{folder}` Ex: `gs://notebook_user/scheduled_notebooks` */
		outputNotebookFolder: FormControl<string | null | undefined>,

		/** Parameters used within the 'input_notebook_file' notebook. */
		parameters: FormControl<string | null | undefined>,

		/** Parameters to be overridden in the notebook during execution. Ref https://papermill.readthedocs.io/en/latest/usage-parameterize.html on how to specifying parameters in the input notebook and pass them here in an YAML file. Ex: `gs://notebook_user/scheduled_notebooks/sentiment_notebook_params.yaml` */
		paramsYamlFile: FormControl<string | null | undefined>,

		/** Required. Scale tier of the hardware used for notebook execution. DEPRECATED Will be discontinued. As right now only CUSTOM is supported. */
		scaleTier: FormControl<ExecutionTemplateScaleTier | null | undefined>,

		/** The email address of a service account to use when running the execution. You must have the `iam.serviceAccounts.actAs` permission for the specified service account. */
		serviceAccount: FormControl<string | null | undefined>,

		/** The name of a Vertex AI [Tensorboard] resource to which this execution will upload Tensorboard logs. Format: `projects/{project}/locations/{location}/tensorboards/{tensorboard}` */
		tensorboard: FormControl<string | null | undefined>,
	}
	export function CreateExecutionTemplateFormGroup() {
		return new FormGroup<ExecutionTemplateFormProperties>({
			containerImageUri: new FormControl<string | null | undefined>(undefined),
			inputNotebookFile: new FormControl<string | null | undefined>(undefined),
			jobType: new FormControl<ExecutionTemplateJobType | null | undefined>(undefined),
			kernelSpec: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			masterType: new FormControl<string | null | undefined>(undefined),
			outputNotebookFolder: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
			paramsYamlFile: new FormControl<string | null | undefined>(undefined),
			scaleTier: new FormControl<ExecutionTemplateScaleTier | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			tensorboard: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. See [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus) to find a valid combination. TPUs are not supported. */
	export interface SchedulerAcceleratorConfig {

		/** Count of cores of this accelerator. */
		coreCount?: string | null;

		/** Type of this accelerator. */
		type?: SchedulerAcceleratorConfigType | null;
	}

	/** Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. See [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus) to find a valid combination. TPUs are not supported. */
	export interface SchedulerAcceleratorConfigFormProperties {

		/** Count of cores of this accelerator. */
		coreCount: FormControl<string | null | undefined>,

		/** Type of this accelerator. */
		type: FormControl<SchedulerAcceleratorConfigType | null | undefined>,
	}
	export function CreateSchedulerAcceleratorConfigFormGroup() {
		return new FormGroup<SchedulerAcceleratorConfigFormProperties>({
			coreCount: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SchedulerAcceleratorConfigType | null | undefined>(undefined),
		});

	}

	export enum SchedulerAcceleratorConfigType { SCHEDULER_ACCELERATOR_TYPE_UNSPECIFIED = 'SCHEDULER_ACCELERATOR_TYPE_UNSPECIFIED', NVIDIA_TESLA_K80 = 'NVIDIA_TESLA_K80', NVIDIA_TESLA_P100 = 'NVIDIA_TESLA_P100', NVIDIA_TESLA_V100 = 'NVIDIA_TESLA_V100', NVIDIA_TESLA_P4 = 'NVIDIA_TESLA_P4', NVIDIA_TESLA_T4 = 'NVIDIA_TESLA_T4', NVIDIA_TESLA_A100 = 'NVIDIA_TESLA_A100', TPU_V2 = 'TPU_V2', TPU_V3 = 'TPU_V3' }

	export enum ExecutionTemplateJobType { JOB_TYPE_UNSPECIFIED = 'JOB_TYPE_UNSPECIFIED', VERTEX_AI = 'VERTEX_AI', DATAPROC = 'DATAPROC' }

	export enum ExecutionTemplateScaleTier { SCALE_TIER_UNSPECIFIED = 'SCALE_TIER_UNSPECIFIED', BASIC = 'BASIC', STANDARD_1 = 'STANDARD_1', PREMIUM_1 = 'PREMIUM_1', BASIC_GPU = 'BASIC_GPU', BASIC_TPU = 'BASIC_TPU', CUSTOM = 'CUSTOM' }


	/** Parameters used in Vertex AI JobType executions. */
	export interface VertexAIParameters {

		/** Environment variables. At most 100 environment variables can be specified and unique. Example: `GCP_BUCKET=gs://my-bucket/samples/` */
		env?: {[id: string]: string };

		/** The full name of the Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the Job should be peered. For example, `projects/12345/global/networks/myVPC`. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert) is of the form `projects/{project}/global/networks/{network}`. Where `{project}` is a project number, as in `12345`, and `{network}` is a network name. Private services access must already be configured for the network. If left unspecified, the job is not peered with any network. */
		network?: string | null;
	}

	/** Parameters used in Vertex AI JobType executions. */
	export interface VertexAIParametersFormProperties {

		/** Environment variables. At most 100 environment variables can be specified and unique. Example: `GCP_BUCKET=gs://my-bucket/samples/` */
		env: FormControl<{[id: string]: string } | null | undefined>,

		/** The full name of the Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the Job should be peered. For example, `projects/12345/global/networks/myVPC`. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert) is of the form `projects/{project}/global/networks/{network}`. Where `{project}` is a project number, as in `12345`, and `{network}` is a network name. Private services access must already be configured for the network. If left unspecified, the job is not peered with any network. */
		network: FormControl<string | null | undefined>,
	}
	export function CreateVertexAIParametersFormGroup() {
		return new FormGroup<VertexAIParametersFormProperties>({
			env: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExecutionState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', QUEUED = 'QUEUED', PREPARING = 'PREPARING', RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', CANCELLING = 'CANCELLING', CANCELLED = 'CANCELLED', EXPIRED = 'EXPIRED', INITIALIZING = 'INITIALIZING' }


	/** Response for checking if a notebook instance is healthy. */
	export interface GetInstanceHealthResponse {

		/** Output only. Additional information about instance health. Example: healthInfo": { "docker_proxy_agent_status": "1", "docker_status": "1", "jupyterlab_api_status": "-1", "jupyterlab_status": "-1", "updated": "2020-10-18 09:40:03.573409" } */
		healthInfo?: {[id: string]: string };

		/** Output only. Runtime health_state. */
		healthState?: GetInstanceHealthResponseHealthState | null;
	}

	/** Response for checking if a notebook instance is healthy. */
	export interface GetInstanceHealthResponseFormProperties {

		/** Output only. Additional information about instance health. Example: healthInfo": { "docker_proxy_agent_status": "1", "docker_status": "1", "jupyterlab_api_status": "-1", "jupyterlab_status": "-1", "updated": "2020-10-18 09:40:03.573409" } */
		healthInfo: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Runtime health_state. */
		healthState: FormControl<GetInstanceHealthResponseHealthState | null | undefined>,
	}
	export function CreateGetInstanceHealthResponseFormGroup() {
		return new FormGroup<GetInstanceHealthResponseFormProperties>({
			healthInfo: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			healthState: new FormControl<GetInstanceHealthResponseHealthState | null | undefined>(undefined),
		});

	}

	export enum GetInstanceHealthResponseHealthState { HEALTH_STATE_UNSPECIFIED = 'HEALTH_STATE_UNSPECIFIED', HEALTHY = 'HEALTHY', UNHEALTHY = 'UNHEALTHY', AGENT_NOT_INSTALLED = 'AGENT_NOT_INSTALLED', AGENT_NOT_RUNNING = 'AGENT_NOT_RUNNING' }


	/** The definition of a notebook instance. */
	export interface Instance {

		/** Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. See [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported. */
		acceleratorConfig?: AcceleratorConfig;

		/** Input only. The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB. If not specified, this defaults to 100. */
		bootDiskSizeGb?: string | null;

		/** Input only. The type of the boot disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`). */
		bootDiskType?: InstanceBootDiskType | null;

		/** Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward */
		canIpForward?: boolean | null;

		/** Definition of a container image for starting a notebook instance with the environment installed in a container. */
		containerImage?: ContainerImage;

		/** Output only. Instance creation time. */
		createTime?: string | null;

		/** Output only. Email address of entity that sent original CreateInstance request. */
		creator?: string | null;

		/** Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers. */
		customGpuDriverPath?: string | null;

		/** Input only. The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). You can choose the size of the data disk based on how big your notebooks and data are. If not specified, this defaults to 100. */
		dataDiskSizeGb?: string | null;

		/** Input only. The type of the data disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`). */
		dataDiskType?: InstanceBootDiskType | null;

		/** Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. */
		diskEncryption?: InstanceDiskEncryption | null;

		/** Output only. Attached disks to notebook instance. */
		disks?: Array<Disk>;

		/** Whether the end user authorizes Google Cloud to install GPU driver on this instance. If this field is empty or set to false, the GPU driver won't be installed. Only applicable to instances with GPUs. */
		installGpuDriver?: boolean | null;

		/** InstanceMigrationEligibility represents the feasibility information of a migration from UmN to WbI. */
		instanceMigrationEligibility?: InstanceMigrationEligibility;

		/** Input only. The owner of this instance after creation. Format: `alias@example.com` Currently supports one owner only. If not specified, all of the service account users of your VM instance's service account can use the instance. */
		instanceOwners?: Array<string>;

		/** Input only. The KMS key used to encrypt the disks, only applicable if disk_encryption is CMEK. Format: `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}` Learn more about [using your own encryption keys](/kms/docs/quickstart). */
		kmsKey?: string | null;

		/** Labels to apply to this instance. These can be later modified by the setLabels method. */
		labels?: {[id: string]: string };

		/** Required. The [Compute Engine machine type](https://cloud.google.com/compute/docs/machine-types) of this instance. */
		machineType?: string | null;

		/** Custom metadata to apply to this instance. For example, to specify a Cloud Storage bucket for automatic backup, you can use the `gcs-data-bucket` metadata tag. Format: `"--metadata=gcs-data-bucket=``BUCKET''"`. */
		metadata?: {[id: string]: string };

		/** Output only. Bool indicating whether this notebook has been migrated to a Workbench Instance */
		migrated?: boolean | null;

		/** Output only. The name of this notebook instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
		name?: string | null;

		/** The name of the VPC that this instance is in. Format: `projects/{project_id}/global/networks/{network_id}` */
		network?: string | null;

		/** Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet. */
		nicType?: InstanceNicType | null;

		/** If true, the notebook instance will not register with the proxy. */
		noProxyAccess?: boolean | null;

		/** If true, no external IP will be assigned to this instance. */
		noPublicIp?: boolean | null;

		/** Input only. If true, the data disk will not be auto deleted when deleting the instance. */
		noRemoveDataDisk?: boolean | null;

		/** Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (`gs://path-to-file/file-name`). */
		postStartupScript?: string | null;

		/** Output only. The proxy endpoint that is used to access the Jupyter notebook. */
		proxyUri?: string | null;

		/** Reservation Affinity for consuming Zonal reservation. */
		reservationAffinity?: ReservationAffinity;

		/** The service account on this instance, giving access to other Google Cloud services. You can use any service account within the same project, but you must have the service account user permission to use the instance. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used. */
		serviceAccount?: string | null;

		/** Optional. The URIs of service account scopes to be included in Compute Engine instances. If not specified, the following [scopes](https://cloud.google.com/compute/docs/access/service-accounts#accesscopesiam) are defined: - https://www.googleapis.com/auth/cloud-platform - https://www.googleapis.com/auth/userinfo.email If not using default scopes, you need at least: https://www.googleapis.com/auth/compute */
		serviceAccountScopes?: Array<string>;

		/** A set of Shielded Instance options. See [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid. */
		shieldedInstanceConfig?: ShieldedInstanceConfig;

		/** Output only. The state of this instance. */
		state?: InstanceState | null;

		/** The name of the subnet that this instance is in. Format: `projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}` */
		subnet?: string | null;

		/** Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)). */
		tags?: Array<string>;

		/** Output only. Instance update time. */
		updateTime?: string | null;

		/** The upgrade history of this instance. */
		upgradeHistory?: Array<UpgradeHistoryEntry>;

		/** Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM. */
		vmImage?: VmImage;
	}

	/** The definition of a notebook instance. */
	export interface InstanceFormProperties {

		/** Input only. The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB. If not specified, this defaults to 100. */
		bootDiskSizeGb: FormControl<string | null | undefined>,

		/** Input only. The type of the boot disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`). */
		bootDiskType: FormControl<InstanceBootDiskType | null | undefined>,

		/** Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward */
		canIpForward: FormControl<boolean | null | undefined>,

		/** Output only. Instance creation time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Email address of entity that sent original CreateInstance request. */
		creator: FormControl<string | null | undefined>,

		/** Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers. */
		customGpuDriverPath: FormControl<string | null | undefined>,

		/** Input only. The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). You can choose the size of the data disk based on how big your notebooks and data are. If not specified, this defaults to 100. */
		dataDiskSizeGb: FormControl<string | null | undefined>,

		/** Input only. The type of the data disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`). */
		dataDiskType: FormControl<InstanceBootDiskType | null | undefined>,

		/** Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. */
		diskEncryption: FormControl<InstanceDiskEncryption | null | undefined>,

		/** Whether the end user authorizes Google Cloud to install GPU driver on this instance. If this field is empty or set to false, the GPU driver won't be installed. Only applicable to instances with GPUs. */
		installGpuDriver: FormControl<boolean | null | undefined>,

		/** Input only. The KMS key used to encrypt the disks, only applicable if disk_encryption is CMEK. Format: `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}` Learn more about [using your own encryption keys](/kms/docs/quickstart). */
		kmsKey: FormControl<string | null | undefined>,

		/** Labels to apply to this instance. These can be later modified by the setLabels method. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The [Compute Engine machine type](https://cloud.google.com/compute/docs/machine-types) of this instance. */
		machineType: FormControl<string | null | undefined>,

		/** Custom metadata to apply to this instance. For example, to specify a Cloud Storage bucket for automatic backup, you can use the `gcs-data-bucket` metadata tag. Format: `"--metadata=gcs-data-bucket=``BUCKET''"`. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Bool indicating whether this notebook has been migrated to a Workbench Instance */
		migrated: FormControl<boolean | null | undefined>,

		/** Output only. The name of this notebook instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
		name: FormControl<string | null | undefined>,

		/** The name of the VPC that this instance is in. Format: `projects/{project_id}/global/networks/{network_id}` */
		network: FormControl<string | null | undefined>,

		/** Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet. */
		nicType: FormControl<InstanceNicType | null | undefined>,

		/** If true, the notebook instance will not register with the proxy. */
		noProxyAccess: FormControl<boolean | null | undefined>,

		/** If true, no external IP will be assigned to this instance. */
		noPublicIp: FormControl<boolean | null | undefined>,

		/** Input only. If true, the data disk will not be auto deleted when deleting the instance. */
		noRemoveDataDisk: FormControl<boolean | null | undefined>,

		/** Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (`gs://path-to-file/file-name`). */
		postStartupScript: FormControl<string | null | undefined>,

		/** Output only. The proxy endpoint that is used to access the Jupyter notebook. */
		proxyUri: FormControl<string | null | undefined>,

		/** The service account on this instance, giving access to other Google Cloud services. You can use any service account within the same project, but you must have the service account user permission to use the instance. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Output only. The state of this instance. */
		state: FormControl<InstanceState | null | undefined>,

		/** The name of the subnet that this instance is in. Format: `projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}` */
		subnet: FormControl<string | null | undefined>,

		/** Output only. Instance update time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			bootDiskSizeGb: new FormControl<string | null | undefined>(undefined),
			bootDiskType: new FormControl<InstanceBootDiskType | null | undefined>(undefined),
			canIpForward: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			creator: new FormControl<string | null | undefined>(undefined),
			customGpuDriverPath: new FormControl<string | null | undefined>(undefined),
			dataDiskSizeGb: new FormControl<string | null | undefined>(undefined),
			dataDiskType: new FormControl<InstanceBootDiskType | null | undefined>(undefined),
			diskEncryption: new FormControl<InstanceDiskEncryption | null | undefined>(undefined),
			installGpuDriver: new FormControl<boolean | null | undefined>(undefined),
			kmsKey: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			migrated: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			nicType: new FormControl<InstanceNicType | null | undefined>(undefined),
			noProxyAccess: new FormControl<boolean | null | undefined>(undefined),
			noPublicIp: new FormControl<boolean | null | undefined>(undefined),
			noRemoveDataDisk: new FormControl<boolean | null | undefined>(undefined),
			postStartupScript: new FormControl<string | null | undefined>(undefined),
			proxyUri: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<InstanceState | null | undefined>(undefined),
			subnet: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceBootDiskType { DISK_TYPE_UNSPECIFIED = 'DISK_TYPE_UNSPECIFIED', PD_STANDARD = 'PD_STANDARD', PD_SSD = 'PD_SSD', PD_BALANCED = 'PD_BALANCED', PD_EXTREME = 'PD_EXTREME' }

	export enum InstanceDiskEncryption { DISK_ENCRYPTION_UNSPECIFIED = 'DISK_ENCRYPTION_UNSPECIFIED', GMEK = 'GMEK', CMEK = 'CMEK' }


	/** InstanceMigrationEligibility represents the feasibility information of a migration from UmN to WbI. */
	export interface InstanceMigrationEligibility {

		/** Output only. Certain configurations make the UmN ineligible for an automatic migration. A manual migration is required. */
		errors?: Array<string>;

		/** Output only. Certain configurations will be defaulted during the migration. */
		warnings?: Array<string>;
	}

	/** InstanceMigrationEligibility represents the feasibility information of a migration from UmN to WbI. */
	export interface InstanceMigrationEligibilityFormProperties {
	}
	export function CreateInstanceMigrationEligibilityFormGroup() {
		return new FormGroup<InstanceMigrationEligibilityFormProperties>({
		});

	}

	export enum InstanceNicType { UNSPECIFIED_NIC_TYPE = 'UNSPECIFIED_NIC_TYPE', VIRTIO_NET = 'VIRTIO_NET', GVNIC = 'GVNIC' }


	/** Reservation Affinity for consuming Zonal reservation. */
	export interface ReservationAffinity {

		/** Optional. Type of reservation to consume */
		consumeReservationType?: ReservationAffinityConsumeReservationType | null;

		/** Optional. Corresponds to the label key of reservation resource. */
		key?: string | null;

		/** Optional. Corresponds to the label values of reservation resource. */
		values?: Array<string>;
	}

	/** Reservation Affinity for consuming Zonal reservation. */
	export interface ReservationAffinityFormProperties {

		/** Optional. Type of reservation to consume */
		consumeReservationType: FormControl<ReservationAffinityConsumeReservationType | null | undefined>,

		/** Optional. Corresponds to the label key of reservation resource. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateReservationAffinityFormGroup() {
		return new FormGroup<ReservationAffinityFormProperties>({
			consumeReservationType: new FormControl<ReservationAffinityConsumeReservationType | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReservationAffinityConsumeReservationType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', NO_RESERVATION = 'NO_RESERVATION', ANY_RESERVATION = 'ANY_RESERVATION', SPECIFIC_RESERVATION = 'SPECIFIC_RESERVATION' }


	/** A set of Shielded Instance options. See [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid. */
	export interface ShieldedInstanceConfig {

		/** Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. Enabled by default. */
		enableIntegrityMonitoring?: boolean | null;

		/** Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default. */
		enableSecureBoot?: boolean | null;

		/** Defines whether the instance has the vTPM enabled. Enabled by default. */
		enableVtpm?: boolean | null;
	}

	/** A set of Shielded Instance options. See [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid. */
	export interface ShieldedInstanceConfigFormProperties {

		/** Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. Enabled by default. */
		enableIntegrityMonitoring: FormControl<boolean | null | undefined>,

		/** Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default. */
		enableSecureBoot: FormControl<boolean | null | undefined>,

		/** Defines whether the instance has the vTPM enabled. Enabled by default. */
		enableVtpm: FormControl<boolean | null | undefined>,
	}
	export function CreateShieldedInstanceConfigFormGroup() {
		return new FormGroup<ShieldedInstanceConfigFormProperties>({
			enableIntegrityMonitoring: new FormControl<boolean | null | undefined>(undefined),
			enableSecureBoot: new FormControl<boolean | null | undefined>(undefined),
			enableVtpm: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum InstanceState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', STARTING = 'STARTING', PROVISIONING = 'PROVISIONING', ACTIVE = 'ACTIVE', STOPPING = 'STOPPING', STOPPED = 'STOPPED', DELETED = 'DELETED', UPGRADING = 'UPGRADING', INITIALIZING = 'INITIALIZING', REGISTERING = 'REGISTERING', SUSPENDING = 'SUSPENDING', SUSPENDED = 'SUSPENDED' }


	/** The entry of VM image upgrade history. */
	export interface UpgradeHistoryEntry {

		/** Action. Rolloback or Upgrade. */
		action?: UpgradeHistoryEntryAction | null;

		/** The container image before this instance upgrade. */
		containerImage?: string | null;

		/** The time that this instance upgrade history entry is created. */
		createTime?: string | null;

		/** The framework of this notebook instance. */
		framework?: string | null;

		/** The snapshot of the boot disk of this notebook instance before upgrade. */
		snapshot?: string | null;

		/** The state of this instance upgrade history entry. */
		state?: UpgradeHistoryEntryState | null;

		/** Target VM Image. Format: `ainotebooks-vm/project/image-name/name`. */
		targetImage?: string | null;

		/** Target VM Version, like m63. */
		targetVersion?: string | null;

		/** The version of the notebook instance before this upgrade. */
		version?: string | null;

		/** The VM image before this instance upgrade. */
		vmImage?: string | null;
	}

	/** The entry of VM image upgrade history. */
	export interface UpgradeHistoryEntryFormProperties {

		/** Action. Rolloback or Upgrade. */
		action: FormControl<UpgradeHistoryEntryAction | null | undefined>,

		/** The container image before this instance upgrade. */
		containerImage: FormControl<string | null | undefined>,

		/** The time that this instance upgrade history entry is created. */
		createTime: FormControl<string | null | undefined>,

		/** The framework of this notebook instance. */
		framework: FormControl<string | null | undefined>,

		/** The snapshot of the boot disk of this notebook instance before upgrade. */
		snapshot: FormControl<string | null | undefined>,

		/** The state of this instance upgrade history entry. */
		state: FormControl<UpgradeHistoryEntryState | null | undefined>,

		/** Target VM Image. Format: `ainotebooks-vm/project/image-name/name`. */
		targetImage: FormControl<string | null | undefined>,

		/** Target VM Version, like m63. */
		targetVersion: FormControl<string | null | undefined>,

		/** The version of the notebook instance before this upgrade. */
		version: FormControl<string | null | undefined>,

		/** The VM image before this instance upgrade. */
		vmImage: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeHistoryEntryFormGroup() {
		return new FormGroup<UpgradeHistoryEntryFormProperties>({
			action: new FormControl<UpgradeHistoryEntryAction | null | undefined>(undefined),
			containerImage: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			framework: new FormControl<string | null | undefined>(undefined),
			snapshot: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<UpgradeHistoryEntryState | null | undefined>(undefined),
			targetImage: new FormControl<string | null | undefined>(undefined),
			targetVersion: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			vmImage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpgradeHistoryEntryAction { ACTION_UNSPECIFIED = 'ACTION_UNSPECIFIED', UPGRADE = 'UPGRADE', ROLLBACK = 'ROLLBACK' }

	export enum UpgradeHistoryEntryState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', STARTED = 'STARTED', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }


	/** Notebook instance configurations that can be updated. */
	export interface InstanceConfig {

		/** Verifies core internal services are running. */
		enableHealthMonitoring?: boolean | null;

		/** Cron expression in UTC timezone, used to schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron). */
		notebookUpgradeSchedule?: string | null;
	}

	/** Notebook instance configurations that can be updated. */
	export interface InstanceConfigFormProperties {

		/** Verifies core internal services are running. */
		enableHealthMonitoring: FormControl<boolean | null | undefined>,

		/** Cron expression in UTC timezone, used to schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron). */
		notebookUpgradeSchedule: FormControl<string | null | undefined>,
	}
	export function CreateInstanceConfigFormGroup() {
		return new FormGroup<InstanceConfigFormProperties>({
			enableHealthMonitoring: new FormControl<boolean | null | undefined>(undefined),
			notebookUpgradeSchedule: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for checking if a notebook instance is upgradeable. */
	export interface IsInstanceUpgradeableResponse {

		/** The new image self link this instance will be upgraded to if calling the upgrade endpoint. This field will only be populated if field upgradeable is true. */
		upgradeImage?: string | null;

		/** Additional information about upgrade. */
		upgradeInfo?: string | null;

		/** The version this instance will be upgraded to if calling the upgrade endpoint. This field will only be populated if field upgradeable is true. */
		upgradeVersion?: string | null;

		/** If an instance is upgradeable. */
		upgradeable?: boolean | null;
	}

	/** Response for checking if a notebook instance is upgradeable. */
	export interface IsInstanceUpgradeableResponseFormProperties {

		/** The new image self link this instance will be upgraded to if calling the upgrade endpoint. This field will only be populated if field upgradeable is true. */
		upgradeImage: FormControl<string | null | undefined>,

		/** Additional information about upgrade. */
		upgradeInfo: FormControl<string | null | undefined>,

		/** The version this instance will be upgraded to if calling the upgrade endpoint. This field will only be populated if field upgradeable is true. */
		upgradeVersion: FormControl<string | null | undefined>,

		/** If an instance is upgradeable. */
		upgradeable: FormControl<boolean | null | undefined>,
	}
	export function CreateIsInstanceUpgradeableResponseFormGroup() {
		return new FormGroup<IsInstanceUpgradeableResponseFormProperties>({
			upgradeImage: new FormControl<string | null | undefined>(undefined),
			upgradeInfo: new FormControl<string | null | undefined>(undefined),
			upgradeVersion: new FormControl<string | null | undefined>(undefined),
			upgradeable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response for listing environments. */
	export interface ListEnvironmentsResponse {

		/** A list of returned environments. */
		environments?: Array<Environment>;

		/** A page token that can be used to continue listing from the last result in the next list call. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for listing environments. */
	export interface ListEnvironmentsResponseFormProperties {

		/** A page token that can be used to continue listing from the last result in the next list call. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentsResponseFormGroup() {
		return new FormGroup<ListEnvironmentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing scheduled notebook executions */
	export interface ListExecutionsResponse {

		/** A list of returned instances. */
		executions?: Array<Execution>;

		/** Page token that can be used to continue listing from the last result in the next list call. */
		nextPageToken?: string | null;

		/** Executions IDs that could not be reached. For example: ['projects/{project_id}/location/{location}/executions/imagenet_test1', 'projects/{project_id}/location/{location}/executions/classifier_train1'] */
		unreachable?: Array<string>;
	}

	/** Response for listing scheduled notebook executions */
	export interface ListExecutionsResponseFormProperties {

		/** Page token that can be used to continue listing from the last result in the next list call. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListExecutionsResponseFormGroup() {
		return new FormGroup<ListExecutionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing notebook instances. */
	export interface ListInstancesResponse {

		/** A list of returned instances. */
		instances?: Array<Instance>;

		/** Page token that can be used to continue listing from the last result in the next list call. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. For example, `['us-west1-a', 'us-central1-b']`. A ListInstancesResponse will only contain either instances or unreachables, */
		unreachable?: Array<string>;
	}

	/** Response for listing notebook instances. */
	export interface ListInstancesResponseFormProperties {

		/** Page token that can be used to continue listing from the last result in the next list call. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstancesResponseFormGroup() {
		return new FormGroup<ListInstancesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
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

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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


	/** Response for listing Managed Notebook Runtimes. */
	export interface ListRuntimesResponse {

		/** Page token that can be used to continue listing from the last result in the next list call. */
		nextPageToken?: string | null;

		/** A list of returned Runtimes. */
		runtimes?: Array<Runtime>;

		/** Locations that could not be reached. For example, `['us-west1', 'us-central1']`. A ListRuntimesResponse will only contain either runtimes or unreachables, */
		unreachable?: Array<string>;
	}

	/** Response for listing Managed Notebook Runtimes. */
	export interface ListRuntimesResponseFormProperties {

		/** Page token that can be used to continue listing from the last result in the next list call. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRuntimesResponseFormGroup() {
		return new FormGroup<ListRuntimesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of a Runtime for a managed notebook instance. */
	export interface Runtime {

		/** Specifies the login configuration for Runtime */
		accessConfig?: RuntimeAccessConfig;

		/** Output only. Runtime creation time. */
		createTime?: string | null;

		/** Output only. Runtime health_state. */
		healthState?: GetInstanceHealthResponseHealthState | null;

		/** Optional. The labels to associate with this Managed Notebook or Runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster. */
		labels?: {[id: string]: string };

		/** Contains runtime daemon metrics, such as OS and kernels and sessions stats. */
		metrics?: RuntimeMetrics;

		/** Output only. Bool indicating whether this notebook has been migrated to a Workbench Instance */
		migrated?: boolean | null;

		/** Output only. The resource name of the runtime. Format: `projects/{project}/locations/{location}/runtimes/{runtimeId}` */
		name?: string | null;

		/** RuntimeMigrationEligibility represents the feasibility information of a migration from GmN to WbI. */
		runtimeMigrationEligibility?: RuntimeMigrationEligibility;

		/** Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true` */
		softwareConfig?: RuntimeSoftwareConfig;

		/** Output only. Runtime state. */
		state?: RuntimeState | null;

		/** Output only. Runtime update time. */
		updateTime?: string | null;

		/** Runtime using Virtual Machine for computing. */
		virtualMachine?: VirtualMachine;
	}

	/** The definition of a Runtime for a managed notebook instance. */
	export interface RuntimeFormProperties {

		/** Output only. Runtime creation time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Runtime health_state. */
		healthState: FormControl<GetInstanceHealthResponseHealthState | null | undefined>,

		/** Optional. The labels to associate with this Managed Notebook or Runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Bool indicating whether this notebook has been migrated to a Workbench Instance */
		migrated: FormControl<boolean | null | undefined>,

		/** Output only. The resource name of the runtime. Format: `projects/{project}/locations/{location}/runtimes/{runtimeId}` */
		name: FormControl<string | null | undefined>,

		/** Output only. Runtime state. */
		state: FormControl<RuntimeState | null | undefined>,

		/** Output only. Runtime update time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeFormGroup() {
		return new FormGroup<RuntimeFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			healthState: new FormControl<GetInstanceHealthResponseHealthState | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			migrated: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<RuntimeState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the login configuration for Runtime */
	export interface RuntimeAccessConfig {

		/** The type of access mode this instance. */
		accessType?: RuntimeAccessConfigAccessType | null;

		/** Output only. The proxy endpoint that is used to access the runtime. */
		proxyUri?: string | null;

		/** The owner of this runtime after creation. Format: `alias@example.com` Currently supports one owner only. */
		runtimeOwner?: string | null;
	}

	/** Specifies the login configuration for Runtime */
	export interface RuntimeAccessConfigFormProperties {

		/** The type of access mode this instance. */
		accessType: FormControl<RuntimeAccessConfigAccessType | null | undefined>,

		/** Output only. The proxy endpoint that is used to access the runtime. */
		proxyUri: FormControl<string | null | undefined>,

		/** The owner of this runtime after creation. Format: `alias@example.com` Currently supports one owner only. */
		runtimeOwner: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeAccessConfigFormGroup() {
		return new FormGroup<RuntimeAccessConfigFormProperties>({
			accessType: new FormControl<RuntimeAccessConfigAccessType | null | undefined>(undefined),
			proxyUri: new FormControl<string | null | undefined>(undefined),
			runtimeOwner: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RuntimeAccessConfigAccessType { RUNTIME_ACCESS_TYPE_UNSPECIFIED = 'RUNTIME_ACCESS_TYPE_UNSPECIFIED', SINGLE_USER = 'SINGLE_USER', SERVICE_ACCOUNT = 'SERVICE_ACCOUNT' }


	/** Contains runtime daemon metrics, such as OS and kernels and sessions stats. */
	export interface RuntimeMetrics {

		/** Output only. The system metrics. */
		systemMetrics?: {[id: string]: string };
	}

	/** Contains runtime daemon metrics, such as OS and kernels and sessions stats. */
	export interface RuntimeMetricsFormProperties {

		/** Output only. The system metrics. */
		systemMetrics: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRuntimeMetricsFormGroup() {
		return new FormGroup<RuntimeMetricsFormProperties>({
			systemMetrics: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** RuntimeMigrationEligibility represents the feasibility information of a migration from GmN to WbI. */
	export interface RuntimeMigrationEligibility {

		/** Output only. Certain configurations make the GmN ineligible for an automatic migration. A manual migration is required. */
		errors?: Array<string>;

		/** Output only. Certain configurations will be defaulted during the migration. */
		warnings?: Array<string>;
	}

	/** RuntimeMigrationEligibility represents the feasibility information of a migration from GmN to WbI. */
	export interface RuntimeMigrationEligibilityFormProperties {
	}
	export function CreateRuntimeMigrationEligibilityFormGroup() {
		return new FormGroup<RuntimeMigrationEligibilityFormProperties>({
		});

	}


	/** Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true` */
	export interface RuntimeSoftwareConfig {

		/** Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers. */
		customGpuDriverPath?: string | null;

		/** Bool indicating whether JupyterLab terminal will be available or not. Default: False */
		disableTerminal?: boolean | null;

		/** Verifies core internal services are running. Default: True */
		enableHealthMonitoring?: boolean | null;

		/** Runtime will automatically shutdown after idle_shutdown_time. Default: True */
		idleShutdown?: boolean | null;

		/**
		 * Time in minutes to wait before shutting down runtime. Default: 180 minutes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		idleShutdownTimeout?: number | null;

		/** Install Nvidia Driver automatically. Default: True */
		installGpuDriver?: boolean | null;

		/** Optional. Use a list of container images to use as Kernels in the notebook instance. */
		kernels?: Array<ContainerImage>;

		/** Bool indicating whether mixer client should be disabled. Default: False */
		mixerDisabled?: boolean | null;

		/** Cron expression in UTC timezone, used to schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron). */
		notebookUpgradeSchedule?: string | null;

		/** Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (`gs://path-to-file/file-name`). */
		postStartupScript?: string | null;

		/** Behavior for the post startup script. */
		postStartupScriptBehavior?: RuntimeSoftwareConfigPostStartupScriptBehavior | null;

		/** Output only. Bool indicating whether an newer image is available in an image family. */
		upgradeable?: boolean | null;

		/** Output only. version of boot image such as M100, from release label of the image. */
		version?: string | null;
	}

	/** Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true` */
	export interface RuntimeSoftwareConfigFormProperties {

		/** Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers. */
		customGpuDriverPath: FormControl<string | null | undefined>,

		/** Bool indicating whether JupyterLab terminal will be available or not. Default: False */
		disableTerminal: FormControl<boolean | null | undefined>,

		/** Verifies core internal services are running. Default: True */
		enableHealthMonitoring: FormControl<boolean | null | undefined>,

		/** Runtime will automatically shutdown after idle_shutdown_time. Default: True */
		idleShutdown: FormControl<boolean | null | undefined>,

		/**
		 * Time in minutes to wait before shutting down runtime. Default: 180 minutes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		idleShutdownTimeout: FormControl<number | null | undefined>,

		/** Install Nvidia Driver automatically. Default: True */
		installGpuDriver: FormControl<boolean | null | undefined>,

		/** Bool indicating whether mixer client should be disabled. Default: False */
		mixerDisabled: FormControl<boolean | null | undefined>,

		/** Cron expression in UTC timezone, used to schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron). */
		notebookUpgradeSchedule: FormControl<string | null | undefined>,

		/** Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (`gs://path-to-file/file-name`). */
		postStartupScript: FormControl<string | null | undefined>,

		/** Behavior for the post startup script. */
		postStartupScriptBehavior: FormControl<RuntimeSoftwareConfigPostStartupScriptBehavior | null | undefined>,

		/** Output only. Bool indicating whether an newer image is available in an image family. */
		upgradeable: FormControl<boolean | null | undefined>,

		/** Output only. version of boot image such as M100, from release label of the image. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeSoftwareConfigFormGroup() {
		return new FormGroup<RuntimeSoftwareConfigFormProperties>({
			customGpuDriverPath: new FormControl<string | null | undefined>(undefined),
			disableTerminal: new FormControl<boolean | null | undefined>(undefined),
			enableHealthMonitoring: new FormControl<boolean | null | undefined>(undefined),
			idleShutdown: new FormControl<boolean | null | undefined>(undefined),
			idleShutdownTimeout: new FormControl<number | null | undefined>(undefined),
			installGpuDriver: new FormControl<boolean | null | undefined>(undefined),
			mixerDisabled: new FormControl<boolean | null | undefined>(undefined),
			notebookUpgradeSchedule: new FormControl<string | null | undefined>(undefined),
			postStartupScript: new FormControl<string | null | undefined>(undefined),
			postStartupScriptBehavior: new FormControl<RuntimeSoftwareConfigPostStartupScriptBehavior | null | undefined>(undefined),
			upgradeable: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RuntimeSoftwareConfigPostStartupScriptBehavior { POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED = 'POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED', RUN_EVERY_START = 'RUN_EVERY_START', DOWNLOAD_AND_RUN_EVERY_START = 'DOWNLOAD_AND_RUN_EVERY_START' }

	export enum RuntimeState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', STARTING = 'STARTING', PROVISIONING = 'PROVISIONING', ACTIVE = 'ACTIVE', STOPPING = 'STOPPING', STOPPED = 'STOPPED', DELETING = 'DELETING', UPGRADING = 'UPGRADING', INITIALIZING = 'INITIALIZING' }


	/** Runtime using Virtual Machine for computing. */
	export interface VirtualMachine {

		/** Output only. The unique identifier of the Managed Compute Engine instance. */
		instanceId?: string | null;

		/** Output only. The user-friendly name of the Managed Compute Engine instance. */
		instanceName?: string | null;

		/** The config settings for virtual machine. */
		virtualMachineConfig?: VirtualMachineConfig;
	}

	/** Runtime using Virtual Machine for computing. */
	export interface VirtualMachineFormProperties {

		/** Output only. The unique identifier of the Managed Compute Engine instance. */
		instanceId: FormControl<string | null | undefined>,

		/** Output only. The user-friendly name of the Managed Compute Engine instance. */
		instanceName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineFormGroup() {
		return new FormGroup<VirtualMachineFormProperties>({
			instanceId: new FormControl<string | null | undefined>(undefined),
			instanceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The config settings for virtual machine. */
	export interface VirtualMachineConfig {

		/** Definition of the types of hardware accelerators that can be used. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `nvidia-tesla-k80` * `nvidia-tesla-p100` * `nvidia-tesla-v100` * `nvidia-tesla-p4` * `nvidia-tesla-t4` * `nvidia-tesla-a100` */
		acceleratorConfig?: RuntimeAcceleratorConfig;

		/** Definition of the boot image used by the Runtime. Used to facilitate runtime upgradeability. */
		bootImage?: BootImage;

		/** Optional. Use a list of container images to use as Kernels in the notebook instance. */
		containerImages?: Array<ContainerImage>;

		/** A Local attached disk resource. */
		dataDisk?: LocalDisk;

		/** Represents a custom encryption key configuration that can be applied to a resource. This will encrypt all disks in Virtual Machine. */
		encryptionConfig?: EncryptionConfig;

		/** Output only. The Compute Engine guest attributes. (see [Project and instance guest attributes](https://cloud.google.com/compute/docs/storing-retrieving-metadata#guest_attributes)). */
		guestAttributes?: {[id: string]: string };

		/** Optional. If true, runtime will only have internal IP addresses. By default, runtimes are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each vm. This `internal_ip_only` restriction can only be enabled for subnetwork enabled networks, and all dependencies must be configured to be accessible without external IP addresses. */
		internalIpOnly?: boolean | null;

		/** Optional. The labels to associate with this runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster. */
		labels?: {[id: string]: string };

		/** Required. The Compute Engine machine type used for runtimes. Short name is valid. Examples: * `n1-standard-2` * `e2-standard-8` */
		machineType?: string | null;

		/** Optional. The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)). */
		metadata?: {[id: string]: string };

		/** Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork. If neither `network` nor `subnet` is specified, the "default" network of the project is used, if it exists. A full URL or partial URI. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/global/networks/default` * `projects/[project_id]/global/networks/default` Runtimes are managed resources inside Google Infrastructure. Runtimes support the following network configurations: * Google Managed Network (Network & subnet are empty) * Consumer Project VPC (network & subnet are required). Requires configuring Private Service Access. * Shared VPC (network & subnet are required). Requires configuring Private Service Access. */
		network?: string | null;

		/** Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet. */
		nicType?: InstanceNicType | null;

		/** Optional. Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range *name* if it's assigned. Example: managed-notebooks-range-c PEERING_RANGE_NAME_3=managed-notebooks-range-c gcloud compute addresses create $PEERING_RANGE_NAME_3 \ --global \ --prefix-length=24 \ --description="Google Cloud Managed Notebooks Range 24 c" \ --network=$NETWORK \ --addresses=192.168.0.0 \ --purpose=VPC_PEERING Field value will be: `managed-notebooks-range-c` */
		reservedIpRange?: string | null;

		/** A set of Shielded Instance options. See [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid. */
		shieldedInstanceConfig?: RuntimeShieldedInstanceConfig;

		/** Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network. A full URL or partial URI are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0` * `projects/[project_id]/regions/us-east1/subnetworks/sub0` */
		subnet?: string | null;

		/** Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)). */
		tags?: Array<string>;

		/** Output only. The zone where the virtual machine is located. If using regional request, the notebooks service will pick a location in the corresponding runtime region. On a get request, zone will always be present. Example: * `us-central1-b` */
		zone?: string | null;
	}

	/** The config settings for virtual machine. */
	export interface VirtualMachineConfigFormProperties {

		/** Output only. The Compute Engine guest attributes. (see [Project and instance guest attributes](https://cloud.google.com/compute/docs/storing-retrieving-metadata#guest_attributes)). */
		guestAttributes: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. If true, runtime will only have internal IP addresses. By default, runtimes are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each vm. This `internal_ip_only` restriction can only be enabled for subnetwork enabled networks, and all dependencies must be configured to be accessible without external IP addresses. */
		internalIpOnly: FormControl<boolean | null | undefined>,

		/** Optional. The labels to associate with this runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The Compute Engine machine type used for runtimes. Short name is valid. Examples: * `n1-standard-2` * `e2-standard-8` */
		machineType: FormControl<string | null | undefined>,

		/** Optional. The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)). */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork. If neither `network` nor `subnet` is specified, the "default" network of the project is used, if it exists. A full URL or partial URI. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/global/networks/default` * `projects/[project_id]/global/networks/default` Runtimes are managed resources inside Google Infrastructure. Runtimes support the following network configurations: * Google Managed Network (Network & subnet are empty) * Consumer Project VPC (network & subnet are required). Requires configuring Private Service Access. * Shared VPC (network & subnet are required). Requires configuring Private Service Access. */
		network: FormControl<string | null | undefined>,

		/** Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet. */
		nicType: FormControl<InstanceNicType | null | undefined>,

		/** Optional. Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range *name* if it's assigned. Example: managed-notebooks-range-c PEERING_RANGE_NAME_3=managed-notebooks-range-c gcloud compute addresses create $PEERING_RANGE_NAME_3 \ --global \ --prefix-length=24 \ --description="Google Cloud Managed Notebooks Range 24 c" \ --network=$NETWORK \ --addresses=192.168.0.0 \ --purpose=VPC_PEERING Field value will be: `managed-notebooks-range-c` */
		reservedIpRange: FormControl<string | null | undefined>,

		/** Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network. A full URL or partial URI are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0` * `projects/[project_id]/regions/us-east1/subnetworks/sub0` */
		subnet: FormControl<string | null | undefined>,

		/** Output only. The zone where the virtual machine is located. If using regional request, the notebooks service will pick a location in the corresponding runtime region. On a get request, zone will always be present. Example: * `us-central1-b` */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineConfigFormGroup() {
		return new FormGroup<VirtualMachineConfigFormProperties>({
			guestAttributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			internalIpOnly: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			nicType: new FormControl<InstanceNicType | null | undefined>(undefined),
			reservedIpRange: new FormControl<string | null | undefined>(undefined),
			subnet: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the types of hardware accelerators that can be used. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `nvidia-tesla-k80` * `nvidia-tesla-p100` * `nvidia-tesla-v100` * `nvidia-tesla-p4` * `nvidia-tesla-t4` * `nvidia-tesla-a100` */
	export interface RuntimeAcceleratorConfig {

		/** Count of cores of this accelerator. */
		coreCount?: string | null;

		/** Accelerator model. */
		type?: RuntimeAcceleratorConfigType | null;
	}

	/** Definition of the types of hardware accelerators that can be used. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `nvidia-tesla-k80` * `nvidia-tesla-p100` * `nvidia-tesla-v100` * `nvidia-tesla-p4` * `nvidia-tesla-t4` * `nvidia-tesla-a100` */
	export interface RuntimeAcceleratorConfigFormProperties {

		/** Count of cores of this accelerator. */
		coreCount: FormControl<string | null | undefined>,

		/** Accelerator model. */
		type: FormControl<RuntimeAcceleratorConfigType | null | undefined>,
	}
	export function CreateRuntimeAcceleratorConfigFormGroup() {
		return new FormGroup<RuntimeAcceleratorConfigFormProperties>({
			coreCount: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<RuntimeAcceleratorConfigType | null | undefined>(undefined),
		});

	}

	export enum RuntimeAcceleratorConfigType { ACCELERATOR_TYPE_UNSPECIFIED = 'ACCELERATOR_TYPE_UNSPECIFIED', NVIDIA_TESLA_K80 = 'NVIDIA_TESLA_K80', NVIDIA_TESLA_P100 = 'NVIDIA_TESLA_P100', NVIDIA_TESLA_V100 = 'NVIDIA_TESLA_V100', NVIDIA_TESLA_P4 = 'NVIDIA_TESLA_P4', NVIDIA_TESLA_T4 = 'NVIDIA_TESLA_T4', NVIDIA_TESLA_A100 = 'NVIDIA_TESLA_A100', NVIDIA_L4 = 'NVIDIA_L4', TPU_V2 = 'TPU_V2', TPU_V3 = 'TPU_V3', NVIDIA_TESLA_T4_VWS = 'NVIDIA_TESLA_T4_VWS', NVIDIA_TESLA_P100_VWS = 'NVIDIA_TESLA_P100_VWS', NVIDIA_TESLA_P4_VWS = 'NVIDIA_TESLA_P4_VWS' }


	/** A Local attached disk resource. */
	export interface LocalDisk {

		/** Optional. Output only. Specifies whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance). */
		autoDelete?: boolean | null;

		/** Optional. Output only. Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem. */
		boot?: boolean | null;

		/** Optional. Output only. Specifies a unique device name of your choice that is reflected into the `/dev/disk/by-id/google-*` tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks. */
		deviceName?: string | null;

		/** Output only. Indicates a list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options. */
		guestOsFeatures?: Array<RuntimeGuestOsFeature>;

		/**
		 * Output only. A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would have a unique index number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index?: number | null;

		/** Input only. Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new runtime. This property is mutually exclusive with the source property; you can only define one or the other, but not both. */
		initializeParams?: LocalDiskInitializeParams;

		/** Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance. Valid values: * `NVME` * `SCSI` */
		interface?: string | null;

		/** Output only. Type of the resource. Always compute#attachedDisk for attached disks. */
		kind?: string | null;

		/** Output only. Any valid publicly visible licenses. */
		licenses?: Array<string>;

		/** The mode in which to attach this disk, either `READ_WRITE` or `READ_ONLY`. If not specified, the default is to attach the disk in `READ_WRITE` mode. Valid values: * `READ_ONLY` * `READ_WRITE` */
		mode?: string | null;

		/** Specifies a valid partial or full URL to an existing Persistent Disk resource. */
		source?: string | null;

		/** Specifies the type of the disk, either `SCRATCH` or `PERSISTENT`. If not specified, the default is `PERSISTENT`. Valid values: * `PERSISTENT` * `SCRATCH` */
		type?: string | null;
	}

	/** A Local attached disk resource. */
	export interface LocalDiskFormProperties {

		/** Optional. Output only. Specifies whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance). */
		autoDelete: FormControl<boolean | null | undefined>,

		/** Optional. Output only. Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem. */
		boot: FormControl<boolean | null | undefined>,

		/** Optional. Output only. Specifies a unique device name of your choice that is reflected into the `/dev/disk/by-id/google-*` tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks. */
		deviceName: FormControl<string | null | undefined>,

		/**
		 * Output only. A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would have a unique index number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: FormControl<number | null | undefined>,

		/** Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance. Valid values: * `NVME` * `SCSI` */
		interface: FormControl<string | null | undefined>,

		/** Output only. Type of the resource. Always compute#attachedDisk for attached disks. */
		kind: FormControl<string | null | undefined>,

		/** The mode in which to attach this disk, either `READ_WRITE` or `READ_ONLY`. If not specified, the default is to attach the disk in `READ_WRITE` mode. Valid values: * `READ_ONLY` * `READ_WRITE` */
		mode: FormControl<string | null | undefined>,

		/** Specifies a valid partial or full URL to an existing Persistent Disk resource. */
		source: FormControl<string | null | undefined>,

		/** Specifies the type of the disk, either `SCRATCH` or `PERSISTENT`. If not specified, the default is `PERSISTENT`. Valid values: * `PERSISTENT` * `SCRATCH` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLocalDiskFormGroup() {
		return new FormGroup<LocalDiskFormProperties>({
			autoDelete: new FormControl<boolean | null | undefined>(undefined),
			boot: new FormControl<boolean | null | undefined>(undefined),
			deviceName: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			interface: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Optional. A list of features to enable on the guest operating system. Applicable only for bootable images. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Guest OS features for boot disk. */
	export interface RuntimeGuestOsFeature {

		/** The ID of a supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Valid values: * `FEATURE_TYPE_UNSPECIFIED` * `MULTI_IP_SUBNET` * `SECURE_BOOT` * `UEFI_COMPATIBLE` * `VIRTIO_SCSI_MULTIQUEUE` * `WINDOWS` */
		type?: string | null;
	}

	/** Optional. A list of features to enable on the guest operating system. Applicable only for bootable images. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Guest OS features for boot disk. */
	export interface RuntimeGuestOsFeatureFormProperties {

		/** The ID of a supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Valid values: * `FEATURE_TYPE_UNSPECIFIED` * `MULTI_IP_SUBNET` * `SECURE_BOOT` * `UEFI_COMPATIBLE` * `VIRTIO_SCSI_MULTIQUEUE` * `WINDOWS` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeGuestOsFeatureFormGroup() {
		return new FormGroup<RuntimeGuestOsFeatureFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input only. Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new runtime. This property is mutually exclusive with the source property; you can only define one or the other, but not both. */
	export interface LocalDiskInitializeParams {

		/** Optional. Provide this property when creating the disk. */
		description?: string | null;

		/** Optional. Specifies the disk name. If not specified, the default is to use the name of the instance. If the disk with the instance name exists already in the given zone/region, a new name will be automatically generated. */
		diskName?: string | null;

		/** Optional. Specifies the size of the disk in base-2 GB. If not specified, the disk will be the same size as the image (usually 10GB). If specified, the size must be equal to or larger than 10GB. Default 100 GB. */
		diskSizeGb?: string | null;

		/** Input only. The type of the boot disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`). */
		diskType?: InstanceBootDiskType | null;

		/** Optional. Labels to apply to this disk. These can be later modified by the disks.setLabels method. This field is only applicable for persistent disks. */
		labels?: {[id: string]: string };
	}

	/** Input only. Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new runtime. This property is mutually exclusive with the source property; you can only define one or the other, but not both. */
	export interface LocalDiskInitializeParamsFormProperties {

		/** Optional. Provide this property when creating the disk. */
		description: FormControl<string | null | undefined>,

		/** Optional. Specifies the disk name. If not specified, the default is to use the name of the instance. If the disk with the instance name exists already in the given zone/region, a new name will be automatically generated. */
		diskName: FormControl<string | null | undefined>,

		/** Optional. Specifies the size of the disk in base-2 GB. If not specified, the disk will be the same size as the image (usually 10GB). If specified, the size must be equal to or larger than 10GB. Default 100 GB. */
		diskSizeGb: FormControl<string | null | undefined>,

		/** Input only. The type of the boot disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`). */
		diskType: FormControl<InstanceBootDiskType | null | undefined>,

		/** Optional. Labels to apply to this disk. These can be later modified by the disks.setLabels method. This field is only applicable for persistent disks. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateLocalDiskInitializeParamsFormGroup() {
		return new FormGroup<LocalDiskInitializeParamsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			diskName: new FormControl<string | null | undefined>(undefined),
			diskSizeGb: new FormControl<string | null | undefined>(undefined),
			diskType: new FormControl<InstanceBootDiskType | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A set of Shielded Instance options. See [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid. */
	export interface RuntimeShieldedInstanceConfig {

		/** Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. Enabled by default. */
		enableIntegrityMonitoring?: boolean | null;

		/** Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default. */
		enableSecureBoot?: boolean | null;

		/** Defines whether the instance has the vTPM enabled. Enabled by default. */
		enableVtpm?: boolean | null;
	}

	/** A set of Shielded Instance options. See [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid. */
	export interface RuntimeShieldedInstanceConfigFormProperties {

		/** Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. Enabled by default. */
		enableIntegrityMonitoring: FormControl<boolean | null | undefined>,

		/** Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default. */
		enableSecureBoot: FormControl<boolean | null | undefined>,

		/** Defines whether the instance has the vTPM enabled. Enabled by default. */
		enableVtpm: FormControl<boolean | null | undefined>,
	}
	export function CreateRuntimeShieldedInstanceConfigFormGroup() {
		return new FormGroup<RuntimeShieldedInstanceConfigFormProperties>({
			enableIntegrityMonitoring: new FormControl<boolean | null | undefined>(undefined),
			enableSecureBoot: new FormControl<boolean | null | undefined>(undefined),
			enableVtpm: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response for listing scheduled notebook job. */
	export interface ListSchedulesResponse {

		/** Page token that can be used to continue listing from the last result in the next list call. */
		nextPageToken?: string | null;

		/** A list of returned instances. */
		schedules?: Array<Schedule>;

		/** Schedules that could not be reached. For example: ['projects/{project_id}/location/{location}/schedules/monthly_digest', 'projects/{project_id}/location/{location}/schedules/weekly_sentiment'] */
		unreachable?: Array<string>;
	}

	/** Response for listing scheduled notebook job. */
	export interface ListSchedulesResponseFormProperties {

		/** Page token that can be used to continue listing from the last result in the next list call. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchedulesResponseFormGroup() {
		return new FormGroup<ListSchedulesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of a schedule. */
	export interface Schedule {

		/** Output only. Time the schedule was created. */
		createTime?: string | null;

		/** Cron-tab formatted schedule by which the job will execute. Format: minute, hour, day of month, month, day of week, e.g. `0 0 * * WED` = every Wednesday More examples: https://crontab.guru/examples.html */
		cronSchedule?: string | null;

		/** A brief description of this environment. */
		description?: string | null;

		/** Output only. Display name used for UI purposes. Name can only contain alphanumeric characters, hyphens `-`, and underscores `_`. */
		displayName?: string | null;

		/** The description a notebook execution workload. */
		executionTemplate?: ExecutionTemplate;

		/** Output only. The name of this schedule. Format: `projects/{project_id}/locations/{location}/schedules/{schedule_id}` */
		name?: string | null;

		/** Output only. The most recent execution names triggered from this schedule and their corresponding states. */
		recentExecutions?: Array<Execution>;
		state?: ScheduleState | null;

		/** Timezone on which the cron_schedule. The value of this field must be a time zone name from the tz database. TZ Database: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones Note that some time zones include a provision for daylight savings time. The rules for daylight saving time are determined by the chosen tz. For UTC use the string "utc". If a time zone is not specified, the default will be in UTC (also known as GMT). */
		timeZone?: string | null;

		/** Output only. Time the schedule was last updated. */
		updateTime?: string | null;
	}

	/** The definition of a schedule. */
	export interface ScheduleFormProperties {

		/** Output only. Time the schedule was created. */
		createTime: FormControl<string | null | undefined>,

		/** Cron-tab formatted schedule by which the job will execute. Format: minute, hour, day of month, month, day of week, e.g. `0 0 * * WED` = every Wednesday More examples: https://crontab.guru/examples.html */
		cronSchedule: FormControl<string | null | undefined>,

		/** A brief description of this environment. */
		description: FormControl<string | null | undefined>,

		/** Output only. Display name used for UI purposes. Name can only contain alphanumeric characters, hyphens `-`, and underscores `_`. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The name of this schedule. Format: `projects/{project_id}/locations/{location}/schedules/{schedule_id}` */
		name: FormControl<string | null | undefined>,
		state: FormControl<ScheduleState | null | undefined>,

		/** Timezone on which the cron_schedule. The value of this field must be a time zone name from the tz database. TZ Database: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones Note that some time zones include a provision for daylight savings time. The rules for daylight saving time are determined by the chosen tz. For UTC use the string "utc". If a time zone is not specified, the default will be in UTC (also known as GMT). */
		timeZone: FormControl<string | null | undefined>,

		/** Output only. Time the schedule was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			cronSchedule: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ScheduleState | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScheduleState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ENABLED = 'ENABLED', PAUSED = 'PAUSED', DISABLED = 'DISABLED', UPDATE_FAILED = 'UPDATE_FAILED', INITIALIZING = 'INITIALIZING', DELETING = 'DELETING' }


	/** Request for migrating a User-Managed Notebook to Workbench Instances. */
	export interface MigrateInstanceRequest {

		/** Optional. Specifies the behavior of post startup script during migration. */
		postStartupScriptOption?: MigrateInstanceRequestPostStartupScriptOption | null;
	}

	/** Request for migrating a User-Managed Notebook to Workbench Instances. */
	export interface MigrateInstanceRequestFormProperties {

		/** Optional. Specifies the behavior of post startup script during migration. */
		postStartupScriptOption: FormControl<MigrateInstanceRequestPostStartupScriptOption | null | undefined>,
	}
	export function CreateMigrateInstanceRequestFormGroup() {
		return new FormGroup<MigrateInstanceRequestFormProperties>({
			postStartupScriptOption: new FormControl<MigrateInstanceRequestPostStartupScriptOption | null | undefined>(undefined),
		});

	}

	export enum MigrateInstanceRequestPostStartupScriptOption { POST_STARTUP_SCRIPT_OPTION_UNSPECIFIED = 'POST_STARTUP_SCRIPT_OPTION_UNSPECIFIED', POST_STARTUP_SCRIPT_OPTION_SKIP = 'POST_STARTUP_SCRIPT_OPTION_SKIP', POST_STARTUP_SCRIPT_OPTION_RERUN = 'POST_STARTUP_SCRIPT_OPTION_RERUN' }


	/** Request for migrating a Runtime to a Workbench Instance. */
	export interface MigrateRuntimeRequest {

		/** Optional. Name of the VPC that the new Instance is in. This is required if the Runtime uses google-managed network. If the Runtime uses customer-owned network, it will reuse the same VPC, and this field must be empty. Format: `projects/{project_id}/global/networks/{network_id}` */
		network?: string | null;

		/** Optional. Specifies the behavior of post startup script during migration. */
		postStartupScriptOption?: MigrateInstanceRequestPostStartupScriptOption | null;

		/** Optional. Idempotent request UUID. */
		requestId?: string | null;

		/** Optional. The service account to be included in the Compute Engine instance of the new Workbench Instance when the Runtime uses "single user only" mode for permission. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used. When the Runtime uses service account mode for permission, it will reuse the same service account, and this field must be empty. */
		serviceAccount?: string | null;

		/** Optional. Name of the subnet that the new Instance is in. This is required if the Runtime uses google-managed network. If the Runtime uses customer-owned network, it will reuse the same subnet, and this field must be empty. Format: `projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}` */
		subnet?: string | null;
	}

	/** Request for migrating a Runtime to a Workbench Instance. */
	export interface MigrateRuntimeRequestFormProperties {

		/** Optional. Name of the VPC that the new Instance is in. This is required if the Runtime uses google-managed network. If the Runtime uses customer-owned network, it will reuse the same VPC, and this field must be empty. Format: `projects/{project_id}/global/networks/{network_id}` */
		network: FormControl<string | null | undefined>,

		/** Optional. Specifies the behavior of post startup script during migration. */
		postStartupScriptOption: FormControl<MigrateInstanceRequestPostStartupScriptOption | null | undefined>,

		/** Optional. Idempotent request UUID. */
		requestId: FormControl<string | null | undefined>,

		/** Optional. The service account to be included in the Compute Engine instance of the new Workbench Instance when the Runtime uses "single user only" mode for permission. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used. When the Runtime uses service account mode for permission, it will reuse the same service account, and this field must be empty. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Optional. Name of the subnet that the new Instance is in. This is required if the Runtime uses google-managed network. If the Runtime uses customer-owned network, it will reuse the same subnet, and this field must be empty. Format: `projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}` */
		subnet: FormControl<string | null | undefined>,
	}
	export function CreateMigrateRuntimeRequestFormGroup() {
		return new FormGroup<MigrateRuntimeRequestFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
			postStartupScriptOption: new FormControl<MigrateInstanceRequestPostStartupScriptOption | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			subnet: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** API version used to start the operation. */
		apiVersion?: string | null;

		/** The time the operation was created. */
		createTime?: string | null;

		/** The time the operation finished running. */
		endTime?: string | null;

		/** API endpoint name of this operation. */
		endpoint?: string | null;

		/** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** API endpoint name of this operation. */
		endpoint: FormControl<string | null | undefined>,

		/** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request for getting a new access token. */
	export interface RefreshRuntimeTokenInternalRequest {

		/** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
		vmId?: string | null;
	}

	/** Request for getting a new access token. */
	export interface RefreshRuntimeTokenInternalRequestFormProperties {

		/** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
		vmId: FormControl<string | null | undefined>,
	}
	export function CreateRefreshRuntimeTokenInternalRequestFormGroup() {
		return new FormGroup<RefreshRuntimeTokenInternalRequestFormProperties>({
			vmId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response with a new access token. */
	export interface RefreshRuntimeTokenInternalResponse {

		/** The OAuth 2.0 access token. */
		accessToken?: string | null;

		/** Output only. Token expiration time. */
		expireTime?: string | null;
	}

	/** Response with a new access token. */
	export interface RefreshRuntimeTokenInternalResponseFormProperties {

		/** The OAuth 2.0 access token. */
		accessToken: FormControl<string | null | undefined>,

		/** Output only. Token expiration time. */
		expireTime: FormControl<string | null | undefined>,
	}
	export function CreateRefreshRuntimeTokenInternalResponseFormGroup() {
		return new FormGroup<RefreshRuntimeTokenInternalResponseFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for registering a notebook instance. */
	export interface RegisterInstanceRequest {

		/** Required. User defined unique ID of this instance. The `instance_id` must be 1 to 63 characters long and contain only lowercase letters, numeric characters, and dashes. The first character must be a lowercase letter and the last character cannot be a dash. */
		instanceId?: string | null;
	}

	/** Request for registering a notebook instance. */
	export interface RegisterInstanceRequestFormProperties {

		/** Required. User defined unique ID of this instance. The `instance_id` must be 1 to 63 characters long and contain only lowercase letters, numeric characters, and dashes. The first character must be a lowercase letter and the last character cannot be a dash. */
		instanceId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterInstanceRequestFormGroup() {
		return new FormGroup<RegisterInstanceRequestFormProperties>({
			instanceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for reporting a Managed Notebook Event. */
	export interface ReportInstanceEventRequest {

		/** The definition of an Event for a managed / semi-managed notebook instance. */
		event?: Event;

		/** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
		vmId?: string | null;
	}

	/** Request for reporting a Managed Notebook Event. */
	export interface ReportInstanceEventRequestFormProperties {

		/** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
		vmId: FormControl<string | null | undefined>,
	}
	export function CreateReportInstanceEventRequestFormGroup() {
		return new FormGroup<ReportInstanceEventRequestFormProperties>({
			vmId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for notebook instances to report information to Notebooks API. */
	export interface ReportInstanceInfoRequest {

		/** The metadata reported to Notebooks API. This will be merged to the instance metadata store */
		metadata?: {[id: string]: string };

		/** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
		vmId?: string | null;
	}

	/** Request for notebook instances to report information to Notebooks API. */
	export interface ReportInstanceInfoRequestFormProperties {

		/** The metadata reported to Notebooks API. This will be merged to the instance metadata store */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
		vmId: FormControl<string | null | undefined>,
	}
	export function CreateReportInstanceInfoRequestFormGroup() {
		return new FormGroup<ReportInstanceInfoRequestFormProperties>({
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			vmId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for reporting a Managed Notebook Event. */
	export interface ReportRuntimeEventRequest {

		/** The definition of an Event for a managed / semi-managed notebook instance. */
		event?: Event;

		/** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
		vmId?: string | null;
	}

	/** Request for reporting a Managed Notebook Event. */
	export interface ReportRuntimeEventRequestFormProperties {

		/** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
		vmId: FormControl<string | null | undefined>,
	}
	export function CreateReportRuntimeEventRequestFormGroup() {
		return new FormGroup<ReportRuntimeEventRequestFormProperties>({
			vmId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for resetting a notebook instance */
	export interface ResetInstanceRequest {
	}

	/** Request for resetting a notebook instance */
	export interface ResetInstanceRequestFormProperties {
	}
	export function CreateResetInstanceRequestFormGroup() {
		return new FormGroup<ResetInstanceRequestFormProperties>({
		});

	}


	/** Request for resetting a Managed Notebook Runtime. */
	export interface ResetRuntimeRequest {

		/** Idempotent request UUID. */
		requestId?: string | null;
	}

	/** Request for resetting a Managed Notebook Runtime. */
	export interface ResetRuntimeRequestFormProperties {

		/** Idempotent request UUID. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateResetRuntimeRequestFormGroup() {
		return new FormGroup<ResetRuntimeRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for rollbacking a notebook instance */
	export interface RollbackInstanceRequest {

		/** Required. The snapshot for rollback. Example: `projects/test-project/global/snapshots/krwlzipynril`. */
		targetSnapshot?: string | null;
	}

	/** Request for rollbacking a notebook instance */
	export interface RollbackInstanceRequestFormProperties {

		/** Required. The snapshot for rollback. Example: `projects/test-project/global/snapshots/krwlzipynril`. */
		targetSnapshot: FormControl<string | null | undefined>,
	}
	export function CreateRollbackInstanceRequestFormGroup() {
		return new FormGroup<RollbackInstanceRequestFormProperties>({
			targetSnapshot: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
		});

	}


	/** Request for setting instance accelerator. */
	export interface SetInstanceAcceleratorRequest {

		/** Required. Count of cores of this accelerator. Note that not all combinations of `type` and `core_count` are valid. See [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported. */
		coreCount?: string | null;

		/** Required. Type of this accelerator. */
		type?: AcceleratorConfigType | null;
	}

	/** Request for setting instance accelerator. */
	export interface SetInstanceAcceleratorRequestFormProperties {

		/** Required. Count of cores of this accelerator. Note that not all combinations of `type` and `core_count` are valid. See [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported. */
		coreCount: FormControl<string | null | undefined>,

		/** Required. Type of this accelerator. */
		type: FormControl<AcceleratorConfigType | null | undefined>,
	}
	export function CreateSetInstanceAcceleratorRequestFormGroup() {
		return new FormGroup<SetInstanceAcceleratorRequestFormProperties>({
			coreCount: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AcceleratorConfigType | null | undefined>(undefined),
		});

	}


	/** Request for setting instance labels. */
	export interface SetInstanceLabelsRequest {

		/** Labels to apply to this instance. These can be later modified by the setLabels method */
		labels?: {[id: string]: string };
	}

	/** Request for setting instance labels. */
	export interface SetInstanceLabelsRequestFormProperties {

		/** Labels to apply to this instance. These can be later modified by the setLabels method */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSetInstanceLabelsRequestFormGroup() {
		return new FormGroup<SetInstanceLabelsRequestFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Request for setting instance machine type. */
	export interface SetInstanceMachineTypeRequest {

		/** Required. The [Compute Engine machine type](https://cloud.google.com/compute/docs/machine-types). */
		machineType?: string | null;
	}

	/** Request for setting instance machine type. */
	export interface SetInstanceMachineTypeRequestFormProperties {

		/** Required. The [Compute Engine machine type](https://cloud.google.com/compute/docs/machine-types). */
		machineType: FormControl<string | null | undefined>,
	}
	export function CreateSetInstanceMachineTypeRequestFormGroup() {
		return new FormGroup<SetInstanceMachineTypeRequestFormProperties>({
			machineType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for starting a notebook instance */
	export interface StartInstanceRequest {
	}

	/** Request for starting a notebook instance */
	export interface StartInstanceRequestFormProperties {
	}
	export function CreateStartInstanceRequestFormGroup() {
		return new FormGroup<StartInstanceRequestFormProperties>({
		});

	}


	/** Request for starting a Managed Notebook Runtime. */
	export interface StartRuntimeRequest {

		/** Idempotent request UUID. */
		requestId?: string | null;
	}

	/** Request for starting a Managed Notebook Runtime. */
	export interface StartRuntimeRequestFormProperties {

		/** Idempotent request UUID. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateStartRuntimeRequestFormGroup() {
		return new FormGroup<StartRuntimeRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for stopping a notebook instance */
	export interface StopInstanceRequest {
	}

	/** Request for stopping a notebook instance */
	export interface StopInstanceRequestFormProperties {
	}
	export function CreateStopInstanceRequestFormGroup() {
		return new FormGroup<StopInstanceRequestFormProperties>({
		});

	}


	/** Request for stopping a Managed Notebook Runtime. */
	export interface StopRuntimeRequest {

		/** Idempotent request UUID. */
		requestId?: string | null;
	}

	/** Request for stopping a Managed Notebook Runtime. */
	export interface StopRuntimeRequestFormProperties {

		/** Idempotent request UUID. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateStopRuntimeRequestFormGroup() {
		return new FormGroup<StopRuntimeRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for switching a Managed Notebook Runtime. */
	export interface SwitchRuntimeRequest {

		/** Definition of the types of hardware accelerators that can be used. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `nvidia-tesla-k80` * `nvidia-tesla-p100` * `nvidia-tesla-v100` * `nvidia-tesla-p4` * `nvidia-tesla-t4` * `nvidia-tesla-a100` */
		acceleratorConfig?: RuntimeAcceleratorConfig;

		/** machine type. */
		machineType?: string | null;

		/** Idempotent request UUID. */
		requestId?: string | null;
	}

	/** Request for switching a Managed Notebook Runtime. */
	export interface SwitchRuntimeRequestFormProperties {

		/** machine type. */
		machineType: FormControl<string | null | undefined>,

		/** Idempotent request UUID. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateSwitchRuntimeRequestFormGroup() {
		return new FormGroup<SwitchRuntimeRequestFormProperties>({
			machineType: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequestFormProperties {
	}
	export function CreateTestIamPermissionsRequestFormGroup() {
		return new FormGroup<TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponseFormProperties {
	}
	export function CreateTestIamPermissionsResponseFormGroup() {
		return new FormGroup<TestIamPermissionsResponseFormProperties>({
		});

	}


	/** Request for created scheduled notebooks */
	export interface TriggerScheduleRequest {
	}

	/** Request for created scheduled notebooks */
	export interface TriggerScheduleRequestFormProperties {
	}
	export function CreateTriggerScheduleRequestFormGroup() {
		return new FormGroup<TriggerScheduleRequestFormProperties>({
		});

	}


	/** Request for updating instance configurations. */
	export interface UpdateInstanceConfigRequest {

		/** Notebook instance configurations that can be updated. */
		config?: InstanceConfig;
	}

	/** Request for updating instance configurations. */
	export interface UpdateInstanceConfigRequestFormProperties {
	}
	export function CreateUpdateInstanceConfigRequestFormGroup() {
		return new FormGroup<UpdateInstanceConfigRequestFormProperties>({
		});

	}


	/** Request for adding/changing metadata items for an instance. */
	export interface UpdateInstanceMetadataItemsRequest {

		/** Metadata items to add/update for the instance. */
		items?: {[id: string]: string };
	}

	/** Request for adding/changing metadata items for an instance. */
	export interface UpdateInstanceMetadataItemsRequestFormProperties {

		/** Metadata items to add/update for the instance. */
		items: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateInstanceMetadataItemsRequestFormGroup() {
		return new FormGroup<UpdateInstanceMetadataItemsRequestFormProperties>({
			items: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Response for adding/changing metadata items for an instance. */
	export interface UpdateInstanceMetadataItemsResponse {

		/** Map of items that were added/updated to/in the metadata. */
		items?: {[id: string]: string };
	}

	/** Response for adding/changing metadata items for an instance. */
	export interface UpdateInstanceMetadataItemsResponseFormProperties {

		/** Map of items that were added/updated to/in the metadata. */
		items: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateInstanceMetadataItemsResponseFormGroup() {
		return new FormGroup<UpdateInstanceMetadataItemsResponseFormProperties>({
			items: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Request for updating the Shielded Instance config for a notebook instance. You can only use this method on a stopped instance */
	export interface UpdateShieldedInstanceConfigRequest {

		/** A set of Shielded Instance options. See [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid. */
		shieldedInstanceConfig?: ShieldedInstanceConfig;
	}

	/** Request for updating the Shielded Instance config for a notebook instance. You can only use this method on a stopped instance */
	export interface UpdateShieldedInstanceConfigRequestFormProperties {
	}
	export function CreateUpdateShieldedInstanceConfigRequestFormGroup() {
		return new FormGroup<UpdateShieldedInstanceConfigRequestFormProperties>({
		});

	}


	/** Request for upgrading a notebook instance from within the VM */
	export interface UpgradeInstanceInternalRequest {

		/** Optional. The optional UpgradeType. Setting this field will search for additional compute images to upgrade this instance. */
		type?: UpgradeInstanceInternalRequestType | null;

		/** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
		vmId?: string | null;
	}

	/** Request for upgrading a notebook instance from within the VM */
	export interface UpgradeInstanceInternalRequestFormProperties {

		/** Optional. The optional UpgradeType. Setting this field will search for additional compute images to upgrade this instance. */
		type: FormControl<UpgradeInstanceInternalRequestType | null | undefined>,

		/** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
		vmId: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeInstanceInternalRequestFormGroup() {
		return new FormGroup<UpgradeInstanceInternalRequestFormProperties>({
			type: new FormControl<UpgradeInstanceInternalRequestType | null | undefined>(undefined),
			vmId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpgradeInstanceInternalRequestType { UPGRADE_TYPE_UNSPECIFIED = 'UPGRADE_TYPE_UNSPECIFIED', UPGRADE_FRAMEWORK = 'UPGRADE_FRAMEWORK', UPGRADE_OS = 'UPGRADE_OS', UPGRADE_CUDA = 'UPGRADE_CUDA', UPGRADE_ALL = 'UPGRADE_ALL' }


	/** Request for upgrading a notebook instance */
	export interface UpgradeInstanceRequest {

		/** Optional. The optional UpgradeType. Setting this field will search for additional compute images to upgrade this instance. */
		type?: UpgradeInstanceInternalRequestType | null;
	}

	/** Request for upgrading a notebook instance */
	export interface UpgradeInstanceRequestFormProperties {

		/** Optional. The optional UpgradeType. Setting this field will search for additional compute images to upgrade this instance. */
		type: FormControl<UpgradeInstanceInternalRequestType | null | undefined>,
	}
	export function CreateUpgradeInstanceRequestFormGroup() {
		return new FormGroup<UpgradeInstanceRequestFormProperties>({
			type: new FormControl<UpgradeInstanceInternalRequestType | null | undefined>(undefined),
		});

	}


	/** Request for upgrading a Managed Notebook Runtime to the latest version. option (google.api.message_visibility).restriction = "TRUSTED_TESTER,SPECIAL_TESTER"; */
	export interface UpgradeRuntimeRequest {

		/** Idempotent request UUID. */
		requestId?: string | null;
	}

	/** Request for upgrading a Managed Notebook Runtime to the latest version. option (google.api.message_visibility).restriction = "TRUSTED_TESTER,SPECIAL_TESTER"; */
	export interface UpgradeRuntimeRequestFormProperties {

		/** Idempotent request UUID. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeRuntimeRequestFormGroup() {
		return new FormGroup<UpgradeRuntimeRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes schedule and all underlying jobs
		 * Delete v1/{name}
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/schedules/{schedule_id}`
		 * @param {string} requestId Idempotent request UUID.
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_schedules_delete(name: string, requestId: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Gets details of schedule
		 * Get v1/{name}
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/schedules/{schedule_id}`
		 * @return {Schedule} Successful response
		 */
		Notebooks_projects_locations_schedules_get(name: string): Observable<Schedule> {
			return this.http.get<Schedule>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update Notebook Runtime configuration.
		 * Patch v1/{name}
		 * @param {string} name Output only. The resource name of the runtime. Format: `projects/{project}/locations/{location}/runtimes/{runtimeId}`
		 * @param {string} requestId Idempotent request UUID.
		 * @param {string} updateMask Required. Specifies the path, relative to `Runtime`, of the field to update. For example, to change the software configuration kernels, the `update_mask` parameter would be specified as `software_config.kernels`, and the `PATCH` request body would specify the new value, as follows: { "software_config":{ "kernels": [{ 'repository': 'gcr.io/deeplearning-platform-release/pytorch-gpu', 'tag': 'latest' }], } } Currently, only the following fields can be updated: - `software_config.kernels` - `software_config.post_startup_script` - `software_config.custom_gpu_driver_path` - `software_config.idle_shutdown` - `software_config.idle_shutdown_timeout` - `software_config.disable_terminal` - `labels`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_runtimes_patch(name: string, requestId: string | null | undefined, updateMask: string | null | undefined, requestBody: Runtime): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Notebooks_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Notebooks_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Notebooks_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a Diagnostic File and runs Diagnostic Tool given a Runtime.
		 * Post v1/{name}:diagnose
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtimes_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_runtimes_diagnose(name: string, requestBody: DiagnoseRuntimeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':diagnose', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks whether a notebook instance is healthy.
		 * Get v1/{name}:getInstanceHealth
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {GetInstanceHealthResponse} Successful response
		 */
		Notebooks_projects_locations_instances_getInstanceHealth(name: string): Observable<GetInstanceHealthResponse> {
			return this.http.get<GetInstanceHealthResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':getInstanceHealth', {});
		}

		/**
		 * Migrate an existing Runtime to a new Workbench Instance.
		 * Post v1/{name}:migrate
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_runtimes_migrate(name: string, requestBody: MigrateRuntimeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':migrate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance.
		 * Post v1/{name}:refreshRuntimeTokenInternal
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
		 * @return {RefreshRuntimeTokenInternalResponse} Successful response
		 */
		Notebooks_projects_locations_runtimes_refreshRuntimeTokenInternal(name: string, requestBody: RefreshRuntimeTokenInternalRequest): Observable<RefreshRuntimeTokenInternalResponse> {
			return this.http.post<RefreshRuntimeTokenInternalResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':refreshRuntimeTokenInternal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.
		 * Post v1/{name}:report
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_report(name: string, requestBody: ReportInstanceInfoRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':report', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reports and processes a runtime event.
		 * Post v1/{name}:reportEvent
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_runtimes_reportEvent(name: string, requestBody: ReportRuntimeEventRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':reportEvent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resets a Managed Notebook Runtime.
		 * Post v1/{name}:reset
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_runtimes_reset(name: string, requestBody: ResetRuntimeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':reset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rollbacks a notebook instance to the previous version.
		 * Post v1/{name}:rollback
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_rollback(name: string, requestBody: RollbackInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':rollback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the guest accelerators of a single Instance.
		 * Patch v1/{name}:setAccelerator
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_setAccelerator(name: string, requestBody: SetInstanceAcceleratorRequest): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setAccelerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replaces all the labels of an Instance.
		 * Patch v1/{name}:setLabels
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_setLabels(name: string, requestBody: SetInstanceLabelsRequest): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setLabels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the machine type of a single Instance.
		 * Patch v1/{name}:setMachineType
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_setMachineType(name: string, requestBody: SetInstanceMachineTypeRequest): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setMachineType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
		 * Post v1/{name}:start
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_runtimes_start(name: string, requestBody: StartRuntimeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
		 * Post v1/{name}:stop
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_runtimes_stop(name: string, requestBody: StopRuntimeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Switch a Managed Notebook Runtime.
		 * Post v1/{name}:switch
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_runtimes_switch(name: string, requestBody: SwitchRuntimeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':switch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Triggers execution of an existing schedule.
		 * Post v1/{name}:trigger
		 * @param {string} name Required. Format: `parent=projects/{project_id}/locations/{location}/schedules/{schedule_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_schedules_trigger(name: string, requestBody: TriggerScheduleRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':trigger', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update Notebook Instance configurations.
		 * Patch v1/{name}:updateConfig
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_updateConfig(name: string, requestBody: UpdateInstanceConfigRequest): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':updateConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add/update metadata items for an instance.
		 * Patch v1/{name}:updateMetadataItems
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {UpdateInstanceMetadataItemsResponse} Successful response
		 */
		Notebooks_projects_locations_instances_updateMetadataItems(name: string, requestBody: UpdateInstanceMetadataItemsRequest): Observable<UpdateInstanceMetadataItemsResponse> {
			return this.http.patch<UpdateInstanceMetadataItemsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':updateMetadataItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the Shielded instance configuration of a single Instance.
		 * Patch v1/{name}:updateShieldedInstanceConfig
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_updateShieldedInstanceConfig(name: string, requestBody: UpdateShieldedInstanceConfigRequest): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':updateShieldedInstanceConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Upgrades a Managed Notebook Runtime to the latest version.
		 * Post v1/{name}:upgrade
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_runtimes_upgrade(name: string, requestBody: UpgradeRuntimeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':upgrade', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.
		 * Post v1/{name}:upgradeInternal
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_upgradeInternal(name: string, requestBody: UpgradeInstanceInternalRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':upgradeInternal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks whether a notebook instance is upgradable.
		 * Get v1/{notebookInstance}:isUpgradeable
		 * @param {string} notebookInstance Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @param {UpgradeInstanceInternalRequestType} type Optional. The optional UpgradeType. Setting this field will search for additional compute images to upgrade this instance.
		 * @return {IsInstanceUpgradeableResponse} Successful response
		 */
		Notebooks_projects_locations_instances_isUpgradeable(notebookInstance: string, type: UpgradeInstanceInternalRequestType | null | undefined): Observable<IsInstanceUpgradeableResponse> {
			return this.http.get<IsInstanceUpgradeableResponse>(this.baseUri + 'v1/' + (notebookInstance == null ? '' : encodeURIComponent(notebookInstance)) + ':isUpgradeable&type=' + type, {});
		}

		/**
		 * Lists environments in a project.
		 * Get v1/{parent}/environments
		 * @param {string} parent Required. Format: `projects/{project_id}/locations/{location}`
		 * @param {number} pageSize Maximum return size of the list call.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A previous returned page token that can be used to continue listing from the last result.
		 * @return {ListEnvironmentsResponse} Successful response
		 */
		Notebooks_projects_locations_environments_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListEnvironmentsResponse> {
			return this.http.get<ListEnvironmentsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/environments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Environment.
		 * Post v1/{parent}/environments
		 * @param {string} parent Required. Format: `projects/{project_id}/locations/{location}`
		 * @param {string} environmentId Required. User-defined unique ID of this environment. The `environment_id` must be 1 to 63 characters long and contain only lowercase letters, numeric characters, and dashes. The first character must be a lowercase letter and the last character cannot be a dash.
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_environments_create(parent: string, environmentId: string | null | undefined, requestBody: Environment): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/environments&environmentId=' + (environmentId == null ? '' : encodeURIComponent(environmentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists executions in a given project and location
		 * Get v1/{parent}/executions
		 * @param {string} parent Required. Format: `parent=projects/{project_id}/locations/{location}`
		 * @param {string} filter Filter applied to resulting executions. Currently only supports filtering executions by a specified `schedule_id`. Format: `schedule_id=`
		 * @param {string} orderBy Sort by field.
		 * @param {number} pageSize Maximum return size of the list call.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A previous returned page token that can be used to continue listing from the last result.
		 * @return {ListExecutionsResponse} Successful response
		 */
		Notebooks_projects_locations_executions_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListExecutionsResponse> {
			return this.http.get<ListExecutionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/executions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Execution in a given project and location.
		 * Post v1/{parent}/executions
		 * @param {string} parent Required. Format: `parent=projects/{project_id}/locations/{location}`
		 * @param {string} executionId Required. User-defined unique ID of this execution.
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_executions_create(parent: string, executionId: string | null | undefined, requestBody: Execution): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/executions&executionId=' + (executionId == null ? '' : encodeURIComponent(executionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists instances in a given project and location.
		 * Get v1/{parent}/instances
		 * @param {string} parent Required. Format: `parent=projects/{project_id}/locations/{location}`
		 * @param {string} filter Optional. List filter.
		 * @param {string} orderBy Optional. Sort results. Supported values are "name", "name desc" or "" (unsorted).
		 * @param {number} pageSize Maximum return size of the list call.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A previous returned page token that can be used to continue listing from the last result.
		 * @return {ListInstancesResponse} Successful response
		 */
		Notebooks_projects_locations_instances_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInstancesResponse> {
			return this.http.get<ListInstancesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Instance in a given project and location.
		 * Post v1/{parent}/instances
		 * @param {string} parent Required. Format: `parent=projects/{project_id}/locations/{location}`
		 * @param {string} instanceId Required. User-defined unique ID of this instance.
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_create(parent: string, instanceId: string | null | undefined, requestBody: Instance): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&instanceId=' + (instanceId == null ? '' : encodeURIComponent(instanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.
		 * Post v1/{parent}/instances:register
		 * @param {string} parent Required. Format: `parent=projects/{project_id}/locations/{location}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_register(parent: string, requestBody: RegisterInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances:register', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Runtimes in a given project and location.
		 * Get v1/{parent}/runtimes
		 * @param {string} parent Required. Format: `parent=projects/{project_id}/locations/{location}`
		 * @param {string} filter Optional. List filter.
		 * @param {string} orderBy Optional. Sort results. Supported values are "name", "name desc" or "" (unsorted).
		 * @param {number} pageSize Maximum return size of the list call.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A previous returned page token that can be used to continue listing from the last result.
		 * @return {ListRuntimesResponse} Successful response
		 */
		Notebooks_projects_locations_runtimes_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRuntimesResponse> {
			return this.http.get<ListRuntimesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/runtimes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Runtime in a given project and location.
		 * Post v1/{parent}/runtimes
		 * @param {string} parent Required. Format: `parent=projects/{project_id}/locations/{location}`
		 * @param {string} requestId Idempotent request UUID.
		 * @param {string} runtimeId Required. User-defined unique ID of this Runtime.
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_runtimes_create(parent: string, requestId: string | null | undefined, runtimeId: string | null | undefined, requestBody: Runtime): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/runtimes&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&runtimeId=' + (runtimeId == null ? '' : encodeURIComponent(runtimeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists schedules in a given project and location.
		 * Get v1/{parent}/schedules
		 * @param {string} parent Required. Format: `parent=projects/{project_id}/locations/{location}`
		 * @param {string} filter Filter applied to resulting schedules.
		 * @param {string} orderBy Field to order results by.
		 * @param {number} pageSize Maximum return size of the list call.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A previous returned page token that can be used to continue listing from the last result.
		 * @return {ListSchedulesResponse} Successful response
		 */
		Notebooks_projects_locations_schedules_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSchedulesResponse> {
			return this.http.get<ListSchedulesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/schedules&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Scheduled Notebook in a given project and location.
		 * Post v1/{parent}/schedules
		 * @param {string} parent Required. Format: `parent=projects/{project_id}/locations/{location}`
		 * @param {string} scheduleId Required. User-defined unique ID of this schedule.
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_schedules_create(parent: string, scheduleId: string | null | undefined, requestBody: Schedule): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/schedules&scheduleId=' + (scheduleId == null ? '' : encodeURIComponent(scheduleId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Policy} Successful response
		 */
		Notebooks_projects_locations_runtimes_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Notebooks_projects_locations_runtimes_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Notebooks_projects_locations_runtimes_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

