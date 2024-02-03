import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An accelerator configuration for a VM instance Definition of a hardware accelerator. Note that there is no check on `type` and `core_count` combinations. TPUs are not supported. See [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus/#gpus-list) to find a valid combination. */
	export interface AcceleratorConfig {

		/** Optional. Count of cores of this accelerator. */
		coreCount?: string | null;

		/** Optional. Type of this accelerator. */
		type?: AcceleratorConfigType | null;
	}

	/** An accelerator configuration for a VM instance Definition of a hardware accelerator. Note that there is no check on `type` and `core_count` combinations. TPUs are not supported. See [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus/#gpus-list) to find a valid combination. */
	export interface AcceleratorConfigFormProperties {

		/** Optional. Count of cores of this accelerator. */
		coreCount: FormControl<string | null | undefined>,

		/** Optional. Type of this accelerator. */
		type: FormControl<AcceleratorConfigType | null | undefined>,
	}
	export function CreateAcceleratorConfigFormGroup() {
		return new FormGroup<AcceleratorConfigFormProperties>({
			coreCount: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AcceleratorConfigType | null | undefined>(undefined),
		});

	}

	export enum AcceleratorConfigType { ACCELERATOR_TYPE_UNSPECIFIED = 'ACCELERATOR_TYPE_UNSPECIFIED', NVIDIA_TESLA_P100 = 'NVIDIA_TESLA_P100', NVIDIA_TESLA_V100 = 'NVIDIA_TESLA_V100', NVIDIA_TESLA_P4 = 'NVIDIA_TESLA_P4', NVIDIA_TESLA_T4 = 'NVIDIA_TESLA_T4', NVIDIA_TESLA_A100 = 'NVIDIA_TESLA_A100', NVIDIA_A100_80GB = 'NVIDIA_A100_80GB', NVIDIA_L4 = 'NVIDIA_L4', NVIDIA_TESLA_T4_VWS = 'NVIDIA_TESLA_T4_VWS', NVIDIA_TESLA_P100_VWS = 'NVIDIA_TESLA_P100_VWS', NVIDIA_TESLA_P4_VWS = 'NVIDIA_TESLA_P4_VWS' }


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


	/** The definition of a boot disk. */
	export interface BootDisk {

		/** Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. */
		diskEncryption?: BootDiskDiskEncryption | null;

		/** Optional. The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). If not specified, this defaults to the recommended value of 150GB. */
		diskSizeGb?: string | null;

		/** Optional. Indicates the type of the disk. */
		diskType?: BootDiskDiskType | null;

		/** Optional. Input only. The KMS key used to encrypt the disks, only applicable if disk_encryption is CMEK. Format: `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}` Learn more about using your own encryption keys. */
		kmsKey?: string | null;
	}

	/** The definition of a boot disk. */
	export interface BootDiskFormProperties {

		/** Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. */
		diskEncryption: FormControl<BootDiskDiskEncryption | null | undefined>,

		/** Optional. The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). If not specified, this defaults to the recommended value of 150GB. */
		diskSizeGb: FormControl<string | null | undefined>,

		/** Optional. Indicates the type of the disk. */
		diskType: FormControl<BootDiskDiskType | null | undefined>,

		/** Optional. Input only. The KMS key used to encrypt the disks, only applicable if disk_encryption is CMEK. Format: `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}` Learn more about using your own encryption keys. */
		kmsKey: FormControl<string | null | undefined>,
	}
	export function CreateBootDiskFormGroup() {
		return new FormGroup<BootDiskFormProperties>({
			diskEncryption: new FormControl<BootDiskDiskEncryption | null | undefined>(undefined),
			diskSizeGb: new FormControl<string | null | undefined>(undefined),
			diskType: new FormControl<BootDiskDiskType | null | undefined>(undefined),
			kmsKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BootDiskDiskEncryption { DISK_ENCRYPTION_UNSPECIFIED = 'DISK_ENCRYPTION_UNSPECIFIED', GMEK = 'GMEK', CMEK = 'CMEK' }

	export enum BootDiskDiskType { DISK_TYPE_UNSPECIFIED = 'DISK_TYPE_UNSPECIFIED', PD_STANDARD = 'PD_STANDARD', PD_SSD = 'PD_SSD', PD_BALANCED = 'PD_BALANCED', PD_EXTREME = 'PD_EXTREME' }


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


	/** Response for checking if a notebook instance is upgradeable. */
	export interface CheckInstanceUpgradabilityResponse {

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
	export interface CheckInstanceUpgradabilityResponseFormProperties {

		/** The new image self link this instance will be upgraded to if calling the upgrade endpoint. This field will only be populated if field upgradeable is true. */
		upgradeImage: FormControl<string | null | undefined>,

		/** Additional information about upgrade. */
		upgradeInfo: FormControl<string | null | undefined>,

		/** The version this instance will be upgraded to if calling the upgrade endpoint. This field will only be populated if field upgradeable is true. */
		upgradeVersion: FormControl<string | null | undefined>,

		/** If an instance is upgradeable. */
		upgradeable: FormControl<boolean | null | undefined>,
	}
	export function CreateCheckInstanceUpgradabilityResponseFormGroup() {
		return new FormGroup<CheckInstanceUpgradabilityResponseFormProperties>({
			upgradeImage: new FormControl<string | null | undefined>(undefined),
			upgradeInfo: new FormControl<string | null | undefined>(undefined),
			upgradeVersion: new FormControl<string | null | undefined>(undefined),
			upgradeable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response for getting WbI configurations in a location */
	export interface Config {

		/** Output only. The list of available images to create a WbI. */
		availableImages?: Array<ImageRelease>;

		/** DefaultValues represents the default configuration values. */
		defaultValues?: DefaultValues;

		/** SupportedValues represents the values supported by the configuration. */
		supportedValues?: SupportedValues;
	}

	/** Response for getting WbI configurations in a location */
	export interface ConfigFormProperties {
	}
	export function CreateConfigFormGroup() {
		return new FormGroup<ConfigFormProperties>({
		});

	}


	/** ConfigImage represents an image release available to create a WbI */
	export interface ImageRelease {

		/** Output only. The name of the image of the form workbench-instances-vYYYYmmdd-- */
		imageName?: string | null;

		/** Output only. The release of the image of the form m123 */
		releaseName?: string | null;
	}

	/** ConfigImage represents an image release available to create a WbI */
	export interface ImageReleaseFormProperties {

		/** Output only. The name of the image of the form workbench-instances-vYYYYmmdd-- */
		imageName: FormControl<string | null | undefined>,

		/** Output only. The release of the image of the form m123 */
		releaseName: FormControl<string | null | undefined>,
	}
	export function CreateImageReleaseFormGroup() {
		return new FormGroup<ImageReleaseFormProperties>({
			imageName: new FormControl<string | null | undefined>(undefined),
			releaseName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DefaultValues represents the default configuration values. */
	export interface DefaultValues {

		/** Output only. The default machine type used by the backend if not provided by the user. */
		machineType?: string | null;
	}

	/** DefaultValues represents the default configuration values. */
	export interface DefaultValuesFormProperties {

		/** Output only. The default machine type used by the backend if not provided by the user. */
		machineType: FormControl<string | null | undefined>,
	}
	export function CreateDefaultValuesFormGroup() {
		return new FormGroup<DefaultValuesFormProperties>({
			machineType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SupportedValues represents the values supported by the configuration. */
	export interface SupportedValues {

		/** Output only. The accelerator types supported by WbI. */
		acceleratorTypes?: Array<string>;

		/** Output only. The machine types supported by WbI. */
		machineTypes?: Array<string>;
	}

	/** SupportedValues represents the values supported by the configuration. */
	export interface SupportedValuesFormProperties {
	}
	export function CreateSupportedValuesFormGroup() {
		return new FormGroup<SupportedValuesFormProperties>({
		});

	}


	/** Definition of a container image for starting a notebook instance with the environment installed in a container. */
	export interface ContainerImage {

		/** Required. The path to the container image repository. For example: `gcr.io/{project_id}/{image_name}` */
		repository?: string | null;

		/** Optional. The tag of the container image. If not specified, this defaults to the latest tag. */
		tag?: string | null;
	}

	/** Definition of a container image for starting a notebook instance with the environment installed in a container. */
	export interface ContainerImageFormProperties {

		/** Required. The path to the container image repository. For example: `gcr.io/{project_id}/{image_name}` */
		repository: FormControl<string | null | undefined>,

		/** Optional. The tag of the container image. If not specified, this defaults to the latest tag. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateContainerImageFormGroup() {
		return new FormGroup<ContainerImageFormProperties>({
			repository: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An instance-attached disk resource. */
	export interface DataDisk {

		/** Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. */
		diskEncryption?: BootDiskDiskEncryption | null;

		/** Optional. The size of the disk in GB attached to this VM instance, up to a maximum of 64000 GB (64 TB). If not specified, this defaults to 100. */
		diskSizeGb?: string | null;

		/** Optional. Input only. Indicates the type of the disk. */
		diskType?: BootDiskDiskType | null;

		/** Optional. Input only. The KMS key used to encrypt the disks, only applicable if disk_encryption is CMEK. Format: `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}` Learn more about using your own encryption keys. */
		kmsKey?: string | null;
	}

	/** An instance-attached disk resource. */
	export interface DataDiskFormProperties {

		/** Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. */
		diskEncryption: FormControl<BootDiskDiskEncryption | null | undefined>,

		/** Optional. The size of the disk in GB attached to this VM instance, up to a maximum of 64000 GB (64 TB). If not specified, this defaults to 100. */
		diskSizeGb: FormControl<string | null | undefined>,

		/** Optional. Input only. Indicates the type of the disk. */
		diskType: FormControl<BootDiskDiskType | null | undefined>,

		/** Optional. Input only. The KMS key used to encrypt the disks, only applicable if disk_encryption is CMEK. Format: `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}` Learn more about using your own encryption keys. */
		kmsKey: FormControl<string | null | undefined>,
	}
	export function CreateDataDiskFormGroup() {
		return new FormGroup<DataDiskFormProperties>({
			diskEncryption: new FormControl<BootDiskDiskEncryption | null | undefined>(undefined),
			diskSizeGb: new FormControl<string | null | undefined>(undefined),
			diskType: new FormControl<BootDiskDiskType | null | undefined>(undefined),
			kmsKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for creating a notebook instance diagnostic file. */
	export interface DiagnoseInstanceRequest {

		/** Defines flags that are used to run the diagnostic tool */
		diagnosticConfig?: DiagnosticConfig;

		/** Optional. Maxmium amount of time in minutes before the operation times out. */
		timeoutMinutes?: number | null;
	}

	/** Request for creating a notebook instance diagnostic file. */
	export interface DiagnoseInstanceRequestFormProperties {

		/** Optional. Maxmium amount of time in minutes before the operation times out. */
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
		enableCopyHomeFilesFlag?: boolean | null;

		/** Optional. Enables flag to capture packets from the instance for 30 seconds */
		enablePacketCaptureFlag?: boolean | null;

		/** Optional. Enables flag to repair service for instance */
		enableRepairFlag?: boolean | null;

		/** Required. User Cloud Storage bucket location (REQUIRED). Must be formatted with path prefix (`gs://$GCS_BUCKET`). Permissions: User Managed Notebooks: - storage.buckets.writer: Must be given to the project's service account attached to VM. Google Managed Notebooks: - storage.buckets.writer: Must be given to the project's service account or user credentials attached to VM depending on authentication mode. Cloud Storage bucket Log file will be written to `gs://$GCS_BUCKET/$RELATIVE_PATH/$VM_DATE_$TIME.tar.gz` */
		gcsBucket?: string | null;

		/** Optional. Defines the relative storage path in the Cloud Storage bucket where the diagnostic logs will be written: Default path will be the root directory of the Cloud Storage bucket (`gs://$GCS_BUCKET/$DATE_$TIME.tar.gz`) Example of full path where Log file will be written: `gs://$GCS_BUCKET/$RELATIVE_PATH/` */
		relativePath?: string | null;
	}

	/** Defines flags that are used to run the diagnostic tool */
	export interface DiagnosticConfigFormProperties {

		/** Optional. Enables flag to copy all `/home/jupyter` folder contents */
		enableCopyHomeFilesFlag: FormControl<boolean | null | undefined>,

		/** Optional. Enables flag to capture packets from the instance for 30 seconds */
		enablePacketCaptureFlag: FormControl<boolean | null | undefined>,

		/** Optional. Enables flag to repair service for instance */
		enableRepairFlag: FormControl<boolean | null | undefined>,

		/** Required. User Cloud Storage bucket location (REQUIRED). Must be formatted with path prefix (`gs://$GCS_BUCKET`). Permissions: User Managed Notebooks: - storage.buckets.writer: Must be given to the project's service account attached to VM. Google Managed Notebooks: - storage.buckets.writer: Must be given to the project's service account or user credentials attached to VM depending on authentication mode. Cloud Storage bucket Log file will be written to `gs://$GCS_BUCKET/$RELATIVE_PATH/$VM_DATE_$TIME.tar.gz` */
		gcsBucket: FormControl<string | null | undefined>,

		/** Optional. Defines the relative storage path in the Cloud Storage bucket where the diagnostic logs will be written: Default path will be the root directory of the Cloud Storage bucket (`gs://$GCS_BUCKET/$DATE_$TIME.tar.gz`) Example of full path where Log file will be written: `gs://$GCS_BUCKET/$RELATIVE_PATH/` */
		relativePath: FormControl<string | null | undefined>,
	}
	export function CreateDiagnosticConfigFormGroup() {
		return new FormGroup<DiagnosticConfigFormProperties>({
			enableCopyHomeFilesFlag: new FormControl<boolean | null | undefined>(undefined),
			enablePacketCaptureFlag: new FormControl<boolean | null | undefined>(undefined),
			enableRepairFlag: new FormControl<boolean | null | undefined>(undefined),
			gcsBucket: new FormControl<string | null | undefined>(undefined),
			relativePath: new FormControl<string | null | undefined>(undefined),
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


	/** The definition of an Event for a managed / semi-managed notebook instance. */
	export interface Event {

		/** Optional. Event details. This field is used to pass event information. */
		details?: {[id: string]: string };

		/** Optional. Event report time. */
		reportTime?: string | null;

		/** Optional. Event type. */
		type?: EventType | null;
	}

	/** The definition of an Event for a managed / semi-managed notebook instance. */
	export interface EventFormProperties {

		/** Optional. Event details. This field is used to pass event information. */
		details: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Event report time. */
		reportTime: FormControl<string | null | undefined>,

		/** Optional. Event type. */
		type: FormControl<EventType | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			details: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			reportTime: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EventType | null | undefined>(undefined),
		});

	}

	export enum EventType { EVENT_TYPE_UNSPECIFIED = 'EVENT_TYPE_UNSPECIFIED', IDLE = 'IDLE', HEARTBEAT = 'HEARTBEAT', HEALTH = 'HEALTH', MAINTENANCE = 'MAINTENANCE', METADATA_CHANGE = 'METADATA_CHANGE' }


	/** A GPU driver configuration */
	export interface GPUDriverConfig {

		/** Optional. Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers. */
		customGpuDriverPath?: string | null;

		/** Optional. Whether the end user authorizes Google Cloud to install GPU driver on this VM instance. If this field is empty or set to false, the GPU driver won't be installed. Only applicable to instances with GPUs. */
		enableGpuDriver?: boolean | null;
	}

	/** A GPU driver configuration */
	export interface GPUDriverConfigFormProperties {

		/** Optional. Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers. */
		customGpuDriverPath: FormControl<string | null | undefined>,

		/** Optional. Whether the end user authorizes Google Cloud to install GPU driver on this VM instance. If this field is empty or set to false, the GPU driver won't be installed. Only applicable to instances with GPUs. */
		enableGpuDriver: FormControl<boolean | null | undefined>,
	}
	export function CreateGPUDriverConfigFormGroup() {
		return new FormGroup<GPUDriverConfigFormProperties>({
			customGpuDriverPath: new FormControl<string | null | undefined>(undefined),
			enableGpuDriver: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The definition of how to configure a VM instance outside of Resources and Identity. */
	export interface GceSetup {

		/** Optional. The hardware accelerators used on this instance. If you use accelerators, make sure that your configuration has [enough vCPUs and memory to support the `machine_type` you have selected](https://cloud.google.com/compute/docs/gpus/#gpus-list). Currently supports only one accelerator configuration. */
		acceleratorConfigs?: Array<AcceleratorConfig>;

		/** The definition of a boot disk. */
		bootDisk?: BootDisk;

		/** Definition of a container image for starting a notebook instance with the environment installed in a container. */
		containerImage?: ContainerImage;

		/** Optional. Data disks attached to the VM instance. Currently supports only one data disk. */
		dataDisks?: Array<DataDisk>;

		/** Optional. If true, no external IP will be assigned to this VM instance. */
		disablePublicIp?: boolean | null;

		/** Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward */
		enableIpForwarding?: boolean | null;

		/** A GPU driver configuration */
		gpuDriverConfig?: GPUDriverConfig;

		/** Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource */
		machineType?: string | null;

		/** Optional. Custom metadata to apply to this instance. */
		metadata?: {[id: string]: string };

		/** Optional. The network interfaces for the VM. Supports only one interface. */
		networkInterfaces?: Array<NetworkInterface>;

		/** Optional. The service account that serves as an identity for the VM instance. Currently supports only one service account. */
		serviceAccounts?: Array<ServiceAccount>;

		/** A set of Shielded Instance options. See [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid. */
		shieldedInstanceConfig?: ShieldedInstanceConfig;

		/** Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)). */
		tags?: Array<string>;

		/** Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM. */
		vmImage?: VmImage;
	}

	/** The definition of how to configure a VM instance outside of Resources and Identity. */
	export interface GceSetupFormProperties {

		/** Optional. If true, no external IP will be assigned to this VM instance. */
		disablePublicIp: FormControl<boolean | null | undefined>,

		/** Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward */
		enableIpForwarding: FormControl<boolean | null | undefined>,

		/** Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource */
		machineType: FormControl<string | null | undefined>,

		/** Optional. Custom metadata to apply to this instance. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGceSetupFormGroup() {
		return new FormGroup<GceSetupFormProperties>({
			disablePublicIp: new FormControl<boolean | null | undefined>(undefined),
			enableIpForwarding: new FormControl<boolean | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The definition of a network interface resource attached to a VM. */
	export interface NetworkInterface {

		/** Optional. The name of the VPC that this VM instance is in. Format: `projects/{project_id}/global/networks/{network_id}` */
		network?: string | null;

		/** Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet. */
		nicType?: NetworkInterfaceNicType | null;

		/** Optional. The name of the subnet that this VM instance is in. Format: `projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}` */
		subnet?: string | null;
	}

	/** The definition of a network interface resource attached to a VM. */
	export interface NetworkInterfaceFormProperties {

		/** Optional. The name of the VPC that this VM instance is in. Format: `projects/{project_id}/global/networks/{network_id}` */
		network: FormControl<string | null | undefined>,

		/** Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet. */
		nicType: FormControl<NetworkInterfaceNicType | null | undefined>,

		/** Optional. The name of the subnet that this VM instance is in. Format: `projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}` */
		subnet: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
			nicType: new FormControl<NetworkInterfaceNicType | null | undefined>(undefined),
			subnet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetworkInterfaceNicType { NIC_TYPE_UNSPECIFIED = 'NIC_TYPE_UNSPECIFIED', VIRTIO_NET = 'VIRTIO_NET', GVNIC = 'GVNIC' }


	/** A service account that acts as an identity. */
	export interface ServiceAccount {

		/** Optional. Email address of the service account. */
		email?: string | null;

		/** Output only. The list of scopes to be made available for this service account. Set by the CLH to https://www.googleapis.com/auth/cloud-platform */
		scopes?: Array<string>;
	}

	/** A service account that acts as an identity. */
	export interface ServiceAccountFormProperties {

		/** Optional. Email address of the service account. */
		email: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccountFormGroup() {
		return new FormGroup<ServiceAccountFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of Shielded Instance options. See [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid. */
	export interface ShieldedInstanceConfig {

		/** Optional. Defines whether the VM instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the VM instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the VM instance is created. Enabled by default. */
		enableIntegrityMonitoring?: boolean | null;

		/** Optional. Defines whether the VM instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default. */
		enableSecureBoot?: boolean | null;

		/** Optional. Defines whether the VM instance has the vTPM enabled. Enabled by default. */
		enableVtpm?: boolean | null;
	}

	/** A set of Shielded Instance options. See [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid. */
	export interface ShieldedInstanceConfigFormProperties {

		/** Optional. Defines whether the VM instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the VM instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the VM instance is created. Enabled by default. */
		enableIntegrityMonitoring: FormControl<boolean | null | undefined>,

		/** Optional. Defines whether the VM instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default. */
		enableSecureBoot: FormControl<boolean | null | undefined>,

		/** Optional. Defines whether the VM instance has the vTPM enabled. Enabled by default. */
		enableVtpm: FormControl<boolean | null | undefined>,
	}
	export function CreateShieldedInstanceConfigFormGroup() {
		return new FormGroup<ShieldedInstanceConfigFormProperties>({
			enableIntegrityMonitoring: new FormControl<boolean | null | undefined>(undefined),
			enableSecureBoot: new FormControl<boolean | null | undefined>(undefined),
			enableVtpm: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM. */
	export interface VmImage {

		/** Optional. Use this VM image family to find the image; the newest image in this family will be used. */
		family?: string | null;

		/** Optional. Use VM image name to find the image. */
		name?: string | null;

		/** Required. The name of the Google Cloud project that this VM image belongs to. Format: `{project_id}` */
		project?: string | null;
	}

	/** Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM. */
	export interface VmImageFormProperties {

		/** Optional. Use this VM image family to find the image; the newest image in this family will be used. */
		family: FormControl<string | null | undefined>,

		/** Optional. Use VM image name to find the image. */
		name: FormControl<string | null | undefined>,

		/** Required. The name of the Google Cloud project that this VM image belongs to. Format: `{project_id}` */
		project: FormControl<string | null | undefined>,
	}
	export function CreateVmImageFormGroup() {
		return new FormGroup<VmImageFormProperties>({
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of a notebook instance. */
	export interface Instance {

		/** Output only. Instance creation time. */
		createTime?: string | null;

		/** Output only. Email address of entity that sent original CreateInstance request. */
		creator?: string | null;

		/** Optional. If true, the notebook instance will not register with the proxy. */
		disableProxyAccess?: boolean | null;

		/** The definition of how to configure a VM instance outside of Resources and Identity. */
		gceSetup?: GceSetup;

		/** Output only. Additional information about instance health. Example: healthInfo": { "docker_proxy_agent_status": "1", "docker_status": "1", "jupyterlab_api_status": "-1", "jupyterlab_status": "-1", "updated": "2020-10-18 09:40:03.573409" } */
		healthInfo?: {[id: string]: string };

		/** Output only. Instance health_state. */
		healthState?: InstanceHealthState | null;

		/** Output only. Unique ID of the resource. */
		id?: string | null;

		/** Optional. Input only. The owner of this instance after creation. Format: `alias@example.com` Currently supports one owner only. If not specified, all of the service account users of your VM instance's service account can use the instance. */
		instanceOwners?: Array<string>;

		/** Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method. */
		labels?: {[id: string]: string };

		/** Output only. The name of this notebook instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
		name?: string | null;

		/** Output only. The proxy endpoint that is used to access the Jupyter notebook. */
		proxyUri?: string | null;

		/** Output only. The state of this instance. */
		state?: InstanceState | null;

		/** Output only. The workforce pools proxy endpoint that is used to access the Jupyter notebook. */
		thirdPartyProxyUrl?: string | null;

		/** Output only. Instance update time. */
		updateTime?: string | null;

		/** Output only. The upgrade history of this instance. */
		upgradeHistory?: Array<UpgradeHistoryEntry>;
	}

	/** The definition of a notebook instance. */
	export interface InstanceFormProperties {

		/** Output only. Instance creation time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Email address of entity that sent original CreateInstance request. */
		creator: FormControl<string | null | undefined>,

		/** Optional. If true, the notebook instance will not register with the proxy. */
		disableProxyAccess: FormControl<boolean | null | undefined>,

		/** Output only. Additional information about instance health. Example: healthInfo": { "docker_proxy_agent_status": "1", "docker_status": "1", "jupyterlab_api_status": "-1", "jupyterlab_status": "-1", "updated": "2020-10-18 09:40:03.573409" } */
		healthInfo: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Instance health_state. */
		healthState: FormControl<InstanceHealthState | null | undefined>,

		/** Output only. Unique ID of the resource. */
		id: FormControl<string | null | undefined>,

		/** Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The name of this notebook instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` */
		name: FormControl<string | null | undefined>,

		/** Output only. The proxy endpoint that is used to access the Jupyter notebook. */
		proxyUri: FormControl<string | null | undefined>,

		/** Output only. The state of this instance. */
		state: FormControl<InstanceState | null | undefined>,

		/** Output only. The workforce pools proxy endpoint that is used to access the Jupyter notebook. */
		thirdPartyProxyUrl: FormControl<string | null | undefined>,

		/** Output only. Instance update time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			creator: new FormControl<string | null | undefined>(undefined),
			disableProxyAccess: new FormControl<boolean | null | undefined>(undefined),
			healthInfo: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			healthState: new FormControl<InstanceHealthState | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			proxyUri: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<InstanceState | null | undefined>(undefined),
			thirdPartyProxyUrl: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceHealthState { HEALTH_STATE_UNSPECIFIED = 'HEALTH_STATE_UNSPECIFIED', HEALTHY = 'HEALTHY', UNHEALTHY = 'UNHEALTHY', AGENT_NOT_INSTALLED = 'AGENT_NOT_INSTALLED', AGENT_NOT_RUNNING = 'AGENT_NOT_RUNNING' }

	export enum InstanceState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', STARTING = 'STARTING', PROVISIONING = 'PROVISIONING', ACTIVE = 'ACTIVE', STOPPING = 'STOPPING', STOPPED = 'STOPPED', DELETED = 'DELETED', UPGRADING = 'UPGRADING', INITIALIZING = 'INITIALIZING', SUSPENDING = 'SUSPENDING', SUSPENDED = 'SUSPENDED' }


	/** The entry of VM image upgrade history. */
	export interface UpgradeHistoryEntry {

		/** Optional. Action. Rolloback or Upgrade. */
		action?: UpgradeHistoryEntryAction | null;

		/** Optional. The container image before this instance upgrade. */
		containerImage?: string | null;

		/** Immutable. The time that this instance upgrade history entry is created. */
		createTime?: string | null;

		/** Optional. The framework of this notebook instance. */
		framework?: string | null;

		/** Optional. The snapshot of the boot disk of this notebook instance before upgrade. */
		snapshot?: string | null;

		/** Output only. The state of this instance upgrade history entry. */
		state?: UpgradeHistoryEntryState | null;

		/** Optional. Target VM Version, like m63. */
		targetVersion?: string | null;

		/** Optional. The version of the notebook instance before this upgrade. */
		version?: string | null;

		/** Optional. The VM image before this instance upgrade. */
		vmImage?: string | null;
	}

	/** The entry of VM image upgrade history. */
	export interface UpgradeHistoryEntryFormProperties {

		/** Optional. Action. Rolloback or Upgrade. */
		action: FormControl<UpgradeHistoryEntryAction | null | undefined>,

		/** Optional. The container image before this instance upgrade. */
		containerImage: FormControl<string | null | undefined>,

		/** Immutable. The time that this instance upgrade history entry is created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. The framework of this notebook instance. */
		framework: FormControl<string | null | undefined>,

		/** Optional. The snapshot of the boot disk of this notebook instance before upgrade. */
		snapshot: FormControl<string | null | undefined>,

		/** Output only. The state of this instance upgrade history entry. */
		state: FormControl<UpgradeHistoryEntryState | null | undefined>,

		/** Optional. Target VM Version, like m63. */
		targetVersion: FormControl<string | null | undefined>,

		/** Optional. The version of the notebook instance before this upgrade. */
		version: FormControl<string | null | undefined>,

		/** Optional. The VM image before this instance upgrade. */
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
			targetVersion: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			vmImage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpgradeHistoryEntryAction { ACTION_UNSPECIFIED = 'ACTION_UNSPECIFIED', UPGRADE = 'UPGRADE', ROLLBACK = 'ROLLBACK' }

	export enum UpgradeHistoryEntryState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', STARTED = 'STARTED', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }


	/** Response for listing notebook instances. */
	export interface ListInstancesResponse {

		/** A list of returned instances. */
		instances?: Array<Instance>;

		/** Page token that can be used to continue listing from the last result in the next list call. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. For example, ['us-west1-a', 'us-central1-b']. A ListInstancesResponse will only contain either instances or unreachables, */
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

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request for notebook instances to report information to Notebooks API. */
	export interface ReportInstanceInfoSystemRequest {

		/** The definition of an Event for a managed / semi-managed notebook instance. */
		event?: Event;

		/** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
		vmId?: string | null;
	}

	/** Request for notebook instances to report information to Notebooks API. */
	export interface ReportInstanceInfoSystemRequestFormProperties {

		/** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
		vmId: FormControl<string | null | undefined>,
	}
	export function CreateReportInstanceInfoSystemRequestFormGroup() {
		return new FormGroup<ReportInstanceInfoSystemRequestFormProperties>({
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


	/** Request for rollbacking a notebook instance */
	export interface RollbackInstanceRequest {

		/** Required. Output only. Revision Id */
		revisionId?: string | null;

		/** Required. The snapshot for rollback. Example: "projects/test-project/global/snapshots/krwlzipynril". */
		targetSnapshot?: string | null;
	}

	/** Request for rollbacking a notebook instance */
	export interface RollbackInstanceRequestFormProperties {

		/** Required. Output only. Revision Id */
		revisionId: FormControl<string | null | undefined>,

		/** Required. The snapshot for rollback. Example: "projects/test-project/global/snapshots/krwlzipynril". */
		targetSnapshot: FormControl<string | null | undefined>,
	}
	export function CreateRollbackInstanceRequestFormGroup() {
		return new FormGroup<RollbackInstanceRequestFormProperties>({
			revisionId: new FormControl<string | null | undefined>(undefined),
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


	/** Request for upgrading a notebook instance */
	export interface UpgradeInstanceRequest {
	}

	/** Request for upgrading a notebook instance */
	export interface UpgradeInstanceRequestFormProperties {
	}
	export function CreateUpgradeInstanceRequestFormGroup() {
		return new FormGroup<UpgradeInstanceRequestFormProperties>({
		});

	}


	/** Request for upgrading a notebook instance from within the VM */
	export interface UpgradeInstanceSystemRequest {

		/** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
		vmId?: string | null;
	}

	/** Request for upgrading a notebook instance from within the VM */
	export interface UpgradeInstanceSystemRequestFormProperties {

		/** Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity */
		vmId: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeInstanceSystemRequestFormGroup() {
		return new FormGroup<UpgradeInstanceSystemRequestFormProperties>({
			vmId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v2/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @param {string} requestId Optional. Idempotent request UUID.
		 * @return {Empty} Successful response
		 */
		Notebooks_projects_locations_operations_delete(name: string, requestId: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v2/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * UpdateInstance updates an Instance.
		 * Patch v2/{name}
		 * @param {string} name Output only. The name of this notebook instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @param {string} requestId Optional. Idempotent request UUID.
		 * @param {string} updateMask Required. Mask used to update an instance
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_patch(name: string, requestId: string | null | undefined, updateMask: string | null | undefined, requestBody: Instance): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets general backend configurations that might also affect the frontend. Location is required by CCFE. Although we could bypass it to send location- less request directly to the backend job, we would need CPE (go/cloud-cpe). Having the location might also be useful depending on the query.
		 * Get v2/{name}/instances:getConfig
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}`
		 * @return {Config} Successful response
		 */
		Notebooks_projects_locations_instances_getConfig(name: string): Observable<Config> {
			return this.http.get<Config>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/instances:getConfig', {});
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v2/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Notebooks_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v2/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Notebooks_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v2/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Notebooks_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a Diagnostic File and runs Diagnostic Tool given an Instance.
		 * Post v2/{name}:diagnose
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_diagnose(name: string, requestBody: DiagnoseInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':diagnose', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.
		 * Post v2/{name}:reportInfoSystem
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_reportInfoSystem(name: string, requestBody: ReportInstanceInfoSystemRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':reportInfoSystem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resets a notebook instance.
		 * Post v2/{name}:reset
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_reset(name: string, requestBody: ResetInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':reset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rollbacks a notebook instance to the previous version.
		 * Post v2/{name}:rollback
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_rollback(name: string, requestBody: RollbackInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':rollback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a notebook instance.
		 * Post v2/{name}:start
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_start(name: string, requestBody: StartInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a notebook instance.
		 * Post v2/{name}:stop
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_stop(name: string, requestBody: StopInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Upgrades a notebook instance to the latest version.
		 * Post v2/{name}:upgrade
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_upgrade(name: string, requestBody: UpgradeInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':upgrade', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows notebook instances to upgrade themselves. Do not use this method directly.
		 * Post v2/{name}:upgradeSystem
		 * @param {string} name Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_upgradeSystem(name: string, requestBody: UpgradeInstanceSystemRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':upgradeSystem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks whether a notebook instance is upgradable.
		 * Get v2/{notebookInstance}:checkUpgradability
		 * @param {string} notebookInstance Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
		 * @return {CheckInstanceUpgradabilityResponse} Successful response
		 */
		Notebooks_projects_locations_instances_checkUpgradability(notebookInstance: string): Observable<CheckInstanceUpgradabilityResponse> {
			return this.http.get<CheckInstanceUpgradabilityResponse>(this.baseUri + 'v2/' + (notebookInstance == null ? '' : encodeURIComponent(notebookInstance)) + ':checkUpgradability', {});
		}

		/**
		 * Lists instances in a given project and location.
		 * Get v2/{parent}/instances
		 * @param {string} parent Required. Format: `parent=projects/{project_id}/locations/{location}`
		 * @param {string} filter Optional. List filter.
		 * @param {string} orderBy Optional. Sort results. Supported values are "name", "name desc" or "" (unsorted).
		 * @param {number} pageSize Optional. Maximum return size of the list call.
		 * @param {string} pageToken Optional. A previous returned page token that can be used to continue listing from the last result.
		 * @return {ListInstancesResponse} Successful response
		 */
		Notebooks_projects_locations_instances_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInstancesResponse> {
			return this.http.get<ListInstancesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Instance in a given project and location.
		 * Post v2/{parent}/instances
		 * @param {string} parent Required. Format: `parent=projects/{project_id}/locations/{location}`
		 * @param {string} instanceId Required. User-defined unique ID of this instance.
		 * @param {string} requestId Optional. Idempotent request UUID.
		 * @return {Operation} Successful response
		 */
		Notebooks_projects_locations_instances_create(parent: string, instanceId: string | null | undefined, requestId: string | null | undefined, requestBody: Instance): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&instanceId=' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v2/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Notebooks_projects_locations_instances_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v2/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Notebooks_projects_locations_instances_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v2/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Notebooks_projects_locations_instances_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

